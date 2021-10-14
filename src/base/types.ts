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

export type SimulatePayload = {
   beatmapId: number;
   accuracy?: number;
   combo?: number;
   mods?: Mods;
   goods?: number;
   mehs?: number;
   misses?: number;
};

export type SimulateResult = {
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
