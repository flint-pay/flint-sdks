<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool}|object $buyer_fields
 * @property-read CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read string $customer_id
 * @property-read list<string> $delivery_method_ids
 * @property-read int $expires_in_seconds
 * @property-read string $external_reference_id
 * @property-read CheckoutLegalConfigRequestInput|array<array-key, mixed>|\stdClass $legal
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $page_origin
 * @property-read string $payment_return_url
 * @property-read CheckoutPaymentConfigRequestInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPrefillRequestInput|array<array-key, mixed>|\stdClass $prefill
 * @property-read CheckoutPromotionConfigRequestInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $subscription_plan_id
 * @property-read CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass $subscription_terms
 * @property-read string $surface
 * @property-read CheckoutTaxConfigRequestInput|array<array-key, mixed>|\stdClass $tax
 * @property-read ThemeConfigRequestInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigRequestInput|array<array-key, mixed>|\stdClass $tip
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCheckoutSessionSubscriptionPlanInput extends Model {
    /** @param array{'buyer_fields'?: array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool}|object, 'custom_text'?: CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass, 'customer_id'?: string, 'delivery_method_ids'?: list<string>, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'legal'?: CheckoutLegalConfigRequestInput|array<array-key, mixed>|\stdClass, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'page_origin'?: string, 'payment_return_url'?: string, 'payments'?: CheckoutPaymentConfigRequestInput|array<array-key, mixed>|\stdClass, 'prefill'?: CheckoutPrefillRequestInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigRequestInput|array<array-key, mixed>|\stdClass, 'redirects'?: CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass, 'subscription_plan_id': string, 'subscription_terms'?: CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass, 'surface'?: string, 'tax'?: CheckoutTaxConfigRequestInput|array<array-key, mixed>|\stdClass, 'theme'?: ThemeConfigRequestInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCheckoutSessionSubscriptionPlanInput')); }
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. address_autocomplete_enabled (Optional): boolean. Whether checkout offers address suggestions while the buyer enters an address. require_billing_address (Optional): boolean. Whether checkout requires the buyer's billing address. require_email (Optional): boolean. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. Value enum: true. require_phone (Optional): boolean. Whether checkout requires the buyer's phone number.
     * @return array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool}|object
     * @throws SdkError When buyer_fields is omitted; use hasBuyerFields() or valueOrDefault().
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label.
     * @return CheckoutCustomTextWriteConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Existing customer to link to the order Flint creates. Not allowed with type: order: the session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1.
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
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
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
    /** Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When page_origin is omitted; use hasPageOrigin() or valueOrDefault().
     */
    public function getPageOrigin(): string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the session there to show the result. Required when the session offers affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
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
    /** Contact details and addresses to fill in for the buyer, who can change them. For a customer with saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's tax location. Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the checkout credential reads from the customer record.
     * @return CheckoutPrefillRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When prefill is omitted; use hasPrefill() or valueOrDefault().
     */
    public function getPrefill(): mixed { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return CheckoutPromotionConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     * @return CheckoutRedirectsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** An active plan. minLength: 1.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Subscription terms you set on a checkout session: billing interval, interval count, and quantity.
     * @return CheckoutSubscriptionTermsRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_terms is omitted; use hasSubscriptionTerms() or valueOrDefault().
     */
    public function getSubscriptionTerms(): mixed { return $this->get('subscription_terms'); }
    public function hasSubscriptionTerms(): bool { return $this->has('subscription_terms'); }
    /** Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. Default: "hosted". Value enum: "hosted", "embedded".
     * @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** Automatic tax settings for the order Flint creates from quick_pay_item or subscription_plan_id. With order_id, set tax on the order; sending tax returns INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and status. Whether tax is collected for a checkout session or payment link.
     * @return CheckoutTaxConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Colors and title to apply to a checkout session's page.
     * @return ThemeConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return CheckoutTipConfigRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** What the checkout collects payment for. order: an order you created; send order_id. quick_pay: one named amount; send quick_pay_item, and Flint creates the order. subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates the order and, once the buyer pays, the subscription. Value enum: "subscription_plan".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
