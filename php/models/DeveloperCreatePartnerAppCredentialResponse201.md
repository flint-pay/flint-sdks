[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperCreatePartnerAppCredentialResponse201

A response containing `PartnerAppCredential` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential) | An immutable partner app credential, including its authentication status and usage timestamps. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

