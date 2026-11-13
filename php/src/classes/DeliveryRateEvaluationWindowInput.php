<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $end_at
 * @property-read string|\DateTimeInterface $selection_guarantee_expires_at
 * @property-read string|\DateTimeInterface $start_at
 * @property-read string $window_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationWindowInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'end_at': string|\DateTimeInterface, 'selection_guarantee_expires_at'?: string|\DateTimeInterface, 'start_at': string|\DateTimeInterface, 'window_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationWindowInput')); }
    /** The price for this window, in the request's currency and within the method's fee bounds. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Exclusive end of the window, after start_at and within the scheduling horizon. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When end_at is omitted; use hasEndAt() or valueOrDefault().
     */
    public function getEndAt(): string|\DateTimeInterface { return $this->get('end_at'); }
    public function hasEndAt(): bool { return $this->has('end_at'); }
    /** How long this window's price holds once the buyer selects it. It must be after evaluated_at and no later than the outcome's selection_guarantee_expires_at, which it defaults to. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When selection_guarantee_expires_at is omitted; use hasSelectionGuaranteeExpiresAt() or valueOrDefault().
     */
    public function getSelectionGuaranteeExpiresAt(): string|\DateTimeInterface { return $this->get('selection_guarantee_expires_at'); }
    public function hasSelectionGuaranteeExpiresAt(): bool { return $this->has('selection_guarantee_expires_at'); }
    /** Start of the window, not earlier than evaluated_at. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When start_at is omitted; use hasStartAt() or valueOrDefault().
     */
    public function getStartAt(): string|\DateTimeInterface { return $this->get('start_at'); }
    public function hasStartAt(): bool { return $this->has('start_at'); }
    /** Your ID for the window, unique within the outcome. minLength: 1. Example: "evening-0802".
     * @return string
     * @throws SdkError When window_id is omitted; use hasWindowId() or valueOrDefault().
     */
    public function getWindowId(): string { return $this->get('window_id'); }
    public function hasWindowId(): bool { return $this->has('window_id'); }
}
