<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerDeletionRequestFailedEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestFailedEventData extends Model {
    /** @param array{'object': object{'canceled_subscription_ids': list<string>, 'customer_deletion_request_id': string, 'customer_id': string, 'decided_at': string|null, 'decision_reason': string|null, 'removed_payment_method_ids': list<string>, 'requested_at': string, 'requested_by': string|null, 'resolved_at'?: string, 'response_due_at': string, 'retention_policy': string, 'status': string, 'supported_actions': list<string>}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestFailedEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CustomerDeletionRequestFailedEventDataObject
     */
    public function getObject(): CustomerDeletionRequestFailedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
