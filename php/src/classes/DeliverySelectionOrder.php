<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?OrderPaymentAttempt $active_payment_attempt
 * @property-read string|null $active_payment_review_id
 * @property-read ?OrderAuthorizationAmounts $authorization_amounts
 * @property-read ?list<BuyerAction> $buyer_actions
 * @property-read ?CheckoutBuyerContact $buyer_contact
 * @property-read ?string $buyer_note
 * @property-read list<OrderCharge> $charges
 * @property-read list<string> $checkout_session_ids
 * @property-read string|null $client_reference
 * @property-read ?string $closed_at
 * @property-read ?string $closed_reason
 * @property-read ?string $closed_reason_message
 * @property-read string $created_at
 * @property-read list<DeliverySelectionOrderCustomFieldAnswersItemText|DeliverySelectionOrderCustomFieldAnswersItemTextarea|DeliverySelectionOrderCustomFieldAnswersItemDropdown|DeliverySelectionOrderCustomFieldAnswersItemCheckbox|\stdClass>|null $custom_field_answers
 * @property-read ExpandedCustomerSummary|null $customer
 * @property-read ?string $customer_id
 * @property-read list<DeferredPromotion> $deferred_promotions
 * @property-read ?OrderDeliverySummary $delivery
 * @property-read ?OrderDeliveryDestination $delivery_destination
 * @property-read list<OrderDiscount> $discounts
 * @property-read ?string $dispute_status
 * @property-read ?string $external_reference_id
 * @property-read ?string $fulfillment_status
 * @property-read list<Fulfillment> $fulfillments
 * @property-read ?OrderGiftCardEstimate $gift_card_estimate
 * @property-read list<OrderGiftCardSettlement> $gift_card_settlements
 * @property-read bool $gift_card_tender_enabled
 * @property-read list<OrderGiftCardSelection> $gift_cards
 * @property-read string|null $governing_delivery_selection_id
 * @property-read ?OrderHandover $handover
 * @property-read ?string $internal_note
 * @property-read ?string $inventory_exception_reason
 * @property-read ?string $inventory_exception_resolution_message
 * @property-read ?string $inventory_exception_status
 * @property-read ?string $inventory_reservation_id
 * @property-read ?InventoryRoutingSource $inventory_routing_source
 * @property-read string|null $invoice_id
 * @property-read list<OrderLineItem> $line_items
 * @property-read string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $order_id
 * @property-read ?string $order_number
 * @property-read ?string $origin
 * @property-read string|null $paid_at
 * @property-read ?PaymentCollection $payment_collection
 * @property-read list<string> $payment_intent_ids
 * @property-read ?list<ExpandedPaymentIntentSummary> $payment_intents
 * @property-read ?string $payment_link_id
 * @property-read string $payment_status
 * @property-read string|null $prepayment_order_id
 * @property-read PricingAmounts $pricing_amounts
 * @property-read list<string> $refund_ids
 * @property-read string $refund_status
 * @property-read list<OrderReturnCreditSettlement> $return_credit_settlements
 * @property-read ?string $return_resolution_id
 * @property-read OrderSettlementAmounts $settlement_amounts
 * @property-read ?SetupCollection $setup_collection
 * @property-read string $status
 * @property-read ExpandedSubscriptionSummary|null $subscription
 * @property-read ?int $subscription_cycle
 * @property-read ?string $subscription_delivery_changed_at
 * @property-read int|null $subscription_delivery_number
 * @property-read ?string $subscription_id
 * @property-read ExpandedSubscriptionPlanSummary|null $subscription_plan
 * @property-read ?string $subscription_plan_id
 * @property-read ?list<string> $supported_actions
 * @property-read OrderTax $tax
 * @property-read ?TicketedEvent $ticketed_event
 * @property-read list<Tip> $tips
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class DeliverySelectionOrder extends Model {
    /** @param array{'active_payment_attempt'?: mixed, 'active_payment_review_id'?: string|null, 'authorization_amounts'?: mixed, 'buyer_actions'?: list<mixed>, 'buyer_contact'?: mixed, 'buyer_note'?: string, 'charges': list<mixed>, 'checkout_session_ids': list<string>, 'client_reference'?: string|null, 'closed_at'?: string, 'closed_reason'?: string, 'closed_reason_message'?: string, 'created_at': string, 'custom_field_answers'?: list<mixed>, 'customer'?: mixed, 'customer_id'?: string, 'deferred_promotions': list<mixed>, 'delivery'?: mixed, 'delivery_destination'?: mixed, 'discounts': list<mixed>, 'dispute_status'?: string, 'external_reference_id'?: string, 'fulfillment_status'?: string, 'fulfillments': list<mixed>, 'gift_card_estimate'?: mixed, 'gift_card_settlements': list<mixed>, 'gift_card_tender_enabled': bool, 'gift_cards': list<mixed>, 'governing_delivery_selection_id': string|null, 'handover'?: mixed, 'internal_note'?: string, 'inventory_exception_reason'?: string, 'inventory_exception_resolution_message'?: string, 'inventory_exception_status'?: string, 'inventory_reservation_id'?: string, 'inventory_routing_source'?: mixed, 'invoice_id': string|null, 'line_items': list<mixed>, 'merchant_id': string, 'metadata'?: mixed, 'order_id': string, 'order_number'?: string, 'origin'?: string, 'paid_at': string|null, 'payment_collection'?: mixed, 'payment_intent_ids': list<string>, 'payment_intents'?: list<mixed>, 'payment_link_id'?: string, 'payment_status': string, 'prepayment_order_id': string|null, 'pricing_amounts': mixed, 'refund_ids': list<string>, 'refund_status': string, 'return_credit_settlements': list<mixed>, 'return_resolution_id'?: string, 'settlement_amounts': mixed, 'setup_collection'?: mixed, 'status': string, 'subscription'?: mixed, 'subscription_cycle'?: int, 'subscription_delivery_changed_at'?: string, 'subscription_delivery_number': int|null, 'subscription_id'?: string, 'subscription_plan'?: mixed, 'subscription_plan_id'?: string, 'supported_actions'?: list<string>, 'tax': mixed, 'ticketed_event'?: mixed, 'tips': list<mixed>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionOrder')); }
    /** The payment attempt currently collecting this order. Omitted when no attempt is active or its collection surface belongs to another caller. An attempt to pay an order.
     * @return ?OrderPaymentAttempt
     */
    public function getActivePaymentAttempt(): ?OrderPaymentAttempt { return $this->get('active_payment_attempt'); }
    public function hasActivePaymentAttempt(): bool { return $this->has('active_payment_attempt'); }
    /** The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials.
     * @return string|null
     */
    public function getActivePaymentReviewId(): string|null { return $this->get('active_payment_review_id'); }
    public function hasActivePaymentReviewId(): bool { return $this->has('active_payment_review_id'); }
    /** The amounts authorized and still capturable on the order's payments. The amounts authorized and still capturable on an order's payments, with the authorization expiry.
     * @return ?OrderAuthorizationAmounts
     */
    public function getAuthorizationAmounts(): ?OrderAuthorizationAmounts { return $this->get('authorization_amounts'); }
    public function hasAuthorizationAmounts(): bool { return $this->has('authorization_amounts'); }
    /** What the buyer can do with the order, in this order: start_return, then resend_receipt. A buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both every time. Merchant order responses omit this field. A list of orders leaves start_return out, since only a read of one order checks return eligibility. start_return is due when the last open return window ends. [] (Value): {@see BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return ?list<BuyerAction>
     */
    public function getBuyerActions(): ?array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout.
     * @return ?CheckoutBuyerContact
     */
    public function getBuyerContact(): ?CheckoutBuyerContact { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** A note to the buyer.
     * @return ?string
     */
    public function getBuyerNote(): ?string { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. [] (Value): {@see OrderCharge}. An additional charge applied to an order.
     * @return list<OrderCharge>
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** IDs of the checkout sessions opened for this order. [] (Value): string.
     * @return list<string>
     */
    public function getCheckoutSessionIds(): array { return $this->get('checkout_session_ids'); }
    public function hasCheckoutSessionIds(): bool { return $this->has('checkout_session_ids'); }
    /** The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getClientReference(): string|null { return $this->get('client_reference'); }
    public function hasClientReference(): bool { return $this->has('client_reference'); }
    /** When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: date-time.
     * @return ?string
     */
    public function getClosedAt(): ?string { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * @return ?string
     */
    public function getClosedReason(): ?string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer.
     * @return ?string
     */
    public function getClosedReasonMessage(): ?string { return $this->get('closed_reason_message'); }
    public function hasClosedReasonMessage(): bool { return $this->has('closed_reason_message'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@see CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.
     * @return list<DeliverySelectionOrderCustomFieldAnswersItemText|DeliverySelectionOrderCustomFieldAnswersItemTextarea|DeliverySelectionOrderCustomFieldAnswersItemDropdown|DeliverySelectionOrderCustomFieldAnswersItemCheckbox|\stdClass>|null
     */
    public function getCustomFieldAnswers(): ?array { return $this->get('custom_field_answers'); }
    public function hasCustomFieldAnswers(): bool { return $this->has('custom_field_answers'); }
    /** Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. anyOf[1] (Value): {@see ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummary|null
     */
    public function getCustomer(): ExpandedCustomerSummary|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** ID of the customer this order belongs to.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. [] (Value): {@see DeferredPromotion}. A promotion accepted at subscription signup for the subscription's first charged cycle. It does not discount the signup order.
     * @return list<DeferredPromotion>
     */
    public function getDeferredPromotions(): array { return $this->get('deferred_promotions'); }
    public function hasDeferredPromotions(): bool { return $this->has('deferred_promotions'); }
    /** Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. Method, type and recipient of governing_delivery_selection_id. delivery_destination contains the resolved address. These values describe the same selection.
     * @return ?OrderDeliverySummary
     */
    public function getDelivery(): ?OrderDeliverySummary { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from.
     * @return ?OrderDeliveryDestination
     */
    public function getDeliveryDestination(): ?OrderDeliveryDestination { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Discounts applied to the order, each with its amount, status, and the line items and charges it covers. [] (Value): {@see OrderDiscount}. A discount applied to an order, with its amount, status, and the line items and charges it covers. It comes from a manual discount or a promotion.
     * @return list<OrderDiscount>
     */
    public function getDiscounts(): array { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * @return ?string
     */
    public function getDisputeStatus(): ?string { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     * @return ?string
     */
    public function getFulfillmentStatus(): ?string { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** Fulfillments created for the order, each covering a set of its line items. [] (Value): {@see Fulfillment}. Work required to deliver an order's items.
     * @return list<Fulfillment>
     */
    public function getFulfillments(): array { return $this->get('fulfillments'); }
    public function hasFulfillments(): bool { return $this->has('fulfillments'); }
    /** An estimate of how the order balance splits between gift cards and the payment processor. An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.
     * @return ?OrderGiftCardEstimate
     */
    public function getGiftCardEstimate(): ?OrderGiftCardEstimate { return $this->get('gift_card_estimate'); }
    public function hasGiftCardEstimate(): bool { return $this->has('gift_card_estimate'); }
    /** The gift card redemptions applied to the order's payments. [] (Value): {@see OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the amount, tip, and gift card.
     * @return list<OrderGiftCardSettlement>
     */
    public function getGiftCardSettlements(): array { return $this->get('gift_card_settlements'); }
    public function hasGiftCardSettlements(): bool { return $this->has('gift_card_settlements'); }
    /** Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Recomputed on each read; a spent but open card still counts.
     * @return bool
     */
    public function getGiftCardTenderEnabled(): bool { return $this->get('gift_card_tender_enabled'); }
    public function hasGiftCardTenderEnabled(): bool { return $this->has('gift_card_tender_enabled'); }
    /** Gift cards available to pay the order, with each card's available balance. [] (Value): {@see OrderGiftCardSelection}. A gift card available to pay an order, with its available balance and the last four characters of its code.
     * @return list<OrderGiftCardSelection>
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection.
     * @return string|null
     */
    public function getGoverningDeliverySelectionId(): string|null { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /** Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection.
     * @return ?OrderHandover
     */
    public function getHandover(): ?OrderHandover { return $this->get('handover'); }
    public function hasHandover(): bool { return $this->has('handover'); }
    /** A note for your team. Buyer reads leave it out.
     * @return ?string
     */
    public function getInternalNote(): ?string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     * @return ?string
     */
    public function getInventoryExceptionReason(): ?string { return $this->get('inventory_exception_reason'); }
    public function hasInventoryExceptionReason(): bool { return $this->has('inventory_exception_reason'); }
    /** The merchant note supplied when resolving the inventory exception. It is not shown to the buyer.
     * @return ?string
     */
    public function getInventoryExceptionResolutionMessage(): ?string { return $this->get('inventory_exception_resolution_message'); }
    public function hasInventoryExceptionResolutionMessage(): bool { return $this->has('inventory_exception_resolution_message'); }
    /** Whether an inventory problem after payment needs attention. Value enum: "paid_inventory_failed", "resolved".
     * @return ?string
     */
    public function getInventoryExceptionStatus(): ?string { return $this->get('inventory_exception_status'); }
    public function hasInventoryExceptionStatus(): bool { return $this->has('inventory_exception_status'); }
    /** The reservation holding stock for this order, when one exists.
     * @return ?string
     */
    public function getInventoryReservationId(): ?string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
     * @return ?InventoryRoutingSource
     */
    public function getInventoryRoutingSource(): ?InventoryRoutingSource { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Items the order sells, each with its pricing, tax, and fulfillment quantities. [] (Value): {@see OrderLineItem}. An item purchased in an order.
     * @return list<OrderLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Unique identifier for this order, prefixed `ord_`.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable order number for receipts and merchant reference.
     * @return ?string
     */
    public function getOrderNumber(): ?string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice".
     * @return ?string
     */
    public function getOrigin(): ?string { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: date-time.
     * @return string|null
     */
    public function getPaidAt(): string|null { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** Payment options and collection instructions for the order's outstanding balance. Omitted when collection is unavailable to this caller. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * @return ?PaymentCollection
     */
    public function getPaymentCollection(): ?PaymentCollection { return $this->get('payment_collection'); }
    public function hasPaymentCollection(): bool { return $this->has('payment_collection'); }
    /** IDs of the payment intents created to collect this order. [] (Value): string.
     * @return list<string>
     */
    public function getPaymentIntentIds(): array { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Payment intents included when `expand` names `payment_intents`. [] (Value): {@see ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.
     * @return ?list<ExpandedPaymentIntentSummary>
     */
    public function getPaymentIntents(): ?array { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
     * @return ?string
     */
    public function getPaymentLinkId(): ?string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     * @return string
     */
    public function getPaymentStatus(): string { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * @return string|null
     */
    public function getPrepaymentOrderId(): string|null { return $this->get('prepayment_order_id'); }
    public function hasPrepaymentOrderId(): bool { return $this->has('prepayment_order_id'); }
    /** The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     * @return PricingAmounts
     */
    public function getPricingAmounts(): PricingAmounts { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. [] (Value): string.
     * @return list<string>
     */
    public function getRefundIds(): array { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Value enum: "none", "partially_refunded", "refunded".
     * @return string
     */
    public function getRefundStatus(): string { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. [] (Value): {@see OrderReturnCreditSettlement}. A return credit applied to an order payment, with the amount and the return and resolution it came from.
     * @return list<OrderReturnCreditSettlement>
     */
    public function getReturnCreditSettlements(): array { return $this->get('return_credit_settlements'); }
    public function hasReturnCreditSettlements(): bool { return $this->has('return_credit_settlements'); }
    /** ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create.
     * @return ?string
     */
    public function getReturnResolutionId(): ?string { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. The bill settlement amounts plus order overpayments, settled tips, debt discharged by final capture, and value order edits removed. Money collected, returned, waived, and still owed on a bill.
     * @return OrderSettlementAmounts
     */
    public function getSettlementAmounts(): OrderSettlementAmounts { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Instructions for saving a payment method for a subscription order. Omitted when setup is unavailable. Client guidance for saving a payment method on the merchant's connected account.
     * @return ?SetupCollection
     */
    public function getSetupCollection(): ?SetupCollection { return $this->get('setup_collection'); }
    public function hasSetupCollection(): bool { return $this->has('setup_collection'); }
    /** Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. anyOf[1] (Value): {@see ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing period, and next billing time, returned when the subscription is expanded. anyOf[2] (Value): null.
     * @return ExpandedSubscriptionSummary|null
     */
    public function getSubscription(): ExpandedSubscriptionSummary|null { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     * @return ?int
     */
    public function getSubscriptionCycle(): ?int { return $this->get('subscription_cycle'); }
    public function hasSubscriptionCycle(): bool { return $this->has('subscription_cycle'); }
    /** Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: date-time.
     * @return ?string
     */
    public function getSubscriptionDeliveryChangedAt(): ?string { return $this->get('subscription_delivery_changed_at'); }
    public function hasSubscriptionDeliveryChangedAt(): bool { return $this->has('subscription_delivery_changed_at'); }
    /** Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     * @return int|null
     */
    public function getSubscriptionDeliveryNumber(): int|null { return $this->get('subscription_delivery_number'); }
    public function hasSubscriptionDeliveryNumber(): bool { return $this->has('subscription_delivery_number'); }
    /** ID of the subscription this order bills. Absent on an order that isn't from a subscription.
     * @return ?string
     */
    public function getSubscriptionId(): ?string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded. anyOf[2] (Value): null.
     * @return ExpandedSubscriptionPlanSummary|null
     */
    public function getSubscriptionPlan(): ExpandedSubscriptionPlanSummary|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** ID of the subscription plan this order bills. Absent on an order that isn't from a subscription.
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. [] enum: "close", "pay", "resolve_inventory_exception". [] (Value): string.  Value enum: "close", "pay", "resolve_inventory_exception".
     * @return ?list<string>
     */
    public function getSupportedActions(): ?array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns.
     * @return OrderTax
     */
    public function getTax(): OrderTax { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued.
     * @return ?TicketedEvent
     */
    public function getTicketedEvent(): ?TicketedEvent { return $this->get('ticketed_event'); }
    public function hasTicketedEvent(): bool { return $this->has('ticketed_event'); }
    /** Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. [] (Value): {@see Tip}. A tip on an order, with its requested, settled, and refunded amounts, status, and how it was paid.
     * @return list<Tip>
     */
    public function getTips(): array { return $this->get('tips'); }
    public function hasTips(): bool { return $this->has('tips'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
