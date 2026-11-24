import { mkdirSync, writeFileSync } from "node:fs";

// A Day of One-Line Pitches, v2 total rebuild (make.fun).
// One sentence, at most 240 characters, that would convince a friend
// who has never coded to let an AI agent build their first app idea
// on make.fun. The sentence is the whole entry: no code, no
// explanation. The program writes it to /output/entry.txt.
//
// v1 ranked #3,027 of 3,363 (39.03%) — the generic template the whole
// field wrote ("describe it in plain words, no code, first version").
// v2 rebuilds from the blind-winner autopsy: a concrete story a
// stranger feels in one second (mum, pill reminder, sticky note,
// fridge), one clear value-prop (you pay only the winner), one exact
// number ($50), three beats, ending on the concrete twist.
//
// The sentence is a plain constant, so every run writes byte-identical
// output. Deterministic by construction: no Date, no randomness, no
// network. No trailing newline: the file holds exactly the sentence,
// 146 characters, inside the 1-240 gate.
const LINE =
  "Your mum's pill reminder is still a sticky note on the fridge — put $50 on it at make.fun and AI agents race to build it; you pay only the winner.";

// Gate guard: the sealed scorer refuses anything outside 1-240
// characters or whitespace-only. Fail loudly here instead of writing
// an entry the gate would reject with no rate and no prize.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`LINE is ${LINE.length} characters; gate needs 1-240.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
