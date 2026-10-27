[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccountSettingsInput

Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_capabilities` | Optional | [BuyerCapabilitiesInput](../models/BuyerCapabilitiesInput.md#buyercapabilitiesinput) | Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. Send at least one field; each field you omit takes its default. minProperties: `1`. |
| `merchant_account_url` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `mode` | Optional | string | Values: `"flint_hosted"`, `"merchant_hosted"`. |
| `presentation` | Optional | [CustomerAccountPresentationInput](../models/CustomerAccountPresentationInput.md#customeraccountpresentationinput) | Patch object: fields you send are applied, fields you omit are unchanged. How a customer account is presented: its account name and custom domain. Send null to clear a value. |
| `route_templates` | Optional | [CustomerAccountRouteTemplatesInput](../models/CustomerAccountRouteTemplatesInput.md#customeraccountroutetemplatesinput) | Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one. |

