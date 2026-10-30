<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'manual'?: ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion': array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object|array{'manual': ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion'?: array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object $discount
 * @property-read string $order_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DiscountPreviewsCreateParams extends Model {
    /** @param array{'discount'?: array{'manual'?: ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion': array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object|array{'manual': ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion'?: array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object, 'order_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewsCreateParams')); }
    /** A discount to apply when creating an order: either a manual discount or a reference to a promotion.
     * @return array{'manual'?: ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion': array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object|array{'manual': ManualDiscountRequestInput|array<array-key, mixed>|\stdClass, 'promotion'?: array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object}|object
     * @throws SdkError When discount is omitted; use hasDiscount() or valueOrDefault().
     */
    public function getDiscount(): mixed { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** The order to evaluate. Checkout session credentials can use only their own order. minLength: 1. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
