// package: 
// file: radar-admin.proto

import * as jspb from "google-protobuf";

export class Query extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    userId: string,
    query: string,
  }
}

export class QueryResponse extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  hasTable(): boolean;
  clearTable(): void;
  getTable(): QueryResponse.Table | undefined;
  setTable(value?: QueryResponse.Table): void;

  getContentCase(): QueryResponse.ContentCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryResponse): QueryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryResponse;
  static deserializeBinaryFromReader(message: QueryResponse, reader: jspb.BinaryReader): QueryResponse;
}

export namespace QueryResponse {
  export type AsObject = {
    text: string,
    table?: QueryResponse.Table.AsObject,
  }

  export class Table extends jspb.Message {
    clearColumnsList(): void;
    getColumnsList(): Array<string>;
    setColumnsList(value: Array<string>): void;
    addColumns(value: string, index?: number): string;

    clearDataList(): void;
    getDataList(): Array<QueryResponse.Table.Row>;
    setDataList(value: Array<QueryResponse.Table.Row>): void;
    addData(value?: QueryResponse.Table.Row, index?: number): QueryResponse.Table.Row;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Table.AsObject;
    static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Table;
    static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
  }

  export namespace Table {
    export type AsObject = {
      columnsList: Array<string>,
      dataList: Array<QueryResponse.Table.Row.AsObject>,
    }

    export class Cell extends jspb.Message {
      hasText(): boolean;
      clearText(): void;
      getText(): string;
      setText(value: string): void;

      hasNumber(): boolean;
      clearNumber(): void;
      getNumber(): number;
      setNumber(value: number): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): number;
      setDate(value: number): void;

      getContentCase(): Cell.ContentCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Cell.AsObject;
      static toObject(includeInstance: boolean, msg: Cell): Cell.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Cell, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Cell;
      static deserializeBinaryFromReader(message: Cell, reader: jspb.BinaryReader): Cell;
    }

    export namespace Cell {
      export type AsObject = {
        text: string,
        number: number,
        date: number,
      }

      export enum ContentCase {
        CONTENT_NOT_SET = 0,
        TEXT = 1,
        NUMBER = 2,
        DATE = 3,
      }
    }

    export class Row extends jspb.Message {
      clearCellsList(): void;
      getCellsList(): Array<QueryResponse.Table.Cell>;
      setCellsList(value: Array<QueryResponse.Table.Cell>): void;
      addCells(value?: QueryResponse.Table.Cell, index?: number): QueryResponse.Table.Cell;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Row.AsObject;
      static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Row;
      static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
    }

    export namespace Row {
      export type AsObject = {
        cellsList: Array<QueryResponse.Table.Cell.AsObject>,
      }
    }
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    TEXT = 1,
    TABLE = 2,
  }
}

