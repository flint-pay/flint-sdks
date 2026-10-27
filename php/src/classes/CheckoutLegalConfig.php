<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $contract_url
 * @property-read ?string $refund_policy_url
 * @property-read ?bool $require_terms_of_service
 * @property-read ?string $shipping_policy_url
 * @property-read ?string $terms_of_service_url
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutLegalConfig extends Model {
    /** @param array{'contract_url'?: string, 'refund_policy_url'?: string, 'require_terms_of_service'?: bool, 'shipping_policy_url'?: string, 'terms_of_service_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutLegalConfig')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getContractUrl(): ?string { return $this->get('contract_url'); }
    public function hasContractUrl(): bool { return $this->has('contract_url'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getRefundPolicyUrl(): ?string { return $this->get('refund_policy_url'); }
    public function hasRefundPolicyUrl(): bool { return $this->has('refund_policy_url'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getRequireTermsOfService(): ?bool { return $this->get('require_terms_of_service'); }
    public function hasRequireTermsOfService(): bool { return $this->has('require_terms_of_service'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getShippingPolicyUrl(): ?string { return $this->get('shipping_policy_url'); }
    public function hasShippingPolicyUrl(): bool { return $this->has('shipping_policy_url'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getTermsOfServiceUrl(): ?string { return $this->get('terms_of_service_url'); }
    public function hasTermsOfServiceUrl(): bool { return $this->has('terms_of_service_url'); }
}
