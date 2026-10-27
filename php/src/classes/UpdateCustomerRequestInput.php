<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null $billing_address
 * @property-read string|null $default_invoice_payment_term_id
 * @property-read string|null $default_payment_method_id
 * @property-read string|null $email
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read string|null $internal_note
 * @property-read bool $is_merchant_verified
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read string|null $segment
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null $shipping_address
 * @property-read bool $tax_exempt
 * @property-read array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $tax_identity
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCustomerRequestInput extends Model {
    /** @param array{'billing_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'default_invoice_payment_term_id'?: string|null, 'default_payment_method_id'?: string|null, 'email'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string|null, 'phone'?: string|null, 'segment'?: string|null, 'shipping_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_exempt'?: bool, 'tax_identity'?: array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCustomerRequestInput')); }
    /** Shape $ (Value): {@see AddressRequestInput} or null. Billing address. Omit to leave unchanged; null clears it. Writing or clearing it also clears the saved billing-address default. Shape $.anyOf[1] (Value): {@see AddressRequestInput}. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. Shape $.anyOf[2] (Value): null.
     * @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** Shape $ (Value): string or null. Default payment term for this customer's invoices. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string|null { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** Shape $ (Value): string or null. The active off_session payment method to use by default. Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: 1.
     * @return string|null
     * @throws SdkError When default_payment_method_id is omitted; use hasDefaultPaymentMethodId() or valueOrDefault().
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** Shape $ (Value): string or null. The customer's email. Omit to leave unchanged; null clears it. Changing it is allowed only when your store hosts its own customer accounts (`customer_account.mode` is `merchant_hosted`). Format: email. minLength: 1. maxLength: 320.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): integer string. Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return a conflict. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Omit to leave unchanged; null clears it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string or null. Internal note about this customer. Omit to leave unchanged; null clears it. minLength: 1.
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
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string or null. Customer name. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string or null. Customer phone number. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Shape $ (Value): string or null. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Omit to leave unchanged; null clears it. minLength: 1.
     * @return string|null
     * @throws SdkError When segment is omitted; use hasSegment() or valueOrDefault().
     */
    public function getSegment(): string|null { return $this->get('segment'); }
    public function hasSegment(): bool { return $this->has('segment'); }
    /** Shape $ (Value): {@see AddressRequestInput} or null. Shipping address. Omit to leave unchanged; null clears it. Writing or clearing it also clears the saved shipping-address default. Shape $.anyOf[1] (Value): {@see AddressRequestInput}. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. Shape $.anyOf[2] (Value): null.
     * @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): mixed { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When tax_exempt is omitted; use hasTaxExempt() or valueOrDefault().
     */
    public function getTaxExempt(): bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
    /** Shape $ (Value): {@see TaxIdentityPatchInput} or null. Shape $.anyOf[1] (Value): {@see TaxIdentityPatchInput}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     * @return array{'legal_name'?: string|null, 'registered_address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string|null, 'postal_code': string, 'state': string, ...}|object|null, 'tax_ids'?: list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): mixed { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
}
