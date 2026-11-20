<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PartnerAppInstallUpdatedEventDataObject $object
 * @property-read ?PartnerAppInstallUpdatedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppInstallUpdatedEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': \stdClass, 'previous_attributes'?: object{'created_at'?: mixed, 'environment_grants'?: mixed, 'installed_by_user_id'?: mixed, 'merchant_id'?: mixed, 'merchant_signup_id'?: mixed, 'partner_app_id'?: mixed, 'partner_app_install_id'?: mixed, 'partner_app_name'?: mixed, 'revoked_at'?: mixed, 'revoked_by'?: mixed, 'revoked_by_user_id'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallUpdatedEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `platform_contact`.
     * @return PartnerAppInstallUpdatedEventDataObject
     */
    public function getObject(): PartnerAppInstallUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PartnerAppInstallUpdatedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PartnerAppInstallUpdatedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
