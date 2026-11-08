[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionResponse

A customer session's state without its authentication credentials.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerSession](../models/CustomerSession.md#customersession) | The customer session, including its status and credential expiry times. A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion. `data`: [field definitions](../models/CustomerSessionResponse.md#customersessionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta). |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerSessionResponse.data

The customer session, including its status and credential expiry times. A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion.

Field definitions: [shared fields](CustomerSessionInput.md#customersessioninput).

### CustomerSessionResponse.meta

Field definitions: [CustomerDeletionRequestResponse.meta](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta).

