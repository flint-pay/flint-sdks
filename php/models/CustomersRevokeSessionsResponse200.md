[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomersRevokeSessionsResponse200

A response containing `CustomerSessionsRevocation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerSessionsRevocation](../models/CustomerSessionsRevocation.md#customersessionsrevocation) | The result of revoking a customer's sessions: the customer ID and how many sessions were revoked. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

