[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantInventoryAvailabilityPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is excluded. The quantity includes backorders that shipping checkout can accept. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. `available_quantity`: [declared alternatives](../models/ProductVariantInventoryAvailabilityPreviousAttributesInput.md#productvariantinventoryavailabilitypreviousattributesinputavailable_quantity). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributesInput](../models/InventoryRoutingSourcePreviousAttributesInput.md#inventoryroutingsourcepreviousattributesinput) or null | The merchant's default routing source or the Location Flint selected when no default is set. For a policy, `inventory_allocation_policy_revision_id` names the revision used. `null` when the variant is untracked or when neither a default nor an eligible Location applies. |
| `status` | Optional | string or null | Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`. `status`: [declared alternatives](../models/ProductVariantInventoryAvailabilityPreviousAttributesInput.md#productvariantinventoryavailabilitypreviousattributesinputstatus). |

### ProductVariantInventoryAvailabilityPreviousAttributesInput.available_quantity

### ProductVariantInventoryAvailabilityPreviousAttributesInput.available_quantity variant 1

anyOf variant 1: The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is excluded. The quantity includes backorders that shipping checkout can accept. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`..

- Value shape: integer. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is excluded. The quantity includes backorders that shipping checkout can accept. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is excluded. The quantity includes backorders that shipping checkout can accept. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: `int64`. minimum: `0`. maximum: `9999`. 

### ProductVariantInventoryAvailabilityPreviousAttributesInput.available_quantity variant 2

anyOf variant 2.

- Value shape: null. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is excluded. The quantity includes backorders that shipping checkout can accept. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. 

### ProductVariantInventoryAvailabilityPreviousAttributesInput.status

### ProductVariantInventoryAvailabilityPreviousAttributesInput.status variant 1

anyOf variant 1: Whether one order line can buy the variant now..

- Value shape: string. Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`.

### ProductVariantInventoryAvailabilityPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether one order line can buy the variant now. 

