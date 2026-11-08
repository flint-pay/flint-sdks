[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskAttributeInput

One attribute a risk rule can test, with its value type, allowed operators, and whether it is currently available.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_from` | Required | string | The stage from which the attribute's value is known. Values: `"pre_authorization"`, `"post_authorization"`. |
| `enum_values` | Optional | Array of string | The values the attribute can take. Present for `enum` attributes. |
| `is_available` | Required | boolean | Whether the attribute can be used in rules in this environment. |
| `is_nullable` | Required | boolean | Whether the attribute can be missing from a payment. |
| `missing_value_behavior` | Required | string | How a comparison treats a payment that has no value for the attribute. Values: `"not_applicable_except_is_missing"`. |
| `name` | Required | string | Name of the attribute, as a rule's `attribute` field uses it. |
| `operators` | Required | Array of string | Operators accepted by this attribute. Items values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"in_list"`, `"is_missing"`. |
| `unavailable_reason` | Optional | string | Why the attribute can't be used in rules. Present when `is_available` is `false`. Values: `"risk_scoring_not_enabled"`, `"ip_geolocation_not_enabled"`. |
| `value_type` | Required | string | The kind of value the attribute holds. Values: `"money"`, `"currency"`, `"string"`, `"enum"`, `"country"`, `"email"`, `"ip_address"`, `"boolean"`, `"integer"`. |

