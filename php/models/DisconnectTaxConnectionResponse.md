[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisconnectTaxConnectionResponse

A response containing `DisconnectTaxConnectionResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DisconnectTaxConnectionResult](../models/DisconnectTaxConnectionResult.md#disconnecttaxconnectionresult) | The disconnected automatic tax connection and merchant settings after the requested default-tax change. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

