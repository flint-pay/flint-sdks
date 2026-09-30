<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantity_adjustment
 * @property-read bool $allow_unit_price_adjustment
 * @property-read string $bundle_id
 * @property-read string $description
 * @property-read string $key
 * @property-read int $max_quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $max_unit_price_money
 * @property-read int $min_quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $min_unit_price_money
 * @property-read string $name
 * @property-read string $payment_link_line_item_id
 * @property-read int $quantity
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $suggested_unit_price_money_options
 * @property-read OrderLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkLineItemPatchRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkLineItemPatchRequestInput')); }
    /** @return bool
     * @throws SdkError When allow_quantity_adjustment is omitted; use hasAllowQuantityAdjustment() or valueOrDefault().
     */
    public function getAllowQuantityAdjustment(): bool { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** @return bool
     * @throws SdkError When allow_unit_price_adjustment is omitted; use hasAllowUnitPriceAdjustment() or valueOrDefault().
     */
    public function getAllowUnitPriceAdjustment(): bool { return $this->get('allow_unit_price_adjustment'); }
    public function hasAllowUnitPriceAdjustment(): bool { return $this->has('allow_unit_price_adjustment'); }
    /** @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** @return int
     * @throws SdkError When max_quantity is omitted; use hasMaxQuantity() or valueOrDefault().
     */
    public function getMaxQuantity(): int { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When max_unit_price_money is omitted; use hasMaxUnitPriceMoney() or valueOrDefault().
     */
    public function getMaxUnitPriceMoney(): mixed { return $this->get('max_unit_price_money'); }
    public function hasMaxUnitPriceMoney(): bool { return $this->has('max_unit_price_money'); }
    /** @return int
     * @throws SdkError When min_quantity is omitted; use hasMinQuantity() or valueOrDefault().
     */
    public function getMinQuantity(): int { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When min_unit_price_money is omitted; use hasMinUnitPriceMoney() or valueOrDefault().
     */
    public function getMinUnitPriceMoney(): mixed { return $this->get('min_unit_price_money'); }
    public function hasMinUnitPriceMoney(): bool { return $this->has('min_unit_price_money'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When payment_link_line_item_id is omitted; use hasPaymentLinkLineItemId() or valueOrDefault().
     */
    public function getPaymentLinkLineItemId(): string { return $this->get('payment_link_line_item_id'); }
    public function hasPaymentLinkLineItemId(): bool { return $this->has('payment_link_line_item_id'); }
    /** @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When suggested_unit_price_money_options is omitted; use hasSuggestedUnitPriceMoneyOptions() or valueOrDefault().
     */
    public function getSuggestedUnitPriceMoneyOptions(): array { return $this->get('suggested_unit_price_money_options'); }
    public function hasSuggestedUnitPriceMoneyOptions(): bool { return $this->has('suggested_unit_price_money_options'); }
    /** @return OrderLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
