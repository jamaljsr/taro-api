// Original file: protos/taprootassets.proto

export const SendState = {
  SEND_STATE_VIRTUAL_INPUT_SELECT: 'SEND_STATE_VIRTUAL_INPUT_SELECT',
  SEND_STATE_VIRTUAL_SIGN: 'SEND_STATE_VIRTUAL_SIGN',
  SEND_STATE_ANCHOR_SIGN: 'SEND_STATE_ANCHOR_SIGN',
  SEND_STATE_LOG_COMMITMENT: 'SEND_STATE_LOG_COMMITMENT',
  SEND_STATE_BROADCAST: 'SEND_STATE_BROADCAST',
  SEND_STATE_WAIT_CONFIRMATION: 'SEND_STATE_WAIT_CONFIRMATION',
  SEND_STATE_STORE_PROOFS: 'SEND_STATE_STORE_PROOFS',
  SEND_STATE_TRANSFER_PROOFS: 'SEND_STATE_TRANSFER_PROOFS',
  SEND_STATE_COMPLETED: 'SEND_STATE_COMPLETED',
} as const;

export type SendStatePartial =
  | 'SEND_STATE_VIRTUAL_INPUT_SELECT'
  | 0
  | 'SEND_STATE_VIRTUAL_SIGN'
  | 1
  | 'SEND_STATE_ANCHOR_SIGN'
  | 2
  | 'SEND_STATE_LOG_COMMITMENT'
  | 3
  | 'SEND_STATE_BROADCAST'
  | 4
  | 'SEND_STATE_WAIT_CONFIRMATION'
  | 5
  | 'SEND_STATE_STORE_PROOFS'
  | 6
  | 'SEND_STATE_TRANSFER_PROOFS'
  | 7
  | 'SEND_STATE_COMPLETED'
  | 8

export type SendState = typeof SendState[keyof typeof SendState]
