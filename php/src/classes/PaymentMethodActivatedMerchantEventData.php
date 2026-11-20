<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PaymentMethodActivatedMerchantEventDataObject $object
 * @property-read ?PaymentMethodActivatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodActivatedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'card'?: mixed, 'created_at': string, 'customer'?: mixed, 'customer_id': string, 'fingerprint'?: string, 'is_default': bool, 'is_removing': bool, 'merchant_id': string, 'origin'?: string, 'payment_method_id': string, 'saved_with'?: string, 'status': string, 'type': string, 'updated_at': string, 'usage': string}, 'previous_attributes'?: object{'card'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'fingerprint'?: mixed, 'is_default'?: mixed, 'is_removing'?: mixed, 'merchant_id'?: mixed, 'origin'?: mixed, 'payment_method_id'?: mixed, 'saved_with'?: mixed, 'status'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'usage'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodActivatedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PaymentMethodActivatedMerchantEventDataObject
     */
    public function getObject(): PaymentMethodActivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PaymentMethodActivatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PaymentMethodActivatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
