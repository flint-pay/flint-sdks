[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScope







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Conditional | Array of string | Handles of catalog categories. An item matches when any of its categories is listed. Up to 100 values. Items: minLength: `1`. |
| `channel_types` | Conditional | Array of string | Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or `subscription`. Up to 100 values. Items: minLength: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`. |
| `location_ids` | Conditional | Array of string | IDs of the Locations the item was fulfilled from. Up to 100 values. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `match_type` | Required | string | all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Values: `"all"`, `"include"`. |
| `product_ids` | Conditional | Array of string | IDs of the products the policy covers. Up to 100 values. Items: minLength: `1`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `variant_ids` | Conditional | Array of string | IDs of the variants the policy covers. Up to 100 values. Items: minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### ReturnPolicyScope variant 1: `match_type` = `"all"`

anyOf variant 1: Declared schema ReturnPolicyScope. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "all": The `all` variant of `ReturnPolicyScope`..

- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: maxItems: `0`.
- Constraints for `channel_types`: maxItems: `0`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `location_ids`: maxItems: `0`.
- Constraints for `match_type`: Values: `"all"`.
- Constraints for `product_ids`: maxItems: `0`.
- Constraints for `variant_ids`: maxItems: `0`.

### ReturnPolicyScope variant 2: `match_type` = `"include"`

anyOf variant 1: Declared schema ReturnPolicyScope. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyScope variant 3: `match_type` = `"include"`

anyOf variant 1: Declared schema ReturnPolicyScope. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyScope variant 4: `match_type` = `"include"`

anyOf variant 1: Declared schema ReturnPolicyScope. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScope variant 5: `match_type` = `"include"`

anyOf variant 1: Declared schema ReturnPolicyScope. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScope variant 6: `match_type` = `"include"`

anyOf variant 1: Declared schema ReturnPolicyScope. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScope variant 7: `match_type` = `"all"`

anyOf variant 2: Declared schema ReturnPolicyScopeRequest. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "all": The `all` variant of `ReturnPolicyScope`..

- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: maxItems: `0`.
- Constraints for `channel_types`: maxItems: `0`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `location_ids`: maxItems: `0`.
- Constraints for `match_type`: Values: `"all"`.
- Constraints for `product_ids`: maxItems: `0`.
- Constraints for `variant_ids`: maxItems: `0`.

### ReturnPolicyScope variant 8: `match_type` = `"include"`

anyOf variant 2: Declared schema ReturnPolicyScopeRequest. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyScope variant 9: `match_type` = `"include"`

anyOf variant 2: Declared schema ReturnPolicyScopeRequest. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyScope variant 10: `match_type` = `"include"`

anyOf variant 2: Declared schema ReturnPolicyScopeRequest. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScope variant 11: `match_type` = `"include"`

anyOf variant 2: Declared schema ReturnPolicyScopeRequest. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScope variant 12: `match_type` = `"include"`

anyOf variant 2: Declared schema ReturnPolicyScopeRequest. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.; oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `match_type`: Values: `"include"`.

