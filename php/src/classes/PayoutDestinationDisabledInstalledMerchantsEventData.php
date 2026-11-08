<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutDestinationDisabledInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PayoutDestinationDisabledInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'available_payout_methods': list<string>, 'bank_name'?: string, 'country'?: string, 'created_at': string, 'currency': string, 'disabled_at'?: string, 'disabled_reason'?: string, 'is_default_for_currency': bool, 'last4'?: string, 'merchant_id': string, 'metadata'?: mixed, 'payout_destination_id': string, 'status': string, 'status_updated_at'?: string, 'type': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationDisabledInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PayoutDestinationDisabledInstalledMerchantsEventDataObject
     */
    public function getObject(): PayoutDestinationDisabledInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
