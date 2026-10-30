[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailDeliverySettingsRequestInput

For each kind of customer email, whether Flint sends it or the merchant sends it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `dunning` | Optional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `fulfillment_updates` | Optional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `invoices` | Optional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `order_receipts` | Optional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `returns` | Optional | string | Values: `"flint_sends"`, `"merchant_sends"`. |
| `subscription_lifecycle` | Optional | string | Values: `"flint_sends"`, `"merchant_sends"`. |

