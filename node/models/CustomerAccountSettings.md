[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccountSettings







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_capabilities` | Optional | [BuyerCapabilities](../models/BuyerCapabilities.md#buyercapabilities) | `buyer_capabilities`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1buyer_capabilities), [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2buyer_capabilities). |
| `merchant_account_url` | Optional | string or null | minLength: `1`. |
| `mode` | Optional | string | Who hosts the customer account where buyers see their orders, subscriptions, returns, and invoices. Values: `"flint_hosted"`, `"merchant_hosted"`. |
| `presentation` | Optional | [CustomerAccountPresentation](../models/CustomerAccountPresentation.md#customeraccountpresentation) | Patch object: fields you send are applied, fields you omit are unchanged. `presentation`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1presentation), [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2presentation). |
| `route_templates` | Optional | [CustomerAccountRouteTemplates](../models/CustomerAccountRouteTemplates.md#customeraccountroutetemplates) | Patch object: fields you send are applied, fields you omit are unchanged. `route_templates`: [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-1route_templates), [field definitions](../models/CustomerAccountSettings.md#customeraccountsettings-variant-2route_templates). |

### CustomerAccountSettings variant 1

anyOf variant 1: Declared schema CustomerAccountSettings. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions..

- Constraints for `buyer_capabilities`: Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default.
- Constraints for `merchant_account_url`: Your customer account page's URL, when you host it. `null` when you don't host the account.

### CustomerAccountSettings variant 2

anyOf variant 2: Declared schema CustomerAccountSettingsRequest. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions..

- Constraints for `buyer_capabilities`: Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Send at least one field.
- Constraints for `merchant_account_url`: Your customer account page's URL, when you host it. Send null to clear it.

### CustomerAccountSettings variant 1.buyer_capabilities

Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. minProperties: `1`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_update_delivery` | Optional | boolean | Whether buyers may change the shipping address and delivery method of their physical subscriptions. Default: `true`. |
| `cancellation_reasons` | Optional | Array of string | Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of them. maxItems: `8`. uniqueItems: `true`. Default: `[]`. Items values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. |
| `cancellation_timing` | Optional | string | When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the buyer picks the scheduled time or right away. When no scheduled cancellation time is available, including scheduled, incomplete, paused, and past_due without next_retry_at, the buyer may send cancel_immediately: true under either policy. Default: `"end_of_period"`. Values: `"end_of_period"`, `"buyer_chooses"`. |
| `pause` | Optional | [BuyerPauseCapability](../models/BuyerPauseCapability.md#buyerpausecapability) | Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own subscriptions. Send at least one field. minProperties: `1`. |
| `retention_offer` | Optional | [BuyerRetentionOffer](../models/BuyerRetentionOffer.md#buyerretentionoffer) | Replaced as a whole: send every field you want to keep. The offer a buyer sees before canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a buyer sees before canceling. Send at least one field. minProperties: `1`. `retention_offer`: [field definitions](../models/BuyerCapabilities.md#buyercapabilities-variant-1retention_offer). |
| `skip` | Optional | [BuyerSkipCapability](../models/BuyerSkipCapability.md#buyerskipcapability) | Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals. Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send at least one field. minProperties: `1`. |

### CustomerAccountSettings variant 1.buyer_capabilities.retention_offer

Field definitions: [BuyerCapabilities variant 1.retention_offer](../models/BuyerCapabilities.md#buyercapabilities-variant-1retention_offer).

### CustomerAccountSettings variant 1.presentation

Patch object: fields you send are applied, fields you omit are unchanged. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value.

Field definitions: [shared fields](CustomerAccountPresentation.md#customeraccountpresentation).

### CustomerAccountSettings variant 1.route_templates

Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.

Field definitions: [shared fields](CustomerAccountRouteTemplates.md#customeraccountroutetemplates).

### CustomerAccountSettings variant 2.buyer_capabilities

Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Send at least one field. What a store lets buyers do to their own subscriptions. minProperties: `1`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_update_delivery` | Optional | boolean | Whether buyers may change the shipping address and delivery method of their physical subscriptions. Default: `true`. |
| `cancellation_reasons` | Optional | Array of string | Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of them. maxItems: `8`. uniqueItems: `true`. Default: `[]`. Items values: `"too_expensive"`, `"missing_features"`, `"switched_service"`, `"unused"`, `"customer_service"`, `"too_complex"`, `"low_quality"`, `"other"`. |
| `cancellation_timing` | Optional | string | When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the buyer picks the scheduled time or right away. When no scheduled cancellation time is available, including scheduled, incomplete, paused, and past_due without next_retry_at, the buyer may send cancel_immediately: true under either policy. Default: `"end_of_period"`. Values: `"end_of_period"`, `"buyer_chooses"`. |
| `pause` | Optional | [BuyerPauseCapability](../models/BuyerPauseCapability.md#buyerpausecapability) | Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own subscriptions. Send at least one field. minProperties: `1`. |
| `retention_offer` | Optional | [BuyerRetentionOffer](../models/BuyerRetentionOffer.md#buyerretentionoffer) | Replaced as a whole: send every field you want to keep. The offer a buyer sees before canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a buyer sees before canceling. Send at least one field. minProperties: `1`. `retention_offer`: [field definitions](../models/BuyerCapabilities.md#buyercapabilities-variant-2retention_offer). |
| `skip` | Optional | [BuyerSkipCapability](../models/BuyerSkipCapability.md#buyerskipcapability) | Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals. Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send at least one field. minProperties: `1`. |

### CustomerAccountSettings variant 2.buyer_capabilities.retention_offer

Field definitions: [BuyerCapabilities variant 2.retention_offer](../models/BuyerCapabilities.md#buyercapabilities-variant-2retention_offer).

### CustomerAccountSettings variant 2.presentation

Patch object: fields you send are applied, fields you omit are unchanged. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value.

Field definitions: [shared fields](CustomerAccountPresentation.md#customeraccountpresentation).

### CustomerAccountSettings variant 2.route_templates

Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.

Field definitions: [shared fields](CustomerAccountRouteTemplates.md#customeraccountroutetemplates).

