[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskRuleResponse

A response containing `RiskRule` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RiskRule](../models/RiskRule.md#riskrule) | Resource, collection, or operation result returned by this request. A rule for assessing and handling payment risk. `data`: [field definitions](../models/RiskRuleResponse.md#riskruleresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RiskRuleResponse.data

Resource, collection, or operation result returned by this request. A rule for assessing and handling payment risk.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | What Flint does with a payment the rule matches. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `applicability` | Required | string | Which payments the rule applies to. Values: `"all_payments"`, `"on_session_only"`. |
| `archived_at` | Required | string or null | RFC3339 timestamp. `null` when the resource isn't archived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `attributes_used` | Required | Array of string | Names of the payment attributes the rule reads. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. `created_by`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatacreated_by). |
| `description` | Required | string | Your note on what the rule is for. Leading and trailing whitespace is trimmed. |
| `issues` | Required | Array of [RiskRuleIssue](../models/RiskRuleIssue.md#riskruleissue) | Problems that stop Flint from evaluating this rule. Empty when the rule can run. An active rule with issues is skipped on every payment and protects nothing until you fix it. An inactive rule with issues can't be activated until you fix it. |
| `origin` | Required | string | Whether Flint manages the rule or you created it. Values: `"system_default"`, `"merchant"`. |
| `predicate` | Required | Alternative shapes (see declared variants) | The condition a payment must meet for the rule to match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate). |
| `risk_rule_id` | Required | string | ID of the saved rule to check. Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. |
| `stage` | Required | string | When Flint evaluates the rule for a payment. Values: `"pre_authorization"`, `"post_authorization"`. |
| `status` | Required | string | Whether the rule runs. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Increases on every change to the rule. Send it as expected_version to avoid overwriting someone else's change. Format: `int64`. |

### RiskRuleResponse.data.created_by

The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode.

Field definitions: [shared fields](PaymentReviewResponse.md#paymentreviewresponsedataclosed_by).

### RiskRuleResponse.data.created_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### RiskRuleResponse.data.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that created this rule. Null when Flint created it, as for Flint's default rules. The reference may name an API key in the other mode. 

### RiskRuleResponse.data.predicate

The condition a payment must meet for the rule to match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Predicates that must all match. minItems: `1`. maxItems: `50`. `all[]`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Predicates of which at least one must match. minItems: `1`. maxItems: `50`. `any[]`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all). |
| `not` | Conditional | Alternative shapes (see declared variants) | The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `not`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not). |
| `attribute` | Conditional | string | The payment attribute to test. Read the attribute registry for the names a rule can use. |
| `operator` | Conditional | string | How the attribute is compared. |
| `value` | Conditional | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to compare with. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-6values). |
| `list_alias` | Conditional | string | Alias of the risk list to look the attribute's value up in. minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskRuleResponse.data.predicate variant 1

oneOf RiskPredicateNodeAll: The `All` variant of `RiskPredicateNode`..

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 2

oneOf RiskPredicateNodeAny: The `Any` variant of `RiskPredicateNode`..

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 3

oneOf RiskPredicateNodeNot: The `Not` variant of `RiskPredicateNode`..

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 4

oneOf RiskPredicateNodeComparison: The `Comparison` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRuleResponse.data.predicate variant 5: `attribute` = `"amount_money"`

oneOf RiskPredicateNodeMoneyComparison: The `Money comparison` variant of `RiskPredicateNode`..

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRuleResponse.data.predicate variant 6: `operator` = `"in"`

oneOf RiskPredicateNodeIn: The `In` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskRuleResponse.data.predicate variant 7: `operator` = `"in_list"`

oneOf RiskPredicateNodeInList: The `In list` variant of `RiskPredicateNode`..

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskRuleResponse.data.predicate variant 8: `operator` = `"is_missing"`

oneOf RiskPredicateNodeIsMissing: The `Is missing` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskRuleResponse.data.predicate variant 1.all[]

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Predicates that must all match. minItems: `1`. maxItems: `50`. `all[]`: [field definitions](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Predicates of which at least one must match. minItems: `1`. maxItems: `50`. `any[]`: [field definitions](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all). |
| `not` | Conditional | Alternative shapes (see declared variants) | The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `not`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not). |
| `attribute` | Conditional | string | The payment attribute to test. Read the attribute registry for the names a rule can use. |
| `operator` | Conditional | string | How the attribute is compared. |
| `value` | Conditional | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to compare with. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-6values). |
| `list_alias` | Conditional | string | Alias of the risk list to look the attribute's value up in. minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskRuleResponse.data.predicate variant 1.all[] variant 1

oneOf RiskPredicateNodeAll: The `All` variant of `RiskPredicateNode`..

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 2

oneOf RiskPredicateNodeAny: The `Any` variant of `RiskPredicateNode`..

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3

oneOf RiskPredicateNodeNot: The `Not` variant of `RiskPredicateNode`..

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 4

oneOf RiskPredicateNodeComparison: The `Comparison` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 5: `attribute` = `"amount_money"`

oneOf RiskPredicateNodeMoneyComparison: The `Money comparison` variant of `RiskPredicateNode`..

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 6: `operator` = `"in"`

oneOf RiskPredicateNodeIn: The `In` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 7: `operator` = `"in_list"`

oneOf RiskPredicateNodeInList: The `In list` variant of `RiskPredicateNode`..

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 8: `operator` = `"is_missing"`

oneOf RiskPredicateNodeIsMissing: The `Is missing` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 1.all[]

Field definitions: [RiskRuleResponse.data.predicate variant 1.all[]](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all).

### RiskRuleResponse.data.predicate variant 1.all[] variant 2.any[]

Field definitions: [RiskRuleResponse.data.predicate variant 1.all[]](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all).

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not

The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Predicates that must all match. minItems: `1`. maxItems: `50`. `all[]`: [field definitions](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Predicates of which at least one must match. minItems: `1`. maxItems: `50`. `any[]`: [field definitions](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all). |
| `not` | Conditional | Alternative shapes (see declared variants) | The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `not`: [field definitions](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not). |
| `attribute` | Conditional | string | The payment attribute to test. Read the attribute registry for the names a rule can use. |
| `operator` | Conditional | string | How the attribute is compared. |
| `value` | Conditional | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to compare with. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-6values). |
| `list_alias` | Conditional | string | Alias of the risk list to look the attribute's value up in. minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 1

oneOf RiskPredicateNodeAll: The `All` variant of `RiskPredicateNode`..

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 2

oneOf RiskPredicateNodeAny: The `Any` variant of `RiskPredicateNode`..

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 3

oneOf RiskPredicateNodeNot: The `Not` variant of `RiskPredicateNode`..

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 4

oneOf RiskPredicateNodeComparison: The `Comparison` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 5: `attribute` = `"amount_money"`

oneOf RiskPredicateNodeMoneyComparison: The `Money comparison` variant of `RiskPredicateNode`..

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 6: `operator` = `"in"`

oneOf RiskPredicateNodeIn: The `In` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 7: `operator` = `"in_list"`

oneOf RiskPredicateNodeInList: The `In list` variant of `RiskPredicateNode`..

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 8: `operator` = `"is_missing"`

oneOf RiskPredicateNodeIsMissing: The `Is missing` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 1.all[]

Field definitions: [RiskRuleResponse.data.predicate variant 1.all[]](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all).

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 2.any[]

Field definitions: [RiskRuleResponse.data.predicate variant 1.all[]](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all).

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 3.not

Field definitions: [RiskRuleResponse.data.predicate variant 1.all[] variant 3.not](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not).

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 4.value

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 4.value variant 1

oneOf String.

- Value shape: string. The value to compare with. minLength: `1`. 

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 4.value variant 2

oneOf Integer.

- Value shape: integer. The value to compare with. 

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 4.value variant 3

oneOf Boolean.

- Value shape: boolean. The value to compare with. 

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 6.values[]

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 6.values[] variant 1

oneOf String.

- Value shape: string. minLength: `1`. 

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 6.values[] variant 2

oneOf Integer.

- Value shape: integer.  

### RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 6.values[] variant 3

oneOf Boolean.

- Value shape: boolean.  

### RiskRuleResponse.data.predicate variant 1.all[] variant 4.value

Declared alternatives: [RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 4.value](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-4value).

### RiskRuleResponse.data.predicate variant 1.all[] variant 6.values[]

Declared alternatives: [RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 6.values[]](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-6values).

### RiskRuleResponse.data.predicate variant 2.any[]

Declared alternatives: [RiskRuleResponse.data.predicate variant 1.all[]](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all).

### RiskRuleResponse.data.predicate variant 3.not

Declared alternatives: [RiskRuleResponse.data.predicate variant 1.all[] variant 3.not](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not).

### RiskRuleResponse.data.predicate variant 4.value

Declared alternatives: [RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 4.value](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-4value).

### RiskRuleResponse.data.predicate variant 6.values[]

Declared alternatives: [RiskRuleResponse.data.predicate variant 1.all[] variant 3.not variant 6.values[]](../models/RiskRuleResponse.md#riskruleresponsedatapredicate-variant-1all-variant-3not-variant-6values).

### RiskRuleResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

