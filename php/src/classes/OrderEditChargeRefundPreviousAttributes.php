<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $amount_money
 * @property-read string|null $order_charge_id
 * @property-read mixed $refund_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditChargeRefundPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'order_charge_id'?: mixed, 'refund_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditChargeRefundPreviousAttributes')); }
    /** The charge value released. The order no longer owes it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The order charge whose value is released. anyOf[1] (Value): string. The order charge whose value is released. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** The part of amount_money refunded to the buyer. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundMoney(): mixed { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
}
