[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectableErrorResource

A resource the caller can select for a request field.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount for this choice when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/SelectableErrorResource.md#selectableerrorresourceamount_money). |
| `display_name` | Optional | string | Resource display name when available. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | Most recent payment failure when available. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. |
| `payment_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Payment collection details when available. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `resource_id` | Required | string | Public Flint ID to submit in the refused request field. |
| `resource_type` | Required | string | Stable public resource name for this choice. Values: [140 declared values](APIKey.md#apikeycreated_by-resource_type-values). |
| `status` | Optional | string | Current public status when available. |
| `supported_actions` | Optional | Array of string | Actions offered for this resource when the request was refused. An empty array means no action is offered; an omitted field means actions were not reported. |
| `tip_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tip for this choice when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/SelectableErrorResource.md#selectableerrorresourcetip_money). |

### SelectableErrorResource.amount_money

Amount for this choice when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### SelectableErrorResource.tip_money

Tip for this choice when available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

