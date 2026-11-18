<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $activation_limit
 * @property-read int $active_activation_count
 * @property-read list<BuyerAction> $buyer_actions
 * @property-read string $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $expires_at
 * @property-read ?string $key
 * @property-read string|null $key_last4
 * @property-read string $license_key_id
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string $product_id
 * @property-read string $source
 * @property-read string $status
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_line_item_id
 * @property-read int $unit_ordinal
 * @property-read string $updated_at
 * @property-read string $variant_id
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class BuyerLicenseKey extends Model {
    /** @param array{'activation_limit': int|null, 'active_activation_count': int, 'buyer_actions': list<mixed>, 'created_at': string, 'customer_id': string|null, 'expires_at': string|null, 'key'?: string, 'key_last4': string|null, 'license_key_id': string, 'order_id': string|null, 'order_line_item_id': string|null, 'product_id': string, 'source': string, 'status': string, 'subscription_id': string|null, 'subscription_line_item_id': string|null, 'unit_ordinal': int, 'updated_at': string, 'variant_id': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerLicenseKey')); }
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
    /** Whether the buyer can resend the license key email. The resend request checks cooldown and deliverability. [] (Value): {@see BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerAction>
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** When the license key was issued. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
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
    /** The full assigned key. Present only on list responses where Flint verified access to the key.
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
