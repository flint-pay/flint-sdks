import type { Result, WithResponseInfo, InputValue } from '../runtime.js';
import type {
    BuyerCheckoutSessionWithSecret,
    BuyerCreditNote,
    BuyerCreditNoteListResponse,
    BuyerCreditNoteResponse,
    BuyerCustomer,
    BuyerCustomerResponse,
    BuyerFlintWalletCardListResponse,
    BuyerFlintWalletStoreSetup,
    BuyerFlintWalletStoreSetupResponse,
    BuyerFulfillment,
    BuyerFulfillmentEvent,
    BuyerFulfillmentEventListResponse
} from '../declarations/types-1.js';
import type {
    BuyerFulfillmentListResponse,
    BuyerFulfillmentResponse,
    BuyerGiftCard,
    BuyerGiftCardListResponse,
    BuyerGiftCardResponse,
    BuyerGiftCardTransaction,
    BuyerGiftCardTransactionListResponse,
    BuyerInvoice,
    BuyerInvoiceCheckoutSessionResponse,
    BuyerInvoiceCheckoutSessionResult,
    BuyerInvoiceListResponse,
    BuyerInvoiceResponse,
    BuyerOrder,
    BuyerOrderListResponse,
    BuyerOrderResponse,
    BuyerPackage,
    BuyerPackageListResponse,
    BuyerPackageResponse,
    BuyerPaymentIntent,
    BuyerPaymentIntentListResponse,
    BuyerPaymentIntentResponse,
    BuyerPaymentMethod,
    BuyerPaymentMethodListResponse,
    BuyerPaymentMethodResponse,
    BuyerPaymentMethodWithSetup,
    BuyerRefund,
    BuyerRefundListResponse,
    BuyerRefundResponse,
    BuyerReturn,
    BuyerReturnListResponse,
    BuyerReturnPreview
} from '../declarations/types-2.js';
import type {
    BuyerReturnPreviewResponse,
    BuyerReturnResolution,
    BuyerReturnResolutionCheckoutSessionResponse,
    BuyerReturnResolutionResponse,
    BuyerReturnResponse,
    BuyerSavePaymentMethodResponse,
    BuyerShipment,
    BuyerShipmentListResponse,
    BuyerShipmentResponse,
    BuyerSubscription,
    BuyerSubscriptionListResponse,
    BuyerSubscriptionPaymentRetry,
    BuyerSubscriptionPaymentRetryListResponse,
    BuyerSubscriptionPaymentRetryResponse,
    BuyerSubscriptionPreview,
    BuyerSubscriptionPreviewResponse,
    BuyerSubscriptionRenewalResult,
    BuyerSubscriptionRenewalResultResponse,
    BuyerSubscriptionResponse
} from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    CustomerAddress,
    CustomerAddressListResponse,
    CustomerAddressResponse,
    CustomerDeletionRequest,
    CustomerDeletionRequestListResponse,
    CustomerDeletionRequestResponse,
    CustomerEmailPreferences,
    CustomerEmailPreferencesResponse,
    CustomerSession,
    CustomerSessionResponse
} from '../declarations/types-13.js';
import type { EmailChangeRequest, EmailChangeRequestResponse } from '../declarations/types-21.js';
import type {
    MeCancelReturnParams,
    MeCancelSubscriptionParams,
    MeConfirmEmailChangeRequestParams,
    MeCreateAddressParams,
    MeCreateDeletionRequestParams,
    MeCreateEmailChangeRequestParams,
    MeCreateFlintWalletStoreSetupParams,
    MeCreateInvoiceCheckoutSessionParams,
    MeCreatePaymentMethodParams,
    MeCreateReturnParams,
    MeCreateReturnPreviewParams,
    MeCreateReturnResolutionCheckoutSessionParams,
    MeCreateSubscriptionPaymentRetryParams,
    MeCreateSubscriptionPreviewParams,
    MeDeleteAddressParams,
    MeDeletePaymentMethodParams,
    MeGetAddressParams,
    MeGetCreditNotePDFParams,
    MeGetCreditNotePDFResponse,
    MeGetCreditNoteParams,
    MeGetDeletionRequestParams,
    MeGetEmailPreferencesParams,
    MeGetFulfillmentParams,
    MeGetGiftCardParams,
    MeGetInvoicePDFParams,
    MeGetInvoicePDFResponse,
    MeGetInvoiceParams,
    MeGetOrderParams,
    MeGetPackageParams,
    MeGetParams,
    MeGetPaymentIntentParams,
    MeGetPaymentMethodParams,
    MeGetRefundParams,
    MeGetReturnParams,
    MeGetReturnResolutionParams,
    MeGetShipmentParams,
    MeGetSubscriptionParams,
    MeGetSubscriptionPaymentRetryParams,
    MeListAddressesParams,
    MeListCreditNotesParams,
    MeListDeletionRequestsParams,
    MeListFlintWalletCardsParams,
    MeListFulfillmentEventsParams,
    MeListFulfillmentsParams,
    MeListGiftCardTransactionsParams,
    MeListGiftCardsParams,
    MeListInvoicesParams,
    MeListOrderActivitiesParams,
    MeListOrdersParams,
    MeListPackagesParams,
    MeListPaymentIntentsParams,
    MeListPaymentMethodsParams
} from '../declarations/types-33.js';
import type {
    MeListRefundsParams,
    MeListReturnsParams,
    MeListShipmentsParams,
    MeListSubscriptionPaymentRetriesParams,
    MeListSubscriptionsParams,
    MePauseSubscriptionParams,
    MeRemoveGiftCardParams,
    MeRenewSubscriptionParams,
    MeResumeSubscriptionParams,
    MeRevokeSessionParams,
    MeSaveGiftCardParams,
    MeSendOrderReceiptParams,
    MeSkipSubscriptionCycleParams,
    MeUpdateAddressParams,
    MeUpdateEmailPreferencesParams,
    MeUpdateParams,
    MeUpdateSubscriptionLineItemParams,
    MeUpdateSubscriptionParams,
    Merchant,
    MerchantAccountSession,
    MerchantAccountSessionClientSession,
    MerchantAccountSessionCreateRequest,
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionEffectivePolicy,
    MerchantAccountSessionRefreshRequest,
    MerchantAccountSessionRefreshRequestInput,
    MerchantAccountSessionResponse,
    MerchantAccountSessionStripe,
    MerchantAccountSessionStripeCollectionOptions,
    MerchantAccountSessionStripeComponent,
    MerchantAccountSessionStripeRequirements,
    MerchantAccountSessionsCreateParams,
    MerchantAccountSessionsRefreshParams,
    MerchantBillingBalance,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalanceResponse,
    MerchantBillingBalancesGetParams,
    MerchantBillingBalancesListParams,
    MerchantBillingEntriesListParams,
    MerchantBillingEntry,
    MerchantBillingEntryListResponse,
    MerchantBillingInvoice,
    MerchantBillingInvoiceLineItem,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantBillingInvoicesGetParams,
    MerchantBillingInvoicesListParams,
    MerchantGetParams,
    MerchantReadiness,
    MerchantResponse,
    MerchantUpdateParams,
    MerchantWebhookEnvelope,
    MetadataMap,
    MetadataPatchRequest,
    MetadataPatchRequestInput,
    MetadataRequestInput
} from '../declarations/types-34.js';
import type { OrderActivity, OrderActivityListResponse } from '../declarations/types-36.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { SubscriptionRenewalPreview } from '../declarations/types-56.js';
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
    MeCancelReturnParams,
    MeCancelSubscriptionParams,
    MeConfirmEmailChangeRequestParams,
    MeCreateAddressParams,
    MeCreateDeletionRequestParams,
    MeCreateEmailChangeRequestParams,
    MeCreateFlintWalletStoreSetupParams,
    MeCreateInvoiceCheckoutSessionParams,
    MeCreatePaymentMethodParams,
    MeCreateReturnParams,
    MeCreateReturnPreviewParams,
    MeCreateReturnResolutionCheckoutSessionParams,
    MeCreateSubscriptionPaymentRetryParams,
    MeCreateSubscriptionPreviewParams,
    MeDeleteAddressParams,
    MeDeletePaymentMethodParams,
    MeGetParams,
    MeGetAddressParams,
    MeGetCreditNoteParams,
    MeGetCreditNotePDFParams,
    MeGetCreditNotePDFResponse,
    MeGetDeletionRequestParams,
    MeGetEmailPreferencesParams,
    MeGetFulfillmentParams,
    MeGetGiftCardParams,
    MeGetInvoiceParams,
    MeGetInvoicePDFParams,
    MeGetInvoicePDFResponse,
    MeGetOrderParams,
    MeGetPackageParams,
    MeGetPaymentIntentParams,
    MeGetPaymentMethodParams,
    MeGetRefundParams,
    MeGetReturnParams,
    MeGetReturnResolutionParams,
    MeGetShipmentParams,
    MeGetSubscriptionParams,
    MeGetSubscriptionPaymentRetryParams,
    MeListAddressesParams,
    MeListCreditNotesParams,
    MeListDeletionRequestsParams,
    MeListFlintWalletCardsParams,
    MeListFulfillmentEventsParams,
    MeListFulfillmentsParams,
    MeListGiftCardsParams,
    MeListGiftCardTransactionsParams,
    MeListInvoicesParams,
    MeListOrderActivitiesParams,
    MeListOrdersParams,
    MeListPackagesParams,
    MeListPaymentIntentsParams,
    MeListPaymentMethodsParams
} from '../declarations/types-33.js';
export type { RequestOptions, RefundTaxBreakdownRefund, RefundTenderAllocation, RenewSubscriptionRequestInput } from '../declarations/types-47.js';
export type {
    BuyerReturn,
    BuyerInvoiceCheckoutSessionResult,
    BuyerInvoiceCheckoutSessionResponse,
    BuyerPaymentMethodWithSetup,
    BuyerReturnPreview,
    BuyerPaymentMethod,
    BuyerPaymentMethodResponse,
    BuyerFulfillmentResponse,
    BuyerGiftCard,
    BuyerGiftCardResponse,
    BuyerInvoice,
    BuyerInvoiceResponse,
    BuyerOrder,
    BuyerOrderResponse,
    BuyerPackage,
    BuyerPackageResponse,
    BuyerPaymentIntent,
    BuyerPaymentIntentResponse,
    BuyerRefund,
    BuyerRefundResponse,
    BuyerFulfillmentListResponse,
    BuyerGiftCardListResponse,
    BuyerGiftCardTransactionListResponse,
    BuyerGiftCardTransaction,
    BuyerInvoiceListResponse,
    BuyerOrderListResponse,
    BuyerPackageListResponse,
    BuyerPaymentIntentListResponse,
    BuyerPaymentMethodListResponse,
    BuyerRefundListResponse,
    BuyerReturnListResponse,
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions,
    BuyerReturnCompletionBlocker,
    BuyerReturnHandoffRequirement,
    BuyerReturnHandoffDestination,
    BuyerReturnLineItem,
    BuyerReturnLineItemEligibility,
    BuyerReturnLineItemModifier,
    BuyerOrderLineItemModifier,
    BuyerOrderPaymentAttempt,
    BuyerPaymentErrorSummary,
    BuyerPaymentAttemptPaymentIntent,
    BuyerInstructionsConfig,
    BuyerPaymentCollection,
    BuyerPaymentCollectionStripe,
    BuyerPaymentCollectionStripeElements,
    BuyerReturnEligibilityPreview,
    BuyerReturnEligibilityPreviewLineItem,
    BuyerReturnPolicyEvaluation,
    BuyerReturnPolicyEvaluationLineItem,
    BuyerReturnPreviewEligibility,
    BuyerReturnPreviewResolution,
    BuyerFulfillmentOutcome,
    BuyerInvoiceLateFee,
    BuyerOrderCharge,
    BuyerOrderLineItem,
    BuyerOrderTax,
    BuyerOrderTaxLocation
} from '../declarations/types-2.js';
export type {
    BuyerReturnResponse,
    BuyerSubscription,
    BuyerSubscriptionResponse,
    BuyerSavePaymentMethodResponse,
    BuyerReturnPreviewResponse,
    BuyerReturnResolutionCheckoutSessionResponse,
    BuyerSubscriptionPaymentRetry,
    BuyerSubscriptionPaymentRetryResponse,
    BuyerSubscriptionPreview,
    BuyerSubscriptionPreviewResponse,
    BuyerReturnResolution,
    BuyerReturnResolutionResponse,
    BuyerShipment,
    BuyerShipmentResponse,
    BuyerShipmentListResponse,
    BuyerSubscriptionPaymentRetryListResponse,
    BuyerSubscriptionListResponse,
    BuyerSubscriptionRenewalResult,
    BuyerSubscriptionRenewalResultResponse,
    BuyerSubscriptionCancellationDetails,
    BuyerSubscriptionLineItem,
    BuyerSubscriptionServiceLocation,
    BuyerSubscriptionPlanLineItem,
    BuyerSubscriptionPlanLineItemVariant,
    BuyerSubscriptionPlanLineItemBundle,
    BuyerSubscriptionPlanLineItemCustom,
    BuyerSelectableOrderPaymentIntent,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerReturnReplacementLineItemInputVariantInput,
    BuyerReturnReplacementLineItemInputBundleInput,
    BuyerReturnResolutionPreview,
    BuyerReturnResolutionAdjustment,
    BuyerTip,
    BuyerReturnResolutionExecutionBlocker
} from '../declarations/types-3.js';
export type {
    EmailChangeRequest,
    EmailChangeRequestResponse,
    ErrorRemediation,
    FulfillmentChargeLink,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedOrganizationSummary
} from '../declarations/types-21.js';
export type {
    CustomerAddress,
    CustomerAddressResponse,
    CustomerDeletionRequest,
    CustomerDeletionRequestResponse,
    CustomerEmailPreferences,
    CustomerEmailPreferencesResponse,
    CustomerAddressListResponse,
    CustomerDeletionRequestListResponse,
    CustomerSession,
    CustomerSessionResponse
} from '../declarations/types-13.js';
export type {
    BuyerFlintWalletStoreSetup,
    BuyerFlintWalletStoreSetupResponse,
    BuyerCheckoutSessionWithSecret,
    BuyerCustomer,
    BuyerCustomerResponse,
    BuyerCreditNote,
    BuyerCreditNoteResponse,
    BuyerFulfillment,
    BuyerCreditNoteListResponse,
    BuyerFlintWalletCardListResponse,
    BuyerFulfillmentEventListResponse,
    BuyerFulfillmentEvent,
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BundleComponent,
    BundleComponentVariantSummary,
    BuyerExpandedSubscriptionPlanSummary,
    BuyerCheckoutSession,
    BuyerErrorRemediation,
    BuyerCheckoutProblemResource,
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCreateReturnResolutionPreviewRequestInput,
    BuyerCreateReturnPreviewRequestEligibilityInput,
    BuyerCreateReturnPreviewRequestResolutionInput,
    BuyerFulfillmentLineItem,
    BuyerDeliveryFulfillmentDetails,
    BuyerExpandedOrderSummary,
    BuyerFlintWalletCard
} from '../declarations/types-1.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, Weight } from '../declarations/types-61.js';
export type {
    SubscriptionRenewalPreview,
    SubscriptionPromotion,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionRenewalEstimate,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem,
    TaxBreakdown
} from '../declarations/types-56.js';
export type {
    OrderActivityListResponse,
    OrderActivity,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderAuthorizationAmounts,
    OrderDeliveryDestination,
    OrderDeliveryDestinationRecipient,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardAllocation,
    OrderGiftCardSettlement,
    OrderGiftCardSelection,
    OrderLineItemFulfillmentQuantities,
    OrderLineItemFulfillmentRequirements,
    OrderLineItemFulfillmentComponent,
    OrderLineItemFulfillmentProfile,
    OrderCalculatedLineItemTax
} from '../declarations/types-36.js';
export type {
    MeListRefundsParams,
    MeListReturnsParams,
    MeListShipmentsParams,
    MeListSubscriptionPaymentRetriesParams,
    MeListSubscriptionsParams,
    MePauseSubscriptionParams,
    MeRemoveGiftCardParams,
    MeRenewSubscriptionParams,
    MeResumeSubscriptionParams,
    MeRevokeSessionParams,
    MeSaveGiftCardParams,
    MeSendOrderReceiptParams,
    MeSkipSubscriptionCycleParams,
    MeUpdateParams,
    MeUpdateAddressParams,
    MeUpdateEmailPreferencesParams,
    MeUpdateSubscriptionParams,
    MeUpdateSubscriptionLineItemParams,
    Merchant,
    MerchantAccountSession,
    MerchantAccountSessionClientSession,
    MerchantAccountSessionCreateRequest,
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionEffectivePolicy,
    MerchantAccountSessionRefreshRequest,
    MerchantAccountSessionRefreshRequestInput,
    MerchantAccountSessionResponse,
    MerchantAccountSessionStripe,
    MerchantAccountSessionStripeCollectionOptions,
    MerchantAccountSessionStripeComponent,
    MerchantAccountSessionStripeRequirements,
    MerchantBillingBalance,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalanceResponse,
    MerchantBillingEntry,
    MerchantBillingEntryListResponse,
    MerchantBillingInvoice,
    MerchantBillingInvoiceLineItem,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantReadiness,
    MerchantResponse,
    MerchantWebhookEnvelope,
    MetadataMap,
    MetadataPatchRequest,
    MetadataPatchRequestInput,
    MetadataRequestInput,
    MerchantAccountSessionsCreateParams,
    MerchantGetParams,
    MerchantBillingBalancesGetParams,
    MerchantBillingInvoicesGetParams,
    MerchantBillingBalancesListParams,
    MerchantBillingEntriesListParams,
    MerchantBillingInvoicesListParams,
    MerchantAccountSessionsRefreshParams,
    MerchantUpdateParams
} from '../declarations/types-34.js';
export type {
    ClientOptions,
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTheme,
    CheckoutTipConfig,
    CheckoutSessionsListDeliverySelectionsParams,
    ConfigurationVersionRequestInput
} from '../declarations/types-5.js';
export type {
    CancelReturnRequestInput,
    CancelSubscriptionRequestInput,
    CategoryReference,
    CheckoutRedirectsRequestInput,
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
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CardDetails,
    CapabilityReadiness
} from '../declarations/types-4.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type {
    Credentials,
    CreditNoteLineItem,
    CreditNoteCorrectionRequest,
    CreditNoteCorrectionRequestQuantity,
    CreditNoteCorrectionRequestAmount,
    CreditNotesListAllocationsParams
} from '../declarations/types-12.js';
export type {
    ReturnFinancialSummary,
    ResponseMeta,
    ResponseWarning,
    ReturnEligibilitySelectionInput,
    ReturnEligibilityLineItemRequestInput,
    ReturnEligibilitySelectionAllRemainingFulfilledInput,
    ReturnEligibilitySelectionLineItemsInput,
    ReturnEligibilitySelection,
    ReturnEligibilityLineItemRequest,
    ReturnEligibilitySelectionAllRemainingFulfilled,
    ReturnEligibilitySelectionLineItems,
    ResourceVersionRequestInput
} from '../declarations/types-48.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type {
    ReturnResolutionLineItemRequest,
    ReturnResolutionLineItemRequestInput,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem
} from '../declarations/types-50.js';
export type {
    SelectedProductOption,
    SubscriptionAddressVerification,
    StripeClientSetup,
    StripeClientSetupStripe,
    StripeClientAuthority,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SubscribedLine,
    SettlementAmounts,
    SkipMeSubscriptionCycleRequestInput
} from '../declarations/types-53.js';
export type {
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal,
    ReturnLineItemValue,
    ReturnLineItemRequestInput,
    ReturnReasonSummary
} from '../declarations/types-49.js';
export type { Image, ImageAttachment, ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput } from '../declarations/types-25.js';
export type {
    ReadinessMerchantAccountSession,
    PurchasedGiftCard,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    ReadinessAction,
    ReadinessRequirements,
    ReadinessAxis
} from '../declarations/types-46.js';
export type {
    SubscriptionIntervalOption,
    SubscriptionDelivery,
    SubscriptionDeliveryMethodSummary,
    SubscriptionDeliveryDestination,
    SubscriptionDeliveryHold,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionDeliveryOption,
    SubscriptionDeliveryRequestInput
} from '../declarations/types-54.js';
export type {
    DeliveryRecipientResource,
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryRecipientRequirement,
    DeliveryQuoteLineItemResource
} from '../declarations/types-18.js';
export type {
    TextModifierRequest,
    TaxIdentity,
    TaxJurisdiction,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TaxCalculationRequest,
    TaxComponentRequest,
    TicketedEvent,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation
} from '../declarations/types-57.js';
export type {
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever
} from '../declarations/types-45.js';
export type { SubscriptionPlanSwapVariant } from '../declarations/types-55.js';
export type {
    OrderLineItemTax,
    OrderPaymentAttemptPaymentMethodSave,
    OrderLineItemModifier,
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderReturnCreditSettlement,
    OrderTaxExemption
} from '../declarations/types-37.js';
export type {
    ConfirmEmailChangeRequestInput,
    CreateCustomerAddressRequestInput,
    ConfirmEmailChangeRequest,
    ConfirmReturnResolutionRequestInput
} from '../declarations/types-6.js';
export type { CreateEmailChangeRequestInput, CreateEmailChangeRequest } from '../declarations/types-7.js';
export type { InvoiceCheckoutSessionRequestInput } from '../declarations/types-28.js';
export type {
    PaymentAttemptGiftCardRedemption,
    PaymentClientAction,
    PaymentErrorSummary,
    PaymentFulfillmentHold,
    PauseSubscriptionRequestInput,
    PauseSubscriptionRequest
} from '../declarations/types-40.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PickupFulfillmentDetails,
    PricingAmounts,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary
} from '../declarations/types-43.js';
export type {
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    CustomersCreateAddressParams,
    CustomersDeleteAddressParams,
    CustomersUpdateAddressParams
} from '../declarations/types-14.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-15.js';
export type {
    DeliveryWindowRequest,
    DeliveryShipmentDetails,
    DeliverySelectionRecipientRequestInput,
    DeliverySelectionRecipientRequest
} from '../declarations/types-19.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-16.js';
export type {
    LegalSettings,
    LineItemInventorySnapshot,
    LineItemInventoryDemand,
    InvoicesCreateCheckoutSessionParams,
    InvoicesMarkUncollectibleParams
} from '../declarations/types-32.js';
export type {
    InvoicePaymentAttempt,
    InvoicePaymentOptionCostComparison,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth
} from '../declarations/types-30.js';
export type {
    SaveMePaymentMethodRequestInput,
    SaveMeGiftCardRequestInput,
    SaveMeGiftCardRequestCodeInput,
    SaveMeGiftCardRequestRecipientAccessInput
} from '../declarations/types-52.js';
export type { CreateReturnEligibilityPreviewRequestInput } from '../declarations/types-10.js';
export type { GetOrCreateReturnResolutionCheckoutSessionRequestInput, GiftCardCustomAmountBounds } from '../declarations/types-23.js';
export type {
    CreateMeSubscriptionPreviewRequestInput,
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput
} from '../declarations/types-8.js';
export type { DocumentTaxID, DigitalFulfillmentDetails, Dimensions, DisputeResponseSessionStripeAccountSession } from '../declarations/types-20.js';
export type { FulfillmentRecipient } from '../declarations/types-22.js';
export type {
    InvoiceDocumentRow,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceDiscount,
    InvoiceLineItem
} from '../declarations/types-29.js';
export type {
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculationOnReceipt,
    InvoiceScheduleEntry,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleAmountSpecificationFixed,
    InvoiceScheduleAmountSpecificationPercentage,
    InvoiceScheduleAmountSpecificationRemainingBalance,
    InvoiceScheduleDue,
    InvoiceScheduleDueAtIssue,
    InvoiceScheduleDueDate,
    InvoiceScheduleDueInvoiceDueDate,
    InvoiceSnapshot,
    InvoiceTip
} from '../declarations/types-31.js';
export type { GiftCardPurchaseSnapshot, GiftCardProductConfiguration, GiftCardPurchaseRecipient } from '../declarations/types-24.js';
export type { PaymentRefund } from '../declarations/types-42.js';
export type {
    UpdateMeRequestInput,
    UpdateMeSubscriptionRequestInput,
    UpdateMeSubscriptionLineItemRequestInput,
    UpdateMerchantRequestInput,
    UpdateMeRequest,
    UpdateMeSubscriptionLineItemRequest
} from '../declarations/types-59.js';
export type {
    UpdateCustomerAddressRequestInput,
    UpdateCustomerEmailPreferencesRequestInput,
    UpdateCustomerEmailPreferencesRequest
} from '../declarations/types-58.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export {
    makeBuyerCreateReturnPreviewRequest,
    makeBuyerCreateReturnPreviewRequestEligibility,
    makeBuyerCreateReturnPreviewRequestResolution,
    makeBuyerCreateReturnRequest,
    makeBuyerCreateReturnResolutionPreviewRequest,
    makeBuyerReturnReplacementLineItemInputBundle,
    makeBuyerReturnReplacementLineItemInputVariant,
    makeBuyerReturnReplacementLineItemRequest,
    makeCancelReturnRequest,
    makeCancelSubscriptionRequest,
    makeCheckoutRedirectsRequest,
    makeConfigurationVersionRequest,
    makeConfirmEmailChangeRequest,
    makeConfirmReturnResolutionRequest
} from '../declarations/types-62.js';
export { makeCreateCustomerAddressRequest, makeCreateEmailChangeRequest } from '../declarations/types-63.js';
export {
    makeCreateMeSubscriptionPreviewRequest,
    makeCreateMeSubscriptionPreviewRequestDeliveryOptions,
    makeCreateMeSubscriptionPreviewRequestNextRenewal
} from '../declarations/types-64.js';
export {
    makeCreateReturnEligibilityPreviewRequest,
    makeCreditNoteCorrectionRequest,
    makeCreditNoteCorrectionRequestAmount,
    makeCreditNoteCorrectionRequestQuantity
} from '../declarations/types-65.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliverySelectionRecipientRequest,
    makeDeliveryWindowRequest,
    makeDimensions,
    makeGetOrCreateReturnResolutionCheckoutSessionRequest,
    makeImageInputFile,
    makeImageInputSourceURL
} from '../declarations/types-67.js';
export {
    makeImageRequest,
    makeInvoiceCheckoutSessionRequest,
    makeInvoiceLateFeePolicy,
    makeInvoiceLateFeePolicyFixed,
    makeInvoiceLateFeePolicyPercentage,
    makeInvoicePaymentTermCalculation,
    makeInvoicePaymentTermCalculationDayOfMonth,
    makeInvoicePaymentTermCalculationDayOfNextMonth,
    makeInvoicePaymentTermCalculationDaysAfterMonthEnd,
    makeInvoicePaymentTermCalculationNetDays,
    makeInvoicePaymentTermCalculationOnReceipt,
    makeInvoiceScheduleAmountSpecification,
    makeInvoiceScheduleAmountSpecificationFixed
} from '../declarations/types-68.js';
export {
    makeInvoiceScheduleAmountSpecificationPercentage,
    makeInvoiceScheduleAmountSpecificationRemainingBalance,
    makeMerchantAccountSessionCreateRequest,
    makeMerchantAccountSessionRefreshRequest,
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderCalculatedChargeTax,
    makeOrderCalculatedLineItemTax,
    makeOrderLineItemTax
} from '../declarations/types-69.js';
export { makePauseSubscriptionRequest } from '../declarations/types-70.js';
export {
    makePromotionRecurrence,
    makePromotionRecurrenceForever,
    makePromotionRecurrenceOnce,
    makePromotionRecurrenceRepeating,
    makeRenewSubscriptionRequest,
    makeResourceVersionRequest,
    makeReturnEligibilityLineItemRequest,
    makeReturnEligibilitySelection,
    makeReturnEligibilitySelectionAllRemainingFulfilled,
    makeReturnEligibilitySelectionLineItems,
    makeReturnLineItemRequest
} from '../declarations/types-71.js';
export {
    makeReturnResolutionLineItemRequest,
    makeSaveMeGiftCardRequest,
    makeSaveMeGiftCardRequestCode,
    makeSaveMeGiftCardRequestRecipientAccess,
    makeSaveMePaymentMethodRequest,
    makeSkipMeSubscriptionCycleRequest
} from '../declarations/types-72.js';
export {
    makeSubscriptionDeliveryDestinationInputAddress,
    makeSubscriptionDeliveryDestinationInputCustomerAddress,
    makeSubscriptionDeliveryDestinationRequest,
    makeSubscriptionDeliveryRequest,
    makeSubscriptionIntervalOption,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction,
    makeTextModifierRequest,
    makeUpdateCustomerAddressRequest,
    makeUpdateCustomerEmailPreferencesRequest
} from '../declarations/types-73.js';
export {
    makeUpdateMerchantRequest,
    makeUpdateMeRequest,
    makeUpdateMeSubscriptionLineItemRequest,
    makeUpdateMeSubscriptionRequest
} from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
export interface MeResource {
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is
 * refused once a receipt, inspection, disposition, or resolution exists.
 *
 * `POST /v1/me/returns/{return_id}/cancel`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/customer-account#cancelMeReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.cancelReturn("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "buyer_request"}, {
 * idempotencyKey: idempotencyKey })
 */
    cancelReturn(return_id: InputValue<string>, params: MeCancelReturnParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerReturn, BuyerReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Cancels a subscription and records who asked, why, and when in
 * cancellation_details. With cancel_immediately: true it ends now. Otherwise, trialing ends at
 * trial_end_at, active at current_period_end_at (or now when a renewal delivery hold has expired),
 * and past_due at next_retry_at instead of that retry. Scheduled, incomplete, paused, and past_due
 * without next_retry_at require cancel_immediately: true or return 409 ACTION_NOT_ALLOWED with
 * reason period_end_unavailable. Read scheduled_cancel_at for the scheduled end time. A buyer's
 * cancellation follows the store's customer_account.buyer_capabilities. Send expected_version to
 * reject a concurrent change.
 *
 * `POST /v1/me/subscriptions/{subscription_id}/cancel`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#cancelMeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.cancelSubscription("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {cancel_immediately: false,
 * cancellation_reason_code: "too_expensive"}, { idempotencyKey: idempotencyKey })
 */
    cancelSubscription(subscription_id: InputValue<string>, params: MeCancelSubscriptionParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerSubscription, BuyerSubscriptionResponse>>;
    /**
 * Confirms possession of the current and new email addresses, then atomically updates the customer
 * account in the selected merchant environment. Omit current_email_code only when
 * current_email_confirmation_required is false. A successful confirmation signs the buyer out
 * everywhere at this store: it revokes every customer session, buyer access grant, and
 * Flint-hosted account session for the customer, including the session that made this request.
 * Sign the buyer in again with the new email.
 *
 * `POST /v1/me/email-change-requests/{email_change_request_id}/confirm`
 * @param email_change_request_id Flint email change request ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#confirmMeEmailChangeRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.confirmEmailChangeRequest("cecr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {new_email_code:
 * "123456"}, { idempotencyKey: idempotencyKey })
 */
    confirmEmailChangeRequest(email_change_request_id: InputValue<string>, params: MeConfirmEmailChangeRequestParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<EmailChangeRequest, EmailChangeRequestResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Saves an address for the buyer. The address becomes a default only when the request
 * sets is_default_billing or is_default_shipping, or later by setting those flags with PATCH,
 * including the buyer's first address. A default address is also the billing or shipping address
 * on the buyer's customer profile.
 *
 * `POST /v1/me/addresses`
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createAddress({address: {city: "Springfield", country: "US", line1: "100 Example
 * Street", postal_code: "62701", state: "IL"}, recipient_name: "Jordan Example"}, {
 * idempotencyKey: idempotencyKey })
 */
    createAddress(params: MeCreateAddressParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Asks the store to delete the buyer's account, or returns the request already
 * pending. The store approves or rejects it. Deletion anonymizes the customer: orders, payments,
 * and refunds stay without the buyer's identity.
 *
 * `POST /v1/me/deletion-requests`
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeDeletionRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createDeletionRequest({}, { idempotencyKey: idempotencyKey })
 */
    createDeletionRequest(params?: MeCreateDeletionRequestParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<CustomerDeletionRequest, CustomerDeletionRequestResponse>>;
    /**
 * Sends short-lived confirmation codes to the current and new email addresses. If the account has
 * no current email, only the new address must be confirmed. The customer email does not change
 * until confirmation succeeds. Limited to three attempts per 15 minutes, including attempts
 * rejected because the email is already used. A rejected attempt keeps any pending email change
 * request. Over the limit, the request returns 429 RATE_LIMIT_EXCEEDED with Retry-After set to the
 * whole seconds until the oldest counted attempt leaves the window, at least 1.
 *
 * `POST /v1/me/email-change-requests`
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeEmailChangeRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createEmailChangeRequest({new_email: "example@example.invalid"}, { idempotencyKey:
 * idempotencyKey })
 */
    createEmailChangeRequest(params: MeCreateEmailChangeRequestParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<EmailChangeRequest, EmailChangeRequestResponse>>;
    /**
 * Records the buyer's consent to save an independent store copy for off-session payments,
 * including subscriptions. Call only after the buyer agrees. Requires a live email-code buyer
 * login and an enabled Flint wallet at a Flint-hosted store account. Supply a flint_wallet_card_id
 * from listMeFlintWalletCards. Confirm client_setup with Stripe.js confirmSetup, then poll
 * `client.me.getPaymentMethod` until active before changing a subscription through
 * `client.me.updateSubscription` with payment_method_id. Setup may request authentication.
 * Removing the platform card or revoking store consent blocks the copy immediately.
 * Idempotency-Key is optional and scoped to the store, customer, card handle, and key. Responses
 * are retained for 24 hours. After a copy is revoked, retries with any key bound to that copy are
 * refused. Get new consent and use a new key to create another copy. Retry a lost response with
 * the same key. Concurrent requests for the same card at this store share one copy and setup. A
 * failed off-session charge can still require the buyer to return through the existing card-update
 * link. Accept an empty body or {}.
 *
 * `POST /v1/me/flint-wallet/cards/{flint_wallet_card_id}/store-setups`
 * @param flint_wallet_card_id The card's handle at this store.
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeFlintWalletStoreSetup
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createFlintWalletStoreSetup("fwc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    createFlintWalletStoreSetup(flint_wallet_card_id: InputValue<string>, params?: MeCreateFlintWalletStoreSetupParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerFlintWalletStoreSetup, BuyerFlintWalletStoreSetupResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns the current open invoice checkout session and aligned card attempt
 * when they still match the invoice balance and collection run. A newly created session and
 * attempt share the fixed expiration of the active invoice public-link generation. Unexpired
 * sessions are reused regardless of remaining lifetime; active payment work returns a resolving
 * conflict instead of creating competing collection. When the invoice's order has items to
 * deliver, a new session offers the delivery methods in
 * settings.checkout.default_delivery_method_ids, and the request returns 409 ACTION_NOT_ALLOWED
 * with reason configuration_required when those methods cannot deliver every item. return_url sets
 * where the checkout sends the buyer after paying. A reused session takes a new return_url only
 * until a payment starts on it, and keeps the one it has after that.
 *
 * `POST /v1/me/invoices/{invoice_id}/checkout-sessions`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeInvoiceCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createInvoiceCheckoutSession("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createInvoiceCheckoutSession(invoice_id: InputValue<string>, params?: MeCreateInvoiceCheckoutSessionParams, options?: RequestOptions<"customer" | "invoice">): Promise<WithResponseInfo<BuyerInvoiceCheckoutSessionResult, BuyerInvoiceCheckoutSessionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Starts saving a payment method for the buyer and returns the client setup to
 * confirm in the browser. The payment method is pending until setup succeeds.
 *
 * `POST /v1/me/payment-methods`
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMePaymentMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createPaymentMethod({type: "card"}, { idempotencyKey: idempotencyKey })
 */
    createPaymentMethod(params: MeCreatePaymentMethodParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerPaymentMethodWithSetup, BuyerSavePaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Requests a Return for one of the buyer's orders. An active return policy must cover
 * each line and leave the requested quantity eligible, or the request fails with 409
 * ACTION_NOT_ALLOWED with reason not_offered. Check can_buyer_request with
 * `client.me.createReturnPreview` first. The buyer's reason must be active and apply to the line,
 * and a policy that sends the request to review leaves the Return waiting for the store's
 * decision.
 *
 * `POST /v1/me/returns`
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createReturn({line_items: [{order_line_item_id: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * requested_quantity: 1, return_reason_id: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], order_id:
 * "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey })
 */
    createReturn(params: MeCreateReturnParams, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerReturn, BuyerReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Preview return eligibility or resolution amounts without creating a Return or
 * reserving quantity. Set mode to eligibility or resolution and send the matching input object.
 *
 * `POST /v1/me/return-previews`
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeReturnPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.createReturnPreview({mode: "eligibility", eligibility: {order_id:
 * "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", selection: {selection_type: "all_remaining_fulfilled"}}})
 */
    createReturnPreview(params: MeCreateReturnPreviewParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerReturnPreview, BuyerReturnPreviewResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Create or reuse a hosted or embedded checkout session for the buyer's balance on a
 * replacement order linked to this return resolution. Returns 200 when reusing an existing session
 * and 201 when creating one. Omit surface to use hosted. The same surface reuses the open session;
 * changing surface replaces an idle session and is refused while a payment is in progress. Use
 * redirects to set where the buyer goes after paying or canceling. The return_url field is an
 * alias for redirects.success_url on hosted checkout or payment_return_url on embedded checkout
 * and must be an address of the merchant's customer account. A reused session takes a new success
 * destination only until a payment starts, then keeps its existing destination.
 *
 * `POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions`
 * @param return_resolution_id Flint return resolution id.
 * @see
 * https://developers.withflintpay.com/docs/api/customer-account#createMeReturnResolutionCheckoutSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createReturnResolutionCheckoutSession("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined,
 * { idempotencyKey: idempotencyKey })
 */
    createReturnResolutionCheckoutSession(return_resolution_id: InputValue<string>, params?: MeCreateReturnResolutionCheckoutSessionParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerCheckoutSessionWithSecret, BuyerReturnResolutionCheckoutSessionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Starts one manual collection attempt
 * on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the
 * outcome. While cancellation is scheduled, a new buyer retry returns 409 ACTION_NOT_ALLOWED with
 * reason cancellation_scheduled and current_status past_due. First use
 * `client.me.updateSubscription` with cancel_at_period_end false to keep the subscription;
 * retry_payment becomes available again if the other retry conditions allow it. Only one retry may
 * be in progress at a time. Buyers can start a retry while fewer than 3 retries have been created
 * for the current billing period, counting the store's retries too. subscription_card_update
 * email-link sessions can start retries.
 *
 * `POST /v1/me/subscriptions/{subscription_id}/payment-retries`
 * @param subscription_id Flint subscription ID.
 * @see
 * https://developers.withflintpay.com/docs/api/customer-account#createMeSubscriptionPaymentRetry
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createSubscriptionPaymentRetry("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    createSubscriptionPaymentRetry(subscription_id: InputValue<string>, params: MeCreateSubscriptionPaymentRetryParams | undefined, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerSubscriptionPaymentRetry, BuyerSubscriptionPaymentRetryResponse>>;
    /**
 * Estimates a buyer's next subscription renewal, or lists delivery methods and rates for a
 * proposed destination, without changing the subscription. next_renewal includes recurring
 * promotions, shipping, and tax for the next charged cycle. Tax is null when no tax address is
 * available; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Requires a full buyer
 * session. A preview does not reserve inventory or guarantee a future shipping rate.
 *
 * `POST /v1/me/subscription-previews`
 * @see https://developers.withflintpay.com/docs/api/customer-account#createMeSubscriptionPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.createSubscriptionPreview({mode: "next_renewal", subscription_id:
 * "sub_00000000000000000000000000"})
 */
    createSubscriptionPreview(params: MeCreateSubscriptionPreviewParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<((BuyerSubscriptionPreview) | (SubscriptionRenewalPreview) | (Record<string, unknown>)), BuyerSubscriptionPreviewResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Deletes one of the buyer's saved addresses. Deleting the billing or shipping
 * default leaves the customer with none; Flint doesn't pick another address.
 *
 * `DELETE /v1/me/addresses/{customer_address_id}`
 * @param customer_address_id Flint customer address ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#deleteMeAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.deleteAddress("caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey
 * })
 */
    deleteAddress(customer_address_id: InputValue<string>, params?: MeDeleteAddressParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Deletes a saved payment method so it can no longer be used for future payments.
 * Returns the payment method with status archived, including when it was already archived.
 *
 * `DELETE /v1/me/payment-methods/{payment_method_id}`
 * @param payment_method_id Flint payment method ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#deleteMePaymentMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.deletePaymentMethod("pm_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    deletePaymentMethod(payment_method_id: InputValue<string>, params?: MeDeletePaymentMethodParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerPaymentMethod, BuyerPaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns the buyer's customer profile.
 *
 * `GET /v1/me`
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMe
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.get()
 */
    get(params?: MeGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerCustomer, BuyerCustomerResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's saved addresses.
 *
 * `GET /v1/me/addresses/{customer_address_id}`
 * @param customer_address_id Flint customer address ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getAddress("caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getAddress(customer_address_id: InputValue<string>, params?: MeGetAddressParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns one credit note with its lines, total, and the credit still
 * available to allocate.
 *
 * `GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}`
 * @param invoice_id Flint invoice ID.
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeCreditNote
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getCreditNote("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", "cn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getCreditNote(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: MeGetCreditNoteParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<WithResponseInfo<BuyerCreditNote, BuyerCreditNoteResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns the credit note document as application/pdf rather than a JSON
 * envelope. The PDF exists from issue onward and shows the credited lines, totals, and the invoice
 * it corrects. It uses your current branding, so a later download can differ in logo or colors,
 * but not in content.
 *
 * `GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf`
 * @param invoice_id Flint invoice ID.
 * @param credit_note_id Flint credit note ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeCreditNotePDF
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getCreditNotePDF("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", "cn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getCreditNotePDF(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: MeGetCreditNotePDFParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<Result<MeGetCreditNotePDFResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns the status of one of the buyer's deletion requests.
 *
 * `GET /v1/me/deletion-requests/{customer_deletion_request_id}`
 * @param customer_deletion_request_id Flint customer deletion request ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeDeletionRequest
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getDeletionRequest("cdel_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getDeletionRequest(customer_deletion_request_id: InputValue<string>, params?: MeGetDeletionRequestParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<CustomerDeletionRequest, CustomerDeletionRequestResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Returns which of the merchant's
 * optional email categories the customer's current email receives in the selected merchant
 * environment. A category the buyer never changed is on. Email preferences exist only for a
 * customer with an email: without one, the read returns 404 RESOURCE_NOT_FOUND. Receipts and other
 * transactional email always send.
 *
 * `GET /v1/me/email-preferences`
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeEmailPreferences
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getEmailPreferences()
 */
    getEmailPreferences(params?: MeGetEmailPreferencesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<CustomerEmailPreferences, CustomerEmailPreferencesResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's fulfillments.
 *
 * `GET /v1/me/fulfillments/{fulfillment_id}`
 * @param fulfillment_id Flint fulfillment ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeFulfillment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getFulfillment("ful_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getFulfillment(fulfillment_id: InputValue<string>, params?: MeGetFulfillmentParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerFulfillment, BuyerFulfillmentResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code.
 *
 * `GET /v1/me/gift-cards/{gift_card_id}`
 * @param gift_card_id Flint gift card ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getGiftCard("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getGiftCard(gift_card_id: InputValue<string>, params?: MeGetGiftCardParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerGiftCard, BuyerGiftCardResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns one of the buyer's invoices. A draft invoice returns 404.
 *
 * `GET /v1/me/invoices/{invoice_id}`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeInvoice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getInvoice("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getInvoice(invoice_id: InputValue<string>, params?: MeGetInvoiceParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<WithResponseInfo<BuyerInvoice, BuyerInvoiceResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns the invoice document as application/pdf rather than a JSON
 * envelope.
 *
 * `GET /v1/me/invoices/{invoice_id}/pdf`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeInvoicePDF
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getInvoicePDF("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getInvoicePDF(invoice_id: InputValue<string>, params?: MeGetInvoicePDFParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<Result<MeGetInvoicePDFResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's orders.
 *
 * `GET /v1/me/orders/{order_id}`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeOrder
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getOrder("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getOrder(order_id: InputValue<string>, params?: MeGetOrderParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerOrder, BuyerOrderResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's packages.
 *
 * `GET /v1/me/packages/{package_id}`
 * @param package_id Flint package ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMePackage
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getPackage("pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPackage(package_id: InputValue<string>, params?: MeGetPackageParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerPackage, BuyerPackageResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's payments.
 *
 * `GET /v1/me/payment-intents/{payment_intent_id}`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMePaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getPaymentIntent("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPaymentIntent(payment_intent_id: InputValue<string>, params?: MeGetPaymentIntentParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerPaymentIntent, BuyerPaymentIntentResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's saved payment methods.
 *
 * `GET /v1/me/payment-methods/{payment_method_id}`
 * @param payment_method_id Flint payment method ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMePaymentMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getPaymentMethod("pm_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getPaymentMethod(payment_method_id: InputValue<string>, params?: MeGetPaymentMethodParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerPaymentMethod, BuyerPaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's refunds.
 *
 * `GET /v1/me/refunds/{refund_id}`
 * @param refund_id Flint refund ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getRefund("ref_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getRefund(refund_id: InputValue<string>, params?: MeGetRefundParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerRefund, BuyerRefundResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's Returns.
 *
 * `GET /v1/me/returns/{return_id}`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getReturn("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getReturn(return_id: InputValue<string>, params?: MeGetReturnParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerReturn, BuyerReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns a buyer-visible Return resolution, including the amount the buyer needs to
 * pay. Use the checkout_session action to pay its balance.
 *
 * `GET /v1/me/return-resolutions/{return_resolution_id}`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getReturnResolution("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getReturnResolution(return_resolution_id: InputValue<string>, params?: MeGetReturnResolutionParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerReturnResolution, BuyerReturnResolutionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's shipments.
 *
 * `GET /v1/me/shipments/{shipment_id}`
 * @param shipment_id Flint shipment ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeShipment
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getShipment("shp_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getShipment(shipment_id: InputValue<string>, params?: MeGetShipmentParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerShipment, BuyerShipmentResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's subscriptions. subscription_plan is always included
 * without expand: the plan's current summary, or null when the subscription has no plan.
 *
 * `GET /v1/me/subscriptions/{subscription_id}`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getSubscription("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getSubscription(subscription_id: InputValue<string>, params?: MeGetSubscriptionParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerSubscription, BuyerSubscriptionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Returns one durable manual
 * subscription payment retry.
 *
 * `GET /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}`
 * @param subscription_id Flint subscription ID.
 * @param subscription_payment_retry_id Flint subscription payment retry ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#getMeSubscriptionPaymentRetry
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.getSubscriptionPaymentRetry("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "spr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getSubscriptionPaymentRetry(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: MeGetSubscriptionPaymentRetryParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerSubscriptionPaymentRetry, BuyerSubscriptionPaymentRetryResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's saved addresses with their billing and shipping default flags.
 * Default order: created_at descending, then customer_address_id descending.
 *
 * `GET /v1/me/addresses`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeAddresses
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listAddresses()
 */
    listAddresses(params?: MeListAddressesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<CustomerAddressListResponse, CustomerAddressListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeAddresses
     */
    listAddressesPages(params?: MeListAddressesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<CustomerAddressListResponse, CustomerAddressListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeAddresses
     */
    listAddressesItems(params?: MeListAddressesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerAddress>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Lists the credit notes issued against this invoice, newest first. Default
 * order: issued_at descending, then credit_note_id descending.
 *
 * `GET /v1/me/invoices/{invoice_id}/credit-notes`
 * @param invoice_id Flint invoice ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeCreditNotes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listCreditNotes("inv_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listCreditNotes(invoice_id: InputValue<string>, params?: MeListCreditNotesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<WithResponseInfo<BuyerCreditNoteListResponse, BuyerCreditNoteListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeCreditNotes
     */
    listCreditNotesPages(invoice_id: InputValue<string>, params?: MeListCreditNotesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<WithResponseInfo<BuyerCreditNoteListResponse, BuyerCreditNoteListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeCreditNotes
     */
    listCreditNotesItems(invoice_id: InputValue<string>, params?: MeListCreditNotesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<BuyerCreditNote>;
    /**
 * Uses the customer identity fixed by the customer session. Lists the current buyer's deletion
 * requests in the selected merchant environment, newest first by requested_at. Default order:
 * requested_at descending, then customer_deletion_request_id descending.
 *
 * `GET /v1/me/deletion-requests`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeDeletionRequests
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listDeletionRequests()
 */
    listDeletionRequests(params?: MeListDeletionRequestsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<CustomerDeletionRequestListResponse, CustomerDeletionRequestListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeDeletionRequests
     */
    listDeletionRequestsPages(params?: MeListDeletionRequestsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<CustomerDeletionRequestListResponse, CustomerDeletionRequestListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeDeletionRequests
     */
    listDeletionRequestsItems(params?: MeListDeletionRequestsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerDeletionRequest>;
    /**
 * Returns the current buyer's usable wallet cards in newest-first order. Each flint_wallet_card_id
 * is an opaque per-store handle. store_payment_method_id is null until this store holds a copy.
 * Requires a customer session minted from a live email-code buyer login at a Flint-hosted store
 * account, including a login narrowed to a custom domain. Email links, checkout sessions, grants,
 * merchant-created sessions, and API keys receive 404. Live and sandbox wallets are isolated. The
 * full card collection is returned in one page. Flint wallet support must be enabled. Default
 * order: most recently added card first.
 *
 * `GET /v1/me/flint-wallet/cards`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeFlintWalletCards
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listFlintWalletCards()
 */
    listFlintWalletCards(params?: MeListFlintWalletCardsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerFlintWalletCardListResponse, BuyerFlintWalletCardListResponse>>;
    /**
 * Lists fulfillment events for an order owned by the current buyer, ordered by occurred_at
 * descending. Internal merchant fields are omitted. order_id is required. Default order:
 * occurred_at descending, then fulfillment_event_id descending.
 *
 * `GET /v1/me/fulfillment-events`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeFulfillmentEvents
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listFulfillmentEvents({order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"})
 */
    listFulfillmentEvents(params: MeListFulfillmentEventsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerFulfillmentEventListResponse, BuyerFulfillmentEventListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeFulfillmentEvents
     */
    listFulfillmentEventsPages(params: MeListFulfillmentEventsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerFulfillmentEventListResponse, BuyerFulfillmentEventListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeFulfillmentEvents
     */
    listFulfillmentEventsItems(params: MeListFulfillmentEventsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerFulfillmentEvent>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists fulfillments for the buyer's orders, newest created first. Default order:
 * created_at descending, then fulfillment_id descending.
 *
 * `GET /v1/me/fulfillments`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeFulfillments
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listFulfillments()
 */
    listFulfillments(params?: MeListFulfillmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerFulfillmentListResponse, BuyerFulfillmentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeFulfillments
     */
    listFulfillmentsPages(params?: MeListFulfillmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerFulfillmentListResponse, BuyerFulfillmentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeFulfillments
     */
    listFulfillmentsItems(params?: MeListFulfillmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerFulfillment>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Lists valid saved cards by saved time then card ID, descending.
 * Default order: time the buyer saved the card (descending), then gift_card_id descending.
 *
 * `GET /v1/me/gift-cards`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeGiftCards
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listGiftCards()
 */
    listGiftCards(params?: MeListGiftCardsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerGiftCardListResponse, BuyerGiftCardListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeGiftCards
     */
    listGiftCardsPages(params?: MeListGiftCardsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerGiftCardListResponse, BuyerGiftCardListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeGiftCards
     */
    listGiftCardsItems(params?: MeListGiftCardsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCard>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Lists the full anonymous balance-change history by per-card
 * sequence, descending. Other holders' identities and order references are omitted. Default order:
 * sequence descending; this key uniquely orders the results.
 *
 * `GET /v1/me/gift-cards/{gift_card_id}/transactions`
 * @param gift_card_id Flint gift card ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeGiftCardTransactions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listGiftCardTransactions("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listGiftCardTransactions(gift_card_id: InputValue<string>, params?: MeListGiftCardTransactionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerGiftCardTransactionListResponse, BuyerGiftCardTransactionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeGiftCardTransactions
     */
    listGiftCardTransactionsPages(gift_card_id: InputValue<string>, params?: MeListGiftCardTransactionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerGiftCardTransactionListResponse, BuyerGiftCardTransactionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeGiftCardTransactions
     */
    listGiftCardTransactionsItems(gift_card_id: InputValue<string>, params?: MeListGiftCardTransactionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCardTransaction>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's invoices. Draft invoices are never returned. Default order:
 * created_at descending, then invoice_id descending.
 *
 * `GET /v1/me/invoices`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeInvoices
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listInvoices()
 */
    listInvoices(params?: MeListInvoicesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerInvoiceListResponse, BuyerInvoiceListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeInvoices
     */
    listInvoicesPages(params?: MeListInvoicesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerInvoiceListResponse, BuyerInvoiceListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeInvoices
     */
    listInvoicesItems(params?: MeListInvoicesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerInvoice>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns a read-only, human-readable history log for an order. Use it to render
 * timelines and debug what happened, not as a source of truth, ledger, or webhook replacement.
 * Read the owning resource for authoritative state: the order for balances and status, the payment
 * for payment state, the refund for refund outcomes, and the checkout session for checkout state.
 * Do not sum balance_delta_money to compute an order balance. Informational rows such as
 * payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The
 * default order is newest first. Use sort_direction=asc for chronological timeline rendering. A
 * typical chronological log might show created, payment_failed, payment, refund, then
 * refund_failed; each row gives one reference to click through for the authoritative resource.
 * Default order: created_at descending, then order_activity_id descending.
 *
 * `GET /v1/me/orders/{order_id}/activities`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeOrderActivities
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listOrderActivities("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listOrderActivities(order_id: InputValue<string>, params?: MeListOrderActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<OrderActivityListResponse, OrderActivityListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeOrderActivities
     */
    listOrderActivitiesPages(order_id: InputValue<string>, params?: MeListOrderActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<OrderActivityListResponse, OrderActivityListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeOrderActivities
     */
    listOrderActivitiesItems(order_id: InputValue<string>, params?: MeListOrderActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<OrderActivity>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's orders. Default order: created_at descending, then order_id
 * descending.
 *
 * `GET /v1/me/orders`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeOrders
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listOrders()
 */
    listOrders(params?: MeListOrdersParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerOrderListResponse, BuyerOrderListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeOrders
     */
    listOrdersPages(params?: MeListOrdersParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerOrderListResponse, BuyerOrderListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeOrders
     */
    listOrdersItems(params?: MeListOrdersParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerOrder>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists packages in the buyer's shipments, newest created first. Default order:
 * created_at descending, then package_id descending.
 *
 * `GET /v1/me/packages`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMePackages
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listPackages()
 */
    listPackages(params?: MeListPackagesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerPackageListResponse, BuyerPackageListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMePackages
     */
    listPackagesPages(params?: MeListPackagesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerPackageListResponse, BuyerPackageListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMePackages
     */
    listPackagesItems(params?: MeListPackagesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPackage>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's payments. Default order: created_at descending, then
 * payment_intent_id descending.
 *
 * `GET /v1/me/payment-intents`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMePaymentIntents
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listPaymentIntents()
 */
    listPaymentIntents(params?: MeListPaymentIntentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerPaymentIntentListResponse, BuyerPaymentIntentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMePaymentIntents
     */
    listPaymentIntentsPages(params?: MeListPaymentIntentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerPaymentIntentListResponse, BuyerPaymentIntentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMePaymentIntents
     */
    listPaymentIntentsItems(params?: MeListPaymentIntentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPaymentIntent>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists payment methods in every status except archived, newest first. Filter by
 * status=active for the cards you can charge. Filter by usage off_session to list the payment
 * methods a subscription, automatic invoice, or default payment method can use. Default order:
 * created_at descending, then payment_method_id descending.
 *
 * `GET /v1/me/payment-methods`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMePaymentMethods
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listPaymentMethods()
 */
    listPaymentMethods(params?: MeListPaymentMethodsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerPaymentMethodListResponse, BuyerPaymentMethodListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMePaymentMethods
     */
    listPaymentMethodsPages(params?: MeListPaymentMethodsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerPaymentMethodListResponse, BuyerPaymentMethodListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMePaymentMethods
     */
    listPaymentMethodsItems(params?: MeListPaymentMethodsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPaymentMethod>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's refunds. Default order: created_at descending, then refund_id
 * descending.
 *
 * `GET /v1/me/refunds`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeRefunds
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listRefunds()
 */
    listRefunds(params?: MeListRefundsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerRefundListResponse, BuyerRefundListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeRefunds
     */
    listRefundsPages(params?: MeListRefundsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerRefundListResponse, BuyerRefundListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeRefunds
     */
    listRefundsItems(params?: MeListRefundsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerRefund>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's Returns. Filter by order, return number, reason, status,
 * decision, merchandise, resolution, or creation and update time. Default order: created_at
 * descending, then return_id descending.
 *
 * `GET /v1/me/returns`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeReturns
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listReturns()
 */
    listReturns(params?: MeListReturnsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerReturnListResponse, BuyerReturnListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeReturns
     */
    listReturnsPages(params?: MeListReturnsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerReturnListResponse, BuyerReturnListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeReturns
     */
    listReturnsItems(params?: MeListReturnsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerReturn>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists shipments for the buyer's orders and Returns, newest created first. Default
 * order: created_at descending, then shipment_id descending.
 *
 * `GET /v1/me/shipments`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeShipments
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listShipments()
 */
    listShipments(params?: MeListShipmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerShipmentListResponse, BuyerShipmentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeShipments
     */
    listShipmentsPages(params?: MeListShipmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerShipmentListResponse, BuyerShipmentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeShipments
     */
    listShipmentsItems(params?: MeListShipmentsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerShipment>;
    /**
 * Returns a subscription's manual payment retries, newest first. Default order: created_at
 * descending, then subscription_payment_retry_id descending.
 *
 * `GET /v1/me/subscriptions/{subscription_id}/payment-retries`
 * @param subscription_id Flint subscription ID.
 * @see
 * https://developers.withflintpay.com/docs/api/customer-account#listMeSubscriptionPaymentRetries
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listSubscriptionPaymentRetries("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listSubscriptionPaymentRetries(subscription_id: InputValue<string>, params?: MeListSubscriptionPaymentRetriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerSubscriptionPaymentRetryListResponse, BuyerSubscriptionPaymentRetryListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/customer-account#listMeSubscriptionPaymentRetries
     */
    listSubscriptionPaymentRetriesPages(subscription_id: InputValue<string>, params?: MeListSubscriptionPaymentRetriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerSubscriptionPaymentRetryListResponse, BuyerSubscriptionPaymentRetryListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/customer-account#listMeSubscriptionPaymentRetries
     */
    listSubscriptionPaymentRetriesItems(subscription_id: InputValue<string>, params?: MeListSubscriptionPaymentRetriesParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerSubscriptionPaymentRetry>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's subscriptions. Subscriptions without a next_billing_at never
 * match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in
 * either direction. subscription_plan is always included without expand: the plan's current
 * summary, or null when the subscription has no plan. Default order: created_at descending, then
 * subscription_id descending.
 *
 * `GET /v1/me/subscriptions`
 * @see https://developers.withflintpay.com/docs/api/customer-account#listMeSubscriptions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.me.listSubscriptions()
 */
    listSubscriptions(params?: MeListSubscriptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerSubscriptionListResponse, BuyerSubscriptionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeSubscriptions
     */
    listSubscriptionsPages(params?: MeListSubscriptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<WithResponseInfo<BuyerSubscriptionListResponse, BuyerSubscriptionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/customer-account#listMeSubscriptions
     */
    listSubscriptionsItems(params?: MeListSubscriptionsParams, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerSubscription>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Pauses a subscription immediately, optionally for at least one billing cycle. A
 * pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause
 * length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with
 * reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause
 * follows the store's customer_account.buyer_capabilities. Send expected_version to reject a
 * concurrent change.
 *
 * `POST /v1/me/subscriptions/{subscription_id}/pause`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#pauseMeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.pauseSubscription("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {pause_duration_cycles: 2}, {
 * idempotencyKey: idempotencyKey })
 */
    pauseSubscription(subscription_id: InputValue<string>, params: MePauseSubscriptionParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerSubscription, BuyerSubscriptionResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Removes only this buyer's saved access without changing funds or
 * other holders' access. A repeated removal without an idempotency key returns 404 because saved
 * access is already absent. Reusing the same idempotency key replays the original removal snapshot
 * without restoring saved access. Idempotency keys are scoped to the buyer, merchant, environment,
 * and operation. A replay cannot restore removed or revoked saved access.
 *
 * `DELETE /v1/me/gift-cards/{gift_card_id}`
 * @param gift_card_id Flint gift card ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#removeMeGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.removeGiftCard("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    removeGiftCard(gift_card_id: InputValue<string>, params?: MeRemoveGiftCardParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerGiftCard, BuyerGiftCardResponse>>;
    /**
 * Charges the next renewal now, ships it when the subscription has delivery, and moves the next
 * billing date forward by one interval. Available while the subscription is active on a
 * Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end
 * of its period, is not in a trial, and has no delivery hold or renewal in progress. The
 * subscription's payment method must be active and allow off-session charges. Requires a full
 * buyer session and Idempotency-Key. Send expected_version to reject concurrent changes. Retry
 * with the same key to recover the same attempt. Returns the subscription, renewal order, and
 * payment attempt with status 200, including when the payment is declined. Inspect
 * order_payment_attempt.last_payment_error for a failed payment.
 *
 * `POST /v1/me/subscriptions/{subscription_id}/renew`
 * @param subscription_id Subscription ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#renewMeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.renewSubscription("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    renewSubscription(subscription_id: InputValue<string>, params: MeRenewSubscriptionParams, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<WithResponseInfo<BuyerSubscriptionRenewalResult, BuyerSubscriptionRenewalResultResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Asks Flint to resume a paused subscription. Returns 202 while the subscription is
 * still paused, with resume_requested_at set. Flint then makes it active, or past_due while an
 * overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays
 * paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails
 * with 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, PATCH the subscription with
 * cancel_at_period_end set to false.
 *
 * `POST /v1/me/subscriptions/{subscription_id}/resume`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#resumeMeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.resumeSubscription("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    resumeSubscription(subscription_id: InputValue<string>, params?: MeResumeSubscriptionParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerSubscription, BuyerSubscriptionResponse>>;
    /**
 * Signs out the current customer session using its current server-held secret, including after
 * expiry, after revocation, or after its parent buyer session or grant ended. Repeating the call
 * preserves revoked_at. A secret rotated away by refresh is invalid. Flint Account buyer sessions
 * remain independent.
 *
 * `POST /v1/me/session/revoke`
 * @see https://developers.withflintpay.com/docs/api/customer-account#revokeMeSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.revokeSession({}, { idempotencyKey: idempotencyKey })
 */
    revokeSession(params?: MeRevokeSessionParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<CustomerSession, CustomerSessionResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Idempotency keys are scoped to the buyer, merchant, environment,
 * and operation. A replay cannot restore removed or revoked saved access.
 *
 * `POST /v1/me/gift-cards`
 * @see https://developers.withflintpay.com/docs/api/customer-account#saveMeGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.saveGiftCard({credential_type: "code", code: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    saveGiftCard(params: MeSaveGiftCardParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerGiftCard, BuyerGiftCardResponse>>;
    /**
 * Queues a receipt email for one of your paid orders to the order's email. Requires Flint-managed
 * receipt delivery. Sending is limited to once every five minutes per order and normalized
 * recipient.
 *
 * `POST /v1/me/orders/{order_id}/send-receipt`
 * @param order_id Flint order ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#sendMeOrderReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.sendOrderReceipt("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    sendOrderReceipt(order_id: InputValue<string>, params?: MeSendOrderReceiptParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerOrder, BuyerOrderResponse>>;
    /**
 * Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves
 * forward by one of the subscription's billing intervals while preserving billing_anchor_day,
 * including in shorter months. Available when buyer skipping is enabled and the subscription is
 * active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel
 * at the end of its period, and is under the store's consecutive skip limit. Requires a full buyer
 * session. Send expected_version to reject concurrent changes.
 *
 * `POST /v1/me/subscriptions/{subscription_id}/skip-cycle`
 * @param subscription_id Subscription ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#skipMeSubscriptionCycle
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.skipSubscriptionCycle("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    skipSubscriptionCycle(subscription_id: InputValue<string>, params: MeSkipSubscriptionCycleParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerSubscription, BuyerSubscriptionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Updates the current buyer's name or
 * phone. Manage billing and shipping addresses through /v1/me/addresses.
 *
 * `PATCH /v1/me`
 * @see https://developers.withflintpay.com/docs/api/customer-account#updateMe
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.update({name: "Jordan Example"}, { idempotencyKey: idempotencyKey })
 */
    update(params: MeUpdateParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerCustomer, BuyerCustomerResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Changes the fields you send on one of the buyer's saved addresses. The address
 * field replaces the whole postal address. Send null for phone or label to remove it. Set
 * is_default_billing or is_default_shipping to true to make this address the default, or false to
 * clear a default it holds. Changing a default address also changes the matching address on the
 * buyer's customer profile.
 *
 * `PATCH /v1/me/addresses/{customer_address_id}`
 * @param customer_address_id Flint customer address ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#updateMeAddress
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateAddress("caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {label: "Home"}, { idempotencyKey:
 * idempotencyKey })
 */
    updateAddress(customer_address_id: InputValue<string>, params: MeUpdateAddressParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<CustomerAddress, CustomerAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Turns the optional email categories in
 * the body on or off for the customer's current email at this merchant in the selected merchant
 * environment, and leaves the others as they are. The setting follows the email address, so it
 * also covers guest checkouts with the same email. A customer without an email has no email
 * preferences, and the change returns 404 RESOURCE_NOT_FOUND.
 *
 * `PATCH /v1/me/email-preferences`
 * @see https://developers.withflintpay.com/docs/api/customer-account#updateMeEmailPreferences
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateEmailPreferences({checkout_reminders: false}, { idempotencyKey: idempotencyKey })
 */
    updateEmailPreferences(params: MeUpdateEmailPreferencesParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<CustomerEmailPreferences, CustomerEmailPreferencesResponse>>;
    /**
 * Updates payment_method_id, cancel_at_period_end: false, delivery, billing interval and quantity
 * when the matching buyer action is available. Send billing_interval and billing_interval_count
 * together. Mixed changes commit atomically. A scoped card-update session may send only
 * payment_method_id and expected_version. Send expected_version to reject concurrent changes. A
 * card whose setup hasn't finished returns 409 ACTION_NOT_ALLOWED with reason status_not_reached.
 * Once setup finishes, send a new request with a new Idempotency-Key.
 *
 * `PATCH /v1/me/subscriptions/{subscription_id}`
 * @param subscription_id Flint subscription ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#updateMeSubscription
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateSubscription("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 2}, { idempotencyKey:
 * idempotencyKey })
 */
    updateSubscription(subscription_id: InputValue<string>, params: MeUpdateSubscriptionParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerSubscription, BuyerSubscriptionResponse>>;
    /**
 * Swaps a subscription line to an offered variant for future renewals. Requires a full buyer
 * session. Send expected_version to reject concurrent changes. The replacement must remain
 * deliverable to the subscription destination.
 *
 * `PATCH /v1/me/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}`
 * @param subscription_id Subscription ID.
 * @param subscription_line_item_id Subscription line item ID.
 * @see https://developers.withflintpay.com/docs/api/customer-account#updateMeSubscriptionLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateSubscriptionLineItem("sub_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "sli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {variant_id: "var_00000000000000000000000000"}, {
 * idempotencyKey: idempotencyKey })
 */
    updateSubscriptionLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: MeUpdateSubscriptionLineItemParams, options?: RequestOptions<"customer">): Promise<WithResponseInfo<BuyerSubscription, BuyerSubscriptionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly me: MeResource;
}
