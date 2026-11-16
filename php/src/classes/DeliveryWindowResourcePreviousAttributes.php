<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $delivery_window_id
 * @property-read string|null $end_at
 * @property-read string|null $expires_at
 * @property-read string|null $start_at
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryWindowResourcePreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'delivery_window_id'?: mixed, 'end_at'?: mixed, 'expires_at'?: mixed, 'start_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWindowResourcePreviousAttributes')); }
    /** Price of delivery in this window. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of this window. The buyer sends it to choose the window. anyOf[1] (Value): string. ID of this window. The buyer sends it to choose the window. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryWindowId(): string|null { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** End of this delivery window. anyOf[1] (Value): string. End of this delivery window. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEndAt(): string|null { return $this->get('end_at'); }
    public function hasEndAt(): bool { return $this->has('end_at'); }
    /** Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. anyOf[1] (Value): string. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Start of this delivery window. anyOf[1] (Value): string. Start of this delivery window. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartAt(): string|null { return $this->get('start_at'); }
    public function hasStartAt(): bool { return $this->has('start_at'); }
}
