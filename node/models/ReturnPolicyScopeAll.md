[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScopeAll







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Handles of catalog categories. An item matches when any of its categories is listed. Up to 100 values. maxItems: `100`. uniqueItems: `true`. maxItems: `0`. Items: After trimming surrounding whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single hyphens. Values must be unique after trimming. minLength: `1`. Handles of catalog categories. An item matches when any of its categories is listed. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: After trimming surrounding whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single hyphens. Values must be unique after trimming. minLength: `1`. maxItems: `0`. |
| `channel_types` | Optional | Array of string | Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or `subscription`. Up to 100 values. maxItems: `100`. uniqueItems: `true`. maxItems: `0`. Items: minLength: `1`. maxLength: `255`. Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or `subscription`. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `255`. maxItems: `0`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`. |
| `location_ids` | Optional | Array of string | IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: `100`. uniqueItems: `true`. maxItems: `0`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. maxItems: `0`. |
| `match_type` | Required | string | all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Values: `"all"`. |
| `product_ids` | Optional | Array of string | IDs of the products the policy covers. Up to 100 values. maxItems: `100`. uniqueItems: `true`. maxItems: `0`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. IDs of the products the policy covers. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. maxItems: `0`. |
| `variant_ids` | Optional | Array of string | IDs of the variants the policy covers. Up to 100 values. maxItems: `100`. uniqueItems: `true`. maxItems: `0`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. IDs of the variants the policy covers. Up to 100 values. maxItems: `100`. uniqueItems: `true`. Items: A nonblank value of at most 255 bytes, counted before trimming. minLength: `1`. maxLength: `255`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. maxItems: `0`. |

### ReturnPolicyScopeAll variant 1: `match_type` = `"all"`

anyOf ReturnPolicyScopeAll: Declared schema ReturnPolicyScopeAll. The `all` variant of `ReturnPolicyScope`..

No additional constraints.

### ReturnPolicyScopeAll variant 2: `match_type` = `"all"`

anyOf ReturnPolicyScopeAll: Declared schema ReturnPolicyScopeAllRequest. The `all` variant of `ReturnPolicyScope`..

No additional constraints.

