[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Optional | Alternative shapes (see declared variants) | Where the buyer sends the merchandise. `destination`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesdestination). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `instructions` | Optional | string or null | Instructions for the buyer on sending the merchandise. `instructions`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesinstructions). |
| `line_items` | Optional | Array of [ReturnHandoffRequirementLineItemPreviousAttributes](../models/ReturnHandoffRequirementLineItemPreviousAttributes.md#returnhandoffrequirementlineitempreviousattributes) or null | Return lines and the quantities still expected. `line_items`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesline_items). |
| `shipment_count` | Optional | integer or null | Reserved. Flint doesn't set it today, so it's always omitted. `shipment_count`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesshipment_count). |
| `status` | Optional | string or null | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. `status`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesstatus). |

### ReturnHandoffRequirementPreviousAttributes.destination

Where the buyer sends the merchandise.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | Alternative shapes (see declared variants) | Postal address the buyer sends the merchandise to. `address`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesdestination-variant-1address). |
| `destination_type` | Conditional | string or null | What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`. `destination_type`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesdestination-variant-1destination_type). |
| `location_id` | Conditional | string or null | ID of the Location that receives the merchandise. `location_id`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesdestination-variant-1location_id). |
| `name` | Conditional | string or null | Name of the destination. `name`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesdestination-variant-1name). |

### ReturnHandoffRequirementPreviousAttributes.destination variant 1

anyOf ReturnHandoffDestinationPreviousAttributes.

- Optional: `address`, `destination_type`, `location_id`, `name`.

### ReturnHandoffRequirementPreviousAttributes.destination variant 2

anyOf variant 2.

- Undeclared: `address`, `destination_type`, `location_id`, `name`.
- Value shape: null. Where the buyer sends the merchandise. 

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address

Postal address the buyer sends the merchandise to.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Postal address the buyer sends the merchandise to. 

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.destination_type

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.destination_type variant 1

anyOf variant 1: What kind of place the destination is..

- Value shape: string. What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`.

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.destination_type variant 2

anyOf variant 2.

- Value shape: null. What kind of place the destination is. 

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.location_id

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.location_id variant 1

anyOf variant 1: ID of the Location that receives the merchandise..

- Value shape: string. ID of the Location that receives the merchandise. ID of the Location that receives the merchandise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that receives the merchandise. 

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.name

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.name variant 1

anyOf variant 1: Name of the destination..

- Value shape: string. Name of the destination. 

### ReturnHandoffRequirementPreviousAttributes.destination variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the destination. 

### ReturnHandoffRequirementPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnHandoffRequirementPreviousAttributes.instructions

### ReturnHandoffRequirementPreviousAttributes.instructions variant 1

anyOf variant 1: Instructions for the buyer on sending the merchandise..

- Value shape: string. Instructions for the buyer on sending the merchandise. 

### ReturnHandoffRequirementPreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Instructions for the buyer on sending the merchandise. 

### ReturnHandoffRequirementPreviousAttributes.line_items

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1

anyOf variant 1: Return lines and the quantities still expected..

- Value shape: Array of [ReturnHandoffRequirementLineItemPreviousAttributes](../models/ReturnHandoffRequirementLineItemPreviousAttributes.md#returnhandoffrequirementlineitempreviousattributes). Return lines and the quantities still expected. 

### ReturnHandoffRequirementPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Return lines and the quantities still expected. 

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the entry is about. `return_line_item_id`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesline_items-variant-1-fields-1return_line_item_id). |

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.return_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items-variant-1-fields-1return_id).

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: ID of the Return line the entry is about..

- Value shape: string. ID of the Return line the entry is about. ID of the Return line the entry is about. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return line the entry is about. 

### ReturnHandoffRequirementPreviousAttributes.shipment_count

### ReturnHandoffRequirementPreviousAttributes.shipment_count variant 1

anyOf variant 1: Reserved. Flint doesn't set it today, so it's always omitted..

- Value shape: integer. Reserved. Flint doesn't set it today, so it's always omitted. Reserved. Flint doesn't set it today, so it's always omitted. Format: `int64`. 

### ReturnHandoffRequirementPreviousAttributes.shipment_count variant 2

anyOf variant 2.

- Value shape: null. Reserved. Flint doesn't set it today, so it's always omitted. 

### ReturnHandoffRequirementPreviousAttributes.status

### ReturnHandoffRequirementPreviousAttributes.status variant 1

anyOf variant 1: Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer..

- Value shape: string. Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`.

### ReturnHandoffRequirementPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. 

