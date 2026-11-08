<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $admission_code
 * @property-read string|null $attendee_name
 * @property-read string|\DateTimeInterface|null $checked_in_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read BuyerTicketEventInput|array<array-key, mixed>|\stdClass $event
 * @property-read string $order_id
 * @property-read string $status
 * @property-read string $ticket_id
 * @property-read string $ticket_number
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerTicketInput extends Model {
    /** @param array{'admission_code'?: string, 'attendee_name': string|null, 'checked_in_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'event'?: BuyerTicketEventInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'status': string, 'ticket_id': string, 'ticket_number': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerTicketInput')); }
    /** The 16-character Crockford base32 admission code to show as a QR code and print as XXXX-XXXX-XXXX-XXXX. A bearer secret. Absent when the ticket is voided, on orders whose buyer_email differs from the email Flint verified, and for sessions Flint didn't verify: merchant access links, customer sessions created with an API key, links emailed to another address, and checkout links a merchant reads or requests after payment. minLength: 16. maxLength: 16.
     * @return string
     * @throws SdkError When admission_code is omitted; use hasAdmissionCode() or valueOrDefault().
     */
    public function getAdmissionCode(): string { return $this->get('admission_code'); }
    public function hasAdmissionCode(): bool { return $this->has('admission_code'); }
    /** Attendee name. Null when none was given. minLength: 1. maxLength: 200.
     * @return string|null
     * @throws SdkError When attendee_name is omitted; use hasAttendeeName() or valueOrDefault().
     */
    public function getAttendeeName(): string|null { return $this->get('attendee_name'); }
    public function hasAttendeeName(): bool { return $this->has('attendee_name'); }
    /** When the ticket was admitted. Null when the ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When checked_in_at is omitted; use hasCheckedInAt() or valueOrDefault().
     */
    public function getCheckedInAt(): string|\DateTimeInterface|null { return $this->get('checked_in_at'); }
    public function hasCheckedInAt(): bool { return $this->has('checked_in_at'); }
    /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The event details the order captured at checkout. Absent when the order didn't record them. Event details captured when the ticket's order was placed.
     * @return BuyerTicketEventInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When event is omitted; use hasEvent() or valueOrDefault().
     */
    public function getEvent(): mixed { return $this->get('event'); }
    public function hasEvent(): bool { return $this->has('event'); }
    /** The buyer's order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
     * @return string
     * @throws SdkError When ticket_id is omitted; use hasTicketId() or valueOrDefault().
     */
    public function getTicketId(): string { return $this->get('ticket_id'); }
    public function hasTicketId(): bool { return $this->has('ticket_id'); }
    /** The event prefix and sequence, such as GAL001. It doesn't admit anyone on its own.
     * @return string
     * @throws SdkError When ticket_number is omitted; use hasTicketNumber() or valueOrDefault().
     */
    public function getTicketNumber(): string { return $this->get('ticket_number'); }
    public function hasTicketNumber(): bool { return $this->has('ticket_number'); }
}
