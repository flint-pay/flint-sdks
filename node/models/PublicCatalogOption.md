[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicCatalogOption

An active product option, with the values its available variants use.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Product option name, such as Size or Color. |
| `option_id` | Required | string | ID of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. |
| `values` | Required | Array of [PublicCatalogOptionValue](../models/PublicCatalogOptionValue.md#publiccatalogoptionvalue) | Values used by at least one available variant, in product option value position order. |

