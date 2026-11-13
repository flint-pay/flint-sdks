[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateMerchantSignupRequestInput

The request body for: Create a merchant signup.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `business_name` | Optional | string | The new merchant's display name until onboarding sets its legal name, 1 to 100 characters, without links or email addresses: the code email shows it. Without it, Flint names the merchant from the owner's email. minLength: `1`. maxLength: `100`. |
| `code_challenge` | Required | string | The PKCE S256 challenge: base64url SHA-256 of a verifier you keep. The authorization codes verify returns are bound to it. minLength: `43`. maxLength: `43`. pattern: `^[A-Za-z0-9_-]{43}$`. |
| `code_challenge_method` | Required | string | Must be `S256`. Values: `"S256"`. |
| `external_reference_id` | Optional | string | Your identifier for this business, such as your account ID. List signups by it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `modes` | Required | Array of string | The modes to install the app in. `live` needs the app's live `create_merchants` capability. Until it is active, a signup may install only in `test`, and only for an owner on your merchant's team (plus-addresses included). minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `owner` | Required | [MerchantSignupOwnerRequestInput](../models/MerchantSignupOwnerRequestInput.md#merchantsignupownerrequestinput) | The owner Flint emails the code to. The person who will own the new merchant. Flint emails the code to this address. |
| `partner_app_id` | Required | string | Your partner app to install on the new merchant. It must be active and have a `merchant_action_url`. minLength: `1`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `requested_permission_ids` | Optional | Array of string | Optional manifest permissions to request besides the required ones. Defaults to the app's `default_requested_permissions`. Send `[]` to request only the required permissions. uniqueItems: `true`. Items: minLength: `1`. Example: `"manage_orders"`. |
| `sandbox_initial_onboarding` | Optional | string | The onboarding state of the new merchant's default sandbox, which the test grant points at. Send `not_started` to rehearse verification in test mode. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |

