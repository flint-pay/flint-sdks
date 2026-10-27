[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeclinePaymentReviewRequestInput

The request body for: Decline a payment review.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_to_block_lists` | Optional | boolean | Add the payment's card fingerprint, email and IP address to Flint's default block lists, so later payments with any of them are blocked. Values the payment didn't have are skipped. Defaults to false. Default: `false`. |

