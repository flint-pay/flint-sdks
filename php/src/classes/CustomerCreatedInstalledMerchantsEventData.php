<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CustomerCreatedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class CustomerCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'billing_address': mixed, 'created_at': string, 'customer_id': string, 'default_invoice_payment_term_id'?: string, 'default_payment_method'?: mixed, 'default_payment_method_id': string|null, 'email': string|null, 'external_reference_id': string|null, 'internal_note': string|null, 'is_merchant_verified'?: bool, 'merchant_id': string, 'metadata'?: mixed, 'name': string|null, 'phone': string|null, 'price_list_id': string|null, 'receivables'?: mixed, 'segment': string|null, 'shipping_address': mixed, 'status': string, 'tax_exempt'?: bool, 'tax_identity': mixed, 'test_clock_id'?: string, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerCreatedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return CustomerCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): CustomerCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
