<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $created_at
 * @property-read string $description
 * @property-read string $line_type
 * @property-read string $merchant_subscription_invoice_line_id
 * @property-read string $quantity
 * @property-read MoneyValue $unit_amount_money
 * Presence-aware response; omitted fields throw when accessed. */
final class MerchantSubscriptionInvoiceLine extends Model {
    /** @param array{'amount_money': mixed, 'created_at': string, 'description': string, 'line_type': string, 'merchant_subscription_invoice_line_id': string, 'quantity': string, 'unit_amount_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSubscriptionInvoiceLine')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When line_type is omitted; use hasLineType() or valueOrDefault().
     */
    public function getLineType(): string { return $this->get('line_type'); }
    public function hasLineType(): bool { return $this->has('line_type'); }
    /** @return string
     * @throws SdkError When merchant_subscription_invoice_line_id is omitted; use hasMerchantSubscriptionInvoiceLineId() or valueOrDefault().
     */
    public function getMerchantSubscriptionInvoiceLineId(): string { return $this->get('merchant_subscription_invoice_line_id'); }
    public function hasMerchantSubscriptionInvoiceLineId(): bool { return $this->has('merchant_subscription_invoice_line_id'); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return MoneyValue
     * @throws SdkError When unit_amount_money is omitted; use hasUnitAmountMoney() or valueOrDefault().
     */
    public function getUnitAmountMoney(): MoneyValue { return $this->get('unit_amount_money'); }
    public function hasUnitAmountMoney(): bool { return $this->has('unit_amount_money'); }
}
