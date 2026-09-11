# Flint Public API API reference

Package 0.2.0-beta.2; API 2026-09-07.

## api.addOrderCharge

Adds a service charge, fee, or surcharge to an order.

`POST /v1/orders/{order_id}/charges`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "charge": OrderChargeRequestInput; [key: string]: unknown; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-addOrderCharge.mjs)

## api.addOrderLineItems

Adds one or more line items to an order.

`POST /v1/orders/{order_id}/line-items`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "line_items": Array<CreateOrderLineItemInput>; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-addOrderLineItems.mjs)

## api.addReturnLineItem

Add a line item to a requested Return. The response is the updated Return, not the new line.

`POST /v1/returns/{return_id}/line-items`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "line_item": ReturnLineItemRequestInput; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-addReturnLineItem.mjs)

## api.addRiskListItems

Add risk list items for the authenticated merchant environment.

`POST /v1/risk-lists/{risk_list_id}/items`

Input: `{ "risk_list_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "value"?: string; "values": Array<string>; [key: string]: unknown; }) & ((({ "value": unknown; [key: string]: unknown; }) & ({ "values"?: never })) | (({ "values": unknown; [key: string]: unknown; }) & ({ "value"?: never }))); }`

Response: `{ "data": RiskListItemResultsData; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-addRiskListItems.mjs)

## api.advanceOnboarding

Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding requirements, and returns the next step in the consolidated onboarding state machine. Send an empty JSON object when the current next_step only asks to refresh onboarding requirements.

`POST /v1/onboarding/advance`

Input: `{ "sandbox_id"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "country"?: "US"; "profile"?: OnboardingProfileRequestInput; "requested_capabilities"?: ((Array<"accept_card_payments" | "receive_payouts">) | (Array<"accept_ach_debit_payments" | "accept_card_payments" | "receive_payouts">)); "sandbox_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": OnboardingState; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-advanceOnboarding.mjs)

## api.applyInventoryCount

Apply a completed physical count to inventory levels.

`POST /v1/inventory-counts/{inventory_count_id}/apply`

Input: `{ "Idempotency-Key": string; "inventory_count_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; }; }`

Response: `{ "data": InventoryCountResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-applyInventoryCount.mjs)

## api.applyOrderDiscount

Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must provide a promotion code; resource IDs and manual discounts require merchant authentication.

`POST /v1/orders/{order_id}/discounts`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": ({ "manual"?: ManualDiscountInputInput; "promotion"?: PromotionRefInputInput; [key: string]: unknown; }) & ((({ "promotion": unknown; [key: string]: unknown; }) & (({ "manual"?: never }))) | (({ "manual": unknown; [key: string]: unknown; }) & (({ "promotion"?: never })))); }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-applyOrderDiscount.mjs)

## api.approveReview

Approve a payment review for the authenticated merchant environment.

`POST /v1/reviews/{review_id}/approve`

Input: `{ "review_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Review; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-approveReview.mjs)

## api.assignToUnconfiguredDeliveryProfile

Assigns this active delivery profile to physical product variants and bundle components that do not have a delivery profile.

`POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`

Input: `{ "delivery_profile_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_catalog_default_version"?: string; "expected_version"?: string; }; }`

Response: `{ "data": DeliveryProfileAssignment; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-assignToUnconfiguredDeliveryProfile.mjs)

## api.authorizePartnerInstall

Authenticates the merchant in Flint, validates the requested partner app install, and redirects back to the partner's redirect_uri with an authorization code.

`GET /v1/oauth/authorize`

Input: `{ "response_type": "code"; "client_id": string; "redirect_uri": string; "mode": "test" | "live"; "permission_ids"?: string; "environment_id"?: string; "merchant_id"?: string; "state": string; "Flint-Version"?: string; }`

Response: `{ location?: string }`

[Example](examples/api-authorizePartnerInstall.mjs)

## api.cancelInventoryCount

Cancel an open physical count without changing inventory levels.

`POST /v1/inventory-counts/{inventory_count_id}/cancel`

Input: `{ "Idempotency-Key": string; "inventory_count_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; }; }`

Response: `{ "data": InventoryCountResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelInventoryCount.mjs)

## api.cancelInvoicePaymentAttempt

Cancels an active invoice payment attempt and its payment intent. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}/cancel`

Input: `{ "invoice_id": string; "invoice_payment_attempt_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": InvoicePaymentAttempt; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelInvoicePaymentAttempt.mjs)

## api.cancelMeReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/me/returns/{return_id}/cancel`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelMeReturn.mjs)

## api.cancelMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancels a subscription immediately or at period end. Response may include advisory contract information.

`POST /v1/me/subscriptions/{subscription_id}/cancel`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "cancel_immediately"?: boolean; [key: string]: unknown; }; }`

Response: `{ "data": CancelSubscriptionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelMeSubscription.mjs)

## api.cancelOrderPayment

Cancels an unsettled order-owned payment leg. A leg in an active payment attempt requires the matching payment_attempt_id. Canceling an authorization releases the payment lock and attempt-owned holds; a staged or declined leg with no active attempt can be canceled without an attempt ID.

`POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/cancel`

Input: `{ "order_id": string; "payment_intent_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body"?: { "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned"; "payment_attempt_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": OrderPaymentLifecycleResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelOrderPayment.mjs)

## api.cancelOrderPaymentAttempt

Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.

`POST /v1/orders/{order_id}/payment-attempts/{payment_attempt_id}/cancel`

Input: `{ "order_id": string; "payment_attempt_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body"?: { "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned"; [key: string]: unknown; }; }`

Response: `{ "data": PayOrderResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelOrderPaymentAttempt.mjs)

## api.cancelPaymentIntent

Cancels a standalone payment intent before it reaches a terminal settled state. Order-owned payment intents use the attempt-aware order cancellation route.

`POST /v1/payment-intents/{payment_intent_id}/cancel`

Input: `{ "payment_intent_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned"; [key: string]: unknown; }; }`

Response: `{ "data": PaymentIntent; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelPaymentIntent.mjs)

## api.cancelPayout

Cancels an eligible payout before it leaves Flint-controlled processing and returns the resulting payout.

`POST /v1/payouts/{payout_id}/cancel`

Input: `{ "payout_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": {  [key: string]: unknown; }; }`

Response: `{ "data": Payout; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelPayout.mjs)

## api.cancelReturn

Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/returns/{return_id}/cancel`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelReturn.mjs)

## api.cancelReturnDisposition

Cancel a disposition that has not started its inventory effect. Cancellation is refused once the effect is processing.

`POST /v1/return-dispositions/{return_disposition_id}/cancel`

Input: `{ "return_disposition_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnDisposition; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelReturnDisposition.mjs)

## api.cancelReturnLineItem

Cancel approved quantity on a Return line item. Quantity already received, inspected, dispositioned, or reserved by a resolution cannot be canceled, and the conflict response names what is blocking it.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel`

Input: `{ "return_id": string; "return_line_item_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "handback_quantity": string; "quantity": string; "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelReturnLineItem.mjs)

## api.cancelReturnResolution

Cancel a resolution and release the line value it reserved. Effects that already succeeded are undone with a compensating correction instead.

`POST /v1/return-resolutions/{return_resolution_id}/cancel`

Input: `{ "return_resolution_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelReturnResolution.mjs)

## api.cancelSubscription

Cancels a subscription immediately or at period end. Response may include advisory contract information.

`POST /v1/subscriptions/{subscription_id}/cancel`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "cancel_immediately"?: boolean; [key: string]: unknown; }; }`

Response: `{ "data": CancelSubscriptionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-cancelSubscription.mjs)

## api.captureOrderPayment

Captures an active payment authorization for an order and updates the order payment lifecycle.

`POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/capture`

Input: `{ "order_id": string; "payment_intent_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "amount_money"?: MoneyValueInput; "payment_attempt_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": OrderPaymentLifecycleResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-captureOrderPayment.mjs)

## api.capturePaymentIntent

Captures an authorized standalone payment intent, including partial captures when supported. Order-owned payment intents use the attempt-aware order capture route.

`POST /v1/payment-intents/{payment_intent_id}/capture`

Input: `{ "payment_intent_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "amount_money"?: MoneyValueInput; [key: string]: unknown; }; }`

Response: `{ "data": PaymentIntent; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-capturePaymentIntent.mjs)

## api.changeMeSubscriptionPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the subscription to an active payment method owned by the same customer.

`POST /v1/me/subscriptions/{subscription_id}/payment-method`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "payment_method_id": string; [key: string]: unknown; }; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-changeMeSubscriptionPaymentMethod.mjs)

## api.changeSubscriptionPaymentMethod

Changes the subscription to an active payment method owned by the same customer.

`POST /v1/subscriptions/{subscription_id}/payment-method`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "payment_method_id": string; [key: string]: unknown; }; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-changeSubscriptionPaymentMethod.mjs)

## api.checkDeliveryRateCallbackConnection

Sends a minimal signed probe to verify endpoint reachability and callback credentials without running a synthetic rate evaluation.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection`

Input: `{ "delivery_rate_callback_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryRateCallbackConnectionCheck; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-checkDeliveryRateCallbackConnection.mjs)

## api.closeCheckoutSession

Closes an open checkout session before it naturally expires.

`POST /v1/checkout-sessions/{checkout_session_id}/close`

Input: `{ "checkout_session_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "reason"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CheckoutSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-closeCheckoutSession.mjs)

## api.closeOrder

Closes an eligible open, paid, or partially refunded order. Closing cancels pending discounts, releases pending promotion reservations, and recalculates totals from the current surviving pricing economics; canceled discounts remain visible with status: "canceled" but no longer reduce the total. Closing is blocked while payment collection is in progress.

`POST /v1/orders/{order_id}/close`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "reason"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-closeOrder.mjs)

## api.collectInvoice

Charges the invoice's saved payment method or the supplied saved payment method. This command requires a caller-chosen Idempotency-Key that is reused for retries of the same collection request.

`POST /v1/invoices/{invoice_id}/collect`

Input: `{ "invoice_id": string; "Idempotency-Key": string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "invoice_schedule_entry_id"?: string; "payment_method_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CollectInvoiceResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-collectInvoice.mjs)

## api.commitInventoryReservation

Move held quantity to committed. Lines carry cumulative targets, so resending an applied target is a successful no-op.

`POST /v1/inventory-reservations/{inventory_reservation_id}/commit`

Input: `{ "Idempotency-Key": string; "inventory_reservation_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_committed_quantity": string; [key: string]: unknown; }>; [key: string]: unknown; }; }`

Response: `{ "data": InventoryReservationResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-commitInventoryReservation.mjs)

## api.completeReturn

Complete a Return whose completion_mode is manual. The call fails while completion_blockers is non-empty. Automatic Returns complete themselves when the final blocker clears.

`POST /v1/returns/{return_id}/complete`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason"?: "manual_completion" | "exception_waived" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-completeReturn.mjs)

## api.confirmMeEmailChangeRequest

Confirms possession of the current and new email addresses, then atomically updates the customer account in the selected merchant environment. Omit current_email_code only when current_email_confirmation_required is false.

`POST /v1/me/email-change-requests/{email_change_request_id}/confirm`

Input: `{ "email_change_request_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "current_email_code"?: string; "new_email_code": string; [key: string]: unknown; }; }`

Response: `{ "data": EmailChangeRequest; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-confirmMeEmailChangeRequest.mjs)

## api.confirmPaymentIntent

Confirms a standalone payment intent. Order-owned payment intents reject this route and must be confirmed through POST /v1/orders/{order_id}/pay.

`POST /v1/payment-intents/{payment_intent_id}/confirm`

Input: `{ "payment_intent_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "confirmation_token"?: string; "payment_method_id"?: string; "payment_source_token"?: string; [key: string]: unknown; }; }`

Response: `{ "data": PaymentIntent; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-confirmPaymentIntent.mjs)

## api.confirmReturnResolution

Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind line-qualified execution blockers.

`POST /v1/return-resolutions/{return_resolution_id}/confirm`

Input: `{ "return_resolution_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; }; }`

Response: `{ "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-confirmReturnResolution.mjs)

## api.consumeInventoryReservation

Consume committed quantity, permanently removing it from stock. Cumulative targets; consumed quantity is terminal.

`POST /v1/inventory-reservations/{inventory_reservation_id}/consume`

Input: `{ "Idempotency-Key": string; "inventory_reservation_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_consumed_quantity": string; [key: string]: unknown; }>; "provenance": { "external_actor_id"?: string; "occurred_at"?: string; "source_system"?: InventorySourceSystemRequestInput; [key: string]: unknown; }; [key: string]: unknown; }; }`

Response: `{ "data": InventoryReservationResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-consumeInventoryReservation.mjs)

## api.createAPIKey

Creates a merchant-bound external API key. secret_key is returned only in the initial successful response and accepted idempotent replays of the same create request.

`POST /v1/api-keys`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expires_at"?: string; "name": string; "sandbox_id"?: string; "scopes": Array<"accounts.api_keys.read" | "accounts.api_keys.write" | "accounts.devices.read" | "accounts.devices.write" | "accounts.organizations.read" | "accounts.organizations.write" | "analytics.read" | "capabilities.read" | "checkouts.checkout_sessions.read" | "checkouts.checkout_sessions.write" | "checkouts.payment_links.read" | "checkouts.payment_links.write" | "commerce.bundles.read" | "commerce.bundles.write" | "commerce.catalog.read" | "commerce.catalog.write" | "commerce.credit_notes.read" | "commerce.credit_notes.write" | "commerce.delivery.read" | "commerce.delivery.write" | "commerce.inventory.read" | "commerce.inventory.write" | "commerce.inventory_locations.write" | "commerce.inventory_policies.write" | "commerce.inventory_reservations.write" | "commerce.invoices.read" | "commerce.invoices.write" | "commerce.orders.read" | "commerce.orders.write" | "commerce.products.read" | "commerce.products.write" | "commerce.promotions.read" | "commerce.promotions.write" | "commerce.refunds.read" | "commerce.refunds.tax_overrides.write" | "commerce.refunds.write" | "commerce.return_policies.write" | "commerce.return_reasons.write" | "commerce.returns.decisions.write" | "commerce.returns.operations.write" | "commerce.returns.process.write" | "commerce.returns.read" | "commerce.returns.resolutions.write" | "commerce.returns.write" | "commerce.subscription_plans.read" | "commerce.subscription_plans.write" | "commerce.subscriptions.read" | "commerce.subscriptions.write" | "customers.read" | "customers.sessions.write" | "customers.write" | "developer.feedback_reports.read" | "developer.feedback_reports.write" | "developer.partner_apps.read" | "developer.partner_apps.write" | "developer.request_logs.self.detail.read" | "developer.request_logs.self.read" | "developer.resource_timelines.read" | "developer.sandboxes.read" | "developer.sandboxes.write" | "merchant_billing.read" | "merchants.account_sessions.write" | "merchants.locations.read" | "merchants.locations.write" | "merchants.onboarding.read" | "merchants.onboarding.write" | "merchants.profile.read" | "merchants.profile.write" | "money_movement.balance_transactions.read" | "money_movement.balances.read" | "money_movement.payout_settings.read" | "money_movement.payout_settings.write" | "money_movement.payouts.read" | "money_movement.payouts.write" | "payments.disputes.read" | "payments.payment_intents.read" | "payments.payment_intents.write" | "payments.payment_method_domains.read" | "payments.payment_method_domains.write" | "payments.payment_methods.read" | "payments.payment_methods.write" | "payments.payment_options.read" | "reports.read" | "reports.write" | "risk.controls.write" | "risk.read" | "risk.reviews.write" | "settings.read" | "settings.write" | "webhooks.read" | "webhooks.write">; [key: string]: unknown; }; }`

Response: `{ "data": APIKeyWithSecret; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createAPIKey.mjs)

## api.createBundle

Create bundle.

`POST /v1/bundles`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "barcode"?: string; "categories"?: Array<string>; "components"?: Array<CreateBundleComponentInputInput>; "description"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string>; "modifier_set_id"?: string | null; "name": string; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money": MoneyValueInput; [key: string]: unknown; }; }`

Response: `{ "data": Bundle; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createBundle.mjs)

## api.createCategory

Creates a reusable category. If handle is omitted, Flint derives it from the name and never changes it on rename.

`POST /v1/categories`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "description"?: string; "external_reference_id"?: string; "handle"?: string; "metadata"?: Record<string, string>; "name": string; [key: string]: unknown; }; }`

Response: `{ "data": Category; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCategory.mjs)

## api.createCheckoutSession

Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.

`POST /v1/checkout-sessions`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: CheckoutCustomerConfigInput; "delivery_method_ids"?: Array<string>; "expiration"?: CheckoutExpirationConfigInput; "external_reference_id"?: string; "legal"?: LegalSettingsInput; "metadata"?: Record<string, string>; "order_id"?: string; "payment_intent_id"?: string; "payments"?: CheckoutPaymentConfigInput; "plan_id"?: string; "promotion_config"?: CheckoutPromotionConfigInput; "quick_pay_item"?: CheckoutQuickPayItemInputInput; "redirects"?: CheckoutRedirectsConfigInput; "replace_checkout_session_id"?: string; "surface"?: "hosted" | "embedded"; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; [key: string]: unknown; }) & ((({ "order_id": unknown; [key: string]: unknown; }) & (({ "quick_pay_item"?: never }) & ({ "plan_id"?: never }) & ({ "payment_intent_id"?: never }))) | (({ "quick_pay_item": unknown; [key: string]: unknown; }) & (({ "order_id"?: never }) & ({ "plan_id"?: never }) & ({ "payment_intent_id"?: never }) & ({ "replace_checkout_session_id"?: never }))) | (({ "plan_id": unknown; [key: string]: unknown; }) & (({ "order_id"?: never }) & ({ "quick_pay_item"?: never }) & ({ "payment_intent_id"?: never }) & ({ "replace_checkout_session_id"?: never }))) | (({ "payment_intent_id": unknown; [key: string]: unknown; }) & (({ "order_id"?: never }) & ({ "quick_pay_item"?: never }) & ({ "plan_id"?: never }) & ({ "replace_checkout_session_id"?: never })))); }`

Response: `{ "data": CheckoutSessionLaunchResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCheckoutSession.mjs)

## api.createCheckoutSessionDeliveryQuote

Creates an exact checkout-bound delivery quote without holding inventory.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes`

Input: `{ "checkout_session_id": string; "Idempotency-Key"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "basis_delivery_quote_id"?: string; "buyer_location"?: DeliveryBuyerLocationInputInput; "destination_address"?: DeliveryAddressInputInput; "expected_delivery_selection_id": string | null; "inventory_assignments"?: Array<DeliveryInventoryAssignmentRequestInput>; "method_results"?: Array<CallerSuppliedDeliveryMethodResultRequestInput>; "pickup_location_id"?: string; "tier_key"?: string; [key: string]: unknown; }; }`

Response: `{ "data": (({ "audience": ("merchant") & ("merchant"); "basis_delivery_quote_id"?: string; "basis_delivery_selection_id"?: string; "buyer_location"?: DeliveryBuyerLocationResource; "checkout_session_id": string; "choice_groups": Array<DeliveryQuoteChoiceGroupResource>; "consumed_by_delivery_selection_id"?: string; "delivery_quote_id": string; "delivery_quote_revision": string; "destination_address"?: DeliveryAddressInput; "eligibility_context_revision": string; "evaluated_at": string; "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {}); "expires_at": string; "input_requirements": Array<DeliveryInputRequirement>; "merchant_diagnostics": Array<DeliveryMerchantDiagnostic>; "methods"?: Array<DeliveryQuoteMethodResource>; "order_id": string; "pending_caller_rate_requests"?: Array<DeliveryPendingCallerRateRequest>; "revocation_reason"?: "configuration_changed" | "checkout_unavailable" | (string & {}); "revoked_at"?: string; "selection_required": boolean; "stale_reason"?: "checkout_changed" | "selection_changed" | "eligibility_changed" | "inventory_changed" | "authority_changed" | "consumed_by_priced_quote" | (string & {}); "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {}); [key: string]: unknown; }) | ({ "audience": ("buyer") & ("buyer"); "buyer_location"?: DeliveryBuyerLocationResource; "buyer_reasons": Array<"address_required" | "address_incomplete" | "outside_delivery_area" | "no_pickup_location_nearby" | "unavailable_for_these_items" | "temporarily_unavailable" | (string & {})>; "choice_groups": Array<BuyerDeliveryQuoteChoiceGroupResource>; "delivery_quote_id": string; "destination_address"?: DeliveryAddressResource; "evaluated_at": string; "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {}); "expires_at": string; "input_requirements": Array<BuyerDeliveryInputRequirementResource>; "selection_required": boolean; "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {}); [key: string]: unknown; }) | ({ [key: string]: unknown })); "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCheckoutSessionDeliveryQuote.mjs)

## api.createCheckoutSessionDeliverySelection

Atomically selects one option per choice group, replaces inventory holds, and recalculates checkout economics.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections`

Input: `{ "checkout_session_id": string; "Idempotency-Key"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "choices": Array<CreateDeliverySelectionChoiceRequestInput>; "delivery_quote_id": string; "destination_address"?: PostalAddressInput; "expected_delivery_selection_id": string | null; "external_reference_id"?: string; "external_system"?: string; "recipient"?: DeliverySelectionRecipientRequestInput; [key: string]: unknown; }; }`

Response: `{ "data": (({ "audience": ("merchant") & ("merchant"); "checkout_session": CheckoutSession; "delivery_selection": DeliverySelection; "inventory_reservation"?: DeliveryInventoryReservationSummary; "order": Order; [key: string]: unknown; }) | ({ "audience": ("buyer") & ("buyer"); "checkout_session": CheckoutSession; "delivery_selection": BuyerDeliverySelection; "inventory_reservation"?: DeliveryInventoryReservationSummary; "order": Order; [key: string]: unknown; }) | ({ [key: string]: unknown })); "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCheckoutSessionDeliverySelection.mjs)

## api.createCreditNote

Creates a draft credit note against an invoice that has been issued and not voided. Include credit_note_lines for initial corrections or omit them for an empty draft. The draft uses the invoice currency and receives a credit note number when issued.

`POST /v1/credit-notes`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "credit_note_lines"?: Array<CreditNoteLineRequestInput>; "external_reference_id"?: string; "invoice_id": string; "memo"?: string; "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other"; [key: string]: unknown; }; }`

Response: `{ "data": CreditNote; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCreditNote.mjs)

## api.createCreditNoteAllocation

Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount cannot exceed the credit note's unallocated_money or the invoice's outstanding balance. Closing the balance with credit sets the invoice to credited. Returns the allocation, the credit note, and the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's identity.

`POST /v1/credit-notes/{credit_note_id}/allocations`

Input: `{ "credit_note_id": string; "Idempotency-Key": string; "Flint-Version"?: string; "body": { "amount_money": { "amount": string; "currency": string; }; "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CreditNoteAllocationResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCreditNoteAllocation.mjs)

## api.createCustomer

Creates a customer for the authenticated merchant.

`POST /v1/customers`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "billing_address"?: PostalAddressInput; "default_invoice_payment_term_id"?: string; "email": string; "external_reference_id"?: string; "group_id"?: string; "internal_note"?: string; "is_verified"?: boolean; "metadata"?: Record<string, string>; "name"?: string; "phone"?: string; "shipping_address"?: PostalAddressInput; "tax_exempt"?: boolean; [key: string]: unknown; }; }`

Response: `{ "data": Customer; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCustomer.mjs)

## api.createCustomerAddress

Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/customers/{customer_id}/addresses`

Input: `{ "customer_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "address": PostalAddressInput; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; [key: string]: unknown; }; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCustomerAddress.mjs)

## api.createCustomerDeletionRequest

Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.

`POST /v1/customers/{customer_id}/deletion-requests`

Input: `{ "customer_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerDeletionRequest; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCustomerDeletionRequest.mjs)

## api.createCustomerSession

Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Secret and refresh_token are returned only in this response. Flint-hosted merchants also receive a separately expiring one-time account_url.

`POST /v1/customer-sessions`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "account_url_expires_in_seconds"?: string; "customer_id": string; "expires_in_seconds"?: string; "refresh_expires_in_seconds"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CustomerSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createCustomerSession.mjs)

## api.createDeliveryLocationSet

Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-location-sets`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "configuration": DeliveryLocationSetConfigurationInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }; }`

Response: `{ "data": DeliveryLocationSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeliveryLocationSet.mjs)

## api.createDeliveryMethod

Delivery methods combine eligibility, pricing, schedules, estimates, tax treatment, and execution behavior. Creation publishes immutable revision 1. Omit status to start inactive.

`POST /v1/delivery-methods`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "configuration": DeliveryMethodConfigurationCreateInputInput; "description"?: string; "display_position"?: number; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "recommendation_priority"?: number; "status"?: "inactive" | "active"; "type": "shipment" | "local_delivery" | "pickup"; }) & (({ "configuration": (({ "buyer_instructions"?: { "enabled": boolean; "label"?: string; "placeholder"?: string; "required": boolean; [key: string]: unknown; }; "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null; "eligibility"?: ({ "all"?: Array<DeliveryEligibilityExpressionInput>; "any"?: Array<DeliveryEligibilityExpressionInput>; "country"?: DeliveryStateConditionInput; "customer_group"?: DeliveryCustomerGroupConditionInput; "customer_has_email"?: DeliveryCustomerBooleanConditionInput; "customer_has_phone_number"?: DeliveryCustomerBooleanConditionInput; "customer_verified"?: DeliveryCustomerBooleanConditionInput; "not"?: DeliveryEligibilityExpressionInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; "window_time"?: DeliveryWindowTimeConditionInput; "zone"?: DeliveryZoneConditionInput; }) & (({ "all": unknown; [key: string]: unknown; }) | ({ "any": unknown; [key: string]: unknown; }) | ({ "not": unknown; [key: string]: unknown; }) | ({ "zone": unknown; [key: string]: unknown; }) | ({ "country": unknown; [key: string]: unknown; }) | ({ "state": unknown; [key: string]: unknown; }) | ({ "postal_code": unknown; [key: string]: unknown; }) | ({ "radius": unknown; [key: string]: unknown; }) | ({ "window_time": unknown; [key: string]: unknown; }) | ({ "customer_group": unknown; [key: string]: unknown; }) | ({ "customer_verified": unknown; [key: string]: unknown; }) | ({ "customer_has_email": unknown; [key: string]: unknown; }) | ({ "customer_has_phone_number": unknown; [key: string]: unknown; })); "estimate"?: { "schedule_window"?: DeliveryScheduleWindowRuleRequestInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; }; "minimum_option_lifetime_seconds"?: string; "origin": ({ "delivery_location_set_id"?: string; "location_id"?: string; "location_ids"?: Array<string>; "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection"; }) & ((({ "type": ("fixed_location") & ("fixed_location"); "location_id": unknown; [key: string]: unknown; }) & (({ "delivery_location_set_id"?: never }) & ({ "delivery_location_set_revision_id"?: never }) & ({ "location_ids"?: never }))) | (({ "location_ids"?: Array<string>; "type": ("allocated_origin_group") & ("allocated_origin_group"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never })) | (({ "location_ids"?: Array<string>; "type": ("pickup_location_collection") & ("pickup_location_collection"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never }))); "pricing": ({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never })))); "public_details"?: { "instructions"?: string; "pickup_mode"?: "in_store" | "curbside" | "locker" | "other"; "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day" | "on_demand" | "scheduled"; }; "quote_input_fields"?: Array<"destination_address" | "destination_address.line1" | "destination_address.line2" | "destination_address.city" | "destination_address.state" | "destination_address.postal_code" | "destination_address.country" | "buyer_location" | "buyer_location.line1" | "buyer_location.line2" | "buyer_location.city" | "buyer_location.state" | "buyer_location.postal_code" | "buyer_location.country" | "buyer_location.coordinate">; "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>; "selection_guarantee_seconds"?: string; "taxable"?: boolean | null; }) & (({ "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "fixed" | "rate_table" | "tiered"; [key: string]: unknown; }); [key: string]: unknown; }) | ({ "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "calculated"; [key: string]: unknown; }); "minimum_option_lifetime_seconds": unknown; [key: string]: unknown; }) | ({ "estimate"?: ({ "schedule_window"?: DeliveryScheduleWindowRuleRequestInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; }) & ({ "type"?: "transit_time" | "schedule_window"; [key: string]: unknown; }); "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "callback" | "caller_supplied"; [key: string]: unknown; }); "minimum_option_lifetime_seconds": unknown; [key: string]: unknown; }))) & ({ "public_details"?: ({ "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day"; [key: string]: unknown; }) & ({ "pickup_mode"?: never }); [key: string]: unknown; }); "type": "shipment"; [key: string]: unknown; }) | ({ "configuration": (({ "buyer_instructions"?: { "enabled": boolean; "label"?: string; "placeholder"?: string; "required": boolean; [key: string]: unknown; }; "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null; "eligibility"?: ({ "all"?: Array<DeliveryEligibilityExpressionInput>; "any"?: Array<DeliveryEligibilityExpressionInput>; "country"?: DeliveryStateConditionInput; "customer_group"?: DeliveryCustomerGroupConditionInput; "customer_has_email"?: DeliveryCustomerBooleanConditionInput; "customer_has_phone_number"?: DeliveryCustomerBooleanConditionInput; "customer_verified"?: DeliveryCustomerBooleanConditionInput; "not"?: DeliveryEligibilityExpressionInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; "window_time"?: DeliveryWindowTimeConditionInput; "zone"?: DeliveryZoneConditionInput; }) & (({ "all": unknown; [key: string]: unknown; }) | ({ "any": unknown; [key: string]: unknown; }) | ({ "not": unknown; [key: string]: unknown; }) | ({ "zone": unknown; [key: string]: unknown; }) | ({ "country": unknown; [key: string]: unknown; }) | ({ "state": unknown; [key: string]: unknown; }) | ({ "postal_code": unknown; [key: string]: unknown; }) | ({ "radius": unknown; [key: string]: unknown; }) | ({ "window_time": unknown; [key: string]: unknown; }) | ({ "customer_group": unknown; [key: string]: unknown; }) | ({ "customer_verified": unknown; [key: string]: unknown; }) | ({ "customer_has_email": unknown; [key: string]: unknown; }) | ({ "customer_has_phone_number": unknown; [key: string]: unknown; })); "estimate"?: { "schedule_window"?: DeliveryScheduleWindowRuleRequestInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; }; "minimum_option_lifetime_seconds"?: string; "origin": ({ "delivery_location_set_id"?: string; "location_id"?: string; "location_ids"?: Array<string>; "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection"; }) & ((({ "type": ("fixed_location") & ("fixed_location"); "location_id": unknown; [key: string]: unknown; }) & (({ "delivery_location_set_id"?: never }) & ({ "delivery_location_set_revision_id"?: never }) & ({ "location_ids"?: never }))) | (({ "location_ids"?: Array<string>; "type": ("allocated_origin_group") & ("allocated_origin_group"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never })) | (({ "location_ids"?: Array<string>; "type": ("pickup_location_collection") & ("pickup_location_collection"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never }))); "pricing": ({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never })))); "public_details"?: { "instructions"?: string; "pickup_mode"?: "in_store" | "curbside" | "locker" | "other"; "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day" | "on_demand" | "scheduled"; }; "quote_input_fields"?: Array<"destination_address" | "destination_address.line1" | "destination_address.line2" | "destination_address.city" | "destination_address.state" | "destination_address.postal_code" | "destination_address.country" | "buyer_location" | "buyer_location.line1" | "buyer_location.line2" | "buyer_location.city" | "buyer_location.state" | "buyer_location.postal_code" | "buyer_location.country" | "buyer_location.coordinate">; "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>; "selection_guarantee_seconds"?: string; "taxable"?: boolean | null; }) & (({ "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "fixed" | "rate_table" | "tiered"; [key: string]: unknown; }); [key: string]: unknown; }) | ({ "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "calculated"; [key: string]: unknown; }); "minimum_option_lifetime_seconds": unknown; [key: string]: unknown; }) | ({ "estimate"?: ({ "schedule_window"?: DeliveryScheduleWindowRuleRequestInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; }) & ({ "type"?: "transit_time" | "schedule_window"; [key: string]: unknown; }); "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "callback" | "caller_supplied"; [key: string]: unknown; }); "minimum_option_lifetime_seconds": unknown; [key: string]: unknown; }))) & ({ "public_details"?: ({ "service_level"?: "on_demand" | "same_day" | "scheduled"; [key: string]: unknown; }) & ({ "pickup_mode"?: never }); [key: string]: unknown; }); "type": "local_delivery"; [key: string]: unknown; }) | ({ "configuration": (({ "buyer_instructions"?: { "enabled": boolean; "label"?: string; "placeholder"?: string; "required": boolean; [key: string]: unknown; }; "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null; "eligibility"?: ({ "all"?: Array<DeliveryEligibilityExpressionInput>; "any"?: Array<DeliveryEligibilityExpressionInput>; "country"?: DeliveryStateConditionInput; "customer_group"?: DeliveryCustomerGroupConditionInput; "customer_has_email"?: DeliveryCustomerBooleanConditionInput; "customer_has_phone_number"?: DeliveryCustomerBooleanConditionInput; "customer_verified"?: DeliveryCustomerBooleanConditionInput; "not"?: DeliveryEligibilityExpressionInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; "window_time"?: DeliveryWindowTimeConditionInput; "zone"?: DeliveryZoneConditionInput; }) & (({ "all": unknown; [key: string]: unknown; }) | ({ "any": unknown; [key: string]: unknown; }) | ({ "not": unknown; [key: string]: unknown; }) | ({ "zone": unknown; [key: string]: unknown; }) | ({ "country": unknown; [key: string]: unknown; }) | ({ "state": unknown; [key: string]: unknown; }) | ({ "postal_code": unknown; [key: string]: unknown; }) | ({ "radius": unknown; [key: string]: unknown; }) | ({ "window_time": unknown; [key: string]: unknown; }) | ({ "customer_group": unknown; [key: string]: unknown; }) | ({ "customer_verified": unknown; [key: string]: unknown; }) | ({ "customer_has_email": unknown; [key: string]: unknown; }) | ({ "customer_has_phone_number": unknown; [key: string]: unknown; })); "estimate"?: { "schedule_window"?: DeliveryScheduleWindowRuleRequestInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; }; "minimum_option_lifetime_seconds"?: string; "origin": ({ "delivery_location_set_id"?: string; "location_id"?: string; "location_ids"?: Array<string>; "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection"; }) & ((({ "type": ("fixed_location") & ("fixed_location"); "location_id": unknown; [key: string]: unknown; }) & (({ "delivery_location_set_id"?: never }) & ({ "delivery_location_set_revision_id"?: never }) & ({ "location_ids"?: never }))) | (({ "location_ids"?: Array<string>; "type": ("allocated_origin_group") & ("allocated_origin_group"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never })) | (({ "location_ids"?: Array<string>; "type": ("pickup_location_collection") & ("pickup_location_collection"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never }))); "pricing": ({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never })))); "public_details"?: { "instructions"?: string; "pickup_mode"?: "in_store" | "curbside" | "locker" | "other"; "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day" | "on_demand" | "scheduled"; }; "quote_input_fields"?: Array<"destination_address" | "destination_address.line1" | "destination_address.line2" | "destination_address.city" | "destination_address.state" | "destination_address.postal_code" | "destination_address.country" | "buyer_location" | "buyer_location.line1" | "buyer_location.line2" | "buyer_location.city" | "buyer_location.state" | "buyer_location.postal_code" | "buyer_location.country" | "buyer_location.coordinate">; "recipient_requirements"?: Array<DeliveryRecipientRequirementInput>; "selection_guarantee_seconds"?: string; "taxable"?: boolean | null; }) & (({ "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "fixed" | "rate_table" | "tiered"; [key: string]: unknown; }); [key: string]: unknown; }) | ({ "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "calculated"; [key: string]: unknown; }); "minimum_option_lifetime_seconds": unknown; [key: string]: unknown; }) | ({ "estimate"?: ({ "schedule_window"?: DeliveryScheduleWindowRuleRequestInput; "transit_time"?: DeliveryTransitTimeRuleInput; "type": "none" | "transit_time" | "schedule_window"; }) & ({ "type"?: "transit_time" | "schedule_window"; [key: string]: unknown; }); "pricing"?: (({ "calculated"?: DeliveryCalculatedPricingStrategyRequestInput; "callback"?: DeliveryCallbackPricingStrategyInputInput; "caller_supplied"?: DeliveryCallerSuppliedPricingStrategyInputInput; "fixed"?: DeliveryFixedPricingStrategyRequestInput; "rate_table"?: DeliveryRateTablePricingStrategyRequestInput; "tiered"?: DeliveryTieredPricingStrategyRequestInput; "type": "fixed" | "rate_table" | "tiered" | "calculated" | "callback" | "caller_supplied"; }) & ((({ "type": ("calculated") & ("calculated"); "calculated": unknown; [key: string]: unknown; }) & (({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("callback") & ("callback"); "callback": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("caller_supplied") & ("caller_supplied"); "caller_supplied": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("fixed") & ("fixed"); "fixed": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "rate_table"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("rate_table") & ("rate_table"); "rate_table": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "tiered"?: never }))) | (({ "type": ("tiered") & ("tiered"); "tiered": unknown; [key: string]: unknown; }) & (({ "calculated"?: never }) & ({ "callback"?: never }) & ({ "caller_supplied"?: never }) & ({ "fixed"?: never }) & ({ "rate_table"?: never }))))) & ({ "type"?: "callback" | "caller_supplied"; [key: string]: unknown; }); "minimum_option_lifetime_seconds": unknown; [key: string]: unknown; }))) & ({ "origin": (({ "delivery_location_set_id"?: string; "location_id"?: string; "location_ids"?: Array<string>; "type": "fixed_location" | "allocated_origin_group" | "pickup_location_collection"; }) & ((({ "type": ("fixed_location") & ("fixed_location"); "location_id": unknown; [key: string]: unknown; }) & (({ "delivery_location_set_id"?: never }) & ({ "delivery_location_set_revision_id"?: never }) & ({ "location_ids"?: never }))) | (({ "location_ids"?: Array<string>; "type": ("allocated_origin_group") & ("allocated_origin_group"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never })) | (({ "location_ids"?: Array<string>; "type": ("pickup_location_collection") & ("pickup_location_collection"); [key: string]: unknown; }) & (({ "delivery_location_set_id": unknown; [key: string]: unknown; }) | ({ "location_ids": unknown; [key: string]: unknown; })) & ({ "location_id"?: never })))) & ({ "type"?: "pickup_location_collection"; [key: string]: unknown; }); "public_details": ({ "pickup_mode": "in_store" | "curbside" | "locker" | "other"; [key: string]: unknown; }) & ({ "service_level"?: never }); [key: string]: unknown; }); "type": "pickup"; [key: string]: unknown; })); }`

Response: `{ "data": DeliveryMethod; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeliveryMethod.mjs)

## api.createDeliveryPreview

Computes exact display-only delivery outcomes without persisting a resource, holding inventory, or granting selection authority.

`POST /v1/delivery-previews`

Input: `{ "Flint-Version"?: string; "body": { "buyer_location"?: DeliveryBuyerLocationInputInput; "currency": string; "delivery_method_ids": Array<string>; "destination_address"?: DeliveryAddressInputInput; "inventory_routing_source"?: DeliveryPreviewRoutingSourceInput; "line_items": Array<CreateOrderLineItemInput>; "pickup_location_id"?: string; "pricing_context"?: Record<string, string>; }; }`

Response: `{ "data": DeliveryPreview; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeliveryPreview.mjs)

## api.createDeliveryProfile

Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-profiles`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "configuration": DeliveryProfileConfigurationRequestInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }; }`

Response: `{ "data": DeliveryProfile; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeliveryProfile.mjs)

## api.createDeliveryRateCallback

Delivery callback endpoints pin shared outbound callback transport configuration. Creation publishes immutable revision 1. It starts inactive.

`POST /v1/delivery-rate-callbacks`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "configuration": DeliveryRateCallbackConfigurationInput; "external_reference_id"?: string; "name": string; }; }`

Response: `{ "data": DeliveryRateCallback; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeliveryRateCallback.mjs)

## api.createDeliveryRateCallbackTestDelivery

Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries`

Input: `{ "delivery_rate_callback_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryRateCallbackTestDelivery; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeliveryRateCallbackTestDelivery.mjs)

## api.createDeliveryZone

Delivery zones define versioned geographic eligibility. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-zones`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "configuration": ({ "all"?: Array<DeliveryZoneConfigurationInput>; "any"?: Array<DeliveryZoneConfigurationInput>; "country"?: DeliveryStateConditionInput; "not"?: DeliveryZoneConfigurationInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; }) & (({ "all": unknown; [key: string]: unknown; }) | ({ "any": unknown; [key: string]: unknown; }) | ({ "not": unknown; [key: string]: unknown; }) | ({ "country": unknown; [key: string]: unknown; }) | ({ "state": unknown; [key: string]: unknown; }) | ({ "postal_code": unknown; [key: string]: unknown; }) | ({ "radius": unknown; [key: string]: unknown; })); "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; }; }`

Response: `{ "data": DeliveryZone; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeliveryZone.mjs)

## api.createDemoSession

Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is displayed only at creation time and for a short idempotent retry window.

`POST /v1/demo-sessions`

Input: `{ "Idempotency-Key"?: string; "X-Turnstile-Token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "template"?: string; [key: string]: unknown; }; }`

Response: `{ "data": DemoSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDemoSession.mjs)

## api.createDeveloperPartnerApp

Creates a partner app owned by the authenticated merchant. Use a developer setup session during setup or a normal external API key afterward.

`POST /v1/developer/partner/apps`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "api_version"?: string; "app_type"?: string; "default_requested_permissions"?: Array<string>; "name": string; "permission_manifest": Array<PartnerAppPermissionManifestEntryInput>; "redirect_uris": Array<string>; "visibility"?: string; [key: string]: unknown; }; }`

Response: `{ "data": PartnerAppWithSecret; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeveloperPartnerApp.mjs)

## api.createDeveloperSandbox

Creates a new test sandbox for the current merchant. Optionally seeds the new empty sandbox with the merchant's live defaults and issues a sandbox-bound test key as part of creation.

`POST /v1/developer/sandboxes`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "issue_test_key"?: boolean; "name": string; "scopes"?: Array<string>; "test_key_name"?: string; [key: string]: unknown; }; }`

Response: `{ "data": DeveloperSandboxWithAPIKey; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDeveloperSandbox.mjs)

## api.createDevice

Creates a device for the authenticated merchant. If hardware_fingerprint matches an existing device, the existing device is returned with 200 OK and data.already_existed=true.

`POST /v1/devices`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "hardware_fingerprint"?: string; "location_id"?: string; "metadata"?: Record<string, string>; "name": string; [key: string]: unknown; }; }`

Response: `{ "data": CreateDeviceResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createDevice.mjs)

## api.createFeedbackReport

Stores one immutable occurrence of Flint feedback. Use one report per root cause and include only the evidence needed to describe Flint's behavior.

`POST /v1/feedback-reports`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "actual_behavior"?: string; "canonical_command"?: string; "code_location"?: string; "component"?: string; "description"?: string; "expected_behavior"?: string; "kind": "papercut" | "bug" | "feature_request" | "rating" | "praise" | "other"; "related_request_id"?: string; "related_resource_ids"?: Array<string>; "reporter_kind"?: "human" | "ai_agent"; "reporting_client"?: FeedbackReportingClientInput; "reproduction_steps"?: Array<string>; "sentiment"?: "positive" | "negative" | "neutral"; "summary"?: string; "surface": "api" | "cli" | "mcp" | "sdk" | "docs" | "dashboard" | "checkout" | "payment_links" | "webhooks" | "onboarding" | "mobile" | "other"; "surface_route"?: string; }) & (({ "kind": "rating"; "surface": unknown; "sentiment": unknown; [key: string]: unknown; }) | ({ "kind": "papercut" | "bug" | "feature_request" | "praise" | "other"; "surface": unknown; "summary": unknown; [key: string]: unknown; })); }`

Response: `{ "data": FeedbackReport; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createFeedbackReport.mjs)

## api.createFulfillment

Creates an explicit fulfillment for an order.

`POST /v1/orders/{order_id}/fulfillments`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "customer_id"?: string; "device_id"?: string; "digital_details"?: CreateDigitalFulfillmentDetailsInput; "external_reference_id"?: string; "line_items": Array<FulfillmentLineItemRequestInput>; "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput; "location_id"?: string; "metadata"?: Record<string, string>; "pickup_details"?: CreatePickupFulfillmentDetailsInput; "recipient"?: FulfillmentRecipientInput; "service_details"?: CreateServiceFulfillmentDetailsInput; "shipment"?: ({ "external_reference_id"?: string; "external_system"?: string; "metadata"?: Record<string, string>; "package"?: CreatePackageRequestInput; "packaging": string; }) & (({ "packaging": "single_package"; "package": unknown; [key: string]: unknown; })); "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service"; [key: string]: unknown; }) & (((({ "shipment"?: never })) | ({ "type"?: "shipment"; [key: string]: unknown; }))) & (((({ "pickup_details"?: never }) & ({ "local_delivery_details"?: never }) & ({ "digital_details"?: never }) & ({ "service_details"?: never }))) | ({ "pickup_details": unknown; [key: string]: unknown; }) | ({ "local_delivery_details": unknown; [key: string]: unknown; }) | ({ "digital_details": unknown; [key: string]: unknown; }) | ({ "service_details": unknown; [key: string]: unknown; })); }`

Response: `{ "data": CreateFulfillmentResult; "meta"?: ResponseMeta; "request_id": string; [key: string]: unknown; }`

[Example](examples/api-createFulfillment.mjs)

## api.createFulfillmentEvent

Records an observational event for a fulfillment or one of its shipments or packages.

`POST /v1/fulfillments/{fulfillment_id}/events`

Input: `{ "fulfillment_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "buyer_notification_behavior"?: "send" | "suppress"; "custom_details"?: Record<string, string>; "event_type": "shipped" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "custom"; "external_event_id"?: string; "external_status"?: string; "external_system"?: string; "location_description"?: string; "message"?: string; "occurred_at"?: string; "package_id"?: string; "shipment_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": FulfillmentEventResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createFulfillmentEvent.mjs)

## api.createInventoryAdjustment

Record a physical stock change as signed deltas. Returns the created adjustment, its movement IDs, and the resulting level for every level touched.

`POST /v1/inventory-adjustments`

Input: `{ "Idempotency-Key": string; "Flint-Version"?: string; "body": { "external_actor_id"?: string; "lines": Array<InventoryAdjustmentLineRequestInput>; "note"?: string; "occurred_at"?: string; "reason": "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other"; "source_system"?: InventorySourceSystemRequestInput; [key: string]: unknown; }; }`

Response: `{ "data": InventoryAdjustmentResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInventoryAdjustment.mjs)

## api.createInventoryAllocationPolicy

Create an allocation policy with its routing configuration.

`POST /v1/inventory-allocation-policies`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "configuration": InventoryAllocationPolicyConfigurationInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; }; }`

Response: `{ "data": InventoryAllocationPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInventoryAllocationPolicy.mjs)

## api.createInventoryCount

Open a physical count for selected inventory items at one Location.

`POST /v1/inventory-counts`

Input: `{ "Idempotency-Key": string; "Flint-Version"?: string; "body": { "inventory_item_ids": Array<string>; "location_id": string; }; }`

Response: `{ "data": InventoryCount; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInventoryCount.mjs)

## api.createInventoryItem

Create an inventory item. SKU and barcode are searchable attributes, not identity: they are not required to be unique.

`POST /v1/inventory-items`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "barcode"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "sku"?: string; "status"?: "active" | "inactive"; [key: string]: unknown; }; }`

Response: `{ "data": InventoryItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInventoryItem.mjs)

## api.createInventoryReceipt

Record a completed inventory receipt and disposition. This is a downstream stock effect, not the customer Return lifecycle.

`POST /v1/inventory-receipts`

Input: `{ "Idempotency-Key": string; "Flint-Version"?: string; "body": { "external_actor_id"?: string; "lines": Array<InventoryReceiptLineRequestInput>; "occurred_at"?: string; "source_system"?: InventorySourceSystemRequestInput; [key: string]: unknown; }; }`

Response: `{ "data": InventoryReceiptResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInventoryReceipt.mjs)

## api.createInventoryReservation

Route standalone merchant demand and hold stock in one atomic command. A provisional hold lasts at most 15 minutes.

`POST /v1/inventory-reservations`

Input: `{ "Idempotency-Key": string; "Flint-Version"?: string; "body": { "assignments"?: Array<InventoryAssignmentInput>; "demands": Array<InventoryRoutingDemandInput>; "destination_fingerprint"?: string; "inventory_routing_source": InventoryRoutingSourceRequestInput; "owner": InventoryReservationOwnerInput; }; }`

Response: `{ "data": InventoryReservationResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInventoryReservation.mjs)

## api.createInventoryTransfer

Create a planned stock transfer between two Locations.

`POST /v1/inventory-transfers`

Input: `{ "Idempotency-Key": string; "Flint-Version"?: string; "body": { "destination_location_id": string; "external_reference"?: string; "lines": Array<InventoryTransferLineRequestInput>; "note"?: string; "origin_location_id": string; }; }`

Response: `{ "data": InventoryTransfer; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInventoryTransfer.mjs)

## api.createInvoice

Creates an invoice draft. Provide exactly one source: order_id for an order-backed draft, or quick_pay for a hidden backing-order draft.

`POST /v1/invoices`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": (({ "cc_emails"?: Array<string>; "collection"?: ({ "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external"; "payment_method_id"?: string; "payment_policy"?: InvoicePaymentPolicyInput; }) & ((({ "mode"?: "merchant_default"; [key: string]: unknown; }) & (({ "payment_method_id"?: never }) & ({ "payment_policy"?: never }))) | (({ "mode"?: "buyer_initiated"; [key: string]: unknown; }) & (({ "payment_method_id"?: never }))) | (({ "mode"?: "automatic"; [key: string]: unknown; }) & (({ "payment_policy"?: never }))) | (({ "mode"?: "external"; [key: string]: unknown; }) & (({ "payment_method_id"?: never }) & ({ "payment_policy"?: never })))); "external_reference_id"?: string; "footer"?: string; "memo"?: string; "metadata"?: Record<string, string>; "order_id"?: string; "payment_due"?: ({ "due_at"?: string; "invoice_payment_term_id"?: string; "type": "none" | "absolute" | "payment_terms" | "customer_default" | "merchant_default"; }) & ((({ "type"?: "none"; [key: string]: unknown; }) & (({ "due_at"?: never }) & ({ "invoice_payment_term_id"?: never }))) | (({ "type"?: "absolute"; "due_at": unknown; [key: string]: unknown; }) & ({ "invoice_payment_term_id"?: never })) | (({ "type"?: "payment_terms"; "invoice_payment_term_id": unknown; [key: string]: unknown; }) & ({ "due_at"?: never })) | (({ "type"?: "customer_default"; [key: string]: unknown; }) & (({ "due_at"?: never }) & ({ "invoice_payment_term_id"?: never }))) | (({ "type"?: "merchant_default"; [key: string]: unknown; }) & (({ "due_at"?: never }) & ({ "invoice_payment_term_id"?: never })))); "po_number"?: string; "quick_pay"?: CreateInvoiceQuickPayRequestInput; "recipient_email"?: string; "reference"?: string; "remit_to_address"?: PostalAddressInput; "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>; "scheduled_send_at"?: string; "service_at"?: string; }) & ((({ "order_id": unknown; [key: string]: unknown; }) & (({ "quick_pay"?: never }))) | (({ "quick_pay": unknown; [key: string]: unknown; }) & (({ "order_id"?: never }))))) & (({ "order_id": unknown; [key: string]: unknown; }) | ({ "quick_pay": unknown; [key: string]: unknown; })); }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInvoice.mjs)

## api.createInvoicePaymentTerm

Create invoice payment term for the authenticated merchant.

`POST /v1/invoice-payment-terms`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "calculation": InvoicePaymentTermCalculationInput; "external_reference_id"?: string; "late_fee_policy"?: InvoiceLateFeePolicyInput; "name": string; }; }`

Response: `{ "data": InvoicePaymentTerm; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createInvoicePaymentTerm.mjs)

## api.createLocation

Create a Location. Including the inventory block also requires commerce.inventory_locations.write.

`POST /v1/locations`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; "external_reference_id"?: string; "inventory"?: LocationInventoryRequestInput; "metadata"?: Record<string, string>; "name": string; "status"?: "active" | "inactive"; "timezone": string; [key: string]: unknown; }; }`

Response: `{ "data": Location; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createLocation.mjs)

## api.createMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/me/addresses`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "address": PostalAddressInput; "is_default_billing"?: boolean; "is_default_shipping"?: boolean; "label"?: string; "phone"?: string; "recipient_name": string; [key: string]: unknown; }; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMeAddress.mjs)

## api.createMeDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.

`POST /v1/me/deletion-requests`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerDeletionRequest; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMeDeletionRequest.mjs)

## api.createMeEmailChangeRequest

Sends short-lived confirmation codes to the current and new email addresses. If the account has no current email, only the new address must be confirmed. The customer email does not change until confirmation succeeds.

`POST /v1/me/email-change-requests`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "new_email": string; [key: string]: unknown; }; }`

Response: `{ "data": EmailChangeRequest; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMeEmailChangeRequest.mjs)

## api.createMeInvoiceCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection.

`POST /v1/me/invoices/{invoice_id}/checkout-session`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": InvoiceCheckoutSessionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMeInvoiceCheckoutSession.mjs)

## api.createMerchantAccountSession

Creates an embedded browser handoff for one or more allowlisted account components.

`POST /v1/merchant-account-sessions`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "collection_strategy"?: "upfront" | "incremental"; "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner">; "future_requirements"?: "omit" | "include"; "sandbox_id"?: string; "targeted_requirement_ids"?: Array<string>; }; }`

Response: `{ "data": MerchantAccountSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMerchantAccountSession.mjs)

## api.createMeReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.

`POST /v1/me/returns`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "external_reference_id"?: string; "line_items": Array<ReturnLineItemRequestInput>; "metadata"?: Record<string, string>; "order_id": string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMeReturn.mjs)

## api.createMeReturnPreview

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/me/return-previews`

Input: `{ "Flint-Version"?: string; "body": ({ "eligibility"?: CreateReturnEligibilityCheckRequestInput; "mode": "eligibility" | "resolution"; "resolution"?: CreateReturnResolutionPreviewRequestInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; [key: string]: unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; [key: string]: unknown; }) & ({ "eligibility"?: never }))); }`

Response: `{ "data": CreateReturnPreviewData; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMeReturnPreview.mjs)

## api.createMeReturnResolutionCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution.

`POST /v1/me/return-resolutions/{resolution_id}/checkout-session`

Input: `{ "resolution_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CheckoutSessionLaunchResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createMeReturnResolutionCheckoutSession.mjs)

## api.createModifierGroup

Create modifier group.

`POST /v1/modifier-groups`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "allow_quantities"?: boolean; "external_reference_id"?: string; "max_quantity"?: string; "max_selected"?: number; "max_total_quantity"?: string; "metadata"?: Record<string, string>; "min_quantity"?: string; "min_selected"?: number; "modifier_group_type"?: "list" | "text"; "modifiers"?: Array<CreateModifierInputInput>; "name": string; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; "status"?: "active" | "inactive"; "text"?: TextModifierConfigRequestInput; [key: string]: unknown; }; }`

Response: `{ "data": ModifierGroup; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createModifierGroup.mjs)

## api.createModifierSet

Create modifier set.

`POST /v1/modifier-sets`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "external_reference_id"?: string; "metadata"?: Record<string, string>; "modifier_groups"?: Array<CreateModifierSetGroupInputInput>; "name": string; "status"?: "active" | "inactive"; [key: string]: unknown; }; }`

Response: `{ "data": ModifierSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createModifierSet.mjs)

## api.createOnboardingAPIKey

Creates the first long-lived external API key and exits onboarding.

`POST /v1/onboarding/api-key`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "name": string; "sandbox_id"?: string; "scopes"?: Array<string>; [key: string]: unknown; }; }`

Response: `{ "data": APIKeyWithSecret; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createOnboardingAPIKey.mjs)

## api.createOrder

Creates an order for the authenticated merchant. For USD orders, an effective requested tip may be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.

`POST /v1/orders`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "buyer_note"?: string; "customer_id"?: string; "delivery_destination"?: { "address": OrderDeliveryDestinationAddressRequestInput; "recipient"?: OrderDeliveryDestinationRecipientRequestInput; }; "discounts"?: Array<CreateOrderDiscountInput>; "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceInputInput; "line_items": Array<CreateOrderLineItemInput>; "metadata"?: Record<string, string>; "requested_tip"?: ({ "amount_money"?: ({ "amount"?: string; [key: string]: unknown; }) & ({ "amount": string; "currency": string; }); "description"?: string; "metadata"?: Record<string, string>; "name"?: string; "percent"?: string; }) & ((({ "amount_money": unknown; [key: string]: unknown; }) & (({ "percent"?: never }))) | (({ "percent": unknown; [key: string]: unknown; }) & (({ "amount_money"?: never })))); "tax"?: OrderTaxRequestInput; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createOrder.mjs)

## api.createOrderPaymentIntent

Creates an immutable payment leg owned by the order. Collect a payment source using payment_collection, then submit that source through payOrder. This route requires commerce.orders.write; standalone payment-intent routes require payments.payment_intents.write.

`POST /v1/orders/{order_id}/payment-intents`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "amount_money"?: MoneyValueInput; "capture_method"?: "automatic" | "manual"; "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_options"?: Array<string>; "payment_return_url"?: string; "payment_source_selection"?: OrderPaymentSourceSelectionInput; [key: string]: unknown; }; }`

Response: `{ "data": CreatePaymentIntentResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createOrderPaymentIntent.mjs)

## api.createOrganization

Creates a child organization within the caller's accessible organization hierarchy.

`POST /v1/organizations`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "metadata"?: Record<string, string>; "name": string; "parent_organization_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Organization; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createOrganization.mjs)

## api.createPackage

Creates a package record under a shipment. Package status transitions use explicit future status APIs; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields.

`POST /v1/shipments/{shipment_id}/packages`

Input: `{ "shipment_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "buyer_notification_behavior"?: "send" | "suppress"; "carrier"?: string; "dimensions"?: ShippingDimensionsInput; "external_reference_id"?: string; "external_system"?: string; "label_url"?: string; "metadata"?: Record<string, string>; "service_code"?: string; "status_reason"?: string; "tracking_number"?: string; "tracking_url"?: string; "weight"?: ShippingWeightInput; [key: string]: unknown; }; }`

Response: `{ "data": CreatePackageResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPackage.mjs)

## api.createPackageItem

Adds an order line quantity to a package. Total active package item quantities cannot exceed the parent fulfillment line-item quantity.

`POST /v1/packages/{package_id}/items`

Input: `{ "package_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "metadata"?: Record<string, string>; "order_line_item_id": string; "quantity": string; [key: string]: unknown; }; }`

Response: `{ "data": PackageItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPackageItem.mjs)

## api.createPaymentIntent

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

`POST /v1/payment-intents`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "amount_money": MoneyValueInput; "capture_method"?: "automatic" | "manual"; "customer_id"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">; "payment_return_url"?: string; "receipt_email"?: string; "tip_money"?: MoneyValueInput; "transaction_purpose"?: "goods" | "services" | "other"; [key: string]: unknown; }); }`

Response: `{ "data": CreatePaymentIntentResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPaymentIntent.mjs)

## api.createPaymentLink

Creates a payment link for the authenticated merchant. Line items may use fixed prices, buyer-adjustable amounts, and buyer-adjustable quantities.

`POST /v1/payment-links`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>; "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: PaymentLinkCustomerConfigInput; "delivery_method_ids"?: Array<string>; "description"?: string; "donation_max_amount_money"?: MoneyValueInput; "donation_min_amount_money"?: MoneyValueInput; "donation_suggested_amount_money_options"?: Array<MoneyValueInput>; "event_config"?: PaymentLinkEventConfigInput; "expiration"?: CheckoutExpirationConfigInput; "external_reference_id"?: string; "image"?: ImageRequestInput; "inactive_message"?: string; "inventory_routing_source"?: InventoryRoutingSourceRequestInput; "legal"?: LegalSettingsInput; "line_items"?: Array<PaymentLinkLineItemRequestInput>; "max_completions"?: number; "metadata"?: Record<string, string>; "name": string; "payment_link_type"?: "standard" | "donation" | "event"; "payments"?: CheckoutPaymentConfigInput; "plan_id"?: string; "promotion_config"?: CheckoutPromotionConfigInput; "redirects"?: CheckoutRedirectsConfigInput; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; [key: string]: unknown; }; }`

Response: `{ "data": PaymentLink; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPaymentLink.mjs)

## api.createPaymentMethodDomain

Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint environment, then validates its wallet readiness.

`POST /v1/payment-method-domains`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "domain_name": (string); [key: string]: unknown; }; }`

Response: `{ "data": PaymentMethodDomain; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPaymentMethodDomain.mjs)

## api.createPayout

Creates a payout from an available balance to an eligible payout destination. Safe to retry with the same Idempotency-Key.

`POST /v1/payouts`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "amount_money": MoneyValueInput; "balance_source_type"?: "card" | "bank_account" | "fpx"; "description"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "method"?: "standard"; "payout_destination_id"?: string; "statement_descriptor"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Payout; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPayout.mjs)

## api.createProduct

Creates a product for the authenticated merchant.

`POST /v1/products`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "categories"?: Array<string>; "default_variant"?: ProductVariantRequestInput; "description"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "metadata"?: Record<string, string>; "modifier_set_id"?: string | null; "name": string; "options"?: Array<CreateProductOptionInputInput>; "product_type": "physical" | "service" | "fee" | "digital"; "status"?: "active" | "inactive"; "variants"?: Array<ProductVariantRequestInput>; [key: string]: unknown; }) & ((({ "default_variant": unknown; [key: string]: unknown; }) & (({ "options"?: never }) & ({ "variants"?: never }))) | (({ "options": unknown; "variants": unknown; [key: string]: unknown; }) & (({ "default_variant"?: never })))); }`

Response: `{ "data": Product; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createProduct.mjs)

## api.createProductVariant

Create product variant.

`POST /v1/products/{product_id}/variants`

Input: `{ "product_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "variant": ProductVariantRequestInput; [key: string]: unknown; }; }`

Response: `{ "data": ProductVariant; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createProductVariant.mjs)

## api.createPromotion

Creates a promotion for the authenticated merchant.

`POST /v1/promotions`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "application_method"?: (({ "allocation"?: "each" | "across"; "amount_off_money"?: MoneyValueInput; "applies_to"?: never; "buy_min_quantity"?: number; "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax"; "currency_options"?: Record<string, MoneyValueInput>; "discounted_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "get_percent_off"?: string; "get_quantity"?: number; "max_applications_per_order"?: number; "max_discounted_quantity"?: number; "percent_off"?: string; "qualifying_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "recurrence"?: { "period_count"?: number; "type": "once"; [key: string]: unknown; }; "reward_selection"?: "cheapest" | "highest_price" | "first_added"; "type"?: "percent_off" | "amount_off" | "buy_x_get_y"; }) & (({ "type"?: "percent_off"; "percent_off": unknown; [key: string]: unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; [key: string]: unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; [key: string]: unknown; }))) & (({ "type"?: "percent_off"; "percent_off": unknown; [key: string]: unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; [key: string]: unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; [key: string]: unknown; })); [key: string]: unknown; }) & ({ "application_method": PromotionApplicationMethodInput; "codes"?: Array<CreatePromotionCodeRequestInput>; "combines_with"?: PromotionCombinesWithInput; "description"?: string; "discount_class"?: "order" | "line_item" | "service_charge"; "display_name"?: string; "eligibility_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "exclusivity"?: PromotionExclusivityInput; "external_reference_id"?: string; "max_uses"?: string; "metadata"?: Record<string, string>; "name": string; "redemption_type"?: "automatic" | "code"; "schedule"?: PromotionScheduleInput; "stacking_mode"?: "continue" | "stop_after"; [key: string]: unknown; }); }`

Response: `{ "data": Promotion; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPromotion.mjs)

## api.createPromotionCode

Creates a code for a code-gated promotion.

`POST /v1/promotions/{promotion_id}/codes`

Input: `{ "promotion_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "code": string; "expires_at"?: string; "max_uses"?: string; "metadata"?: Record<string, string>; [key: string]: unknown; }; }`

Response: `{ "data": PromotionCode; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createPromotionCode.mjs)

## api.createRefund

Creates a refund for an order or payment intent. This is a financial operation.

`POST /v1/refunds`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "amount_money"?: MoneyValueInput; "charges"?: Array<RefundChargeInput>; "external_reference_id"?: string; "line_items"?: Array<RefundLineItemInput>; "metadata"?: Record<string, string>; "order_id"?: string; "payment_intent_id"?: string; "reason"?: "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other"; "reason_message"?: string; "refund_method"?: "original_payment"; "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>; [key: string]: unknown; }) & (({ "order_id": unknown; [key: string]: unknown; }) | ({ "payment_intent_id": unknown; [key: string]: unknown; })); }`

Response: `{ "data": Refund; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createRefund.mjs)

## api.createReport

Creates an idempotent asynchronous CSV report. Poll the returned report until it succeeds or fails.

`POST /v1/reports`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "currency": string; "interval_end_at": string; "interval_start_at": string; "report_type": "orders_itemized_v1" | "payments_itemized_v1" | "balance_transactions_itemized_v1" | "payouts_itemized_v1" | "tax_itemized_v1" | "tax_summarized_v1" | "merchant_billing_itemized_v1" | "tax_transactions_itemized_v1"; "timezone"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Report; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReport.mjs)

## api.createReturn

Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.

`POST /v1/returns`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "external_reference_id"?: string; "line_items": Array<ReturnLineItemRequestInput>; "metadata"?: Record<string, string>; "order_id": string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturn.mjs)

## api.createReturnDisposition

Record an auditable merchandise disposition from either a receipt line or an inspection line.

`POST /v1/returns/{return_id}/dispositions`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "disposition_type": "sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost"; "external_reference_id"?: string; "inventory_location_id"?: string; "metadata"?: Record<string, string>; "occurred_at": string; "quantity": string; "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other"; "reason_message"?: string; "replaces_return_disposition_id"?: string; "return_inspection_line_item_id"?: string; "return_receipt_line_item_id"?: string; }) & ((({ "return_receipt_line_item_id": unknown; [key: string]: unknown; }) & ({ "return_inspection_line_item_id"?: never })) | (({ "return_inspection_line_item_id": unknown; [key: string]: unknown; }) & ({ "return_receipt_line_item_id"?: never }))); }`

Response: `{ "data": ReturnDisposition; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturnDisposition.mjs)

## api.createReturnInspection

Record an immutable inspection observation. Corrections supersede an earlier inspection instead of editing physical history.

`POST /v1/returns/{return_id}/inspections`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other"; "correction_reason_message"?: string; "external_actor_id"?: string; "external_reference_id"?: string; "inspected_at": string; "line_items": Array<ReturnInspectionLineItemRequestInput>; "location_id": string; "return_receipt_id": string; "source_system"?: ReturnSourceSystemInput; "supersedes_return_inspection_id"?: string; }; }`

Response: `{ "data": ReturnInspection; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturnInspection.mjs)

## api.createReturnPolicy

Create a Return policy with its first revision. The policy ID is stable across revisions, and each published revision is immutable.

`POST /v1/return-policies`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "revision": ReturnPolicyRevisionRequestInput; }; }`

Response: `{ "data": ReturnPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturnPolicy.mjs)

## api.createReturnPreview

Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/return-previews`

Input: `{ "Flint-Version"?: string; "body": ({ "eligibility"?: CreateReturnEligibilityCheckRequestInput; "mode": "eligibility" | "resolution"; "resolution"?: CreateReturnResolutionPreviewRequestInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; [key: string]: unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; [key: string]: unknown; }) & ({ "eligibility"?: never }))); }`

Response: `{ "data": CreateReturnPreviewData; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturnPreview.mjs)

## api.createReturnReason

Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection findings, decline reasons, and Refund reasons.

`POST /v1/return-reasons`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "category_handles"?: Array<string>; "description"?: string; "external_reference_id"?: string; "handle": string; "is_note_required"?: boolean; "name": string; }; }`

Response: `{ "data": ReturnReason; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturnReason.mjs)

## api.createReturnReceipt

Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history.

`POST /v1/returns/{return_id}/receipts`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "correction_reason"?: "entry_error" | "duplicate_observation" | "source_correction" | "reconciliation_correction" | "other"; "correction_reason_message"?: string; "external_actor_id"?: string; "external_reference_id"?: string; "line_items": Array<ReturnReceiptLineItemRequestInput>; "received_at": string; "receiving_location_id": string; "shipment_id"?: string; "source_system"?: ReturnSourceSystemInput; "supersedes_return_receipt_id"?: string; }; }`

Response: `{ "data": ReturnReceipt; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturnReceipt.mjs)

## api.createReturnResolution

Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value. Confirmation is what freezes it and starts its effects.

`POST /v1/returns/{return_id}/resolutions`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>; "corrects_return_resolution_id"?: string; "expected_version"?: string; "external_reference_id"?: string; "line_items"?: Array<ReturnResolutionLineItemRequestInput>; "metadata"?: Record<string, string>; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price"; "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>; "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "correction"; }) & ((({ "line_items": unknown; "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action"; [key: string]: unknown; }) & ({ "corrects_return_resolution_id"?: never })) | (({ "adjustments": unknown; "resolution_type"?: "correction"; "corrects_return_resolution_id": unknown; [key: string]: unknown; }) & (({ "line_items"?: never }) & ({ "replacement_line_items"?: never }) & ({ "pricing_basis"?: never })))); }`

Response: `{ "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createReturnResolution.mjs)

## api.createRiskList

Create a risk list for the authenticated merchant environment.

`POST /v1/risk-lists`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "alias": string; "item_type": "card_fingerprint" | "card_bin" | "email" | "email_domain" | "ip_address" | "country" | "customer_id" | "string" | "case_sensitive_string"; "name": string; [key: string]: unknown; }; }`

Response: `{ "data": RiskList; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createRiskList.mjs)

## api.createRiskPreview

Create a risk preview for the authenticated merchant environment.

`POST /v1/risk-previews`

Input: `{ "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "action"?: "allow" | "block" | "review" | "require_3ds"; "predicate"?: (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); "risk_rule_id"?: string; [key: string]: unknown; }) & ((({ "action": unknown; "predicate": unknown; [key: string]: unknown; }) & ({ "risk_rule_id"?: never })) | ({ "risk_rule_id": unknown; [key: string]: unknown; })); }`

Response: `{ "data": RuleValidation; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createRiskPreview.mjs)

## api.createRiskRule

Create a risk rule for the authenticated merchant environment.

`POST /v1/risk-rules`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "action": "allow" | "block" | "review" | "require_3ds"; "description": string; "enabled"?: boolean; "predicate": (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); [key: string]: unknown; }; }`

Response: `{ "data": RiskRule; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createRiskRule.mjs)

## api.createShipment

Creates a shipment execution record under a shipment-type fulfillment. A shipment groups one carrier leg. Create one package under it for each physical parcel, including single-parcel shipments.

`POST /v1/fulfillments/{fulfillment_id}/shipments`

Input: `{ "fulfillment_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "direction"?: "outbound" | "return"; "external_reference_id"?: string; "external_system"?: string; "metadata"?: Record<string, string>; "return_id"?: string; "return_line_items"?: Array<ReturnShipmentLineItemAllocationInput>; [key: string]: unknown; }) & ((({ "direction"?: "outbound"; [key: string]: unknown; }) & (({ "return_id"?: never }) & ({ "return_line_items"?: never }))) | ({ "direction": "return"; "return_line_items": Array<unknown>; "return_id": unknown; [key: string]: unknown; })); }`

Response: `{ "data": CreateShipmentResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createShipment.mjs)

## api.createSubscription

Creates a subscription for the authenticated merchant.

`POST /v1/subscriptions`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "billing_anchor_day"?: number; "billing_schedule"?: SubscriptionBillingScheduleInputInput; "billing_start": SubscriptionBillingStartInputInput; "customer_id": string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_method_id"?: string; "plan_id": string; "service_location"?: SubscriptionServiceLocationRequestInput; }) & (({ "billing_schedule": { "owner": "flint"; }; [key: string]: unknown; }) | (({ "billing_schedule": { "owner": "external"; }; [key: string]: unknown; }) & ({ "billing_anchor_day"?: never })) | ((({ "billing_schedule"?: never }) & ({ "billing_anchor_day"?: never })))); }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createSubscription.mjs)

## api.createSubscriptionPaymentRetry

Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome.

`POST /v1/subscriptions/{subscription_id}/payment-retries`

Input: `{ "subscription_id": string; "Idempotency-Key": string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: {  }; }`

Response: `{ "data": SubscriptionPaymentRetry; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createSubscriptionPaymentRetry.mjs)

## api.createSubscriptionPlan

Creates a subscription plan for the authenticated merchant.

`POST /v1/subscription-plans`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count": number; "contract_term_months"?: number; "currency": string; "description"?: string; "early_termination_fee_money"?: MoneyValueInput; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_items"?: Array<SubscriptionPlanLineItemRequestInput>; "metadata"?: Record<string, string>; "name": string; "setup_fee_money"?: MoneyValueInput; "trial_period_days"?: number; [key: string]: unknown; }; }`

Response: `{ "data": SubscriptionPlan; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createSubscriptionPlan.mjs)

## api.createWebhookEndpoint

Creates a webhook endpoint and returns the signing secret once.

`POST /v1/webhook-endpoints`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "api_version"?: string; "description"?: string; "enabled"?: boolean; "enabled_events"?: Array<string>; "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">; "mode"?: "test" | "live" | "both"; "partner_app_id"?: string; "url": string; [key: string]: unknown; }; }`

Response: `{ "data": WebhookEndpoint; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createWebhookEndpoint.mjs)

## api.createWebhookTestEvent

Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`

Input: `{ "webhook_endpoint_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "event_type": "balance.updated" | "balance_transaction.created" | "balance_transaction.updated" | "capability.updated" | "checkout_session.completed" | "checkout_session.closed" | "checkout_session.expired" | "checkout_session.invalidated" | "credit_note.allocation_created" | "credit_note.allocation_reversed" | "credit_note.created" | "credit_note.issued" | "credit_note.updated" | "credit_note.voided" | "customer.created" | "customer.deletion_completed" | "customer.deletion_rejected" | "customer.deletion_requested" | "customer.updated" | "dispute.closed" | "dispute.created" | "dispute.lost" | "dispute.needs_response" | "dispute.prevented" | "dispute.updated" | "dispute.warning_closed" | "dispute.won" | "fraud_warning.created" | "fraud_warning.updated" | "delivery_rate_callback.archived" | "delivery_rate_callback.created" | "delivery_rate_callback.deactivated" | "delivery_rate_callback.activated" | "delivery_rate_callback.updated" | "delivery_method.archived" | "delivery_method.created" | "delivery_method.deactivated" | "delivery_method.activated" | "delivery_method.updated" | "delivery_location_set.archived" | "delivery_location_set.created" | "delivery_location_set.deactivated" | "delivery_location_set.activated" | "delivery_location_set.updated" | "delivery_profile.archived" | "delivery_profile.created" | "delivery_profile.deactivated" | "delivery_profile.activated" | "delivery_profile.updated" | "delivery_rate.archived" | "delivery_rate.created" | "delivery_rate.updated" | "delivery_revocation.created" | "delivery_selection.committed" | "delivery_zone.archived" | "delivery_zone.created" | "delivery_zone.deactivated" | "delivery_zone.activated" | "delivery_zone.updated" | "invoice.collection_block_resolved" | "invoice.collection_blocked" | "invoice.credited" | "invoice.created" | "invoice.delivery_failed" | "invoice.delivery_succeeded" | "invoice.issued" | "invoice.issue_failed" | "invoice.late_fee_due" | "invoice.marked_uncollectible" | "invoice.manual_payment_recorded" | "invoice.manual_payment_reversed" | "invoice.overdue" | "invoice.paid" | "invoice.payment_processing" | "invoice.payment_attempt_canceled" | "invoice.payment_attempt_expired" | "invoice.payment_failed" | "invoice.partially_paid" | "invoice.partially_refunded" | "invoice.refunded" | "invoice.reminder_due" | "invoice.sent" | "invoice.updated" | "invoice.voided" | "inventory.action_required" | "inventory.count.applied" | "inventory.level.updated" | "inventory.receipt.created" | "inventory.reservation.at_risk" | "inventory.reservation.closed" | "inventory.reservation.committed" | "inventory.reservation.consumed" | "inventory.reservation.created" | "inventory.reservation.hold_expired" | "inventory.reservation.released" | "inventory.shortage.detected" | "inventory.transfer.closed" | "inventory.transfer.departed" | "inventory.transfer.lost" | "inventory.transfer.received" | "inventory.transfer.returned" | "merchant_billing_balance.updated" | "merchant.readiness.updated" | "merchant_subscription_invoice.issued" | "merchant_subscription_invoice.updated" | "order.closed" | "order.created" | "order.fulfillment.completed" | "order.fulfillment.created" | "order.fulfillment.event.created" | "order.fulfillment.package.created" | "order.fulfillment.package.updated" | "order.fulfillment.shipment.created" | "order.fulfillment.shipment.updated" | "order.fulfillment.status_changed" | "order.fulfillment.updated" | "order.inventory_action_required" | "order.inventory_exception.created" | "order.inventory_exception.resolved" | "order.payment_authorization_expired" | "order.payment_authorization_canceled" | "order.payment_authorized" | "order.payment_captured" | "order.partially_paid" | "order.paid" | "order.refunded" | "order.updated" | "payment_intent.canceled" | "payment_intent.fulfillment_hold.updated" | "payment_intent.payment_failed" | "payment_intent.processing" | "payment_intent.requires_action" | "payment_intent.requires_capture" | "payment_intent.succeeded" | "payment_method.failed" | "payment_method.removed" | "payment_method.saved" | "payout.canceled" | "payout.created" | "payout.failed" | "payout.paid" | "payout.reversed" | "payout.updated" | "payout_destination.created" | "payout_destination.deleted" | "payout_destination.disabled" | "payout_destination.updated" | "payout_settings.updated" | "refund.created" | "refund.failed" | "refund.updated" | "report.failed" | "report.succeeded" | "return.canceled" | "return.completed" | "return.created" | "return.decision_recorded" | "return.reopened" | "return.updated" | "return_disposition.created" | "return_disposition.updated" | "return_inspection.acceptance_decided" | "return_inspection.created" | "return_inspection.superseded" | "return_receipt.created" | "return_receipt.superseded" | "return_receipt.verified" | "return_resolution.created" | "return_resolution.updated" | "review.closed" | "review.opened" | "subscription.activated" | "subscription.canceled" | "subscription.created" | "subscription.dunning_exhausted" | "subscription.past_due" | "subscription.paused" | "subscription.payment_failed" | "subscription.payment_succeeded" | "subscription.resumed" | "subscription.renewal_upcoming" | "subscription.trial_ending" | "subscription.updated"; [key: string]: unknown; }; }`

Response: `{ "data": WebhookDeliveryAction; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-createWebhookTestEvent.mjs)

## api.decideReturn

Record per-line Return decisions atomically. Each line selects policy_evaluation or explicit decision semantics.

`POST /v1/returns/{return_id}/decide`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "completion_mode"?: "manual" | "automatic"; "expected_version"?: string; "line_items": Array<ReturnLineDecisionInput>; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-decideReturn.mjs)

## api.decideReturnInspectionLineItem

Record the accept or reject outcome for inspected quantity. Accepted quantity becomes dispositionable and satisfies after_inspection refund timing.

`POST /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide`

Input: `{ "return_inspection_id": string; "return_inspection_line_item_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other"; "acceptance_decision_reason_message"?: string; "acceptance_status": "accepted" | "rejected" | "review_required"; "expected_version"?: string; }; }`

Response: `{ "data": ReturnInspection; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-decideReturnInspectionLineItem.mjs)

## api.declineReview

Decline a payment review for the authenticated merchant environment.

`POST /v1/reviews/{review_id}/decline`

Input: `{ "review_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "add_to_block_list"?: boolean; [key: string]: unknown; }; }`

Response: `{ "data": Review; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-declineReview.mjs)

## api.deleteBundle

Archives a bundle and returns its final state.

`DELETE /v1/bundles/{bundle_id}`

Input: `{ "bundle_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Bundle; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteBundle.mjs)

## api.deleteCategory

Delete category.

`DELETE /v1/categories/{category_id}`

Input: `{ "category_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Category; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteCategory.mjs)

## api.deleteCheckoutSessionCurrentDeliverySelection

Atomically clears a provisional selection, releases inventory, removes its charges, and recalculates order economics.

`DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Input: `{ "checkout_session_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "expected_delivery_selection_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": (({ "audience": ("merchant") & ("merchant"); "checkout_session": CheckoutSession; "delivery_selection": DeliverySelection; "inventory_reservation"?: DeliveryInventoryReservationSummary; "order": Order; [key: string]: unknown; }) | ({ "audience": ("buyer") & ("buyer"); "checkout_session": CheckoutSession; "delivery_selection": BuyerDeliverySelection; "inventory_reservation"?: DeliveryInventoryReservationSummary; "order": Order; [key: string]: unknown; }) | ({ [key: string]: unknown })); "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteCheckoutSessionCurrentDeliverySelection.mjs)

## api.deleteCustomerAddress

Deletes a saved address and moves any default designation to the newest remaining address.

`DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}`

Input: `{ "customer_id": string; "customer_address_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteCustomerAddress.mjs)

## api.deleteDeliveryLocationSet

Retires the delivery location set after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-location-sets/{delivery_location_set_id}`

Input: `{ "delivery_location_set_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryLocationSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteDeliveryLocationSet.mjs)

## api.deleteDeliveryMethod

Retires the delivery method after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-methods/{delivery_method_id}`

Input: `{ "delivery_method_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryMethod; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteDeliveryMethod.mjs)

## api.deleteDeliveryProfile

Retires the delivery profile after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-profiles/{delivery_profile_id}`

Input: `{ "delivery_profile_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryProfile; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteDeliveryProfile.mjs)

## api.deleteDeliveryRateCallback

Retires the delivery rate callback after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Input: `{ "delivery_rate_callback_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryRateCallback; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteDeliveryRateCallback.mjs)

## api.deleteDeliveryZone

Retires the delivery zone after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-zones/{delivery_zone_id}`

Input: `{ "delivery_zone_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryZone; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteDeliveryZone.mjs)

## api.deleteDeveloperSandbox

Retires a non-default sandbox and frees its original name for reuse.

`DELETE /v1/developer/sandboxes/{sandbox_id}`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "sandbox_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeveloperSandbox; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteDeveloperSandbox.mjs)

## api.deleteDevice

Marks a device as deleted and returns its final state.

`DELETE /v1/devices/{device_id}`

Input: `{ "device_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Device; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteDevice.mjs)

## api.deleteInventoryAllocationPolicy

Retire an allocation policy. keeps the archived resource available in list results.

`DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Input: `{ "inventory_allocation_policy_id": string; "expected_version"?: number; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": InventoryAllocationPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteInventoryAllocationPolicy.mjs)

## api.deleteInventoryItem

Retire an inventory item. keeps the archived resource available in list results.

`DELETE /v1/inventory-items/{inventory_item_id}`

Input: `{ "inventory_item_id": string; "expected_version"?: number; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": InventoryItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteInventoryItem.mjs)

## api.deleteInvoicePaymentTerm

Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.

`DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`

Input: `{ "invoice_payment_term_id": string; "expected_version"?: number; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": InvoicePaymentTerm; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteInvoicePaymentTerm.mjs)

## api.deleteLocation

Retire a Location. Preserves the archived resource for direct reads.

`DELETE /v1/locations/{location_id}`

Input: `{ "location_id": string; "expected_version"?: number; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Location; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteLocation.mjs)

## api.deleteMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes a saved address and moves any default designation to the newest remaining address.

`DELETE /v1/me/addresses/{customer_address_id}`

Input: `{ "customer_address_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteMeAddress.mjs)

## api.deleteModifierGroup

Retire modifier group.

`DELETE /v1/modifier-groups/{modifier_group_id}`

Input: `{ "modifier_group_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ModifierGroup; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteModifierGroup.mjs)

## api.deleteModifierSet

Retire modifier set.

`DELETE /v1/modifier-sets/{modifier_set_id}`

Input: `{ "modifier_set_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ModifierSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteModifierSet.mjs)

## api.deleteOrderCharge

Removes a single service charge, fee, or surcharge from an order.

`DELETE /v1/orders/{order_id}/charges/{order_charge_id}`

Input: `{ "order_id": string; "order_charge_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteOrderCharge.mjs)

## api.deleteOrderLineItem

Removes a single line item from an order.

`DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}`

Input: `{ "order_id": string; "order_line_item_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteOrderLineItem.mjs)

## api.deleteOrganization

Soft-deletes an organization when it has no active descendants or merchant links.

`DELETE /v1/organizations/{organization_id}`

Input: `{ "organization_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Organization; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteOrganization.mjs)

## api.deletePackageItem

Removes an order line quantity from a package while the package is still mutable.

`DELETE /v1/packages/{package_id}/items/{package_item_id}`

Input: `{ "package_id": string; "package_item_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PackageItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deletePackageItem.mjs)

## api.deletePayoutDestination

Disables an eligible payout destination and returns its final state. Safe to retry with the same Idempotency-Key.

`DELETE /v1/payout-settings/destinations/{payout_destination_id}`

Input: `{ "payout_destination_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": {  [key: string]: unknown; }; }`

Response: `{ "data": PayoutDestination; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deletePayoutDestination.mjs)

## api.deleteProduct

Archives a product and returns its final state.

`DELETE /v1/products/{product_id}`

Input: `{ "product_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Product; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteProduct.mjs)

## api.deleteProductVariant

Retire product variant.

`DELETE /v1/products/{product_id}/variants/{variant_id}`

Input: `{ "product_id": string; "variant_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ProductVariant; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteProductVariant.mjs)

## api.deletePromotion

Archives a promotion and returns its final state.

`DELETE /v1/promotions/{promotion_id}`

Input: `{ "promotion_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Promotion; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deletePromotion.mjs)

## api.deletePromotionCode

Deletes a promotion code.

`DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Input: `{ "promotion_id": string; "promotion_code_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PromotionCode; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deletePromotionCode.mjs)

## api.deleteReturnLineItem

Remove a line item from a requested Return. The response is the updated Return.

`DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}`

Input: `{ "return_id": string; "return_line_item_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteReturnLineItem.mjs)

## api.deleteReturnPolicy

Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.

`DELETE /v1/return-policies/{return_policy_id}`

Input: `{ "return_policy_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteReturnPolicy.mjs)

## api.deleteReturnReason

Retire a Return reason so buyers can no longer select it. Returns that already recorded it keep the frozen reason name.

`DELETE /v1/return-reasons/{return_reason_id}`

Input: `{ "return_reason_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnReason; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteReturnReason.mjs)

## api.deleteRiskList

Retire a risk list for the authenticated merchant environment.

`DELETE /v1/risk-lists/{risk_list_id}`

Input: `{ "risk_list_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": RiskList; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteRiskList.mjs)

## api.deleteRiskListItem

Delete a risk list item for the authenticated merchant environment.

`DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Input: `{ "risk_list_id": string; "risk_list_item_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": RiskListItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteRiskListItem.mjs)

## api.deleteRiskRule

Retire a risk rule for the authenticated merchant environment.

`DELETE /v1/risk-rules/{risk_rule_id}`

Input: `{ "risk_rule_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": RiskRule; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteRiskRule.mjs)

## api.deleteSubscriptionPlan

Retires a subscription plan. Plans with active subscriptions cannot be retired.

`DELETE /v1/subscription-plans/{plan_id}`

Input: `{ "plan_id": string; "expected_version"?: string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": SubscriptionPlan; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteSubscriptionPlan.mjs)

## api.deleteWebhookEndpoint

Marks a webhook endpoint as deleted so it no longer receives events.

`DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`

Input: `{ "webhook_endpoint_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-deleteWebhookEndpoint.mjs)

## api.exchangePartnerInstallToken

Exchanges an authorization code or refresh token for an installation-scoped bearer token. This endpoint follows OAuth token endpoint conventions: it accepts application/x-www-form-urlencoded requests as well as JSON and returns OAuth token error objects for token exchange failures instead of the normal Flint error envelope.

`POST /v1/oauth/token`

Input: `{ "Flint-Version"?: string; "body": { "client_id": string; "client_secret": string; "code"?: string; "grant_type": string; "redirect_uri"?: string; "refresh_token"?: string; [key: string]: unknown; }; }`

Response: `{ "access_token": string; "environment_grant_id": string; "expires_in": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_id": string; "partner_app_install_id": string; "refresh_token"?: string; "scope"?: string; "token_type": string; [key: string]: unknown; }`

[Example](examples/api-exchangePartnerInstallToken.mjs)

## api.getAnalyticsOverview

Returns high-level merchant analytics for the requested time range.

`GET /v1/analytics/overview`

Input: `{ "range": "today" | "last_7_days" | "last_30_days"; "timezone"?: string; "include_previous_period"?: boolean; "Flint-Version"?: string; }`

Response: `{ "data": AnalyticsOverview; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getAnalyticsOverview.mjs)

## api.getAPIKey

Returns external API key metadata. Secrets, internal keys, and demo-session keys are not returned.

`GET /v1/api-keys/{api_key_id}`

Input: `{ "api_key_id": string; "Flint-Version"?: string; }`

Response: `{ "data": APIKey; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getAPIKey.mjs)

## api.getBalanceTransaction

Returns one balance transaction by ID, with optional related order expansion.

`GET /v1/balance-transactions/{balance_transaction_id}`

Input: `{ "balance_transaction_id": string; "expand"?: Array<"order">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": BalanceTransaction; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getBalanceTransaction.mjs)

## api.getBundle

Get bundle.

`GET /v1/bundles/{bundle_id}`

Input: `{ "bundle_id": string; "expand"?: Array<"modifier_set">; "Flint-Version"?: string; }`

Response: `{ "data": Bundle; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getBundle.mjs)

## api.getCategory

Get category.

`GET /v1/categories/{category_id}`

Input: `{ "category_id": string; "Flint-Version"?: string; }`

Response: `{ "data": Category; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCategory.mjs)

## api.getCheckoutSession

Returns a single checkout session by ID.

`GET /v1/checkout-sessions/{checkout_session_id}`

Input: `{ "checkout_session_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "expand"?: Array<"customer" | "invoice" | "order" | "payment_intents" | "payment_link">; "Flint-Version"?: string; }`

Response: `{ "data": CheckoutSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCheckoutSession.mjs)

## api.getCheckoutSessionCurrentDeliverySelection

Returns the provisional selection or the order-level committed selection effective for this checkout.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Input: `{ "checkout_session_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": (({ "audience": ("merchant") & ("merchant"); "delivery_selection"?: (({ "amount_money": { "amount": string; "currency": string; [key: string]: unknown; }; "buyer_location"?: ({ "address"?: DeliveryAddressResource; "coordinate"?: DeliveryCoordinateInput; "type": "address" | "coordinate" | (string & {}); [key: string]: unknown; }) & ((({ "type": ("address") & ("address"); "address": unknown; [key: string]: unknown; })) | (({ "type": ("coordinate") & ("coordinate"); "coordinate": unknown; [key: string]: unknown; })) | ({ [key: string]: unknown })); "calculation_expires_at": string; "checkout_session_id": string; "choices": Array<DeliverySelectionChoiceResource>; "created_at": string; "delivery_quote_id": string; "delivery_quote_revision": string; "delivery_selection_id": string; "destination_address"?: { "city"?: string; "country"?: string; "line1"?: string; "line2"?: string; "postal_code"?: string; "state"?: string; [key: string]: unknown; }; "eligibility_context_revision": string; "expires_at": string; "instructions"?: string; "lifecycle_events"?: Array<DeliverySelectionLifecycleEventResource>; "lifecycle_updated_at": string; "limiting_deadline_reason": "selection_guarantee_expiry" | "calculation_expiry" | "selection_maximum_lifetime" | "inventory_reservation_expiry" | "tax_validity_expiry" | "checkout_session_expiry" | (string & {}); "order_id": string; "private_data_status"?: "available" | "redacted" | (string & {}); "recipient"?: { "email"?: string; "name"?: string; "phone"?: string; [key: string]: unknown; }; "redacted_at"?: string; "status": "selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released" | (string & {}); [key: string]: unknown; }) | (null) | (unknown)); "mutable": boolean; "originating_checkout_session_id"?: string; "source": "none" | "provisional" | "committed" | (string & {}); [key: string]: unknown; }) | ({ "audience": ("buyer") & ("buyer"); "delivery_selection"?: (({ "amount_money": MoneyValue; "choices": Array<BuyerDeliverySelectionChoiceResource>; "delivery_quote_id": string; "delivery_selection_id": string; "destination_address"?: DeliveryAddressResource; "expires_at": string; "recipient"?: DeliveryRecipientResource; "status": "selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released" | (string & {}); [key: string]: unknown; }) | (null) | (unknown)); "mutable": boolean; "source": "none" | "provisional" | "committed" | (string & {}); [key: string]: unknown; }) | ({ [key: string]: unknown })); "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCheckoutSessionCurrentDeliverySelection.mjs)

## api.getCheckoutSessionDeliveryQuote

Returns one quote under its checkout authority. Buyer credentials receive the buyer-safe projection.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}`

Input: `{ "checkout_session_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "delivery_quote_id": string; "Flint-Version"?: string; }`

Response: `{ "data": (({ "audience": ("merchant") & ("merchant"); "basis_delivery_quote_id"?: string; "basis_delivery_selection_id"?: string; "buyer_location"?: DeliveryBuyerLocationResource; "checkout_session_id": string; "choice_groups": Array<DeliveryQuoteChoiceGroupResource>; "consumed_by_delivery_selection_id"?: string; "delivery_quote_id": string; "delivery_quote_revision": string; "destination_address"?: DeliveryAddressInput; "eligibility_context_revision": string; "evaluated_at": string; "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {}); "expires_at": string; "input_requirements": Array<DeliveryInputRequirement>; "merchant_diagnostics": Array<DeliveryMerchantDiagnostic>; "methods"?: Array<DeliveryQuoteMethodResource>; "order_id": string; "pending_caller_rate_requests"?: Array<DeliveryPendingCallerRateRequest>; "revocation_reason"?: "configuration_changed" | "checkout_unavailable" | (string & {}); "revoked_at"?: string; "selection_required": boolean; "stale_reason"?: "checkout_changed" | "selection_changed" | "eligibility_changed" | "inventory_changed" | "authority_changed" | "consumed_by_priced_quote" | (string & {}); "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {}); [key: string]: unknown; }) | ({ "audience": ("buyer") & ("buyer"); "buyer_location"?: DeliveryBuyerLocationResource; "buyer_reasons": Array<"address_required" | "address_incomplete" | "outside_delivery_area" | "no_pickup_location_nearby" | "unavailable_for_these_items" | "temporarily_unavailable" | (string & {})>; "choice_groups": Array<BuyerDeliveryQuoteChoiceGroupResource>; "delivery_quote_id": string; "destination_address"?: DeliveryAddressResource; "evaluated_at": string; "evaluation_status": "complete" | "incomplete" | "degraded" | (string & {}); "expires_at": string; "input_requirements": Array<BuyerDeliveryInputRequirementResource>; "selection_required": boolean; "status": "active" | "consumed" | "stale" | "expired" | "revoked" | (string & {}); [key: string]: unknown; }) | ({ [key: string]: unknown })); "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCheckoutSessionDeliveryQuote.mjs)

## api.getCheckoutSessionDeliverySelectionHistory

Returns one checkout selection with immutable economics, lifecycle events, and retention-aware private data.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}`

Input: `{ "checkout_session_id": string; "delivery_selection_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeliverySelection; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCheckoutSessionDeliverySelectionHistory.mjs)

## api.getCreditNote

Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/credit-notes/{credit_note_id}`

Input: `{ "credit_note_id": string; "Flint-Version"?: string; }`

Response: `{ "data": CreditNote; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCreditNote.mjs)

## api.getCreditNoteAllocation

Returns one allocation. A non-null reversed_at means the credit was returned to the credit note and the invoice balance reopened.

`GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}`

Input: `{ "credit_note_id": string; "credit_note_allocation_id": string; "Flint-Version"?: string; }`

Response: `{ "data": CreditNoteAllocation; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCreditNoteAllocation.mjs)

## api.getCreditNotePDF

Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/credit-notes/{credit_note_id}/pdf`

Input: `{ "credit_note_id": string; "Flint-Version"?: string; }`

Response: `Uint8Array`

[Example](examples/api-getCreditNotePDF.mjs)

## api.getCurrentAPIKeyRequestLog

Returns redacted request log detail for a request generated by the authenticated API key. Detail responses remain current-key scoped and redact headers, query parameters, request bodies, and response bodies before returning them.

`GET /v1/developer/request-logs/{api_request_log_id}`

Input: `{ "api_request_log_id": string; "Flint-Version"?: string; }`

Response: `{ "data": APIRequestLogDetail; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCurrentAPIKeyRequestLog.mjs)

## api.getCustomer

Returns a single customer by ID.

`GET /v1/customers/{customer_id}`

Input: `{ "customer_id": string; "expand"?: Array<"default_payment_method" | "receivables">; "Flint-Version"?: string; }`

Response: `{ "data": Customer; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCustomer.mjs)

## api.getCustomerAddress

Returns one saved address owned by the customer.

`GET /v1/customers/{customer_id}/addresses/{customer_address_id}`

Input: `{ "customer_id": string; "customer_address_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCustomerAddress.mjs)

## api.getCustomerDeletionRequest

Returns the current status of a tracked deletion request.

`GET /v1/customers/{customer_id}/deletion-requests/{customer_deletion_request_id}`

Input: `{ "customer_id": string; "customer_deletion_request_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerDeletionRequest; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getCustomerDeletionRequest.mjs)

## api.getDeliveryLocationSet

Returns the current revision and lifecycle state for one delivery location set.

`GET /v1/delivery-location-sets/{delivery_location_set_id}`

Input: `{ "delivery_location_set_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryLocationSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeliveryLocationSet.mjs)

## api.getDeliveryMethod

Returns the current revision and lifecycle state for one delivery method.

`GET /v1/delivery-methods/{delivery_method_id}`

Input: `{ "delivery_method_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryMethod; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeliveryMethod.mjs)

## api.getDeliveryProfile

Returns the current revision and lifecycle state for one delivery profile.

`GET /v1/delivery-profiles/{delivery_profile_id}`

Input: `{ "delivery_profile_id": string; "include_diagnostics"?: boolean; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryProfile; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeliveryProfile.mjs)

## api.getDeliveryRateCallback

Returns the current revision and lifecycle state for one delivery rate callback.

`GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Input: `{ "delivery_rate_callback_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryRateCallback; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeliveryRateCallback.mjs)

## api.getDeliveryRevocation

Returns one permanent delivery revocation and its estimated impact at creation time.

`GET /v1/delivery-revocations/{delivery_revocation_id}`

Input: `{ "delivery_revocation_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryRevocation; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeliveryRevocation.mjs)

## api.getDeliveryZone

Returns the current revision and lifecycle state for one delivery zone.

`GET /v1/delivery-zones/{delivery_zone_id}`

Input: `{ "delivery_zone_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryZone; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeliveryZone.mjs)

## api.getDeveloperAuthContext

Returns non-secret metadata for the authenticated API key, including its merchant, environment, sandbox binding, and granted scopes. A valid API key is required, but no additional API scope is required.

`GET /v1/developer/auth-context`

Input: `{ "Flint-Version"?: string; }`

Response: `{ "data": DeveloperAuthContext; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeveloperAuthContext.mjs)

## api.getDeveloperPartnerApp

Returns a single partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}`

Input: `{ "X-Request-Id"?: string; "partner_app_id": string; "Flint-Version"?: string; }`

Response: `{ "data": PartnerApp; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeveloperPartnerApp.mjs)

## api.getDeveloperPartnerAppInstall

Returns a single install for a partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}`

Input: `{ "X-Request-Id"?: string; "partner_app_id": string; "partner_app_install_id": string; "Flint-Version"?: string; }`

Response: `{ "data": PartnerAppInstall; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeveloperPartnerAppInstall.mjs)

## api.getDeveloperSandbox

Returns a single sandbox by ID.

`GET /v1/developer/sandboxes/{sandbox_id}`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "sandbox_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeveloperSandbox; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDeveloperSandbox.mjs)

## api.getDevice

Returns a single device by ID.

`GET /v1/devices/{device_id}`

Input: `{ "device_id": string; "Flint-Version"?: string; }`

Response: `{ "data": Device; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDevice.mjs)

## api.getDispute

Returns one dispute by ID, with optional customer, order, and payment intent expansions.

`GET /v1/disputes/{dispute_id}`

Input: `{ "dispute_id": string; "expand"?: Array<"customer" | "order" | "payment_intent">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Dispute; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getDispute.mjs)

## api.getEffectiveSettings

Returns the fully resolved effective settings for the authenticated merchant. Optional device_id or location_id can be used to resolve inherited overrides.

`GET /v1/settings/effective`

Input: `{ "location_id"?: string; "device_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Settings; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getEffectiveSettings.mjs)

## api.getFeedbackReport

Returns one immutable feedback report in the credential's merchant and environment.

`GET /v1/feedback-reports/{feedback_report_id}`

Input: `{ "feedback_report_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": FeedbackReport; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getFeedbackReport.mjs)

## api.getFraudWarning

Get an early fraud warning for the authenticated merchant environment.

`GET /v1/fraud-warnings/{fraud_warning_id}`

Input: `{ "fraud_warning_id": string; "expand"?: Array<"dispute" | "payment_intent">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": FraudWarning; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getFraudWarning.mjs)

## api.getFulfillment

Retrieves a single fulfillment by ID.

`GET /v1/fulfillments/{fulfillment_id}`

Input: `{ "fulfillment_id": string; "expand"?: Array<"order" | "packages" | "shipments">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Fulfillment; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getFulfillment.mjs)

## api.getFulfillmentEvent

Retrieves one provider-neutral fulfillment event by ID.

`GET /v1/fulfillment-events/{fulfillment_event_id}`

Input: `{ "fulfillment_event_id": string; "expand"?: Array<"order">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": FulfillmentEvent; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getFulfillmentEvent.mjs)

## api.getFulfillmentNotification

Retrieves one fulfillment notification audit record by ID.

`GET /v1/fulfillment-notifications/{fulfillment_notification_id}`

Input: `{ "fulfillment_notification_id": string; "expand"?: Array<"order">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": FulfillmentNotification; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getFulfillmentNotification.mjs)

## api.getInvoice

Returns a single invoice by ID.

`GET /v1/invoices/{invoice_id}`

Input: `{ "invoice_id": string; "expand"?: Array<"customer" | "order">; "Flint-Version"?: string; }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getInvoice.mjs)

## api.getInvoicePaymentAttempt

Returns one card or ACH collection attempt for the invoice.

`GET /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}`

Input: `{ "invoice_id": string; "invoice_payment_attempt_id": string; "Flint-Version"?: string; }`

Response: `{ "data": InvoicePaymentAttempt; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getInvoicePaymentAttempt.mjs)

## api.getInvoicePaymentTerm

Returns one invoice payment term for the authenticated merchant.

`GET /v1/invoice-payment-terms/{invoice_payment_term_id}`

Input: `{ "invoice_payment_term_id": string; "Flint-Version"?: string; }`

Response: `{ "data": InvoicePaymentTerm; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getInvoicePaymentTerm.mjs)

## api.getInvoicePDF

Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/invoices/{invoice_id}/pdf`

Input: `{ "invoice_id": string; "Flint-Version"?: string; }`

Response: `Uint8Array`

[Example](examples/api-getInvoicePDF.mjs)

## api.getLocation

Get location.

`GET /v1/locations/{location_id}`

Input: `{ "location_id": string; "Flint-Version"?: string; }`

Response: `{ "data": Location; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getLocation.mjs)

## api.getMe

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single customer by ID.

`GET /v1/me`

Input: `{ "Flint-Version"?: string; }`

Response: `{ "data": Customer; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMe.mjs)

## api.getMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one saved address owned by the customer.

`GET /v1/me/addresses/{customer_address_id}`

Input: `{ "customer_address_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMeAddress.mjs)

## api.getMeCreditNote

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}`

Input: `{ "invoice_id": string; "credit_note_id": string; "Flint-Version"?: string; }`

Response: `{ "data": BuyerCreditNote; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMeCreditNote.mjs)

## api.getMeCreditNotePDF

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf`

Input: `{ "invoice_id": string; "credit_note_id": string; "Flint-Version"?: string; }`

Response: `Uint8Array`

[Example](examples/api-getMeCreditNotePDF.mjs)

## api.getMeDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current status of a tracked deletion request.

`GET /v1/me/deletion-requests/{customer_deletion_request_id}`

Input: `{ "customer_deletion_request_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerDeletionRequest; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMeDeletionRequest.mjs)

## api.getMeInvoice

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single invoice by ID.

`GET /v1/me/invoices/{invoice_id}`

Input: `{ "invoice_id": string; "Flint-Version"?: string; }`

Response: `{ "data": BuyerInvoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMeInvoice.mjs)

## api.getMeInvoicePDF

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/me/invoices/{invoice_id}/pdf`

Input: `{ "invoice_id": string; "Flint-Version"?: string; }`

Response: `Uint8Array`

[Example](examples/api-getMeInvoicePDF.mjs)

## api.getMeOrder

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single order by ID.

`GET /v1/me/orders/{order_id}`

Input: `{ "order_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMeOrder.mjs)

## api.getMerchant

Returns the authenticated merchant by ID.

`GET /v1/merchants/{merchant_id}`

Input: `{ "merchant_id": string; "expand"?: Array<"organization">; "Flint-Version"?: string; }`

Response: `{ "data": Merchant; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMerchant.mjs)

## api.getMerchantBillingBalance

Returns what the merchant currently owes Flint and owns as account credit in one currency.

`GET /v1/merchant-billing-balances/{merchant_billing_balance_id}`

Input: `{ "merchant_billing_balance_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": MerchantBillingBalance; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMerchantBillingBalance.mjs)

## api.getMerchantSubscriptionInvoice

Returns one invoice issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-subscription-invoices/{merchant_subscription_invoice_id}`

Input: `{ "merchant_subscription_invoice_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": MerchantSubscriptionInvoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMerchantSubscriptionInvoice.mjs)

## api.getMeReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.

`GET /v1/me/returns/{return_id}`

Input: `{ "return_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMeReturn.mjs)

## api.getMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single subscription by ID.

`GET /v1/me/subscriptions/{subscription_id}`

Input: `{ "subscription_id": string; "Flint-Version"?: string; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getMeSubscription.mjs)

## api.getModifierGroup

Get modifier group.

`GET /v1/modifier-groups/{modifier_group_id}`

Input: `{ "modifier_group_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ModifierGroup; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getModifierGroup.mjs)

## api.getModifierSet

Get modifier set.

`GET /v1/modifier-sets/{modifier_set_id}`

Input: `{ "modifier_set_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ModifierSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getModifierSet.mjs)

## api.getOnboardingState

Returns the consolidated onboarding state machine, including the primary next step for agents or humans. This endpoint is read-only.

`GET /v1/onboarding/state`

Input: `{ "sandbox_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": OnboardingState; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getOnboardingState.mjs)

## api.getOpenAPISpec

Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.

`GET /v1/openapi.json`

Input: `{ "version"?: string; "Flint-Version"?: string; }`

Response: `{  [key: string]: unknown; }`

[Example](examples/api-getOpenAPISpec.mjs)

## api.getOrCreateInvoiceCheckoutSession

Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection.

`POST /v1/invoices/{invoice_id}/checkout-session`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": InvoiceCheckoutSessionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getOrCreateInvoiceCheckoutSession.mjs)

## api.getOrCreateReturnResolutionCheckoutSession

Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution.

`POST /v1/return-resolutions/{return_resolution_id}/checkout-session`

Input: `{ "return_resolution_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CheckoutSessionLaunchResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getOrCreateReturnResolutionCheckoutSession.mjs)

## api.getOrder

Returns a single order by ID.

`GET /v1/orders/{order_id}`

Input: `{ "order_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "expand"?: Array<"customer" | "fulfillments.packages" | "fulfillments.shipments" | "payment_intents" | "subscription" | "subscription_plan">; "Flint-Version"?: string; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getOrder.mjs)

## api.getOrderCurrentDeliverySelection

Returns the delivery selection committed to an order.

`GET /v1/orders/{order_id}/delivery-selections/current`

Input: `{ "order_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeliverySelection; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getOrderCurrentDeliverySelection.mjs)

## api.getOrderPaymentAttempt

Returns one durable payment attempt for the order. Checkout-session callers can read only attempts created by their own session.

`GET /v1/orders/{order_id}/payment-attempts/{payment_attempt_id}`

Input: `{ "order_id": string; "payment_attempt_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": OrderPaymentAttempt; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getOrderPaymentAttempt.mjs)

## api.getOrganization

Returns an accessible organization by ID.

`GET /v1/organizations/{organization_id}`

Input: `{ "organization_id": string; "expand"?: Array<"parent_organization">; "Flint-Version"?: string; }`

Response: `{ "data": Organization; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getOrganization.mjs)

## api.getPackage

Retrieves one package by ID.

`GET /v1/packages/{package_id}`

Input: `{ "package_id": string; "expand"?: Array<"order">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Package; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPackage.mjs)

## api.getPackageItem

Retrieves one package item by ID.

`GET /v1/packages/{package_id}/items/{package_item_id}`

Input: `{ "package_id": string; "package_item_id": string; "expand"?: Array<"order">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PackageItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPackageItem.mjs)

## api.getPaymentIntent

Returns a single payment intent by ID.

`GET /v1/payment-intents/{payment_intent_id}`

Input: `{ "payment_intent_id": string; "expand"?: Array<"customer" | "invoice" | "order">; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": GetPaymentIntentResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPaymentIntent.mjs)

## api.getPaymentLink

Returns a single payment link by ID.

`GET /v1/payment-links/{payment_link_id}`

Input: `{ "payment_link_id": string; "expand"?: Array<"subscription_plan">; "Flint-Version"?: string; }`

Response: `{ "data": PaymentLink; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPaymentLink.mjs)

## api.getPaymentLinkPublic

Returns the sanitized buyer-facing payment-link snapshot and a private resolution context for this browser operation.

`GET /v1/payment-links/{payment_link_id}/public`

Input: `{ "payment_link_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PublicPaymentLinkResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPaymentLinkPublic.mjs)

## api.getPaymentMethod

Returns a single payment method by ID.

`GET /v1/payment-methods/{payment_method_id}`

Input: `{ "payment_method_id": string; "expand"?: Array<"customer">; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PaymentMethod; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPaymentMethod.mjs)

## api.getPaymentMethodDomain

Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.

`GET /v1/payment-method-domains/{payment_method_domain_id}`

Input: `{ "payment_method_domain_id": string; "Flint-Version"?: string; }`

Response: `{ "data": PaymentMethodDomain; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPaymentMethodDomain.mjs)

## api.getPaymentVolumeTimeseries

Returns merchant payment volume buckets for the requested time range.

`GET /v1/analytics/payment-volume-timeseries`

Input: `{ "range": "today" | "last_7_days" | "last_30_days"; "timezone"?: string; "include_previous_period"?: boolean; "Flint-Version"?: string; }`

Response: `{ "data": PaymentVolumeTimeseries; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPaymentVolumeTimeseries.mjs)

## api.getPayout

Returns one payout by ID, with optional related payout and payout destination expansions.

`GET /v1/payouts/{payout_id}`

Input: `{ "payout_id": string; "expand"?: Array<"original_payout" | "payout_destination" | "reversed_by_payout">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Payout; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPayout.mjs)

## api.getPayoutDestination

Returns one payout destination by ID.

`GET /v1/payout-settings/destinations/{payout_destination_id}`

Input: `{ "payout_destination_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PayoutDestination; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPayoutDestination.mjs)

## api.getPayoutSettings

Returns payout settings that control default payout behavior for the authenticated merchant.

`GET /v1/payout-settings`

Input: `{ "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PayoutSettings; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPayoutSettings.mjs)

## api.getProduct

Returns a single product by ID.

`GET /v1/products/{product_id}`

Input: `{ "product_id": string; "expand"?: Array<"modifier_set">; "Flint-Version"?: string; }`

Response: `{ "data": Product; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getProduct.mjs)

## api.getProductOption

Get product option.

`GET /v1/products/{product_id}/options/{option_id}`

Input: `{ "product_id": string; "option_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ProductOption; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getProductOption.mjs)

## api.getProductVariant

Get product variant.

`GET /v1/products/{product_id}/variants/{variant_id}`

Input: `{ "product_id": string; "variant_id": string; "expand"?: Array<"modifier_set">; "Flint-Version"?: string; }`

Response: `{ "data": ProductVariant; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getProductVariant.mjs)

## api.getPromotion

Returns a single promotion by ID.

`GET /v1/promotions/{promotion_id}`

Input: `{ "promotion_id": string; "Flint-Version"?: string; }`

Response: `{ "data": Promotion; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getPromotion.mjs)

## api.getRefund

Returns a single refund by ID.

`GET /v1/refunds/{refund_id}`

Input: `{ "refund_id": string; "expand"?: Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">; "Flint-Version"?: string; }`

Response: `{ "data": Refund; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getRefund.mjs)

## api.getReport

Returns one report and its terminal download or failure details when available.

`GET /v1/reports/{report_id}`

Input: `{ "report_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Report; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReport.mjs)

## api.getReportDownload

Authorizes the stable Flint download URL and redirects to a short-lived private file URL.

`GET /v1/report-downloads/{report_download_id}`

Input: `{ "report_download_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ location?: string }`

[Example](examples/api-getReportDownload.mjs)

## api.getResourceTimeline

Returns summary-only API request, webhook event, and webhook delivery attempt entries for a single public API resource. The caller must have developer.resource_timelines.read and the matching read scope for the requested resource type.

`GET /v1/developer/resource-timelines/{resource_id}`

Input: `{ "resource_id": string; "resource_type"?: string; "include"?: Array<"requests" | "webhooks" | "attempts">; "page_size"?: number; "page_token"?: string; "occurred_after"?: string; "occurred_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ResourceTimeline; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getResourceTimeline.mjs)

## api.getReturn

Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.

`GET /v1/returns/{return_id}`

Input: `{ "return_id": string; "expand"?: Array<"customer" | "line_items.fulfillment" | "line_items.return_reason" | "order">; "Flint-Version"?: string; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturn.mjs)

## api.getReturnDisposition

Retrieve one disposition with its type, destination, quantity, status, and any linked inventory effect.

`GET /v1/return-dispositions/{return_disposition_id}`

Input: `{ "return_disposition_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnDisposition; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnDisposition.mjs)

## api.getReturnInspection

Retrieve one inspection with its line items, findings, and current or superseded observation status.

`GET /v1/return-inspections/{return_inspection_id}`

Input: `{ "return_inspection_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnInspection; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnInspection.mjs)

## api.getReturnLineItem

Retrieve one Return line item, including its quantity counters and the reason the buyer selected.

`GET /v1/returns/{return_id}/line-items/{return_line_item_id}`

Input: `{ "return_id": string; "return_line_item_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnLineItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnLineItem.mjs)

## api.getReturnPolicy

Retrieve one Return policy. Supports expand for current_revision.

`GET /v1/return-policies/{return_policy_id}`

Input: `{ "return_policy_id": string; "expand"?: Array<"current_revision">; "Flint-Version"?: string; }`

Response: `{ "data": ReturnPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnPolicy.mjs)

## api.getReturnPolicyRevision

Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.

`GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}`

Input: `{ "return_policy_id": string; "return_policy_revision_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnPolicyRevision; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnPolicyRevision.mjs)

## api.getReturnReason

Retrieve one Return reason with its handle, category handles, and status.

`GET /v1/return-reasons/{return_reason_id}`

Input: `{ "return_reason_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnReason; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnReason.mjs)

## api.getReturnReceipt

Retrieve one merchandise receipt with its line items and its current or superseded observation status.

`GET /v1/return-receipts/{return_receipt_id}`

Input: `{ "return_receipt_id": string; "Flint-Version"?: string; }`

Response: `{ "data": ReturnReceipt; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnReceipt.mjs)

## api.getReturnResolution

Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds, payments, and replacement order. Supports expand for those links.

`GET /v1/return-resolutions/{return_resolution_id}`

Input: `{ "return_resolution_id": string; "expand"?: Array<"payment_intents" | "refunds" | "replacement_order">; "Flint-Version"?: string; }`

Response: `{ "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReturnResolution.mjs)

## api.getReview

Get a payment review for the authenticated merchant environment.

`GET /v1/reviews/{review_id}`

Input: `{ "review_id": string; "expand"?: Array<"customer" | "order" | "payment_intent">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Review; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getReview.mjs)

## api.getRiskList

Get a risk list for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}`

Input: `{ "risk_list_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": RiskList; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getRiskList.mjs)

## api.getRiskListItem

Get a risk list item for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Input: `{ "risk_list_id": string; "risk_list_item_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": RiskListItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getRiskListItem.mjs)

## api.getRiskRule

Get a risk rule for the authenticated merchant environment.

`GET /v1/risk-rules/{risk_rule_id}`

Input: `{ "risk_rule_id": string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": RiskRule; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getRiskRule.mjs)

## api.getRiskRuleAttributeRegistry

Get the risk rule attribute registry for the authenticated merchant environment.

`GET /v1/risk-rules/attributes`

Input: `{ "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PublicRiskAttributeRegistry; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getRiskRuleAttributeRegistry.mjs)

## api.getSettings

Returns the raw merchant-scoped settings record for the authenticated merchant. No inheritance is applied.

`GET /v1/settings`

Input: `{ "Flint-Version"?: string; }`

Response: `{ "data": Settings; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getSettings.mjs)

## api.getShipment

Retrieves one shipment execution record by ID.

`GET /v1/shipments/{shipment_id}`

Input: `{ "shipment_id": string; "expand"?: Array<"order">; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Shipment; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getShipment.mjs)

## api.getSubscription

Returns a single subscription by ID.

`GET /v1/subscriptions/{subscription_id}`

Input: `{ "subscription_id": string; "expand"?: Array<"customer" | "payment_method" | "subscription_plan">; "Flint-Version"?: string; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getSubscription.mjs)

## api.getSubscriptionAnalytics

Returns windowed subscription metrics plus current subscription snapshot metrics.

`GET /v1/analytics/subscriptions`

Input: `{ "range": "today" | "last_7_days" | "last_30_days"; "timezone"?: string; "Flint-Version"?: string; }`

Response: `{ "data": SubscriptionAnalytics; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getSubscriptionAnalytics.mjs)

## api.getSubscriptionPaymentRetry

Returns one durable manual subscription payment retry.

`GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Input: `{ "subscription_id": string; "subscription_payment_retry_id": string; "Flint-Version"?: string; }`

Response: `{ "data": SubscriptionPaymentRetry; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getSubscriptionPaymentRetry.mjs)

## api.getSubscriptionPlan

Returns a single subscription plan by ID.

`GET /v1/subscription-plans/{plan_id}`

Input: `{ "plan_id": string; "Flint-Version"?: string; }`

Response: `{ "data": SubscriptionPlan; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getSubscriptionPlan.mjs)

## api.getWebhookDelivery

Returns one endpoint delivery and its current retry state.

`GET /v1/webhook-deliveries/{webhook_delivery_id}`

Input: `{ "webhook_delivery_id": string; "Flint-Version"?: string; }`

Response: `{ "data": WebhookDelivery; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getWebhookDelivery.mjs)

## api.getWebhookEndpoint

Returns a single webhook endpoint by ID. The signing secret is omitted after creation.

`GET /v1/webhook-endpoints/{webhook_endpoint_id}`

Input: `{ "webhook_endpoint_id": string; "Flint-Version"?: string; }`

Response: `{ "data": WebhookEndpoint; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getWebhookEndpoint.mjs)

## api.getWebhookEvent

Returns a specific webhook event for the authenticated merchant.

`GET /v1/webhook-events/{webhook_event_id}`

Input: `{ "webhook_event_id": string; "Flint-Version"?: string; }`

Response: `{ "data": WebhookEvent; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-getWebhookEvent.mjs)

## api.grantOrganizationMembership

Adds or updates a direct organization membership for a user.

`POST /v1/organizations/{organization_id}/memberships`

Input: `{ "organization_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "role": "owner" | "admin" | "operator" | "viewer"; "user_id": string; [key: string]: unknown; }; }`

Response: `{ "data": OrganizationMembership; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-grantOrganizationMembership.mjs)

## api.issueCreditNote

Issues a draft credit note. Assigns credit_note_number, freezes the lines, renders the PDF, and sets unallocated_money to the total. The over-credit check runs here rather than on line edits: across every issued credit note, an invoice line cannot be credited past its frozen value. Issuing does not change the invoice; allocating does.

`POST /v1/credit-notes/{credit_note_id}/issue`

Input: `{ "credit_note_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CreditNote; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-issueCreditNote.mjs)

## api.issueDeveloperSandboxTestKey

Creates a new test API key that is bound to the target sandbox.

`POST /v1/developer/sandboxes/{sandbox_id}/test-key`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "sandbox_id": string; "Flint-Version"?: string; "body": { "name": string; "scopes"?: Array<string>; [key: string]: unknown; }; }`

Response: `{ "data": APIKeyWithSecret; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-issueDeveloperSandboxTestKey.mjs)

## api.issueInvoice

Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/issue`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "delivery_mode"?: "merchant_default" | "email" | "caller_managed"; "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": IssueInvoiceResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-issueInvoice.mjs)

## api.listAPIKeys

Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets are never returned.

`GET /v1/api-keys`

Input: `{ "status"?: "active" | "revoked"; "page_size"?: number; "page_token"?: string; "sort_by"?: "created_at" | "last_used_at" | "name"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<APIKey>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listAPIKeys.mjs)

## api.listBalances

Returns an unpaginated current balance snapshot grouped by currency and balance source for the authenticated merchant.

`GET /v1/balances`

Input: `{ "currency"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Balance>; "meta"?: MoneyMovementListMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listBalances.mjs)

## api.listBalanceTransactions

Returns a paginated ledger of balance-affecting transactions, including availability timing and related public resources.

`GET /v1/balance-transactions`

Input: `{ "currency"?: string; "type"?: "payment" | "refund" | "dispute" | "dispute_reversal" | "return" | "recovery" | "payout" | "payout_failure" | "payout_cancellation" | "payout_reversal" | "payout_advance" | "payout_advance_funding" | "reserve_hold" | "reserve_release" | "payout_hold" | "payout_hold_release" | "adjustment" | "merchant_billing_payment" | "merchant_billing_payment_reversal"; "related_object_type"?: "payment_intent" | "refund" | "dispute" | "payout" | "payout_destination" | "reserve" | "adjustment" | "merchant_subscription_invoice"; "related_object_id"?: string; "status"?: "pending" | "available" | "reserved" | "reversed" | "failed" | "superseded"; "created_after"?: string; "created_before"?: string; "available_after"?: string; "available_before"?: string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<BalanceTransaction>; "meta"?: MoneyMovementListMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listBalanceTransactions.mjs)

## api.listBundleComponents

List bundle components.

`GET /v1/bundles/{bundle_id}/components`

Input: `{ "bundle_id": string; "page_size"?: number; "page_token"?: string; "delivery_profile_id"?: string; "delivery_configuration_status"?: "configured" | "action_required" | "not_applicable"; "Flint-Version"?: string; }`

Response: `{ "data": Array<BundleComponent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listBundleComponents.mjs)

## api.listBundles

List bundles.

`GET /v1/bundles`

Input: `{ "page_size"?: number; "page_token"?: string; "external_reference_id"?: string; "sku"?: string; "query"?: string; "category_handle"?: string; "status"?: "active" | "inactive" | "archived"; "sort_by"?: "created_at" | "updated_at" | "name"; "sort_direction"?: "asc" | "desc"; "delivery_profile_id"?: string; "delivery_configuration_status"?: "configured" | "action_required" | "not_applicable"; "Flint-Version"?: string; }`

Response: `{ "data": Array<Bundle>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listBundles.mjs)

## api.listCapabilities

Returns payment and money movement capability readiness for the authenticated merchant.

`GET /v1/capabilities`

Input: `{ "domain"?: "money_movement" | "payments"; "capability"?: "accept_card_payments" | "save_payment_methods" | "accept_affirm_payments" | "receive_payouts" | "create_standard_payouts" | "manage_payout_destinations" | "manage_payout_settings"; "status"?: "ready" | "blocked" | "pending" | "not_available"; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Capability>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCapabilities.mjs)

## api.listCategories

List categories.

`GET /v1/categories`

Input: `{ "status"?: "active" | "archived"; "page_size"?: number; "page_token"?: string; "external_reference_id"?: string; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Category>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCategories.mjs)

## api.listCheckoutSessions

Returns a paginated list of checkout sessions for the authenticated merchant.

`GET /v1/checkout-sessions`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated"; "order_id"?: string; "payment_link_id"?: string; "customer_id"?: string; "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription"; "external_reference_id"?: string; "query"?: string; "sort_by"?: "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "expires_after"?: string; "expires_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<CheckoutSession>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCheckoutSessions.mjs)

## api.listCreditNoteAllocations

Returns every allocation made from a credit note, including reversed ones. Filter by idempotency_key to find the allocation a given request produced.

`GET /v1/credit-notes/{credit_note_id}/allocations`

Input: `{ "credit_note_id": string; "page_size"?: number; "page_token"?: string; "idempotency_key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<CreditNoteAllocation>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCreditNoteAllocations.mjs)

## api.listCreditNotes

Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.

`GET /v1/credit-notes`

Input: `{ "page_size"?: number; "page_token"?: string; "invoice_id"?: string; "external_reference_id"?: string; "query"?: string; "status"?: "draft" | "issued" | "void"; "Flint-Version"?: string; }`

Response: `{ "data": Array<CreditNote>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCreditNotes.mjs)

## api.listCurrentAPIKeyRequestLogs

Returns request log summaries generated by the authenticated API key. Results are always scoped to the calling key. Full request and response bodies are intentionally omitted from this public API surface to reduce the risk of sensitive data leakage.

`GET /v1/developer/request-logs`

Input: `{ "page_size"?: number; "page_token"?: string; "request_id"?: string; "http_method"?: string; "path_query"?: string; "resource_type"?: string; "resource_id"?: string; "status_bucket"?: "all" | "success" | "client_error" | "server_error"; "created_after"?: string; "created_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<APIRequestLog>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCurrentAPIKeyRequestLogs.mjs)

## api.listCustomerAddresses

Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/customers/{customer_id}/addresses`

Input: `{ "customer_id": string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<CustomerAddress>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCustomerAddresses.mjs)

## api.listCustomerDeletionRequests

Lists deletion requests across the selected merchant environment so a merchant can discover and review buyer-created requests.

`GET /v1/customer-deletion-requests`

Input: `{ "status"?: "pending_review" | "processing" | "completed" | "rejected" | "failed"; "customer_id"?: string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<CustomerDeletionRequest>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCustomerDeletionRequests.mjs)

## api.listCustomers

Returns a paginated list of customers for the authenticated merchant.

`GET /v1/customers`

Input: `{ "page_size"?: number; "page_token"?: string; "query"?: string; "external_reference_id"?: string; "email"?: string; "sort_by"?: "name" | "email" | "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "expand"?: Array<"receivables">; "Flint-Version"?: string; }`

Response: `{ "data": Array<Customer>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listCustomers.mjs)

## api.listDeliveryLocationSets

Returns delivery location sets in a stable, cursor-paginated order.

`GET /v1/delivery-location-sets`

Input: `{ "page_size"?: number; "page_token"?: string; "query"?: string; "external_reference_id"?: string; "status"?: "inactive" | "active" | "archived" | "revoked"; "delivery_method_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<DeliveryLocationSet>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeliveryLocationSets.mjs)

## api.listDeliveryMethods

Returns delivery methods in a stable, cursor-paginated order.

`GET /v1/delivery-methods`

Input: `{ "page_size"?: number; "page_token"?: string; "query"?: string; "external_reference_id"?: string; "status"?: "inactive" | "active" | "archived" | "revoked"; "type"?: "shipment" | "local_delivery" | "pickup"; "delivery_zone_id"?: string; "delivery_location_set_id"?: string; "delivery_rate_callback_id"?: string; "location_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<DeliveryMethod>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeliveryMethods.mjs)

## api.listDeliveryProfiles

Returns delivery profiles in a stable, cursor-paginated order.

`GET /v1/delivery-profiles`

Input: `{ "page_size"?: number; "page_token"?: string; "query"?: string; "external_reference_id"?: string; "status"?: "inactive" | "active" | "archived" | "revoked"; "resolution_mode"?: "quote" | "manual"; "include_diagnostics"?: boolean; "Flint-Version"?: string; }`

Response: `{ "data": Array<DeliveryProfile>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeliveryProfiles.mjs)

## api.listDeliveryQuotes

Returns persisted delivery quote diagnostics in stable creation order.

`GET /v1/delivery-quotes`

Input: `{ "checkout_session_id"?: string; "order_id"?: string; "status"?: "active" | "consumed" | "stale" | "expired" | "revoked"; "evaluation_status"?: "complete" | "incomplete" | "degraded"; "created_after"?: string; "created_before"?: string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<DeliveryQuote>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeliveryQuotes.mjs)

## api.listDeliveryRateCallbacks

Returns delivery rate callbacks in a stable, cursor-paginated order.

`GET /v1/delivery-rate-callbacks`

Input: `{ "page_size"?: number; "page_token"?: string; "query"?: string; "external_reference_id"?: string; "status"?: "inactive" | "active" | "archived" | "revoked"; "delivery_method_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<DeliveryRateCallback>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeliveryRateCallbacks.mjs)

## api.listDeliveryZones

Returns delivery zones in a stable, cursor-paginated order.

`GET /v1/delivery-zones`

Input: `{ "page_size"?: number; "page_token"?: string; "query"?: string; "external_reference_id"?: string; "status"?: "inactive" | "active" | "archived" | "revoked"; "delivery_method_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<DeliveryZone>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeliveryZones.mjs)

## api.listDeveloperPartnerAppInstalls

Returns installs for a partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}/installs`

Input: `{ "X-Request-Id"?: string; "partner_app_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PartnerAppInstall>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeveloperPartnerAppInstalls.mjs)

## api.listDeveloperPartnerApps

Returns partner apps owned by the authenticated merchant.

`GET /v1/developer/partner/apps`

Input: `{ "X-Request-Id"?: string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PartnerApp>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeveloperPartnerApps.mjs)

## api.listDeveloperSandboxes

Returns the merchant's sandboxes, including archived sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session token during setup or a normal external API key afterward.

`GET /v1/developer/sandboxes`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "archived" | "all"; "Flint-Version"?: string; }`

Response: `{ "data": Array<DeveloperSandbox>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDeveloperSandboxes.mjs)

## api.listDevices

Returns a paginated list of devices for the authenticated merchant.

`GET /v1/devices`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "deleted"; "location_id"?: string; "sort_by"?: "name" | "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "Flint-Version"?: string; }`

Response: `{ "data": Array<Device>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDevices.mjs)

## api.listDisputes

Returns a paginated list of disputes for the authenticated merchant with optional payment, customer, status, reason, case type, and timing filters.

`GET /v1/disputes`

Input: `{ "payment_intent_id"?: string; "order_id"?: string; "customer_id"?: string; "status"?: "warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "under_review" | "won" | "lost" | "prevented"; "reason"?: "bank_cannot_process" | "check_returned" | "credit_not_processed" | "customer_initiated" | "debit_not_authorized" | "duplicate" | "fraudulent" | "general" | "incorrect_account_details" | "insufficient_funds" | "noncompliant" | "product_not_received" | "product_unacceptable" | "subscription_canceled" | "unrecognized" | "bank_account_closed" | "bank_account_not_found" | "bank_debit_not_authorized" | "bank_account_restricted" | "other"; "case_type"?: "inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return"; "created_after"?: string; "created_before"?: string; "evidence_due_after"?: string; "evidence_due_before"?: string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Dispute>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listDisputes.mjs)

## api.listFeedbackReports

Lists feedback reports in descending creation order for the credential's merchant and environment.

`GET /v1/feedback-reports`

Input: `{ "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<FeedbackReport>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listFeedbackReports.mjs)

## api.listFraudWarnings

List early fraud warnings for the authenticated merchant environment.

`GET /v1/fraud-warnings`

Input: `{ "actionable"?: boolean; "payment_intent_id"?: string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<FraudWarning>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listFraudWarnings.mjs)

## api.listFulfillmentEvents

Lists provider-neutral fulfillment events. Results default to newest received first.

`GET /v1/fulfillment-events`

Input: `{ "fulfillment_id"?: string; "shipment_id"?: string; "package_id"?: string; "order_id"?: string; "page_size"?: number; "page_token"?: string; "event_type"?: "accepted" | "preparing" | "picked" | "packed" | "ready" | "shipped" | "dispatched" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "completed" | "canceled" | "failed" | "no_show" | "custom"; "external_system"?: string; "external_event_id"?: string; "occurred_after"?: string; "occurred_before"?: string; "sort_by"?: "received_at" | "occurred_at"; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<FulfillmentEvent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listFulfillmentEvents.mjs)

## api.listFulfillmentNotifications

Returns persisted fulfillment notification audit records. Results default to newest created first.

`GET /v1/fulfillment-notifications`

Input: `{ "fulfillment_id"?: string; "order_id"?: string; "fulfillment_event_id"?: string; "page_size"?: number; "page_token"?: string; "channel"?: "email"; "status"?: "pending" | "sent" | "failed" | "suppressed"; "notification_type"?: "fulfillment_canceled" | "fulfillment_completed" | "fulfillment_delivered" | "fulfillment_delivery_attempted" | "fulfillment_dispatched" | "fulfillment_exception" | "fulfillment_failed" | "fulfillment_in_transit" | "fulfillment_no_show" | "fulfillment_out_for_delivery" | "fulfillment_ready" | "fulfillment_returned" | "fulfillment_shipped" | "shipment_delivered" | "shipment_delivery_attempted" | "shipment_exception" | "shipment_in_transit" | "shipment_out_for_delivery" | "shipment_returned" | "shipment_shipped" | "tracking_updated"; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<FulfillmentNotification>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listFulfillmentNotifications.mjs)

## api.listFulfillments

Returns fulfillments for operational queue and order-detail views. Results default to newest created first.

`GET /v1/fulfillments`

Input: `{ "expand"?: Array<"order">; "order_id"?: string; "page_size"?: number; "page_token"?: string; "external_reference_id"?: string; "query"?: string; "status"?: "pending" | "in_progress" | "ready" | "completed" | "canceled" | "failed" | "scheduled" | "preparing" | "picked" | "packed" | "dispatched"; "type"?: "shipment" | "pickup" | "local_delivery" | "digital" | "service"; "location_id"?: string; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "sort_direction"?: "asc" | "desc"; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Fulfillment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listFulfillments.mjs)

## api.listInventoryAdjustments

List inventory adjustments.

`GET /v1/inventory-adjustments`

Input: `{ "page_size"?: number; "page_token"?: string; "inventory_item_id"?: string; "location_id"?: string; "reason"?: "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other"; "idempotency_key"?: string; "source_system_type"?: "manual" | "pos" | "wms" | "erp" | "flint" | "other"; "external_source_id"?: string; "external_actor_id"?: string; "occurred_after"?: string; "occurred_before"?: string; "created_after"?: string; "created_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryAdjustment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryAdjustments.mjs)

## api.listInventoryAllocationPolicies

List inventory allocation policies.

`GET /v1/inventory-allocation-policies`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "archived"; "external_reference_id"?: string; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryAllocationPolicy>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryAllocationPolicies.mjs)

## api.listInventoryCounts

List inventory counts.

`GET /v1/inventory-counts`

Input: `{ "page_size"?: number; "page_token"?: string; "inventory_item_id"?: string; "location_id"?: string; "status"?: "draft" | "applied" | "canceled"; "idempotency_key"?: string; "created_after"?: string; "created_before"?: string; "applied_after"?: string; "applied_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryCount>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryCounts.mjs)

## api.listInventoryItems

List inventory items.

`GET /v1/inventory-items`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "archived"; "sku"?: string; "barcode"?: string; "external_reference_id"?: string; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryItems.mjs)

## api.listInventoryLevels

List inventory levels. Levels are strongly consistent individually, but pages may reflect different committed instants.

`GET /v1/inventory-levels`

Input: `{ "page_size"?: number; "page_token"?: string; "inventory_item_id"?: string; "location_id"?: string; "has_available_quantity"?: boolean; "has_unavailable_condition"?: boolean; "has_shortage"?: boolean; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryLevel>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryLevels.mjs)

## api.listInventoryMovements

List inventory movements. Filter by idempotency_key to recover the movements a command produced.

`GET /v1/inventory-movements`

Input: `{ "page_size"?: number; "page_token"?: string; "inventory_item_id"?: string; "location_id"?: string; "type"?: string; "reason"?: string; "idempotency_key"?: string; "return_id"?: string; "return_disposition_id"?: string; "source_system_type"?: "manual" | "pos" | "wms" | "erp" | "flint" | "other"; "external_source_id"?: string; "external_actor_id"?: string; "occurred_after"?: string; "occurred_before"?: string; "created_after"?: string; "created_before"?: string; "source_reference_type"?: string; "source_reference_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryMovement>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryMovements.mjs)

## api.listInventoryReceipts

List completed inventory receipt effects. Use typed Return filters for reconciliation when the receipt was created by Returns.

`GET /v1/inventory-receipts`

Input: `{ "page_size"?: number; "page_token"?: string; "inventory_item_id"?: string; "receiving_location_id"?: string; "inventory_reservation_id"?: string; "return_id"?: string; "return_disposition_id"?: string; "idempotency_key"?: string; "source_system_type"?: "manual" | "pos" | "wms" | "erp" | "flint" | "other"; "external_source_id"?: string; "external_actor_id"?: string; "occurred_after"?: string; "occurred_before"?: string; "created_after"?: string; "created_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryReceipt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryReceipts.mjs)

## api.listInventoryReservations

List inventory reservations.

`GET /v1/inventory-reservations`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "closed"; "owner_type"?: "merchant"; "owner_key"?: string; "idempotency_key"?: string; "has_at_risk_quantity"?: boolean; "closed_reason"?: "consumed" | "released" | "expired" | "reallocated" | "mixed"; "owner_expires_after"?: string; "owner_expires_before"?: string; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryReservation>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryReservations.mjs)

## api.listInventoryTransfers

List inventory transfers.

`GET /v1/inventory-transfers`

Input: `{ "page_size"?: number; "page_token"?: string; "inventory_item_id"?: string; "origin_location_id"?: string; "destination_location_id"?: string; "status"?: "draft" | "in_transit" | "partially_resolved" | "closed"; "idempotency_key"?: string; "external_reference"?: string; "query"?: string; "closed_reason"?: "received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed"; "created_after"?: string; "created_before"?: string; "departed_after"?: string; "departed_before"?: string; "received_after"?: string; "received_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InventoryTransfer>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInventoryTransfers.mjs)

## api.listInvoiceDeliveryAttempts

Returns email delivery attempts for send and reminder actions.

`GET /v1/invoices/{invoice_id}/delivery-attempts`

Input: `{ "invoice_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InvoiceDeliveryAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInvoiceDeliveryAttempts.mjs)

## api.listInvoiceEvents

Returns the audit timeline for an invoice.

`GET /v1/invoices/{invoice_id}/events`

Input: `{ "invoice_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InvoiceEvent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInvoiceEvents.mjs)

## api.listInvoicePaymentAttempts

Lists card and ACH collection attempts for an invoice in reverse chronological order.

`GET /v1/invoices/{invoice_id}/payment-attempts`

Input: `{ "invoice_id": string; "page_size"?: number; "page_token"?: string; "idempotency_key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InvoicePaymentAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInvoicePaymentAttempts.mjs)

## api.listInvoicePaymentTerms

Returns a paginated list of invoice payment terms for the authenticated merchant.

`GET /v1/invoice-payment-terms`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "archived"; "external_reference_id"?: string; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<InvoicePaymentTerm>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInvoicePaymentTerms.mjs)

## api.listInvoices

Returns a paginated list of invoices for the authenticated merchant.

`GET /v1/invoices`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited"; "customer_id"?: string; "order_id"?: string; "external_reference_id"?: string; "created_after"?: string; "created_before"?: string; "due_after"?: string; "due_before"?: string; "is_overdue"?: boolean; "has_amount_due"?: boolean; "sort_by"?: "created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money"; "sort_direction"?: "asc" | "desc"; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Invoice>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listInvoices.mjs)

## api.listLocations

List Locations. Filtering by inventory_allocation_status requires commerce.inventory.read; the inventory block is omitted entirely when the caller lacks inventory read authority.

`GET /v1/locations`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "archived"; "inventory_allocation_status"?: "active" | "inactive"; "external_reference_id"?: string; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Location>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listLocations.mjs)

## api.listMeAddresses

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/me/addresses`

Input: `{ "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<CustomerAddress>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeAddresses.mjs)

## api.listMeCreditNotes

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.

`GET /v1/me/invoices/{invoice_id}/credit-notes`

Input: `{ "invoice_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<BuyerCreditNote>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeCreditNotes.mjs)

## api.listMeFulfillments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns fulfillments for operational queue and order-detail views. Results default to newest created first.

`GET /v1/me/fulfillments`

Input: `{ "order_id"?: string; "page_size"?: number; "page_token"?: string; "external_reference_id"?: string; "query"?: string; "status"?: "pending" | "in_progress" | "ready" | "completed" | "canceled" | "failed" | "scheduled" | "preparing" | "picked" | "packed" | "dispatched"; "type"?: "shipment" | "pickup" | "local_delivery" | "digital" | "service"; "location_id"?: string; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "sort_direction"?: "asc" | "desc"; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Fulfillment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeFulfillments.mjs)

## api.listMeInvoices

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of invoices for the authenticated merchant.

`GET /v1/me/invoices`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited"; "order_id"?: string; "external_reference_id"?: string; "created_after"?: string; "created_before"?: string; "due_after"?: string; "due_before"?: string; "is_overdue"?: boolean; "has_amount_due"?: boolean; "sort_by"?: "created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money"; "sort_direction"?: "asc" | "desc"; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<BuyerInvoice>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeInvoices.mjs)

## api.listMeOrderActivities

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.

`GET /v1/me/orders/{order_id}/activities`

Input: `{ "order_id": string; "page_size"?: number; "page_token"?: string; "sort_direction"?: "asc" | "desc"; "type"?: Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">; "Flint-Version"?: string; }`

Response: `{ "data": Array<OrderActivity>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeOrderActivities.mjs)

## api.listMeOrders

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of orders for the authenticated merchant.

`GET /v1/me/orders`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "open" | "closed"; "payment_status"?: "unpaid" | "partially_paid" | "paid"; "refund_status"?: "none" | "partially_refunded" | "refunded"; "fulfillment_status"?: Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">; "order_number"?: string; "external_reference_id"?: string; "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription"; "query"?: string; "subscription_id"?: string; "return_id"?: string; "return_resolution_id"?: string; "min_amount"?: string; "max_amount"?: string; "currency"?: string; "sort_by"?: "created_at" | "updated_at" | "outstanding_money" | "total"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Order>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeOrders.mjs)

## api.listMePackages

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists package records, newest created first.

`GET /v1/me/packages`

Input: `{ "shipment_id"?: string; "fulfillment_id"?: string; "order_id"?: string; "page_size"?: number; "page_token"?: string; "external_system"?: string; "external_reference_id"?: string; "query"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Package>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMePackages.mjs)

## api.listMePaymentMethods

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned.

`GET /v1/me/payment-methods`

Input: `{ "page_size"?: number; "page_token"?: string; "type"?: "card"; "status"?: "active" | "pending" | "expired" | "removed" | "failed"; "Flint-Version"?: string; }`

Response: `{ "data": Array<PaymentMethod>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMePaymentMethods.mjs)

## api.listMePayments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of payment intents for the authenticated merchant.

`GET /v1/me/payments`

Input: `{ "page_size"?: number; "page_token"?: string; "order_id"?: string; "invoice_id"?: string; "status"?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired"; "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription"; "risk_level"?: Array<"normal" | "elevated" | "highest" | "not_assessed">; "payment_flow"?: Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">; "external_reference_id"?: string; "return_id"?: string; "return_resolution_id"?: string; "query"?: string; "min_amount"?: string; "max_amount"?: string; "currency"?: string; "state"?: "with_refunds" | "fully_refunded" | "disputed" | "needs_action"; "sort_by"?: "created_at" | "updated_at" | "amount"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PaymentIntent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMePayments.mjs)

## api.listMerchantBillingBalances

Returns what the merchant currently owes Flint and owns as account credit by currency.

`GET /v1/merchant-billing-balances`

Input: `{ "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<MerchantBillingBalance>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMerchantBillingBalances.mjs)

## api.listMerchantSubscriptionInvoices

Returns invoices issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-subscription-invoices`

Input: `{ "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<MerchantSubscriptionInvoice>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMerchantSubscriptionInvoices.mjs)

## api.listMeRefunds

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of refunds for the authenticated merchant.

`GET /v1/me/refunds`

Input: `{ "page_size"?: number; "page_token"?: string; "order_id"?: string; "payment_intent_id"?: string; "status"?: "pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded"; "reason"?: Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">; "refund_method"?: "original_payment"; "min_amount"?: string; "max_amount"?: string; "currency"?: string; "external_reference_id"?: string; "return_id"?: string; "return_resolution_id"?: string; "query"?: string; "sort_by"?: "created_at" | "updated_at" | "amount"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Refund>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeRefunds.mjs)

## api.listMeReturns

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.

`GET /v1/me/returns`

Input: `{ "created_after"?: string; "created_before"?: string; "decision_status"?: Array<"pending" | "approved" | "partially_approved" | "declined">; "external_reference_id"?: string; "merchandise_status"?: Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">; "order_id"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "receiving_location_id"?: string; "resolution_status"?: Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">; "resolution_type"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">; "return_number"?: string; "return_reason_id"?: string; "status"?: Array<"requested" | "open" | "completed" | "declined" | "canceled">; "updated_after"?: string; "updated_before"?: string; "work_type"?: Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnResource>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeReturns.mjs)

## api.listMeShipments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists shipment execution records, newest created first.

`GET /v1/me/shipments`

Input: `{ "order_id"?: string; "fulfillment_id"?: string; "page_size"?: number; "page_token"?: string; "external_system"?: string; "external_reference_id"?: string; "query"?: string; "return_id"?: string; "handed_off_after"?: string; "handed_off_before"?: string; "created_after"?: string; "created_before"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Shipment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeShipments.mjs)

## api.listMeSubscriptions

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of subscriptions for the authenticated merchant.

`GET /v1/me/subscriptions`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete"; "billing_schedule_owner"?: "flint" | "external"; "awaiting_billing_schedule"?: boolean; "plan_id"?: string; "sort_by"?: "created_at" | "updated_at" | "next_billing_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "next_billing_at_after"?: string; "next_billing_at_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Subscription>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listMeSubscriptions.mjs)

## api.listModifierGroups

List modifier groups.

`GET /v1/modifier-groups`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "archived"; "modifier_group_type"?: "list" | "text"; "external_reference_id"?: string; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<ModifierGroup>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listModifierGroups.mjs)

## api.listModifierSets

List modifier sets.

`GET /v1/modifier-sets`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "archived"; "external_reference_id"?: string; "query"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<ModifierSet>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listModifierSets.mjs)

## api.listOrderActivities

Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.

`GET /v1/orders/{order_id}/activities`

Input: `{ "order_id": string; "page_size"?: number; "page_token"?: string; "sort_direction"?: "asc" | "desc"; "type"?: Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">; "Flint-Version"?: string; }`

Response: `{ "data": Array<OrderActivity>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listOrderActivities.mjs)

## api.listOrderPaymentAttempts

Returns payment attempts for the order, newest first. Checkout-session callers see only attempts created by their own session.

`GET /v1/orders/{order_id}/payment-attempts`

Input: `{ "order_id": string; "page_size"?: number; "page_token"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<OrderPaymentAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listOrderPaymentAttempts.mjs)

## api.listOrders

Returns a paginated list of orders for the authenticated merchant.

`GET /v1/orders`

Input: `{ "page_size"?: number; "page_token"?: string; "customer_id"?: string; "status"?: "open" | "closed"; "payment_status"?: "unpaid" | "partially_paid" | "paid"; "refund_status"?: "none" | "partially_refunded" | "refunded"; "fulfillment_status"?: Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">; "order_number"?: string; "external_reference_id"?: string; "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription"; "query"?: string; "subscription_id"?: string; "return_id"?: string; "return_resolution_id"?: string; "min_amount"?: string; "max_amount"?: string; "currency"?: string; "sort_by"?: "created_at" | "updated_at" | "outstanding_money" | "total"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Order>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listOrders.mjs)

## api.listOrganizationMemberships

Returns the direct memberships for an organization.

`GET /v1/organizations/{organization_id}/memberships`

Input: `{ "organization_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<OrganizationMembership>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listOrganizationMemberships.mjs)

## api.listOrganizations

Returns the organizations accessible to the caller, filtered to the authenticated merchant's organization subtree for external API keys.

`GET /v1/organizations`

Input: `{ "parent_organization_id"?: string; "status"?: "active" | "deleted"; "page_size"?: number; "page_token"?: string; "sort_by"?: "name" | "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Organization>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listOrganizations.mjs)

## api.listPackageItems

Lists order line quantities contained in packages.

`GET /v1/packages/{package_id}/items`

Input: `{ "package_id": string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PackageItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPackageItems.mjs)

## api.listPackages

Lists package records, newest created first.

`GET /v1/packages`

Input: `{ "shipment_id"?: string; "fulfillment_id"?: string; "order_id"?: string; "page_size"?: number; "page_token"?: string; "external_system"?: string; "external_reference_id"?: string; "query"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Package>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPackages.mjs)

## api.listPaymentIntents

Returns a paginated list of payment intents for the authenticated merchant.

`GET /v1/payment-intents`

Input: `{ "page_size"?: number; "page_token"?: string; "order_id"?: string; "customer_id"?: string; "invoice_id"?: string; "status"?: "requires_payment_method" | "requires_confirmation" | "requires_action" | "processing" | "requires_capture" | "canceled" | "succeeded" | "expired"; "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription"; "risk_level"?: Array<"normal" | "elevated" | "highest" | "not_assessed">; "payment_flow"?: Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">; "external_reference_id"?: string; "return_id"?: string; "return_resolution_id"?: string; "query"?: string; "min_amount"?: string; "max_amount"?: string; "currency"?: string; "state"?: "with_refunds" | "fully_refunded" | "disputed" | "needs_action"; "sort_by"?: "created_at" | "updated_at" | "amount"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PaymentIntent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPaymentIntents.mjs)

## api.listPaymentLinks

Returns a paginated list of payment links for the authenticated merchant.

`GET /v1/payment-links`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive"; "external_reference_id"?: string; "query"?: string; "payment_link_type"?: "standard" | "donation" | "event"; "has_plan"?: boolean; "sort_by"?: "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PaymentLink>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPaymentLinks.mjs)

## api.listPaymentMethodDomains

Returns payment method domains ordered by payment_method_domain_id ascending in the selected Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation error when invalid or mismatched.

`GET /v1/payment-method-domains`

Input: `{ "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PaymentMethodDomain>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPaymentMethodDomains.mjs)

## api.listPaymentMethods

Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned.

`GET /v1/payment-methods`

Input: `{ "customer_id"?: string; "page_size"?: number; "page_token"?: string; "type"?: "card"; "status"?: "active" | "pending" | "expired" | "removed" | "failed"; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PaymentMethod>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPaymentMethods.mjs)

## api.listPayoutDestinations

Returns a paginated list of payout destinations available to the authenticated merchant.

`GET /v1/payout-settings/destinations`

Input: `{ "currency"?: string; "type"?: "bank_account" | "debit_card"; "status"?: "pending" | "active" | "verification_required" | "disabled" | "deleted" | "failed"; "available_payout_method"?: "standard"; "default_for_currency"?: boolean; "include_deleted"?: boolean; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PayoutDestination>; "meta"?: MoneyMovementListMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPayoutDestinations.mjs)

## api.listPayoutEntries

Lists the authoritative balance-transaction allocations for a payout in ascending occurrence order. A paid payout returns an unavailable error instead of incomplete or inferred entries.

`GET /v1/payouts/{payout_id}/entries`

Input: `{ "payout_id": string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PayoutEntry>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPayoutEntries.mjs)

## api.listPayouts

Returns a paginated list of payouts with optional filters for status, currency, destination, method, and timing.

`GET /v1/payouts`

Input: `{ "currency"?: string; "method"?: "standard"; "balance_source_type"?: "card" | "bank_account" | "fpx"; "payout_destination_id"?: string; "external_reference_id"?: string; "query"?: string; "status"?: "pending" | "in_transit" | "paid" | "failed" | "canceled"; "created_after"?: string; "created_before"?: string; "arrival_after"?: string; "arrival_before"?: string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Payout>; "meta"?: MoneyMovementListMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPayouts.mjs)

## api.listProductOptions

List product options.

`GET /v1/products/{product_id}/options`

Input: `{ "product_id": string; "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "archived"; "Flint-Version"?: string; }`

Response: `{ "data": Array<ProductOption>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listProductOptions.mjs)

## api.listProducts

Returns a paginated list of products for the authenticated merchant.

`GET /v1/products`

Input: `{ "page_size"?: number; "page_token"?: string; "product_type"?: "physical" | "service" | "fee" | "digital"; "status"?: "active" | "inactive" | "archived"; "category_handle"?: string; "external_reference_id"?: string; "sku"?: string; "query"?: string; "delivery_profile_id"?: string; "delivery_configuration_status"?: "configured" | "action_required" | "not_applicable"; "sort_by"?: "name" | "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Product>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listProducts.mjs)

## api.listProductVariants

List product variants.

`GET /v1/products/{product_id}/variants`

Input: `{ "product_id": string; "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "archived"; "external_reference_id"?: string; "query"?: string; "sort_by"?: "position" | "created_at" | "updated_at" | "unit_price"; "sort_direction"?: "asc" | "desc"; "delivery_profile_id"?: string; "delivery_configuration_status"?: "configured" | "action_required" | "not_applicable"; "Flint-Version"?: string; }`

Response: `{ "data": Array<ProductVariant>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listProductVariants.mjs)

## api.listPromotionCodes

Returns a paginated list of codes for a promotion.

`GET /v1/promotions/{promotion_id}/codes`

Input: `{ "promotion_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<PromotionCode>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPromotionCodes.mjs)

## api.listPromotions

Returns a paginated list of promotions for the authenticated merchant.

`GET /v1/promotions`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "inactive" | "expired" | "not_yet_started" | "exhausted" | "no_active_codes" | "archived"; "external_reference_id"?: string; "query"?: string; "product_id"?: string; "variant_id"?: string; "bundle_id"?: string; "category_handle"?: string; "redemption_type"?: "automatic" | "code"; "discount_class"?: "order" | "line_item" | "service_charge"; "sort_by"?: "name" | "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Promotion>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listPromotions.mjs)

## api.listRefunds

Returns a paginated list of refunds for the authenticated merchant.

`GET /v1/refunds`

Input: `{ "page_size"?: number; "page_token"?: string; "order_id"?: string; "payment_intent_id"?: string; "customer_id"?: string; "status"?: "pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded"; "reason"?: Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">; "refund_method"?: "original_payment"; "min_amount"?: string; "max_amount"?: string; "currency"?: string; "external_reference_id"?: string; "return_id"?: string; "return_resolution_id"?: string; "query"?: string; "sort_by"?: "created_at" | "updated_at" | "amount"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Refund>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listRefunds.mjs)

## api.listReports

Lists reports in descending creation order using opaque pagination.

`GET /v1/reports`

Input: `{ "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Report>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReports.mjs)

## api.listReturnDispositions

List merchandise dispositions. Omitting return_id lists dispositions across every Return for the merchant.

`GET /v1/return-dispositions`

Input: `{ "created_after"?: string; "created_before"?: string; "disposition_type"?: "sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost"; "external_reference_id"?: string; "inventory_location_id"?: string; "occurred_after"?: string; "occurred_before"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "replaces_return_disposition_id"?: string; "return_id"?: string; "return_inspection_line_item_id"?: string; "return_line_item_id"?: string; "return_receipt_line_item_id"?: string; "status"?: "pending" | "succeeded" | "failed" | "canceled"; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnDisposition>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnDispositions.mjs)

## api.listReturnInspections

List inspection observations. Omitting return_id lists inspections across every Return for the merchant.

`GET /v1/return-inspections`

Input: `{ "acceptance_status"?: "accepted" | "rejected" | "review_required"; "created_after"?: string; "created_before"?: string; "external_reference_id"?: string; "inspected_after"?: string; "inspected_before"?: string; "location_id"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "return_id"?: string; "return_line_item_id"?: string; "return_receipt_id"?: string; "source_system_type"?: "manual" | "pos" | "wms" | "erp" | "other" | "flint"; "status"?: "current" | "superseded"; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnInspection>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnInspections.mjs)

## api.listReturnLineItems

List the line items on a Return with their quantity counters, eligibility, frozen display identity, and return value.

`GET /v1/returns/{return_id}/line-items`

Input: `{ "return_id": string; "fulfillment_id"?: string; "merchandise_status"?: Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">; "order_line_item_id"?: string; "page_size"?: number; "page_token"?: string; "resolution_status"?: Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">; "return_reason_id"?: string; "status"?: Array<"requested" | "open" | "completed" | "declined" | "canceled">; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnLineItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnLineItems.mjs)

## api.listReturnPolicies

List Return policies with their status and current revision.

`GET /v1/return-policies`

Input: `{ "external_reference_id"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "status"?: Array<"active" | "inactive" | "archived">; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnPolicy>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnPolicies.mjs)

## api.listReturnPolicyRevisions

List every published revision of a Return policy.

`GET /v1/return-policies/{return_policy_id}/revisions`

Input: `{ "return_policy_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnPolicyRevision>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnPolicyRevisions.mjs)

## api.listReturnReasons

List Return reasons, including Flint-provided defaults and merchant-defined reasons.

`GET /v1/return-reasons`

Input: `{ "external_reference_id"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "source"?: "flint" | "merchant"; "status"?: Array<"active" | "archived">; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnReason>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnReasons.mjs)

## api.listReturnReceipts

List merchandise receipts. Omitting return_id lists receipts across every Return for the merchant.

`GET /v1/return-receipts`

Input: `{ "created_after"?: string; "created_before"?: string; "external_reference_id"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "received_after"?: string; "received_before"?: string; "receiving_location_id"?: string; "return_id"?: string; "return_line_item_id"?: string; "shipment_id"?: string; "source_system_type"?: "manual" | "pos" | "wms" | "erp" | "other" | "flint"; "status"?: "current" | "superseded"; "verification_status"?: "matched" | "unverified" | "excess"; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnReceipt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnReceipts.mjs)

## api.listReturnResolutions

List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for a resolution that already settled.

`GET /v1/return-resolutions`

Input: `{ "action_required_by"?: "buyer" | "merchant" | "integration"; "corrects_return_resolution_id"?: string; "created_after"?: string; "created_before"?: string; "external_reference_id"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "resolution_type"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">; "return_id"?: string; "return_line_item_id"?: string; "return_policy_revision_id"?: string; "status"?: Array<"proposed" | "pending" | "requires_action" | "partially_fulfilled" | "fulfilled" | "failed" | "canceled">; "updated_after"?: string; "updated_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnResolution>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturnResolutions.mjs)

## api.listReturns

List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.

`GET /v1/returns`

Input: `{ "created_after"?: string; "created_before"?: string; "customer_id"?: string; "decision_status"?: Array<"pending" | "approved" | "partially_approved" | "declined">; "external_reference_id"?: string; "merchandise_status"?: Array<"not_required" | "awaiting_handoff" | "in_transit" | "partially_received" | "received" | "inspection_required" | "partially_inspected" | "inspection_review_required" | "disposition_required" | "resolved" | "exception">; "order_id"?: string; "page_size"?: number; "page_token"?: string; "query"?: string; "receiving_location_id"?: string; "resolution_status"?: Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">; "resolution_type"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "correction">; "return_number"?: string; "return_reason_id"?: string; "status"?: Array<"requested" | "open" | "completed" | "declined" | "canceled">; "updated_after"?: string; "updated_before"?: string; "work_type"?: Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">; "Flint-Version"?: string; }`

Response: `{ "data": Array<ReturnResource>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReturns.mjs)

## api.listReviews

List payment reviews for the authenticated merchant environment.

`GET /v1/reviews`

Input: `{ "status"?: Array<"open" | "resolving" | "closed">; "risk_level"?: Array<"normal" | "elevated" | "highest" | "not_assessed">; "payment_flow"?: Array<"checkout" | "payment_link" | "invoice" | "subscription_initial" | "subscription_renewal" | "virtual_terminal" | "api">; "payment_intent_id"?: string; "order_id"?: string; "customer_id"?: string; "created_after"?: string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Review>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listReviews.mjs)

## api.listRiskListItems

List risk list items for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}/items`

Input: `{ "risk_list_id": string; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<RiskListItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listRiskListItems.mjs)

## api.listRiskLists

List risk lists for the authenticated merchant environment.

`GET /v1/risk-lists`

Input: `{ "include_archived"?: boolean; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<RiskList>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listRiskLists.mjs)

## api.listRiskRules

List risk rules for the authenticated merchant environment.

`GET /v1/risk-rules`

Input: `{ "include_archived"?: boolean; "page_size"?: number; "page_token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<RiskRule>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listRiskRules.mjs)

## api.listShipments

Lists shipment execution records, newest created first.

`GET /v1/shipments`

Input: `{ "order_id"?: string; "fulfillment_id"?: string; "page_size"?: number; "page_token"?: string; "external_system"?: string; "external_reference_id"?: string; "query"?: string; "return_id"?: string; "handed_off_after"?: string; "handed_off_before"?: string; "created_after"?: string; "created_before"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Shipment>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listShipments.mjs)

## api.listSubscriptionPaymentRetries

Returns a subscription's manual payment retries, newest first.

`GET /v1/subscriptions/{subscription_id}/payment-retries`

Input: `{ "subscription_id": string; "page_size"?: number; "page_token"?: string; "idempotency_key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<SubscriptionPaymentRetry>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listSubscriptionPaymentRetries.mjs)

## api.listSubscriptionPlans

Returns a paginated list of subscription plans for the authenticated merchant.

`GET /v1/subscription-plans`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "active" | "archived"; "external_reference_id"?: string; "query"?: string; "sort_by"?: "name" | "created_at" | "updated_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<SubscriptionPlan>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listSubscriptionPlans.mjs)

## api.listSubscriptions

Returns a paginated list of subscriptions for the authenticated merchant.

`GET /v1/subscriptions`

Input: `{ "page_size"?: number; "page_token"?: string; "status"?: "trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete"; "billing_schedule_owner"?: "flint" | "external"; "awaiting_billing_schedule"?: boolean; "customer_id"?: string; "plan_id"?: string; "external_reference_id"?: string; "query"?: string; "sort_by"?: "created_at" | "updated_at" | "next_billing_at"; "sort_direction"?: "asc" | "desc"; "created_after"?: string; "created_before"?: string; "updated_after"?: string; "updated_before"?: string; "next_billing_at_after"?: string; "next_billing_at_before"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<Subscription>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listSubscriptions.mjs)

## api.listWebhookDeliveries

Returns endpoint deliveries created for one canonical webhook event.

`GET /v1/webhook-events/{webhook_event_id}/deliveries`

Input: `{ "webhook_event_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<WebhookDelivery>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listWebhookDeliveries.mjs)

## api.listWebhookDeliveryAttempts

Returns the attempts recorded for a specific webhook delivery.

`GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`

Input: `{ "webhook_delivery_id": string; "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<WebhookDeliveryAttempt>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listWebhookDeliveryAttempts.mjs)

## api.listWebhookEndpoints

Returns a page of webhook endpoints for the authenticated merchant.

`GET /v1/webhook-endpoints`

Input: `{ "page_size"?: number; "page_token"?: string; "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">; "partner_app_id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<WebhookEndpoint>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listWebhookEndpoints.mjs)

## api.listWebhookEvents

Returns recent canonical webhook events for the authenticated merchant.

`GET /v1/webhook-events`

Input: `{ "page_size"?: number; "page_token"?: string; "webhook_endpoint_id"?: string; "delivery_status"?: "pending" | "delivered" | "failed" | "suppressed"; "event_source"?: Array<"merchant" | "partner_app" | "installed_merchants">; "partner_app_id"?: string; "event_type"?: "balance.updated" | "balance_transaction.created" | "balance_transaction.updated" | "capability.updated" | "checkout_session.closed" | "checkout_session.completed" | "checkout_session.expired" | "checkout_session.invalidated" | "credit_note.allocation_created" | "credit_note.allocation_reversed" | "credit_note.created" | "credit_note.issued" | "credit_note.updated" | "credit_note.voided" | "customer.created" | "customer.deletion_completed" | "customer.deletion_rejected" | "customer.deletion_requested" | "customer.updated" | "delivery_location_set.activated" | "delivery_location_set.archived" | "delivery_location_set.created" | "delivery_location_set.deactivated" | "delivery_location_set.updated" | "delivery_method.activated" | "delivery_method.archived" | "delivery_method.created" | "delivery_method.deactivated" | "delivery_method.updated" | "delivery_profile.activated" | "delivery_profile.archived" | "delivery_profile.created" | "delivery_profile.deactivated" | "delivery_profile.updated" | "delivery_rate.archived" | "delivery_rate.created" | "delivery_rate.updated" | "delivery_rate_callback.activated" | "delivery_rate_callback.archived" | "delivery_rate_callback.created" | "delivery_rate_callback.deactivated" | "delivery_rate_callback.updated" | "delivery_revocation.created" | "delivery_selection.committed" | "delivery_zone.activated" | "delivery_zone.archived" | "delivery_zone.created" | "delivery_zone.deactivated" | "delivery_zone.updated" | "dispute.closed" | "dispute.created" | "dispute.lost" | "dispute.needs_response" | "dispute.prevented" | "dispute.updated" | "dispute.warning_closed" | "dispute.won" | "fraud_warning.created" | "fraud_warning.updated" | "inventory.action_required" | "inventory.count.applied" | "inventory.level.updated" | "inventory.receipt.created" | "inventory.reservation.at_risk" | "inventory.reservation.closed" | "inventory.reservation.committed" | "inventory.reservation.consumed" | "inventory.reservation.created" | "inventory.reservation.hold_expired" | "inventory.reservation.released" | "inventory.shortage.detected" | "inventory.transfer.closed" | "inventory.transfer.departed" | "inventory.transfer.lost" | "inventory.transfer.received" | "inventory.transfer.returned" | "invoice.collection_block_resolved" | "invoice.collection_blocked" | "invoice.created" | "invoice.credited" | "invoice.delivery_failed" | "invoice.delivery_succeeded" | "invoice.issue_failed" | "invoice.issued" | "invoice.late_fee_due" | "invoice.manual_payment_recorded" | "invoice.manual_payment_reversed" | "invoice.marked_uncollectible" | "invoice.overdue" | "invoice.paid" | "invoice.partially_paid" | "invoice.partially_refunded" | "invoice.payment_attempt_canceled" | "invoice.payment_attempt_expired" | "invoice.payment_failed" | "invoice.payment_processing" | "invoice.refunded" | "invoice.reminder_due" | "invoice.sent" | "invoice.updated" | "invoice.voided" | "merchant.readiness.updated" | "merchant_billing_balance.updated" | "merchant_subscription_invoice.issued" | "merchant_subscription_invoice.updated" | "order.closed" | "order.created" | "order.fulfillment.completed" | "order.fulfillment.created" | "order.fulfillment.event.created" | "order.fulfillment.package.created" | "order.fulfillment.package.updated" | "order.fulfillment.shipment.created" | "order.fulfillment.shipment.updated" | "order.fulfillment.status_changed" | "order.fulfillment.updated" | "order.inventory_action_required" | "order.inventory_exception.created" | "order.inventory_exception.resolved" | "order.paid" | "order.partially_paid" | "order.payment_authorization_canceled" | "order.payment_authorization_expired" | "order.payment_authorized" | "order.payment_captured" | "order.refunded" | "order.updated" | "partner_app.install.created" | "partner_app.install.environment_grant.created" | "partner_app.install.environment_grant.revoked" | "partner_app.install.permissions_updated" | "partner_app.install.revoked" | "partner_app.install.updated" | "payment_intent.canceled" | "payment_intent.fulfillment_hold.updated" | "payment_intent.payment_failed" | "payment_intent.processing" | "payment_intent.requires_action" | "payment_intent.requires_capture" | "payment_intent.succeeded" | "payment_method.failed" | "payment_method.removed" | "payment_method.saved" | "payout.canceled" | "payout.created" | "payout.failed" | "payout.paid" | "payout.reversed" | "payout.updated" | "payout_destination.created" | "payout_destination.deleted" | "payout_destination.disabled" | "payout_destination.updated" | "payout_settings.updated" | "refund.created" | "refund.failed" | "refund.updated" | "report.failed" | "report.succeeded" | "return.canceled" | "return.completed" | "return.created" | "return.decision_recorded" | "return.reopened" | "return.updated" | "return_disposition.created" | "return_disposition.updated" | "return_inspection.acceptance_decided" | "return_inspection.created" | "return_inspection.superseded" | "return_receipt.created" | "return_receipt.superseded" | "return_receipt.verified" | "return_resolution.created" | "return_resolution.updated" | "review.closed" | "review.opened" | "subscription.activated" | "subscription.canceled" | "subscription.created" | "subscription.dunning_exhausted" | "subscription.past_due" | "subscription.paused" | "subscription.payment_failed" | "subscription.payment_succeeded" | "subscription.renewal_upcoming" | "subscription.resumed" | "subscription.trial_ending" | "subscription.updated"; "resource_type"?: "balance" | "balance_transaction" | "capability" | "checkout_session" | "customer" | "dispute" | "fraud_warning" | "invoice" | "merchant" | "inventory_count" | "inventory_level" | "inventory_reservation" | "inventory_reservation_line" | "inventory_receipt" | "inventory_transfer" | "order" | "payment_intent" | "payment_method" | "payout" | "payout_destination" | "payout_settings" | "refund" | "return" | "return_disposition" | "return_inspection" | "return_receipt" | "return_resolution" | "review" | "subscription"; "resource_id"?: string; "api_request_log_id"?: string; "request_id"?: string; "correlation_id"?: string; "created_after"?: string; "created_before"?: string; "include"?: Array<"test_events">; "Flint-Version"?: string; }`

Response: `{ "data": Array<WebhookEvent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listWebhookEvents.mjs)

## api.listWebhookEventTypes

Returns the webhook event types that can be used in enabled_events and event_type filters, grouped by the event source each type is valid for.

`GET /v1/webhook-event-types`

Input: `{ "page_size"?: number; "page_token"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Array<WebhookEventType>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-listWebhookEventTypes.mjs)

## api.markInvoiceUncollectible

Closes the outstanding balance as a write-off and releases the order's invoice collection authority. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/mark-uncollectible`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-markInvoiceUncollectible.mjs)

## api.pauseInvoiceReminders

Stops the automatic reminder cadence on a collectible invoice and sets reminders_paused_at. Manual send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire.

`POST /v1/invoices/{invoice_id}/pause-reminders`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-pauseInvoiceReminders.mjs)

## api.pauseMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Pauses a subscription immediately, optionally for a fixed number of billing cycles.

`POST /v1/me/subscriptions/{subscription_id}/pause`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "pause_duration_cycles"?: number; [key: string]: unknown; }; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-pauseMeSubscription.mjs)

## api.pauseSubscription

Pauses a subscription immediately, optionally for a fixed number of billing cycles.

`POST /v1/subscriptions/{subscription_id}/pause`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "pause_duration_cycles"?: number; [key: string]: unknown; }; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-pauseSubscription.mjs)

## api.payOrder

Starts or resumes a payment attempt on the order. Set action to pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to save a newly collected token on a zero-balance order, or resume to continue an attempt after a pending client action. Each action accepts only its own fields. Only confirm_payment_intents accepts completion_behavior. A pay action without payment_source is valid only when the outstanding balance is zero. To resume, send action: resume with payment_attempt_id, or replay the exact original request with the same Idempotency-Key while the attempt is open. Payment intents with manual capture return an active authorization instead of settling immediately.

`POST /v1/orders/{order_id}/pay`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": (({ "action": "pay"; "buyer_email"?: string; "buyer_phone"?: string; "expected_outstanding_money"?: MoneyValueInput; "payment_source"?: PaymentSourceCredentialInput; }) | ({ "action": "confirm_payment_intents"; "buyer_email"?: string; "buyer_phone"?: string; "completion_behavior"?: "complete_order" | "partial_payment"; "expected_outstanding_money"?: MoneyValueInput; "payment_intents": Array<OrderPaymentIntentSelectionInput>; }) | ({ "action": "setup"; "buyer_email"?: string; "buyer_phone"?: string; "expected_outstanding_money"?: MoneyValueInput; "setup_payment_source": { "token": string; }; }) | ({ "action": "resume"; "buyer_email"?: string; "buyer_phone"?: string; "expected_outstanding_money"?: MoneyValueInput; "payment_attempt_id": string; })); }`

Response: `{ "data": PayOrderResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-payOrder.mjs)

## api.previewOrderDiscounts

Evaluates promotion outcomes for an order without mutating it. Merchant-authenticated callers may include a promotion by promotion_id or promotion_code; checkout-authenticated buyers must provide a code. The response includes applied, skipped, and single-threshold available promotion candidates.

`POST /v1/orders/{order_id}/discounts/preview`

Input: `{ "order_id": string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body"?: { "discount"?: CreateOrderDiscountInput; [key: string]: unknown; }; }`

Response: `{ "data": DiscountPreviewData; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-previewOrderDiscounts.mjs)

## api.previewPartnerInstallAuthorization

Validates the install link inputs and returns the partner app metadata and requested permissions for the consent screen.

`GET /v1/oauth/authorize/preview`

Input: `{ "client_id": string; "redirect_uri": string; "mode": "test" | "live"; "permission_ids"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PartnerAuthorizePreview; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-previewPartnerInstallAuthorization.mjs)

## api.processExistingReturn

Process an existing requested Return atomically at the Flint facts layer. Requires the current Return version and Idempotency-Key. Linked effects remain asynchronous.

`POST /v1/returns/{return_id}/process`

Input: `{ "return_id": string; "Idempotency-Key": string; "Flint-Version"?: string; "body": { "completion_behavior"?: "complete_when_ready" | "leave_open"; "expected_version"?: string; "line_items": Array<ProcessExistingReturnLineItemInputInput>; "receipt"?: ReturnProcessReceiptInputInput; }; }`

Response: `{ "data": ReturnProcessResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-processExistingReturn.mjs)

## api.publishLocationGeography

Publishes the location geography atomically. Supply the complete address and timezone; omitted coordinates are cleared. This PATCH does not merge nested address fields. Requires expected_geography_revision, independently of the location version used for metadata edits.

`PATCH /v1/locations/{location_id}/geography`

Input: `{ "Idempotency-Key"?: string; "location_id": string; "Flint-Version"?: string; "body": { "address": LocationAddressInput; "coordinate"?: LocationCoordinateInput; "coordinate_source"?: "merchant_supplied" | "geocoded" | null; "expected_geography_revision": string; "timezone": string; [key: string]: unknown; }; }`

Response: `{ "data": Location; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-publishLocationGeography.mjs)

## api.publishReturnPolicyRevision

Publish a new immutable Return policy revision while preserving the stable policy identity.

`POST /v1/return-policies/{return_policy_id}/revisions`

Input: `{ "return_policy_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_current_return_policy_revision_id": string; "expected_version"?: string; "revision": ReturnPolicyRevisionRequestInput; }; }`

Response: `{ "data": ReturnPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-publishReturnPolicyRevision.mjs)

## api.queryCheckoutSessionPickupAvailability

Computes a bounded, non-holding pickup-location projection from current checkout authority and one inventory snapshot. Merchant-authenticated requests include configured Location diagnostics; checkout credentials receive only buyer-safe results.

`POST /v1/checkout-sessions/{checkout_session_id}/query-pickup-availability`

Input: `{ "checkout_session_id": string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "buyer_location"?: DeliveryBuyerLocationInputInput; "expected_delivery_selection_id"?: string; "maximum_distance"?: DeliveryPickupAvailabilityMaximumDistanceRequestInput; [key: string]: unknown; }; }`

Response: `{ "data": DeliveryPickupAvailability; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-queryCheckoutSessionPickupAvailability.mjs)

## api.reactivateMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Clears a pending period-end cancellation without changing the current billing period.

`POST /v1/me/subscriptions/{subscription_id}/reactivate`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-reactivateMeSubscription.mjs)

## api.reactivateSubscription

Clears a pending period-end cancellation without changing the current billing period.

`POST /v1/subscriptions/{subscription_id}/reactivate`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-reactivateSubscription.mjs)

## api.recordManualInvoicePayment

Applies an offline/manual payment to an issued invoice. Recording is rejected with INVOICE_PAYMENT_RESOLVING while an online payment is still resolving; an idle open checkout does not block. A payment that clears the balance invalidates the open checkout session. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "amount_money": MoneyValueInput; "expected_version"?: string; "external_reference_id"?: string; "note"?: string; "received_at"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-recordManualInvoicePayment.mjs)

## api.refreshCustomerSession

Rotates a customer session secret and refresh token without a merchant API key. Reusing a rotated refresh token revokes the session family.

`POST /v1/customer-sessions/refresh`

Input: `{ "Idempotency-Key": string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "refresh_token": string; [key: string]: unknown; }; }`

Response: `{ "data": CustomerSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-refreshCustomerSession.mjs)

## api.refreshMerchantAccountSession

Creates a fresh provider session from a signed launch token after rechecking the authenticated principal, merchant environment, account controller, and component grant.

`POST /v1/merchant-account-sessions/refresh`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "launch_token": string; }; }`

Response: `{ "data": MerchantAccountSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-refreshMerchantAccountSession.mjs)

## api.regenerateInvoicePublicLink

Revokes the current buyer-access link and all checkout credentials derived from it, then returns a new public_url. The current checkout session and its payment lineage are preserved. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/regenerate-public-link`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": RegenerateInvoiceLinkResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-regenerateInvoicePublicLink.mjs)

## api.releaseInventoryReservation

Release held or committed quantity back to available. Cumulative targets; released quantity is terminal.

`POST /v1/inventory-reservations/{inventory_reservation_id}/release`

Input: `{ "Idempotency-Key": string; "inventory_reservation_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; "lines": Array<{ "inventory_reservation_line_id": string; "target_released_from_committed_quantity"?: string; "target_released_from_held_quantity"?: string; [key: string]: unknown; }>; [key: string]: unknown; }; }`

Response: `{ "data": InventoryReservationResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-releaseInventoryReservation.mjs)

## api.releaseReturnResolution

Release a confirmed resolution that is waiting on a manual release. Available only while action_reason is manual_release.

`POST /v1/return-resolutions/{return_resolution_id}/release`

Input: `{ "return_resolution_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "merchant_approved" | "exception_resolved" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-releaseReturnResolution.mjs)

## api.removeMePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Soft-removes a saved payment method so it can no longer be used for future payments.

`DELETE /v1/me/payment-methods/{payment_method_id}`

Input: `{ "payment_method_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-removeMePaymentMethod.mjs)

## api.removeOrderDiscounts

Removes one or more pending applied discounts from an order. Redeemed or canceled discounts are settlement history and cannot be removed.

`POST /v1/orders/{order_id}/discounts/remove`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "order_discount_ids": Array<string>; [key: string]: unknown; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-removeOrderDiscounts.mjs)

## api.removePaymentMethod

Soft-removes a saved payment method so it can no longer be used for future payments.

`DELETE /v1/payment-methods/{payment_method_id}`

Input: `{ "payment_method_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-removePaymentMethod.mjs)

## api.reopenReturn

Reopen a completed Return to record late compensating facts. Confirmed money movements are never edited backward, so a monetary fix is a new correction resolution.

`POST /v1/returns/{return_id}/reopen`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "linked_effect_changed" | "correction_required" | "additional_merchandise_received" | "merchant_request" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-reopenReturn.mjs)

## api.repriceOrderDiscounts

Recalculates pending discounts and automatic promotions for a mutable order.

`POST /v1/orders/{order_id}/discounts/reprice`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-repriceOrderDiscounts.mjs)

## api.resendMeOrderReceipt

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Queues another receipt email for a paid order when Flint manages receipt delivery. The recipient is derived from the order and cannot be supplied by the caller. When the merchant manages receipt delivery, ask the merchant for another copy.

`POST /v1/me/orders/{order_id}/receipt`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resendMeOrderReceipt.mjs)

## api.resendOrderReceipt

Queues another receipt email for a paid order when Flint manages receipt delivery. The recipient is derived from the order and cannot be supplied by the caller. When the merchant manages receipt delivery, ask the merchant for another copy.

`POST /v1/orders/{order_id}/receipt`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; }`

Response: `{ "data": ActionResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resendOrderReceipt.mjs)

## api.resendWebhookDelivery

Sends the canonical event payload again to the delivery's current webhook endpoint URL. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`

Input: `{ "webhook_delivery_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body"?: { "reason"?: string; [key: string]: unknown; }; }`

Response: `{ "data": WebhookDeliveryAction; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resendWebhookDelivery.mjs)

## api.resetDemoSession

Ends the caller's current demo sandbox (if any) and provisions a fresh one, returning a new temporary API key. Useful when the original one-time secret was lost. Subject to the same per-client daily limit as creation.

`POST /v1/demo-sessions/reset`

Input: `{ "X-Turnstile-Token"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "template"?: string; [key: string]: unknown; }; }`

Response: `{ "data": DemoSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resetDemoSession.mjs)

## api.resetDeveloperSandbox

Clears a non-default sandbox and returns its replacement environment. The replacement has a new sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys.

`POST /v1/developer/sandboxes/{sandbox_id}/reset`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "sandbox_id": string; "Flint-Version"?: string; }`

Response: `{ "data": DeveloperSandbox; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resetDeveloperSandbox.mjs)

## api.resolveCustomerDeletionRequest

Approves or rejects a pending deletion request. Approval returns processing while account data and buyer credentials are deleted asynchronously. A failed deletion can be approved again but cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or usable saved payment methods.

`POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve`

Input: `{ "customer_deletion_request_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "decision": "approve" | "reject"; [key: string]: unknown; }; }`

Response: `{ "data": CustomerDeletionRequest; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resolveCustomerDeletionRequest.mjs)

## api.resolveOrderInventoryException

Marks a paid inventory failure as resolved after an operator has completed manual inventory remediation.

`POST /v1/orders/{order_id}/inventory-exception/resolve`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "reason"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resolveOrderInventoryException.mjs)

## api.resolvePaymentLink

Creates a buyer checkout session from an active payment link. Catalog-backed modifier availability is frozen onto the checkout session and selected modifiers are resolved onto the backing order.

`POST /v1/payment-links/{payment_link_id}/resolve`

Input: `{ "payment_link_id": string; "Idempotency-Key": string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "custom_field_values"?: Record<string, string>; "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiersInput>; "quantity_overrides"?: Record<string, number>; "resolution_context": string; "unit_price_overrides"?: Record<string, MoneyValueInput>; [key: string]: unknown; }; }`

Response: `{ "data": CheckoutSessionLaunchResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resolvePaymentLink.mjs)

## api.resolvePromotionCode

Resolves a buyer-entered promotion code to its promotion code record and parent promotion. This does not evaluate the code against an order or redeem it.

`GET /v1/promotions/by-code/{code}`

Input: `{ "code": string; "Flint-Version"?: string; }`

Response: `{ "data": PromotionCodeResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resolvePromotionCode.mjs)

## api.resumeInvoiceReminders

Clears reminders_paused_at so the invoice resumes its reminder cadence. Reminder times that passed while it was paused do not fire retroactively.

`POST /v1/invoices/{invoice_id}/resume-reminders`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resumeInvoiceReminders.mjs)

## api.resumeMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Resumes a paused subscription.

`POST /v1/me/subscriptions/{subscription_id}/resume`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resumeMeSubscription.mjs)

## api.resumeSubscription

Resumes a paused subscription.

`POST /v1/subscriptions/{subscription_id}/resume`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-resumeSubscription.mjs)

## api.retryReturnDisposition

Retry a failed disposition with the same immutable intent. Disposition and effect identities are preserved, so a retry does not move stock twice.

`POST /v1/return-dispositions/{return_disposition_id}/retry`

Input: `{ "return_disposition_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnDisposition; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-retryReturnDisposition.mjs)

## api.retryReturnResolution

Retry a failed resolution. A new attempt starts, historical payment and refund IDs stay on the resolution, and a late event from an earlier attempt cannot settle the new attempt.

`POST /v1/return-resolutions/{return_resolution_id}/retry`

Input: `{ "return_resolution_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-retryReturnResolution.mjs)

## api.reverseCreditNoteAllocation

Reverses an allocation and reopens that much of the invoice balance. The original allocation keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation that closed an invoice moves it from credited back to open or partially_paid.

`POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse`

Input: `{ "credit_note_id": string; "Idempotency-Key"?: string; "credit_note_allocation_id": string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CreditNoteAllocationResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-reverseCreditNoteAllocation.mjs)

## api.reverseManualInvoicePayment

Reverses previously applied manual/offline payment amount from an invoice. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments/reverse`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "amount_money": MoneyValueInput; "expected_version"?: string; "external_reference_id"?: string; "note"?: string; "received_at"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-reverseManualInvoicePayment.mjs)

## api.revokeAPIKey

Permanently revokes an external API key and returns metadata with status revoked.

`POST /v1/api-keys/{api_key_id}/revoke`

Input: `{ "api_key_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": APIKey; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-revokeAPIKey.mjs)

## api.revokeCustomerSession

Revokes one customer session. This does not revoke an independent Flint Account buyer session.

`POST /v1/customer-sessions/{customer_session_id}/revoke`

Input: `{ "customer_session_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerSessionRevocation; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-revokeCustomerSession.mjs)

## api.revokeCustomerSessions

Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.

`POST /v1/customers/{customer_id}/sessions/revoke`

Input: `{ "customer_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": CustomerSessionsRevocation; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-revokeCustomerSessions.mjs)

## api.revokeDeliveryDependency

Permanently fences one exact method, endpoint, signing key, revision, or Location geography version. Issued quotes are revoked immediately. Current selections are released the next time they are read. Stable method and callback-endpoint targets require expected_version so a concurrent publication cannot broaden the revocation.

`POST /v1/delivery-revocations`

Input: `{ "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "merchant_note"?: string; "reason": "unsafe_configuration" | "location_unavailable" | "credential_compromise" | "legal_requirement" | "other"; "target": DeliveryRevocationTargetInput; [key: string]: unknown; }; }`

Response: `{ "data": DeliveryRevocation; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-revokeDeliveryDependency.mjs)

## api.revokeDeveloperPartnerAppInstall

Revokes a partner app install and all of its environment grants.

`POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "partner_app_id": string; "partner_app_install_id": string; "Flint-Version"?: string; }`

Response: `{ "data": PartnerAppInstall; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-revokeDeveloperPartnerAppInstall.mjs)

## api.revokeDeveloperPartnerEnvironmentGrant

Revokes a single test or live environment grant for a partner app install.

`POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "partner_app_id": string; "partner_app_install_id": string; "environment_grant_id": string; "Flint-Version"?: string; }`

Response: `{ "data": PartnerAppInstall; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-revokeDeveloperPartnerEnvironmentGrant.mjs)

## api.revokeOrganizationMembership

Revokes a direct organization membership for a user.

`DELETE /v1/organizations/{organization_id}/memberships/{user_id}`

Input: `{ "organization_id": string; "user_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": RevokeOrganizationMembershipResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-revokeOrganizationMembership.mjs)

## api.rotateDeliveryRateCallbackSigningKey

Rotates the endpoint signing secret, accepts both keys for one hour, and returns the new secret once.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`

Input: `{ "delivery_rate_callback_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; }`

Response: `{ "data": DeliveryRateCallbackSigningKeyRotation; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-rotateDeliveryRateCallbackSigningKey.mjs)

## api.rotateDeveloperPartnerAppSecret

Rotates the client secret for a partner app owned by the authenticated merchant. The new client_secret is only returned once.

`POST /v1/developer/partner/apps/{partner_app_id}/rotate-secret`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "partner_app_id": string; "Flint-Version"?: string; }`

Response: `{ "data": PartnerAppSecretRotationResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-rotateDeveloperPartnerAppSecret.mjs)

## api.rotateWebhookSecret

Rotates the signing secret for a webhook endpoint and returns the new secret once.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`

Input: `{ "webhook_endpoint_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": WebhookSecret; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-rotateWebhookSecret.mjs)

## api.saveMePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/me/payment-methods`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "payment_method_type"?: "card"; [key: string]: unknown; }; }`

Response: `{ "data": SavePaymentMethodResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-saveMePaymentMethod.mjs)

## api.savePaymentMethod

Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/payment-methods`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "customer_id": string; "type"?: "card"; [key: string]: unknown; }; }`

Response: `{ "data": SavePaymentMethodResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-savePaymentMethod.mjs)

## api.sendInvoiceReminder

Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/send-reminder`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": IssueInvoiceResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-sendInvoiceReminder.mjs)

## api.setDefaultCustomerAddress

Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/customers/{customer_id}/addresses/{customer_address_id}/set-default`

Input: `{ "customer_id": string; "customer_address_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "default_for": "billing" | "shipping" | "both"; [key: string]: unknown; }; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-setDefaultCustomerAddress.mjs)

## api.setDefaultMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/me/addresses/{customer_address_id}/set-default`

Input: `{ "customer_address_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "default_for": "billing" | "shipping" | "both"; [key: string]: unknown; }; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-setDefaultMeAddress.mjs)

## api.setDefaultMePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the default payment method for the payment method's owning customer.

`POST /v1/me/payment-methods/{payment_method_id}/set-default`

Input: `{ "payment_method_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PaymentMethod; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-setDefaultMePaymentMethod.mjs)

## api.setDefaultPaymentMethod

Sets the default payment method for the payment method's owning customer.

`POST /v1/payment-methods/{payment_method_id}/set-default`

Input: `{ "payment_method_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; }`

Response: `{ "data": PaymentMethod; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-setDefaultPaymentMethod.mjs)

## api.skipSubscriptionCycle

Moves the next billing date forward by one plan interval without charging the current cycle.

`POST /v1/subscriptions/{subscription_id}/skip-cycle`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "initiated_by"?: "buyer" | "merchant" | "integration"; }; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-skipSubscriptionCycle.mjs)

## api.startOnboarding

Starts the consolidated onboarding flow by emailing a short-lived verification code and returning a temporary verification token.

`POST /v1/onboarding/start`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "email": string; "first_name": string; "last_name": string; [key: string]: unknown; }; }`

Response: `{ "data": OnboardingStartResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-startOnboarding.mjs)

## api.streamWebhookEvents

Streams canonical merchant webhook events created after the connection opens or after the supplied event ID. SSE event IDs are resumable webhook event IDs. Control records include ready, gap, withheld, and disconnect. Gap and withheld records advance the resumable cursor even when a resource payload is expired or hidden by API-key scope.

`GET /v1/webhook-events/stream`

Input: `{ "event_type"?: "balance.updated" | "balance_transaction.created" | "balance_transaction.updated" | "capability.updated" | "checkout_session.closed" | "checkout_session.completed" | "checkout_session.expired" | "checkout_session.invalidated" | "credit_note.allocation_created" | "credit_note.allocation_reversed" | "credit_note.created" | "credit_note.issued" | "credit_note.updated" | "credit_note.voided" | "customer.created" | "customer.deletion_completed" | "customer.deletion_rejected" | "customer.deletion_requested" | "customer.updated" | "delivery_location_set.activated" | "delivery_location_set.archived" | "delivery_location_set.created" | "delivery_location_set.deactivated" | "delivery_location_set.updated" | "delivery_method.activated" | "delivery_method.archived" | "delivery_method.created" | "delivery_method.deactivated" | "delivery_method.updated" | "delivery_profile.activated" | "delivery_profile.archived" | "delivery_profile.created" | "delivery_profile.deactivated" | "delivery_profile.updated" | "delivery_rate.archived" | "delivery_rate.created" | "delivery_rate.updated" | "delivery_rate_callback.activated" | "delivery_rate_callback.archived" | "delivery_rate_callback.created" | "delivery_rate_callback.deactivated" | "delivery_rate_callback.updated" | "delivery_revocation.created" | "delivery_selection.committed" | "delivery_zone.activated" | "delivery_zone.archived" | "delivery_zone.created" | "delivery_zone.deactivated" | "delivery_zone.updated" | "dispute.closed" | "dispute.created" | "dispute.lost" | "dispute.needs_response" | "dispute.prevented" | "dispute.updated" | "dispute.warning_closed" | "dispute.won" | "fraud_warning.created" | "fraud_warning.updated" | "inventory.action_required" | "inventory.count.applied" | "inventory.level.updated" | "inventory.receipt.created" | "inventory.reservation.at_risk" | "inventory.reservation.closed" | "inventory.reservation.committed" | "inventory.reservation.consumed" | "inventory.reservation.created" | "inventory.reservation.hold_expired" | "inventory.reservation.released" | "inventory.shortage.detected" | "inventory.transfer.closed" | "inventory.transfer.departed" | "inventory.transfer.lost" | "inventory.transfer.received" | "inventory.transfer.returned" | "invoice.collection_block_resolved" | "invoice.collection_blocked" | "invoice.created" | "invoice.credited" | "invoice.delivery_failed" | "invoice.delivery_succeeded" | "invoice.issue_failed" | "invoice.issued" | "invoice.late_fee_due" | "invoice.manual_payment_recorded" | "invoice.manual_payment_reversed" | "invoice.marked_uncollectible" | "invoice.overdue" | "invoice.paid" | "invoice.partially_paid" | "invoice.partially_refunded" | "invoice.payment_attempt_canceled" | "invoice.payment_attempt_expired" | "invoice.payment_failed" | "invoice.payment_processing" | "invoice.refunded" | "invoice.reminder_due" | "invoice.sent" | "invoice.updated" | "invoice.voided" | "merchant.readiness.updated" | "merchant_billing_balance.updated" | "merchant_subscription_invoice.issued" | "merchant_subscription_invoice.updated" | "order.closed" | "order.created" | "order.fulfillment.completed" | "order.fulfillment.created" | "order.fulfillment.event.created" | "order.fulfillment.package.created" | "order.fulfillment.package.updated" | "order.fulfillment.shipment.created" | "order.fulfillment.shipment.updated" | "order.fulfillment.status_changed" | "order.fulfillment.updated" | "order.inventory_action_required" | "order.inventory_exception.created" | "order.inventory_exception.resolved" | "order.paid" | "order.partially_paid" | "order.payment_authorization_canceled" | "order.payment_authorization_expired" | "order.payment_authorized" | "order.payment_captured" | "order.refunded" | "order.updated" | "payment_intent.canceled" | "payment_intent.fulfillment_hold.updated" | "payment_intent.payment_failed" | "payment_intent.processing" | "payment_intent.requires_action" | "payment_intent.requires_capture" | "payment_intent.succeeded" | "payment_method.failed" | "payment_method.removed" | "payment_method.saved" | "payout.canceled" | "payout.created" | "payout.failed" | "payout.paid" | "payout.reversed" | "payout.updated" | "payout_destination.created" | "payout_destination.deleted" | "payout_destination.disabled" | "payout_destination.updated" | "payout_settings.updated" | "refund.created" | "refund.failed" | "refund.updated" | "report.failed" | "report.succeeded" | "return.canceled" | "return.completed" | "return.created" | "return.decision_recorded" | "return.reopened" | "return.updated" | "return_disposition.created" | "return_disposition.updated" | "return_inspection.acceptance_decided" | "return_inspection.created" | "return_inspection.superseded" | "return_receipt.created" | "return_receipt.superseded" | "return_receipt.verified" | "return_resolution.created" | "return_resolution.updated" | "review.closed" | "review.opened" | "subscription.activated" | "subscription.canceled" | "subscription.created" | "subscription.dunning_exhausted" | "subscription.past_due" | "subscription.paused" | "subscription.payment_failed" | "subscription.payment_succeeded" | "subscription.renewal_upcoming" | "subscription.resumed" | "subscription.trial_ending" | "subscription.updated"; "after_event_id"?: string; "Last-Event-ID"?: string; "Flint-Version"?: string; }`

Response: `EventStream`

[Example](examples/api-streamWebhookEvents.mjs)

## api.transferOrganizationOwnership

Transfers the organization owner role to another user.

`POST /v1/organizations/{organization_id}/transfer-ownership`

Input: `{ "organization_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "new_owner_user_id": string; [key: string]: unknown; }; }`

Response: `{ "data": TransferOrganizationOwnershipResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-transferOrganizationOwnership.mjs)

## api.transitionFulfillment

Performs one action from the fulfillment's supported_actions. Each action accepts only its action-specific fields. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/fulfillments/{fulfillment_id}/transitions`

Input: `{ "fulfillment_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": (({ "action": "complete"; "buyer_notification_behavior"?: "send" | "suppress"; "completed_at"?: string; "expected_version"?: string; "reason"?: string; }) | ({ "action": "cancel"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "reason"?: string; }) | ({ "action": "hold"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason": "payment_review" | "inventory_issue" | "address_issue" | "customer_request" | "provider_issue" | "scheduling_issue" | "fraud_review" | "other"; }) | ({ "action": "start"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_ready"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "fail"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; "release_quantity": boolean; }) | ({ "action": "schedule"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; "scheduled_end_at": string; "scheduled_start_at": string; }) | ({ "action": "accept"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_preparing"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_picked"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_packed"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "dispatch"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_no_show"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other"; })); }`

Response: `{ "data": FulfillmentCommandResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-transitionFulfillment.mjs)

## api.transitionInventoryTransfer

Run one action from supported_actions using cumulative line targets. Send expected_version to reject the request if the transfer changed after you read it. The response includes the updated transfer and its inventory effects.

`POST /v1/inventory-transfers/{inventory_transfer_id}/transitions`

Input: `{ "Idempotency-Key": string; "inventory_transfer_id": string; "Flint-Version"?: string; "body": (({ "action": "depart"; "expected_version"?: string; "lines": Array<{ "inventory_transfer_line_id": string; "target_departed_quantity": string; }>; "provenance": InventoryTransferProvenanceInputInput; }) | ({ "action": "receive"; "expected_version"?: string; "lines": Array<({ "inventory_transfer_line_id": string; "target_received_damaged_quantity"?: string; "target_received_quality_control_quantity"?: string; "target_received_quantity": string; "target_received_quarantined_quantity"?: string; "target_received_sellable_quantity"?: string; }) & (((({ "target_received_sellable_quantity"?: never }) & ({ "target_received_quality_control_quantity"?: never }) & ({ "target_received_damaged_quantity"?: never }) & ({ "target_received_quarantined_quantity"?: never }))) | ({ "target_received_sellable_quantity": unknown; "target_received_quality_control_quantity": unknown; "target_received_damaged_quantity": unknown; "target_received_quarantined_quantity": unknown; [key: string]: unknown; }))>; "provenance": InventoryTransferProvenanceInputInput; }) | ({ "action": "return_to_origin"; "expected_version"?: string; "lines": Array<{ "inventory_transfer_line_id": string; "target_returned_quantity": string; }>; "provenance": InventoryTransferProvenanceInputInput; }) | ({ "action": "report_loss"; "expected_version"?: string; "lines": Array<{ "inventory_transfer_line_id": string; "target_lost_quantity": string; }>; "provenance": InventoryTransferProvenanceInputInput; }) | ({ "action": "cancel"; "expected_version"?: string; "lines": Array<{ "inventory_transfer_line_id": string; "target_canceled_quantity": string; }>; "provenance": InventoryTransferProvenanceInputInput; })); }`

Response: `{ "data": InventoryTransferResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-transitionInventoryTransfer.mjs)

## api.transitionPackage

Performs one action from the package's supported_actions. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/packages/{package_id}/transitions`

Input: `{ "package_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": (({ "action": "mark_delivered"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_delivery_attempted"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_exception"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_in_transit"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_out_for_delivery"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_packed"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_returned"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; }) | ({ "action": "mark_shipped"; "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; })); }`

Response: `{ "data": PackageStatusUpdateResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-transitionPackage.mjs)

## api.updateAPIKey

Updates an active external API key's name or complete scope list. API-key-authenticated callers may delegate only scopes already granted to the calling key.

`PATCH /v1/api-keys/{api_key_id}`

Input: `{ "api_key_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expires_at"?: string | null; "name"?: string; "scopes"?: Array<"accounts.api_keys.read" | "accounts.api_keys.write" | "accounts.devices.read" | "accounts.devices.write" | "accounts.organizations.read" | "accounts.organizations.write" | "analytics.read" | "capabilities.read" | "checkouts.checkout_sessions.read" | "checkouts.checkout_sessions.write" | "checkouts.payment_links.read" | "checkouts.payment_links.write" | "commerce.bundles.read" | "commerce.bundles.write" | "commerce.catalog.read" | "commerce.catalog.write" | "commerce.credit_notes.read" | "commerce.credit_notes.write" | "commerce.delivery.read" | "commerce.delivery.write" | "commerce.inventory.read" | "commerce.inventory.write" | "commerce.inventory_locations.write" | "commerce.inventory_policies.write" | "commerce.inventory_reservations.write" | "commerce.invoices.read" | "commerce.invoices.write" | "commerce.orders.read" | "commerce.orders.write" | "commerce.products.read" | "commerce.products.write" | "commerce.promotions.read" | "commerce.promotions.write" | "commerce.refunds.read" | "commerce.refunds.tax_overrides.write" | "commerce.refunds.write" | "commerce.return_policies.write" | "commerce.return_reasons.write" | "commerce.returns.decisions.write" | "commerce.returns.operations.write" | "commerce.returns.process.write" | "commerce.returns.read" | "commerce.returns.resolutions.write" | "commerce.returns.write" | "commerce.subscription_plans.read" | "commerce.subscription_plans.write" | "commerce.subscriptions.read" | "commerce.subscriptions.write" | "customers.read" | "customers.sessions.write" | "customers.write" | "developer.feedback_reports.read" | "developer.feedback_reports.write" | "developer.partner_apps.read" | "developer.partner_apps.write" | "developer.request_logs.self.detail.read" | "developer.request_logs.self.read" | "developer.resource_timelines.read" | "developer.sandboxes.read" | "developer.sandboxes.write" | "merchant_billing.read" | "merchants.account_sessions.write" | "merchants.locations.read" | "merchants.locations.write" | "merchants.onboarding.read" | "merchants.onboarding.write" | "merchants.profile.read" | "merchants.profile.write" | "money_movement.balance_transactions.read" | "money_movement.balances.read" | "money_movement.payout_settings.read" | "money_movement.payout_settings.write" | "money_movement.payouts.read" | "money_movement.payouts.write" | "payments.disputes.read" | "payments.payment_intents.read" | "payments.payment_intents.write" | "payments.payment_method_domains.read" | "payments.payment_method_domains.write" | "payments.payment_methods.read" | "payments.payment_methods.write" | "payments.payment_options.read" | "reports.read" | "reports.write" | "risk.controls.write" | "risk.read" | "risk.reviews.write" | "settings.read" | "settings.write" | "webhooks.read" | "webhooks.write">; [key: string]: unknown; }; }`

Response: `{ "data": APIKey; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateAPIKey.mjs)

## api.updateBundle

Update bundle.

`PATCH /v1/bundles/{bundle_id}`

Input: `{ "bundle_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "barcode"?: string; "categories"?: Array<string>; "components"?: Array<UpdateBundleComponentInputInput>; "description"?: string; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money"?: MoneyValueInput; [key: string]: unknown; }) & (((({ "categories"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "components"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "images"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": Bundle; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateBundle.mjs)

## api.updateCategory

Update category.

`PATCH /v1/categories/{category_id}`

Input: `{ "category_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "description"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Category; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateCategory.mjs)

## api.updateCheckoutSession

Updates mutable checkout session fields. Currently only metadata is mutable.

`PATCH /v1/checkout-sessions/{checkout_session_id}`

Input: `{ "checkout_session_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; [key: string]: unknown; }; }`

Response: `{ "data": CheckoutSession; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateCheckoutSession.mjs)

## api.updateCreditNote

Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a null memo clears it, and credit_note_lines requires expected_version. Issued and void credit notes are frozen.

`PATCH /v1/credit-notes/{credit_note_id}`

Input: `{ "credit_note_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "credit_note_lines"?: Array<CreditNoteLineRequestInput>; "expected_version"?: string; "external_reference_id"?: string; "memo"?: string | null; "reason"?: "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other"; [key: string]: unknown; }) & (((({ "credit_note_lines"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": CreditNote; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateCreditNote.mjs)

## api.updateCustomer

Applies a sparse update to a customer. Writing billing_address or shipping_address clears the corresponding saved-address default, so that field remains effective until another saved default is selected.

`PATCH /v1/customers/{customer_id}`

Input: `{ "customer_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "billing_address"?: PostalAddressInput; "default_invoice_payment_term_id"?: string; "external_reference_id"?: string; "group_id"?: string; "internal_note"?: string; "is_verified"?: boolean; "metadata"?: Record<string, string | null> | null; "name"?: string; "phone"?: string; "shipping_address"?: PostalAddressInput; "tax_exempt"?: boolean; [key: string]: unknown; }; }`

Response: `{ "data": Customer; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateCustomer.mjs)

## api.updateCustomerAddress

Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}`

Input: `{ "customer_id": string; "customer_address_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "address"?: PostalAddressInput; "label"?: string; "phone"?: string; "recipient_name"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateCustomerAddress.mjs)

## api.updateDeliveryLocationSet

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-location-sets/{delivery_location_set_id}`

Input: `{ "delivery_location_set_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "configuration"?: DeliveryLocationSetConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (({ "name": unknown; [key: string]: unknown; }) | ({ "external_reference_id": unknown; [key: string]: unknown; }) | ({ "configuration": unknown; [key: string]: unknown; }) | ({ "metadata": unknown; [key: string]: unknown; })); }`

Response: `{ "data": DeliveryLocationSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateDeliveryLocationSet.mjs)

## api.updateDeliveryMethod

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-methods/{delivery_method_id}`

Input: `{ "delivery_method_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "configuration"?: DeliveryMethodConfigurationRequestInput; "description"?: string; "display_position"?: number; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "recommendation_priority"?: number | null; "status"?: "inactive" | "active"; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "name"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "description"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "display_position"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "recommendation_priority"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (({ "name": unknown; [key: string]: unknown; }) | ({ "external_reference_id": unknown; [key: string]: unknown; }) | ({ "configuration": unknown; [key: string]: unknown; }) | ({ "metadata": unknown; [key: string]: unknown; }) | ({ "description": unknown; [key: string]: unknown; }) | ({ "display_position": unknown; [key: string]: unknown; }) | ({ "recommendation_priority": unknown; [key: string]: unknown; }) | ({ "status": unknown; [key: string]: unknown; })); }`

Response: `{ "data": DeliveryMethod; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateDeliveryMethod.mjs)

## api.updateDeliveryProfile

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-profiles/{delivery_profile_id}`

Input: `{ "delivery_profile_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "configuration"?: DeliveryProfileConfigurationRequestInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (({ "name": unknown; [key: string]: unknown; }) | ({ "external_reference_id": unknown; [key: string]: unknown; }) | ({ "configuration": unknown; [key: string]: unknown; }) | ({ "metadata": unknown; [key: string]: unknown; })); }`

Response: `{ "data": DeliveryProfile; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateDeliveryProfile.mjs)

## api.updateDeliveryRateCallback

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Input: `{ "delivery_rate_callback_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "configuration"?: DeliveryRateCallbackConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "name"?: string; "status"?: "inactive" | "active"; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (({ "name": unknown; [key: string]: unknown; }) | ({ "external_reference_id": unknown; [key: string]: unknown; }) | ({ "configuration": unknown; [key: string]: unknown; }) | ({ "status": unknown; [key: string]: unknown; })); }`

Response: `{ "data": DeliveryRateCallback; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateDeliveryRateCallback.mjs)

## api.updateDeliveryZone

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-zones/{delivery_zone_id}`

Input: `{ "delivery_zone_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "configuration"?: ({ "all"?: Array<DeliveryZoneConfigurationInput>; "any"?: Array<DeliveryZoneConfigurationInput>; "country"?: DeliveryStateConditionInput; "not"?: DeliveryZoneConfigurationInput; "postal_code"?: DeliveryPostalCodeConditionInput; "radius"?: DeliveryRadiusConditionInput; "state"?: DeliveryStateConditionInput; }) & (({ "all": unknown; [key: string]: unknown; }) | ({ "any": unknown; [key: string]: unknown; }) | ({ "not": unknown; [key: string]: unknown; }) | ({ "country": unknown; [key: string]: unknown; }) | ({ "state": unknown; [key: string]: unknown; }) | ({ "postal_code": unknown; [key: string]: unknown; }) | ({ "radius": unknown; [key: string]: unknown; })); "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (({ "name": unknown; [key: string]: unknown; }) | ({ "external_reference_id": unknown; [key: string]: unknown; }) | ({ "configuration": unknown; [key: string]: unknown; }) | ({ "metadata": unknown; [key: string]: unknown; })); }`

Response: `{ "data": DeliveryZone; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateDeliveryZone.mjs)

## api.updateDeveloperPartnerApp

Updates the API version for a partner app owned by the authenticated merchant. Any supported version can be selected.

`PATCH /v1/developer/partner/apps/{partner_app_id}`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "partner_app_id": string; "Flint-Version"?: string; "body": { "api_version"?: string; "expected_api_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": PartnerApp; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateDeveloperPartnerApp.mjs)

## api.updateDevice

Applies a sparse update to a device. Send location_id=null to unassign a location.

`PATCH /v1/devices/{device_id}`

Input: `{ "device_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "location_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Device; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateDevice.mjs)

## api.updateFulfillment

Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item allocation is set when the fulfillment is created. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/fulfillments/{fulfillment_id}`

Input: `{ "fulfillment_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "completed_at"?: string | null; "customer_id"?: string | null; "device_id"?: string | null; "digital_details"?: (({ "delivered_at"?: string | null; "delivery_url"?: string | null; [key: string]: unknown; }) | (null)); "expected_version"?: string; "external_reference_id"?: string; "local_delivery_details"?: (({ "carrier"?: string | null; "courier_pickup_at"?: string | null; "courier_pickup_window_duration_seconds"?: string | null; "courier_provider_name"?: string | null; "courier_support_phone_number"?: string | null; "delivered_at"?: string | null; "dispatched_at"?: string | null; "dropoff_notes"?: string | null; "expires_at"?: string | null; "external_delivery_id"?: string | null; "instructions"?: string | null; "no_contact"?: boolean | null; "prep_time_duration_seconds"?: string | null; "ready_at"?: string | null; "service_area_id"?: string | null; "tracking_url"?: string | null; "window_end_at"?: string | null; "window_start_at"?: string | null; [key: string]: unknown; }) | (null)); "location_id"?: string | null; "metadata"?: Record<string, string | null> | null; "pickup_details"?: (({ "address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; [key: string]: unknown; }) | (null)); "curbside_instructions"?: string | null; "customer_arrived_at"?: string | null; "expires_at"?: string | null; "instructions"?: string | null; "location_name"?: string | null; "picked_up_at"?: string | null; "pickup_window_duration_seconds"?: string | null; "prep_time_duration_seconds"?: string | null; "ready_at"?: string | null; "vehicle_description"?: string | null; "window_end_at"?: string | null; "window_start_at"?: string | null; [key: string]: unknown; }) | (null)); "recipient"?: (({ "address"?: PostalAddressInput; "email"?: string; "instructions"?: string; "name"?: string; "phone"?: string; [key: string]: unknown; }) | (null)); "service_details"?: (({ "completed_at"?: string | null; "notes"?: string | null; "scheduled_end_at"?: string | null; "scheduled_start_at"?: string | null; [key: string]: unknown; }) | (null)); [key: string]: unknown; }) & (((({ "pickup_details"?: never }) & ({ "local_delivery_details"?: never }) & ({ "digital_details"?: never }) & ({ "service_details"?: never }))) | ({ "pickup_details": unknown; [key: string]: unknown; }) | ({ "local_delivery_details": unknown; [key: string]: unknown; }) | ({ "digital_details": unknown; [key: string]: unknown; }) | ({ "service_details": unknown; [key: string]: unknown; })); }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateFulfillment.mjs)

## api.updateInventoryAllocationPolicy

Update policy fields, availability, or atomically replace its routing configuration. Send expected_version to reject concurrent changes.

`PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Input: `{ "Idempotency-Key"?: string; "inventory_allocation_policy_id": string; "Flint-Version"?: string; "body": ({ "configuration"?: InventoryAllocationPolicyConfigurationInput; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }) & (((({ "configuration"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": InventoryAllocationPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateInventoryAllocationPolicy.mjs)

## api.updateInventoryCount

Replace a count's observations atomically. Send expected_version to reject concurrent changes.

`PATCH /v1/inventory-counts/{inventory_count_id}`

Input: `{ "Idempotency-Key": string; "inventory_count_id": string; "Flint-Version"?: string; "body": ({ "expected_version"?: string; "external_actor_id"?: string; "observations": Array<InventoryCountObservationInputInput>; "occurred_at"?: string; "source_system"?: InventorySourceSystemRequestInput; }) & (((({ "observations"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": InventoryCount; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateInventoryCount.mjs)

## api.updateInventoryItem

Update an inventory item. accepts status active or inactive. Send sku or barcode as null to clear.

`PATCH /v1/inventory-items/{inventory_item_id}`

Input: `{ "Idempotency-Key"?: string; "inventory_item_id": string; "Flint-Version"?: string; "body": { "barcode"?: string | null; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "sku"?: string | null; "status"?: "active" | "inactive"; [key: string]: unknown; }; }`

Response: `{ "data": InventoryItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateInventoryItem.mjs)

## api.updateInventoryLevel

Set one inventory level's safety_stock_quantity. returns the updated level with durable command evidence.

`PATCH /v1/inventory-levels/{inventory_level_id}`

Input: `{ "Idempotency-Key": string; "inventory_level_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; "safety_stock_quantity": string; }; }`

Response: `{ "data": InventoryLevelUpdateResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateInventoryLevel.mjs)

## api.updateInventoryTransfer

Update an open transfer's planning details.

`PATCH /v1/inventory-transfers/{inventory_transfer_id}`

Input: `{ "Idempotency-Key"?: string; "inventory_transfer_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; "external_reference"?: string | null; "line_changes"?: Array<(({ "inventory_item_id": string; "operation": "add"; "physical_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined"; "requested_quantity": string; }) | ({ "inventory_transfer_line_id": string; "operation": "update"; "requested_quantity": string; }) | ({ "inventory_transfer_line_id": string; "operation": "remove"; }))>; "note"?: string | null; }; }`

Response: `{ "data": InventoryTransfer; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateInventoryTransfer.mjs)

## api.updateInvoice

Updates mutable fields on a draft invoice. Sent invoices are immutable except for delivery-related actions.

`PATCH /v1/invoices/{invoice_id}`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "cc_emails"?: Array<string>; "collection"?: InvoiceCollectionInputInput; "expected_version"?: string; "external_reference_id"?: string; "footer"?: string; "memo"?: string; "metadata"?: Record<string, string | null> | null; "payment_due"?: InvoicePaymentDueInputInput; "po_number"?: string; "recipient_email"?: string; "reference"?: string; "remit_to_address"?: PostalAddressInput; "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>; "scheduled_send_at"?: string; "service_at"?: string; [key: string]: unknown; }) & (((({ "schedule_entries"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateInvoice.mjs)

## api.updateInvoicePaymentTerm

Update invoice payment term for the authenticated merchant.

`PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`

Input: `{ "invoice_payment_term_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "calculation"?: InvoicePaymentTermCalculationInput; "expected_version"?: number; "external_reference_id"?: string; "late_fee_policy"?: ((({ "amount_money"?: MoneyValueInput; "grace_period_days": number; "percent"?: string; "type": "fixed" | "percentage"; }) & ((({ "type": "fixed"; "grace_period_days": unknown; "amount_money": unknown; [key: string]: unknown; }) & ({ "percent"?: never })) | (({ "type": "percentage"; "grace_period_days": unknown; "percent": unknown; [key: string]: unknown; }) & ({ "amount_money"?: never })))) | (null)); "name"?: string; }; }`

Response: `{ "data": InvoicePaymentTerm; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateInvoicePaymentTerm.mjs)

## api.updateLocation

Update a Location's profile or availability. Accepts status active or inactive.

`PATCH /v1/locations/{location_id}`

Input: `{ "Idempotency-Key"?: string; "location_id": string; "Flint-Version"?: string; "body": { "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; [key: string]: unknown; }; }`

Response: `{ "data": Location; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateLocation.mjs)

## api.updateLocationInventory

Enable or disable inventory allocation at a Location. Omit expected_inventory_revision when enabling inventory for the first time; otherwise send the current inventory_revision.

`PATCH /v1/locations/{location_id}/inventory`

Input: `{ "Idempotency-Key"?: string; "location_id": string; "Flint-Version"?: string; "body": { "allocation_status": "active" | "inactive"; "expected_inventory_revision"?: string; }; }`

Response: `{ "data": LocationInventory; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateLocationInventory.mjs)

## api.updateMe

Uses the customer identity fixed by the customer session. Updates the current buyer's name or phone. Manage billing and shipping addresses through /v1/me/addresses.

`PATCH /v1/me`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "name"?: string; "phone"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Customer; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateMe.mjs)

## api.updateMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/me/addresses/{customer_address_id}`

Input: `{ "customer_address_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "address"?: PostalAddressInput; "label"?: string; "phone"?: string; "recipient_name"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CustomerAddress; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateMeAddress.mjs)

## api.updateMerchant

Applies a sparse update to the authenticated merchant's public business profile fields.

`PATCH /v1/merchants/{merchant_id}`

Input: `{ "merchant_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "address"?: PostalAddressInput; "api_version"?: string; "email"?: string; "expected_version"?: string; "logo"?: ImageRequestInput; "metadata"?: Record<string, string | null> | null; "organization_id"?: string; "phone"?: string; "support_email"?: string; "support_phone"?: string; "support_url"?: string; "website_url"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Merchant; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateMerchant.mjs)

## api.updateModifierGroup

Update modifier group.

`PATCH /v1/modifier-groups/{modifier_group_id}`

Input: `{ "modifier_group_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "allow_quantities"?: boolean; "expected_version"?: string; "external_reference_id"?: string; "max_quantity"?: string; "max_selected"?: number; "max_total_quantity"?: string; "metadata"?: Record<string, string | null> | null; "min_quantity"?: string; "min_selected"?: number; "modifiers"?: Array<ModifierRequestInput>; "name"?: string; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; "status"?: "active" | "inactive"; "text"?: TextModifierConfigRequestInput; [key: string]: unknown; }) & ((({ "modifiers"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; })); }`

Response: `{ "data": ModifierGroup; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateModifierGroup.mjs)

## api.updateModifierSet

Update modifier set.

`PATCH /v1/modifier-sets/{modifier_set_id}`

Input: `{ "modifier_set_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "expected_version"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "modifier_groups"?: Array<ModifierSetGroupRequestInput>; "name"?: string; "status"?: "active" | "inactive"; [key: string]: unknown; }) & ((({ "modifier_groups"?: never })) | ({ "modifier_groups": unknown; "expected_version": unknown; [key: string]: unknown; })); }`

Response: `{ "data": ModifierSet; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateModifierSet.mjs)

## api.updateOrder

Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the delivery destination, and the requested tip. Send requested_tip: null to clear the current requested tip.

`PATCH /v1/orders/{order_id}`

Input: `{ "order_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": { "buyer_note"?: string; "customer_id"?: string; "delivery_destination"?: (({ "address": OrderDeliveryDestinationAddressRequestInput; "recipient"?: OrderDeliveryDestinationRecipientRequestInput; }) | (null)); "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceInputInput; "metadata"?: Record<string, string | null> | null; "requested_tip"?: ((({ "amount_money"?: ({ "amount"?: string; [key: string]: unknown; }) & ({ "amount": string; "currency": string; }); "description"?: string; "metadata"?: Record<string, string>; "name"?: string; "percent"?: string; }) & ((({ "amount_money": unknown; [key: string]: unknown; }) & (({ "percent"?: never }))) | (({ "percent": unknown; [key: string]: unknown; }) & (({ "amount_money"?: never }))))) | (null)); "tax"?: OrderTaxRequestInput; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateOrder.mjs)

## api.updateOrderCharge

Updates a single service charge, fee, or surcharge on an order.

`PATCH /v1/orders/{order_id}/charges/{order_charge_id}`

Input: `{ "order_id": string; "order_charge_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "amount_money"?: MoneyValueInput; "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount"; "description"?: string; "fulfillment_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "percent"?: string; "tax"?: OrderCalculatedChargeTaxInput; "type"?: "service_fee" | "delivery_fee" | "shipping_fee" | "handling_fee" | "packaging_fee" | "small_order_fee" | "service_area_fee" | "setup_fee" | "installation_fee" | "cleaning_fee" | "booking_fee" | "reservation_fee" | "ticket_fee" | "fulfillment_fee" | "restocking_fee" | "rush_fee" | "other"; [key: string]: unknown; }; }`

Response: `{ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateOrderCharge.mjs)

## api.updateOrderLineItem

Updates a single line item on an order.

`PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`

Input: `{ "order_id": string; "order_line_item_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "X-Checkout-Session-ID"?: string; "X-Checkout-Session-Secret"?: string; "Flint-Version"?: string; "body": ({ "description"?: string; "expected_version"?: string; "metadata"?: Record<string, string | null> | null; "modifiers"?: Array<OrderLineItemModifierRequestInput>; "name"?: string; "quantity"?: string; "tax"?: OrderCalculatedLineItemTaxInput; "unit_price_money"?: MoneyValueInput; [key: string]: unknown; }) & ((({ "modifiers"?: never })) | ({ "modifiers": unknown; "expected_version": unknown; [key: string]: unknown; })); }`

Response: `(({ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }) | ({ "data": CheckoutSessionLineItemModifierUpdate; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }) | ({ [key: string]: unknown }))`

[Example](examples/api-updateOrderLineItem.mjs)

## api.updateOrganization

Applies a sparse update to an accessible organization.

`PATCH /v1/organizations/{organization_id}`

Input: `{ "organization_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "metadata"?: Record<string, string | null> | null; "name"?: string; "parent_organization_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Organization; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateOrganization.mjs)

## api.updatePackage

Updates non-lifecycle package fields such as carrier, tracking, label access, measurements, metadata, and caller-owned external references. Package status cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/packages/{package_id}`

Input: `{ "package_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "buyer_notification_behavior"?: "send" | "suppress"; "carrier"?: string | null; "dimensions"?: (({ "height": string; "length": string; "unit": string; "width": string; [key: string]: unknown; }) | (null)); "expected_version"?: string; "external_reference_id"?: string | null; "external_system"?: string | null; "label_url"?: string | null; "metadata"?: Record<string, string | null> | null; "service_code"?: string | null; "status_reason"?: string | null; "tracking_number"?: string | null; "tracking_url"?: string | null; "weight"?: (({ "unit": "gram" | "kilogram" | "ounce" | "pound"; "value": string; [key: string]: unknown; }) | (null)); [key: string]: unknown; }; }`

Response: `{ "data": UpdatePackageResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePackage.mjs)

## api.updatePackageItem

Updates a package item quantity or metadata while the package is still mutable.

`PATCH /v1/packages/{package_id}/items/{package_item_id}`

Input: `{ "package_id": string; "package_item_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "metadata"?: Record<string, string | null> | null; "quantity"?: string; [key: string]: unknown; }; }`

Response: `{ "data": PackageItem; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePackageItem.mjs)

## api.updatePaymentIntent

Applies a sparse update to a payment intent before it reaches a terminal state.

`PATCH /v1/payment-intents/{payment_intent_id}`

Input: `{ "payment_intent_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "amount_money"?: MoneyValueInput; "customer_id"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "receipt_email"?: string; "tip_money"?: MoneyValueInput; [key: string]: unknown; }; }`

Response: `{ "data": PaymentIntent; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePaymentIntent.mjs)

## api.updatePaymentLink

Updates a payment link. To replace line items, custom fields, or delivery methods, send the complete array with `expected_version`.

`PATCH /v1/payment-links/{payment_link_id}`

Input: `{ "payment_link_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "custom_fields"?: Array<PaymentLinkCustomFieldPatchInputInput>; "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: PaymentLinkCustomerConfigInput; "delivery_method_ids"?: Array<string>; "description"?: string; "donation_max_amount_money"?: (({ "amount": string; "currency": string; }) | (null)); "donation_min_amount_money"?: (({ "amount": string; "currency": string; }) | (null)); "donation_suggested_amount_money_options"?: Array<MoneyValueInput>; "event_config"?: PaymentLinkEventConfigInput; "expected_version"?: string; "expiration"?: CheckoutExpirationConfigInput; "external_reference_id"?: string; "image"?: (({ "alt"?: string; "external_reference_id"?: string; "source_url": string; [key: string]: unknown; }) | (null)); "inactive_message"?: string; "inventory_routing_source"?: InventoryRoutingSourceRequestInput; "legal"?: LegalSettingsInput; "line_items"?: Array<PaymentLinkLineItemPatchInputInput>; "max_completions"?: number; "metadata"?: Record<string, string | null> | null; "name"?: string; "payments"?: CheckoutPaymentConfigInput; "promotion_config"?: CheckoutPromotionConfigInput; "redirects"?: CheckoutRedirectsConfigInput; "status"?: "active" | "inactive"; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; [key: string]: unknown; }) & (((({ "line_items"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "custom_fields"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "delivery_method_ids"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": PaymentLink; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePaymentLink.mjs)

## api.updatePaymentMethodDomain

Sets the domain registration status. Activating the domain also validates Apple Pay and Google Pay readiness.

`PATCH /v1/payment-method-domains/{payment_method_domain_id}`

Input: `{ "payment_method_domain_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "status": "active" | "inactive"; [key: string]: unknown; }; }`

Response: `{ "data": PaymentMethodDomain; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePaymentMethodDomain.mjs)

## api.updatePayoutDestination

Updates mutable metadata and settings for a payout destination. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings/destinations/{payout_destination_id}`

Input: `{ "payout_destination_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "metadata"?: Record<string, string | null> | null; [key: string]: unknown; }; }`

Response: `{ "data": PayoutDestination; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePayoutDestination.mjs)

## api.updatePayoutSettings

Updates mutable payout settings for the authenticated merchant. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "default_payout_destinations"?: Record<string, string>; "delay_days_override"?: number | null; "interval"?: "manual" | "daily" | "weekly" | "monthly"; "minimum_balance_by_currency"?: Record<string, (({ "amount": string; "currency": string; }) | (null))>; "monthly_payout_days"?: Array<number>; "statement_descriptor"?: string; "weekly_payout_days"?: Array<string>; [key: string]: unknown; }; }`

Response: `{ "data": PayoutSettings; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePayoutSettings.mjs)

## api.updateProduct

Applies a sparse update to product-parent fields. When categories is present, it replaces the full category list; send an empty array to clear categories. Sellable price, SKU, and inventory live on variants.

`PATCH /v1/products/{product_id}`

Input: `{ "product_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "categories"?: Array<string>; "default_variant_id"?: string; "description"?: string; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "options"?: Array<UpdateProductOptionInputInput>; "product_type"?: "physical" | "service" | "fee" | "digital"; "status"?: "active" | "inactive"; [key: string]: unknown; }) & (((({ "categories"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "options"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "images"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": Product; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateProduct.mjs)

## api.updateProductVariant

Update product variant.

`PATCH /v1/products/{product_id}/variants/{variant_id}`

Input: `{ "product_id": string; "variant_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "barcode"?: string; "delivery_profile_id"?: string; "expected_version"?: string; "images"?: Array<ImageRequestInput>; "inventory_item"?: InventoryItemCreateInputInput; "inventory_item_id"?: string | null; "line_item_tax_category"?: "general" | "physical_goods" | "digital_goods" | "software" | "saas" | "services" | "professional_services" | "food" | "prepared_food" | "clothing" | "medical_goods" | "admission"; "metadata"?: Record<string, string | null> | null; "modifier_set_id"?: string | null; "name"?: string; "position"?: number; "sku"?: string; "status"?: "active" | "inactive"; "taxable"?: boolean; "unit_price_money"?: MoneyValueInput; [key: string]: unknown; }) & (((({ "images"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": ProductVariant; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateProductVariant.mjs)

## api.updatePromotion

Applies a sparse update to promotion fields.

`PATCH /v1/promotions/{promotion_id}`

Input: `{ "promotion_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "application_method"?: (({ "allocation"?: "each" | "across"; "amount_off_money"?: MoneyValueInput; "applies_to"?: never; "buy_min_quantity"?: number; "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax"; "currency_options"?: Record<string, MoneyValueInput>; "discounted_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "get_percent_off"?: string; "get_quantity"?: number; "max_applications_per_order"?: number; "max_discounted_quantity"?: number; "percent_off"?: string; "qualifying_item_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "recurrence"?: { "period_count"?: number; "type": "once"; [key: string]: unknown; }; "reward_selection"?: "cheapest" | "highest_price" | "first_added"; "type"?: "percent_off" | "amount_off" | "buy_x_get_y"; }) & (({ "type"?: "percent_off"; "percent_off": unknown; [key: string]: unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; [key: string]: unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; [key: string]: unknown; }))) & (({ "type"?: "percent_off"; "percent_off": unknown; [key: string]: unknown; }) | ({ "type"?: "amount_off"; "amount_off_money": unknown; [key: string]: unknown; }) | ({ "type"?: "buy_x_get_y"; "qualifying_item_rules": unknown; "buy_min_quantity": unknown; "discounted_item_rules": unknown; "get_quantity": unknown; "get_percent_off": unknown; [key: string]: unknown; })); [key: string]: unknown; }) & ({ "application_method"?: PromotionApplicationMethodInput; "combines_with"?: PromotionCombinesWithInput; "description"?: string; "discount_class"?: "order" | "line_item" | "service_charge"; "display_name"?: string; "eligibility_rules"?: ((Array<PromotionRuleInput>) | ({ "all": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; }) | ({ "any": Array<(({ "attribute": string; "currency_options"?: Record<string, MoneyValueInput>; "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined"; "values"?: Array<PromotionRuleValueInput>; }) | (PromotionRuleGroupInput))>; })); "exclusivity"?: PromotionExclusivityInput; "external_reference_id"?: string; "max_uses"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "schedule"?: PromotionScheduleInput; "stacking_mode"?: "continue" | "stop_after"; "status"?: "active" | "inactive"; [key: string]: unknown; }); }`

Response: `{ "data": Promotion; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePromotion.mjs)

## api.updatePromotionCode

Applies a sparse update to a promotion code.

`PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Input: `{ "promotion_id": string; "promotion_code_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "expires_at"?: string; "max_uses"?: string; "metadata"?: Record<string, string | null> | null; "status"?: "active" | "inactive"; [key: string]: unknown; }; }`

Response: `{ "data": PromotionCode; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updatePromotionCode.mjs)

## api.updateRefund

Updates refund metadata.

`PATCH /v1/refunds/{refund_id}`

Input: `{ "refund_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "metadata"?: Record<string, string | null> | null; [key: string]: unknown; }; }`

Response: `{ "data": Refund; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateRefund.mjs)

## api.updateReturn

Update caller-owned fields on a Return. Only external_reference_id and metadata are writable; every other change goes through a decision, operation, or resolution command.

`PATCH /v1/returns/{return_id}`

Input: `{ "return_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateReturn.mjs)

## api.updateReturnLineItem

Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type. The response is the updated Return.

`PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}`

Input: `{ "return_id": string; "return_line_item_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "buyer_note"?: string | null; "expected_version"?: string; "requested_quantity"?: string; "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null; "return_reason_id"?: string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateReturnLineItem.mjs)

## api.updateReturnPolicy

Update policy identity fields or set status to active or inactive. Rules live on revisions, so changing a window, fee, or scope means publishing a new revision.

`PATCH /v1/return-policies/{return_policy_id}`

Input: `{ "return_policy_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "status"?: "active" | "inactive"; }; }`

Response: `{ "data": ReturnPolicy; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateReturnPolicy.mjs)

## api.updateReturnReason

Update a Return reason. Send null to clear description. A present category_handles array replaces the existing set.

`PATCH /v1/return-reasons/{return_reason_id}`

Input: `{ "return_reason_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "category_handles"?: Array<string>; "description"?: string | null; "expected_version"?: string; "external_reference_id"?: string | null; "is_note_required"?: boolean; "name"?: string; }) & (((({ "category_handles"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": ReturnReason; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateReturnReason.mjs)

## api.updateReturnResolution

Update a proposed resolution before confirmation. A present line_items or replacement_line_items array replaces that collection and requires expected_version.

`PATCH /v1/return-resolutions/{return_resolution_id}`

Input: `{ "return_resolution_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": ({ "adjustment_set"?: ReturnResolutionAdjustmentSetInput; "expected_version"?: string; "external_reference_id"?: string | null; "line_items"?: Array<ReturnResolutionLineItemReplacementInputInput>; "metadata"?: Record<string, string | null> | null; "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price"; "replacement_line_items"?: Array<ReturnReplacementLineItemReplacementInputInput>; }) & (((({ "line_items"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "replacement_line_items"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "adjustment_set"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": ReturnResolution; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateReturnResolution.mjs)

## api.updateRiskList

Update a risk list for the authenticated merchant environment.

`PATCH /v1/risk-lists/{risk_list_id}`

Input: `{ "risk_list_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "name": string; [key: string]: unknown; }; }`

Response: `{ "data": RiskList; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateRiskList.mjs)

## api.updateRiskRule

Update a risk rule for the authenticated merchant environment.

`PATCH /v1/risk-rules/{risk_rule_id}`

Input: `{ "risk_rule_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "action"?: "allow" | "block" | "review" | "require_3ds"; "description"?: string; "enabled"?: boolean; "expected_version"?: string; "predicate"?: (({ "all": Array<RiskPredicateNodeInput>; }) | ({ "any": Array<RiskPredicateNodeInput>; }) | ({ "not": RiskPredicateNodeInput; }) | ({ "attribute": string; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; "value": ((string) | (number) | (boolean)); }) | ({ "amount_money": MoneyValueInput; "attribute": "amount_money"; "operator": "eq" | "neq" | "gt" | "gte" | "lt" | "lte"; }) | ({ "attribute": string; "operator": "in"; "values": Array<((string) | (number) | (boolean))>; }) | ({ "attribute": string; "list_alias": string; "operator": "in_list"; }) | ({ "attribute": string; "operator": "is_missing"; })); [key: string]: unknown; }) & (({ "action": unknown; [key: string]: unknown; }) | ({ "predicate": unknown; [key: string]: unknown; }) | ({ "description": unknown; [key: string]: unknown; }) | ({ "enabled": unknown; [key: string]: unknown; })); }`

Response: `{ "data": RiskRule; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateRiskRule.mjs)

## api.updateSettings

Applies a sparse patch to merchant-scoped settings. Send catalog by itself because it has its own version fence. Fee and payment limit controls remain internal-only.

`PATCH /v1/settings`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "branding"?: BrandingSettingsInput; "catalog"?: UpdateCatalogSettingsInput; "checkout"?: CheckoutSettingsInput; "customer_account"?: CustomerAccountSettingsInput; "customer_email_delivery"?: CustomerEmailDeliverySettingsInput; "fulfillment"?: FulfillmentSettingsInput; "inventory"?: InventorySettingsInput; "invoices"?: (({ "autopay_retry_policy"?: (({ "retry_day_offsets": Array<number>; }) | (null)); "credit_note_number_prefix"?: string | null; "default_collection_mode"?: "buyer_initiated" | "automatic" | "external" | null; "default_footer"?: string | null; "default_invoice_payment_term_id"?: string | null; "default_memo"?: string | null; "invoice_number_prefix"?: string | null; "payment_policy"?: (({ "enabled_payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">; "payment_option_limits"?: Array<InvoicePaymentOptionLimitInput>; "show_cost_comparison"?: boolean; }) | (null)); "reminder_policy"?: (({ "rules": Array<InvoiceReminderRuleInput>; }) | (null)); "remit_to_address"?: (({ "city": string; "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; [key: string]: unknown; }) | (null)); "reply_to_email"?: string | null; "timezone"?: string | null; }) | (null)); "legal"?: LegalSettingsInput; "metadata"?: Record<string, string | null> | null; "promotions"?: PromotionSettingsInput; "receipts"?: ReceiptSettingsInput; "subscriptions"?: SubscriptionSettingsInput; "tax"?: TaxSettingsInput; "tipping"?: TippingSettingsInput; [key: string]: unknown; }); }`

Response: `{ "data": Settings; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateSettings.mjs)

## api.updateShipment

Updates shipment metadata and caller-owned external references. Shipment status is derived from package statuses and cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/shipments/{shipment_id}`

Input: `{ "shipment_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "external_reference_id"?: string | null; "external_system"?: string | null; "metadata"?: Record<string, string | null> | null; [key: string]: unknown; }; }`

Response: `{ "data": UpdateShipmentResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateShipment.mjs)

## api.updateSubscription

Updates mutable subscription fields such as payment_method_id and metadata.

`PATCH /v1/subscriptions/{subscription_id}`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "cancel_at_period_end"?: boolean; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "payment_method_id"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateSubscription.mjs)

## api.updateSubscriptionBillingSchedule

Sets the next billing date, clears an external schedule while it awaits a date, or transfers schedule ownership. The response carries the updated subscription.

`PATCH /v1/subscriptions/{subscription_id}/billing-schedule`

Input: `{ "subscription_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": (({ "billing_anchor_day"?: number; "initiated_by": "buyer" | "merchant" | "integration"; "next_billing_at": string; "owner": "flint"; }) | ({ "initiated_by": "buyer" | "merchant" | "integration"; "next_billing_at"?: string | null; "owner": "external"; })); }`

Response: `{ "data": Subscription; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateSubscriptionBillingSchedule.mjs)

## api.updateSubscriptionPlan

Applies a sparse update to mutable subscription plan fields. Line items are mutated through the subscription plan line-item endpoints.

`PATCH /v1/subscription-plans/{plan_id}`

Input: `{ "plan_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": ({ "contract_term_months"?: number; "description"?: string; "early_termination_fee_money"?: MoneyValueInput; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_items"?: Array<UpdateSubscriptionPlanLineItemInputInput>; "metadata"?: Record<string, string | null> | null; "name"?: string; "setup_fee_money"?: MoneyValueInput; "trial_period_days"?: number; [key: string]: unknown; }) & (((({ "images"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))) & (((({ "line_items"?: never })) | ({ "expected_version": unknown; [key: string]: unknown; }))); }`

Response: `{ "data": SubscriptionPlan; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateSubscriptionPlan.mjs)

## api.updateWebhookEndpoint

Updates the mutable fields on a webhook endpoint.

`PATCH /v1/webhook-endpoints/{webhook_endpoint_id}`

Input: `{ "webhook_endpoint_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "api_version"?: string; "description"?: string; "enabled"?: boolean; "enabled_events"?: Array<string>; "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">; "expected_api_version"?: string; "mode"?: "test" | "live" | "both"; "partner_app_id"?: string; "url"?: string; [key: string]: unknown; }; }`

Response: `{ "data": WebhookEndpoint; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-updateWebhookEndpoint.mjs)

## api.verifyOnboardingEmail

Verifies the emailed code, provisions the Flint user and merchant if needed, and returns a short-lived session token for the rest of onboarding.

`POST /v1/onboarding/verify-email`

Input: `{ "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body": { "merchant_id"?: string; "verification_code": string; "verification_token": string; [key: string]: unknown; }; }`

Response: `{ "data": OnboardingVerifyEmailResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-verifyOnboardingEmail.mjs)

## api.verifyReturnReceiptLineItem

Establish the Return line identity for receipt quantity that arrived without one. Unverified quantity counts toward no line and releases no refund timing gate until it is verified.

`POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify`

Input: `{ "return_receipt_id": string; "return_receipt_line_item_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "return_line_item_id": string; "verification_reason": "order_match_confirmed" | "sku_match_confirmed" | "inspection_confirmed" | "merchant_review" | "other"; "verification_reason_message"?: string; }; }`

Response: `{ "data": ReturnReceipt; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-verifyReturnReceiptLineItem.mjs)

## api.voidCreditNote

Voids an issued credit note. Every allocation has to be reversed first. Void is terminal, and an invoice cannot be voided while an issued credit note stands against it.

`POST /v1/credit-notes/{credit_note_id}/void`

Input: `{ "credit_note_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": CreditNote; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-voidCreditNote.mjs)

## api.voidInvoice

Voids an unpaid invoice so the associated order can be edited or collected again. An invoice with an issued credit note against it cannot be voided until that credit note is voided.

`POST /v1/invoices/{invoice_id}/void`

Input: `{ "invoice_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "expected_version"?: string; [key: string]: unknown; }; }`

Response: `{ "data": Invoice; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-voidInvoice.mjs)

## api.voidPackage

Voids a package before carrier handoff and appends a package timeline event. Voided package items no longer count against fulfillment package allocation capacity. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/packages/{package_id}/void`

Input: `{ "package_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; [key: string]: unknown; }; }`

Response: `{ "data": VoidPackageResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-voidPackage.mjs)

## api.voidShipment

Voids a shipment before carrier handoff and voids all child packages that have not shipped. The action appends timeline events for the shipment and affected packages. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/shipments/{shipment_id}/void`

Input: `{ "shipment_id": string; "Idempotency-Key"?: string; "X-Request-Id"?: string; "Flint-Version"?: string; "body"?: { "buyer_notification_behavior"?: "send" | "suppress"; "expected_version"?: string; "occurred_at"?: string; "reason"?: string; [key: string]: unknown; }; }`

Response: `{ "data": VoidShipmentResult; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-voidShipment.mjs)

## api.waiveReturnLineInspection

Waive the inspection requirement on a Return line item so received quantity can be dispositioned and resolved without an inspection observation.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection`

Input: `{ "return_id": string; "return_line_item_id": string; "Idempotency-Key"?: string; "Flint-Version"?: string; "body": { "expected_version"?: string; "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other"; "reason_message"?: string; }; }`

Response: `{ "data": ReturnResource; "meta"?: ResponseMeta; "request_id"?: string; [key: string]: unknown; }`

[Example](examples/api-waiveReturnLineInspection.mjs)
