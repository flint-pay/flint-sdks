[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePartnerAppRequestInput

The request body for: Update partner app.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Conditional | string | minLength: `1`. |
| `client_secret_enabled` | Conditional | boolean | Set true to issue a client secret when secret authentication is disabled. The response returns the secret once; setting true when already enabled does not rotate or reveal it. Set false to end current and previous secrets immediately. |
| `default_requested_permissions` | Conditional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest, platform_fee_cap, merchant_action_url and payment_splits; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `merchant_action_url` | Conditional | string or null | Where Flint sends an owner of a merchant this app created through a merchant signup when an email asks them to act, such as to finish verification. An absolute `https` URL of at most 2,048 characters, without userinfo or a fragment. It may have a query: Flint adds `flint_*` query parameters and replaces any it already has. Once the app has a `platform_profile`, its registrable domain must equal that of `platform_profile.website_url`, or the write fails with 400 `INVALID_VALUE` at the field written. Setting it requests the `create_merchants` platform capability. After Flint first approves or limits the platform, a change to another registrable domain routes after 72 hours, and every change is emailed to the owning merchant's owners and admins. Requires expected_version, because it decides where every merchant the app created is sent from Flint's emails. Send null to clear it: emails then lead to Flint, and new merchant signups are refused until you set it again. Format: `uri`. minLength: `1`. maxLength: `2048`. pattern: `^https://`. Example: `"https://example.com/receipt"`. |
| `name` | Conditional | string | The app's name, shown to merchants on the consent screen and in Flint's emails, at most 100 characters, without links or email addresses. minLength: `1`. maxLength: `100`. |
| `payment_splits` | Conditional | [PartnerAppPaymentSplitsRequestInput](../models/PartnerAppPaymentSplitsRequestInput.md#partnerapppaymentsplitsrequestinput) or null | Replaces the whole payment_splits declaration. Sellers that already approved keep the seller terms they approved; merchants that authorize afterwards approve the new seller_terms_url. Send null to remove it, which ends every seller's approval at once: a seller must authorize the app again after you declare it again. Requires expected_version. Setting it doesn't need platform approval, and an unchanged declaration changes nothing. |
| `permission_manifest` | Conditional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `platform_fee_cap` | Conditional | [PlatformFeeCapRequestInput](../models/PlatformFeeCapRequestInput.md#platformfeecaprequestinput) or null | Replaces the whole platform fee cap. Lowering percent or a maximum, or removing a currency, lowers the cap every merchant approved at once. Raising either, or adding a currency, changes no install: each merchant must authorize the app again to approve the higher cap. Send null to remove the cap from the app and every install. Requires expected_version. Setting it doesn't need platform approval, and an unchanged cap changes nothing. |
| `platform_profile` | Conditional | [PartnerAppPlatformProfileRequestInput](../models/PartnerAppPlatformProfileRequestInput.md#partnerappplatformprofilerequestinput) or null | Replaces the whole platform profile, which Flint reviews before it approves the app as a platform. Every field is validated together. Send null to remove it while platform.status is not_started; afterwards null returns 400 INVALID_REQUEST with detail NOT_ALLOWED, and edits are recorded for Flint's review without changing platform.status. An unchanged profile changes nothing. |
| `redirect_uris` | Conditional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

### UpdatePartnerAppRequestInput variant 1

anyOf variant 1.

- Required: `client_secret_enabled`.
- Optional: `api_version`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 2

anyOf variant 2.

- Required: `name`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 3

anyOf variant 3.

- Required: `redirect_uris`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`.

### UpdatePartnerAppRequestInput variant 4

anyOf variant 4.

- Required: `permission_manifest`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 5

anyOf variant 5.

- Required: `default_requested_permissions`.
- Optional: `api_version`, `client_secret_enabled`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 6

anyOf variant 6.

- Required: `api_version`.
- Optional: `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 7

anyOf variant 7.

- Required: `platform_profile`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 8

anyOf variant 8.

- Required: `platform_fee_cap`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `payment_splits`, `permission_manifest`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 9

anyOf variant 9.

- Required: `merchant_action_url`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `name`, `payment_splits`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 10

anyOf variant 10.

- Required: `payment_splits`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `merchant_action_url`, `name`, `permission_manifest`, `platform_fee_cap`, `platform_profile`, `redirect_uris`.

