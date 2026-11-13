[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreview

What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | The app's client ID, as sent in the authorization request. Example: `"fpc_00112233445566778899aabbccddeeff"`. |
| `mode` | Required | string | Whether the install is for test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | The app's current name. |
| `partner_app_id` | Required | string | ID of the partner app asking for access. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_version` | Required | integer | The app’s version. It changes whenever the app is edited. Format: `int64`. |
| `payment_splits` | Optional | [PartnerAppPaymentSplits](../models/PartnerAppPaymentSplits.md#partnerapppaymentsplits) | The app's payment_splits declaration, which the consent screen shows with its seller terms. Every authorization of an app that declares it asks the merchant to approve receiving split funds from the app, and approving this version of the app approves them for this mode. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen. `payment_splits`: [field definitions](../models/PartnerAuthorizePreview.md#partnerauthorizepreviewpayment_splits). |
| `platform_fee_cap` | Optional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) | The app's platform fee cap, which the consent screen shows. Approving this version of the app approves the cap for this mode. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. `platform_fee_cap`: [field definitions](../models/PartnerAuthorizePreview.md#partnerauthorizepreviewplatform_fee_cap). |
| `redirect_uri` | Required | string | The registered redirect URI Flint sends the merchant back to after they approve or deny. |
| `requested_permission_ids` | Required | Array of string | IDs of the requested permissions, sorted. They are the permissions named in scope, or the app's default requested permissions when scope is omitted, plus every required permission. Items: Example: `"manage_orders"`. |
| `requested_permissions` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | The requested permissions with the title, description, and scopes the consent screen shows, in the same order as requested_permission_ids. `requested_permissions[]`: [field definitions](../models/PartnerAuthorizePreview.md#partnerauthorizepreviewrequested_permissions). |

### PartnerAuthorizePreview.payment_splits

The app's payment_splits declaration, which the consent screen shows with its seller terms. Every authorization of an app that declares it asks the merchant to approve receiving split funds from the app, and approving this version of the app approves them for this mode. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen.

Field definitions: [shared fields](PartnerApp.md#partnerapppayment_splits).

### PartnerAuthorizePreview.platform_fee_cap

The app's platform fee cap, which the consent screen shows. Approving this version of the app approves the cap for this mode. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee.

Field definitions: [shared fields](EnvironmentGrantCreatedEvent.md#environmentgrantcreatedeventdataobjectplatform_fee_cap).

### PartnerAuthorizePreview.platform_fee_cap.fixed_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PartnerAuthorizePreview.platform_fee_cap.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PartnerAuthorizePreview.requested_permissions[]

One permission a partner app requests during authorization, with its title, description, and required scopes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string | What the permission lets the app do, from the app's permission manifest. |
| `optional` | Optional | boolean | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. |
| `permission_id` | Required | string | ID of the permission in the app's permission manifest. Send it in the scope parameter to request this permission. Example: `"manage_orders"`. |
| `required_scopes` | Required | Array of string | Flint API scopes this permission grants, sorted. Flint defines them; the title and description come from the partner app. |
| `title` | Required | string | Short name of the permission, from the app's permission manifest. |

