<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read StripePaymentClientAction $stripe
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentClientAction extends Model {
    /** @param array{'stripe': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentClientAction')); }
    /** @return StripePaymentClientAction
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): StripePaymentClientAction { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
