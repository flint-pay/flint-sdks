[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventorySettingsRequest

Inventory settings to change: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) or null | Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed Location, an allocation policy, or one policy revision. It applies to orders, line items added to orders, quick pay invoices, payment links, subscription plans, inventory reservations, and delivery previews. The request stores the resolved source on the resource it creates or changes, as if the caller had sent it, so changing or clearing this default never moves routing for existing orders, payment links, plans, or reservations. A source the request sends always wins. `null` when no default is set, which means callers must send `inventory_routing_source` on each request with tracked items. Send null to clear it. |
| `low_stock_threshold` | Optional | integer | Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: `int32`. minimum: `0`. |
| `origin_policies` | Optional | Map of [InventoryOriginPolicy](../models/InventoryOriginPolicy.md#inventoryoriginpolicy) | Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. `origin_policies{}`: [field definitions](../models/InventorySettingsRequest.md#inventorysettingsrequestorigin_policies). |

### InventorySettingsRequest.origin_policies{}

How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.

Field definitions: [shared fields](InventoryOriginPolicy.md#inventoryoriginpolicy).

