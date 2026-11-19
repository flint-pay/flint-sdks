[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountAppliedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applied_at` | Optional | string or null | RFC3339 timestamp. `applied_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key). |
| `inventory_count_id` | Optional | string or null | Unique identifier for this inventory count, prefixed `invc_`. `inventory_count_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesinventory_count_id). |
| `lines` | Optional | Array of [InventoryCountLinePreviousAttributes](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributes) or null | Count lines, one for each inventory item being counted. `lines`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines). |
| `location_id` | Optional | string or null | ID of the Location whose stock is counted. `location_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslocation_id). |
| `observation_provenance` | Optional | [InventoryCountObservationProvenancePreviousAttributes](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributes) or null | Source system, actor, and time reported with the count's observations. `observation_provenance`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance). |
| `status` | Optional | string or null | Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`. `status`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion). |

### InventoryCountAppliedMerchantEventDataPreviousAttributes.applied_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id variant 1

anyOf variant 1: Unique identifier for this inventory count, prefixed `invc_`..

- Value shape: string. Unique identifier for this inventory count, prefixed `invc_`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.inventory_count_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory count, prefixed `invc_`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1

anyOf variant 1: Count lines, one for each inventory item being counted..

- Value shape: Array of [InventoryCountLinePreviousAttributes](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributes). Count lines, one for each inventory item being counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 2

anyOf variant 2.

- Value shape: null. Count lines, one for each inventory item being counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `captured_physical_version` | Optional | integer or null | Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. `captured_physical_version`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributescaptured_physical_version). |
| `counted_damaged_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_damaged_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `counted_on_hand_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_on_hand_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `counted_quality_control_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_quality_control_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `counted_quarantined_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_quarantined_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `damaged_variance` | Optional | integer or null | The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. `damaged_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesdamaged_variance). |
| `expected_damaged_quantity` | Optional | integer or null | The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_damaged_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_damaged_quantity). |
| `expected_on_hand_quantity` | Optional | integer or null | The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_on_hand_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_on_hand_quantity). |
| `expected_quality_control_quantity` | Optional | integer or null | The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_quality_control_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_quality_control_quantity). |
| `expected_quarantined_quantity` | Optional | integer or null | The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_quarantined_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_quarantined_quantity). |
| `inventory_count_line_id` | Optional | string or null | Unique identifier for this inventory count line, prefixed `invcln_`. `inventory_count_line_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines-variant-1-fields-1inventory_count_line_id). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item counted. `inventory_item_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines-variant-1-fields-1inventory_item_id). |
| `inventory_movement_id` | Optional | string or null | Movement this line wrote when the count was applied. Absent on a draft or canceled count. `inventory_movement_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributeslines-variant-1-fields-1inventory_movement_id). |
| `on_hand_variance` | Optional | integer or null | The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. `on_hand_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributeson_hand_variance). |
| `physical_version` | Optional | integer or null | Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. `physical_version`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesphysical_version). |
| `quality_control_variance` | Optional | integer or null | The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. `quality_control_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesquality_control_variance). |
| `quarantined_variance` | Optional | integer or null | The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. `quarantined_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesquarantined_variance). |
| `source_observation_sequence` | Optional | integer or null | `source_observation_sequence`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributessource_observation_sequence). |

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.captured_physical_version

Declared alternatives: [InventoryCountLinePreviousAttributes.captured_physical_version](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributescaptured_physical_version).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.counted_damaged_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.counted_on_hand_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.counted_quality_control_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.counted_quarantined_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.damaged_variance

Declared alternatives: [InventoryCountLinePreviousAttributes.damaged_variance](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesdamaged_variance).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.expected_damaged_quantity

Declared alternatives: [InventoryCountLinePreviousAttributes.expected_damaged_quantity](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_damaged_quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.expected_on_hand_quantity

Declared alternatives: [InventoryCountLinePreviousAttributes.expected_on_hand_quantity](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_on_hand_quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.expected_quality_control_quantity

Declared alternatives: [InventoryCountLinePreviousAttributes.expected_quality_control_quantity](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_quality_control_quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.expected_quarantined_quantity

Declared alternatives: [InventoryCountLinePreviousAttributes.expected_quarantined_quantity](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_quarantined_quantity).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_count_line_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_count_line_id variant 1

anyOf variant 1: Unique identifier for this inventory count line, prefixed `invcln_`..

- Value shape: string. Unique identifier for this inventory count line, prefixed `invcln_`. Unique identifier for this inventory count line, prefixed `invcln_`. Example: `"invcln_01KEZF7C00BJK1S36219KK040Q"`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_count_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory count line, prefixed `invcln_`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item counted..

- Value shape: string. ID of the inventory item counted. ID of the inventory item counted. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_movement_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_movement_id variant 1

anyOf variant 1: Movement this line wrote when the count was applied. Absent on a draft or canceled count..

- Value shape: string. Movement this line wrote when the count was applied. Absent on a draft or canceled count. Movement this line wrote when the count was applied. Absent on a draft or canceled count. Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.inventory_movement_id variant 2

anyOf variant 2.

- Value shape: null. Movement this line wrote when the count was applied. Absent on a draft or canceled count. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.on_hand_variance

Declared alternatives: [InventoryCountLinePreviousAttributes.on_hand_variance](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributeson_hand_variance).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.physical_version

Declared alternatives: [InventoryCountLinePreviousAttributes.physical_version](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesphysical_version).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.quality_control_variance

Declared alternatives: [InventoryCountLinePreviousAttributes.quality_control_variance](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesquality_control_variance).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.quarantined_variance

Declared alternatives: [InventoryCountLinePreviousAttributes.quarantined_variance](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesquarantined_variance).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.source_observation_sequence

Declared alternatives: [InventoryCountLinePreviousAttributes.source_observation_sequence](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributessource_observation_sequence).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location whose stock is counted..

- Value shape: string. ID of the Location whose stock is counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location whose stock is counted. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance

Source system, actor, and time reported with the count's observations.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_actor_id` | Conditional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance-variant-1external_actor_id). |
| `occurred_at` | Conditional | string or null | When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. `occurred_at`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance-variant-1occurred_at). |
| `source_system` | Conditional | [InventorySourceSystemPreviousAttributes](../models/InventorySourceSystemPreviousAttributes.md#inventorysourcesystempreviousattributes) or null | System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. `source_system`: [declared alternatives](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributessource_system). |

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1

anyOf InventoryCountObservationProvenancePreviousAttributes.

- Optional: `external_actor_id`, `occurred_at`, `source_system`.

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 2

anyOf variant 2.

- Undeclared: `external_actor_id`, `occurred_at`, `source_system`.
- Value shape: null. Source system, actor, and time reported with the count's observations. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.external_actor_id

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.external_actor_id variant 1

anyOf variant 1: Your identifier for the actor who recorded the event. Don't put secrets in this field..

- Value shape: string. Your identifier for the actor who recorded the event. Don't put secrets in this field. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.external_actor_id variant 2

anyOf variant 2.

- Value shape: null. Your identifier for the actor who recorded the event. Don't put secrets in this field. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.occurred_at

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.occurred_at variant 1

anyOf variant 1: When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other..

- Value shape: string. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.occurred_at variant 2

anyOf variant 2.

- Value shape: null. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.source_system

Declared alternatives: [InventoryCountObservationProvenancePreviousAttributes.source_system](../models/InventoryCountObservationProvenancePreviousAttributes.md#inventorycountobservationprovenancepreviousattributessource_system).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.status

### InventoryCountAppliedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the count is still open. Applying or canceling a `draft` count ends it..

- Value shape: string. Whether the count is still open. Applying or canceling a `draft` count ends it. Values: `"draft"`, `"applied"`, `"canceled"`.

### InventoryCountAppliedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the count is still open. Applying or canceling a `draft` count ends it. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions

### InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled..

- Value shape: Array of string. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. Items values: `"apply"`, `"cancel"`.

### InventoryCountAppliedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. 

### InventoryCountAppliedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### InventoryCountAppliedMerchantEventDataPreviousAttributes.version

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.version](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesversion).

