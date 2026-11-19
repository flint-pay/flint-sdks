<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutFailedMerchantEventDataObject $object
 * @property-read ?PayoutFailedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PayoutFailedMerchantEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'arrival_date'?: string, 'balance_source_type': string, 'created_at': string, 'currency': string, 'description'?: string, 'direction': string, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fee_amount_status': string, 'fee_money': mixed, 'idempotency_key'?: string|null, 'initiated_by': string, 'merchant_id': string, 'metadata'?: mixed, 'method': string, 'net_money': mixed, 'original_payout'?: mixed, 'original_payout_id'?: string, 'payout_destination'?: mixed, 'payout_destination_id'?: string, 'payout_id': string, 'reversal_status': string, 'reversed_by_payout'?: mixed, 'reversed_by_payout_id'?: string, 'statement_descriptor'?: string, 'status': string, 'supported_actions': list<string>, 'trace_id'?: mixed, 'updated_at': string}, 'previous_attributes'?: object{'amount_money'?: mixed, 'arrival_date'?: mixed, 'balance_source_type'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'description'?: mixed, 'direction'?: mixed, 'external_reference_id'?: mixed, 'failure_code'?: mixed, 'failure_message'?: mixed, 'fee_amount_status'?: mixed, 'fee_money'?: mixed, 'idempotency_key'?: mixed, 'initiated_by'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'method'?: mixed, 'net_money'?: mixed, 'original_payout'?: mixed, 'original_payout_id'?: mixed, 'payout_destination'?: mixed, 'payout_destination_id'?: mixed, 'payout_id'?: mixed, 'reversal_status'?: mixed, 'reversed_by_payout'?: mixed, 'reversed_by_payout_id'?: mixed, 'statement_descriptor'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'trace_id'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutFailedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PayoutFailedMerchantEventDataObject
     */
    public function getObject(): PayoutFailedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PayoutFailedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PayoutFailedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
