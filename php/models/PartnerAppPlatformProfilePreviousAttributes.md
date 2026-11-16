[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformProfilePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Optional | integer or null | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. `estimated_merchant_count`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1estimated_merchant_count). |
| `estimated_monthly_volume_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. |
| `merchant_description` | Optional | string or null | The kinds of merchants the platform serves, in 1 to 500 characters. `merchant_description`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1merchant_description). |
| `merchant_onboarding_description` | Optional | string or null | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. `merchant_onboarding_description`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1merchant_onboarding_description). |
| `product_description` | Optional | string or null | What the platform's product does, in 1 to 1,000 characters. `product_description`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1product_description). |
| `support_email` | Optional | string or null | Where the platform's merchants get support. `support_email`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributessupport_email). |
| `support_phone` | Optional | string or null | Support phone number in E.164 format, such as +14155550123. Optional. `support_phone`: [declared alternatives](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1support_phone). |
| `website_url` | Optional | string or null | The platform's website, as an https URL. `website_url`: [declared alternatives](../models/PartnerAppPlatformProfilePreviousAttributes.md#partnerappplatformprofilepreviousattributeswebsite_url). |

### PartnerAppPlatformProfilePreviousAttributes.estimated_merchant_count

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.estimated_merchant_count](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1estimated_merchant_count).

### PartnerAppPlatformProfilePreviousAttributes.merchant_description

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_description](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1merchant_description).

### PartnerAppPlatformProfilePreviousAttributes.merchant_onboarding_description

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.merchant_onboarding_description](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1merchant_onboarding_description).

### PartnerAppPlatformProfilePreviousAttributes.product_description

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.product_description](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1product_description).

### PartnerAppPlatformProfilePreviousAttributes.support_email

### PartnerAppPlatformProfilePreviousAttributes.support_email variant 1

anyOf variant 1: Where the platform's merchants get support..

- Value shape: string. Where the platform's merchants get support. Where the platform's merchants get support. Format: `email`. maxLength: `320`. 

### PartnerAppPlatformProfilePreviousAttributes.support_email variant 2

anyOf variant 2.

- Value shape: null. Where the platform's merchants get support. 

### PartnerAppPlatformProfilePreviousAttributes.support_phone

Declared alternatives: [PartnerAppPlatformApprovedEvent.data fields 1.previous_attributes.platform_profile variant 1.support_phone](../models/PartnerAppPlatformApprovedEvent.md#partnerappplatformapprovedeventdata-fields-1previous_attributesplatform_profile-variant-1support_phone).

### PartnerAppPlatformProfilePreviousAttributes.website_url

### PartnerAppPlatformProfilePreviousAttributes.website_url variant 1

anyOf variant 1: The platform's website, as an https URL..

- Value shape: string. The platform's website, as an https URL. The platform's website, as an https URL. Format: `uri`. maxLength: `2048`. 

### PartnerAppPlatformProfilePreviousAttributes.website_url variant 2

anyOf variant 2.

- Value shape: null. The platform's website, as an https URL. 

