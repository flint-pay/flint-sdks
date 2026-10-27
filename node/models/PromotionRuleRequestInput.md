[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleRequestInput

Request input. Response: [PromotionRule](../models/PromotionRule.md#promotionrule).

One condition you set in a promotion rule group, which tests an attribute with an operator and values.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. minLength: `1`. |
| `currency_options` | Optional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. |
| `operator` | Required | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Optional | Array of [PromotionRuleValueRequestInput](../models/PromotionRuleValueRequestInput.md#promotionrulevaluerequestinput) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. |

