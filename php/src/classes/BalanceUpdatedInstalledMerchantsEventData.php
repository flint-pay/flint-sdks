<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BalanceUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class BalanceUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'available_by_source_type'?: \stdClass, 'available_money': mixed, 'balance_id': string, 'currency': string, 'held_money': mixed, 'merchant_id': string, 'observed_at': string, 'payouts_enabled': bool, 'pending_by_source_type'?: \stdClass, 'pending_money': mixed, 'reserve_money': mixed}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return BalanceUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): BalanceUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
