<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryMethodConfiguration $configuration
 * @property-read string $created_at
 * @property-read string $current_delivery_method_revision_id
 * @property-read string $delivery_method_id
 * @property-read ?string $description
 * @property-read int $display_position
 * @property-read ?string $external_reference_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read ?int $recommendation_priority
 * @property-read string $status
 * @property-read SubscriptionCounts $subscription_counts
 * @property-read string $type
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethod extends Model {
    /** @param array{'configuration': mixed, 'created_at': string, 'current_delivery_method_revision_id': string, 'delivery_method_id': string, 'description'?: string, 'display_position': int, 'external_reference_id'?: string, 'metadata'?: \stdClass, 'name': string, 'recommendation_priority'?: int, 'status': string, 'subscription_counts': mixed, 'type': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethod')); }
    /** Shape $ (Value): {@see DeliveryMethodConfiguration}. Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes.
     * @return DeliveryMethodConfiguration
     */
    public function getConfiguration(): DeliveryMethodConfiguration { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. Time the method was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Immutable revision currently used for new quotes.
     * @return string
     */
    public function getCurrentDeliveryMethodRevisionId(): string { return $this->get('current_delivery_method_revision_id'); }
    public function hasCurrentDeliveryMethodRevisionId(): bool { return $this->has('current_delivery_method_revision_id'); }
    /** Shape $ (Value): string. Stable delivery method ID.
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string. Optional buyer-facing description.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer. Ascending display order among methods. Format: int32.
     * @return int
     */
    public function getDisplayPosition(): int { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Merchant-facing method name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: int32.
     * @return ?int
     */
    public function getRecommendationPriority(): ?int { return $this->get('recommendation_priority'); }
    public function hasRecommendationPriority(): bool { return $this->has('recommendation_priority'); }
    /** Shape $ (Value): string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see SubscriptionCounts}. Counts of subscriptions by status: active, past due, and paused.
     * @return SubscriptionCounts
     */
    public function getSubscriptionCounts(): SubscriptionCounts { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
    /** Shape $ (Value): string. Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. Time the method last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Optimistic-concurrency version for method writes. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
