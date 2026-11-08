[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSettings

Settings for the statement text on new payments.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statement_descriptor` | Required | string or null | Static text shown on buyers' statements for new payments. `null` when the provider default is used. Changing it does not change past payments. Once this setting has been applied, changes made directly in the processor are overwritten by Flint's applied value. |

