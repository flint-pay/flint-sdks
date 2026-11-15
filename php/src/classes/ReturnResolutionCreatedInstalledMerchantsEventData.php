<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ReturnResolutionCreatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'action_reason'?: string, 'action_required_by'?: string, 'adjustments': list<mixed>, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'confirmed_at'?: string, 'confirmed_by'?: mixed, 'corrects_return_resolution_id'?: string, 'created_at': string, 'created_by': mixed, 'credit_adjustment_money': mixed, 'deduction_money': mixed, 'execution_blockers': list<mixed>, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fulfilled_at'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata': mixed, 'payment_intent_ids': list<string>, 'payment_intents'?: list<mixed>, 'pricing_basis'?: string, 'refund_ids': list<string>, 'refunds'?: list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_order'?: mixed, 'replacement_order_id'?: string, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'return_policy_id': string|null, 'return_policy_revision_id'?: string, 'return_resolution_id': string, 'returned_total_money': mixed, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionCreatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ReturnResolutionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ReturnResolutionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
