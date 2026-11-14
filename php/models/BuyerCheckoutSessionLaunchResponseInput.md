[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCheckoutSessionLaunchResponseInput

A response containing `BuyerCheckoutSessionWithSecret` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCheckoutSessionWithSecretInput](../models/BuyerCheckoutSessionWithSecretInput.md#buyercheckoutsessionwithsecretinput) | Resource, collection, or operation result returned by this request. The checkout session with any newly issued checkout credential. Hosted launches return url without checkout_auth_token. Headless launches return checkout_auth_token without url. Customer binding confirmation returns its newly issued credential for either surface. A session in which a buyer completes an order's payment. A session in which a buyer completes an order's payment. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

