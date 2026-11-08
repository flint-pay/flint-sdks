[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScopeAll







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | Handles of catalog categories. An item matches when any of its categories is listed. Up to 100 values. maxItems: `0`. Items: minLength: `1`. |
| `channel_types` | Optional | Array of string | Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or `subscription`. Up to 100 values. maxItems: `0`. Items: minLength: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`. |
| `location_ids` | Optional | Array of string | IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: `0`. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `match_type` | Required | string | all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Values: `"all"`. |
| `product_ids` | Optional | Array of string | IDs of the products the policy covers. Up to 100 values. maxItems: `0`. Items: minLength: `1`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `variant_ids` | Optional | Array of string | IDs of the variants the policy covers. Up to 100 values. maxItems: `0`. Items: minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### ReturnPolicyScopeAll variant 1: `match_type` = `"all"`

anyOf ReturnPolicyScopeAll: Declared schema ReturnPolicyScopeAll. The `all` variant of `ReturnPolicyScope`..

No additional constraints.

### ReturnPolicyScopeAll variant 2: `match_type` = `"all"`

anyOf ReturnPolicyScopeAll: Declared schema ReturnPolicyScopeAllRequest. The `all` variant of `ReturnPolicyScope`..

No additional constraints.

