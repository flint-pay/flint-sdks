[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRetryPaymentActionOptionsInput

How many payment retries the buyer has left this billing period, and the retry that is running.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_subscription_payment_retry_id` | Optional | string | The retry that is pending or processing. Read it with GET /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id} until its status is succeeded or failed. Example: `"spr_01KEZF7C00YXMSBXGYEMYDD0AA"`. |
| `max_retries` | Required | integer | The buyer limit per billing period. Currently 3. Format: `int32`. minimum: `1`. |
| `remaining_retries` | Required | integer | Retries left this billing period. Retries the store starts count too. The count starts again when a later billing period becomes past due. Format: `int32`. minimum: `0`. maximum: `3`. |

