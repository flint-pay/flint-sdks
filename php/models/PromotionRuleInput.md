[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleInput

One condition in a promotion rule group, which tests an attribute with an operator and values.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. |
| `currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. |
| `operator` | Required | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Optional | Array of [PromotionRuleValueInput](../models/PromotionRuleValueInput.md#promotionrulevalueinput) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. |

