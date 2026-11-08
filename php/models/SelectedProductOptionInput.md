[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectedProductOptionInput

An option and value chosen for a product variant, such as size Large.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `option_id` | Required | string | Identifier of the selected product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. |
| `option_name` | Required | string | Name of the selected product option. |
| `option_value_id` | Required | string | Identifier of the selected option value. Example: `"optv_01KEZF7C0078SVZ1T7PVRXQK7F"`. |
| `value` | Required | string | Selected value of the product option. |

