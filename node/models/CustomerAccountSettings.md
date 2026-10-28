[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccountSettings







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_capabilities` | Optional | [BuyerCapabilities](../models/BuyerCapabilities.md#buyercapabilities) | Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. Send at least one field; each field you omit takes its default. minProperties: `1`. |
| `merchant_account_url` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `mode` | Optional | string | Values: `"flint_hosted"`, `"merchant_hosted"`. |
| `presentation` | Optional | [CustomerAccountPresentation](../models/CustomerAccountPresentation.md#customeraccountpresentation) | Patch object: fields you send are applied, fields you omit are unchanged. `presentation`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1presentation), [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2presentation). |
| `route_templates` | Optional | [CustomerAccountRouteTemplates](../models/CustomerAccountRouteTemplates.md#customeraccountroutetemplates) | Patch object: fields you send are applied, fields you omit are unchanged. `route_templates`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1route_templates), [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2route_templates). |

### CustomerAccountSettings variant 1

anyOf variant 1: Declared schema CustomerAccountSettings. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions..

No additional constraints.

### CustomerAccountSettings variant 2

anyOf variant 2: Declared schema CustomerAccountSettingsRequestRequest. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions..

No additional constraints.

### CustomerAccountSettings variant 1.presentation

Patch object: fields you send are applied, fields you omit are unchanged. How a customer account is presented: its account name and custom domain. Send null to clear a value.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_name` | Optional | string or null | Send null to clear it. minLength: `1`. |

### CustomerAccountSettings variant 1.route_templates

Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.

Field definitions: [shared fields](CustomerAccountRouteTemplates.md#customeraccountroutetemplates).

### CustomerAccountSettings variant 2.presentation

Patch object: fields you send are applied, fields you omit are unchanged. How a customer account is presented: its account name and custom domain. Send null to clear a value.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_name` | Optional | string or null | Send null to clear it. minLength: `1`. |

### CustomerAccountSettings variant 2.route_templates

Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.

Field definitions: [shared fields](CustomerAccountRouteTemplates.md#customeraccountroutetemplates).

