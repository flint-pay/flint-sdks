[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodDomainsCreateResponse201

A response containing `PaymentMethodDomain` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentMethodDomain](../models/PaymentMethodDomain.md#paymentmethoddomain) | A domain registered for browser payment methods. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

