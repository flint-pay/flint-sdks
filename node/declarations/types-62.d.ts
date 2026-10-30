import type { InputValue, Model } from '../runtime.js';
import type {
    ApplyDiscountRequestPromotionInput,
    ApplyOrderGiftCardRequestInput,
    AssessInvoiceLateFeeRequestInput,
    AssignToUnconfiguredDeliveryProfileRequestInput
} from './types-0.js';
import type {
    BrandingSettingsRequestInput,
    BuyerCapabilitiesInput,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCreateReturnPreviewRequestEligibilityInput,
    BuyerCreateReturnPreviewRequestResolutionInput,
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnResolutionPreviewRequestInput
} from './types-1.js';
import type { BuyerInstructionsConfigRequestInput, BuyerPauseCapabilityInput, BuyerRetentionOfferInput } from './types-2.js';
import type {
    BuyerReturnReplacementLineItemInputBundleInput,
    BuyerReturnReplacementLineItemInputVariantInput,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerSkipCapabilityInput,
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CancelGiftCardNotificationRequestInput,
    CancelOrderPaymentAttemptRequestInput,
    CancelPaymentIntentRequestInput,
    CancelPayoutRequestInput,
    CancelReturnDispositionRequestInput,
    CancelReturnLineItemRequestInput
} from './types-3.js';
import type {
    CancelReturnRequestInput,
    CancelReturnResolutionRequestInput,
    CancelSubscriptionRequestInput,
    CapturePaymentIntentRequestInput,
    CashOutGiftCardRequestInput,
    ChangeSubscriptionPlanRequestInput,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from './types-4.js';
import type {
    CheckoutSettingsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigRequestInput,
    CheckoutTipConfigRequestInput,
    CloseCheckoutSessionRequestInput,
    CloseOrderRequestInput,
    CollectInvoiceRequestInput,
    CompleteReturnRequestInput,
    ConfigurationVersionRequestInput
} from './types-5.js';
import type {
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    ConfirmCustomerVerificationRequestInput,
    ConfirmEmailChangeRequestInput,
    ConfirmPaymentIntentRequestInput,
    ConfirmPaymentIntentRequestAttachedInput,
    ConfirmPaymentIntentRequestPaymentMethodInput,
    ConfirmPaymentIntentRequestStripeConfirmationTokenInput,
    ConfirmPaymentIntentRequestTokenInput,
    ConfirmReturnResolutionRequestInput
} from './types-6.js';
export declare function makeApplyDiscountRequestPromotion(value: InputValue<ApplyDiscountRequestPromotionInput>): Model<ApplyDiscountRequestPromotionInput>;
export declare function makeApplyOrderGiftCardRequest(value: InputValue<ApplyOrderGiftCardRequestInput>): Model<ApplyOrderGiftCardRequestInput>;
export declare function makeAssessInvoiceLateFeeRequest(value: InputValue<AssessInvoiceLateFeeRequestInput>): Model<AssessInvoiceLateFeeRequestInput>;
export declare function makeAssignToUnconfiguredDeliveryProfileRequest(value: InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>): Model<AssignToUnconfiguredDeliveryProfileRequestInput>;
export declare function makeBrandingSettingsRequest(value: InputValue<BrandingSettingsRequestInput>): Model<BrandingSettingsRequestInput>;
export declare function makeBuyerCapabilities(value: InputValue<BuyerCapabilitiesInput>): Model<BuyerCapabilitiesInput>;
export declare function makeBuyerCreateReturnPreviewRequest(value: InputValue<BuyerCreateReturnPreviewRequestInput>): Model<BuyerCreateReturnPreviewRequestInput>;
export declare function makeBuyerCreateReturnPreviewRequestEligibility(value: InputValue<BuyerCreateReturnPreviewRequestEligibilityInput>): Model<BuyerCreateReturnPreviewRequestEligibilityInput>;
export declare function makeBuyerCreateReturnPreviewRequestResolution(value: InputValue<BuyerCreateReturnPreviewRequestResolutionInput>): Model<BuyerCreateReturnPreviewRequestResolutionInput>;
export declare function makeBuyerCreateReturnRequest(value: InputValue<BuyerCreateReturnRequestInput>): Model<BuyerCreateReturnRequestInput>;
export declare function makeBuyerCreateReturnResolutionPreviewRequest(value: InputValue<BuyerCreateReturnResolutionPreviewRequestInput>): Model<BuyerCreateReturnResolutionPreviewRequestInput>;
export declare function makeBuyerInstructionsConfigRequest(value: InputValue<BuyerInstructionsConfigRequestInput>): Model<BuyerInstructionsConfigRequestInput>;
export declare function makeBuyerPauseCapability(value: InputValue<BuyerPauseCapabilityInput>): Model<BuyerPauseCapabilityInput>;
export declare function makeBuyerRetentionOffer(value: InputValue<BuyerRetentionOfferInput>): Model<BuyerRetentionOfferInput>;
export declare function makeBuyerReturnReplacementLineItemInputBundle(value: InputValue<BuyerReturnReplacementLineItemInputBundleInput>): Model<BuyerReturnReplacementLineItemInputBundleInput>;
export declare function makeBuyerReturnReplacementLineItemInputVariant(value: InputValue<BuyerReturnReplacementLineItemInputVariantInput>): Model<BuyerReturnReplacementLineItemInputVariantInput>;
export declare function makeBuyerReturnReplacementLineItemRequest(value: InputValue<BuyerReturnReplacementLineItemRequestInput>): Model<BuyerReturnReplacementLineItemRequestInput>;
export declare function makeBuyerSkipCapability(value: InputValue<BuyerSkipCapabilityInput>): Model<BuyerSkipCapabilityInput>;
export declare function makeCallerSuppliedDeliveryMethodResultRequest(value: InputValue<CallerSuppliedDeliveryMethodResultRequestInput>): Model<CallerSuppliedDeliveryMethodResultRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequest(value: InputValue<CallerSuppliedDeliveryOutcomeRequestInput>): Model<CallerSuppliedDeliveryOutcomeRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestAvailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestAvailableInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value: InputValue<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>): Model<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>;
export declare function makeCancelGiftCardNotificationRequest(value: InputValue<CancelGiftCardNotificationRequestInput>): Model<CancelGiftCardNotificationRequestInput>;
export declare function makeCancelOrderPaymentAttemptRequest(value: InputValue<CancelOrderPaymentAttemptRequestInput>): Model<CancelOrderPaymentAttemptRequestInput>;
export declare function makeCancelPaymentIntentRequest(value: InputValue<CancelPaymentIntentRequestInput>): Model<CancelPaymentIntentRequestInput>;
export declare function makeCancelPayoutRequest(value: InputValue<CancelPayoutRequestInput>): Model<CancelPayoutRequestInput>;
export declare function makeCancelReturnDispositionRequest(value: InputValue<CancelReturnDispositionRequestInput>): Model<CancelReturnDispositionRequestInput>;
export declare function makeCancelReturnLineItemRequest(value: InputValue<CancelReturnLineItemRequestInput>): Model<CancelReturnLineItemRequestInput>;
export declare function makeCancelReturnRequest(value: InputValue<CancelReturnRequestInput>): Model<CancelReturnRequestInput>;
export declare function makeCancelReturnResolutionRequest(value: InputValue<CancelReturnResolutionRequestInput>): Model<CancelReturnResolutionRequestInput>;
export declare function makeCancelSubscriptionRequest(value: InputValue<CancelSubscriptionRequestInput>): Model<CancelSubscriptionRequestInput>;
export declare function makeCapturePaymentIntentRequest(value: InputValue<CapturePaymentIntentRequestInput>): Model<CapturePaymentIntentRequestInput>;
export declare function makeCashOutGiftCardRequest(value: InputValue<CashOutGiftCardRequestInput>): Model<CashOutGiftCardRequestInput>;
export declare function makeChangeSubscriptionPlanRequest(value: InputValue<ChangeSubscriptionPlanRequestInput>): Model<ChangeSubscriptionPlanRequestInput>;
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
export declare function makeCheckoutTaxConfigRequest(value: InputValue<CheckoutTaxConfigRequestInput>): Model<CheckoutTaxConfigRequestInput>;
export declare function makeCheckoutTipConfigRequest(value: InputValue<CheckoutTipConfigRequestInput>): Model<CheckoutTipConfigRequestInput>;
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
export declare function makeConfirmPaymentIntentRequestAttached(value: InputValue<ConfirmPaymentIntentRequestAttachedInput>): Model<ConfirmPaymentIntentRequestAttachedInput>;
export declare function makeConfirmPaymentIntentRequestPaymentMethod(value: InputValue<ConfirmPaymentIntentRequestPaymentMethodInput>): Model<ConfirmPaymentIntentRequestPaymentMethodInput>;
export declare function makeConfirmPaymentIntentRequestStripeConfirmationToken(value: InputValue<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>): Model<ConfirmPaymentIntentRequestStripeConfirmationTokenInput>;
export declare function makeConfirmPaymentIntentRequestToken(value: InputValue<ConfirmPaymentIntentRequestTokenInput>): Model<ConfirmPaymentIntentRequestTokenInput>;
export declare function makeConfirmReturnResolutionRequest(value: InputValue<ConfirmReturnResolutionRequestInput>): Model<ConfirmReturnResolutionRequestInput>;
