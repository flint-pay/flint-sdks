[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerTaxID

A copy of one of the customer's `tax_identity.tax_ids`. Frozen once the order is paid; recalculating tax before payment reads the customer again.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `identifier_type` | Required | string | Type of the tax ID, as entered on the customer. |
| `region` | Required | string or null | Region of the tax ID. `null` when the tax ID has no region. |
| `value` | Required | string | The tax ID. |

