[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformLimits

Soft limits on the platform's live use, and its usage against them.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_limit` | Required | integer | Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: `int64`. minimum: `1`. |
| `monthly_volume_limit_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. `monthly_volume_limit_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `usage` | Required | [PartnerAppPlatformUsage](../models/PartnerAppPlatformUsage.md#partnerappplatformusage) | The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. The platform's usage against its limits, as Flint last counted it. |

### PartnerAppPlatformLimits.monthly_volume_limit_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

