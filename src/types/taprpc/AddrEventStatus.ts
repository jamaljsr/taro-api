// Original file: protos/taprootassets.proto

export enum AddrEventStatus {
  ADDR_EVENT_STATUS_UNKNOWN = 0,
  ADDR_EVENT_STATUS_TRANSACTION_DETECTED = 1,
  ADDR_EVENT_STATUS_TRANSACTION_CONFIRMED = 2,
  ADDR_EVENT_STATUS_PROOF_RECEIVED = 3,
  ADDR_EVENT_STATUS_COMPLETED = 4,
}