[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventorySettings

Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `low_stock_threshold` | Optional | integer | Format: `int32`. |
| `origin_policies` | Optional | Map of [InventoryOriginPolicy](../models/InventoryOriginPolicy.md#inventoryoriginpolicy) | Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. |

