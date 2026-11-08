<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $admission_code
 * @property-read string|null $attendee_name
 * @property-read string|null $checked_in_at
 * @property-read string $created_at
 * @property-read ?BuyerTicketEvent $event
 * @property-read string $order_id
 * @property-read string $status
 * @property-read string $ticket_id
 * @property-read string $ticket_number
 * Presence-aware response; omitted optional fields return null. */
final class BuyerTicket extends Model {
    /** @param array{'admission_code'?: string, 'attendee_name': string|null, 'checked_in_at': string|null, 'created_at': string, 'event'?: mixed, 'order_id': string, 'status': string, 'ticket_id': string, 'ticket_number': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerTicket')); }
    /** The 16-character Crockford base32 admission code to show as a QR code and print as XXXX-XXXX-XXXX-XXXX. A bearer secret. Absent when the ticket is voided, on orders whose buyer_email differs from the email Flint verified, and for sessions Flint didn't verify: merchant access links, customer sessions created with an API key, links emailed to another address, and checkout links a merchant reads or requests after payment. minLength: 16. maxLength: 16.
     * @return ?string
     */
    public function getAdmissionCode(): ?string { return $this->get('admission_code'); }
    public function hasAdmissionCode(): bool { return $this->has('admission_code'); }
    /** Attendee name. Null when none was given. minLength: 1. maxLength: 200.
     * @return string|null
     */
    public function getAttendeeName(): string|null { return $this->get('attendee_name'); }
    public function hasAttendeeName(): bool { return $this->has('attendee_name'); }
    /** When the ticket was admitted. Null when the ticket is not checked in. Format: date-time.
     * @return string|null
     */
    public function getCheckedInAt(): string|null { return $this->get('checked_in_at'); }
    public function hasCheckedInAt(): bool { return $this->has('checked_in_at'); }
    /** When the ticket was issued. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The event details the order captured at checkout. Absent when the order didn't record them. Event details captured when the ticket's order was placed.
     * @return ?BuyerTicketEvent
     */
    public function getEvent(): ?BuyerTicketEvent { return $this->get('event'); }
    public function hasEvent(): bool { return $this->has('event'); }
    /** The buyer's order that purchased this ticket.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique ticket identity with the tkt_ prefix.
     * @return string
     */
    public function getTicketId(): string { return $this->get('ticket_id'); }
    public function hasTicketId(): bool { return $this->has('ticket_id'); }
    /** The event prefix and sequence, such as GAL001. It doesn't admit anyone on its own.
     * @return string
     */
    public function getTicketNumber(): string { return $this->get('ticket_number'); }
    public function hasTicketNumber(): bool { return $this->has('ticket_number'); }
}
