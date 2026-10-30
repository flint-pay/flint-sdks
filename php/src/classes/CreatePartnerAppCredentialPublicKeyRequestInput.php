<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read PartnerAppCredentialPublicKeyRequestInput|array<array-key, mixed>|\stdClass $public_key
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppCredentialPublicKeyRequestInput extends Model {
    /** @param array{'name'?: string, 'public_key': PartnerAppCredentialPublicKeyRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppCredentialPublicKeyRequestInput')); }
    /** Optional name to identify this credential. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The public JSON Web Key to register for client authentication.
     * @return PartnerAppCredentialPublicKeyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When public_key is omitted; use hasPublicKey() or valueOrDefault().
     */
    public function getPublicKey(): mixed { return $this->get('public_key'); }
    public function hasPublicKey(): bool { return $this->has('public_key'); }
    /** Credential type. Value enum: "public_key".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
