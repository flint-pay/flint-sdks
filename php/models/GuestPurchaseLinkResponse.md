[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GuestPurchaseLinkResponse

A response containing `GuestPurchaseLink` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [GuestPurchaseLink](../models/GuestPurchaseLink.md#guestpurchaselink) | Result of linking a guest's purchases to a customer, with the customer, the email, and the number of orders linked. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

