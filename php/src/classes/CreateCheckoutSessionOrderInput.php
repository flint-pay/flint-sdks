<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerFieldsRequestInput|array<array-key, mixed>|\stdClass $buyer_fields
 * @property-read CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read int $expires_in_seconds
 * @property-read string $external_reference_id
 * @property-read list<string> $inventory_reservation_ids
 * @property-read CheckoutLegalConfigRequestInput|array<array-key, mixed>|\stdClass $legal
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read string $page_origin
 * @property-read string $payment_return_url
 * @property-read CheckoutPaymentConfigRequestInput|array<array-key, mixed>|\stdClass $payments
 * @property-read PlatformFeeRequestInput|array<array-key, mixed>|\stdClass $platform_fee
 * @property-read CheckoutPrefillRequestInput|array<array-key, mixed>|\stdClass $prefill
 * @property-read CheckoutPromotionConfigRequestInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $replace_checkout_session_id
 * @property-read string $surface
 * @property-read ThemeConfigRequestInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigRequestInput|array<array-key, mixed>|\stdClass $tip
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionOrderInput extends Model {
    /** @param array{'buyer_fields'?: CheckoutBuyerFieldsRequestInput|array<array-key, mixed>|\stdClass, 'custom_text'?: CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids'?: list<string>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'inventory_reservation_ids'?: list<string>, 'legal'?: CheckoutLegalConfigRequestInput|array<array-key, mixed>|\stdClass, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: CheckoutPaymentConfigRequestInput|array<array-key, mixed>|\stdClass, 'platform_fee'?: PlatformFeeRequestInput|array<array-key, mixed>|\stdClass, 'prefill'?: CheckoutPrefillRequestInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigRequestInput|array<array-key, mixed>|\stdClass, 'redirects'?: CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass, 'replace_checkout_session_id'?: string, 'surface'?: string, 'theme'?: ThemeConfigRequestInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionOrderInput')); }
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return CheckoutBuyerFieldsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_fields is omitted; use hasBuyerFields() or valueOrDefault().
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Custom text for this session's checkout: an order summary message and a shipping address label. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label.
     * @return CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Seconds the session stays open, from 60 to 86,400. Omit it to use settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60. maximum: 86400.
     * @return int
     * @throws SdkError When expires_in_seconds is omitted; use hasExpiresInSeconds() or valueOrDefault().
     */
    public function getExpiresInSeconds(): int { return $this->get('expires_in_seconds'); }
    public function hasExpiresInSeconds(): bool { return $this->has('expires_in_seconds'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Merchant-created cart holds this session may adopt during delivery selection. Only with type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes credit still-eligible bound holds and buyer selections adopt matching units without supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs, including an empty array, replace it for that request. First adopter wins when sessions share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return list<string>
     * @throws SdkError When inventory_reservation_ids is omitted; use hasInventoryReservationIds() or valueOrDefault().
     */
    public function getInventoryReservationIds(): array { return $this->get('inventory_reservation_ids'); }
    public function hasInventoryReservationIds(): bool { return $this->has('inventory_reservation_ids'); }
    /** The terms and policy links this session shows the buyer, and whether the buyer must accept the terms. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return CheckoutLegalConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The order to collect. It must be open and not collected by an invoice or a return resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Origin of the page where you render this headless checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When page_origin is omitted; use hasPageOrigin() or valueOrDefault().
     */
    public function getPageOrigin(): string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When payment_return_url is omitted; use hasPaymentReturnUrl() or valueOrDefault().
     */
    public function getPaymentReturnUrl(): string { return $this->get('payment_return_url'); }
    public function hasPaymentReturnUrl(): bool { return $this->has('payment_return_url'); }
    /** Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment.
     * @return CheckoutPaymentConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** A platform fee your partner app charges on the payment the session collects, checked once against the order total when the session is created. Each payment the session creates carries its own fee, lowered to the cap for its amount. Only a partner app install token can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A subscription_plan checkout session, or an order whose payment starts or renews a subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because Flint's billing creates the renewals. amount_money must be above zero, in the payment's currency, at most the platform fee cap the merchant approved for this amount, and below the amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with maximum_money when the cap or the amount bounds it. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability platform_fees and the reason the app's platform status gives. Test mode never checks the capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less at confirm or capture, so the payment never fails because of it. Part of the request fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     * @return PlatformFeeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee is omitted; use hasPlatformFee() or valueOrDefault().
     */
    public function getPlatformFee(): mixed { return $this->get('platform_fee'); }
    public function hasPlatformFee(): bool { return $this->has('platform_fee'); }
    /** Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.
     * @return CheckoutPrefillRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When prefill is omitted; use hasPrefill() or valueOrDefault().
     */
    public function getPrefill(): mixed { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Whether automatic promotions apply to this session and whether the buyer can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return CheckoutPromotionConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * @return CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Expected checkout session for an atomic replacement. Allowed only with type: order. The named session must belong to the same merchant, environment, and order. Active payment work fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When replace_checkout_session_id is omitted; use hasReplaceCheckoutSessionId() or valueOrDefault().
     */
    public function getReplaceCheckoutSessionId(): string { return $this->get('replace_checkout_session_id'); }
    public function hasReplaceCheckoutSessionId(): bool { return $this->has('replace_checkout_session_id'); }
    /** Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default: "hosted". Value enum: "hosted", "headless".
     * @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** The title and colors for this session's checkout. Fields you omit come from your branding settings. Colors and title to apply to a checkout session's page.
     * @return ThemeConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Tip options for this session. Fields you omit follow your tipping settings. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return CheckoutTipConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance on a return resolution; send return_resolution_id. invoice: what is due now on an open invoice; send invoice_id. The order, quick_pay and subscription_plan types need checkouts.checkout_sessions.write; return_resolution needs commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum: "order".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
