[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventorySettings







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `low_stock_threshold` | Optional | integer | Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: `int32`. |
| `origin_policies` | Optional | Map of [InventoryOriginPolicy](../models/InventoryOriginPolicy.md#inventoryoriginpolicy) | Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. `origin_policies{}`: [field definitions](../models/InventorySettings.md#inventorysettings-variant-1origin_policies), [field definitions](../models/InventorySettings.md#inventorysettings-variant-2origin_policies). |

### InventorySettings variant 1

anyOf variant 1: Declared schema InventorySettings. Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source..

No additional constraints.

### InventorySettings variant 2

anyOf variant 2: Declared schema InventorySettingsRequest. Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source..

No additional constraints.

### InventorySettings variant 1.origin_policies{}

How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.

Field definitions: [shared fields](InventoryOriginPolicy.md#inventoryoriginpolicy).

### InventorySettings variant 2.origin_policies{}

How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.

Field definitions: [shared fields](InventoryOriginPolicy.md#inventoryoriginpolicy).

