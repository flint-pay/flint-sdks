<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'platform_profile'?: mixed, 'redirect_uris': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsCreateInput extends Model {
    /** @param array{'body': array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'platform_profile'?: mixed, 'redirect_uris': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsCreateInput')); }
    /** The request body for: Create partner app.
     * @return array{'api_version'?: string, 'client_secret_enabled'?: bool, 'default_requested_permissions'?: list<string>, 'name': string, 'permission_manifest': list<mixed>, 'platform_profile'?: mixed, 'redirect_uris': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
