[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantInventoryAvailability

Stock availability of a variant for one order line, computed when the variant is read.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: `int64`. minimum: `0`. maximum: `9999`. |
| `inventory_routing_source` | Required | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) or null | The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. `inventory_routing_source`: [declared alternatives](../models/ProductVariantInventoryAvailability.md#productvariantinventoryavailabilityinventory_routing_source). |
| `status` | Required | string | Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`. |

### ProductVariantInventoryAvailability.inventory_routing_source

The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set.

Field definitions: [shared fields](InventorySettings.md#inventorysettingsdefault_routing_source).

### ProductVariantInventoryAvailability.inventory_routing_source variant 1

anyOf InventoryRoutingSource: Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision..

- Required: `type`.
- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`.

### ProductVariantInventoryAvailability.inventory_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. 

