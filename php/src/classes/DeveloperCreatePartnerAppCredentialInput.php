<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $partner_app_id
 * @property-read array{'name'?: string, 'public_key': mixed, 'type': string}|object|array{'jwks_url': mixed, 'name'?: string, 'type': string}|object|array{'name'?: string, 'type': string, 'workload_identity': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperCreatePartnerAppCredentialInput extends Model {
    /** @param array{'partner_app_id': string, 'Idempotency-Key'?: string, 'body': array{'name'?: string, 'public_key': mixed, 'type': string}|object|array{'jwks_url': mixed, 'name'?: string, 'type': string}|object|array{'name'?: string, 'type': string, 'workload_identity': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperCreatePartnerAppCredentialInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): Alternative shapes (see declared variants). An immutable public key, JWKS URL, or workload identity credential for partner app client authentication.
     * @return array{'name'?: string, 'public_key': mixed, 'type': string}|object|array{'jwks_url': mixed, 'name'?: string, 'type': string}|object|array{'name'?: string, 'type': string, 'workload_identity': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
