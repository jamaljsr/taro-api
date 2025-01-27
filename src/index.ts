import { AssetWalletApi } from './assetWalletApi';
import { ChannelsApi } from './channelsApi';
import { MintApi } from './mintApi';
import { RfqApi } from './rfqApi';
import { TaprootAssetsApi } from './taprootAssetsApi';
import { UniverseApi } from './universeApi';

/**
 * @TapdClientOptions interface
 */

export interface TapdClientOptions {
  /**
   * @socket tapd's host and port in `host:port` format.
   */

  socket: string;

  /**
   * @macaroon tapd's macaroon in HEX format.
   */

  macaroon: string;

  /**
   * @cert tapd's TLS certificate in HEX format.
   */

  cert: string;
}

/**
 * @TaprootAssetsRpcApis The tapd RPC APIs.
 */
export interface TapdRpcApis {
  taprootAssets: TaprootAssetsApi;
  mint: MintApi;
  assetWallet: AssetWalletApi;
  rfq: RfqApi;
  universe: UniverseApi;
  channels: ChannelsApi;
}

export class TapClient {
  /**
   * @create Create instances of all tapd RPC APIs.
   */

  static create(options: TapdClientOptions): TapdRpcApis {
    return {
      taprootAssets: TaprootAssetsApi.create(options),
      mint: MintApi.create(options),
      assetWallet: AssetWalletApi.create(options),
      rfq: RfqApi.create(options),
      universe: UniverseApi.create(options),
      channels: ChannelsApi.create(options),
    };
  }
}

export {
  TaprootAssetsApi,
  MintApi,
  AssetWalletApi,
  RfqApi,
  UniverseApi,
  ChannelsApi,
};
export * from './types';
