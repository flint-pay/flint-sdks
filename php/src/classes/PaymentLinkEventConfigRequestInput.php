<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $collect_attendee_names
 * @property-read string|\DateTimeInterface $event_at
 * @property-read int|null $max_total_quantity
 * @property-read bool $send_ticket_emails
 * @property-read string $ticket_prefix
 * @property-read string $timezone
 * @property-read string $venue
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkEventConfigRequestInput extends Model {
    /** @param array{'collect_attendee_names'?: bool, 'event_at'?: string|\DateTimeInterface, 'max_total_quantity'?: int|null, 'send_ticket_emails'?: bool, 'ticket_prefix'?: string, 'timezone'?: string, 'venue'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkEventConfigRequestInput')); }
    /** Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false.
     * @return bool
     * @throws SdkError When collect_attendee_names is omitted; use hasCollectAttendeeNames() or valueOrDefault().
     */
    public function getCollectAttendeeNames(): bool { return $this->get('collect_attendee_names'); }
    public function hasCollectAttendeeNames(): bool { return $this->has('collect_attendee_names'); }
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When event_at is omitted; use hasEventAt() or valueOrDefault().
     */
    public function getEventAt(): string|\DateTimeInterface { return $this->get('event_at'); }
    public function hasEventAt(): bool { return $this->has('event_at'); }
    /** Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int|null
     * @throws SdkError When max_total_quantity is omitted; use hasMaxTotalQuantity() or valueOrDefault().
     */
    public function getMaxTotalQuantity(): int|null { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Whether Flint emails tickets to buyers after they pay.
     * @return bool
     * @throws SdkError When send_ticket_emails is omitted; use hasSendTicketEmails() or valueOrDefault().
     */
    public function getSendTicketEmails(): bool { return $this->get('send_ticket_emails'); }
    public function hasSendTicketEmails(): bool { return $this->has('send_ticket_emails'); }
    /** Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. minLength: 1. maxLength: 5.
     * @return string
     * @throws SdkError When ticket_prefix is omitted; use hasTicketPrefix() or valueOrDefault().
     */
    public function getTicketPrefix(): string { return $this->get('ticket_prefix'); }
    public function hasTicketPrefix(): bool { return $this->has('ticket_prefix'); }
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Where the event takes place. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When venue is omitted; use hasVenue() or valueOrDefault().
     */
    public function getVenue(): string { return $this->get('venue'); }
    public function hasVenue(): bool { return $this->has('venue'); }
}
