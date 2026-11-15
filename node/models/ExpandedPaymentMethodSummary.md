[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentMethodSummary

A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetails](../models/CardDetails.md#carddetails) | Brand, expiry and last four digits. Present when type is card. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer this payment method belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `payment_method_id` | Required | string | Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `status` | Required | string | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. |
| `type` | Required | string | Kind of payment method. Values: `"card"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

