<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $active_payment_attempt
 * @property-read CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass $buyer_fields
 * @property-read bool $can_apply_promotion_code
 * @property-read bool $can_save_payment_method
 * @property-read bool $can_save_payment_method_with_phone
 * @property-read string $checkout_session_id
 * @property-read string|null $client_reference
 * @property-read string $closed_reason_message
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<CustomFieldAnswerInput|array<array-key, mixed>|\stdClass> $custom_field_answers
 * @property-read CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read CheckoutCustomerPrefillInput|array<array-key, mixed>|\stdClass $customer_prefill
 * @property-read CheckoutDerivedDeliveryResourceInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read list<string> $delivery_method_ids
 * @property-read bool $delivery_selection_required
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read int $expires_in_seconds
 * @property-read string $external_reference_id
 * @property-read CheckoutGiftCardChallengeInput|array<array-key, mixed>|\stdClass $gift_card_challenge
 * @property-read list<string> $inventory_reservation_ids
 * @property-read array{'collection_block_status'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'due_date'?: string, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'order_id'?: string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $invoice
 * @property-read string $invoice_id
 * @property-read bool $is_in_recovery
 * @property-read CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass $legal
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_icon
 * @property-read string $merchant_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $merchant_logo
 * @property-read string $merchant_name
 * @property-read CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass $merchant_support
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read string $page_origin
 * @property-read bool $pay_to_new_address_requires_verification
 * @property-read PaymentCollectionInput|array<array-key, mixed>|\stdClass $payment_collection
 * @property-read list<string> $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read array{'completed_count': int, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'status': string, 'subscription_plan_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'url'?: string, ...}|object|null $payment_link
 * @property-read string $payment_link_id
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $payment_link_image
 * @property-read CheckoutPaymentMethodSaveInput|array<array-key, mixed>|\stdClass $payment_method_save
 * @property-read string $payment_return_url
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutSessionPlatformFeeInput|array<array-key, mixed>|\stdClass $platform_fee
 * @property-read CheckoutPrefillInput|array<array-key, mixed>|\stdClass $prefill
 * @property-read list<CheckoutProblemResourceInput|array<array-key, mixed>|\stdClass> $problems
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read string|\DateTimeInterface|null $recovery_expires_at
 * @property-read string $recovery_payment_attempt_id
 * @property-read CheckoutRedirectsInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read list<BuyerRefundInput|array<array-key, mixed>|\stdClass> $refunds
 * @property-read bool $save_payment_method_requires_verification
 * @property-read list<string> $save_payment_method_types
 * @property-read SetupCollectionInput|array<array-key, mixed>|\stdClass $setup_collection
 * @property-read bool $show_flint_mark
 * @property-read string $status
 * @property-read string $subscription_plan_id
 * @property-read CheckoutSubscriptionTermsInput|array<array-key, mixed>|\stdClass $subscription_terms
 * @property-read string $superseding_checkout_session_id
 * @property-read list<string> $supported_actions
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
final class CheckoutSessionInput extends Model {
    /** @param array{'active_payment_attempt'?: OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, 'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'can_apply_promotion_code': bool, 'can_save_payment_method'?: bool, 'can_save_payment_method_with_phone'?: bool, 'checkout_session_id': string, 'client_reference': string|null, 'closed_reason_message'?: string, 'created_at': string|\DateTimeInterface, 'custom_field_answers': list<CustomFieldAnswerInput|array<array-key, mixed>|\stdClass>, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'customer_prefill'?: CheckoutCustomerPrefillInput|array<array-key, mixed>|\stdClass, 'delivery'?: CheckoutDerivedDeliveryResourceInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'delivery_selection_required': bool, 'expires_at'?: string|\DateTimeInterface, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'gift_card_challenge'?: CheckoutGiftCardChallengeInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_ids'?: list<string>, 'invoice'?: array{'collection_block_status'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'due_date'?: string, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'order_id'?: string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'invoice_id'?: string, 'is_in_recovery': bool, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'merchant_icon'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'merchant_logo'?: ImageInput|array<array-key, mixed>|\stdClass, 'merchant_name'?: string, 'merchant_support'?: CheckoutMerchantSupportInput|array<array-key, mixed>|\stdClass, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id'?: string, 'page_origin'?: string, 'pay_to_new_address_requires_verification'?: bool, 'payment_collection'?: PaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>, 'payment_link'?: array{'completed_count': int, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'status': string, 'subscription_plan_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'url'?: string, ...}|object|null, 'payment_link_id'?: string, 'payment_link_image'?: ImageInput|array<array-key, mixed>|\stdClass, 'payment_method_save'?: CheckoutPaymentMethodSaveInput|array<array-key, mixed>|\stdClass, 'payment_return_url'?: string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'platform_fee'?: CheckoutSessionPlatformFeeInput|array<array-key, mixed>|\stdClass, 'prefill'?: CheckoutPrefillInput|array<array-key, mixed>|\stdClass, 'problems': list<CheckoutProblemResourceInput|array<array-key, mixed>|\stdClass>, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'recovery_expires_at'?: string|\DateTimeInterface|null, 'recovery_payment_attempt_id'?: string, 'redirects'?: CheckoutRedirectsInput|array<array-key, mixed>|\stdClass, 'refunds'?: list<BuyerRefundInput|array<array-key, mixed>|\stdClass>, 'save_payment_method_requires_verification'?: bool, 'save_payment_method_types'?: list<string>, 'setup_collection'?: SetupCollectionInput|array<array-key, mixed>|\stdClass, 'show_flint_mark'?: bool, 'status': string, 'subscription_plan_id'?: string, 'subscription_terms'?: CheckoutSubscriptionTermsInput|array<array-key, mixed>|\stdClass, 'superseding_checkout_session_id'?: string, 'supported_actions': list<string>, 'surface': string, 'tax'?: CheckoutSessionTaxInput|array<array-key, mixed>|\stdClass, 'terminal_reason'?: string, 'theme'?: CheckoutThemeInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at': string|\DateTimeInterface, 'url'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionInput')); }
    /** The payment attempt now collecting this checkout's order, the same attempt as the order's active_payment_attempt. Read it to recover after losing a pay response, and resume it only when is_resumable is true. Omitted when no attempt is active. Pending actions that open a URL are left out; the pay response carries them. An attempt to pay an order.
     * @return OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
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
    /** Whether to offer promotion-code entry now. True only while the session is open, is not in recovery, and merchant promotion policy allows codes. An explicit promotion_config.codes_enabled wins; null offers entry only when this merchant has an active code promotion whose schedule includes now, in the session's environment. Recomputed on each read. This hint does not change code admission: checkout lifecycle, promotion_config, and merchant policy still apply.
     * @return bool
     * @throws SdkError When can_apply_promotion_code is omitted; use hasCanApplyPromotionCode() or valueOrDefault().
     */
    public function getCanApplyPromotionCode(): bool { return $this->get('can_apply_promotion_code'); }
    public function hasCanApplyPromotionCode(): bool { return $this->has('can_apply_promotion_code'); }
    /** Whether checkout offers the buyer the option to save the card they type for faster checkout at this merchant. When true, PayOrder accepts save_payment_method: true for one newly collected card. False when the merchant turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an available payment option, the checkout collects an invoice, a subscription, or a return, or the checkout acts for no customer and Flint cannot email the buyer a verification code. Returned only to the checkout credential; never in webhook payloads.
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
    /** Unique identifier for this checkout session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When client_reference is omitted; use hasClientReference() or valueOrDefault().
     */
    public function getClientReference(): string|null { return $this->get('client_reference'); }
    public function hasClientReference(): bool { return $this->has('client_reference'); }
    /** The note supplied when the checkout session was closed.
     * @return string
     * @throws SdkError When closed_reason_message is omitted; use hasClosedReasonMessage() or valueOrDefault().
     */
    public function getClosedReasonMessage(): string { return $this->get('closed_reason_message'); }
    public function hasClosedReasonMessage(): bool { return $this->has('closed_reason_message'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The buyer's answers to the payment link's custom fields, the same as the `custom_field_answers` of the session's order. Read-only. Empty when the session didn't start from a payment link, the buyer answered no custom fields, or the order was created before Flint recorded answers here. Returned only to merchant credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@see CustomFieldAnswerInput}. One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.
     * @return list<CustomFieldAnswerInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When custom_field_answers is omitted; use hasCustomFieldAnswers() or valueOrDefault().
     */
    public function getCustomFieldAnswers(): array { return $this->get('custom_field_answers'); }
    public function hasCustomFieldAnswers(): bool { return $this->has('custom_field_answers'); }
    /** The custom text this session shows in checkout. Custom text shown in checkout: an order summary message and a shipping address label.
     * @return CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer of the session's order. Omitted when the order has none. A checkout credential issued for this session acts for this customer. Add expand=customer to include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
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
    /** Immutable delivery method assignment captured when the checkout was created. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Where the buyer completes a gift card challenge for this checkout. Returned on single-session reads, session create and update responses, checkout launch results, and customer verification confirmation results while the session is open and can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results. A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     * @return CheckoutGiftCardChallengeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_challenge is omitted; use hasGiftCardChallenge() or valueOrDefault().
     */
    public function getGiftCardChallenge(): mixed { return $this->get('gift_card_challenge'); }
    public function hasGiftCardChallenge(): bool { return $this->has('gift_card_challenge'); }
    /** Immutable cart hold IDs authorized by the merchant at session creation. Omitted when empty and from checkout-credential responses. Buyer and merchant delivery requests that omit IDs use eligible bound holds; explicit merchant IDs replace the binding for that request. First adopter wins when sessions share a hold. Invalidated or otherwise ended sessions cannot adopt stock, and replacements never inherit the binding. Unused cart units retain their own release and expiration lifecycle. [] (Value): string. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return list<string>
     * @throws SdkError When inventory_reservation_ids is omitted; use hasInventoryReservationIds() or valueOrDefault().
     */
    public function getInventoryReservationIds(): array { return $this->get('inventory_reservation_ids'); }
    public function hasInventoryReservationIds(): bool { return $this->has('inventory_reservation_ids'); }
    /** Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): {@see ExpandedInvoiceSummaryInput}. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
     * @return array{'collection_block_status'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'due_date'?: string, 'invoice_id': string, 'invoice_number'?: string, 'is_overdue': bool, 'order_id'?: string, 'outstanding_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'paid_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'refund_status'?: string, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** ID of the invoice a session of type `invoice` collects payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
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
    /** The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its URL, size, and alt text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_icon is omitted; use hasMerchantIcon() or valueOrDefault().
     */
    public function getMerchantIcon(): mixed { return $this->get('merchant_icon'); }
    public function hasMerchantIcon(): bool { return $this->has('merchant_icon'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and webhooks omit it. An image with its URL, size, and alt text.
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
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the session collects payment for, fixed at creation. Absent when the session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Origin of the page that renders this headless checkout. Omitted when not set.
     * @return string
     * @throws SdkError When page_origin is omitted; use hasPageOrigin() or valueOrDefault().
     */
    public function getPageOrigin(): string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Whether at least one saved card this checkout lists would be refused for the current delivery destination because the paying credential last confirmed a code more than 15 minutes ago. Request a code with purpose pay_to_new_address, without email or channel, and confirm it with this credential before paying. A Flint wallet card can still pay to an address in that wallet while this is true for a store saved card. Pickup and orders that ship nothing never require this verification. Returned only to the checkout credential. Returned only to the checkout credential; never in webhook payloads.
     * @return bool
     * @throws SdkError When pay_to_new_address_requires_verification is omitted; use hasPayToNewAddressRequiresVerification() or valueOrDefault().
     */
    public function getPayToNewAddressRequiresVerification(): bool { return $this->get('pay_to_new_address_requires_verification'); }
    public function hasPayToNewAddressRequiresVerification(): bool { return $this->has('pay_to_new_address_requires_verification'); }
    /** Guidance for collecting a payment source. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return PaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): mixed { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** IDs of the payment intents for the session's order. Absent when the order has none. [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Present only when `expand` includes `payment_intents`: summaries of the payment intents in `payment_intent_ids`. [] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.
     * @return list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Present only when `expand` includes `payment_link`; `null` when expanded and there is no related payment link. anyOf[1] (Value): {@see ExpandedPaymentLinkSummaryInput}. A payment link's summary fields, including name, type, status, and URL, returned when the payment link is expanded. anyOf[2] (Value): null.
     * @return array{'completed_count': int, 'created_at'?: string|\DateTimeInterface, 'description'?: string, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'status': string, 'subscription_plan_id'?: string, 'updated_at'?: string|\DateTimeInterface, 'url'?: string, ...}|object|null
     * @throws SdkError When payment_link is omitted; use hasPaymentLink() or valueOrDefault().
     */
    public function getPaymentLink(): mixed { return $this->get('payment_link'); }
    public function hasPaymentLink(): bool { return $this->has('payment_link'); }
    /** ID of the payment link the session was started from. Absent when it was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** The current image of the payment link that opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses and webhooks omit it. An image with its URL, size, and alt text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_link_image is omitted; use hasPaymentLinkImage() or valueOrDefault().
     */
    public function getPaymentLinkImage(): mixed { return $this->get('payment_link_image'); }
    public function hasPaymentLinkImage(): bool { return $this->has('payment_link_image'); }
    /** The card the buyer saved pending with this checkout's payment, and whether they confirmed it. Present on GET and PATCH responses after a payment that paid the order in full, or that was approved for the merchant to capture later, and saved a card this way. Without a number, confirmation requires an emailed code. A checkout whose payment is approved stays open until the capture. Returned only to the checkout credential; never in webhook payloads. A card the buyer saved with this checkout's payment that waits for a code. It works for nothing until the buyer confirms it with a code: request one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method.
     * @return CheckoutPaymentMethodSaveInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_method_save is omitted; use hasPaymentMethodSave() or valueOrDefault().
     */
    public function getPaymentMethodSave(): mixed { return $this->get('payment_method_save'); }
    public function hasPaymentMethodSave(): bool { return $this->has('payment_method_save'); }
    /** Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
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
    /** The platform fee the partner app requested when it created the session with an install token. Each payment intent the session creates carries its own platform_fee, lowered to fit that payment. Absent when the session has none. The platform fee the partner app requested when it created the session. Each payment the session creates carries its own platform_fee, lowered to fit that payment.
     * @return CheckoutSessionPlatformFeeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee is omitted; use hasPlatformFee() or valueOrDefault().
     */
    public function getPlatformFee(): mixed { return $this->get('platform_fee'); }
    public function hasPlatformFee(): bool { return $this->has('platform_fee'); }
    /** Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.
     * @return CheckoutPrefillInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When prefill is omitted; use hasPrefill() or valueOrDefault().
     */
    public function getPrefill(): mixed { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Named conditions that affect checkout completion. Follow each problem's remediation action instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means another payment for the order must finish before this checkout can complete. When Flint cannot read the checkout's delivery, the read still succeeds and reports delivery_unreadable; its remediation says whether reading the session again can succeed, and its next action's reason_code names the error. [] (Value): {@see CheckoutProblemResourceInput}. A problem with a checkout session, such as a stale delivery selection, with its `code`, whether it blocks completion, and remediation.
     * @return list<CheckoutProblemResourceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When problems is omitted; use hasProblems() or valueOrDefault().
     */
    public function getProblems(): array { return $this->get('problems'); }
    public function hasProblems(): bool { return $this->has('problems'); }
    /** Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** When the restricted payment-attempt recovery window ends. `null` when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When recovery_expires_at is omitted; use hasRecoveryExpiresAt() or valueOrDefault().
     */
    public function getRecoveryExpiresAt(): string|\DateTimeInterface|null { return $this->get('recovery_expires_at'); }
    public function hasRecoveryExpiresAt(): bool { return $this->has('recovery_expires_at'); }
    /** Payment attempt that this checkout credential may recover while is_in_recovery is true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     * @return string
     * @throws SdkError When recovery_payment_attempt_id is omitted; use hasRecoveryPaymentAttemptId() or valueOrDefault().
     */
    public function getRecoveryPaymentAttemptId(): string { return $this->get('recovery_payment_attempt_id'); }
    public function hasRecoveryPaymentAttemptId(): bool { return $this->has('recovery_payment_attempt_id'); }
    /** Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * @return CheckoutRedirectsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** All buyer-visible refunds on this session’s order, including refunds made by the store. Uses the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an array, with [] when there are none, and omitted from other responses and webhooks. A failed refund with failure_reason refund_abandoned could not be completed: tell the buyer to contact the store to get their money back. [] (Value): {@see BuyerRefundInput}. Money returned against a collected payment.
     * @return list<BuyerRefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refunds is omitted; use hasRefunds() or valueOrDefault().
     */
    public function getRefunds(): array { return $this->get('refunds'); }
    public function hasRefunds(): bool { return $this->has('refunds'); }
    /** Whether saving a new card or using saved cards needs the buyer to confirm their email with a code. A new card can be saved pending with the payment and confirmed on the receipt; using saved cards still needs the code before paying. True when can_save_payment_method is true and the checkout acts for no customer for this credential: the merchant created it without one, and either the buyer has not confirmed an email with this credential, or the customer whose email they confirmed has since changed that email or been deleted. A credential other than the one a confirmation returned, such as the hosted checkout link opened on another device, reads true. Send the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout acts for a customer, and whenever can_save_payment_method is false. Returned only to the checkout credential; never in webhook payloads.
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
    /** Guidance for collecting a payment method to save. Checkout-credential reads include it only while the session is open. Returned only to the checkout credential; never in webhook payloads. Client guidance for saving a payment method on the merchant's connected account.
     * @return SetupCollectionInput|array<array-key, mixed>|\stdClass
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
    /** Where the session is in its lifecycle. Only an `open` session accepts payment. `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the subscription plan a session of type `subscription_plan` signs the buyer up for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
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
    /** ID of the session that replaced this one. Present when `terminal_reason` is `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When superseding_checkout_session_id is omitted; use hasSupersedingCheckoutSessionId() or valueOrDefault().
     */
    public function getSupersedingCheckoutSessionId(): string { return $this->get('superseding_checkout_session_id'); }
    public function hasSupersedingCheckoutSessionId(): bool { return $this->has('superseding_checkout_session_id'); }
    /** Lifecycle actions Flint accepts now, computed from stored checkout state without checking the caller's permissions. Contains close while open; empty after payment, closure, or expiry. [] enum: "close". [] (Value): string.  Value enum: "close".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout page; a headless one is rendered on your own page. Value enum: "hosted", "headless".
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
    /** Why the session ended. The checkout credential can still read its own closed or expired session; every other call is refused because the session is not open. order_paid_elsewhere applies only to invalidated sessions when payment succeeds or partially succeeds outside the session. order_mutated applies when an edit closes or completes its order, or ends an invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted and headless sessions open. A session already past expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
    /** The tip options this session offers the buyer. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return CheckoutTipConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay. Present only for hosted sessions read with a merchant credential that can manage checkout sessions. Launch results include it for hosted sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted for headless sessions.
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
