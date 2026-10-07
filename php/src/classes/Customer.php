<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddress $billing_address
 * @property-read string $created_at
 * @property-read string $customer_id
 * @property-read string $default_invoice_payment_term_id
 * @property-read ExpandedPaymentMethodSummary|null $default_payment_method
 * @property-read string $default_payment_method_id
 * @property-read string $email
 * @property-read string $external_reference_id
 * @property-read string $group_id
 * @property-read string $internal_note
 * @property-read bool $is_verified
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $phone
 * @property-read CustomerReceivables $receivables
 * @property-read PostalAddress $shipping_address
 * @property-read bool $tax_exempt
 * @property-read TaxIdentity|null $tax_identity
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class Customer extends Model {
    /** @param array{'billing_address'?: mixed, 'created_at'?: string, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: mixed, 'default_payment_method_id'?: string, 'email': string, 'external_reference_id'?: string, 'group_id'?: string, 'internal_note'?: string, 'is_verified'?: bool, 'merchant_id'?: string, 'metadata'?: \stdClass, 'name'?: string, 'phone'?: string, 'receivables'?: mixed, 'shipping_address'?: mixed, 'tax_exempt'?: bool, 'tax_identity'?: mixed, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Customer')); }
    /** @return PostalAddress
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): PostalAddress { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** @return ExpandedPaymentMethodSummary|null
     * @throws SdkError When default_payment_method is omitted; use hasDefaultPaymentMethod() or valueOrDefault().
     */
    public function getDefaultPaymentMethod(): ExpandedPaymentMethodSummary|null { return $this->get('default_payment_method'); }
    public function hasDefaultPaymentMethod(): bool { return $this->has('default_payment_method'); }
    /** @return string
     * @throws SdkError When default_payment_method_id is omitted; use hasDefaultPaymentMethodId() or valueOrDefault().
     */
    public function getDefaultPaymentMethodId(): string { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When group_id is omitted; use hasGroupId() or valueOrDefault().
     */
    public function getGroupId(): string { return $this->get('group_id'); }
    public function hasGroupId(): bool { return $this->has('group_id'); }
    /** @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** @return bool
     * @throws SdkError When is_verified is omitted; use hasIsVerified() or valueOrDefault().
     */
    public function getIsVerified(): bool { return $this->get('is_verified'); }
    public function hasIsVerified(): bool { return $this->has('is_verified'); }
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
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** @return CustomerReceivables
     * @throws SdkError When receivables is omitted; use hasReceivables() or valueOrDefault().
     */
    public function getReceivables(): CustomerReceivables { return $this->get('receivables'); }
    public function hasReceivables(): bool { return $this->has('receivables'); }
    /** @return PostalAddress
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): PostalAddress { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** @return bool
     * @throws SdkError When tax_exempt is omitted; use hasTaxExempt() or valueOrDefault().
     */
    public function getTaxExempt(): bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
    /** @return TaxIdentity|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): TaxIdentity|null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
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
