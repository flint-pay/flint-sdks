[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScope

The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Conditional | Array of string | Items: minLength: `1`. |
| `channel_types` | Conditional | Array of string | Items: minLength: `1`. |
| `location_ids` | Conditional | Array of string | Items: minLength: `1`. |
| `match_type` | Optional | string | Values: `"all"`, `"include"`. |
| `product_ids` | Conditional | Array of string | Items: minLength: `1`. |
| `variant_ids` | Conditional | Array of string | Items: minLength: `1`. |

### ReturnPolicyScope variant 1: `match_type` = `"all"`

oneOf variant 1.

- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: maxItems: `0`.
- Constraints for `channel_types`: maxItems: `0`.
- Constraints for `location_ids`: maxItems: `0`.
- Constraints for `match_type`: Values: `"all"`.
- Constraints for `product_ids`: maxItems: `0`.
- Constraints for `variant_ids`: maxItems: `0`.

### ReturnPolicyScope variant 2: `match_type` = `"include"`

oneOf variant 2; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyScope variant 3: `match_type` = `"include"`

oneOf variant 2; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyScope variant 4: `match_type` = `"include"`

oneOf variant 2; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScope variant 5: `match_type` = `"include"`

oneOf variant 2; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScope variant 6: `match_type` = `"include"`

oneOf variant 2; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

