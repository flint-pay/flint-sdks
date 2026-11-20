<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PayoutSettingsUpdatedMerchantEventDataObject $object
 * @property-read ?PayoutSettingsUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PayoutSettingsUpdatedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'blocked_reasons': list<mixed>, 'created_at': string|null, 'default_payout_destinations': \stdClass, 'delay_days': int, 'delay_days_override'?: int, 'interval': string, 'merchant_id': string, 'minimum_balance_currency_options'?: \stdClass, 'monthly_payout_days': list<int>, 'next_actions': list<mixed>, 'payout_settings_id': string, 'statement_descriptor'?: string, 'status': string, 'updated_at': string|null, 'version': int, 'weekly_payout_days': list<string>}, 'previous_attributes'?: object{'blocked_reasons'?: mixed, 'created_at'?: mixed, 'default_payout_destinations'?: mixed, 'delay_days'?: mixed, 'delay_days_override'?: mixed, 'interval'?: mixed, 'merchant_id'?: mixed, 'minimum_balance_currency_options'?: mixed, 'monthly_payout_days'?: mixed, 'next_actions'?: mixed, 'payout_settings_id'?: mixed, 'statement_descriptor'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'weekly_payout_days'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdatedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PayoutSettingsUpdatedMerchantEventDataObject
     */
    public function getObject(): PayoutSettingsUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PayoutSettingsUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PayoutSettingsUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
