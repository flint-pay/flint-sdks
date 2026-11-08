[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformTermsAcceptance

Who accepted a version of Flint's platform terms, and when.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Required | string | When Flint recorded the acceptance. Format: `date-time`. |
| `accepted_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) | The credential that accepted: a user for a Dashboard session, or an api_key. A reference to another resource by `resource_type` and `resource_id`. `accepted_by`: [field definitions](../models/PartnerAppResponse.md#partnerappresponsedataplatformterms_acceptance-variant-1accepted_by). |
| `platform_terms_version` | Required | string | The platform terms version accepted. |

### PartnerAppPlatformTermsAcceptance.accepted_by

Field definitions: [PartnerAppResponse.data.platform.terms_acceptance variant 1.accepted_by](../models/PartnerAppResponse.md#partnerappresponsedataplatformterms_acceptance-variant-1accepted_by).

