<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $contract_url
 * @property-read string $refund_policy_url
 * @property-read bool $require_terms_of_service
 * @property-read string $shipping_policy_url
 * @property-read string $terms_of_service_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutLegalConfigInput extends Model {
    /** @param array{'contract_url'?: string, 'refund_policy_url'?: string, 'require_terms_of_service'?: bool, 'shipping_policy_url'?: string, 'terms_of_service_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutLegalConfigInput')); }
    /** @return string
     * @throws SdkError When contract_url is omitted; use hasContractUrl() or valueOrDefault().
     */
    public function getContractUrl(): string { return $this->get('contract_url'); }
    public function hasContractUrl(): bool { return $this->has('contract_url'); }
    /** @return string
     * @throws SdkError When refund_policy_url is omitted; use hasRefundPolicyUrl() or valueOrDefault().
     */
    public function getRefundPolicyUrl(): string { return $this->get('refund_policy_url'); }
    public function hasRefundPolicyUrl(): bool { return $this->has('refund_policy_url'); }
    /** @return bool
     * @throws SdkError When require_terms_of_service is omitted; use hasRequireTermsOfService() or valueOrDefault().
     */
    public function getRequireTermsOfService(): bool { return $this->get('require_terms_of_service'); }
    public function hasRequireTermsOfService(): bool { return $this->has('require_terms_of_service'); }
    /** @return string
     * @throws SdkError When shipping_policy_url is omitted; use hasShippingPolicyUrl() or valueOrDefault().
     */
    public function getShippingPolicyUrl(): string { return $this->get('shipping_policy_url'); }
    public function hasShippingPolicyUrl(): bool { return $this->has('shipping_policy_url'); }
    /** @return string
     * @throws SdkError When terms_of_service_url is omitted; use hasTermsOfServiceUrl() or valueOrDefault().
     */
    public function getTermsOfServiceUrl(): string { return $this->get('terms_of_service_url'); }
    public function hasTermsOfServiceUrl(): bool { return $this->has('terms_of_service_url'); }
}
