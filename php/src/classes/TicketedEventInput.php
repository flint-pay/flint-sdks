<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location
 * @property-read string $name
 * @property-read string|\DateTimeInterface $starts_at
 * @property-read list<string> $ticket_numbers
 * @property-read string $ticket_status
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class TicketedEventInput extends Model {
    /** @param array{'location'?: string, 'name': string, 'starts_at'?: string|\DateTimeInterface, 'ticket_numbers': list<string>, 'ticket_status': string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketedEventInput')); }
    /** Shape $ (Value): string. Where the event takes place.
     * @return string
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): string { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Shape $ (Value): string. Event name when the order was placed.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. When the event starts. RFC 3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Shape $ (Value): Array of string. Ticket numbers issued for this order. Empty while ticket_status is pending. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When ticket_numbers is omitted; use hasTicketNumbers() or valueOrDefault().
     */
    public function getTicketNumbers(): array { return $this->get('ticket_numbers'); }
    public function hasTicketNumbers(): bool { return $this->has('ticket_numbers'); }
    /** Shape $ (Value): string.  Value enum: "pending", "issued", "void".
     * @return string
     * @throws SdkError When ticket_status is omitted; use hasTicketStatus() or valueOrDefault().
     */
    public function getTicketStatus(): string { return $this->get('ticket_status'); }
    public function hasTicketStatus(): bool { return $this->has('ticket_status'); }
    /** Shape $ (Value): string. IANA time zone Flint shows the event in.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
