[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomFulfillment

Required on line items without variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery settings. Send {"requirement": "none"} for services, digital goods, and items handed over at the point of sale.

Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Items: minLength: `1`. |
| `combination_policy` | Optional | string | Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomFulfillmentOriginPolicy](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomFulfillmentOriginPolicy.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemcustomfulfillmentoriginpolicy) | Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method. |
| `requirement` | Required | string | Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

