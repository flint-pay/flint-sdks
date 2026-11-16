[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Optional | [ReturnHandoffDestinationPreviousAttributes](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributes) or null | Where the buyer sends the merchandise. |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `instructions` | Optional | string or null | Instructions for the buyer on sending the merchandise. `instructions`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesinstructions). |
| `line_items` | Optional | Array of [ReturnHandoffRequirementLineItemPreviousAttributes](../models/ReturnHandoffRequirementLineItemPreviousAttributes.md#returnhandoffrequirementlineitempreviousattributes) or null | Return lines and the quantities still expected. `line_items`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesline_items). |
| `shipment_count` | Optional | integer or null | Reserved. Flint doesn't set it today, so it's always omitted. `shipment_count`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesshipment_count). |
| `status` | Optional | string or null | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. `status`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesstatus). |

### ReturnHandoffRequirementPreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

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
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the entry is about. `return_line_item_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_line_item_id). |

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.return_id

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 1.[] fields 1.return_id](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_id).

### ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.return_line_item_id](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_line_item_id).

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

