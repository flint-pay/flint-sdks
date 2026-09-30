<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $event_at
 * @property-read int $max_total_quantity
 * @property-read bool $send_ticket_emails
 * @property-read string $ticket_prefix
 * @property-read string $timezone
 * @property-read string $venue
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentLinkEventConfig extends Model {
    /** @param array{'event_at'?: string, 'max_total_quantity'?: int, 'send_ticket_emails'?: bool, 'ticket_prefix'?: string, 'timezone'?: string, 'venue'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkEventConfig')); }
    /** @return string
     * @throws SdkError When event_at is omitted; use hasEventAt() or valueOrDefault().
     */
    public function getEventAt(): string { return $this->get('event_at'); }
    public function hasEventAt(): bool { return $this->has('event_at'); }
    /** @return int
     * @throws SdkError When max_total_quantity is omitted; use hasMaxTotalQuantity() or valueOrDefault().
     */
    public function getMaxTotalQuantity(): int { return $this->get('max_total_quantity'); }
    public function hasMaxTotalQuantity(): bool { return $this->has('max_total_quantity'); }
    /** @return bool
     * @throws SdkError When send_ticket_emails is omitted; use hasSendTicketEmails() or valueOrDefault().
     */
    public function getSendTicketEmails(): bool { return $this->get('send_ticket_emails'); }
    public function hasSendTicketEmails(): bool { return $this->has('send_ticket_emails'); }
    /** @return string
     * @throws SdkError When ticket_prefix is omitted; use hasTicketPrefix() or valueOrDefault().
     */
    public function getTicketPrefix(): string { return $this->get('ticket_prefix'); }
    public function hasTicketPrefix(): bool { return $this->has('ticket_prefix'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** @return string
     * @throws SdkError When venue is omitted; use hasVenue() or valueOrDefault().
     */
    public function getVenue(): string { return $this->get('venue'); }
    public function hasVenue(): bool { return $this->has('venue'); }
}
