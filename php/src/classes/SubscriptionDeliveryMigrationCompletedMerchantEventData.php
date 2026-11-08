<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionDeliveryMigrationCompletedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryMigrationCompletedMerchantEventData extends Model {
    /** @param array{'object': object{'completed_at'?: string, 'created_at': string, 'failed_count': int, 'failure_reason_counts': list<mixed>, 'from_delivery_method_id': string, 'moved_count': int, 'pending_count': int, 'status': string, 'subscription_delivery_migration_id': string, 'subscription_plan_id'?: string, 'to_delivery_method_id': string, 'total_count': int, 'updated_at': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationCompletedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return SubscriptionDeliveryMigrationCompletedMerchantEventDataObject
     */
    public function getObject(): SubscriptionDeliveryMigrationCompletedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
