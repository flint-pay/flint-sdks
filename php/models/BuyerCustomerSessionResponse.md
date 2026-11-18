[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerSessionResponse

A customer session's state without its authentication credentials.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCustomerSession](../models/BuyerCustomerSession.md#buyercustomersession) | The customer session, including its status and credential expiry times. A credential for the /v1/me routes that acts as one customer. By default it can read and change the customer's account and commerce data, including saved payment methods and account deletion requests. Explicit capabilities or access-link resource grants narrow that authority. `data`: [field definitions](../models/BuyerCustomerSessionResponse.md#buyercustomersessionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta). |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerCustomerSessionResponse.data

The customer session, including its status and credential expiry times. A credential for the /v1/me routes that acts as one customer. By default it can read and change the customer's account and commerce data, including saved payment methods and account deletion requests. Explicit capabilities or access-link resource grants narrow that authority.

Field definitions: [shared fields](BuyerCustomerSessionInput.md#buyercustomersessioninput).

### BuyerCustomerSessionResponse.meta

Field definitions: [CustomerDeletionRequestResponse.meta](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta).

