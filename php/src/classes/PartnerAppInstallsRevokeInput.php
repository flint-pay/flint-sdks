<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $partner_app_install_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppInstallsRevokeInput extends Model {
    /** @param array{'partner_app_install_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallsRevokeInput')); }
    /** Flint partner app install ID. Example: "pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
}
