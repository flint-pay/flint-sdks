<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BrandingSettings $branding
 * @property-read ?CheckoutSettings $checkout
 * @property-read ?string $created_at
 * @property-read ?CustomerAccountSettings $customer_account
 * @property-read ?CustomerEmailDeliverySettings $customer_email_delivery
 * @property-read ?FulfillmentSettings $fulfillment
 * @property-read ?InventorySettings $inventory
 * @property-read ?InvoiceSettings $invoices
 * @property-read ?LegalSettings $legal
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ?PaymentLimitSettings $payment_limits
 * @property-read ?PromotionSettings $promotions
 * @property-read ?ReceiptSettings $receipts
 * @property-read string $settings_id
 * @property-read ?SubscriptionSettings $subscriptions
 * @property-read ?TaxSettings $tax
 * @property-read TaxIdentity|null $tax_identity
 * @property-read ?TippingSettings $tipping
 * @property-read ?string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class Settings extends Model {
    /** @param array{'branding'?: mixed, 'checkout'?: mixed, 'created_at'?: string, 'customer_account'?: mixed, 'customer_email_delivery'?: mixed, 'fulfillment'?: mixed, 'inventory'?: mixed, 'invoices'?: mixed, 'legal'?: mixed, 'merchant_id'?: string, 'metadata'?: \stdClass, 'payment_limits'?: mixed, 'promotions'?: mixed, 'receipts'?: mixed, 'settings_id': string, 'subscriptions'?: mixed, 'tax'?: mixed, 'tax_identity': mixed, 'tipping'?: mixed, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Settings')); }
    /** Shape $ (Value): {@see BrandingSettings}. A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme.
     * @return ?BrandingSettings
     */
    public function getBranding(): ?BrandingSettings { return $this->get('branding'); }
    public function hasBranding(): bool { return $this->has('branding'); }
    /** Shape $ (Value): {@see CheckoutSettings}. Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.
     * @return ?CheckoutSettings
     */
    public function getCheckout(): ?CheckoutSettings { return $this->get('checkout'); }
    public function hasCheckout(): bool { return $this->has('checkout'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see CustomerAccountSettings}. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions.
     * @return ?CustomerAccountSettings
     */
    public function getCustomerAccount(): ?CustomerAccountSettings { return $this->get('customer_account'); }
    public function hasCustomerAccount(): bool { return $this->has('customer_account'); }
    /** Shape $ (Value): {@see CustomerEmailDeliverySettings}. For each kind of customer email, whether Flint sends it or the merchant sends it.
     * @return ?CustomerEmailDeliverySettings
     */
    public function getCustomerEmailDelivery(): ?CustomerEmailDeliverySettings { return $this->get('customer_email_delivery'); }
    public function hasCustomerEmailDelivery(): bool { return $this->has('customer_email_delivery'); }
    /** Shape $ (Value): {@see FulfillmentSettings}. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`).
     * @return ?FulfillmentSettings
     */
    public function getFulfillment(): ?FulfillmentSettings { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Shape $ (Value): {@see InventorySettings}. Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source.
     * @return ?InventorySettings
     */
    public function getInventory(): ?InventorySettings { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** Shape $ (Value): {@see InvoiceSettings}. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries.
     * @return ?InvoiceSettings
     */
    public function getInvoices(): ?InvoiceSettings { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** Shape $ (Value): {@see LegalSettings}. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.
     * @return ?LegalSettings
     */
    public function getLegal(): ?LegalSettings { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see PaymentLimitSettings}. Optional merchant limits that can lower Flint's payment-option and surface policy limits.
     * @return ?PaymentLimitSettings
     */
    public function getPaymentLimits(): ?PaymentLimitSettings { return $this->get('payment_limits'); }
    public function hasPaymentLimits(): bool { return $this->has('payment_limits'); }
    /** Shape $ (Value): {@see PromotionSettings}. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order.
     * @return ?PromotionSettings
     */
    public function getPromotions(): ?PromotionSettings { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Shape $ (Value): {@see ReceiptSettings}. Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the header and footer text.
     * @return ?ReceiptSettings
     */
    public function getReceipts(): ?ReceiptSettings { return $this->get('receipts'); }
    public function hasReceipts(): bool { return $this->has('receipts'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSettingsId(): string { return $this->get('settings_id'); }
    public function hasSettingsId(): bool { return $this->has('settings_id'); }
    /** Shape $ (Value): {@see SubscriptionSettings}. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email.
     * @return ?SubscriptionSettings
     */
    public function getSubscriptions(): ?SubscriptionSettings { return $this->get('subscriptions'); }
    public function hasSubscriptions(): bool { return $this->has('subscriptions'); }
    /** Shape $ (Value): {@see TaxSettings}. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges.
     * @return ?TaxSettings
     */
    public function getTax(): ?TaxSettings { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see TaxIdentity} or null. Shape $.anyOf[1] (Value): {@see TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     * @return TaxIdentity|null
     */
    public function getTaxIdentity(): TaxIdentity|null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** Shape $ (Value): {@see TippingSettings}. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.
     * @return ?TippingSettings
     */
    public function getTipping(): ?TippingSettings { return $this->get('tipping'); }
    public function hasTipping(): bool { return $this->has('tipping'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
