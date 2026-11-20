<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read LicenseKeyActivationReleasedInstalledMerchantsEventDataObject $object
 * @property-read ?LicenseKeyActivationReleasedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyActivationReleasedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'created_at': string, 'fingerprint': string|null, 'last_validated_at': string|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|null, 'status': string, 'supported_actions': list<string>, 'variant_id': string}, 'previous_attributes'?: object{'created_at'?: mixed, 'fingerprint'?: mixed, 'last_validated_at'?: mixed, 'license_key_activation_id'?: mixed, 'license_key_id'?: mixed, 'name'?: mixed, 'product_id'?: mixed, 'released_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'variant_id'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyActivationReleasedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return LicenseKeyActivationReleasedInstalledMerchantsEventDataObject
     */
    public function getObject(): LicenseKeyActivationReleasedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?LicenseKeyActivationReleasedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?LicenseKeyActivationReleasedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
