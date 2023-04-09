export interface IItem {
  id: string;
  beTitle: string;
  ltnTitle: string;
  enTitle: string;
  imagePath: string;
  soundPath: string;
  category: string;
}

export interface IItemDescription {
  id: number;
  beTitle: string;
  ltnTitle: string;
  enTitle: string;
  imagePath: string;
  category: string;
  addedAt: string;
  description: string;
  additional: string[];
  examples: string[];
}
