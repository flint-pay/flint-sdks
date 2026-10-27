[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemption

Whether an order is tax exempt, and the customer it was assessed from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string |  |
| `source` | Optional | string | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`. |
| `tax_exempt` | Required | boolean |  |

