[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryTransferClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string or null | RFC3339 timestamp. `closed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `closed_reason` | Optional | string or null | How the transfer ended. `null` when the transfer isn't closed. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`, `null`. `closed_reason`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesclosed_reason). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `departed_at` | Optional | string or null | RFC3339 timestamp. `departed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `destination_location_id` | Optional | string or null | ID of the Location the stock goes to. `destination_location_id`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesdestination_location_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. `idempotency_key`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key). |
| `inventory_transfer_id` | Optional | string or null | Unique identifier for this inventory transfer, prefixed `invtr_`. `inventory_transfer_id`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesinventory_transfer_id). |
| `lines` | Optional | Array of [InventoryTransferLinePreviousAttributes](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributes) or null | Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. `lines`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributeslines). |
| `note` | Optional | string or null | Free-text note about the transfer. `note`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesnote). |
| `origin_location_id` | Optional | string or null | ID of the Location the stock leaves. `origin_location_id`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesorigin_location_id). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `status` | Optional | string or null | Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`. `status`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### InventoryTransferClosedMerchantEventDataPreviousAttributes.closed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.closed_reason

### InventoryTransferClosedMerchantEventDataPreviousAttributes.closed_reason variant 1

anyOf variant 1: How the transfer ended. `null` when the transfer isn't closed..

- Value shape: string. How the transfer ended. `null` when the transfer isn't closed. Values: `"received"`, `"canceled"`, `"received_with_cancellation"`, `"returned"`, `"lost"`, `"mixed"`, `null`.

### InventoryTransferClosedMerchantEventDataPreviousAttributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the transfer ended. `null` when the transfer isn't closed. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.departed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.destination_location_id

### InventoryTransferClosedMerchantEventDataPreviousAttributes.destination_location_id variant 1

anyOf variant 1: ID of the Location the stock goes to..

- Value shape: string. ID of the Location the stock goes to. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.destination_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the stock goes to. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesidempotency_key).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.inventory_transfer_id

### InventoryTransferClosedMerchantEventDataPreviousAttributes.inventory_transfer_id variant 1

anyOf variant 1: Unique identifier for this inventory transfer, prefixed `invtr_`..

- Value shape: string. Unique identifier for this inventory transfer, prefixed `invtr_`. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.inventory_transfer_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory transfer, prefixed `invtr_`. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1

anyOf variant 1: Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection..

- Value shape: Array of [InventoryTransferLinePreviousAttributes](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributes). Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 2

anyOf variant 2.

- Value shape: null. Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `condition` | Optional | string or null | Condition of the units being moved. Values: `"sellable"`, `"quality_control"`, `"damaged"`, `"quarantined"`. `condition`: [declared alternatives](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributescondition). |
| `departed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `departed_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item to move. `inventory_item_id`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributeslines-variant-1-fields-1inventory_item_id). |
| `inventory_transfer_line_id` | Optional | string or null | Unique identifier for this inventory transfer line, prefixed `invtrln_`. `inventory_transfer_line_id`: [declared alternatives](../models/InventoryTransferClosedMerchantEventDataPreviousAttributes.md#inventorytransferclosedmerchanteventdatapreviousattributeslines-variant-1-fields-1inventory_transfer_line_id). |
| `lost_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `lost_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_damaged_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_damaged_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_quality_control_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quality_control_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_quarantined_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_quarantined_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `received_sellable_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `received_sellable_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `requested_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `returned_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `returned_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.canceled_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.condition

Declared alternatives: [InventoryTransferLinePreviousAttributes.condition](../models/InventoryTransferLinePreviousAttributes.md#inventorytransferlinepreviousattributescondition).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.departed_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item to move..

- Value shape: string. ID of the inventory item to move. ID of the inventory item to move. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item to move. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_transfer_line_id

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_transfer_line_id variant 1

anyOf variant 1: Unique identifier for this inventory transfer line, prefixed `invtrln_`..

- Value shape: string. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Example: `"invtrln_01KEZF7C00CK297J6QVV5J0PFV"`. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_transfer_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory transfer line, prefixed `invtrln_`. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.lost_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.received_damaged_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.received_quality_control_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.received_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.received_quarantined_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.received_sellable_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.requested_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.returned_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.note

### InventoryTransferClosedMerchantEventDataPreviousAttributes.note variant 1

anyOf variant 1: Free-text note about the transfer..

- Value shape: string. Free-text note about the transfer. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.note variant 2

anyOf variant 2.

- Value shape: null. Free-text note about the transfer. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.origin_location_id

### InventoryTransferClosedMerchantEventDataPreviousAttributes.origin_location_id variant 1

anyOf variant 1: ID of the Location the stock leaves..

- Value shape: string. ID of the Location the stock leaves. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.origin_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the stock leaves. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.received_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.status

### InventoryTransferClosedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost..

- Value shape: string. Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. Values: `"draft"`, `"in_transit"`, `"partially_resolved"`, `"closed"`.

### InventoryTransferClosedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.supported_actions

### InventoryTransferClosedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed..

- Value shape: Array of string. Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. Items values: `"depart"`, `"receive"`, `"return_to_origin"`, `"report_loss"`, `"cancel"`.

### InventoryTransferClosedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. 

### InventoryTransferClosedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryTransferClosedMerchantEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

