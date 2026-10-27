[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRule

A rule for assessing and handling payment risk.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `applicability` | Required | string | Values: `"all_payments"`, `"on_session_only"`. |
| `archived_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `attributes_used` | Required | Array of string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. |
| `description` | Required | string |  |
| `issues` | Required | Array of [RiskRuleIssue](../models/RiskRuleIssue.md#riskruleissue) | Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active rule with issues is skipped on every payment and protects nothing until you fix it. An inactive rule with issues can't be activated until you fix it. |
| `origin` | Required | string | Values: `"system_default"`, `"merchant"`. |
| `predicate` | Required | Alternative shapes (see declared variants) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/RiskRule.md#riskrulepredicate). |
| `risk_rule_id` | Required | string |  |
| `stage` | Required | string | Values: `"pre_authorization"`, `"post_authorization"`. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### RiskRule.predicate

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | minItems: `1`. maxItems: `50`. `all[]`: [declared alternatives](../models/RiskRule.md#riskrulepredicate-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | minItems: `1`. maxItems: `50`. `any[]`: [declared alternatives](../models/RiskRule.md#riskrulepredicate-variant-1all). |
| `not` | Conditional | Alternative shapes (see declared variants) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `not`: [declared alternatives](../models/RiskRule.md#riskrulepredicate-variant-1all). |
| `attribute` | Conditional | string |  |
| `operator` | Conditional | string |  |
| `value` | Conditional | string or integer or boolean | `value`: [declared alternatives](../models/RiskRule.md#riskrulepredicate-variant-1all-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskRule.md#riskrulepredicate-variant-1all-variant-4value). |
| `list_alias` | Conditional | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskRule.predicate variant 1

oneOf variant 1.

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRule.predicate variant 2

oneOf variant 2.

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRule.predicate variant 3

oneOf variant 3.

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRule.predicate variant 4

oneOf variant 4.

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRule.predicate variant 5: `attribute` = `"amount_money"`

oneOf variant 5.

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRule.predicate variant 6: `operator` = `"in"`

oneOf variant 6.

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskRule.predicate variant 7: `operator` = `"in_list"`

oneOf variant 7.

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskRule.predicate variant 8: `operator` = `"is_missing"`

oneOf variant 8.

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskRule.predicate variant 1.all[]

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | minItems: `1`. maxItems: `50`. Items: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `all[]`: [field definitions](../models/RiskRule.md#riskrulepredicate). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | minItems: `1`. maxItems: `50`. Items: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `any[]`: [field definitions](../models/RiskRule.md#riskrulepredicate). |
| `not` | Conditional | Alternative shapes (see declared variants) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `not`: [field definitions](../models/RiskRule.md#riskrulepredicate). |
| `attribute` | Conditional | string |  |
| `operator` | Conditional | string |  |
| `value` | Conditional | string or integer or boolean | `value`: [declared alternatives](../models/RiskRule.md#riskrulepredicate-variant-1all-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskRule.md#riskrulepredicate-variant-1all-variant-4value). |
| `list_alias` | Conditional | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskRule.predicate variant 1.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRule.predicate variant 1.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRule.predicate variant 1.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRule.predicate variant 1.all[] variant 4

oneOf variant 4.

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRule.predicate variant 1.all[] variant 5: `attribute` = `"amount_money"`

oneOf variant 5.

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRule.predicate variant 1.all[] variant 6: `operator` = `"in"`

oneOf variant 6.

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskRule.predicate variant 1.all[] variant 7: `operator` = `"in_list"`

oneOf variant 7.

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskRule.predicate variant 1.all[] variant 8: `operator` = `"is_missing"`

oneOf variant 8.

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskRule.predicate variant 1.all[] variant 1.all[]

Field definitions: [RiskRule.predicate](../models/RiskRule.md#riskrulepredicate).

### RiskRule.predicate variant 1.all[] variant 2.any[]

Field definitions: [RiskRule.predicate](../models/RiskRule.md#riskrulepredicate).

### RiskRule.predicate variant 1.all[] variant 3.not

Field definitions: [RiskRule.predicate](../models/RiskRule.md#riskrulepredicate).

### RiskRule.predicate variant 1.all[] variant 4.value

### RiskRule.predicate variant 1.all[] variant 4.value variant 1

oneOf variant 1.

- Value shape: string. minLength: `1`. 

### RiskRule.predicate variant 1.all[] variant 4.value variant 2

oneOf variant 2.

- Value shape: integer.  

### RiskRule.predicate variant 1.all[] variant 4.value variant 3

oneOf variant 3.

- Value shape: boolean.  

### RiskRule.predicate variant 1.all[] variant 6.values[]

Declared alternatives: [RiskRule.predicate variant 1.all[] variant 4.value](../models/RiskRule.md#riskrulepredicate-variant-1all-variant-4value).

### RiskRule.predicate variant 2.any[]

Declared alternatives: [RiskRule.predicate variant 1.all[]](../models/RiskRule.md#riskrulepredicate-variant-1all).

### RiskRule.predicate variant 3.not

Declared alternatives: [RiskRule.predicate variant 1.all[]](../models/RiskRule.md#riskrulepredicate-variant-1all).

### RiskRule.predicate variant 4.value

Declared alternatives: [RiskRule.predicate variant 1.all[] variant 4.value](../models/RiskRule.md#riskrulepredicate-variant-1all-variant-4value).

### RiskRule.predicate variant 6.values[]

Declared alternatives: [RiskRule.predicate variant 1.all[] variant 4.value](../models/RiskRule.md#riskrulepredicate-variant-1all-variant-4value).

