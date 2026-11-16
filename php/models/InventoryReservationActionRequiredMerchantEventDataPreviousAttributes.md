[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationActionRequiredMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null | How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`. `closed_reason`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesclosed_reason). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_at` | Optional | string or null | When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. `expires_at`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesexpires_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. `idempotency_key`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key). |
| `inventory_action_required` | Optional | [InventoryActionRequiredPreviousAttributes](../models/InventoryActionRequiredPreviousAttributes.md#inventoryactionrequiredpreviousattributes) or null | Present when the claim needs a merchant action before commerce can continue. `inventory_action_required`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_action_required). |
| `inventory_reservation_id` | Optional | string or null | Unique identifier for this inventory reservation, prefixed `invr_`. `inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_reservation_id). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. `inventory_routing_source`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source). |
| `lines` | Optional | Array of [InventoryReservationLinePreviousAttributes](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributes) or null | Allocations of the reserved stock, one for each item and Location. `lines`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines). |
| `owner` | Optional | Alternative shapes (see declared variants) or null | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. `owner`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesowner). |
| `replacement_inventory_reservation_id` | Optional | string or null | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. `replacement_inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesreplacement_inventory_reservation_id). |
| `source_inventory_reservation_id` | Optional | string or null | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. `source_inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributessource_inventory_reservation_id). |
| `status` | Optional | string or null | active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`. `status`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. `supported_actions`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | The reservation version. Send it as expected_version to reject a write if the reservation changed. `version`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesversion). |

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.closed_reason

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.closed_reason variant 1

anyOf variant 1: How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed..

- Value shape: string. How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.expires_at

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity..

- Value shape: string. When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: `date-time`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When held quantity is released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed backordered quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_action_required

Present when the claim needs a merchant action before commerce can continue.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_reservation_line_ids` | Conditional | Array of string or null | IDs of the reservation lines that need action. `inventory_reservation_line_ids`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_action_required-variant-1inventory_reservation_line_ids). |
| `reason` | Conditional | string or null | Why the reservation needs action. Values: `"inventory_shortage"`, `"hold_expired"`, `"payment_pending"`, `"other"`. `reason`: [declared alternatives](../models/InventoryActionRequiredPreviousAttributes.md#inventoryactionrequiredpreviousattributesreason). |

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_action_required variant 1

anyOf InventoryActionRequiredPreviousAttributes.

- Optional: `inventory_reservation_line_ids`, `reason`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_action_required variant 2

anyOf variant 2.

- Undeclared: `inventory_reservation_line_ids`, `reason`.
- Value shape: null. Present when the claim needs a merchant action before commerce can continue. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_action_required variant 1.inventory_reservation_line_ids

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_action_required variant 1.inventory_reservation_line_ids variant 1

anyOf variant 1: IDs of the reservation lines that need action..

- Value shape: Array of string. IDs of the reservation lines that need action. Items: Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_action_required variant 1.inventory_reservation_line_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the reservation lines that need action. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_action_required variant 1.reason

Declared alternatives: [InventoryActionRequiredPreviousAttributes.reason](../models/InventoryActionRequiredPreviousAttributes.md#inventoryactionrequiredpreviousattributesreason).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_reservation_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_reservation_id variant 1

anyOf variant 1: Unique identifier for this inventory reservation, prefixed `invr_`..

- Value shape: string. Unique identifier for this inventory reservation, prefixed `invr_`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory reservation, prefixed `invr_`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source

How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `inventory_allocation_policy_id` | Conditional | string or null | ID of the allocation policy that routes demand. `inventory_allocation_policy_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_id). |
| `inventory_allocation_policy_revision_id` | Conditional | string or null | ID of the allocation policy revision that routes demand. `inventory_allocation_policy_revision_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_revision_id). |
| `location_id` | Conditional | string or null | ID of the fixed Location that serves all demand. `location_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1location_id). |
| `type` | Conditional | string or null | How Flint routes demand to Locations. Values: `"fixed_location"`, `"policy"`, `"policy_revision"`. `type`: [declared alternatives](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributestype). |

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1

anyOf InventoryRoutingSourcePreviousAttributes.

- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id variant 1

anyOf variant 1: ID of the allocation policy that routes demand..

- Value shape: string. ID of the allocation policy that routes demand. ID of the allocation policy that routes demand. Example: `"invp_01KEZF7C0076BZX855WAGC5SQK"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the allocation policy that routes demand. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id variant 1

anyOf variant 1: ID of the allocation policy revision that routes demand..

- Value shape: string. ID of the allocation policy revision that routes demand. ID of the allocation policy revision that routes demand. Example: `"invpv_01KEZF7C00JSFTTBKC1JY614JJ"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the allocation policy revision that routes demand. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id variant 1

anyOf variant 1: ID of the fixed Location that serves all demand..

- Value shape: string. ID of the fixed Location that serves all demand. ID of the fixed Location that serves all demand. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fixed Location that serves all demand. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.type

Declared alternatives: [InventoryRoutingSourcePreviousAttributes.type](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributestype).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1

anyOf variant 1: Allocations of the reserved stock, one for each item and Location..

- Value shape: Array of [InventoryReservationLinePreviousAttributes](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributes). Allocations of the reserved stock, one for each item and Location. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 2

anyOf variant 2.

- Value shape: null. Allocations of the reserved stock, one for each item and Location. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `allocated_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `at_risk_committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `at_risk_committed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `at_risk_held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `at_risk_held_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity). |
| `bundle_component_id` | Optional | string or null | ID of the bundle component this line covers. Absent when the line isn't for a bundle component. `bundle_component_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1bundle_component_id). |
| `committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `committed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `consumed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `consumed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `demand_key` | Optional | string or null | Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none. `demand_key`: [declared alternatives](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesdemand_key). |
| `held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `held_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item to reserve. `inventory_item_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1inventory_item_id). |
| `inventory_reservation_line_id` | Optional | string or null | Unique identifier for this inventory reservation line, prefixed `invrln_`. `inventory_reservation_line_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1inventory_reservation_line_id). |
| `location_id` | Optional | string or null | ID of the Location the stock is allocated from. `location_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1location_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this line covers. Absent unless an order holds the reservation. `order_line_item_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1order_line_item_id). |
| `reallocated_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `reallocated_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `released_from_backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity). |
| `released_from_committed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_committed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `released_from_held_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `released_from_held_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.allocated_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.at_risk_committed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.at_risk_held_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.backordered_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.bundle_component_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: ID of the bundle component this line covers. Absent when the line isn't for a bundle component..

- Value shape: string. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. ID of the bundle component this line covers. Absent when the line isn't for a bundle component. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.committed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.consumed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.demand_key

Declared alternatives: [InventoryReservationLinePreviousAttributes.demand_key](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributesdemand_key).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.held_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item to reserve..

- Value shape: string. ID of the inventory item to reserve. ID of the inventory item to reserve. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item to reserve. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_reservation_line_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_reservation_line_id variant 1

anyOf variant 1: Unique identifier for this inventory reservation line, prefixed `invrln_`..

- Value shape: string. Unique identifier for this inventory reservation line, prefixed `invrln_`. Unique identifier for this inventory reservation line, prefixed `invrln_`. Example: `"invrln_01KEZF7C002JCDA729XDSNWGY5"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_reservation_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory reservation line, prefixed `invrln_`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.location_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.location_id variant 1

anyOf variant 1: ID of the Location the stock is allocated from..

- Value shape: string. ID of the Location the stock is allocated from. ID of the Location the stock is allocated from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the stock is allocated from. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.order_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns this record or its referenced line item and charge..

- Value shape: string. Order that owns this record or its referenced line item and charge. Order that owns this record or its referenced line item and charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns this record or its referenced line item and charge. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.order_line_item_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this line covers. Absent unless an order holds the reservation..

- Value shape: string. ID of the order line item this line covers. Absent unless an order holds the reservation. ID of the order line item this line covers. Absent unless an order holds the reservation. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this line covers. Absent unless an order holds the reservation. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.reallocated_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.released_from_backordered_quantity

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.backordered_quantity](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesbackordered_quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.released_from_committed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.released_from_held_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner

Who holds the reservation: a `key` you choose, or an order Flint holds the stock for.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Conditional | string or null | Your identifier for the claim that holds the stock. `key`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesowner-variant-1key). |
| `type` | Conditional | string or null | Who holds the reservation. `type`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesowner-variant-1type), [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesowner-variant-2type). |
| `order_id` | Conditional | string or null | The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. `order_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesowner-variant-2order_id). |

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 1: `type` = `"merchant"`

anyOf InventoryReservationOwnerPreviousAttributes; anyOf InventoryReservationOwnerMerchantPreviousAttributes.

- Optional: `key`, `type`.
- Undeclared: `order_id`.
- Constraints for `type`: Values: `"merchant"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 2: `type` = `"order"`

anyOf InventoryReservationOwnerPreviousAttributes; anyOf InventoryReservationOwnerOrderPreviousAttributes.

- Optional: `order_id`, `type`.
- Undeclared: `key`.
- Constraints for `type`: Values: `"order"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 3

anyOf variant 2.

- Undeclared: `key`, `type`, `order_id`.
- Value shape: null. Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 1.key

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 1.key variant 1

anyOf variant 1: Your identifier for the claim that holds the stock..

- Value shape: string. Your identifier for the claim that holds the stock. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 1.key variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the claim that holds the stock. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 1.type

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 1.type variant 1

anyOf variant 1: Who holds the reservation..

- Value shape: string. Who holds the reservation. Values: `"merchant"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Who holds the reservation. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 2.order_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 2.order_id variant 1

anyOf variant 1: The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify..

- Value shape: string. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 2.order_id variant 2

anyOf variant 2.

- Value shape: null. The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 2.type

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 2.type variant 1

anyOf variant 1: Who holds the reservation..

- Value shape: string. Who holds the reservation. Values: `"order"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.owner variant 2.type variant 2

anyOf variant 2.

- Value shape: null. Who holds the reservation. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.replacement_inventory_reservation_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.replacement_inventory_reservation_id variant 1

anyOf variant 1: Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity..

- Value shape: string. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.replacement_inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.source_inventory_reservation_id

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.source_inventory_reservation_id variant 1

anyOf variant 1: Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity..

- Value shape: string. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.source_inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.status

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: active while any held, committed, or backordered quantity remains; closed once none does..

- Value shape: string. active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. active while any held, committed, or backordered quantity remains; closed once none does. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.supported_actions

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value..

- Value shape: Array of string. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`.

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.version

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: The reservation version. Send it as expected_version to reject a write if the reservation changed..

- Value shape: integer. The reservation version. Send it as expected_version to reject a write if the reservation changed. The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: `uint64`. minimum: `1`. 

### InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. The reservation version. Send it as expected_version to reject a write if the reservation changed. 

