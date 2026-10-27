[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperGetPartnerAppInstallResponse200

A response containing `PartnerAppInstall` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppInstall](../models/PartnerAppInstall.md#partnerappinstall) | A merchant's authorization of a partner application. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

