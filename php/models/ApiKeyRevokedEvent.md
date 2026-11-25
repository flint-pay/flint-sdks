[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApiKeyRevokedEvent

The `api_key.revoked` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ApiKeyRevokedEventData](../models/ApiKeyRevokedEventData.md#apikeyrevokedeventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"api_key.revoked"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ApiKeyRevokedEventRequest](../models/ApiKeyRevokedEventRequest.md#apikeyrevokedeventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ApiKeyRevokedEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributes). |

### ApiKeyRevokedEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### ApiKeyRevokedEvent.data fields 1.object

Field definitions: [ApiKeyCreatedEvent.data fields 1.object](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1object).

### ApiKeyRevokedEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ApiKeyRevokedEventDataPreviousAttributes.md#apikeyrevokedeventdatapreviousattributes).

### ApiKeyRevokedEvent.data fields 1.previous_attributes.access

### ApiKeyRevokedEvent.data fields 1.previous_attributes.access variant 1

anyOf variant 1: Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key..

- Value shape: string. Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`.

### ApiKeyRevokedEvent.data fields 1.previous_attributes.access variant 2

anyOf variant 2.

- Value shape: null. Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.api_key_id

### ApiKeyRevokedEvent.data fields 1.previous_attributes.api_key_id variant 1

anyOf variant 1: Unique identifier for this api key, prefixed `key_`..

- Value shape: string. Unique identifier for this api key, prefixed `key_`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.api_key_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this api key, prefixed `key_`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at variant 1

anyOf variant 1: RFC3339 timestamp..

- Value shape: string. RFC3339 timestamp. RFC3339 timestamp. Format: `date-time`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by

Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Conditional | string or null | Public Flint ID of the referenced resource. `resource_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id). |
| `resource_type` | Conditional | string or null | Public resource kind identified by resource_id, such as payment_intent for a payment. Values: [160 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type). |

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1

anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id variant 1

anyOf variant 1: Public Flint ID of the referenced resource..

- Value shape: string. Public Flint ID of the referenced resource. Public Flint ID of the referenced resource. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id variant 2

anyOf variant 2.

- Value shape: null. Public Flint ID of the referenced resource. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type variant 1

anyOf variant 1: Public resource kind identified by resource_id, such as payment_intent for a payment..

- Value shape: string. Public resource kind identified by resource_id, such as payment_intent for a payment. Public resource kind identified by resource_id, such as payment_intent for a payment. Example: `"order"`. Values: `"api_key"`, `"api_request_log"`, `"balance"`, `"balance_transaction"`, `"bundle"`, `"bundle_component"`, `"category"`, `"checkout_session"`, `"checkout_session_customer_verification"`, `"credit_note"`, `"credit_note_allocation"`, `"custom_domain"`, `"customer"`, `"customer_address"`, `"customer_deletion_request"`, `"customer_email_preferences"`, `"customer_session"`, `"customer_tax_exemption"`, `"customer_verification"`, `"delivery_choice_group"`, `"delivery_location_set"`, `"delivery_method"`, `"delivery_profile"`, `"delivery_quote"`, `"delivery_rate"`, `"delivery_rate_callback"`, `"delivery_revocation"`, `"delivery_selection"`, `"delivery_zone"`, `"demo_session"`, `"device"`, `"discount"`, `"dispute"`, `"email_change_request"`, `"environment_grant"`, `"file"`, `"flint_wallet"`, `"flint_wallet_card"`, `"fraud_warning"`, `"fulfillment"`, `"fulfillment_event"`, `"fulfillment_notification"`, `"gift_card"`, `"gift_card_funding_disposition"`, `"gift_card_load"`, `"gift_card_notification"`, `"gift_card_redemption"`, `"gift_card_transaction"`, `"image"`, `"inventory_adjustment"`, `"inventory_allocation_policy"`, `"inventory_allocation_policy_revision"`, `"inventory_count"`, `"inventory_item"`, `"inventory_level"`, `"inventory_movement"`, `"inventory_receipt"`, `"inventory_reservation"`, `"inventory_reservation_line"`, `"inventory_transfer"`, `"inventory_transfer_line"`, `"invoice"`, `"invoice_delivery_attempt"`, `"invoice_late_fee"`, `"invoice_line_item"`, `"invoice_manual_payment"`, `"invoice_payment_attempt"`, `"invoice_payment_term"`, `"license_key"`, `"license_key_activation"`, `"license_key_pool"`, `"license_key_pool_key"`, `"location"`, `"merchant"`, `"merchant_billing_balance"`, `"merchant_billing_entry"`, `"merchant_billing_invoice"`, `"merchant_signup"`, `"modifier"`, `"modifier_group"`, `"modifier_set"`, `"order"`, `"order_charge"`, `"order_edit"`, `"order_line_item"`, `"order_line_item_modifier"`, `"order_payment_attempt"`, `"package"`, `"package_item"`, `"partner_app"`, `"partner_app_credential"`, `"partner_app_install"`, `"payment_attempt"`, `"payment_intent"`, `"payment_link"`, `"payment_link_custom_field"`, `"payment_link_line_item"`, `"payment_method"`, `"payment_method_domain"`, `"payment_review"`, `"payment_split"`, `"payout"`, `"payout_destination"`, `"payout_settings"`, `"platform_fee"`, `"platform_fee_balance_transaction"`, `"platform_fee_payout"`, `"price_list"`, `"price_list_price"`, `"product"`, `"product_option"`, `"product_option_value"`, `"product_variant"`, `"promotion"`, `"promotion_code"`, `"purchase_refund_allocation"`, `"reader"`, `"refund"`, `"refund_allocation"`, `"refund_line_item_adjustment"`, `"remembered_buyer"`, `"report"`, `"report_download"`, `"return"`, `"return_activity"`, `"return_disposition"`, `"return_inspection"`, `"return_inspection_line_item"`, `"return_line_item"`, `"return_policy"`, `"return_policy_revision"`, `"return_reason"`, `"return_receipt"`, `"return_receipt_line_item"`, `"return_resolution"`, `"risk_list"`, `"risk_list_item"`, `"risk_rule"`, `"sandbox"`, `"settings"`, `"shipment"`, `"shop"`, `"shop_listing"`, `"subscription"`, `"subscription_delivery_migration"`, `"subscription_line_item"`, `"subscription_offer"`, `"subscription_payment_retry"`, `"subscription_plan"`, `"subscription_plan_line_item"`, `"tax_calculation_callback"`, `"tax_connection"`, `"tax_registration"`, `"test_clock"`, `"ticket"`, `"user"`, `"webhook_delivery"`, `"webhook_endpoint"`, `"webhook_event"`, `"workload_identity"`.

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type variant 2

anyOf variant 2.

- Value shape: null. Public resource kind identified by resource_id, such as payment_intent for a payment. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by_user_id

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by_user_id variant 1

anyOf variant 1: The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request..

- Value shape: string. The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. pattern: `^usr_[0-7][0-9A-HJKMNP-TV-Z]{25}$`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by_user_id variant 2

anyOf variant 2.

- Value shape: null. The user accountable for this key: the user who created it, or who created the API key or workload identity that did. `created_by` names the credential that made the request. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ApiKeyRevokedEvent.data fields 1.previous_attributes.key_prefix

### ApiKeyRevokedEvent.data fields 1.previous_attributes.key_prefix variant 1

anyOf variant 1: The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns..

- Value shape: string. The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.key_prefix variant 2

anyOf variant 2.

- Value shape: null. The start of the secret key: its `flint_` mode prefix and the first 8 characters of the random part. It identifies the key in a list without revealing the secret, which only the create response returns. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.last_used_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id

### ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id variant 1

anyOf variant 1: ID of the merchant this resource belongs to..

- Value shape: string. ID of the merchant this resource belongs to. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the merchant this resource belongs to. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.name

### ApiKeyRevokedEvent.data fields 1.previous_attributes.name variant 1

anyOf variant 1: The label the key was given, 1 to 100 characters..

- Value shape: string. The label the key was given, 1 to 100 characters. The label the key was given, 1 to 100 characters. maxLength: `100`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. The label the key was given, 1 to 100 characters. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.partner_app_install_id

### ApiKeyRevokedEvent.data fields 1.previous_attributes.partner_app_install_id variant 1

anyOf variant 1: The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes..

- Value shape: string. The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.partner_app_install_id variant 2

anyOf variant 2.

- Value shape: null. The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.revoked_at

### ApiKeyRevokedEvent.data fields 1.previous_attributes.revoked_at variant 1

anyOf variant 1: When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time..

- Value shape: string. When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: `date-time`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.revoked_at variant 2

anyOf variant 2.

- Value shape: null. When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.sandbox_id

### ApiKeyRevokedEvent.data fields 1.previous_attributes.sandbox_id variant 1

anyOf variant 1: ID of the sandbox this resource belongs to..

- Value shape: string. ID of the sandbox this resource belongs to. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.sandbox_id variant 2

anyOf variant 2.

- Value shape: null. ID of the sandbox this resource belongs to. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.scopes

### ApiKeyRevokedEvent.data fields 1.previous_attributes.scopes variant 1

anyOf variant 1: The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes..

- Value shape: Array of string. The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: `"accounts.api_keys.read"`, `"accounts.api_keys.write"`, `"accounts.devices.read"`, `"accounts.devices.write"`, `"accounts.workload_identities.read"`, `"accounts.workload_identities.write"`, `"analytics.read"`, `"checkouts.checkout_sessions.read"`, `"checkouts.checkout_sessions.write"`, `"checkouts.payment_links.read"`, `"checkouts.payment_links.write"`, `"checkouts.shops.read"`, `"checkouts.shops.write"`, `"commerce.bundles.read"`, `"commerce.bundles.write"`, `"commerce.catalog.read"`, `"commerce.catalog.write"`, `"commerce.credit_notes.read"`, `"commerce.credit_notes.write"`, `"commerce.delivery.read"`, `"commerce.delivery.write"`, `"commerce.gift_cards.adjustments.write"`, `"commerce.gift_cards.read"`, `"commerce.gift_cards.redemptions.write"`, `"commerce.gift_cards.secrets.write"`, `"commerce.gift_cards.write"`, `"commerce.inventory.allocation.write"`, `"commerce.inventory.policies.write"`, `"commerce.inventory.read"`, `"commerce.inventory.write"`, `"commerce.invoices.read"`, `"commerce.invoices.write"`, `"commerce.license_keys.read"`, `"commerce.license_keys.secrets.write"`, `"commerce.license_keys.write"`, `"commerce.orders.read"`, `"commerce.orders.write"`, `"commerce.products.read"`, `"commerce.products.write"`, `"commerce.promotions.read"`, `"commerce.promotions.write"`, `"commerce.refunds.read"`, `"commerce.refunds.tax_overrides.write"`, `"commerce.refunds.write"`, `"commerce.returns.operations.write"`, `"commerce.returns.policies.write"`, `"commerce.returns.read"`, `"commerce.returns.reasons.write"`, `"commerce.returns.resolutions.write"`, `"commerce.returns.write"`, `"commerce.subscription_plans.read"`, `"commerce.subscription_plans.write"`, `"commerce.subscriptions.read"`, `"commerce.subscriptions.write"`, `"commerce.tickets.read"`, `"commerce.tickets.write"`, `"customers.read"`, `"customers.sessions.write"`, `"customers.write"`, `"developer.merchant_signups.read"`, `"developer.merchant_signups.write"`, `"developer.partner_apps.read"`, `"developer.partner_apps.write"`, `"developer.request_logs.read"`, `"developer.request_logs.self.read"`, `"developer.resource_timelines.read"`, `"developer.sandboxes.read"`, `"developer.sandboxes.write"`, `"developer.test_clocks.read"`, `"developer.test_clocks.write"`, `"merchant_billing.read"`, `"merchants.account_sessions.write"`, `"merchants.locations.read"`, `"merchants.locations.write"`, `"merchants.onboarding.read"`, `"merchants.onboarding.write"`, `"merchants.profile.read"`, `"merchants.profile.write"`, `"money_movement.balance_transactions.read"`, `"money_movement.balances.read"`, `"money_movement.payment_splits.read"`, `"money_movement.payout_settings.read"`, `"money_movement.payout_settings.write"`, `"money_movement.payouts.read"`, `"money_movement.payouts.write"`, `"money_movement.platform_fees.read"`, `"payments.disputes.read"`, `"payments.disputes.write"`, `"payments.payment_intents.read"`, `"payments.payment_intents.write"`, `"payments.payment_method_domains.read"`, `"payments.payment_method_domains.write"`, `"payments.payment_methods.read"`, `"payments.payment_methods.write"`, `"payments.readers.read"`, `"payments.readers.write"`, `"reports.read"`, `"reports.write"`, `"risk.controls.write"`, `"risk.read"`, `"risk.reviews.write"`, `"settings.read"`, `"settings.write"`, `"webhooks.read"`, `"webhooks.write"`.

### ApiKeyRevokedEvent.data fields 1.previous_attributes.scopes variant 2

anyOf variant 2.

- Value shape: null. The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.status

### ApiKeyRevokedEvent.data fields 1.previous_attributes.status variant 1

anyOf variant 1: Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at..

- Value shape: string. Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`.

### ApiKeyRevokedEvent.data fields 1.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.supported_actions

### ApiKeyRevokedEvent.data fields 1.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none..

- Value shape: Array of string. Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. Items values: `"revoke"`.

### ApiKeyRevokedEvent.data fields 1.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ApiKeyRevokedEvent.data fields 1.previous_attributes.version

### ApiKeyRevokedEvent.data fields 1.previous_attributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. 

### ApiKeyRevokedEvent.data fields 1.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

