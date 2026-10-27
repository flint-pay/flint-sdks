[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyScopeAll

The `all` variant of `ReturnPolicyScope`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Optional | Array of string | maxItems: `0`. Items: minLength: `1`. |
| `channel_types` | Optional | Array of string | maxItems: `0`. Items: minLength: `1`. |
| `location_ids` | Optional | Array of string | maxItems: `0`. Items: minLength: `1`. |
| `match_type` | Required | string | all covers every item and requires every selector to be empty. include covers only what the selectors name and requires at least one nonempty selector. Values: `"all"`. |
| `product_ids` | Optional | Array of string | maxItems: `0`. Items: minLength: `1`. |
| `variant_ids` | Optional | Array of string | maxItems: `0`. Items: minLength: `1`. |

