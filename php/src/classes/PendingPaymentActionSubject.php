<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PendingPaymentActionPaymentIntentSubject $payment_intent
 * @property-read ChangeSubscriptionPaymentMethodRequest $setup_payment_source
 * Presence-aware response; omitted fields throw when accessed. */
final class PendingPaymentActionSubject extends Model {
    /** @param array{'payment_intent'?: mixed, 'setup_payment_source'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSubject')); }
    /** @return PendingPaymentActionPaymentIntentSubject
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): PendingPaymentActionPaymentIntentSubject { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return ChangeSubscriptionPaymentMethodRequest
     * @throws SdkError When setup_payment_source is omitted; use hasSetupPaymentSource() or valueOrDefault().
     */
    public function getSetupPaymentSource(): ChangeSubscriptionPaymentMethodRequest { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
