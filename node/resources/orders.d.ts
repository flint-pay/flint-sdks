import type { InputValue } from '../runtime.js';
import type {
    AccessLink,
    AccessLinkResponse,
    AddLineItemsRequestInput,
    AddOrderChargeRequestInput,
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput
} from '../declarations/types-0.js';
import type { CancelOrderPaymentAttemptRequestInput } from '../declarations/types-3.js';
import type { ClientOptions, CloseOrderRequestInput } from '../declarations/types-4.js';
import type { CreateFulfillmentRequestInput } from '../declarations/types-6.js';
import type { CreateOrderPaymentIntentRequestInput, CreateOrderRequestInput } from '../declarations/types-7.js';
import type { DeliverySelection, DeliverySelectionResponse } from '../declarations/types-15.js';
import type { Fulfillment, FulfillmentResponse } from '../declarations/types-17.js';
import type {
    Order,
    OrderActivity,
    OrderActivityListResponse,
    OrderListResponse,
    OrderPaymentAttempt,
    OrderPaymentAttemptListResponse,
    OrderPaymentAttemptResponse
} from '../declarations/types-32.js';
import type {
    OrderResponse,
    OrdersAddChargeInput,
    OrdersAddLineItemsInput,
    OrdersApplyDiscountInput,
    OrdersApplyGiftCardInput,
    OrdersCancelPaymentAttemptInput,
    OrdersCloseSessionInput,
    OrdersCreateAccessLinkInput,
    OrdersCreateFulfillmentInput,
    OrdersCreateInput,
    OrdersCreatePaymentIntentInput,
    OrdersCreatePaymentIntentResponse,
    OrdersDeleteChargeInput,
    OrdersDeleteLineItemInput,
    OrdersGetCurrentDeliverySelectionInput,
    OrdersGetInput,
    OrdersGetPaymentAttemptInput,
    OrdersListActivitiesInput,
    OrdersListInput,
    OrdersListPaymentAttemptsInput,
    OrdersPayInput,
    OrdersRemoveDiscountsInput,
    OrdersRemoveGiftCardInput,
    OrdersRepriceDiscountsInput,
    OrdersResolveInventoryExceptionInput,
    OrdersSendReceiptInput
} from '../declarations/types-33.js';
import type { OrdersUpdateChargeInput, OrdersUpdateInput, OrdersUpdateLineItemInput } from '../declarations/types-34.js';
import type { PayOrderResponse, PayOrderResult, PaymentIntentWithCollection } from '../declarations/types-35.js';
import type { RemoveDiscountsRequestInput } from '../declarations/types-39.js';
import type { RepriceDiscountsRequestInput, RequestOptions, ResolveOrderInventoryExceptionRequestInput } from '../declarations/types-40.js';
import type { SdkResponse, SendOrderReceiptRequestInput } from '../declarations/types-44.js';
import type { UpdateLineItemRequestInput, UpdateOrderChargeRequestInput, UpdateOrderRequestInput } from '../declarations/types-48.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type {
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput,
    AccessLink,
    AccessLinkResponse,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput,
    AuthMode,
    BundleComponent,
    BundleComponentVariantSummary,
    Address,
    AddressRequestInput,
    AddressRequest
} from '../declarations/types-0.js';
export type {
    RequestOptions,
    RepriceDiscountsRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-40.js';
export type {
    Order,
    OrderPaymentAttempt,
    OrderPaymentAttemptResponse,
    OrderActivityListResponse,
    OrderActivity,
    OrderPaymentAttemptListResponse,
    OrderListResponse,
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestination,
    OrderDeliveryDestinationAddress,
    OrderDeliveryDestinationRecipient,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardAllocation,
    OrderGiftCardSettlement,
    OrderGiftCardSelection,
    OrderLineItem,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemFulfillmentComponent,
    OrderLineItemFulfillmentProfile,
    OrderLineItemModifier,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderCalculatedLineItemTax,
    OrderLineItemTax,
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryDestinationAddressRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderLineItemModifierRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderChargeRequestInput,
    OrderCalculatedChargeTaxInput,
    OrderPaymentAttemptPaymentMethodSave,
    OrderGiftCardAllocationAcceptanceInput,
    OrderChargeTaxAssignmentInput,
    OrderLineItemTaxAssignmentInput,
    OrderCalculatedLineItemTaxInput,
    OrderDeliveryDestinationAddressRequest,
    OrderDeliveryDestinationRecipientRequest
} from '../declarations/types-32.js';
export type {
    SdkResponse,
    SendOrderReceiptRequestInput,
    SelectedProductOption,
    SubscribedLine,
    SelectableOrderPaymentIntent,
    SettlementAmounts,
    SinglePackageCreateRequestInput,
    SinglePackageCreateInputCreatedInput,
    SinglePackageCreateInputShippedInput,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SubscribedLineRequestInput,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SendOrderReceiptRequest
} from '../declarations/types-44.js';
export type {
    OrderResponse,
    OrdersCreatePaymentIntentResponse,
    OrdersPayInput,
    OrdersApplyDiscountInput,
    OrdersApplyGiftCardInput,
    OrdersCancelPaymentAttemptInput,
    OrdersCloseSessionInput,
    OrdersCreateFulfillmentInput,
    OrdersCreateInput,
    OrdersCreateAccessLinkInput,
    OrdersAddChargeInput,
    OrdersAddLineItemsInput,
    OrdersCreatePaymentIntentInput,
    OrdersDeleteChargeInput,
    OrdersDeleteLineItemInput,
    OrdersGetInput,
    OrdersGetCurrentDeliverySelectionInput,
    OrdersGetPaymentAttemptInput,
    OrdersListActivitiesInput,
    OrdersListPaymentAttemptsInput,
    OrdersListInput,
    OrdersRemoveDiscountsInput,
    OrdersRemoveGiftCardInput,
    OrdersRepriceDiscountsInput,
    OrdersResolveInventoryExceptionInput,
    OrdersSendReceiptInput,
    OrderReturnCreditSettlement,
    OrderTax,
    OrderTaxExemption,
    OrderTaxLocation,
    OrderTaxRequestInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxLocationRequestInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderTaxLocationInputInferredPostalCodeInput,
    OrderTaxLocationInputInferredFullAddressInput,
    OrderPaymentSourceSelectionInput,
    OrderPaymentSourceCardSelectionInput,
    OrderPaymentIntentSelectionInput,
    OrderTaxUpdateRequestInput,
    OrderPaymentSourceCardSelection
} from '../declarations/types-33.js';
export type {
    CancelOrderPaymentAttemptRequestInput,
    CheckoutBuyerContact,
    CategoryReference,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerContactRequest
} from '../declarations/types-3.js';
export type {
    PayOrderResult,
    PayOrderResponse,
    PaymentIntentWithCollection,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements,
    PaymentErrorSummary,
    PaymentIntent,
    PaymentAddOnFee,
    PaymentFulfillmentHold,
    PaymentIntentWithCollectionResponse,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PayOrderRequestInput,
    PayOrderRequestPayInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestSetupInput,
    PayOrderRequestResumeInput
} from '../declarations/types-35.js';
export type { CloseOrderRequestInput, ClientOptions } from '../declarations/types-4.js';
export type {
    CreateFulfillmentRequestInput,
    CreateDigitalFulfillmentDetailsInput,
    CreateFulfillmentRequestShipmentInput,
    CreateFulfillmentRequestPickupInput,
    CreateFulfillmentRequestLocalDeliveryInput,
    CreateFulfillmentRequestDigitalInput,
    CreateFulfillmentRequestServiceInput,
    CreateDigitalFulfillmentDetails
} from '../declarations/types-6.js';
export type {
    Fulfillment,
    FulfillmentResponse,
    ExpandedSubscriptionSummary,
    ExpandedSubscriptionPlanSummary,
    FulfillmentLineItemRequestInput,
    FulfillmentRecipientRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient,
    ExpandedShipmentSummary
} from '../declarations/types-17.js';
export type {
    CreateOrderRequestInput,
    CreateOrderPaymentIntentRequestInput,
    CreateOrderDiscountInput,
    CreateOrderLineItemRequestInput,
    CreateOrderTipInput
} from '../declarations/types-7.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type {
    DeliverySelection,
    DeliverySelectionResponse,
    DeliverySelectionChoiceResource,
    DeliverySelectionInstructionsRequest,
    DeliveryShipmentDetails,
    DeliveryWindowRequest,
    DeliverySelectionLifecycleEventResource
} from '../declarations/types-15.js';
export type { RemoveDiscountsRequestInput, PurchasedGiftCard } from '../declarations/types-39.js';
export type { UpdateOrderRequestInput, UpdateOrderChargeRequestInput, UpdateLineItemRequestInput } from '../declarations/types-48.js';
export type { OrdersUpdateInput, OrdersUpdateChargeInput, OrdersUpdateLineItemInput } from '../declarations/types-34.js';
export type { ManualDiscountRequestInput, LocationCoordinate, MeGetOrderInput } from '../declarations/types-29.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { PromotionRefRequestInput } from '../declarations/types-38.js';
export type { Credentials, CreateServiceFulfillmentDetailsInput } from '../declarations/types-9.js';
export type {
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions
} from '../declarations/types-1.js';
export type {
    ExpandedCustomerSummary,
    Dimensions,
    ErrorRemediation,
    ExpandedPaymentIntentSummary,
    DimensionsInput,
    DigitalFulfillmentDetails,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedInvoiceSummary
} from '../declarations/types-16.js';
export type { InventoryRoutingSource } from '../declarations/types-25.js';
export type {
    GiftCardPurchaseSnapshot,
    GiftCardProductConfiguration,
    GiftCardPurchaseRecipient,
    Image,
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardPurchaseRecipientPatchRequestInput
} from '../declarations/types-19.js';
export type { GiftCardCustomAmountBounds } from '../declarations/types-18.js';
export type {
    LineItemInventorySnapshot,
    LineItemInventoryDemand,
    LineItemFulfillmentRequestInput,
    LineItemFulfillmentOriginRequestInput
} from '../declarations/types-28.js';
export type {
    TextModifierRequest,
    TaxCalculationRequest,
    TaxComponentRequest,
    TaxJurisdiction,
    TaxBreakdown,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TicketedEvent,
    Tip,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation,
    TextModifierRequestInput,
    TaxCalculationRequestInput,
    TaxComponentRequestInput,
    TaxJurisdictionInput
} from '../declarations/types-47.js';
export type { SubscriptionIntervalOption } from '../declarations/types-45.js';
export type { Weight, WeightInput } from '../declarations/types-61.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentRisk,
    PaymentSourceCredentialInput
} from '../declarations/types-36.js';
export type {
    PricingAmounts,
    PickupFulfillmentDetails,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject
} from '../declarations/types-37.js';
export type { SubscriptionPlanLineItem, SubscriptionPlanSwapVariant } from '../declarations/types-46.js';
export type { CreateDeliveryFulfillmentDetailsInput } from '../declarations/types-5.js';
export type { CreatePickupFulfillmentDetailsInput } from '../declarations/types-8.js';
export type {
    DeliveryFulfillmentDetails,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryLocationSummaryResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint
} from '../declarations/types-12.js';
export type { ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-20.js';
export type {
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequest,
    DeliveryBuyerLocationInputAddress,
    DeliveryBuyerLocationInputCoordinate
} from '../declarations/types-11.js';
export type { DeliveryRecipientResource } from '../declarations/types-14.js';
export type { MeListOrderActivitiesInput } from '../declarations/types-30.js';
export type { DeliveryPreviewRoutingSourceInput } from '../declarations/types-13.js';
export {
    makeAddLineItemsRequest,
    makeAddOrderChargeRequest,
    makeAddressRequest,
    makeApplyDiscountRequest,
    makeApplyOrderGiftCardRequest,
    makeCancelOrderPaymentAttemptRequest,
    makeCheckoutBuyerContactRequest
} from '../declarations/types-62.js';
export {
    makeCloseOrderRequest,
    makeCreateDeliveryFulfillmentDetails,
    makeCreateDigitalFulfillmentDetails,
    makeCreateFulfillmentRequest,
    makeCreateFulfillmentRequestDigital,
    makeCreateFulfillmentRequestLocalDelivery,
    makeCreateFulfillmentRequestPickup,
    makeCreateFulfillmentRequestService,
    makeCreateFulfillmentRequestShipment
} from '../declarations/types-63.js';
export {
    makeCreateOrderDiscount,
    makeCreateOrderLineItemRequest,
    makeCreateOrderPaymentIntentRequest,
    makeCreateOrderRequest,
    makeCreateOrderTip,
    makeCreatePickupFulfillmentDetails
} from '../declarations/types-64.js';
export {
    makeCreateServiceFulfillmentDetails,
    makeDeliveryAddressRequest,
    makeDeliveryBuyerLocationInputAddress,
    makeDeliveryBuyerLocationInputCoordinate,
    makeDeliveryBuyerLocationRequest
} from '../declarations/types-65.js';
export {
    makeDeliveryPreviewRoutingSource,
    makeDeliverySelectionInstructionsRequest,
    makeDeliveryWindowRequest,
    makeDimensions,
    makeFulfillmentLineItemRequest,
    makeFulfillmentPackagingRequest,
    makeFulfillmentRecipientRequest
} from '../declarations/types-66.js';
export {
    makeGiftCardCustomAmountBounds,
    makeGiftCardProductConfiguration,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientPatchRequest,
    makeGiftCardPurchaseRecipientRequest,
    makeImageReferenceRequest
} from '../declarations/types-67.js';
export {
    makeLineItemFulfillmentOriginRequest,
    makeLineItemFulfillmentRequest,
    makeLocationCoordinate,
    makeManualDiscountRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTax
} from '../declarations/types-68.js';
export {
    makeOrderCalculatedLineItemTax,
    makeOrderChargeRequest,
    makeOrderChargeTaxAssignment,
    makeOrderDeliveryDestinationAddressRequest,
    makeOrderDeliveryDestinationRecipientRequest,
    makeOrderDeliveryDestinationRequest,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequest,
    makeOrderDraftLineItemTaxRequest,
    makeOrderDraftTaxComponentRequest,
    makeOrderDraftTaxJurisdictionRequest,
    makeOrderGiftCardAllocationAcceptance,
    makeOrderInventoryRoutingSourceRequest,
    makeOrderLineItemModifierRequest,
    makeOrderLineItemTax,
    makeOrderLineItemTaxAssignment,
    makeOrderPaymentIntentSelection,
    makeOrderPaymentSourceCardSelection,
    makeOrderPaymentSourceSelection,
    makeOrderTaxCalculationInputAutomatic,
    makeOrderTaxCalculationInputExternal,
    makeOrderTaxCalculationRequest,
    makeOrderTaxComponentRequest,
    makeOrderTaxJurisdictionRequest,
    makeOrderTaxLocationFullAddressRequest,
    makeOrderTaxLocationInputFullAddress,
    makeOrderTaxLocationInputInferredFullAddress,
    makeOrderTaxLocationInputInferredPostalCode,
    makeOrderTaxLocationInputPostalCode,
    makeOrderTaxLocationPostalAddressRequest,
    makeOrderTaxLocationRequest,
    makeOrderTaxRequest,
    makeOrderTaxUpdateRequest,
    makePayOrderRequest,
    makePayOrderRequestConfirmPaymentIntents,
    makePayOrderRequestPay,
    makePayOrderRequestResume,
    makePayOrderRequestSetup
} from '../declarations/types-69.js';
export {
    makePaymentSourceCredential,
    makePromotionRefRequest,
    makeRemoveDiscountsRequest,
    makeRepriceDiscountsRequest,
    makeResolveOrderInventoryExceptionRequest
} from '../declarations/types-70.js';
export {
    makeSendOrderReceiptRequest,
    makeSinglePackageCreateInputCreated,
    makeSinglePackageCreateInputShipped,
    makeSinglePackageCreateRequest,
    makeSubscribedLineRequest
} from '../declarations/types-71.js';
export {
    makeSubscriptionIntervalOption,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction,
    makeTextModifierRequest,
    makeUpdateLineItemRequest
} from '../declarations/types-72.js';
export { makeUpdateOrderChargeRequest, makeUpdateOrderRequest, makeWeight } from '../declarations/types-73.js';
export interface OrdersResource {
    /**
 * Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must
 * provide a promotion code; resource IDs and manual discounts require merchant authentication.
 * @see reference/orders.md#ordersapplydiscount
 * POST /v1/orders/{order_id}/discounts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyDiscount("example", {promotion: {promotion_id: "example"}}, { idempotencyKey:
 * idempotencyKey })
 */
    applyDiscount(order_id: InputValue<string>, params: (InputValue<ApplyDiscountRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersapplydiscount
     */
    applyDiscountWithResponse(order_id: InputValue<string>, params: (InputValue<ApplyDiscountRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Selects a gift card by its current code and returns masked selections and an unreserved
 * estimate. No value is held or debited. Optional expected_version must match the order version
 * returned by the last read. An order may select at most 20 gift cards. Gift card value cannot pay
 * for subscription orders. Retry a lost response with the same Idempotency-Key to recover the
 * original selection result.
 * @see reference/orders.md#ordersapplygiftcard
 * POST /v1/orders/{order_id}/gift-cards
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyGiftCard("example", {code: "example"}, { idempotencyKey: idempotencyKey })
 */
    applyGiftCard(order_id: InputValue<string>, params: (InputValue<ApplyOrderGiftCardRequestInput>)
        & {
        "Flint-Gift-Card-Challenge"?: InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersapplygiftcard
     */
    applyGiftCardWithResponse(order_id: InputValue<string>, params: (InputValue<ApplyOrderGiftCardRequestInput>)
        & {
        "Flint-Gift-Card-Challenge"?: InputValue<string>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.
 * @see reference/orders.md#orderscancelpaymentattempt
 * POST /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.cancelPaymentAttempt("example", "example", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancelPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: (InputValue<CancelOrderPaymentAttemptRequestInput> | {
        "cancellation_reason"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<PayOrderResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderscancelpaymentattempt
     */
    cancelPaymentAttemptWithResponse(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: (InputValue<CancelOrderPaymentAttemptRequestInput> | {
        "cancellation_reason"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<PayOrderResponse>>;
    /**
 * Closes an open order and stops further payment. Cancels pending discounts, releases their
 * reservations, and recalculates totals; canceled discounts remain visible with status: "canceled"
 * but no longer reduce the total. Unused order-owned payment intents are canceled. When collected
 * money remains refundable, send collected_money_behavior: keep to close and keep it, or refund it
 * first with POST /v1/refunds and order_id. Closing does not refund money; refunds remain
 * available afterwards. Closing is blocked while payment collection is in progress. To complete a
 * zero-balance order as paid, use POST /v1/orders/{order_id}/pay. closed_reason and closed_at
 * record why and when the order closed. The request body is optional. Send expected_version to
 * reject a mutation based on an outdated order read.
 * @see reference/orders.md#ordersclosesession
 * POST /v1/orders/{order_id}/close
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.closeSession("example", undefined, { idempotencyKey: idempotencyKey })
 */
    closeSession(order_id: InputValue<string>, params?: (InputValue<CloseOrderRequestInput>
        | {
        "collected_money_behavior"?: never;
        "expected_version"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersclosesession
     */
    closeSessionWithResponse(order_id: InputValue<string>, params?: (InputValue<CloseOrderRequestInput>
        | {
        "collected_money_behavior"?: never;
        "expected_version"?: never;
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Creates a fulfillment for the specified quantities on a paid order. Use this when you manage
 * fulfillment outside checkout; checkout creates fulfillments for the buyer's delivery selections.
 * Returns ORDER_NOT_FULFILLABLE when the order is not paid. See the [fulfillment
 * guide](/guides/fulfillment).
 * @see reference/orders.md#orderscreatefulfillment
 * POST /v1/orders/{order_id}/fulfillments
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createFulfillment("example", {line_items: [{order_line_item_id: "example",
 * quantity: "100"}], type: "shipment"}, { idempotencyKey: idempotencyKey })
 */
    createFulfillment(order_id: InputValue<string>, params: (InputValue<CreateFulfillmentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Fulfillment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderscreatefulfillment
     */
    createFulfillmentWithResponse(order_id: InputValue<string>, params: (InputValue<CreateFulfillmentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<FulfillmentResponse>>;
    /**
 * Creates an order for the authenticated merchant. For USD orders, an effective requested tip may
 * be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.
 * @see reference/orders.md#orderscreate
 * POST /v1/orders
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.create({line_items: [{variant_id: "example"}]}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateOrderRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderscreate
     */
    createWithResponse(params: (InputValue<CreateOrderRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Creates the link Flint's receipt email carries, to put in buyer email or messages you send
 * yourself. It opens the order in your Flint-hosted customer account without a sign-in, and lets
 * the buyer have the receipt sent again to the order's email. It works for 30 days or 10 opens,
 * whichever comes first; after that the buyer signs in to see the order. The url is a bearer
 * credential. Flint returns it only in this response and in a retry with the same Idempotency-Key,
 * so send it only to the buyer and keep it out of logs. A call with a new key creates another
 * link; earlier links keep working until they expire. When customer_account.mode is
 * merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED, and for an order without a customer,
 * ACCESS_LINK_CUSTOMER_REQUIRED. Send no request body or an empty object ({}). Idempotency is
 * scoped to the merchant, credential, environment, and this resource's route. A replay returns the
 * original link without extending its lifetime or replenishing its opens. Without an
 * Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a
 * result after minting, contact support with X-Request-Id before sending a new request.
 * @see reference/orders.md#orderscreateaccesslink
 * POST /v1/orders/{order_id}/access-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createAccessLink(order_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<AccessLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderscreateaccesslink
     */
    createAccessLinkWithResponse(order_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<AccessLinkResponse>>;
    /**
 * Adds a service charge, fee, or surcharge to an order.
 * @see reference/orders.md#ordersaddcharge
 * POST /v1/orders/{order_id}/charges
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.addCharge("example", {charge: {amount_money: {amount: "100", currency: "USD"},
 * name: "example", type: "service_fee"}}, { idempotencyKey: idempotencyKey })
 */
    addCharge(order_id: InputValue<string>, params: (InputValue<AddOrderChargeRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersaddcharge
     */
    addChargeWithResponse(order_id: InputValue<string>, params: (InputValue<AddOrderChargeRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Adds one or more line items to an order.
 * @see reference/orders.md#ordersaddlineitems
 * POST /v1/orders/{order_id}/line-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.addLineItems("example", {line_items: [{variant_id: "example"}]}, { idempotencyKey:
 * idempotencyKey })
 */
    addLineItems(order_id: InputValue<string>, params: (InputValue<AddLineItemsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersaddlineitems
     */
    addLineItemsWithResponse(order_id: InputValue<string>, params: (InputValue<AddLineItemsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Creates a payment intent owned by the order. Collect a payment source using payment_collection,
 * then submit that source through payOrder. This route requires commerce.orders.write; standalone
 * payment-intent routes require payments.payment_intents.write.
 * @see reference/orders.md#orderscreatepaymentintent
 * POST /v1/orders/{order_id}/payment-intents
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createPaymentIntent("example", {}, { idempotencyKey: idempotencyKey })
 */
    createPaymentIntent(order_id: InputValue<string>, params: (InputValue<CreateOrderPaymentIntentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<({
        "payment_collection": unknown;
    })
        & (Exclude<PaymentIntentWithCollection & object, readonly unknown[]>)>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderscreatepaymentintent
     */
    createPaymentIntentWithResponse(order_id: InputValue<string>, params: (InputValue<CreateOrderPaymentIntentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<OrdersCreatePaymentIntentResponse>>;
    /**
 * Removes a single service charge, fee, or surcharge from an order.
 * @see reference/orders.md#ordersdeletecharge
 * DELETE /v1/orders/{order_id}/charges/{order_charge_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteCharge("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersdeletecharge
     */
    deleteChargeWithResponse(order_id: InputValue<string>, order_charge_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Removes a single line item from an order.
 * @see reference/orders.md#ordersdeletelineitem
 * DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersdeletelineitem
     */
    deleteLineItemWithResponse(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Returns a single order by ID.
 * @see reference/orders.md#ordersget
 * GET /v1/orders/{order_id}
 * @example
 * client.orders.get("example")
 */
    get(order_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer"
            | "fulfillments.packages"
            | "fulfillments.shipments"
            | "payment_intents"
            | "subscription"
            | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersget
     */
    getWithResponse(order_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer"
            | "fulfillments.packages"
            | "fulfillments.shipments"
            | "payment_intents"
            | "subscription"
            | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<OrderResponse>>;
    /**
 * Returns the delivery selection committed to an order.
 * @see reference/orders.md#ordersgetcurrentdeliveryselection
 * GET /v1/orders/{order_id}/delivery-selections/current
 * @example
 * client.orders.getCurrentDeliverySelection("example")
 */
    getCurrentDeliverySelection(order_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliverySelection>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersgetcurrentdeliveryselection
     */
    getCurrentDeliverySelectionWithResponse(order_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliverySelectionResponse>>;
    /**
 * Returns one durable payment attempt for the order. Checkout-session callers can read only
 * attempts created by their own session.
 * @see reference/orders.md#ordersgetpaymentattempt
 * GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}
 * @example
 * client.orders.getPaymentAttempt("example", "example")
 */
    getPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<OrderPaymentAttempt>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersgetpaymentattempt
     */
    getPaymentAttemptWithResponse(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<OrderPaymentAttemptResponse>>;
    /**
 * Returns a read-only, human-readable history log for an order. Use it to render timelines and
 * debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning
 * resource for authoritative state: the order for balances and status, the payment for payment
 * state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum
 * balance_delta_money to compute an order balance. Informational rows such as payment_failed,
 * refund_failed, and checkout_session_expired have a zero balance delta. The default order is
 * newest first. Use sort_direction=asc for chronological timeline rendering. A typical
 * chronological log might show created, payment_failed, payment, refund, then refund_failed; each
 * row gives one reference to click through for the authoritative resource.
 * @see reference/orders.md#orderslistactivities
 * GET /v1/orders/{order_id}/activities
 * @example
 * client.orders.listActivities("example")
 */
    listActivities(order_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "line_item_added"
            | "line_item_updated"
            | "line_item_removed"
            | "discount_applied"
            | "discount_removed"
            | "tax_updated"
            | "requested_tip_added"
            | "requested_tip_updated"
            | "requested_tip_removed"
            | "charge_added"
            | "charge_updated"
            | "charge_removed"
            | "charge_fulfillment_updated"
            | "order_updated"
            | "adjustment"
            | "closed"
            | "payment"
            | "payment_failed"
            | "refund"
            | "refund_failed"
            | "checkout_session_created"
            | "checkout_session_expired"
            | "checkout_session_invalidated"
            | "fulfillment_created"
            | "fulfillment_updated"
            | "fulfillment_state_changed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<OrderActivityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderslistactivities
     */
    listActivitiesWithResponse(order_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "line_item_added"
            | "line_item_updated"
            | "line_item_removed"
            | "discount_applied"
            | "discount_removed"
            | "tax_updated"
            | "requested_tip_added"
            | "requested_tip_updated"
            | "requested_tip_removed"
            | "charge_added"
            | "charge_updated"
            | "charge_removed"
            | "charge_fulfillment_updated"
            | "order_updated"
            | "adjustment"
            | "closed"
            | "payment"
            | "payment_failed"
            | "refund"
            | "refund_failed"
            | "checkout_session_created"
            | "checkout_session_expired"
            | "checkout_session_invalidated"
            | "fulfillment_created"
            | "fulfillment_updated"
            | "fulfillment_state_changed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<OrderActivityListResponse>>;
    /** Iterate pages lazily.
     * @see reference/orders.md#orderslistactivities
     */
    listActivitiesPages(order_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "line_item_added"
            | "line_item_updated"
            | "line_item_removed"
            | "discount_applied"
            | "discount_removed"
            | "tax_updated"
            | "requested_tip_added"
            | "requested_tip_updated"
            | "requested_tip_removed"
            | "charge_added"
            | "charge_updated"
            | "charge_removed"
            | "charge_fulfillment_updated"
            | "order_updated"
            | "adjustment"
            | "closed"
            | "payment"
            | "payment_failed"
            | "refund"
            | "refund_failed"
            | "checkout_session_created"
            | "checkout_session_expired"
            | "checkout_session_invalidated"
            | "fulfillment_created"
            | "fulfillment_updated"
            | "fulfillment_state_changed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderActivityListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/orders.md#orderslistactivities
     */
    listActivitiesPagesWithResponse(order_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "line_item_added"
            | "line_item_updated"
            | "line_item_removed"
            | "discount_applied"
            | "discount_removed"
            | "tax_updated"
            | "requested_tip_added"
            | "requested_tip_updated"
            | "requested_tip_removed"
            | "charge_added"
            | "charge_updated"
            | "charge_removed"
            | "charge_fulfillment_updated"
            | "order_updated"
            | "adjustment"
            | "closed"
            | "payment"
            | "payment_failed"
            | "refund"
            | "refund_failed"
            | "checkout_session_created"
            | "checkout_session_expired"
            | "checkout_session_invalidated"
            | "fulfillment_created"
            | "fulfillment_updated"
            | "fulfillment_state_changed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<OrderActivityListResponse>>;
    /** Iterate items lazily.
     * @see reference/orders.md#orderslistactivities
     */
    listActivitiesItems(order_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "line_item_added"
            | "line_item_updated"
            | "line_item_removed"
            | "discount_applied"
            | "discount_removed"
            | "tax_updated"
            | "requested_tip_added"
            | "requested_tip_updated"
            | "requested_tip_removed"
            | "charge_added"
            | "charge_updated"
            | "charge_removed"
            | "charge_fulfillment_updated"
            | "order_updated"
            | "adjustment"
            | "closed"
            | "payment"
            | "payment_failed"
            | "refund"
            | "refund_failed"
            | "checkout_session_created"
            | "checkout_session_expired"
            | "checkout_session_invalidated"
            | "fulfillment_created"
            | "fulfillment_updated"
            | "fulfillment_state_changed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderActivity>;
    /**
 * Returns payment attempts for the order, newest first. Checkout-session callers see only attempts
 * created by their own session. A list filtered by idempotency_key omits pending_actions; read the
 * attempt by ID to get them.
 * @see reference/orders.md#orderslistpaymentattempts
 * GET /v1/orders/{order_id}/payment-attempts
 * @example
 * client.orders.listPaymentAttempts("example")
 */
    listPaymentAttempts(order_id: InputValue<string>, params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<OrderPaymentAttemptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderslistpaymentattempts
     */
    listPaymentAttemptsWithResponse(order_id: InputValue<string>, params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<OrderPaymentAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see reference/orders.md#orderslistpaymentattempts
     */
    listPaymentAttemptsPages(order_id: InputValue<string>, params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<OrderPaymentAttemptListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/orders.md#orderslistpaymentattempts
     */
    listPaymentAttemptsPagesWithResponse(order_id: InputValue<string>, params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<SdkResponse<OrderPaymentAttemptListResponse>>;
    /** Iterate items lazily.
     * @see reference/orders.md#orderslistpaymentattempts
     */
    listPaymentAttemptsItems(order_id: InputValue<string>, params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<OrderPaymentAttempt>;
    /**
 * Returns a paginated list of orders for the authenticated merchant.
 * @see reference/orders.md#orderslist
 * GET /v1/orders
 * @example
 * client.orders.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<Array<string>>;
        "closed_reason"?: InputValue<Array<"paid"
            | "closed_by_merchant"
            | "checkout_expired"
            | "written_off"
            | "superseded"
            | "return_resolution_canceled"
            | "other">>;
        "status"?: InputValue<Array<"open" | "closed">>;
        "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
        "order_number"?: InputValue<string>;
        "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
        "has_open_fulfillment"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "subscription" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<OrderListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<Array<string>>;
        "closed_reason"?: InputValue<Array<"paid"
            | "closed_by_merchant"
            | "checkout_expired"
            | "written_off"
            | "superseded"
            | "return_resolution_canceled"
            | "other">>;
        "status"?: InputValue<Array<"open" | "closed">>;
        "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
        "order_number"?: InputValue<string>;
        "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
        "has_open_fulfillment"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "subscription" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<OrderListResponse>>;
    /** Iterate pages lazily.
     * @see reference/orders.md#orderslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<Array<string>>;
        "closed_reason"?: InputValue<Array<"paid"
            | "closed_by_merchant"
            | "checkout_expired"
            | "written_off"
            | "superseded"
            | "return_resolution_canceled"
            | "other">>;
        "status"?: InputValue<Array<"open" | "closed">>;
        "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
        "order_number"?: InputValue<string>;
        "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
        "has_open_fulfillment"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "subscription" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/orders.md#orderslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<Array<string>>;
        "closed_reason"?: InputValue<Array<"paid"
            | "closed_by_merchant"
            | "checkout_expired"
            | "written_off"
            | "superseded"
            | "return_resolution_canceled"
            | "other">>;
        "status"?: InputValue<Array<"open" | "closed">>;
        "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
        "order_number"?: InputValue<string>;
        "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
        "has_open_fulfillment"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "subscription" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<OrderListResponse>>;
    /** Iterate items lazily.
     * @see reference/orders.md#orderslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "order_id"?: InputValue<Array<string>>;
        "closed_reason"?: InputValue<Array<"paid"
            | "closed_by_merchant"
            | "checkout_expired"
            | "written_off"
            | "superseded"
            | "return_resolution_canceled"
            | "other">>;
        "status"?: InputValue<Array<"open" | "closed">>;
        "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
        "order_number"?: InputValue<string>;
        "has_unassigned_fulfillment_quantity"?: InputValue<boolean>;
        "has_open_fulfillment"?: InputValue<boolean>;
        "external_reference_id"?: InputValue<string>;
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "payment_link_id"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "subscription" | "subscription_plan">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Order>;
    /**
 * Starts or resumes a payment attempt on the order. Set action to pay to charge the full
 * outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to
 * save a newly collected token on a zero-balance order, or resume to continue an attempt after a
 * pending client action. Each action accepts only its own fields. Only confirm_payment_intents
 * accepts completion_behavior. A pay action without payment_source is valid only when the
 * outstanding balance is zero. To continue a resumable attempt, send action: resume with
 * order_payment_attempt_id and a new Idempotency-Key. An exact retry of the original request with
 * its Idempotency-Key returns the stored response if the request completed, or recovers the same
 * attempt if it was interrupted. Payment intents with manual capture return an active
 * authorization instead of settling immediately. A replay preserves the original HTTP status and
 * domain result. Client authority in order_payment_attempt.pending_actions is available only
 * within 24 hours of the original request and while the matching current payment attempt has
 * status requires_action. Otherwise pending_actions is empty. Read GET
 * /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id} for the attempt's current
 * state.
 * @see reference/orders.md#orderspay
 * POST /v1/orders/{order_id}/pay
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.pay({order_id: "example", body: {action: "pay"}}, { idempotencyKey: idempotencyKey
 * })
 */
    pay(input: OrdersPayInput, options: _SdkRequiredIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<PayOrderResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderspay
     */
    payWithResponse(input: OrdersPayInput, options: _SdkRequiredIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<PayOrderResponse>>;
    /**
 * Removes one or more pending applied discounts from an order. Redeemed or canceled discounts are
 * settlement history and cannot be removed.
 * @see reference/orders.md#ordersremovediscounts
 * POST /v1/orders/{order_id}/discounts/remove
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeDiscounts("example", {order_discount_ids: []}, { idempotencyKey:
 * idempotencyKey })
 */
    removeDiscounts(order_id: InputValue<string>, params: (InputValue<RemoveDiscountsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersremovediscounts
     */
    removeDiscountsWithResponse(order_id: InputValue<string>, params: (InputValue<RemoveDiscountsRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Removes a selected gift card without moving value. The expected_version must still match the
 * order version. Selections cannot change during an active payment attempt. Retry a lost response
 * with the same Idempotency-Key to recover the original selection result.
 * @see reference/orders.md#ordersremovegiftcard
 * DELETE /v1/orders/{order_id}/gift-cards/{gift_card_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeGiftCard("example", "example", {expected_version: "1"}, { idempotencyKey:
 * idempotencyKey })
 */
    removeGiftCard(order_id: InputValue<string>, gift_card_id: InputValue<string>, params: {
        "expected_version": InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersremovegiftcard
     */
    removeGiftCardWithResponse(order_id: InputValue<string>, gift_card_id: InputValue<string>, params: {
        "expected_version": InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Recalculates pending discounts and automatic promotions for a mutable order. The request body is
 * optional. Send expected_version to reject a mutation based on an outdated order read.
 * @see reference/orders.md#ordersrepricediscounts
 * POST /v1/orders/{order_id}/discounts/reprice
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.repriceDiscounts("example", undefined, { idempotencyKey: idempotencyKey })
 */
    repriceDiscounts(order_id: InputValue<string>, params?: (InputValue<RepriceDiscountsRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersrepricediscounts
     */
    repriceDiscountsWithResponse(order_id: InputValue<string>, params?: (InputValue<RepriceDiscountsRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Marks a paid inventory failure as resolved after an operator has completed manual inventory
 * remediation.
 * @see reference/orders.md#ordersresolveinventoryexception
 * POST /v1/orders/{order_id}/inventory-exception/resolve
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.resolveInventoryException("example", undefined, { idempotencyKey: idempotencyKey })
 */
    resolveInventoryException(order_id: InputValue<string>, params?: (InputValue<ResolveOrderInventoryExceptionRequestInput> | {
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersresolveinventoryexception
     */
    resolveInventoryExceptionWithResponse(order_id: InputValue<string>, params?: (InputValue<ResolveOrderInventoryExceptionRequestInput> | {
        "reason_message"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Queues a receipt for a paid order, including gift card payments and settled payments, and
 * returns the order unchanged. Send email to choose a recipient, or omit it to use the order's
 * email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes
 * per order and normalized recipient. Checkout credentials can send only to the address on file.
 * If no address is on file, checkout credentials can send to at most three distinct addresses over
 * the order's lifetime. Receipts sent for this order through this route count toward this limit,
 * including failed deliveries and receipts sent with a secret API key. Merchant callers can choose
 * any address.
 * @see reference/orders.md#orderssendreceipt
 * POST /v1/orders/{order_id}/send-receipt
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.sendReceipt("example", undefined, { idempotencyKey: idempotencyKey })
 */
    sendReceipt(order_id: InputValue<string>, params?: (InputValue<SendOrderReceiptRequestInput> | {
        "email"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#orderssendreceipt
     */
    sendReceiptWithResponse(order_id: InputValue<string>, params?: (InputValue<SendOrderReceiptRequestInput> | {
        "email"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the
 * delivery destination, and the requested tip. A request containing only metadata, internal_note,
 * buyer_note, or external_reference_id, with optional expected_version, can update open, closed,
 * paid, and invoice-locked orders without changing totals. Other merchant edits keep hosted and
 * embedded checkout sessions open unless an edit closes or completes the order, which ends the
 * session with order_mutated. Edits can also end invoice, return-resolution, and subscription-plan
 * sessions with order_mutated. A session already past expires_at ends with expired before the edit
 * is applied. These annotation updates are blocked while any order payment attempt remains
 * non-terminal, including an authorization awaiting capture, or checkout payment work is still
 * resolving. Requests combining annotations with other fields use the financial mutation rules for
 * the entire request. Send requested_tip: null to clear the current requested tip. A merchant can
 * correct a paid subscription signup or renewal destination before shipment by sending
 * delivery_destination and the current order version as expected_version. The committed delivery
 * methods must remain eligible, and shipping and tax totals must stay unchanged.
 * ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED returns the reason and computed shipping and tax
 * amounts when the correction would change the paid totals.
 * @see reference/orders.md#ordersupdate
 * PATCH /v1/orders/{order_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.update("example", {buyer_note: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(order_id: InputValue<string>, params: (InputValue<UpdateOrderRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersupdate
     */
    updateWithResponse(order_id: InputValue<string>, params: (InputValue<UpdateOrderRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Updates a single service charge, fee, or surcharge on an order.
 * @see reference/orders.md#ordersupdatecharge
 * PATCH /v1/orders/{order_id}/charges/{order_charge_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateCharge("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params: (InputValue<UpdateOrderChargeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersupdatecharge
     */
    updateChargeWithResponse(order_id: InputValue<string>, order_charge_id: InputValue<string>, params: (InputValue<UpdateOrderChargeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrderResponse>>;
    /**
 * Updates a single line item on an order. expected_version is the order version returned in
 * data.version. Send gift_card_recipient and expected_version to replace or clear recipient
 * delivery details before any purchase funding. Checkout credentials can update recipient details,
 * modifiers, or a line subscription offer selection, each with expected_version. Set subscription
 * to null to buy the line once.
 * @see reference/orders.md#ordersupdatelineitem
 * PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params: (InputValue<UpdateLineItemRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<Order>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/orders.md#ordersupdatelineitem
     */
    updateLineItemWithResponse(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params: (InputValue<UpdateLineItemRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant">): Promise<SdkResponse<OrderResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly orders: OrdersResource;
}
