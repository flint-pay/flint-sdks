<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, mixed>|\stdClass $jwk
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppCredentialPublicKeyRequestInput extends Model {
    /** @param array{'jwk': array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppCredentialPublicKeyRequestInput')); }
    /** A public JSON Web Key. Private key and symmetric key members are rejected.
     * @return array<array-key, mixed>|\stdClass
     * @throws SdkError When jwk is omitted; use hasJwk() or valueOrDefault().
     */
    public function getJwk(): array|object { return $this->get('jwk'); }
    public function hasJwk(): bool { return $this->has('jwk'); }
}
