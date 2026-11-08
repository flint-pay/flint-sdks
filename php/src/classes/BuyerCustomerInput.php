<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null $billing_address
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read string|null $default_payment_method_id
 * @property-read string|null $email
 * @property-read string $merchant_id
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null $shipping_address
 * @property-read string $status
 * @property-read null $tax_identity
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCustomerInput extends Model {
    /** @param array{'billing_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'created_at': string|\DateTimeInterface, 'customer_id': string, 'default_payment_method_id': string|null, 'email': string|null, 'merchant_id': string, 'name': string|null, 'phone': string|null, 'shipping_address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'status': string, 'tax_identity': null, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCustomerInput')); }
    /** The customer's default billing address: a copy of the saved address marked is_default_billing. Read-only; change it with is_default_billing through /v1/me/addresses. `null` when no saved address is the billing default. anyOf[1] (Value): {@see AddressInput}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
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
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
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
    /** The customer's default shipping address: a copy of the saved address marked is_default_shipping. Read-only; change it with is_default_shipping through /v1/me/addresses. `null` when no saved address is the shipping default. anyOf[1] (Value): {@see AddressInput}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
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
    /** `null` when the caller is a customer session, which never sees the tax identity.
     * @return null
     * @throws SdkError When tax_identity is omitted; use hasTaxIdentity() or valueOrDefault().
     */
    public function getTaxIdentity(): null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
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
