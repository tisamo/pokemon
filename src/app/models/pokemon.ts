export interface Pokemon{
  name: string;
  types: string[];
  sprites: string[];
  selectedSpriteIndex: number;
  isCached: boolean;
  height: number;
  weight: number;
  abilites: string[];
}
