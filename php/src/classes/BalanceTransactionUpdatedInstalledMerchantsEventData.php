<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BalanceTransactionUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class BalanceTransactionUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'amount_money': mixed, 'available_at'?: string, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': mixed, 'merchant_id': string, 'net_money': mixed, 'occurred_at': string, 'order'?: mixed, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids': list<string>, 'related_resource'?: mixed, 'status': string, 'type': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return BalanceTransactionUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): BalanceTransactionUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
