[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccountRouteTemplatesRequestInput

Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_preferences` | Optional | string or null | Path under `merchant_account_url` for the email preferences page, with no placeholder. `null` when no template is set, so links land on `merchant_account_url`. Send null to clear it. minLength: `1`. |
| `invoice` | Optional | string or null | Path under `merchant_account_url` for an invoice page, containing `{resource_id}` once. `null` when no template is set, so links land on `merchant_account_url`. Send null to clear it. minLength: `1`. |
| `order` | Optional | string or null | Path under `merchant_account_url` for an order page, containing `{resource_id}` once. `null` when no template is set, so links land on `merchant_account_url`. Send null to clear it. minLength: `1`. |
| `return` | Optional | string or null | Path under `merchant_account_url` for a return page, containing `{resource_id}` once. `null` when no template is set, so links land on `merchant_account_url`. Send null to clear it. minLength: `1`. |
| `subscription` | Optional | string or null | Path under `merchant_account_url` for a subscription page, containing `{resource_id}` once. `null` when no template is set, so links land on `merchant_account_url`. Send null to clear it. minLength: `1`. |

