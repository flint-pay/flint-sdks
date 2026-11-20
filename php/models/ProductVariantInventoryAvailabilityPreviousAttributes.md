[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantInventoryAvailabilityPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. `available_quantity`: [declared alternatives](../models/ProductVariantInventoryAvailabilityPreviousAttributes.md#productvariantinventoryavailabilitypreviousattributesavailable_quantity). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | The merchant's default routing source or the Location Flint selected when no default is set. For a policy, `inventory_allocation_policy_revision_id` names the revision used. `null` for untracked variants or when no default or single eligible Location applies. `inventory_routing_source`: [declared alternatives](../models/ProductVariantInventoryAvailabilityPreviousAttributes.md#productvariantinventoryavailabilitypreviousattributesinventory_routing_source). |
| `status` | Optional | string or null | Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`. `status`: [declared alternatives](../models/ProductVariantInventoryAvailabilityPreviousAttributes.md#productvariantinventoryavailabilitypreviousattributesstatus). |

### ProductVariantInventoryAvailabilityPreviousAttributes.available_quantity

### ProductVariantInventoryAvailabilityPreviousAttributes.available_quantity variant 1

anyOf variant 1: The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`..

- Value shape: integer. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: `int64`. minimum: `0`. maximum: `9999`. 

### ProductVariantInventoryAvailabilityPreviousAttributes.available_quantity variant 2

anyOf variant 2.

- Value shape: null. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. 

### ProductVariantInventoryAvailabilityPreviousAttributes.inventory_routing_source

The merchant's default routing source or the Location Flint selected when no default is set. For a policy, `inventory_allocation_policy_revision_id` names the revision used. `null` for untracked variants or when no default or single eligible Location applies.

Field definitions: [shared fields](InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source).

### ProductVariantInventoryAvailabilityPreviousAttributes.inventory_routing_source variant 1

anyOf InventoryRoutingSourcePreviousAttributes.

- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.

### ProductVariantInventoryAvailabilityPreviousAttributes.inventory_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. The merchant's default routing source or the Location Flint selected when no default is set. For a policy, `inventory_allocation_policy_revision_id` names the revision used. `null` for untracked variants or when no default or single eligible Location applies. 

### ProductVariantInventoryAvailabilityPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_id).

### ProductVariantInventoryAvailabilityPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_revision_id).

### ProductVariantInventoryAvailabilityPreviousAttributes.inventory_routing_source variant 1.location_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1location_id).

### ProductVariantInventoryAvailabilityPreviousAttributes.inventory_routing_source variant 1.type

Declared alternatives: [InventoryRoutingSourcePreviousAttributes.type](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributestype).

### ProductVariantInventoryAvailabilityPreviousAttributes.status

### ProductVariantInventoryAvailabilityPreviousAttributes.status variant 1

anyOf variant 1: Whether one order line can buy the variant now..

- Value shape: string. Whether one order line can buy the variant now. Values: `"in_stock"`, `"out_of_stock"`, `"not_tracked"`, `"routing_source_required"`.

### ProductVariantInventoryAvailabilityPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether one order line can buy the variant now. 

