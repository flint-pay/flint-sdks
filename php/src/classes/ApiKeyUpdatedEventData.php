<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ApiKeyUpdatedEventDataObject $object
 * @property-read ?ApiKeyUpdatedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class ApiKeyUpdatedEventData extends Model {
    /** @param array{'object': object{'access': string, 'api_key_id': string, 'created_at': string, 'created_by'?: mixed, 'created_by_user_id'?: string, 'expires_at'?: string, 'key_prefix': string, 'last_used_at'?: string, 'merchant_id': string, 'name': string, 'partner_app_install_id': string|null, 'revoked_at'?: string, 'sandbox_id'?: string, 'scopes': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'access'?: mixed, 'api_key_id'?: mixed, 'created_at'?: mixed, 'created_by'?: mixed, 'created_by_user_id'?: mixed, 'expires_at'?: mixed, 'key_prefix'?: mixed, 'last_used_at'?: mixed, 'merchant_id'?: mixed, 'name'?: mixed, 'partner_app_install_id'?: mixed, 'revoked_at'?: mixed, 'sandbox_id'?: mixed, 'scopes'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ApiKeyUpdatedEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return ApiKeyUpdatedEventDataObject
     */
    public function getObject(): ApiKeyUpdatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?ApiKeyUpdatedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?ApiKeyUpdatedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
