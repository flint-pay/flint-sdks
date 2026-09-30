<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $delivery_window_id
 * @property-read string|\DateTimeInterface $end_at
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string|\DateTimeInterface $start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryWindowResourceInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'delivery_window_id': string, 'end_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface, 'start_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryWindowResourceInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When delivery_window_id is omitted; use hasDeliveryWindowId() or valueOrDefault().
     */
    public function getDeliveryWindowId(): string { return $this->get('delivery_window_id'); }
    public function hasDeliveryWindowId(): bool { return $this->has('delivery_window_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When end_at is omitted; use hasEndAt() or valueOrDefault().
     */
    public function getEndAt(): string|\DateTimeInterface { return $this->get('end_at'); }
    public function hasEndAt(): bool { return $this->has('end_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When start_at is omitted; use hasStartAt() or valueOrDefault().
     */
    public function getStartAt(): string|\DateTimeInterface { return $this->get('start_at'); }
    public function hasStartAt(): bool { return $this->has('start_at'); }
}
