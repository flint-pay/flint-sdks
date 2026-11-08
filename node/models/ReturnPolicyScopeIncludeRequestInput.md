[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScopeIncludeRequestInput

Request input. Response: [ReturnPolicyScopeInclude](../models/ReturnPolicyScopeInclude.md#returnpolicyscopeinclude).

The `include` variant of `ReturnPolicyScope`.





Field definitions: [shared fields](ReturnPolicyScopeInclude.md#returnpolicyscopeinclude).

### ReturnPolicyScopeIncludeRequestInput variant 1: `match_type` = `"include"`

anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyScopeIncludeRequestInput variant 2: `match_type` = `"include"`

anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyScopeIncludeRequestInput variant 3: `match_type` = `"include"`

anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.

### ReturnPolicyScopeIncludeRequestInput variant 4: `match_type` = `"include"`

anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.

### ReturnPolicyScopeIncludeRequestInput variant 5: `match_type` = `"include"`

anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.

