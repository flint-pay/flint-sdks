<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $delivery_window_id
 * @property-read string|\DateTimeInterface|null $end_at
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|\DateTimeInterface|null $start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWindowResourcePreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'delivery_window_id'?: string|null, 'end_at'?: string|\DateTimeInterface|null, 'expires_at'?: string|\DateTimeInterface|null, 'start_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWindowResourcePreviousAttributesInput')); }
    /** Price of delivery in this window. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of this window. The buyer sends it to choose the window. anyOf[1] (Value): string. ID of this window. The buyer sends it to choose the window. Example: "fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_window_id is omitted; use hasDeliveryWindowId() or valueOrDefault().
     */
    public function getDeliveryWindowId(): mixed { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** End of this delivery window. anyOf[1] (Value): string. End of this delivery window. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When end_at is omitted; use hasEndAt() or valueOrDefault().
     */
    public function getEndAt(): mixed { return $this->get('end_at'); }
    public function hasEndAt(): bool { return $this->has('end_at'); }
    /** Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. anyOf[1] (Value): string. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Start of this delivery window. anyOf[1] (Value): string. Start of this delivery window. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When start_at is omitted; use hasStartAt() or valueOrDefault().
     */
    public function getStartAt(): mixed { return $this->get('start_at'); }
    public function hasStartAt(): bool { return $this->has('start_at'); }
}
