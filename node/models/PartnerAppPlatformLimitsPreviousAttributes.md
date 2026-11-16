[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformLimitsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_limit` | Optional | integer or null | Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. `live_merchant_limit`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributeslive_merchant_limit). |
| `monthly_volume_limit_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. `monthly_volume_limit_currency_options`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributesmonthly_volume_limit_currency_options). |
| `usage` | Optional | [PartnerAppPlatformUsagePreviousAttributes](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributes) or null | The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. |

### PartnerAppPlatformLimitsPreviousAttributes.live_merchant_limit

### PartnerAppPlatformLimitsPreviousAttributes.live_merchant_limit variant 1

anyOf variant 1: Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install..

- Value shape: integer. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: `int64`. minimum: `1`. 

### PartnerAppPlatformLimitsPreviousAttributes.live_merchant_limit variant 2

anyOf variant 2.

- Value shape: null. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. 

### PartnerAppPlatformLimitsPreviousAttributes.monthly_volume_limit_currency_options

### PartnerAppPlatformLimitsPreviousAttributes.monthly_volume_limit_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. 

### PartnerAppPlatformLimitsPreviousAttributes.monthly_volume_limit_currency_options variant 2

anyOf variant 2.

- Value shape: null. Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. 

### PartnerAppPlatformLimitsPreviousAttributes.monthly_volume_limit_currency_options variant 1.{} fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

