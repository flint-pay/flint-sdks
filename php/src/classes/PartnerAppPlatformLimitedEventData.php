<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PartnerAppPlatformLimitedEventDataObject $object
 * @property-read ?PartnerAppPlatformLimitedEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformLimitedEventData extends Model {
    /** @param array{'object': object{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string, 'api_version_previous'?: string, 'api_version_rollback_expires_at'?: string, 'client_id': string, 'client_secret_enabled': bool, 'client_secret_last_used_at': string|null, 'created_at': string, 'default_requested_permissions': list<string>, 'merchant_action_routing'?: mixed, 'merchant_action_url'?: string, 'name': string, 'partner_app_id': string, 'payment_splits'?: mixed, 'permission_manifest': list<mixed>, 'platform': mixed, 'platform_fee_cap'?: mixed, 'platform_profile'?: mixed, 'previous_secret_expires_at'?: string, 'redirect_uris': list<string>, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: object{'allowed_scopes'?: mixed, 'api_version'?: mixed, 'api_version_changed_at'?: mixed, 'api_version_previous'?: mixed, 'api_version_rollback_expires_at'?: mixed, 'client_id'?: mixed, 'client_secret_enabled'?: mixed, 'client_secret_last_used_at'?: mixed, 'created_at'?: mixed, 'default_requested_permissions'?: mixed, 'merchant_action_routing'?: mixed, 'merchant_action_url'?: mixed, 'name'?: mixed, 'partner_app_id'?: mixed, 'payment_splits'?: mixed, 'permission_manifest'?: mixed, 'platform'?: mixed, 'platform_fee_cap'?: mixed, 'platform_profile'?: mixed, 'previous_secret_expires_at'?: mixed, 'redirect_uris'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformLimitedEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PartnerAppPlatformLimitedEventDataObject
     */
    public function getObject(): PartnerAppPlatformLimitedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PartnerAppPlatformLimitedEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PartnerAppPlatformLimitedEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
