<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read EnvironmentGrantCreatedEventDataObject $object
 * @property-read ?array<array-key, mixed> $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class EnvironmentGrantCreatedEventData extends Model {
    /** @param array{'object': object{'created_at': string, 'environment_grant_id': string, 'granted_permissions': list<mixed>, 'granted_scopes': list<string>, 'merchant_readiness'?: mixed, 'mode': string, 'partner_app_install_id': string, 'payment_splits'?: mixed, 'platform_fee_cap'?: mixed, 'revoked_at'?: string, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string}, 'previous_attributes'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EnvironmentGrantCreatedEventData')); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return EnvironmentGrantCreatedEventDataObject
     */
    public function getObject(): EnvironmentGrantCreatedEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?array<array-key, mixed>
     */
    public function getPreviousAttributes(): ?array { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
