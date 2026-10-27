<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $activity_type
 * @property-read SignedMoney $balance_delta_money
 * @property-read ?string $checkout_session_id
 * @property-read ?string $created_at
 * @property-read string $description
 * @property-read ?string $fulfillment_id
 * @property-read string $order_activity_id
 * @property-read ?string $order_charge_id
 * @property-read ?string $order_discount_id
 * @property-read ?string $order_line_item_id
 * @property-read ?string $order_tip_id
 * @property-read ?string $payment_intent_id
 * @property-read ?string $refund_id
 * @property-read SignedMoney $running_balance_money
 * Presence-aware response; omitted optional fields return null. */
final class OrderActivity extends Model {
    /** @param array{'activity_type'?: string, 'balance_delta_money': mixed, 'checkout_session_id'?: string, 'created_at'?: string, 'description': string, 'fulfillment_id'?: string, 'order_activity_id': string, 'order_charge_id'?: string, 'order_discount_id'?: string, 'order_line_item_id'?: string, 'order_tip_id'?: string, 'payment_intent_id'?: string, 'refund_id'?: string, 'running_balance_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderActivity')); }
    /** Shape $ (Value): string. The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Value enum: "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied", "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed".
     * @return ?string
     */
    public function getActivityType(): ?string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** Shape $ (Value): {@see SignedMoney}. Change to the order balance narrated by this row. Informational rows have amount 0. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getBalanceDeltaMoney(): SignedMoney { return $this->get('balance_delta_money'); }
    public function hasBalanceDeltaMoney(): bool { return $this->has('balance_delta_money'); }
    /** Shape $ (Value): string. Related checkout session when activity_type points at checkout session lifecycle.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Human-readable Flint description. Provider-specific raw statuses and failure values are not exposed here.
     * @return string
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getFulfillmentId(): ?string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderActivityId(): string { return $this->get('order_activity_id'); }
    public function hasOrderActivityId(): bool { return $this->has('order_activity_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderChargeId(): ?string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderDiscountId(): ?string { return $this->get('order_discount_id'); }
    public function hasOrderDiscountId(): bool { return $this->has('order_discount_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderLineItemId(): ?string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderTipId(): ?string { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** Shape $ (Value): string. Related payment intent when activity_type points at a payment attempt or payment outcome.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome.
     * @return ?string
     */
    public function getRefundId(): ?string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Shape $ (Value): {@see SignedMoney}. Order balance after this activity in chronological time. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getRunningBalanceMoney(): SignedMoney { return $this->get('running_balance_money'); }
    public function hasRunningBalanceMoney(): bool { return $this->has('running_balance_money'); }
}
