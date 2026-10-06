<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BrandingSettings $branding
 * @property-read CatalogSettings $catalog
 * @property-read CheckoutSettings $checkout
 * @property-read CustomDomainStatus $checkout_domain_status
 * @property-read string $created_at
 * @property-read CustomerAccountSettings $customer_account
 * @property-read CustomDomainStatus $customer_account_domain_status
 * @property-read CustomerEmailDeliverySettings $customer_email_delivery
 * @property-read string $device_id
 * @property-read FulfillmentSettings $fulfillment
 * @property-read InventorySettings $inventory
 * @property-read InvoiceSettings $invoices
 * @property-read LegalSettings $legal
 * @property-read string $location_id
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $organization_id
 * @property-read PaymentLimitSettings $payment_limits
 * @property-read PromotionSettings $promotions
 * @property-read ReceiptSettings $receipts
 * @property-read string $settings_id
 * @property-read string $settings_scope
 * @property-read SubscriptionSettings $subscriptions
 * @property-read TaxSettings $tax
 * @property-read TaxIdentity|null $tax_identity
 * @property-read TippingSettings $tipping
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class Settings extends Model {
    /** @param array{'branding'?: mixed, 'catalog'?: mixed, 'checkout'?: mixed, 'checkout_domain_status'?: object{'active_payment_attempt_count'?: string|null, 'dns_records': list<mixed>, 'domain_status': string, 'hostname': string, 'last_checked_at'?: string|null, 'payment_method_domain_id'?: string|null, 'redirect_expires_at'?: string|null, 'status_reason'?: string|null}, 'created_at'?: string, 'customer_account'?: mixed, 'customer_account_domain_status'?: object{'active_payment_attempt_count'?: string|null, 'dns_records': list<mixed>, 'domain_status': string, 'hostname': string, 'last_checked_at'?: string|null, 'payment_method_domain_id'?: string|null, 'redirect_expires_at'?: string|null, 'status_reason'?: string|null}, 'customer_email_delivery'?: mixed, 'device_id'?: string, 'fulfillment'?: mixed, 'inventory'?: mixed, 'invoices'?: mixed, 'legal'?: mixed, 'location_id'?: string, 'merchant_id'?: string, 'metadata'?: \stdClass, 'organization_id'?: string, 'payment_limits'?: object{'max_amounts'?: \stdClass, 'min_amounts'?: \stdClass}, 'promotions'?: mixed, 'receipts'?: mixed, 'settings_id': string, 'settings_scope': string, 'subscriptions'?: mixed, 'tax'?: mixed, 'tax_identity'?: mixed, 'tipping'?: mixed, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Settings')); }
    /** @return BrandingSettings
     * @throws SdkError When branding is omitted; use hasBranding() or valueOrDefault().
     */
    public function getBranding(): BrandingSettings { return $this->get('branding'); }
    public function hasBranding(): bool { return $this->has('branding'); }
    /** @return CatalogSettings
     * @throws SdkError When catalog is omitted; use hasCatalog() or valueOrDefault().
     */
    public function getCatalog(): CatalogSettings { return $this->get('catalog'); }
    public function hasCatalog(): bool { return $this->has('catalog'); }
    /** @return CheckoutSettings
     * @throws SdkError When checkout is omitted; use hasCheckout() or valueOrDefault().
     */
    public function getCheckout(): CheckoutSettings { return $this->get('checkout'); }
    public function hasCheckout(): bool { return $this->has('checkout'); }
    /** @return CustomDomainStatus
     * @throws SdkError When checkout_domain_status is omitted; use hasCheckoutDomainStatus() or valueOrDefault().
     */
    public function getCheckoutDomainStatus(): CustomDomainStatus { return $this->get('checkout_domain_status'); }
    public function hasCheckoutDomainStatus(): bool { return $this->has('checkout_domain_status'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return CustomerAccountSettings
     * @throws SdkError When customer_account is omitted; use hasCustomerAccount() or valueOrDefault().
     */
    public function getCustomerAccount(): CustomerAccountSettings { return $this->get('customer_account'); }
    public function hasCustomerAccount(): bool { return $this->has('customer_account'); }
    /** @return CustomDomainStatus
     * @throws SdkError When customer_account_domain_status is omitted; use hasCustomerAccountDomainStatus() or valueOrDefault().
     */
    public function getCustomerAccountDomainStatus(): CustomDomainStatus { return $this->get('customer_account_domain_status'); }
    public function hasCustomerAccountDomainStatus(): bool { return $this->has('customer_account_domain_status'); }
    /** @return CustomerEmailDeliverySettings
     * @throws SdkError When customer_email_delivery is omitted; use hasCustomerEmailDelivery() or valueOrDefault().
     */
    public function getCustomerEmailDelivery(): CustomerEmailDeliverySettings { return $this->get('customer_email_delivery'); }
    public function hasCustomerEmailDelivery(): bool { return $this->has('customer_email_delivery'); }
    /** @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** @return FulfillmentSettings
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): FulfillmentSettings { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** @return InventorySettings
     * @throws SdkError When inventory is omitted; use hasInventory() or valueOrDefault().
     */
    public function getInventory(): InventorySettings { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** @return InvoiceSettings
     * @throws SdkError When invoices is omitted; use hasInvoices() or valueOrDefault().
     */
    public function getInvoices(): InvoiceSettings { return $this->get('invoices'); }
    public function hasInvoices(): bool { return $this->has('invoices'); }
    /** @return LegalSettings
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): LegalSettings { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** @return PaymentLimitSettings
     * @throws SdkError When payment_limits is omitted; use hasPaymentLimits() or valueOrDefault().
     */
    public function getPaymentLimits(): PaymentLimitSettings { return $this->get('payment_limits'); }
    public function hasPaymentLimits(): bool { return $this->has('payment_limits'); }
    /** @return PromotionSettings
     * @throws SdkError When promotions is omitted; use hasPromotions() or valueOrDefault().
     */
    public function getPromotions(): PromotionSettings { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** @return ReceiptSettings
     * @throws SdkError When receipts is omitted; use hasReceipts() or valueOrDefault().
     */
    public function getReceipts(): ReceiptSettings { return $this->get('receipts'); }
    public function hasReceipts(): bool { return $this->has('receipts'); }
    /** @return string
     * @throws SdkError When settings_id is omitted; use hasSettingsId() or valueOrDefault().
     */
    public function getSettingsId(): string { return $this->get('settings_id'); }
    public function hasSettingsId(): bool { return $this->has('settings_id'); }
    /** @return string
     * @throws SdkError When settings_scope is omitted; use hasSettingsScope() or valueOrDefault().
     */
    public function getSettingsScope(): string { return $this->get('settings_scope'); }
    public function hasSettingsScope(): bool { return $this->has('settings_scope'); }
    /** @return SubscriptionSettings
     * @throws SdkError When subscriptions is omitted; use hasSubscriptions() or valueOrDefault().
     */
    public function getSubscriptions(): SubscriptionSettings { return $this->get('subscriptions'); }
    public function hasSubscriptions(): bool { return $this->has('subscriptions'); }
    /** @return TaxSettings
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): TaxSettings { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** @return TaxIdentity|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): TaxIdentity|null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** @return TippingSettings
     * @throws SdkError When tipping is omitted; use hasTipping() or valueOrDefault().
     */
    public function getTipping(): TippingSettings { return $this->get('tipping'); }
    public function hasTipping(): bool { return $this->has('tipping'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
