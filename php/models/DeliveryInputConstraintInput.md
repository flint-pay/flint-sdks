[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputConstraintInput

The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Optional | Array of string |  |
| `earliest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `format` | Optional | string |  |
| `latest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `maximum_length` | Optional | integer | Format: `int32`. |
| `minimum_length` | Optional | integer | Format: `int32`. |
| `offered_windows` | Optional | Array of [DeliveryWindowResourceInput](../models/DeliveryWindowResourceInput.md#deliverywindowresourceinput) |  |
| `supported_countries` | Optional | Array of string | Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. |
| `type` | Required | string | Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. |

