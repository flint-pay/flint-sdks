<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $completed_at
 * @property-read string $created_at
 * @property-read string $failed_count
 * @property-read list<SubscriptionDeliveryMigrationFailureReasonCount> $failure_reason_counts
 * @property-read string $from_delivery_method_id
 * @property-read string $moved_count
 * @property-read string $pending_count
 * @property-read string $status
 * @property-read string $subscription_delivery_migration_id
 * @property-read string $subscription_plan_id
 * @property-read string $to_delivery_method_id
 * @property-read string $total_count
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigration extends Model {
    /** @param array{'completed_at'?: string, 'created_at': string, 'failed_count': string, 'failure_reason_counts': list<mixed>, 'from_delivery_method_id': string, 'moved_count': string, 'pending_count': string, 'status': string, 'subscription_delivery_migration_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string, 'total_count': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigration')); }
    /** @return string
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When failed_count is omitted; use hasFailedCount() or valueOrDefault().
     */
    public function getFailedCount(): string { return $this->get('failed_count'); }
    public function hasFailedCount(): bool { return $this->has('failed_count'); }
    /** @return list<SubscriptionDeliveryMigrationFailureReasonCount>
     * @throws SdkError When failure_reason_counts is omitted; use hasFailureReasonCounts() or valueOrDefault().
     */
    public function getFailureReasonCounts(): array { return $this->get('failure_reason_counts'); }
    public function hasFailureReasonCounts(): bool { return $this->has('failure_reason_counts'); }
    /** @return string
     * @throws SdkError When from_delivery_method_id is omitted; use hasFromDeliveryMethodId() or valueOrDefault().
     */
    public function getFromDeliveryMethodId(): string { return $this->get('from_delivery_method_id'); }
    public function hasFromDeliveryMethodId(): bool { return $this->has('from_delivery_method_id'); }
    /** @return string
     * @throws SdkError When moved_count is omitted; use hasMovedCount() or valueOrDefault().
     */
    public function getMovedCount(): string { return $this->get('moved_count'); }
    public function hasMovedCount(): bool { return $this->has('moved_count'); }
    /** @return string
     * @throws SdkError When pending_count is omitted; use hasPendingCount() or valueOrDefault().
     */
    public function getPendingCount(): string { return $this->get('pending_count'); }
    public function hasPendingCount(): bool { return $this->has('pending_count'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When subscription_delivery_migration_id is omitted; use hasSubscriptionDeliveryMigrationId() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMigrationId(): string { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
    /** @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** @return string
     * @throws SdkError When to_delivery_method_id is omitted; use hasToDeliveryMethodId() or valueOrDefault().
     */
    public function getToDeliveryMethodId(): string { return $this->get('to_delivery_method_id'); }
    public function hasToDeliveryMethodId(): bool { return $this->has('to_delivery_method_id'); }
    /** @return string
     * @throws SdkError When total_count is omitted; use hasTotalCount() or valueOrDefault().
     */
    public function getTotalCount(): string { return $this->get('total_count'); }
    public function hasTotalCount(): bool { return $this->has('total_count'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
