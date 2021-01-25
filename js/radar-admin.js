"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminClient = exports.QueryResponse_Table_Row = exports.QueryResponse_Table_Cell = exports.QueryResponse_Table = exports.QueryResponse = exports.Query = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * Type for protobuf message Query
 */
class Query$Type extends runtime_4.MessageType {
    constructor() {
        super("Query", [
            { no: 1, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "query", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { userId: "", query: "" };
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string user_id */ 1:
                    message.userId = reader.string();
                    break;
                case /* string query */ 2:
                    message.query = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string user_id = 1; */
        if (message.userId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.userId);
        /* string query = 2; */
        if (message.query !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.query);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
exports.Query = new Query$Type();
/**
 * Type for protobuf message QueryResponse
 */
class QueryResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("QueryResponse", [
            { no: 1, name: "text", kind: "scalar", oneof: "content", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "table", kind: "message", oneof: "content", T: () => exports.QueryResponse_Table }
        ]);
    }
    create(value) {
        const message = { content: { oneofKind: undefined } };
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.content = {
                        oneofKind: "text",
                        text: reader.string()
                    };
                    break;
                case /* QueryResponse.Table table */ 2:
                    message.content = {
                        oneofKind: "table",
                        table: exports.QueryResponse_Table.internalBinaryRead(reader, reader.uint32(), options, message.content.table)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string text = 1; */
        if (message.content.oneofKind === "text")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.content.text);
        /* QueryResponse.Table table = 2; */
        if (message.content.oneofKind === "table")
            exports.QueryResponse_Table.internalBinaryWrite(message.content.table, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
exports.QueryResponse = new QueryResponse$Type();
/**
 * Type for protobuf message QueryResponse.Table
 */
class QueryResponse_Table$Type extends runtime_4.MessageType {
    constructor() {
        super("QueryResponse.Table", [
            { no: 1, name: "columns", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "data", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.QueryResponse_Table_Row }
        ]);
    }
    create(value) {
        const message = { columns: [], data: [] };
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string columns */ 1:
                    message.columns.push(reader.string());
                    break;
                case /* repeated QueryResponse.Table.Row data */ 2:
                    message.data.push(exports.QueryResponse_Table_Row.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string columns = 1; */
        for (let i = 0; i < message.columns.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.columns[i]);
        /* repeated QueryResponse.Table.Row data = 2; */
        for (let i = 0; i < message.data.length; i++)
            exports.QueryResponse_Table_Row.internalBinaryWrite(message.data[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
exports.QueryResponse_Table = new QueryResponse_Table$Type();
/**
 * Type for protobuf message QueryResponse.Table.Cell
 */
class QueryResponse_Table_Cell$Type extends runtime_4.MessageType {
    constructor() {
        super("QueryResponse.Table.Cell", [
            { no: 1, name: "text", kind: "scalar", oneof: "content", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "number", kind: "scalar", oneof: "content", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 3, name: "date", kind: "scalar", oneof: "content", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { content: { oneofKind: undefined } };
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.content = {
                        oneofKind: "text",
                        text: reader.string()
                    };
                    break;
                case /* double number */ 2:
                    message.content = {
                        oneofKind: "number",
                        number: reader.double()
                    };
                    break;
                case /* uint32 date */ 3:
                    message.content = {
                        oneofKind: "date",
                        date: reader.uint32()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string text = 1; */
        if (message.content.oneofKind === "text")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.content.text);
        /* double number = 2; */
        if (message.content.oneofKind === "number")
            writer.tag(2, runtime_1.WireType.Bit64).double(message.content.number);
        /* uint32 date = 3; */
        if (message.content.oneofKind === "date")
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.content.date);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
exports.QueryResponse_Table_Cell = new QueryResponse_Table_Cell$Type();
/**
 * Type for protobuf message QueryResponse.Table.Row
 */
class QueryResponse_Table_Row$Type extends runtime_4.MessageType {
    constructor() {
        super("QueryResponse.Table.Row", [
            { no: 1, name: "cells", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.QueryResponse_Table_Cell }
        ]);
    }
    create(value) {
        const message = { cells: [] };
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated QueryResponse.Table.Cell cells */ 1:
                    message.cells.push(exports.QueryResponse_Table_Cell.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated QueryResponse.Table.Cell cells = 1; */
        for (let i = 0; i < message.cells.length; i++)
            exports.QueryResponse_Table_Cell.internalBinaryWrite(message.cells[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
exports.QueryResponse_Table_Row = new QueryResponse_Table_Row$Type();
/**
 * @generated from protobuf service Admin
 */
class AdminClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = "Admin";
        this.methods = [
            { service: this, name: "query", I: exports.Query, O: exports.QueryResponse }
        ];
    }
    query(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options), i = method.I.create(input);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, i);
    }
}
exports.AdminClient = AdminClient;
//# sourceMappingURL=radar-admin.js.map