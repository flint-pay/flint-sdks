<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $shipped_at
 * @property-read string $timezone
 * @property-read string|\DateTimeInterface $window_end_at
 * @property-read string|\DateTimeInterface $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentFulfillmentDetailsInput extends Model {
    /** @param array{'shipped_at'?: string|\DateTimeInterface, 'timezone'?: string, 'window_end_at'?: string|\DateTimeInterface, 'window_start_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentFulfillmentDetailsInput')); }
    /** When the shipment was handed to the carrier. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): string|\DateTimeInterface { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. maxLength: 255.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** End of the scheduled shipping window. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the scheduled shipping window. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
