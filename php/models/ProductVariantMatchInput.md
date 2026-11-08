[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantMatchInput

A single variant witness on product list rows only. With exact variant filters, the first variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the paginated nested variant list to enumerate every match.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Name of the matching variant, when set. |
| `product_id` | Required | string | Identifier of the product the matching variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `sku` | Optional | string | Stock keeping unit of the matching variant, when set. |
| `variant_id` | Required | string | Identifier of the variant that matched the product list's variant filters or query. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

