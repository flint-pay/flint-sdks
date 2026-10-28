[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotatePartnerAppSecretResponseInput

A response containing `PartnerAppWithRotatedSecret` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppWithRotatedSecretInput](../models/PartnerAppWithRotatedSecretInput.md#partnerappwithrotatedsecretinput) | A partner app returned with its newly issued client secret after rotation. An application that merchants can authorize to access their accounts. An application that merchants can authorize to access their accounts. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

