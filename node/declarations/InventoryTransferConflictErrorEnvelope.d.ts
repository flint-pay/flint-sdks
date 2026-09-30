
import type { ErrorObject } from './ErrorObject.js';
import type { InventoryTransferActionConflictErrorObject } from './InventoryTransferActionConflictErrorObject.js';

export type InventoryTransferConflictErrorEnvelope = (({ "error": InventoryTransferActionConflictErrorObject; }) | (({ "error": ErrorObject; }) & ({ "error": { "code"?: (string); }; })) | (unknown));
