<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $completed_at
 * @property-read string|null $created_at
 * @property-read int|null $failed_count
 * @property-read list<SubscriptionDeliveryMigrationFailureReasonCount>|null $failure_reason_counts
 * @property-read string|null $from_delivery_method_id
 * @property-read int|null $moved_count
 * @property-read int|null $pending_count
 * @property-read string|null $status
 * @property-read string|null $subscription_delivery_migration_id
 * @property-read string|null $subscription_plan_id
 * @property-read string|null $to_delivery_method_id
 * @property-read int|null $total_count
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'completed_at'?: mixed, 'created_at'?: mixed, 'failed_count'?: mixed, 'failure_reason_counts'?: mixed, 'from_delivery_method_id'?: mixed, 'moved_count'?: mixed, 'pending_count'?: mixed, 'status'?: mixed, 'subscription_delivery_migration_id'?: mixed, 'subscription_plan_id'?: mixed, 'to_delivery_method_id'?: mixed, 'total_count'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationCompletedInstalledMerchantsEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. anyOf[1] (Value): integer. Subscriptions that could not be moved. See `failure_reason_counts`, or list the failures for each subscription. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getFailedCount(): int|null { return $this->get('failed_count'); }
    public function hasFailedCount(): bool { return $this->has('failed_count'); }
    /** Failed subscriptions grouped by reason. Empty when none failed. anyOf[1] (Value): Array of {@see SubscriptionDeliveryMigrationFailureReasonCount}. Failed subscriptions grouped by reason. Empty when none failed. anyOf[1][] (Value): {@see SubscriptionDeliveryMigrationFailureReasonCount}. The number of subscriptions that failed a delivery method migration for one reason. anyOf[2] (Value): null.
     * @return list<SubscriptionDeliveryMigrationFailureReasonCount>|null
     */
    public function getFailureReasonCounts(): array|null { return $this->get('failure_reason_counts'); }
    public function hasFailureReasonCounts(): bool { return $this->has('failure_reason_counts'); }
    /** ID of the delivery method the subscriptions moved away from. anyOf[1] (Value): string. ID of the delivery method the subscriptions moved away from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFromDeliveryMethodId(): string|null { return $this->get('from_delivery_method_id'); }
    public function hasFromDeliveryMethodId(): bool { return $this->has('from_delivery_method_id'); }
    /** Subscriptions now using the new method. anyOf[1] (Value): integer. Subscriptions now using the new method. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMovedCount(): int|null { return $this->get('moved_count'); }
    public function hasMovedCount(): bool { return $this->has('moved_count'); }
    /** Subscriptions not yet moved or failed, including ones Flint is retrying. anyOf[1] (Value): integer. Subscriptions not yet moved or failed, including ones Flint is retrying. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPendingCount(): int|null { return $this->get('pending_count'); }
    public function hasPendingCount(): bool { return $this->has('pending_count'); }
    /** Progress of the delivery method migration across its subscriptions. Value enum: "pending", "processing", "completed". anyOf[1] (Value): string. Progress of the delivery method migration across its subscriptions. Value enum: "pending", "processing", "completed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique identifier for this subscription delivery migration, prefixed `sdmig_`. anyOf[1] (Value): string. Unique identifier for this subscription delivery migration, prefixed `sdmig_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionDeliveryMigrationId(): string|null { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
    /** Plan the migration was limited to. Omitted when it covered every plan. anyOf[1] (Value): string. Plan the migration was limited to. Omitted when it covered every plan. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** ID of the delivery method the subscriptions move to. anyOf[1] (Value): string. ID of the delivery method the subscriptions move to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getToDeliveryMethodId(): string|null { return $this->get('to_delivery_method_id'); }
    public function hasToDeliveryMethodId(): bool { return $this->has('to_delivery_method_id'); }
    /** Number of active, paused, and past due subscriptions on the original method when the migration started. anyOf[1] (Value): integer. Number of active, paused, and past due subscriptions on the original method when the migration started. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getTotalCount(): int|null { return $this->get('total_count'); }
    public function hasTotalCount(): bool { return $this->has('total_count'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
