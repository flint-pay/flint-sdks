<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $balance_delta_money
 * @property-read string $checkout_session_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $dispute_id
 * @property-read string $fulfillment_id
 * @property-read string $order_activity_id
 * @property-read string $order_charge_id
 * @property-read string $order_discount_id
 * @property-read string $order_id
 * @property-read string $order_line_item_id
 * @property-read string $order_tip_id
 * @property-read string $payment_intent_id
 * @property-read string $payment_review_id
 * @property-read string $refund_id
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $running_balance_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderActivityInput extends Model {
    /** @param array{'activity_type'?: string, 'balance_delta_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'checkout_session_id'?: string, 'created_at': string|\DateTimeInterface, 'description': string, 'dispute_id'?: string, 'fulfillment_id'?: string, 'order_activity_id': string, 'order_charge_id'?: string, 'order_discount_id'?: string, 'order_id': string, 'order_line_item_id'?: string, 'order_tip_id'?: string, 'payment_intent_id'?: string, 'payment_review_id'?: string, 'refund_id'?: string, 'running_balance_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderActivityInput')); }
    /** The action recorded on the order. Omitted when the activity type cannot be identified. Clients must accept values added in future releases. Value enum: "created", "dispute_opened", "dispute_closed", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied", "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_edited", "payment_review_opened", "payment_review_closed", "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed".
     * @return string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** Signed change this row made to the order balance: running_balance_money minus the balance before the row. Rows that do not change the balance, such as payment_failed, refund_failed, and most refund rows, have amount 0. A payment or refund amount is on the referenced resource. Do not sum activity deltas to compute the order balance. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When balance_delta_money is omitted; use hasBalanceDeltaMoney() or valueOrDefault().
     */
    public function getBalanceDeltaMoney(): mixed { return $this->get('balance_delta_money'); }
    public function hasBalanceDeltaMoney(): bool { return $this->has('balance_delta_money'); }
    /** Related checkout session when activity_type points at checkout session lifecycle. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /** Related Flint dispute, prefixed du_, for dispute_opened and dispute_closed activities. Omitted for other activities. Dispute activities do not change the order balance. Merchant reads only. Buyer activity lists omit it. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Related fulfillment for a fulfillment_created, fulfillment_updated, or fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Unique identifier for this activity, prefixed oact_. Example: "oact_01KEZF7C006V2DKWC7N41DXD7T".
     * @return string
     * @throws SdkError When order_activity_id is omitted; use hasOrderActivityId() or valueOrDefault().
     */
    public function getOrderActivityId(): string { return $this->get('order_activity_id'); }
    public function hasOrderActivityId(): bool { return $this->has('order_activity_id'); }
    /** Related charge for a charge_added, charge_updated, charge_removed, or charge_fulfillment_updated activity. Omitted when the row does not identify one charge. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** Related discount for a discount_applied or discount_removed activity. Omitted when the row does not identify one discount. Example: "ad_01KEZF7C00T30DH97GR0A9BF31".
     * @return string
     * @throws SdkError When order_discount_id is omitted; use hasOrderDiscountId() or valueOrDefault().
     */
    public function getOrderDiscountId(): string { return $this->get('order_discount_id'); }
    public function hasOrderDiscountId(): bool { return $this->has('order_discount_id'); }
    /** Order that owns this record or its referenced line item and charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Related line item for a line_item_added, line_item_updated, or line_item_removed activity. Omitted when the row does not identify one line item. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Related requested tip for a requested_tip_added, requested_tip_updated, or requested_tip_removed activity. Omitted when the row does not identify one tip. Example: "tip_01KEZF7C00JRPYP11RTMB97MYH".
     * @return string
     * @throws SdkError When order_tip_id is omitted; use hasOrderTipId() or valueOrDefault().
     */
    public function getOrderTipId(): string { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** Related payment intent when activity_type points at a payment attempt or payment outcome. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Payment review recorded by this row. Omitted for activities unrelated to payment reviews. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     * @return string
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Related refund when activity_type points at a refund outcome. Read the refund for the authoritative outcome. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Signed order balance just after this row: settlement_amounts.outstanding_money minus settlement_amounts.overpaid_money at that moment, negative when the order is overpaid. This is context for reading the log, not a reconciliation ledger. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When running_balance_money is omitted; use hasRunningBalanceMoney() or valueOrDefault().
     */
    public function getRunningBalanceMoney(): mixed { return $this->get('running_balance_money'); }
    public function hasRunningBalanceMoney(): bool { return $this->has('running_balance_money'); }
}
