<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Address|null $billing_address
 * @property-read ?string $created_at
 * @property-read string $customer_id
 * @property-read ?string $default_invoice_payment_term_id
 * @property-read ExpandedPaymentMethodSummary|null $default_payment_method
 * @property-read string|null $default_payment_method_id
 * @property-read string|null $email
 * @property-read string|null $external_reference_id
 * @property-read string|null $internal_note
 * @property-read ?bool $is_merchant_verified
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read ?CustomerReceivables $receivables
 * @property-read string|null $segment
 * @property-read Address|null $shipping_address
 * @property-read string $status
 * @property-read ?bool $tax_exempt
 * @property-read TaxIdentity|null $tax_identity
 * @property-read ?string $test_clock_id
 * @property-read ?string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class Customer extends Model {
    /** @param array{'billing_address': mixed, 'created_at'?: string, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: mixed, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id'?: string|null, 'internal_note'?: string|null, 'is_merchant_verified'?: bool, 'merchant_id'?: string, 'metadata'?: mixed, 'name': string|null, 'phone': string|null, 'receivables'?: mixed, 'segment'?: string|null, 'shipping_address': mixed, 'status': string, 'tax_exempt'?: bool, 'tax_identity': mixed, 'test_clock_id'?: string, 'updated_at'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Customer')); }
    /** The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. Null when no saved address is the billing default. anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getBillingAddress(): Address|null { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** default_invoice_payment_term_id
     * @return ?string
     */
    public function getDefaultInvoicePaymentTermId(): ?string { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. anyOf[1] (Value): {@see ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded. anyOf[2] (Value): null.
     * @return ExpandedPaymentMethodSummary|null
     */
    public function getDefaultPaymentMethod(): ExpandedPaymentMethodSummary|null { return $this->get('default_payment_method'); }
    public function hasDefaultPaymentMethod(): bool { return $this->has('default_payment_method'); }
    /** default_payment_method_id
     * @return string|null
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** Customer email, or null when the customer has none. Unique among the environment's customers.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Caller-owned identifier for this customer in an external system, or null when none. Not returned to customer sessions. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Internal note about this customer, or null when none. Not returned to customer sessions.
     * @return string|null
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address.
     * @return ?bool
     */
    public function getIsMerchantVerified(): ?bool { return $this->get('is_merchant_verified'); }
    public function hasIsMerchantVerified(): bool { return $this->has('is_merchant_verified'); }
    /** merchant_id
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Customer name, or null when none.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Customer phone number, or null when none.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** A customer's receivable balances by currency and when they were observed.
     * @return ?CustomerReceivables
     */
    public function getReceivables(): ?CustomerReceivables { return $this->get('receivables'); }
    public function hasReceivables(): bool { return $this->has('receivables'); }
    /** Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Null when none. Not returned to customer sessions.
     * @return string|null
     */
    public function getSegment(): string|null { return $this->get('segment'); }
    public function hasSegment(): bool { return $this->has('segment'); }
    /** The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. Null when no saved address is the shipping default. anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getShippingAddress(): Address|null { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Value enum: "active", "deletion_processing", "deleted".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** tax_exempt
     * @return ?bool
     */
    public function getTaxExempt(): ?bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
    /**  anyOf[1] (Value): {@see TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return TaxIdentity|null
     */
    public function getTaxIdentity(): TaxIdentity|null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions.
     * @return ?string
     */
    public function getTestClockId(): ?string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
