<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PendingPaymentActionSetupPaymentSourceSubjectInput extends Model {
    /** @param array{'payment_method_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionSetupPaymentSourceSubjectInput')); }
    /** @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
