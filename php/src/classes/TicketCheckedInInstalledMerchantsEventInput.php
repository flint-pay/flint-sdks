<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'admission_code'?: string, 'admission_code_last4': string, 'attendee_name': string|null, 'check_in_method': string|null, 'checked_in_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'order'?: ExpandedOrderSummaryInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'order_line_item_id': string, 'payment_link_id': string, 'status': string, 'supported_actions': list<string>, 'ticket_id': string, 'ticket_number': string, 'updated_at': string|\DateTimeInterface, 'version': int, 'voided_at': string|\DateTimeInterface|null, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TicketCheckedInInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'admission_code'?: string, 'admission_code_last4': string, 'attendee_name': string|null, 'check_in_method': string|null, 'checked_in_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'order'?: ExpandedOrderSummaryInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'order_line_item_id': string, 'payment_link_id': string, 'status': string, 'supported_actions': list<string>, 'ticket_id': string, 'ticket_number': string, 'updated_at': string|\DateTimeInterface, 'version': int, 'voided_at': string|\DateTimeInterface|null, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketCheckedInInstalledMerchantsEventInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.admission_code (Optional): string. The ticket's 16-character Crockford base32 admission code, the value its QR code holds. A bearer secret: only the paid checkout session's own paying credential receives it, on its own order's tickets that aren't voided. A checkout credential from a launch URL a merchant reads or requests after payment never does. Returned only to the checkout credential; never in webhook payloads. minLength: 16. object.admission_code_last4 (Required): string. Last four characters of the current admission code. object.attendee_name (Required): string or null. Optional attendee name. Null when not supplied. minLength: 1. maxLength: 200. object.check_in_method (Required): string or null. How the ticket was admitted. Null when the ticket is not checked in. Value enum: "admission_code", "manual". object.check_in_method.anyOf[1] (Value): string.  Value enum: "admission_code", "manual". object.check_in_method.anyOf[2] (Value): null. object.checked_in_at (Required): string or null. When the ticket was admitted. Null when the ticket is not checked in. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". object.order (Optional): {@see ExpandedOrderSummaryInput}. Order summary, present only with expand=order. Requires commerce.orders.read. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. object.order_id (Required): string. The order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_line_item_id (Required): string. The purchased ticket tier. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". object.payment_link_id (Required): string. The event payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.status (Required): string. The admission lifecycle. Value enum: "issued", "checked_in", "voided". object.supported_actions (Required): Array of string. Actions currently offered for this ticket. [] enum: "check_in", "undo_check_in", "void". object.supported_actions[] (Value): string.  Value enum: "check_in", "undo_check_in", "void". object.ticket_id (Required): string. Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". object.ticket_number (Required): string. The event prefix and sequence, such as GAL001. Numbers are never reused and do not authorize entry. object.updated_at (Required): string. When the ticket last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. object.voided_at (Required): string or null. When the ticket was permanently voided. Null when the ticket has not been voided. Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'admission_code'?: string, 'admission_code_last4': string, 'attendee_name': string|null, 'check_in_method': string|null, 'checked_in_at': string|\DateTimeInterface|null, 'created_at': string|\DateTimeInterface, 'order'?: ExpandedOrderSummaryInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'order_line_item_id': string, 'payment_link_id': string, 'status': string, 'supported_actions': list<string>, 'ticket_id': string, 'ticket_number': string, 'updated_at': string|\DateTimeInterface, 'version': int, 'voided_at': string|\DateTimeInterface|null, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "installed_merchants".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "ticket.checked_in".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the partner app that owns the receiving endpoint. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. environment_grant_id (Required): string. The grant authorizing delivery from this merchant environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required): string. Whether the installed merchant event came from live mode or a sandbox. Value enum: "test", "live". partner_app_install_id (Required): string. The install connecting the merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id (Optional): string. The sandbox the event came from, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
