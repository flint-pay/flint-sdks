<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $promotion_code
 * @property-read string $promotion_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionRefInputPromotionIDInput extends Model {
    /** @param array{'promotion_code'?: string, 'promotion_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRefInputPromotionIDInput')); }
    /** Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign code. minLength: 1.
     * @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. minLength: 1.
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
}
