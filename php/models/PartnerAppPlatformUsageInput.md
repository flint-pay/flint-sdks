[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformUsageInput

The platform's usage against its limits, as Flint last counted it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_count` | Required | integer | Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: `int64`. |
| `monthly_volume_currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Fee-bearing live volume this calendar month (UTC), keyed by currency code. |
| `observed_at` | Required | string | When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resets_at` | Required | string | When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

