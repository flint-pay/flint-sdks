<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $active_payment_attempt
 * @property-read mixed $buyer_contact
 * @property-read mixed $buyer_fields
 * @property-read bool|null $can_apply_promotion_code
 * @property-read string|null $checkout_session_id
 * @property-read mixed $client_reference
 * @property-read string|null $closed_reason_message
 * @property-read string|null $created_at
 * @property-read list<\stdClass>|null $custom_field_answers
 * @property-read mixed $custom_text
 * @property-read mixed $customer
 * @property-read string|null $customer_id
 * @property-read mixed $delivery
 * @property-read list<string>|null $delivery_method_ids
 * @property-read bool|null $delivery_selection_required
 * @property-read string|null $expires_at
 * @property-read int|null $expires_in_seconds
 * @property-read string|null $external_reference_id
 * @property-read mixed $gift_card_challenge
 * @property-read list<string>|null $inventory_reservation_ids
 * @property-read mixed $invoice
 * @property-read string|null $invoice_id
 * @property-read bool|null $is_in_recovery
 * @property-read mixed $legal
 * @property-read string|null $merchant_id
 * @property-read mixed $metadata
 * @property-read mixed $order
 * @property-read string|null $order_id
 * @property-read string|null $page_origin
 * @property-read mixed $payment_collection
 * @property-read list<string>|null $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryPreviousAttributes>|null $payment_intents
 * @property-read mixed $payment_link
 * @property-read string|null $payment_link_id
 * @property-read string|null $payment_return_url
 * @property-read mixed $payments
 * @property-read mixed $prefill
 * @property-read list<CheckoutProblemResourcePreviousAttributes>|null $problems
 * @property-read mixed $promotion_config
 * @property-read mixed $redirects
 * @property-read list<BuyerRefundPreviousAttributes>|null $refunds
 * @property-read mixed $setup_collection
 * @property-read string|null $status
 * @property-read string|null $subscription_plan_id
 * @property-read mixed $subscription_terms
 * @property-read string|null $superseding_checkout_session_id
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $surface
 * @property-read mixed $tax
 * @property-read string|null $terminal_reason
 * @property-read mixed $theme
 * @property-read mixed $tip
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionPaidMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'active_payment_attempt'?: mixed, 'buyer_contact'?: mixed, 'buyer_fields'?: mixed, 'can_apply_promotion_code'?: mixed, 'checkout_session_id'?: mixed, 'client_reference'?: mixed, 'closed_reason_message'?: mixed, 'created_at'?: mixed, 'custom_field_answers'?: mixed, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'delivery'?: mixed, 'delivery_method_ids'?: mixed, 'delivery_selection_required'?: mixed, 'expires_at'?: mixed, 'expires_in_seconds'?: mixed, 'external_reference_id'?: mixed, 'gift_card_challenge'?: mixed, 'inventory_reservation_ids'?: mixed, 'invoice'?: mixed, 'invoice_id'?: mixed, 'is_in_recovery'?: mixed, 'legal'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'page_origin'?: mixed, 'payment_collection'?: mixed, 'payment_intent_ids'?: mixed, 'payment_intents'?: mixed, 'payment_link'?: mixed, 'payment_link_id'?: mixed, 'payment_return_url'?: mixed, 'payments'?: mixed, 'prefill'?: mixed, 'problems'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'refunds'?: mixed, 'setup_collection'?: mixed, 'status'?: mixed, 'subscription_plan_id'?: mixed, 'subscription_terms'?: mixed, 'superseding_checkout_session_id'?: mixed, 'supported_actions'?: mixed, 'surface'?: mixed, 'tax'?: mixed, 'terminal_reason'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionPaidMerchantEventDataPreviousAttributes')); }
    /** The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. anyOf[1] (Value): {@see OrderPaymentAttemptPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getActivePaymentAttempt(): mixed { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. anyOf[1] (Value): {@see CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. anyOf[1] (Value): {@see CheckoutBuyerFieldsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. anyOf[1] (Value): boolean. Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getCanApplyPromotionCode(): bool|null { return $this->get('can_apply_promotion_code'); }
    public function hasCanApplyPromotionCode(): bool { return $this->has('can_apply_promotion_code'); }
    /** Unique identifier for this checkout session, prefixed `cs_`. anyOf[1] (Value): string. Unique identifier for this checkout session, prefixed `cs_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckoutSessionId(): string|null { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. anyOf[1] (Value): string or null. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClientReference(): mixed { return $this->get('client_reference'); }
    public function hasClientReference(): bool { return $this->has('client_reference'); }
    /** The note supplied when the checkout session was closed. anyOf[1] (Value): string. The note supplied when the checkout session was closed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedReasonMessage(): string|null { return $this->get('closed_reason_message'); }
    public function hasClosedReasonMessage(): bool { return $this->has('closed_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array of {@see CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: 20. anyOf[1][] (Value): {@see CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<\stdClass>|null
     */
    public function getCustomFieldAnswers(): array|null { return $this->get('custom_field_answers'); }
    public function hasCustomFieldAnswers(): bool { return $this->has('custom_field_answers'); }
    /** The custom text this session shows in checkout. anyOf[1] (Value): {@see CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): ({@see ExpandedCustomerSummaryPreviousAttributes} or null). Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1].anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. anyOf[1] (Value): string. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. anyOf[1] (Value): {@see CheckoutDerivedDeliveryResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Immutable delivery method assignment captured when the checkout was created. anyOf[1] (Value): Array of string. Immutable delivery method assignment captured when the checkout was created. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDeliveryMethodIds(): array|null { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. anyOf[1] (Value): boolean. Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getDeliverySelectionRequired(): bool|null { return $this->get('delivery_selection_required'); }
    public function hasDeliverySelectionRequired(): bool { return $this->has('delivery_selection_required'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. anyOf[1] (Value): integer. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getExpiresInSeconds(): int|null { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. anyOf[1] (Value): {@see CheckoutGiftCardChallengePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getGiftCardChallenge(): mixed { return $this->get('gift_card_challenge'); }
    public function hasGiftCardChallenge(): bool { return $this->has('gift_card_challenge'); }
    /** Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. anyOf[1] (Value): Array of string. Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getInventoryReservationIds(): array|null { return $this->get('inventory_reservation_ids'); }
    public function hasInventoryReservationIds(): bool { return $this->has('inventory_reservation_ids'); }
    /** Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): ({@see ExpandedInvoiceSummaryPreviousAttributes} or null). Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1].anyOf[1] (Value): {@see ExpandedInvoiceSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** ID of the invoice a session of type `invoice` collects payment for. Absent for other types. anyOf[1] (Value): string. ID of the invoice a session of type `invoice` collects payment for. Absent for other types. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. anyOf[1] (Value): boolean. Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsInRecovery(): bool|null { return $this->get('is_in_recovery'); }
    public function hasIsInRecovery(): bool { return $this->has('is_in_recovery'); }
    /** The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. anyOf[1] (Value): {@see CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): ({@see ExpandedOrderSummaryPreviousAttributes} or null). Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1].anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. anyOf[1] (Value): string. ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Origin of the page that renders this headless checkout. Omitted when not set. anyOf[1] (Value): string. Origin of the page that renders this headless checkout. Omitted when not set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPageOrigin(): string|null { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. anyOf[1] (Value): {@see PaymentCollectionPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaymentCollection(): mixed { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** IDs of the payment intents for the session's order. Absent when the order has none. anyOf[1] (Value): Array of string. IDs of the payment intents for the session's order. Absent when the order has none. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getPaymentIntentIds(): array|null { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. anyOf[1] (Value): Array of {@see ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. anyOf[1][] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ExpandedPaymentIntentSummaryPreviousAttributes>|null
     */
    public function getPaymentIntents(): array|null { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. anyOf[1] (Value): ({@see ExpandedPaymentLinkSummaryPreviousAttributes} or null). Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. anyOf[1].anyOf[1] (Value): {@see ExpandedPaymentLinkSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaymentLink(): mixed { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** ID of the payment link the session was started from. Absent when it was not started from a payment link. anyOf[1] (Value): string. ID of the payment link the session was started from. Absent when it was not started from a payment link. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkId(): string|null { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters. anyOf[1] (Value): string. Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Query strings are deliberately excluded so credentials and provider state cannot cross Flint's payment relay. Put merchant identifiers in the URL path, such as https://shop.example/return/sub_123. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentReturnUrl(): string|null { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** Configured payment options for merchant credentials; currently available payment options for the checkout credential. anyOf[1] (Value): {@see CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record. anyOf[1] (Value): {@see CheckoutPrefillPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPrefill(): mixed { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. anyOf[1] (Value): Array of {@see CheckoutProblemResourcePreviousAttributes}. Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. anyOf[1][] (Value): {@see CheckoutProblemResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CheckoutProblemResourcePreviousAttributes>|null
     */
    public function getProblems(): array|null { return $this->get('problems'); }
    public function hasProblems(): bool { return $this->has('problems'); }
    /** Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. anyOf[1] (Value): {@see CheckoutPromotionConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. anyOf[1] (Value): {@see CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. anyOf[1] (Value): Array of {@see BuyerRefundPreviousAttributes}. All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. anyOf[1][] (Value): {@see BuyerRefundPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<BuyerRefundPreviousAttributes>|null
     */
    public function getRefunds(): array|null { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /** Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. anyOf[1] (Value): {@see SetupCollectionPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSetupCollection(): mixed { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[1] (Value): string. Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. anyOf[1] (Value): string. ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. anyOf[1] (Value): {@see CheckoutSubscriptionTermsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSubscriptionTerms(): mixed { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. anyOf[1] (Value): string. ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupersedingCheckoutSessionId(): string|null { return $this->get('superseding_checkout_session_id'); }
    public function hasSupersedingCheckoutSessionId(): bool { return $this->has('superseding_checkout_session_id'); }
    /** Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. [] enum: "close". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. Always present with merchant credentials. [] enum: "close". anyOf[1][] (Value): string.  Value enum: "close". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Value enum: "hosted", "headless". anyOf[1] (Value): string. How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Value enum: "hosted", "headless". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSurface(): string|null { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** The session's tax settings. Omitted when the session sets none. anyOf[1] (Value): {@see CheckoutSessionTaxPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible", "invoice_balance_changed". anyOf[1] (Value): string. Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible", "invoice_balance_changed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTerminalReason(): string|null { return $this->get('terminal_reason'); }
    public function hasTerminalReason(): bool { return $this->has('terminal_reason'); }
    /** The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. anyOf[1] (Value): {@see CheckoutThemePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** The tip options this session offers the buyer. anyOf[1] (Value): {@see CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[1] (Value): string. What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
