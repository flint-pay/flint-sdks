<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $discount_money
 * @property-read string $name
 * @property-read int $quantity
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_line_item_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $subtotal_money
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionRenewalEstimateLineItemInput extends Model {
    /** @param array{'discount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'name': string, 'quantity': int, 'subscription_id': string|null, 'subscription_line_item_id': string|null, 'subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalEstimateLineItemInput')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount_money is omitted; use hasDiscountMoney() or valueOrDefault().
     */
    public function getDiscountMoney(): mixed { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Subscription that owns subscription_line_item_id. Null when subscription_line_item_id is null for new or replacement lines. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string|null
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The saved subscription line ID; null when previewing new or replacement lines. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
     * @return string|null
     * @throws SdkError When subscription_line_item_id is omitted; use hasSubscriptionLineItemId() or valueOrDefault().
     */
    public function getSubscriptionLineItemId(): string|null { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subtotal_money is omitted; use hasSubtotalMoney() or valueOrDefault().
     */
    public function getSubtotalMoney(): mixed { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
}
