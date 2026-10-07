<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerCapabilities $buyer_capabilities
 * @property-read string $merchant_account_url
 * @property-read string $mode
 * @property-read CustomerAccountPresentation $presentation
 * @property-read CustomerAccountRouteTemplates $route_templates
 * Presence-aware response; omitted fields throw when accessed. */
final class CustomerAccountSettings extends Model {
    /** @param array{'buyer_capabilities'?: mixed, 'merchant_account_url'?: string, 'mode'?: string, 'presentation'?: mixed, 'route_templates'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountSettings')); }
    /** @return BuyerCapabilities
     * @throws SdkError When buyer_capabilities is omitted; use hasBuyerCapabilities() or valueOrDefault().
     */
    public function getBuyerCapabilities(): BuyerCapabilities { return $this->get('buyer_capabilities'); }
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
    /** @return CustomerAccountPresentation
     * @throws SdkError When presentation is omitted; use hasPresentation() or valueOrDefault().
     */
    public function getPresentation(): CustomerAccountPresentation { return $this->get('presentation'); }
    public function hasPresentation(): bool { return $this->has('presentation'); }
    /** @return CustomerAccountRouteTemplates
     * @throws SdkError When route_templates is omitted; use hasRouteTemplates() or valueOrDefault().
     */
    public function getRouteTemplates(): CustomerAccountRouteTemplates { return $this->get('route_templates'); }
    public function hasRouteTemplates(): bool { return $this->has('route_templates'); }
}
