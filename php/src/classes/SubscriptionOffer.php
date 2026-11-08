<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read string $created_at
 * @property-read ?string $external_reference_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read list<string> $product_ids
 * @property-read string|null $promotion_id
 * @property-read string $status
 * @property-read list<string> $subscription_delivery_method_ids
 * @property-read string $subscription_offer_id
 * @property-read string $updated_at
 * @property-read list<string> $variant_ids
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionOffer extends Model {
    /** @param array{'billing_interval_options': list<mixed>, 'created_at': string, 'external_reference_id'?: string, 'metadata': mixed, 'name': string, 'product_ids': list<string>, 'promotion_id': string|null, 'status': string, 'subscription_delivery_method_ids': list<string>, 'subscription_offer_id': string, 'updated_at': string, 'variant_ids': list<string>, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionOffer')); }
    /** Offered billing interval and count pairs. Every option bills the same catalog line prices once per period; changing cadence does not scale prices. minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer. Every option bills the same line prices once per period; prices are not scaled by the interval. For a different price per interval, create separate plans.
     * @return list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** minLength: 1. maxLength: 255.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Products whose active variants the offer covers, including variants added later. At most 100. Send at least one product or variant. Each product must be active and physical, digital, or a service. A variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value): string.
     * @return list<string>
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
    /** An active promotion with forever recurrence. On PATCH, null removes the discount for new signups; omission keeps it.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Whether new signups can use the offer. Existing subscriptions keep their signup terms whatever the offer's status. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Delivery methods offered at signup. An empty array uses the store's checkout defaults. Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. [] (Value): string.
     * @return list<string>
     */
    public function getSubscriptionDeliveryMethodIds(): array { return $this->get('subscription_delivery_method_ids'); }
    public function hasSubscriptionDeliveryMethodIds(): bool { return $this->has('subscription_delivery_method_ids'); }
    /** Unique identifier for this subscription offer, prefixed `soffer_`.
     * @return string
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Individual variants the offer covers. At most 100. Send at least one product or variant. A variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value): string.
     * @return list<string>
     */
    public function getVariantIds(): array { return $this->get('variant_ids'); }
    public function hasVariantIds(): bool { return $this->has('variant_ids'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
