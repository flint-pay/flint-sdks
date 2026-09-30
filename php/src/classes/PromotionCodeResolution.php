<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Promotion $promotion
 * @property-read PromotionCode $promotion_code
 * Presence-aware response; omitted fields throw when accessed. */
final class PromotionCodeResolution extends Model {
    /** @param array{'promotion': mixed, 'promotion_code': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeResolution')); }
    /** @return Promotion
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): Promotion { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
    /** @return PromotionCode
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): PromotionCode { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
}
