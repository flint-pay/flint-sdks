<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?OrderPaymentAttempt $active_payment_attempt
 * @property-read ?CheckoutBuyerContact $buyer_contact
 * @property-read ?CheckoutBuyerFields $buyer_fields
 * @property-read ?bool $can_save_payment_method
 * @property-read ?bool $can_save_payment_method_with_phone
 * @property-read string $checkout_session_id
 * @property-read ?string $closed_reason_message
 * @property-read ?string $created_at
 * @property-read ?CheckoutCustomTextConfig $custom_text
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read ?CheckoutCustomerPrefill $customer_prefill
 * @property-read ?CheckoutDerivedDeliveryResource $delivery
 * @property-read list<string> $delivery_method_ids
 * @property-read ?list<CheckoutDeliveryPinnedDependency> $delivery_pinned_dependencies
 * @property-read bool $delivery_selection_required
 * @property-read ?string $expires_at
 * @property-read ?string $expires_in_seconds
 * @property-read ?string $external_reference_id
 * @property-read ?CheckoutGiftCardChallenge $gift_card_challenge
 * @property-read ExpandedInvoiceSummary|null $invoice
 * @property-read ?string $invoice_id
 * @property-read bool $is_in_recovery
 * @property-read ?CheckoutLegalConfig $legal
 * @property-read ?Image $merchant_icon
 * @property-read ?string $merchant_id
 * @property-read ?Image $merchant_logo
 * @property-read ?string $merchant_name
 * @property-read ?CheckoutMerchantSupport $merchant_support
 * @property-read ?array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read ?string $order_id
 * @property-read ?string $page_origin
 * @property-read ?PaymentCollection $payment_collection
 * @property-read ?list<string> $payment_intent_ids
 * @property-read ?list<ExpandedPaymentIntentSummary> $payment_intents
 * @property-read ExpandedPaymentLinkSummary|null $payment_link
 * @property-read ?string $payment_link_id
 * @property-read ?Image $payment_link_image
 * @property-read ?CheckoutPaymentMethodSave $payment_method_save
 * @property-read ?string $payment_return_url
 * @property-read ?CheckoutPaymentConfig $payments
 * @property-read ?CheckoutPrefill $prefill
 * @property-read list<CheckoutProblemResource> $problems
 * @property-read ?CheckoutPromotionConfig $promotion_config
 * @property-read string|null $recovery_expires_at
 * @property-read ?string $recovery_payment_attempt_id
 * @property-read ?CheckoutRedirects $redirects
 * @property-read ?bool $save_payment_method_requires_verification
 * @property-read ?list<string> $save_payment_method_types
 * @property-read ?PaymentCollection $setup_collection
 * @property-read ?bool $show_flint_mark
 * @property-read string $status
 * @property-read ?string $subscription_plan_id
 * @property-read ?CheckoutSubscriptionTerms $subscription_terms
 * @property-read ?string $superseding_checkout_session_id
 * @property-read string $surface
 * @property-read ?CheckoutSessionTax $tax
 * @property-read ?string $terminal_reason
 * @property-read ?CheckoutTheme $theme
 * @property-read ?CheckoutTipConfig $tip
 * @property-read string $type
 * @property-read ?string $updated_at
 * @property-read ?string $url
 * @property-read string $version
 * @property-read ?string $checkout_auth_token
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionWithSecret extends Model {
    /** @param array{'active_payment_attempt'?: mixed, 'buyer_contact'?: mixed, 'buyer_fields'?: mixed, 'can_save_payment_method'?: bool, 'can_save_payment_method_with_phone'?: bool, 'checkout_session_id': string, 'closed_reason_message'?: string, 'created_at'?: string, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_id'?: string, 'customer_prefill'?: mixed, 'delivery'?: mixed, 'delivery_method_ids': list<string>, 'delivery_pinned_dependencies'?: list<mixed>, 'delivery_selection_required': bool, 'expires_at'?: string, 'expires_in_seconds'?: string, 'external_reference_id'?: string, 'gift_card_challenge'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'is_in_recovery': bool, 'legal'?: mixed, 'merchant_icon'?: mixed, 'merchant_id'?: string, 'merchant_logo'?: mixed, 'merchant_name'?: string, 'merchant_support'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: string, 'page_origin'?: string, 'payment_collection'?: mixed, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<mixed>, 'payment_link'?: mixed, 'payment_link_id'?: string, 'payment_link_image'?: mixed, 'payment_method_save'?: mixed, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'problems': list<mixed>, 'promotion_config'?: mixed, 'recovery_expires_at'?: string|null, 'recovery_payment_attempt_id'?: string, 'redirects'?: mixed, 'save_payment_method_requires_verification'?: bool, 'save_payment_method_types'?: list<string>, 'setup_collection'?: mixed, 'show_flint_mark'?: bool, 'status': string, 'subscription_plan_id'?: string, 'subscription_terms'?: mixed, 'superseding_checkout_session_id'?: string, 'surface': string, 'tax'?: mixed, 'terminal_reason'?: string, 'theme'?: mixed, 'tip'?: mixed, 'type': string, 'updated_at'?: string, 'url'?: string, 'version': string, 'checkout_auth_token'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionWithSecret')); }
    /** Shape $ (Value): {@see OrderPaymentAttempt}. An attempt to pay an order.
     * @return ?OrderPaymentAttempt
     */
    public function getActivePaymentAttempt(): ?OrderPaymentAttempt { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** Shape $ (Value): {@see CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. Buyer contact supplied with payment or saved during checkout.
     * @return ?CheckoutBuyerContact
     */
    public function getBuyerContact(): ?CheckoutBuyerContact { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** Shape $ (Value): {@see CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return ?CheckoutBuyerFields
     */
    public function getBuyerFields(): ?CheckoutBuyerFields { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Shape $ (Value): boolean. Whether checkout offers the buyer the option to save the card they type for faster checkout at this merchant. When true and save_payment_method_requires_verification is false, PayOrder accepts save_payment_method: true for one newly collected card. False when the merchant turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an available payment option, the checkout collects an invoice, a subscription, or a return, or the checkout acts for no customer and Flint cannot email the buyer a verification code. Returned only to the checkout credential; never in webhook payloads.
     * @return ?bool
     */
    public function getCanSavePaymentMethod(): ?bool { return $this->get('can_save_payment_method'); }
    public function hasCanSavePaymentMethod(): bool { return $this->has('can_save_payment_method'); }
    /** Shape $ (Value): boolean. Whether the buyer can save the card they type by giving a US or Canadian mobile phone number with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True while Flint can send texts and either save_payment_method_requires_verification is true, so the number replaces confirming an email before paying, or the checkout acts for the customer whose email the buyer confirmed with this credential, so the number joins that customer's saved details once the buyer confirms it. Returned only to the checkout credential; never in webhook payloads.
     * @return ?bool
     */
    public function getCanSavePaymentMethodWithPhone(): ?bool { return $this->get('can_save_payment_method_with_phone'); }
    public function hasCanSavePaymentMethodWithPhone(): bool { return $this->has('can_save_payment_method_with_phone'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): string. The note supplied when the checkout session was closed.
     * @return ?string
     */
    public function getClosedReasonMessage(): ?string { return $this->get('closed_reason_message'); }
    public function hasClosedReasonMessage(): bool { return $this->has('closed_reason_message'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see CheckoutCustomTextConfig}. Custom text shown in checkout: an order summary message and a shipping address label.
     * @return ?CheckoutCustomTextConfig
     */
    public function getCustomText(): ?CheckoutCustomTextConfig { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string. The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): {@see CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts for, with the recipient name on its default shipping address: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the session is open and acts for a customer. Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook payloads. Details the buyer's checkout can prefill from the customer it acts for.
     * @return ?CheckoutCustomerPrefill
     */
    public function getCustomerPrefill(): ?CheckoutCustomerPrefill { return $this->get('customer_prefill'); }
    public function hasCustomerPrefill(): bool { return $this->has('customer_prefill'); }
    /** Shape $ (Value): {@see CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.
     * @return ?CheckoutDerivedDeliveryResource
     */
    public function getDelivery(): ?CheckoutDerivedDeliveryResource { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Shape $ (Value): Array of string. Immutable delivery method assignment captured when the checkout was created. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shape $ (Value): Array of {@see CheckoutDeliveryPinnedDependency}. Immutable configuration lineage used to evaluate delivery quotes. Shape $[] (Value): {@see CheckoutDeliveryPinnedDependency}. A delivery dependency pinned to a checkout, such as the assigned method, eligibility, or pricing callback, with the revision it was pinned at.
     * @return ?list<CheckoutDeliveryPinnedDependency>
     */
    public function getDeliveryPinnedDependencies(): ?array { return $this->get('delivery_pinned_dependencies'); }
    public function hasDeliveryPinnedDependencies(): bool { return $this->has('delivery_pinned_dependencies'); }
    /** Shape $ (Value): boolean. Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment.
     * @return bool
     */
    public function getDeliverySelectionRequired(): bool { return $this->get('delivery_selection_required'); }
    public function hasDeliverySelectionRequired(): bool { return $this->has('delivery_selection_required'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): integer string. The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return ?string
     */
    public function getExpiresInSeconds(): ?string { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     * @return ?CheckoutGiftCardChallenge
     */
    public function getGiftCardChallenge(): ?CheckoutGiftCardChallenge { return $this->get('gift_card_challenge'); }
    public function hasGiftCardChallenge(): bool { return $this->has('gift_card_challenge'); }
    /** Shape $ (Value): {@see ExpandedInvoiceSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedInvoiceSummary|null
     */
    public function getInvoice(): ExpandedInvoiceSummary|null { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInvoiceId(): ?string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Shape $ (Value): boolean. Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt.
     * @return bool
     */
    public function getIsInRecovery(): bool { return $this->get('is_in_recovery'); }
    public function hasIsInRecovery(): bool { return $this->has('is_in_recovery'); }
    /** Shape $ (Value): {@see CheckoutLegalConfig}. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return ?CheckoutLegalConfig
     */
    public function getLegal(): ?CheckoutLegalConfig { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Shape $ (Value): {@see Image}. The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getMerchantIcon(): ?Image { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getMerchantLogo(): ?Image { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** Shape $ (Value): string. The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     * @return ?string
     */
    public function getMerchantName(): ?string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** Shape $ (Value): {@see CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at least one of them. Show it where your checkout tells the buyer to contact the merchant, such as an expired or closed checkout, or your receipt. Returned only to the checkout credential; never in webhook payloads. The merchant's support contact. Each field is omitted when the merchant has not set it.
     * @return ?CheckoutMerchantSupport
     */
    public function getMerchantSupport(): ?CheckoutMerchantSupport { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** Shape $ (Value): {@see MetadataMap}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Origin of the page that renders this embedded checkout. Omitted when not set.
     * @return ?string
     */
    public function getPageOrigin(): ?string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Shape $ (Value): {@see PaymentCollection}. Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return ?PaymentCollection
     */
    public function getPaymentCollection(): ?PaymentCollection { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return ?list<string>
     */
    public function getPaymentIntentIds(): ?array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Shape $ (Value): Array of {@see ExpandedPaymentIntentSummary}. Shape $[] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.
     * @return ?list<ExpandedPaymentIntentSummary>
     */
    public function getPaymentIntents(): ?array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Shape $ (Value): {@see ExpandedPaymentLinkSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status, and URL, returned when the payment link is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedPaymentLinkSummary|null
     */
    public function getPaymentLink(): ExpandedPaymentLinkSummary|null { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPaymentLinkId(): ?string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Shape $ (Value): {@see Image}. The current image of the payment link that opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ?Image
     */
    public function getPaymentLinkImage(): ?Image { return $this->get('payment_link_image'); }
    public function hasPaymentLinkImage(): bool { return $this->has('payment_link_image'); }
    /** Shape $ (Value): {@see CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's payment by giving a mobile phone number, and whether they confirmed it. Present on GET and PATCH responses after a payment that paid the order in full, or that was approved for the merchant to capture later, and saved a card this way. A checkout whose payment is approved stays open until the capture. Returned only to the checkout credential; never in webhook payloads. A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.
     * @return ?CheckoutPaymentMethodSave
     */
    public function getPaymentMethodSave(): ?CheckoutPaymentMethodSave { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /** Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     * @return ?string
     */
    public function getPaymentReturnUrl(): ?string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** Shape $ (Value): {@see CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently available payment options for the checkout credential. Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return ?CheckoutPaymentConfig
     */
    public function getPayments(): ?CheckoutPaymentConfig { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Shape $ (Value): {@see CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.
     * @return ?CheckoutPrefill
     */
    public function getPrefill(): ?CheckoutPrefill { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Shape $ (Value): Array of {@see CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. Shape $[] (Value): {@see CheckoutProblemResource}. A problem with a checkout session, such as a stale delivery selection, with its `code`, whether it blocks completion, and remediation.
     * @return list<CheckoutProblemResource>
     */
    public function getProblems(): array { return $this->get('problems'); }
    public function hasProblems(): bool { return $this->has('problems'); }
    /** Shape $ (Value): {@see CheckoutPromotionConfig}. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return ?CheckoutPromotionConfig
     */
    public function getPromotionConfig(): ?CheckoutPromotionConfig { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Shape $ (Value): string or null. RFC3339 deadline for the restricted payment-attempt recovery window. Format: date-time.
     * @return string|null
     */
    public function getRecoveryExpiresAt(): string|null { return $this->get('recovery_expires_at'); }
    public function hasRecoveryExpiresAt(): bool { return $this->has('recovery_expires_at'); }
    /** Shape $ (Value): string. Payment attempt that this checkout credential may recover while is_in_recovery is true.
     * @return ?string
     */
    public function getRecoveryPaymentAttemptId(): ?string { return $this->get('recovery_payment_attempt_id'); }
    public function hasRecoveryPaymentAttemptId(): bool { return $this->has('recovery_payment_attempt_id'); }
    /** Shape $ (Value): {@see CheckoutRedirects}. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * @return ?CheckoutRedirects
     */
    public function getRedirects(): ?CheckoutRedirects { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Shape $ (Value): boolean. Whether the buyer must confirm their email with a code before the checkout can save their card or use their saved cards. True when can_save_payment_method is true and the checkout acts for no customer for this credential: the merchant created it without one, and either the buyer has not confirmed an email with this credential, or the customer whose email they confirmed has since changed that email or been deleted. A credential other than the one a confirmation returned, such as the hosted checkout link opened on another device, reads true. Send the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout acts for a customer, and whenever can_save_payment_method is false. Returned only to the checkout credential; never in webhook payloads.
     * @return ?bool
     */
    public function getSavePaymentMethodRequiresVerification(): ?bool { return $this->get('save_payment_method_requires_verification'); }
    public function hasSavePaymentMethodRequiresVerification(): bool { return $this->has('save_payment_method_requires_verification'); }
    /** Shape $ (Value): Array of string. What save_payment_method keeps, present when can_save_payment_method is true: card, a card the buyer types into checkout. Show the save option with that payment method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token created with setup_future_usage none, still pays, and its payment attempt's payment_method_save reports not_saved. The values can grow. Returned only to the checkout credential; never in webhook payloads. [] enum: "card". Shape $[] (Value): string.  Value enum: "card".
     * @return ?list<string>
     */
    public function getSavePaymentMethodTypes(): ?array { return $this->get('save_payment_method_types'); }
    public function hasSavePaymentMethodTypes(): bool { return $this->has('save_payment_method_types'); }
    /** Shape $ (Value): {@see PaymentCollection}. Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return ?PaymentCollection
     */
    public function getSetupCollection(): ?PaymentCollection { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     * @return ?bool
     */
    public function getShowFlintMark(): ?bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
    /** Shape $ (Value): string.  Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): {@see CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them.
     * @return ?CheckoutSubscriptionTerms
     */
    public function getSubscriptionTerms(): ?CheckoutSubscriptionTerms { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSupersedingCheckoutSessionId(): ?string { return $this->get('superseding_checkout_session_id'); }
    public function hasSupersedingCheckoutSessionId(): bool { return $this->has('superseding_checkout_session_id'); }
    /** Shape $ (Value): string.  Value enum: "hosted", "embedded".
     * @return string
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** Shape $ (Value): {@see CheckoutSessionTax}. The session's tax settings. Omitted when the session sets none. Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed.
     * @return ?CheckoutSessionTax
     */
    public function getTax(): ?CheckoutSessionTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): string. Why the session ended. The checkout credential can still read its own closed or expired session; every other call returns CHECKOUT_SESSION_NOT_OPEN. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and embedded sessions open. A session already past expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
     * @return ?string
     */
    public function getTerminalReason(): ?string { return $this->get('terminal_reason'); }
    public function hasTerminalReason(): bool { return $this->has('terminal_reason'); }
    /** Shape $ (Value): {@see CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return ?CheckoutTheme
     */
    public function getTheme(): ?CheckoutTheme { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Shape $ (Value): {@see CheckoutTipConfig}. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return ?CheckoutTipConfig
     */
    public function getTip(): ?CheckoutTipConfig { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** Shape $ (Value): string. What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string. Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay. Present only for hosted sessions read with a merchant credential that can manage checkout sessions. Launch results include it for hosted sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted for embedded sessions.
     * @return ?string
     */
    public function getUrl(): ?string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string. Checkout credential. Send it as Authorization: Bearer <checkout_auth_token>. Present on checkout launch and customer binding confirmation; omitted when a saved-card confirmation keeps the current credential.
     * @return ?string
     */
    public function getCheckoutAuthToken(): ?string { return $this->get('checkout_auth_token'); }
    public function hasCheckoutAuthToken(): bool { return $this->has('checkout_auth_token'); }
}
