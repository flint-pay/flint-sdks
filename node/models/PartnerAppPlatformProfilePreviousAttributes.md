[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformProfilePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Optional | integer or null | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. `estimated_merchant_count`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributesestimated_merchant_count). |
| `estimated_monthly_volume_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. `estimated_monthly_volume_money`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributesestimated_monthly_volume_money). |
| `merchant_description` | Optional | string or null | The kinds of merchants the platform serves, in 1 to 500 characters. `merchant_description`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributesmerchant_description). |
| `merchant_onboarding_description` | Optional | string or null | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. `merchant_onboarding_description`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributesmerchant_onboarding_description). |
| `product_description` | Optional | string or null | What the platform's product does, in 1 to 1,000 characters. `product_description`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributesproduct_description). |
| `support_email` | Optional | string or null | Where the platform's merchants get support. `support_email`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributessupport_email). |
| `support_phone` | Optional | string or null | Support phone number in E.164 format, such as +14155550123. Optional. `support_phone`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributessupport_phone). |
| `website_url` | Optional | string or null | The platform's website, as an https URL. `website_url`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributeswebsite_url). |

### PartnerAppPlatformProfilePreviousAttributes.estimated_merchant_count

### PartnerAppPlatformProfilePreviousAttributes.estimated_merchant_count variant 1

anyOf variant 1: Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000..

- Value shape: integer. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. 

### PartnerAppPlatformProfilePreviousAttributes.estimated_merchant_count variant 2

anyOf variant 2.

- Value shape: null. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. 

### PartnerAppPlatformProfilePreviousAttributes.estimated_monthly_volume_money

Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PartnerAppPlatformProfilePreviousAttributes.estimated_monthly_volume_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PartnerAppPlatformProfilePreviousAttributes.estimated_monthly_volume_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. 

### PartnerAppPlatformProfilePreviousAttributes.estimated_monthly_volume_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### PartnerAppPlatformProfilePreviousAttributes.estimated_monthly_volume_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### PartnerAppPlatformProfilePreviousAttributes.merchant_description

### PartnerAppPlatformProfilePreviousAttributes.merchant_description variant 1

anyOf variant 1: The kinds of merchants the platform serves, in 1 to 500 characters..

- Value shape: string. The kinds of merchants the platform serves, in 1 to 500 characters. The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. 

### PartnerAppPlatformProfilePreviousAttributes.merchant_description variant 2

anyOf variant 2.

- Value shape: null. The kinds of merchants the platform serves, in 1 to 500 characters. 

### PartnerAppPlatformProfilePreviousAttributes.merchant_onboarding_description

### PartnerAppPlatformProfilePreviousAttributes.merchant_onboarding_description variant 1

anyOf variant 1: How the platform onboards and monitors its merchants, in 1 to 2,000 characters..

- Value shape: string. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. 

### PartnerAppPlatformProfilePreviousAttributes.merchant_onboarding_description variant 2

anyOf variant 2.

- Value shape: null. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. 

### PartnerAppPlatformProfilePreviousAttributes.product_description

### PartnerAppPlatformProfilePreviousAttributes.product_description variant 1

anyOf variant 1: What the platform's product does, in 1 to 1,000 characters..

- Value shape: string. What the platform's product does, in 1 to 1,000 characters. What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. 

### PartnerAppPlatformProfilePreviousAttributes.product_description variant 2

anyOf variant 2.

- Value shape: null. What the platform's product does, in 1 to 1,000 characters. 

### PartnerAppPlatformProfilePreviousAttributes.support_email

### PartnerAppPlatformProfilePreviousAttributes.support_email variant 1

anyOf variant 1: Where the platform's merchants get support..

- Value shape: string. Where the platform's merchants get support. Where the platform's merchants get support. Format: `email`. maxLength: `320`. Example: `"buyer@example.com"`. 

### PartnerAppPlatformProfilePreviousAttributes.support_email variant 2

anyOf variant 2.

- Value shape: null. Where the platform's merchants get support. 

### PartnerAppPlatformProfilePreviousAttributes.support_phone

### PartnerAppPlatformProfilePreviousAttributes.support_phone variant 1

anyOf variant 1: Support phone number in E.164 format, such as +14155550123. Optional..

- Value shape: string. Support phone number in E.164 format, such as +14155550123. Optional. Support phone number in E.164 format, such as +14155550123. Optional. pattern: `^\+[1-9][0-9]{1,14}$`. 

### PartnerAppPlatformProfilePreviousAttributes.support_phone variant 2

anyOf variant 2.

- Value shape: null. Support phone number in E.164 format, such as +14155550123. Optional. 

### PartnerAppPlatformProfilePreviousAttributes.website_url

### PartnerAppPlatformProfilePreviousAttributes.website_url variant 1

anyOf variant 1: The platform's website, as an https URL..

- Value shape: string. The platform's website, as an https URL. The platform's website, as an https URL. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformProfilePreviousAttributes.website_url variant 2

anyOf variant 2.

- Value shape: null. The platform's website, as an https URL. 

