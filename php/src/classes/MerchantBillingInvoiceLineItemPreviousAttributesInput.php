<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $merchant_billing_invoice_line_item_id
 * @property-read string|null $name
 * @property-read int|null $quantity
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $total_money
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingInvoiceLineItemPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'merchant_billing_invoice_line_item_id'?: string|null, 'name'?: string|null, 'quantity'?: int|null, 'total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceLineItemPreviousAttributesInput')); }
    /** When Flint added this line to the invoice. anyOf[1] (Value): string. When Flint added this line to the invoice. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Stable identifier of this line item. anyOf[1] (Value): string. Stable identifier of this line item. Example: "msinvl_01KEZF7C00YB825JWZ87C5HDF0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_billing_invoice_line_item_id is omitted; use hasMerchantBillingInvoiceLineItemId() or valueOrDefault().
     */
    public function getMerchantBillingInvoiceLineItemId(): mixed { return $this->get('merchant_billing_invoice_line_item_id'); }
    public function hasMerchantBillingInvoiceLineItemId(): bool { return $this->has('merchant_billing_invoice_line_item_id'); }
    /** Name of the subscription charge or credit. anyOf[1] (Value): string. Name of the subscription charge or credit. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Unsigned line total, calculated as quantity multiplied by unit_price_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line adds a subscription charge or applies credit. Value enum: "subscription", "credit". anyOf[1] (Value): string. Whether the line adds a subscription charge or applies credit. Value enum: "subscription", "credit". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Unsigned price of one unit. total_money is quantity times this amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
