<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $customer_facing_name
 * @property-read string|null $deferred_promotion_id
 * @property-read mixed $promotion_code
 * @property-read string|null $promotion_id
 * Presence-aware response; omitted optional fields return null. */
final class DeferredPromotionPreviousAttributes extends Model {
    /** @param array{'customer_facing_name'?: mixed, 'deferred_promotion_id'?: mixed, 'promotion_code'?: mixed, 'promotion_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeferredPromotionPreviousAttributes')); }
    /** Name the buyer sees for the promotion, fixed when it was accepted at signup. anyOf[1] (Value): string. Name the buyer sees for the promotion, fixed when it was accepted at signup. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerFacingName(): string|null { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. anyOf[1] (Value): string. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeferredPromotionId(): string|null { return $this->get('deferred_promotion_id'); }
    public function hasDeferredPromotionId(): bool { return $this->has('deferred_promotion_id'); }
    /** Promotion code accepted at signup. Null when the promotion was applied by ID. anyOf[1] (Value): string or null. Promotion code accepted at signup. Null when the promotion was applied by ID. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPromotionCode(): mixed { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** ID of the promotion accepted for the subscription. anyOf[1] (Value): string. ID of the promotion accepted for the subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
}
