<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PendingPaymentActionPaymentIntentSubjectInput|array<array-key, mixed>|\stdClass $payment_intent
 * @property-read PendingPaymentActionSetupPaymentSourceSubjectInput|array<array-key, mixed>|\stdClass $setup_payment_source
 * Presence-aware input; omitted fields throw when accessed. */
final class PendingPaymentActionSubjectInput extends Model {
    /** @param array{'payment_intent'?: PendingPaymentActionPaymentIntentSubjectInput|array<array-key, mixed>|\stdClass, 'setup_payment_source'?: PendingPaymentActionSetupPaymentSourceSubjectInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSubjectInput')); }
    /** @return PendingPaymentActionPaymentIntentSubjectInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_intent is omitted; use hasPaymentIntent() or valueOrDefault().
     */
    public function getPaymentIntent(): mixed { return $this->get('payment_intent'); }
    public function hasPaymentIntent(): bool { return $this->has('payment_intent'); }
    /** @return PendingPaymentActionSetupPaymentSourceSubjectInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_payment_source is omitted; use hasSetupPaymentSource() or valueOrDefault().
     */
    public function getSetupPaymentSource(): mixed { return $this->get('setup_payment_source'); }
    public function hasSetupPaymentSource(): bool { return $this->has('setup_payment_source'); }
}
