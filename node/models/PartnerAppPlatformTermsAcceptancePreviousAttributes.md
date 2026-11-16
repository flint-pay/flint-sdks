[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformTermsAcceptancePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Optional | string or null | When Flint recorded the acceptance. `accepted_at`: [declared alternatives](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesaccepted_at). |
| `accepted_by` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The credential that accepted: a user for a Dashboard session, or an api_key. |
| `platform_terms_version` | Optional | string or null | The platform terms version accepted. `platform_terms_version`: [declared alternatives](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesplatform_terms_version). |

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_at

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_at variant 1

anyOf variant 1: When Flint recorded the acceptance..

- Value shape: string. When Flint recorded the acceptance. When Flint recorded the acceptance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the acceptance. 

### PartnerAppPlatformTermsAcceptancePreviousAttributes.platform_terms_version

### PartnerAppPlatformTermsAcceptancePreviousAttributes.platform_terms_version variant 1

anyOf variant 1: The platform terms version accepted..

- Value shape: string. The platform terms version accepted. 

### PartnerAppPlatformTermsAcceptancePreviousAttributes.platform_terms_version variant 2

anyOf variant 2.

- Value shape: null. The platform terms version accepted. 

