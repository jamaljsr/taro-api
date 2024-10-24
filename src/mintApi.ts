import { ClientReadableStream } from '@grpc/grpc-js';
import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  CancelBatchRequestPartial,
  CancelBatchResponse,
  FinalizeBatchRequestPartial,
  FinalizeBatchResponse,
  ListBatchRequestPartial,
  ListBatchResponse,
  MintAssetRequestPartial,
  MintAssetResponse,
  MintClient,
  MintEvent,
  SubscribeMintEventsRequestPartial,
} from './types';
import { ProtoGrpcType } from './types/mint';

/**
 * @MintApi API interface for tapd's Mint RPC sub-server.
 */

export class MintApi {
  /**
   * @create Create a new MintApi instance.
   */

  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'mintrpc/mint.proto',
      options
    );

    return new MintApi(
      new proto.mintrpc.Mint(options.socket, credentials, params)
    );
  }

  /**
   * @client The grpc client to contact daemon.
   */

  client: MintClient;

  constructor(client: MintClient) {
    this.client = client;
  }

  /**
   * @mintAsset will attempt to mint the set of assets (async by default to
   * ensure proper batching) specified in the request. The pending batch is
   * returned that shows the other pending assets that are part of the next
   * batch. This call will block until the operation succeeds (asset is staged
   * in the batch) or fails.
   */
  async mintAsset(
    request: MintAssetRequestPartial = {}
  ): Promise<MintAssetResponse> {
    return promisify(this.client.MintAsset.bind(this.client))(request);
  }

  /**
   * @finalizeBatch FinalizeBatch will attempt to finalize the current pending batch.
   */
  async finalizeBatch(
    request: FinalizeBatchRequestPartial = {}
  ): Promise<FinalizeBatchResponse> {
    return promisify(this.client.FinalizeBatch.bind(this.client))(request);
  }

  /**
   * @cancelBatch CancelBatch will attempt to cancel the current pending batch.
   */
  async cancelBatch(
    request: CancelBatchRequestPartial = {}
  ): Promise<CancelBatchResponse> {
    return promisify(this.client.CancelBatch.bind(this.client))(request);
  }

  /**
   * @listBatches ListBatches will attempt to cancel the current pending batch.
   */
  async listBatches(
    request: ListBatchRequestPartial = {}
  ): Promise<ListBatchResponse> {
    return promisify(this.client.ListBatches.bind(this.client))(request);
  }

  /**
   * @subscribeMintEvents allows a caller to subscribe to mint events for asset
   * creation batches.
   */
  subscribeMintEvents(
    request: SubscribeMintEventsRequestPartial = {}
  ): ClientReadableStream<MintEvent> {
    return this.client.SubscribeMintEvents(request);
  }
}
