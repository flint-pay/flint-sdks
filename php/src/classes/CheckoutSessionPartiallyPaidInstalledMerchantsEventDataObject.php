<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?OrderPaymentAttempt $active_payment_attempt
 * @property-read ?CheckoutBuyerContact $buyer_contact
 * @property-read ?CheckoutBuyerFields $buyer_fields
 * @property-read bool $can_apply_promotion_code
 * @property-read string $checkout_session_id
 * @property-read string|null $client_reference
 * @property-read ?string $closed_reason_message
 * @property-read string $created_at
 * @property-read list<CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemText|CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemTextarea|CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemDropdown|CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemCheckbox|\stdClass> $custom_field_answers
 * @property-read ?CheckoutCustomTextConfig $custom_text
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read ?CheckoutDerivedDeliveryResource $delivery
 * @property-read list<string> $delivery_method_ids
 * @property-read bool $delivery_selection_required
 * @property-read ?string $expires_at
 * @property-read ?int $expires_in_seconds
 * @property-read ?string $external_reference_id
 * @property-read ?CheckoutGiftCardChallenge $gift_card_challenge
 * @property-read ?list<string> $inventory_reservation_ids
 * @property-read ExpandedInvoiceSummary|null $invoice
 * @property-read ?string $invoice_id
 * @property-read bool $is_in_recovery
 * @property-read ?CheckoutLegalConfig $legal
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read ?string $order_id
 * @property-read ?string $page_origin
 * @property-read ?PaymentCollection $payment_collection
 * @property-read ?list<string> $payment_intent_ids
 * @property-read ?list<ExpandedPaymentIntentSummary> $payment_intents
 * @property-read ExpandedPaymentLinkSummary|null $payment_link
 * @property-read ?string $payment_link_id
 * @property-read ?string $payment_return_url
 * @property-read ?CheckoutPaymentConfig $payments
 * @property-read ?CheckoutPrefill $prefill
 * @property-read list<CheckoutProblemResource> $problems
 * @property-read ?CheckoutPromotionConfig $promotion_config
 * @property-read ?CheckoutRedirects $redirects
 * @property-read ?list<BuyerRefund> $refunds
 * @property-read ?SetupCollection $setup_collection
 * @property-read string $status
 * @property-read ?string $subscription_plan_id
 * @property-read ?CheckoutSubscriptionTerms $subscription_terms
 * @property-read ?string $superseding_checkout_session_id
 * @property-read list<string> $supported_actions
 * @property-read string $surface
 * @property-read ?CheckoutSessionTax $tax
 * @property-read ?string $terminal_reason
 * @property-read ?CheckoutTheme $theme
 * @property-read ?CheckoutTipConfig $tip
 * @property-read string $type
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObject extends Model {
    /** @param array{'active_payment_attempt'?: mixed, 'buyer_contact'?: mixed, 'buyer_fields'?: mixed, 'can_apply_promotion_code': bool, 'checkout_session_id': string, 'client_reference': string|null, 'closed_reason_message'?: string, 'created_at': string, 'custom_field_answers': list<mixed>, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_id'?: string, 'delivery'?: mixed, 'delivery_method_ids': list<string>, 'delivery_selection_required': bool, 'expires_at'?: string, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'gift_card_challenge'?: mixed, 'inventory_reservation_ids'?: list<string>, 'invoice'?: mixed, 'invoice_id'?: string, 'is_in_recovery': bool, 'legal'?: mixed, 'merchant_id': string, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: string, 'page_origin'?: string, 'payment_collection'?: mixed, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<mixed>, 'payment_link'?: mixed, 'payment_link_id'?: string, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'problems': list<mixed>, 'promotion_config'?: mixed, 'redirects'?: mixed, 'refunds'?: list<mixed>, 'setup_collection'?: mixed, 'status': string, 'subscription_plan_id'?: string, 'subscription_terms'?: mixed, 'superseding_checkout_session_id'?: string, 'supported_actions': list<string>, 'surface': string, 'tax'?: mixed, 'terminal_reason'?: string, 'theme'?: mixed, 'tip'?: mixed, 'type': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObject')); }
    /** The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. An attempt to pay an order.
     * @return ?OrderPaymentAttempt
     */
    public function getActivePaymentAttempt(): ?OrderPaymentAttempt { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. Buyer contact supplied with payment or saved during checkout.
     * @return ?CheckoutBuyerContact
     */
    public function getBuyerContact(): ?CheckoutBuyerContact { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return ?CheckoutBuyerFields
     */
    public function getBuyerFields(): ?CheckoutBuyerFields { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply.
     * @return bool
     */
    public function getCanApplyPromotionCode(): bool { return $this->get('can_apply_promotion_code'); }
    public function hasCanApplyPromotionCode(): bool { return $this->has('can_apply_promotion_code'); }
    /** Unique identifier for this checkout session, prefixed `cs_`.
     * @return string
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getClientReference(): string|null { return $this->get('client_reference'); }
    public function hasClientReference(): bool { return $this->has('client_reference'); }
    /** The note supplied when the checkout session was closed.
     * @return ?string
     */
    public function getClosedReasonMessage(): ?string { return $this->get('closed_reason_message'); }
    public function hasClosedReasonMessage(): bool { return $this->has('closed_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@see CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.
     * @return list<CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemText|CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemTextarea|CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemDropdown|CheckoutSessionPartiallyPaidInstalledMerchantsEventDataObjectCustomFieldAnswersItemCheckbox|\stdClass>
     */
    public function getCustomFieldAnswers(): array { return $this->get('custom_field_answers'); }
    public function hasCustomFieldAnswers(): bool { return $this->has('custom_field_answers'); }
    /** The custom text this session shows in checkout. Custom text shown in checkout: an order summary message and a shipping address label.
     * @return ?CheckoutCustomTextConfig
     */
    public function getCustomText(): ?CheckoutCustomTextConfig { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.
     * @return ?CheckoutDerivedDeliveryResource
     */
    public function getDelivery(): ?CheckoutDerivedDeliveryResource { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Immutable delivery method assignment captured when the checkout was created. [] (Value): string.
     * @return list<string>
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment.
     * @return bool
     */
    public function getDeliverySelectionRequired(): bool { return $this->get('delivery_selection_required'); }
    public function hasDeliverySelectionRequired(): bool { return $this->has('delivery_selection_required'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. Format: int64.
     * @return ?int
     */
    public function getExpiresInSeconds(): ?int { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     * @return ?CheckoutGiftCardChallenge
     */
    public function getGiftCardChallenge(): ?CheckoutGiftCardChallenge { return $this->get('gift_card_challenge'); }
    public function hasGiftCardChallenge(): bool { return $this->has('gift_card_challenge'); }
    /** Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. [] (Value): string.
     * @return ?list<string>
     */
    public function getInventoryReservationIds(): ?array { return $this->get('inventory_reservation_ids'); }
    public function hasInventoryReservationIds(): bool { return $this->has('inventory_reservation_ids'); }
    /** Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): {@see ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
     * @return ExpandedInvoiceSummary|null
     */
    public function getInvoice(): ExpandedInvoiceSummary|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** ID of the invoice a session of type `invoice` collects payment for. Absent for other types.
     * @return ?string
     */
    public function getInvoiceId(): ?string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt.
     * @return bool
     */
    public function getIsInRecovery(): bool { return $this->get('is_in_recovery'); }
    public function hasIsInRecovery(): bool { return $this->has('is_in_recovery'); }
    /** The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return ?CheckoutLegalConfig
     */
    public function getLegal(): ?CheckoutLegalConfig { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the session collects payment for, fixed at creation. Absent when the session has no order.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Origin of the page that renders this headless checkout. Omitted when not set.
     * @return ?string
     */
    public function getPageOrigin(): ?string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return ?PaymentCollection
     */
    public function getPaymentCollection(): ?PaymentCollection { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** IDs of the payment intents for the session's order. Absent when the order has none. [] (Value): string.
     * @return ?list<string>
     */
    public function getPaymentIntentIds(): ?array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. [] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.
     * @return ?list<ExpandedPaymentIntentSummary>
     */
    public function getPaymentIntents(): ?array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. anyOf[1] (Value): {@see ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status, and URL, returned when the payment link is expanded. anyOf[2] (Value): null.
     * @return ExpandedPaymentLinkSummary|null
     */
    public function getPaymentLink(): ExpandedPaymentLinkSummary|null { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** ID of the payment link the session was started from. Absent when it was not started from a payment link.
     * @return ?string
     */
    public function getPaymentLinkId(): ?string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     * @return ?string
     */
    public function getPaymentReturnUrl(): ?string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** Configured payment options for merchant credentials; currently available payment options for the checkout credential. Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return ?CheckoutPaymentConfig
     */
    public function getPayments(): ?CheckoutPaymentConfig { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.
     * @return ?CheckoutPrefill
     */
    public function getPrefill(): ?CheckoutPrefill { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. [] (Value): {@see CheckoutProblemResource}. A problem with a checkout session, such as a stale delivery selection, with its `code`, whether it blocks completion, and remediation.
     * @return list<CheckoutProblemResource>
     */
    public function getProblems(): array { return $this->get('problems'); }
    public function hasProblems(): bool { return $this->has('problems'); }
    /** Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return ?CheckoutPromotionConfig
     */
    public function getPromotionConfig(): ?CheckoutPromotionConfig { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * @return ?CheckoutRedirects
     */
    public function getRedirects(): ?CheckoutRedirects { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. [] (Value): {@see BuyerRefund}. Money returned against a collected payment.
     * @return ?list<BuyerRefund>
     */
    public function getRefunds(): ?array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /** Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client guidance for saving a payment method on the merchant's connected account.
     * @return ?SetupCollection
     */
    public function getSetupCollection(): ?SetupCollection { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types.
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them.
     * @return ?CheckoutSubscriptionTerms
     */
    public function getSubscriptionTerms(): ?CheckoutSubscriptionTerms { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** ID of the session that replaced this one. Present when `terminal_reason` is `superseded`.
     * @return ?string
     */
    public function getSupersedingCheckoutSessionId(): ?string { return $this->get('superseding_checkout_session_id'); }
    public function hasSupersedingCheckoutSessionId(): bool { return $this->has('superseding_checkout_session_id'); }
    /** Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. [] enum: "close". [] (Value): string.  Value enum: "close".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Value enum: "hosted", "headless".
     * @return string
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** The session's tax settings. Omitted when the session sets none. Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed.
     * @return ?CheckoutSessionTax
     */
    public function getTax(): ?CheckoutSessionTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
     * @return ?string
     */
    public function getTerminalReason(): ?string { return $this->get('terminal_reason'); }
    public function hasTerminalReason(): bool { return $this->has('terminal_reason'); }
    /** The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return ?CheckoutTheme
     */
    public function getTheme(): ?CheckoutTheme { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** The tip options this session offers the buyer. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return ?CheckoutTipConfig
     */
    public function getTip(): ?CheckoutTipConfig { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
