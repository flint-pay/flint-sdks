[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinksGetPublicResponse200

A response containing `PublicPaymentLinkResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PublicPaymentLinkResult](../models/PublicPaymentLinkResult.md#publicpaymentlinkresult) | The result of resolving a public payment link: the link, merchant branding, availability, resolved line items, and a resolution context for starting checkout. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

