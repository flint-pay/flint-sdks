[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIKey

A credential used to authenticate API requests.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Required | string | Unique identifier for this api key, prefixed `key_`. Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`. `created_by`: [field definitions](../models/APIKey.md#apikeycreated_by). |
| `created_by_user_id` | Optional | string | The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. pattern: `^usr_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `key_prefix` | Required | string | The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns. |
| `last_used_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string | The label the key was given, 1 to 100 characters. maxLength: `100`. |
| `partner_app_install_id` | Required | string or null | The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `revoked_at` | Optional | string | When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: [103 declared values](#apikey-scopes--values). |
| `status` | Required | string | Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

#### APIKey scopes [] values

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
- `"commerce.license_keys.read"`
- `"commerce.license_keys.secrets.write"`
- `"commerce.license_keys.write"`
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
- `"developer.merchant_signups.read"`
- `"developer.merchant_signups.write"`
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
- `"money_movement.payment_splits.read"`
- `"money_movement.payout_settings.read"`
- `"money_movement.payout_settings.write"`
- `"money_movement.payouts.read"`
- `"money_movement.payouts.write"`
- `"money_movement.platform_fees.read"`
- `"payments.disputes.read"`
- `"payments.disputes.write"`
- `"payments.payment_intents.read"`
- `"payments.payment_intents.write"`
- `"payments.payment_method_domains.read"`
- `"payments.payment_method_domains.write"`
- `"payments.payment_methods.read"`
- `"payments.payment_methods.write"`
- `"payments.readers.read"`
- `"payments.readers.write"`
- `"reports.read"`
- `"reports.write"`
- `"risk.controls.write"`
- `"risk.read"`
- `"risk.reviews.write"`
- `"settings.read"`
- `"settings.write"`
- `"webhooks.read"`
- `"webhooks.write"`

### APIKey.created_by

Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Public Flint ID of the referenced resource. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Required | string | Public resource kind identified by resource_id, such as payment_intent for a payment. Example: `"order"`. Values: [158 declared values](#apikeycreated_by-resource_type-values). |

#### APIKey.created_by resource_type values

- `"api_key"`
- `"api_request_log"`
- `"balance"`
- `"balance_transaction"`
- `"bundle"`
- `"bundle_component"`
- `"category"`
- `"checkout_session"`
- `"checkout_session_customer_verification"`
- `"credit_note"`
- `"credit_note_allocation"`
- `"custom_domain"`
- `"customer"`
- `"customer_address"`
- `"customer_deletion_request"`
- `"customer_email_preferences"`
- `"customer_session"`
- `"customer_tax_exemption"`
- `"customer_verification"`
- `"delivery_choice_group"`
- `"delivery_location_set"`
- `"delivery_method"`
- `"delivery_profile"`
- `"delivery_quote"`
- `"delivery_rate"`
- `"delivery_rate_callback"`
- `"delivery_revocation"`
- `"delivery_selection"`
- `"delivery_zone"`
- `"demo_session"`
- `"device"`
- `"discount"`
- `"dispute"`
- `"email_change_request"`
- `"environment_grant"`
- `"file"`
- `"flint_wallet"`
- `"flint_wallet_card"`
- `"fraud_warning"`
- `"fulfillment"`
- `"fulfillment_event"`
- `"fulfillment_notification"`
- `"gift_card"`
- `"gift_card_funding_disposition"`
- `"gift_card_load"`
- `"gift_card_notification"`
- `"gift_card_redemption"`
- `"gift_card_transaction"`
- `"image"`
- `"inventory_adjustment"`
- `"inventory_allocation_policy"`
- `"inventory_allocation_policy_revision"`
- `"inventory_count"`
- `"inventory_item"`
- `"inventory_level"`
- `"inventory_movement"`
- `"inventory_receipt"`
- `"inventory_reservation"`
- `"inventory_reservation_line"`
- `"inventory_transfer"`
- `"inventory_transfer_line"`
- `"invoice"`
- `"invoice_delivery_attempt"`
- `"invoice_late_fee"`
- `"invoice_line_item"`
- `"invoice_manual_payment"`
- `"invoice_payment_attempt"`
- `"invoice_payment_term"`
- `"license_key"`
- `"license_key_activation"`
- `"license_key_pool"`
- `"license_key_pool_key"`
- `"location"`
- `"merchant"`
- `"merchant_billing_balance"`
- `"merchant_billing_entry"`
- `"merchant_billing_invoice"`
- `"merchant_signup"`
- `"modifier"`
- `"modifier_group"`
- `"modifier_set"`
- `"order"`
- `"order_charge"`
- `"order_edit"`
- `"order_line_item"`
- `"order_line_item_modifier"`
- `"order_payment_attempt"`
- `"package"`
- `"package_item"`
- `"partner_app"`
- `"partner_app_credential"`
- `"partner_app_install"`
- `"payment_attempt"`
- `"payment_intent"`
- `"payment_link"`
- `"payment_link_custom_field"`
- `"payment_link_line_item"`
- `"payment_method"`
- `"payment_method_domain"`
- `"payment_review"`
- `"payment_split"`
- `"payout"`
- `"payout_destination"`
- `"payout_settings"`
- `"platform_fee"`
- `"platform_fee_balance_transaction"`
- `"platform_fee_payout"`
- `"price_list"`
- `"price_list_price"`
- `"product"`
- `"product_option"`
- `"product_option_value"`
- `"product_variant"`
- `"promotion"`
- `"promotion_code"`
- `"purchase_refund_allocation"`
- `"reader"`
- `"refund"`
- `"refund_allocation"`
- `"refund_line_item_adjustment"`
- `"remembered_buyer"`
- `"report"`
- `"report_download"`
- `"return"`
- `"return_activity"`
- `"return_disposition"`
- `"return_inspection"`
- `"return_inspection_line_item"`
- `"return_line_item"`
- `"return_policy"`
- `"return_policy_revision"`
- `"return_reason"`
- `"return_receipt"`
- `"return_receipt_line_item"`
- `"return_resolution"`
- `"risk_list"`
- `"risk_list_item"`
- `"risk_rule"`
- `"sandbox"`
- `"settings"`
- `"shipment"`
- `"subscription"`
- `"subscription_delivery_migration"`
- `"subscription_line_item"`
- `"subscription_offer"`
- `"subscription_payment_retry"`
- `"subscription_plan"`
- `"subscription_plan_line_item"`
- `"tax_calculation_callback"`
- `"tax_connection"`
- `"tax_registration"`
- `"test_clock"`
- `"ticket"`
- `"user"`
- `"webhook_delivery"`
- `"webhook_endpoint"`
- `"webhook_event"`
- `"workload_identity"`

