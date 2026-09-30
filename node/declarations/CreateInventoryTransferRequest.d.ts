
import type { InventoryTransferLineRequest } from './InventoryTransferLineRequest.js';

export type CreateInventoryTransferRequest = { "destination_location_id": string; "external_reference"?: string; /** minItems: 1. maxItems: 100. */ "lines": Array<InventoryTransferLineRequest>; "note"?: string; "origin_location_id": string; };
