<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read EnvironmentGrantUpdatedEventDataObject $object
 * @property-read ?EnvironmentGrantUpdatedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class EnvironmentGrantUpdatedEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'created_at': string, 'environment_grant_id': string, 'granted_permissions': list<mixed>, 'granted_scopes': list<string>, 'merchant_readiness'?: mixed, 'mode': string, 'partner_app_install_id': string, 'payment_splits'?: mixed, 'platform_fee_cap'?: mixed, 'revoked_at'?: string, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string}, 'previous_attributes'?: object{'created_at'?: mixed, 'environment_grant_id'?: mixed, 'granted_permissions'?: mixed, 'granted_scopes'?: mixed, 'merchant_readiness'?: mixed, 'mode'?: mixed, 'partner_app_install_id'?: mixed, 'payment_splits'?: mixed, 'platform_fee_cap'?: mixed, 'revoked_at'?: mixed, 'revoked_by_user_id'?: mixed, 'sandbox_id'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EnvironmentGrantUpdatedEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return EnvironmentGrantUpdatedEventDataObject
     */
    public function getObject(): EnvironmentGrantUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?EnvironmentGrantUpdatedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?EnvironmentGrantUpdatedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
