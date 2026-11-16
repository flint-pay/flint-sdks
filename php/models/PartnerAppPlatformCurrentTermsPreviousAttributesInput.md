[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformCurrentTermsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `acceptance_due_at` | Optional | string or null | When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. `acceptance_due_at`: [declared alternatives](../models/PartnerAppPlatformCurrentTermsPreviousAttributesInput.md#partnerappplatformcurrenttermspreviousattributesinputacceptance_due_at). |
| `platform_terms_version` | Optional | string or null | The current platform terms version. Send it as platform_terms_version to accept-platform-terms. `platform_terms_version`: [declared alternatives](../models/PartnerAppPlatformCurrentTermsPreviousAttributesInput.md#partnerappplatformcurrenttermspreviousattributesinputplatform_terms_version). |
| `url` | Optional | string or null | Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. `url`: [declared alternatives](../models/PartnerAppPlatformCurrentTermsPreviousAttributesInput.md#partnerappplatformcurrenttermspreviousattributesinputurl). |

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.acceptance_due_at

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.acceptance_due_at variant 1

anyOf variant 1: When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required..

- Value shape: string. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.acceptance_due_at variant 2

anyOf variant 2.

- Value shape: null. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. 

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.platform_terms_version

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.platform_terms_version variant 1

anyOf variant 1: The current platform terms version. Send it as platform_terms_version to accept-platform-terms..

- Value shape: string. The current platform terms version. Send it as platform_terms_version to accept-platform-terms. 

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.platform_terms_version variant 2

anyOf variant 2.

- Value shape: null. The current platform terms version. Send it as platform_terms_version to accept-platform-terms. 

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.url

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.url variant 1

anyOf variant 1: Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text..

- Value shape: string. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Format: `uri`. Example: `"https://example.com/receipt"`. 

### PartnerAppPlatformCurrentTermsPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. 

