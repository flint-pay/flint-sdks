[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantsGetResponse200

A response containing `Merchant` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Merchant](../models/Merchant.md#merchant) | The business accepting payments. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

