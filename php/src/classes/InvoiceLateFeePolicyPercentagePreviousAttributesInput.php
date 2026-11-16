<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $application_mode
 * @property-read int|null $grace_period_days
 * @property-read int|float|null $percent
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceLateFeePolicyPercentagePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'application_mode'?: string|null, 'grace_period_days'?: int|null, 'percent'?: int|float|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeePolicyPercentagePreviousAttributesInput')); }
    /** Fixed fee in the invoice currency. Required for fixed and omitted for percentage. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Value enum: "manual", "automatic". anyOf[1] (Value): string. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum: "manual", "automatic". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When application_mode is omitted; use hasApplicationMode() or valueOrDefault().
     */
    public function getApplicationMode(): mixed { return $this->get('application_mode'); }
    public function hasApplicationMode(): bool { return $this->has('application_mode'); }
    /** Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. anyOf[1] (Value): integer. Calendar days from the start of due_date in the invoice timezone (UTC when absent) before a late fee is eligible. Never eligible before the due date ends. An on_receipt term requires at least 1 day. Format: int32. minimum: 0. maximum: 365. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When grace_period_days is omitted; use hasGracePeriodDays() or valueOrDefault().
     */
    public function getGracePeriodDays(): mixed { return $this->get('grace_period_days'); }
    public function hasGracePeriodDays(): bool { return $this->has('grace_period_days'); }
    /** Percentage applied to the fee base_outstanding_money. anyOf[1] (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): mixed { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** How the one-time late fee is calculated. Value enum: "percentage". anyOf[1] (Value): string. How the one-time late fee is calculated. Value enum: "percentage". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
