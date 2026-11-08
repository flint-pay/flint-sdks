<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FraudWarningCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'created_at': string, 'dispute'?: mixed, 'dispute_id': string|null, 'fraud_type': string, 'fraud_warning_id': string, 'is_actionable': bool, 'payment_intent'?: mixed, 'payment_intent_id': string, 'payment_summary': mixed, 'reported_at': string, 'updated_at': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return FraudWarningCreatedMerchantEventDataObject
     */
    public function getObject(): FraudWarningCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
