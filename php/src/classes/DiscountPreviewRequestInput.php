<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass}|object $discount
 * @property-read string $order_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DiscountPreviewRequestInput extends Model {
    /** @param array{'discount'?: array{'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass}|object, 'order_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewRequestInput')); }
    /** Promotion to preview. Manual discounts are not supported. promotion (Required): {@see PromotionRefRequestInput}. The promotion to evaluate for the order. Identifies the promotion to apply, by promotion code or by promotion ID.
     * @return array{'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When discount is omitted; use hasDiscount() or valueOrDefault().
     */
    public function getDiscount(): array|object { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** The order to evaluate. Checkout session credentials can use only their own order. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
