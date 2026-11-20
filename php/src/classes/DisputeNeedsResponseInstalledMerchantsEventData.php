<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read DisputeNeedsResponseInstalledMerchantsEventDataObject $object
 * @property-read ?DisputeNeedsResponseInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DisputeNeedsResponseInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'amount_money': mixed, 'can_respond_with_evidence': bool, 'case_type': string, 'closed_reason'?: string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'dispute_id': string, 'evidence_due_at': string|null, 'evidence_submission_count': int, 'fraud_warning_id'?: string, 'has_evidence': bool, 'is_action_required': bool, 'is_evidence_deadline_passed': bool, 'merchant_id': string, 'network_reason_code': string|null, 'order'?: mixed, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_option': string|null, 'reason': string, 'recommended_evidence_types': list<string>, 'response_unavailable_reason'?: string, 'split_reversals'?: list<mixed>, 'status': string, 'status_changed_at'?: string, 'supported_actions': list<string>, 'updated_at': string}, 'previous_attributes'?: object{'amount_money'?: mixed, 'can_respond_with_evidence'?: mixed, 'case_type'?: mixed, 'closed_reason'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'dispute_id'?: mixed, 'evidence_due_at'?: mixed, 'evidence_submission_count'?: mixed, 'fraud_warning_id'?: mixed, 'has_evidence'?: mixed, 'is_action_required'?: mixed, 'is_evidence_deadline_passed'?: mixed, 'merchant_id'?: mixed, 'network_reason_code'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'payment_intent'?: mixed, 'payment_intent_id'?: mixed, 'payment_option'?: mixed, 'reason'?: mixed, 'recommended_evidence_types'?: mixed, 'response_unavailable_reason'?: mixed, 'split_reversals'?: mixed, 'status'?: mixed, 'status_changed_at'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeNeedsResponseInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return DisputeNeedsResponseInstalledMerchantsEventDataObject
     */
    public function getObject(): DisputeNeedsResponseInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?DisputeNeedsResponseInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?DisputeNeedsResponseInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
