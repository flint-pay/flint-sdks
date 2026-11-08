<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location
 * @property-read string $name
 * @property-read string|\DateTimeInterface $starts_at
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerTicketEventInput extends Model {
    /** @param array{'location'?: string, 'name': string, 'starts_at'?: string|\DateTimeInterface, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerTicketEventInput')); }
    /** Where the event takes place.
     * @return string
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): string { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Event name when the order was placed.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** When the event starts. RFC 3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** IANA time zone Flint shows the event in.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
