[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentSettingsRequestInput

Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`).

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_required` | Optional | boolean | Whether a new fulfillment must be accepted before it can move into preparation, movement, or completion. Defaults to false. |

