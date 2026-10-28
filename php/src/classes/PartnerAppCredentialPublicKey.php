<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, mixed> $jwk
 * @property-read string $jwk_thumbprint
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppCredentialPublicKey extends Model {
    /** @param array{'jwk': \stdClass, 'jwk_thumbprint': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialPublicKey')); }
    /** Shape $ (Value): object.
     * @return array<array-key, mixed>
     */
    public function getJwk(): array { return $this->get('jwk'); }
    public function hasJwk(): bool { return $this->has('jwk'); }
    /** Shape $ (Value): string. RFC 7638 SHA-256 JWK thumbprint.
     * @return string
     */
    public function getJwkThumbprint(): string { return $this->get('jwk_thumbprint'); }
    public function hasJwkThumbprint(): bool { return $this->has('jwk_thumbprint'); }
}
