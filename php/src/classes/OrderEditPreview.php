<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $based_on_order_version
 * @property-read string $calculated_at
 * @property-read list<OrderEditChargeRefund> $charge_refunds
 * @property-read string $order_id
 * @property-read MoneyValue $refund_money
 * @property-read list<OrderEditRemoval> $remove_line_items
 * Presence-aware response; omitted optional fields return null. */
final class OrderEditPreview extends Model {
    /** @param array{'based_on_order_version': int, 'calculated_at': string, 'charge_refunds': list<mixed>, 'order_id': string, 'refund_money': mixed, 'remove_line_items': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditPreview')); }
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
    /** The charges that would be refunded, with the amount for each. Empty when the request lists no charges. [] (Value): {@see OrderEditChargeRefund}. The refund the preview would make for one order charge.
     * @return list<OrderEditChargeRefund>
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** The order whose unassigned units were evaluated.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The total quantity-based item refund plus the explicit charge refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundMoney(): MoneyValue { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** The requested removals, in request order, each with its refund. [] (Value): {@see OrderEditRemoval}. The units of one order line that the preview would remove, with their refund.
     * @return list<OrderEditRemoval>
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
}
