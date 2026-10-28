[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionsCreateCustomerVerificationResponse200

A response containing `CheckoutSessionCustomerVerification` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CheckoutSessionCustomerVerification](../models/CheckoutSessionCustomerVerification.md#checkoutsessioncustomerverification) | A request for a checkout verification code. A request with channel email reads the same whether or not Flint sent a code. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

