[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxExemption

Whether an order is tax exempt, and the customer it was assessed from.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | ID of the customer the exemption was assessed from. |
| `source` | Optional | string | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. |
| `tax_exempt` | Required | boolean | Whether the customer is tax-exempt. When `true`, every tax row has zero tax with the reason `customer_exempt`. |

