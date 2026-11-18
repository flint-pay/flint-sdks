<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LicenseKeyActivationCreatedMerchantEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyActivationCreatedMerchantEventData extends Model {
    /** @param array{'object': object{'created_at': string, 'fingerprint': string|null, 'last_validated_at': string|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|null, 'status': string, 'supported_actions': list<string>, 'variant_id': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyActivationCreatedMerchantEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return LicenseKeyActivationCreatedMerchantEventDataObject
     */
    public function getObject(): LicenseKeyActivationCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
