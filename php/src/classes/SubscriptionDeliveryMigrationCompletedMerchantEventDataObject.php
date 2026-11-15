<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $completed_at
 * @property-read string $created_at
 * @property-read int $failed_count
 * @property-read list<SubscriptionDeliveryMigrationFailureReasonCount> $failure_reason_counts
 * @property-read string $from_delivery_method_id
 * @property-read int $moved_count
 * @property-read int $pending_count
 * @property-read string $status
 * @property-read string $subscription_delivery_migration_id
 * @property-read ?string $subscription_plan_id
 * @property-read string $to_delivery_method_id
 * @property-read int $total_count
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryMigrationCompletedMerchantEventDataObject extends Model {
    /** @param array{'completed_at'?: string, 'created_at': string, 'failed_count': int, 'failure_reason_counts': list<mixed>, 'from_delivery_method_id': string, 'moved_count': int, 'pending_count': int, 'status': string, 'subscription_delivery_migration_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string, 'total_count': int, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationCompletedMerchantEventDataObject')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Format: int64.
     * @return int
     */
    public function getFailedCount(): int { return $this->get('failed_count'); }
    public function hasFailedCount(): bool { return $this->has('failed_count'); }
    /** Failed subscriptions grouped by reason. Empty when none failed. [] (Value): {@see SubscriptionDeliveryMigrationFailureReasonCount}. The number of subscriptions that failed a delivery method migration for one reason.
     * @return list<SubscriptionDeliveryMigrationFailureReasonCount>
     */
    public function getFailureReasonCounts(): array { return $this->get('failure_reason_counts'); }
    public function hasFailureReasonCounts(): bool { return $this->has('failure_reason_counts'); }
    /** ID of the delivery method the subscriptions moved away from.
     * @return string
     */
    public function getFromDeliveryMethodId(): string { return $this->get('from_delivery_method_id'); }
    public function hasFromDeliveryMethodId(): bool { return $this->has('from_delivery_method_id'); }
    /** Subscriptions now using the new method. Format: int64.
     * @return int
     */
    public function getMovedCount(): int { return $this->get('moved_count'); }
    public function hasMovedCount(): bool { return $this->has('moved_count'); }
    /** Subscriptions not yet moved or failed, including ones Flint is retrying. Format: int64.
     * @return int
     */
    public function getPendingCount(): int { return $this->get('pending_count'); }
    public function hasPendingCount(): bool { return $this->has('pending_count'); }
    /** Progress of the delivery method migration across its subscriptions. Value enum: "pending", "processing", "completed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this subscription delivery migration, prefixed `sdmig_`.
     * @return string
     */
    public function getSubscriptionDeliveryMigrationId(): string { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
    /** Plan the migration was limited to. Omitted when it covered every plan.
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** ID of the delivery method the subscriptions move to.
     * @return string
     */
    public function getToDeliveryMethodId(): string { return $this->get('to_delivery_method_id'); }
    public function hasToDeliveryMethodId(): bool { return $this->has('to_delivery_method_id'); }
    /** Number of active, paused, and past due subscriptions on the original method when the migration started. Format: int64.
     * @return int
     */
    public function getTotalCount(): int { return $this->get('total_count'); }
    public function hasTotalCount(): bool { return $this->has('total_count'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
