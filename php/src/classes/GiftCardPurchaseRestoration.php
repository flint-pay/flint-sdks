<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_line_item_id
 * @property-read string $original_gift_card_id
 * @property-read string $original_gift_card_load_id
 * @property-read string $purchase_refund_allocation_id
 * @property-read string $unit_ordinal
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardPurchaseRestoration extends Model {
    /** @param array{'order_line_item_id': string, 'original_gift_card_id': string, 'original_gift_card_load_id': string, 'purchase_refund_allocation_id': string, 'unit_ordinal': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRestoration')); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When original_gift_card_id is omitted; use hasOriginalGiftCardId() or valueOrDefault().
     */
    public function getOriginalGiftCardId(): string { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** @return string
     * @throws SdkError When original_gift_card_load_id is omitted; use hasOriginalGiftCardLoadId() or valueOrDefault().
     */
    public function getOriginalGiftCardLoadId(): string { return $this->get('original_gift_card_load_id'); }
    public function hasOriginalGiftCardLoadId(): bool { return $this->has('original_gift_card_load_id'); }
    /** @return string
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): string { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** @return string
     * @throws SdkError When unit_ordinal is omitted; use hasUnitOrdinal() or valueOrDefault().
     */
    public function getUnitOrdinal(): string { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
