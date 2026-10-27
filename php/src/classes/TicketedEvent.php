<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $location
 * @property-read string $name
 * @property-read ?string $starts_at
 * @property-read list<string> $ticket_numbers
 * @property-read string $ticket_status
 * @property-read ?string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class TicketedEvent extends Model {
    /** @param array{'location'?: string, 'name': string, 'starts_at'?: string, 'ticket_numbers': list<string>, 'ticket_status': string, 'timezone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketedEvent')); }
    /** Shape $ (Value): string. Where the event takes place.
     * @return ?string
     */
    public function getLocation(): ?string { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Shape $ (Value): string. Event name when the order was placed.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. When the event starts. RFC 3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getStartsAt(): ?string { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Shape $ (Value): Array of string. Ticket numbers issued for this order. Empty while ticket_status is pending. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getTicketNumbers(): array { return $this->get('ticket_numbers'); }
    public function hasTicketNumbers(): bool { return $this->has('ticket_numbers'); }
    /** Shape $ (Value): string.  Value enum: "pending", "issued", "void".
     * @return string
     */
    public function getTicketStatus(): string { return $this->get('ticket_status'); }
    public function hasTicketStatus(): bool { return $this->has('ticket_status'); }
    /** Shape $ (Value): string. IANA time zone Flint shows the event in.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
