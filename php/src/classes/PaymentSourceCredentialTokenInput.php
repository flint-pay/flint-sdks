<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credential_type
 * @property-read string $token
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialTokenInput extends Model {
    /** @param array{'credential_type': string, 'token': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialTokenInput')); }
    /** Shape $ (Value): string.  Value enum: "token".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Shape $ (Value): string. Opaque processor or browser payment source token. minLength: 1.
     * @return string
     * @throws SdkError When token is omitted; use hasToken() or valueOrDefault().
     */
    public function getToken(): string { return $this->get('token'); }
    public function hasToken(): bool { return $this->has('token'); }
}
