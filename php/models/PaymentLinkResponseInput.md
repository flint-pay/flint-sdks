[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkResponseInput

A response containing `PaymentLink` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentLinkInput](../models/PaymentLinkInput.md#paymentlinkinput) | A reusable link that opens checkout. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

