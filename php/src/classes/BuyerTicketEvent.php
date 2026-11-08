<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $location
 * @property-read string $name
 * @property-read ?string $starts_at
 * @property-read ?string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class BuyerTicketEvent extends Model {
    /** @param array{'location'?: string, 'name': string, 'starts_at'?: string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerTicketEvent')); }
    /** Where the event takes place.
     * @return ?string
     */
    public function getLocation(): ?string { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Event name when the order was placed.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** When the event starts. RFC 3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getStartsAt(): ?string { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** IANA time zone Flint shows the event in.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
