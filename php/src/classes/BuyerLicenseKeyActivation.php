<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerAction> $buyer_actions
 * @property-read string $created_at
 * @property-read string|null $last_validated_at
 * @property-read string $license_key_activation_id
 * @property-read string $license_key_id
 * @property-read string|null $name
 * @property-read string $product_id
 * @property-read string|null $released_at
 * @property-read string $status
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerLicenseKeyActivation extends Model {
    /** @param array{'buyer_actions': list<mixed>, 'created_at': string, 'last_validated_at': string|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|null, 'status': string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerLicenseKeyActivation')); }
    /** Whether the buyer can release this activation. [] (Value): {@see BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerAction>
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** When the activation was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: date-time.
     * @return string|null
     */
    public function getLastValidatedAt(): string|null { return $this->get('last_validated_at'); }
    public function hasLastValidatedAt(): bool { return $this->has('last_validated_at'); }
    /** The activation ID.
     * @return string
     */
    public function getLicenseKeyActivationId(): string { return $this->get('license_key_activation_id'); }
    public function hasLicenseKeyActivationId(): bool { return $this->has('license_key_activation_id'); }
    /** The activated license key ID.
     * @return string
     */
    public function getLicenseKeyId(): string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The name supplied by the app. Null when erased.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The product this installation can use.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** When the activation was released. Null when it is active. Format: date-time.
     * @return string|null
     */
    public function getReleasedAt(): string|null { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** The activation state. Value enum: "active", "released".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The variant this installation can use.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
