[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIKeyInput

A credential used to authenticate API requests.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session or a full-access API key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Required | string |  |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The API key or user that created this key. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `key_prefix` | Required | string |  |
| `last_used_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `merchant_id` | Optional | string |  |
| `name` | Required | string | maxLength: `100`. |
| `revoked_at` | Optional | string | When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: `date-time`. |
| `sandbox_id` | Optional | string |  |
| `scopes` | Required | Array of string | The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: [96 declared values](#apikeyinput-scopes--values). |
| `status` | Required | string | Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

#### APIKeyInput scopes [] values

- `"accounts.api_keys.read"`
- `"accounts.api_keys.write"`
- `"accounts.devices.read"`
- `"accounts.devices.write"`
- `"accounts.organizations.read"`
- `"accounts.organizations.write"`
- `"accounts.workload_identities.read"`
- `"accounts.workload_identities.write"`
- `"analytics.read"`
- `"checkouts.checkout_sessions.read"`
- `"checkouts.checkout_sessions.write"`
- `"checkouts.payment_links.read"`
- `"checkouts.payment_links.write"`
- `"commerce.bundles.read"`
- `"commerce.bundles.write"`
- `"commerce.catalog.read"`
- `"commerce.catalog.write"`
- `"commerce.credit_notes.read"`
- `"commerce.credit_notes.write"`
- `"commerce.delivery.read"`
- `"commerce.delivery.write"`
- `"commerce.gift_cards.adjustments.write"`
- `"commerce.gift_cards.read"`
- `"commerce.gift_cards.redemptions.write"`
- `"commerce.gift_cards.secrets.write"`
- `"commerce.gift_cards.write"`
- `"commerce.inventory.allocation.write"`
- `"commerce.inventory.policies.write"`
- `"commerce.inventory.read"`
- `"commerce.inventory.write"`
- `"commerce.invoices.read"`
- `"commerce.invoices.write"`
- `"commerce.orders.read"`
- `"commerce.orders.write"`
- `"commerce.products.read"`
- `"commerce.products.write"`
- `"commerce.promotions.read"`
- `"commerce.promotions.write"`
- `"commerce.refunds.read"`
- `"commerce.refunds.tax_overrides.write"`
- `"commerce.refunds.write"`
- `"commerce.returns.operations.write"`
- `"commerce.returns.policies.write"`
- `"commerce.returns.read"`
- `"commerce.returns.reasons.write"`
- `"commerce.returns.resolutions.write"`
- `"commerce.returns.write"`
- `"commerce.subscription_plans.read"`
- `"commerce.subscription_plans.write"`
- `"commerce.subscriptions.read"`
- `"commerce.subscriptions.write"`
- `"customers.read"`
- `"customers.sessions.write"`
- `"customers.write"`
- `"developer.feedback_reports.read"`
- `"developer.feedback_reports.write"`
- `"developer.partner_apps.read"`
- `"developer.partner_apps.write"`
- `"developer.request_logs.read"`
- `"developer.request_logs.self.read"`
- `"developer.resource_timelines.read"`
- `"developer.sandboxes.read"`
- `"developer.sandboxes.write"`
- `"developer.test_clocks.read"`
- `"developer.test_clocks.write"`
- `"merchant_billing.read"`
- `"merchants.account_sessions.write"`
- `"merchants.locations.read"`
- `"merchants.locations.write"`
- `"merchants.onboarding.read"`
- `"merchants.onboarding.write"`
- `"merchants.profile.read"`
- `"merchants.profile.write"`
- `"money_movement.balance_transactions.read"`
- `"money_movement.balances.read"`
- `"money_movement.payout_settings.read"`
- `"money_movement.payout_settings.write"`
- `"money_movement.payouts.read"`
- `"money_movement.payouts.write"`
- `"payments.disputes.read"`
- `"payments.disputes.write"`
- `"payments.payment_intents.read"`
- `"payments.payment_intents.write"`
- `"payments.payment_method_domains.read"`
- `"payments.payment_method_domains.write"`
- `"payments.payment_methods.read"`
- `"payments.payment_methods.write"`
- `"reports.read"`
- `"reports.write"`
- `"risk.controls.write"`
- `"risk.read"`
- `"risk.reviews.write"`
- `"settings.read"`
- `"settings.write"`
- `"webhooks.read"`
- `"webhooks.write"`

