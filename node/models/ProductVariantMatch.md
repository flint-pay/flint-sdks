[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantMatch

A single variant witness on product list rows only. With exact variant filters, the first variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use the paginated nested variant list to enumerate every match.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Name of the matching variant, when set. |
| `sku` | Optional | string | Stock keeping unit of the matching variant, when set. |
| `variant_id` | Required | string | Identifier of the variant that matched the product list's variant filters or query. |

