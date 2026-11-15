[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RememberedBuyerResponseInput

A response containing `RememberedBuyer` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RememberedBuyerInput](../models/RememberedBuyerInput.md#rememberedbuyerinput) | Resource, collection, or operation result returned by this request. An email remembered after a checkout code. This identity never opens saved cards; the buyer must confirm another code. Ended identities are not found. Tokens work only at the business and in the live or sandbox environment that received them. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

