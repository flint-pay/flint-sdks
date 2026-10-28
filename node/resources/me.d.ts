import type { Result, InputValue } from '../runtime.js';
import type {
    BuyerCheckoutSessionWithSecret,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCreateReturnRequestInput,
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
    BuyerFulfillmentEventListResponse,
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
    BuyerOrder
} from '../declarations/types-1.js';
import type {
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
    BuyerReturnPreview,
    BuyerReturnPreviewResponse,
    BuyerReturnResolution,
    BuyerReturnResolutionCheckoutSessionResponse,
    BuyerReturnResolutionResponse,
    BuyerReturnResponse,
    BuyerSavePaymentMethodResponse,
    BuyerShipment,
    BuyerShipmentListResponse
} from '../declarations/types-2.js';
import type {
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
    BuyerSubscriptionResponse,
    CancelReturnRequestInput,
    CancelSubscriptionRequestInput
} from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { ConfirmEmailChangeRequestInput } from '../declarations/types-5.js';
import type { CreateCustomerAddressRequestInput, CreateEmailChangeRequestInput } from '../declarations/types-6.js';
import type {
    CustomerAddress,
    CustomerAddressListResponse,
    CustomerAddressResponse,
    CustomerDeletionRequest,
    CustomerDeletionRequestListResponse,
    CustomerDeletionRequestResponse,
    CustomerEmailPreferences,
    CustomerEmailPreferencesResponse
} from '../declarations/types-11.js';
import type { CustomerSession, CustomerSessionResponse } from '../declarations/types-12.js';
import type { EmailChangeRequest, EmailChangeRequestResponse } from '../declarations/types-18.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from '../declarations/types-20.js';
import type { InvoiceCheckoutSessionRequestInput } from '../declarations/types-28.js';
import type {
    MeCancelReturnInput,
    MeCancelSubscriptionInput,
    MeConfirmEmailChangeRequestInput,
    MeCreateAddressInput,
    MeCreateDeletionRequestInput,
    MeCreateEmailChangeRequestInput,
    MeCreateFlintWalletStoreSetupInput,
    MeCreateInvoiceCheckoutSessionInput,
    MeCreateReturnInput,
    MeCreateReturnPreviewInput,
    MeCreateReturnResolutionCheckoutSessionInput,
    MeCreateSubscriptionPaymentRetryInput,
    MeCreateSubscriptionPreviewInput,
    MeDeleteAddressInput,
    MeGetAddressInput,
    MeGetCreditNoteInput,
    MeGetCreditNotePDFInput,
    MeGetCreditNotePDFResponse,
    MeGetDeletionRequestInput,
    MeGetEmailPreferencesInput,
    MeGetFulfillmentInput,
    MeGetGiftCardInput,
    MeGetInput,
    MeGetInvoiceInput,
    MeGetInvoicePDFInput,
    MeGetInvoicePDFResponse,
    MeGetOrderInput,
    MeGetPackageInput,
    MeGetPaymentIntentInput,
    MeGetPaymentMethodInput,
    MeGetRefundInput,
    MeGetReturnInput,
    MeGetReturnResolutionInput,
    MeGetShipmentInput,
    MeGetSubscriptionInput,
    MeGetSubscriptionPaymentRetryInput,
    MeListAddressesInput,
    MeListCreditNotesInput,
    MeListDeletionRequestsInput,
    MeListFlintWalletCardsInput,
    MeListFulfillmentEventsInput,
    MeListFulfillmentsInput,
    MeListGiftCardTransactionsInput,
    MeListGiftCardsInput,
    MeListInvoicesInput,
    MeListOrderActivitiesInput,
    MeListOrdersInput,
    MeListPackagesInput,
    MeListPaymentIntentsInput,
    MeListPaymentMethodsInput,
    MeListRefundsInput,
    MeListReturnsInput
} from '../declarations/types-31.js';
import type {
    MeListShipmentsInput,
    MeListSubscriptionPaymentRetriesInput,
    MeListSubscriptionsInput,
    MePauseSubscriptionInput,
    MeRemoveGiftCardInput,
    MeRemovePaymentMethodInput,
    MeRenewSubscriptionInput,
    MeResumeSubscriptionInput,
    MeRevokeSessionInput,
    MeSaveGiftCardInput,
    MeSavePaymentMethodInput,
    MeSendOrderReceiptInput,
    MeSkipSubscriptionCycleInput,
    MeUpdateAddressInput,
    MeUpdateEmailPreferencesInput,
    MeUpdateInput,
    MeUpdateSubscriptionInput,
    MeUpdateSubscriptionLineItemInput,
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
    MerchantAccountSessionsCreateInput,
    MerchantAccountSessionsRefreshInput,
    MerchantBillingBalance,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalanceResponse,
    MerchantBillingBalancesGetInput,
    MerchantBillingBalancesListInput,
    MerchantBillingEntriesListInput,
    MerchantBillingEntry,
    MerchantBillingEntryListResponse,
    MerchantBillingInvoice,
    MerchantBillingInvoiceLineItem,
    MerchantBillingInvoiceListResponse,
    MerchantBillingInvoiceResponse,
    MerchantReadiness,
    MerchantResponse,
    MerchantSubscriptionInvoicesGetInput,
    MerchantSubscriptionInvoicesListInput,
    MerchantWebhookEnvelope,
    MerchantsGetInput,
    MerchantsUpdateInput,
    MetadataMap,
    MetadataPatchRequest,
    MetadataPatchRequestInput,
    MetadataRequestInput
} from '../declarations/types-32.js';
import type { OrderActivity, OrderActivityListResponse } from '../declarations/types-33.js';
import type { PauseSubscriptionRequestInput } from '../declarations/types-37.js';
import type { RenewSubscriptionRequestInput, RequestOptions, ResourceVersionRequestInput } from '../declarations/types-42.js';
import type { SaveMeGiftCardRequestInput, SaveMePaymentMethodRequestInput, SdkResponse } from '../declarations/types-46.js';
import type { SkipMeSubscriptionCycleRequestInput } from '../declarations/types-47.js';
import type { SubscriptionRenewalPreview } from '../declarations/types-49.js';
import type { UpdateCustomerAddressRequestInput, UpdateCustomerEmailPreferencesRequestInput } from '../declarations/types-50.js';
import type { UpdateMeRequestInput, UpdateMeSubscriptionLineItemRequestInput, UpdateMeSubscriptionRequestInput } from '../declarations/types-51.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    CancelReturnRequestInput,
    CancelSubscriptionRequestInput,
    BuyerSubscription,
    BuyerSubscriptionResponse,
    BuyerSubscriptionPaymentRetry,
    BuyerSubscriptionPaymentRetryResponse,
    BuyerSubscriptionPreview,
    BuyerSubscriptionPreviewResponse,
    BuyerShipmentResponse,
    BuyerSubscriptionPaymentRetryListResponse,
    BuyerSubscriptionListResponse,
    BuyerSubscriptionRenewalResult,
    BuyerSubscriptionRenewalResultResponse,
    BuyerSubscriptionCancellationDetails,
    BuyerSubscriptionLineItem,
    CategoryReference,
    BuyerSubscriptionServiceLocation,
    BuyerSubscriptionPlanLineItem,
    BuyerSubscriptionPlanLineItemVariant,
    BuyerSubscriptionPlanLineItemBundle,
    BuyerSubscriptionPlanLineItemCustom,
    CardDetails,
    BuyerTip,
    CapabilityReadiness
} from '../declarations/types-3.js';
export type {
    RequestOptions,
    RenewSubscriptionRequestInput,
    ResourceVersionRequestInput,
    ResponseMeta,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation
} from '../declarations/types-42.js';
export type {
    BuyerReturn,
    BuyerReturnResponse,
    BuyerPaymentMethodWithSetup,
    BuyerSavePaymentMethodResponse,
    BuyerReturnPreview,
    BuyerReturnPreviewResponse,
    BuyerReturnResolutionCheckoutSessionResponse,
    BuyerPaymentMethod,
    BuyerPaymentMethodResponse,
    BuyerOrderResponse,
    BuyerPackage,
    BuyerPackageResponse,
    BuyerPaymentIntent,
    BuyerPaymentIntentResponse,
    BuyerRefund,
    BuyerRefundResponse,
    BuyerReturnResolution,
    BuyerReturnResolutionResponse,
    BuyerShipment,
    BuyerOrderListResponse,
    BuyerPackageListResponse,
    BuyerPaymentIntentListResponse,
    BuyerPaymentMethodListResponse,
    BuyerRefundListResponse,
    BuyerReturnListResponse,
    BuyerShipmentListResponse,
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
    BuyerPaymentCollection,
    BuyerPaymentCollectionStripe,
    BuyerPaymentCollectionStripeElements,
    BuyerSelectableOrderPaymentIntent,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerReturnReplacementLineItemInputVariantInput,
    BuyerReturnReplacementLineItemInputBundleInput,
    BuyerReturnEligibilityPreview,
    BuyerReturnEligibilityPreviewLineItem,
    BuyerReturnPolicyEvaluation,
    BuyerReturnPolicyEvaluationLineItem,
    BuyerReturnResolutionPreview,
    BuyerReturnResolutionAdjustment,
    BuyerReturnPreviewEligibility,
    BuyerReturnPreviewResolution,
    BuyerOrderLineItem,
    BuyerOrderTax,
    BuyerOrderTaxLocation,
    BuyerReturnResolutionExecutionBlocker
} from '../declarations/types-2.js';
export type {
    SdkResponse,
    SaveMePaymentMethodRequestInput,
    SaveMeGiftCardRequestInput,
    SaveMeGiftCardRequestCodeInput,
    SaveMeGiftCardRequestRecipientAccessInput
} from '../declarations/types-46.js';
export type {
    ConfirmEmailChangeRequestInput,
    ConfirmEmailChangeRequest,
    ConfigurationVersionRequestInput,
    ConfirmReturnResolutionRequestInput
} from '../declarations/types-5.js';
export type {
    EmailChangeRequest,
    EmailChangeRequestResponse,
    ErrorRemediation,
    DocumentTaxID,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedOrganizationSummary,
    DisputeResponseSessionStripeAccountSession,
    FeedbackReportsListInput
} from '../declarations/types-18.js';
export type { CreateCustomerAddressRequestInput, CreateEmailChangeRequestInput, CreateEmailChangeRequest } from '../declarations/types-6.js';
export type {
    CustomerAddress,
    CustomerAddressResponse,
    CustomerDeletionRequest,
    CustomerDeletionRequestResponse,
    CustomerEmailPreferences,
    CustomerEmailPreferencesResponse,
    CustomerAddressListResponse,
    CustomerDeletionRequestListResponse,
    Credentials,
    CreditNoteLineItem,
    CreditNoteCorrectionRequest,
    CreditNoteCorrectionRequestQuantity,
    CreditNoteCorrectionRequestAmount
} from '../declarations/types-11.js';
export type {
    BuyerFlintWalletStoreSetup,
    BuyerFlintWalletStoreSetupResponse,
    BuyerInvoiceCheckoutSessionResult,
    BuyerInvoiceCheckoutSessionResponse,
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCheckoutSessionWithSecret,
    BuyerCustomer,
    BuyerCustomerResponse,
    BuyerCreditNote,
    BuyerCreditNoteResponse,
    BuyerFulfillment,
    BuyerFulfillmentResponse,
    BuyerGiftCard,
    BuyerGiftCardResponse,
    BuyerInvoice,
    BuyerInvoiceResponse,
    BuyerOrder,
    BuyerCreditNoteListResponse,
    BuyerFlintWalletCardListResponse,
    BuyerFulfillmentEventListResponse,
    BuyerFulfillmentEvent,
    BuyerFulfillmentListResponse,
    BuyerGiftCardListResponse,
    BuyerGiftCardTransactionListResponse,
    BuyerGiftCardTransaction,
    BuyerInvoiceListResponse,
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BundleComponent,
    BundleComponentVariantSummary,
    BuyerExpandedSubscriptionPlanSummary,
    BuyerCheckoutSession,
    BuyerErrorRemediation,
    BuyerInstructionsConfig,
    BuyerCheckoutProblemResource,
    BuyerCreateReturnResolutionPreviewRequestInput,
    BuyerCreateReturnPreviewRequestEligibilityInput,
    BuyerCreateReturnPreviewRequestResolutionInput,
    BuyerFulfillmentLineItem,
    BuyerDeliveryFulfillmentDetails,
    BuyerExpandedOrderSummary,
    BuyerFulfillmentOutcome,
    BuyerInvoiceLateFee,
    BuyerOrderCharge,
    BuyerFlintWalletCard
} from '../declarations/types-1.js';
export type {
    InvoiceCheckoutSessionRequestInput,
    InvoicePaymentAttempt,
    InvoiceDocumentRow,
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyFixed,
    InvoiceLateFeePolicyPercentage,
    InvoiceDiscount,
    InvoiceLineItem
} from '../declarations/types-28.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency, Weight } from '../declarations/types-65.js';
export type {
    GetOrCreateReturnResolutionCheckoutSessionRequestInput,
    GiftCardProductConfiguration,
    GiftCardCustomAmountBounds
} from '../declarations/types-20.js';
export type {
    MeCreateSubscriptionPreviewInput,
    MeGetCreditNotePDFResponse,
    MeGetInvoicePDFResponse,
    MeCancelReturnInput,
    MeCancelSubscriptionInput,
    MeConfirmEmailChangeRequestInput,
    MeCreateAddressInput,
    MeCreateDeletionRequestInput,
    MeCreateEmailChangeRequestInput,
    MeCreateFlintWalletStoreSetupInput,
    MeCreateInvoiceCheckoutSessionInput,
    MeCreateReturnInput,
    MeCreateReturnPreviewInput,
    MeCreateReturnResolutionCheckoutSessionInput,
    MeCreateSubscriptionPaymentRetryInput,
    MeDeleteAddressInput,
    MeGetInput,
    MeGetAddressInput,
    MeGetCreditNoteInput,
    MeGetCreditNotePDFInput,
    MeGetDeletionRequestInput,
    MeGetEmailPreferencesInput,
    MeGetFulfillmentInput,
    MeGetGiftCardInput,
    MeGetInvoiceInput,
    MeGetInvoicePDFInput,
    MeGetOrderInput,
    MeGetPackageInput,
    MeGetPaymentIntentInput,
    MeGetPaymentMethodInput,
    MeGetRefundInput,
    MeGetReturnInput,
    MeGetReturnResolutionInput,
    MeGetShipmentInput,
    MeGetSubscriptionInput,
    MeGetSubscriptionPaymentRetryInput,
    MeListAddressesInput,
    MeListCreditNotesInput,
    MeListDeletionRequestsInput,
    MeListFlintWalletCardsInput,
    MeListFulfillmentEventsInput,
    MeListFulfillmentsInput,
    MeListGiftCardsInput,
    MeListGiftCardTransactionsInput,
    MeListInvoicesInput,
    MeListOrderActivitiesInput,
    MeListOrdersInput,
    MeListPackagesInput,
    MeListPaymentIntentsInput,
    MeListPaymentMethodsInput,
    MeListRefundsInput,
    MeListReturnsInput
} from '../declarations/types-31.js';
export type {
    SubscriptionRenewalPreview,
    SubscriptionPromotion,
    SubscriptionPlanSwapVariant,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionRenewalEstimate,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem,
    TaxBreakdown,
    TaxBreakdownPercentage,
    TaxBreakdownFlatAmount,
    TaxCalculationRequest,
    TaxComponentRequest
} from '../declarations/types-49.js';
export type {
    OrderActivityListResponse,
    OrderActivity,
    MoneyValue,
    NextAction,
    NextActionMerchantAccountSession,
    OrderCharge,
    OrderCalculatedChargeTax,
    OrderAuthorizationAmounts,
    OrderCalculatedLineItemTax
} from '../declarations/types-33.js';
export type {
    PauseSubscriptionRequestInput,
    PaymentAttemptGiftCardRedemption,
    PaymentClientAction,
    PaymentErrorSummary,
    PaymentFulfillmentHold
} from '../declarations/types-37.js';
export type {
    CustomerSession,
    CustomerSessionResponse,
    DeliveryAddressAdvisoryResource,
    DeliveryCandidateOutcomeResource,
    DeliveryArrivalEstimate,
    DeliveryCandidateOutcomeResourceAvailable,
    CustomersGetDeletionRequestInput
} from '../declarations/types-12.js';
export type {
    SkipMeSubscriptionCycleRequestInput,
    SelectedProductOption,
    SubscriptionAddressVerification,
    StripeClientSetup,
    StripeClientSetupStripe,
    StripeClientAuthority,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SubscribedLine
} from '../declarations/types-47.js';
export type {
    UpdateMeRequestInput,
    UpdateMeSubscriptionRequestInput,
    UpdateMeSubscriptionLineItemRequestInput,
    UpdateMerchantRequestInput
} from '../declarations/types-51.js';
export type {
    UpdateCustomerAddressRequestInput,
    UpdateCustomerEmailPreferencesRequestInput,
    TextModifierRequest,
    TaxIdentity,
    TaxJurisdiction,
    TicketedEvent,
    TipPaymentIntentAllocation,
    TipValueSettlementAllocation
} from '../declarations/types-50.js';
export type {
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
    MeSavePaymentMethodInput,
    MerchantAccountSessionsCreateInput,
    MeRemovePaymentMethodInput,
    MerchantsGetInput,
    MerchantBillingBalancesGetInput,
    MerchantSubscriptionInvoicesGetInput,
    MerchantBillingBalancesListInput,
    MerchantBillingEntriesListInput,
    MerchantSubscriptionInvoicesListInput,
    MeListShipmentsInput,
    MeListSubscriptionPaymentRetriesInput,
    MeListSubscriptionsInput,
    MePauseSubscriptionInput,
    MerchantAccountSessionsRefreshInput,
    MeRemoveGiftCardInput,
    MeRenewSubscriptionInput,
    MeResumeSubscriptionInput,
    MeRevokeSessionInput,
    MeSaveGiftCardInput,
    MeSendOrderReceiptInput,
    MeSkipSubscriptionCycleInput,
    MeUpdateInput,
    MeUpdateAddressInput,
    MeUpdateEmailPreferencesInput,
    MerchantsUpdateInput,
    MeUpdateSubscriptionInput,
    MeUpdateSubscriptionLineItemInput
} from '../declarations/types-32.js';
export type {
    ClientOptions,
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
    CheckoutSubscriptionTerms,
    CheckoutSubscriptionRecurringShipping,
    CheckoutSessionTax,
    CheckoutTheme,
    CheckoutTipConfig
} from '../declarations/types-4.js';
export type { AuthMode, Address, AddressRequestInput, AddressRequest } from '../declarations/types-0.js';
export type {
    ReturnFinancialSummary,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal,
    ReturnLineItemValue,
    ResponseWarning,
    ReturnLineItemRequestInput,
    ReturnEligibilitySelectionInput,
    ReturnEligibilityLineItemRequestInput,
    ReturnEligibilitySelectionAllRemainingFulfilledInput,
    ReturnEligibilitySelectionLineItemsInput,
    ReturnEligibilitySelection,
    ReturnEligibilityLineItemRequest,
    ReturnEligibilitySelectionAllRemainingFulfilled,
    ReturnEligibilitySelectionLineItems
} from '../declarations/types-43.js';
export type {
    ReturnResolutionLineItemRequest,
    ReturnResolutionLineItemRequestInput,
    ReturnReasonSummary,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem
} from '../declarations/types-44.js';
export type {
    Image,
    GiftCardPurchaseSnapshot,
    GiftCardPurchaseRecipient,
    ImageAttachment,
    ImageRequestInput,
    ImageInputSourceURLInput,
    ImageInputFileInput,
    GiftCardsGetInput
} from '../declarations/types-21.js';
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
} from '../declarations/types-48.js';
export type {
    DeliveryRecipientResource,
    DeliveryWindowRequest,
    DeliveryShipmentDetails,
    DeliveryRecipientRequirement,
    DeliverySelectionRecipientRequestInput,
    DeliverySelectionRecipientRequest
} from '../declarations/types-16.js';
export type {
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever
} from '../declarations/types-40.js';
export type {
    OrderLineItemTax,
    OrderPaymentAttemptPaymentMethodSave,
    OrderLineItemModifier,
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
    OrderLineSubscriptionOfferSummary,
    OrderLineSubscriptionOfferDiscount,
    OrderReturnCreditSettlement
} from '../declarations/types-34.js';
export type {
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject,
    PricingAmounts,
    PickupFulfillmentDetails,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentRefund
} from '../declarations/types-39.js';
export type {
    DeliveryQuoteChoiceGroupResource,
    DeliveryQuoteExecutionLegResource,
    DeliveryQuoteLineItemResource
} from '../declarations/types-15.js';
export type {
    DeliveryInputRequirement,
    DeliveryInputConstraint,
    DeliveryLocationSummaryResource,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryMerchantDiagnostic,
    DeliveryEligibilityMismatch
} from '../declarations/types-13.js';
export type { DeliveryOptionProjection, DeliveryPlan, DeliveryPickupDetails } from '../declarations/types-14.js';
export type {
    LegalSettings,
    InvoiceSnapshot,
    InvoiceTip,
    LineItemInventorySnapshot,
    LineItemInventoryDemand,
    InvoicesCreateCheckoutSessionInput,
    InvoicesGetPDFInput,
    InvoicesListDeliveryAttemptsInput
} from '../declarations/types-30.js';
export type { CreateReturnEligibilityPreviewRequestInput } from '../declarations/types-9.js';
export type {
    CreateMeSubscriptionPreviewRequestInput,
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput
} from '../declarations/types-8.js';
export type { FulfillmentChargeLink, FulfillmentRecipient } from '../declarations/types-19.js';
export type { DigitalFulfillmentDetails, Dimensions } from '../declarations/types-17.js';
export type {
    InvoicePaymentOptionCostComparison,
    InvoicePaymentTermsSnapshot,
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationOnReceipt,
    InvoicePaymentTermCalculationNetDays,
    InvoicePaymentTermCalculationDaysAfterMonthEnd,
    InvoicePaymentTermCalculationDayOfMonth,
    InvoicePaymentTermCalculationDayOfNextMonth,
    InvoiceScheduleEntry,
    InvoiceScheduleAmountSpecification,
    InvoiceScheduleAmountSpecificationFixed,
    InvoiceScheduleAmountSpecificationPercentage,
    InvoiceScheduleAmountSpecificationRemainingBalance,
    InvoiceScheduleDue,
    InvoiceScheduleDueAtIssue,
    InvoiceScheduleDueDate,
    InvoiceScheduleDueInvoiceDueDate
} from '../declarations/types-29.js';
export type {
    PurchasedGiftCard,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    ReadinessAction,
    ReadinessMerchantAccountSession,
    ReadinessRequirements,
    ReadinessAxis
} from '../declarations/types-41.js';
export type { OrderTaxExemption } from '../declarations/types-35.js';
export {
    makeAddressRequest,
    makeBuyerCreateReturnPreviewRequest,
    makeBuyerCreateReturnPreviewRequestEligibility,
    makeBuyerCreateReturnPreviewRequestResolution,
    makeBuyerCreateReturnRequest,
    makeBuyerCreateReturnResolutionPreviewRequest,
    makeBuyerReturnReplacementLineItemInputBundle,
    makeBuyerReturnReplacementLineItemInputVariant,
    makeBuyerReturnReplacementLineItemRequest,
    makeCancelReturnRequest
} from '../declarations/types-65.js';
export {
    makeCancelSubscriptionRequest,
    makeCheckoutRedirectsRequest,
    makeConfigurationVersionRequest,
    makeConfirmEmailChangeRequest,
    makeConfirmReturnResolutionRequest,
    makeCreateCustomerAddressRequest
} from '../declarations/types-66.js';
export {
    makeCreateEmailChangeRequest,
    makeCreateMeSubscriptionPreviewRequest,
    makeCreateMeSubscriptionPreviewRequestDeliveryOptions,
    makeCreateMeSubscriptionPreviewRequestNextRenewal
} from '../declarations/types-67.js';
export { makeCreateReturnEligibilityPreviewRequest } from '../declarations/types-68.js';
export {
    makeCreditNoteCorrectionRequest,
    makeCreditNoteCorrectionRequestAmount,
    makeCreditNoteCorrectionRequestQuantity
} from '../declarations/types-69.js';
export {
    makeDeliveryRecipientRequirement,
    makeDeliverySelectionRecipientRequest,
    makeDeliveryWindowRequest,
    makeDimensions
} from '../declarations/types-70.js';
export {
    makeGetOrCreateReturnResolutionCheckoutSessionRequest,
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest
} from '../declarations/types-71.js';
export {
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
    makeInvoiceScheduleAmountSpecificationFixed,
    makeInvoiceScheduleAmountSpecificationPercentage,
    makeInvoiceScheduleAmountSpecificationRemainingBalance,
    makeMerchantAccountSessionCreateRequest,
    makeMerchantAccountSessionRefreshRequest,
    makeMetadataPatchRequest,
    makeMetadataRequest
} from '../declarations/types-72.js';
export {
    makeMoneyValue,
    makeOrderCalculatedChargeTax,
    makeOrderCalculatedLineItemTax,
    makeOrderLineItemTax,
    makePauseSubscriptionRequest
} from '../declarations/types-73.js';
export {
    makePromotionRecurrence,
    makePromotionRecurrenceForever,
    makePromotionRecurrenceOnce,
    makePromotionRecurrenceRepeating
} from '../declarations/types-74.js';
export {
    makeRenewSubscriptionRequest,
    makeResourceVersionRequest,
    makeReturnEligibilityLineItemRequest,
    makeReturnEligibilitySelection,
    makeReturnEligibilitySelectionAllRemainingFulfilled,
    makeReturnEligibilitySelectionLineItems,
    makeReturnLineItemRequest,
    makeReturnResolutionLineItemRequest
} from '../declarations/types-75.js';
export {
    makeSaveMeGiftCardRequest,
    makeSaveMeGiftCardRequestCode,
    makeSaveMeGiftCardRequestRecipientAccess,
    makeSaveMePaymentMethodRequest,
    makeSkipMeSubscriptionCycleRequest,
    makeSubscriptionDeliveryDestinationInputAddress,
    makeSubscriptionDeliveryDestinationInputCustomerAddress,
    makeSubscriptionDeliveryDestinationRequest,
    makeSubscriptionDeliveryRequest,
    makeSubscriptionIntervalOption,
    makeTaxCalculationRequest,
    makeTaxComponentRequest,
    makeTaxJurisdiction
} from '../declarations/types-76.js';
export {
    makeTextModifierRequest,
    makeUpdateCustomerAddressRequest,
    makeUpdateCustomerEmailPreferencesRequest,
    makeUpdateMerchantRequest,
    makeUpdateMeRequest,
    makeUpdateMeSubscriptionLineItemRequest,
    makeUpdateMeSubscriptionRequest
} from '../declarations/types-77.js';
export { makeWeight } from '../declarations/types-78.js';
export interface MeResource {
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Cancel a Return before any merchandise or value work commits. Cancellation is
 * refused once a receipt, inspection, disposition, or resolution exists.
 * @see reference/me.md#mecancelreturn
 * POST /v1/me/returns/{return_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.cancelReturn("example", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey })
 */
    cancelReturn(return_id: InputValue<string>, params: (InputValue<CancelReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerReturn>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecancelreturn
     */
    cancelReturnWithResponse(return_id: InputValue<string>, params: (InputValue<CancelReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerReturnResponse>>;
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
 * @see reference/me.md#mecancelsubscription
 * POST /v1/me/subscriptions/{subscription_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.cancelSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    cancelSubscription(subscription_id: InputValue<string>, params: (InputValue<CancelSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerSubscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecancelsubscription
     */
    cancelSubscriptionWithResponse(subscription_id: InputValue<string>, params: (InputValue<CancelSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerSubscriptionResponse>>;
    /**
 * Confirms possession of the current and new email addresses, then atomically updates the customer
 * account in the selected merchant environment. Omit current_email_code only when
 * current_email_confirmation_required is false. A successful confirmation signs the buyer out
 * everywhere at this store: it revokes every customer session, buyer access grant, and
 * Flint-hosted account session for the customer, including the session that made this request.
 * Sign the buyer in again with the new email.
 * @see reference/me.md#meconfirmemailchangerequest
 * POST /v1/me/email-change-requests/{email_change_request_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.confirmEmailChangeRequest("example", {new_email_code: "123456"}, { idempotencyKey:
 * idempotencyKey })
 */
    confirmEmailChangeRequest(email_change_request_id: InputValue<string>, params: (InputValue<ConfirmEmailChangeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<EmailChangeRequest>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meconfirmemailchangerequest
     */
    confirmEmailChangeRequestWithResponse(email_change_request_id: InputValue<string>, params: (InputValue<ConfirmEmailChangeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<EmailChangeRequestResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Saves an address for the buyer. The address becomes a default only when the request
 * sets is_default_billing or is_default_shipping, or later by setting those flags with PATCH,
 * including the buyer's first address. A default address is also the billing or shipping address
 * on the buyer's customer profile.
 * @see reference/me.md#mecreateaddress
 * POST /v1/me/addresses
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createAddress({address: {city: "Springfield", country: "US", line1: "100 Example
 * Street", postal_code: "62701", state: "IL"}, recipient_name: "Jordan Example"}, {
 * idempotencyKey: idempotencyKey })
 */
    createAddress(params: (InputValue<CreateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreateaddress
     */
    createAddressWithResponse(params: (InputValue<CreateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Asks the store to delete the buyer's account, or returns the request already
 * pending. The store approves or rejects it. Deletion anonymizes the customer: orders, payments,
 * and refunds stay without the buyer's identity.
 * @see reference/me.md#mecreatedeletionrequest
 * POST /v1/me/deletion-requests
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createDeletionRequest({}, { idempotencyKey: idempotencyKey })
 */
    createDeletionRequest(params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<CustomerDeletionRequest>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreatedeletionrequest
     */
    createDeletionRequestWithResponse(params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<CustomerDeletionRequestResponse>>;
    /**
 * Sends short-lived confirmation codes to the current and new email addresses. If the account has
 * no current email, only the new address must be confirmed. The customer email does not change
 * until confirmation succeeds. Limited to three attempts per 15 minutes, including attempts
 * rejected because the email is already used. A rejected attempt keeps any pending email change
 * request. Over the limit, the request returns 429 RATE_LIMIT_EXCEEDED with Retry-After set to the
 * whole seconds until the oldest counted attempt leaves the window, at least 1.
 * @see reference/me.md#mecreateemailchangerequest
 * POST /v1/me/email-change-requests
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createEmailChangeRequest({new_email: "example@example.invalid"}, { idempotencyKey:
 * idempotencyKey })
 */
    createEmailChangeRequest(params: (InputValue<CreateEmailChangeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<EmailChangeRequest>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreateemailchangerequest
     */
    createEmailChangeRequestWithResponse(params: (InputValue<CreateEmailChangeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<EmailChangeRequestResponse>>;
    /**
 * Records the buyer's consent to save an independent store copy for off-session payments,
 * including subscriptions. Call only after the buyer agrees. Requires a live email-code buyer
 * login and an enabled Flint wallet at a Flint-hosted store account. Supply a flint_wallet_card_id
 * from listMeFlintWalletCards. Confirm client_setup with Stripe.js confirmSetup, then poll GET
 * /v1/me/payment-methods/{payment_method_id} until active before changing a subscription through
 * PATCH /v1/me/subscriptions/{subscription_id} with payment_method_id. Setup may request
 * authentication. Removing the platform card or revoking store consent blocks the copy
 * immediately. Idempotency-Key is optional and scoped to the store, customer, card handle, and
 * key. Responses are retained for 24 hours. After a copy is revoked, retries with any key bound to
 * that copy are refused. Get new consent and use a new key to create another copy. Retry a lost
 * response with the same key. Concurrent requests for the same card at this store share one copy
 * and setup. A failed off-session charge can still require the buyer to return through the
 * existing card-update link. Accept an empty body or {}.
 * @see reference/me.md#mecreateflintwalletstoresetup
 * POST /v1/me/flint-wallet/cards/{flint_wallet_card_id}/store-setups
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createFlintWalletStoreSetup("example", {}, { idempotencyKey: idempotencyKey })
 */
    createFlintWalletStoreSetup(flint_wallet_card_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerFlintWalletStoreSetup>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreateflintwalletstoresetup
     */
    createFlintWalletStoreSetupWithResponse(flint_wallet_card_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerFlintWalletStoreSetupResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns the current open invoice checkout session and aligned card attempt
 * when they still match the invoice balance and collection run. A newly created session and
 * attempt share the fixed expiration of the active invoice public-link generation. Unexpired
 * sessions are reused regardless of remaining lifetime; active payment work returns a resolving
 * conflict instead of creating competing collection. When the invoice's order has items to
 * deliver, a new session offers the delivery methods in
 * settings.checkout.default_delivery_method_ids, and the request fails with a validation error
 * when those methods cannot deliver every item. return_url sets where the checkout sends the buyer
 * after paying. A reused session takes a new return_url only until a payment starts on it, and
 * keeps the one it has after that.
 * @see reference/me.md#mecreateinvoicecheckoutsession
 * POST /v1/me/invoices/{invoice_id}/checkout-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createInvoiceCheckoutSession("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createInvoiceCheckoutSession(invoice_id: InputValue<string>, params?: (InputValue<InvoiceCheckoutSessionRequestInput>
        | {
        "invoice_schedule_entry_id"?: never;
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer" | "invoice">): Promise<BuyerInvoiceCheckoutSessionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreateinvoicecheckoutsession
     */
    createInvoiceCheckoutSessionWithResponse(invoice_id: InputValue<string>, params?: (InputValue<InvoiceCheckoutSessionRequestInput>
        | {
        "invoice_schedule_entry_id"?: never;
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer" | "invoice">): Promise<SdkResponse<BuyerInvoiceCheckoutSessionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Starts saving a payment method for the buyer and returns the client setup to
 * confirm in the browser. The payment method is pending until setup succeeds.
 * @see reference/me.md#mesavepaymentmethod
 * POST /v1/me/payment-methods
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.savePaymentMethod({}, { idempotencyKey: idempotencyKey })
 */
    savePaymentMethod(params: (InputValue<SaveMePaymentMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerPaymentMethodWithSetup>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mesavepaymentmethod
     */
    savePaymentMethodWithResponse(params: (InputValue<SaveMePaymentMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerSavePaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Requests a Return for one of the buyer's orders. An active return policy must cover
 * each line and leave the requested quantity eligible, or the request fails with 409
 * ACTION_NOT_ALLOWED with reason not_offered. Check can_buyer_request with POST
 * /v1/me/return-previews first. The buyer's reason must be active and apply to the line, and a
 * policy that sends the request to review leaves the Return waiting for the store's decision.
 * @see reference/me.md#mecreatereturn
 * POST /v1/me/returns
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createReturn({line_items: [{order_line_item_id: "example", requested_quantity: "100",
 * return_reason_id: "example"}], order_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createReturn(params: (InputValue<BuyerCreateReturnRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<BuyerReturn>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreatereturn
     */
    createReturnWithResponse(params: (InputValue<BuyerCreateReturnRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Preview return eligibility or resolution amounts without creating a Return or
 * reserving quantity. Set mode to eligibility or resolution and send the matching input object.
 * @see reference/me.md#mecreatereturnpreview
 * POST /v1/me/return-previews
 * @example
 * client.me.createReturnPreview({mode: "eligibility", eligibility: {order_id: "example",
 * selection: {selection_type: "all_remaining_fulfilled"}}})
 */
    createReturnPreview(params: (InputValue<BuyerCreateReturnPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerReturnPreview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreatereturnpreview
     */
    createReturnPreviewWithResponse(params: (InputValue<BuyerCreateReturnPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerReturnPreviewResponse>>;
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
 * @see reference/me.md#mecreatereturnresolutioncheckoutsession
 * POST /v1/me/return-resolutions/{return_resolution_id}/checkout-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createReturnResolutionCheckoutSession("example", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    createReturnResolutionCheckoutSession(return_resolution_id: InputValue<string>, params?: (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>
        | {
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerCheckoutSessionWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreatereturnresolutioncheckoutsession
     */
    createReturnResolutionCheckoutSessionWithResponse(return_resolution_id: InputValue<string>, params?: (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>
        | {
        "page_origin"?: never;
        "payment_return_url"?: never;
        "redirects"?: never;
        "return_url"?: never;
        "surface"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerReturnResolutionCheckoutSessionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Starts one manual collection attempt
 * on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the
 * outcome. While cancellation is scheduled, a new buyer retry returns 409 ACTION_NOT_ALLOWED with
 * reason cancellation_scheduled and current_status past_due. First use PATCH
 * /v1/me/subscriptions/{subscription_id} with cancel_at_period_end false to keep the subscription;
 * retry_payment becomes available again if the other retry conditions allow it. Only one retry may
 * be in progress at a time. Buyers can start a retry while fewer than 3 retries have been created
 * for the current billing period, counting the store's retries too. subscription_card_update
 * email-link sessions can start retries.
 * @see reference/me.md#mecreatesubscriptionpaymentretry
 * POST /v1/me/subscriptions/{subscription_id}/payment-retries
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.createSubscriptionPaymentRetry("example", undefined, { idempotencyKey: idempotencyKey
 * })
 */
    createSubscriptionPaymentRetry(subscription_id: InputValue<string>, params: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    } | undefined, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<BuyerSubscriptionPaymentRetry>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreatesubscriptionpaymentretry
     */
    createSubscriptionPaymentRetryWithResponse(subscription_id: InputValue<string>, params: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    } | undefined, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerSubscriptionPaymentRetryResponse>>;
    /**
 * Estimates a buyer's next subscription renewal, or lists delivery methods and rates for a
 * proposed destination, without changing the subscription. next_renewal includes recurring
 * promotions, shipping, and tax for the next charged cycle. Tax is null when no tax address is
 * available; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Requires a full buyer
 * session. A preview does not reserve inventory or guarantee a future shipping rate.
 * @see reference/me.md#mecreatesubscriptionpreview
 * POST /v1/me/subscription-previews
 * @example
 * client.me.createSubscriptionPreview({body: {mode: "next_renewal", subscription_id:
 * "sub_00000000000000000000000000"}})
 */
    createSubscriptionPreview(input: MeCreateSubscriptionPreviewInput, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<((BuyerSubscriptionPreview) | (SubscriptionRenewalPreview) | (Record<string, unknown>))>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mecreatesubscriptionpreview
     */
    createSubscriptionPreviewWithResponse(input: MeCreateSubscriptionPreviewInput, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerSubscriptionPreviewResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Deletes one of the buyer's saved addresses. Deleting the billing or shipping
 * default leaves the customer with none; Flint doesn't pick another address.
 * @see reference/me.md#medeleteaddress
 * DELETE /v1/me/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.deleteAddress("example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteAddress(customer_address_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#medeleteaddress
     */
    deleteAddressWithResponse(customer_address_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Deletes a saved payment method so it can no longer be used for future payments.
 * Returns the payment method with status archived, including when it was already archived.
 * @see reference/me.md#meremovepaymentmethod
 * DELETE /v1/me/payment-methods/{payment_method_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.removePaymentMethod("example", {}, { idempotencyKey: idempotencyKey })
 */
    removePaymentMethod(payment_method_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerPaymentMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meremovepaymentmethod
     */
    removePaymentMethodWithResponse(payment_method_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerPaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns the buyer's customer profile.
 * @see reference/me.md#meget
 * GET /v1/me
 * @example
 * client.me.get()
 */
    get(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerCustomer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meget
     */
    getWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerCustomerResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's saved addresses.
 * @see reference/me.md#megetaddress
 * GET /v1/me/addresses/{customer_address_id}
 * @example
 * client.me.getAddress("example")
 */
    getAddress(customer_address_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetaddress
     */
    getAddressWithResponse(customer_address_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns one credit note with its lines, total, and the credit still
 * available to allocate.
 * @see reference/me.md#megetcreditnote
 * GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}
 * @example
 * client.me.getCreditNote("example", "example")
 */
    getCreditNote(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<BuyerCreditNote>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetcreditnote
     */
    getCreditNoteWithResponse(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<SdkResponse<BuyerCreditNoteResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns the credit note document as application/pdf rather than a JSON
 * envelope. The PDF exists from issue onward and carries your branding, the credited lines, and
 * the invoice it corrects.
 * @see reference/me.md#megetcreditnotepdf
 * GET /v1/me/invoices/{invoice_id}/credit-notes/{credit_note_id}/pdf
 * @example
 * client.me.getCreditNotePDF("example", "example")
 */
    getCreditNotePDF(invoice_id: InputValue<string>, credit_note_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<Result<MeGetCreditNotePDFResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns the status of one of the buyer's deletion requests.
 * @see reference/me.md#megetdeletionrequest
 * GET /v1/me/deletion-requests/{customer_deletion_request_id}
 * @example
 * client.me.getDeletionRequest("example")
 */
    getDeletionRequest(customer_deletion_request_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<CustomerDeletionRequest>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetdeletionrequest
     */
    getDeletionRequestWithResponse(customer_deletion_request_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<CustomerDeletionRequestResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Returns which of the merchant's
 * optional email categories the customer's current email receives in the selected merchant
 * environment. A category the buyer never changed is on. Email preferences exist only for a
 * customer with an email: without one, the read answers 404 with CUSTOMER_EMAIL_REQUIRED. Receipts
 * and other transactional email always send.
 * @see reference/me.md#megetemailpreferences
 * GET /v1/me/email-preferences
 * @example
 * client.me.getEmailPreferences()
 */
    getEmailPreferences(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<CustomerEmailPreferences>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetemailpreferences
     */
    getEmailPreferencesWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<CustomerEmailPreferencesResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's fulfillments.
 * @see reference/me.md#megetfulfillment
 * GET /v1/me/fulfillments/{fulfillment_id}
 * @example
 * client.me.getFulfillment("example")
 */
    getFulfillment(fulfillment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerFulfillment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetfulfillment
     */
    getFulfillmentWithResponse(fulfillment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerFulfillmentResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code.
 * @see reference/me.md#megetgiftcard
 * GET /v1/me/gift-cards/{gift_card_id}
 * @example
 * client.me.getGiftCard("example")
 */
    getGiftCard(gift_card_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerGiftCard>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetgiftcard
     */
    getGiftCardWithResponse(gift_card_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerGiftCardResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns one of the buyer's invoices. A draft invoice returns 404.
 * @see reference/me.md#megetinvoice
 * GET /v1/me/invoices/{invoice_id}
 * @example
 * client.me.getInvoice("example")
 */
    getInvoice(invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<BuyerInvoice>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetinvoice
     */
    getInvoiceWithResponse(invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<SdkResponse<BuyerInvoiceResponse>>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Returns the invoice document as application/pdf rather than a JSON
 * envelope.
 * @see reference/me.md#megetinvoicepdf
 * GET /v1/me/invoices/{invoice_id}/pdf
 * @example
 * client.me.getInvoicePDF("example")
 */
    getInvoicePDF(invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<Result<MeGetInvoicePDFResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's orders.
 * @see reference/me.md#megetorder
 * GET /v1/me/orders/{order_id}
 * @example
 * client.me.getOrder("example")
 */
    getOrder(order_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerOrder>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetorder
     */
    getOrderWithResponse(order_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerOrderResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's packages.
 * @see reference/me.md#megetpackage
 * GET /v1/me/packages/{package_id}
 * @example
 * client.me.getPackage("example")
 */
    getPackage(package_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPackage>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetpackage
     */
    getPackageWithResponse(package_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPackageResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's payments.
 * @see reference/me.md#megetpaymentintent
 * GET /v1/me/payment-intents/{payment_intent_id}
 * @example
 * client.me.getPaymentIntent("example")
 */
    getPaymentIntent(payment_intent_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPaymentIntent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetpaymentintent
     */
    getPaymentIntentWithResponse(payment_intent_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPaymentIntentResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's payments.
 * @see reference/me.md#megetpaymentintent
 * GET /v1/me/payment-intents/{payment_intent_id}
 * @deprecated Use me.getPaymentIntent; HTTP behavior is unchanged.
 * @example
 * client.me.getPayment("example")
 */
    getPayment(payment_intent_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPaymentIntent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetpaymentintent
     */
    getPaymentWithResponse(payment_intent_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPaymentIntentResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's saved payment methods.
 * @see reference/me.md#megetpaymentmethod
 * GET /v1/me/payment-methods/{payment_method_id}
 * @example
 * client.me.getPaymentMethod("example")
 */
    getPaymentMethod(payment_method_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPaymentMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetpaymentmethod
     */
    getPaymentMethodWithResponse(payment_method_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPaymentMethodResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's refunds.
 * @see reference/me.md#megetrefund
 * GET /v1/me/refunds/{refund_id}
 * @example
 * client.me.getRefund("example")
 */
    getRefund(refund_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerRefund>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetrefund
     */
    getRefundWithResponse(refund_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerRefundResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's Returns.
 * @see reference/me.md#megetreturn
 * GET /v1/me/returns/{return_id}
 * @example
 * client.me.getReturn("example")
 */
    getReturn(return_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerReturn>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetreturn
     */
    getReturnWithResponse(return_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerReturnResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns a buyer-visible Return resolution, including the amount the buyer needs to
 * pay. Use the checkout_session action to pay its balance.
 * @see reference/me.md#megetreturnresolution
 * GET /v1/me/return-resolutions/{return_resolution_id}
 * @example
 * client.me.getReturnResolution("example")
 */
    getReturnResolution(return_resolution_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetreturnresolution
     */
    getReturnResolutionWithResponse(return_resolution_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerReturnResolutionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's shipments.
 * @see reference/me.md#megetshipment
 * GET /v1/me/shipments/{shipment_id}
 * @example
 * client.me.getShipment("example")
 */
    getShipment(shipment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerShipment>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetshipment
     */
    getShipmentWithResponse(shipment_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerShipmentResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Returns one of the buyer's subscriptions. subscription_plan is always included
 * without expand: the plan's current summary, or null when the subscription has no plan.
 * @see reference/me.md#megetsubscription
 * GET /v1/me/subscriptions/{subscription_id}
 * @example
 * client.me.getSubscription("example")
 */
    getSubscription(subscription_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerSubscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetsubscription
     */
    getSubscriptionWithResponse(subscription_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerSubscriptionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Returns one durable manual
 * subscription payment retry.
 * @see reference/me.md#megetsubscriptionpaymentretry
 * GET /v1/me/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}
 * @example
 * client.me.getSubscriptionPaymentRetry("example", "example")
 */
    getSubscriptionPaymentRetry(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerSubscriptionPaymentRetry>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#megetsubscriptionpaymentretry
     */
    getSubscriptionPaymentRetryWithResponse(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerSubscriptionPaymentRetryResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's saved addresses with their billing and shipping default flags.
 * Default order: created_at descending, then customer_address_id descending.
 * @see reference/me.md#melistaddresses
 * GET /v1/me/addresses
 * @example
 * client.me.listAddresses()
 */
    listAddresses(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<CustomerAddressListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistaddresses
     */
    listAddressesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<CustomerAddressListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistaddresses
     */
    listAddressesPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerAddressListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistaddresses
     */
    listAddressesPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<CustomerAddressListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistaddresses
     */
    listAddressesItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerAddress>;
    /**
 * Accepts a customer session, which limits the request to that customer's invoices, or the access
 * token from this invoice's public link, which limits it to this invoice. The request cannot
 * select a customer_id. Lists the credit notes issued against this invoice, newest first. Default
 * order: issued_at descending, then credit_note_id descending.
 * @see reference/me.md#melistcreditnotes
 * GET /v1/me/invoices/{invoice_id}/credit-notes
 * @example
 * client.me.listCreditNotes("example")
 */
    listCreditNotes(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<BuyerCreditNoteListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistcreditnotes
     */
    listCreditNotesWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): Promise<SdkResponse<BuyerCreditNoteListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistcreditnotes
     */
    listCreditNotesPages(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<BuyerCreditNoteListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistcreditnotes
     */
    listCreditNotesPagesWithResponse(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<SdkResponse<BuyerCreditNoteListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistcreditnotes
     */
    listCreditNotesItems(invoice_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer" | "invoice">>): AsyncGenerator<BuyerCreditNote>;
    /**
 * Uses the customer identity fixed by the customer session. Lists the current buyer's deletion
 * requests in the selected merchant environment, newest first by requested_at. Default order:
 * requested_at descending, then customer_deletion_request_id descending.
 * @see reference/me.md#melistdeletionrequests
 * GET /v1/me/deletion-requests
 * @example
 * client.me.listDeletionRequests()
 */
    listDeletionRequests(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<CustomerDeletionRequestListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistdeletionrequests
     */
    listDeletionRequestsWithResponse(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<CustomerDeletionRequestListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistdeletionrequests
     */
    listDeletionRequestsPages(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerDeletionRequestListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistdeletionrequests
     */
    listDeletionRequestsPagesWithResponse(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<CustomerDeletionRequestListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistdeletionrequests
     */
    listDeletionRequestsItems(params?: {
        "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<CustomerDeletionRequest>;
    /**
 * Returns the current buyer's usable wallet cards in newest-first order. Each flint_wallet_card_id
 * is an opaque per-store handle. store_payment_method_id is null until this store holds a copy.
 * Requires a customer session minted from a live email-code buyer login at a Flint-hosted store
 * account, including a login narrowed to a custom domain. Email links, checkout sessions, grants,
 * merchant-created sessions, and API keys receive 404. Live and sandbox wallets are isolated. The
 * full card collection is returned in one page. Flint wallet support must be enabled. Default
 * order: most recently added card first.
 * @see reference/me.md#melistflintwalletcards
 * GET /v1/me/flint-wallet/cards
 * @example
 * client.me.listFlintWalletCards()
 */
    listFlintWalletCards(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerFlintWalletCardListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistflintwalletcards
     */
    listFlintWalletCardsWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerFlintWalletCardListResponse>>;
    /**
 * Returns the current buyer's usable wallet cards in newest-first order. Each flint_wallet_card_id
 * is an opaque per-store handle. store_payment_method_id is null until this store holds a copy.
 * Requires a customer session minted from a live email-code buyer login at a Flint-hosted store
 * account, including a login narrowed to a custom domain. Email links, checkout sessions, grants,
 * merchant-created sessions, and API keys receive 404. Live and sandbox wallets are isolated. The
 * full card collection is returned in one page. Flint wallet support must be enabled. Default
 * order: most recently added card first.
 * @see reference/me.md#melistflintwalletcards
 * GET /v1/me/flint-wallet/cards
 * @deprecated Use me.listFlintWalletCards; HTTP behavior is unchanged.
 * @example
 * client.me.listFlintWalletPaymentMethods()
 */
    listFlintWalletPaymentMethods(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerFlintWalletCardListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistflintwalletcards
     */
    listFlintWalletPaymentMethodsWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerFlintWalletCardListResponse>>;
    /**
 * Lists fulfillment events for an order owned by the current buyer, ordered by occurred_at
 * descending. Internal merchant fields are omitted. order_id is required. Default order:
 * occurred_at descending, then fulfillment_event_id descending.
 * @see reference/me.md#melistfulfillmentevents
 * GET /v1/me/fulfillment-events
 * @example
 * client.me.listFulfillmentEvents({order_id: "example"})
 */
    listFulfillmentEvents(params: {
        "order_id": InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerFulfillmentEventListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistfulfillmentevents
     */
    listFulfillmentEventsWithResponse(params: {
        "order_id": InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerFulfillmentEventListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistfulfillmentevents
     */
    listFulfillmentEventsPages(params: {
        "order_id": InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerFulfillmentEventListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistfulfillmentevents
     */
    listFulfillmentEventsPagesWithResponse(params: {
        "order_id": InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerFulfillmentEventListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistfulfillmentevents
     */
    listFulfillmentEventsItems(params: {
        "order_id": InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "shipment_id"?: InputValue<string>;
        "package_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerFulfillmentEvent>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists fulfillments for the buyer's orders, newest created first. Default order:
 * created_at descending, then fulfillment_id descending.
 * @see reference/me.md#melistfulfillments
 * GET /v1/me/fulfillments
 * @example
 * client.me.listFulfillments()
 */
    listFulfillments(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerFulfillmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistfulfillments
     */
    listFulfillmentsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerFulfillmentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistfulfillments
     */
    listFulfillmentsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerFulfillmentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistfulfillments
     */
    listFulfillmentsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerFulfillmentListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistfulfillments
     */
    listFulfillmentsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending"
            | "in_progress"
            | "ready"
            | "completed"
            | "canceled"
            | "failed"
            | "scheduled"
            | "accepted"
            | "preparing"
            | "picked"
            | "packed"
            | "dispatched"
            | "no_show">>;
        "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerFulfillment>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Lists valid saved cards by saved time then card ID, descending.
 * Default order: time the buyer saved the card (descending), then gift_card_id descending.
 * @see reference/me.md#melistgiftcards
 * GET /v1/me/gift-cards
 * @example
 * client.me.listGiftCards()
 */
    listGiftCards(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerGiftCardListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistgiftcards
     */
    listGiftCardsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerGiftCardListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistgiftcards
     */
    listGiftCardsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCardListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistgiftcards
     */
    listGiftCardsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerGiftCardListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistgiftcards
     */
    listGiftCardsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCard>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Lists the full anonymous balance-change history by per-card
 * sequence, descending. Other holders' identities and order references are omitted. Default order:
 * sequence descending; this key uniquely orders the results.
 * @see reference/me.md#melistgiftcardtransactions
 * GET /v1/me/gift-cards/{gift_card_id}/transactions
 * @example
 * client.me.listGiftCardTransactions("example")
 */
    listGiftCardTransactions(gift_card_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerGiftCardTransactionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistgiftcardtransactions
     */
    listGiftCardTransactionsWithResponse(gift_card_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerGiftCardTransactionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistgiftcardtransactions
     */
    listGiftCardTransactionsPages(gift_card_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCardTransactionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistgiftcardtransactions
     */
    listGiftCardTransactionsPagesWithResponse(gift_card_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerGiftCardTransactionListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistgiftcardtransactions
     */
    listGiftCardTransactionsItems(gift_card_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerGiftCardTransaction>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's invoices. Draft invoices are never returned. Default order:
 * created_at descending, then invoice_id descending.
 * @see reference/me.md#melistinvoices
 * GET /v1/me/invoices
 * @example
 * client.me.listInvoices()
 */
    listInvoices(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "order_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerInvoiceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistinvoices
     */
    listInvoicesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "order_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerInvoiceListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistinvoices
     */
    listInvoicesPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "order_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerInvoiceListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistinvoices
     */
    listInvoicesPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "order_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerInvoiceListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistinvoices
     */
    listInvoicesItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
        "order_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "due_after"?: InputValue<string | globalThis.Date>;
        "due_before"?: InputValue<string | globalThis.Date>;
        "is_overdue"?: InputValue<boolean>;
        "has_outstanding_balance"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerInvoice>;
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
 * @see reference/me.md#melistorderactivities
 * GET /v1/me/orders/{order_id}/activities
 * @example
 * client.me.listOrderActivities("example")
 */
    listOrderActivities(order_id: InputValue<string>, params?: {
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<OrderActivityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistorderactivities
     */
    listOrderActivitiesWithResponse(order_id: InputValue<string>, params?: {
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<OrderActivityListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistorderactivities
     */
    listOrderActivitiesPages(order_id: InputValue<string>, params?: {
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<OrderActivityListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistorderactivities
     */
    listOrderActivitiesPagesWithResponse(order_id: InputValue<string>, params?: {
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<OrderActivityListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistorderactivities
     */
    listOrderActivitiesItems(order_id: InputValue<string>, params?: {
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
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<OrderActivity>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's orders. Default order: created_at descending, then order_id
 * descending.
 * @see reference/me.md#melistorders
 * GET /v1/me/orders
 * @example
 * client.me.listOrders()
 */
    listOrders(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
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
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerOrderListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistorders
     */
    listOrdersWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
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
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerOrderListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistorders
     */
    listOrdersPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
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
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerOrderListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistorders
     */
    listOrdersPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
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
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerOrderListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistorders
     */
    listOrdersItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
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
        "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
        "query"?: InputValue<string>;
        "subscription_id"?: InputValue<string>;
        "subscription_delivery_changed"?: InputValue<boolean>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerOrder>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists packages in the buyer's shipments, newest created first. Default order:
 * created_at descending, then package_id descending.
 * @see reference/me.md#melistpackages
 * GET /v1/me/packages
 * @example
 * client.me.listPackages()
 */
    listPackages(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPackageListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistpackages
     */
    listPackagesWithResponse(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPackageListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistpackages
     */
    listPackagesPages(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPackageListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistpackages
     */
    listPackagesPagesWithResponse(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerPackageListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistpackages
     */
    listPackagesItems(params?: {
        "shipment_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPackage>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's payments. Default order: created_at descending, then
 * payment_intent_id descending.
 * @see reference/me.md#melistpaymentintents
 * GET /v1/me/payment-intents
 * @example
 * client.me.listPaymentIntents()
 */
    listPaymentIntents(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPaymentIntentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistpaymentintents
     */
    listPaymentIntentsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPaymentIntentListResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's payments. Default order: created_at descending, then
 * payment_intent_id descending.
 * @see reference/me.md#melistpaymentintents
 * GET /v1/me/payment-intents
 * @deprecated Use me.listPaymentIntents; HTTP behavior is unchanged.
 * @example
 * client.me.listPayments()
 */
    listPayments(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPaymentIntentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistpaymentintents
     */
    listPaymentsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPaymentIntentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistpaymentintents
     */
    listPaymentIntentsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPaymentIntentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistpaymentintents
     */
    listPaymentIntentsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerPaymentIntentListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistpaymentintents
     */
    listPaymentIntentsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPaymentIntent>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists payment methods in every status except archived, newest first. Filter by
 * status=active for the cards you can charge. Filter by usage off_session to list the payment
 * methods a subscription, automatic invoice, or default payment method can use. Default order:
 * created_at descending, then payment_method_id descending.
 * @see reference/me.md#melistpaymentmethods
 * GET /v1/me/payment-methods
 * @example
 * client.me.listPaymentMethods()
 */
    listPaymentMethods(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerPaymentMethodListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistpaymentmethods
     */
    listPaymentMethodsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerPaymentMethodListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistpaymentmethods
     */
    listPaymentMethodsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPaymentMethodListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistpaymentmethods
     */
    listPaymentMethodsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerPaymentMethodListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistpaymentmethods
     */
    listPaymentMethodsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "type"?: InputValue<Array<"card">>;
        "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
        "usage"?: InputValue<Array<"on_session" | "off_session">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerPaymentMethod>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's refunds. Default order: created_at descending, then refund_id
 * descending.
 * @see reference/me.md#melistrefunds
 * GET /v1/me/refunds
 * @example
 * client.me.listRefunds()
 */
    listRefunds(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerRefundListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistrefunds
     */
    listRefundsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerRefundListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistrefunds
     */
    listRefundsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerRefundListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistrefunds
     */
    listRefundsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerRefundListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistrefunds
     */
    listRefundsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerRefund>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's Returns. Filter by order, return number, reason, status,
 * decision, merchandise, resolution, or creation and update time. Newest first: created_at
 * descending, with return_id descending as the tiebreak. Default order: created_at descending,
 * then return_id descending.
 * @see reference/me.md#melistreturns
 * GET /v1/me/returns
 * @example
 * client.me.listReturns()
 */
    listReturns(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerReturnListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistreturns
     */
    listReturnsWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerReturnListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistreturns
     */
    listReturnsPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerReturnListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistreturns
     */
    listReturnsPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerReturnListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistreturns
     */
    listReturnsItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerReturn>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists shipments for the buyer's orders and Returns, newest created first. Default
 * order: created_at descending, then shipment_id descending.
 * @see reference/me.md#melistshipments
 * GET /v1/me/shipments
 * @example
 * client.me.listShipments()
 */
    listShipments(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerShipmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistshipments
     */
    listShipmentsWithResponse(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerShipmentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistshipments
     */
    listShipmentsPages(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerShipmentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistshipments
     */
    listShipmentsPagesWithResponse(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerShipmentListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistshipments
     */
    listShipmentsItems(params?: {
        "order_id"?: InputValue<string>;
        "fulfillment_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "handed_off_after"?: InputValue<string | globalThis.Date>;
        "handed_off_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerShipment>;
    /**
 * Returns a subscription's manual payment retries, newest first. Default order: created_at
 * descending, then subscription_payment_retry_id descending.
 * @see reference/me.md#melistsubscriptionpaymentretries
 * GET /v1/me/subscriptions/{subscription_id}/payment-retries
 * @example
 * client.me.listSubscriptionPaymentRetries("example")
 */
    listSubscriptionPaymentRetries(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerSubscriptionPaymentRetryListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistsubscriptionpaymentretries
     */
    listSubscriptionPaymentRetriesWithResponse(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerSubscriptionPaymentRetryListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistsubscriptionpaymentretries
     */
    listSubscriptionPaymentRetriesPages(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerSubscriptionPaymentRetryListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistsubscriptionpaymentretries
     */
    listSubscriptionPaymentRetriesPagesWithResponse(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerSubscriptionPaymentRetryListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistsubscriptionpaymentretries
     */
    listSubscriptionPaymentRetriesItems(subscription_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerSubscriptionPaymentRetry>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Lists the buyer's subscriptions. Subscriptions without a next_billing_at never
 * match next_billing_after or next_billing_before, and sort last with sort_by=next_billing_at in
 * either direction. subscription_plan is always included without expand: the plan's current
 * summary, or null when the subscription has no plan. Default order: created_at descending, then
 * subscription_id descending.
 * @see reference/me.md#melistsubscriptions
 * GET /v1/me/subscriptions
 * @example
 * client.me.listSubscriptions()
 */
    listSubscriptions(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_plan_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<BuyerSubscriptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#melistsubscriptions
     */
    listSubscriptionsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_plan_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerSubscriptionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/me.md#melistsubscriptions
     */
    listSubscriptionsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_plan_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerSubscriptionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/me.md#melistsubscriptions
     */
    listSubscriptionsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_plan_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<SdkResponse<BuyerSubscriptionListResponse>>;
    /** Iterate items lazily.
     * @see reference/me.md#melistsubscriptions
     */
    listSubscriptionsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
        "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
        "cancel_at_period_end"?: InputValue<boolean>;
        "delivery_method_id"?: InputValue<string>;
        "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
        "subscription_plan_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "next_billing_after"?: InputValue<string | globalThis.Date>;
        "next_billing_before"?: InputValue<string | globalThis.Date>;
        "needs_attention"?: InputValue<boolean>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"customer">>): AsyncGenerator<BuyerSubscription>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Pauses a subscription immediately, optionally for at least one billing cycle. A
 * pause with a duration resumes automatically at scheduled_resume_at. Repeating the stored pause
 * length returns the paused subscription; a different length returns ACTION_NOT_ALLOWED with
 * reason field_locked and param pause_duration_cycles and requires resuming first. A buyer's pause
 * follows the store's customer_account.buyer_capabilities. Send expected_version to reject a
 * concurrent change.
 * @see reference/me.md#mepausesubscription
 * POST /v1/me/subscriptions/{subscription_id}/pause
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.pauseSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    pauseSubscription(subscription_id: InputValue<string>, params: (InputValue<PauseSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerSubscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mepausesubscription
     */
    pauseSubscriptionWithResponse(subscription_id: InputValue<string>, params: (InputValue<PauseSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerSubscriptionResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Removes only this buyer's saved access without changing funds or
 * other holders' access. A repeated removal without an idempotency key returns 404 because saved
 * access is already absent. Reusing the same idempotency key replays the original removal snapshot
 * without restoring saved access. Idempotency keys are scoped to the buyer, merchant, environment,
 * and operation. A replay cannot restore removed or revoked saved access.
 * @see reference/me.md#meremovegiftcard
 * DELETE /v1/me/gift-cards/{gift_card_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.removeGiftCard("example", {}, { idempotencyKey: idempotencyKey })
 */
    removeGiftCard(gift_card_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerGiftCard>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meremovegiftcard
     */
    removeGiftCardWithResponse(gift_card_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerGiftCardResponse>>;
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
 * @see reference/me.md#merenewsubscription
 * POST /v1/me/subscriptions/{subscription_id}/renew
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.renewSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    renewSubscription(subscription_id: InputValue<string>, params: (InputValue<RenewSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<BuyerSubscriptionRenewalResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#merenewsubscription
     */
    renewSubscriptionWithResponse(subscription_id: InputValue<string>, params: (InputValue<RenewSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"customer">>): Promise<SdkResponse<BuyerSubscriptionRenewalResultResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Asks Flint to resume a paused subscription. Returns 202 while the subscription is
 * still paused, with resume_requested_at set. Flint then makes it active, or past_due while an
 * overdue period is collected, and sends subscription.resumed. If Flint can't resume it, it stays
 * paused, resume_requested_at clears, and Flint sends subscription.updated. Any other status fails
 * with 409 ACTION_NOT_ALLOWED. To undo a scheduled cancellation, PATCH the subscription with
 * cancel_at_period_end set to false.
 * @see reference/me.md#meresumesubscription
 * POST /v1/me/subscriptions/{subscription_id}/resume
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.resumeSubscription("example", undefined, { idempotencyKey: idempotencyKey })
 */
    resumeSubscription(subscription_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerSubscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meresumesubscription
     */
    resumeSubscriptionWithResponse(subscription_id: InputValue<string>, params?: (InputValue<ResourceVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerSubscriptionResponse>>;
    /**
 * Signs out the current customer session using its current server-held secret, including after
 * expiry, after revocation, or after its parent buyer session or grant ended. Repeating the call
 * preserves revoked_at. A secret rotated away by refresh is invalid. Flint Account buyer sessions
 * remain independent.
 * @see reference/me.md#merevokesession
 * POST /v1/me/session/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.revokeSession({}, { idempotencyKey: idempotencyKey })
 */
    revokeSession(params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<CustomerSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#merevokesession
     */
    revokeSessionWithResponse(params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<CustomerSessionResponse>>;
    /**
 * Requires a full customer session. Saved access requires possession of a current code or
 * recipient link. Customer associations and purchase history do not authorize access. Replacing a
 * code invalidates saved access; save again with fresh proof. Saved access does not permit
 * spending or reveal a full code. Idempotency keys are scoped to the buyer, merchant, environment,
 * and operation. A replay cannot restore removed or revoked saved access.
 * @see reference/me.md#mesavegiftcard
 * POST /v1/me/gift-cards
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.saveGiftCard({credential_type: "code", code: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    saveGiftCard(params: (InputValue<SaveMeGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerGiftCard>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mesavegiftcard
     */
    saveGiftCardWithResponse(params: (InputValue<SaveMeGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerGiftCardResponse>>;
    /**
 * Queues a receipt email for one of your paid orders to the order's email. Requires Flint-managed
 * receipt delivery. Sending is limited to once every five minutes per order and normalized
 * recipient.
 * @see reference/me.md#mesendorderreceipt
 * POST /v1/me/orders/{order_id}/send-receipt
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.sendOrderReceipt("example", {}, { idempotencyKey: idempotencyKey })
 */
    sendOrderReceipt(order_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerOrder>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#mesendorderreceipt
     */
    sendOrderReceiptWithResponse(order_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerOrderResponse>>;
    /**
 * Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves
 * forward by one of the subscription's billing intervals while preserving billing_anchor_day,
 * including in shorter months. Available when buyer skipping is enabled and the subscription is
 * active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel
 * at the end of its period, and is under the store's consecutive skip limit. Requires a full buyer
 * session. Send expected_version to reject concurrent changes.
 * @see reference/me.md#meskipsubscriptioncycle
 * POST /v1/me/subscriptions/{subscription_id}/skip-cycle
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.skipSubscriptionCycle("example", {}, { idempotencyKey: idempotencyKey })
 */
    skipSubscriptionCycle(subscription_id: InputValue<string>, params: (InputValue<SkipMeSubscriptionCycleRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerSubscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meskipsubscriptioncycle
     */
    skipSubscriptionCycleWithResponse(subscription_id: InputValue<string>, params: (InputValue<SkipMeSubscriptionCycleRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerSubscriptionResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Updates the current buyer's name or
 * phone. Manage billing and shipping addresses through /v1/me/addresses.
 * @see reference/me.md#meupdate
 * PATCH /v1/me
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.update({default_payment_method_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    update(params: (InputValue<UpdateMeRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerCustomer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meupdate
     */
    updateWithResponse(params: (InputValue<UpdateMeRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerCustomerResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. The request cannot select a
 * customer_id. Changes the fields you send on one of the buyer's saved addresses. The address
 * field replaces the whole postal address. Send null for phone or label to remove it. Set
 * is_default_billing or is_default_shipping to true to make this address the default, or false to
 * clear a default it holds. Changing a default address also changes the matching address on the
 * buyer's customer profile.
 * @see reference/me.md#meupdateaddress
 * PATCH /v1/me/addresses/{customer_address_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateAddress("caddr_example", {label: "Home"}, { idempotencyKey: idempotencyKey })
 */
    updateAddress(customer_address_id: InputValue<string>, params: (InputValue<UpdateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<CustomerAddress>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meupdateaddress
     */
    updateAddressWithResponse(customer_address_id: InputValue<string>, params: (InputValue<UpdateCustomerAddressRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<CustomerAddressResponse>>;
    /**
 * Uses the customer identity fixed by the customer session. Turns the optional email categories in
 * the body on or off for the customer's current email at this merchant in the selected merchant
 * environment, and leaves the others as they are. The setting follows the email address, so it
 * also covers guest checkouts with the same email. A customer without an email has no email
 * preferences, and the change answers 404 with CUSTOMER_EMAIL_REQUIRED.
 * @see reference/me.md#meupdateemailpreferences
 * PATCH /v1/me/email-preferences
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateEmailPreferences({checkout_reminders: true}, { idempotencyKey: idempotencyKey })
 */
    updateEmailPreferences(params: (InputValue<UpdateCustomerEmailPreferencesRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<CustomerEmailPreferences>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meupdateemailpreferences
     */
    updateEmailPreferencesWithResponse(params: (InputValue<UpdateCustomerEmailPreferencesRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<CustomerEmailPreferencesResponse>>;
    /**
 * Updates payment_method_id, cancel_at_period_end: false, delivery, billing interval and quantity
 * when the matching buyer action is available. Send billing_interval and billing_interval_count
 * together. Mixed changes commit atomically. A scoped card-update session may send only
 * payment_method_id and expected_version. Send expected_version to reject concurrent changes. A
 * card whose setup hasn't finished returns 409 ACTION_NOT_ALLOWED with reason status_not_reached.
 * Once setup finishes, send a new request with a new Idempotency-Key.
 * @see reference/me.md#meupdatesubscription
 * PATCH /v1/me/subscriptions/{subscription_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateSubscription("example", {}, { idempotencyKey: idempotencyKey })
 */
    updateSubscription(subscription_id: InputValue<string>, params: (InputValue<UpdateMeSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerSubscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meupdatesubscription
     */
    updateSubscriptionWithResponse(subscription_id: InputValue<string>, params: (InputValue<UpdateMeSubscriptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerSubscriptionResponse>>;
    /**
 * Swaps a subscription line to an offered variant for future renewals. Requires a full buyer
 * session. Send expected_version to reject concurrent changes. The replacement must remain
 * deliverable to the subscription destination.
 * @see reference/me.md#meupdatesubscriptionlineitem
 * PATCH /v1/me/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.me.updateSubscriptionLineItem("example", "example", {variant_id:
 * "var_00000000000000000000000000"}, { idempotencyKey: idempotencyKey })
 */
    updateSubscriptionLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: (InputValue<UpdateMeSubscriptionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<BuyerSubscription>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/me.md#meupdatesubscriptionlineitem
     */
    updateSubscriptionLineItemWithResponse(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: (InputValue<UpdateMeSubscriptionLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"customer">): Promise<SdkResponse<BuyerSubscriptionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly me: MeResource;
}
