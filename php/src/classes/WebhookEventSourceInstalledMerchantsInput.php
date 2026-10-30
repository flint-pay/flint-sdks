<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $environment_grant_id
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $partner_app_install_id
 * @property-read string $sandbox_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEventSourceInstalledMerchantsInput extends Model {
    /** @param array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventSourceInstalledMerchantsInput')); }
    /** environment_grant_id
     * @return string
     * @throws SdkError When environment_grant_id is omitted; use hasEnvironmentGrantId() or valueOrDefault().
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** partner_app_install_id
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** sandbox_id
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Value enum: "installed_merchants".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
