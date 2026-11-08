[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScopeRequestInput

Request input. Response: [ReturnPolicyScope](../models/ReturnPolicyScope.md#returnpolicyscope).

The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.





Field definitions: [shared fields](ReturnPolicyScope.md#returnpolicyscope).

### ReturnPolicyScopeRequestInput variant 1: `match_type` = `"all"`

oneOf with match_type: "all": The `all` variant of `ReturnPolicyScope`..

- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: maxItems: `0`.
- Constraints for `channel_types`: maxItems: `0`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `location_ids`: maxItems: `0`.
- Constraints for `match_type`: Values: `"all"`.
- Constraints for `product_ids`: maxItems: `0`.
- Constraints for `variant_ids`: maxItems: `0`.

### ReturnPolicyScopeRequestInput variant 2: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyScopeRequestInput variant 3: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyScopeRequestInput variant 4: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScopeRequestInput variant 5: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyScopeRequestInput variant 6: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `match_type`: Values: `"include"`.

