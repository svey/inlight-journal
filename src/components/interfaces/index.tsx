export interface EntryI {
  id: number;
  color: string;
  entryDate: string;
}
export interface PropsI {
  [x:string]: any;
}

export type EventT = {
  target: object;
};

export interface ResponseI {
  data: any;
}