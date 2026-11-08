<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $based_on_order_version
 * @property-read string|\DateTimeInterface $calculated_at
 * @property-read list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass> $charge_refunds
 * @property-read string $order_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refund_money
 * @property-read list<OrderEditRemovalInput|array<array-key, mixed>|\stdClass> $remove_line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderEditPreviewInput extends Model {
    /** @param array{'based_on_order_version': int, 'calculated_at': string|\DateTimeInterface, 'charge_refunds': list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>, 'order_id': string, 'refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remove_line_items': list<OrderEditRemovalInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditPreviewInput')); }
    /** The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: int64.
     * @return int
     * @throws SdkError When based_on_order_version is omitted; use hasBasedOnOrderVersion() or valueOrDefault().
     */
    public function getBasedOnOrderVersion(): int { return $this->get('based_on_order_version'); }
    public function hasBasedOnOrderVersion(): bool { return $this->has('based_on_order_version'); }
    /** When this preview was calculated. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When calculated_at is omitted; use hasCalculatedAt() or valueOrDefault().
     */
    public function getCalculatedAt(): string|\DateTimeInterface { return $this->get('calculated_at'); }
    public function hasCalculatedAt(): bool { return $this->has('calculated_at'); }
    /** The charges that would be refunded, with the amount for each. Empty when the request lists no charges. [] (Value): {@see OrderEditChargeRefundInput}. The refund the preview would make for one order charge.
     * @return list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charge_refunds is omitted; use hasChargeRefunds() or valueOrDefault().
     */
    public function getChargeRefunds(): array { return $this->get('charge_refunds'); }
    public function hasChargeRefunds(): bool { return $this->has('charge_refunds'); }
    /** The order whose unassigned units were evaluated. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The total quantity-based item refund plus the explicit charge refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund_money is omitted; use hasRefundMoney() or valueOrDefault().
     */
    public function getRefundMoney(): mixed { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** The requested removals, in request order, each with its refund. [] (Value): {@see OrderEditRemovalInput}. The units of one order line that the preview would remove, with their refund.
     * @return list<OrderEditRemovalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When remove_line_items is omitted; use hasRemoveLineItems() or valueOrDefault().
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
}
