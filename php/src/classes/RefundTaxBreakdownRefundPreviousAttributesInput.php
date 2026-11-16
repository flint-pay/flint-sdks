<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_charge_id
 * @property-read string|null $order_id
 * @property-read string|null $tax_breakdown_id
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $tax_money
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundTaxBreakdownRefundPreviousAttributesInput extends Model {
    /** @param array{'order_charge_id'?: string|null, 'order_id'?: string|null, 'tax_breakdown_id'?: string|null, 'tax_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundTaxBreakdownRefundPreviousAttributesInput')); }
    /** ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. anyOf[1] (Value): string. ID of the order charge whose tax this reverses. Present only in the refund's top-level `tax_breakdown_refunds`. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): mixed { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** ID of the order that owns this tax breakdown and its line item or charge, when present. anyOf[1] (Value): string. ID of the order that owns this tax breakdown and its line item or charge, when present. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the tax breakdown (one jurisdiction's tax) this entry reverses. anyOf[1] (Value): string. ID of the tax breakdown (one jurisdiction's tax) this entry reverses. Example: "txb_01KEZF7C00SHMN8QWCA8PT1HSB". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tax_breakdown_id is omitted; use hasTaxBreakdownId() or valueOrDefault().
     */
    public function getTaxBreakdownId(): mixed { return $this->get('tax_breakdown_id'); }
    public function hasTaxBreakdownId(): bool { return $this->has('tax_breakdown_id'); }
    /** Tax reversed for this breakdown. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
}
