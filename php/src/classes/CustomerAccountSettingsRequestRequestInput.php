<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerCapabilitiesInput|array<array-key, mixed>|\stdClass $buyer_capabilities
 * @property-read string|null $merchant_account_url
 * @property-read string $mode
 * @property-read CustomerAccountPresentationRequestRequestInput|array<array-key, mixed>|\stdClass $presentation
 * @property-read CustomerAccountRouteTemplatesRequestRequestInput|array<array-key, mixed>|\stdClass $route_templates
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccountSettingsRequestRequestInput extends Model {
    /** @param array{'buyer_capabilities'?: BuyerCapabilitiesInput|array<array-key, mixed>|\stdClass, 'merchant_account_url'?: string|null, 'mode'?: string, 'presentation'?: CustomerAccountPresentationRequestRequestInput|array<array-key, mixed>|\stdClass, 'route_templates'?: CustomerAccountRouteTemplatesRequestRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountSettingsRequestRequestInput')); }
    /** Shape $ (Value): {@see BuyerCapabilitiesInput}. Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. Send at least one field; each field you omit takes its default. minProperties: 1.
     * @return BuyerCapabilitiesInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_capabilities is omitted; use hasBuyerCapabilities() or valueOrDefault().
     */
    public function getBuyerCapabilities(): mixed { return $this->get('buyer_capabilities'); }
    public function hasBuyerCapabilities(): bool { return $this->has('buyer_capabilities'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When merchant_account_url is omitted; use hasMerchantAccountUrl() or valueOrDefault().
     */
    public function getMerchantAccountUrl(): string|null { return $this->get('merchant_account_url'); }
    public function hasMerchantAccountUrl(): bool { return $this->has('merchant_account_url'); }
    /** Shape $ (Value): string.  Value enum: "flint_hosted", "merchant_hosted".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): {@see CustomerAccountPresentationRequestRequestInput}. Patch object: fields you send are applied, fields you omit are unchanged. How a customer account is presented: its account name and custom domain. Send null to clear a value.
     * @return CustomerAccountPresentationRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When presentation is omitted; use hasPresentation() or valueOrDefault().
     */
    public function getPresentation(): mixed { return $this->get('presentation'); }
    public function hasPresentation(): bool { return $this->has('presentation'); }
    /** Shape $ (Value): {@see CustomerAccountRouteTemplatesRequestRequestInput}. Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.
     * @return CustomerAccountRouteTemplatesRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When route_templates is omitted; use hasRouteTemplates() or valueOrDefault().
     */
    public function getRouteTemplates(): mixed { return $this->get('route_templates'); }
    public function hasRouteTemplates(): bool { return $this->has('route_templates'); }
}
