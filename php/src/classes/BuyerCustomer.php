<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Address|null $billing_address
 * @property-read ?string $created_at
 * @property-read string $customer_id
 * @property-read string|null $default_payment_method_id
 * @property-read string|null $email
 * @property-read ?string $merchant_id
 * @property-read string|null $name
 * @property-read string|null $phone
 * @property-read Address|null $shipping_address
 * @property-read string $status
 * @property-read null $tax_identity
 * @property-read ?string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class BuyerCustomer extends Model {
    /** @param array{'billing_address': mixed, 'created_at'?: string, 'customer_id': string, 'default_payment_method_id': string|null, 'email': string|null, 'merchant_id'?: string, 'name': string|null, 'phone': string|null, 'shipping_address': mixed, 'status': string, 'tax_identity': null, 'updated_at'?: string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCustomer')); }
    /** The customer's default billing address: a copy of the saved address marked is_default_billing. Read-only; change it with is_default_billing through /v1/me/addresses. `null` when no saved address is the billing default. anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
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
    /** merchant_id
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
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
    /** The customer's default shipping address: a copy of the saved address marked is_default_shipping. Read-only; change it with is_default_shipping through /v1/me/addresses. `null` when no saved address is the shipping default. anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getShippingAddress(): Address|null { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Value enum: "active", "deletion_processing", "deleted".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Always null for buyer credentials.
     * @return null
     */
    public function getTaxIdentity(): null { return $this->get('tax_identity'); }
    public function hasTaxIdentity(): bool { return $this->has('tax_identity'); }
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
