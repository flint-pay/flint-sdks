<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $shipped_at
 * @property-read string|null $timezone
 * @property-read string|null $window_end_at
 * @property-read string|null $window_start_at
 * Presence-aware response; omitted optional fields return null. */
final class ShipmentFulfillmentDetailsPreviousAttributes extends Model {
    /** @param array{'shipped_at'?: mixed, 'timezone'?: mixed, 'window_end_at'?: mixed, 'window_start_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentFulfillmentDetailsPreviousAttributes')); }
    /** When the shipment was handed to the carrier. anyOf[1] (Value): string. When the shipment was handed to the carrier. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippedAt(): string|null { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. anyOf[1] (Value): string. IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** End of the scheduled shipping window. anyOf[1] (Value): string. End of the scheduled shipping window. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowEndAt(): string|null { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the scheduled shipping window. anyOf[1] (Value): string. Start of the scheduled shipping window. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWindowStartAt(): string|null { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
