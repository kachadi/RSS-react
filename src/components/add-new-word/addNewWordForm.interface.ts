export interface IAddNewWordFormInputs {
  enWord: string;
  beWord: string;
  ltnWord: string;
  date: string;
  category: string;
  image: Blob[] | MediaSource[];
  consent: boolean;
  newsletter: boolean;
}
