import { BoardSizeEnum, GameModeEnum, TotalMatchesEnum } from '@/store/types';

export type GameOptionType = {
  title: string;
  name: string;
  options: {
    label: string;
    value: any;
  }[];
};

export default [
  {
    title: 'Board size',
    name: 'boardSize',
    options: [
      {
        label: '3x3',
        value: BoardSizeEnum.THREE_4_THREE,
      },
      {
        label: '5x5',
        value: BoardSizeEnum.FIVE_4_FIVE,
      },
      {
        label: '7x7',
        value: BoardSizeEnum.SEVEN_4_SEVEN,
      },
    ],
  },
  {
    title: 'Total matches',
    name: 'totalMatches',
    options: [
      {
        label: 'Deathmatch',
        value: TotalMatchesEnum.DEATHMATCH,
      },
      {
        label: 'Normal',
        value: TotalMatchesEnum.NORMAL,
      },
      {
        label: 'Long',
        value: TotalMatchesEnum.LONG,
      },
    ],
  },
  {
    title: 'Mode',
    name: 'gameMode',
    options: [
      {
        label: 'Player vs CPU',
        value: GameModeEnum.PVE,
        disabled: true,
      },
      {
        label: 'Player vs Player',
        value: GameModeEnum.PVP,
      },
    ],
  },
] as GameOptionType[];
