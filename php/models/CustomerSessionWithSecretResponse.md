[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionWithSecretResponse

A response containing `CustomerSessionWithSecret` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerSessionWithSecret](../models/CustomerSessionWithSecret.md#customersessionwithsecret) | Resource, collection, or operation result returned by this request. A customer session with its `secret` and `refresh_token`, returned only when the session is created or refreshed. A credential for the /v1/me routes that acts as one customer. By default it can read and change the customer's account and commerce data, including saved payment methods and account deletion requests. Explicit capabilities or access-link resource grants narrow that authority. A credential for the /v1/me routes that acts as one customer. By default it can read and change the customer's account and commerce data, including saved payment methods and account deletion requests. Explicit capabilities or access-link resource grants narrow that authority. `data`: [field definitions](../models/CustomerSessionWithSecretResponse.md#customersessionwithsecretresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerSessionWithSecretResponse.data

Resource, collection, or operation result returned by this request. A customer session with its `secret` and `refresh_token`, returned only when the session is created or refreshed. A credential for the /v1/me routes that acts as one customer. By default it can read and change the customer's account and commerce data, including saved payment methods and account deletion requests. Explicit capabilities or access-link resource grants narrow that authority.

Field definitions: [shared fields](CustomerSessionWithSecretInput.md#customersessionwithsecretinput).

### CustomerSessionWithSecretResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

