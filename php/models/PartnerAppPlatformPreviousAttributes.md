[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Optional | Array of [PartnerAppPlatformCapabilityPreviousAttributes](../models/PartnerAppPlatformCapabilityPreviousAttributes.md#partnerappplatformcapabilitypreviousattributes) or null | One entry per platform capability, in the same order for every app. `capabilities`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributescapabilities). |
| `current_terms` | Optional | [PartnerAppPlatformCurrentTermsPreviousAttributes](../models/PartnerAppPlatformCurrentTermsPreviousAttributes.md#partnerappplatformcurrenttermspreviousattributes) or null | The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same. `current_terms`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributescurrent_terms). |
| `limits` | Optional | [PartnerAppPlatformLimitsPreviousAttributes](../models/PartnerAppPlatformLimitsPreviousAttributes.md#partnerappplatformlimitspreviousattributes) or null | The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. |
| `requirements` | Optional | Array of string or null | What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`. `requirements`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributesrequirements). |
| `reserve` | Optional | [PartnerAppPlatformReservePreviousAttributes](../models/PartnerAppPlatformReservePreviousAttributes.md#partnerappplatformreservepreviousattributes) or null | The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. |
| `status` | Optional | string or null | Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`. `status`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributesstatus). |
| `terms_acceptance` | Optional | [PartnerAppPlatformTermsAcceptancePreviousAttributes](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributes) or null | The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. `terms_acceptance`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributesterms_acceptance). |

### PartnerAppPlatformPreviousAttributes.capabilities

### PartnerAppPlatformPreviousAttributes.capabilities variant 1

anyOf variant 1: One entry per platform capability, in the same order for every app..

- Value shape: Array of [PartnerAppPlatformCapabilityPreviousAttributes](../models/PartnerAppPlatformCapabilityPreviousAttributes.md#partnerappplatformcapabilitypreviousattributes). One entry per platform capability, in the same order for every app. 

### PartnerAppPlatformPreviousAttributes.capabilities variant 2

anyOf variant 2.

- Value shape: null. One entry per platform capability, in the same order for every app. 

### PartnerAppPlatformPreviousAttributes.current_terms

The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_due_at` | Conditional | string or null | When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. `acceptance_due_at`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributescurrent_terms-variant-1acceptance_due_at). |
| `platform_terms_version` | Conditional | string or null | The current platform terms version. Send it as platform_terms_version to accept-platform-terms. `platform_terms_version`: [declared alternatives](../models/PartnerAppPlatformCurrentTermsPreviousAttributes.md#partnerappplatformcurrenttermspreviousattributesplatform_terms_version). |
| `url` | Conditional | string or null | Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. `url`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributescurrent_terms-variant-1url). |

### PartnerAppPlatformPreviousAttributes.current_terms variant 1

anyOf PartnerAppPlatformCurrentTermsPreviousAttributes.

- Optional: `acceptance_due_at`, `platform_terms_version`, `url`.

### PartnerAppPlatformPreviousAttributes.current_terms variant 2

anyOf variant 2.

- Undeclared: `acceptance_due_at`, `platform_terms_version`, `url`.
- Value shape: null. The platform terms version Flint accepts now. Send its platform_terms_version to accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version is the same. 

### PartnerAppPlatformPreviousAttributes.current_terms variant 1.acceptance_due_at

### PartnerAppPlatformPreviousAttributes.current_terms variant 1.acceptance_due_at variant 1

anyOf variant 1: When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required..

- Value shape: string. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformPreviousAttributes.current_terms variant 1.acceptance_due_at variant 2

anyOf variant 2.

- Value shape: null. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. 

### PartnerAppPlatformPreviousAttributes.current_terms variant 1.platform_terms_version

Declared alternatives: [PartnerAppPlatformCurrentTermsPreviousAttributes.platform_terms_version](../models/PartnerAppPlatformCurrentTermsPreviousAttributes.md#partnerappplatformcurrenttermspreviousattributesplatform_terms_version).

### PartnerAppPlatformPreviousAttributes.current_terms variant 1.url

### PartnerAppPlatformPreviousAttributes.current_terms variant 1.url variant 1

anyOf variant 1: Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text..

- Value shape: string. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Format: `uri`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformPreviousAttributes.current_terms variant 1.url variant 2

anyOf variant 2.

- Value shape: null. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. 

### PartnerAppPlatformPreviousAttributes.requirements

### PartnerAppPlatformPreviousAttributes.requirements variant 1

anyOf variant 1: What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met..

- Value shape: Array of string. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`.

### PartnerAppPlatformPreviousAttributes.requirements variant 2

anyOf variant 2.

- Value shape: null. What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. 

### PartnerAppPlatformPreviousAttributes.status

### PartnerAppPlatformPreviousAttributes.status variant 1

anyOf variant 1: Where the app is in platform onboarding. No value is final..

- Value shape: string. Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`.

### PartnerAppPlatformPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the app is in platform onboarding. No value is final. 

### PartnerAppPlatformPreviousAttributes.terms_acceptance

The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Conditional | string or null | When Flint recorded the acceptance. `accepted_at`: [declared alternatives](../models/PartnerAppPlatformPreviousAttributes.md#partnerappplatformpreviousattributesterms_acceptance-variant-1accepted_at). |
| `accepted_by` | Conditional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The credential that accepted: a user for a Dashboard session, or an api_key. `accepted_by`: [declared alternatives](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesaccepted_by). |
| `platform_terms_version` | Conditional | string or null | The platform terms version accepted. `platform_terms_version`: [declared alternatives](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesplatform_terms_version). |

### PartnerAppPlatformPreviousAttributes.terms_acceptance variant 1

anyOf PartnerAppPlatformTermsAcceptancePreviousAttributes.

- Optional: `accepted_at`, `accepted_by`, `platform_terms_version`.

### PartnerAppPlatformPreviousAttributes.terms_acceptance variant 2

anyOf variant 2.

- Undeclared: `accepted_at`, `accepted_by`, `platform_terms_version`.
- Value shape: null. The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. 

### PartnerAppPlatformPreviousAttributes.terms_acceptance variant 1.accepted_at

### PartnerAppPlatformPreviousAttributes.terms_acceptance variant 1.accepted_at variant 1

anyOf variant 1: When Flint recorded the acceptance..

- Value shape: string. When Flint recorded the acceptance. When Flint recorded the acceptance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformPreviousAttributes.terms_acceptance variant 1.accepted_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the acceptance. 

### PartnerAppPlatformPreviousAttributes.terms_acceptance variant 1.accepted_by

Declared alternatives: [PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_by](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesaccepted_by).

### PartnerAppPlatformPreviousAttributes.terms_acceptance variant 1.platform_terms_version

Declared alternatives: [PartnerAppPlatformTermsAcceptancePreviousAttributes.platform_terms_version](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesplatform_terms_version).

