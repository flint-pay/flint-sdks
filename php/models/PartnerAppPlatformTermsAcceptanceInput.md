[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformTermsAcceptanceInput

Who accepted a version of Flint's platform terms, and when.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Required | string | When Flint recorded the acceptance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `accepted_by` | Required | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The credential that accepted: a user for a Dashboard session, or an api_key. A reference to another resource by `resource_type` and `resource_id`. |
| `platform_terms_version` | Required | string | The platform terms version accepted. |

