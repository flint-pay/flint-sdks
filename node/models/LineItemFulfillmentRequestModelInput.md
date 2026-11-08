[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemFulfillmentRequestModelInput

Request input. Response: [LineItemFulfillmentRequest](../models/LineItemFulfillmentRequest.md#lineitemfulfillmentrequest).

Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital and service. Items: minLength: `1`. |
| `combination_policy` | Optional | string | Controls which delivery obligations can share a choice group. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [LineItemFulfillmentOriginRequestModelInput](../models/LineItemFulfillmentOriginRequestModelInput.md#lineitemfulfillmentoriginrequestmodelinput) | Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method. |
| `requirement` | Required | string | Whether this item needs fulfillment. `none` forbids every other fulfillment field. Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | How Flint resolves fulfillment. Required when `requirement` is `required`. Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Controls whether a line item's quantity can be split across delivery assignments. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

