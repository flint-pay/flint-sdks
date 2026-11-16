<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $location
 * @property-read string|null $name
 * @property-read string|null $starts_at
 * @property-read list<string>|null $ticket_numbers
 * @property-read string|null $ticket_status
 * @property-read string|null $timezone
 * Presence-aware response; omitted optional fields return null. */
final class TicketedEventPreviousAttributes extends Model {
    /** @param array{'location'?: mixed, 'name'?: mixed, 'starts_at'?: mixed, 'ticket_numbers'?: mixed, 'ticket_status'?: mixed, 'timezone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketedEventPreviousAttributes')); }
    /** Where the event takes place. anyOf[1] (Value): string. Where the event takes place. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocation(): string|null { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Event name when the order was placed. anyOf[1] (Value): string. Event name when the order was placed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** When the event starts. RFC 3339 timestamp. anyOf[1] (Value): string. When the event starts. RFC 3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartsAt(): string|null { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Ticket numbers issued for this order. Empty while ticket_status is pending. anyOf[1] (Value): Array of string. Ticket numbers issued for this order. Empty while ticket_status is pending. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getTicketNumbers(): array|null { return $this->get('ticket_numbers'); }
    public function hasTicketNumbers(): bool { return $this->has('ticket_numbers'); }
    /** Whether the order's tickets are issued. Value enum: "pending", "issued", "voided". anyOf[1] (Value): string. Whether the order's tickets are issued. Value enum: "pending", "issued", "voided". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTicketStatus(): string|null { return $this->get('ticket_status'); }
    public function hasTicketStatus(): bool { return $this->has('ticket_status'); }
    /** IANA time zone Flint shows the event in. anyOf[1] (Value): string. IANA time zone Flint shows the event in. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
