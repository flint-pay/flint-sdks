<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $max_total_money
 * @property-read string $payment_option
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentOptionLimitInput extends Model {
    /** @param array{'max_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_option': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentOptionLimitInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When max_total_money is omitted; use hasMaxTotalMoney() or valueOrDefault().
     */
    public function getMaxTotalMoney(): mixed { return $this->get('max_total_money'); }
    public function hasMaxTotalMoney(): bool { return $this->has('max_total_money'); }
    /** @return string
     * @throws SdkError When payment_option is omitted; use hasPaymentOption() or valueOrDefault().
     */
    public function getPaymentOption(): string { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
}
