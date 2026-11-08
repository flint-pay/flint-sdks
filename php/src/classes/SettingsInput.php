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
 * @property-read PaymentSettingsInput|array<array-key, mixed>|\stdClass $payments
 * @property-read PromotionSettingsInput|array<array-key, mixed>|\stdClass $promotions
 * @property-read string $settings_id
 * @property-read SubscriptionSettingsInput|array<array-key, mixed>|\stdClass $subscriptions
 * @property-read TaxSettingsInput|array<array-key, mixed>|\stdClass $tax
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $tax_identity
 * @property-read TippingSettingsInput|array<array-key, mixed>|\stdClass $tipping
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class SettingsInput extends Model {
    /** @param array{'branding'?: BrandingSettingsInput|array<array-key, mixed>|\stdClass, 'checkout'?: CheckoutSettingsInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'customer_account'?: CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass, 'customer_email_delivery'?: CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass, 'fulfillment'?: FulfillmentSettingsInput|array<array-key, mixed>|\stdClass, 'inventory'?: InventorySettingsInput|array<array-key, mixed>|\stdClass, 'invoices'?: InvoiceSettingsInput|array<array-key, mixed>|\stdClass, 'legal'?: LegalSettingsInput|array<array-key, mixed>|\stdClass, 'merchant_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'payment_limits'?: PaymentLimitSettingsInput|array<array-key, mixed>|\stdClass, 'payments'?: PaymentSettingsInput|array<array-key, mixed>|\stdClass, 'promotions'?: PromotionSettingsInput|array<array-key, mixed>|\stdClass, 'settings_id': string, 'subscriptions'?: SubscriptionSettingsInput|array<array-key, mixed>|\stdClass, 'tax'?: TaxSettingsInput|array<array-key, mixed>|\stdClass, 'tax_identity': array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'tipping'?: TippingSettingsInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SettingsInput')); }
    /** Colors, font, and corner radius of hosted checkout, receipts, and links. Omitted until you save a value in this section; effective settings fill in Flint's defaults. A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme.
     * @return BrandingSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When branding is omitted; use hasBranding() or valueOrDefault().
     */
    public function getBranding(): mixed { return $this->get('branding'); }
    public function hasBranding(): bool { return $this->has('branding'); }
    /** Defaults for hosted checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods, expiration, payment options, required contact fields, promotion codes, recovery email, and saved payment details.
     * @return CheckoutSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout is omitted; use hasCheckout() or valueOrDefault().
     */
    public function getCheckout(): mixed { return $this->get('checkout'); }
    public function hasCheckout(): bool { return $this->has('checkout'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The customer account where buyers manage their orders, subscriptions, returns, and invoices. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Customer account settings: hosted mode, merchant account URL, presentation, route templates, and what buyers may do to their own subscriptions.
     * @return CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_account is omitted; use hasCustomerAccount() or valueOrDefault().
     */
    public function getCustomerAccount(): mixed { return $this->get('customer_account'); }
    public function hasCustomerAccount(): bool { return $this->has('customer_account'); }
    /** Whether Flint or you send each kind of buyer email. Omitted until you save a value in this section; effective settings fill in Flint's defaults. For each kind of customer email, whether Flint sends it or the merchant sends it.
     * @return CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_email_delivery is omitted; use hasCustomerEmailDelivery() or valueOrDefault().
     */
    public function getCustomerEmailDelivery(): mixed { return $this->get('customer_email_delivery'); }
    public function hasCustomerEmailDelivery(): bool { return $this->has('customer_email_delivery'); }
    /** Fulfillment workflow defaults. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant fulfillment settings, including whether fulfillments require approval (`approval_required`).
     * @return FulfillmentSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Inventory defaults, such as the low stock threshold and what happens when stock can't cover a paid order. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order source, and the `default_routing_source` for requests that omit one.
     * @return InventorySettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory is omitted; use hasInventory() or valueOrDefault().
     */
    public function getInventory(): mixed { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** Defaults and policies for the invoices you issue. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant defaults for invoices, including numbering prefixes, default memo and footer, collection mode, reminders, and autopay retries.
     * @return InvoiceSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoices is omitted; use hasInvoices() or valueOrDefault().
     */
    public function getInvoices(): mixed { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** Legal links and terms acceptance that checkout shows. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms.
     * @return LegalSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Your own lower and upper limits on payment amounts. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Optional merchant limits that can lower Flint's payment-option and surface policy limits.
     * @return PaymentLimitSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_limits is omitted; use hasPaymentLimits() or valueOrDefault().
     */
    public function getPaymentLimits(): mixed { return $this->get('payment_limits'); }
    public function hasPaymentLimits(): bool { return $this->has('payment_limits'); }
    /** Statement text for new payments. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Settings for the statement text on new payments.
     * @return PaymentSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Whether automatic promotions and promotion codes apply, and how many discounts one order can stack. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Merchant promotion settings: whether automatic promotions and codes are enabled, and how many promotions can apply to one order.
     * @return PromotionSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotions is omitted; use hasPromotions() or valueOrDefault().
     */
    public function getPromotions(): mixed { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Unique identifier for this settings, prefixed `set_`. Example: "set_01KEZF7C00SA6XKHH6GVZ1JMC2".
     * @return string
     * @throws SdkError When settings_id is omitted; use hasSettingsId() or valueOrDefault().
     */
    public function getSettingsId(): string { return $this->get('settings_id'); }
    public function hasSettingsId(): bool { return $this->has('settings_id'); }
    /** Subscription billing behavior, such as what happens when payment retries run out. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Subscription settings: the default billing schedule owner, dunning retry days and end action, and the backorder email.
     * @return SubscriptionSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscriptions is omitted; use hasSubscriptions() or valueOrDefault().
     */
    public function getSubscriptions(): mixed { return $this->get('subscriptions'); }
    public function hasSubscriptions(): bool { return $this->has('subscriptions'); }
    /** Default tax behavior for new checkouts and orders. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tax settings: whether tax is calculated by default and the default tax categories for line items and delivery charges.
     * @return TaxSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** The merchant's legal identity, printed on invoices and credit notes. `null` when none is set. anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): mixed { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** How tips work at checkout. Omitted until you save a value in this section; effective settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the preselected tip, and whether custom tips are allowed.
     * @return TippingSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tipping is omitted; use hasTipping() or valueOrDefault().
     */
    public function getTipping(): mixed { return $this->get('tipping'); }
    public function hasTipping(): bool { return $this->has('tipping'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
