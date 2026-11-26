// Entry for the make.fun bounty "Post the Meme, Win the Feed" (Node 22,
// standard library only). The entry is the X post itself: this program only
// hands the post's address to the grader by copying POST.json from the
// repository root into the output directory. Nothing it writes about the
// post is scored.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFile = "POST.json";
mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(repoRoot, postFile), join(outDir, postFile));
} catch (error) {
  console.error(`Could not copy ${postFile} from ${repoRoot}: ${(error as Error).message}`);
  process.exit(1);
}
