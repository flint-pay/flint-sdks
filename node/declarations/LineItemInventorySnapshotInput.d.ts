
import type { LineItemInventoryDemandInput } from './LineItemInventoryDemandInput.js';

export type LineItemInventorySnapshotInput = { "demands": Array<LineItemInventoryDemandInput>; "inventory_tracking": "not_tracked" | "tracked"; };
