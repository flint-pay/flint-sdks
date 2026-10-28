<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $partner_app_id
 * @property-read string $partner_app_credential_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperDeletePartnerAppCredentialInput extends Model {
    /** @param array{'partner_app_id': string, 'partner_app_credential_id': string, 'Idempotency-Key'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperDeletePartnerAppCredentialInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_credential_id is omitted; use hasPartnerAppCredentialId() or valueOrDefault().
     */
    public function getPartnerAppCredentialId(): string { return $this->get('partner_app_credential_id'); }
    public function hasPartnerAppCredentialId(): bool { return $this->has('partner_app_credential_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
}
