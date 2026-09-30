


export type InventoryReservationOwnerInput = { /** Required deadline for the claim. On creation it can be at most 15 minutes out. Format: date-time. */ "expires_at": string | globalThis.Date; /** Your stable identifier for what holds the stock, such as a cart ID. One active reservation per key. */ "key": string; "type"?: "merchant"; };
