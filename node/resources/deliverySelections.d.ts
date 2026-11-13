import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { DeliverySelection } from '../declarations/types-21.js';
import type {
    DeliverySelectionListResponse,
    DeliverySelectionResponse,
    DeliverySelectionResult,
    DeliverySelectionResultResponse,
    DeliverySelectionsCreateParams,
    DeliverySelectionsGetParams,
    DeliverySelectionsListParams,
    DeliverySelectionsReleaseParams
} from '../declarations/types-22.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    DeliverySelectionsCreateParams,
    DeliverySelectionResult,
    DeliverySelectionResultResponse,
    DeliverySelectionsGetParams,
    DeliverySelectionResponse,
    DeliverySelectionsListParams,
    DeliverySelectionListResponse,
    DeliverySelectionsReleaseParams,
    DeliverySelectionInstructionsRequestInput,
    DeliverySelectionRecipientRequestInput,
    DeliveryWindowRequest,
    DeliveryShipmentDetails,
    DeliverySelectionOrder,
    DeliverySelectionLifecycleEventResource,
    DeliverySelectionRecipientRequest
} from '../declarations/types-22.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-69.js';
export type {
    DeliverySelection,
    DeliveryRecipientRequirement,
    DeliveryRecipientResource,
    DeliverySelectionChoiceResource,
    DeliverySelectionInstructionsRequest
} from '../declarations/types-21.js';
export type {
    ClientOptions,
    CheckoutSession,
    CheckoutSessionPlatformFee,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTaxCalculation,
    CheckoutTheme,
    CheckoutTipConfig
} from '../declarations/types-6.js';
export type { CreateDeliverySelectionRequestInput, CreateDeliverySelectionChoiceRequestInput } from '../declarations/types-8.js';
export type { AddressRequestInput, Address, AddressRequest } from '../declarations/types-0.js';
export type {
    AuthMode,
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BundleComponent,
    BundleComponentVariantSummary
} from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type {
    OrderPaymentAttempt,
    OrderPaymentAttemptPaymentMethodSave,
    OrderSettlementAmounts,
    OrderReturnCreditSettlement,
    OrderTax,
    OrderTaxCallbackEvaluation,
    OrderTaxExemption,
    OrderTaxLocation
} from '../declarations/types-41.js';
export type { MoneyValue, NextAction } from '../declarations/types-38.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentErrorSummary,
    PaymentAttemptPaymentIntent,
    PaymentClientAction,
    PaymentClientActionURL,
    PaymentClientActionStripe,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-44.js';
export type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary,
    Fulfillment,
    FulfillmentChargeLink,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ExpandedSubscriptionSummary,
    ExpandedSubscriptionPlanSummary
} from '../declarations/types-24.js';
export type { ReadinessMerchantAccountSession, PurchasedGiftCard } from '../declarations/types-52.js';
export type { ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PickupFulfillmentDetails
} from '../declarations/types-48.js';
export type {
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    StripeTerminalPaymentIntentClientAction,
    SubscribedLine
} from '../declarations/types-60.js';
export type {
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentMethodSave,
    CheckoutPaymentConfig,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CatalogPricing,
    CategoryReference
} from '../declarations/types-5.js';
export type {
    CustomFieldAnswer,
    CustomFieldAnswerText,
    CustomFieldAnswerTextarea,
    CustomFieldAnswerDropdown,
    CustomFieldAnswerCheckbox
} from '../declarations/types-15.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from '../declarations/types-20.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryArrivalEstimate,
    DeferredPromotion,
    CustomerTaxExemptionCoverage,
    CustomerTaxExemptionCoverageAllStates,
    CustomerTaxExemptionCoverageStates,
    CustomerTaxID
} from '../declarations/types-16.js';
export type {
    DeliveryCandidateOutcomeResource,
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryEligibilityMismatch,
    DeliveryInventoryReservationSummary,
    DeliveryFulfillmentDetails,
    DeliveryChargeTaxCalculationRequest,
    DeliveryBuyerLocationResource,
    DeliveryBuyerLocationResourceAddress,
    DeliveryBuyerLocationResourceCoordinate
} from '../declarations/types-17.js';
export type {
    DeliveryOptionProjection,
    DeliveryPlan,
    DeliveryPickupDetails,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic
} from '../declarations/types-18.js';
export type { BuyerInstructionsConfig, BuyerPauseActionOptions, BuyerPayBalanceActionOptions } from '../declarations/types-2.js';
export type { LegalSettings } from '../declarations/types-34.js';
export type { Image, GiftCardPurchaseSnapshot, GiftCardPurchaseRecipient } from '../declarations/types-27.js';
export type { MetadataMap } from '../declarations/types-37.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type {
    SettlementAmounts,
    SelectableOrderPaymentIntent,
    SetupCollection,
    SetupCollectionStripe,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SelectedProductOption
} from '../declarations/types-59.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-47.js';
export type { SubscriptionIntervalOption, SubscriptionGiftRecipient } from '../declarations/types-61.js';
export type {
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderDeliveryDestination,
    OrderDeliveryDestinationRecipient,
    OrderCalculatedLineItemTax
} from '../declarations/types-39.js';
export type { BuyerRetryPaymentActionOptions } from '../declarations/types-3.js';
export type {
    OrderDeliverySummary,
    OrderDiscount,
    OrderLineItemModifier,
    OrderGiftCardEstimate,
    OrderGiftCardAllocation,
    OrderGiftCardSettlement,
    OrderGiftCardSelection,
    OrderHandover,
    OrderLineItem,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemFulfillmentComponent,
    OrderLineItemFulfillmentProfile,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderLineItemTax
} from '../declarations/types-40.js';
export type { FulfillmentHold, FulfillmentLineItem, FulfillmentOutcome, FulfillmentRecipient } from '../declarations/types-25.js';
export type { DigitalFulfillmentDetails, Dimensions, DisputesAcceptParams } from '../declarations/types-23.js';
export type {
    TextModifierRequest,
    TaxReverseCharge,
    TicketedEvent,
    Tip,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation
} from '../declarations/types-65.js';
export type { InventoryRoutingSource } from '../declarations/types-30.js';
export type { GiftCardProductConfiguration, GiftCardCustomAmountBounds } from '../declarations/types-26.js';
export type { LineItemInventorySnapshot, LineItemInventoryDemand, LocationCoordinate } from '../declarations/types-35.js';
export type {
    TaxCalculationRequest,
    TaxComponentRequest,
    TaxJurisdiction,
    TaxBreakdown,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount
} from '../declarations/types-64.js';
export type {
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-62.js';
export { makeAddressRequest } from '../declarations/types-70.js';
export { makeCreateDeliverySelectionChoiceRequest, makeCreateDeliverySelectionRequest } from '../declarations/types-72.js';
export {
    makeDeliverySelectionInstructionsRequest,
    makeDeliverySelectionRecipientRequest,
    makeDeliveryWindowRequest
} from '../declarations/types-76.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeTextModifierRequest } from '../declarations/types-82.js';
export interface DeliverySelectionsResource {
    /**
 * Selects one unexpired option per required choice group of delivery_quote_id. Replaces the
 * checkout's provisional selection and stock hold, applies delivery charges, and returns the
 * repriced order. Shipment and local delivery choices can keep a partial quote address when
 * destination_address is omitted. Missing destination members and recipient fields appear in
 * input_requirements and must be supplied by replacing the selection before payment. The selection
 * acts on the quote's checkout session. A checkout credential can select only from quotes of its
 * own checkout session; any other quote is refused as not found.
 *
 * `POST /v1/delivery-selections`
 * @see https://developers.withflintpay.com/docs/api/delivery-selections#createDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliverySelections.create({choices: [{delivery_choice_group_id:
 * "dcgrp_01K1P6G4M7H2N8Q9R3S5T6V7WX", delivery_option_id: "dopt_01K1P6G4M7H2N8Q9R3S5T6V7WX"}],
 * delivery_quote_id: "dqt_01K1P6G4M7H2N8Q9R3S5T6V7WX", expected_delivery_selection_id: null}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: DeliverySelectionsCreateParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<DeliverySelectionResult, DeliverySelectionResultResponse>>;
    /**
 * Returns one delivery selection, current or earlier, with its economics, lifecycle events, and
 * retention-aware private data. While the selection is selected, the tax on its delivery charges
 * follows the order's tax. A checkout credential reads only its own session's selections and
 * receives the buyer view; any other selection is refused as not found.
 *
 * `GET /v1/delivery-selections/{delivery_selection_id}`
 * @param delivery_selection_id ID of the delivery selection to retrieve, whether current or
 * historical.
 * @see https://developers.withflintpay.com/docs/api/delivery-selections#getDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliverySelections.get("dsel_01KEZF7C00QC35XBXVXQSCEB2D")
 */
    get(delivery_selection_id: InputValue<string>, params?: DeliverySelectionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<DeliverySelection, DeliverySelectionResponse>>;
    /**
 * Returns a checkout session's or an order's delivery selections, current and earlier, newest
 * first by created_at and delivery_selection_id, with economics, lifecycle events, and
 * retention-aware private data. Send checkout_session_id or order_id. A checkout credential must
 * send its own checkout_session_id. With a status filter, each page examines at most 500
 * selections and may hold fewer than page_size while next_page_token is present. Default order:
 * created_at descending, then delivery_selection_id descending.
 *
 * `GET /v1/delivery-selections`
 * @see https://developers.withflintpay.com/docs/api/delivery-selections#listDeliverySelections
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliverySelections.list()
 */
    list(params?: DeliverySelectionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<DeliverySelectionListResponse, DeliverySelectionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-selections#listDeliverySelections
     */
    listPages(params?: DeliverySelectionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<WithResponseInfo<DeliverySelectionListResponse, DeliverySelectionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-selections#listDeliverySelections
     */
    listItems(params?: DeliverySelectionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<DeliverySelection>;
    /**
 * Clears the checkout's provisional selection: releases its stock hold, removes its delivery
 * charges, and recalculates the order. Available while supported_actions lists release. A checkout
 * credential can release only its own session's selection; any other is refused as not found.
 *
 * `POST /v1/delivery-selections/{delivery_selection_id}/release`
 * @param delivery_selection_id ID of the provisional selection to withdraw. Its supported_actions
 * must include release.
 * @see https://developers.withflintpay.com/docs/api/delivery-selections#releaseDeliverySelection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliverySelections.release("dsel_01KEZF7C00QC35XBXVXQSCEB2D", {}, { idempotencyKey:
 * idempotencyKey })
 */
    release(delivery_selection_id: InputValue<string>, params?: DeliverySelectionsReleaseParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<DeliverySelectionResult, DeliverySelectionResultResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliverySelections: DeliverySelectionsResource;
}
