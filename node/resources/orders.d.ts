export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { AccessLinkResponse } from '../declarations/AccessLinkResponse.js';
import type { ActionResponse } from '../declarations/ActionResponse.js';
import type { CancelOrderPaymentAttemptResponse } from '../declarations/CancelOrderPaymentAttemptResponse.js';
import type { CheckoutSessionLineItemModifierUpdate } from '../declarations/CheckoutSessionLineItemModifierUpdate.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateDeliveryFulfillmentDetailsInput } from '../declarations/CreateDeliveryFulfillmentDetailsInput.js';
import type { CreateDigitalFulfillmentDetailsInput } from '../declarations/CreateDigitalFulfillmentDetailsInput.js';
import type { CreateOrderDiscountInput } from '../declarations/CreateOrderDiscountInput.js';
import type { CreateOrderLineItemInput } from '../declarations/CreateOrderLineItemInput.js';
import type { CreateOrderPaymentIntentResponse } from '../declarations/CreateOrderPaymentIntentResponse.js';
import type { CreatePackageRequestInput } from '../declarations/CreatePackageRequestInput.js';
import type { CreatePickupFulfillmentDetailsInput } from '../declarations/CreatePickupFulfillmentDetailsInput.js';
import type { CreateServiceFulfillmentDetailsInput } from '../declarations/CreateServiceFulfillmentDetailsInput.js';
import type { DeliverySelectionResponse } from '../declarations/DeliverySelectionResponse.js';
import type { FulfillmentLineItemRequestInput } from '../declarations/FulfillmentLineItemRequestInput.js';
import type { FulfillmentRecipientInput } from '../declarations/FulfillmentRecipientInput.js';
import type { FulfillmentResponse } from '../declarations/FulfillmentResponse.js';
import type { ManualDiscountRequestInput } from '../declarations/ManualDiscountRequestInput.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { Order } from '../declarations/Order.js';
import type { OrderActivity } from '../declarations/OrderActivity.js';
import type { OrderActivityListResponse } from '../declarations/OrderActivityListResponse.js';
import type { OrderCalculatedChargeTaxInput } from '../declarations/OrderCalculatedChargeTaxInput.js';
import type { OrderCalculatedLineItemTaxInput } from '../declarations/OrderCalculatedLineItemTaxInput.js';
import type { OrderChargeRequestInput } from '../declarations/OrderChargeRequestInput.js';
import type { OrderDeliveryDestinationAddressRequestInput } from '../declarations/OrderDeliveryDestinationAddressRequestInput.js';
import type { OrderDeliveryDestinationRecipientRequestInput } from '../declarations/OrderDeliveryDestinationRecipientRequestInput.js';
import type { OrderInventoryRoutingSourceRequestInput } from '../declarations/OrderInventoryRoutingSourceRequestInput.js';
import type { OrderLineItemModifierRequestInput } from '../declarations/OrderLineItemModifierRequestInput.js';
import type { OrderListResponse } from '../declarations/OrderListResponse.js';
import type { OrderPaymentAttempt } from '../declarations/OrderPaymentAttempt.js';
import type { OrderPaymentAttemptListResponse } from '../declarations/OrderPaymentAttemptListResponse.js';
import type { OrderPaymentAttemptResponse } from '../declarations/OrderPaymentAttemptResponse.js';
import type { OrderPaymentLifecycleResponse } from '../declarations/OrderPaymentLifecycleResponse.js';
import type { OrderPaymentSourceSelectionInput } from '../declarations/OrderPaymentSourceSelectionInput.js';
import type { OrderResponse } from '../declarations/OrderResponse.js';
import type { OrderTaxRequestInput } from '../declarations/OrderTaxRequestInput.js';
import type { OrdersAddChargeInput } from '../declarations/OrdersAddChargeInput.js';
import type { OrdersAddChargeResponse } from '../declarations/OrdersAddChargeResponse.js';
import type { OrdersAddLineItemsInput } from '../declarations/OrdersAddLineItemsInput.js';
import type { OrdersAddLineItemsResponse } from '../declarations/OrdersAddLineItemsResponse.js';
import type { OrdersApplyDiscountInput } from '../declarations/OrdersApplyDiscountInput.js';
import type { OrdersApplyDiscountResponse } from '../declarations/OrdersApplyDiscountResponse.js';
import type { OrdersApplyGiftCardInput } from '../declarations/OrdersApplyGiftCardInput.js';
import type { OrdersApplyGiftCardResponse } from '../declarations/OrdersApplyGiftCardResponse.js';
import type { OrdersCancelPaymentAttemptInput } from '../declarations/OrdersCancelPaymentAttemptInput.js';
import type { OrdersCancelPaymentAttemptResponse } from '../declarations/OrdersCancelPaymentAttemptResponse.js';
import type { OrdersCancelPaymentInput } from '../declarations/OrdersCancelPaymentInput.js';
import type { OrdersCancelPaymentResponse } from '../declarations/OrdersCancelPaymentResponse.js';
import type { OrdersCapturePaymentInput } from '../declarations/OrdersCapturePaymentInput.js';
import type { OrdersCapturePaymentResponse } from '../declarations/OrdersCapturePaymentResponse.js';
import type { OrdersCloseSessionInput } from '../declarations/OrdersCloseSessionInput.js';
import type { OrdersCloseSessionResponse } from '../declarations/OrdersCloseSessionResponse.js';
import type { OrdersCreateAccessLinkInput } from '../declarations/OrdersCreateAccessLinkInput.js';
import type { OrdersCreateAccessLinkResponse } from '../declarations/OrdersCreateAccessLinkResponse.js';
import type { OrdersCreateFulfillmentInput } from '../declarations/OrdersCreateFulfillmentInput.js';
import type { OrdersCreateFulfillmentResponse } from '../declarations/OrdersCreateFulfillmentResponse.js';
import type { OrdersCreateInput } from '../declarations/OrdersCreateInput.js';
import type { OrdersCreatePaymentIntentInput } from '../declarations/OrdersCreatePaymentIntentInput.js';
import type { OrdersCreatePaymentIntentResponse } from '../declarations/OrdersCreatePaymentIntentResponse.js';
import type { OrdersCreateResponse } from '../declarations/OrdersCreateResponse.js';
import type { OrdersDeleteChargeInput } from '../declarations/OrdersDeleteChargeInput.js';
import type { OrdersDeleteChargeResponse } from '../declarations/OrdersDeleteChargeResponse.js';
import type { OrdersDeleteLineItemInput } from '../declarations/OrdersDeleteLineItemInput.js';
import type { OrdersDeleteLineItemResponse } from '../declarations/OrdersDeleteLineItemResponse.js';
import type { OrdersGetCurrentDeliverySelectionInput } from '../declarations/OrdersGetCurrentDeliverySelectionInput.js';
import type { OrdersGetCurrentDeliverySelectionResponse } from '../declarations/OrdersGetCurrentDeliverySelectionResponse.js';
import type { OrdersGetInput } from '../declarations/OrdersGetInput.js';
import type { OrdersGetPaymentAttemptInput } from '../declarations/OrdersGetPaymentAttemptInput.js';
import type { OrdersGetPaymentAttemptResponse } from '../declarations/OrdersGetPaymentAttemptResponse.js';
import type { OrdersGetResponse } from '../declarations/OrdersGetResponse.js';
import type { OrdersListActivitiesInput } from '../declarations/OrdersListActivitiesInput.js';
import type { OrdersListActivitiesResponse } from '../declarations/OrdersListActivitiesResponse.js';
import type { OrdersListInput } from '../declarations/OrdersListInput.js';
import type { OrdersListPaymentAttemptsInput } from '../declarations/OrdersListPaymentAttemptsInput.js';
import type { OrdersListPaymentAttemptsResponse } from '../declarations/OrdersListPaymentAttemptsResponse.js';
import type { OrdersListResponse } from '../declarations/OrdersListResponse.js';
import type { OrdersPayInput } from '../declarations/OrdersPayInput.js';
import type { OrdersPayResponse } from '../declarations/OrdersPayResponse.js';
import type { OrdersRemoveDiscountsInput } from '../declarations/OrdersRemoveDiscountsInput.js';
import type { OrdersRemoveDiscountsResponse } from '../declarations/OrdersRemoveDiscountsResponse.js';
import type { OrdersRemoveGiftCardInput } from '../declarations/OrdersRemoveGiftCardInput.js';
import type { OrdersRemoveGiftCardResponse } from '../declarations/OrdersRemoveGiftCardResponse.js';
import type { OrdersRepriceDiscountsInput } from '../declarations/OrdersRepriceDiscountsInput.js';
import type { OrdersRepriceDiscountsResponse } from '../declarations/OrdersRepriceDiscountsResponse.js';
import type { OrdersResolveInventoryExceptionInput } from '../declarations/OrdersResolveInventoryExceptionInput.js';
import type { OrdersResolveInventoryExceptionResponse } from '../declarations/OrdersResolveInventoryExceptionResponse.js';
import type { OrdersSendReceiptInput } from '../declarations/OrdersSendReceiptInput.js';
import type { OrdersSendReceiptResponse } from '../declarations/OrdersSendReceiptResponse.js';
import type { OrdersUpdateChargeInput } from '../declarations/OrdersUpdateChargeInput.js';
import type { OrdersUpdateChargeResponse } from '../declarations/OrdersUpdateChargeResponse.js';
import type { OrdersUpdateInput } from '../declarations/OrdersUpdateInput.js';
import type { OrdersUpdateLineItemInput } from '../declarations/OrdersUpdateLineItemInput.js';
import type { OrdersUpdateLineItemResponse } from '../declarations/OrdersUpdateLineItemResponse.js';
import type { OrdersUpdateLineItemResponseKnown } from '../declarations/OrdersUpdateLineItemResponseKnown.js';
import type { OrdersUpdateResponse } from '../declarations/OrdersUpdateResponse.js';
import type { PromotionRefRequestInput } from '../declarations/PromotionRefRequestInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ResponseMeta } from '../declarations/ResponseMeta.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface OrdersResource {
    /**
 * Adds a service charge, fee, or surcharge to an order.
 * POST /v1/orders/{order_id}/charges
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.addCharge("example", {charge: {name: "example", type: "service_fee", amount_money: {amount: "0", currency: "USD"}}}, { idempotencyKey: idempotencyKey })
 */
    addCharge(order_id: InputValue<string>, params: (InputValue<{ "charge": OrderChargeRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    addChargeWithResponse(order_id: InputValue<string>, params: (InputValue<{ "charge": OrderChargeRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersAddChargeResponse>>;
    /**
 * Adds one or more line items to an order.
 * POST /v1/orders/{order_id}/line-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.addLineItems("example", {line_items: [{variant_id: "example"}]}, { idempotencyKey: idempotencyKey })
 */
    addLineItems(order_id: InputValue<string>, params: (InputValue<{ "line_items": Array<CreateOrderLineItemInput>; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    addLineItemsWithResponse(order_id: InputValue<string>, params: (InputValue<{ "line_items": Array<CreateOrderLineItemInput>; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersAddLineItemsResponse>>;
    /**
 * Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must provide a promotion code; resource IDs and manual discounts require merchant authentication.
 * POST /v1/orders/{order_id}/discounts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyDiscount("example", {promotion: {promotion_id: "example"}}, { idempotencyKey: idempotencyKey })
 */
    applyDiscount(order_id: InputValue<string>, params: (InputValue<({ "manual"?: ManualDiscountRequestInput; "promotion"?: PromotionRefRequestInput; }) & ((({ "promotion": unknown; }) & (({ "manual"?: never }))) | (({ "manual": unknown; }) & (({ "promotion"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    applyDiscountWithResponse(order_id: InputValue<string>, params: (InputValue<({ "manual"?: ManualDiscountRequestInput; "promotion"?: PromotionRefRequestInput; }) & ((({ "promotion": unknown; }) & (({ "manual"?: never }))) | (({ "manual": unknown; }) & (({ "promotion"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersApplyDiscountResponse>>;
    /**
 * Selects a gift card by its current code and returns masked selections and an unreserved estimate. No value is held or debited. order_revision must match the order revision returned by the last read. An order may select at most 20 gift cards. Gift card value cannot pay for subscription orders.
 * POST /v1/orders/{order_id}/gift-cards
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyGiftCard("example", {gift_card_code: "example", order_revision: "1"}, { idempotencyKey: idempotencyKey })
 */
    applyGiftCard(order_id: InputValue<string>, params: (InputValue<{ "gift_card_code": string; "order_revision": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Gift-Card-Challenge"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    applyGiftCardWithResponse(order_id: InputValue<string>, params: (InputValue<{ "gift_card_code": string; "order_revision": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Gift-Card-Challenge"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersApplyGiftCardResponse>>;
    /**
 * Cancels an unsettled order-owned payment leg. A leg in an active payment attempt requires the matching order_payment_attempt_id. Canceling an authorization releases the payment lock and attempt-owned holds; a staged or declined leg with no active attempt can be canceled without an attempt ID.
 * POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.cancelPayment("example", "example", undefined, { idempotencyKey: idempotencyKey })
 */
    cancelPayment(order_id: InputValue<string>, payment_intent_id: InputValue<string>, params?: (InputValue<{ "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned"; "order_payment_attempt_id"?: string; }> | { "cancellation_reason"?: never; "order_payment_attempt_id"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderPaymentLifecycleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelPaymentWithResponse(order_id: InputValue<string>, payment_intent_id: InputValue<string>, params?: (InputValue<{ "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned"; "order_payment_attempt_id"?: string; }> | { "cancellation_reason"?: never; "order_payment_attempt_id"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersCancelPaymentResponse>>;
    /**
 * Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.
 * POST /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.cancelPaymentAttempt("example", "example", undefined, { idempotencyKey: idempotencyKey })
 */
    cancelPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: (InputValue<{ "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned"; }> | { "cancellation_reason"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelOrderPaymentAttemptResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelPaymentAttemptWithResponse(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: (InputValue<{ "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned"; }> | { "cancellation_reason"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersCancelPaymentAttemptResponse>>;
    /**
 * Captures an active payment authorization for an order and updates the order payment lifecycle.
 * POST /v1/orders/{order_id}/payment-intents/{payment_intent_id}/capture
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.capturePayment("example", "example", undefined, { idempotencyKey: idempotencyKey })
 */
    capturePayment(order_id: InputValue<string>, payment_intent_id: InputValue<string>, params?: (InputValue<{ "amount_money"?: MoneyValueInput; "order_payment_attempt_id"?: string; }> | { "amount_money"?: never; "order_payment_attempt_id"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderPaymentLifecycleResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    capturePaymentWithResponse(order_id: InputValue<string>, payment_intent_id: InputValue<string>, params?: (InputValue<{ "amount_money"?: MoneyValueInput; "order_payment_attempt_id"?: string; }> | { "amount_money"?: never; "order_payment_attempt_id"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersCapturePaymentResponse>>;
    /**
 * Closes an open order. Closing cancels pending discounts, releases pending promotion reservations, and recalculates totals from the current surviving pricing economics; canceled discounts remain visible with status: "canceled" but no longer reduce the total. Closing is blocked while payment collection is in progress.
 * POST /v1/orders/{order_id}/close
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.closeSession("example", {}, { idempotencyKey: idempotencyKey })
 */
    closeSession(order_id: InputValue<string>, params: (InputValue<{ "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    closeSessionWithResponse(order_id: InputValue<string>, params: (InputValue<{ "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersCloseSessionResponse>>;
    /**
 * Creates an explicit fulfillment for an order.
 * POST /v1/orders/{order_id}/fulfillments
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createFulfillment("example", {line_items: [{order_line_item_id: "example", quantity: "100"}], type: "shipment"}, { idempotencyKey: idempotencyKey })
 */
    createFulfillment(order_id: InputValue<string>, params: (InputValue<({ "customer_id"?: string; "device_id"?: string; "digital_details"?: CreateDigitalFulfillmentDetailsInput; "external_reference_id"?: string; "line_items": Array<FulfillmentLineItemRequestInput>; "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput; "location_id"?: string; "metadata"?: Record<string, string>; "pickup_details"?: CreatePickupFulfillmentDetailsInput; "recipient"?: FulfillmentRecipientInput; "service_details"?: CreateServiceFulfillmentDetailsInput; "shipment"?: ({ "external_reference_id"?: string; "external_system"?: string; "metadata"?: Record<string, string>; "package"?: CreatePackageRequestInput; "packaging": string; }) & (({ "packaging": "single_package"; "package": unknown; })); "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service"; }) & (((({ "shipment"?: never })) | ({ "type"?: "shipment"; }))) & (((({ "pickup_details"?: never }) & ({ "local_delivery_details"?: never }) & ({ "digital_details"?: never }) & ({ "service_details"?: never }))) | ({ "pickup_details": unknown; }) | ({ "local_delivery_details": unknown; }) | ({ "digital_details": unknown; }) | ({ "service_details": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<FulfillmentResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createFulfillmentWithResponse(order_id: InputValue<string>, params: (InputValue<({ "customer_id"?: string; "device_id"?: string; "digital_details"?: CreateDigitalFulfillmentDetailsInput; "external_reference_id"?: string; "line_items": Array<FulfillmentLineItemRequestInput>; "local_delivery_details"?: CreateDeliveryFulfillmentDetailsInput; "location_id"?: string; "metadata"?: Record<string, string>; "pickup_details"?: CreatePickupFulfillmentDetailsInput; "recipient"?: FulfillmentRecipientInput; "service_details"?: CreateServiceFulfillmentDetailsInput; "shipment"?: ({ "external_reference_id"?: string; "external_system"?: string; "metadata"?: Record<string, string>; "package"?: CreatePackageRequestInput; "packaging": string; }) & (({ "packaging": "single_package"; "package": unknown; })); "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service"; }) & (((({ "shipment"?: never })) | ({ "type"?: "shipment"; }))) & (((({ "pickup_details"?: never }) & ({ "local_delivery_details"?: never }) & ({ "digital_details"?: never }) & ({ "service_details"?: never }))) | ({ "pickup_details": unknown; }) | ({ "local_delivery_details": unknown; }) | ({ "digital_details": unknown; }) | ({ "service_details": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersCreateFulfillmentResponse>>;
    /**
 * Creates an order for the authenticated merchant. For USD orders, an effective requested tip may be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.
 * POST /v1/orders
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.create({line_items: [{variant_id: "example"}]}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "buyer_note"?: string; "customer_id"?: string; "delivery_destination"?: { "address": OrderDeliveryDestinationAddressRequestInput; "recipient"?: OrderDeliveryDestinationRecipientRequestInput; }; "discounts"?: Array<CreateOrderDiscountInput>; "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput; "line_items": Array<CreateOrderLineItemInput>; "metadata"?: Record<string, string>; "requested_tip"?: ({ "amount_money"?: ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); "description"?: string; "metadata"?: Record<string, string>; "name"?: string; "percent"?: number; }) & ((({ "amount_money": unknown; }) & (({ "percent"?: never }))) | (({ "percent": unknown; }) & (({ "amount_money"?: never })))); "tax"?: OrderTaxRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "buyer_note"?: string; "customer_id"?: string; "delivery_destination"?: { "address": OrderDeliveryDestinationAddressRequestInput; "recipient"?: OrderDeliveryDestinationRecipientRequestInput; }; "discounts"?: Array<CreateOrderDiscountInput>; "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput; "line_items": Array<CreateOrderLineItemInput>; "metadata"?: Record<string, string>; "requested_tip"?: ({ "amount_money"?: ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); "description"?: string; "metadata"?: Record<string, string>; "name"?: string; "percent"?: number; }) & ((({ "amount_money": unknown; }) & (({ "percent"?: never }))) | (({ "percent": unknown; }) & (({ "amount_money"?: never })))); "tax"?: OrderTaxRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersCreateResponse>>;
    /**
 * Creates the link Flint's receipt email carries, to put in buyer email or messages you send yourself. It opens the order in your Flint-hosted customer account without a sign-in, and lets the buyer have the receipt sent again to the order's email. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the order. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED, and for an order without a customer, ACCESS_LINK_CUSTOMER_REQUIRED. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.
 * POST /v1/orders/{order_id}/access-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createAccessLink(order_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AccessLinkResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createAccessLinkWithResponse(order_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersCreateAccessLinkResponse>>;
    /**
 * Creates an immutable payment leg owned by the order. Collect a payment source using payment_collection, then submit that source through payOrder. This route requires commerce.orders.write; standalone payment-intent routes require payments.payment_intents.write.
 * POST /v1/orders/{order_id}/payment-intents
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createPaymentIntent("example", {}, { idempotencyKey: idempotencyKey })
 */
    createPaymentIntent(order_id: InputValue<string>, params: (InputValue<{ "amount_money"?: MoneyValueInput; "capture_method"?: "automatic" | "manual"; "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_options"?: Array<string>; "payment_return_url"?: string; "payment_source_selection"?: OrderPaymentSourceSelectionInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateOrderPaymentIntentResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createPaymentIntentWithResponse(order_id: InputValue<string>, params: (InputValue<{ "amount_money"?: MoneyValueInput; "capture_method"?: "automatic" | "manual"; "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_options"?: Array<string>; "payment_return_url"?: string; "payment_source_selection"?: OrderPaymentSourceSelectionInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersCreatePaymentIntentResponse>>;
    /**
 * Removes a single service charge, fee, or surcharge from an order.
 * DELETE /v1/orders/{order_id}/charges/{order_charge_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteCharge("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteChargeWithResponse(order_id: InputValue<string>, order_charge_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersDeleteChargeResponse>>;
    /**
 * Removes a single line item from an order.
 * DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteLineItemWithResponse(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersDeleteLineItemResponse>>;
    /**
 * Returns a single order by ID.
 * GET /v1/orders/{order_id}
 * @example
 * client.orders.get("example")
 */
    get(order_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "fulfillments.packages" | "fulfillments.shipments" | "payment_intents" | "subscription" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(order_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "fulfillments.packages" | "fulfillments.shipments" | "payment_intents" | "subscription" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<OrdersGetResponse>>;
    /**
 * Returns the delivery selection committed to an order.
 * GET /v1/orders/{order_id}/delivery-selections/current
 * @example
 * client.orders.getCurrentDeliverySelection("example")
 */
    getCurrentDeliverySelection(order_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeliverySelectionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getCurrentDeliverySelectionWithResponse(order_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<OrdersGetCurrentDeliverySelectionResponse>>;
    /**
 * Returns one durable payment attempt for the order. Checkout-session callers can read only attempts created by their own session.
 * GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}
 * @example
 * client.orders.getPaymentAttempt("example", "example")
 */
    getPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<OrderPaymentAttemptResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getPaymentAttemptWithResponse(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<OrdersGetPaymentAttemptResponse>>;
    /**
 * Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource.
 * GET /v1/orders/{order_id}/activities
 * @example
 * client.orders.listActivities("example")
 */
    listActivities(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<OrderActivityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listActivitiesWithResponse(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<OrdersListActivitiesResponse>>;
    listActivitiesPages(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<OrderActivityListResponse>;
    listActivitiesPagesWithResponse(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<OrdersListActivitiesResponse>>;
    listActivitiesItems(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_direction"?: InputValue<"asc" | "desc">; "type"?: InputValue<Array<"created" | "line_item_added" | "line_item_updated" | "line_item_removed" | "discount_applied" | "discount_removed" | "tax_updated" | "requested_tip_added" | "requested_tip_updated" | "requested_tip_removed" | "charge_added" | "charge_updated" | "charge_removed" | "charge_fulfillment_updated" | "order_updated" | "adjustment" | "closed" | "payment" | "payment_failed" | "refund" | "refund_failed" | "checkout_session_created" | "checkout_session_expired" | "checkout_session_invalidated" | "fulfillment_created" | "fulfillment_updated" | "fulfillment_state_changed">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<OrderActivity>;
    /**
 * Returns payment attempts for the order, newest first. Checkout-session callers see only attempts created by their own session.
 * GET /v1/orders/{order_id}/payment-attempts
 * @example
 * client.orders.listPaymentAttempts("example")
 */
    listPaymentAttempts(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<OrderPaymentAttemptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPaymentAttemptsWithResponse(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<OrdersListPaymentAttemptsResponse>>;
    listPaymentAttemptsPages(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): AsyncGenerator<OrderPaymentAttemptListResponse>;
    listPaymentAttemptsPagesWithResponse(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<OrdersListPaymentAttemptsResponse>>;
    listPaymentAttemptsItems(order_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): AsyncGenerator<OrderPaymentAttempt>;
    /**
 * Returns a paginated list of orders for the authenticated merchant.
 * GET /v1/orders
 * @example
 * client.orders.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<OrderListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<OrdersListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<OrderListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<OrdersListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"open" | "closed">; "payment_status"?: InputValue<(("unpaid" | "partially_paid" | "paid") | (Array<"unpaid" | "partially_paid" | "paid">))>; "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>; "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled">>; "order_number"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "origin"?: InputValue<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">; "query"?: InputValue<string>; "subscription_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "outstanding_money" | "total">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Order>;
    /**
 * Starts or resumes a payment attempt on the order. Set action to pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to save a newly collected token on a zero-balance order, or resume to continue an attempt after a pending client action. Each action accepts only its own fields. Only confirm_payment_intents accepts completion_behavior. A pay action without payment_source is valid only when the outstanding balance is zero. To continue a resumable attempt, send action: resume with order_payment_attempt_id and a new Idempotency-Key. An exact retry of the original request with its Idempotency-Key returns the stored response if the request completed, or recovers the same attempt if it was interrupted. Payment intents with manual capture return an active authorization instead of settling immediately.
 * POST /v1/orders/{order_id}/pay
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.pay({order_id: "example", body: {action: "pay"}}, { idempotencyKey: idempotencyKey })
 */
    pay(input: OrdersPayInput, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelOrderPaymentAttemptResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    payWithResponse(input: OrdersPayInput, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersPayResponse>>;
    /**
 * Removes one or more pending applied discounts from an order. Redeemed or canceled discounts are settlement history and cannot be removed.
 * POST /v1/orders/{order_id}/discounts/remove
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeDiscounts("example", {order_discount_ids: []}, { idempotencyKey: idempotencyKey })
 */
    removeDiscounts(order_id: InputValue<string>, params: (InputValue<{ "order_discount_ids": Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeDiscountsWithResponse(order_id: InputValue<string>, params: (InputValue<{ "order_discount_ids": Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersRemoveDiscountsResponse>>;
    /**
 * Removes a selected gift card without moving value. The order revision must still match. Selections cannot change during an active payment attempt.
 * DELETE /v1/orders/{order_id}/gift-cards/{gift_card_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeGiftCard("example", "example", {order_revision: "1"}, { idempotencyKey: idempotencyKey })
 */
    removeGiftCard(order_id: InputValue<string>, gift_card_id: InputValue<string>, params: (InputValue<{ "order_revision": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeGiftCardWithResponse(order_id: InputValue<string>, gift_card_id: InputValue<string>, params: (InputValue<{ "order_revision": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersRemoveGiftCardResponse>>;
    /**
 * Recalculates pending discounts and automatic promotions for a mutable order.
 * POST /v1/orders/{order_id}/discounts/reprice
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.repriceDiscounts("example", {}, { idempotencyKey: idempotencyKey })
 */
    repriceDiscounts(order_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    repriceDiscountsWithResponse(order_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersRepriceDiscountsResponse>>;
    /**
 * Marks a paid inventory failure as resolved after an operator has completed manual inventory remediation.
 * POST /v1/orders/{order_id}/inventory-exception/resolve
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.resolveInventoryException("example", undefined, { idempotencyKey: idempotencyKey })
 */
    resolveInventoryException(order_id: InputValue<string>, params?: (InputValue<{ "reason_message"?: string; }> | { "reason_message"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resolveInventoryExceptionWithResponse(order_id: InputValue<string>, params?: (InputValue<{ "reason_message"?: string; }> | { "reason_message"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersResolveInventoryExceptionResponse>>;
    /**
 * Queues a receipt for a paid order, including gift card payments and settled payments. Send email to choose a recipient, or omit it to use the order's email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes per order and recipient.
 * POST /v1/orders/{order_id}/send-receipt
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.sendReceipt("example", undefined, { idempotencyKey: idempotencyKey })
 */
    sendReceipt(order_id: InputValue<string>, params?: (InputValue<{ "email"?: string; }> | { "email"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<ActionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    sendReceiptWithResponse(order_id: InputValue<string>, params?: (InputValue<{ "email"?: string; }> | { "email"?: never }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersSendReceiptResponse>>;
    /**
 * Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the delivery destination, and the requested tip. Send requested_tip: null to clear the current requested tip.
 * PATCH /v1/orders/{order_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.update("example", {buyer_note: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(order_id: InputValue<string>, params: (InputValue<{ "buyer_note"?: string; "customer_id"?: string; "delivery_destination"?: (({ "address": OrderDeliveryDestinationAddressRequestInput; "recipient"?: OrderDeliveryDestinationRecipientRequestInput; }) | (null)); "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput; "metadata"?: Record<string, string | null> | null; "requested_tip"?: ((({ "amount_money"?: ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); "description"?: string; "metadata"?: Record<string, string>; "name"?: string; "percent"?: number; }) & ((({ "amount_money": unknown; }) & (({ "percent"?: never }))) | (({ "percent": unknown; }) & (({ "amount_money"?: never }))))) | (null)); "tax"?: OrderTaxRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(order_id: InputValue<string>, params: (InputValue<{ "buyer_note"?: string; "customer_id"?: string; "delivery_destination"?: (({ "address": OrderDeliveryDestinationAddressRequestInput; "recipient"?: OrderDeliveryDestinationRecipientRequestInput; }) | (null)); "external_reference_id"?: string; "internal_note"?: string; "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput; "metadata"?: Record<string, string | null> | null; "requested_tip"?: ((({ "amount_money"?: ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); "description"?: string; "metadata"?: Record<string, string>; "name"?: string; "percent"?: number; }) & ((({ "amount_money": unknown; }) & (({ "percent"?: never }))) | (({ "percent": unknown; }) & (({ "amount_money"?: never }))))) | (null)); "tax"?: OrderTaxRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersUpdateResponse>>;
    /**
 * Updates a single service charge, fee, or surcharge on an order.
 * PATCH /v1/orders/{order_id}/charges/{order_charge_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateCharge("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params: (InputValue<{ "amount_money"?: MoneyValueInput; "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount"; "description"?: string; "fulfillment_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "percent"?: number; "tax"?: OrderCalculatedChargeTaxInput; "type"?: "service_fee" | "delivery_fee" | "shipping_fee" | "handling_fee" | "packaging_fee" | "small_order_fee" | "service_area_fee" | "setup_fee" | "installation_fee" | "cleaning_fee" | "booking_fee" | "reservation_fee" | "ticket_fee" | "fulfillment_fee" | "restocking_fee" | "rush_fee" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrderResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateChargeWithResponse(order_id: InputValue<string>, order_charge_id: InputValue<string>, params: (InputValue<{ "amount_money"?: MoneyValueInput; "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount"; "description"?: string; "fulfillment_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "percent"?: number; "tax"?: OrderCalculatedChargeTaxInput; "type"?: "service_fee" | "delivery_fee" | "shipping_fee" | "handling_fee" | "packaging_fee" | "small_order_fee" | "service_area_fee" | "setup_fee" | "installation_fee" | "cleaning_fee" | "booking_fee" | "reservation_fee" | "ticket_fee" | "fulfillment_fee" | "restocking_fee" | "rush_fee" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrdersUpdateChargeResponse>>;
    /**
 * Updates a single line item on an order. Send gift_card_recipient and expected_version to replace or clear recipient delivery details before any purchase funding. Checkout credentials can update recipient details or modifiers, each with expected_version.
 * PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params: (InputValue<({ "description"?: string; "expected_version"?: string; "gift_card_recipient"?: (({ "email": string; "message"?: string; "name"?: string; "send_at"?: string | globalThis.Date; }) | (null)); "metadata"?: Record<string, string | null> | null; "modifiers"?: Array<OrderLineItemModifierRequestInput>; "name"?: string; "quantity"?: string; "tax"?: OrderCalculatedLineItemTaxInput; "unit_price_money"?: MoneyValueInput; }) & (((({ "gift_card_recipient"?: never })) | ({ "gift_card_recipient": unknown; "expected_version": unknown; }))) & ((({ "modifiers"?: never })) | ({ "modifiers": unknown; "expected_version": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<_SdkPayloadAt<(({ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; }) | ({ "data": CheckoutSessionLineItemModifierUpdate; "meta"?: ResponseMeta; "request_id"?: string; }) | (object)), ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateLineItemWithResponse(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params: (InputValue<({ "description"?: string; "expected_version"?: string; "gift_card_recipient"?: (({ "email": string; "message"?: string; "name"?: string; "send_at"?: string | globalThis.Date; }) | (null)); "metadata"?: Record<string, string | null> | null; "modifiers"?: Array<OrderLineItemModifierRequestInput>; "name"?: string; "quantity"?: string; "tax"?: OrderCalculatedLineItemTaxInput; "unit_price_money"?: MoneyValueInput; }) & (((({ "gift_card_recipient"?: never })) | ({ "gift_card_recipient": unknown; "expected_version": unknown; }))) & ((({ "modifiers"?: never })) | ({ "modifiers": unknown; "expected_version": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<OrdersUpdateLineItemResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly orders: OrdersResource;
}
export type { OrderChargeRequestInput } from '../declarations/OrderChargeRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { OrderResponse } from '../declarations/OrderResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { OrdersAddChargeResponse } from '../declarations/OrdersAddChargeResponse.js';
export type { CreateOrderLineItemInput } from '../declarations/CreateOrderLineItemInput.js';
export type { OrdersAddLineItemsResponse } from '../declarations/OrdersAddLineItemsResponse.js';
export type { ManualDiscountRequestInput } from '../declarations/ManualDiscountRequestInput.js';
export type { PromotionRefRequestInput } from '../declarations/PromotionRefRequestInput.js';
export type { OrdersApplyDiscountResponse } from '../declarations/OrdersApplyDiscountResponse.js';
export type { OrdersApplyGiftCardResponse } from '../declarations/OrdersApplyGiftCardResponse.js';
export type { OrderPaymentLifecycleResponse } from '../declarations/OrderPaymentLifecycleResponse.js';
export type { OrdersCancelPaymentResponse } from '../declarations/OrdersCancelPaymentResponse.js';
export type { CancelOrderPaymentAttemptResponse } from '../declarations/CancelOrderPaymentAttemptResponse.js';
export type { OrdersCancelPaymentAttemptResponse } from '../declarations/OrdersCancelPaymentAttemptResponse.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { OrdersCapturePaymentResponse } from '../declarations/OrdersCapturePaymentResponse.js';
export type { OrdersCloseSessionResponse } from '../declarations/OrdersCloseSessionResponse.js';
export type { CreateDigitalFulfillmentDetailsInput } from '../declarations/CreateDigitalFulfillmentDetailsInput.js';
export type { FulfillmentLineItemRequestInput } from '../declarations/FulfillmentLineItemRequestInput.js';
export type { CreateDeliveryFulfillmentDetailsInput } from '../declarations/CreateDeliveryFulfillmentDetailsInput.js';
export type { CreatePickupFulfillmentDetailsInput } from '../declarations/CreatePickupFulfillmentDetailsInput.js';
export type { FulfillmentRecipientInput } from '../declarations/FulfillmentRecipientInput.js';
export type { CreateServiceFulfillmentDetailsInput } from '../declarations/CreateServiceFulfillmentDetailsInput.js';
export type { CreatePackageRequestInput } from '../declarations/CreatePackageRequestInput.js';
export type { FulfillmentResponse } from '../declarations/FulfillmentResponse.js';
export type { OrdersCreateFulfillmentResponse } from '../declarations/OrdersCreateFulfillmentResponse.js';
export type { OrderDeliveryDestinationAddressRequestInput } from '../declarations/OrderDeliveryDestinationAddressRequestInput.js';
export type { OrderDeliveryDestinationRecipientRequestInput } from '../declarations/OrderDeliveryDestinationRecipientRequestInput.js';
export type { CreateOrderDiscountInput } from '../declarations/CreateOrderDiscountInput.js';
export type { OrderInventoryRoutingSourceRequestInput } from '../declarations/OrderInventoryRoutingSourceRequestInput.js';
export type { OrderTaxRequestInput } from '../declarations/OrderTaxRequestInput.js';
export type { OrdersCreateResponse } from '../declarations/OrdersCreateResponse.js';
export type { AccessLinkResponse } from '../declarations/AccessLinkResponse.js';
export type { OrdersCreateAccessLinkResponse } from '../declarations/OrdersCreateAccessLinkResponse.js';
export type { OrderPaymentSourceSelectionInput } from '../declarations/OrderPaymentSourceSelectionInput.js';
export type { CreateOrderPaymentIntentResponse } from '../declarations/CreateOrderPaymentIntentResponse.js';
export type { OrdersCreatePaymentIntentResponse } from '../declarations/OrdersCreatePaymentIntentResponse.js';
export type { OrdersDeleteChargeResponse } from '../declarations/OrdersDeleteChargeResponse.js';
export type { OrdersDeleteLineItemResponse } from '../declarations/OrdersDeleteLineItemResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { OrdersGetResponse } from '../declarations/OrdersGetResponse.js';
export type { DeliverySelectionResponse } from '../declarations/DeliverySelectionResponse.js';
export type { OrdersGetCurrentDeliverySelectionResponse } from '../declarations/OrdersGetCurrentDeliverySelectionResponse.js';
export type { OrderPaymentAttemptResponse } from '../declarations/OrderPaymentAttemptResponse.js';
export type { OrdersGetPaymentAttemptResponse } from '../declarations/OrdersGetPaymentAttemptResponse.js';
export type { OrderActivityListResponse } from '../declarations/OrderActivityListResponse.js';
export type { OrdersListActivitiesResponse } from '../declarations/OrdersListActivitiesResponse.js';
export type { OrderActivity } from '../declarations/OrderActivity.js';
export type { OrderPaymentAttemptListResponse } from '../declarations/OrderPaymentAttemptListResponse.js';
export type { OrdersListPaymentAttemptsResponse } from '../declarations/OrdersListPaymentAttemptsResponse.js';
export type { OrderPaymentAttempt } from '../declarations/OrderPaymentAttempt.js';
export type { OrderListResponse } from '../declarations/OrderListResponse.js';
export type { OrdersListResponse } from '../declarations/OrdersListResponse.js';
export type { Order } from '../declarations/Order.js';
export type { OrdersPayInput } from '../declarations/OrdersPayInput.js';
export type { OrdersPayResponse } from '../declarations/OrdersPayResponse.js';
export type { OrdersRemoveDiscountsResponse } from '../declarations/OrdersRemoveDiscountsResponse.js';
export type { OrdersRemoveGiftCardResponse } from '../declarations/OrdersRemoveGiftCardResponse.js';
export type { OrdersRepriceDiscountsResponse } from '../declarations/OrdersRepriceDiscountsResponse.js';
export type { OrdersResolveInventoryExceptionResponse } from '../declarations/OrdersResolveInventoryExceptionResponse.js';
export type { ActionResponse } from '../declarations/ActionResponse.js';
export type { OrdersSendReceiptResponse } from '../declarations/OrdersSendReceiptResponse.js';
export type { OrdersUpdateResponse } from '../declarations/OrdersUpdateResponse.js';
export type { OrderCalculatedChargeTaxInput } from '../declarations/OrderCalculatedChargeTaxInput.js';
export type { OrdersUpdateChargeResponse } from '../declarations/OrdersUpdateChargeResponse.js';
export type { OrderLineItemModifierRequestInput } from '../declarations/OrderLineItemModifierRequestInput.js';
export type { OrderCalculatedLineItemTaxInput } from '../declarations/OrderCalculatedLineItemTaxInput.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { CheckoutSessionLineItemModifierUpdate } from '../declarations/CheckoutSessionLineItemModifierUpdate.js';
export type { OrdersUpdateLineItemResponse } from '../declarations/OrdersUpdateLineItemResponse.js';
export type { OrdersAddChargeInput } from '../declarations/OrdersAddChargeInput.js';
export type { OrdersAddLineItemsInput } from '../declarations/OrdersAddLineItemsInput.js';
export type { OrdersApplyDiscountInput } from '../declarations/OrdersApplyDiscountInput.js';
export type { OrdersApplyGiftCardInput } from '../declarations/OrdersApplyGiftCardInput.js';
export type { OrdersCancelPaymentInput } from '../declarations/OrdersCancelPaymentInput.js';
export type { OrdersCancelPaymentAttemptInput } from '../declarations/OrdersCancelPaymentAttemptInput.js';
export type { OrdersCapturePaymentInput } from '../declarations/OrdersCapturePaymentInput.js';
export type { OrdersCloseSessionInput } from '../declarations/OrdersCloseSessionInput.js';
export type { OrdersCreateFulfillmentInput } from '../declarations/OrdersCreateFulfillmentInput.js';
export type { OrdersCreateInput } from '../declarations/OrdersCreateInput.js';
export type { OrdersCreateAccessLinkInput } from '../declarations/OrdersCreateAccessLinkInput.js';
export type { OrdersCreatePaymentIntentInput } from '../declarations/OrdersCreatePaymentIntentInput.js';
export type { OrdersDeleteChargeInput } from '../declarations/OrdersDeleteChargeInput.js';
export type { OrdersDeleteLineItemInput } from '../declarations/OrdersDeleteLineItemInput.js';
export type { OrdersGetInput } from '../declarations/OrdersGetInput.js';
export type { OrdersGetCurrentDeliverySelectionInput } from '../declarations/OrdersGetCurrentDeliverySelectionInput.js';
export type { OrdersGetPaymentAttemptInput } from '../declarations/OrdersGetPaymentAttemptInput.js';
export type { OrdersListActivitiesInput } from '../declarations/OrdersListActivitiesInput.js';
export type { OrdersListPaymentAttemptsInput } from '../declarations/OrdersListPaymentAttemptsInput.js';
export type { OrdersListInput } from '../declarations/OrdersListInput.js';
export type { OrdersRemoveDiscountsInput } from '../declarations/OrdersRemoveDiscountsInput.js';
export type { OrdersRemoveGiftCardInput } from '../declarations/OrdersRemoveGiftCardInput.js';
export type { OrdersRepriceDiscountsInput } from '../declarations/OrdersRepriceDiscountsInput.js';
export type { OrdersResolveInventoryExceptionInput } from '../declarations/OrdersResolveInventoryExceptionInput.js';
export type { OrdersSendReceiptInput } from '../declarations/OrdersSendReceiptInput.js';
export type { OrdersUpdateInput } from '../declarations/OrdersUpdateInput.js';
export type { OrdersUpdateChargeInput } from '../declarations/OrdersUpdateChargeInput.js';
export type { OrdersUpdateLineItemInput } from '../declarations/OrdersUpdateLineItemInput.js';
export type { OrdersUpdateLineItemResponseKnown } from '../declarations/OrdersUpdateLineItemResponseKnown.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { LineItemFulfillmentRequestInput } from '../declarations/LineItemFulfillmentRequestInput.js';
export type { LineItemFulfillmentSizeRequestInput } from '../declarations/LineItemFulfillmentSizeRequestInput.js';
export type { LineItemFulfillmentOriginRequestInput } from '../declarations/LineItemFulfillmentOriginRequestInput.js';
export type { LineItemFulfillmentWeightRequestInput } from '../declarations/LineItemFulfillmentWeightRequestInput.js';
export type { GiftCardPurchaseRecipientInput } from '../declarations/GiftCardPurchaseRecipientInput.js';
export type { ImageReferenceRequestInput } from '../declarations/ImageReferenceRequestInput.js';
export type { OrderDraftLineItemInventoryDemandRequestInput } from '../declarations/OrderDraftLineItemInventoryDemandRequestInput.js';
export type { TextModifierRequestInput } from '../declarations/TextModifierRequestInput.js';
export type { OrderDraftLineItemTaxRequestInput } from '../declarations/OrderDraftLineItemTaxRequestInput.js';
export type { OrderDraftLineItemTaxCalculationRequestInput } from '../declarations/OrderDraftLineItemTaxCalculationRequestInput.js';
export type { OrderDraftTaxComponentRequestInput } from '../declarations/OrderDraftTaxComponentRequestInput.js';
export type { OrderDraftTaxJurisdictionRequestInput } from '../declarations/OrderDraftTaxJurisdictionRequestInput.js';
export type { OrderPaymentLifecycleResult } from '../declarations/OrderPaymentLifecycleResult.js';
export type { PaymentIntent } from '../declarations/PaymentIntent.js';
export type { PaymentAddOnFee } from '../declarations/PaymentAddOnFee.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { StripePaymentClientAction } from '../declarations/StripePaymentClientAction.js';
export type { ErrorRemediation } from '../declarations/ErrorRemediation.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { PayOrderResult } from '../declarations/PayOrderResult.js';
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { ShippingDimensionsInput } from '../declarations/ShippingDimensionsInput.js';
export type { ReturnShipmentLineItemAllocationInput } from '../declarations/ReturnShipmentLineItemAllocationInput.js';
export type { ShippingWeightInput } from '../declarations/ShippingWeightInput.js';
export type { Fulfillment } from '../declarations/Fulfillment.js';
export type { FulfillmentChargeLink } from '../declarations/FulfillmentChargeLink.js';
export type { DigitalFulfillmentDetails } from '../declarations/DigitalFulfillmentDetails.js';
export type { FulfillmentLineItem } from '../declarations/FulfillmentLineItem.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { DeliveryFulfillmentDetails } from '../declarations/DeliveryFulfillmentDetails.js';
export type { ExpandedPackageSummary } from '../declarations/ExpandedPackageSummary.js';
export type { PickupFulfillmentDetails } from '../declarations/PickupFulfillmentDetails.js';
export type { FulfillmentRecipient } from '../declarations/FulfillmentRecipient.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { ServiceFulfillmentDetails } from '../declarations/ServiceFulfillmentDetails.js';
export type { ExpandedShipmentSummary } from '../declarations/ExpandedShipmentSummary.js';
export type { OrderTaxCalculationRequestInput } from '../declarations/OrderTaxCalculationRequestInput.js';
export type { OrderTaxComponentRequestInput } from '../declarations/OrderTaxComponentRequestInput.js';
export type { OrderTaxJurisdictionRequestInput } from '../declarations/OrderTaxJurisdictionRequestInput.js';
export type { OrderTaxLocationRequestInput } from '../declarations/OrderTaxLocationRequestInput.js';
export type { OrderTaxLocationPostalAddressRequestInput } from '../declarations/OrderTaxLocationPostalAddressRequestInput.js';
export type { OrderTaxLocationFullAddressRequestInput } from '../declarations/OrderTaxLocationFullAddressRequestInput.js';
export type { AccessLink } from '../declarations/AccessLink.js';
export type { OrderPaymentSourceCardSelectionInput } from '../declarations/OrderPaymentSourceCardSelectionInput.js';
export type { CreatePaymentIntentResult } from '../declarations/CreatePaymentIntentResult.js';
export type { PaymentCollection } from '../declarations/PaymentCollection.js';
export type { PaymentCollectionStripe } from '../declarations/PaymentCollectionStripe.js';
export type { SelectableOrderPaymentIntent } from '../declarations/SelectableOrderPaymentIntent.js';
export type { PaymentErrorSummary } from '../declarations/PaymentErrorSummary.js';
export type { DeliverySelection } from '../declarations/DeliverySelection.js';
export type { DeliveryAddressResource } from '../declarations/DeliveryAddressResource.js';
export type { DeliveryCoordinateRequest } from '../declarations/DeliveryCoordinateRequest.js';
export type { DeliverySelectionChoiceResource } from '../declarations/DeliverySelectionChoiceResource.js';
export type { DeliveryPlan } from '../declarations/DeliveryPlan.js';
export type { DeliverySelectionInstructionsRequest } from '../declarations/DeliverySelectionInstructionsRequest.js';
export type { DeliveryShipmentDetails } from '../declarations/DeliveryShipmentDetails.js';
export type { DeliveryPickupDetails } from '../declarations/DeliveryPickupDetails.js';
export type { DeliveryLocationSummaryResource } from '../declarations/DeliveryLocationSummaryResource.js';
export type { DeliveryInputRequirement } from '../declarations/DeliveryInputRequirement.js';
export type { DeliveryInputConstraint } from '../declarations/DeliveryInputConstraint.js';
export type { DeliveryWindowResource } from '../declarations/DeliveryWindowResource.js';
export type { DeliverySelectionLifecycleEventResource } from '../declarations/DeliverySelectionLifecycleEventResource.js';
export type { PaymentAttemptGiftCardRedemption } from '../declarations/PaymentAttemptGiftCardRedemption.js';
export type { PaymentAttemptPaymentIntent } from '../declarations/PaymentAttemptPaymentIntent.js';
export type { PendingPaymentAction } from '../declarations/PendingPaymentAction.js';
export type { AppliedDiscount } from '../declarations/AppliedDiscount.js';
export type { BuyerAction } from '../declarations/BuyerAction.js';
export type { OrderCharge } from '../declarations/OrderCharge.js';
export type { OrderCalculatedChargeTax } from '../declarations/OrderCalculatedChargeTax.js';
export type { TaxCalculationRequest } from '../declarations/TaxCalculationRequest.js';
export type { TaxComponentRequest } from '../declarations/TaxComponentRequest.js';
export type { TaxJurisdiction } from '../declarations/TaxJurisdiction.js';
export type { OrderDeliveryDestinationAddress } from '../declarations/OrderDeliveryDestinationAddress.js';
export type { OrderDeliveryDestinationRecipient } from '../declarations/OrderDeliveryDestinationRecipient.js';
export type { OrderGiftCardAllocation } from '../declarations/OrderGiftCardAllocation.js';
export type { OrderGiftCardSettlement } from '../declarations/OrderGiftCardSettlement.js';
export type { OrderGiftCardSelection } from '../declarations/OrderGiftCardSelection.js';
export type { OrderLineItem } from '../declarations/OrderLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { GiftCardProductConfiguration } from '../declarations/GiftCardProductConfiguration.js';
export type { GiftCardCustomAmountBounds } from '../declarations/GiftCardCustomAmountBounds.js';
export type { GiftCardPurchaseRecipient } from '../declarations/GiftCardPurchaseRecipient.js';
export type { Image } from '../declarations/Image.js';
export type { LineItemInventoryDemand } from '../declarations/LineItemInventoryDemand.js';
export type { PurchasedGiftCard } from '../declarations/PurchasedGiftCard.js';
export type { OrderCalculatedLineItemTax } from '../declarations/OrderCalculatedLineItemTax.js';
export type { ExpandedPaymentIntentSummary } from '../declarations/ExpandedPaymentIntentSummary.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { RequestedTip } from '../declarations/RequestedTip.js';
export type { OrderReturnCreditSettlement } from '../declarations/OrderReturnCreditSettlement.js';
export type { SubscriptionPlanLineItem } from '../declarations/SubscriptionPlanLineItem.js';
export type { OrderLineItemTax } from '../declarations/OrderLineItemTax.js';
export type { OrderTaxExemption } from '../declarations/OrderTaxExemption.js';
export type { OrderTaxLocation } from '../declarations/OrderTaxLocation.js';
export type { TaxBreakdown } from '../declarations/TaxBreakdown.js';
export type { Tip } from '../declarations/Tip.js';
export type { TipPaymentIntentAllocation } from '../declarations/TipPaymentIntentAllocation.js';
export type { TipValueSettlementAllocation } from '../declarations/TipValueSettlementAllocation.js';
export type { PayOrderRequestInput } from '../declarations/PayOrderRequestInput.js';
export type { OrderGiftCardAllocationAcceptanceInput } from '../declarations/OrderGiftCardAllocationAcceptanceInput.js';
export type { PaymentSourceCredentialInput } from '../declarations/PaymentSourceCredentialInput.js';
export type { OrderPaymentIntentSelectionInput } from '../declarations/OrderPaymentIntentSelectionInput.js';
export type { ActionResult } from '../declarations/ActionResult.js';
export type { TaxCalculationRequestInput } from '../declarations/TaxCalculationRequestInput.js';
export type { TaxComponentRequestInput } from '../declarations/TaxComponentRequestInput.js';
export type { TaxJurisdictionInput } from '../declarations/TaxJurisdictionInput.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { AddOrderChargeRequestInput } from '../declarations/AddOrderChargeRequestInput.js';
export type { AddLineItemsRequestInput } from '../declarations/AddLineItemsRequestInput.js';
export type { ApplyDiscountRequestInput } from '../declarations/ApplyDiscountRequestInput.js';
export type { ApplyOrderGiftCardRequestInput } from '../declarations/ApplyOrderGiftCardRequestInput.js';
export type { CancelOrderPaymentRequestInput } from '../declarations/CancelOrderPaymentRequestInput.js';
export type { CancelOrderPaymentAttemptRequestInput } from '../declarations/CancelOrderPaymentAttemptRequestInput.js';
export type { CaptureOrderPaymentRequestInput } from '../declarations/CaptureOrderPaymentRequestInput.js';
export type { CloseOrderRequestInput } from '../declarations/CloseOrderRequestInput.js';
export type { CreateFulfillmentRequestInput } from '../declarations/CreateFulfillmentRequestInput.js';
export type { CreateOrderRequestInput } from '../declarations/CreateOrderRequestInput.js';
export type { CreateOrderPaymentIntentRequestInput } from '../declarations/CreateOrderPaymentIntentRequestInput.js';
export type { RemoveDiscountsRequestInput } from '../declarations/RemoveDiscountsRequestInput.js';
export type { RemoveOrderGiftCardRequestInput } from '../declarations/RemoveOrderGiftCardRequestInput.js';
export type { ResendWebhookDeliveryRequestInput } from '../declarations/ResendWebhookDeliveryRequestInput.js';
export type { SendOrderReceiptRequestInput } from '../declarations/SendOrderReceiptRequestInput.js';
export type { UpdateOrderRequestInput } from '../declarations/UpdateOrderRequestInput.js';
export type { UpdateOrderChargeRequestInput } from '../declarations/UpdateOrderChargeRequestInput.js';
export type { UpdateLineItemRequestInput } from '../declarations/UpdateLineItemRequestInput.js';
export { makeOrderResponse } from '../declarations/makeOrderResponse.js';
export { makeOrderPaymentLifecycleResponse } from '../declarations/makeOrderPaymentLifecycleResponse.js';
export { makeCancelOrderPaymentAttemptResponse } from '../declarations/makeCancelOrderPaymentAttemptResponse.js';
export { makeFulfillmentResponse } from '../declarations/makeFulfillmentResponse.js';
export { makeAccessLinkResponse } from '../declarations/makeAccessLinkResponse.js';
export { makeCreateOrderPaymentIntentResponse } from '../declarations/makeCreateOrderPaymentIntentResponse.js';
export { makeDeliverySelectionResponse } from '../declarations/makeDeliverySelectionResponse.js';
export { makeOrderPaymentAttemptResponse } from '../declarations/makeOrderPaymentAttemptResponse.js';
export { makeOrderActivityListResponse } from '../declarations/makeOrderActivityListResponse.js';
export { makeOrderActivity } from '../declarations/makeOrderActivity.js';
export { makeOrderPaymentAttemptListResponse } from '../declarations/makeOrderPaymentAttemptListResponse.js';
export { makeOrderPaymentAttempt } from '../declarations/makeOrderPaymentAttempt.js';
export { makeOrderListResponse } from '../declarations/makeOrderListResponse.js';
export { makeOrder } from '../declarations/makeOrder.js';
export { makeActionResponse } from '../declarations/makeActionResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeCheckoutSessionLineItemModifierUpdate } from '../declarations/makeCheckoutSessionLineItemModifierUpdate.js';
export { makeOrderPaymentLifecycleResult } from '../declarations/makeOrderPaymentLifecycleResult.js';
export { makePaymentIntent } from '../declarations/makePaymentIntent.js';
export { makePaymentAddOnFee } from '../declarations/makePaymentAddOnFee.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeStripePaymentClientAction } from '../declarations/makeStripePaymentClientAction.js';
export { makeErrorRemediation } from '../declarations/makeErrorRemediation.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makePayOrderResult } from '../declarations/makePayOrderResult.js';
export { makeFulfillment } from '../declarations/makeFulfillment.js';
export { makeFulfillmentChargeLink } from '../declarations/makeFulfillmentChargeLink.js';
export { makeDigitalFulfillmentDetails } from '../declarations/makeDigitalFulfillmentDetails.js';
export { makeFulfillmentLineItem } from '../declarations/makeFulfillmentLineItem.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeDeliveryFulfillmentDetails } from '../declarations/makeDeliveryFulfillmentDetails.js';
export { makeExpandedPackageSummary } from '../declarations/makeExpandedPackageSummary.js';
export { makePickupFulfillmentDetails } from '../declarations/makePickupFulfillmentDetails.js';
export { makeFulfillmentRecipient } from '../declarations/makeFulfillmentRecipient.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeServiceFulfillmentDetails } from '../declarations/makeServiceFulfillmentDetails.js';
export { makeExpandedShipmentSummary } from '../declarations/makeExpandedShipmentSummary.js';
export { makeAccessLink } from '../declarations/makeAccessLink.js';
export { makeCreatePaymentIntentResult } from '../declarations/makeCreatePaymentIntentResult.js';
export { makePaymentCollection } from '../declarations/makePaymentCollection.js';
export { makePaymentCollectionStripe } from '../declarations/makePaymentCollectionStripe.js';
export { makeSelectableOrderPaymentIntent } from '../declarations/makeSelectableOrderPaymentIntent.js';
export { makePaymentErrorSummary } from '../declarations/makePaymentErrorSummary.js';
export { makeDeliverySelection } from '../declarations/makeDeliverySelection.js';
export { makeDeliveryAddressResource } from '../declarations/makeDeliveryAddressResource.js';
export { makeDeliveryCoordinateRequest } from '../declarations/makeDeliveryCoordinateRequest.js';
export { makeDeliverySelectionChoiceResource } from '../declarations/makeDeliverySelectionChoiceResource.js';
export { makeDeliveryPlan } from '../declarations/makeDeliveryPlan.js';
export { makeDeliverySelectionInstructionsRequest } from '../declarations/makeDeliverySelectionInstructionsRequest.js';
export { makeDeliveryShipmentDetails } from '../declarations/makeDeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../declarations/makeDeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../declarations/makeDeliveryLocationSummaryResource.js';
export { makeDeliveryInputRequirement } from '../declarations/makeDeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../declarations/makeDeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../declarations/makeDeliveryWindowResource.js';
export { makeDeliverySelectionLifecycleEventResource } from '../declarations/makeDeliverySelectionLifecycleEventResource.js';
export { makePaymentAttemptGiftCardRedemption } from '../declarations/makePaymentAttemptGiftCardRedemption.js';
export { makePaymentAttemptPaymentIntent } from '../declarations/makePaymentAttemptPaymentIntent.js';
export { makePendingPaymentAction } from '../declarations/makePendingPaymentAction.js';
export { makeAppliedDiscount } from '../declarations/makeAppliedDiscount.js';
export { makeBuyerAction } from '../declarations/makeBuyerAction.js';
export { makeOrderCharge } from '../declarations/makeOrderCharge.js';
export { makeOrderCalculatedChargeTax } from '../declarations/makeOrderCalculatedChargeTax.js';
export { makeTaxCalculationRequest } from '../declarations/makeTaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../declarations/makeTaxComponentRequest.js';
export { makeTaxJurisdiction } from '../declarations/makeTaxJurisdiction.js';
export { makeOrderDeliveryDestinationAddress } from '../declarations/makeOrderDeliveryDestinationAddress.js';
export { makeOrderDeliveryDestinationRecipient } from '../declarations/makeOrderDeliveryDestinationRecipient.js';
export { makeOrderGiftCardAllocation } from '../declarations/makeOrderGiftCardAllocation.js';
export { makeOrderGiftCardSettlement } from '../declarations/makeOrderGiftCardSettlement.js';
export { makeOrderGiftCardSelection } from '../declarations/makeOrderGiftCardSelection.js';
export { makeOrderLineItem } from '../declarations/makeOrderLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeGiftCardProductConfiguration } from '../declarations/makeGiftCardProductConfiguration.js';
export { makeGiftCardCustomAmountBounds } from '../declarations/makeGiftCardCustomAmountBounds.js';
export { makeGiftCardPurchaseRecipient } from '../declarations/makeGiftCardPurchaseRecipient.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeLineItemInventoryDemand } from '../declarations/makeLineItemInventoryDemand.js';
export { makePurchasedGiftCard } from '../declarations/makePurchasedGiftCard.js';
export { makeOrderCalculatedLineItemTax } from '../declarations/makeOrderCalculatedLineItemTax.js';
export { makeExpandedPaymentIntentSummary } from '../declarations/makeExpandedPaymentIntentSummary.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makeRequestedTip } from '../declarations/makeRequestedTip.js';
export { makeOrderReturnCreditSettlement } from '../declarations/makeOrderReturnCreditSettlement.js';
export { makeSubscriptionPlanLineItem } from '../declarations/makeSubscriptionPlanLineItem.js';
export { makeOrderLineItemTax } from '../declarations/makeOrderLineItemTax.js';
export { makeOrderTaxExemption } from '../declarations/makeOrderTaxExemption.js';
export { makeOrderTaxLocation } from '../declarations/makeOrderTaxLocation.js';
export { makeTaxBreakdown } from '../declarations/makeTaxBreakdown.js';
export { makeTip } from '../declarations/makeTip.js';
export { makeTipPaymentIntentAllocation } from '../declarations/makeTipPaymentIntentAllocation.js';
export { makeTipValueSettlementAllocation } from '../declarations/makeTipValueSettlementAllocation.js';
export { makeActionResult } from '../declarations/makeActionResult.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { isOrdersUpdateLineItemResponseKnown } from '../declarations/isOrdersUpdateLineItemResponseKnown.js';
