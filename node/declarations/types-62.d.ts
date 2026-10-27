import type { InputValue, Model } from '../runtime.js';
import type {
    BuyerRetentionOfferInput,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerSkipCapabilityInput,
    CallerSuppliedDeliveryMethodResultRequestInput
} from './types-2.js';
import type {
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CancelGiftCardNotificationRequestInput,
    CancelOrderPaymentAttemptRequestInput,
    CancelOrderPaymentRequestInput,
    CancelPaymentIntentRequestInput,
    CancelPayoutRequestInput,
    CancelReturnDispositionRequestInput,
    CancelReturnLineItemRequestInput,
    CancelReturnRequestInput,
    CancelReturnResolutionRequestInput,
    CancelSubscriptionRequestInput,
    CaptureOrderPaymentRequestInput,
    CapturePaymentIntentRequestInput,
    CashOutGiftCardRequestInput,
    ChangeMeSubscriptionBillingIntervalRequestInput,
    ChangeMeSubscriptionDeliveryRequestInput,
    ChangeMeSubscriptionQuantityRequestInput,
    ChangeSubscriptionPaymentMethodRequestInput,
    ChangeSubscriptionPlanRequestInput,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerFieldsInput,
    CheckoutCustomTextWriteConfigInput
} from './types-3.js';
import type {
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRecoveryEmailSettingsInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsInput,
    CheckoutSettingsInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigInput,
    CheckoutTipConfigInput,
    CloseCheckoutSessionRequestInput,
    CloseOrderRequestInput,
    CollectInvoiceRequestInput,
    CompleteReturnRequestInput,
    ConfigurationVersionRequestInput,
    ConfirmCheckoutSessionCustomerVerificationRequestInput
} from './types-4.js';
import type {
    ConfirmCustomerVerificationRequestInput,
    ConfirmEmailChangeRequestInput,
    ConfirmPaymentIntentRequestInput,
    ConfirmReturnResolutionRequestInput,
    CreateAPIKeyRequestInput,
    CreateBundleComponentRequestInput,
    CreateBundleRequestInput,
    CreateCategoryRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput,
    CreateCheckoutSessionRequestInput,
    CreateCheckoutSessionSavePaymentMethodVerificationRequestInput,
    CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput,
    CreateCreditNoteAllocationRequestInput,
    CreateCreditNoteRefundRequestInput
} from './types-5.js';
export declare function makeBuyerRetentionOffer(value: InputValue<BuyerRetentionOfferInput>): Model<BuyerRetentionOfferInput>;
export declare function makeBuyerReturnReplacementLineItemRequest(value: InputValue<BuyerReturnReplacementLineItemRequestInput>): Model<BuyerReturnReplacementLineItemRequestInput>;
export declare function makeBuyerSkipCapability(value: InputValue<BuyerSkipCapabilityInput>): Model<BuyerSkipCapabilityInput>;
export declare function makeCallerSuppliedDeliveryMethodResultRequest(value: InputValue<CallerSuppliedDeliveryMethodResultRequestInput>): Model<CallerSuppliedDeliveryMethodResultRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequest(value: InputValue<CallerSuppliedDeliveryOutcomeRequestInput>): Model<CallerSuppliedDeliveryOutcomeRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestAvailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestAvailableInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value: InputValue<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>): Model<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>;
export declare function makeCancelGiftCardNotificationRequest(value: InputValue<CancelGiftCardNotificationRequestInput>): Model<CancelGiftCardNotificationRequestInput>;
export declare function makeCancelOrderPaymentAttemptRequest(value: InputValue<CancelOrderPaymentAttemptRequestInput>): Model<CancelOrderPaymentAttemptRequestInput>;
export declare function makeCancelOrderPaymentRequest(value: InputValue<CancelOrderPaymentRequestInput>): Model<CancelOrderPaymentRequestInput>;
export declare function makeCancelPaymentIntentRequest(value: InputValue<CancelPaymentIntentRequestInput>): Model<CancelPaymentIntentRequestInput>;
export declare function makeCancelPayoutRequest(value: InputValue<CancelPayoutRequestInput>): Model<CancelPayoutRequestInput>;
export declare function makeCancelReturnDispositionRequest(value: InputValue<CancelReturnDispositionRequestInput>): Model<CancelReturnDispositionRequestInput>;
export declare function makeCancelReturnLineItemRequest(value: InputValue<CancelReturnLineItemRequestInput>): Model<CancelReturnLineItemRequestInput>;
export declare function makeCancelReturnRequest(value: InputValue<CancelReturnRequestInput>): Model<CancelReturnRequestInput>;
export declare function makeCancelReturnResolutionRequest(value: InputValue<CancelReturnResolutionRequestInput>): Model<CancelReturnResolutionRequestInput>;
export declare function makeCancelSubscriptionRequest(value: InputValue<CancelSubscriptionRequestInput>): Model<CancelSubscriptionRequestInput>;
export declare function makeCaptureOrderPaymentRequest(value: InputValue<CaptureOrderPaymentRequestInput>): Model<CaptureOrderPaymentRequestInput>;
export declare function makeCapturePaymentIntentRequest(value: InputValue<CapturePaymentIntentRequestInput>): Model<CapturePaymentIntentRequestInput>;
export declare function makeCashOutGiftCardRequest(value: InputValue<CashOutGiftCardRequestInput>): Model<CashOutGiftCardRequestInput>;
export declare function makeChangeMeSubscriptionBillingIntervalRequest(value: InputValue<ChangeMeSubscriptionBillingIntervalRequestInput>): Model<ChangeMeSubscriptionBillingIntervalRequestInput>;
export declare function makeChangeMeSubscriptionDeliveryRequest(value: InputValue<ChangeMeSubscriptionDeliveryRequestInput>): Model<ChangeMeSubscriptionDeliveryRequestInput>;
export declare function makeChangeMeSubscriptionQuantityRequest(value: InputValue<ChangeMeSubscriptionQuantityRequestInput>): Model<ChangeMeSubscriptionQuantityRequestInput>;
export declare function makeChangeSubscriptionPaymentMethodRequest(value: InputValue<ChangeSubscriptionPaymentMethodRequestInput>): Model<ChangeSubscriptionPaymentMethodRequestInput>;
export declare function makeChangeSubscriptionPlanRequest(value: InputValue<ChangeSubscriptionPlanRequestInput>): Model<ChangeSubscriptionPlanRequestInput>;
export declare function makeCheckoutBuyerContactRequest(value: InputValue<CheckoutBuyerContactRequestInput>): Model<CheckoutBuyerContactRequestInput>;
export declare function makeCheckoutBuyerFields(value: InputValue<CheckoutBuyerFieldsInput>): Model<CheckoutBuyerFieldsInput>;
export declare function makeCheckoutCustomTextWriteConfig(value: InputValue<CheckoutCustomTextWriteConfigInput>): Model<CheckoutCustomTextWriteConfigInput>;
export declare function makeCheckoutLegalConfigRequest(value: InputValue<CheckoutLegalConfigRequestInput>): Model<CheckoutLegalConfigRequestInput>;
export declare function makeCheckoutPaymentConfigRequest(value: InputValue<CheckoutPaymentConfigRequestInput>): Model<CheckoutPaymentConfigRequestInput>;
export declare function makeCheckoutPrefillRequest(value: InputValue<CheckoutPrefillRequestInput>): Model<CheckoutPrefillRequestInput>;
export declare function makeCheckoutPromotionConfig(value: InputValue<CheckoutPromotionConfigInput>): Model<CheckoutPromotionConfigInput>;
export declare function makeCheckoutQuickPayItemRequest(value: InputValue<CheckoutQuickPayItemRequestInput>): Model<CheckoutQuickPayItemRequestInput>;
export declare function makeCheckoutRecoveryEmailSettings(value: InputValue<CheckoutRecoveryEmailSettingsInput>): Model<CheckoutRecoveryEmailSettingsInput>;
export declare function makeCheckoutRedirectsRequest(value: InputValue<CheckoutRedirectsRequestInput>): Model<CheckoutRedirectsRequestInput>;
export declare function makeCheckoutSavedPaymentDetailsSettings(value: InputValue<CheckoutSavedPaymentDetailsSettingsInput>): Model<CheckoutSavedPaymentDetailsSettingsInput>;
export declare function makeCheckoutSettings(value: InputValue<CheckoutSettingsInput>): Model<CheckoutSettingsInput>;
export declare function makeCheckoutSubscriptionTermsRequest(value: InputValue<CheckoutSubscriptionTermsRequestInput>): Model<CheckoutSubscriptionTermsRequestInput>;
export declare function makeCheckoutTaxConfig(value: InputValue<CheckoutTaxConfigInput>): Model<CheckoutTaxConfigInput>;
export declare function makeCheckoutTipConfig(value: InputValue<CheckoutTipConfigInput>): Model<CheckoutTipConfigInput>;
export declare function makeCloseCheckoutSessionRequest(value: InputValue<CloseCheckoutSessionRequestInput>): Model<CloseCheckoutSessionRequestInput>;
export declare function makeCloseOrderRequest(value: InputValue<CloseOrderRequestInput>): Model<CloseOrderRequestInput>;
export declare function makeCollectInvoiceRequest(value: InputValue<CollectInvoiceRequestInput>): Model<CollectInvoiceRequestInput>;
export declare function makeCompleteReturnRequest(value: InputValue<CompleteReturnRequestInput>): Model<CompleteReturnRequestInput>;
export declare function makeConfigurationVersionRequest(value: InputValue<ConfigurationVersionRequestInput>): Model<ConfigurationVersionRequestInput>;
export declare function makeConfirmCheckoutSessionCustomerVerificationRequest(value: InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>): Model<ConfirmCheckoutSessionCustomerVerificationRequestInput>;
export declare function makeConfirmCustomerVerificationRequest(value: InputValue<ConfirmCustomerVerificationRequestInput>): Model<ConfirmCustomerVerificationRequestInput>;
export declare function makeConfirmEmailChangeRequest(value: InputValue<ConfirmEmailChangeRequestInput>): Model<ConfirmEmailChangeRequestInput>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>): Model<Exclude<ConfirmPaymentIntentRequestInput & object, readonly unknown[]>>;
export declare function makeConfirmPaymentIntentRequest(value: InputValue<ConfirmPaymentIntentRequestInput>): Model<ConfirmPaymentIntentRequestInput>;
export declare function makeConfirmReturnResolutionRequest(value: InputValue<ConfirmReturnResolutionRequestInput>): Model<ConfirmReturnResolutionRequestInput>;
export declare function makeCreateAPIKeyRequest(value: InputValue<CreateAPIKeyRequestInput>): Model<CreateAPIKeyRequestInput>;
export declare function makeCreateBundleComponentRequest(value: InputValue<CreateBundleComponentRequestInput>): Model<CreateBundleComponentRequestInput>;
export declare function makeCreateBundleRequest(value: InputValue<CreateBundleRequestInput>): Model<CreateBundleRequestInput>;
export declare function makeCreateCategoryRequest(value: InputValue<CreateCategoryRequestInput>): Model<CreateCategoryRequestInput>;
export declare function makeCreateCheckoutDeliveryQuoteRequest(value: InputValue<CreateCheckoutDeliveryQuoteRequestInput>): Model<CreateCheckoutDeliveryQuoteRequestInput>;
export declare function makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest(value: InputValue<CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput>): Model<CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequestInput>;
export declare function makeCreateCheckoutSessionCustomerVerificationRequest(value: InputValue<Exclude<CreateCheckoutSessionCustomerVerificationRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateCheckoutSessionCustomerVerificationRequestInput & object, readonly unknown[]>>;
export declare function makeCreateCheckoutSessionCustomerVerificationRequest(value: InputValue<CreateCheckoutSessionCustomerVerificationRequestInput>): Model<CreateCheckoutSessionCustomerVerificationRequestInput>;
export declare function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value: InputValue<CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput>): Model<CreateCheckoutSessionGiftCardPurchaseVerificationRequestInput>;
export declare function makeCreateCheckoutSessionRequest(value: InputValue<CreateCheckoutSessionRequestInput>): Model<CreateCheckoutSessionRequestInput>;
export declare function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value: InputValue<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>): Model<CreateCheckoutSessionSavePaymentMethodVerificationRequestInput>;
export declare function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value: InputValue<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>): Model<CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput>;
export declare function makeCreateCreditNoteAllocationRequest(value: InputValue<CreateCreditNoteAllocationRequestInput>): Model<CreateCreditNoteAllocationRequestInput>;
export declare function makeCreateCreditNoteRefundRequest(value: InputValue<CreateCreditNoteRefundRequestInput>): Model<CreateCreditNoteRefundRequestInput>;
