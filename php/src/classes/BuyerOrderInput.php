<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $active_payment_attempt
 * @property-read OrderAuthorizationAmountsInput|array<array-key, mixed>|\stdClass $authorization_amounts
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read string $buyer_note
 * @property-read list<BuyerOrderChargeInput|array<array-key, mixed>|\stdClass> $charges
 * @property-read list<string> $checkout_session_ids
 * @property-read string|\DateTimeInterface $closed_at
 * @property-read string $closed_reason
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read OrderDeliveryDestinationInput|array<array-key, mixed>|\stdClass $delivery_destination
 * @property-read list<OrderDiscountInput|array<array-key, mixed>|\stdClass> $discounts
 * @property-read string $fulfillment_status
 * @property-read list<BuyerFulfillmentInput|array<array-key, mixed>|\stdClass> $fulfillments
 * @property-read OrderGiftCardEstimateInput|array<array-key, mixed>|\stdClass $gift_card_estimate
 * @property-read list<OrderGiftCardSettlementInput|array<array-key, mixed>|\stdClass> $gift_card_settlements
 * @property-read bool $gift_card_tender_enabled
 * @property-read list<OrderGiftCardSelectionInput|array<array-key, mixed>|\stdClass> $gift_cards
 * @property-read string|null $governing_delivery_selection_id
 * @property-read list<BuyerOrderLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchant_id
 * @property-read string $order_id
 * @property-read string $order_number
 * @property-read string $origin
 * @property-read BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass $payment_collection
 * @property-read list<string> $payment_intent_ids
 * @property-read string $payment_link_id
 * @property-read string $payment_status
 * @property-read PricingAmountsInput|array<array-key, mixed>|\stdClass $pricing_amounts
 * @property-read list<string> $refund_ids
 * @property-read string $refund_status
 * @property-read list<OrderReturnCreditSettlementInput|array<array-key, mixed>|\stdClass> $return_credit_settlements
 * @property-read string $return_resolution_id
 * @property-read SettlementAmountsInput|array<array-key, mixed>|\stdClass $settlement_amounts
 * @property-read BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass $setup_collection
 * @property-read string $status
 * @property-read int $subscription_cycle
 * @property-read string|\DateTimeInterface $subscription_delivery_changed_at
 * @property-read string $subscription_id
 * @property-read string $subscription_plan_id
 * @property-read BuyerOrderTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read TicketedEventInput|array<array-key, mixed>|\stdClass $ticketed_event
 * @property-read list<BuyerTipInput|array<array-key, mixed>|\stdClass> $tips
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerOrderInput extends Model {
    /** @param array{'active_payment_attempt'?: BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, 'authorization_amounts'?: OrderAuthorizationAmountsInput|array<array-key, mixed>|\stdClass, 'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'buyer_note'?: string, 'charges': list<BuyerOrderChargeInput|array<array-key, mixed>|\stdClass>, 'checkout_session_ids': list<string>, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'delivery_destination'?: OrderDeliveryDestinationInput|array<array-key, mixed>|\stdClass, 'discounts': list<OrderDiscountInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'fulfillments': list<BuyerFulfillmentInput|array<array-key, mixed>|\stdClass>, 'gift_card_estimate'?: OrderGiftCardEstimateInput|array<array-key, mixed>|\stdClass, 'gift_card_settlements': list<OrderGiftCardSettlementInput|array<array-key, mixed>|\stdClass>, 'gift_card_tender_enabled': bool, 'gift_cards': list<OrderGiftCardSelectionInput|array<array-key, mixed>|\stdClass>, 'governing_delivery_selection_id': string|null, 'line_items': list<BuyerOrderLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_id'?: string, 'order_id': string, 'order_number'?: string, 'origin'?: string, 'payment_collection'?: BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent_ids': list<string>, 'payment_link_id'?: string, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_ids': list<string>, 'refund_status': string, 'return_credit_settlements': list<OrderReturnCreditSettlementInput|array<array-key, mixed>|\stdClass>, 'return_resolution_id'?: string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'setup_collection'?: BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_cycle'?: int, 'subscription_delivery_changed_at'?: string|\DateTimeInterface, 'subscription_id'?: string, 'subscription_plan_id'?: string, 'tax': BuyerOrderTaxInput|array<array-key, mixed>|\stdClass, 'ticketed_event'?: TicketedEventInput|array<array-key, mixed>|\stdClass, 'tips': list<BuyerTipInput|array<array-key, mixed>|\stdClass>, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerOrderInput')); }
    /** An attempt to pay an order.
     * @return BuyerOrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When active_payment_attempt is omitted; use hasActivePaymentAttempt() or valueOrDefault().
     */
    public function getActivePaymentAttempt(): mixed { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** The amounts authorized and still capturable on an order's payments, with the authorization expiry.
     * @return OrderAuthorizationAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When authorization_amounts is omitted; use hasAuthorizationAmounts() or valueOrDefault().
     */
    public function getAuthorizationAmounts(): mixed { return $this->get('authorization_amounts'); }
    public function hasAuthorizationAmounts(): bool { return $this->has('authorization_amounts'); }
    /** What the buyer can do with the order, in this order: start_return, then resend_receipt. A buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both every time; a merchant read gets an empty list. A list of orders leaves start_return out, since only a read of one order checks return eligibility. start_return is due when the last open return window ends. Example: []. [] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout.
     * @return CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** buyer_note
     * @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /**  [] (Value): {@see BuyerOrderChargeInput}. An additional charge applied to an order.
     * @return list<BuyerOrderChargeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When checkout_session_ids is omitted; use hasCheckoutSessionIds() or valueOrDefault().
     */
    public function getCheckoutSessionIds(): array { return $this->get('checkout_session_ids'); }
    public function hasCheckoutSessionIds(): bool { return $this->has('checkout_session_ids'); }
    /** When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string|\DateTimeInterface { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * @return string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** customer_id
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from.
     * @return OrderDeliveryDestinationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /**  [] (Value): {@see OrderDiscountInput}. A discount applied to an order, with its amount, status, and the line items and charges it covers. It comes from a manual discount or a promotion.
     * @return list<OrderDiscountInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * @return string
     * @throws SdkError When fulfillment_status is omitted; use hasFulfillmentStatus() or valueOrDefault().
     */
    public function getFulfillmentStatus(): string { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /**  [] (Value): {@see BuyerFulfillmentInput}. Work required to deliver an order's items.
     * @return list<BuyerFulfillmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When fulfillments is omitted; use hasFulfillments() or valueOrDefault().
     */
    public function getFulfillments(): array { return $this->get('fulfillments'); }
    public function hasFulfillments(): bool { return $this->has('fulfillments'); }
    /** An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.
     * @return OrderGiftCardEstimateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_estimate is omitted; use hasGiftCardEstimate() or valueOrDefault().
     */
    public function getGiftCardEstimate(): mixed { return $this->get('gift_card_estimate'); }
    public function hasGiftCardEstimate(): bool { return $this->has('gift_card_estimate'); }
    /**  [] (Value): {@see OrderGiftCardSettlementInput}. A gift card redemption applied to an order payment, with the amount, tip, and gift card.
     * @return list<OrderGiftCardSettlementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_card_settlements is omitted; use hasGiftCardSettlements() or valueOrDefault().
     */
    public function getGiftCardSettlements(): array { return $this->get('gift_card_settlements'); }
    public function hasGiftCardSettlements(): bool { return $this->has('gift_card_settlements'); }
    /** gift_card_tender_enabled
     * @return bool
     * @throws SdkError When gift_card_tender_enabled is omitted; use hasGiftCardTenderEnabled() or valueOrDefault().
     */
    public function getGiftCardTenderEnabled(): bool { return $this->get('gift_card_tender_enabled'); }
    public function hasGiftCardTenderEnabled(): bool { return $this->has('gift_card_tender_enabled'); }
    /**  [] (Value): {@see OrderGiftCardSelectionInput}. A gift card available to pay an order, with its available balance and the last four characters of its code.
     * @return list<OrderGiftCardSelectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** ID of the delivery selection that governs this order, including pickup choices without a delivery destination. Null when no selection governs the order. While set, change the destination through the delivery selection.
     * @return string|null
     * @throws SdkError When governing_delivery_selection_id is omitted; use hasGoverningDeliverySelectionId() or valueOrDefault().
     */
    public function getGoverningDeliverySelectionId(): string|null { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /**  [] (Value): {@see BuyerOrderLineItemInput}. An item purchased in an order.
     * @return list<BuyerOrderLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** order_id
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** order_number
     * @return string
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     * @return string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values.
     * @return BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): mixed { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * @return string
     * @throws SdkError When payment_status is omitted; use hasPaymentStatus() or valueOrDefault().
     */
    public function getPaymentStatus(): string { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     * @return PricingAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pricing_amounts is omitted; use hasPricingAmounts() or valueOrDefault().
     */
    public function getPricingAmounts(): mixed { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When refund_ids is omitted; use hasRefundIds() or valueOrDefault().
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. [] (Value): {@see OrderReturnCreditSettlementInput}. A return credit applied to an order payment, with the amount and the return and resolution it came from.
     * @return list<OrderReturnCreditSettlementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_credit_settlements is omitted; use hasReturnCreditSettlements() or valueOrDefault().
     */
    public function getReturnCreditSettlements(): array { return $this->get('return_credit_settlements'); }
    public function hasReturnCreditSettlements(): bool { return $this->has('return_credit_settlements'); }
    /** ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create.
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain.
     * @return SettlementAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When settlement_amounts is omitted; use hasSettlementAmounts() or valueOrDefault().
     */
    public function getSettlementAmounts(): mixed { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values.
     * @return BuyerPaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_collection is omitted; use hasSetupCollection() or valueOrDefault().
     */
    public function getSetupCollection(): mixed { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When subscription_cycle is omitted; use hasSubscriptionCycle() or valueOrDefault().
     */
    public function getSubscriptionCycle(): int { return $this->get('subscription_cycle'); }
    public function hasSubscriptionCycle(): bool { return $this->has('subscription_cycle'); }
    /** Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When subscription_delivery_changed_at is omitted; use hasSubscriptionDeliveryChangedAt() or valueOrDefault().
     */
    public function getSubscriptionDeliveryChangedAt(): string|\DateTimeInterface { return $this->get('subscription_delivery_changed_at'); }
    public function hasSubscriptionDeliveryChangedAt(): bool { return $this->has('subscription_delivery_changed_at'); }
    /** subscription_id
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** subscription_plan_id
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Tax details on a buyer's order: whether tax is enabled, its mode and status, location, exemption, and tax breakdowns.
     * @return BuyerOrderTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued.
     * @return TicketedEventInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When ticketed_event is omitted; use hasTicketedEvent() or valueOrDefault().
     */
    public function getTicketedEvent(): mixed { return $this->get('ticketed_event'); }
    public function hasTicketedEvent(): bool { return $this->has('ticketed_event'); }
    /**  [] (Value): {@see BuyerTipInput}. A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how it was allocated to payments.
     * @return list<BuyerTipInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tips is omitted; use hasTips() or valueOrDefault().
     */
    public function getTips(): array { return $this->get('tips'); }
    public function hasTips(): bool { return $this->has('tips'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: int64.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
