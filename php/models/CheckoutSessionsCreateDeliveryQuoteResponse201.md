[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionsCreateDeliveryQuoteResponse201

A response containing `DeliveryQuote` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryQuote](../models/DeliveryQuote.md#deliveryquote) | An estimate of available delivery options and their prices. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

