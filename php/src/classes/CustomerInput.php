<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $billing_address
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read string $default_invoice_payment_term_id
 * @property-read array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $default_payment_method
 * @property-read string|null $default_payment_method_id
 * @property-read string|null $email
 * @property-read string|null $external_reference_id
 * @property-read string|null $internal_note
 * @property-read bool $is_merchant_verified
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read CustomerReceivablesInput|array<array-key, mixed>|\stdClass $receivables
 * @property-read string|null $segment
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $shipping_address
 * @property-read string $status
 * @property-read bool $tax_exempt
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $tax_identity
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerInput extends Model {
    /** @param array{'billing_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string|null, 'phone': string|null, 'receivables'?: CustomerReceivablesInput|array<array-key, mixed>|\stdClass, 'segment'?: string|null, 'shipping_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'status': string, 'tax_exempt'?: bool, 'tax_identity': array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerInput')); }
    /** Shape $ (Value): {@see AddressInput}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** Shape $ (Value): {@see ExpandedPaymentMethodSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedPaymentMethodSummaryInput}. A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When default_payment_method is omitted; use hasDefaultPaymentMethod() or valueOrDefault().
     */
    public function getDefaultPaymentMethod(): mixed { return $this->get('default_payment_method'); }
    public function hasDefaultPaymentMethod(): bool { return $this->has('default_payment_method'); }
    /** Shape $ (Value): string or null.
     * @return string|null
     * @throws SdkError When default_payment_method_id is omitted; use hasDefaultPaymentMethodId() or valueOrDefault().
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** Shape $ (Value): string or null. Customer email, or null when the customer has none. Unique among the environment's customers.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this customer in an external system, or null when none. Not returned to customer sessions. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string or null. Internal note about this customer, or null when none. Not returned to customer sessions.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Shape $ (Value): boolean. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address.
     * @return bool
     * @throws SdkError When is_merchant_verified is omitted; use hasIsMerchantVerified() or valueOrDefault().
     */
    public function getIsMerchantVerified(): bool { return $this->get('is_merchant_verified'); }
    public function hasIsMerchantVerified(): bool { return $this->has('is_merchant_verified'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string or null. Customer name, or null when none.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string or null. Customer phone number, or null when none.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Shape $ (Value): {@see CustomerReceivablesInput}. A customer's receivable balances by currency and when they were observed.
     * @return CustomerReceivablesInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When receivables is omitted; use hasReceivables() or valueOrDefault().
     */
    public function getReceivables(): mixed { return $this->get('receivables'); }
    public function hasReceivables(): bool { return $this->has('receivables'); }
    /** Shape $ (Value): string or null. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Null when none. Not returned to customer sessions.
     * @return string|null
     * @throws SdkError When segment is omitted; use hasSegment() or valueOrDefault().
     */
    public function getSegment(): string|null { return $this->get('segment'); }
    public function hasSegment(): bool { return $this->has('segment'); }
    /** Shape $ (Value): {@see AddressInput}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): mixed { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Shape $ (Value): string.  Value enum: "active", "deletion_processing", "deleted".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When tax_exempt is omitted; use hasTaxExempt() or valueOrDefault().
     */
    public function getTaxExempt(): bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
    /** Shape $ (Value): {@see TaxIdentityInput} or null. Shape $.anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): mixed { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
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
