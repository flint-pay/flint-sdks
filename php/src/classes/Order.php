<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPaymentAttempt $active_payment_attempt
 * @property-read list<AppliedDiscount> $applied_discounts
 * @property-read OrderAuthorizationAmounts $authorization_amounts
 * @property-read list<BuyerAction> $buyer_actions
 * @property-read string $buyer_email
 * @property-read string $buyer_note
 * @property-read string $buyer_phone
 * @property-read list<OrderCharge> $charges
 * @property-read list<string> $checkout_session_ids
 * @property-read string $closed_reason
 * @property-read string $created_at
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read string $customer_id
 * @property-read OrderDeliveryDestination $delivery_destination
 * @property-read string $external_reference_id
 * @property-read string $fulfillment_status
 * @property-read list<Fulfillment> $fulfillments
 * @property-read OrderGiftCardEstimate $gift_card_estimate
 * @property-read list<OrderGiftCardSettlement> $gift_card_settlements
 * @property-read bool $gift_card_tender_enabled
 * @property-read list<OrderGiftCardSelection> $gift_cards
 * @property-read string $internal_note
 * @property-read string $inventory_exception_status
 * @property-read string $inventory_reservation_id
 * @property-read InventoryRoutingSource $inventory_routing_source
 * @property-read list<OrderLineItem> $line_items
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $order_id
 * @property-read string $order_number
 * @property-read string $order_revision
 * @property-read string $origin
 * @property-read PaymentCollection $payment_collection
 * @property-read list<string> $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummary> $payment_intents
 * @property-read string $payment_status
 * @property-read string $plan_id
 * @property-read PricingAmounts $pricing_amounts
 * @property-read PurchasedEvent $purchased_event
 * @property-read list<string> $refund_ids
 * @property-read string $refund_status
 * @property-read RequestedTip $requested_tip
 * @property-read SettlementAmounts $settlement_amounts
 * @property-read PaymentCollection $setup_collection
 * @property-read string $status
 * @property-read ExpandedSubscriptionSummary|null $subscription
 * @property-read string $subscription_id
 * @property-read ExpandedSubscriptionPlanSummary|null $subscription_plan
 * @property-read OrderTax $tax
 * @property-read list<Tip> $tips
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class Order extends Model {
    /** @param array{'active_payment_attempt'?: object{'completed_at'?: string, 'expected_outstanding_money': mixed, 'failure_code'?: string, 'failure_message'?: string, 'gift_card_redemptions'?: list<mixed>, 'is_resumable': bool, 'mode': string, 'payment_attempt_id': string, 'payment_intents'?: list<mixed>, 'pending_actions'?: list<mixed>, 'started_at'?: string, 'status': string}, 'applied_discounts'?: list<mixed>, 'authorization_amounts'?: object{'authorized_money': mixed, 'capturable_money': mixed, 'expires_at'?: string}, 'buyer_actions': list<mixed>, 'buyer_email'?: string, 'buyer_note'?: string, 'buyer_phone'?: string, 'charges'?: list<mixed>, 'checkout_session_ids'?: list<string>, 'closed_reason'?: string, 'created_at'?: string, 'customer'?: mixed, 'customer_id'?: string, 'delivery_destination'?: object{'address': mixed, 'delivery_selection_id'?: string, 'frozen_at'?: string, 'recipient'?: mixed, 'source': string}, 'external_reference_id'?: string, 'fulfillment_status'?: string, 'fulfillments'?: list<mixed>, 'gift_card_estimate'?: object{'can_pay': bool, 'gift_card_money': mixed, 'gift_cards': list<mixed>, 'is_reserved': bool, 'order_revision': string, 'processor_money': mixed}, 'gift_card_settlements'?: list<mixed>, 'gift_card_tender_enabled'?: bool, 'gift_cards'?: list<mixed>, 'internal_note'?: string, 'inventory_exception_status'?: string, 'inventory_reservation_id'?: string, 'inventory_routing_source'?: object{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_version_id'?: string, 'location_id'?: string, 'location_ids'?: list<string>, 'type': string}, 'line_items': list<mixed>, 'merchant_id'?: string, 'metadata'?: \stdClass, 'order_id': string, 'order_number'?: string, 'order_revision'?: string, 'origin'?: string, 'payment_collection'?: object{'stripe'?: mixed}, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<mixed>, 'payment_status': string, 'plan_id'?: string, 'pricing_amounts': object{'charge_money': mixed, 'discount_money': mixed, 'requested_tip_money': mixed, 'subtotal_money': mixed, 'tax_money': mixed, 'total_money': mixed}, 'purchased_event'?: object{'location'?: string, 'name': string, 'starts_at'?: string, 'timezone'?: string}, 'refund_ids'?: list<string>, 'refund_status': string, 'requested_tip'?: mixed, 'settlement_amounts': object{'balance_money': mixed, 'credit_money': mixed, 'net_collected_money': mixed, 'outstanding_money': mixed, 'paid_money': mixed, 'refunded_money': mixed, 'settled_tip_money': mixed}, 'setup_collection'?: object{'stripe'?: mixed}, 'status': string, 'subscription'?: mixed, 'subscription_id'?: string, 'subscription_plan'?: mixed, 'tax': object{'automatic_profile'?: string, 'available_location_inputs'?: list<string>, 'enabled': bool, 'exemption'?: mixed, 'failure_reason'?: string, 'location'?: mixed, 'mode': string, 'status': string, 'tax_breakdowns'?: list<mixed>, 'taxability_reason': string}, 'tips'?: list<mixed>, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Order')); }
    /** @return OrderPaymentAttempt
     * @throws SdkError When active_payment_attempt is omitted; use hasActivePaymentAttempt() or valueOrDefault().
     */
    public function getActivePaymentAttempt(): OrderPaymentAttempt { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** @return list<AppliedDiscount>
     * @throws SdkError When applied_discounts is omitted; use hasAppliedDiscounts() or valueOrDefault().
     */
    public function getAppliedDiscounts(): array { return $this->get('applied_discounts'); }
    public function hasAppliedDiscounts(): bool { return $this->has('applied_discounts'); }
    /** @return OrderAuthorizationAmounts
     * @throws SdkError When authorization_amounts is omitted; use hasAuthorizationAmounts() or valueOrDefault().
     */
    public function getAuthorizationAmounts(): OrderAuthorizationAmounts { return $this->get('authorization_amounts'); }
    public function hasAuthorizationAmounts(): bool { return $this->has('authorization_amounts'); }
    /** @return list<BuyerAction>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** @return string
     * @throws SdkError When buyer_email is omitted; use hasBuyerEmail() or valueOrDefault().
     */
    public function getBuyerEmail(): string { return $this->get('buyer_email'); }
    public function hasBuyerEmail(): bool { return $this->has('buyer_email'); }
    /** @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** @return string
     * @throws SdkError When buyer_phone is omitted; use hasBuyerPhone() or valueOrDefault().
     */
    public function getBuyerPhone(): string { return $this->get('buyer_phone'); }
    public function hasBuyerPhone(): bool { return $this->has('buyer_phone'); }
    /** @return list<OrderCharge>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** @return list<string>
     * @throws SdkError When checkout_session_ids is omitted; use hasCheckoutSessionIds() or valueOrDefault().
     */
    public function getCheckoutSessionIds(): array { return $this->get('checkout_session_ids'); }
    public function hasCheckoutSessionIds(): bool { return $this->has('checkout_session_ids'); }
    /** @return string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return ExpandedCustomerSummary|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return OrderDeliveryDestination
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): OrderDeliveryDestination { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When fulfillment_status is omitted; use hasFulfillmentStatus() or valueOrDefault().
     */
    public function getFulfillmentStatus(): string { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** @return list<Fulfillment>
     * @throws SdkError When fulfillments is omitted; use hasFulfillments() or valueOrDefault().
     */
    public function getFulfillments(): array { return $this->get('fulfillments'); }
    public function hasFulfillments(): bool { return $this->has('fulfillments'); }
    /** @return OrderGiftCardEstimate
     * @throws SdkError When gift_card_estimate is omitted; use hasGiftCardEstimate() or valueOrDefault().
     */
    public function getGiftCardEstimate(): OrderGiftCardEstimate { return $this->get('gift_card_estimate'); }
    public function hasGiftCardEstimate(): bool { return $this->has('gift_card_estimate'); }
    /** @return list<OrderGiftCardSettlement>
     * @throws SdkError When gift_card_settlements is omitted; use hasGiftCardSettlements() or valueOrDefault().
     */
    public function getGiftCardSettlements(): array { return $this->get('gift_card_settlements'); }
    public function hasGiftCardSettlements(): bool { return $this->has('gift_card_settlements'); }
    /** @return bool
     * @throws SdkError When gift_card_tender_enabled is omitted; use hasGiftCardTenderEnabled() or valueOrDefault().
     */
    public function getGiftCardTenderEnabled(): bool { return $this->get('gift_card_tender_enabled'); }
    public function hasGiftCardTenderEnabled(): bool { return $this->has('gift_card_tender_enabled'); }
    /** @return list<OrderGiftCardSelection>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** @return string
     * @throws SdkError When inventory_exception_status is omitted; use hasInventoryExceptionStatus() or valueOrDefault().
     */
    public function getInventoryExceptionStatus(): string { return $this->get('inventory_exception_status'); }
    public function hasInventoryExceptionStatus(): bool { return $this->has('inventory_exception_status'); }
    /** @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** @return InventoryRoutingSource
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): InventoryRoutingSource { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return list<OrderLineItem>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** @return string
     * @throws SdkError When order_revision is omitted; use hasOrderRevision() or valueOrDefault().
     */
    public function getOrderRevision(): string { return $this->get('order_revision'); }
    public function hasOrderRevision(): bool { return $this->has('order_revision'); }
    /** @return string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** @return PaymentCollection
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): PaymentCollection { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** @return list<ExpandedPaymentIntentSummary>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** @return string
     * @throws SdkError When payment_status is omitted; use hasPaymentStatus() or valueOrDefault().
     */
    public function getPaymentStatus(): string { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** @return string
     * @throws SdkError When plan_id is omitted; use hasPlanId() or valueOrDefault().
     */
    public function getPlanId(): string { return $this->get('plan_id'); }
    public function hasPlanId(): bool { return $this->has('plan_id'); }
    /** @return PricingAmounts
     * @throws SdkError When pricing_amounts is omitted; use hasPricingAmounts() or valueOrDefault().
     */
    public function getPricingAmounts(): PricingAmounts { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** @return PurchasedEvent
     * @throws SdkError When purchased_event is omitted; use hasPurchasedEvent() or valueOrDefault().
     */
    public function getPurchasedEvent(): PurchasedEvent { return $this->get('purchased_event'); }
    public function hasPurchasedEvent(): bool { return $this->has('purchased_event'); }
    /** @return list<string>
     * @throws SdkError When refund_ids is omitted; use hasRefundIds() or valueOrDefault().
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** @return RequestedTip
     * @throws SdkError When requested_tip is omitted; use hasRequestedTip() or valueOrDefault().
     */
    public function getRequestedTip(): RequestedTip { return $this->get('requested_tip'); }
    public function hasRequestedTip(): bool { return $this->has('requested_tip'); }
    /** @return SettlementAmounts
     * @throws SdkError When settlement_amounts is omitted; use hasSettlementAmounts() or valueOrDefault().
     */
    public function getSettlementAmounts(): SettlementAmounts { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** @return PaymentCollection
     * @throws SdkError When setup_collection is omitted; use hasSetupCollection() or valueOrDefault().
     */
    public function getSetupCollection(): PaymentCollection { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return ExpandedSubscriptionSummary|null
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): ExpandedSubscriptionSummary|null { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** @return ExpandedSubscriptionPlanSummary|null
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): ExpandedSubscriptionPlanSummary|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** @return OrderTax
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): OrderTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** @return list<Tip>
     * @throws SdkError When tips is omitted; use hasTips() or valueOrDefault().
     */
    public function getTips(): array { return $this->get('tips'); }
    public function hasTips(): bool { return $this->has('tips'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
