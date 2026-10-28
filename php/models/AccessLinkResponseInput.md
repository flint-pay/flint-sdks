[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AccessLinkResponseInput

A response containing `AccessLink` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AccessLinkInput](../models/AccessLinkInput.md#accesslinkinput) | A link that opens an order, subscription, Return, or customer's account in the merchant's Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long it works. Its url is a bearer credential, returned only when the link is created. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

