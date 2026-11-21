<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $activation_limit
 * @property-read int $active_activation_count
 * @property-read string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $expires_at
 * @property-read ?string $key
 * @property-read string|null $key_last4
 * @property-read string $license_key_id
 * @property-read string|null $license_key_pool_id
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string $product_id
 * @property-read list<LicenseKeyRestriction> $restrictions
 * @property-read string $source
 * @property-read string $status
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_line_item_id
 * @property-read list<string> $supported_actions
 * @property-read int $unit_ordinal
 * @property-read string $updated_at
 * @property-read string $variant_id
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutLicenseKey extends Model {
    /** @param array{'activation_limit': int|null, 'active_activation_count': int, 'created_at': string, 'customer'?: mixed, 'customer_id': string|null, 'expires_at': string|null, 'key'?: string, 'key_last4': string|null, 'license_key_id': string, 'license_key_pool_id': string|null, 'metadata': mixed, 'order'?: mixed, 'order_id': string|null, 'order_line_item_id': string|null, 'product_id': string, 'restrictions': list<mixed>, 'source': string, 'status': string, 'subscription_id': string|null, 'subscription_line_item_id': string|null, 'supported_actions': list<string>, 'unit_ordinal': int, 'updated_at': string, 'variant_id': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutLicenseKey')); }
    /** Maximum active installations. Null when activations are unlimited. Format: int32.
     * @return int|null
     */
    public function getActivationLimit(): int|null { return $this->get('activation_limit'); }
    public function hasActivationLimit(): bool { return $this->has('activation_limit'); }
    /** Number of currently active installations. Format: int32.
     * @return int
     */
    public function getActiveActivationCount(): int { return $this->get('active_activation_count'); }
    public function hasActiveActivationCount(): bool { return $this->has('active_activation_count'); }
    /** When the license key was issued. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The linked customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The current customer of the owning order or subscription. Null when the order has no linked customer.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** When the key expires. Null when no expiry is set. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The full key, when assigned and requested with the paying checkout credential. Returned only to the checkout credential; never in webhook payloads.
     * @return ?string
     */
    public function getKey(): ?string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Last four characters of the assigned key. Null when the key is awaiting assignment.
     * @return string|null
     */
    public function getKeyLast4(): string|null { return $this->get('key_last4'); }
    public function hasKeyLast4(): bool { return $this->has('key_last4'); }
    /** Unique license key ID with the lk_ prefix.
     * @return string
     */
    public function getLicenseKeyId(): string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The source pool ID. Null when the key is generated.
     * @return string|null
     */
    public function getLicenseKeyPoolId(): string|null { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The linked order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The owning order or the order that started the subscription. Null when a subscription has no starting order.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The owning order line. Null when the key belongs to a subscription line.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The product ID.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Restrictions currently in force. [] (Value): {@see LicenseKeyRestriction}. One occurrence of a cause keeping the key disabled.
     * @return list<LicenseKeyRestriction>
     */
    public function getRestrictions(): array { return $this->get('restrictions'); }
    public function hasRestrictions(): bool { return $this->has('restrictions'); }
    /** How the key was supplied. Value enum: "generated", "pool".
     * @return string
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending", "active", "disabled", "expired".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The owning subscription. Null when the key belongs to an order line.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The owning subscription line. Null when the key belongs to an order line.
     * @return string|null
     */
    public function getSubscriptionLineItemId(): string|null { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** Lifecycle actions currently available for this key. [] enum: "disable", "reinstate". [] (Value): string.  Value enum: "disable", "reinstate".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The unit of the owning line, starting at 1. Format: int32.
     * @return int
     */
    public function getUnitOrdinal(): int { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
    /** When the license key version last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** The product variant ID.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
