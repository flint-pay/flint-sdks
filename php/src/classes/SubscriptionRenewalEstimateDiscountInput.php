<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read string $name
 * @property-read string|null $promotion_id
 * @property-read string $source
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionRenewalEstimateDiscountInput extends Model {
    /** @param array{'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'name': string, 'promotion_id': string|null, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalEstimateDiscountInput')); }
    /** Amount the discount takes off the estimate. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** Customer-facing name of the discount, or its internal name when it has none.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Promotion ID for a promotion discount. `null` when the discount is unused-time credit or proration, which have no promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * @return string|null
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** What the discount comes from. Each value says what it means. Value enum: "promotion", "plan_change_credit", "proration".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
