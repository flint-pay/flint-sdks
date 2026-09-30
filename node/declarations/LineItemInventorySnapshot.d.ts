
import type { LineItemInventoryDemand } from './LineItemInventoryDemand.js';

export type LineItemInventorySnapshot = { "demands": Array<LineItemInventoryDemand>; "inventory_tracking": "not_tracked" | "tracked" | (string & {}); };
