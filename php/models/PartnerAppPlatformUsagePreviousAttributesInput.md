[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformUsagePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_count` | Optional | integer or null | Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. `live_merchant_count`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributesInput.md#partnerappplatformusagepreviousattributesinputlive_merchant_count). |
| `monthly_volume_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Fee-bearing live volume this calendar month (UTC), keyed by currency code. `monthly_volume_currency_options`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributesInput.md#partnerappplatformusagepreviousattributesinputmonthly_volume_currency_options). |
| `observed_at` | Optional | string or null | When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. `observed_at`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributesInput.md#partnerappplatformusagepreviousattributesinputobserved_at). |
| `resets_at` | Optional | string or null | When the monthly volume starts again from zero: the start of the next calendar month, UTC. `resets_at`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributesInput.md#partnerappplatformusagepreviousattributesinputresets_at). |

### PartnerAppPlatformUsagePreviousAttributesInput.live_merchant_count

### PartnerAppPlatformUsagePreviousAttributesInput.live_merchant_count variant 1

anyOf variant 1: Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked..

- Value shape: integer. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. Format: `int64`. 

### PartnerAppPlatformUsagePreviousAttributesInput.live_merchant_count variant 2

anyOf variant 2.

- Value shape: null. Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. 

### PartnerAppPlatformUsagePreviousAttributesInput.monthly_volume_currency_options

### PartnerAppPlatformUsagePreviousAttributesInput.monthly_volume_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Fee-bearing live volume this calendar month (UTC), keyed by currency code. 

### PartnerAppPlatformUsagePreviousAttributesInput.monthly_volume_currency_options variant 2

anyOf variant 2.

- Value shape: null. Fee-bearing live volume this calendar month (UTC), keyed by currency code. 

### PartnerAppPlatformUsagePreviousAttributesInput.observed_at

### PartnerAppPlatformUsagePreviousAttributesInput.observed_at variant 1

anyOf variant 1: When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay..

- Value shape: string. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformUsagePreviousAttributesInput.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. 

### PartnerAppPlatformUsagePreviousAttributesInput.resets_at

### PartnerAppPlatformUsagePreviousAttributesInput.resets_at variant 1

anyOf variant 1: When the monthly volume starts again from zero: the start of the next calendar month, UTC..

- Value shape: string. When the monthly volume starts again from zero: the start of the next calendar month, UTC. When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformUsagePreviousAttributesInput.resets_at variant 2

anyOf variant 2.

- Value shape: null. When the monthly volume starts again from zero: the start of the next calendar month, UTC. 

