# Flint Public API API reference

Package 0.2.0-beta.1; API 2026-09-07.

## api.addOrderCharge

Adds a service charge, fee, or surcharge to an order.

`POST /v1/orders/{order_id}/charges`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'charge': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-addOrderCharge.php)

## api.addOrderLineItems

Adds one or more line items to an order.

`POST /v1/orders/{order_id}/line-items`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'line_items': list<mixed>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-addOrderLineItems.php)

## api.addReturnLineItem

Add a line item to a requested Return. The response is the updated Return, not the new line.

`POST /v1/returns/{return_id}/line-items`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'line_item': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-addReturnLineItem.php)

## api.addRiskListItems

Add risk list items for the authenticated merchant environment.

`POST /v1/risk-lists/{risk_list_id}/items`

Input: `array{'risk_list_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-addRiskListItems.php)

## api.advanceOnboarding

Submits whatever the caller currently knows, re-evaluates onboarding, reconciles onboarding requirements, and returns the next step in the consolidated onboarding state machine. Send an empty JSON object when the current next_step only asks to refresh onboarding requirements.

`POST /v1/onboarding/advance`

Input: `array{'sandbox_id'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>|list<string>, 'sandbox_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-advanceOnboarding.php)

## api.applyInventoryCount

Apply a completed physical count to inventory levels.

`POST /v1/inventory-counts/{inventory_count_id}/apply`

Input: `array{'Idempotency-Key': string, 'inventory_count_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-applyInventoryCount.php)

## api.applyOrderDiscount

Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must provide a promotion code; resource IDs and manual discounts require merchant authentication.

`POST /v1/orders/{order_id}/discounts`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-applyOrderDiscount.php)

## api.approveReview

Approve a payment review for the authenticated merchant environment.

`POST /v1/reviews/{review_id}/approve`

Input: `array{'review_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-approveReview.php)

## api.assignToUnconfiguredDeliveryProfile

Assigns this active delivery profile to physical product variants and bundle components that do not have a delivery profile.

`POST /v1/delivery-profiles/{delivery_profile_id}/assign-to-unconfigured`

Input: `array{'delivery_profile_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_catalog_default_version'?: string, 'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-assignToUnconfiguredDeliveryProfile.php)

## api.authorizePartnerInstall

Authenticates the merchant in Flint, validates the requested partner app install, and redirects back to the partner's redirect_uri with an authorization code.

`GET /v1/oauth/authorize`

Input: `array{'response_type': string, 'client_id': string, 'redirect_uri': string, 'mode': string, 'permission_ids'?: string, 'environment_id'?: string, 'merchant_id'?: string, 'state': string, 'Flint-Version'?: string}`

Response: `null`

[Example](examples/api-authorizePartnerInstall.php)

## api.cancelInventoryCount

Cancel an open physical count without changing inventory levels.

`POST /v1/inventory-counts/{inventory_count_id}/cancel`

Input: `array{'Idempotency-Key': string, 'inventory_count_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelInventoryCount.php)

## api.cancelInvoicePaymentAttempt

Cancels an active invoice payment attempt and its payment intent. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}/cancel`

Input: `array{'invoice_id': string, 'invoice_payment_attempt_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelInvoicePaymentAttempt.php)

## api.cancelMeReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/me/returns/{return_id}/cancel`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelMeReturn.php)

## api.cancelMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Cancels a subscription immediately or at period end. Response may include advisory contract information.

`POST /v1/me/subscriptions/{subscription_id}/cancel`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancel_immediately'?: bool}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelMeSubscription.php)

## api.cancelOrderPayment

Cancels an unsettled order-owned payment leg. A leg in an active payment attempt requires the matching payment_attempt_id. Canceling an authorization releases the payment lock and attempt-owned holds; a staged or declined leg with no active attempt can be canceled without an attempt ID.

`POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/cancel`

Input: `array{'order_id': string, 'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body'?: array{'cancellation_reason'?: string, 'payment_attempt_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelOrderPayment.php)

## api.cancelOrderPaymentAttempt

Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.

`POST /v1/orders/{order_id}/payment-attempts/{payment_attempt_id}/cancel`

Input: `array{'order_id': string, 'payment_attempt_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body'?: array{'cancellation_reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelOrderPaymentAttempt.php)

## api.cancelPaymentIntent

Cancels a standalone payment intent before it reaches a terminal settled state. Order-owned payment intents use the attempt-aware order cancellation route.

`POST /v1/payment-intents/{payment_intent_id}/cancel`

Input: `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancellation_reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelPaymentIntent.php)

## api.cancelPayout

Cancels an eligible payout before it leaves Flint-controlled processing and returns the resulting payout.

`POST /v1/payouts/{payout_id}/cancel`

Input: `array{'payout_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelPayout.php)

## api.cancelReturn

Cancel a Return before any merchandise or value work commits. Cancellation is refused once a receipt, inspection, disposition, or resolution exists.

`POST /v1/returns/{return_id}/cancel`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelReturn.php)

## api.cancelReturnDisposition

Cancel a disposition that has not started its inventory effect. Cancellation is refused once the effect is processing.

`POST /v1/return-dispositions/{return_disposition_id}/cancel`

Input: `array{'return_disposition_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelReturnDisposition.php)

## api.cancelReturnLineItem

Cancel approved quantity on a Return line item. Quantity already received, inspected, dispositioned, or reserved by a resolution cannot be canceled, and the conflict response names what is blocking it.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel`

Input: `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'handback_quantity': string, 'quantity': string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelReturnLineItem.php)

## api.cancelReturnResolution

Cancel a resolution and release the line value it reserved. Effects that already succeeded are undone with a compensating correction instead.

`POST /v1/return-resolutions/{return_resolution_id}/cancel`

Input: `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelReturnResolution.php)

## api.cancelSubscription

Cancels a subscription immediately or at period end. Response may include advisory contract information.

`POST /v1/subscriptions/{subscription_id}/cancel`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancel_immediately'?: bool}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-cancelSubscription.php)

## api.captureOrderPayment

Captures an active payment authorization for an order and updates the order payment lifecycle.

`POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/capture`

Input: `array{'order_id': string, 'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'amount_money'?: mixed, 'payment_attempt_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-captureOrderPayment.php)

## api.capturePaymentIntent

Captures an authorized standalone payment intent, including partial captures when supported. Order-owned payment intents use the attempt-aware order capture route.

`POST /v1/payment-intents/{payment_intent_id}/capture`

Input: `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-capturePaymentIntent.php)

## api.changeMeSubscriptionPaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Changes the subscription to an active payment method owned by the same customer.

`POST /v1/me/subscriptions/{subscription_id}/payment-method`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'payment_method_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-changeMeSubscriptionPaymentMethod.php)

## api.changeSubscriptionPaymentMethod

Changes the subscription to an active payment method owned by the same customer.

`POST /v1/subscriptions/{subscription_id}/payment-method`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'payment_method_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-changeSubscriptionPaymentMethod.php)

## api.checkDeliveryRateCallbackConnection

Sends a minimal signed probe to verify endpoint reachability and callback credentials without running a synthetic rate evaluation.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/check-connection`

Input: `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-checkDeliveryRateCallbackConnection.php)

## api.closeCheckoutSession

Closes an open checkout session before it naturally expires.

`POST /v1/checkout-sessions/{checkout_session_id}/close`

Input: `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-closeCheckoutSession.php)

## api.closeOrder

Closes an eligible open, paid, or partially refunded order. Closing cancels pending discounts, releases pending promotion reservations, and recalculates totals from the current surviving pricing economics; canceled discounts remain visible with status: "canceled" but no longer reduce the total. Closing is blocked while payment collection is in progress.

`POST /v1/orders/{order_id}/close`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-closeOrder.php)

## api.collectInvoice

Charges the invoice's saved payment method or the supplied saved payment method. This command requires a caller-chosen Idempotency-Key that is reused for retries of the same collection request.

`POST /v1/invoices/{invoice_id}/collect`

Input: `array{'invoice_id': string, 'Idempotency-Key': string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'invoice_schedule_entry_id'?: string, 'payment_method_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-collectInvoice.php)

## api.commitInventoryReservation

Move held quantity to committed. Lines carry cumulative targets, so resending an applied target is a successful no-op.

`POST /v1/inventory-reservations/{inventory_reservation_id}/commit`

Input: `array{'Idempotency-Key': string, 'inventory_reservation_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_committed_quantity': string}>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-commitInventoryReservation.php)

## api.completeReturn

Complete a Return whose completion_mode is manual. The call fails while completion_blockers is non-empty. Automatic Returns complete themselves when the final blocker clears.

`POST /v1/returns/{return_id}/complete`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason'?: string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-completeReturn.php)

## api.confirmMeEmailChangeRequest

Confirms possession of the current and new email addresses, then atomically updates the customer account in the selected merchant environment. Omit current_email_code only when current_email_confirmation_required is false.

`POST /v1/me/email-change-requests/{email_change_request_id}/confirm`

Input: `array{'email_change_request_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'current_email_code'?: string, 'new_email_code': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-confirmMeEmailChangeRequest.php)

## api.confirmPaymentIntent

Confirms a standalone payment intent. Order-owned payment intents reject this route and must be confirmed through POST /v1/orders/{order_id}/pay.

`POST /v1/payment-intents/{payment_intent_id}/confirm`

Input: `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'confirmation_token'?: string, 'payment_method_id'?: string, 'payment_source_token'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-confirmPaymentIntent.php)

## api.confirmReturnResolution

Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind line-qualified execution blockers.

`POST /v1/return-resolutions/{return_resolution_id}/confirm`

Input: `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-confirmReturnResolution.php)

## api.consumeInventoryReservation

Consume committed quantity, permanently removing it from stock. Cumulative targets; consumed quantity is terminal.

`POST /v1/inventory-reservations/{inventory_reservation_id}/consume`

Input: `array{'Idempotency-Key': string, 'inventory_reservation_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': string}>, 'provenance': array{'external_actor_id'?: string, 'occurred_at'?: string, 'source_system'?: mixed}}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-consumeInventoryReservation.php)

## api.createAPIKey

Creates a merchant-bound external API key. secret_key is returned only in the initial successful response and accepted idempotent replays of the same create request.

`POST /v1/api-keys`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expires_at'?: string, 'name': string, 'sandbox_id'?: string, 'scopes': list<string>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createAPIKey.php)

## api.createBundle

Create bundle.

`POST /v1/bundles`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'barcode'?: string, 'categories'?: list<string>, 'components'?: list<mixed>, 'description'?: string, 'external_reference_id'?: string, 'images'?: list<mixed>, 'line_item_tax_category'?: string, 'metadata'?: array{}, 'modifier_set_id'?: string|null, 'name': string, 'sku'?: string, 'status'?: string, 'taxable'?: bool, 'unit_price_money': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createBundle.php)

## api.createCategory

Creates a reusable category. If handle is omitted, Flint derives it from the name and never changes it on rename.

`POST /v1/categories`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'description'?: string, 'external_reference_id'?: string, 'handle'?: string, 'metadata'?: array{}, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCategory.php)

## api.createCheckoutSession

Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.

`POST /v1/checkout-sessions`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCheckoutSession.php)

## api.createCheckoutSessionDeliveryQuote

Creates an exact checkout-bound delivery quote without holding inventory.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-quotes`

Input: `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'basis_delivery_quote_id'?: string, 'buyer_location'?: mixed, 'destination_address'?: mixed, 'expected_delivery_selection_id': string|null, 'inventory_assignments'?: list<mixed>, 'method_results'?: list<mixed>, 'pickup_location_id'?: string, 'tier_key'?: string}}`

Response: `object{'data': object{'audience': string, 'basis_delivery_quote_id'?: string, 'basis_delivery_selection_id'?: string, 'buyer_location'?: mixed, 'checkout_session_id': string, 'choice_groups': list<mixed>, 'consumed_by_delivery_selection_id'?: string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'destination_address'?: mixed, 'eligibility_context_revision': string, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'merchant_diagnostics': list<mixed>, 'methods'?: list<mixed>, 'order_id': string, 'pending_caller_rate_requests'?: list<mixed>, 'revocation_reason'?: string, 'revoked_at'?: string, 'selection_required': bool, 'stale_reason'?: string, 'status': string}|object{'audience': string, 'buyer_location'?: mixed, 'buyer_reasons': list<string>, 'choice_groups': list<mixed>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'selection_required': bool, 'status': string}|mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCheckoutSessionDeliveryQuote.php)

## api.createCheckoutSessionDeliverySelection

Atomically selects one option per choice group, replaces inventory holds, and recalculates checkout economics.

`POST /v1/checkout-sessions/{checkout_session_id}/delivery-selections`

Input: `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'choices': list<mixed>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'expected_delivery_selection_id': string|null, 'external_reference_id'?: string, 'external_system'?: string, 'recipient'?: mixed}}`

Response: `object{'data': object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCheckoutSessionDeliverySelection.php)

## api.createCreditNote

Creates a draft credit note against an invoice that has been issued and not voided. Include credit_note_lines for initial corrections or omit them for an empty draft. The draft uses the invoice currency and receives a credit note number when issued.

`POST /v1/credit-notes`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'credit_note_lines'?: list<mixed>, 'external_reference_id'?: string, 'invoice_id': string, 'memo'?: string, 'reason': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCreditNote.php)

## api.createCreditNoteAllocation

Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount cannot exceed the credit note's unallocated_money or the invoice's outstanding balance. Closing the balance with credit sets the invoice to credited. Returns the allocation, the credit note, and the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's identity.

`POST /v1/credit-notes/{credit_note_id}/allocations`

Input: `array{'credit_note_id': string, 'Idempotency-Key': string, 'Flint-Version'?: string, 'body': array{'amount_money': array{'amount': string, 'currency': string}, 'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCreditNoteAllocation.php)

## api.createCustomer

Creates a customer for the authenticated merchant.

`POST /v1/customers`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_address'?: mixed, 'default_invoice_payment_term_id'?: string, 'email': string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'metadata'?: array{}, 'name'?: string, 'phone'?: string, 'shipping_address'?: mixed, 'tax_exempt'?: bool}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCustomer.php)

## api.createCustomerAddress

Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/customers/{customer_id}/addresses`

Input: `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCustomerAddress.php)

## api.createCustomerDeletionRequest

Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.

`POST /v1/customers/{customer_id}/deletion-requests`

Input: `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCustomerDeletionRequest.php)

## api.createCustomerSession

Mints a server-side, customer-scoped credential after the merchant has authenticated the buyer. Secret and refresh_token are returned only in this response. Flint-hosted merchants also receive a separately expiring one-time account_url.

`POST /v1/customer-sessions`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'account_url_expires_in_seconds'?: string, 'customer_id': string, 'expires_in_seconds'?: string, 'refresh_expires_in_seconds'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createCustomerSession.php)

## api.createDeliveryLocationSet

Delivery location sets pin reusable sets of Locations for allocation or buyer pickup. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-location-sets`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeliveryLocationSet.php)

## api.createDeliveryMethod

Delivery methods combine eligibility, pricing, schedules, estimates, tax treatment, and execution behavior. Creation publishes immutable revision 1. Omit status to start inactive.

`POST /v1/delivery-methods`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeliveryMethod.php)

## api.createDeliveryPreview

Computes exact display-only delivery outcomes without persisting a resource, holding inventory, or granting selection authority.

`POST /v1/delivery-previews`

Input: `array{'Flint-Version'?: string, 'body': array{'buyer_location'?: mixed, 'currency': string, 'delivery_method_ids': list<string>, 'destination_address'?: mixed, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'pickup_location_id'?: string, 'pricing_context'?: array{}}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeliveryPreview.php)

## api.createDeliveryProfile

Delivery profiles define reusable delivery rules assigned to catalog obligations. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-profiles`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeliveryProfile.php)

## api.createDeliveryRateCallback

Delivery callback endpoints pin shared outbound callback transport configuration. Creation publishes immutable revision 1. It starts inactive.

`POST /v1/delivery-rate-callbacks`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeliveryRateCallback.php)

## api.createDeliveryRateCallbackTestDelivery

Sends a signed delivery rate callback with synthetic non-PII data and returns a safe result.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/test-deliveries`

Input: `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeliveryRateCallbackTestDelivery.php)

## api.createDeliveryZone

Delivery zones define versioned geographic eligibility. Creation publishes immutable revision 1. It starts active.

`POST /v1/delivery-zones`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed|mixed|mixed|mixed|mixed|mixed|mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeliveryZone.php)

## api.createDemoSession

Creates a temporary demo sandbox and returns a short-lived test API key. The secret key is displayed only at creation time and for a short idempotent retry window.

`POST /v1/demo-sessions`

Input: `array{'Idempotency-Key'?: string, 'X-Turnstile-Token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'template'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDemoSession.php)

## api.createDeveloperPartnerApp

Creates a partner app owned by the authenticated merchant. Use a developer setup session during setup or a normal external API key afterward.

`POST /v1/developer/partner/apps`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'app_type'?: string, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'redirect_uris': list<string>, 'visibility'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeveloperPartnerApp.php)

## api.createDeveloperSandbox

Creates a new test sandbox for the current merchant. Optionally seeds the new empty sandbox with the merchant's live defaults and issues a sandbox-bound test key as part of creation.

`POST /v1/developer/sandboxes`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'issue_test_key'?: bool, 'name': string, 'scopes'?: list<string>, 'test_key_name'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDeveloperSandbox.php)

## api.createDevice

Creates a device for the authenticated merchant. If hardware_fingerprint matches an existing device, the existing device is returned with 200 OK and data.already_existed=true.

`POST /v1/devices`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'hardware_fingerprint'?: string, 'location_id'?: string, 'metadata'?: array{}, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createDevice.php)

## api.createFeedbackReport

Stores one immutable occurrence of Flint feedback. Use one report per root cause and include only the evidence needed to describe Flint's behavior.

`POST /v1/feedback-reports`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createFeedbackReport.php)

## api.createFulfillment

Creates an explicit fulfillment for an order.

`POST /v1/orders/{order_id}/fulfillments`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id': string}`

[Example](examples/api-createFulfillment.php)

## api.createFulfillmentEvent

Records an observational event for a fulfillment or one of its shipments or packages.

`POST /v1/fulfillments/{fulfillment_id}/events`

Input: `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'buyer_notification_behavior'?: string, 'custom_details'?: array{}, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string, 'package_id'?: string, 'shipment_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createFulfillmentEvent.php)

## api.createInventoryAdjustment

Record a physical stock change as signed deltas. Returns the created adjustment, its movement IDs, and the resulting level for every level touched.

`POST /v1/inventory-adjustments`

Input: `array{'Idempotency-Key': string, 'Flint-Version'?: string, 'body': array{'external_actor_id'?: string, 'lines': list<mixed>, 'note'?: string, 'occurred_at'?: string, 'reason': string, 'source_system'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInventoryAdjustment.php)

## api.createInventoryAllocationPolicy

Create an allocation policy with its routing configuration.

`POST /v1/inventory-allocation-policies`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'configuration': mixed, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInventoryAllocationPolicy.php)

## api.createInventoryCount

Open a physical count for selected inventory items at one Location.

`POST /v1/inventory-counts`

Input: `array{'Idempotency-Key': string, 'Flint-Version'?: string, 'body': array{'inventory_item_ids': list<string>, 'location_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInventoryCount.php)

## api.createInventoryItem

Create an inventory item. SKU and barcode are searchable attributes, not identity: they are not required to be unique.

`POST /v1/inventory-items`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'barcode'?: string, 'external_reference_id'?: string, 'metadata'?: array{}, 'name': string, 'sku'?: string, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInventoryItem.php)

## api.createInventoryReceipt

Record a completed inventory receipt and disposition. This is a downstream stock effect, not the customer Return lifecycle.

`POST /v1/inventory-receipts`

Input: `array{'Idempotency-Key': string, 'Flint-Version'?: string, 'body': array{'external_actor_id'?: string, 'lines': list<mixed>, 'occurred_at'?: string, 'source_system'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInventoryReceipt.php)

## api.createInventoryReservation

Route standalone merchant demand and hold stock in one atomic command. A provisional hold lasts at most 15 minutes.

`POST /v1/inventory-reservations`

Input: `array{'Idempotency-Key': string, 'Flint-Version'?: string, 'body': array{'assignments'?: list<mixed>, 'demands': list<mixed>, 'destination_fingerprint'?: string, 'inventory_routing_source': mixed, 'owner': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInventoryReservation.php)

## api.createInventoryTransfer

Create a planned stock transfer between two Locations.

`POST /v1/inventory-transfers`

Input: `array{'Idempotency-Key': string, 'Flint-Version'?: string, 'body': array{'destination_location_id': string, 'external_reference'?: string, 'lines': list<mixed>, 'note'?: string, 'origin_location_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInventoryTransfer.php)

## api.createInvoice

Creates an invoice draft. Provide exactly one source: order_id for an order-backed draft, or quick_pay for a hidden backing-order draft.

`POST /v1/invoices`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{}|array{}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInvoice.php)

## api.createInvoicePaymentTerm

Create invoice payment term for the authenticated merchant.

`POST /v1/invoice-payment-terms`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'calculation': mixed, 'external_reference_id'?: string, 'late_fee_policy'?: mixed, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createInvoicePaymentTerm.php)

## api.createLocation

Create a Location. Including the inventory block also requires commerce.inventory_locations.write.

`POST /v1/locations`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory'?: mixed, 'metadata'?: array{}, 'name': string, 'status'?: string, 'timezone': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createLocation.php)

## api.createMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates a stable saved address. The first address becomes both the billing and shipping default. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/me/addresses`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMeAddress.php)

## api.createMeDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Creates or returns the pending tracked deletion request. Required commerce records are retained until the deletion workflow resolves their legal retention requirements.

`POST /v1/me/deletion-requests`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMeDeletionRequest.php)

## api.createMeEmailChangeRequest

Sends short-lived confirmation codes to the current and new email addresses. If the account has no current email, only the new address must be confirmed. The customer email does not change until confirmation succeeds.

`POST /v1/me/email-change-requests`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'new_email': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMeEmailChangeRequest.php)

## api.createMeInvoiceCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection.

`POST /v1/me/invoices/{invoice_id}/checkout-session`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMeInvoiceCheckoutSession.php)

## api.createMerchantAccountSession

Creates an embedded browser handoff for one or more allowlisted account components.

`POST /v1/merchant-account-sessions`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'collection_strategy'?: string, 'components': list<string>, 'future_requirements'?: string, 'sandbox_id'?: string, 'targeted_requirement_ids'?: list<string>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMerchantAccountSession.php)

## api.createMeReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.

`POST /v1/me/returns`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'line_items': list<mixed>, 'metadata'?: array{}, 'order_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMeReturn.php)

## api.createMeReturnPreview

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/me/return-previews`

Input: `array{'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMeReturnPreview.php)

## api.createMeReturnResolutionCheckoutSession

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution.

`POST /v1/me/return-resolutions/{resolution_id}/checkout-session`

Input: `array{'resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createMeReturnResolutionCheckoutSession.php)

## api.createModifierGroup

Create modifier group.

`POST /v1/modifier-groups`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'allow_quantities'?: bool, 'external_reference_id'?: string, 'max_quantity'?: string, 'max_selected'?: int, 'max_total_quantity'?: string, 'metadata'?: array{}, 'min_quantity'?: string, 'min_selected'?: int, 'modifier_group_type'?: string, 'modifiers'?: list<mixed>, 'name': string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createModifierGroup.php)

## api.createModifierSet

Create modifier set.

`POST /v1/modifier-sets`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'metadata'?: array{}, 'modifier_groups'?: list<mixed>, 'name': string, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createModifierSet.php)

## api.createOnboardingAPIKey

Creates the first long-lived external API key and exits onboarding.

`POST /v1/onboarding/api-key`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'name': string, 'sandbox_id'?: string, 'scopes'?: list<string>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createOnboardingAPIKey.php)

## api.createOrder

Creates an order for the authenticated merchant. For USD orders, an effective requested tip may be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.

`POST /v1/orders`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}, 'discounts'?: list<mixed>, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: mixed, 'line_items': list<mixed>, 'metadata'?: array{}, 'requested_tip'?: mixed|mixed, 'tax'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createOrder.php)

## api.createOrderPaymentIntent

Creates an immutable payment leg owned by the order. Collect a payment source using payment_collection, then submit that source through payOrder. This route requires commerce.orders.write; standalone payment-intent routes require payments.payment_intents.write.

`POST /v1/orders/{order_id}/payment-intents`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed, 'capture_method'?: string, 'external_reference_id'?: string, 'metadata'?: array{}, 'payment_options'?: list<string>, 'payment_return_url'?: string, 'payment_source_selection'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createOrderPaymentIntent.php)

## api.createOrganization

Creates a child organization within the caller's accessible organization hierarchy.

`POST /v1/organizations`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array{}, 'name': string, 'parent_organization_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createOrganization.php)

## api.createPackage

Creates a package record under a shipment. Package status transitions use explicit future status APIs; this endpoint records package-level carrier, tracking, label, measurement, and external correlation fields.

`POST /v1/shipments/{shipment_id}/packages`

Input: `array{'shipment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'external_reference_id'?: string, 'external_system'?: string, 'label_url'?: string, 'metadata'?: array{}, 'service_code'?: string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPackage.php)

## api.createPackageItem

Adds an order line quantity to a package. Total active package item quantities cannot exceed the parent fulfillment line-item quantity.

`POST /v1/packages/{package_id}/items`

Input: `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array{}, 'order_line_item_id': string, 'quantity': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPackageItem.php)

## api.createPaymentIntent

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

`POST /v1/payment-intents`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed&mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPaymentIntent.php)

## api.createPaymentLink

Creates a payment link for the authenticated merchant. Line items may use fixed prices, buyer-adjustable amounts, and buyer-adjustable quantities.

`POST /v1/payment-links`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'customer_collection'?: mixed, 'delivery_method_ids'?: list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'expiration'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'metadata'?: array{}, 'name': string, 'payment_link_type'?: string, 'payments'?: mixed, 'plan_id'?: string, 'promotion_config'?: mixed, 'redirects'?: mixed, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPaymentLink.php)

## api.createPaymentMethodDomain

Registers one exact domain or subdomain for Apple Pay and Google Pay in the selected Flint environment, then validates its wallet readiness.

`POST /v1/payment-method-domains`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'domain_name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPaymentMethodDomain.php)

## api.createPayout

Creates a payout from an available balance to an eligible payout destination. Safe to retry with the same Idempotency-Key.

`POST /v1/payouts`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money': mixed, 'balance_source_type'?: string, 'description'?: string, 'external_reference_id'?: string, 'metadata'?: array{}, 'method'?: string, 'payout_destination_id'?: string, 'statement_descriptor'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPayout.php)

## api.createProduct

Creates a product for the authenticated merchant.

`POST /v1/products`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createProduct.php)

## api.createProductVariant

Create product variant.

`POST /v1/products/{product_id}/variants`

Input: `array{'product_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'variant': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createProductVariant.php)

## api.createPromotion

Creates a promotion for the authenticated merchant.

`POST /v1/promotions`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'application_method': mixed, 'codes'?: list<mixed>, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<mixed>|array{'all': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}|array{'any': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array{}, 'name': string, 'redemption_type'?: string, 'schedule'?: mixed, 'stacking_mode'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPromotion.php)

## api.createPromotionCode

Creates a code for a code-gated promotion.

`POST /v1/promotions/{promotion_id}/codes`

Input: `array{'promotion_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'code': string, 'expires_at'?: string, 'max_uses'?: string, 'metadata'?: array{}}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createPromotionCode.php)

## api.createRefund

Creates a refund for an order or payment intent. This is a financial operation.

`POST /v1/refunds`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createRefund.php)

## api.createReport

Creates an idempotent asynchronous CSV report. Poll the returned report until it succeeds or fails.

`POST /v1/reports`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'currency': string, 'interval_end_at': string, 'interval_start_at': string, 'report_type': string, 'timezone'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReport.php)

## api.createReturn

Create a requested Return. When no policy matches, the Return remains available for merchant review rather than failing creation.

`POST /v1/returns`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'line_items': list<mixed>, 'metadata'?: array{}, 'order_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturn.php)

## api.createReturnDisposition

Record an auditable merchandise disposition from either a receipt line or an inspection line.

`POST /v1/returns/{return_id}/dispositions`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturnDisposition.php)

## api.createReturnInspection

Record an immutable inspection observation. Corrections supersede an earlier inspection instead of editing physical history.

`POST /v1/returns/{return_id}/inspections`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'inspected_at': string, 'line_items': list<mixed>, 'location_id': string, 'return_receipt_id': string, 'source_system'?: mixed, 'supersedes_return_inspection_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturnInspection.php)

## api.createReturnPolicy

Create a Return policy with its first revision. The policy ID is stable across revisions, and each published revision is immutable.

`POST /v1/return-policies`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'metadata'?: array{}, 'name': string, 'revision': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturnPolicy.php)

## api.createReturnPreview

Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/return-previews`

Input: `array{'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturnPreview.php)

## api.createReturnReason

Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection findings, decline reasons, and Refund reasons.

`POST /v1/return-reasons`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'category_handles'?: list<string>, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'is_note_required'?: bool, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturnReason.php)

## api.createReturnReceipt

Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt instead of editing physical history.

`POST /v1/returns/{return_id}/receipts`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'line_items': list<mixed>, 'received_at': string, 'receiving_location_id': string, 'shipment_id'?: string, 'source_system'?: mixed, 'supersedes_return_receipt_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturnReceipt.php)

## api.createReturnResolution

Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value. Confirmation is what freezes it and starts its effects.

`POST /v1/returns/{return_id}/resolutions`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createReturnResolution.php)

## api.createRiskList

Create a risk list for the authenticated merchant environment.

`POST /v1/risk-lists`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'alias': string, 'item_type': string, 'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createRiskList.php)

## api.createRiskPreview

Create a risk preview for the authenticated merchant environment.

`POST /v1/risk-previews`

Input: `array{'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createRiskPreview.php)

## api.createRiskRule

Create a risk rule for the authenticated merchant environment.

`POST /v1/risk-rules`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'description': string, 'enabled'?: bool, 'predicate': array{'all': list<mixed>}|array{'any': list<mixed>}|array{'not': mixed}|array{'attribute': string, 'operator': string, 'value': string|int|bool}|array{'amount_money': mixed, 'attribute': string, 'operator': string}|array{'attribute': string, 'operator': string, 'values': list<string|int|bool>}|array{'attribute': string, 'list_alias': string, 'operator': string}|array{'attribute': string, 'operator': string}}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createRiskRule.php)

## api.createShipment

Creates a shipment execution record under a shipment-type fulfillment. A shipment groups one carrier leg. Create one package under it for each physical parcel, including single-parcel shipments.

`POST /v1/fulfillments/{fulfillment_id}/shipments`

Input: `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createShipment.php)

## api.createSubscription

Creates a subscription for the authenticated merchant.

`POST /v1/subscriptions`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createSubscription.php)

## api.createSubscriptionPaymentRetry

Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome.

`POST /v1/subscriptions/{subscription_id}/payment-retries`

Input: `array{'subscription_id': string, 'Idempotency-Key': string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createSubscriptionPaymentRetry.php)

## api.createSubscriptionPlan

Creates a subscription plan for the authenticated merchant.

`POST /v1/subscription-plans`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_interval': string, 'billing_interval_count': int, 'contract_term_months'?: int, 'currency': string, 'description'?: string, 'early_termination_fee_money'?: mixed, 'external_reference_id'?: string, 'images'?: list<mixed>, 'line_items'?: list<mixed>, 'metadata'?: array{}, 'name': string, 'setup_fee_money'?: mixed, 'trial_period_days'?: int}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createSubscriptionPlan.php)

## api.createWebhookEndpoint

Creates a webhook endpoint and returns the signing secret once.

`POST /v1/webhook-endpoints`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'description'?: string, 'enabled'?: bool, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'mode'?: string, 'partner_app_id'?: string, 'url': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createWebhookEndpoint.php)

## api.createWebhookTestEvent

Creates and delivers a synthetic test webhook event to one active webhook endpoint. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events`

Input: `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'event_type': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-createWebhookTestEvent.php)

## api.decideReturn

Record per-line Return decisions atomically. Each line selects policy_evaluation or explicit decision semantics.

`POST /v1/returns/{return_id}/decide`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'completion_mode'?: string, 'expected_version'?: string, 'line_items': list<mixed>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-decideReturn.php)

## api.decideReturnInspectionLineItem

Record the accept or reject outcome for inspected quantity. Accepted quantity becomes dispositionable and satisfies after_inspection refund timing.

`POST /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide`

Input: `array{'return_inspection_id': string, 'return_inspection_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'acceptance_decision_reason': string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-decideReturnInspectionLineItem.php)

## api.declineReview

Decline a payment review for the authenticated merchant environment.

`POST /v1/reviews/{review_id}/decline`

Input: `array{'review_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'add_to_block_list'?: bool}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-declineReview.php)

## api.deleteBundle

Archives a bundle and returns its final state.

`DELETE /v1/bundles/{bundle_id}`

Input: `array{'bundle_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteBundle.php)

## api.deleteCategory

Delete category.

`DELETE /v1/categories/{category_id}`

Input: `array{'category_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteCategory.php)

## api.deleteCheckoutSessionCurrentDeliverySelection

Atomically clears a provisional selection, releases inventory, removes its charges, and recalculates order economics.

`DELETE /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Input: `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'expected_delivery_selection_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|object{'audience': string, 'checkout_session': mixed, 'delivery_selection': mixed, 'inventory_reservation'?: mixed, 'order': mixed}|mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteCheckoutSessionCurrentDeliverySelection.php)

## api.deleteCustomerAddress

Deletes a saved address and moves any default designation to the newest remaining address.

`DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}`

Input: `array{'customer_id': string, 'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteCustomerAddress.php)

## api.deleteDeliveryLocationSet

Retires the delivery location set after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-location-sets/{delivery_location_set_id}`

Input: `array{'delivery_location_set_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteDeliveryLocationSet.php)

## api.deleteDeliveryMethod

Retires the delivery method after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-methods/{delivery_method_id}`

Input: `array{'delivery_method_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteDeliveryMethod.php)

## api.deleteDeliveryProfile

Retires the delivery profile after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-profiles/{delivery_profile_id}`

Input: `array{'delivery_profile_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteDeliveryProfile.php)

## api.deleteDeliveryRateCallback

Retires the delivery rate callback after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Input: `array{'delivery_rate_callback_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteDeliveryRateCallback.php)

## api.deleteDeliveryZone

Retires the delivery zone after checking current dependencies. The retired resource remains available by ID for historical records.

`DELETE /v1/delivery-zones/{delivery_zone_id}`

Input: `array{'delivery_zone_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteDeliveryZone.php)

## api.deleteDeveloperSandbox

Retires a non-default sandbox and frees its original name for reuse.

`DELETE /v1/developer/sandboxes/{sandbox_id}`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteDeveloperSandbox.php)

## api.deleteDevice

Marks a device as deleted and returns its final state.

`DELETE /v1/devices/{device_id}`

Input: `array{'device_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteDevice.php)

## api.deleteInventoryAllocationPolicy

Retire an allocation policy. keeps the archived resource available in list results.

`DELETE /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Input: `array{'inventory_allocation_policy_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteInventoryAllocationPolicy.php)

## api.deleteInventoryItem

Retire an inventory item. keeps the archived resource available in list results.

`DELETE /v1/inventory-items/{inventory_item_id}`

Input: `array{'inventory_item_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteInventoryItem.php)

## api.deleteInvoicePaymentTerm

Retires an invoice payment term by setting its status to archived. A default payment term cannot be retired.

`DELETE /v1/invoice-payment-terms/{invoice_payment_term_id}`

Input: `array{'invoice_payment_term_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteInvoicePaymentTerm.php)

## api.deleteLocation

Retire a Location. Preserves the archived resource for direct reads.

`DELETE /v1/locations/{location_id}`

Input: `array{'location_id': string, 'expected_version'?: int, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteLocation.php)

## api.deleteMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Deletes a saved address and moves any default designation to the newest remaining address.

`DELETE /v1/me/addresses/{customer_address_id}`

Input: `array{'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteMeAddress.php)

## api.deleteModifierGroup

Retire modifier group.

`DELETE /v1/modifier-groups/{modifier_group_id}`

Input: `array{'modifier_group_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteModifierGroup.php)

## api.deleteModifierSet

Retire modifier set.

`DELETE /v1/modifier-sets/{modifier_set_id}`

Input: `array{'modifier_set_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteModifierSet.php)

## api.deleteOrderCharge

Removes a single service charge, fee, or surcharge from an order.

`DELETE /v1/orders/{order_id}/charges/{order_charge_id}`

Input: `array{'order_id': string, 'order_charge_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteOrderCharge.php)

## api.deleteOrderLineItem

Removes a single line item from an order.

`DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}`

Input: `array{'order_id': string, 'order_line_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteOrderLineItem.php)

## api.deleteOrganization

Soft-deletes an organization when it has no active descendants or merchant links.

`DELETE /v1/organizations/{organization_id}`

Input: `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteOrganization.php)

## api.deletePackageItem

Removes an order line quantity from a package while the package is still mutable.

`DELETE /v1/packages/{package_id}/items/{package_item_id}`

Input: `array{'package_id': string, 'package_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deletePackageItem.php)

## api.deletePayoutDestination

Disables an eligible payout destination and returns its final state. Safe to retry with the same Idempotency-Key.

`DELETE /v1/payout-settings/destinations/{payout_destination_id}`

Input: `array{'payout_destination_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deletePayoutDestination.php)

## api.deleteProduct

Archives a product and returns its final state.

`DELETE /v1/products/{product_id}`

Input: `array{'product_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteProduct.php)

## api.deleteProductVariant

Retire product variant.

`DELETE /v1/products/{product_id}/variants/{variant_id}`

Input: `array{'product_id': string, 'variant_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteProductVariant.php)

## api.deletePromotion

Archives a promotion and returns its final state.

`DELETE /v1/promotions/{promotion_id}`

Input: `array{'promotion_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deletePromotion.php)

## api.deletePromotionCode

Deletes a promotion code.

`DELETE /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Input: `array{'promotion_id': string, 'promotion_code_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deletePromotionCode.php)

## api.deleteReturnLineItem

Remove a line item from a requested Return. The response is the updated Return.

`DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}`

Input: `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteReturnLineItem.php)

## api.deleteReturnPolicy

Retire a Return policy so it is no longer evaluated and no longer appears as an active choice.

`DELETE /v1/return-policies/{return_policy_id}`

Input: `array{'return_policy_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteReturnPolicy.php)

## api.deleteReturnReason

Retire a Return reason so buyers can no longer select it. Returns that already recorded it keep the frozen reason name.

`DELETE /v1/return-reasons/{return_reason_id}`

Input: `array{'return_reason_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteReturnReason.php)

## api.deleteRiskList

Retire a risk list for the authenticated merchant environment.

`DELETE /v1/risk-lists/{risk_list_id}`

Input: `array{'risk_list_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteRiskList.php)

## api.deleteRiskListItem

Delete a risk list item for the authenticated merchant environment.

`DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Input: `array{'risk_list_id': string, 'risk_list_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteRiskListItem.php)

## api.deleteRiskRule

Retire a risk rule for the authenticated merchant environment.

`DELETE /v1/risk-rules/{risk_rule_id}`

Input: `array{'risk_rule_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteRiskRule.php)

## api.deleteSubscriptionPlan

Retires a subscription plan. Plans with active subscriptions cannot be retired.

`DELETE /v1/subscription-plans/{plan_id}`

Input: `array{'plan_id': string, 'expected_version'?: string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteSubscriptionPlan.php)

## api.deleteWebhookEndpoint

Marks a webhook endpoint as deleted so it no longer receives events.

`DELETE /v1/webhook-endpoints/{webhook_endpoint_id}`

Input: `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-deleteWebhookEndpoint.php)

## api.exchangePartnerInstallToken

Exchanges an authorization code or refresh token for an installation-scoped bearer token. This endpoint follows OAuth token endpoint conventions: it accepts application/x-www-form-urlencoded requests as well as JSON and returns OAuth token error objects for token exchange failures instead of the normal Flint error envelope.

`POST /v1/oauth/token`

Input: `array{'Flint-Version'?: string, 'body': array{'client_id': string, 'client_secret': string, 'code'?: string, 'grant_type': string, 'redirect_uri'?: string, 'refresh_token'?: string}}`

Response: `object{'access_token': string, 'environment_grant_id': string, 'expires_in': string, 'merchant_id': string, 'mode': string, 'partner_app_id': string, 'partner_app_install_id': string, 'refresh_token'?: string, 'scope'?: string, 'token_type': string}`

[Example](examples/api-exchangePartnerInstallToken.php)

## api.getAnalyticsOverview

Returns high-level merchant analytics for the requested time range.

`GET /v1/analytics/overview`

Input: `array{'range': string, 'timezone'?: string, 'include_previous_period'?: bool, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getAnalyticsOverview.php)

## api.getAPIKey

Returns external API key metadata. Secrets, internal keys, and demo-session keys are not returned.

`GET /v1/api-keys/{api_key_id}`

Input: `array{'api_key_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getAPIKey.php)

## api.getBalanceTransaction

Returns one balance transaction by ID, with optional related order expansion.

`GET /v1/balance-transactions/{balance_transaction_id}`

Input: `array{'balance_transaction_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getBalanceTransaction.php)

## api.getBundle

Get bundle.

`GET /v1/bundles/{bundle_id}`

Input: `array{'bundle_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getBundle.php)

## api.getCategory

Get category.

`GET /v1/categories/{category_id}`

Input: `array{'category_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCategory.php)

## api.getCheckoutSession

Returns a single checkout session by ID.

`GET /v1/checkout-sessions/{checkout_session_id}`

Input: `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCheckoutSession.php)

## api.getCheckoutSessionCurrentDeliverySelection

Returns the provisional selection or the order-level committed selection effective for this checkout.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/current`

Input: `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': object{'audience': string, 'delivery_selection'?: object{'amount_money': object{'amount': string, 'currency': string}, 'buyer_location'?: mixed|mixed|mixed, 'calculation_expires_at': string, 'checkout_session_id': string, 'choices': list<mixed>, 'created_at': string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'delivery_selection_id': string, 'destination_address'?: object{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}, 'eligibility_context_revision': string, 'expires_at': string, 'instructions'?: string, 'lifecycle_events'?: list<mixed>, 'lifecycle_updated_at': string, 'limiting_deadline_reason': string, 'order_id': string, 'private_data_status'?: string, 'recipient'?: object{'email'?: string, 'name'?: string, 'phone'?: string}, 'redacted_at'?: string, 'status': string}|null|mixed, 'mutable': bool, 'originating_checkout_session_id'?: string, 'source': string}|object{'audience': string, 'delivery_selection'?: object{'amount_money': mixed, 'choices': list<mixed>, 'delivery_quote_id': string, 'delivery_selection_id': string, 'destination_address'?: mixed, 'expires_at': string, 'recipient'?: mixed, 'status': string}|null|mixed, 'mutable': bool, 'source': string}|mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCheckoutSessionCurrentDeliverySelection.php)

## api.getCheckoutSessionDeliveryQuote

Returns one quote under its checkout authority. Buyer credentials receive the buyer-safe projection.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-quotes/{delivery_quote_id}`

Input: `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'delivery_quote_id': string, 'Flint-Version'?: string}`

Response: `object{'data': object{'audience': string, 'basis_delivery_quote_id'?: string, 'basis_delivery_selection_id'?: string, 'buyer_location'?: mixed, 'checkout_session_id': string, 'choice_groups': list<mixed>, 'consumed_by_delivery_selection_id'?: string, 'delivery_quote_id': string, 'delivery_quote_revision': string, 'destination_address'?: mixed, 'eligibility_context_revision': string, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'merchant_diagnostics': list<mixed>, 'methods'?: list<mixed>, 'order_id': string, 'pending_caller_rate_requests'?: list<mixed>, 'revocation_reason'?: string, 'revoked_at'?: string, 'selection_required': bool, 'stale_reason'?: string, 'status': string}|object{'audience': string, 'buyer_location'?: mixed, 'buyer_reasons': list<string>, 'choice_groups': list<mixed>, 'delivery_quote_id': string, 'destination_address'?: mixed, 'evaluated_at': string, 'evaluation_status': string, 'expires_at': string, 'input_requirements': list<mixed>, 'selection_required': bool, 'status': string}|mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCheckoutSessionDeliveryQuote.php)

## api.getCheckoutSessionDeliverySelectionHistory

Returns one checkout selection with immutable economics, lifecycle events, and retention-aware private data.

`GET /v1/checkout-sessions/{checkout_session_id}/delivery-selections/{delivery_selection_id}`

Input: `array{'checkout_session_id': string, 'delivery_selection_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCheckoutSessionDeliverySelectionHistory.php)

## api.getCreditNote

Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/credit-notes/{credit_note_id}`

Input: `array{'credit_note_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCreditNote.php)

## api.getCreditNoteAllocation

Returns one allocation. A non-null reversed_at means the credit was returned to the credit note and the invoice balance reopened.

`GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}`

Input: `array{'credit_note_id': string, 'credit_note_allocation_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCreditNoteAllocation.php)

## api.getCreditNotePDF

Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/credit-notes/{credit_note_id}/pdf`

Input: `array{'credit_note_id': string, 'Flint-Version'?: string}`

Response: `null`

[Example](examples/api-getCreditNotePDF.php)

## api.getCurrentAPIKeyRequestLog

Returns redacted request log detail for a request generated by the authenticated API key. Detail responses remain current-key scoped and redact headers, query parameters, request bodies, and response bodies before returning them.

`GET /v1/developer/request-logs/{api_request_log_id}`

Input: `array{'api_request_log_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCurrentAPIKeyRequestLog.php)

## api.getCustomer

Returns a single customer by ID.

`GET /v1/customers/{customer_id}`

Input: `array{'customer_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCustomer.php)

## api.getCustomerAddress

Returns one saved address owned by the customer.

`GET /v1/customers/{customer_id}/addresses/{customer_address_id}`

Input: `array{'customer_id': string, 'customer_address_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCustomerAddress.php)

## api.getCustomerDeletionRequest

Returns the current status of a tracked deletion request.

`GET /v1/customers/{customer_id}/deletion-requests/{customer_deletion_request_id}`

Input: `array{'customer_id': string, 'customer_deletion_request_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getCustomerDeletionRequest.php)

## api.getDeliveryLocationSet

Returns the current revision and lifecycle state for one delivery location set.

`GET /v1/delivery-location-sets/{delivery_location_set_id}`

Input: `array{'delivery_location_set_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeliveryLocationSet.php)

## api.getDeliveryMethod

Returns the current revision and lifecycle state for one delivery method.

`GET /v1/delivery-methods/{delivery_method_id}`

Input: `array{'delivery_method_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeliveryMethod.php)

## api.getDeliveryProfile

Returns the current revision and lifecycle state for one delivery profile.

`GET /v1/delivery-profiles/{delivery_profile_id}`

Input: `array{'delivery_profile_id': string, 'include_diagnostics'?: bool, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeliveryProfile.php)

## api.getDeliveryRateCallback

Returns the current revision and lifecycle state for one delivery rate callback.

`GET /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Input: `array{'delivery_rate_callback_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeliveryRateCallback.php)

## api.getDeliveryRevocation

Returns one permanent delivery revocation and its estimated impact at creation time.

`GET /v1/delivery-revocations/{delivery_revocation_id}`

Input: `array{'delivery_revocation_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeliveryRevocation.php)

## api.getDeliveryZone

Returns the current revision and lifecycle state for one delivery zone.

`GET /v1/delivery-zones/{delivery_zone_id}`

Input: `array{'delivery_zone_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeliveryZone.php)

## api.getDeveloperAuthContext

Returns non-secret metadata for the authenticated API key, including its merchant, environment, sandbox binding, and granted scopes. A valid API key is required, but no additional API scope is required.

`GET /v1/developer/auth-context`

Input: `array{'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeveloperAuthContext.php)

## api.getDeveloperPartnerApp

Returns a single partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}`

Input: `array{'X-Request-Id'?: string, 'partner_app_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeveloperPartnerApp.php)

## api.getDeveloperPartnerAppInstall

Returns a single install for a partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}`

Input: `array{'X-Request-Id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeveloperPartnerAppInstall.php)

## api.getDeveloperSandbox

Returns a single sandbox by ID.

`GET /v1/developer/sandboxes/{sandbox_id}`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDeveloperSandbox.php)

## api.getDevice

Returns a single device by ID.

`GET /v1/devices/{device_id}`

Input: `array{'device_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDevice.php)

## api.getDispute

Returns one dispute by ID, with optional customer, order, and payment intent expansions.

`GET /v1/disputes/{dispute_id}`

Input: `array{'dispute_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getDispute.php)

## api.getEffectiveSettings

Returns the fully resolved effective settings for the authenticated merchant. Optional device_id or location_id can be used to resolve inherited overrides.

`GET /v1/settings/effective`

Input: `array{'location_id'?: string, 'device_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getEffectiveSettings.php)

## api.getFeedbackReport

Returns one immutable feedback report in the credential's merchant and environment.

`GET /v1/feedback-reports/{feedback_report_id}`

Input: `array{'feedback_report_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getFeedbackReport.php)

## api.getFraudWarning

Get an early fraud warning for the authenticated merchant environment.

`GET /v1/fraud-warnings/{fraud_warning_id}`

Input: `array{'fraud_warning_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getFraudWarning.php)

## api.getFulfillment

Retrieves a single fulfillment by ID.

`GET /v1/fulfillments/{fulfillment_id}`

Input: `array{'fulfillment_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getFulfillment.php)

## api.getFulfillmentEvent

Retrieves one provider-neutral fulfillment event by ID.

`GET /v1/fulfillment-events/{fulfillment_event_id}`

Input: `array{'fulfillment_event_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getFulfillmentEvent.php)

## api.getFulfillmentNotification

Retrieves one fulfillment notification audit record by ID.

`GET /v1/fulfillment-notifications/{fulfillment_notification_id}`

Input: `array{'fulfillment_notification_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getFulfillmentNotification.php)

## api.getInvoice

Returns a single invoice by ID.

`GET /v1/invoices/{invoice_id}`

Input: `array{'invoice_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getInvoice.php)

## api.getInvoicePaymentAttempt

Returns one card or ACH collection attempt for the invoice.

`GET /v1/invoices/{invoice_id}/payment-attempts/{invoice_payment_attempt_id}`

Input: `array{'invoice_id': string, 'invoice_payment_attempt_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getInvoicePaymentAttempt.php)

## api.getInvoicePaymentTerm

Returns one invoice payment term for the authenticated merchant.

`GET /v1/invoice-payment-terms/{invoice_payment_term_id}`

Input: `array{'invoice_payment_term_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getInvoicePaymentTerm.php)

## api.getInvoicePDF

Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/invoices/{invoice_id}/pdf`

Input: `array{'invoice_id': string, 'Flint-Version'?: string}`

Response: `null`

[Example](examples/api-getInvoicePDF.php)

## api.getLocation

Get location.

`GET /v1/locations/{location_id}`

Input: `array{'location_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getLocation.php)

## api.getMe

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single customer by ID.

`GET /v1/me`

Input: `array{'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMe.php)

## api.getMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one saved address owned by the customer.

`GET /v1/me/addresses/{customer_address_id}`

Input: `array{'customer_address_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMeAddress.php)

## api.getMeCreditNote

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}`

Input: `array{'invoice_id': string, 'credit_note_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMeCreditNote.php)

## api.getMeCreditNotePDF

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf`

Input: `array{'invoice_id': string, 'credit_note_id': string, 'Flint-Version'?: string}`

Response: `null`

[Example](examples/api-getMeCreditNotePDF.php)

## api.getMeDeletionRequest

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns the current status of a tracked deletion request.

`GET /v1/me/deletion-requests/{customer_deletion_request_id}`

Input: `array{'customer_deletion_request_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMeDeletionRequest.php)

## api.getMeInvoice

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single invoice by ID.

`GET /v1/me/invoices/{invoice_id}`

Input: `array{'invoice_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMeInvoice.php)

## api.getMeInvoicePDF

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Downloads the merchant-authenticated PDF artifact generated from the invoice snapshot.

`GET /v1/me/invoices/{invoice_id}/pdf`

Input: `array{'invoice_id': string, 'Flint-Version'?: string}`

Response: `null`

[Example](examples/api-getMeInvoicePDF.php)

## api.getMeOrder

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single order by ID.

`GET /v1/me/orders/{order_id}`

Input: `array{'order_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMeOrder.php)

## api.getMerchant

Returns the authenticated merchant by ID.

`GET /v1/merchants/{merchant_id}`

Input: `array{'merchant_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMerchant.php)

## api.getMerchantBillingBalance

Returns what the merchant currently owes Flint and owns as account credit in one currency.

`GET /v1/merchant-billing-balances/{merchant_billing_balance_id}`

Input: `array{'merchant_billing_balance_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMerchantBillingBalance.php)

## api.getMerchantSubscriptionInvoice

Returns one invoice issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-subscription-invoices/{merchant_subscription_invoice_id}`

Input: `array{'merchant_subscription_invoice_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMerchantSubscriptionInvoice.php)

## api.getMeReturn

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.

`GET /v1/me/returns/{return_id}`

Input: `array{'return_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMeReturn.php)

## api.getMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a single subscription by ID.

`GET /v1/me/subscriptions/{subscription_id}`

Input: `array{'subscription_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getMeSubscription.php)

## api.getModifierGroup

Get modifier group.

`GET /v1/modifier-groups/{modifier_group_id}`

Input: `array{'modifier_group_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getModifierGroup.php)

## api.getModifierSet

Get modifier set.

`GET /v1/modifier-sets/{modifier_set_id}`

Input: `array{'modifier_set_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getModifierSet.php)

## api.getOnboardingState

Returns the consolidated onboarding state machine, including the primary next step for agents or humans. This endpoint is read-only.

`GET /v1/onboarding/state`

Input: `array{'sandbox_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getOnboardingState.php)

## api.getOpenAPISpec

Returns the Flint public OpenAPI document for tooling, schema inspection, and client generation.

`GET /v1/openapi.json`

Input: `array{'version'?: string, 'Flint-Version'?: string}`

Response: `object{}`

[Example](examples/api-getOpenAPISpec.php)

## api.getOrCreateInvoiceCheckoutSession

Returns the current open invoice checkout session and aligned card attempt when they still match the invoice balance and collection run. A newly created session and attempt share the fixed expiration of the active invoice public-link generation. Unexpired sessions are reused regardless of remaining lifetime; active payment work returns a resolving conflict instead of creating competing collection.

`POST /v1/invoices/{invoice_id}/checkout-session`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getOrCreateInvoiceCheckoutSession.php)

## api.getOrCreateReturnResolutionCheckoutSession

Create or reuse the standard hosted checkout session for a buyer-owed replacement Order linked to this Return resolution.

`POST /v1/return-resolutions/{return_resolution_id}/checkout-session`

Input: `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getOrCreateReturnResolutionCheckoutSession.php)

## api.getOrder

Returns a single order by ID.

`GET /v1/orders/{order_id}`

Input: `array{'order_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getOrder.php)

## api.getOrderCurrentDeliverySelection

Returns the delivery selection committed to an order.

`GET /v1/orders/{order_id}/delivery-selections/current`

Input: `array{'order_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getOrderCurrentDeliverySelection.php)

## api.getOrderPaymentAttempt

Returns one durable payment attempt for the order. Checkout-session callers can read only attempts created by their own session.

`GET /v1/orders/{order_id}/payment-attempts/{payment_attempt_id}`

Input: `array{'order_id': string, 'payment_attempt_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getOrderPaymentAttempt.php)

## api.getOrganization

Returns an accessible organization by ID.

`GET /v1/organizations/{organization_id}`

Input: `array{'organization_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getOrganization.php)

## api.getPackage

Retrieves one package by ID.

`GET /v1/packages/{package_id}`

Input: `array{'package_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPackage.php)

## api.getPackageItem

Retrieves one package item by ID.

`GET /v1/packages/{package_id}/items/{package_item_id}`

Input: `array{'package_id': string, 'package_item_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPackageItem.php)

## api.getPaymentIntent

Returns a single payment intent by ID.

`GET /v1/payment-intents/{payment_intent_id}`

Input: `array{'payment_intent_id': string, 'expand'?: list<string>, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPaymentIntent.php)

## api.getPaymentLink

Returns a single payment link by ID.

`GET /v1/payment-links/{payment_link_id}`

Input: `array{'payment_link_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPaymentLink.php)

## api.getPaymentLinkPublic

Returns the sanitized buyer-facing payment-link snapshot and a private resolution context for this browser operation.

`GET /v1/payment-links/{payment_link_id}/public`

Input: `array{'payment_link_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPaymentLinkPublic.php)

## api.getPaymentMethod

Returns a single payment method by ID.

`GET /v1/payment-methods/{payment_method_id}`

Input: `array{'payment_method_id': string, 'expand'?: list<string>, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPaymentMethod.php)

## api.getPaymentMethodDomain

Returns one environment-scoped payment method domain and its Apple Pay and Google Pay readiness.

`GET /v1/payment-method-domains/{payment_method_domain_id}`

Input: `array{'payment_method_domain_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPaymentMethodDomain.php)

## api.getPaymentVolumeTimeseries

Returns merchant payment volume buckets for the requested time range.

`GET /v1/analytics/payment-volume-timeseries`

Input: `array{'range': string, 'timezone'?: string, 'include_previous_period'?: bool, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPaymentVolumeTimeseries.php)

## api.getPayout

Returns one payout by ID, with optional related payout and payout destination expansions.

`GET /v1/payouts/{payout_id}`

Input: `array{'payout_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPayout.php)

## api.getPayoutDestination

Returns one payout destination by ID.

`GET /v1/payout-settings/destinations/{payout_destination_id}`

Input: `array{'payout_destination_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPayoutDestination.php)

## api.getPayoutSettings

Returns payout settings that control default payout behavior for the authenticated merchant.

`GET /v1/payout-settings`

Input: `array{'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPayoutSettings.php)

## api.getProduct

Returns a single product by ID.

`GET /v1/products/{product_id}`

Input: `array{'product_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getProduct.php)

## api.getProductOption

Get product option.

`GET /v1/products/{product_id}/options/{option_id}`

Input: `array{'product_id': string, 'option_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getProductOption.php)

## api.getProductVariant

Get product variant.

`GET /v1/products/{product_id}/variants/{variant_id}`

Input: `array{'product_id': string, 'variant_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getProductVariant.php)

## api.getPromotion

Returns a single promotion by ID.

`GET /v1/promotions/{promotion_id}`

Input: `array{'promotion_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getPromotion.php)

## api.getRefund

Returns a single refund by ID.

`GET /v1/refunds/{refund_id}`

Input: `array{'refund_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getRefund.php)

## api.getReport

Returns one report and its terminal download or failure details when available.

`GET /v1/reports/{report_id}`

Input: `array{'report_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReport.php)

## api.getReportDownload

Authorizes the stable Flint download URL and redirects to a short-lived private file URL.

`GET /v1/report-downloads/{report_download_id}`

Input: `array{'report_download_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `null`

[Example](examples/api-getReportDownload.php)

## api.getResourceTimeline

Returns summary-only API request, webhook event, and webhook delivery attempt entries for a single public API resource. The caller must have developer.resource_timelines.read and the matching read scope for the requested resource type.

`GET /v1/developer/resource-timelines/{resource_id}`

Input: `array{'resource_id': string, 'resource_type'?: string, 'include'?: list<string>, 'page_size'?: int, 'page_token'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-getResourceTimeline.php)

## api.getReturn

Retrieve a Return with its line items, policy evaluation, financial summary, and completion blockers. Supports expand for the order, the customer, and each line item's reason and fulfillment.

`GET /v1/returns/{return_id}`

Input: `array{'return_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturn.php)

## api.getReturnDisposition

Retrieve one disposition with its type, destination, quantity, status, and any linked inventory effect.

`GET /v1/return-dispositions/{return_disposition_id}`

Input: `array{'return_disposition_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnDisposition.php)

## api.getReturnInspection

Retrieve one inspection with its line items, findings, and current or superseded observation status.

`GET /v1/return-inspections/{return_inspection_id}`

Input: `array{'return_inspection_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnInspection.php)

## api.getReturnLineItem

Retrieve one Return line item, including its quantity counters and the reason the buyer selected.

`GET /v1/returns/{return_id}/line-items/{return_line_item_id}`

Input: `array{'return_id': string, 'return_line_item_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnLineItem.php)

## api.getReturnPolicy

Retrieve one Return policy. Supports expand for current_revision.

`GET /v1/return-policies/{return_policy_id}`

Input: `array{'return_policy_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnPolicy.php)

## api.getReturnPolicyRevision

Retrieve one immutable policy revision, including the exact rules a Return was evaluated against.

`GET /v1/return-policies/{return_policy_id}/revisions/{return_policy_revision_id}`

Input: `array{'return_policy_id': string, 'return_policy_revision_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnPolicyRevision.php)

## api.getReturnReason

Retrieve one Return reason with its handle, category handles, and status.

`GET /v1/return-reasons/{return_reason_id}`

Input: `array{'return_reason_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnReason.php)

## api.getReturnReceipt

Retrieve one merchandise receipt with its line items and its current or superseded observation status.

`GET /v1/return-receipts/{return_receipt_id}`

Input: `array{'return_receipt_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnReceipt.php)

## api.getReturnResolution

Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds, payments, and replacement order. Supports expand for those links.

`GET /v1/return-resolutions/{return_resolution_id}`

Input: `array{'return_resolution_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReturnResolution.php)

## api.getReview

Get a payment review for the authenticated merchant environment.

`GET /v1/reviews/{review_id}`

Input: `array{'review_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getReview.php)

## api.getRiskList

Get a risk list for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}`

Input: `array{'risk_list_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getRiskList.php)

## api.getRiskListItem

Get a risk list item for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}`

Input: `array{'risk_list_id': string, 'risk_list_item_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getRiskListItem.php)

## api.getRiskRule

Get a risk rule for the authenticated merchant environment.

`GET /v1/risk-rules/{risk_rule_id}`

Input: `array{'risk_rule_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getRiskRule.php)

## api.getRiskRuleAttributeRegistry

Get the risk rule attribute registry for the authenticated merchant environment.

`GET /v1/risk-rules/attributes`

Input: `array{'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getRiskRuleAttributeRegistry.php)

## api.getSettings

Returns the raw merchant-scoped settings record for the authenticated merchant. No inheritance is applied.

`GET /v1/settings`

Input: `array{'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getSettings.php)

## api.getShipment

Retrieves one shipment execution record by ID.

`GET /v1/shipments/{shipment_id}`

Input: `array{'shipment_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getShipment.php)

## api.getSubscription

Returns a single subscription by ID.

`GET /v1/subscriptions/{subscription_id}`

Input: `array{'subscription_id': string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getSubscription.php)

## api.getSubscriptionAnalytics

Returns windowed subscription metrics plus current subscription snapshot metrics.

`GET /v1/analytics/subscriptions`

Input: `array{'range': string, 'timezone'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getSubscriptionAnalytics.php)

## api.getSubscriptionPaymentRetry

Returns one durable manual subscription payment retry.

`GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`

Input: `array{'subscription_id': string, 'subscription_payment_retry_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getSubscriptionPaymentRetry.php)

## api.getSubscriptionPlan

Returns a single subscription plan by ID.

`GET /v1/subscription-plans/{plan_id}`

Input: `array{'plan_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getSubscriptionPlan.php)

## api.getWebhookDelivery

Returns one endpoint delivery and its current retry state.

`GET /v1/webhook-deliveries/{webhook_delivery_id}`

Input: `array{'webhook_delivery_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getWebhookDelivery.php)

## api.getWebhookEndpoint

Returns a single webhook endpoint by ID. The signing secret is omitted after creation.

`GET /v1/webhook-endpoints/{webhook_endpoint_id}`

Input: `array{'webhook_endpoint_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getWebhookEndpoint.php)

## api.getWebhookEvent

Returns a specific webhook event for the authenticated merchant.

`GET /v1/webhook-events/{webhook_event_id}`

Input: `array{'webhook_event_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-getWebhookEvent.php)

## api.grantOrganizationMembership

Adds or updates a direct organization membership for a user.

`POST /v1/organizations/{organization_id}/memberships`

Input: `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'role': string, 'user_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-grantOrganizationMembership.php)

## api.issueCreditNote

Issues a draft credit note. Assigns credit_note_number, freezes the lines, renders the PDF, and sets unallocated_money to the total. The over-credit check runs here rather than on line edits: across every issued credit note, an invoice line cannot be credited past its frozen value. Issuing does not change the invoice; allocating does.

`POST /v1/credit-notes/{credit_note_id}/issue`

Input: `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-issueCreditNote.php)

## api.issueDeveloperSandboxTestKey

Creates a new test API key that is bound to the target sandbox.

`POST /v1/developer/sandboxes/{sandbox_id}/test-key`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string, 'body': array{'name': string, 'scopes'?: list<string>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-issueDeveloperSandboxTestKey.php)

## api.issueInvoice

Issues the invoice, creates the buyer-access link, and uses the selected delivery mode. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/issue`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'delivery_mode'?: string, 'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-issueInvoice.php)

## api.listAPIKeys

Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets are never returned.

`GET /v1/api-keys`

Input: `array{'status'?: string, 'page_size'?: int, 'page_token'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listAPIKeys.php)

## api.listBalances

Returns an unpaginated current balance snapshot grouped by currency and balance source for the authenticated merchant.

`GET /v1/balances`

Input: `array{'currency'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-listBalances.php)

## api.listBalanceTransactions

Returns a paginated ledger of balance-affecting transactions, including availability timing and related public resources.

`GET /v1/balance-transactions`

Input: `array{'currency'?: string, 'type'?: string, 'related_object_type'?: string, 'related_object_id'?: string, 'status'?: string, 'created_after'?: string, 'created_before'?: string, 'available_after'?: string, 'available_before'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listBalanceTransactions.php)

## api.listBundleComponents

List bundle components.

`GET /v1/bundles/{bundle_id}/components`

Input: `array{'bundle_id': string, 'page_size'?: int, 'page_token'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listBundleComponents.php)

## api.listBundles

List bundles.

`GET /v1/bundles`

Input: `array{'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'sku'?: string, 'query'?: string, 'category_handle'?: string, 'status'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listBundles.php)

## api.listCapabilities

Returns payment and money movement capability readiness for the authenticated merchant.

`GET /v1/capabilities`

Input: `array{'domain'?: string, 'capability'?: string, 'status'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCapabilities.php)

## api.listCategories

List categories.

`GET /v1/categories`

Input: `array{'status'?: string, 'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCategories.php)

## api.listCheckoutSessions

Returns a paginated list of checkout sessions for the authenticated merchant.

`GET /v1/checkout-sessions`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'order_id'?: string, 'payment_link_id'?: string, 'customer_id'?: string, 'origin'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'expires_after'?: string, 'expires_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCheckoutSessions.php)

## api.listCreditNoteAllocations

Returns every allocation made from a credit note, including reversed ones. Filter by idempotency_key to find the allocation a given request produced.

`GET /v1/credit-notes/{credit_note_id}/allocations`

Input: `array{'credit_note_id': string, 'page_size'?: int, 'page_token'?: string, 'idempotency_key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCreditNoteAllocations.php)

## api.listCreditNotes

Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.

`GET /v1/credit-notes`

Input: `array{'page_size'?: int, 'page_token'?: string, 'invoice_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCreditNotes.php)

## api.listCurrentAPIKeyRequestLogs

Returns request log summaries generated by the authenticated API key. Results are always scoped to the calling key. Full request and response bodies are intentionally omitted from this public API surface to reduce the risk of sensitive data leakage.

`GET /v1/developer/request-logs`

Input: `array{'page_size'?: int, 'page_token'?: string, 'request_id'?: string, 'http_method'?: string, 'path_query'?: string, 'resource_type'?: string, 'resource_id'?: string, 'status_bucket'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCurrentAPIKeyRequestLogs.php)

## api.listCustomerAddresses

Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/customers/{customer_id}/addresses`

Input: `array{'customer_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCustomerAddresses.php)

## api.listCustomerDeletionRequests

Lists deletion requests across the selected merchant environment so a merchant can discover and review buyer-created requests.

`GET /v1/customer-deletion-requests`

Input: `array{'status'?: string, 'customer_id'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCustomerDeletionRequests.php)

## api.listCustomers

Returns a paginated list of customers for the authenticated merchant.

`GET /v1/customers`

Input: `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'email'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'expand'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listCustomers.php)

## api.listDeliveryLocationSets

Returns delivery location sets in a stable, cursor-paginated order.

`GET /v1/delivery-location-sets`

Input: `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'delivery_method_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeliveryLocationSets.php)

## api.listDeliveryMethods

Returns delivery methods in a stable, cursor-paginated order.

`GET /v1/delivery-methods`

Input: `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'type'?: string, 'delivery_zone_id'?: string, 'delivery_location_set_id'?: string, 'delivery_rate_callback_id'?: string, 'location_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeliveryMethods.php)

## api.listDeliveryProfiles

Returns delivery profiles in a stable, cursor-paginated order.

`GET /v1/delivery-profiles`

Input: `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'resolution_mode'?: string, 'include_diagnostics'?: bool, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeliveryProfiles.php)

## api.listDeliveryQuotes

Returns persisted delivery quote diagnostics in stable creation order.

`GET /v1/delivery-quotes`

Input: `array{'checkout_session_id'?: string, 'order_id'?: string, 'status'?: string, 'evaluation_status'?: string, 'created_after'?: string, 'created_before'?: string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeliveryQuotes.php)

## api.listDeliveryRateCallbacks

Returns delivery rate callbacks in a stable, cursor-paginated order.

`GET /v1/delivery-rate-callbacks`

Input: `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'delivery_method_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeliveryRateCallbacks.php)

## api.listDeliveryZones

Returns delivery zones in a stable, cursor-paginated order.

`GET /v1/delivery-zones`

Input: `array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: string, 'delivery_method_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeliveryZones.php)

## api.listDeveloperPartnerAppInstalls

Returns installs for a partner app owned by the authenticated merchant.

`GET /v1/developer/partner/apps/{partner_app_id}/installs`

Input: `array{'X-Request-Id'?: string, 'partner_app_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeveloperPartnerAppInstalls.php)

## api.listDeveloperPartnerApps

Returns partner apps owned by the authenticated merchant.

`GET /v1/developer/partner/apps`

Input: `array{'X-Request-Id'?: string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeveloperPartnerApps.php)

## api.listDeveloperSandboxes

Returns the merchant's sandboxes, including archived sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session token during setup or a normal external API key afterward.

`GET /v1/developer/sandboxes`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDeveloperSandboxes.php)

## api.listDevices

Returns a paginated list of devices for the authenticated merchant.

`GET /v1/devices`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'location_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDevices.php)

## api.listDisputes

Returns a paginated list of disputes for the authenticated merchant with optional payment, customer, status, reason, case type, and timing filters.

`GET /v1/disputes`

Input: `array{'payment_intent_id'?: string, 'order_id'?: string, 'customer_id'?: string, 'status'?: string, 'reason'?: string, 'case_type'?: string, 'created_after'?: string, 'created_before'?: string, 'evidence_due_after'?: string, 'evidence_due_before'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listDisputes.php)

## api.listFeedbackReports

Lists feedback reports in descending creation order for the credential's merchant and environment.

`GET /v1/feedback-reports`

Input: `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listFeedbackReports.php)

## api.listFraudWarnings

List early fraud warnings for the authenticated merchant environment.

`GET /v1/fraud-warnings`

Input: `array{'actionable'?: bool, 'payment_intent_id'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listFraudWarnings.php)

## api.listFulfillmentEvents

Lists provider-neutral fulfillment events. Results default to newest received first.

`GET /v1/fulfillment-events`

Input: `array{'fulfillment_id'?: string, 'shipment_id'?: string, 'package_id'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'event_type'?: string, 'external_system'?: string, 'external_event_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'sort_by'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listFulfillmentEvents.php)

## api.listFulfillmentNotifications

Returns persisted fulfillment notification audit records. Results default to newest created first.

`GET /v1/fulfillment-notifications`

Input: `array{'fulfillment_id'?: string, 'order_id'?: string, 'fulfillment_event_id'?: string, 'page_size'?: int, 'page_token'?: string, 'channel'?: string, 'status'?: string, 'notification_type'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listFulfillmentNotifications.php)

## api.listFulfillments

Returns fulfillments for operational queue and order-detail views. Results default to newest created first.

`GET /v1/fulfillments`

Input: `array{'expand'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'type'?: string, 'location_id'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'sort_direction'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listFulfillments.php)

## api.listInventoryAdjustments

List inventory adjustments.

`GET /v1/inventory-adjustments`

Input: `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'reason'?: string, 'idempotency_key'?: string, 'source_system_type'?: string, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryAdjustments.php)

## api.listInventoryAllocationPolicies

List inventory allocation policies.

`GET /v1/inventory-allocation-policies`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryAllocationPolicies.php)

## api.listInventoryCounts

List inventory counts.

`GET /v1/inventory-counts`

Input: `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'status'?: string, 'idempotency_key'?: string, 'created_after'?: string, 'created_before'?: string, 'applied_after'?: string, 'applied_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryCounts.php)

## api.listInventoryItems

List inventory items.

`GET /v1/inventory-items`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'sku'?: string, 'barcode'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryItems.php)

## api.listInventoryLevels

List inventory levels. Levels are strongly consistent individually, but pages may reflect different committed instants.

`GET /v1/inventory-levels`

Input: `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'has_available_quantity'?: bool, 'has_unavailable_condition'?: bool, 'has_shortage'?: bool, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryLevels.php)

## api.listInventoryMovements

List inventory movements. Filter by idempotency_key to recover the movements a command produced.

`GET /v1/inventory-movements`

Input: `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'type'?: string, 'reason'?: string, 'idempotency_key'?: string, 'return_id'?: string, 'return_disposition_id'?: string, 'source_system_type'?: string, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'created_after'?: string, 'created_before'?: string, 'source_reference_type'?: string, 'source_reference_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryMovements.php)

## api.listInventoryReceipts

List completed inventory receipt effects. Use typed Return filters for reconciliation when the receipt was created by Returns.

`GET /v1/inventory-receipts`

Input: `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'receiving_location_id'?: string, 'inventory_reservation_id'?: string, 'return_id'?: string, 'return_disposition_id'?: string, 'idempotency_key'?: string, 'source_system_type'?: string, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryReceipts.php)

## api.listInventoryReservations

List inventory reservations.

`GET /v1/inventory-reservations`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'owner_type'?: string, 'owner_key'?: string, 'idempotency_key'?: string, 'has_at_risk_quantity'?: bool, 'closed_reason'?: string, 'owner_expires_after'?: string, 'owner_expires_before'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryReservations.php)

## api.listInventoryTransfers

List inventory transfers.

`GET /v1/inventory-transfers`

Input: `array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'origin_location_id'?: string, 'destination_location_id'?: string, 'status'?: string, 'idempotency_key'?: string, 'external_reference'?: string, 'query'?: string, 'closed_reason'?: string, 'created_after'?: string, 'created_before'?: string, 'departed_after'?: string, 'departed_before'?: string, 'received_after'?: string, 'received_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInventoryTransfers.php)

## api.listInvoiceDeliveryAttempts

Returns email delivery attempts for send and reminder actions.

`GET /v1/invoices/{invoice_id}/delivery-attempts`

Input: `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInvoiceDeliveryAttempts.php)

## api.listInvoiceEvents

Returns the audit timeline for an invoice.

`GET /v1/invoices/{invoice_id}/events`

Input: `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInvoiceEvents.php)

## api.listInvoicePaymentAttempts

Lists card and ACH collection attempts for an invoice in reverse chronological order.

`GET /v1/invoices/{invoice_id}/payment-attempts`

Input: `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'idempotency_key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInvoicePaymentAttempts.php)

## api.listInvoicePaymentTerms

Returns a paginated list of invoice payment terms for the authenticated merchant.

`GET /v1/invoice-payment-terms`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInvoicePaymentTerms.php)

## api.listInvoices

Returns a paginated list of invoices for the authenticated merchant.

`GET /v1/invoices`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'customer_id'?: string, 'order_id'?: string, 'external_reference_id'?: string, 'created_after'?: string, 'created_before'?: string, 'due_after'?: string, 'due_before'?: string, 'is_overdue'?: bool, 'has_amount_due'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listInvoices.php)

## api.listLocations

List Locations. Filtering by inventory_allocation_status requires commerce.inventory.read; the inventory block is omitted entirely when the caller lacks inventory read authority.

`GET /v1/locations`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'inventory_allocation_status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listLocations.php)

## api.listMeAddresses

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/me/addresses`

Input: `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeAddresses.php)

## api.listMeCreditNotes

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.

`GET /v1/me/invoices/{invoice_id}/credit-notes`

Input: `array{'invoice_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeCreditNotes.php)

## api.listMeFulfillments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns fulfillments for operational queue and order-detail views. Results default to newest created first.

`GET /v1/me/fulfillments`

Input: `array{'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'type'?: string, 'location_id'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'sort_direction'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeFulfillments.php)

## api.listMeInvoices

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of invoices for the authenticated merchant.

`GET /v1/me/invoices`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'order_id'?: string, 'external_reference_id'?: string, 'created_after'?: string, 'created_before'?: string, 'due_after'?: string, 'due_before'?: string, 'is_overdue'?: bool, 'has_amount_due'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeInvoices.php)

## api.listMeOrderActivities

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.

`GET /v1/me/orders/{order_id}/activities`

Input: `array{'order_id': string, 'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'type'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeOrderActivities.php)

## api.listMeOrders

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of orders for the authenticated merchant.

`GET /v1/me/orders`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'payment_status'?: string, 'refund_status'?: string, 'fulfillment_status'?: list<string>, 'order_number'?: string, 'external_reference_id'?: string, 'origin'?: string, 'query'?: string, 'subscription_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeOrders.php)

## api.listMePackages

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists package records, newest created first.

`GET /v1/me/packages`

Input: `array{'shipment_id'?: string, 'fulfillment_id'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMePackages.php)

## api.listMePaymentMethods

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned.

`GET /v1/me/payment-methods`

Input: `array{'page_size'?: int, 'page_token'?: string, 'type'?: string, 'status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMePaymentMethods.php)

## api.listMePayments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of payment intents for the authenticated merchant.

`GET /v1/me/payments`

Input: `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'invoice_id'?: string, 'status'?: string, 'origin'?: string, 'risk_level'?: list<string>, 'payment_flow'?: list<string>, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'state'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMePayments.php)

## api.listMerchantBillingBalances

Returns what the merchant currently owes Flint and owns as account credit by currency.

`GET /v1/merchant-billing-balances`

Input: `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMerchantBillingBalances.php)

## api.listMerchantSubscriptionInvoices

Returns invoices issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-subscription-invoices`

Input: `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMerchantSubscriptionInvoices.php)

## api.listMeRefunds

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of refunds for the authenticated merchant.

`GET /v1/me/refunds`

Input: `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'payment_intent_id'?: string, 'status'?: string, 'reason'?: list<string>, 'refund_method'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeRefunds.php)

## api.listMeReturns

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.

`GET /v1/me/returns`

Input: `array{'created_after'?: string, 'created_before'?: string, 'decision_status'?: list<string>, 'external_reference_id'?: string, 'merchandise_status'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'receiving_location_id'?: string, 'resolution_status'?: list<string>, 'resolution_type'?: list<string>, 'return_number'?: string, 'return_reason_id'?: string, 'status'?: list<string>, 'updated_after'?: string, 'updated_before'?: string, 'work_type'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeReturns.php)

## api.listMeShipments

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Lists shipment execution records, newest created first.

`GET /v1/me/shipments`

Input: `array{'order_id'?: string, 'fulfillment_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'return_id'?: string, 'handed_off_after'?: string, 'handed_off_before'?: string, 'created_after'?: string, 'created_before'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeShipments.php)

## api.listMeSubscriptions

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Returns a paginated list of subscriptions for the authenticated merchant.

`GET /v1/me/subscriptions`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'billing_schedule_owner'?: string, 'awaiting_billing_schedule'?: bool, 'plan_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'next_billing_at_after'?: string, 'next_billing_at_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listMeSubscriptions.php)

## api.listModifierGroups

List modifier groups.

`GET /v1/modifier-groups`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'modifier_group_type'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listModifierGroups.php)

## api.listModifierSets

List modifier sets.

`GET /v1/modifier-sets`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listModifierSets.php)

## api.listOrderActivities

Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.

`GET /v1/orders/{order_id}/activities`

Input: `array{'order_id': string, 'page_size'?: int, 'page_token'?: string, 'sort_direction'?: string, 'type'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listOrderActivities.php)

## api.listOrderPaymentAttempts

Returns payment attempts for the order, newest first. Checkout-session callers see only attempts created by their own session.

`GET /v1/orders/{order_id}/payment-attempts`

Input: `array{'order_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listOrderPaymentAttempts.php)

## api.listOrders

Returns a paginated list of orders for the authenticated merchant.

`GET /v1/orders`

Input: `array{'page_size'?: int, 'page_token'?: string, 'customer_id'?: string, 'status'?: string, 'payment_status'?: string, 'refund_status'?: string, 'fulfillment_status'?: list<string>, 'order_number'?: string, 'external_reference_id'?: string, 'origin'?: string, 'query'?: string, 'subscription_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listOrders.php)

## api.listOrganizationMemberships

Returns the direct memberships for an organization.

`GET /v1/organizations/{organization_id}/memberships`

Input: `array{'organization_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listOrganizationMemberships.php)

## api.listOrganizations

Returns the organizations accessible to the caller, filtered to the authenticated merchant's organization subtree for external API keys.

`GET /v1/organizations`

Input: `array{'parent_organization_id'?: string, 'status'?: string, 'page_size'?: int, 'page_token'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listOrganizations.php)

## api.listPackageItems

Lists order line quantities contained in packages.

`GET /v1/packages/{package_id}/items`

Input: `array{'package_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPackageItems.php)

## api.listPackages

Lists package records, newest created first.

`GET /v1/packages`

Input: `array{'shipment_id'?: string, 'fulfillment_id'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPackages.php)

## api.listPaymentIntents

Returns a paginated list of payment intents for the authenticated merchant.

`GET /v1/payment-intents`

Input: `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'customer_id'?: string, 'invoice_id'?: string, 'status'?: string, 'origin'?: string, 'risk_level'?: list<string>, 'payment_flow'?: list<string>, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'state'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPaymentIntents.php)

## api.listPaymentLinks

Returns a paginated list of payment links for the authenticated merchant.

`GET /v1/payment-links`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'payment_link_type'?: string, 'has_plan'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPaymentLinks.php)

## api.listPaymentMethodDomains

Returns payment method domains ordered by payment_method_domain_id ascending in the selected Flint environment. Page tokens are opaque, bind to the list parameters, and return a validation error when invalid or mismatched.

`GET /v1/payment-method-domains`

Input: `array{'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPaymentMethodDomains.php)

## api.listPaymentMethods

Returns saved payment methods for the merchant, optionally filtered to a customer. By default, only active payment methods are returned.

`GET /v1/payment-methods`

Input: `array{'customer_id'?: string, 'page_size'?: int, 'page_token'?: string, 'type'?: string, 'status'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPaymentMethods.php)

## api.listPayoutDestinations

Returns a paginated list of payout destinations available to the authenticated merchant.

`GET /v1/payout-settings/destinations`

Input: `array{'currency'?: string, 'type'?: string, 'status'?: string, 'available_payout_method'?: string, 'default_for_currency'?: bool, 'include_deleted'?: bool, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPayoutDestinations.php)

## api.listPayoutEntries

Lists the authoritative balance-transaction allocations for a payout in ascending occurrence order. A paid payout returns an unavailable error instead of incomplete or inferred entries.

`GET /v1/payouts/{payout_id}/entries`

Input: `array{'payout_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPayoutEntries.php)

## api.listPayouts

Returns a paginated list of payouts with optional filters for status, currency, destination, method, and timing.

`GET /v1/payouts`

Input: `array{'currency'?: string, 'method'?: string, 'balance_source_type'?: string, 'payout_destination_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: string, 'created_after'?: string, 'created_before'?: string, 'arrival_after'?: string, 'arrival_before'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPayouts.php)

## api.listProductOptions

List product options.

`GET /v1/products/{product_id}/options`

Input: `array{'product_id': string, 'page_size'?: int, 'page_token'?: string, 'status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listProductOptions.php)

## api.listProducts

Returns a paginated list of products for the authenticated merchant.

`GET /v1/products`

Input: `array{'page_size'?: int, 'page_token'?: string, 'product_type'?: string, 'status'?: string, 'category_handle'?: string, 'external_reference_id'?: string, 'sku'?: string, 'query'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listProducts.php)

## api.listProductVariants

List product variants.

`GET /v1/products/{product_id}/variants`

Input: `array{'product_id': string, 'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listProductVariants.php)

## api.listPromotionCodes

Returns a paginated list of codes for a promotion.

`GET /v1/promotions/{promotion_id}/codes`

Input: `array{'promotion_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPromotionCodes.php)

## api.listPromotions

Returns a paginated list of promotions for the authenticated merchant.

`GET /v1/promotions`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'product_id'?: string, 'variant_id'?: string, 'bundle_id'?: string, 'category_handle'?: string, 'redemption_type'?: string, 'discount_class'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listPromotions.php)

## api.listRefunds

Returns a paginated list of refunds for the authenticated merchant.

`GET /v1/refunds`

Input: `array{'page_size'?: int, 'page_token'?: string, 'order_id'?: string, 'payment_intent_id'?: string, 'customer_id'?: string, 'status'?: string, 'reason'?: list<string>, 'refund_method'?: string, 'min_amount'?: string, 'max_amount'?: string, 'currency'?: string, 'external_reference_id'?: string, 'return_id'?: string, 'return_resolution_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listRefunds.php)

## api.listReports

Lists reports in descending creation order using opaque pagination.

`GET /v1/reports`

Input: `array{'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReports.php)

## api.listReturnDispositions

List merchandise dispositions. Omitting return_id lists dispositions across every Return for the merchant.

`GET /v1/return-dispositions`

Input: `array{'created_after'?: string, 'created_before'?: string, 'disposition_type'?: string, 'external_reference_id'?: string, 'inventory_location_id'?: string, 'occurred_after'?: string, 'occurred_before'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'replaces_return_disposition_id'?: string, 'return_id'?: string, 'return_inspection_line_item_id'?: string, 'return_line_item_id'?: string, 'return_receipt_line_item_id'?: string, 'status'?: string, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnDispositions.php)

## api.listReturnInspections

List inspection observations. Omitting return_id lists inspections across every Return for the merchant.

`GET /v1/return-inspections`

Input: `array{'acceptance_status'?: string, 'created_after'?: string, 'created_before'?: string, 'external_reference_id'?: string, 'inspected_after'?: string, 'inspected_before'?: string, 'location_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'return_id'?: string, 'return_line_item_id'?: string, 'return_receipt_id'?: string, 'source_system_type'?: string, 'status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnInspections.php)

## api.listReturnLineItems

List the line items on a Return with their quantity counters, eligibility, frozen display identity, and return value.

`GET /v1/returns/{return_id}/line-items`

Input: `array{'return_id': string, 'fulfillment_id'?: string, 'merchandise_status'?: list<string>, 'order_line_item_id'?: string, 'page_size'?: int, 'page_token'?: string, 'resolution_status'?: list<string>, 'return_reason_id'?: string, 'status'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnLineItems.php)

## api.listReturnPolicies

List Return policies with their status and current revision.

`GET /v1/return-policies`

Input: `array{'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'status'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnPolicies.php)

## api.listReturnPolicyRevisions

List every published revision of a Return policy.

`GET /v1/return-policies/{return_policy_id}/revisions`

Input: `array{'return_policy_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnPolicyRevisions.php)

## api.listReturnReasons

List Return reasons, including Flint-provided defaults and merchant-defined reasons.

`GET /v1/return-reasons`

Input: `array{'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'source'?: string, 'status'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnReasons.php)

## api.listReturnReceipts

List merchandise receipts. Omitting return_id lists receipts across every Return for the merchant.

`GET /v1/return-receipts`

Input: `array{'created_after'?: string, 'created_before'?: string, 'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'received_after'?: string, 'received_before'?: string, 'receiving_location_id'?: string, 'return_id'?: string, 'return_line_item_id'?: string, 'shipment_id'?: string, 'source_system_type'?: string, 'status'?: string, 'verification_status'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnReceipts.php)

## api.listReturnResolutions

List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for a resolution that already settled.

`GET /v1/return-resolutions`

Input: `array{'action_required_by'?: string, 'corrects_return_resolution_id'?: string, 'created_after'?: string, 'created_before'?: string, 'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'resolution_type'?: list<string>, 'return_id'?: string, 'return_line_item_id'?: string, 'return_policy_revision_id'?: string, 'status'?: list<string>, 'updated_after'?: string, 'updated_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturnResolutions.php)

## api.listReturns

List Returns for the merchant, filtered by order, customer, status, decision, merchandise, resolution, or creation window. Filter by idempotency_key to recover a create whose response never arrived.

`GET /v1/returns`

Input: `array{'created_after'?: string, 'created_before'?: string, 'customer_id'?: string, 'decision_status'?: list<string>, 'external_reference_id'?: string, 'merchandise_status'?: list<string>, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'receiving_location_id'?: string, 'resolution_status'?: list<string>, 'resolution_type'?: list<string>, 'return_number'?: string, 'return_reason_id'?: string, 'status'?: list<string>, 'updated_after'?: string, 'updated_before'?: string, 'work_type'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReturns.php)

## api.listReviews

List payment reviews for the authenticated merchant environment.

`GET /v1/reviews`

Input: `array{'status'?: list<string>, 'risk_level'?: list<string>, 'payment_flow'?: list<string>, 'payment_intent_id'?: string, 'order_id'?: string, 'customer_id'?: string, 'created_after'?: string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listReviews.php)

## api.listRiskListItems

List risk list items for the authenticated merchant environment.

`GET /v1/risk-lists/{risk_list_id}/items`

Input: `array{'risk_list_id': string, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listRiskListItems.php)

## api.listRiskLists

List risk lists for the authenticated merchant environment.

`GET /v1/risk-lists`

Input: `array{'include_archived'?: bool, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listRiskLists.php)

## api.listRiskRules

List risk rules for the authenticated merchant environment.

`GET /v1/risk-rules`

Input: `array{'include_archived'?: bool, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listRiskRules.php)

## api.listShipments

Lists shipment execution records, newest created first.

`GET /v1/shipments`

Input: `array{'order_id'?: string, 'fulfillment_id'?: string, 'page_size'?: int, 'page_token'?: string, 'external_system'?: string, 'external_reference_id'?: string, 'query'?: string, 'return_id'?: string, 'handed_off_after'?: string, 'handed_off_before'?: string, 'created_after'?: string, 'created_before'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listShipments.php)

## api.listSubscriptionPaymentRetries

Returns a subscription's manual payment retries, newest first.

`GET /v1/subscriptions/{subscription_id}/payment-retries`

Input: `array{'subscription_id': string, 'page_size'?: int, 'page_token'?: string, 'idempotency_key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listSubscriptionPaymentRetries.php)

## api.listSubscriptionPlans

Returns a paginated list of subscription plans for the authenticated merchant.

`GET /v1/subscription-plans`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listSubscriptionPlans.php)

## api.listSubscriptions

Returns a paginated list of subscriptions for the authenticated merchant.

`GET /v1/subscriptions`

Input: `array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'billing_schedule_owner'?: string, 'awaiting_billing_schedule'?: bool, 'customer_id'?: string, 'plan_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string, 'created_before'?: string, 'updated_after'?: string, 'updated_before'?: string, 'next_billing_at_after'?: string, 'next_billing_at_before'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listSubscriptions.php)

## api.listWebhookDeliveries

Returns endpoint deliveries created for one canonical webhook event.

`GET /v1/webhook-events/{webhook_event_id}/deliveries`

Input: `array{'webhook_event_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listWebhookDeliveries.php)

## api.listWebhookDeliveryAttempts

Returns the attempts recorded for a specific webhook delivery.

`GET /v1/webhook-deliveries/{webhook_delivery_id}/attempts`

Input: `array{'webhook_delivery_id': string, 'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listWebhookDeliveryAttempts.php)

## api.listWebhookEndpoints

Returns a page of webhook endpoints for the authenticated merchant.

`GET /v1/webhook-endpoints`

Input: `array{'page_size'?: int, 'page_token'?: string, 'event_sources'?: list<string>, 'partner_app_id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listWebhookEndpoints.php)

## api.listWebhookEvents

Returns recent canonical webhook events for the authenticated merchant.

`GET /v1/webhook-events`

Input: `array{'page_size'?: int, 'page_token'?: string, 'webhook_endpoint_id'?: string, 'delivery_status'?: string, 'event_source'?: list<string>, 'partner_app_id'?: string, 'event_type'?: string, 'resource_type'?: string, 'resource_id'?: string, 'api_request_log_id'?: string, 'request_id'?: string, 'correlation_id'?: string, 'created_after'?: string, 'created_before'?: string, 'include'?: list<string>, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listWebhookEvents.php)

## api.listWebhookEventTypes

Returns the webhook event types that can be used in enabled_events and event_type filters, grouped by the event source each type is valid for.

`GET /v1/webhook-event-types`

Input: `array{'page_size'?: int, 'page_token'?: string, 'Flint-Version'?: string}`

Response: `object{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string}`

[Example](examples/api-listWebhookEventTypes.php)

## api.markInvoiceUncollectible

Closes the outstanding balance as a write-off and releases the order's invoice collection authority. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/mark-uncollectible`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-markInvoiceUncollectible.php)

## api.pauseInvoiceReminders

Stops the automatic reminder cadence on a collectible invoice and sets reminders_paused_at. Manual send-reminder calls still work, and invoice.overdue and invoice.late_fee_due still fire.

`POST /v1/invoices/{invoice_id}/pause-reminders`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-pauseInvoiceReminders.php)

## api.pauseMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Pauses a subscription immediately, optionally for a fixed number of billing cycles.

`POST /v1/me/subscriptions/{subscription_id}/pause`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'pause_duration_cycles'?: int}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-pauseMeSubscription.php)

## api.pauseSubscription

Pauses a subscription immediately, optionally for a fixed number of billing cycles.

`POST /v1/subscriptions/{subscription_id}/pause`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'pause_duration_cycles'?: int}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-pauseSubscription.php)

## api.payOrder

Starts or resumes a payment attempt on the order. Set action to pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to save a newly collected token on a zero-balance order, or resume to continue an attempt after a pending client action. Each action accepts only its own fields. Only confirm_payment_intents accepts completion_behavior. A pay action without payment_source is valid only when the outstanding balance is zero. To resume, send action: resume with payment_attempt_id, or replay the exact original request with the same Idempotency-Key while the attempt is open. Payment intents with manual capture return an active authorization instead of settling immediately.

`POST /v1/orders/{order_id}/pay`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: mixed, 'payment_source'?: mixed}|array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'completion_behavior'?: string, 'expected_outstanding_money'?: mixed, 'payment_intents': list<mixed>}|array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: mixed, 'setup_payment_source': array{'token': string}}|array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: mixed, 'payment_attempt_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-payOrder.php)

## api.previewOrderDiscounts

Evaluates promotion outcomes for an order without mutating it. Merchant-authenticated callers may include a promotion by promotion_id or promotion_code; checkout-authenticated buyers must provide a code. The response includes applied, skipped, and single-threshold available promotion candidates.

`POST /v1/orders/{order_id}/discounts/preview`

Input: `array{'order_id': string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body'?: array{'discount'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-previewOrderDiscounts.php)

## api.previewPartnerInstallAuthorization

Validates the install link inputs and returns the partner app metadata and requested permissions for the consent screen.

`GET /v1/oauth/authorize/preview`

Input: `array{'client_id': string, 'redirect_uri': string, 'mode': string, 'permission_ids'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-previewPartnerInstallAuthorization.php)

## api.processExistingReturn

Process an existing requested Return atomically at the Flint facts layer. Requires the current Return version and Idempotency-Key. Linked effects remain asynchronous.

`POST /v1/returns/{return_id}/process`

Input: `array{'return_id': string, 'Idempotency-Key': string, 'Flint-Version'?: string, 'body': array{'completion_behavior'?: string, 'expected_version'?: string, 'line_items': list<mixed>, 'receipt'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-processExistingReturn.php)

## api.publishLocationGeography

Publishes the location geography atomically. Supply the complete address and timezone; omitted coordinates are cleared. This PATCH does not merge nested address fields. Requires expected_geography_revision, independently of the location version used for metadata edits.

`PATCH /v1/locations/{location_id}/geography`

Input: `array{'Idempotency-Key'?: string, 'location_id': string, 'Flint-Version'?: string, 'body': array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'expected_geography_revision': string, 'timezone': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-publishLocationGeography.php)

## api.publishReturnPolicyRevision

Publish a new immutable Return policy revision while preserving the stable policy identity.

`POST /v1/return-policies/{return_policy_id}/revisions`

Input: `array{'return_policy_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_current_return_policy_revision_id': string, 'expected_version'?: string, 'revision': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-publishReturnPolicyRevision.php)

## api.queryCheckoutSessionPickupAvailability

Computes a bounded, non-holding pickup-location projection from current checkout authority and one inventory snapshot. Merchant-authenticated requests include configured Location diagnostics; checkout credentials receive only buyer-safe results.

`POST /v1/checkout-sessions/{checkout_session_id}/query-pickup-availability`

Input: `array{'checkout_session_id': string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'buyer_location'?: mixed, 'expected_delivery_selection_id'?: string, 'maximum_distance'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-queryCheckoutSessionPickupAvailability.php)

## api.reactivateMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Clears a pending period-end cancellation without changing the current billing period.

`POST /v1/me/subscriptions/{subscription_id}/reactivate`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-reactivateMeSubscription.php)

## api.reactivateSubscription

Clears a pending period-end cancellation without changing the current billing period.

`POST /v1/subscriptions/{subscription_id}/reactivate`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-reactivateSubscription.php)

## api.recordManualInvoicePayment

Applies an offline/manual payment to an issued invoice. Recording is rejected with INVOICE_PAYMENT_RESOLVING while an online payment is still resolving; an idle open checkout does not block. A payment that clears the balance invalidates the open checkout session. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money': mixed, 'expected_version'?: string, 'external_reference_id'?: string, 'note'?: string, 'received_at'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-recordManualInvoicePayment.php)

## api.refreshCustomerSession

Rotates a customer session secret and refresh token without a merchant API key. Reusing a rotated refresh token revokes the session family.

`POST /v1/customer-sessions/refresh`

Input: `array{'Idempotency-Key': string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'refresh_token': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-refreshCustomerSession.php)

## api.refreshMerchantAccountSession

Creates a fresh provider session from a signed launch token after rechecking the authenticated principal, merchant environment, account controller, and component grant.

`POST /v1/merchant-account-sessions/refresh`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'launch_token': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-refreshMerchantAccountSession.php)

## api.regenerateInvoicePublicLink

Revokes the current buyer-access link and all checkout credentials derived from it, then returns a new public_url. The current checkout session and its payment lineage are preserved. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/regenerate-public-link`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-regenerateInvoicePublicLink.php)

## api.releaseInventoryReservation

Release held or committed quantity back to available. Cumulative targets; released quantity is terminal.

`POST /v1/inventory-reservations/{inventory_reservation_id}/release`

Input: `array{'Idempotency-Key': string, 'inventory_reservation_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'lines': list<array{'inventory_reservation_line_id': string, 'target_released_from_committed_quantity'?: string, 'target_released_from_held_quantity'?: string}>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-releaseInventoryReservation.php)

## api.releaseReturnResolution

Release a confirmed resolution that is waiting on a manual release. Available only while action_reason is manual_release.

`POST /v1/return-resolutions/{return_resolution_id}/release`

Input: `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-releaseReturnResolution.php)

## api.removeMePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Soft-removes a saved payment method so it can no longer be used for future payments.

`DELETE /v1/me/payment-methods/{payment_method_id}`

Input: `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-removeMePaymentMethod.php)

## api.removeOrderDiscounts

Removes one or more pending applied discounts from an order. Redeemed or canceled discounts are settlement history and cannot be removed.

`POST /v1/orders/{order_id}/discounts/remove`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'order_discount_ids': list<string>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-removeOrderDiscounts.php)

## api.removePaymentMethod

Soft-removes a saved payment method so it can no longer be used for future payments.

`DELETE /v1/payment-methods/{payment_method_id}`

Input: `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-removePaymentMethod.php)

## api.reopenReturn

Reopen a completed Return to record late compensating facts. Confirmed money movements are never edited backward, so a monetary fix is a new correction resolution.

`POST /v1/returns/{return_id}/reopen`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-reopenReturn.php)

## api.repriceOrderDiscounts

Recalculates pending discounts and automatic promotions for a mutable order.

`POST /v1/orders/{order_id}/discounts/reprice`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-repriceOrderDiscounts.php)

## api.resendMeOrderReceipt

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Queues another receipt email for a paid order when Flint manages receipt delivery. The recipient is derived from the order and cannot be supplied by the caller. When the merchant manages receipt delivery, ask the merchant for another copy.

`POST /v1/me/orders/{order_id}/receipt`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resendMeOrderReceipt.php)

## api.resendOrderReceipt

Queues another receipt email for a paid order when Flint manages receipt delivery. The recipient is derived from the order and cannot be supplied by the caller. When the merchant manages receipt delivery, ask the merchant for another copy.

`POST /v1/orders/{order_id}/receipt`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resendOrderReceipt.php)

## api.resendWebhookDelivery

Sends the canonical event payload again to the delivery's current webhook endpoint URL. Safe to retry with the same Idempotency-Key.

`POST /v1/webhook-deliveries/{webhook_delivery_id}/resend`

Input: `array{'webhook_delivery_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resendWebhookDelivery.php)

## api.resetDemoSession

Ends the caller's current demo sandbox (if any) and provisions a fresh one, returning a new temporary API key. Useful when the original one-time secret was lost. Subject to the same per-client daily limit as creation.

`POST /v1/demo-sessions/reset`

Input: `array{'X-Turnstile-Token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'template'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resetDemoSession.php)

## api.resetDeveloperSandbox

Clears a non-default sandbox and returns its replacement environment. The replacement has a new sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys.

`POST /v1/developer/sandboxes/{sandbox_id}/reset`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'sandbox_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resetDeveloperSandbox.php)

## api.resolveCustomerDeletionRequest

Approves or rejects a pending deletion request. Approval returns processing while account data and buyer credentials are deleted asynchronously. A failed deletion can be approved again but cannot be rejected. Approval is blocked while the customer has non-canceled subscriptions or usable saved payment methods.

`POST /v1/customer-deletion-requests/{customer_deletion_request_id}/resolve`

Input: `array{'customer_deletion_request_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'decision': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resolveCustomerDeletionRequest.php)

## api.resolveOrderInventoryException

Marks a paid inventory failure as resolved after an operator has completed manual inventory remediation.

`POST /v1/orders/{order_id}/inventory-exception/resolve`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resolveOrderInventoryException.php)

## api.resolvePaymentLink

Creates a buyer checkout session from an active payment link. Catalog-backed modifier availability is frozen onto the checkout session and selected modifiers are resolved onto the backing order.

`POST /v1/payment-links/{payment_link_id}/resolve`

Input: `array{'payment_link_id': string, 'Idempotency-Key': string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'custom_field_values'?: array{}, 'modifiers'?: array{}, 'quantity_overrides'?: array{}, 'resolution_context': string, 'unit_price_overrides'?: array{}}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resolvePaymentLink.php)

## api.resolvePromotionCode

Resolves a buyer-entered promotion code to its promotion code record and parent promotion. This does not evaluate the code against an order or redeem it.

`GET /v1/promotions/by-code/{code}`

Input: `array{'code': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resolvePromotionCode.php)

## api.resumeInvoiceReminders

Clears reminders_paused_at so the invoice resumes its reminder cadence. Reminder times that passed while it was paused do not fire retroactively.

`POST /v1/invoices/{invoice_id}/resume-reminders`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resumeInvoiceReminders.php)

## api.resumeMeSubscription

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Resumes a paused subscription.

`POST /v1/me/subscriptions/{subscription_id}/resume`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resumeMeSubscription.php)

## api.resumeSubscription

Resumes a paused subscription.

`POST /v1/subscriptions/{subscription_id}/resume`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-resumeSubscription.php)

## api.retryReturnDisposition

Retry a failed disposition with the same immutable intent. Disposition and effect identities are preserved, so a retry does not move stock twice.

`POST /v1/return-dispositions/{return_disposition_id}/retry`

Input: `array{'return_disposition_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-retryReturnDisposition.php)

## api.retryReturnResolution

Retry a failed resolution. A new attempt starts, historical payment and refund IDs stay on the resolution, and a late event from an earlier attempt cannot settle the new attempt.

`POST /v1/return-resolutions/{return_resolution_id}/retry`

Input: `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-retryReturnResolution.php)

## api.reverseCreditNoteAllocation

Reverses an allocation and reopens that much of the invoice balance. The original allocation keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation that closed an invoice moves it from credited back to open or partially_paid.

`POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse`

Input: `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'credit_note_allocation_id': string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-reverseCreditNoteAllocation.php)

## api.reverseManualInvoicePayment

Reverses previously applied manual/offline payment amount from an invoice. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/manual-payments/reverse`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money': mixed, 'expected_version'?: string, 'external_reference_id'?: string, 'note'?: string, 'received_at'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-reverseManualInvoicePayment.php)

## api.revokeAPIKey

Permanently revokes an external API key and returns metadata with status revoked.

`POST /v1/api-keys/{api_key_id}/revoke`

Input: `array{'api_key_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-revokeAPIKey.php)

## api.revokeCustomerSession

Revokes one customer session. This does not revoke an independent Flint Account buyer session.

`POST /v1/customer-sessions/{customer_session_id}/revoke`

Input: `array{'customer_session_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-revokeCustomerSession.php)

## api.revokeCustomerSessions

Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.

`POST /v1/customers/{customer_id}/sessions/revoke`

Input: `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-revokeCustomerSessions.php)

## api.revokeDeliveryDependency

Permanently fences one exact method, endpoint, signing key, revision, or Location geography version. Issued quotes are revoked immediately. Current selections are released the next time they are read. Stable method and callback-endpoint targets require expected_version so a concurrent publication cannot broaden the revocation.

`POST /v1/delivery-revocations`

Input: `array{'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'merchant_note'?: string, 'reason': string, 'target': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-revokeDeliveryDependency.php)

## api.revokeDeveloperPartnerAppInstall

Revokes a partner app install and all of its environment grants.

`POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/revoke`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-revokeDeveloperPartnerAppInstall.php)

## api.revokeDeveloperPartnerEnvironmentGrant

Revokes a single test or live environment grant for a partner app install.

`POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'environment_grant_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-revokeDeveloperPartnerEnvironmentGrant.php)

## api.revokeOrganizationMembership

Revokes a direct organization membership for a user.

`DELETE /v1/organizations/{organization_id}/memberships/{user_id}`

Input: `array{'organization_id': string, 'user_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-revokeOrganizationMembership.php)

## api.rotateDeliveryRateCallbackSigningKey

Rotates the endpoint signing secret, accepts both keys for one hour, and returns the new secret once.

`POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret`

Input: `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-rotateDeliveryRateCallbackSigningKey.php)

## api.rotateDeveloperPartnerAppSecret

Rotates the client secret for a partner app owned by the authenticated merchant. The new client_secret is only returned once.

`POST /v1/developer/partner/apps/{partner_app_id}/rotate-secret`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-rotateDeveloperPartnerAppSecret.php)

## api.rotateWebhookSecret

Rotates the signing secret for a webhook endpoint and returns the new secret once.

`POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret`

Input: `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-rotateWebhookSecret.php)

## api.saveMePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/me/payment-methods`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'payment_method_type'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-saveMePaymentMethod.php)

## api.savePaymentMethod

Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/payment-methods`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'customer_id': string, 'type'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-savePaymentMethod.php)

## api.sendInvoiceReminder

Attempts a reminder email for an already issued collectible invoice. Safe to retry with the same Idempotency-Key.

`POST /v1/invoices/{invoice_id}/send-reminder`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-sendInvoiceReminder.php)

## api.setDefaultCustomerAddress

Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/customers/{customer_id}/addresses/{customer_address_id}/set-default`

Input: `array{'customer_id': string, 'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'default_for': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-setDefaultCustomerAddress.php)

## api.setDefaultMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/me/addresses/{customer_address_id}/set-default`

Input: `array{'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'default_for': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-setDefaultMeAddress.php)

## api.setDefaultMePaymentMethod

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Sets the default payment method for the payment method's owning customer.

`POST /v1/me/payment-methods/{payment_method_id}/set-default`

Input: `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-setDefaultMePaymentMethod.php)

## api.setDefaultPaymentMethod

Sets the default payment method for the payment method's owning customer.

`POST /v1/payment-methods/{payment_method_id}/set-default`

Input: `array{'payment_method_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-setDefaultPaymentMethod.php)

## api.skipSubscriptionCycle

Moves the next billing date forward by one plan interval without charging the current cycle.

`POST /v1/subscriptions/{subscription_id}/skip-cycle`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'initiated_by'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-skipSubscriptionCycle.php)

## api.startOnboarding

Starts the consolidated onboarding flow by emailing a short-lived verification code and returning a temporary verification token.

`POST /v1/onboarding/start`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'email': string, 'first_name': string, 'last_name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-startOnboarding.php)

## api.streamWebhookEvents

Streams canonical merchant webhook events created after the connection opens or after the supplied event ID. SSE event IDs are resumable webhook event IDs. Control records include ready, gap, withheld, and disconnect. Gap and withheld records advance the resumable cursor even when a resource payload is expired or hidden by API-key scope.

`GET /v1/webhook-events/stream`

Input: `array{'event_type'?: string, 'after_event_id'?: string, 'Last-Event-ID'?: string, 'Flint-Version'?: string}`

Response: `null`

[Example](examples/api-streamWebhookEvents.php)

## api.transferOrganizationOwnership

Transfers the organization owner role to another user.

`POST /v1/organizations/{organization_id}/transfer-ownership`

Input: `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'new_owner_user_id': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-transferOrganizationOwnership.php)

## api.transitionFulfillment

Performs one action from the fulfillment's supported_actions. Each action accepts only its action-specific fields. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/fulfillments/{fulfillment_id}/transitions`

Input: `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'buyer_notification_behavior'?: string, 'completed_at'?: string, 'expected_version'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason': string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string, 'release_quantity': bool}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string, 'scheduled_end_at': string, 'scheduled_start_at': string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-transitionFulfillment.php)

## api.transitionInventoryTransfer

Run one action from supported_actions using cumulative line targets. Send expected_version to reject the request if the transfer changed after you read it. The response includes the updated transfer and its inventory effects.

`POST /v1/inventory-transfers/{inventory_transfer_id}/transitions`

Input: `array{'Idempotency-Key': string, 'inventory_transfer_id': string, 'Flint-Version'?: string, 'body': array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_departed_quantity': string}>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<mixed|mixed>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_returned_quantity': string}>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_lost_quantity': string}>, 'provenance': mixed}|array{'action': string, 'expected_version'?: string, 'lines': list<array{'inventory_transfer_line_id': string, 'target_canceled_quantity': string}>, 'provenance': mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-transitionInventoryTransfer.php)

## api.transitionPackage

Performs one action from the package's supported_actions. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/packages/{package_id}/transitions`

Input: `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-transitionPackage.php)

## api.updateAPIKey

Updates an active external API key's name or complete scope list. API-key-authenticated callers may delegate only scopes already granted to the calling key.

`PATCH /v1/api-keys/{api_key_id}`

Input: `array{'api_key_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expires_at'?: string|null, 'name'?: string, 'scopes'?: list<string>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateAPIKey.php)

## api.updateBundle

Update bundle.

`PATCH /v1/bundles/{bundle_id}`

Input: `array{'bundle_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateBundle.php)

## api.updateCategory

Update category.

`PATCH /v1/categories/{category_id}`

Input: `array{'category_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'description'?: string, 'external_reference_id'?: string, 'metadata'?: array|object|null, 'name'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateCategory.php)

## api.updateCheckoutSession

Updates mutable checkout session fields. Currently only metadata is mutable.

`PATCH /v1/checkout-sessions/{checkout_session_id}`

Input: `array{'checkout_session_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string, 'metadata'?: array|object|null}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateCheckoutSession.php)

## api.updateCreditNote

Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a null memo clears it, and credit_note_lines requires expected_version. Issued and void credit notes are frozen.

`PATCH /v1/credit-notes/{credit_note_id}`

Input: `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateCreditNote.php)

## api.updateCustomer

Applies a sparse update to a customer. Writing billing_address or shipping_address clears the corresponding saved-address default, so that field remains effective until another saved default is selected.

`PATCH /v1/customers/{customer_id}`

Input: `array{'customer_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_address'?: mixed, 'default_invoice_payment_term_id'?: string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'metadata'?: array|object|null, 'name'?: string, 'phone'?: string, 'shipping_address'?: mixed, 'tax_exempt'?: bool}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateCustomer.php)

## api.updateCustomerAddress

Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}`

Input: `array{'customer_id': string, 'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address'?: mixed, 'label'?: string, 'phone'?: string, 'recipient_name'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateCustomerAddress.php)

## api.updateDeliveryLocationSet

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-location-sets/{delivery_location_set_id}`

Input: `array{'delivery_location_set_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateDeliveryLocationSet.php)

## api.updateDeliveryMethod

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-methods/{delivery_method_id}`

Input: `array{'delivery_method_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed|mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateDeliveryMethod.php)

## api.updateDeliveryProfile

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-profiles/{delivery_profile_id}`

Input: `array{'delivery_profile_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateDeliveryProfile.php)

## api.updateDeliveryRateCallback

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-rate-callbacks/{delivery_rate_callback_id}`

Input: `array{'delivery_rate_callback_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateDeliveryRateCallback.php)

## api.updateDeliveryZone

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version.

`PATCH /v1/delivery-zones/{delivery_zone_id}`

Input: `array{'delivery_zone_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateDeliveryZone.php)

## api.updateDeveloperPartnerApp

Updates the API version for a partner app owned by the authenticated merchant. Any supported version can be selected.

`PATCH /v1/developer/partner/apps/{partner_app_id}`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'partner_app_id': string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'expected_api_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateDeveloperPartnerApp.php)

## api.updateDevice

Applies a sparse update to a device. Send location_id=null to unassign a location.

`PATCH /v1/devices/{device_id}`

Input: `array{'device_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'location_id'?: string, 'metadata'?: array|object|null, 'name'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateDevice.php)

## api.updateFulfillment

Updates mutable fulfillment fields and fulfillment-specific details. Fulfillment line item allocation is set when the fulfillment is created. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/fulfillments/{fulfillment_id}`

Input: `array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateFulfillment.php)

## api.updateInventoryAllocationPolicy

Update policy fields, availability, or atomically replace its routing configuration. Send expected_version to reject concurrent changes.

`PATCH /v1/inventory-allocation-policies/{inventory_allocation_policy_id}`

Input: `array{'Idempotency-Key'?: string, 'inventory_allocation_policy_id': string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateInventoryAllocationPolicy.php)

## api.updateInventoryCount

Replace a count's observations atomically. Send expected_version to reject concurrent changes.

`PATCH /v1/inventory-counts/{inventory_count_id}`

Input: `array{'Idempotency-Key': string, 'inventory_count_id': string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateInventoryCount.php)

## api.updateInventoryItem

Update an inventory item. accepts status active or inactive. Send sku or barcode as null to clear.

`PATCH /v1/inventory-items/{inventory_item_id}`

Input: `array{'Idempotency-Key'?: string, 'inventory_item_id': string, 'Flint-Version'?: string, 'body': array{'barcode'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array|object|null, 'name'?: string, 'sku'?: string|null, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateInventoryItem.php)

## api.updateInventoryLevel

Set one inventory level's safety_stock_quantity. returns the updated level with durable command evidence.

`PATCH /v1/inventory-levels/{inventory_level_id}`

Input: `array{'Idempotency-Key': string, 'inventory_level_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'safety_stock_quantity': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateInventoryLevel.php)

## api.updateInventoryTransfer

Update an open transfer's planning details.

`PATCH /v1/inventory-transfers/{inventory_transfer_id}`

Input: `array{'Idempotency-Key'?: string, 'inventory_transfer_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference'?: string|null, 'line_changes'?: list<array{'inventory_item_id': string, 'operation': string, 'physical_condition'?: string, 'requested_quantity': string}|array{'inventory_transfer_line_id': string, 'operation': string, 'requested_quantity': string}|array{'inventory_transfer_line_id': string, 'operation': string}>, 'note'?: string|null}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateInventoryTransfer.php)

## api.updateInvoice

Updates mutable fields on a draft invoice. Sent invoices are immutable except for delivery-related actions.

`PATCH /v1/invoices/{invoice_id}`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateInvoice.php)

## api.updateInvoicePaymentTerm

Update invoice payment term for the authenticated merchant.

`PATCH /v1/invoice-payment-terms/{invoice_payment_term_id}`

Input: `array{'invoice_payment_term_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'calculation'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string, 'late_fee_policy'?: mixed|mixed|null, 'name'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateInvoicePaymentTerm.php)

## api.updateLocation

Update a Location's profile or availability. Accepts status active or inactive.

`PATCH /v1/locations/{location_id}`

Input: `array{'Idempotency-Key'?: string, 'location_id': string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array|object|null, 'name'?: string, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateLocation.php)

## api.updateLocationInventory

Enable or disable inventory allocation at a Location. Omit expected_inventory_revision when enabling inventory for the first time; otherwise send the current inventory_revision.

`PATCH /v1/locations/{location_id}/inventory`

Input: `array{'Idempotency-Key'?: string, 'location_id': string, 'Flint-Version'?: string, 'body': array{'allocation_status': string, 'expected_inventory_revision'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateLocationInventory.php)

## api.updateMe

Uses the customer identity fixed by the customer session. Updates the current buyer's name or phone. Manage billing and shipping addresses through /v1/me/addresses.

`PATCH /v1/me`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'name'?: string, 'phone'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateMe.php)

## api.updateMeAddress

Uses the customer identity fixed by the customer session. The request cannot select a customer_id. Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/me/addresses/{customer_address_id}`

Input: `array{'customer_address_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address'?: mixed, 'label'?: string, 'phone'?: string, 'recipient_name'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateMeAddress.php)

## api.updateMerchant

Applies a sparse update to the authenticated merchant's public business profile fields.

`PATCH /v1/merchants/{merchant_id}`

Input: `array{'merchant_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'address'?: mixed, 'api_version'?: string, 'email'?: string, 'expected_version'?: string, 'logo'?: mixed, 'metadata'?: array|object|null, 'organization_id'?: string, 'phone'?: string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'website_url'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateMerchant.php)

## api.updateModifierGroup

Update modifier group.

`PATCH /v1/modifier-groups/{modifier_group_id}`

Input: `array{'modifier_group_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateModifierGroup.php)

## api.updateModifierSet

Update modifier set.

`PATCH /v1/modifier-sets/{modifier_set_id}`

Input: `array{'modifier_set_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateModifierSet.php)

## api.updateOrder

Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the delivery destination, and the requested tip. Send requested_tip: null to clear the current requested tip.

`PATCH /v1/orders/{order_id}`

Input: `array{'order_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'buyer_note'?: string, 'customer_id'?: string, 'delivery_destination'?: array{'address': mixed, 'recipient'?: mixed}|null, 'external_reference_id'?: string, 'internal_note'?: string, 'inventory_routing_source'?: mixed, 'metadata'?: array|object|null, 'requested_tip'?: mixed|mixed|null, 'tax'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateOrder.php)

## api.updateOrderCharge

Updates a single service charge, fee, or surcharge on an order.

`PATCH /v1/orders/{order_id}/charges/{order_charge_id}`

Input: `array{'order_id': string, 'order_charge_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string, 'fulfillment_id'?: string, 'metadata'?: array|object|null, 'name'?: string, 'percent'?: string, 'tax'?: mixed, 'type'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateOrderCharge.php)

## api.updateOrderLineItem

Updates a single line item on an order.

`PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`

Input: `array{'order_id': string, 'order_line_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}|mixed`

[Example](examples/api-updateOrderLineItem.php)

## api.updateOrganization

Applies a sparse update to an accessible organization.

`PATCH /v1/organizations/{organization_id}`

Input: `array{'organization_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null, 'name'?: string, 'parent_organization_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateOrganization.php)

## api.updatePackage

Updates non-lifecycle package fields such as carrier, tracking, label access, measurements, metadata, and caller-owned external references. Package status cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/packages/{package_id}`

Input: `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string|null, 'dimensions'?: array{'height': string, 'length': string, 'unit': string, 'width': string}|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'label_url'?: string|null, 'metadata'?: array|object|null, 'service_code'?: string|null, 'status_reason'?: string|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'weight'?: array{'unit': string, 'value': string}|null}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePackage.php)

## api.updatePackageItem

Updates a package item quantity or metadata while the package is still mutable.

`PATCH /v1/packages/{package_id}/items/{package_item_id}`

Input: `array{'package_id': string, 'package_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null, 'quantity'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePackageItem.php)

## api.updatePaymentIntent

Applies a sparse update to a payment intent before it reaches a terminal state.

`PATCH /v1/payment-intents/{payment_intent_id}`

Input: `array{'payment_intent_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'amount_money'?: mixed, 'customer_id'?: string, 'external_reference_id'?: string, 'metadata'?: array|object|null, 'receipt_email'?: string, 'tip_money'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePaymentIntent.php)

## api.updatePaymentLink

Updates a payment link. To replace line items, custom fields, or delivery methods, send the complete array with `expected_version`.

`PATCH /v1/payment-links/{payment_link_id}`

Input: `array{'payment_link_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePaymentLink.php)

## api.updatePaymentMethodDomain

Sets the domain registration status. Activating the domain also validates Apple Pay and Google Pay readiness.

`PATCH /v1/payment-method-domains/{payment_method_domain_id}`

Input: `array{'payment_method_domain_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'status': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePaymentMethodDomain.php)

## api.updatePayoutDestination

Updates mutable metadata and settings for a payout destination. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings/destinations/{payout_destination_id}`

Input: `array{'payout_destination_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePayoutDestination.php)

## api.updatePayoutSettings

Updates mutable payout settings for the authenticated merchant. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'default_payout_destinations'?: array{}, 'delay_days_override'?: int|null, 'interval'?: string, 'minimum_balance_by_currency'?: array{}, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string, 'weekly_payout_days'?: list<string>}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePayoutSettings.php)

## api.updateProduct

Applies a sparse update to product-parent fields. When categories is present, it replaces the full category list; send an empty array to clear categories. Sellable price, SKU, and inventory live on variants.

`PATCH /v1/products/{product_id}`

Input: `array{'product_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateProduct.php)

## api.updateProductVariant

Update product variant.

`PATCH /v1/products/{product_id}/variants/{variant_id}`

Input: `array{'product_id': string, 'variant_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateProductVariant.php)

## api.updatePromotion

Applies a sparse update to promotion fields.

`PATCH /v1/promotions/{promotion_id}`

Input: `array{'promotion_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: list<mixed>|array{'all': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}|array{'any': list<array{'attribute': string, 'currency_options'?: array{}, 'operator': string, 'values'?: list<mixed>}|mixed>}, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: string, 'metadata'?: array|object|null, 'name'?: string, 'schedule'?: mixed, 'stacking_mode'?: string, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePromotion.php)

## api.updatePromotionCode

Applies a sparse update to a promotion code.

`PATCH /v1/promotions/{promotion_id}/codes/{promotion_code_id}`

Input: `array{'promotion_id': string, 'promotion_code_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'expires_at'?: string, 'max_uses'?: string, 'metadata'?: array|object|null, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updatePromotionCode.php)

## api.updateRefund

Updates refund metadata.

`PATCH /v1/refunds/{refund_id}`

Input: `array{'refund_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'metadata'?: array|object|null}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateRefund.php)

## api.updateReturn

Update caller-owned fields on a Return. Only external_reference_id and metadata are writable; every other change goes through a decision, operation, or resolution command.

`PATCH /v1/returns/{return_id}`

Input: `array{'return_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'external_reference_id'?: string|null, 'metadata'?: array|object|null}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateReturn.php)

## api.updateReturnLineItem

Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type. The response is the updated Return.

`PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}`

Input: `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'buyer_note'?: string|null, 'expected_version'?: string, 'requested_quantity'?: string, 'requested_resolution_type'?: string|null, 'return_reason_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateReturnLineItem.php)

## api.updateReturnPolicy

Update policy identity fields or set status to active or inactive. Rules live on revisions, so changing a window, fee, or scope means publishing a new revision.

`PATCH /v1/return-policies/{return_policy_id}`

Input: `array{'return_policy_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'metadata'?: array|object|null, 'name'?: string, 'status'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateReturnPolicy.php)

## api.updateReturnReason

Update a Return reason. Send null to clear description. A present category_handles array replaces the existing set.

`PATCH /v1/return-reasons/{return_reason_id}`

Input: `array{'return_reason_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateReturnReason.php)

## api.updateReturnResolution

Update a proposed resolution before confirmation. A present line_items or replacement_line_items array replaces that collection and requires expected_version.

`PATCH /v1/return-resolutions/{return_resolution_id}`

Input: `array{'return_resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed&mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateReturnResolution.php)

## api.updateRiskList

Update a risk list for the authenticated merchant environment.

`PATCH /v1/risk-lists/{risk_list_id}`

Input: `array{'risk_list_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'name': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateRiskList.php)

## api.updateRiskRule

Update a risk rule for the authenticated merchant environment.

`PATCH /v1/risk-rules/{risk_rule_id}`

Input: `array{'risk_rule_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed|mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateRiskRule.php)

## api.updateSettings

Applies a sparse patch to merchant-scoped settings. Send catalog by itself because it has its own version fence. Fee and payment limit controls remain internal-only.

`PATCH /v1/settings`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'branding'?: mixed, 'catalog'?: mixed, 'checkout'?: mixed, 'customer_account'?: mixed, 'customer_email_delivery'?: mixed, 'fulfillment'?: mixed, 'inventory'?: mixed, 'invoices'?: array{'autopay_retry_policy'?: array{'retry_day_offsets': list<int>}|null, 'credit_note_number_prefix'?: string|null, 'default_collection_mode'?: string|null, 'default_footer'?: string|null, 'default_invoice_payment_term_id'?: string|null, 'default_memo'?: string|null, 'invoice_number_prefix'?: string|null, 'payment_policy'?: array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<mixed>, 'show_cost_comparison'?: bool}|null, 'reminder_policy'?: array{'rules': list<mixed>}|null, 'remit_to_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}|null, 'reply_to_email'?: string|null, 'timezone'?: string|null}|null, 'legal'?: mixed, 'metadata'?: array|object|null, 'promotions'?: mixed, 'receipts'?: mixed, 'subscriptions'?: mixed, 'tax'?: mixed, 'tipping'?: mixed}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateSettings.php)

## api.updateShipment

Updates shipment metadata and caller-owned external references. Shipment status is derived from package statuses and cannot be patched directly. expected_version is optional and rejects a stale resource version when supplied.

`PATCH /v1/shipments/{shipment_id}`

Input: `array{'shipment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'external_reference_id'?: string|null, 'external_system'?: string|null, 'metadata'?: array|object|null}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateShipment.php)

## api.updateSubscription

Updates mutable subscription fields such as payment_method_id and metadata.

`PATCH /v1/subscriptions/{subscription_id}`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'cancel_at_period_end'?: bool, 'external_reference_id'?: string, 'metadata'?: array|object|null, 'payment_method_id'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateSubscription.php)

## api.updateSubscriptionBillingSchedule

Sets the next billing date, clears an external schedule while it awaits a date, or transfers schedule ownership. The response carries the updated subscription.

`PATCH /v1/subscriptions/{subscription_id}/billing-schedule`

Input: `array{'subscription_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'billing_anchor_day'?: int, 'initiated_by': string, 'next_billing_at': string, 'owner': string}|array{'initiated_by': string, 'next_billing_at'?: string|null, 'owner': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateSubscriptionBillingSchedule.php)

## api.updateSubscriptionPlan

Applies a sparse update to mutable subscription plan fields. Line items are mutated through the subscription plan line-item endpoints.

`PATCH /v1/subscription-plans/{plan_id}`

Input: `array{'plan_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': mixed|mixed&mixed|mixed}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateSubscriptionPlan.php)

## api.updateWebhookEndpoint

Updates the mutable fields on a webhook endpoint.

`PATCH /v1/webhook-endpoints/{webhook_endpoint_id}`

Input: `array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'description'?: string, 'enabled'?: bool, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'mode'?: string, 'partner_app_id'?: string, 'url'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-updateWebhookEndpoint.php)

## api.verifyOnboardingEmail

Verifies the emailed code, provisions the Flint user and merchant if needed, and returns a short-lived session token for the rest of onboarding.

`POST /v1/onboarding/verify-email`

Input: `array{'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'merchant_id'?: string, 'verification_code': string, 'verification_token': string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-verifyOnboardingEmail.php)

## api.verifyReturnReceiptLineItem

Establish the Return line identity for receipt quantity that arrived without one. Unverified quantity counts toward no line and releases no refund timing gate until it is verified.

`POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify`

Input: `array{'return_receipt_id': string, 'return_receipt_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'return_line_item_id': string, 'verification_reason': string, 'verification_reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-verifyReturnReceiptLineItem.php)

## api.voidCreditNote

Voids an issued credit note. Every allocation has to be reversed first. Void is terminal, and an invoice cannot be voided while an issued credit note stands against it.

`POST /v1/credit-notes/{credit_note_id}/void`

Input: `array{'credit_note_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-voidCreditNote.php)

## api.voidInvoice

Voids an unpaid invoice so the associated order can be edited or collected again. An invoice with an issued credit note against it cannot be voided until that credit note is voided.

`POST /v1/invoices/{invoice_id}/void`

Input: `array{'invoice_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'expected_version'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-voidInvoice.php)

## api.voidPackage

Voids a package before carrier handoff and appends a package timeline event. Voided package items no longer count against fulfillment package allocation capacity. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/packages/{package_id}/void`

Input: `array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-voidPackage.php)

## api.voidShipment

Voids a shipment before carrier handoff and voids all child packages that have not shipped. The action appends timeline events for the shipment and affected packages. expected_version is optional and rejects a stale resource version when supplied.

`POST /v1/shipments/{shipment_id}/void`

Input: `array{'shipment_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body'?: array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string, 'reason'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-voidShipment.php)

## api.waiveReturnLineInspection

Waive the inspection requirement on a Return line item so received quantity can be dispositioned and resolved without an inspection observation.

`POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection`

Input: `array{'return_id': string, 'return_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'reason': string, 'reason_message'?: string}}`

Response: `object{'data': mixed, 'meta'?: mixed, 'request_id'?: string}`

[Example](examples/api-waiveReturnLineInspection.php)
