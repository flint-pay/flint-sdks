<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $shipped_at
 * @property-read string|null $timezone
 * @property-read string|\DateTimeInterface|null $window_end_at
 * @property-read string|\DateTimeInterface|null $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentFulfillmentDetailsPreviousAttributesInput extends Model {
    /** @param array{'shipped_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null, 'window_end_at'?: string|\DateTimeInterface|null, 'window_start_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentFulfillmentDetailsPreviousAttributesInput')); }
    /** When the shipment was handed to the carrier. anyOf[1] (Value): string. When the shipment was handed to the carrier. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): mixed { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. anyOf[1] (Value): string. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** End of the scheduled shipping window. anyOf[1] (Value): string. End of the scheduled shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): mixed { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the scheduled shipping window. anyOf[1] (Value): string. Start of the scheduled shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): mixed { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
