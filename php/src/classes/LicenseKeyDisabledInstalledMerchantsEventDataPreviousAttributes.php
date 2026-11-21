<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $activation_limit
 * @property-read int|null $active_activation_count
 * @property-read string|null $created_at
 * @property-read ExpandedCustomerSummaryPreviousAttributes|null $customer
 * @property-read string|null $customer_id
 * @property-read string|null $expires_at
 * @property-read string|null $key_last4
 * @property-read string|null $license_key_id
 * @property-read string|null $license_key_pool_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $product_id
 * @property-read list<LicenseKeyRestrictionPreviousAttributes>|null $restrictions
 * @property-read string|null $source
 * @property-read string|null $status
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_line_item_id
 * @property-read list<string>|null $supported_actions
 * @property-read int|null $unit_ordinal
 * @property-read string|null $updated_at
 * @property-read string|null $variant_id
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyDisabledInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'activation_limit'?: mixed, 'active_activation_count'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'expires_at'?: mixed, 'key_last4'?: mixed, 'license_key_id'?: mixed, 'license_key_pool_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'product_id'?: mixed, 'restrictions'?: mixed, 'source'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'subscription_line_item_id'?: mixed, 'supported_actions'?: mixed, 'unit_ordinal'?: mixed, 'updated_at'?: mixed, 'variant_id'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyDisabledInstalledMerchantsEventDataPreviousAttributes')); }
    /** Maximum active installations. Null when activations are unlimited. anyOf[1] (Value): integer. Maximum active installations. Null when activations are unlimited. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getActivationLimit(): int|null { return $this->get('activation_limit'); }
    public function hasActivationLimit(): bool { return $this->has('activation_limit'); }
    /** Number of currently active installations. anyOf[1] (Value): integer. Number of currently active installations. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getActiveActivationCount(): int|null { return $this->get('active_activation_count'); }
    public function hasActiveActivationCount(): bool { return $this->has('active_activation_count'); }
    /** When the license key was issued. anyOf[1] (Value): string. When the license key was issued. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The linked customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributes|null
     */
    public function getCustomer(): ExpandedCustomerSummaryPreviousAttributes|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The current customer of the owning order or subscription. Null when the order has no linked customer. anyOf[1] (Value): string. The current customer of the owning order or subscription. Null when the order has no linked customer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** When the key expires. Null when no expiry is set. anyOf[1] (Value): string. When the key expires. Null when no expiry is set. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Last four characters of the assigned key. Null when the key is awaiting assignment. anyOf[1] (Value): string. Last four characters of the assigned key. Null when the key is awaiting assignment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getKeyLast4(): string|null { return $this->get('key_last4'); }
    public function hasKeyLast4(): bool { return $this->has('key_last4'); }
    /** Unique license key ID with the lk_ prefix. anyOf[1] (Value): string. Unique license key ID with the lk_ prefix. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLicenseKeyId(): string|null { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The source pool ID. Null when the key is generated. anyOf[1] (Value): string. The source pool ID. Null when the key is generated. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLicenseKeyPoolId(): string|null { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** Merchant-defined key-value pairs. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The linked order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The owning order or the order that started the subscription. Null when a subscription has no starting order. anyOf[1] (Value): string. The owning order or the order that started the subscription. Null when a subscription has no starting order. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The owning order line. Null when the key belongs to a subscription line. anyOf[1] (Value): string. The owning order line. Null when the key belongs to a subscription line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The product ID. anyOf[1] (Value): string. The product ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Restrictions currently in force. anyOf[1] (Value): Array of {@see LicenseKeyRestrictionPreviousAttributes}. Restrictions currently in force. anyOf[1][] (Value): {@see LicenseKeyRestrictionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<LicenseKeyRestrictionPreviousAttributes>|null
     */
    public function getRestrictions(): array|null { return $this->get('restrictions'); }
    public function hasRestrictions(): bool { return $this->has('restrictions'); }
    /** How the key was supplied. Value enum: "generated", "pool". anyOf[1] (Value): string. How the key was supplied. Value enum: "generated", "pool". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSource(): string|null { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending", "active", "disabled", "expired". anyOf[1] (Value): string. Whether the key is usable. Expiry takes effect at expires_at. Value enum: "pending", "active", "disabled", "expired". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The owning subscription. Null when the key belongs to an order line. anyOf[1] (Value): string. The owning subscription. Null when the key belongs to an order line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The owning subscription line. Null when the key belongs to an order line. anyOf[1] (Value): string. The owning subscription line. Null when the key belongs to an order line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionLineItemId(): string|null { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** Lifecycle actions currently available for this key. [] enum: "disable", "reinstate". anyOf[1] (Value): Array of string. Lifecycle actions currently available for this key. [] enum: "disable", "reinstate". anyOf[1][] (Value): string.  Value enum: "disable", "reinstate". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The unit of the owning line, starting at 1. anyOf[1] (Value): integer. The unit of the owning line, starting at 1. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getUnitOrdinal(): int|null { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
    /** When the license key version last changed. anyOf[1] (Value): string. When the license key version last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** The product variant ID. anyOf[1] (Value): string. The product variant ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
