<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $balance_delta_money
 * @property-read string $checkout_session_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $fulfillment_id
 * @property-read string $order_activity_id
 * @property-read string $order_charge_id
 * @property-read string $order_discount_id
 * @property-read string $order_line_item_id
 * @property-read string $order_tip_id
 * @property-read string $payment_intent_id
 * @property-read string $refund_id
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $running_balance_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderActivityInput extends Model {
    /** @param array{'activity_type'?: string, 'balance_delta_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'checkout_session_id'?: string, 'created_at'?: string|\DateTimeInterface, 'description': string, 'fulfillment_id'?: string, 'order_activity_id': string, 'order_charge_id'?: string, 'order_discount_id'?: string, 'order_line_item_id'?: string, 'order_tip_id'?: string, 'payment_intent_id'?: string, 'refund_id'?: string, 'running_balance_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderActivityInput')); }
    /** The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Value enum: "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied", "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed".
     * @return string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** Change to the order balance narrated by this row. Informational rows have amount 0. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_delta_money is omitted; use hasBalanceDeltaMoney() or valueOrDefault().
     */
    public function getBalanceDeltaMoney(): mixed { return $this->get('balance_delta_money'); }
    public function hasBalanceDeltaMoney(): bool { return $this->has('balance_delta_money'); }
    /** Related checkout session when activity_type points at checkout session lifecycle.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Human-readable Flint description. Provider-specific raw statuses and failure values are not exposed here.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Related fulfillment for a fulfillment_created, fulfillment_updated, or fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Unique identifier for this activity, prefixed oact_.
     * @return string
     * @throws SdkError When order_activity_id is omitted; use hasOrderActivityId() or valueOrDefault().
     */
    public function getOrderActivityId(): string { return $this->get('order_activity_id'); }
    public function hasOrderActivityId(): bool { return $this->has('order_activity_id'); }
    /** Related charge for a charge_added, charge_updated, charge_removed, or charge_fulfillment_updated activity. Omitted when the row does not identify one charge.
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Related discount for a discount_applied or discount_removed activity. Omitted when the row does not identify one discount.
     * @return string
     * @throws SdkError When order_discount_id is omitted; use hasOrderDiscountId() or valueOrDefault().
     */
    public function getOrderDiscountId(): string { return $this->get('order_discount_id'); }
    public function hasOrderDiscountId(): bool { return $this->has('order_discount_id'); }
    /** Related line item for a line_item_added, line_item_updated, or line_item_removed activity. Omitted when the row does not identify one line item.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Related requested tip for a requested_tip_added, requested_tip_updated, or requested_tip_removed activity. Omitted when the row does not identify one tip.
     * @return string
     * @throws SdkError When order_tip_id is omitted; use hasOrderTipId() or valueOrDefault().
     */
    public function getOrderTipId(): string { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** Related payment intent when activity_type points at a payment attempt or payment outcome.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome.
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Order balance after this activity in chronological time. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When running_balance_money is omitted; use hasRunningBalanceMoney() or valueOrDefault().
     */
    public function getRunningBalanceMoney(): mixed { return $this->get('running_balance_money'); }
    public function hasRunningBalanceMoney(): bool { return $this->has('running_balance_money'); }
}
