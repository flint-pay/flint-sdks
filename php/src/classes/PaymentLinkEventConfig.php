<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $collect_attendee_names
 * @property-read ?string $event_at
 * @property-read int|null $max_total_quantity
 * @property-read ?bool $send_ticket_emails
 * @property-read ?string $ticket_prefix
 * @property-read ?string $timezone
 * @property-read ?string $venue
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkEventConfig extends Model {
    /** @param array{'collect_attendee_names'?: bool, 'event_at'?: string, 'max_total_quantity'?: int|null, 'send_ticket_emails'?: bool, 'ticket_prefix'?: string, 'timezone'?: string, 'venue'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkEventConfig')); }
    /** Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false.
     * @return ?bool
     */
    public function getCollectAttendeeNames(): ?bool { return $this->get('collect_attendee_names'); }
    public function hasCollectAttendeeNames(): bool { return $this->has('collect_attendee_names'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getEventAt(): ?string { return $this->get('event_at'); }
    public function hasEventAt(): bool { return $this->has('event_at'); }
    /** Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int|null
     */
    public function getMaxTotalQuantity(): int|null { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Whether Flint emails tickets to buyers after they pay.
     * @return ?bool
     */
    public function getSendTicketEmails(): ?bool { return $this->get('send_ticket_emails'); }
    public function hasSendTicketEmails(): bool { return $this->has('send_ticket_emails'); }
    /** Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: 5.
     * @return ?string
     */
    public function getTicketPrefix(): ?string { return $this->get('ticket_prefix'); }
    public function hasTicketPrefix(): bool { return $this->has('ticket_prefix'); }
    /** IANA time zone of the event venue, used to show `event_at` as venue time.
     * @return ?string
     */
    public function getTimezone(): ?string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Where the event takes place. maxLength: 500.
     * @return ?string
     */
    public function getVenue(): ?string { return $this->get('venue'); }
    public function hasVenue(): bool { return $this->has('venue'); }
}
