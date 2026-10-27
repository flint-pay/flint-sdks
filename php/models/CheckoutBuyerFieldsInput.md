[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBuyerFieldsInput

What checkout asks the buyer for. Each field you leave out uses your checkout settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_autocomplete_enabled` | Optional | boolean | Whether checkout offers address suggestions while the buyer enters an address. |
| `require_billing_address` | Optional | boolean | Whether checkout requires the buyer's billing address. |
| `require_email` | Optional | boolean | Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. |
| `require_phone` | Optional | boolean | Whether checkout requires the buyer's phone number. |

