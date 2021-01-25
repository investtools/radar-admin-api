import { RpcTransport } from "@protobuf-ts/runtime-rpc";
import { MethodInfo } from "@protobuf-ts/runtime-rpc";
import { BinaryWriteOptions } from "@protobuf-ts/runtime";
import { IBinaryWriter } from "@protobuf-ts/runtime";
import { BinaryReadOptions } from "@protobuf-ts/runtime";
import { IBinaryReader } from "@protobuf-ts/runtime";
import { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf message Query
 */
export interface Query {
    /**
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from protobuf field: string query = 2;
     */
    query: string;
}
/**
 * @generated from protobuf message QueryResponse
 */
export interface QueryResponse {
    /**
     * @generated from protobuf oneof: content
     */
    content: {
        oneofKind: "text";
        /**
         * @generated from protobuf field: string text = 1;
         */
        text: string;
    } | {
        oneofKind: "table";
        /**
         * @generated from protobuf field: QueryResponse.Table table = 2;
         */
        table: QueryResponse_Table;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message QueryResponse.Table
 */
export interface QueryResponse_Table {
    /**
     * @generated from protobuf field: repeated string columns = 1;
     */
    columns: string[];
    /**
     * @generated from protobuf field: repeated QueryResponse.Table.Row data = 2;
     */
    data: QueryResponse_Table_Row[];
}
/**
 * @generated from protobuf message QueryResponse.Table.Cell
 */
export interface QueryResponse_Table_Cell {
    /**
     * @generated from protobuf oneof: content
     */
    content: {
        oneofKind: "text";
        /**
         * @generated from protobuf field: string text = 1;
         */
        text: string;
    } | {
        oneofKind: "number";
        /**
         * @generated from protobuf field: double number = 2;
         */
        number: number;
    } | {
        oneofKind: "date";
        /**
         * @generated from protobuf field: uint32 date = 3;
         */
        date: number;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message QueryResponse.Table.Row
 */
export interface QueryResponse_Table_Row {
    /**
     * @generated from protobuf field: repeated QueryResponse.Table.Cell cells = 1;
     */
    cells: QueryResponse_Table_Cell[];
}
/**
 * @generated from protobuf service Admin
 */
export interface IAdminClient {
    /**
     * @generated from protobuf rpc: query(Query) returns (QueryResponse);
     */
    query(input: Query, options?: RpcOptions): UnaryCall<Query, QueryResponse>;
}
/**
 * Type for protobuf message Query
 */
declare class Query$Type extends MessageType<Query> {
    constructor();
    create(value?: PartialMessage<Query>): Query;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Query): Query;
    internalBinaryWrite(message: Query, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
export declare const Query: Query$Type;
/**
 * Type for protobuf message QueryResponse
 */
declare class QueryResponse$Type extends MessageType<QueryResponse> {
    constructor();
    create(value?: PartialMessage<QueryResponse>): QueryResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryResponse): QueryResponse;
    internalBinaryWrite(message: QueryResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
export declare const QueryResponse: QueryResponse$Type;
/**
 * Type for protobuf message QueryResponse.Table
 */
declare class QueryResponse_Table$Type extends MessageType<QueryResponse_Table> {
    constructor();
    create(value?: PartialMessage<QueryResponse_Table>): QueryResponse_Table;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryResponse_Table): QueryResponse_Table;
    internalBinaryWrite(message: QueryResponse_Table, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
export declare const QueryResponse_Table: QueryResponse_Table$Type;
/**
 * Type for protobuf message QueryResponse.Table.Cell
 */
declare class QueryResponse_Table_Cell$Type extends MessageType<QueryResponse_Table_Cell> {
    constructor();
    create(value?: PartialMessage<QueryResponse_Table_Cell>): QueryResponse_Table_Cell;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryResponse_Table_Cell): QueryResponse_Table_Cell;
    internalBinaryWrite(message: QueryResponse_Table_Cell, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
export declare const QueryResponse_Table_Cell: QueryResponse_Table_Cell$Type;
/**
 * Type for protobuf message QueryResponse.Table.Row
 */
declare class QueryResponse_Table_Row$Type extends MessageType<QueryResponse_Table_Row> {
    constructor();
    create(value?: PartialMessage<QueryResponse_Table_Row>): QueryResponse_Table_Row;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryResponse_Table_Row): QueryResponse_Table_Row;
    internalBinaryWrite(message: QueryResponse_Table_Row, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
export declare const QueryResponse_Table_Row: QueryResponse_Table_Row$Type;
/**
 * @generated from protobuf service Admin
 */
export declare class AdminClient implements IAdminClient {
    private readonly _transport;
    readonly typeName = "Admin";
    readonly methods: MethodInfo[];
    constructor(_transport: RpcTransport);
    query(input: Query, options?: RpcOptions): UnaryCall<Query, QueryResponse>;
}
export {};
//# sourceMappingURL=radar-admin.d.ts.map