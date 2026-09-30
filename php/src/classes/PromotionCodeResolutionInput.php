<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PromotionInput|array<array-key, mixed>|\stdClass $promotion
 * @property-read PromotionCodeInput|array<array-key, mixed>|\stdClass $promotion_code
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCodeResolutionInput extends Model {
    /** @param array{'promotion': PromotionInput|array<array-key, mixed>|\stdClass, 'promotion_code': PromotionCodeInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodeResolutionInput')); }
    /** @return PromotionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): mixed { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
    /** @return PromotionCodeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): mixed { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
}
