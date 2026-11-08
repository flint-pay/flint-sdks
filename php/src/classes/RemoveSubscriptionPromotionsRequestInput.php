<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read list<string> $promotion_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class RemoveSubscriptionPromotionsRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'promotion_ids': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RemoveSubscriptionPromotionsRequestInput')); }
    /** Remove only if this matches the subscription's current version. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Active or scheduled promotions to remove. Renewal orders created after removal omit them; paid orders and the unpaid past_due order keep their discounts. Consumed cycles are kept for reattachment. minItems: 1. maxItems: 5. uniqueItems: true. [] (Value): string. minLength: 1. pattern: ^promo_[0-9A-HJKMNP-TV-Z]{26}$. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * @return list<string>
     * @throws SdkError When promotion_ids is omitted; use hasPromotionIds() or valueOrDefault().
     */
    public function getPromotionIds(): array { return $this->get('promotion_ids'); }
    public function hasPromotionIds(): bool { return $this->has('promotion_ids'); }
}
