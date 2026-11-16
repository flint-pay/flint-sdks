<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $original_gift_card_id
 * @property-read string|null $original_gift_card_load_id
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read int|null $unit_ordinal
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRestorationPreviousAttributesInput extends Model {
    /** @param array{'order_id'?: string|null, 'order_line_item_id'?: string|null, 'original_gift_card_id'?: string|null, 'original_gift_card_load_id'?: string|null, 'purchase_refund_allocation_id'?: string|null, 'unit_ordinal'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRestorationPreviousAttributesInput')); }
    /** ID of the original purchase order whose line item sold the gift card. anyOf[1] (Value): string. ID of the original purchase order whose line item sold the gift card. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the order line item that sold the gift card. anyOf[1] (Value): string. ID of the order line item that sold the gift card. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): mixed { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. anyOf[1] (Value): string. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When original_gift_card_id is omitted; use hasOriginalGiftCardId() or valueOrDefault().
     */
    public function getOriginalGiftCardId(): mixed { return $this->get('original_gift_card_id'); }
    public function hasOriginalGiftCardId(): bool { return $this->has('original_gift_card_id'); }
    /** ID of the load on the original card that the refund or reversal removed value from. anyOf[1] (Value): string. ID of the load on the original card that the refund or reversal removed value from. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When original_gift_card_load_id is omitted; use hasOriginalGiftCardLoadId() or valueOrDefault().
     */
    public function getOriginalGiftCardLoadId(): mixed { return $this->get('original_gift_card_load_id'); }
    public function hasOriginalGiftCardLoadId(): bool { return $this->has('original_gift_card_load_id'); }
    /** ID of the purchase refund entry on the original load whose removed value this load restores. anyOf[1] (Value): string. ID of the purchase refund entry on the original load whose removed value this load restores. Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): mixed { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** Which unit of the line item's quantity the card was issued for, starting at 1. anyOf[1] (Value): integer. Which unit of the line item's quantity the card was issued for, starting at 1. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When unit_ordinal is omitted; use hasUnitOrdinal() or valueOrDefault().
     */
    public function getUnitOrdinal(): mixed { return $this->get('unit_ordinal'); }
    public function hasUnitOrdinal(): bool { return $this->has('unit_ordinal'); }
}
