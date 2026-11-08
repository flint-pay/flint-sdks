[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformLimits

Soft limits on the platform's live use, and its usage against them.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_limit` | Required | integer | Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: `int64`. minimum: `1`. |
| `monthly_volume_limit_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. |
| `usage` | Required | [PartnerAppPlatformUsage](../models/PartnerAppPlatformUsage.md#partnerappplatformusage) | The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. The platform's usage against its limits, as Flint last counted it. `usage`: [field definitions](../models/PartnerAppPlatformLimits.md#partnerappplatformlimitsusage). |

### PartnerAppPlatformLimits.usage

The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. The platform's usage against its limits, as Flint last counted it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_count` | Required | integer | Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: `int64`. |
| `monthly_volume_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fee-bearing live volume this calendar month (UTC), keyed by currency code. |
| `observed_at` | Required | string | When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `resets_at` | Required | string | When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

