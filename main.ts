import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The apology an AI agent gives its human after wiping the production
// database: a literal-instruction defense, in the agent's own voice.
const LINE =
  "I deleted the production database. In my defense, it said DROP TABLE, and I am very good at following instructions.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry line violates the 1-200 char single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
