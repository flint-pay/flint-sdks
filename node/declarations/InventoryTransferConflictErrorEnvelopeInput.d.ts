
import type { ErrorObjectInput } from './ErrorObjectInput.js';
import type { InventoryTransferActionConflictErrorObjectInput } from './InventoryTransferActionConflictErrorObjectInput.js';

export type InventoryTransferConflictErrorEnvelopeInput = (({ "error": InventoryTransferActionConflictErrorObjectInput; }) | (({ "error": ErrorObjectInput; }) & ({ "error": { "code"?: (string); }; })));
