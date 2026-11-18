<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $billing_address
 * @property-read string|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $default_invoice_payment_term_id
 * @property-read ExpandedPaymentMethodSummaryPreviousAttributes|null $default_payment_method
 * @property-read string|null $default_payment_method_id
 * @property-read string|null $email
 * @property-read string|null $external_reference_id
 * @property-read string|null $internal_note
 * @property-read bool|null $is_merchant_verified
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read string|null $price_list_id
 * @property-read CustomerReceivablesPreviousAttributes|null $receivables
 * @property-read string|null $segment
 * @property-read AddressPreviousAttributes|null $shipping_address
 * @property-read string|null $status
 * @property-read bool|null $tax_exempt
 * @property-read TaxIdentityPreviousAttributes|null $tax_identity
 * @property-read string|null $test_clock_id
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'billing_address'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'default_invoice_payment_term_id'?: mixed, 'default_payment_method'?: mixed, 'default_payment_method_id'?: mixed, 'email'?: mixed, 'external_reference_id'?: mixed, 'internal_note'?: mixed, 'is_merchant_verified'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'phone'?: mixed, 'price_list_id'?: mixed, 'receivables'?: mixed, 'segment'?: mixed, 'shipping_address'?: mixed, 'status'?: mixed, 'tax_exempt'?: mixed, 'tax_identity'?: mixed, 'test_clock_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** The customer's default billing address: a copy of the address of the saved address marked is_default_billing. Read-only; change it through /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this address. `null` when no saved address is the billing default. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getBillingAddress(): AddressPreviousAttributes|null { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for this customer, prefixed `cus_`. anyOf[1] (Value): string. Unique identifier for this customer, prefixed `cus_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. anyOf[1] (Value): string. ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. Absent when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDefaultInvoicePaymentTermId(): string|null { return $this->get('default_invoice_payment_term_id'); }
    public function hasDefaultInvoicePaymentTermId(): bool { return $this->has('default_invoice_payment_term_id'); }
    /** Present only when `expand` includes `default_payment_method`; `null` when expanded and there is no related payment method. anyOf[1] (Value): {@see ExpandedPaymentMethodSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedPaymentMethodSummaryPreviousAttributes|null
     */
    public function getDefaultPaymentMethod(): ExpandedPaymentMethodSummaryPreviousAttributes|null { return $this->get('default_payment_method'); }
    public function hasDefaultPaymentMethod(): bool { return $this->has('default_payment_method'); }
    /** ID of the customer's default off-session payment method. Existing subscriptions keep their own payment_method_id when the default changes. `null` when none is set. anyOf[1] (Value): string. ID of the customer's default off-session payment method. Existing subscriptions keep their own payment_method_id when the default changes. `null` when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDefaultPaymentMethodId(): string|null { return $this->get('default_payment_method_id'); }
    public function hasDefaultPaymentMethodId(): bool { return $this->has('default_payment_method_id'); }
    /** Customer email. `null` when the customer has none. Unique among the environment's customers. anyOf[1] (Value): string. Customer email. `null` when the customer has none. Unique among the environment's customers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. anyOf[1] (Value): string. Caller-owned identifier for this customer in an external system. `null` when none is set. Not returned to customer sessions. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Internal note about this customer. `null` when none is set. Not returned to customer sessions. anyOf[1] (Value): string. Internal note about this customer. `null` when none is set. Not returned to customer sessions. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. anyOf[1] (Value): boolean. Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsMerchantVerified(): bool|null { return $this->get('is_merchant_verified'); }
    public function hasIsMerchantVerified(): bool { return $this->has('is_merchant_verified'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Customer name. `null` when none is set. anyOf[1] (Value): string. Customer name. `null` when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Customer phone number. `null` when none is set. anyOf[1] (Value): string. Customer phone number. `null` when none is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. anyOf[1] (Value): string. ID of the customer's direct wholesale price list. `null` when none is set. An inactive list can be assigned but does not apply. Not returned to customer sessions. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPriceListId(): string|null { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** What this customer owes you on invoices: the outstanding and overdue amounts, one balance per currency. Present only when `expand` includes `receivables`. anyOf[1] (Value): {@see CustomerReceivablesPreviousAttributes}. anyOf[2] (Value): null.
     * @return CustomerReceivablesPreviousAttributes|null
     */
    public function getReceivables(): CustomerReceivablesPreviousAttributes|null { return $this->get('receivables'); }
    public function hasReceivables(): bool { return $this->has('receivables'); }
    /** Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. anyOf[1] (Value): string. Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. `null` when none is set. Not returned to customer sessions. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSegment(): string|null { return $this->get('segment'); }
    public function hasSegment(): bool { return $this->has('segment'); }
    /** The customer's default shipping address: a copy of the address of the saved address marked is_default_shipping. Read-only; change it through /v1/customers/{customer_id}/addresses. Checkout prefills it. `null` when no saved address is the shipping default. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getShippingAddress(): AddressPreviousAttributes|null { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Where the customer is in the deletion lifecycle. Value enum: "active", "deletion_processing", "deleted". anyOf[1] (Value): string. Where the customer is in the deletion lifecycle. Value enum: "active", "deletion_processing", "deleted". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. anyOf[1] (Value): boolean. Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Not returned to customer sessions. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getTaxExempt(): bool|null { return $this->get('tax_exempt'); }
    public function hasTaxExempt(): bool { return $this->has('tax_exempt'); }
    /** Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. `null` when none is set. Always `null` for customer sessions. anyOf[1] (Value): {@see TaxIdentityPreviousAttributes}. anyOf[2] (Value): null.
     * @return TaxIdentityPreviousAttributes|null
     */
    public function getTaxIdentity(): TaxIdentityPreviousAttributes|null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
    /** ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. anyOf[1] (Value): string. ID of the test clock the customer was created on. The customer and its subscriptions read the clock's `frozen_at` as the current time. Present only for customers created on a test clock. Not returned to customer sessions. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTestClockId(): string|null { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
