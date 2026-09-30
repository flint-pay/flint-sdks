
import type { InventoryOriginPolicy } from './InventoryOriginPolicy.js';

export type InventorySettings = { /** Format: int32. */ "low_stock_threshold"?: number; /** Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. */ "origin_policies"?: Record<string, InventoryOriginPolicy>; };
