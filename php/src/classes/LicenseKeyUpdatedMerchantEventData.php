<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LicenseKeyUpdatedMerchantEventDataObject $object
 * @property-read ?LicenseKeyUpdatedMerchantEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyUpdatedMerchantEventData extends Model {
    /** @param array{'object': object{'activation_limit': int|null, 'active_activation_count': int, 'created_at': string, 'customer'?: mixed, 'customer_id': string|null, 'expires_at': string|null, 'key_last4': string|null, 'license_key_id': string, 'license_key_pool_id': string|null, 'metadata': mixed, 'order'?: mixed, 'order_id': string|null, 'order_line_item_id': string|null, 'product_id': string, 'restrictions': list<mixed>, 'source': string, 'status': string, 'subscription_id': string|null, 'subscription_line_item_id': string|null, 'supported_actions': list<string>, 'unit_ordinal': int, 'updated_at': string, 'variant_id': string, 'version': int}, 'previous_attributes'?: object{'activation_limit'?: mixed, 'active_activation_count'?: mixed, 'created_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'expires_at'?: mixed, 'key_last4'?: mixed, 'license_key_id'?: mixed, 'license_key_pool_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'product_id'?: mixed, 'restrictions'?: mixed, 'source'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'subscription_line_item_id'?: mixed, 'supported_actions'?: mixed, 'unit_ordinal'?: mixed, 'updated_at'?: mixed, 'variant_id'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyUpdatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return LicenseKeyUpdatedMerchantEventDataObject
     */
    public function getObject(): LicenseKeyUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?LicenseKeyUpdatedMerchantEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?LicenseKeyUpdatedMerchantEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
