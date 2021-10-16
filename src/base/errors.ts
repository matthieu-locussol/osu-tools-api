const ErrorMessages = {
   'osu.Game.Rulesets.UI.BeatmapInvalidForRulesetException':
      'Given beatmap id can not be converted for the ruleset.',
   'PerformanceCalculator.Simulate.SimulateCommand.GetMods':
      'One or more mods are not compatible with the ruleset.',
};

type ErrorType = keyof typeof ErrorMessages;

const UNKNOWN_ERROR = 'An unknown error has occured, please try again.';

export const getStderrError = (stderr: string): string => {
   for (const key of Object.keys(ErrorMessages)) {
      if (stderr.indexOf(key) !== -1) {
         return ErrorMessages[key as ErrorType];
      }
   }

   return UNKNOWN_ERROR;
};
