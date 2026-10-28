[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeSavePaymentMethodResponse201

A response containing `BuyerPaymentMethodWithSetup` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerPaymentMethodWithSetup](../models/BuyerPaymentMethodWithSetup.md#buyerpaymentmethodwithsetup) | The saved payment method, with `client_setup` when the buyer must still complete processor setup before the payment method can be used. A customer's saved payment details. A customer's saved payment details. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

