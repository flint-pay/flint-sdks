<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'payment_intent_id': string, ...}|object $payment_intent
 * @property-read array{'payment_method_id': string, ...}|object $setup_payment_source
 * Presence-aware input; omitted fields throw when accessed. */
final class PendingPaymentActionSubjectInput extends Model {
    /** @param array{'payment_intent'?: array{'payment_intent_id': string, ...}|object, 'setup_payment_source'?: array{'payment_method_id': string, ...}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSubjectInput')); }
    /** @return array{'payment_intent_id': string, ...}|object
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): array|object { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return array{'payment_method_id': string, ...}|object
     * @throws SdkError When setup_payment_source is omitted; use hasSetupPaymentSource() or valueOrDefault().
     */
    public function getSetupPaymentSource(): array|object { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
