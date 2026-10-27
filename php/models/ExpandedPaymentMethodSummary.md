[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentMethodSummary

A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetails](../models/CardDetails.md#carddetails) | Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Optional | string |  |
| `payment_method_id` | Required | string |  |
| `status` | Required | string | Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. |
| `type` | Required | string | Values: `"card"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

