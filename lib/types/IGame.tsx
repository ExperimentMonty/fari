import { IField } from "./IField";

export interface IGame {
  name: string;
  slug: string;
  rows: Array<IRow>;
}

export interface IColumn {
  col: number | "initial";
  offet?: number;
  field?: IField;
  rows?: Array<IRow>;
}

export interface IRow {
  columns?: Array<IColumn>;
  tab?: string;
}
export interface ISubRow {
  columns?: Array<IColumn>;
  tab?: string;
}
