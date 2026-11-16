<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $purchase_refund_allocation_id
 * @property-read string|null $refund_id
 * @property-read string|null $root_gift_card_id
 * @property-read string|null $root_gift_card_load_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $value_money
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundValueHoldPreviousAttributesInput extends Model {
    /** @param array{'purchase_refund_allocation_id'?: string|null, 'refund_id'?: string|null, 'root_gift_card_id'?: string|null, 'root_gift_card_load_id'?: string|null, 'value_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundValueHoldPreviousAttributesInput')); }
    /** ID of the pending purchase refund entry that holds the value. anyOf[1] (Value): string. ID of the pending purchase refund entry that holds the value. Example: "gcpra_01KEZF7C00HJZ2YP6AENMZK5KA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When purchase_refund_allocation_id is omitted; use hasPurchaseRefundAllocationId() or valueOrDefault().
     */
    public function getPurchaseRefundAllocationId(): mixed { return $this->get('purchase_refund_allocation_id'); }
    public function hasPurchaseRefundAllocationId(): bool { return $this->has('purchase_refund_allocation_id'); }
    /** ID of the pending refund that holds the value. anyOf[1] (Value): string. ID of the pending refund that holds the value. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): mixed { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** ID of the original card whose purchase is being refunded. anyOf[1] (Value): string. ID of the original card whose purchase is being refunded. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When root_gift_card_id is omitted; use hasRootGiftCardId() or valueOrDefault().
     */
    public function getRootGiftCardId(): mixed { return $this->get('root_gift_card_id'); }
    public function hasRootGiftCardId(): bool { return $this->has('root_gift_card_id'); }
    /** ID of the original funding load that is being refunded. anyOf[1] (Value): string. ID of the original funding load that is being refunded. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When root_gift_card_load_id is omitted; use hasRootGiftCardLoadId() or valueOrDefault().
     */
    public function getRootGiftCardLoadId(): mixed { return $this->get('root_gift_card_load_id'); }
    public function hasRootGiftCardLoadId(): bool { return $this->has('root_gift_card_load_id'); }
    /** The unspent value held. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): mixed { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
