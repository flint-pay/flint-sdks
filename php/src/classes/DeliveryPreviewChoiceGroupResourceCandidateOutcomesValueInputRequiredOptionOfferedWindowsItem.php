<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionOfferedWindowsItemAmountMoney $amount_money
 * @property-read string $delivery_window_id
 * @property-read string $end_at
 * @property-read string $expires_at
 * @property-read string $start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionOfferedWindowsItem extends Model {
    /** @param array{'amount_money': mixed, 'delivery_window_id': string, 'end_at': string, 'expires_at': string, 'start_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionOfferedWindowsItem')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionOfferedWindowsItemAmountMoney
     */
    public function getAmountMoney(): DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredOptionOfferedWindowsItemAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** delivery_window_id
     * @return string
     */
    public function getDeliveryWindowId(): string { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getEndAt(): string { return $this->get('end_at'); }
    public function hasEndAt(): bool { return $this->has('end_at'); }
    /** Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getStartAt(): string { return $this->get('start_at'); }
    public function hasStartAt(): bool { return $this->has('start_at'); }
}
