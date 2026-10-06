<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateOrderDiscountInput|array<array-key, mixed>|\stdClass $discount
 * @property-read string $order_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DiscountPreviewRequestInput extends Model {
    /** @param array{'discount'?: CreateOrderDiscountInput|array<array-key, mixed>|\stdClass, 'order_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewRequestInput')); }
    /** @return CreateOrderDiscountInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount is omitted; use hasDiscount() or valueOrDefault().
     */
    public function getDiscount(): mixed { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
