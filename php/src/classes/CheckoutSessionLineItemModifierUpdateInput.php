<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $checkout_total_money
 * @property-read OrderLineItemInput|array<array-key, mixed>|\stdClass $line_item
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $payment_amount_money
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionLineItemModifierUpdateInput extends Model {
    /** @param array{'checkout_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'line_item': OrderLineItemInput|array<array-key, mixed>|\stdClass, 'payment_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionLineItemModifierUpdateInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When checkout_total_money is omitted; use hasCheckoutTotalMoney() or valueOrDefault().
     */
    public function getCheckoutTotalMoney(): mixed { return $this->get('checkout_total_money'); }
    public function hasCheckoutTotalMoney(): bool { return $this->has('checkout_total_money'); }
    /** @return OrderLineItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When line_item is omitted; use hasLineItem() or valueOrDefault().
     */
    public function getLineItem(): mixed { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_amount_money is omitted; use hasPaymentAmountMoney() or valueOrDefault().
     */
    public function getPaymentAmountMoney(): mixed { return $this->get('payment_amount_money'); }
    public function hasPaymentAmountMoney(): bool { return $this->has('payment_amount_money'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
