// Original file: protos/lightning.proto

import type { FeaturePartial as _lnrpc_FeaturePartial, Feature as _lnrpc_Feature } from '../lnrpc/Feature';
import type { TimestampedErrorPartial as _lnrpc_TimestampedErrorPartial, TimestampedError as _lnrpc_TimestampedError } from '../lnrpc/TimestampedError';
import type { Long } from '@grpc/proto-loader';

// Original file: protos/lightning.proto

export const _lnrpc_Peer_SyncType = {
  UNKNOWN_SYNC: 'UNKNOWN_SYNC',
  ACTIVE_SYNC: 'ACTIVE_SYNC',
  PASSIVE_SYNC: 'PASSIVE_SYNC',
  PINNED_SYNC: 'PINNED_SYNC',
} as const;

export type _lnrpc_Peer_SyncTypePartial =
  | 'UNKNOWN_SYNC'
  | 0
  | 'ACTIVE_SYNC'
  | 1
  | 'PASSIVE_SYNC'
  | 2
  | 'PINNED_SYNC'
  | 3

export type _lnrpc_Peer_SyncType = typeof _lnrpc_Peer_SyncType[keyof typeof _lnrpc_Peer_SyncType]

export interface PeerPartial {
  'pubKey'?: (string);
  'address'?: (string);
  'bytesSent'?: (number | string | Long);
  'bytesRecv'?: (number | string | Long);
  'satSent'?: (number | string | Long);
  'satRecv'?: (number | string | Long);
  'inbound'?: (boolean);
  'pingTime'?: (number | string | Long);
  'syncType'?: (_lnrpc_Peer_SyncTypePartial);
  'features'?: ({[key: number]: _lnrpc_FeaturePartial});
  'errors'?: (_lnrpc_TimestampedErrorPartial)[];
  'flapCount'?: (number);
  'lastFlapNs'?: (number | string | Long);
  'lastPingPayload'?: (Buffer | Uint8Array | string);
}

export interface Peer {
  'pubKey': (string);
  'address': (string);
  'bytesSent': (string);
  'bytesRecv': (string);
  'satSent': (string);
  'satRecv': (string);
  'inbound': (boolean);
  'pingTime': (string);
  'syncType': (_lnrpc_Peer_SyncType);
  'features': ({[key: number]: _lnrpc_Feature});
  'errors': (_lnrpc_TimestampedError)[];
  'flapCount': (number);
  'lastFlapNs': (string);
  'lastPingPayload': (Buffer);
}