<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $max_total_money
 * @property-read string $payment_option
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoicePaymentOptionLimit extends Model {
    /** @param array{'max_total_money': mixed, 'payment_option': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentOptionLimit')); }
    /** @return MoneyValue
     * @throws SdkError When max_total_money is omitted; use hasMaxTotalMoney() or valueOrDefault().
     */
    public function getMaxTotalMoney(): MoneyValue { return $this->get('max_total_money'); }
    public function hasMaxTotalMoney(): bool { return $this->has('max_total_money'); }
    /** @return string
     * @throws SdkError When payment_option is omitted; use hasPaymentOption() or valueOrDefault().
     */
    public function getPaymentOption(): string { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
}
