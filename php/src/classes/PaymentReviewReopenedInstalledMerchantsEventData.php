<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentReviewReopenedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewReopenedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'closed_at': string|null, 'closed_by': mixed, 'closed_reason': string|null, 'customer'?: mixed, 'customer_id': string|null, 'ip_address': string|null, 'last_resolution_failure': mixed, 'matched_risk_rule_id': string|null, 'opened_at': string, 'opened_reason': string, 'order'?: mixed, 'order_id': string|null, 'payment_flow': string, 'payment_intent'?: mixed, 'payment_intent_id': string, 'payment_review_id': string, 'payment_summary': mixed, 'pending_action': string|null, 'refund_id': string|null, 'refunded_money': mixed, 'resolution_started_at': string|null, 'resolution_started_by': mixed, 'risk': mixed, 'status': string, 'supported_actions': list<string>, 'updated_at': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewReopenedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PaymentReviewReopenedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentReviewReopenedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
