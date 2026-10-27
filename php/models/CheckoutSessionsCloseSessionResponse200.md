[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionsCloseSessionResponse200

A response containing `CheckoutSession` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | A session in which a buyer completes an order's payment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

