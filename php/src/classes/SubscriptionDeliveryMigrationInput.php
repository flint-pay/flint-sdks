<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $failed_count
 * @property-read list<SubscriptionDeliveryMigrationFailureReasonCountInput|array<array-key, mixed>|\stdClass> $failure_reason_counts
 * @property-read string $from_delivery_method_id
 * @property-read string $moved_count
 * @property-read string $pending_count
 * @property-read string $status
 * @property-read string $subscription_delivery_migration_id
 * @property-read string $subscription_plan_id
 * @property-read string $to_delivery_method_id
 * @property-read string $total_count
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationInput extends Model {
    /** @param array{'completed_at'?: string|\DateTimeInterface, 'created_at': string|\DateTimeInterface, 'failed_count': string, 'failure_reason_counts': list<SubscriptionDeliveryMigrationFailureReasonCountInput|array<array-key, mixed>|\stdClass>, 'from_delivery_method_id': string, 'moved_count': string, 'pending_count': string, 'status': string, 'subscription_delivery_migration_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string, 'total_count': string, 'updated_at': string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When failed_count is omitted; use hasFailedCount() or valueOrDefault().
     */
    public function getFailedCount(): string { return $this->get('failed_count'); }
    public function hasFailedCount(): bool { return $this->has('failed_count'); }
    /** Shape $ (Value): Array of {@see SubscriptionDeliveryMigrationFailureReasonCountInput}. Shape $[] (Value): {@see SubscriptionDeliveryMigrationFailureReasonCountInput}. The number of subscriptions that failed a delivery method migration for one reason.
     * @return list<SubscriptionDeliveryMigrationFailureReasonCountInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When failure_reason_counts is omitted; use hasFailureReasonCounts() or valueOrDefault().
     */
    public function getFailureReasonCounts(): array { return $this->get('failure_reason_counts'); }
    public function hasFailureReasonCounts(): bool { return $this->has('failure_reason_counts'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When from_delivery_method_id is omitted; use hasFromDeliveryMethodId() or valueOrDefault().
     */
    public function getFromDeliveryMethodId(): string { return $this->get('from_delivery_method_id'); }
    public function hasFromDeliveryMethodId(): bool { return $this->has('from_delivery_method_id'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When moved_count is omitted; use hasMovedCount() or valueOrDefault().
     */
    public function getMovedCount(): string { return $this->get('moved_count'); }
    public function hasMovedCount(): bool { return $this->has('moved_count'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When pending_count is omitted; use hasPendingCount() or valueOrDefault().
     */
    public function getPendingCount(): string { return $this->get('pending_count'); }
    public function hasPendingCount(): bool { return $this->has('pending_count'); }
    /** Shape $ (Value): string.  Value enum: "pending", "running", "completed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_delivery_migration_id is omitted; use hasSubscriptionDeliveryMigrationId() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMigrationId(): string { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When to_delivery_method_id is omitted; use hasToDeliveryMethodId() or valueOrDefault().
     */
    public function getToDeliveryMethodId(): string { return $this->get('to_delivery_method_id'); }
    public function hasToDeliveryMethodId(): bool { return $this->has('to_delivery_method_id'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When total_count is omitted; use hasTotalCount() or valueOrDefault().
     */
    public function getTotalCount(): string { return $this->get('total_count'); }
    public function hasTotalCount(): bool { return $this->has('total_count'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
