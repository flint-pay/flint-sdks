[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnResolutionCheckoutSessionResponse

A response containing `BuyerCheckoutSessionWithSecret` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret) | The checkout session with its checkout credential. For hosted checkout, send the buyer to url. For embedded checkout, pass checkout_auth_token to your checkout client. A session in which a buyer completes an order's payment. A session in which a buyer completes an order's payment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

