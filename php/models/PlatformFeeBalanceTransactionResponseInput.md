[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeBalanceTransactionResponseInput

A response containing `PlatformFeeBalanceTransaction` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PlatformFeeBalanceTransactionInput](../models/PlatformFeeBalanceTransactionInput.md#platformfeebalancetransactioninput) | Resource, collection, or operation result returned by this request. One entry of a partner app's platform fee ledger. Entries keep their amounts; status, available_at and the payout link can be filled later. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

