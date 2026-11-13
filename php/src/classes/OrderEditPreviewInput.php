<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<OrderEditPreviewAdditionInput|array<array-key, mixed>|\stdClass> $add_line_items
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $added_total_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_due_money
 * @property-read int $based_on_order_version
 * @property-read string|\DateTimeInterface $calculated_at
 * @property-read list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass> $charge_refunds
 * @property-read string $order_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refund_money
 * @property-read list<OrderEditRemovalInput|array<array-key, mixed>|\stdClass> $remove_line_items
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $removed_total_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderEditPreviewInput extends Model {
    /** @param array{'add_line_items': list<OrderEditPreviewAdditionInput|array<array-key, mixed>|\stdClass>, 'added_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'amount_due_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'based_on_order_version': int, 'calculated_at': string|\DateTimeInterface, 'charge_refunds': list<OrderEditChargeRefundInput|array<array-key, mixed>|\stdClass>, 'order_id': string, 'refund_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remove_line_items': list<OrderEditRemovalInput|array<array-key, mixed>|\stdClass>, 'removed_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderEditPreviewInput')); }
    /** The requested additions, in request order, priced and taxed. Empty when the request adds nothing. [] (Value): {@see OrderEditPreviewAdditionInput}. A line the preview would add, priced and taxed as it would be added to the order.
     * @return list<OrderEditPreviewAdditionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When add_line_items is omitted; use hasAddLineItems() or valueOrDefault().
     */
    public function getAddLineItems(): array { return $this->get('add_line_items'); }
    public function hasAddLineItems(): bool { return $this->has('add_line_items'); }
    /** The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When added_total_money is omitted; use hasAddedTotalMoney() or valueOrDefault().
     */
    public function getAddedTotalMoney(): mixed { return $this->get('added_total_money'); }
    public function hasAddedTotalMoney(): bool { return $this->has('added_total_money'); }
    /** What the added lines cost beyond the removed value and released charges. At most one of refund_money and amount_due_money is above zero, and refund_money minus amount_due_money equals removed_total_money plus the charges' amount_money minus added_total_money. An edit with an amount due can't be committed yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_due_money is omitted; use hasAmountDueMoney() or valueOrDefault().
     */
    public function getAmountDueMoney(): mixed { return $this->get('amount_due_money'); }
    public function hasAmountDueMoney(): bool { return $this->has('amount_due_money'); }
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
    /** The charges that would be released, with the value and refund for each. Empty when the request lists no charges. [] (Value): {@see OrderEditChargeRefundInput}. The value an edit releases from one order charge, and the part refunded to the buyer.
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
    /** Money that would go back to the buyer. The removed value and released charges pay for added lines first, removals in request order and then charges, and the rest is refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refund_money is omitted; use hasRefundMoney() or valueOrDefault().
     */
    public function getRefundMoney(): mixed { return $this->get('refund_money'); }
    public function hasRefundMoney(): bool { return $this->has('refund_money'); }
    /** The requested removals, in request order, each with its value and refund. [] (Value): {@see OrderEditRemovalInput}. The units of one order line that the preview would remove, with their refund.
     * @return list<OrderEditRemovalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When remove_line_items is omitted; use hasRemoveLineItems() or valueOrDefault().
     */
    public function getRemoveLineItems(): array { return $this->get('remove_line_items'); }
    public function hasRemoveLineItems(): bool { return $this->has('remove_line_items'); }
    /** The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When removed_total_money is omitted; use hasRemovedTotalMoney() or valueOrDefault().
     */
    public function getRemovedTotalMoney(): mixed { return $this->get('removed_total_money'); }
    public function hasRemovedTotalMoney(): bool { return $this->has('removed_total_money'); }
}
