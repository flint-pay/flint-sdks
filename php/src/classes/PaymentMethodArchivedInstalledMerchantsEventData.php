<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentMethodArchivedInstalledMerchantsEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': object{'card'?: mixed, 'created_at': string, 'customer'?: mixed, 'customer_id': string, 'fingerprint'?: string, 'is_default': bool, 'merchant_id': string, 'payment_method_id': string, 'saved_with'?: string, 'status': string, 'type': string, 'updated_at': string, 'usage': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodArchivedInstalledMerchantsEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PaymentMethodArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentMethodArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
