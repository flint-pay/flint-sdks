
import type { InventoryTransferLineRequestInput } from './InventoryTransferLineRequestInput.js';

export type CreateInventoryTransferRequestInput = { "destination_location_id": string; "external_reference"?: string; /** minItems: 1. maxItems: 100. */ "lines": Array<InventoryTransferLineRequestInput>; "note"?: string; "origin_location_id": string; };
