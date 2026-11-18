<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LicenseKeyCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'activation_limit': int|null, 'active_activation_count': int, 'created_at': string, 'customer'?: mixed, 'customer_id': string|null, 'expires_at': string|null, 'key_last4': string|null, 'license_key_id': string, 'license_key_pool_id': string|null, 'metadata': mixed, 'order'?: mixed, 'order_id': string|null, 'order_line_item_id': string|null, 'product_id': string, 'restrictions': list<mixed>, 'source': string, 'status': string, 'subscription_id': string|null, 'subscription_line_item_id': string|null, 'supported_actions': list<string>, 'unit_ordinal': int, 'updated_at': string, 'variant_id': string, 'version': int}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return LicenseKeyCreatedMerchantEventDataObject
     */
    public function getObject(): LicenseKeyCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
