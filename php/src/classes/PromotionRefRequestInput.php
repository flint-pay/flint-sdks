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
    /** Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion amounts applied to orders must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: 1.
     * @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion amounts applied to orders must satisfy the order money ceiling. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. minLength: 1.
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
}
