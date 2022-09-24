import { PlayerRoleEnum } from '@/components/ui/Player/types';

export enum GameTypeEnum {
  TIC_TAC_TOE = 'tic tac toe',
  FOUR_IN_A_ROW = '4-in-a-row',
}

export type MatchType = {
  winner: PlayerRoleEnum;
  timestamp: number;
};

export enum BoardSizeEnum {
  THREE_4_THREE = '3',
  FIVE_4_FIVE = '5',
  SEVEN_4_SEVEN = '7',
}

export enum TotalMatchesEnum {
  DEATHMATCH = '1',
  NORMAL = '3',
  LONG = '5',
}

export enum GameModeEnum {
  PVE = 'pve',
  PVP = 'pvp',
}
