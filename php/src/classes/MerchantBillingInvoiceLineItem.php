<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $merchant_billing_invoice_line_item_id
 * @property-read string $name
 * @property-read string $quantity
 * @property-read MoneyValue $total_money
 * @property-read string $type
 * @property-read MoneyValue $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingInvoiceLineItem extends Model {
    /** @param array{'created_at': string, 'merchant_billing_invoice_line_item_id': string, 'name': string, 'quantity': string, 'total_money': mixed, 'type': string, 'unit_price_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceLineItem')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantBillingInvoiceLineItemId(): string { return $this->get('merchant_billing_invoice_line_item_id'); }
    public function hasMerchantBillingInvoiceLineItemId(): bool { return $this->has('merchant_billing_invoice_line_item_id'); }
    /** Shape $ (Value): string. Name of the subscription charge or credit.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see MoneyValue}. Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. Whether the line adds a subscription charge or applies credit. Value enum: "subscription", "credit".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
