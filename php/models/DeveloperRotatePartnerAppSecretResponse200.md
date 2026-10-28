[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeveloperRotatePartnerAppSecretResponse200

A response containing `PartnerAppWithRotatedSecret` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppWithRotatedSecret](../models/PartnerAppWithRotatedSecret.md#partnerappwithrotatedsecret) | A partner app returned with its newly issued client secret after rotation. An application that merchants can authorize to access their accounts. An application that merchants can authorize to access their accounts. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

