<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $collect_attendee_names
 * @property-read string|null $event_at
 * @property-read int|null $max_total_quantity
 * @property-read bool|null $send_ticket_emails
 * @property-read string|null $ticket_prefix
 * @property-read string|null $timezone
 * @property-read string|null $venue
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkEventConfigPreviousAttributes extends Model {
    /** @param array{'collect_attendee_names'?: mixed, 'event_at'?: mixed, 'max_total_quantity'?: mixed, 'send_ticket_emails'?: mixed, 'ticket_prefix'?: mixed, 'timezone'?: mixed, 'venue'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkEventConfigPreviousAttributes')); }
    /** Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. anyOf[1] (Value): boolean. Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getCollectAttendeeNames(): bool|null { return $this->get('collect_attendee_names'); }
    public function hasCollectAttendeeNames(): bool { return $this->has('collect_attendee_names'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEventAt(): string|null { return $this->get('event_at'); }
    public function hasEventAt(): bool { return $this->has('event_at'); }
    /** Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxTotalQuantity(): int|null { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Whether Flint emails tickets to buyers after they pay. anyOf[1] (Value): boolean. Whether Flint emails tickets to buyers after they pay. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getSendTicketEmails(): bool|null { return $this->get('send_ticket_emails'); }
    public function hasSendTicketEmails(): bool { return $this->has('send_ticket_emails'); }
    /** Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. anyOf[1] (Value): string. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: 5. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTicketPrefix(): string|null { return $this->get('ticket_prefix'); }
    public function hasTicketPrefix(): bool { return $this->has('ticket_prefix'); }
    /** IANA time zone of the event venue, used to show `event_at` as venue time. anyOf[1] (Value): string. IANA time zone of the event venue, used to show `event_at` as venue time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Where the event takes place. anyOf[1] (Value): string. Where the event takes place. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVenue(): string|null { return $this->get('venue'); }
    public function hasVenue(): bool { return $this->has('venue'); }
}
