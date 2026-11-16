[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | `return_line_item_id`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_line_item_id), [declared alternatives](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_line_item_id). |

### ReturnHandoffRequirementLineItemPreviousAttributes variant 1

anyOf variant 1: Declared schema ReturnHandoffRequirementLineItemPreviousAttributes. .

- Constraints for `return_line_item_id`: ID of the Return line the entry is about.

### ReturnHandoffRequirementLineItemPreviousAttributes variant 2

anyOf variant 2: Declared schema ReturnShipmentLineItemAllocationPreviousAttributes. .

- Constraints for `return_line_item_id`: Return line whose quantity is allocated to the shipment or package.

### ReturnHandoffRequirementLineItemPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnHandoffRequirementLineItemPreviousAttributes.return_id

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 1.[] fields 1.return_id](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_id).

### ReturnHandoffRequirementLineItemPreviousAttributes variant 1.return_line_item_id

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.return_line_item_id](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesreturn_line_item_id).

### ReturnHandoffRequirementLineItemPreviousAttributes variant 2.return_line_item_id

Declared alternatives: [PackageUpdatedInstalledMerchantsEvent.data.previous_attributes.return_line_items variant 1.[] fields 1.return_line_item_id](../models/PackageUpdatedInstalledMerchantsEvent.md#packageupdatedinstalledmerchantseventdataprevious_attributesreturn_line_items-variant-1-fields-1return_line_item_id).

