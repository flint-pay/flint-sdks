[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LineItemFulfillmentOriginRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | ID of the location the item ships from. Required for `fixed_location`; not accepted for other policies. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `origin_policy_type` | Required | string | How Flint picks the location the item ships from. Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. |

### LineItemFulfillmentOriginRequest variant 1

anyOf variant 1: Declared schema LineItemFulfillmentOriginRequest. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method..

No additional constraints.

### LineItemFulfillmentOriginRequest variant 2

anyOf variant 2: Declared schema LineItemFulfillmentOriginRequestModel. Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method..

No additional constraints.

