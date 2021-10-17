export type Mod =
   | 'AP'
   | 'BR'
   | 'CN'
   | 'CL'
   | 'DC'
   | 'DA'
   | 'DT'
   | 'EZ'
   | 'FL'
   | 'HT'
   | 'HR'
   | 'HD'
   | 'MR'
   | 'MU'
   | 'NC'
   | 'NF'
   | 'NM'
   | 'PF'
   | 'RD'
   | 'RX'
   | 'SD'
   | 'WD'
   | 'WU';

export type Mods = Mod[];

export type SimulateOsuPayload = {
   beatmapId: number;
   accuracy?: number;
   combo?: number;
   mods?: Mods;
   goods?: number;
   mehs?: number;
   misses?: number;
};

export type SimulateOsuResult = {
   Beatmap: string;
   Statistics: {
      Accuracy: number;
      Combo: number;
      Great: number;
      Ok: number;
      Meh: number;
      Miss: number;
   };
   Aim: number;
   Speed: number;
   Accuracy: number;
   Flashlight: number;
   OD: number;
   AR: number;
   'Max Combo': number;
   Mods: string;
   pp: number;
};

export type SimulateTaikoPayload = {
   beatmapId: number;
   accuracy?: number;
   combo?: number;
   mods?: Mods;
   goods?: number;
   misses?: number;
};

export type SimulateTaikoResult = {
   Beatmap: string;
   Statistics: {
      Accuracy: number;
      Combo: number;
      Great: number;
      Ok: number;
      Meh: number;
      Miss: number;
   };
   Strain: number;
   Accuracy: number;
   Flashlight: number;
   Mods: string;
   pp: number;
};

export type SimulateCatchPayload = {
   beatmapId: number;
   accuracy?: number;
   combo?: number;
   mods?: Mods;
   droplets?: number;
   tinyDroplets?: number;
   misses?: number;
};

export type SimulateCatchResult = {
   Beatmap: string;
   Statistics: {
      Accuracy: number;
      Combo: number;
      Great: number;
      LargeTickHit: number;
      SmallTickHit: number;
      SmallTickMiss: number;
      Miss: number;
   };
   Mods: string;
   pp: number;
};

export type SimulateManiaPayload = {
   beatmapId: number;
   score?: number;
   mods?: Mods;
};

export type SimulateManiaResult = {
   Beatmap: string;
   Statistics: {
      Accuracy: number;
      Combo: number;
      Perfect: number;
      Great: number;
      Ok: number;
      Good: number;
      Meh: number;
      Miss: number;
   };
   Strain: number;
   Accuracy: number;
   Mods: string;
   pp: number;
};

export type ProfilePayload = {
   userId: number;
   ruleset?: number;
};

export type ProfileResult = {
   Username: string;
   LivePp: number;
   LocalPp: number;
   PlaycountPp: number;
   Scores: {
      BeatmapId: number;
      BeatmapName: string;
      Combo: number;
      Accuracy: number;
      MissCount: number;
      Mods: Mods;
      LivePp: number;
      LocalPp: number;
      PositionChange: number;
   }[];
};
