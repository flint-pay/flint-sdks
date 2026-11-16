<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerEmailPreferencesUpdatedMerchantEventDataObject $object
 * @property-read ?CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CustomerEmailPreferencesUpdatedMerchantEventData extends Model {
    /** @param array{'object': object{'checkout_reminders': bool, 'customer_id': string|null, 'email': string, 'shipping_updates': bool, 'version': int|null}, 'previous_attributes'?: object{'checkout_reminders'?: mixed, 'customer_id'?: mixed, 'email'?: mixed, 'shipping_updates'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerEmailPreferencesUpdatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CustomerEmailPreferencesUpdatedMerchantEventDataObject
     */
    public function getObject(): CustomerEmailPreferencesUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?CustomerEmailPreferencesUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
