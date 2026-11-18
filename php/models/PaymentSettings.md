[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSettings

Settings for the statement text on new payments.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `statement_descriptor` | Required | string or null | Static text shown on buyers' statements for new payments. `null` when the provider default is used. Changing it does not change past payments. Once this setting has been applied, changes made directly in the processor are overwritten by Flint's applied value. |
| `statement_descriptor_status` | Optional | [StatementDescriptorStatus](../models/StatementDescriptorStatus.md#statementdescriptorstatus) | Stripe's current decision, returned by GET /v1/settings and GET /v1/settings/effective. A successful save does not guarantee Stripe will accept the name. Stripe's current decision about the card statement name. |

