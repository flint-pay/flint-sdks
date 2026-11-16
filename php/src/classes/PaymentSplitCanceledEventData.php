<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentSplitCanceledEventDataObject $object
 * @property-read ?PaymentSplitCanceledEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PaymentSplitCanceledEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'canceled_reason'?: string, 'collecting_merchant_id': string, 'created_at': string, 'description'?: string, 'external_reference_id'?: string, 'failure_reason'?: string, 'funds_available_at': string|null, 'partner_app_id': string, 'partner_app_install_id': string, 'payment_intent_id': string, 'payment_split_id': string, 'pending_reason'?: string, 'reversals': list<mixed>, 'reversed_money': mixed, 'seller_merchant_id': string, 'shortfall_money': mixed, 'status': string, 'succeeded_at'?: string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'amount_money'?: mixed, 'canceled_reason'?: mixed, 'collecting_merchant_id'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'failure_reason'?: mixed, 'funds_available_at'?: mixed, 'partner_app_id'?: mixed, 'partner_app_install_id'?: mixed, 'payment_intent_id'?: mixed, 'payment_split_id'?: mixed, 'pending_reason'?: mixed, 'reversals'?: mixed, 'reversed_money'?: mixed, 'seller_merchant_id'?: mixed, 'shortfall_money'?: mixed, 'status'?: mixed, 'succeeded_at'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitCanceledEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PaymentSplitCanceledEventDataObject
     */
    public function getObject(): PaymentSplitCanceledEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PaymentSplitCanceledEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PaymentSplitCanceledEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
