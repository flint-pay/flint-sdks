import type { InputValue, Model } from '../runtime.js';
import type {
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CancelFulfillmentRequestInput,
    CancelGiftCardNotificationRequestInput,
    CancelInventoryCountRequestInput,
    CancelInventoryTransferRequestInput,
    CancelMeSubscriptionRequestInput,
    CancelOrderPaymentAttemptRequestInput,
    CancelPaymentIntentRequestInput,
    CancelPayoutRequestInput,
    CancelReturnDispositionRequestInput,
    CancelReturnLineItemRequestInput,
    CancelReturnRequestInput,
    CancelReturnResolutionRequestInput
} from './types-4.js';
import type {
    CancelSubscriptionRequestInput,
    CapturePaymentIntentRequestInput,
    CapturePaymentSplitRequestInput,
    CashOutGiftCardRequestInput,
    ChangeMeSubscriptionPlanRequestInput,
    ChangeMeSubscriptionQuantityRequestInput,
    ChangeSubscriptionPlanRequestInput,
    ChangeSubscriptionQuantityRequestInput,
    CheckInTicketRequestInput,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutQuickPayItemRequestInput
} from './types-5.js';
import type {
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput,
    CheckoutSettingsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxCalculationRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput,
    CloseCheckoutSessionRequestInput,
    CloseGiftCardRequestInput
} from './types-6.js';
import type {
    CloseOrderRequestInput,
    CollectInvoiceRequestInput,
    CommitInventoryReservationRequestInput,
    CompleteFulfillmentRequestInput,
    CompleteReturnRequestInput,
    ConfigurationVersionRequestInput,
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    ConfirmCustomerVerificationRequestInput,
    ConfirmEmailChangeRequestInput,
    ConfirmPaymentIntentRequestInput,
    ConfirmPaymentIntentRequestAttachedInput,
    ConfirmPaymentIntentRequestPaymentMethodInput,
    ConfirmPaymentIntentRequestReaderInput,
    ConfirmPaymentIntentRequestStripeConfirmationTokenInput,
    ConfirmPaymentIntentRequestTokenInput,
    ConfirmReturnResolutionRequestInput,
    ConnectTaxConnectionRequestInput,
    ConsumeInventoryReservationRequestInput,
    CreateAPIKeyRequestInput,
    CreateAPIKeyRequestFullInput
} from './types-7.js';
export declare function makeCallerSuppliedDeliveryMethodResultRequest(value: InputValue<CallerSuppliedDeliveryMethodResultRequestInput>): Model<CallerSuppliedDeliveryMethodResultRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequest(value: InputValue<CallerSuppliedDeliveryOutcomeRequestInput>): Model<CallerSuppliedDeliveryOutcomeRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestAvailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestAvailableInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value: InputValue<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>): Model<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>;
export declare function makeCancelFulfillmentRequest(value: InputValue<CancelFulfillmentRequestInput>): Model<CancelFulfillmentRequestInput>;
export declare function makeCancelGiftCardNotificationRequest(value: InputValue<CancelGiftCardNotificationRequestInput>): Model<CancelGiftCardNotificationRequestInput>;
export declare function makeCancelInventoryCountRequest(value: InputValue<CancelInventoryCountRequestInput>): Model<CancelInventoryCountRequestInput>;
export declare function makeCancelInventoryTransferRequest(value: InputValue<CancelInventoryTransferRequestInput>): Model<CancelInventoryTransferRequestInput>;
export declare function makeCancelMeSubscriptionRequest(value: InputValue<CancelMeSubscriptionRequestInput>): Model<CancelMeSubscriptionRequestInput>;
export declare function makeCancelOrderPaymentAttemptRequest(value: InputValue<CancelOrderPaymentAttemptRequestInput>): Model<CancelOrderPaymentAttemptRequestInput>;
export declare function makeCancelPaymentIntentRequest(value: InputValue<CancelPaymentIntentRequestInput>): Model<CancelPaymentIntentRequestInput>;
export declare function makeCancelPayoutRequest(value: InputValue<CancelPayoutRequestInput>): Model<CancelPayoutRequestInput>;
export declare function makeCancelReturnDispositionRequest(value: InputValue<CancelReturnDispositionRequestInput>): Model<CancelReturnDispositionRequestInput>;
export declare function makeCancelReturnLineItemRequest(value: InputValue<CancelReturnLineItemRequestInput>): Model<CancelReturnLineItemRequestInput>;
export declare function makeCancelReturnRequest(value: InputValue<CancelReturnRequestInput>): Model<CancelReturnRequestInput>;
export declare function makeCancelReturnResolutionRequest(value: InputValue<CancelReturnResolutionRequestInput>): Model<CancelReturnResolutionRequestInput>;
export declare function makeCancelSubscriptionRequest(value: InputValue<CancelSubscriptionRequestInput>): Model<CancelSubscriptionRequestInput>;
export declare function makeCapturePaymentIntentRequest(value: InputValue<CapturePaymentIntentRequestInput>): Model<CapturePaymentIntentRequestInput>;
export declare function makeCapturePaymentSplitRequest(value: InputValue<CapturePaymentSplitRequestInput>): Model<CapturePaymentSplitRequestInput>;
export declare function makeCashOutGiftCardRequest(value: InputValue<CashOutGiftCardRequestInput>): Model<CashOutGiftCardRequestInput>;
export declare function makeChangeMeSubscriptionPlanRequest(value: InputValue<ChangeMeSubscriptionPlanRequestInput>): Model<ChangeMeSubscriptionPlanRequestInput>;
export declare function makeChangeMeSubscriptionQuantityRequest(value: InputValue<ChangeMeSubscriptionQuantityRequestInput>): Model<ChangeMeSubscriptionQuantityRequestInput>;
export declare function makeChangeSubscriptionPlanRequest(value: InputValue<ChangeSubscriptionPlanRequestInput>): Model<ChangeSubscriptionPlanRequestInput>;
export declare function makeChangeSubscriptionQuantityRequest(value: InputValue<ChangeSubscriptionQuantityRequestInput>): Model<ChangeSubscriptionQuantityRequestInput>;
export declare function makeCheckInTicketRequest(value: InputValue<CheckInTicketRequestInput>): Model<CheckInTicketRequestInput>;
export declare function makeCheckoutBuyerContactRequest(value: InputValue<CheckoutBuyerContactRequestInput>): Model<CheckoutBuyerContactRequestInput>;
export declare function makeCheckoutBuyerFieldsRequest(value: InputValue<CheckoutBuyerFieldsRequestInput>): Model<CheckoutBuyerFieldsRequestInput>;
export declare function makeCheckoutCustomTextWriteConfig(value: InputValue<CheckoutCustomTextWriteConfigInput>): Model<CheckoutCustomTextWriteConfigInput>;
export declare function makeCheckoutLegalConfigRequest(value: InputValue<CheckoutLegalConfigRequestInput>): Model<CheckoutLegalConfigRequestInput>;
export declare function makeCheckoutPaymentConfigRequest(value: InputValue<CheckoutPaymentConfigRequestInput>): Model<CheckoutPaymentConfigRequestInput>;
export declare function makeCheckoutPrefillRequest(value: InputValue<CheckoutPrefillRequestInput>): Model<CheckoutPrefillRequestInput>;
export declare function makeCheckoutPromotionConfigRequest(value: InputValue<CheckoutPromotionConfigRequestInput>): Model<CheckoutPromotionConfigRequestInput>;
export declare function makeCheckoutQuickPayItemRequest(value: InputValue<CheckoutQuickPayItemRequestInput>): Model<CheckoutQuickPayItemRequestInput>;
export declare function makeCheckoutRecoveryEmailSettingsRequest(value: InputValue<CheckoutRecoveryEmailSettingsRequestInput>): Model<CheckoutRecoveryEmailSettingsRequestInput>;
export declare function makeCheckoutRedirectsRequest(value: InputValue<CheckoutRedirectsRequestInput>): Model<CheckoutRedirectsRequestInput>;
export declare function makeCheckoutSavedPaymentDetailsSettingsRequest(value: InputValue<CheckoutSavedPaymentDetailsSettingsRequestInput>): Model<CheckoutSavedPaymentDetailsSettingsRequestInput>;
export declare function makeCheckoutSettingsRequest(value: InputValue<CheckoutSettingsRequestInput>): Model<CheckoutSettingsRequestInput>;
export declare function makeCheckoutSubscriptionTermsRequest(value: InputValue<CheckoutSubscriptionTermsRequestInput>): Model<CheckoutSubscriptionTermsRequestInput>;
export declare function makeCheckoutTaxCalculationRequest(value: InputValue<CheckoutTaxCalculationRequestInput>): Model<CheckoutTaxCalculationRequestInput>;
export declare function makeCheckoutTaxConfigRequest(value: InputValue<CheckoutTaxConfigRequestInput>): Model<CheckoutTaxConfigRequestInput>;
export declare function makeCheckoutTipConfigRequest(value: InputValue<CheckoutTipConfigRequestInput>): Model<CheckoutTipConfigRequestInput>;
export declare function makeCloseCheckoutSessionRequest(value: InputValue<CloseCheckoutSessionRequestInput>): Model<CloseCheckoutSessionRequestInput>;
export declare function makeCloseGiftCardRequest(value: InputValue<CloseGiftCardRequestInput>): Model<CloseGiftCardRequestInput>;
export declare function makeCloseOrderRequest(value: InputValue<CloseOrderRequestInput>): Model<CloseOrderRequestInput>;
export declare function makeCollectInvoiceRequest(value: InputValue<CollectInvoiceRequestInput>): Model<CollectInvoiceRequestInput>;
export declare function makeCommitInventoryReservationRequest(value: InputValue<CommitInventoryReservationRequestInput>): Model<CommitInventoryReservationRequestInput>;
export declare function makeCompleteFulfillmentRequest(value: InputValue<CompleteFulfillmentRequestInput>): Model<CompleteFulfillmentRequestInput>;
export declare function makeCompleteReturnRequest(value: InputValue<CompleteReturnRequestInput>): Model<CompleteReturnRequestInput>;
export declare function makeConfigurationVersionRequest(value: InputValue<ConfigurationVersionRequestInput>): Model<ConfigurationVersionRequestInput>;
export declare function makeConfirmCheckoutSessionCustomerVerificationRequest(value: InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>): Model<ConfirmCheckoutSessionCustomerVerificationRequestInput>;
export declare function makeConfirmCustomerVerificationRequest(value: InputValue<ConfirmCustomerVerificationRequestInput>): Model<ConfirmCustomerVerificationRequestInput>;
export declare function makeConfirmEmailChangeRequest(value: InputValue<ConfirmEmailChangeRequestInput>): Model<ConfirmEmailChangeRequestInput>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>): Model<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<ConfirmPaymentIntentRequestInput>): Model<ConfirmPaymentIntentRequestInput>;
export declare function makeConfirmPaymentIntentRequestAttached(value: InputValue<ConfirmPaymentIntentRequestAttachedInput>): Model<ConfirmPaymentIntentRequestAttachedInput>;
export declare function makeConfirmPaymentIntentRequestPaymentMethod(value: InputValue<ConfirmPaymentIntentRequestPaymentMethodInput>): Model<ConfirmPaymentIntentRequestPaymentMethodInput>;
export declare function makeConfirmPaymentIntentRequestReader(value: InputValue<ConfirmPaymentIntentRequestReaderInput>): Model<ConfirmPaymentIntentRequestReaderInput>;
export declare function makeConfirmPaymentIntentRequestStripeConfirmationToken(value: InputValue<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>): Model<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>;
export declare function makeConfirmPaymentIntentRequestToken(value: InputValue<ConfirmPaymentIntentRequestTokenInput>): Model<ConfirmPaymentIntentRequestTokenInput>;
export declare function makeConfirmReturnResolutionRequest(value: InputValue<ConfirmReturnResolutionRequestInput>): Model<ConfirmReturnResolutionRequestInput>;
export declare function makeConnectTaxConnectionRequest(value: InputValue<ConnectTaxConnectionRequestInput>): Model<ConnectTaxConnectionRequestInput>;
export declare function makeConsumeInventoryReservationRequest(value: InputValue<ConsumeInventoryReservationRequestInput>): Model<ConsumeInventoryReservationRequestInput>;
export declare function makeCreateAPIKeyRequest(value: InputValue<CreateAPIKeyRequestInput>): Model<CreateAPIKeyRequestInput>;
export declare function makeCreateAPIKeyRequestFull(value: InputValue<CreateAPIKeyRequestFullInput>): Model<CreateAPIKeyRequestFullInput>;
