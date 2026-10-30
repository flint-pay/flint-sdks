[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerVerificationResponse

A response containing `CustomerVerification` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerVerification](../models/CustomerVerification.md#customerverification) | An email verification requested for linking guest purchases. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

