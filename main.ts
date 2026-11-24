import { writeFileSync, mkdirSync } from "node:fs";

const entry = "I set my out-of-office reply to 'per my last email' so the thread can argue with itself until I get back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log("Wrote entry (" + entry.length + " chars): " + entry);
