<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PayoutDestinationUpdatedMerchantEventDataObject $object
 * @property-read ?PayoutDestinationUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PayoutDestinationUpdatedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'available_payout_methods': list<string>, 'bank_name'?: string, 'country'?: string, 'created_at': string, 'currency': string, 'disabled_at'?: string, 'disabled_reason'?: string, 'is_default_for_currency': bool, 'last4'?: string, 'merchant_id': string, 'metadata'?: mixed, 'payout_destination_id': string, 'status': string, 'status_updated_at'?: string, 'type': string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'available_payout_methods'?: mixed, 'bank_name'?: mixed, 'country'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'disabled_at'?: mixed, 'disabled_reason'?: mixed, 'is_default_for_currency'?: mixed, 'last4'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'payout_destination_id'?: mixed, 'status'?: mixed, 'status_updated_at'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationUpdatedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PayoutDestinationUpdatedMerchantEventDataObject
     */
    public function getObject(): PayoutDestinationUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PayoutDestinationUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PayoutDestinationUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
