<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $admission_code
 * @property-read string $admission_code_last4
 * @property-read string|null $attendee_name
 * @property-read string|null $check_in_method
 * @property-read string|null $checked_in_at
 * @property-read string $created_at
 * @property-read ?ExpandedOrderSummary $order
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $payment_link_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $ticket_id
 * @property-read string $ticket_number
 * @property-read string $updated_at
 * @property-read int $version
 * @property-read string|null $voided_at
 * Presence-aware response; omitted optional fields return null. */
final class TicketVoidedMerchantEventDataObject extends Model {
    /** @param array{'admission_code'?: string, 'admission_code_last4': string, 'attendee_name': string|null, 'check_in_method': mixed, 'checked_in_at': string|null, 'created_at': string, 'order'?: mixed, 'order_id': string, 'order_line_item_id': string, 'payment_link_id': string, 'status': string, 'supported_actions': list<string>, 'ticket_id': string, 'ticket_number': string, 'updated_at': string, 'version': int, 'voided_at': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketVoidedMerchantEventDataObject')); }
    /** The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: 16.
     * @return ?string
     */
    public function getAdmissionCode(): ?string { return $this->get('admission_code'); }
    public function hasAdmissionCode(): bool { return $this->has('admission_code'); }
    /** Last four characters of the current admission code.
     * @return string
     */
    public function getAdmissionCodeLast4(): string { return $this->get('admission_code_last4'); }
    public function hasAdmissionCodeLast4(): bool { return $this->has('admission_code_last4'); }
    /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * @return string|null
     */
    public function getAttendeeName(): string|null { return $this->get('attendee_name'); }
    public function hasAttendeeName(): bool { return $this->has('attendee_name'); }
    /** How the ticket was admitted. Null when the ticket is not checked in. Value enum: "admission_code", "manual". anyOf[1] (Value): string.  Value enum: "admission_code", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckInMethod(): string|null { return $this->get('check_in_method'); }
    public function hasCheckInMethod(): bool { return $this->has('check_in_method'); }
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
    /** Order summary, present only with expand=order. Requires commerce.orders.read. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * @return ?ExpandedOrderSummary
     */
    public function getOrder(): ?ExpandedOrderSummary { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The order that purchased this ticket.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The purchased ticket tier.
     * @return string
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The event payment link.
     * @return string
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in", "void". [] (Value): string.  Value enum: "check_in", "undo_check_in", "void".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Unique ticket identity with the tkt_ prefix.
     * @return string
     */
    public function getTicketId(): string { return $this->get('ticket_id'); }
    public function hasTicketId(): bool { return $this->has('ticket_id'); }
    /** The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * @return string
     */
    public function getTicketNumber(): string { return $this->get('ticket_number'); }
    public function hasTicketNumber(): bool { return $this->has('ticket_number'); }
    /** When the ticket last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** When the ticket was permanently voided. Null when the ticket has not been voided. Format: date-time.
     * @return string|null
     */
    public function getVoidedAt(): string|null { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
