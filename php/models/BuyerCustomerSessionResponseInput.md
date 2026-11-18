[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerSessionResponseInput

A customer session's state without its authentication credentials.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCustomerSessionInput](../models/BuyerCustomerSessionInput.md#buyercustomersessioninput) | The customer session, including its status and credential expiry times. A credential for the /v1/me routes that acts as one customer. By default it can read and change the customer's account and commerce data, including saved payment methods and account deletion requests. Explicit capabilities or access-link resource grants narrow that authority. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

