<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $partner_app_id
 * @property-read string $partner_app_credential_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsGetCredentialInput extends Model {
    /** @param array{'partner_app_id': string, 'partner_app_credential_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsGetCredentialInput')); }
    /** Flint partner app ID. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Flint partner app credential ID. Example: "pacr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_credential_id is omitted; use hasPartnerAppCredentialId() or valueOrDefault().
     */
    public function getPartnerAppCredentialId(): string { return $this->get('partner_app_credential_id'); }
    public function hasPartnerAppCredentialId(): bool { return $this->has('partner_app_credential_id'); }
}
