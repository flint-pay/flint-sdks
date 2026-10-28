<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $event_at
 * @property-read int|null $max_total_quantity
 * @property-read bool $send_ticket_emails
 * @property-read string|null $ticket_prefix
 * @property-read string $timezone
 * @property-read string|null $venue
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkEventConfigPatchRequestInput extends Model {
    /** @param array{'event_at'?: string|\DateTimeInterface, 'max_total_quantity'?: int|null, 'send_ticket_emails'?: bool, 'ticket_prefix'?: string|null, 'timezone'?: string, 'venue'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkEventConfigPatchRequestInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When event_at is omitted; use hasEventAt() or valueOrDefault().
     */
    public function getEventAt(): string|\DateTimeInterface { return $this->get('event_at'); }
    public function hasEventAt(): bool { return $this->has('event_at'); }
    /** Shape $ (Value): integer or null. Most tickets the event sells across all orders. Absent means no limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int|null
     * @throws SdkError When max_total_quantity is omitted; use hasMaxTotalQuantity() or valueOrDefault().
     */
    public function getMaxTotalQuantity(): int|null { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When send_ticket_emails is omitted; use hasSendTicketEmails() or valueOrDefault().
     */
    public function getSendTicketEmails(): bool { return $this->get('send_ticket_emails'); }
    public function hasSendTicketEmails(): bool { return $this->has('send_ticket_emails'); }
    /** Shape $ (Value): string or null. Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. Send null to clear it. minLength: 1. maxLength: 5.
     * @return string|null
     * @throws SdkError When ticket_prefix is omitted; use hasTicketPrefix() or valueOrDefault().
     */
    public function getTicketPrefix(): string|null { return $this->get('ticket_prefix'); }
    public function hasTicketPrefix(): bool { return $this->has('ticket_prefix'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When venue is omitted; use hasVenue() or valueOrDefault().
     */
    public function getVenue(): string|null { return $this->get('venue'); }
    public function hasVenue(): bool { return $this->has('venue'); }
}
