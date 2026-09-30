<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $line_type
 * @property-read string $merchant_subscription_invoice_line_id
 * @property-read string $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_amount_money
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSubscriptionInvoiceLineInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'description': string, 'line_type': string, 'merchant_subscription_invoice_line_id': string, 'quantity': string, 'unit_amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSubscriptionInvoiceLineInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
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
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_amount_money is omitted; use hasUnitAmountMoney() or valueOrDefault().
     */
    public function getUnitAmountMoney(): mixed { return $this->get('unit_amount_money'); }
    public function hasUnitAmountMoney(): bool { return $this->has('unit_amount_money'); }
}
