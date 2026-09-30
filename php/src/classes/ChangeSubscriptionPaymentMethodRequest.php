<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_method_id
 * Presence-aware response; omitted fields throw when accessed. */
final class ChangeSubscriptionPaymentMethodRequest extends Model {
    /** @param array{'payment_method_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ChangeSubscriptionPaymentMethodRequest')); }
    /** @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
