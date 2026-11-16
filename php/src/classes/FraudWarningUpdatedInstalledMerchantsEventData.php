<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FraudWarningUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?FraudWarningUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'created_at': string, 'dispute'?: mixed, 'dispute_id': string|null, 'fraud_type': string, 'fraud_warning_id': string, 'is_actionable': bool, 'payment_intent'?: mixed, 'payment_intent_id': string, 'payment_summary': mixed, 'reported_at': string, 'updated_at': string}, 'previous_attributes'?: object{'created_at'?: mixed, 'dispute'?: mixed, 'dispute_id'?: mixed, 'fraud_type'?: mixed, 'fraud_warning_id'?: mixed, 'is_actionable'?: mixed, 'payment_intent'?: mixed, 'payment_intent_id'?: mixed, 'payment_summary'?: mixed, 'reported_at'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningUpdatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return FraudWarningUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): FraudWarningUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?FraudWarningUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?FraudWarningUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
