<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $environment_grant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsRevokeEnvironmentGrantInput extends Model {
    /** @param array{'partner_app_id': string, 'partner_app_install_id': string, 'environment_grant_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsRevokeEnvironmentGrantInput')); }
    /** Flint partner app ID. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Flint partner app install ID. Example: "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Flint environment grant ID. Example: "egrt_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When environment_grant_id is omitted; use hasEnvironmentGrantId() or valueOrDefault().
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
}
