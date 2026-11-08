[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentMethodSummaryInput

A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetailsInput](../models/CardDetailsInput.md#carddetailsinput) | Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `payment_method_id` | Required | string | Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `status` | Required | string | Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. |
| `type` | Required | string | Values: `"card"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

