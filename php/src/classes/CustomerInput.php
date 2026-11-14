<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null $billing_address
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
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read string|null $price_list_id
 * @property-read CustomerReceivablesInput|array<array-key, mixed>|\stdClass $receivables
 * @property-read string|null $segment
 * @property-read array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null $shipping_address
 * @property-read string $status
 * @property-read bool $tax_exempt
 * @property-read array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null $tax_identity
 * @property-read string $test_clock_id
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerInput extends Model {
    /** @param array{'billing_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'created_at': string|\DateTimeInterface, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id': string|null, 'internal_note': string|null, 'is_merchant_verified'?: bool, 'merchant_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string|null, 'phone': string|null, 'price_list_id': string|null, 'receivables'?: CustomerReceivablesInput|array<array-key, mixed>|\stdClass, 'segment': string|null, 'shipping_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'status': string, 'tax_exempt'?: bool, 'tax_identity': array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null, 'test_clock_id'?: string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerInput')); }
    /** The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. anyOf[1] (Value): {@see AddressInput}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for this customer, prefixed `cus_`. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4".
     * @return string
     * @throws SdkError When default_invoice_payment_term_id is omitted; use hasDefaultInvoicePaymentTermId() or valueOrDefault().
     */
    public function getDefaultInvoicePaymentTermId(): string { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. anyOf[1] (Value): {@see ExpandedPaymentMethodSummaryInput}. A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded. anyOf[2] (Value): null.
     * @return array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When default_payment_method is omitted; use hasDefaultPaymentMethod() or valueOrDefault().
     */
    public function getDefaultPaymentMethod(): mixed { return $this->get('default_payment_method'); }
    public function hasDefaultPaymentMethod(): bool { return $this->has('default_payment_method'); }
    /** ID of the customer's default off-session payment method. `null` when none is set. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string|null
     * @throws SdkError When default_payment_method_id is omitted; use hasDefaultPaymentMethodId() or valueOrDefault().
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** Customer email. `null` when the customer has none. Unique among the environment's customers.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Internal note about this customer. `null` when none is set. Not returned to customer sessions.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address.
     * @return bool
     * @throws SdkError When is_merchant_verified is omitted; use hasIsMerchantVerified() or valueOrDefault().
     */
    public function getIsMerchantVerified(): bool { return $this->get('is_merchant_verified'); }
    public function hasIsMerchantVerified(): bool { return $this->has('is_merchant_verified'); }
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
    /** Customer name. `null` when none is set.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Customer phone number. `null` when none is set.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * @return string|null
     * @throws SdkError When price_list_id is omitted; use hasPriceListId() or valueOrDefault().
     */
    public function getPriceListId(): string|null { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. A customer's receivable balances by currency and when they were observed.
     * @return CustomerReceivablesInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When receivables is omitted; use hasReceivables() or valueOrDefault().
     */
    public function getReceivables(): mixed { return $this->get('receivables'); }
    public function hasReceivables(): bool { return $this->has('receivables'); }
    /** Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions.
     * @return string|null
     * @throws SdkError When segment is omitted; use hasSegment() or valueOrDefault().
     */
    public function getSegment(): string|null { return $this->get('segment'); }
    public function hasSegment(): bool { return $this->has('segment'); }
    /** The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. anyOf[1] (Value): {@see AddressInput}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): mixed { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Where the customer is in the deletion lifecycle. Value enum: "active", "deletion_processing", "deleted".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions.
     * @return bool
     * @throws SdkError When tax_exempt is omitted; use hasTaxExempt() or valueOrDefault().
     */
    public function getTaxExempt(): bool { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
    /** Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1] (Value): {@see TaxIdentityInput}. Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
     * @return array{'legal_name': string|null, 'registered_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'tax_ids': list<DocumentTaxIDInput|array<array-key, mixed>|\stdClass>, ...}|object|null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): mixed { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     * @return string
     * @throws SdkError When test_clock_id is omitted; use hasTestClockId() or valueOrDefault().
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
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
