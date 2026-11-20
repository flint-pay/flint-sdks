<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read BalanceTransactionUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?BalanceTransactionUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class BalanceTransactionUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'amount_money': mixed, 'available_at'?: string, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_details'?: list<mixed>, 'fee_money': mixed, 'merchant_id': string, 'net_money': mixed, 'occurred_at': string, 'order'?: mixed, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: mixed, 'status': string, 'type': string}, 'previous_attributes'?: object{'amount_money'?: mixed, 'available_at'?: mixed, 'balance_transaction_id'?: mixed, 'currency'?: mixed, 'description'?: mixed, 'fee_details'?: mixed, 'fee_money'?: mixed, 'merchant_id'?: mixed, 'net_money'?: mixed, 'occurred_at'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'payout_id'?: mixed, 'related_balance_transaction_ids'?: mixed, 'related_resource'?: mixed, 'status'?: mixed, 'type'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionUpdatedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return BalanceTransactionUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): BalanceTransactionUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?BalanceTransactionUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?BalanceTransactionUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
