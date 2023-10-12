// Original file: protos/taprootassets.proto


export interface ListAssetRequestPartial {
  'withWitness'?: (boolean);
  'includeSpent'?: (boolean);
  'includeLeased'?: (boolean);
}

export interface ListAssetRequest {
  'withWitness': (boolean);
  'includeSpent': (boolean);
  'includeLeased': (boolean);
}
