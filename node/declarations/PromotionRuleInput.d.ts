
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PromotionRuleValueInput } from './PromotionRuleValueInput.js';

export type PromotionRuleInput = { /** Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. */ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; };
