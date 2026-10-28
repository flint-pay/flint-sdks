[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectableErrorResourceInput

A resource the caller can select for a request field.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount for this choice when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `display_name` | Optional | string | Resource display name when available. |
| `last_payment_error` | Optional | [PaymentErrorSummaryInput](../models/PaymentErrorSummaryInput.md#paymenterrorsummaryinput) | Most recent payment failure when available. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `payment_collection` | Optional | [PaymentCollectionInput](../models/PaymentCollectionInput.md#paymentcollectioninput) | Payment collection details when available. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `resource_id` | Required | string | Public Flint ID to submit in the refused request field. |
| `resource_type` | Required | string | Stable public resource name for this choice. Values: [140 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |
| `status` | Optional | string | Current public status when available. |
| `supported_actions` | Optional | Array of string | Actions offered for this resource when the request was refused. An empty array means no action is offered; an omitted field means actions were not reported. |
| `tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tip for this choice when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

