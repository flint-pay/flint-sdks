<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_facing_name
 * @property-read string $deferred_promotion_id
 * @property-read string|null $promotion_code
 * @property-read string $promotion_id
 * Presence-aware response; omitted optional fields return null. */
final class DeferredPromotion extends Model {
    /** @param array{'customer_facing_name': string, 'deferred_promotion_id': string, 'promotion_code': string|null, 'promotion_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeferredPromotion')); }
    /** Name the buyer sees for the promotion, fixed when it was accepted at signup.
     * @return string
     */
    public function getCustomerFacingName(): string { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment.
     * @return string
     */
    public function getDeferredPromotionId(): string { return $this->get('deferred_promotion_id'); }
    public function hasDeferredPromotionId(): bool { return $this->has('deferred_promotion_id'); }
    /** Promotion code accepted at signup. Null when the promotion was applied by ID.
     * @return string|null
     */
    public function getPromotionCode(): string|null { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** ID of the promotion accepted for the subscription.
     * @return string
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
}
