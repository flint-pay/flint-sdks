<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $merchant_billing_invoice_line_item_id
 * @property-read string $name
 * @property-read int $quantity
 * @property-read MoneyValue $total_money
 * @property-read string $type
 * @property-read MoneyValue $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingInvoiceLineItem extends Model {
    /** @param array{'created_at': string, 'merchant_billing_invoice_line_item_id': string, 'name': string, 'quantity': int, 'total_money': mixed, 'type': string, 'unit_price_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceLineItem')); }
    /** When Flint added this line to the invoice. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Stable identifier of this line item.
     * @return string
     */
    public function getMerchantBillingInvoiceLineItemId(): string { return $this->get('merchant_billing_invoice_line_item_id'); }
    public function hasMerchantBillingInvoiceLineItemId(): bool { return $this->has('merchant_billing_invoice_line_item_id'); }
    /** Name of the subscription charge or credit.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTotalMoney(): MoneyValue { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Whether the line adds a subscription charge or applies credit. Value enum: "subscription", "credit".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Unsigned price of one unit. total_money is quantity times this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
