<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $admission_code
 * @property-read string|null $admission_code_last4
 * @property-read string|null $attendee_name
 * @property-read string|null $check_in_method
 * @property-read string|null $checked_in_at
 * @property-read string|null $created_at
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read string|null $order_line_item_id
 * @property-read string|null $payment_link_id
 * @property-read string|null $payment_link_line_item_key
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $ticket_id
 * @property-read string|null $ticket_number
 * @property-read string|null $tier_name
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * @property-read string|null $voided_at
 * Presence-aware response; omitted optional fields return null. */
final class TicketVoidedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'admission_code'?: mixed, 'admission_code_last4'?: mixed, 'attendee_name'?: mixed, 'check_in_method'?: mixed, 'checked_in_at'?: mixed, 'created_at'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'order_line_item_id'?: mixed, 'payment_link_id'?: mixed, 'payment_link_line_item_key'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'ticket_id'?: mixed, 'ticket_number'?: mixed, 'tier_name'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'voided_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketVoidedInstalledMerchantsEventDataPreviousAttributes')); }
    /** The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. anyOf[1] (Value): string. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: 16. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAdmissionCode(): string|null { return $this->get('admission_code'); }
    public function hasAdmissionCode(): bool { return $this->has('admission_code'); }
    /** Last four characters of the current admission code. anyOf[1] (Value): string. Last four characters of the current admission code. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAdmissionCodeLast4(): string|null { return $this->get('admission_code_last4'); }
    public function hasAdmissionCodeLast4(): bool { return $this->has('admission_code_last4'); }
    /** Optional attendee name. Null when not supplied. anyOf[1] (Value): string. Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAttendeeName(): string|null { return $this->get('attendee_name'); }
    public function hasAttendeeName(): bool { return $this->has('attendee_name'); }
    /** How the ticket was admitted. Null when the ticket is not checked in. Value enum: "admission_code", "manual". anyOf[1] (Value): string.  Value enum: "admission_code", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckInMethod(): string|null { return $this->get('check_in_method'); }
    public function hasCheckInMethod(): bool { return $this->has('check_in_method'); }
    /** When the ticket was admitted. Null when the ticket is not checked in. anyOf[1] (Value): string. When the ticket was admitted. Null when the ticket is not checked in. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCheckedInAt(): string|null { return $this->get('checked_in_at'); }
    public function hasCheckedInAt(): bool { return $this->has('checked_in_at'); }
    /** When the ticket was issued. anyOf[1] (Value): string. When the ticket was issued. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Order summary, present only with expand=order. Requires commerce.orders.read. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** The order that purchased this ticket. anyOf[1] (Value): string. The order that purchased this ticket. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** The purchased ticket tier. anyOf[1] (Value): string. The purchased ticket tier. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderLineItemId(): string|null { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** The event payment link. anyOf[1] (Value): string. The event payment link. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkId(): string|null { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** The payment link's line item key at purchase. Use it with payment_link_id to identify the tier when names repeat. Omitted when the order line has no stored key. anyOf[1] (Value): string. The payment link's line item key at purchase. Use it with payment_link_id to identify the tier when names repeat. Omitted when the order line has no stored key. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkLineItemKey(): string|null { return $this->get('payment_link_line_item_key'); }
    public function hasPaymentLinkLineItemKey(): bool { return $this->has('payment_link_line_item_key'); }
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[1] (Value): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1] (Value): Array of string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in", "void". anyOf[1][] (Value): string.  Value enum: "check_in", "undo_check_in", "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Unique ticket identity with the tkt_ prefix. anyOf[1] (Value): string. Unique ticket identity with the tkt_ prefix. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTicketId(): string|null { return $this->get('ticket_id'); }
    public function hasTicketId(): bool { return $this->has('ticket_id'); }
    /** The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. anyOf[1] (Value): string. The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTicketNumber(): string|null { return $this->get('ticket_number'); }
    public function hasTicketNumber(): bool { return $this->has('ticket_number'); }
    /** Name of the ticket tier on the purchased order line. anyOf[1] (Value): string. Name of the ticket tier on the purchased order line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTierName(): string|null { return $this->get('tier_name'); }
    public function hasTierName(): bool { return $this->has('tier_name'); }
    /** When the ticket last changed. anyOf[1] (Value): string. When the ticket last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** When the ticket was permanently voided. Null when the ticket has not been voided. anyOf[1] (Value): string. When the ticket was permanently voided. Null when the ticket has not been voided. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVoidedAt(): string|null { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
