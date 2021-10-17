import type { Mods } from '../../base/types';

export const serializeBeatmapId = (beatmapId: number): string => {
   return String(beatmapId);
};

export const serializeAccuracy = (accuracy: number): string => {
   return `-a:${accuracy}`;
};

export const serializeCombo = (combo: number): string => {
   return `-c:${combo}`;
};

export const serializeMods = (mods: Mods): string => {
   const serializedMods = mods.map((mod) => `-m:${mod}`);
   return serializedMods.join(' ');
};

export const serializeGoods = (goods: number): string => {
   return `-G:${goods}`;
};

export const serializeMehs = (mehs: number): string => {
   return `-M:${mehs}`;
};

export const serializeMisses = (misses: number): string => {
   return `-X:${misses}`;
};

export const serializeScore = (score: number): string => {
   return `-s:${score}`;
};

export const serializeDroplets = (droplets: number): string => {
   return `-D:${droplets}`;
};

export const serializeTinyDroplets = (tinyDroplets: number): string => {
   return `-T:${tinyDroplets}`;
};

export const serializeUserId = (userId: number): string => {
   return String(userId);
};

export const serializeRuleset = (ruleset: number): string => {
   return `-r:${ruleset}`;
};
