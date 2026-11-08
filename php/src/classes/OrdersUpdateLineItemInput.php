<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read array{'description'?: string|null, 'expected_ship_date'?: string|null, 'expected_version'?: int, 'gift_card_face_value_money'?: mixed, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<mixed>, 'name'?: string, 'quantity'?: int, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateLineItemInput extends Model {
    /** @param array{'order_id': string, 'order_line_item_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'description'?: string|null, 'expected_ship_date'?: string|null, 'expected_version'?: int, 'gift_card_face_value_money'?: mixed, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<mixed>, 'name'?: string, 'quantity'?: int, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateLineItemInput')); }
    /** Flint order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Flint order line item ID. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
    /** The request body for: Update line item.
     * @return array{'description'?: string|null, 'expected_ship_date'?: string|null, 'expected_version'?: int, 'gift_card_face_value_money'?: mixed, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<mixed>, 'name'?: string, 'quantity'?: int, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: mixed, 'unit_price_money'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
