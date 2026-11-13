<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $modes
 * @property-read string $name
 * @property-read PartnerAppCredentialPublicKeyRequestInput|array<array-key, mixed>|\stdClass $public_key
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppCredentialPublicKeyRequestInput extends Model {
    /** @param array{'modes'?: list<string>, 'name'?: string, 'public_key': PartnerAppCredentialPublicKeyRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppCredentialPublicKeyRequestInput')); }
    /** Modes this credential can mint partner app tokens for, with grant_type=client_credentials or an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or CI deployment so its key can't mint live tokens. A mint for another mode returns 400 unauthorized_client. Can't be changed after creation. minItems: 1. maxItems: 2. uniqueItems: true. [] enum: "live", "test". [] (Value): string.  Value enum: "live", "test".
     * @return list<string>
     * @throws SdkError When modes is omitted; use hasModes() or valueOrDefault().
     */
    public function getModes(): array { return $this->get('modes'); }
    public function hasModes(): bool { return $this->has('modes'); }
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
