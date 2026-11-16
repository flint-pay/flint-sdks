<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read string|null $tax_breakdown_id
 * @property-read mixed $tax_money
 * Presence-aware response; omitted optional fields return null. */
final class RefundTaxBreakdownRefundPreviousAttributes extends Model {
    /** @param array{'order_charge_id'?: mixed, 'order_id'?: mixed, 'tax_breakdown_id'?: mixed, 'tax_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundTaxBreakdownRefundPreviousAttributes')); }
    /** ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. anyOf[1] (Value): string. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderChargeId(): string|null { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order that owns this tax breakdown and its line item or charge, when present. anyOf[1] (Value): string. ID of the order that owns this tax breakdown and its line item or charge, when present. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the tax breakdown (one jurisdiction's tax) this entry reverses. anyOf[1] (Value): string. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTaxBreakdownId(): string|null { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** Tax reversed for this breakdown. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
