<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PayoutSettingsUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PayoutSettingsUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'blocked_reasons': list<mixed>, 'created_at': string|null, 'default_payout_destinations': \stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_currency_options'?: \stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<mixed>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|null, 'version': int, 'weekly_payout_days': list<string>}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PayoutSettingsUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): PayoutSettingsUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
