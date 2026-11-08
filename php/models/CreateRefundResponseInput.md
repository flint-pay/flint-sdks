[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRefundResponseInput

A response containing `RefundWithGiftCardCodes` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RefundWithGiftCardCodesInput](../models/RefundWithGiftCardCodesInput.md#refundwithgiftcardcodesinput) | Resource, collection, or operation result returned by this request. A refund with newly issued gift card codes available during the command recovery window. Money returned against a collected payment. Money returned against a collected payment. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

