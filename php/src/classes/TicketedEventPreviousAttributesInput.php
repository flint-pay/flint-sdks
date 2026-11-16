<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $location
 * @property-read string|null $name
 * @property-read string|\DateTimeInterface|null $starts_at
 * @property-read list<string>|null $ticket_numbers
 * @property-read string|null $ticket_status
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class TicketedEventPreviousAttributesInput extends Model {
    /** @param array{'location'?: string|null, 'name'?: string|null, 'starts_at'?: string|\DateTimeInterface|null, 'ticket_numbers'?: list<string>|null, 'ticket_status'?: string|null, 'timezone'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketedEventPreviousAttributesInput')); }
    /** Where the event takes place. anyOf[1] (Value): string. Where the event takes place. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location is omitted; use hasLocation() or valueOrDefault().
     */
    public function getLocation(): mixed { return $this->get('location'); }
    public function hasLocation(): bool { return $this->has('location'); }
    /** Event name when the order was placed. anyOf[1] (Value): string. Event name when the order was placed. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** When the event starts. RFC 3339 timestamp. anyOf[1] (Value): string. When the event starts. RFC 3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): mixed { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Ticket numbers issued for this order. Empty while ticket_status is pending. anyOf[1] (Value): Array of string. Ticket numbers issued for this order. Empty while ticket_status is pending. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When ticket_numbers is omitted; use hasTicketNumbers() or valueOrDefault().
     */
    public function getTicketNumbers(): mixed { return $this->get('ticket_numbers'); }
    public function hasTicketNumbers(): bool { return $this->has('ticket_numbers'); }
    /** Whether the order's tickets are issued. Value enum: "pending", "issued", "voided". anyOf[1] (Value): string. Whether the order's tickets are issued. Value enum: "pending", "issued", "voided". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When ticket_status is omitted; use hasTicketStatus() or valueOrDefault().
     */
    public function getTicketStatus(): mixed { return $this->get('ticket_status'); }
    public function hasTicketStatus(): bool { return $this->has('ticket_status'); }
    /** IANA time zone Flint shows the event in. anyOf[1] (Value): string. IANA time zone Flint shows the event in. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): mixed { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}
