<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $admission_code
 * @property-read string $admission_code_last4
 * @property-read string|null $attendee_name
 * @property-read string|null $check_in_method
 * @property-read string|\DateTimeInterface|null $checked_in_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read ExpandedOrderSummaryInput|array<array-key, mixed>|\stdClass $order
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $payment_link_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $ticket_id
 * @property-read string $ticket_number
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * @property-read string|\DateTimeInterface|null $voided_at
 * Presence-aware input; omitted fields throw when accessed. */
final class TicketInput extends Model {
    /** @param array{'admission_code'?: string, 'admission_code_last4': string, 'attendee_name': string|null, 'check_in_method': string|null, 'checked_in_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'order'?: ExpandedOrderSummaryInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'order_line_item_id': string, 'payment_link_id': string, 'status': string, 'supported_actions': list<string>, 'ticket_id': string, 'ticket_number': string, 'updated_at': string|\DateTimeInterface, 'version': int, 'voided_at': string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketInput')); }
    /** The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: 16.
     * @return string
     * @throws SdkError When admission_code is omitted; use hasAdmissionCode() or valueOrDefault().
     */
    public function getAdmissionCode(): string { return $this->get('admission_code'); }
    public function hasAdmissionCode(): bool { return $this->has('admission_code'); }
    /** Last four characters of the current admission code.
     * @return string
     * @throws SdkError When admission_code_last4 is omitted; use hasAdmissionCodeLast4() or valueOrDefault().
     */
    public function getAdmissionCodeLast4(): string { return $this->get('admission_code_last4'); }
    public function hasAdmissionCodeLast4(): bool { return $this->has('admission_code_last4'); }
    /** Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200.
     * @return string|null
     * @throws SdkError When attendee_name is omitted; use hasAttendeeName() or valueOrDefault().
     */
    public function getAttendeeName(): string|null { return $this->get('attendee_name'); }
    public function hasAttendeeName(): bool { return $this->has('attendee_name'); }
    /** How the ticket was admitted. Null when the ticket is not checked in. Value enum: "admission_code", "manual". anyOf[1] (Value): string.  Value enum: "admission_code", "manual". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When check_in_method is omitted; use hasCheckInMethod() or valueOrDefault().
     */
    public function getCheckInMethod(): mixed { return $this->get('check_in_method'); }
    public function hasCheckInMethod(): bool { return $this->has('check_in_method'); }
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
    /** Order summary, present only with expand=order. Requires commerce.orders.read. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * @return ExpandedOrderSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in", "void". [] (Value): string.  Value enum: "check_in", "undo_check_in", "void".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
     * @return string
     * @throws SdkError When ticket_id is omitted; use hasTicketId() or valueOrDefault().
     */
    public function getTicketId(): string { return $this->get('ticket_id'); }
    public function hasTicketId(): bool { return $this->has('ticket_id'); }
    /** The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry.
     * @return string
     * @throws SdkError When ticket_number is omitted; use hasTicketNumber() or valueOrDefault().
     */
    public function getTicketNumber(): string { return $this->get('ticket_number'); }
    public function hasTicketNumber(): bool { return $this->has('ticket_number'); }
    /** When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** When the ticket was permanently voided. Null when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When voided_at is omitted; use hasVoidedAt() or valueOrDefault().
     */
    public function getVoidedAt(): string|\DateTimeInterface|null { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
