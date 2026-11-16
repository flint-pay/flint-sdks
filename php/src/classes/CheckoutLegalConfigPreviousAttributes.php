<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $contract_url
 * @property-read string|null $refund_policy_url
 * @property-read bool|null $require_terms_of_service
 * @property-read string|null $shipping_policy_url
 * @property-read string|null $terms_of_service_url
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutLegalConfigPreviousAttributes extends Model {
    /** @param array{'contract_url'?: mixed, 'refund_policy_url'?: mixed, 'require_terms_of_service'?: mixed, 'shipping_policy_url'?: mixed, 'terms_of_service_url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutLegalConfigPreviousAttributes')); }
    /** An `https://` URL of the contract the buyer agrees to, linked in checkout. anyOf[1] (Value): string. An `https://` URL of the contract the buyer agrees to, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getContractUrl(): string|null { return $this->get('contract_url'); }
    public function hasContractUrl(): bool { return $this->has('contract_url'); }
    /** An `https://` URL of your refund policy, linked in checkout. anyOf[1] (Value): string. An `https://` URL of your refund policy, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundPolicyUrl(): string|null { return $this->get('refund_policy_url'); }
    public function hasRefundPolicyUrl(): bool { return $this->has('refund_policy_url'); }
    /** Whether the buyer must accept the terms of service before paying. anyOf[1] (Value): boolean. Whether the buyer must accept the terms of service before paying. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequireTermsOfService(): bool|null { return $this->get('require_terms_of_service'); }
    public function hasRequireTermsOfService(): bool { return $this->has('require_terms_of_service'); }
    /** An `https://` URL of your shipping policy, linked in checkout. anyOf[1] (Value): string. An `https://` URL of your shipping policy, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippingPolicyUrl(): string|null { return $this->get('shipping_policy_url'); }
    public function hasShippingPolicyUrl(): bool { return $this->has('shipping_policy_url'); }
    /** An `https://` URL of your terms of service, linked in checkout. anyOf[1] (Value): string. An `https://` URL of your terms of service, linked in checkout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTermsOfServiceUrl(): string|null { return $this->get('terms_of_service_url'); }
    public function hasTermsOfServiceUrl(): bool { return $this->has('terms_of_service_url'); }
}
