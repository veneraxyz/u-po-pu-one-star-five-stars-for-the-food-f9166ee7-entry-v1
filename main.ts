import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "One star: your planet flooded my shuttle, charged me for air, and your species keeps arguing with the thermostat — but the street tacos made me miss my home galaxy a little less.";

function validate(text: string): void {
  const lines = text.split("\n");
  if (lines.length !== 1) {
    throw new Error(`entry must be exactly one line, got ${lines.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text.length > 200) {
    throw new Error(`entry is ${text.length} chars, max 200`);
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 32 && ch !== "\t") {
      throw new Error("entry contains a control character");
    }
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
validate(sentence);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, sentence + "\n", "utf8");
const readBack = readFileSync(outPath, "utf8");
if (readBack !== sentence + "\n") {
  throw new Error("read-back mismatch: entry.txt does not match the sentence");
}
validate(readBack.trimEnd());
console.log(`wrote entry.txt (${sentence.length} chars)`);
