<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $merchant_billing_invoice_line_item_id
 * @property-read string|null $name
 * @property-read int|null $quantity
 * @property-read MoneyValuePreviousAttributes|null $total_money
 * @property-read string|null $type
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingInvoiceLineItemPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'merchant_billing_invoice_line_item_id'?: mixed, 'name'?: mixed, 'quantity'?: mixed, 'total_money'?: mixed, 'type'?: mixed, 'unit_price_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceLineItemPreviousAttributes')); }
    /** When Flint added this line to the invoice. anyOf[1] (Value): string. When Flint added this line to the invoice. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Stable identifier of this line item. anyOf[1] (Value): string. Stable identifier of this line item. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantBillingInvoiceLineItemId(): string|null { return $this->get('merchant_billing_invoice_line_item_id'); }
    public function hasMerchantBillingInvoiceLineItemId(): bool { return $this->has('merchant_billing_invoice_line_item_id'); }
    /** Name of the subscription charge or credit. anyOf[1] (Value): string. Name of the subscription charge or credit. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Unsigned line total, calculated as quantity multiplied by unit_price_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line adds a subscription charge or applies credit. Value enum: "subscription", "credit". anyOf[1] (Value): string. Whether the line adds a subscription charge or applies credit. Value enum: "subscription", "credit". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Unsigned price of one unit. total_money is quantity times this amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
