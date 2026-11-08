[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformLimitsInput

Soft limits on the platform's live use, and its usage against them.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_limit` | Required | integer | Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: `int64`. minimum: `1`. |
| `monthly_volume_limit_currency_options` | Required | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. |
| `usage` | Required | [PartnerAppPlatformUsageInput](../models/PartnerAppPlatformUsageInput.md#partnerappplatformusageinput) | The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. The platform's usage against its limits, as Flint last counted it. |

