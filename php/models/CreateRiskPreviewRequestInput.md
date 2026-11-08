[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequestInput

The request body for: Create a risk preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Conditional | Varies by condition | Action to preview. In stored_rule mode, omitted or null keeps the saved action. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`, `null`. |
| `mode` | Required | string | What to check: a rule in this request, or a saved rule. Values: `"inline"`, `"stored_rule"`. |
| `predicate` | Conditional | Varies by condition | Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate). |
| `risk_rule_id` | Conditional | string | ID of the saved rule to check. minLength: `1`. Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. |

### CreateRiskPreviewRequestInput variant 1: `mode` = `"inline"`

oneOf with mode: "inline": The `inline` variant of `CreateRiskPreviewRequest`..

- Required: `action`, `predicate`.
- Optional: `risk_rule_id`.
- Constraints for `action`: (string or null) and string. minLength: `1`. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`, `null`.
- Constraints for `mode`: Values: `"inline"`.
- Constraints for `predicate`: ([RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) or null) and object.
- Constraints for `risk_rule_id`: ID of a saved rule. Send it to check the action and predicate as an edit to that rule.

### CreateRiskPreviewRequestInput variant 2: `mode` = `"stored_rule"`

oneOf with mode: "stored_rule": The `stored_rule` variant of `CreateRiskPreviewRequest`..

- Required: `risk_rule_id`.
- Optional: `action`, `predicate`.
- Constraints for `action`: string or null. Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`, `null`.
- Constraints for `mode`: Values: `"stored_rule"`.
- Constraints for `predicate`: [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) or null.

### CreateRiskPreviewRequestInput variant 1.predicate

Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.

Field definitions: [shared fields](RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput).

### CreateRiskPreviewRequestInput variant 1.predicate variant 1

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeAllRequest: The `All` variant of `RiskPredicateNode`..

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 2

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeAnyRequest: The `Any` variant of `RiskPredicateNode`..

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 3

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeNotRequest: The `Not` variant of `RiskPredicateNode`..

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 4

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeComparisonRequest: The `Comparison` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 5: `attribute` = `"amount_money"`

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeMoneyComparisonRequest: The `Money comparison` variant of `RiskPredicateNode`..

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 6: `operator` = `"in"`

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeInRequest: The `In` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 7: `operator` = `"in_list"`

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeInListRequest: The `In list` variant of `RiskPredicateNode`..

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 8: `operator` = `"is_missing"`

anyOf RiskPredicateNodeRequest: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.; oneOf RiskPredicateNodeIsMissingRequest: The `Is missing` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### CreateRiskPreviewRequestInput variant 1.predicate variant 9

anyOf variant 2.

- Undeclared: `all`, `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.
- Value shape: object and null. Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. 

### CreateRiskPreviewRequestInput variant 1.predicate variant 4.value

### CreateRiskPreviewRequestInput variant 1.predicate variant 4.value variant 1

oneOf String.

- Value shape: string. The value to compare with. minLength: `1`. 

### CreateRiskPreviewRequestInput variant 1.predicate variant 4.value variant 2

oneOf Integer.

- Value shape: integer. The value to compare with. 

### CreateRiskPreviewRequestInput variant 1.predicate variant 4.value variant 3

oneOf Boolean.

- Value shape: boolean. The value to compare with. 

### CreateRiskPreviewRequestInput variant 1.predicate variant 6.values[]

### CreateRiskPreviewRequestInput variant 1.predicate variant 6.values[] variant 1

oneOf String.

- Value shape: string. minLength: `1`. 

### CreateRiskPreviewRequestInput variant 1.predicate variant 6.values[] variant 2

oneOf Integer.

- Value shape: integer.  

### CreateRiskPreviewRequestInput variant 1.predicate variant 6.values[] variant 3

oneOf Boolean.

- Value shape: boolean.  

