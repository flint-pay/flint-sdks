[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionLastPaymentError

Why the latest subscription renewal payment failed. Omits merchant remediation and sensitive decline signals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [18 declared values](BuyerPaymentErrorSummaryInput.md#buyerpaymenterrorsummaryinput-code-values). |
| `failed_at` | Required | string | Time the payment attempt concluded in failure. Format: `date-time`. |
| `message` | Required | string | Flint-authored payment failure message written for the buyer. This is stable explanatory text, not raw provider copy. |

