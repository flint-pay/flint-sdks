<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $base_subtotal_money
 * @property-read array{'amount': string, 'currency': string}|object $checkout_total_money
 * @property-read string $code
 * @property-read string $conflict_reason
 * @property-read string $latest_revision
 * @property-read string $line_item_key
 * @property-read string $message
 * @property-read list<AvailableModifierGroupInput|array<array-key, mixed>|\stdClass> $modifier_choices
 * @property-read array{'amount': string, 'currency': string}|object $modifier_total_money
 * @property-read list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $order_line_item_id
 * @property-read string $param
 * @property-read array{'amount': string, 'currency': string}|object $payment_amount_money
 * @property-read array{'amount': string, 'currency': string}|object $subtotal_money
 * @property-read array{'amount': string, 'currency': string}|object $tax_money
 * @property-read array{'amount': string, 'currency': string, ...}|object $total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionRevisionConflictDetailInput extends Model {
    /** @param array{'base_subtotal_money'?: array{'amount': string, 'currency': string}|object, 'checkout_total_money'?: array{'amount': string, 'currency': string}|object, 'code': string, 'conflict_reason'?: string, 'latest_revision'?: string, 'line_item_key'?: string, 'message': string, 'modifier_choices'?: list<AvailableModifierGroupInput|array<array-key, mixed>|\stdClass>, 'modifier_total_money'?: array{'amount': string, 'currency': string}|object, 'modifiers'?: list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>, 'order_line_item_id'?: string, 'param'?: string, 'payment_amount_money'?: array{'amount': string, 'currency': string}|object, 'subtotal_money'?: array{'amount': string, 'currency': string}|object, 'tax_money'?: array{'amount': string, 'currency': string}|object, 'total_money'?: array{'amount': string, 'currency': string, ...}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionRevisionConflictDetailInput')); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When base_subtotal_money is omitted; use hasBaseSubtotalMoney() or valueOrDefault().
     */
    public function getBaseSubtotalMoney(): array|object { return $this->get('base_subtotal_money'); }
    public function hasBaseSubtotalMoney(): bool { return $this->has('base_subtotal_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When checkout_total_money is omitted; use hasCheckoutTotalMoney() or valueOrDefault().
     */
    public function getCheckoutTotalMoney(): array|object { return $this->get('checkout_total_money'); }
    public function hasCheckoutTotalMoney(): bool { return $this->has('checkout_total_money'); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return string
     * @throws SdkError When conflict_reason is omitted; use hasConflictReason() or valueOrDefault().
     */
    public function getConflictReason(): string { return $this->get('conflict_reason'); }
    public function hasConflictReason(): bool { return $this->has('conflict_reason'); }
    /** @return string
     * @throws SdkError When latest_revision is omitted; use hasLatestRevision() or valueOrDefault().
     */
    public function getLatestRevision(): string { return $this->get('latest_revision'); }
    public function hasLatestRevision(): bool { return $this->has('latest_revision'); }
    /** @return string
     * @throws SdkError When line_item_key is omitted; use hasLineItemKey() or valueOrDefault().
     */
    public function getLineItemKey(): string { return $this->get('line_item_key'); }
    public function hasLineItemKey(): bool { return $this->has('line_item_key'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return list<AvailableModifierGroupInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifier_choices is omitted; use hasModifierChoices() or valueOrDefault().
     */
    public function getModifierChoices(): array { return $this->get('modifier_choices'); }
    public function hasModifierChoices(): bool { return $this->has('modifier_choices'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When modifier_total_money is omitted; use hasModifierTotalMoney() or valueOrDefault().
     */
    public function getModifierTotalMoney(): array|object { return $this->get('modifier_total_money'); }
    public function hasModifierTotalMoney(): bool { return $this->has('modifier_total_money'); }
    /** @return list<OrderLineItemModifierInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When param is omitted; use hasParam() or valueOrDefault().
     */
    public function getParam(): string { return $this->get('param'); }
    public function hasParam(): bool { return $this->has('param'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When payment_amount_money is omitted; use hasPaymentAmountMoney() or valueOrDefault().
     */
    public function getPaymentAmountMoney(): array|object { return $this->get('payment_amount_money'); }
    public function hasPaymentAmountMoney(): bool { return $this->has('payment_amount_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): array|object { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): array|object { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** @return array{'amount': string, 'currency': string, ...}|object
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): array|object { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
}
