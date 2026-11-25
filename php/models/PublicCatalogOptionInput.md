[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicCatalogOptionInput

An active product option, with the values its available variants use.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Product option name, such as Size or Color. |
| `option_id` | Required | string | ID of the product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. |
| `values` | Required | Array of [PublicCatalogOptionValueInput](../models/PublicCatalogOptionValueInput.md#publiccatalogoptionvalueinput) | Values used by at least one available variant, in product option value position order. |

