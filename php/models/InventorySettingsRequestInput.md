[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventorySettingsRequestInput

Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `low_stock_threshold` | Optional | integer | Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: `int32`. |
| `origin_policies` | Optional | Map of [InventoryOriginPolicyRequestInput](../models/InventoryOriginPolicyRequestInput.md#inventoryoriginpolicyrequestinput) | Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. |

