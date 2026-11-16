<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $max_total_money
 * @property-read string|null $payment_option
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentOptionLimitPreviousAttributesInput extends Model {
    /** @param array{'max_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'payment_option'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentOptionLimitPreviousAttributesInput')); }
    /** The largest invoice total, in this currency, for which Flint offers the option. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When max_total_money is omitted; use hasMaxTotalMoney() or valueOrDefault().
     */
    public function getMaxTotalMoney(): mixed { return $this->get('max_total_money'); }
    public function hasMaxTotalMoney(): bool { return $this->has('max_total_money'); }
    /** The payment option this cap applies to. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1] (Value): string. The payment option this cap applies to. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_option is omitted; use hasPaymentOption() or valueOrDefault().
     */
    public function getPaymentOption(): mixed { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
}
