[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreviewInput

What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | The app's client ID, as sent in the authorization request. Example: `"fpc_00112233445566778899aabbccddeeff"`. |
| `mode` | Required | string | Whether the install is for test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | The app's current name. |
| `partner_app_id` | Required | string | ID of the partner app asking for access. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_version` | Required | integer | The app’s version. It changes whenever the app is edited. Format: `int64`. |
| `payment_splits` | Optional | [PartnerAppPaymentSplitsInput](../models/PartnerAppPaymentSplitsInput.md#partnerapppaymentsplitsinput) | The app's payment_splits declaration, which the consent screen shows with its seller terms. Every authorization of an app that declares it asks the merchant to approve receiving split funds from the app, and approving this version of the app approves them for this mode. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen. |
| `platform_fee_cap` | Optional | [PlatformFeeCapInput](../models/PlatformFeeCapInput.md#platformfeecapinput) | The app's platform fee cap, which the consent screen shows. Approving this version of the app approves the cap for this mode. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. |
| `redirect_uri` | Required | string | The registered redirect URI Flint sends the merchant back to after they approve or deny. |
| `requested_permission_ids` | Required | Array of string | IDs of the requested permissions, sorted. They are the permissions named in scope, or the app's default requested permissions when scope is omitted, plus every required permission. Items: Example: `"manage_orders"`. |
| `requested_permissions` | Required | Array of [PartnerAuthorizePreviewPermissionInput](../models/PartnerAuthorizePreviewPermissionInput.md#partnerauthorizepreviewpermissioninput) | The requested permissions with the title, description, and scopes the consent screen shows, in the same order as requested_permission_ids. |

