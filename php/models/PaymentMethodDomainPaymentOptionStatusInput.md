[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodDomainPaymentOptionStatusInput

Whether a wallet payment option, Apple Pay or Google Pay, is active, inactive, or unavailable for a payment method domain.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_option` | Required | string | The wallet this status is for. Values: `"apple_pay"`, `"google_pay"`. |
| `status` | Required | string | Whether this wallet's button can show on the hostname. Values: `"active"`, `"inactive"`, `"unavailable"`. |

