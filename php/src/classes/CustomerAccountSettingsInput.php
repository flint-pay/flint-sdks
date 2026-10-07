<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerCapabilitiesInput|array<array-key, mixed>|\stdClass $buyer_capabilities
 * @property-read string $merchant_account_url
 * @property-read string $mode
 * @property-read CustomerAccountPresentationInput|array<array-key, mixed>|\stdClass $presentation
 * @property-read CustomerAccountRouteTemplatesInput|array<array-key, mixed>|\stdClass $route_templates
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccountSettingsInput extends Model {
    /** @param array{'buyer_capabilities'?: BuyerCapabilitiesInput|array<array-key, mixed>|\stdClass, 'merchant_account_url'?: string, 'mode'?: string, 'presentation'?: CustomerAccountPresentationInput|array<array-key, mixed>|\stdClass, 'route_templates'?: CustomerAccountRouteTemplatesInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountSettingsInput')); }
    /** @return BuyerCapabilitiesInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_capabilities is omitted; use hasBuyerCapabilities() or valueOrDefault().
     */
    public function getBuyerCapabilities(): mixed { return $this->get('buyer_capabilities'); }
    public function hasBuyerCapabilities(): bool { return $this->has('buyer_capabilities'); }
    /** @return string
     * @throws SdkError When merchant_account_url is omitted; use hasMerchantAccountUrl() or valueOrDefault().
     */
    public function getMerchantAccountUrl(): string { return $this->get('merchant_account_url'); }
    public function hasMerchantAccountUrl(): bool { return $this->has('merchant_account_url'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return CustomerAccountPresentationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When presentation is omitted; use hasPresentation() or valueOrDefault().
     */
    public function getPresentation(): mixed { return $this->get('presentation'); }
    public function hasPresentation(): bool { return $this->has('presentation'); }
    /** @return CustomerAccountRouteTemplatesInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When route_templates is omitted; use hasRouteTemplates() or valueOrDefault().
     */
    public function getRouteTemplates(): mixed { return $this->get('route_templates'); }
    public function hasRouteTemplates(): bool { return $this->has('route_templates'); }
}
