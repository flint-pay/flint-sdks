[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventorySettingsInput

Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_routing_source` | Optional | [InventoryRoutingSourceInput](../models/InventoryRoutingSourceInput.md#inventoryroutingsourceinput) or null | Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed Location, an allocation policy, or one policy revision. It applies to orders, line items added to orders, quick pay invoices, payment links, subscription plans, inventory reservations, and delivery previews. The request stores the resolved source on the resource it creates or changes, as if the caller had sent it, so changing or clearing this default never moves routing for existing orders, payment links, plans, or reservations. A source the request sends always wins. `null` when no default is set. Orders, payment links, and subscription plans then use the active Location in the current environment that has had inventory allocation enabled the longest. Links and plans resolve the fallback again when they are used. If no Location is eligible, send a routing source or configure the merchant default. |
| `low_stock_threshold` | Optional | integer | Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: `int32`. minimum: `0`. |
| `origin_policies` | Optional | Map of [InventoryOriginPolicyInput](../models/InventoryOriginPolicyInput.md#inventoryoriginpolicyinput) | Inventory failure handling keyed by order source: checkout, payment_link, shop, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. |

