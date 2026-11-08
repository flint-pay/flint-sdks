[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemFulfillmentRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string | Fulfillment types allowed for this item. Send a non-empty unique list when `requirement` is `required`. `quote` accepts shipment, pickup, and local_delivery. `manual` accepts digital and service. Items: minLength: `1`. |
| `combination_policy` | Optional | string | Controls which delivery obligations can share a choice group. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. |
| `origin_policy` | Optional | [LineItemFulfillmentOriginRequest](../models/LineItemFulfillmentOriginRequest.md#lineitemfulfillmentoriginrequest) | Where the item ships from. Required for `quote` resolution; not accepted for `none` or `manual` resolution. `origin_policy`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillmentorigin_policy), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillmentorigin_policy). |
| `requirement` | Required | string | Whether this item needs fulfillment. `none` forbids every other fulfillment field. Values: `"none"`, `"required"`. |
| `resolution_mode` | Optional | string | How Flint resolves fulfillment. Required when `requirement` is `required`. Values: `"quote"`, `"manual"`. |
| `splitting_policy` | Optional | string | Controls whether a line item's quantity can be split across delivery assignments. Required for `quote` resolution; not accepted when `requirement` is `none` or `resolution_mode` is `manual`. Values: `"whole_line_item"`, `"quantity_split_allowed"`. |

### LineItemFulfillmentRequest variant 1

anyOf variant 1: Declared schema LineItemFulfillmentRequest. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin..

No additional constraints.

### LineItemFulfillmentRequest variant 2

anyOf variant 2: Declared schema LineItemFulfillmentRequestModel. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin..

No additional constraints.

### LineItemFulfillmentRequest variant 1.origin_policy

Field definitions: [CreateOrderLineItem variant 1.fulfillment.origin_policy](../models/CreateOrderLineItem.md#createorderlineitem-variant-1fulfillmentorigin_policy).

### LineItemFulfillmentRequest variant 2.origin_policy

Field definitions: [AddLineItemsRequest.line_items[].fulfillment.origin_policy](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsfulfillmentorigin_policy).

