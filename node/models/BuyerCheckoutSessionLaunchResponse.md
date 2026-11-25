[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCheckoutSessionLaunchResponse

A response containing `BuyerCheckoutSessionLaunch` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCheckoutSessionLaunch](../models/BuyerCheckoutSessionLaunch.md#buyercheckoutsessionlaunch) | Resource, collection, or operation result returned by this request. The session returned when launching checkout. Use `url` for hosted checkout or `checkout_auth_token` for headless checkout. A session in which a buyer completes an order's payment. A session in which a buyer completes an order's payment. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

