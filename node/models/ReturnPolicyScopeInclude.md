[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScopeInclude







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Conditional | Array of string | Handles of catalog categories. An item matches when any of its categories is listed. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: After trimming surrounding whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single hyphens. Values must be unique after trimming. minLength: `1`. |
| `channel_types` | Conditional | Array of string | Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or `subscription`. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `255`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`. |
| `location_ids` | Conditional | Array of string | IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `match_type` | Required | string | all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Values: `"include"`. |
| `product_ids` | Conditional | Array of string | IDs of the products the policy covers. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `variant_ids` | Conditional | Array of string | IDs of the variants the policy covers. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### ReturnPolicyScopeInclude variant 1: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeInclude. The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyScopeInclude variant 2: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeInclude. The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyScopeInclude variant 3: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeInclude. The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.

### ReturnPolicyScopeInclude variant 4: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeInclude. The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.

### ReturnPolicyScopeInclude variant 5: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeInclude. The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.

### ReturnPolicyScopeInclude variant 6: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeIncludeRequest. The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyScopeInclude variant 7: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeIncludeRequest. The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyScopeInclude variant 8: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeIncludeRequest. The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.

### ReturnPolicyScopeInclude variant 9: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeIncludeRequest. The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.

### ReturnPolicyScopeInclude variant 10: `match_type` = `"include"`

anyOf ReturnPolicyScopeInclude: Declared schema ReturnPolicyScopeIncludeRequest. The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.

