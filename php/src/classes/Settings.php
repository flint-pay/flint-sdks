<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BrandingSettings $branding
 * @property-read ?CheckoutSettings $checkout
 * @property-read string $created_at
 * @property-read ?CustomerAccountSettings $customer_account
 * @property-read ?CustomerEmailDeliverySettings $customer_email_delivery
 * @property-read ?FulfillmentSettings $fulfillment
 * @property-read ?InventorySettings $inventory
 * @property-read ?InvoiceSettings $invoices
 * @property-read ?LegalSettings $legal
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ?PaymentLimitSettings $payment_limits
 * @property-read ?PaymentSettings $payments
 * @property-read ?PromotionSettings $promotions
 * @property-read string $settings_id
 * @property-read ?SubscriptionSettings $subscriptions
 * @property-read ?TaxSettings $tax
 * @property-read TaxIdentity|null $tax_identity
 * @property-read ?TippingSettings $tipping
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class Settings extends Model {
    /** @param array{'branding'?: mixed, 'checkout'?: mixed, 'created_at': string, 'customer_account'?: mixed, 'customer_email_delivery'?: mixed, 'fulfillment'?: mixed, 'inventory'?: mixed, 'invoices'?: mixed, 'legal'?: mixed, 'merchant_id': string, 'metadata'?: mixed, 'payment_limits'?: mixed, 'payments'?: mixed, 'promotions'?: mixed, 'settings_id': string, 'subscriptions'?: mixed, 'tax'?: mixed, 'tax_identity': mixed, 'tipping'?: mixed, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Settings')); }
    /** Colors, font, and corner radius of hosted checkout, receipts, and links. Omitted until you save a value in this section; effective settings fill in Flint's defaults. A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme.
     * @return ?BrandingSettings
     */
    public function getBranding(): ?BrandingSettings { return $this->get('branding'); }
    public function hasBranding(): bool { return $this->has('branding'); }
    /** Defaults for hosted checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.
     * @return ?CheckoutSettings
     */
    public function getCheckout(): ?CheckoutSettings { return $this->get('checkout'); }
    public function hasCheckout(): bool { return $this->has('checkout'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The customer account where buyers manage their orders, subscriptions, returns, and invoices. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions.
     * @return ?CustomerAccountSettings
     */
    public function getCustomerAccount(): ?CustomerAccountSettings { return $this->get('customer_account'); }
    public function hasCustomerAccount(): bool { return $this->has('customer_account'); }
    /** Whether Flint or you send each kind of buyer email. Omitted until you save a value in this section; effective settings fill in Flint's defaults. For each kind of customer email, whether Flint sends it or the merchant sends it.
     * @return ?CustomerEmailDeliverySettings
     */
    public function getCustomerEmailDelivery(): ?CustomerEmailDeliverySettings { return $this->get('customer_email_delivery'); }
    public function hasCustomerEmailDelivery(): bool { return $this->has('customer_email_delivery'); }
    /** Fulfillment workflow defaults. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`).
     * @return ?FulfillmentSettings
     */
    public function getFulfillment(): ?FulfillmentSettings { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Inventory defaults, such as the low stock threshold and what happens when stock can't cover a paid order. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one.
     * @return ?InventorySettings
     */
    public function getInventory(): ?InventorySettings { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** Defaults and policies for the invoices you issue. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries.
     * @return ?InvoiceSettings
     */
    public function getInvoices(): ?InvoiceSettings { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** Legal links and terms acceptance that checkout shows. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.
     * @return ?LegalSettings
     */
    public function getLegal(): ?LegalSettings { return $this->get('legal'); }
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
    /** Your own lower and upper limits on payment amounts. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Optional merchant limits that can lower Flint's payment-option and surface policy limits.
     * @return ?PaymentLimitSettings
     */
    public function getPaymentLimits(): ?PaymentLimitSettings { return $this->get('payment_limits'); }
    public function hasPaymentLimits(): bool { return $this->has('payment_limits'); }
    /** Statement text for new payments. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Settings for the statement text on new payments.
     * @return ?PaymentSettings
     */
    public function getPayments(): ?PaymentSettings { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Whether automatic promotions and promotion codes apply, and how many discounts one order can stack. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order.
     * @return ?PromotionSettings
     */
    public function getPromotions(): ?PromotionSettings { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Unique identifier for this settings, prefixed `set_`.
     * @return string
     */
    public function getSettingsId(): string { return $this->get('settings_id'); }
    public function hasSettingsId(): bool { return $this->has('settings_id'); }
    /** Subscription billing behavior, such as what happens when payment retries run out. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email.
     * @return ?SubscriptionSettings
     */
    public function getSubscriptions(): ?SubscriptionSettings { return $this->get('subscriptions'); }
    public function hasSubscriptions(): bool { return $this->has('subscriptions'); }
    /** Default tax behavior for new checkouts and orders. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges.
     * @return ?TaxSettings
     */
    public function getTax(): ?TaxSettings { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** The merchant's legal identity, printed on invoices and credit notes. `null` when none is set. anyOf[1] (Value): {@see TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return TaxIdentity|null
     */
    public function getTaxIdentity(): TaxIdentity|null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** How tips work at checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.
     * @return ?TippingSettings
     */
    public function getTipping(): ?TippingSettings { return $this->get('tipping'); }
    public function hasTipping(): bool { return $this->has('tipping'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
