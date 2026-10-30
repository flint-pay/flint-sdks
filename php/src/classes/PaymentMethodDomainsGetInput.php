<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_method_domain_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodDomainsGetInput extends Model {
    /** @param array{'payment_method_domain_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomainsGetInput')); }
    /** Flint payment method domain ID. Example: "pmdom_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_method_domain_id is omitted; use hasPaymentMethodDomainId() or valueOrDefault().
     */
    public function getPaymentMethodDomainId(): string { return $this->get('payment_method_domain_id'); }
    public function hasPaymentMethodDomainId(): bool { return $this->has('payment_method_domain_id'); }
}
