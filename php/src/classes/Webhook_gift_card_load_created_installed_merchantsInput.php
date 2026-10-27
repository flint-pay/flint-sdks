<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'consideration_money': array{'amount': string, 'currency': string}|object|null, 'created_at': string|\DateTimeInterface, 'funding_disputes': list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>, 'purchase_refunds': list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>, 'purchase_restoration'?: GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass, 'refund_provenance'?: GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass, 'refund_transferred_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass, 'source_created_at': string|\DateTimeInterface|null, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': string, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_gift_card_load_created_installed_merchantsInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'consideration_money': array{'amount': string, 'currency': string}|object|null, 'created_at': string|\DateTimeInterface, 'funding_disputes': list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>, 'purchase_refunds': list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>, 'purchase_restoration'?: GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass, 'refund_provenance'?: GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass, 'refund_transferred_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass, 'source_created_at': string|\DateTimeInterface|null, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': string, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_gift_card_load_created_installed_merchantsInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object and {@see GiftCardLoadInput}. Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. Shape $.object.consideration_money (Required): {@see MoneyValueInput} or null. Shape $.object.consideration_money.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.consideration_money.anyOf[2] (Value): null. Shape $.object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Shape $.object.funding_disputes (Required): Array of {@see GiftCardFundingDisputeInput}. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. Shape $.object.funding_disputes[] (Value): {@see GiftCardFundingDisputeInput}. A dispute on the payment that funded a gift card load, with its status and any loss resolution. Shape $.object.gift_card_id (Required): string. Shape $.object.gift_card_load_id (Required): string. Shape $.object.idempotency_key (Required): string or null. Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. Shape $.object.purchase_refund_value_holds (Optional): Array of {@see GiftCardPurchaseRefundValueHoldInput}. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. Shape $.object.purchase_refund_value_holds[] (Value): {@see GiftCardPurchaseRefundValueHoldInput}. Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held. Shape $.object.purchase_refunds (Required): Array of {@see GiftCardPurchaseRefundAllocationInput}. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. Shape $.object.purchase_refunds[] (Value): {@see GiftCardPurchaseRefundAllocationInput}. An entry in a gift card load's purchase refunds. Shape $.object.purchase_restoration (Optional): {@see GiftCardPurchaseRestorationInput}. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. Shape $.object.refund_provenance (Optional): {@see GiftCardRefundProvenanceInput}. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. Shape $.object.refund_transferred_money (Optional): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.remaining_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.reversed_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.source (Required): {@see GiftCardFundingSourceInput}. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Shape $.object.source_created_at (Required): string or null. RFC3339 timestamp. Format: date-time. Shape $.object.value_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.object.version (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return array{'object': array{'consideration_money': array{'amount': string, 'currency': string}|object|null, 'created_at': string|\DateTimeInterface, 'funding_disputes': list<GiftCardFundingDisputeInput|array<array-key, mixed>|\stdClass>, 'gift_card_id': string, 'gift_card_load_id': string, 'idempotency_key': string|null, 'purchase_refund_value_holds'?: list<GiftCardPurchaseRefundValueHoldInput|array<array-key, mixed>|\stdClass>, 'purchase_refunds': list<GiftCardPurchaseRefundAllocationInput|array<array-key, mixed>|\stdClass>, 'purchase_restoration'?: GiftCardPurchaseRestorationInput|array<array-key, mixed>|\stdClass, 'refund_provenance'?: GiftCardRefundProvenanceInput|array<array-key, mixed>|\stdClass, 'refund_transferred_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reversed_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'source': GiftCardFundingSourceInput|array<array-key, mixed>|\stdClass, 'source_created_at': string|\DateTimeInterface|null, 'value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'version': string, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "gift_card_load.created".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): Alternative shapes (see declared variants) and object. Shape $.environment_grant_id (Required): string. Shape $.merchant_id (Required): string. Shape $.mode (Required): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "installed_merchants". Shape $.oneOf[1] (Value): object. Shape $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id (Required): string. Shape $.oneOf[1].type (Required): string.  Value enum: "partner_app". Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string. Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.  Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string. Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.  Value enum: "installed_merchants".
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
