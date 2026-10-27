[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomersCreateAccessLinkResponse201

A response containing `AccessLink` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AccessLink](../models/AccessLink.md#accesslink) | A link that opens an order, subscription, Return, or customer's account in the merchant's Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long it works. Its url is a bearer credential, returned only when the link is created. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

