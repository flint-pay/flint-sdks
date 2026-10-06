<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read SignedMoney $balance_delta_money
 * @property-read string $checkout_session_id
 * @property-read string $created_at
 * @property-read string $description
 * @property-read string $fulfillment_id
 * @property-read string $order_activity_id
 * @property-read string $order_charge_id
 * @property-read string $order_discount_id
 * @property-read string $order_line_item_id
 * @property-read string $order_tip_id
 * @property-read string $payment_intent_id
 * @property-read string $refund_id
 * @property-read SignedMoney $running_balance_money
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderActivity extends Model {
    /** @param array{'activity_type'?: string, 'balance_delta_money': object{'amount': string, 'currency': string}, 'checkout_session_id'?: string, 'created_at'?: string, 'description': string, 'fulfillment_id'?: string, 'order_activity_id': string, 'order_charge_id'?: string, 'order_discount_id'?: string, 'order_line_item_id'?: string, 'order_tip_id'?: string, 'payment_intent_id'?: string, 'refund_id'?: string, 'running_balance_money': object{'amount': string, 'currency': string}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderActivity')); }
    /** @return string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** @return SignedMoney
     * @throws SdkError When balance_delta_money is omitted; use hasBalanceDeltaMoney() or valueOrDefault().
     */
    public function getBalanceDeltaMoney(): SignedMoney { return $this->get('balance_delta_money'); }
    public function hasBalanceDeltaMoney(): bool { return $this->has('balance_delta_money'); }
    /** @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** @return string
     * @throws SdkError When order_activity_id is omitted; use hasOrderActivityId() or valueOrDefault().
     */
    public function getOrderActivityId(): string { return $this->get('order_activity_id'); }
    public function hasOrderActivityId(): bool { return $this->has('order_activity_id'); }
    /** @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
    /** @return string
     * @throws SdkError When order_discount_id is omitted; use hasOrderDiscountId() or valueOrDefault().
     */
    public function getOrderDiscountId(): string { return $this->get('order_discount_id'); }
    public function hasOrderDiscountId(): bool { return $this->has('order_discount_id'); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When order_tip_id is omitted; use hasOrderTipId() or valueOrDefault().
     */
    public function getOrderTipId(): string { return $this->get('order_tip_id'); }
    public function hasOrderTipId(): bool { return $this->has('order_tip_id'); }
    /** @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** @return SignedMoney
     * @throws SdkError When running_balance_money is omitted; use hasRunningBalanceMoney() or valueOrDefault().
     */
    public function getRunningBalanceMoney(): SignedMoney { return $this->get('running_balance_money'); }
    public function hasRunningBalanceMoney(): bool { return $this->has('running_balance_money'); }
}
