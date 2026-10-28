<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass $active_payment_attempt
 * @property-read OrderAuthorizationAmountsInput|array<array-key, mixed>|\stdClass $authorization_amounts
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass $buyer_contact
 * @property-read string $buyer_note
 * @property-read list<OrderChargeInput|array<array-key, mixed>|\stdClass> $charges
 * @property-read list<string> $checkout_session_ids
 * @property-read string|\DateTimeInterface $closed_at
 * @property-read string $closed_reason
 * @property-read string $closed_reason_message
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read OrderDeliveryDestinationInput|array<array-key, mixed>|\stdClass $delivery_destination
 * @property-read list<OrderDiscountInput|array<array-key, mixed>|\stdClass> $discounts
 * @property-read string $external_reference_id
 * @property-read string $fulfillment_status
 * @property-read list<FulfillmentInput|array<array-key, mixed>|\stdClass> $fulfillments
 * @property-read OrderGiftCardEstimateInput|array<array-key, mixed>|\stdClass $gift_card_estimate
 * @property-read list<OrderGiftCardSettlementInput|array<array-key, mixed>|\stdClass> $gift_card_settlements
 * @property-read bool $gift_card_tender_enabled
 * @property-read list<OrderGiftCardSelectionInput|array<array-key, mixed>|\stdClass> $gift_cards
 * @property-read string|null $governing_delivery_selection_id
 * @property-read string $internal_note
 * @property-read string $inventory_exception_reason
 * @property-read string $inventory_exception_resolution_message
 * @property-read string $inventory_exception_status
 * @property-read string $inventory_reservation_id
 * @property-read InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<OrderLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read string $order_number
 * @property-read string $origin
 * @property-read PaymentCollectionInput|array<array-key, mixed>|\stdClass $payment_collection
 * @property-read list<string> $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass> $payment_intents
 * @property-read string $payment_link_id
 * @property-read string $payment_status
 * @property-read PricingAmountsInput|array<array-key, mixed>|\stdClass $pricing_amounts
 * @property-read list<string> $refund_ids
 * @property-read string $refund_status
 * @property-read list<OrderReturnCreditSettlementInput|array<array-key, mixed>|\stdClass> $return_credit_settlements
 * @property-read string $return_resolution_id
 * @property-read SettlementAmountsInput|array<array-key, mixed>|\stdClass $settlement_amounts
 * @property-read PaymentCollectionInput|array<array-key, mixed>|\stdClass $setup_collection
 * @property-read string $status
 * @property-read array{'billing_anchor_day': int, 'cancel_at_period_end': bool, 'created_at'?: string|\DateTimeInterface, 'current_period_end_at'?: string|\DateTimeInterface, 'current_period_start_at'?: string|\DateTimeInterface, 'customer_id': string, 'next_billing_at'?: string|\DateTimeInterface, 'status': string, 'subscription_id': string, 'subscription_plan_id': string, 'terms_type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $subscription
 * @property-read string $subscription_cycle
 * @property-read string|\DateTimeInterface $subscription_delivery_changed_at
 * @property-read string $subscription_id
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $subscription_plan
 * @property-read string $subscription_plan_id
 * @property-read OrderTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read TicketedEventInput|array<array-key, mixed>|\stdClass $ticketed_event
 * @property-read list<TipInput|array<array-key, mixed>|\stdClass> $tips
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderInput extends Model {
    /** @param array{'active_payment_attempt'?: OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass, 'authorization_amounts'?: OrderAuthorizationAmountsInput|array<array-key, mixed>|\stdClass, 'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'buyer_note'?: string, 'charges': list<OrderChargeInput|array<array-key, mixed>|\stdClass>, 'checkout_session_ids': list<string>, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'closed_reason_message'?: string, 'created_at'?: string|\DateTimeInterface, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id'?: string, 'delivery_destination'?: OrderDeliveryDestinationInput|array<array-key, mixed>|\stdClass, 'discounts': list<OrderDiscountInput|array<array-key, mixed>|\stdClass>, 'external_reference_id'?: string, 'fulfillment_status'?: string, 'fulfillments': list<FulfillmentInput|array<array-key, mixed>|\stdClass>, 'gift_card_estimate'?: OrderGiftCardEstimateInput|array<array-key, mixed>|\stdClass, 'gift_card_settlements': list<OrderGiftCardSettlementInput|array<array-key, mixed>|\stdClass>, 'gift_card_tender_enabled': bool, 'gift_cards': list<OrderGiftCardSelectionInput|array<array-key, mixed>|\stdClass>, 'governing_delivery_selection_id': string|null, 'internal_note'?: string, 'inventory_exception_reason'?: string, 'inventory_exception_resolution_message'?: string, 'inventory_exception_status'?: string, 'inventory_reservation_id'?: string, 'inventory_routing_source'?: InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'line_items': list<OrderLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order_id': string, 'order_number'?: string, 'origin'?: string, 'payment_collection'?: PaymentCollectionInput|array<array-key, mixed>|\stdClass, 'payment_intent_ids': list<string>, 'payment_intents'?: list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>, 'payment_link_id'?: string, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_ids': list<string>, 'refund_status': string, 'return_credit_settlements': list<OrderReturnCreditSettlementInput|array<array-key, mixed>|\stdClass>, 'return_resolution_id'?: string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'setup_collection'?: PaymentCollectionInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription'?: array{'billing_anchor_day': int, 'cancel_at_period_end': bool, 'created_at'?: string|\DateTimeInterface, 'current_period_end_at'?: string|\DateTimeInterface, 'current_period_start_at'?: string|\DateTimeInterface, 'customer_id': string, 'next_billing_at'?: string|\DateTimeInterface, 'status': string, 'subscription_id': string, 'subscription_plan_id': string, 'terms_type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'subscription_cycle'?: string, 'subscription_delivery_changed_at'?: string|\DateTimeInterface, 'subscription_id'?: string, 'subscription_plan'?: array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'subscription_plan_id'?: string, 'tax': OrderTaxInput|array<array-key, mixed>|\stdClass, 'ticketed_event'?: TicketedEventInput|array<array-key, mixed>|\stdClass, 'tips': list<TipInput|array<array-key, mixed>|\stdClass>, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderInput')); }
    /** Shape $ (Value): {@see OrderPaymentAttemptInput}. An attempt to pay an order.
     * @return OrderPaymentAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When active_payment_attempt is omitted; use hasActivePaymentAttempt() or valueOrDefault().
     */
    public function getActivePaymentAttempt(): mixed { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** Shape $ (Value): {@see OrderAuthorizationAmountsInput}. The amounts authorized and still capturable on an order's payments, with the authorization expiry.
     * @return OrderAuthorizationAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When authorization_amounts is omitted; use hasAuthorizationAmounts() or valueOrDefault().
     */
    public function getAuthorizationAmounts(): mixed { return $this->get('authorization_amounts'); }
    public function hasAuthorizationAmounts(): bool { return $this->has('authorization_amounts'); }
    /** Shape $ (Value): Array of {@see BuyerActionInput}. What the buyer can do with the order, in this order: start_return, then resend_receipt. A buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both every time; a merchant read gets an empty list. A list of orders leaves start_return out, since only a read of one order checks return eligibility. start_return is due when the last open return window ends. Example: []. Shape $[] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** Shape $ (Value): {@see CheckoutBuyerContactInput}. Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout.
     * @return CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When buyer_note is omitted; use hasBuyerNote() or valueOrDefault().
     */
    public function getBuyerNote(): string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Shape $ (Value): Array of {@see OrderChargeInput}. Shape $[] (Value): {@see OrderChargeInput}. An additional charge applied to an order.
     * @return list<OrderChargeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When checkout_session_ids is omitted; use hasCheckoutSessionIds() or valueOrDefault().
     */
    public function getCheckoutSessionIds(): array { return $this->get('checkout_session_ids'); }
    public function hasCheckoutSessionIds(): bool { return $this->has('checkout_session_ids'); }
    /** Shape $ (Value): string. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When closed_at is omitted; use hasClosedAt() or valueOrDefault().
     */
    public function getClosedAt(): string|\DateTimeInterface { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Shape $ (Value): string. Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * @return string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Shape $ (Value): string. The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer.
     * @return string
     * @throws SdkError When closed_reason_message is omitted; use hasClosedReasonMessage() or valueOrDefault().
     */
    public function getClosedReasonMessage(): string { return $this->get('closed_reason_message'); }
    public function hasClosedReasonMessage(): bool { return $this->has('closed_reason_message'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see ExpandedCustomerSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): {@see OrderDeliveryDestinationInput}. The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from.
     * @return OrderDeliveryDestinationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_destination is omitted; use hasDeliveryDestination() or valueOrDefault().
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Shape $ (Value): Array of {@see OrderDiscountInput}. Shape $[] (Value): {@see OrderDiscountInput}. A discount applied to an order, with its amount, status, and the line items and charges it covers. It comes from a manual discount or a promotion.
     * @return list<OrderDiscountInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When discounts is omitted; use hasDiscounts() or valueOrDefault().
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * @return string
     * @throws SdkError When fulfillment_status is omitted; use hasFulfillmentStatus() or valueOrDefault().
     */
    public function getFulfillmentStatus(): string { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** Shape $ (Value): Array of {@see FulfillmentInput}. Shape $[] (Value): {@see FulfillmentInput}. Work required to deliver an order's items.
     * @return list<FulfillmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When fulfillments is omitted; use hasFulfillments() or valueOrDefault().
     */
    public function getFulfillments(): array { return $this->get('fulfillments'); }
    public function hasFulfillments(): bool { return $this->has('fulfillments'); }
    /** Shape $ (Value): {@see OrderGiftCardEstimateInput}. An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.
     * @return OrderGiftCardEstimateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_estimate is omitted; use hasGiftCardEstimate() or valueOrDefault().
     */
    public function getGiftCardEstimate(): mixed { return $this->get('gift_card_estimate'); }
    public function hasGiftCardEstimate(): bool { return $this->has('gift_card_estimate'); }
    /** Shape $ (Value): Array of {@see OrderGiftCardSettlementInput}. Shape $[] (Value): {@see OrderGiftCardSettlementInput}. A gift card redemption applied to an order payment, with the amount, tip, and gift card.
     * @return list<OrderGiftCardSettlementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_card_settlements is omitted; use hasGiftCardSettlements() or valueOrDefault().
     */
    public function getGiftCardSettlements(): array { return $this->get('gift_card_settlements'); }
    public function hasGiftCardSettlements(): bool { return $this->has('gift_card_settlements'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When gift_card_tender_enabled is omitted; use hasGiftCardTenderEnabled() or valueOrDefault().
     */
    public function getGiftCardTenderEnabled(): bool { return $this->get('gift_card_tender_enabled'); }
    public function hasGiftCardTenderEnabled(): bool { return $this->has('gift_card_tender_enabled'); }
    /** Shape $ (Value): Array of {@see OrderGiftCardSelectionInput}. Shape $[] (Value): {@see OrderGiftCardSelectionInput}. A gift card available to pay an order, with its available balance and the last four characters of its code.
     * @return list<OrderGiftCardSelectionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** Shape $ (Value): string or null. ID of the delivery selection that governs this order, including pickup choices without a delivery destination. Null when no selection governs the order. While set, change the destination through the delivery selection.
     * @return string|null
     * @throws SdkError When governing_delivery_selection_id is omitted; use hasGoverningDeliverySelectionId() or valueOrDefault().
     */
    public function getGoverningDeliverySelectionId(): string|null { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Shape $ (Value): string. Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * @return string
     * @throws SdkError When inventory_exception_reason is omitted; use hasInventoryExceptionReason() or valueOrDefault().
     */
    public function getInventoryExceptionReason(): string { return $this->get('inventory_exception_reason'); }
    public function hasInventoryExceptionReason(): bool { return $this->has('inventory_exception_reason'); }
    /** Shape $ (Value): string. The merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * @return string
     * @throws SdkError When inventory_exception_resolution_message is omitted; use hasInventoryExceptionResolutionMessage() or valueOrDefault().
     */
    public function getInventoryExceptionResolutionMessage(): string { return $this->get('inventory_exception_resolution_message'); }
    public function hasInventoryExceptionResolutionMessage(): bool { return $this->has('inventory_exception_resolution_message'); }
    /** Shape $ (Value): string. Whether an inventory problem after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * @return string
     * @throws SdkError When inventory_exception_status is omitted; use hasInventoryExceptionStatus() or valueOrDefault().
     */
    public function getInventoryExceptionStatus(): string { return $this->get('inventory_exception_status'); }
    public function hasInventoryExceptionStatus(): bool { return $this->has('inventory_exception_status'); }
    /** Shape $ (Value): string. The reservation holding stock for this order, when one exists.
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Shape $ (Value): {@see InventoryRoutingSourceInput}. Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
     * @return InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Shape $ (Value): Array of {@see OrderLineItemInput}. Shape $[] (Value): {@see OrderLineItemInput}. An item purchased in an order.
     * @return list<OrderLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Shape $ (Value): string.  Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     * @return string
     * @throws SdkError When origin is omitted; use hasOrigin() or valueOrDefault().
     */
    public function getOrigin(): string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** Shape $ (Value): {@see PaymentCollectionInput}. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return PaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_collection is omitted; use hasPaymentCollection() or valueOrDefault().
     */
    public function getPaymentCollection(): mixed { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When payment_intent_ids is omitted; use hasPaymentIntentIds() or valueOrDefault().
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Shape $ (Value): Array of {@see ExpandedPaymentIntentSummaryInput}. Shape $[] (Value): {@see ExpandedPaymentIntentSummaryInput}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.
     * @return list<ExpandedPaymentIntentSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_intents is omitted; use hasPaymentIntents() or valueOrDefault().
     */
    public function getPaymentIntents(): array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Shape $ (Value): string. Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
     * @return string
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Shape $ (Value): string. Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * @return string
     * @throws SdkError When payment_status is omitted; use hasPaymentStatus() or valueOrDefault().
     */
    public function getPaymentStatus(): string { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Shape $ (Value): {@see PricingAmountsInput}. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     * @return PricingAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pricing_amounts is omitted; use hasPricingAmounts() or valueOrDefault().
     */
    public function getPricingAmounts(): mixed { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When refund_ids is omitted; use hasRefundIds() or valueOrDefault().
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Shape $ (Value): string. Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     * @throws SdkError When refund_status is omitted; use hasRefundStatus() or valueOrDefault().
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Shape $ (Value): Array of {@see OrderReturnCreditSettlementInput}. Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. Shape $[] (Value): {@see OrderReturnCreditSettlementInput}. A return credit applied to an order payment, with the amount and the return and resolution it came from.
     * @return list<OrderReturnCreditSettlementInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_credit_settlements is omitted; use hasReturnCreditSettlements() or valueOrDefault().
     */
    public function getReturnCreditSettlements(): array { return $this->get('return_credit_settlements'); }
    public function hasReturnCreditSettlements(): bool { return $this->has('return_credit_settlements'); }
    /** Shape $ (Value): string. ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create.
     * @return string
     * @throws SdkError When return_resolution_id is omitted; use hasReturnResolutionId() or valueOrDefault().
     */
    public function getReturnResolutionId(): string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** Shape $ (Value): {@see SettlementAmountsInput}. How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain.
     * @return SettlementAmountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When settlement_amounts is omitted; use hasSettlementAmounts() or valueOrDefault().
     */
    public function getSettlementAmounts(): mixed { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Shape $ (Value): {@see PaymentCollectionInput}. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return PaymentCollectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_collection is omitted; use hasSetupCollection() or valueOrDefault().
     */
    public function getSetupCollection(): mixed { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** Shape $ (Value): string. Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see ExpandedSubscriptionSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedSubscriptionSummaryInput}. A subscription's summary fields, including status, billing period, and next billing time, returned when the subscription is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'billing_anchor_day': int, 'cancel_at_period_end': bool, 'created_at'?: string|\DateTimeInterface, 'current_period_end_at'?: string|\DateTimeInterface, 'current_period_start_at'?: string|\DateTimeInterface, 'customer_id': string, 'next_billing_at'?: string|\DateTimeInterface, 'status': string, 'subscription_id': string, 'subscription_plan_id': string, 'terms_type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Shape $ (Value): integer string. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When subscription_cycle is omitted; use hasSubscriptionCycle() or valueOrDefault().
     */
    public function getSubscriptionCycle(): string { return $this->get('subscription_cycle'); }
    public function hasSubscriptionCycle(): bool { return $this->has('subscription_cycle'); }
    /** Shape $ (Value): string. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When subscription_delivery_changed_at is omitted; use hasSubscriptionDeliveryChangedAt() or valueOrDefault().
     */
    public function getSubscriptionDeliveryChangedAt(): string|\DateTimeInterface { return $this->get('subscription_delivery_changed_at'); }
    public function hasSubscriptionDeliveryChangedAt(): bool { return $this->has('subscription_delivery_changed_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): {@see ExpandedSubscriptionPlanSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummaryInput}. A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): mixed { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): {@see OrderTaxInput}. An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns.
     * @return OrderTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see TicketedEventInput}. Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued.
     * @return TicketedEventInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When ticketed_event is omitted; use hasTicketedEvent() or valueOrDefault().
     */
    public function getTicketedEvent(): mixed { return $this->get('ticketed_event'); }
    public function hasTicketedEvent(): bool { return $this->has('ticketed_event'); }
    /** Shape $ (Value): Array of {@see TipInput}. Shape $[] (Value): {@see TipInput}. A tip on an order, with its requested, settled, and refunded amounts, status, and how it was paid.
     * @return list<TipInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tips is omitted; use hasTips() or valueOrDefault().
     */
    public function getTips(): array { return $this->get('tips'); }
    public function hasTips(): bool { return $this->has('tips'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
