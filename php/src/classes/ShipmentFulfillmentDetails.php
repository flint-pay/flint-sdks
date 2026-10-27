<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $shipped_at
 * @property-read ?string $timezone
 * @property-read ?string $window_end_at
 * @property-read ?string $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class ShipmentFulfillmentDetails extends Model {
    /** @param array{'shipped_at'?: string, 'timezone'?: string, 'window_end_at'?: string, 'window_start_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentFulfillmentDetails')); }
    /** Shape $ (Value): string. When the shipment was handed to the carrier. Format: date-time.
     * @return ?string
     */
    public function getShippedAt(): ?string { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Shape $ (Value): string. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. maxLength: 255.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): string. End of the scheduled shipping window. Format: date-time.
     * @return ?string
     */
    public function getWindowEndAt(): ?string { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Shape $ (Value): string. Start of the scheduled shipping window. Format: date-time.
     * @return ?string
     */
    public function getWindowStartAt(): ?string { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
