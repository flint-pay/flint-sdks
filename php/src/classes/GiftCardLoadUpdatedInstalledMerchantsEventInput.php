<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'consideration_money': array{'amount': string, 'currency': string}|object|null, 'created_at': string|\DateTimeInterface, 'funding_disputes': list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>, 'purchase_refunds': list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>, 'purchase_restoration'?: GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass, 'refund_provenance'?: GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass, 'refund_transferred_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass, 'source_created_at': string|\DateTimeInterface|null, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardLoadUpdatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'consideration_money': array{'amount': string, 'currency': string}|object|null, 'created_at': string|\DateTimeInterface, 'funding_disputes': list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>, 'purchase_refunds': list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>, 'purchase_restoration'?: GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass, 'refund_provenance'?: GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass, 'refund_transferred_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass, 'source_created_at': string|\DateTimeInterface|null, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadUpdatedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.consideration_money (Required): {@see MoneyValueInput} or null. What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. object.consideration_money.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.consideration_money.anyOf[2] (Value): null. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.funding_disputes (Required): Array of {@see GiftCardFundingDisputeInput}. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. object.funding_disputes[] (Value): {@see GiftCardFundingDisputeInput}. A dispute on the payment that funded a gift card load, with its status and any loss resolution. object.gift_card_id (Required): string. ID of the gift card the load added value to. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.gift_card_load_id (Required): string. Unique identifier for this gift card load, prefixed `gcl_`. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC". object.idempotency_key (Required): string or null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. object.purchase_refund_value_holds (Optional): Array of {@see GiftCardPurchaseRefundValueHoldInput}. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. object.purchase_refund_value_holds[] (Value): {@see GiftCardPurchaseRefundValueHoldInput}. Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held. object.purchase_refunds (Required): Array of {@see GiftCardPurchaseRefundAllocationInput}. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. object.purchase_refunds[] (Value): {@see GiftCardPurchaseRefundAllocationInput}. An entry in a gift card load's purchase refunds. object.purchase_restoration (Optional): {@see GiftCardPurchaseRestorationInput}. Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. object.refund_provenance (Optional): {@see GiftCardRefundProvenanceInput}. Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. object.refund_transferred_money (Optional): {@see MoneyValueInput}. The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.remaining_money (Required): {@see MoneyValueInput}. The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.reversed_money (Required): {@see MoneyValueInput}. The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.source (Required): {@see GiftCardFundingSourceInput}. Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. object.source_created_at (Required): string or null. RFC3339 timestamp. `null` when no source time was recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.value_money (Required): {@see MoneyValueInput}. The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.version (Required): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'consideration_money': array{'amount': string, 'currency': string}|object|null, 'created_at': string|\DateTimeInterface, 'funding_disputes': list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>, 'purchase_refunds': list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>, 'purchase_restoration'?: GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass, 'refund_provenance'?: GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass, 'refund_transferred_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass, 'source_created_at': string|\DateTimeInterface|null, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "gift_card_load.updated".
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
