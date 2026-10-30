<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $partner_app_id
 * @property-read array{'name'?: string, 'public_key': mixed, 'type': string}|object|array{'jwks_url': mixed, 'name'?: string, 'type': string}|object|array{'name'?: string, 'type': string, 'workload_identity': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsCreateCredentialInput extends Model {
    /** @param array{'partner_app_id': string, 'body': array{'name'?: string, 'public_key': mixed, 'type': string}|object|array{'jwks_url': mixed, 'name'?: string, 'type': string}|object|array{'name'?: string, 'type': string, 'workload_identity': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsCreateCredentialInput')); }
    /** Flint partner app ID. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** An immutable public key, JWKS URL, or workload identity credential for partner app client authentication. Example: {"name":"Production signing key","public_key":{"jwk":{"crv":"P-256","kid":"production-key","kty":"EC","x":"axfR8uEsQkf4vOblY6RA8ncDfYEt6zOg9KE5RdiYwpY","y":"T-NC4v4af5uO5-tKfA-eFivOM1drMV7Oy7ZAaDe_UfU"}},"type":"public_key"}.
     * @return array{'name'?: string, 'public_key': mixed, 'type': string}|object|array{'jwks_url': mixed, 'name'?: string, 'type': string}|object|array{'name'?: string, 'type': string, 'workload_identity': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
