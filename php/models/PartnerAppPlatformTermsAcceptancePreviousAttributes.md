[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformTermsAcceptancePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Optional | string or null | When Flint recorded the acceptance. `accepted_at`: [declared alternatives](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesaccepted_at). |
| `accepted_by` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The credential that accepted: a user for a Dashboard session, or an api_key. `accepted_by`: [declared alternatives](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesaccepted_by). |
| `platform_terms_version` | Optional | string or null | The platform terms version accepted. `platform_terms_version`: [declared alternatives](../models/PartnerAppPlatformTermsAcceptancePreviousAttributes.md#partnerappplatformtermsacceptancepreviousattributesplatform_terms_version). |

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_at

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_at variant 1

anyOf variant 1: When Flint recorded the acceptance..

- Value shape: string. When Flint recorded the acceptance. When Flint recorded the acceptance. Format: `date-time`. 

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_at variant 2

anyOf variant 2.

- Value shape: null. When Flint recorded the acceptance. 

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_by

The credential that accepted: a user for a Dashboard session, or an api_key.

Field definitions: [shared fields](ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_by variant 1

anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that accepted: a user for a Dashboard session, or an api_key. 

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_by variant 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### PartnerAppPlatformTermsAcceptancePreviousAttributes.accepted_by variant 1.resource_type

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type).

### PartnerAppPlatformTermsAcceptancePreviousAttributes.platform_terms_version

### PartnerAppPlatformTermsAcceptancePreviousAttributes.platform_terms_version variant 1

anyOf variant 1: The platform terms version accepted..

- Value shape: string. The platform terms version accepted. 

### PartnerAppPlatformTermsAcceptancePreviousAttributes.platform_terms_version variant 2

anyOf variant 2.

- Value shape: null. The platform terms version accepted. 

