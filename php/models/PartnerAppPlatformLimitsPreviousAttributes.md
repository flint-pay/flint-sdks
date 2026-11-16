[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformLimitsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_limit` | Optional | integer or null | Live merchants the platform is expected to use a platform capability on: a succeeded live platform fee, or live onboarding through an install. `live_merchant_limit`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributeslive_merchant_limit). |
| `monthly_volume_limit_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments whose platform fee succeeded, in each calendar month (UTC). Only USD today. `monthly_volume_limit_currency_options`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributesmonthly_volume_limit_currency_options). |
| `usage` | Optional | [PartnerAppPlatformUsagePreviousAttributes](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributes) or null | The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. `usage`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributesusage). |

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

### PartnerAppPlatformLimitsPreviousAttributes.usage

The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `live_merchant_count` | Conditional | integer or null | Live merchants counted toward live_merchant_limit. A merchant counts from the platform's first counted use on it and stops counting when its live grant is revoked. `live_merchant_count`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributeslive_merchant_count). |
| `monthly_volume_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fee-bearing live volume this calendar month (UTC), keyed by currency code. `monthly_volume_currency_options`: [declared alternatives](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributesmonthly_volume_currency_options). |
| `observed_at` | Conditional | string or null | When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. `observed_at`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributesusage-variant-1observed_at). |
| `resets_at` | Conditional | string or null | When the monthly volume starts again from zero: the start of the next calendar month, UTC. `resets_at`: [declared alternatives](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributesusage-variant-1resets_at). |

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1

anyOf PartnerAppPlatformUsagePreviousAttributes.

- Optional: `live_merchant_count`, `monthly_volume_currency_options`, `observed_at`, `resets_at`.

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 2

anyOf variant 2.

- Undeclared: `live_merchant_count`, `monthly_volume_currency_options`, `observed_at`, `resets_at`.
- Value shape: null. The platform's current usage against each limit. Usage is an observation: it changes without a write to the app, doesn't advance the app's version, and sends no event. 

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.live_merchant_count

Declared alternatives: [PartnerAppPlatformUsagePreviousAttributes.live_merchant_count](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributeslive_merchant_count).

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.monthly_volume_currency_options

Declared alternatives: [PartnerAppPlatformUsagePreviousAttributes.monthly_volume_currency_options](../models/PartnerAppPlatformUsagePreviousAttributes.md#partnerappplatformusagepreviousattributesmonthly_volume_currency_options).

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.observed_at

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.observed_at variant 1

anyOf variant 1: When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay..

- Value shape: string. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.observed_at variant 2

anyOf variant 2.

- Value shape: null. When Flint last updated these counts. Counting trails the payments and onboarding calls it counts by a short delay. 

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.resets_at

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.resets_at variant 1

anyOf variant 1: When the monthly volume starts again from zero: the start of the next calendar month, UTC..

- Value shape: string. When the monthly volume starts again from zero: the start of the next calendar month, UTC. When the monthly volume starts again from zero: the start of the next calendar month, UTC. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformLimitsPreviousAttributes.usage variant 1.resets_at variant 2

anyOf variant 2.

- Value shape: null. When the monthly volume starts again from zero: the start of the next calendar month, UTC. 

