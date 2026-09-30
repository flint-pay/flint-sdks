<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripeClientSetupInput|array<array-key, mixed>|\stdClass $client_setup
 * @property-read PaymentMethodInput|array<array-key, mixed>|\stdClass $payment_method
 * Presence-aware input; omitted fields throw when accessed. */
final class SavePaymentMethodResultInput extends Model {
    /** @param array{'client_setup'?: StripeClientSetupInput|array<array-key, mixed>|\stdClass, 'payment_method': PaymentMethodInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SavePaymentMethodResultInput')); }
    /** @return StripeClientSetupInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_setup is omitted; use hasClientSetup() or valueOrDefault().
     */
    public function getClientSetup(): mixed { return $this->get('client_setup'); }
    public function hasClientSetup(): bool { return $this->has('client_setup'); }
    /** @return PaymentMethodInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_method is omitted; use hasPaymentMethod() or valueOrDefault().
     */
    public function getPaymentMethod(): mixed { return $this->get('payment_method'); }
    public function hasPaymentMethod(): bool { return $this->has('payment_method'); }
}
