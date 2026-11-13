[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPendingCallerRateRequest

A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_choice_group_id` | Required | string | Choice group that needs a rate. |
| `delivery_method_id` | Required | string | Method that needs a rate. |
| `delivery_method_revision_id` | Required | string | Revision of that method. |

