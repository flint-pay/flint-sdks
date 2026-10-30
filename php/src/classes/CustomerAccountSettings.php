<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerCapabilities $buyer_capabilities
 * @property-read string|null $merchant_account_url
 * @property-read ?string $mode
 * @property-read ?CustomerAccountPresentation $presentation
 * @property-read ?CustomerAccountRouteTemplates $route_templates
 * Presence-aware response; omitted optional fields return null. */
final class CustomerAccountSettings extends Model {
    /** @param array{'buyer_capabilities'?: mixed, 'merchant_account_url'?: string|null, 'mode'?: string, 'presentation'?: mixed, 'route_templates'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccountSettings')); }
    /** Replaced as a whole: send every field you want to keep. What buyers may do to their own subscriptions in Flint's buyer account or through a customer session, in either mode. Merchant credentials are not bound by it. Buyers can always cancel. Written as a whole: an update that includes buyer_capabilities replaces the stored value, and each field it omits takes its default. Effective settings include every default. What a store lets buyers do to their own subscriptions. Send at least one field; each field you omit takes its default. minProperties: 1.
     * @return ?BuyerCapabilities
     */
    public function getBuyerCapabilities(): ?BuyerCapabilities { return $this->get('buyer_capabilities'); }
    public function hasBuyerCapabilities(): bool { return $this->has('buyer_capabilities'); }
    /** Send null to clear it. minLength: 1.
     * @return string|null
     */
    public function getMerchantAccountUrl(): string|null { return $this->get('merchant_account_url'); }
    public function hasMerchantAccountUrl(): bool { return $this->has('merchant_account_url'); }
    /** Value enum: "flint_hosted", "merchant_hosted".
     * @return ?string
     */
    public function getMode(): ?string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. How the Flint-hosted customer account is presented. The account's hostname is a custom domain; manage it with /v1/custom-domains. Send null to clear a value.
     * @return ?CustomerAccountPresentation
     */
    public function getPresentation(): ?CustomerAccountPresentation { return $this->get('presentation'); }
    public function hasPresentation(): bool { return $this->has('presentation'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.
     * @return ?CustomerAccountRouteTemplates
     */
    public function getRouteTemplates(): ?CustomerAccountRouteTemplates { return $this->get('route_templates'); }
    public function hasRouteTemplates(): bool { return $this->has('route_templates'); }
}
