<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DisputeInquiryClosedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class DisputeInquiryClosedMerchantEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'can_respond_with_evidence': bool, 'case_type': string, 'created_at': string, 'customer'?: mixed, 'customer_id'?: string, 'dispute_id': string, 'evidence_due_at': string|null, 'evidence_submission_count': int, 'fraud_warning_id'?: string, 'has_evidence': bool, 'is_action_required': bool, 'is_evidence_deadline_passed': bool, 'merchant_id': string, 'network_reason_code': string|null, 'order'?: mixed, 'order_id'?: string, 'payment_intent'?: mixed, 'payment_intent_id'?: string, 'payment_option': string|null, 'reason': string, 'recommended_evidence_types': list<string>, 'response_unavailable_reason'?: string, 'status': string, 'status_changed_at'?: string, 'supported_actions': list<string>, 'updated_at': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DisputeInquiryClosedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return DisputeInquiryClosedMerchantEventDataObject
     */
    public function getObject(): DisputeInquiryClosedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
