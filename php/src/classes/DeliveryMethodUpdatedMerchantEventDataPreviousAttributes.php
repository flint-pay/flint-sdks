<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryMethodConfigurationPreviousAttributes|null $configuration
 * @property-read string|null $created_at
 * @property-read string|null $current_delivery_method_revision_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_revocation_id
 * @property-read string|null $description
 * @property-read int|null $display_position
 * @property-read string|null $external_reference_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read int|null $recommendation_priority
 * @property-read string|null $status
 * @property-read SubscriptionCountsPreviousAttributes|null $subscription_counts
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'configuration'?: mixed, 'created_at'?: mixed, 'current_delivery_method_revision_id'?: mixed, 'delivery_method_id'?: mixed, 'delivery_revocation_id'?: mixed, 'description'?: mixed, 'display_position'?: mixed, 'external_reference_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'recommendation_priority'?: mixed, 'status'?: mixed, 'subscription_counts'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodUpdatedMerchantEventDataPreviousAttributes')); }
    /** Current eligibility, pricing, origin, estimate, and tax configuration. anyOf[1] (Value): {@see DeliveryMethodConfigurationPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryMethodConfigurationPreviousAttributes|null
     */
    public function getConfiguration(): DeliveryMethodConfigurationPreviousAttributes|null { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Time the method was created. anyOf[1] (Value): string. Time the method was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Immutable revision currently used for new quotes. anyOf[1] (Value): string. Immutable revision currently used for new quotes. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentDeliveryMethodRevisionId(): string|null { return $this->get('current_delivery_method_revision_id'); }
    public function hasCurrentDeliveryMethodRevisionId(): bool { return $this->has('current_delivery_method_revision_id'); }
    /** Stable delivery method ID. anyOf[1] (Value): string. Stable delivery method ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. anyOf[1] (Value): string. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryRevocationId(): string|null { return $this->get('delivery_revocation_id'); }
    public function hasDeliveryRevocationId(): bool { return $this->has('delivery_revocation_id'); }
    /** Optional buyer-facing description. anyOf[1] (Value): string. Optional buyer-facing description. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Ascending display order among methods. anyOf[1] (Value): integer. Ascending display order among methods. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDisplayPosition(): int|null { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Merchant-facing method name. anyOf[1] (Value): string. Merchant-facing method name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. anyOf[1] (Value): integer. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRecommendationPriority(): int|null { return $this->get('recommendation_priority'); }
    public function hasRecommendationPriority(): bool { return $this->has('recommendation_priority'); }
    /** Current method lifecycle status. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Current method lifecycle status. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** How many subscriptions use this method, by status. anyOf[1] (Value): {@see SubscriptionCountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionCountsPreviousAttributes|null
     */
    public function getSubscriptionCounts(): SubscriptionCountsPreviousAttributes|null { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
    /** Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup". anyOf[1] (Value): string. Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Time the method last changed. anyOf[1] (Value): string. Time the method last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Optimistic-concurrency version for method writes. anyOf[1] (Value): integer. Optimistic-concurrency version for method writes. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
