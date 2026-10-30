import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse } from '../declarations/types-0.js';
import type { CancelOrderPaymentAttemptResponse } from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { DeliverySelection, DeliverySelectionResponse } from '../declarations/types-19.js';
import type { Fulfillment } from '../declarations/types-21.js';
import type { FulfillmentResponse } from '../declarations/types-22.js';
import type { Order, OrderActivity, OrderActivityListResponse } from '../declarations/types-36.js';
import type {
    OrderListResponse,
    OrderPaymentAttempt,
    OrderPaymentAttemptListResponse,
    OrderPaymentAttemptResponse,
    OrderResponse
} from '../declarations/types-37.js';
import type {
    OrdersApplyDiscountParams,
    OrdersApplyGiftCardParams,
    OrdersCancelPaymentAttemptParams,
    OrdersCloseParams,
    OrdersCreateAccessLinkParams,
    OrdersCreateChargeParams,
    OrdersCreateFulfillmentParams,
    OrdersCreateLineItemsParams,
    OrdersCreateParams,
    OrdersCreatePaymentIntentParams,
    OrdersCreatePaymentIntentResponse,
    OrdersDeleteChargeParams,
    OrdersDeleteLineItemParams,
    OrdersGetCurrentDeliverySelectionParams,
    OrdersGetParams,
    OrdersGetPaymentAttemptParams,
    OrdersListActivitiesParams,
    OrdersListParams,
    OrdersListPaymentAttemptsParams,
    OrdersPayParams,
    OrdersRemoveDiscountsParams,
    OrdersRemoveGiftCardParams,
    OrdersRepriceDiscountsParams,
    OrdersResolveInventoryExceptionParams,
    OrdersSendReceiptParams,
    OrdersUpdateChargeParams,
    OrdersUpdateLineItemParams,
    OrdersUpdateParams
} from '../declarations/types-38.js';
import type { PayOrderResponse, PayOrderResult } from '../declarations/types-40.js';
import type { PaymentIntentWithCollection } from '../declarations/types-41.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    OrdersApplyDiscountParams,
    OrdersApplyGiftCardParams,
    OrdersCancelPaymentAttemptParams,
    OrdersCloseParams,
    OrdersCreateFulfillmentParams,
    OrdersCreateParams,
    OrdersCreateAccessLinkParams,
    OrdersCreateChargeParams,
    OrdersCreateLineItemsParams,
    OrdersCreatePaymentIntentParams,
    OrdersCreatePaymentIntentResponse,
    OrdersDeleteChargeParams,
    OrdersDeleteLineItemParams,
    OrdersGetParams,
    OrdersGetCurrentDeliverySelectionParams,
    OrdersGetPaymentAttemptParams,
    OrdersListActivitiesParams,
    OrdersListPaymentAttemptsParams,
    OrdersListParams,
    OrdersPayParams,
    OrdersRemoveDiscountsParams,
    OrdersRemoveGiftCardParams,
    OrdersRepriceDiscountsParams,
    OrdersResolveInventoryExceptionParams,
    OrdersSendReceiptParams,
    OrdersUpdateParams,
    OrdersUpdateChargeParams,
    OrdersUpdateLineItemParams,
    PackageCreateRequestInput,
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput,
    OrderTaxRequestInput,
    OrderTaxLocationRequestInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxUpdateRequestInput
} from '../declarations/types-38.js';
export type {
    RequestOptions,
    RemoveDiscountsRequestInput,
    RepriceDiscountsRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    RemoveDiscountsRequest
} from '../declarations/types-47.js';
export type {
    Order,
    OrderActivityListResponse,
    OrderActivity,
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestination,
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
    OrderCalculatedLineItemTax,
    OrderDeliveryDestinationRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderChargeRequestInput,
    OrderCalculatedChargeTaxInput,
    OrderChargeInputAmountInput,
    OrderChargeInputPercentInput,
    OrderGiftCardAllocationAcceptanceInput,
    OrderChargeTaxAssignmentInput,
    OrderCalculatedLineItemTaxInput,
    OrderDeliveryDestinationRecipientRequest,
    OrderDraftLineItemInventoryDemandRequest
} from '../declarations/types-36.js';
export type {
    OrderResponse,
    OrderPaymentAttempt,
    OrderPaymentAttemptResponse,
    OrderPaymentAttemptListResponse,
    OrderListResponse,
    OrderLineItemModifier,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderReturnCreditSettlement,
    OrderLineItemTax,
    OrderTax,
    OrderTaxExemption,
    OrderTaxLocation,
    OrderLineItemModifierRequestInput,
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationFullAddressRequestInput,
    OrderPaymentSourceSelectionInput,
    OrderPaymentSourceCardSelectionInput,
    OrderPaymentAttemptPaymentMethodSave,
    OrderPaymentIntentSelectionInput,
    OrderPaymentIntentSelectionTokenInput,
    OrderPaymentIntentSelectionPaymentMethodInput,
    OrderPaymentIntentSelectionStripeConfirmationTokenInput,
    OrderPaymentIntentSelectionAttachedInput,
    OrderLineItemTaxAssignmentInput,
    OrderPaymentSourceCardSelection
} from '../declarations/types-37.js';
export type {
    PayOrderResult,
    PayOrderResponse,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements,
    PaymentErrorSummary,
    PaymentIntent,
    PaymentAddOnFee,
    PaymentFulfillmentHold,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PayOrderRequestInput,
    PayOrderRequestPayInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestSetupInput,
    PayOrderRequestResumeInput
} from '../declarations/types-40.js';
export type { CancelOrderPaymentAttemptResponse, CancelOrderPaymentAttemptRequestInput } from '../declarations/types-3.js';
export type {
    Fulfillment,
    ExpandedCustomerSummary,
    ErrorRemediation,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionSummary,
    ExpandedSubscriptionPlanSummary,
    FulfillmentChargeLink,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ExpandedInvoiceSummary
} from '../declarations/types-21.js';
export type {
    FulfillmentResponse,
    FulfillmentLineItemRequestInput,
    FulfillmentRecipientRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentSinglePackageRequestInput,
    FulfillmentItemizedPackagesRequestInput,
    FulfillmentHold,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient,
    FulfillmentLineItemRequest
} from '../declarations/types-22.js';
export type {
    AccessLink,
    AccessLinkResponse,
    ApplyDiscountRequestInput,
    ApplyDiscountRequestPromotionInput,
    ApplyDiscountRequestManualInput,
    AuthMode,
    Address,
    ApplyOrderGiftCardRequestInput,
    AddressRequestInput,
    AddOrderChargeRequestInput,
    AddLineItemsRequestInput,
    AddressRequest
} from '../declarations/types-0.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, Weight, WeightInput } from '../declarations/types-61.js';
export type { PaymentIntentWithCollection, PaymentIntentWithCollectionResponse } from '../declarations/types-41.js';
export type {
    DeliverySelection,
    DeliverySelectionResponse,
    DeliverySelectionChoiceResource,
    DeliverySelectionInstructionsRequest,
    DeliveryShipmentDetails,
    DeliveryWindowRequest,
    DeliverySelectionLifecycleEventResource
} from '../declarations/types-19.js';
export type { ClientOptions, CloseOrderRequestInput } from '../declarations/types-5.js';
export type { ManualDiscountRequestInput, MeListOrderActivitiesParams } from '../declarations/types-33.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { PromotionRefRequestInput, PromotionRefInputPromotionIDInput, PromotionRefInputPromotionCodeInput } from '../declarations/types-45.js';
export type { Credentials } from '../declarations/types-12.js';
export type {
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BundleComponent,
    BundleComponentVariantSummary
} from '../declarations/types-1.js';
export type { BuyerPauseActionOptions, BuyerPayBalanceActionOptions } from '../declarations/types-2.js';
export type {
    CheckoutBuyerContact,
    CategoryReference,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerContactRequest
} from '../declarations/types-4.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { InventoryRoutingSource } from '../declarations/types-27.js';
export type {
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
    SendOrderReceiptRequestInput,
    SendOrderReceiptRequest
} from '../declarations/types-53.js';
export type {
    GiftCardPurchaseSnapshot,
    GiftCardProductConfiguration,
    GiftCardPurchaseRecipient,
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardPurchaseRecipientPatchRequestInput
} from '../declarations/types-24.js';
export type { GiftCardCustomAmountBounds } from '../declarations/types-23.js';
export type { Image, ImageReferenceRequestInput, ImageReferenceRequest } from '../declarations/types-25.js';
export type {
    LineItemInventorySnapshot,
    LineItemInventoryDemand,
    LineItemFulfillmentRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LocationCoordinate
} from '../declarations/types-32.js';
export type {
    TextModifierRequest,
    TaxCalculationRequest,
    TaxComponentRequest,
    TaxJurisdiction,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TicketedEvent,
    Tip,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation,
    TextModifierRequestInput,
    TaxCalculationRequestInput,
    TaxComponentRequestInput,
    TaxJurisdictionInput,
    TaxCalculationRequestModelInput,
    TaxComponentRequestModelInput,
    TaxJurisdictionRequestInput
} from '../declarations/types-57.js';
export type { PurchasedGiftCard, ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { SubscriptionIntervalOption } from '../declarations/types-54.js';
export type { Dimensions, DimensionsInput, DigitalFulfillmentDetails } from '../declarations/types-20.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PricingAmounts,
    PickupFulfillmentDetails,
    PaymentRisk,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PaymentSourceCredentialInput,
    PaymentSourceCredentialTokenInput,
    PaymentSourceCredentialPaymentMethodInput,
    PaymentSourceCredentialStripeConfirmationTokenInput
} from '../declarations/types-43.js';
export type {
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-55.js';
export type { TaxBreakdown } from '../declarations/types-56.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type {
    CreateFulfillmentRequestInput,
    CreateDigitalFulfillmentDetailsInput,
    CreateDeliveryFulfillmentDetailsInput,
    CreateFulfillmentRequestPickupInput,
    CreateFulfillmentRequestLocalDeliveryInput,
    CreateFulfillmentRequestDigitalInput,
    CreateFulfillmentRequestServiceInput,
    CreateDigitalFulfillmentDetails
} from '../declarations/types-7.js';
export type {
    CreatePickupFulfillmentDetailsInput,
    CreatePackageItemRequestInput,
    CreateOrderRequestInput,
    CreateOrderDiscountInput,
    CreateOrderDiscountPromotionInput,
    CreateOrderDiscountManualInput,
    CreateOrderLineItemRequestInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderTipInput,
    CreateOrderTipAmountInput,
    CreateOrderTipPercentInput,
    CreateOrderPaymentIntentRequestInput
} from '../declarations/types-9.js';
export type { CreateServiceFulfillmentDetailsInput } from '../declarations/types-11.js';
export type { ReturnShipmentLineItemAllocationRequestInput } from '../declarations/types-50.js';
export type { CreateFulfillmentRequestShipmentInput } from '../declarations/types-8.js';
export type {
    DeliveryFulfillmentDetails,
    DeliveryLocationSummaryResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint
} from '../declarations/types-15.js';
export type {
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate
} from '../declarations/types-14.js';
export type { DeliveryPlan, DeliveryPickupDetails, DeliveryPreviewRoutingSourceInput } from '../declarations/types-16.js';
export type { DeliveryRecipientResource } from '../declarations/types-18.js';
export type { UpdateOrderRequestInput, UpdateOrderChargeRequestInput } from '../declarations/types-59.js';
export type { UpdateLineItemRequestInput } from '../declarations/types-58.js';
export {
    makeAddLineItemsRequest,
    makeAddOrderChargeRequest,
    makeAddressRequest,
    makeApplyDiscountRequest,
    makeApplyDiscountRequestManual
} from '../declarations/types-61.js';
export {
    makeApplyDiscountRequestPromotion,
    makeApplyOrderGiftCardRequest,
    makeCancelOrderPaymentAttemptRequest,
    makeCheckoutBuyerContactRequest,
    makeCloseOrderRequest
} from '../declarations/types-62.js';
export {
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
    makeCreateOrderDiscountManual,
    makeCreateOrderDiscountPromotion,
    makeCreateOrderLineItemInputBundle,
    makeCreateOrderLineItemInputCustom,
    makeCreateOrderLineItemInputVariant,
    makeCreateOrderLineItemRequest,
    makeCreateOrderPaymentIntentRequest,
    makeCreateOrderRequest,
    makeCreateOrderTip,
    makeCreateOrderTipAmount,
    makeCreateOrderTipPercent,
    makeCreatePackageItemRequest,
    makeCreatePickupFulfillmentDetails
} from '../declarations/types-64.js';
export { makeCreateServiceFulfillmentDetails } from '../declarations/types-65.js';
export { makeDeliveryPreviewRoutingSource } from '../declarations/types-66.js';
export {
    makeDeliverySelectionInstructionsRequest,
    makeDeliveryWindowRequest,
    makeDimensions,
    makeFulfillmentItemizedPackagesRequest,
    makeFulfillmentLineItemRequest,
    makeFulfillmentPackagingRequest,
    makeFulfillmentRecipientRequest,
    makeFulfillmentSinglePackageRequest,
    makeGiftCardPurchaseDetailsRequest,
    makeGiftCardPurchaseRecipientPatchRequest,
    makeGiftCardPurchaseRecipientRequest
} from '../declarations/types-67.js';
export { makeImageReferenceRequest } from '../declarations/types-68.js';
export {
    makeLineItemFulfillmentOriginRequest,
    makeLineItemFulfillmentRequest,
    makeManualDiscountRequest,
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTax,
    makeOrderCalculatedLineItemTax,
    makeOrderChargeInputAmount,
    makeOrderChargeInputPercent,
    makeOrderChargeRequest,
    makeOrderChargeTaxAssignment,
    makeOrderDeliveryDestinationRecipientRequest,
    makeOrderDeliveryDestinationRequest,
    makeOrderDraftLineItemInventoryDemandRequest,
    makeOrderDraftLineItemTaxCalculationRequest,
    makeOrderDraftLineItemTaxRequest,
    makeOrderDraftTaxComponentRequest,
    makeOrderDraftTaxJurisdictionRequest,
    makeOrderGiftCardAllocationAcceptance,
    makeOrderInventoryRoutingSourceRequest,
    makeOrderLineItemModifierInputCatalog,
    makeOrderLineItemModifierInputText,
    makeOrderLineItemModifierRequest,
    makeOrderLineItemTax,
    makeOrderLineItemTaxAssignment,
    makeOrderPaymentIntentSelection,
    makeOrderPaymentIntentSelectionAttached,
    makeOrderPaymentIntentSelectionPaymentMethod,
    makeOrderPaymentIntentSelectionStripeConfirmationToken,
    makeOrderPaymentIntentSelectionToken,
    makeOrderPaymentSourceCardSelection
} from '../declarations/types-69.js';
export {
    makeOrderPaymentSourceSelection,
    makeOrderTaxCalculationInputAutomatic,
    makeOrderTaxCalculationInputExternal,
    makeOrderTaxCalculationRequest,
    makeOrderTaxComponentRequest,
    makeOrderTaxJurisdictionRequest,
    makeOrderTaxLocationFullAddressRequest,
    makeOrderTaxLocationInputFullAddress,
    makeOrderTaxLocationInputPostalCode,
    makeOrderTaxLocationPostalAddressRequest,
    makeOrderTaxLocationRequest,
    makeOrderTaxRequest,
    makeOrderTaxUpdateRequest,
    makePackageCreateInputCreated,
    makePackageCreateInputShipped,
    makePackageCreateRequest,
    makePaymentSourceCredential,
    makePaymentSourceCredentialPaymentMethod,
    makePaymentSourceCredentialStripeConfirmationToken,
    makePaymentSourceCredentialToken,
    makePayOrderRequest,
    makePayOrderRequestConfirmPaymentIntents,
    makePayOrderRequestPay,
    makePayOrderRequestResume,
    makePayOrderRequestSetup
} from '../declarations/types-70.js';
export {
    makePromotionRefInputPromotionCode,
    makePromotionRefInputPromotionID,
    makePromotionRefRequest,
    makeRemoveDiscountsRequest,
    makeRepriceDiscountsRequest,
    makeResolveOrderInventoryExceptionRequest
} from '../declarations/types-71.js';
export {
    makeReturnShipmentLineItemAllocationRequest,
    makeSendOrderReceiptRequest,
    makeSinglePackageCreateInputCreated,
    makeSinglePackageCreateInputShipped,
    makeSinglePackageCreateRequest,
    makeSubscribedLineRequest
} from '../declarations/types-72.js';
export {
    makeSubscriptionIntervalOption,
    makeTaxCalculationRequest,
    makeTaxCalculationRequestModel,
    makeTaxComponentRequest,
    makeTaxComponentRequestModel,
    makeTaxJurisdiction,
    makeTaxJurisdictionRequest,
    makeTextModifierRequest
} from '../declarations/types-73.js';
export { makeUpdateLineItemRequest, makeUpdateOrderChargeRequest, makeUpdateOrderRequest } from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface OrdersResource {
    /**
 * Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must
 * provide a promotion code; resource IDs and manual discounts require merchant authentication.
 *
 * `POST /v1/orders/{order_id}/discounts`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#applyOrderDiscount
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyDiscount("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {promotion: {promotion_id:
 * "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV"}}, { idempotencyKey: idempotencyKey })
 */
    applyDiscount(order_id: InputValue<string>, params: OrdersApplyDiscountParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Selects a gift card by its current code and returns masked selections and an unreserved
 * estimate. No value is held or debited. Optional expected_version must match the order version
 * returned by the last read. An order may select at most 20 gift cards. Gift card value cannot pay
 * for subscription orders. Retry a lost response with the same Idempotency-Key to recover the
 * original selection result.
 *
 * `POST /v1/orders/{order_id}/gift-cards`
 * @param order_id Order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#applyOrderGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.applyGiftCard("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {code: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    applyGiftCard(order_id: InputValue<string>, params: OrdersApplyGiftCardParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.
 *
 * `POST /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}/cancel`
 * @param order_id Flint order ID.
 * @param order_payment_attempt_id Flint order payment attempt ID.
 * @see https://developers.withflintpay.com/docs/api/orders#cancelOrderPaymentAttempt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.cancelPaymentAttempt("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "opat_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey })
 */
    cancelPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: OrdersCancelPaymentAttemptParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<PayOrderResult, CancelOrderPaymentAttemptResponse>>;
    /**
 * Closes an open order and stops further payment. Cancels pending discounts, releases their
 * reservations, and recalculates totals; canceled discounts remain visible with status: "canceled"
 * but no longer reduce the total. Unused order-owned payment intents are canceled. When collected
 * money remains refundable, send collected_money_behavior: keep to close and keep it, or refund it
 * first with `client.refunds.create` and order_id. Closing does not refund money; refunds remain
 * available afterwards. Closing is blocked while payment collection is in progress. To complete a
 * zero-balance order as paid, use `client.orders.pay`. closed_reason and closed_at record why and
 * when the order closed. The request body is optional. Send expected_version to reject a mutation
 * based on an outdated order read.
 *
 * `POST /v1/orders/{order_id}/close`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#closeOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.close("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    close(order_id: InputValue<string>, params?: OrdersCloseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Creates a fulfillment for the specified quantities on a paid order. Use this when you manage
 * fulfillment outside checkout; checkout creates fulfillments for the buyer's delivery selections.
 * While Flint is creating those fulfillments, requests for their quantities return
 * OPERATION_IN_PROGRESS with reason delivery_selection_materializing. Retrieve the order and use
 * its fulfillments. Returns 409 ACTION_NOT_ALLOWED with details[0].reason status_not_reached when
 * the order is not paid. See the [fulfillment guide](/docs/guides/fulfillment).
 *
 * `POST /v1/orders/{order_id}/fulfillments`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/fulfillment#createFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createFulfillment("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items:
 * [{order_line_item_id: "li_01KEZF7C004XP0V220YVMGQ354", quantity: 1}], metadata: {source:
 * "dispatch"}, shipment: {package: {carrier: "ups", status: "created", tracking_number:
 * "1Z999AA10123456784"}, packaging: "single_package"}, type: "shipment"}, { idempotencyKey:
 * idempotencyKey })
 */
    createFulfillment(order_id: InputValue<string>, params: OrdersCreateFulfillmentParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Fulfillment, FulfillmentResponse>>;
    /**
 * Creates an order for the authenticated merchant. For USD orders, an effective requested tip may
 * be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.
 *
 * `POST /v1/orders`
 * @see https://developers.withflintpay.com/docs/api/orders#createOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.create({line_items: [{type: "variant", variant_id:
 * "var_01ARZ3NDEKTSV4RRFFQ69G5FAV"}]}, { idempotencyKey: idempotencyKey })
 */
    create(params: OrdersCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Creates the link Flint's receipt email carries, to put in buyer email or messages you send
 * yourself. It opens the order in your Flint-hosted customer account without a sign-in, and lets
 * the buyer have the receipt sent again to the order's email. It works for 30 days or 10 opens,
 * whichever comes first; after that the buyer signs in to see the order. The url is a bearer
 * credential. Flint returns it only in this response and in a retry with the same Idempotency-Key,
 * so send it only to the buyer and keep it out of logs. A call with a new key creates another
 * link; earlier links keep working until they expire. When customer_account.mode is
 * merchant_hosted it returns 409 ACTION_NOT_ALLOWED with reason merchant_hosted_customer_accounts,
 * and for an order without a customer, 409 ACTION_NOT_ALLOWED with reason configuration_required.
 * Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential,
 * environment, and this resource's route. A replay returns the original link without extending its
 * lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and
 * has no replay result. If Flint cannot retain a result after minting, contact support with
 * X-Request-Id before sending a new request.
 *
 * `POST /v1/orders/{order_id}/access-links`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createAccessLink("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    createAccessLink(order_id: InputValue<string>, params?: OrdersCreateAccessLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<AccessLink, AccessLinkResponse>>;
    /**
 * Adds a service charge, fee, or surcharge to an order.
 *
 * `POST /v1/orders/{order_id}/charges`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderCharge
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createCharge("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {charge: {amount_money: {amount:
 * "100", currency: "USD"}, calculation_type: "amount", name: "example", type: "service_fee"}}, {
 * idempotencyKey: idempotencyKey })
 */
    createCharge(order_id: InputValue<string>, params: OrdersCreateChargeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Adds one or more line items to an order.
 *
 * `POST /v1/orders/{order_id}/line-items`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderLineItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createLineItems("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items: [{type: "variant",
 * variant_id: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV"}]}, { idempotencyKey: idempotencyKey })
 */
    createLineItems(order_id: InputValue<string>, params: OrdersCreateLineItemsParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Creates a payment intent owned by the order. Collect a payment source using payment_collection,
 * then submit that source through payOrder. This route requires commerce.orders.write; standalone
 * payment-intent routes require payments.payment_intents.write.
 *
 * `POST /v1/orders/{order_id}/payment-intents`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#createOrderPaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.createPaymentIntent("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    createPaymentIntent(order_id: InputValue<string>, params: OrdersCreatePaymentIntentParams, options: _SdkRequiredIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<({
        "payment_collection": unknown;
    })
        & (Exclude<PaymentIntentWithCollection & object, readonly unknown[]>), OrdersCreatePaymentIntentResponse>>;
    /**
 * Removes a single service charge, fee, or surcharge from an order.
 *
 * `DELETE /v1/orders/{order_id}/charges/{order_charge_id}`
 * @param order_id Flint order ID.
 * @param order_charge_id Flint order charge ID.
 * @see https://developers.withflintpay.com/docs/api/orders#deleteOrderCharge
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteCharge("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", "och_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {}, { idempotencyKey: idempotencyKey })
 */
    deleteCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params?: OrdersDeleteChargeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Removes a single line item from an order.
 *
 * `DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}`
 * @param order_id Flint order ID.
 * @param order_line_item_id Flint order line item ID.
 * @see https://developers.withflintpay.com/docs/api/orders#deleteOrderLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.deleteLineItem("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", "li_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params?: OrdersDeleteLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Returns a single order by ID.
 *
 * `GET /v1/orders/{order_id}`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#getOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.get("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(order_id: InputValue<string>, params?: OrdersGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Returns the delivery selection committed to an order.
 *
 * `GET /v1/orders/{order_id}/delivery-selections/current`
 * @param order_id Flint order ID.
 * @see
 * https://developers.withflintpay.com/docs/api/delivery-selections#getOrderCurrentDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.getCurrentDeliverySelection("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getCurrentDeliverySelection(order_id: InputValue<string>, params?: OrdersGetCurrentDeliverySelectionParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliverySelection, DeliverySelectionResponse>>;
    /**
 * Returns one durable payment attempt for the order. Checkout-session callers can read only
 * attempts created by their own session.
 *
 * `GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}`
 * @param order_id Flint order ID.
 * @param order_payment_attempt_id Flint order payment attempt ID.
 * @see https://developers.withflintpay.com/docs/api/orders#getOrderPaymentAttempt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.getPaymentAttempt("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "opat_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPaymentAttempt(order_id: InputValue<string>, order_payment_attempt_id: InputValue<string>, params?: OrdersGetPaymentAttemptParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<OrderPaymentAttempt, OrderPaymentAttemptResponse>>;
    /**
 * Returns a read-only, human-readable history log for an order. Use it to render timelines and
 * debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning
 * resource for authoritative state: the order for balances and status, the payment for payment
 * state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum
 * balance_delta_money to compute an order balance. Informational rows such as payment_failed,
 * refund_failed, and checkout_session_expired have a zero balance delta. The default order is
 * newest first. Use sort_direction=asc for chronological timeline rendering. A typical
 * chronological log might show created, payment_failed, payment, refund, then refund_failed; each
 * row gives one reference to click through for the authoritative resource. Default order:
 * created_at descending, then order_activity_id descending.
 *
 * `GET /v1/orders/{order_id}/activities`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#listOrderActivities
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.listActivities("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listActivities(order_id: InputValue<string>, params?: OrdersListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderActivityListResponse, OrderActivityListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderActivities
     */
    listActivitiesPages(order_id: InputValue<string>, params?: OrdersListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrderActivityListResponse, OrderActivityListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderActivities
     */
    listActivitiesItems(order_id: InputValue<string>, params?: OrdersListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrderActivity>;
    /**
 * Returns payment attempts for the order, newest first. Checkout-session callers see only attempts
 * created by their own session. A list filtered by idempotency_key omits pending_actions; read the
 * attempt by ID to get them. Default order: started_at descending, then order_payment_attempt_id
 * descending.
 *
 * `GET /v1/orders/{order_id}/payment-attempts`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#listOrderPaymentAttempts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.listPaymentAttempts("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listPaymentAttempts(order_id: InputValue<string>, params?: OrdersListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<OrderPaymentAttemptListResponse, OrderPaymentAttemptListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderPaymentAttempts
     */
    listPaymentAttemptsPages(order_id: InputValue<string>, params?: OrdersListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<WithResponseInfo<OrderPaymentAttemptListResponse, OrderPaymentAttemptListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrderPaymentAttempts
     */
    listPaymentAttemptsItems(order_id: InputValue<string>, params?: OrdersListPaymentAttemptsParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<OrderPaymentAttempt>;
    /**
 * Returns a paginated list of orders for the authenticated merchant. Default order: created_at
 * descending, then order_id descending.
 *
 * `GET /v1/orders`
 * @see https://developers.withflintpay.com/docs/api/orders#listOrders
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.orders.list()
 */
    list(params?: OrdersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrderListResponse, OrderListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrders
     */
    listPages(params?: OrdersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrderListResponse, OrderListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/orders#listOrders
     */
    listItems(params?: OrdersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Order>;
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
 * status requires_action. Otherwise pending_actions is empty. Read
 * `client.orders.getPaymentAttempt` for the attempt's current state.
 *
 * `POST /v1/orders/{order_id}/pay`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#payOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.pay("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "pay"}, { idempotencyKey:
 * idempotencyKey })
 */
    pay(order_id: InputValue<string>, params: OrdersPayParams, options: _SdkRequiredIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<PayOrderResult, PayOrderResponse>>;
    /**
 * Removes one or more pending applied discounts from an order. Redeemed or canceled discounts are
 * settlement history and cannot be removed.
 *
 * `POST /v1/orders/{order_id}/discounts/remove`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#removeOrderDiscounts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeDiscounts("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {order_discount_ids:
 * ["ad_01JFXH8Z2K7QF9V3MB0N4T6RCP"]}, { idempotencyKey: idempotencyKey })
 */
    removeDiscounts(order_id: InputValue<string>, params: OrdersRemoveDiscountsParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Removes a selected gift card without moving value. The expected_version must still match the
 * order version. Selections cannot change during an active payment attempt. Retry a lost response
 * with the same Idempotency-Key to recover the original selection result.
 *
 * `DELETE /v1/orders/{order_id}/gift-cards/{gift_card_id}`
 * @param order_id Order ID.
 * @param gift_card_id Selected gift card ID.
 * @see https://developers.withflintpay.com/docs/api/orders#removeOrderGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.removeGiftCard("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {expected_version: 1}, { idempotencyKey: idempotencyKey })
 */
    removeGiftCard(order_id: InputValue<string>, gift_card_id: InputValue<string>, params: OrdersRemoveGiftCardParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Recalculates pending discounts and automatic promotions for a mutable order. The request body is
 * optional. Send expected_version to reject a mutation based on an outdated order read.
 *
 * `POST /v1/orders/{order_id}/discounts/reprice`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#repriceOrderDiscounts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.repriceDiscounts("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    repriceDiscounts(order_id: InputValue<string>, params?: OrdersRepriceDiscountsParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Marks a paid inventory failure as resolved after an operator has completed manual inventory
 * remediation.
 *
 * `POST /v1/orders/{order_id}/inventory-exception/resolve`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#resolveOrderInventoryException
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.resolveInventoryException("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    resolveInventoryException(order_id: InputValue<string>, params?: OrdersResolveInventoryExceptionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Queues a receipt for a paid order, including gift card payments and settled payments, and
 * returns the order unchanged. Send email to choose a recipient, or omit it to use the order's
 * email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes
 * per order and normalized recipient. Checkout credentials can send only to the address on file.
 * If no address is on file, checkout credentials can send to at most three distinct addresses over
 * the order's lifetime. Receipts sent for this order through this route count toward this limit,
 * including failed deliveries and receipts sent with a secret API key. Merchant callers can choose
 * any address.
 *
 * `POST /v1/orders/{order_id}/send-receipt`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#sendOrderReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.sendReceipt("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    sendReceipt(order_id: InputValue<string>, params?: OrdersSendReceiptParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
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
 * methods must remain eligible, and shipping and tax totals must stay unchanged. When the
 * correction would change the paid totals, the request returns 409 ACTION_NOT_ALLOWED with
 * details[0].reason payment_collected. The detail can include shipping_money,
 * requoted_shipping_money, tax_money, and requoted_tax_money.
 *
 * `PATCH /v1/orders/{order_id}`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/orders#updateOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.update("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {buyer_note: "Please include a gift
 * receipt"}, { idempotencyKey: idempotencyKey })
 */
    update(order_id: InputValue<string>, params: OrdersUpdateParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Updates a single service charge, fee, or surcharge on an order.
 *
 * `PATCH /v1/orders/{order_id}/charges/{order_charge_id}`
 * @param order_id Flint order ID.
 * @param order_charge_id Flint order charge ID.
 * @see https://developers.withflintpay.com/docs/api/orders#updateOrderCharge
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateCharge("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", "och_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {name: "Priority delivery"}, { idempotencyKey: idempotencyKey })
 */
    updateCharge(order_id: InputValue<string>, order_charge_id: InputValue<string>, params: OrdersUpdateChargeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
    /**
 * Updates a single line item on an order. expected_version is the order version returned in
 * data.version. Send gift_card_face_value_money and expected_version to select an unpaid gift card
 * line's face value within its frozen offer and reprice the order before any purchase funding.
 * Send gift_card_recipient and expected_version to replace or clear recipient delivery details
 * before any purchase funding. Checkout credentials can update gift card face value and recipient
 * details together, modifiers, or a line subscription offer selection, each with expected_version.
 * Repeating the current gift card face value does not change the order version. Set subscription
 * to null to buy the line once.
 *
 * `PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`
 * @param order_id Flint order ID.
 * @param order_line_item_id Flint order line item ID.
 * @see https://developers.withflintpay.com/docs/api/orders#updateOrderLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.orders.updateLineItem("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", "li_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * {name: "Gift item"}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(order_id: InputValue<string>, order_line_item_id: InputValue<string>, params: OrdersUpdateLineItemParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<Order, OrderResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly orders: OrdersResource;
}
