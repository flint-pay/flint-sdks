<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $quantity
 * @property-read string $refund_timing
 * @property-read string $return_line_item_id
 * @property-read string $return_resolution_id
 * @property-read string $return_resolution_line_item_id
 * @property-read MoneyValue $returned_total_money
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnResolutionLineItem extends Model {
    /** @param array{'quantity': string, 'refund_timing'?: string, 'return_line_item_id': string, 'return_resolution_id': string, 'return_resolution_line_item_id': string, 'returned_total_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionLineItem')); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return string
     * @throws SdkError When refund_timing is omitted; use hasRefundTiming() or valueOrDefault().
     */
    public function getRefundTiming(): string { return $this->get('refund_timing'); }
    public function hasRefundTiming(): bool { return $this->has('refund_timing'); }
    /** @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** @return string
     * @throws SdkError When return_resolution_line_item_id is omitted; use hasReturnResolutionLineItemId() or valueOrDefault().
     */
    public function getReturnResolutionLineItemId(): string { return $this->get('return_resolution_line_item_id'); }
    public function hasReturnResolutionLineItemId(): bool { return $this->has('return_resolution_line_item_id'); }
    /** @return MoneyValue
     * @throws SdkError When returned_total_money is omitted; use hasReturnedTotalMoney() or valueOrDefault().
     */
    public function getReturnedTotalMoney(): MoneyValue { return $this->get('returned_total_money'); }
    public function hasReturnedTotalMoney(): bool { return $this->has('returned_total_money'); }
}
