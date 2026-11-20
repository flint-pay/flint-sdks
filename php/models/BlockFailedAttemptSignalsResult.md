[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BlockFailedAttemptSignalsResult

Default block-list result for a payment intent's failed attempt.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `block_list_item_types` | Required | Array of string | Types of signals now on the default lists, including existing entries. Empty if the attempt carried no blockable signals. |
| `payment_attempt_id` | Required | string | The attempt whose retained signals were used. |
| `payment_intent_id` | Required | string | The payment intent that owns the attempt. |

