<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $adjustment_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $applies_to
 * @property-read RefundAdjustmentReasonRequestInput|array<array-key, mixed>|\stdClass $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundLineItemAdjustmentInInput extends Model {
    /** @param array{'adjustment_type': string, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'applies_to': string, 'reason': RefundAdjustmentReasonRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundLineItemAdjustmentInInput')); }
    /** Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment".
     * @return string
     * @throws SdkError When adjustment_type is omitted; use hasAdjustmentType() or valueOrDefault().
     */
    public function getAdjustmentType(): string { return $this->get('adjustment_type'); }
    public function hasAdjustmentType(): bool { return $this->has('adjustment_type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Value enum: "none", "gross", "tax".
     * @return string
     * @throws SdkError When applies_to is omitted; use hasAppliesTo() or valueOrDefault().
     */
    public function getAppliesTo(): string { return $this->get('applies_to'); }
    public function hasAppliesTo(): bool { return $this->has('applies_to'); }
    /** The reason to record for a refund adjustment, as a `code` with an optional description.
     * @return RefundAdjustmentReasonRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
