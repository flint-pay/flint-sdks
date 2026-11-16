[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformLimitsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_limit` | Optional | integer or null | Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. `live_merchant_limit`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributesInput.md#partnerappplatformlimitspreviousattributesinputlive_merchant_limit). |
| `monthly_volume_limit_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. `monthly_volume_limit_currency_options`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributesInput.md#partnerappplatformlimitspreviousattributesinputmonthly_volume_limit_currency_options). |
| `usage` | Optional | [PartnerAppPlatformUsagePreviousAttributesInput](../models/PartnerAppPlatformUsagePreviousAttributesInput.md#partnerappplatformusagepreviousattributesinput) or null | The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. |

### PartnerAppPlatformLimitsPreviousAttributesInput.live_merchant_limit

### PartnerAppPlatformLimitsPreviousAttributesInput.live_merchant_limit variant 1

anyOf variant 1: Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install..

- Value shape: integer. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. Format: `int64`. minimum: `1`. 

### PartnerAppPlatformLimitsPreviousAttributesInput.live_merchant_limit variant 2

anyOf variant 2.

- Value shape: null. Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. 

### PartnerAppPlatformLimitsPreviousAttributesInput.monthly_volume_limit_currency_options

### PartnerAppPlatformLimitsPreviousAttributesInput.monthly_volume_limit_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. 

### PartnerAppPlatformLimitsPreviousAttributesInput.monthly_volume_limit_currency_options variant 2

anyOf variant 2.

- Value shape: null. Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. 

