<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'available_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'code_source': string, 'created_at': string|\DateTimeInterface, 'currency': string, 'customer_id': string|null, 'external_reference_id': string|null, 'gift_card_id': string, 'last_loaded_at': string|\DateTimeInterface|null, 'last_redeemed_at': string|\DateTimeInterface|null, 'last4': string, 'merchant_id': string, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'restrictions': list<GiftCardRestrictionInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardCreatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'available_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'code_source': string, 'created_at': string|\DateTimeInterface, 'currency': string, 'customer_id': string|null, 'external_reference_id': string|null, 'gift_card_id': string, 'last_loaded_at': string|\DateTimeInterface|null, 'last_redeemed_at': string|\DateTimeInterface|null, 'last4': string, 'merchant_id': string, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'restrictions': list<GiftCardRestrictionInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCreatedInstalledMerchantsEventInput')); }
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
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. object.available_money (Required): {@see MoneyValueInput}. The balance minus reserved value: what can be spent now. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.balance_money (Required): {@see MoneyValueInput}. The posted balance, including value reserved for redemptions in progress. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.code_source (Required): string. Origin of the current code: generated means Flint issued a random code; imported means the merchant supplied an existing code during import. Rotating the code resets this to generated. Value enum: "generated", "imported". object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD". object.customer_id (Required): string or null. ID of the customer associated with the card. `null` when no customer is associated. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id (Required): string or null. Caller-owned identifier for this resource in an external system. `null` when none is set. minLength: 1. maxLength: 255. Example: "warehouse-1842". object.gift_card_id (Required): string. Unique identifier for this gift card, prefixed `gc_`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.last_loaded_at (Required): string or null. RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: date-time. Example: "2026-08-02T16:00:00Z". object.last_redeemed_at (Required): string or null. RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.last4 (Required): string. Last four characters of the card's current code. minLength: 4. maxLength: 4. object.merchant_id (Required): string. ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.reserved_money (Required): {@see MoneyValueInput}. Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.restrictions (Required): Array of {@see GiftCardRestrictionInput}. The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. object.restrictions[] (Value): {@see GiftCardRestrictionInput}. A restriction on a gift card, either a merchant freeze or a funding dispute, with its reason or dispute details. object.status (Required): string. Where the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending", "active", "frozen", "closed". object.supported_actions (Required): Array of string. Lifecycle actions accepted for the stored card state, independent of the caller's credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.supported_actions[] (Value): string.  Value enum: "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array{'available_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'balance_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'code_source': string, 'created_at': string|\DateTimeInterface, 'currency': string, 'customer_id': string|null, 'external_reference_id': string|null, 'gift_card_id': string, 'last_loaded_at': string|\DateTimeInterface|null, 'last_redeemed_at': string|\DateTimeInterface|null, 'last4': string, 'merchant_id': string, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'restrictions': list<GiftCardRestrictionInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
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
    /** The resource change or condition this event announces. Value enum: "gift_card.created".
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
