<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderEditPreviewAddition> $add_line_items
 * @property-read MoneyValue $added_total_money
 * @property-read MoneyValue $amount_due_money
 * @property-read int $based_on_order_version
 * @property-read string $calculated_at
 * @property-read list<OrderEditChargeRefund> $charge_refunds
 * @property-read string $order_id
 * @property-read MoneyValue $refund_money
 * @property-read list<OrderEditRemoval> $remove_line_items
 * @property-read MoneyValue $removed_total_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditPreview extends Model {
    /** @param array{'add_line_items': list<mixed>, 'added_total_money': mixed, 'amount_due_money': mixed, 'based_on_order_version': int, 'calculated_at': string, 'charge_refunds': list<mixed>, 'order_id': string, 'refund_money': mixed, 'remove_line_items': list<mixed>, 'removed_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditPreview')); }
    /** The requested additions, in request order, priced and taxed. Empty when the request adds nothing. [] (Value): {@see OrderEditPreviewAddition}. A line the preview would add, priced and taxed as it would be added to the order.
     * @return list<OrderEditPreviewAddition>
     */
    public function getAddLineItems(): array { return $this->get('add_line_items'); }
    public function hasAddLineItems(): bool { return $this->has('add_line_items'); }
    /** The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAddedTotalMoney(): MoneyValue { return $this->get('added_total_money'); }
    public function hasAddedTotalMoney(): bool { return $this->has('added_total_money'); }
    /** What the added lines cost beyond the removed value and released charges. At most one of refund_money and amount_due_money is above zero, and refund_money minus amount_due_money equals removed_total_money plus the charges' amount_money minus added_total_money. An edit with an amount due can't be committed yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountDueMoney(): MoneyValue { return $this->get('amount_due_money'); }
    public function hasAmountDueMoney(): bool { return $this->has('amount_due_money'); }
    /** The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: int64.
     * @return int
     */
    public function getBasedOnOrderVersion(): int { return $this->get('based_on_order_version'); }
    public function hasBasedOnOrderVersion(): bool { return $this->has('based_on_order_version'); }
    /** When this preview was calculated. Format: date-time.
     * @return string
     */
    public function getCalculatedAt(): string { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** The charges that would be released, with the value and refund for each. Empty when the request lists no charges. [] (Value): {@see OrderEditChargeRefund}. The value an edit releases from one order charge, and the part refunded to the buyer.
     * @return list<OrderEditChargeRefund>
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** The order whose unassigned units were evaluated.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Money that would go back to the buyer. The removed value and released charges pay for added lines first, removals in request order and then charges, and the rest is refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundMoney(): MoneyValue { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** The requested removals, in request order, each with its value and refund. [] (Value): {@see OrderEditRemoval}. The units of one order line that the preview would remove, with their refund.
     * @return list<OrderEditRemoval>
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
    /** The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRemovedTotalMoney(): MoneyValue { return $this->get('removed_total_money'); }
    public function hasRemovedTotalMoney(): bool { return $this->has('removed_total_money'); }
}
