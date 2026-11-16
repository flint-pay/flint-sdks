<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $customer_facing_name
 * @property-read string|null $deferred_promotion_id
 * @property-read string|null $promotion_code
 * @property-read string|null $promotion_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeferredPromotionPreviousAttributesInput extends Model {
    /** @param array{'customer_facing_name'?: string|null, 'deferred_promotion_id'?: string|null, 'promotion_code'?: string|null, 'promotion_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeferredPromotionPreviousAttributesInput')); }
    /** Name the buyer sees for the promotion, fixed when it was accepted at signup. anyOf[1] (Value): string. Name the buyer sees for the promotion, fixed when it was accepted at signup. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_facing_name is omitted; use hasCustomerFacingName() or valueOrDefault().
     */
    public function getCustomerFacingName(): mixed { return $this->get('customer_facing_name'); }
    public function hasCustomerFacingName(): bool { return $this->has('customer_facing_name'); }
    /** ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. anyOf[1] (Value): string. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. Example: "dp_01KEZF7C00AZMP1PY1ER7CQ4SA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When deferred_promotion_id is omitted; use hasDeferredPromotionId() or valueOrDefault().
     */
    public function getDeferredPromotionId(): mixed { return $this->get('deferred_promotion_id'); }
    public function hasDeferredPromotionId(): bool { return $this->has('deferred_promotion_id'); }
    /** Promotion code accepted at signup. Null when the promotion was applied by ID. anyOf[1] (Value): string. Promotion code accepted at signup. Null when the promotion was applied by ID. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): mixed { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** ID of the promotion accepted for the subscription. anyOf[1] (Value): string. ID of the promotion accepted for the subscription. Example: "promo_01KEZF7C00E1JAV4M413D9DE1P". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): mixed { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
}
