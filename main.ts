import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Moon finally answers back: one line, 1-240 chars, written to /output/entry.txt.
const entry = "I heard every wish, every howl, every 2 a.m. promise — after four billion years, my answer is still no, and I'm keeping the lottery numbers.";

const outPath = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(entry);
