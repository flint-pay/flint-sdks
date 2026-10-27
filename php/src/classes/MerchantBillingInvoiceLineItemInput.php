<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $merchant_billing_invoice_line_item_id
 * @property-read string $name
 * @property-read string $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $total_money
 * @property-read string $type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingInvoiceLineItemInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'merchant_billing_invoice_line_item_id': string, 'name': string, 'quantity': string, 'total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'type': string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoiceLineItemInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_billing_invoice_line_item_id is omitted; use hasMerchantBillingInvoiceLineItemId() or valueOrDefault().
     */
    public function getMerchantBillingInvoiceLineItemId(): string { return $this->get('merchant_billing_invoice_line_item_id'); }
    public function hasMerchantBillingInvoiceLineItemId(): bool { return $this->has('merchant_billing_invoice_line_item_id'); }
    /** Shape $ (Value): string. Name of the subscription charge or credit.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Unsigned line total, calculated as quantity multiplied by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When total_money is omitted; use hasTotalMoney() or valueOrDefault().
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** Shape $ (Value): string. Whether the line adds a subscription charge or applies credit. Value enum: "subscription", "credit".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
