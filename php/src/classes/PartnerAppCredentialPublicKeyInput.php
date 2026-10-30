<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, mixed>|\stdClass $jwk
 * @property-read string $jwk_thumbprint
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppCredentialPublicKeyInput extends Model {
    /** @param array{'jwk': array<array-key, mixed>|\stdClass, 'jwk_thumbprint': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialPublicKeyInput')); }
    /** jwk
     * @return array<array-key, mixed>|\stdClass
     * @throws SdkError When jwk is omitted; use hasJwk() or valueOrDefault().
     */
    public function getJwk(): array|object { return $this->get('jwk'); }
    public function hasJwk(): bool { return $this->has('jwk'); }
    /** RFC 7638 SHA-256 JWK thumbprint.
     * @return string
     * @throws SdkError When jwk_thumbprint is omitted; use hasJwkThumbprint() or valueOrDefault().
     */
    public function getJwkThumbprint(): string { return $this->get('jwk_thumbprint'); }
    public function hasJwkThumbprint(): bool { return $this->has('jwk_thumbprint'); }
}
