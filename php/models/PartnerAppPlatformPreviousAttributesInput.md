[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Optional | Array of [PartnerAppPlatformCapabilityPreviousAttributesInput](../models/PartnerAppPlatformCapabilityPreviousAttributesInput.md#partnerappplatformcapabilitypreviousattributesinput) or null | One entry per platform capability, in the same order for every app. `capabilities`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributesInput.md#partnerappplatformpreviousattributesinputcapabilities). |
| `current_terms` | Optional | [PartnerAppPlatformCurrentTermsPreviousAttributesInput](../models/PartnerAppPlatformCurrentTermsPreviousAttributesInput.md#partnerappplatformcurrenttermspreviousattributesinput) or null | The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same. |
| `limits` | Optional | [PartnerAppPlatformLimitsPreviousAttributesInput](../models/PartnerAppPlatformLimitsPreviousAttributesInput.md#partnerappplatformlimitspreviousattributesinput) or null | The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. |
| `requirements` | Optional | Array of string or null | What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`. `requirements`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributesInput.md#partnerappplatformpreviousattributesinputrequirements). |
| `reserve` | Optional | [PartnerAppPlatformReservePreviousAttributesInput](../models/PartnerAppPlatformReservePreviousAttributesInput.md#partnerappplatformreservepreviousattributesinput) or null | The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. |
| `status` | Optional | string or null | Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`. `status`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributesInput.md#partnerappplatformpreviousattributesinputstatus). |
| `terms_acceptance` | Optional | [PartnerAppPlatformTermsAcceptancePreviousAttributesInput](../models/PartnerAppPlatformTermsAcceptancePreviousAttributesInput.md#partnerappplatformtermsacceptancepreviousattributesinput) or null | The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. |

### PartnerAppPlatformPreviousAttributesInput.capabilities

### PartnerAppPlatformPreviousAttributesInput.capabilities variant 1

anyOf variant 1: One entry per platform capability, in the same order for every app..

- Value shape: Array of [PartnerAppPlatformCapabilityPreviousAttributesInput](../models/PartnerAppPlatformCapabilityPreviousAttributesInput.md#partnerappplatformcapabilitypreviousattributesinput). One entry per platform capability, in the same order for every app. 

### PartnerAppPlatformPreviousAttributesInput.capabilities variant 2

anyOf variant 2.

- Value shape: null. One entry per platform capability, in the same order for every app. 

### PartnerAppPlatformPreviousAttributesInput.requirements

### PartnerAppPlatformPreviousAttributesInput.requirements variant 1

anyOf variant 1: What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met..

- Value shape: Array of string. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`.

### PartnerAppPlatformPreviousAttributesInput.requirements variant 2

anyOf variant 2.

- Value shape: null. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. 

### PartnerAppPlatformPreviousAttributesInput.status

### PartnerAppPlatformPreviousAttributesInput.status variant 1

anyOf variant 1: Where the app is in platform onboarding. No value is final..

- Value shape: string. Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`.

### PartnerAppPlatformPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Where the app is in platform onboarding. No value is final. 

