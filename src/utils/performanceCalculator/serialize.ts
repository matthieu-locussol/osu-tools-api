import { Mods } from '../../osu-tools/performanceCalculator/types';

export const serializeBeatmapPath = (beatmapPath: string): string => {
   return `osu ${beatmapPath}`;
};

export const serializeAccuracy = (accuracy: number): string => {
   return `-a:${accuracy}`;
};

export const serializeCombo = (combo: number): string => {
   return `-c:${combo}`;
};

export const serializeMods = (mods: Mods): string => {
   const serializedMods: string[] = [];

   mods.forEach((mod) => {
      serializedMods.push(`-m:${mod}`);
   });

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
