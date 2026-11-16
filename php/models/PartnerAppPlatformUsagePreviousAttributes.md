[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformUsagePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_count` | Optional | integer or null | Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. `live_merchant_count`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributeslive_merchant_count). |
| `monthly_volume_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fee-bearing live volume this calendar month (UTC), keyed by currency code. `monthly_volume_currency_options`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributesmonthly_volume_currency_options). |
| `observed_at` | Optional | string or null | When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. `observed_at`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributesobserved_at). |
| `resets_at` | Optional | string or null | When the monthly volume starts again from zero: the start of the next calendar month, UTC. `resets_at`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributesresets_at). |

### PartnerAppPlatformUsagePreviousAttributes.live_merchant_count

### PartnerAppPlatformUsagePreviousAttributes.live_merchant_count variant 1

anyOf variant 1: Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked..

- Value shape: integer. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: `int64`. 

### PartnerAppPlatformUsagePreviousAttributes.live_merchant_count variant 2

anyOf variant 2.

- Value shape: null. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. 

### PartnerAppPlatformUsagePreviousAttributes.monthly_volume_currency_options

### PartnerAppPlatformUsagePreviousAttributes.monthly_volume_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Fee-bearing live volume this calendar month (UTC), keyed by currency code. 

### PartnerAppPlatformUsagePreviousAttributes.monthly_volume_currency_options variant 2

anyOf variant 2.

- Value shape: null. Fee-bearing live volume this calendar month (UTC), keyed by currency code. 

### PartnerAppPlatformUsagePreviousAttributes.observed_at

### PartnerAppPlatformUsagePreviousAttributes.observed_at variant 1

anyOf variant 1: When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay..

- Value shape: string. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: `date-time`. 

### PartnerAppPlatformUsagePreviousAttributes.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. 

### PartnerAppPlatformUsagePreviousAttributes.resets_at

### PartnerAppPlatformUsagePreviousAttributes.resets_at variant 1

anyOf variant 1: When the monthly volume starts again from zero: the start of the next calendar month, UTC..

- Value shape: string. When the monthly volume starts again from zero: the start of the next calendar month, UTC. When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: `date-time`. 

### PartnerAppPlatformUsagePreviousAttributes.resets_at variant 2

anyOf variant 2.

- Value shape: null. When the monthly volume starts again from zero: the start of the next calendar month, UTC. 

