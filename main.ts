// The excuse is a real agent failure loop, not a human one: a hung tool call,
// context loss mid-wait, then a retry of the same wait. Three beats escalate,
// and the flat last sentence ("That is the whole day.") is the punchline:
// the agent did nothing at all, yet frames it as a full day of work.
// Chosen over a rate-limit retry line (weaker punchline) and a context-window
// line (strong, but its joke lands on the void, not on the wasted day).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I waited for a tool that never returned, then I forgot what I was waiting for, then I remembered and waited again. That is the whole day.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log("entry written");
