// Path: data/bauta/index.ts
import { bautaProjects1 } from "./bauta_1";
import { bautaProjects2 } from "./bauta_2";

export const bautaProjects = [...bautaProjects1, ...bautaProjects2].sort((a, b) => a.id - b.id);

// Dev-guard: duplicate IDs
if (process.env.NODE_ENV !== "production") {
  const seen = new Set();
    for (const p of bautaProjects) {
        if (seen.has(p.id)) console.warn("[BAUTA] Duplicate project ID:", p.id);
            seen.add(p.id);
              }
              }
