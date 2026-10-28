<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryMethodConfigurationInput|array<array-key, mixed>|\stdClass $configuration
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $current_delivery_method_revision_id
 * @property-read string $delivery_method_id
 * @property-read string $description
 * @property-read int $display_position
 * @property-read string $external_reference_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read int $recommendation_priority
 * @property-read string $status
 * @property-read SubscriptionCountsInput|array<array-key, mixed>|\stdClass $subscription_counts
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryMethodInput extends Model {
    /** @param array{'configuration': DeliveryMethodConfigurationInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'current_delivery_method_revision_id': string, 'delivery_method_id': string, 'description'?: string, 'display_position': int, 'external_reference_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'recommendation_priority'?: int, 'status': string, 'subscription_counts': SubscriptionCountsInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at': string|\DateTimeInterface, 'version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodInput')); }
    /** Shape $ (Value): {@see DeliveryMethodConfigurationInput}. Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes.
     * @return DeliveryMethodConfigurationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When configuration is omitted; use hasConfiguration() or valueOrDefault().
     */
    public function getConfiguration(): mixed { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** Shape $ (Value): string. Time the method was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Immutable revision currently used for new quotes.
     * @return string
     * @throws SdkError When current_delivery_method_revision_id is omitted; use hasCurrentDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getCurrentDeliveryMethodRevisionId(): string { return $this->get('current_delivery_method_revision_id'); }
    public function hasCurrentDeliveryMethodRevisionId(): bool { return $this->has('current_delivery_method_revision_id'); }
    /** Shape $ (Value): string. Stable delivery method ID.
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string. Optional buyer-facing description.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer. Ascending display order among methods. Format: int32.
     * @return int
     * @throws SdkError When display_position is omitted; use hasDisplayPosition() or valueOrDefault().
     */
    public function getDisplayPosition(): int { return $this->get('display_position'); }
    public function hasDisplayPosition(): bool { return $this->has('display_position'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Merchant-facing method name.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: int32.
     * @return int
     * @throws SdkError When recommendation_priority is omitted; use hasRecommendationPriority() or valueOrDefault().
     */
    public function getRecommendationPriority(): int { return $this->get('recommendation_priority'); }
    public function hasRecommendationPriority(): bool { return $this->has('recommendation_priority'); }
    /** Shape $ (Value): string. Current method lifecycle status. Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see SubscriptionCountsInput}. Counts of subscriptions by status: active, past due, and paused.
     * @return SubscriptionCountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_counts is omitted; use hasSubscriptionCounts() or valueOrDefault().
     */
    public function getSubscriptionCounts(): mixed { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
    /** Shape $ (Value): string. Delivery mode this method offers. Value enum: "shipment", "local_delivery", "pickup".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. Time the method last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Optimistic-concurrency version for method writes. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
