[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantFulfillmentOriginPolicy

Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | minLength: `1`. |
| `origin_policy_type` | Required | string | Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. |

