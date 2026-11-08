<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read string $description
 * @property-read LineItemFulfillmentRequestModelInput|array<array-key, mixed>|\stdClass $fulfillment
 * @property-read string $name
 * @property-read int $quantity
 * @property-read string $sku
 * @property-read string $type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReplacementLineItemInputCustomInput extends Model {
    /** @param array{'bundle_id'?: string, 'description'?: string, 'fulfillment': LineItemFulfillmentRequestModelInput|array<array-key, mixed>|\stdClass, 'name': string, 'quantity': int, 'sku'?: string, 'type': string, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'variant_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReplacementLineItemInputCustomInput')); }
    /** ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Description of the replacement item. minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Fulfillment requirements for custom replacement merchandise, using the same input as an order line. Required for custom lines; catalog lines use their catalog fulfillment profile. Fulfillment requirements you supply for an order line item, such as allowed fulfillment types, package size and weight, and origin.
     * @return LineItemFulfillmentRequestModelInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment is omitted; use hasFulfillment() or valueOrDefault().
     */
    public function getFulfillment(): mixed { return $this->get('fulfillment'); }
    public function hasFulfillment(): bool { return $this->has('fulfillment'); }
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** SKU of the replacement item. minLength: 1.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
    /** ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
