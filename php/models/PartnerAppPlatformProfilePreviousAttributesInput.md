[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformProfilePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Optional | integer or null | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. `estimated_merchant_count`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributesInput.md#partnerappplatformprofilepreviousattributesinputestimated_merchant_count). |
| `estimated_monthly_volume_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. |
| `merchant_description` | Optional | string or null | The kinds of merchants the platform serves, in 1 to 500 characters. `merchant_description`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributesInput.md#partnerappplatformprofilepreviousattributesinputmerchant_description). |
| `merchant_onboarding_description` | Optional | string or null | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. `merchant_onboarding_description`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributesInput.md#partnerappplatformprofilepreviousattributesinputmerchant_onboarding_description). |
| `product_description` | Optional | string or null | What the platform's product does, in 1 to 1,000 characters. `product_description`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributesInput.md#partnerappplatformprofilepreviousattributesinputproduct_description). |
| `support_email` | Optional | string or null | Where the platform's merchants get support. `support_email`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributesInput.md#partnerappplatformprofilepreviousattributesinputsupport_email). |
| `support_phone` | Optional | string or null | Support phone number in E.164 format, such as +14155550123. Optional. `support_phone`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributesInput.md#partnerappplatformprofilepreviousattributesinputsupport_phone). |
| `website_url` | Optional | string or null | The platform's website, as an https URL. `website_url`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributesInput.md#partnerappplatformprofilepreviousattributesinputwebsite_url). |

### PartnerAppPlatformProfilePreviousAttributesInput.estimated_merchant_count

### PartnerAppPlatformProfilePreviousAttributesInput.estimated_merchant_count variant 1

anyOf variant 1: Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000..

- Value shape: integer. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. 

### PartnerAppPlatformProfilePreviousAttributesInput.estimated_merchant_count variant 2

anyOf variant 2.

- Value shape: null. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. 

### PartnerAppPlatformProfilePreviousAttributesInput.merchant_description

### PartnerAppPlatformProfilePreviousAttributesInput.merchant_description variant 1

anyOf variant 1: The kinds of merchants the platform serves, in 1 to 500 characters..

- Value shape: string. The kinds of merchants the platform serves, in 1 to 500 characters. The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. 

### PartnerAppPlatformProfilePreviousAttributesInput.merchant_description variant 2

anyOf variant 2.

- Value shape: null. The kinds of merchants the platform serves, in 1 to 500 characters. 

### PartnerAppPlatformProfilePreviousAttributesInput.merchant_onboarding_description

### PartnerAppPlatformProfilePreviousAttributesInput.merchant_onboarding_description variant 1

anyOf variant 1: How the platform onboards and monitors its merchants, in 1 to 2,000 characters..

- Value shape: string. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. 

### PartnerAppPlatformProfilePreviousAttributesInput.merchant_onboarding_description variant 2

anyOf variant 2.

- Value shape: null. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. 

### PartnerAppPlatformProfilePreviousAttributesInput.product_description

### PartnerAppPlatformProfilePreviousAttributesInput.product_description variant 1

anyOf variant 1: What the platform's product does, in 1 to 1,000 characters..

- Value shape: string. What the platform's product does, in 1 to 1,000 characters. What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. 

### PartnerAppPlatformProfilePreviousAttributesInput.product_description variant 2

anyOf variant 2.

- Value shape: null. What the platform's product does, in 1 to 1,000 characters. 

### PartnerAppPlatformProfilePreviousAttributesInput.support_email

### PartnerAppPlatformProfilePreviousAttributesInput.support_email variant 1

anyOf variant 1: Where the platform's merchants get support..

- Value shape: string. Where the platform's merchants get support. Where the platform's merchants get support. Format: `email`. maxLength: `320`. Example: `"buyer@example.com"`. 

### PartnerAppPlatformProfilePreviousAttributesInput.support_email variant 2

anyOf variant 2.

- Value shape: null. Where the platform's merchants get support. 

### PartnerAppPlatformProfilePreviousAttributesInput.support_phone

### PartnerAppPlatformProfilePreviousAttributesInput.support_phone variant 1

anyOf variant 1: Support phone number in E.164 format, such as +14155550123. Optional..

- Value shape: string. Support phone number in E.164 format, such as +14155550123. Optional. Support phone number in E.164 format, such as +14155550123. Optional. pattern: `^\+[1-9][0-9]{1,14}$`. 

### PartnerAppPlatformProfilePreviousAttributesInput.support_phone variant 2

anyOf variant 2.

- Value shape: null. Support phone number in E.164 format, such as +14155550123. Optional. 

### PartnerAppPlatformProfilePreviousAttributesInput.website_url

### PartnerAppPlatformProfilePreviousAttributesInput.website_url variant 1

anyOf variant 1: The platform's website, as an https URL..

- Value shape: string. The platform's website, as an https URL. The platform's website, as an https URL. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformProfilePreviousAttributesInput.website_url variant 2

anyOf variant 2.

- Value shape: null. The platform's website, as an https URL. 

