<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $promotion_code
 * @property-read string $promotion_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionRefRequestInput extends Model {
    /** @param array{'promotion_code'?: string, 'promotion_id': string}|object|array{'promotion_code': string, 'promotion_id'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRefRequestInput')); }
    /** Human-entered promotion code to apply. minLength: 1.
     * @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Promotion to apply by ID, including a code-gated promotion applied without a code. Counts only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
}
