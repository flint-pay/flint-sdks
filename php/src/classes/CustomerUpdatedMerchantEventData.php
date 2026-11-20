<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read CustomerUpdatedMerchantEventDataObject $object
 * @property-read ?CustomerUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CustomerUpdatedMerchantEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'billing_address': mixed, 'created_at': string, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: mixed, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id': string|null, 'internal_note': string|null, 'is_merchant_verified'?: bool, 'merchant_id': string, 'metadata'?: mixed, 'name': string|null, 'phone': string|null, 'price_list_id': string|null, 'receivables'?: mixed, 'segment': string|null, 'shipping_address': mixed, 'status': string, 'tax_exempt'?: bool, 'tax_identity': mixed, 'test_clock_id'?: string, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'billing_address'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'default_invoice_payment_term_id'?: mixed, 'default_payment_method'?: mixed, 'default_payment_method_id'?: mixed, 'email'?: mixed, 'external_reference_id'?: mixed, 'internal_note'?: mixed, 'is_merchant_verified'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'phone'?: mixed, 'price_list_id'?: mixed, 'receivables'?: mixed, 'segment'?: mixed, 'shipping_address'?: mixed, 'status'?: mixed, 'tax_exempt'?: mixed, 'tax_identity'?: mixed, 'test_clock_id'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerUpdatedMerchantEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CustomerUpdatedMerchantEventDataObject
     */
    public function getObject(): CustomerUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?CustomerUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?CustomerUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
