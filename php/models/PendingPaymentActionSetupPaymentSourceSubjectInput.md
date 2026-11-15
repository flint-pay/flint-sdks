[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionSetupPaymentSourceSubjectInput

The payment method setup that needs buyer authentication in a pending payment action.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string | ID of the payment method being saved, which needs the buyer's authentication first. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

