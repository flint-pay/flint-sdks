<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $active_payment_attempt
 * @property-read CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass $buyer_fields
 * @property-read bool $can_save_payment_method
 * @property-read bool $can_save_payment_method_with_phone
 * @property-read string $checkout_session_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read string $customer_id
 * @property-read CheckoutCustomerPrefillInput|array<array-key, mixed>|\stdClass $customer_prefill
 * @property-read CheckoutDerivedDeliveryResourceInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read list<string> $delivery_method_ids
 * @property-read bool $delivery_selection_required
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read int $expires_in_seconds
 * @property-read CheckoutGiftCardChallengeInput|array<array-key, mixed>|\stdClass $gift_card_challenge
 * @property-read string $invoice_id
 * @property-read bool $is_in_recovery
 * @property-read CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass $legal
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_icon
 * @property-read string $merchant_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_logo
 * @property-read string $merchant_name
 * @property-read CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass $merchant_support
 * @property-read string $order_id
 * @property-read string $page_origin
 * @property-read BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass $payment_collection
 * @property-read list<string> $payment_intent_ids
 * @property-read string $payment_link_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $payment_link_image
 * @property-read CheckoutPaymentMethodSaveInput|array<array-key, mixed>|\stdClass $payment_method_save
 * @property-read string $payment_return_url
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPrefillInput|array<array-key, mixed>|\stdClass $prefill
 * @property-read list<BuyerCheckoutProblemResourceInput|array<array-key, mixed>|\stdClass> $problems
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read string|\DateTimeInterface|null $recovery_expires_at
 * @property-read string $recovery_payment_attempt_id
 * @property-read CheckoutRedirectsInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read bool $save_payment_method_requires_verification
 * @property-read list<string> $save_payment_method_types
 * @property-read BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass $setup_collection
 * @property-read bool $show_flint_mark
 * @property-read string $status
 * @property-read string $subscription_plan_id
 * @property-read CheckoutSubscriptionTermsInput|array<array-key, mixed>|\stdClass $subscription_terms
 * @property-read string $superseding_checkout_session_id
 * @property-read string $surface
 * @property-read CheckoutSessionTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read string $terminal_reason
 * @property-read CheckoutThemeInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigInput|array<array-key, mixed>|\stdClass $tip
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $url
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCheckoutSessionInput extends Model {
    /** @param array{'active_payment_attempt'?: BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, 'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'can_save_payment_method'?: bool, 'can_save_payment_method_with_phone'?: bool, 'checkout_session_id': string, 'created_at'?: string|\DateTimeInterface, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'customer_id'?: string, 'customer_prefill'?: CheckoutCustomerPrefillInput|array<array-key, mixed>|\stdClass, 'delivery'?: CheckoutDerivedDeliveryResourceInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'delivery_selection_required': bool, 'expires_at'?: string|\DateTimeInterface, 'expires_in_seconds'?: int, 'gift_card_challenge'?: CheckoutGiftCardChallengeInput|array<array-key, mixed>|\stdClass, 'invoice_id'?: string, 'is_in_recovery': bool, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'merchant_icon'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_id'?: string, 'merchant_logo'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_name'?: string, 'merchant_support'?: CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass, 'order_id'?: string, 'page_origin'?: string, 'payment_collection'?: BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent_ids'?: list<string>, 'payment_link_id'?: string, 'payment_link_image'?: ImageInput|array<array-key, mixed>|\stdClass, 'payment_method_save'?: CheckoutPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'payment_return_url'?: string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'prefill'?: CheckoutPrefillInput|array<array-key, mixed>|\stdClass, 'problems': list<BuyerCheckoutProblemResourceInput|array<array-key, mixed>|\stdClass>, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'recovery_expires_at'?: string|\DateTimeInterface|null, 'recovery_payment_attempt_id'?: string, 'redirects'?: CheckoutRedirectsInput|array<array-key, mixed>|\stdClass, 'save_payment_method_requires_verification'?: bool, 'save_payment_method_types'?: list<string>, 'setup_collection'?: BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass, 'show_flint_mark'?: bool, 'status': string, 'subscription_plan_id'?: string, 'subscription_terms'?: CheckoutSubscriptionTermsInput|array<array-key, mixed>|\stdClass, 'superseding_checkout_session_id'?: string, 'surface': string, 'tax'?: CheckoutSessionTaxInput|array<array-key, mixed>|\stdClass, 'terminal_reason'?: string, 'theme'?: CheckoutThemeInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'url'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCheckoutSessionInput')); }
    /** An attempt to pay an order.
     * @return BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When active_payment_attempt is omitted; use hasActivePaymentAttempt() or valueOrDefault().
     */
    public function getActivePaymentAttempt(): mixed { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** Contact the buyer entered in checkout before paying, saved with the session's checkout credential. Separate from merchant-supplied prefill and customer_prefill from the customer record. Omitted until the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the session ends, and when a customer linked to the session is deleted. Buyer contact supplied with payment or saved during checkout.
     * @return CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_fields is omitted; use hasBuyerFields() or valueOrDefault().
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Whether checkout offers the buyer the option to save the card they type for faster checkout at this merchant. When true and save_payment_method_requires_verification is false, PayOrder accepts save_payment_method: true for one newly collected card. False when the merchant turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an available payment option, the checkout collects an invoice, a subscription, or a return, or the checkout acts for no customer and Flint cannot email the buyer a verification code. Returned only to the checkout credential; never in webhook payloads.
     * @return bool
     * @throws SdkError When can_save_payment_method is omitted; use hasCanSavePaymentMethod() or valueOrDefault().
     */
    public function getCanSavePaymentMethod(): bool { return $this->get('can_save_payment_method'); }
    public function hasCanSavePaymentMethod(): bool { return $this->has('can_save_payment_method'); }
    /** Whether the buyer can save the card they type by giving a US or Canadian mobile phone number with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True while Flint can send texts and either save_payment_method_requires_verification is true, so the number replaces confirming an email before paying, or the checkout acts for the customer whose email the buyer confirmed with this credential, so the number joins that customer's saved details once the buyer confirms it. Returned only to the checkout credential; never in webhook payloads.
     * @return bool
     * @throws SdkError When can_save_payment_method_with_phone is omitted; use hasCanSavePaymentMethodWithPhone() or valueOrDefault().
     */
    public function getCanSavePaymentMethodWithPhone(): bool { return $this->get('can_save_payment_method_with_phone'); }
    public function hasCanSavePaymentMethodWithPhone(): bool { return $this->has('can_save_payment_method_with_phone'); }
    /** checkout_session_id
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Custom text shown in checkout: an order summary message and a shipping address label.
     * @return CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Contact and default addresses of the customer the checkout acts for, with the recipient name on its default shipping address: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the session is open and acts for a customer. Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook payloads. Details the buyer's checkout can prefill from the customer it acts for.
     * @return CheckoutCustomerPrefillInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_prefill is omitted; use hasCustomerPrefill() or valueOrDefault().
     */
    public function getCustomerPrefill(): mixed { return $this->get('customer_prefill'); }
    public function hasCustomerPrefill(): bool { return $this->has('customer_prefill'); }
    /** Current delivery choices for Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field does not request a delivery quote. Omitted when the session is not open, has no order, or Flint cannot read its delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.
     * @return CheckoutDerivedDeliveryResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Immutable delivery method assignment captured when the checkout was created. [] (Value): string.
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Whether the order has at least one remaining quote-resolved fulfillment choice that must be selected before payment.
     * @return bool
     * @throws SdkError When delivery_selection_required is omitted; use hasDeliverySelectionRequired() or valueOrDefault().
     */
    public function getDeliverySelectionRequired(): bool { return $this->get('delivery_selection_required'); }
    public function hasDeliverySelectionRequired(): bool { return $this->has('delivery_selection_required'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions, which take their deadline from the invoice. Format: int64.
     * @return int
     * @throws SdkError When expires_in_seconds is omitted; use hasExpiresInSeconds() or valueOrDefault().
     */
    public function getExpiresInSeconds(): int { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     * @return CheckoutGiftCardChallengeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_challenge is omitted; use hasGiftCardChallenge() or valueOrDefault().
     */
    public function getGiftCardChallenge(): mixed { return $this->get('gift_card_challenge'); }
    public function hasGiftCardChallenge(): bool { return $this->has('gift_card_challenge'); }
    /** invoice_id
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Whether this terminal session credential is temporarily restricted to recovering its owning payment attempt.
     * @return bool
     * @throws SdkError When is_in_recovery is omitted; use hasIsInRecovery() or valueOrDefault().
     */
    public function getIsInRecovery(): bool { return $this->get('is_in_recovery'); }
    public function hasIsInRecovery(): bool { return $this->has('is_in_recovery'); }
    /** Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_icon is omitted; use hasMerchantIcon() or valueOrDefault().
     */
    public function getMerchantIcon(): mixed { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_logo is omitted; use hasMerchantLogo() or valueOrDefault().
     */
    public function getMerchantLogo(): mixed { return $this->get('merchant_logo'); }
    public function hasMerchantLogo(): bool { return $this->has('merchant_logo'); }
    /** The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     * @return string
     * @throws SdkError When merchant_name is omitted; use hasMerchantName() or valueOrDefault().
     */
    public function getMerchantName(): string { return $this->get('merchant_name'); }
    public function hasMerchantName(): bool { return $this->has('merchant_name'); }
    /** How the buyer can reach the merchant for help: the support email, phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at least one of them. Show it where your checkout tells the buyer to contact the merchant, such as an expired or closed checkout, or your receipt. Returned only to the checkout credential; never in webhook payloads. The merchant's support contact. Each field is omitted when the merchant has not set it.
     * @return CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_support is omitted; use hasMerchantSupport() or valueOrDefault().
     */
    public function getMerchantSupport(): mixed { return $this->get('merchant_support'); }
    public function hasMerchantSupport(): bool { return $this->has('merchant_support'); }
    /** order_id
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Origin of the page that renders this embedded checkout. Omitted when not set.
     * @return string
     * @throws SdkError When page_origin is omitted; use hasPageOrigin() or valueOrDefault().
     */
    public function getPageOrigin(): string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values.
     * @return BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): mixed { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** payment_link_id
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** The current image of the payment link that opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_link_image is omitted; use hasPaymentLinkImage() or valueOrDefault().
     */
    public function getPaymentLinkImage(): mixed { return $this->get('payment_link_image'); }
    public function hasPaymentLinkImage(): bool { return $this->has('payment_link_image'); }
    /** The card the buyer saved with this checkout's payment by giving a mobile phone number, and whether they confirmed it. Present on GET and PATCH responses after a payment that paid the order in full, or that was approved for the merchant to capture later, and saved a card this way. A checkout whose payment is approved stays open until the capture. Returned only to the checkout credential; never in webhook payloads. A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.
     * @return CheckoutPaymentMethodSaveInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_method_save is omitted; use hasPaymentMethodSave() or valueOrDefault().
     */
    public function getPaymentMethodSave(): mixed { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /** Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     * @return string
     * @throws SdkError When payment_return_url is omitted; use hasPaymentReturnUrl() or valueOrDefault().
     */
    public function getPaymentReturnUrl(): string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** Configured payment options for merchant credentials; currently available payment options for the checkout credential. Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.
     * @return CheckoutPrefillInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When prefill is omitted; use hasPrefill() or valueOrDefault().
     */
    public function getPrefill(): mixed { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. [] (Value): {@see BuyerCheckoutProblemResourceInput}. A checkout problem shown to the buyer, including whether it blocks completion and how to resolve it.
     * @return list<BuyerCheckoutProblemResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When problems is omitted; use hasProblems() or valueOrDefault().
     */
    public function getProblems(): array { return $this->get('problems'); }
    public function hasProblems(): bool { return $this->has('problems'); }
    /** Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** RFC3339 deadline for the restricted payment-attempt recovery window. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When recovery_expires_at is omitted; use hasRecoveryExpiresAt() or valueOrDefault().
     */
    public function getRecoveryExpiresAt(): string|\DateTimeInterface|null { return $this->get('recovery_expires_at'); }
    public function hasRecoveryExpiresAt(): bool { return $this->has('recovery_expires_at'); }
    /** Payment attempt that this checkout credential may recover while is_in_recovery is true.
     * @return string
     * @throws SdkError When recovery_payment_attempt_id is omitted; use hasRecoveryPaymentAttemptId() or valueOrDefault().
     */
    public function getRecoveryPaymentAttemptId(): string { return $this->get('recovery_payment_attempt_id'); }
    public function hasRecoveryPaymentAttemptId(): bool { return $this->has('recovery_payment_attempt_id'); }
    /** Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * @return CheckoutRedirectsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Whether the buyer must confirm their email with a code before the checkout can save their card or use their saved cards. True when can_save_payment_method is true and the checkout acts for no customer for this credential: the merchant created it without one, and either the buyer has not confirmed an email with this credential, or the customer whose email they confirmed has since changed that email or been deleted. A credential other than the one a confirmation returned, such as the hosted checkout link opened on another device, reads true. Send the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout acts for a customer, and whenever can_save_payment_method is false. Returned only to the checkout credential; never in webhook payloads.
     * @return bool
     * @throws SdkError When save_payment_method_requires_verification is omitted; use hasSavePaymentMethodRequiresVerification() or valueOrDefault().
     */
    public function getSavePaymentMethodRequiresVerification(): bool { return $this->get('save_payment_method_requires_verification'); }
    public function hasSavePaymentMethodRequiresVerification(): bool { return $this->has('save_payment_method_requires_verification'); }
    /** What save_payment_method keeps, present when can_save_payment_method is true: card, a card the buyer types into checkout. Show the save option with that payment method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token created with setup_future_usage none, still pays, and its payment attempt's payment_method_save reports not_saved. The values can grow. Returned only to the checkout credential; never in webhook payloads. [] enum: "card". [] (Value): string.  Value enum: "card".
     * @return list<string>
     * @throws SdkError When save_payment_method_types is omitted; use hasSavePaymentMethodTypes() or valueOrDefault().
     */
    public function getSavePaymentMethodTypes(): array { return $this->get('save_payment_method_types'); }
    public function hasSavePaymentMethodTypes(): bool { return $this->has('save_payment_method_types'); }
    /** Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values.
     * @return BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_collection is omitted; use hasSetupCollection() or valueOrDefault().
     */
    public function getSetupCollection(): mixed { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     * @return bool
     * @throws SdkError When show_flint_mark is omitted; use hasShowFlintMark() or valueOrDefault().
     */
    public function getShowFlintMark(): bool { return $this->get('show_flint_mark'); }
    public function hasShowFlintMark(): bool { return $this->has('show_flint_mark'); }
    /** Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** subscription_plan_id
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them. Absent when the checkout starts no subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them.
     * @return CheckoutSubscriptionTermsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_terms is omitted; use hasSubscriptionTerms() or valueOrDefault().
     */
    public function getSubscriptionTerms(): mixed { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** superseding_checkout_session_id
     * @return string
     * @throws SdkError When superseding_checkout_session_id is omitted; use hasSupersedingCheckoutSessionId() or valueOrDefault().
     */
    public function getSupersedingCheckoutSessionId(): string { return $this->get('superseding_checkout_session_id'); }
    public function hasSupersedingCheckoutSessionId(): bool { return $this->has('superseding_checkout_session_id'); }
    /** Value enum: "hosted", "embedded".
     * @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** The session's tax settings. Omitted when the session sets none. Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed.
     * @return CheckoutSessionTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Value enum: "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
     * @return string
     * @throws SdkError When terminal_reason is omitted; use hasTerminalReason() or valueOrDefault().
     */
    public function getTerminalReason(): string { return $this->get('terminal_reason'); }
    public function hasTerminalReason(): bool { return $this->has('terminal_reason'); }
    /** The theme checkout renders with: your branding settings, with the session's `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the other fields come from branding settings. Omitted when neither sets a value. Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.
     * @return CheckoutThemeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return CheckoutTipConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay. Present only for hosted sessions read with a merchant credential that can manage checkout sessions. Launch results include it for hosted sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted for embedded sessions.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
