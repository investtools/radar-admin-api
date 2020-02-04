// package: 
// file: radar-admin.proto

import * as radar_admin_pb from "./radar-admin_pb";
import {grpc} from "@improbable-eng/grpc-web";

type Adminquery = {
  readonly methodName: string;
  readonly service: typeof Admin;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof radar_admin_pb.Query;
  readonly responseType: typeof radar_admin_pb.QueryResponse;
};

export class Admin {
  static readonly serviceName: string;
  static readonly query: Adminquery;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AdminClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  query(
    requestMessage: radar_admin_pb.Query,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: radar_admin_pb.QueryResponse|null) => void
  ): UnaryResponse;
  query(
    requestMessage: radar_admin_pb.Query,
    callback: (error: ServiceError|null, responseMessage: radar_admin_pb.QueryResponse|null) => void
  ): UnaryResponse;
}

