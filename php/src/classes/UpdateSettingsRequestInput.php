<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BrandingSettingsInput|array<array-key, mixed>|\stdClass $branding
 * @property-read UpdateCatalogSettingsInput|array<array-key, mixed>|\stdClass $catalog
 * @property-read CheckoutSettingsInput|array<array-key, mixed>|\stdClass $checkout
 * @property-read CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass $customer_account
 * @property-read CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass $customer_email_delivery
 * @property-read string $expected_version
 * @property-read FulfillmentSettingsInput|array<array-key, mixed>|\stdClass $fulfillment
 * @property-read InventorySettingsInput|array<array-key, mixed>|\stdClass $inventory
 * @property-read array{'autopay_retry_policy'?: array{'retry_day_offsets': list<int>}|object|null, 'credit_note_number_prefix'?: string|null, 'default_collection_mode'?: string|null, 'default_footer'?: string|null, 'default_invoice_payment_term_id'?: string|null, 'default_memo'?: string|null, 'invoice_number_prefix'?: string|null, 'payment_policy'?: array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null, 'reminder_policy'?: array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null, 'remit_to_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'reply_to_email'?: string|null, 'timezone'?: string|null}|object|null $invoices
 * @property-read LegalSettingsInput|array<array-key, mixed>|\stdClass $legal
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read PromotionSettingsInput|array<array-key, mixed>|\stdClass $promotions
 * @property-read ReceiptSettingsInput|array<array-key, mixed>|\stdClass $receipts
 * @property-read SubscriptionSettingsInput|array<array-key, mixed>|\stdClass $subscriptions
 * @property-read TaxSettingsInput|array<array-key, mixed>|\stdClass $tax
 * @property-read array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $tax_identity
 * @property-read TippingSettingsPatchInput|array<array-key, mixed>|\stdClass $tipping
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateSettingsRequestInput extends Model {
    /** @param array{'branding'?: BrandingSettingsInput|array<array-key, mixed>|\stdClass, 'catalog'?: UpdateCatalogSettingsInput|array<array-key, mixed>|\stdClass, 'checkout'?: CheckoutSettingsInput|array<array-key, mixed>|\stdClass, 'customer_account'?: CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass, 'customer_email_delivery'?: CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'fulfillment'?: FulfillmentSettingsInput|array<array-key, mixed>|\stdClass, 'inventory'?: InventorySettingsInput|array<array-key, mixed>|\stdClass, 'invoices'?: array{'autopay_retry_policy'?: array{'retry_day_offsets': list<int>}|object|null, 'credit_note_number_prefix'?: string|null, 'default_collection_mode'?: string|null, 'default_footer'?: string|null, 'default_invoice_payment_term_id'?: string|null, 'default_memo'?: string|null, 'invoice_number_prefix'?: string|null, 'payment_policy'?: array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null, 'reminder_policy'?: array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null, 'remit_to_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'reply_to_email'?: string|null, 'timezone'?: string|null}|object|null, 'legal'?: LegalSettingsInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'promotions'?: PromotionSettingsInput|array<array-key, mixed>|\stdClass, 'receipts'?: ReceiptSettingsInput|array<array-key, mixed>|\stdClass, 'subscriptions'?: SubscriptionSettingsInput|array<array-key, mixed>|\stdClass, 'tax'?: TaxSettingsInput|array<array-key, mixed>|\stdClass, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'tipping'?: TippingSettingsPatchInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateSettingsRequestInput')); }
    /** @return BrandingSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When branding is omitted; use hasBranding() or valueOrDefault().
     */
    public function getBranding(): mixed { return $this->get('branding'); }
    public function hasBranding(): bool { return $this->has('branding'); }
    /** @return UpdateCatalogSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When catalog is omitted; use hasCatalog() or valueOrDefault().
     */
    public function getCatalog(): mixed { return $this->get('catalog'); }
    public function hasCatalog(): bool { return $this->has('catalog'); }
    /** @return CheckoutSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout is omitted; use hasCheckout() or valueOrDefault().
     */
    public function getCheckout(): mixed { return $this->get('checkout'); }
    public function hasCheckout(): bool { return $this->has('checkout'); }
    /** @return CustomerAccountSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_account is omitted; use hasCustomerAccount() or valueOrDefault().
     */
    public function getCustomerAccount(): mixed { return $this->get('customer_account'); }
    public function hasCustomerAccount(): bool { return $this->has('customer_account'); }
    /** @return CustomerEmailDeliverySettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When customer_email_delivery is omitted; use hasCustomerEmailDelivery() or valueOrDefault().
     */
    public function getCustomerEmailDelivery(): mixed { return $this->get('customer_email_delivery'); }
    public function hasCustomerEmailDelivery(): bool { return $this->has('customer_email_delivery'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return FulfillmentSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** @return InventorySettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory is omitted; use hasInventory() or valueOrDefault().
     */
    public function getInventory(): mixed { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** @return array{'autopay_retry_policy'?: array{'retry_day_offsets': list<int>}|object|null, 'credit_note_number_prefix'?: string|null, 'default_collection_mode'?: string|null, 'default_footer'?: string|null, 'default_invoice_payment_term_id'?: string|null, 'default_memo'?: string|null, 'invoice_number_prefix'?: string|null, 'payment_policy'?: array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object|null, 'reminder_policy'?: array{'rules': list<InvoiceReminderRuleInput|array<array-key, mixed>|\stdClass>}|object|null, 'remit_to_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'reply_to_email'?: string|null, 'timezone'?: string|null}|object|null
     * @throws SdkError When invoices is omitted; use hasInvoices() or valueOrDefault().
     */
    public function getInvoices(): mixed { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** @return LegalSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return PromotionSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotions is omitted; use hasPromotions() or valueOrDefault().
     */
    public function getPromotions(): mixed { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** @return ReceiptSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When receipts is omitted; use hasReceipts() or valueOrDefault().
     */
    public function getReceipts(): mixed { return $this->get('receipts'); }
    public function hasReceipts(): bool { return $this->has('receipts'); }
    /** @return SubscriptionSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscriptions is omitted; use hasSubscriptions() or valueOrDefault().
     */
    public function getSubscriptions(): mixed { return $this->get('subscriptions'); }
    public function hasSubscriptions(): bool { return $this->has('subscriptions'); }
    /** @return TaxSettingsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** @return array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): mixed { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** @return TippingSettingsPatchInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tipping is omitted; use hasTipping() or valueOrDefault().
     */
    public function getTipping(): mixed { return $this->get('tipping'); }
    public function hasTipping(): bool { return $this->has('tipping'); }
}
