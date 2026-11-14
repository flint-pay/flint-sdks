[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentChargeLink

Links a fulfillment to an order charge by `order_charge_id`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Required | string | Order charge associated with this fulfillment. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | Order that owns the referenced charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |

