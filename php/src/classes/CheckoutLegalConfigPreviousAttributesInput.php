<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $contract_url
 * @property-read string|null $refund_policy_url
 * @property-read bool|null $require_terms_of_service
 * @property-read string|null $shipping_policy_url
 * @property-read string|null $terms_of_service_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutLegalConfigPreviousAttributesInput extends Model {
    /** @param array{'contract_url'?: string|null, 'refund_policy_url'?: string|null, 'require_terms_of_service'?: bool|null, 'shipping_policy_url'?: string|null, 'terms_of_service_url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutLegalConfigPreviousAttributesInput')); }
    /** An `https://` URL of the contract the buyer agrees to, linked in checkout. anyOf[1] (Value): string. An `https://` URL of the contract the buyer agrees to, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When contract_url is omitted; use hasContractUrl() or valueOrDefault().
     */
    public function getContractUrl(): mixed { return $this->get('contract_url'); }
    public function hasContractUrl(): bool { return $this->has('contract_url'); }
    /** An `https://` URL of your refund policy, linked in checkout. anyOf[1] (Value): string. An `https://` URL of your refund policy, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_policy_url is omitted; use hasRefundPolicyUrl() or valueOrDefault().
     */
    public function getRefundPolicyUrl(): mixed { return $this->get('refund_policy_url'); }
    public function hasRefundPolicyUrl(): bool { return $this->has('refund_policy_url'); }
    /** Whether the buyer must accept the terms of service before paying. anyOf[1] (Value): boolean. Whether the buyer must accept the terms of service before paying. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When require_terms_of_service is omitted; use hasRequireTermsOfService() or valueOrDefault().
     */
    public function getRequireTermsOfService(): mixed { return $this->get('require_terms_of_service'); }
    public function hasRequireTermsOfService(): bool { return $this->has('require_terms_of_service'); }
    /** An `https://` URL of your shipping policy, linked in checkout. anyOf[1] (Value): string. An `https://` URL of your shipping policy, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When shipping_policy_url is omitted; use hasShippingPolicyUrl() or valueOrDefault().
     */
    public function getShippingPolicyUrl(): mixed { return $this->get('shipping_policy_url'); }
    public function hasShippingPolicyUrl(): bool { return $this->has('shipping_policy_url'); }
    /** An `https://` URL of your terms of service, linked in checkout. anyOf[1] (Value): string. An `https://` URL of your terms of service, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When terms_of_service_url is omitted; use hasTermsOfServiceUrl() or valueOrDefault().
     */
    public function getTermsOfServiceUrl(): mixed { return $this->get('terms_of_service_url'); }
    public function hasTermsOfServiceUrl(): bool { return $this->has('terms_of_service_url'); }
}
