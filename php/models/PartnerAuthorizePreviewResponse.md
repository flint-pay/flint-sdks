[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreviewResponse

A response containing `PartnerAuthorizePreview` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAuthorizePreview](../models/PartnerAuthorizePreview.md#partnerauthorizepreview) | Resource, collection, or operation result returned by this request. What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI. `data`: [field definitions](../models/PartnerAuthorizePreviewResponse.md#partnerauthorizepreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PartnerAuthorizePreviewResponse.data

Resource, collection, or operation result returned by this request. What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | The app's client ID, as sent in the authorization request. Example: `"fpc_00112233445566778899aabbccddeeff"`. |
| `mode` | Required | string | Whether the install is for test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | The app's current name. |
| `partner_app_id` | Required | string | ID of the partner app asking for access. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_version` | Required | integer | The app’s version. It changes whenever the app is edited. Format: `int64`. |
| `payment_splits` | Optional | [PartnerAppPaymentSplits](../models/PartnerAppPaymentSplits.md#partnerapppaymentsplits) | The app's payment_splits declaration, which the consent screen shows with its seller terms. Every authorization of an app that declares it asks the merchant to approve receiving split funds from the app, and approving this version of the app approves them for this mode. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen. `payment_splits`: [field definitions](../models/PartnerAuthorizePreviewResponse.md#partnerauthorizepreviewresponsedatapayment_splits). |
| `platform_fee_cap` | Optional | [PlatformFeeCap](../models/PlatformFeeCap.md#platformfeecap) | The app's platform fee cap, which the consent screen shows. Approving this version of the app approves the cap for this mode. Absent when the app charges no platform fees. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee. |
| `redirect_uri` | Required | string | The registered redirect URI Flint sends the merchant back to after they approve or deny. |
| `requested_permission_ids` | Required | Array of string | IDs of the requested permissions, sorted. They are the permissions named in scope, or the app's default requested permissions when scope is omitted, plus every required permission. Items: Example: `"manage_orders"`. |
| `requested_permissions` | Required | Array of [PartnerAuthorizePreviewPermission](../models/PartnerAuthorizePreviewPermission.md#partnerauthorizepreviewpermission) | The requested permissions with the title, description, and scopes the consent screen shows, in the same order as requested_permission_ids. `requested_permissions[]`: [field definitions](../models/PartnerAuthorizePreviewResponse.md#partnerauthorizepreviewresponsedatarequested_permissions). |

### PartnerAuthorizePreviewResponse.data.payment_splits

The app's payment_splits declaration, which the consent screen shows with its seller terms. Every authorization of an app that declares it asks the merchant to approve receiving split funds from the app, and approving this version of the app approves them for this mode. Absent when the app sends no splits. The app's declaration that its owner sends splits of the payments it collects to sellers: merchants that installed the app and approved receiving split funds from it. Merchants see it on the consent screen.

Field definitions: [shared fields](PartnerAppPaymentSplitsInput.md#partnerapppaymentsplitsinput).

### PartnerAuthorizePreviewResponse.data.requested_permissions[]

One permission a partner app requests during authorization, with its title, description, and required scopes.

Field definitions: [shared fields](PartnerAuthorizePreviewPermissionInput.md#partnerauthorizepreviewpermissioninput).

### PartnerAuthorizePreviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

