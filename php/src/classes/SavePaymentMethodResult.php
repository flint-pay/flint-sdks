<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripeClientSetup $client_setup
 * @property-read PaymentMethod $payment_method
 * Presence-aware response; omitted fields throw when accessed. */
final class SavePaymentMethodResult extends Model {
    /** @param array{'client_setup'?: mixed, 'payment_method': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SavePaymentMethodResult')); }
    /** @return StripeClientSetup
     * @throws SdkError When client_setup is omitted; use hasClientSetup() or valueOrDefault().
     */
    public function getClientSetup(): StripeClientSetup { return $this->get('client_setup'); }
    public function hasClientSetup(): bool { return $this->has('client_setup'); }
    /** @return PaymentMethod
     * @throws SdkError When payment_method is omitted; use hasPaymentMethod() or valueOrDefault().
     */
    public function getPaymentMethod(): PaymentMethod { return $this->get('payment_method'); }
    public function hasPaymentMethod(): bool { return $this->has('payment_method'); }
}
