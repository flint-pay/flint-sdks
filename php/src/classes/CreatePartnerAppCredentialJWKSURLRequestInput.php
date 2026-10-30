<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PartnerAppCredentialJWKSURLRequestInput|array<array-key, mixed>|\stdClass $jwks_url
 * @property-read string $name
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppCredentialJWKSURLRequestInput extends Model {
    /** @param array{'jwks_url': PartnerAppCredentialJWKSURLRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppCredentialJWKSURLRequestInput')); }
    /** A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential.
     * @return PartnerAppCredentialJWKSURLRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When jwks_url is omitted; use hasJwksUrl() or valueOrDefault().
     */
    public function getJwksUrl(): mixed { return $this->get('jwks_url'); }
    public function hasJwksUrl(): bool { return $this->has('jwks_url'); }
    /** Optional name to identify this credential. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Credential type. Value enum: "jwks_url".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
