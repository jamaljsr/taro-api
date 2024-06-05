// Original file: protos/mint.proto

import type { AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';
import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';
import type { Long } from '@grpc/proto-loader';

export interface PendingAssetPartial {
  'assetVersion'?: (_taprpc_AssetVersion | keyof typeof _taprpc_AssetVersion);
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
  'name'?: (string);
  'assetMeta'?: (_taprpc_AssetMetaPartial | null);
  'amount'?: (number | string | Long);
  'newGroupedAsset'?: (boolean);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupAnchor'?: (string);
  'groupInternalKey'?: (_taprpc_KeyDescriptorPartial | null);
  'groupTapscriptRoot'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
}

export interface PendingAsset {
  'assetVersion': (keyof typeof _taprpc_AssetVersion);
  'assetType': (keyof typeof _taprpc_AssetType);
  'name': (string);
  'assetMeta': (_taprpc_AssetMeta | null);
  'amount': (string);
  'newGroupedAsset': (boolean);
  'groupKey': (Buffer);
  'groupAnchor': (string);
  'groupInternalKey': (_taprpc_KeyDescriptor | null);
  'groupTapscriptRoot': (Buffer);
  'scriptKey': (_taprpc_ScriptKey | null);
}
