<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class CreatePartnerAppCredentialRequestInput extends Model {
    /** @param array{'name'?: string, 'public_key': PartnerAppCredentialPublicKeyRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object|array{'jwks_url': PartnerAppCredentialJWKSURLRequestInput|array<array-key, mixed>|\stdClass, 'name'?: string, 'type': string}|object|array{'name'?: string, 'type': string, 'workload_identity': PartnerAppCredentialWorkloadIdentityRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePartnerAppCredentialRequestInput')); }
}
