[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRememberedBuyerListResponseInput

Every working store-reach remembered buyer for the current customer's email, at most ten. This bounded list has no pagination.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerRememberedBuyerInput](../models/BuyerRememberedBuyerInput.md#buyerrememberedbuyerinput) | Resource, collection, or operation result returned by this request. maxItems: `10`. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

