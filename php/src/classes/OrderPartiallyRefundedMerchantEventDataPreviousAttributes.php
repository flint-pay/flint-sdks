<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $active_payment_review_id
 * @property-read mixed $authorization_amounts
 * @property-read mixed $buyer_contact
 * @property-read string|null $buyer_note
 * @property-read list<OrderChargePreviousAttributes>|null $charges
 * @property-read list<string>|null $checkout_session_ids
 * @property-read mixed $client_reference
 * @property-read string|null $closed_at
 * @property-read string|null $closed_reason
 * @property-read string|null $closed_reason_message
 * @property-read string|null $created_at
 * @property-read list<\stdClass>|null $custom_field_answers
 * @property-read mixed $customer
 * @property-read string|null $customer_id
 * @property-read list<DeferredPromotionPreviousAttributes>|null $deferred_promotions
 * @property-read mixed $delivery
 * @property-read mixed $delivery_destination
 * @property-read list<OrderDiscountPreviousAttributes>|null $discounts
 * @property-read string|null $dispute_status
 * @property-read string|null $external_reference_id
 * @property-read string|null $fulfillment_status
 * @property-read list<FulfillmentPreviousAttributes>|null $fulfillments
 * @property-read mixed $gift_card_estimate
 * @property-read list<OrderGiftCardSettlementPreviousAttributes>|null $gift_card_settlements
 * @property-read bool|null $gift_card_tender_enabled
 * @property-read list<OrderGiftCardSelectionPreviousAttributes>|null $gift_cards
 * @property-read mixed $governing_delivery_selection_id
 * @property-read mixed $handover
 * @property-read string|null $internal_note
 * @property-read string|null $inventory_exception_reason
 * @property-read string|null $inventory_exception_resolution_message
 * @property-read string|null $inventory_exception_status
 * @property-read string|null $inventory_reservation_id
 * @property-read mixed $inventory_routing_source
 * @property-read mixed $invoice_id
 * @property-read list<OrderLineItemPreviousAttributes>|null $line_items
 * @property-read string|null $merchant_id
 * @property-read mixed $metadata
 * @property-read string|null $order_id
 * @property-read string|null $order_number
 * @property-read string|null $origin
 * @property-read mixed $paid_at
 * @property-read list<string>|null $payment_intent_ids
 * @property-read list<ExpandedPaymentIntentSummaryPreviousAttributes>|null $payment_intents
 * @property-read string|null $payment_link_id
 * @property-read string|null $payment_status
 * @property-read mixed $pending_order_edit_id
 * @property-read mixed $prepayment_order_id
 * @property-read mixed $pricing_amounts
 * @property-read list<string>|null $refund_ids
 * @property-read string|null $refund_status
 * @property-read list<OrderReturnCreditSettlementPreviousAttributes>|null $return_credit_settlements
 * @property-read string|null $return_resolution_id
 * @property-read mixed $settlement_amounts
 * @property-read string|null $status
 * @property-read mixed $subscription
 * @property-read int|null $subscription_cycle
 * @property-read string|null $subscription_delivery_changed_at
 * @property-read mixed $subscription_delivery_number
 * @property-read string|null $subscription_id
 * @property-read mixed $subscription_plan
 * @property-read string|null $subscription_plan_id
 * @property-read list<string>|null $supported_actions
 * @property-read mixed $tax
 * @property-read mixed $ticketed_event
 * @property-read list<TipPreviousAttributes>|null $tips
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class OrderPartiallyRefundedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'active_payment_review_id'?: mixed, 'authorization_amounts'?: mixed, 'buyer_contact'?: mixed, 'buyer_note'?: mixed, 'charges'?: mixed, 'checkout_session_ids'?: mixed, 'client_reference'?: mixed, 'closed_at'?: mixed, 'closed_reason'?: mixed, 'closed_reason_message'?: mixed, 'created_at'?: mixed, 'custom_field_answers'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'deferred_promotions'?: mixed, 'delivery'?: mixed, 'delivery_destination'?: mixed, 'discounts'?: mixed, 'dispute_status'?: mixed, 'external_reference_id'?: mixed, 'fulfillment_status'?: mixed, 'fulfillments'?: mixed, 'gift_card_estimate'?: mixed, 'gift_card_settlements'?: mixed, 'gift_card_tender_enabled'?: mixed, 'gift_cards'?: mixed, 'governing_delivery_selection_id'?: mixed, 'handover'?: mixed, 'internal_note'?: mixed, 'inventory_exception_reason'?: mixed, 'inventory_exception_resolution_message'?: mixed, 'inventory_exception_status'?: mixed, 'inventory_reservation_id'?: mixed, 'inventory_routing_source'?: mixed, 'invoice_id'?: mixed, 'line_items'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'order_id'?: mixed, 'order_number'?: mixed, 'origin'?: mixed, 'paid_at'?: mixed, 'payment_intent_ids'?: mixed, 'payment_intents'?: mixed, 'payment_link_id'?: mixed, 'payment_status'?: mixed, 'pending_order_edit_id'?: mixed, 'prepayment_order_id'?: mixed, 'pricing_amounts'?: mixed, 'refund_ids'?: mixed, 'refund_status'?: mixed, 'return_credit_settlements'?: mixed, 'return_resolution_id'?: mixed, 'settlement_amounts'?: mixed, 'status'?: mixed, 'subscription'?: mixed, 'subscription_cycle'?: mixed, 'subscription_delivery_changed_at'?: mixed, 'subscription_delivery_number'?: mixed, 'subscription_id'?: mixed, 'subscription_plan'?: mixed, 'subscription_plan_id'?: mixed, 'supported_actions'?: mixed, 'tax'?: mixed, 'ticketed_event'?: mixed, 'tips'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPartiallyRefundedMerchantEventDataPreviousAttributes')); }
    /** The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. anyOf[1] (Value): string or null. The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getActivePaymentReviewId(): mixed { return $this->get('active_payment_review_id'); }
    public function hasActivePaymentReviewId(): bool { return $this->has('active_payment_review_id'); }
    /** The amounts authorized and still capturable on the order's payments. anyOf[1] (Value): {@see OrderAuthorizationAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAuthorizationAmounts(): mixed { return $this->get('authorization_amounts'); }
    public function hasAuthorizationAmounts(): bool { return $this->has('authorization_amounts'); }
    /** Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. anyOf[1] (Value): {@see CheckoutBuyerContactPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getBuyerContact(): mixed { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** A note to the buyer. anyOf[1] (Value): string. A note to the buyer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBuyerNote(): string|null { return $this->get('buyer_note'); }
    public function hasBuyerNote(): bool { return $this->has('buyer_note'); }
    /** Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. anyOf[1] (Value): Array of {@see OrderChargePreviousAttributes}. Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. anyOf[1][] (Value): {@see OrderChargePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderChargePreviousAttributes>|null
     */
    public function getCharges(): array|null { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** IDs of the checkout sessions opened for this order. anyOf[1] (Value): Array of string. IDs of the checkout sessions opened for this order. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getCheckoutSessionIds(): array|null { return $this->get('checkout_session_ids'); }
    public function hasCheckoutSessionIds(): bool { return $this->has('checkout_session_ids'); }
    /** The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. anyOf[1] (Value): string or null. The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClientReference(): mixed { return $this->get('client_reference'); }
    public function hasClientReference(): bool { return $this->has('client_reference'); }
    /** When the order closed. Present exactly when status is closed. Set once at the transition and never changed. anyOf[1] (Value): string. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedAt(): string|null { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[1] (Value): string. Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Value enum: "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. anyOf[1] (Value): string. The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedReasonMessage(): string|null { return $this->get('closed_reason_message'); }
    public function hasClosedReasonMessage(): bool { return $this->has('closed_reason_message'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. anyOf[1] (Value): Array of {@see CustomFieldAnswerPreviousAttributes}. The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: 20. anyOf[1][] (Value): {@see CustomFieldAnswerPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<\stdClass>|null
     */
    public function getCustomFieldAnswers(): array|null { return $this->get('custom_field_answers'); }
    public function hasCustomFieldAnswers(): bool { return $this->has('custom_field_answers'); }
    /** Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): ({@see ExpandedCustomerSummaryPreviousAttributes} or null). Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1].anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** ID of the customer this order belongs to. anyOf[1] (Value): string. ID of the customer this order belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. anyOf[1] (Value): Array of {@see DeferredPromotionPreviousAttributes}. Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. anyOf[1][] (Value): {@see DeferredPromotionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<DeferredPromotionPreviousAttributes>|null
     */
    public function getDeferredPromotions(): array|null { return $this->get('deferred_promotions'); }
    public function hasDeferredPromotions(): bool { return $this->has('deferred_promotions'); }
    /** Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. anyOf[1] (Value): {@see OrderDeliverySummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see OrderDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDeliveryDestination(): mixed { return $this->get('delivery_destination'); }
    public function hasDeliveryDestination(): bool { return $this->has('delivery_destination'); }
    /** Discounts applied to the order, each with its amount, status, and the line items and charges it covers. anyOf[1] (Value): Array of {@see OrderDiscountPreviousAttributes}. Discounts applied to the order, each with its amount, status, and the line items and charges it covers. anyOf[1][] (Value): {@see OrderDiscountPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderDiscountPreviousAttributes>|null
     */
    public function getDiscounts(): array|null { return $this->get('discounts'); }
    public function hasDiscounts(): bool { return $this->has('discounts'); }
    /** Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value): string. Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisputeStatus(): string|null { return $this->get('dispute_status'); }
    public function hasDisputeStatus(): bool { return $this->has('dispute_status'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[1] (Value): string. Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentStatus(): string|null { return $this->get('fulfillment_status'); }
    public function hasFulfillmentStatus(): bool { return $this->has('fulfillment_status'); }
    /** Fulfillments created for the order, each covering a set of its line items. anyOf[1] (Value): Array of {@see FulfillmentPreviousAttributes}. Fulfillments created for the order, each covering a set of its line items. anyOf[1][] (Value): {@see FulfillmentPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<FulfillmentPreviousAttributes>|null
     */
    public function getFulfillments(): array|null { return $this->get('fulfillments'); }
    public function hasFulfillments(): bool { return $this->has('fulfillments'); }
    /** An estimate of how the order balance splits between gift cards and the payment processor. anyOf[1] (Value): {@see OrderGiftCardEstimatePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getGiftCardEstimate(): mixed { return $this->get('gift_card_estimate'); }
    public function hasGiftCardEstimate(): bool { return $this->has('gift_card_estimate'); }
    /** The gift card redemptions applied to the order's payments. anyOf[1] (Value): Array of {@see OrderGiftCardSettlementPreviousAttributes}. The gift card redemptions applied to the order's payments. anyOf[1][] (Value): {@see OrderGiftCardSettlementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderGiftCardSettlementPreviousAttributes>|null
     */
    public function getGiftCardSettlements(): array|null { return $this->get('gift_card_settlements'); }
    public function hasGiftCardSettlements(): bool { return $this->has('gift_card_settlements'); }
    /** Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. anyOf[1] (Value): boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getGiftCardTenderEnabled(): bool|null { return $this->get('gift_card_tender_enabled'); }
    public function hasGiftCardTenderEnabled(): bool { return $this->has('gift_card_tender_enabled'); }
    /** Gift cards available to pay the order, with each card's available balance. anyOf[1] (Value): Array of {@see OrderGiftCardSelectionPreviousAttributes}. Gift cards available to pay the order, with each card's available balance. anyOf[1][] (Value): {@see OrderGiftCardSelectionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderGiftCardSelectionPreviousAttributes>|null
     */
    public function getGiftCards(): array|null { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. anyOf[1] (Value): string or null. ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getGoverningDeliverySelectionId(): mixed { return $this->get('governing_delivery_selection_id'); }
    public function hasGoverningDeliverySelectionId(): bool { return $this->has('governing_delivery_selection_id'); }
    /** Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. anyOf[1] (Value): {@see OrderHandoverPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getHandover(): mixed { return $this->get('handover'); }
    public function hasHandover(): bool { return $this->has('handover'); }
    /** A note for your team. Buyer reads leave it out. anyOf[1] (Value): string. A note for your team. Buyer reads leave it out. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other". anyOf[1] (Value): string. Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed", "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryExceptionReason(): string|null { return $this->get('inventory_exception_reason'); }
    public function hasInventoryExceptionReason(): bool { return $this->has('inventory_exception_reason'); }
    /** The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. anyOf[1] (Value): string. The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryExceptionResolutionMessage(): string|null { return $this->get('inventory_exception_resolution_message'); }
    public function hasInventoryExceptionResolutionMessage(): bool { return $this->has('inventory_exception_resolution_message'); }
    /** Whether an inventory problem after payment needs attention. Value enum: "paid_inventory_failed", "resolved". anyOf[1] (Value): string. Whether an inventory problem after payment needs attention. Value enum: "paid_inventory_failed", "resolved". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryExceptionStatus(): string|null { return $this->get('inventory_exception_status'); }
    public function hasInventoryExceptionStatus(): bool { return $this->has('inventory_exception_status'); }
    /** The reservation holding stock for this order, when one exists. anyOf[1] (Value): string. The reservation holding stock for this order, when one exists. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryReservationId(): string|null { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. anyOf[1] (Value): {@see InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[1] (Value): string or null. The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getInvoiceId(): mixed { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Items the order sells, each with its pricing, tax, and fulfillment quantities. anyOf[1] (Value): Array of {@see OrderLineItemPreviousAttributes}. Items the order sells, each with its pricing, tax, and fulfillment quantities. anyOf[1][] (Value): {@see OrderLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Unique identifier for this order, prefixed `ord_`. anyOf[1] (Value): string. Unique identifier for this order, prefixed `ord_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable order number for receipts and merchant reference. anyOf[1] (Value): string. Human-readable order number for receipts and merchant reference. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderNumber(): string|null { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice". anyOf[1] (Value): string. How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription", "invoice". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrigin(): string|null { return $this->get('origin'); }
    public function hasOrigin(): bool { return $this->has('origin'); }
    /** When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. anyOf[1] (Value): string or null. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaidAt(): mixed { return $this->get('paid_at'); }
    public function hasPaidAt(): bool { return $this->has('paid_at'); }
    /** IDs of the payment intents created to collect this order. anyOf[1] (Value): Array of string. IDs of the payment intents created to collect this order. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getPaymentIntentIds(): array|null { return $this->get('payment_intent_ids'); }
    public function hasPaymentIntentIds(): bool { return $this->has('payment_intent_ids'); }
    /** Payment intents included when `expand` names `payment_intents`. anyOf[1] (Value): Array of {@see ExpandedPaymentIntentSummaryPreviousAttributes}. Payment intents included when `expand` names `payment_intents`. anyOf[1][] (Value): {@see ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ExpandedPaymentIntentSummaryPreviousAttributes>|null
     */
    public function getPaymentIntents(): array|null { return $this->get('payment_intents'); }
    public function hasPaymentIntents(): bool { return $this->has('payment_intents'); }
    /** Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. anyOf[1] (Value): string. Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkId(): string|null { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid". anyOf[1] (Value): string. Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentStatus(): string|null { return $this->get('payment_status'); }
    public function hasPaymentStatus(): bool { return $this->has('payment_status'); }
    /** The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. anyOf[1] (Value): string or null. The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPendingOrderEditId(): mixed { return $this->get('pending_order_edit_id'); }
    public function hasPendingOrderEditId(): bool { return $this->has('pending_order_edit_id'); }
    /** Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. anyOf[1] (Value): string or null. Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPrepaymentOrderId(): mixed { return $this->get('prepayment_order_id'); }
    public function hasPrepaymentOrderId(): bool { return $this->has('prepayment_order_id'); }
    /** The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. anyOf[1] (Value): {@see PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPricingAmounts(): mixed { return $this->get('pricing_amounts'); }
    public function hasPricingAmounts(): bool { return $this->has('pricing_amounts'); }
    /** IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. anyOf[1] (Value): Array of string. IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRefundIds(): array|null { return $this->get('refund_ids'); }
    public function hasRefundIds(): bool { return $this->has('refund_ids'); }
    /** Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundStatus(): string|null { return $this->get('refund_status'); }
    public function hasRefundStatus(): bool { return $this->has('refund_status'); }
    /** Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. anyOf[1] (Value): Array of {@see OrderReturnCreditSettlementPreviousAttributes}. Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. anyOf[1][] (Value): {@see OrderReturnCreditSettlementPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<OrderReturnCreditSettlementPreviousAttributes>|null
     */
    public function getReturnCreditSettlements(): array|null { return $this->get('return_credit_settlements'); }
    public function hasReturnCreditSettlements(): bool { return $this->has('return_credit_settlements'); }
    /** ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. anyOf[1] (Value): string. ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionId(): string|null { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
    /** How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. anyOf[1] (Value): {@see OrderSettlementAmountsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSettlementAmounts(): mixed { return $this->get('settlement_amounts'); }
    public function hasSettlementAmounts(): bool { return $this->has('settlement_amounts'); }
    /** Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed". anyOf[1] (Value): string. Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value enum: "open", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. anyOf[1] (Value): ({@see ExpandedSubscriptionSummaryPreviousAttributes} or null). Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. anyOf[1].anyOf[1] (Value): {@see ExpandedSubscriptionSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. anyOf[1] (Value): integer. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getSubscriptionCycle(): int|null { return $this->get('subscription_cycle'); }
    public function hasSubscriptionCycle(): bool { return $this->has('subscription_cycle'); }
    /** Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. anyOf[1] (Value): string. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionDeliveryChangedAt(): string|null { return $this->get('subscription_delivery_changed_at'); }
    public function hasSubscriptionDeliveryChangedAt(): bool { return $this->has('subscription_delivery_changed_at'); }
    /** Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. anyOf[1] (Value): integer or null. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSubscriptionDeliveryNumber(): mixed { return $this->get('subscription_delivery_number'); }
    public function hasSubscriptionDeliveryNumber(): bool { return $this->has('subscription_delivery_number'); }
    /** ID of the subscription this order bills. Absent on an order that isn't from a subscription. anyOf[1] (Value): string. ID of the subscription this order bills. Absent on an order that isn't from a subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. anyOf[1] (Value): ({@see ExpandedSubscriptionPlanSummaryPreviousAttributes} or null). Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. anyOf[1].anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSubscriptionPlan(): mixed { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. anyOf[1] (Value): string. ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. [] enum: "close", "pay", "resolve_inventory_exception". anyOf[1][] (Value): string.  Value enum: "close", "pay", "resolve_inventory_exception". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. anyOf[1] (Value): {@see OrderTaxPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Event and tickets this order sold through an event payment link. Absent on other orders. anyOf[1] (Value): {@see TicketedEventPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTicketedEvent(): mixed { return $this->get('ticketed_event'); }
    public function hasTicketedEvent(): bool { return $this->has('ticketed_event'); }
    /** Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1] (Value): Array of {@see TipPreviousAttributes}. Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. anyOf[1][] (Value): {@see TipPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TipPreviousAttributes>|null
     */
    public function getTips(): array|null { return $this->get('tips'); }
    public function hasTips(): bool { return $this->has('tips'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. anyOf[1] (Value): integer. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
