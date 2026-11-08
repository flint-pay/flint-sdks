[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSandboxRequestInput

The request body for: Create sandbox.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Conditional | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `initial_onboarding` | Optional | string | The onboarding state the sandbox starts in, and returns to when you reset it. `complete` prefills a verified test identity; `not_started` leaves requirements due so you can rehearse onboarding. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |
| `issue_test_key` | Conditional | boolean |  |
| `name` | Required | string | minLength: `1`. |
| `scopes` | Conditional | Array of string | The scopes to grant. Required only with access restricted; forbidden with full or read_only. minItems: `1`. uniqueItems: `true`. Items values: [92 declared values](#createsandboxrequestinput-scopes--values). |
| `test_key_name` | Optional | string | minLength: `1`. maxLength: `100`. |

#### CreateSandboxRequestInput scopes [] values

- `"accounts.api_keys.read"`
- `"accounts.api_keys.write"`
- `"accounts.devices.read"`
- `"accounts.devices.write"`
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
- `"commerce.tickets.read"`
- `"commerce.tickets.write"`
- `"customers.read"`
- `"customers.sessions.write"`
- `"customers.write"`
- `"developer.feedback_reports.read"`
- `"developer.feedback_reports.write"`
- `"developer.request_logs.read"`
- `"developer.request_logs.self.read"`
- `"developer.resource_timelines.read"`
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

### CreateSandboxRequestInput variant 1: `access` = `"full"`, `issue_test_key` = `true`

oneOf Test key; oneOf Full.

- Condition: not (present(`scopes`)).
- Required: `access`, `issue_test_key`.
- Optional: `scopes`.
- Constraints for `access`: Values: `"full"`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequestInput variant 2: `access` = `"read_only"`, `issue_test_key` = `true`

oneOf Test key; oneOf Read only.

- Condition: not (present(`scopes`)).
- Required: `access`, `issue_test_key`.
- Optional: `scopes`.
- Constraints for `access`: Values: `"read_only"`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequestInput variant 3: `access` = `"restricted"`, `issue_test_key` = `true`

oneOf Test key; oneOf Restricted.

- Required: `access`, `issue_test_key`, `scopes`.
- Constraints for `access`: Values: `"restricted"`.
- Constraints for `issue_test_key`: Values: `true`.

### CreateSandboxRequestInput variant 4: `issue_test_key` = `false`

oneOf No test key.

- Condition: not (at least one(present(`access`); present(`scopes`); present(`test_key_name`))).
- Optional: `access`, `issue_test_key`, `scopes`.
- Constraints for `issue_test_key`: Values: `false`.

