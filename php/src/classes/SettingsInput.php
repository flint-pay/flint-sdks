<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BrandingSettingsInput|array<array-key, mixed>|\stdClass $branding
 * @property-read CheckoutSettingsInput|array<array-key, mixed>|\stdClass $checkout
 * @property-read string|\DateTimeInterface $created_at
 * @property-read CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass $customer_account
 * @property-read CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass $customer_email_delivery
 * @property-read FulfillmentSettingsInput|array<array-key, mixed>|\stdClass $fulfillment
 * @property-read InventorySettingsInput|array<array-key, mixed>|\stdClass $inventory
 * @property-read InvoiceSettingsInput|array<array-key, mixed>|\stdClass $invoices
 * @property-read LegalSettingsInput|array<array-key, mixed>|\stdClass $legal
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read PaymentLimitSettingsInput|array<array-key, mixed>|\stdClass $payment_limits
 * @property-read PromotionSettingsInput|array<array-key, mixed>|\stdClass $promotions
 * @property-read ReceiptSettingsInput|array<array-key, mixed>|\stdClass $receipts
 * @property-read string $settings_id
 * @property-read SubscriptionSettingsInput|array<array-key, mixed>|\stdClass $subscriptions
 * @property-read TaxSettingsInput|array<array-key, mixed>|\stdClass $tax
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $tax_identity
 * @property-read TippingSettingsInput|array<array-key, mixed>|\stdClass $tipping
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class SettingsInput extends Model {
    /** @param array{'branding'?: BrandingSettingsInput|array<array-key, mixed>|\stdClass, 'checkout'?: CheckoutSettingsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_account'?: CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass, 'customer_email_delivery'?: CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass, 'fulfillment'?: FulfillmentSettingsInput|array<array-key, mixed>|\stdClass, 'inventory'?: InventorySettingsInput|array<array-key, mixed>|\stdClass, 'invoices'?: InvoiceSettingsInput|array<array-key, mixed>|\stdClass, 'legal'?: LegalSettingsInput|array<array-key, mixed>|\stdClass, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'payment_limits'?: PaymentLimitSettingsInput|array<array-key, mixed>|\stdClass, 'promotions'?: PromotionSettingsInput|array<array-key, mixed>|\stdClass, 'receipts'?: ReceiptSettingsInput|array<array-key, mixed>|\stdClass, 'settings_id': string, 'subscriptions'?: SubscriptionSettingsInput|array<array-key, mixed>|\stdClass, 'tax'?: TaxSettingsInput|array<array-key, mixed>|\stdClass, 'tax_identity': array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'tipping'?: TippingSettingsInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SettingsInput')); }
    /** Shape $ (Value): {@see BrandingSettingsInput}. A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme.
     * @return BrandingSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When branding is omitted; use hasBranding() or valueOrDefault().
     */
    public function getBranding(): mixed { return $this->get('branding'); }
    public function hasBranding(): bool { return $this->has('branding'); }
    /** Shape $ (Value): {@see CheckoutSettingsInput}. Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.
     * @return CheckoutSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout is omitted; use hasCheckout() or valueOrDefault().
     */
    public function getCheckout(): mixed { return $this->get('checkout'); }
    public function hasCheckout(): bool { return $this->has('checkout'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see CustomerAccountSettingsInput}. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions.
     * @return CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_account is omitted; use hasCustomerAccount() or valueOrDefault().
     */
    public function getCustomerAccount(): mixed { return $this->get('customer_account'); }
    public function hasCustomerAccount(): bool { return $this->has('customer_account'); }
    /** Shape $ (Value): {@see CustomerEmailDeliverySettingsInput}. For each kind of customer email, whether Flint sends it or the merchant sends it.
     * @return CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_email_delivery is omitted; use hasCustomerEmailDelivery() or valueOrDefault().
     */
    public function getCustomerEmailDelivery(): mixed { return $this->get('customer_email_delivery'); }
    public function hasCustomerEmailDelivery(): bool { return $this->has('customer_email_delivery'); }
    /** Shape $ (Value): {@see FulfillmentSettingsInput}. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`).
     * @return FulfillmentSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Shape $ (Value): {@see InventorySettingsInput}. Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each order source.
     * @return InventorySettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory is omitted; use hasInventory() or valueOrDefault().
     */
    public function getInventory(): mixed { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** Shape $ (Value): {@see InvoiceSettingsInput}. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries.
     * @return InvoiceSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoices is omitted; use hasInvoices() or valueOrDefault().
     */
    public function getInvoices(): mixed { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** Shape $ (Value): {@see LegalSettingsInput}. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.
     * @return LegalSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see PaymentLimitSettingsInput}. Optional merchant limits that can lower Flint's payment-option and surface policy limits.
     * @return PaymentLimitSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_limits is omitted; use hasPaymentLimits() or valueOrDefault().
     */
    public function getPaymentLimits(): mixed { return $this->get('payment_limits'); }
    public function hasPaymentLimits(): bool { return $this->has('payment_limits'); }
    /** Shape $ (Value): {@see PromotionSettingsInput}. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order.
     * @return PromotionSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotions is omitted; use hasPromotions() or valueOrDefault().
     */
    public function getPromotions(): mixed { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Shape $ (Value): {@see ReceiptSettingsInput}. Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the header and footer text.
     * @return ReceiptSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When receipts is omitted; use hasReceipts() or valueOrDefault().
     */
    public function getReceipts(): mixed { return $this->get('receipts'); }
    public function hasReceipts(): bool { return $this->has('receipts'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When settings_id is omitted; use hasSettingsId() or valueOrDefault().
     */
    public function getSettingsId(): string { return $this->get('settings_id'); }
    public function hasSettingsId(): bool { return $this->has('settings_id'); }
    /** Shape $ (Value): {@see SubscriptionSettingsInput}. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email.
     * @return SubscriptionSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscriptions is omitted; use hasSubscriptions() or valueOrDefault().
     */
    public function getSubscriptions(): mixed { return $this->get('subscriptions'); }
    public function hasSubscriptions(): bool { return $this->has('subscriptions'); }
    /** Shape $ (Value): {@see TaxSettingsInput}. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges.
     * @return TaxSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see TaxIdentityInput} or null. Shape $.anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): mixed { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** Shape $ (Value): {@see TippingSettingsInput}. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.
     * @return TippingSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tipping is omitted; use hasTipping() or valueOrDefault().
     */
    public function getTipping(): mixed { return $this->get('tipping'); }
    public function hasTipping(): bool { return $this->has('tipping'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
