import type { InputValue, Model } from '../runtime.js';
import type {
    ApplyDiscountRequestManualInput,
    ApplyDiscountRequestPromotionInput,
    ApplyInventoryCountRequestInput,
    ApplyOrderGiftCardRequestInput,
    ApplySubscriptionPromotionRequestInput,
    AssessInvoiceLateFeeRequestInput,
    AssignToUnconfiguredDeliveryProfileRequestInput
} from './types-0.js';
import type {
    BrandingSettingsRequestInput,
    BuyerCancelReturnRequestInput,
    BuyerCapabilitiesRequestInput,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCreateReturnPreviewRequestEligibilityInput,
    BuyerCreateReturnPreviewRequestResolutionInput,
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnResolutionPreviewRequestInput
} from './types-1.js';
import type { BuyerInstructionsConfigRequestInput, BuyerPauseCapabilityInput } from './types-2.js';
import type {
    BuyerRetentionOfferRequestInput,
    BuyerReturnReplacementLineItemInputBundleInput,
    BuyerReturnReplacementLineItemInputVariantInput,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerSkipCapabilityInput
} from './types-3.js';
import type {
    CLIContextsRequestInput,
    CLIDeviceRequestInput,
    CLIReauthorizeRequestInput,
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
    CancelReturnResolutionRequestInput,
    CancelSubscriptionRequestInput,
    CapturePaymentIntentRequestInput,
    CashOutGiftCardRequestInput
} from './types-4.js';
import type {
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
    CheckoutQuickPayItemRequestInput,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from './types-5.js';
import type {
    CheckoutSettingsRequestInput,
    CheckoutSubscriptionTermsRequestInput,
    CheckoutTaxConfigRequestInput
} from './types-6.js';
export declare function makeApplyDiscountRequestManual(value: InputValue<ApplyDiscountRequestManualInput>): Model<ApplyDiscountRequestManualInput>;
export declare function makeApplyDiscountRequestPromotion(value: InputValue<ApplyDiscountRequestPromotionInput>): Model<ApplyDiscountRequestPromotionInput>;
export declare function makeApplyInventoryCountRequest(value: InputValue<ApplyInventoryCountRequestInput>): Model<ApplyInventoryCountRequestInput>;
export declare function makeApplyOrderGiftCardRequest(value: InputValue<ApplyOrderGiftCardRequestInput>): Model<ApplyOrderGiftCardRequestInput>;
export declare function makeApplySubscriptionPromotionRequest(value: InputValue<ApplySubscriptionPromotionRequestInput>): Model<ApplySubscriptionPromotionRequestInput>;
export declare function makeAssessInvoiceLateFeeRequest(value: InputValue<AssessInvoiceLateFeeRequestInput>): Model<AssessInvoiceLateFeeRequestInput>;
export declare function makeAssignToUnconfiguredDeliveryProfileRequest(value: InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>): Model<AssignToUnconfiguredDeliveryProfileRequestInput>;
export declare function makeBrandingSettingsRequest(value: InputValue<BrandingSettingsRequestInput>): Model<BrandingSettingsRequestInput>;
export declare function makeBuyerCancelReturnRequest(value: InputValue<BuyerCancelReturnRequestInput>): Model<BuyerCancelReturnRequestInput>;
export declare function makeBuyerCapabilitiesRequest(value: InputValue<BuyerCapabilitiesRequestInput>): Model<BuyerCapabilitiesRequestInput>;
export declare function makeBuyerCreateReturnPreviewRequest(value: InputValue<BuyerCreateReturnPreviewRequestInput>): Model<BuyerCreateReturnPreviewRequestInput>;
export declare function makeBuyerCreateReturnPreviewRequestEligibility(value: InputValue<BuyerCreateReturnPreviewRequestEligibilityInput>): Model<BuyerCreateReturnPreviewRequestEligibilityInput>;
export declare function makeBuyerCreateReturnPreviewRequestResolution(value: InputValue<BuyerCreateReturnPreviewRequestResolutionInput>): Model<BuyerCreateReturnPreviewRequestResolutionInput>;
export declare function makeBuyerCreateReturnRequest(value: InputValue<BuyerCreateReturnRequestInput>): Model<BuyerCreateReturnRequestInput>;
export declare function makeBuyerCreateReturnResolutionPreviewRequest(value: InputValue<BuyerCreateReturnResolutionPreviewRequestInput>): Model<BuyerCreateReturnResolutionPreviewRequestInput>;
export declare function makeBuyerInstructionsConfigRequest(value: InputValue<BuyerInstructionsConfigRequestInput>): Model<BuyerInstructionsConfigRequestInput>;
export declare function makeBuyerPauseCapability(value: InputValue<BuyerPauseCapabilityInput>): Model<BuyerPauseCapabilityInput>;
export declare function makeBuyerRetentionOfferRequest(value: InputValue<BuyerRetentionOfferRequestInput>): Model<BuyerRetentionOfferRequestInput>;
export declare function makeBuyerReturnReplacementLineItemInputBundle(value: InputValue<BuyerReturnReplacementLineItemInputBundleInput>): Model<BuyerReturnReplacementLineItemInputBundleInput>;
export declare function makeBuyerReturnReplacementLineItemInputVariant(value: InputValue<BuyerReturnReplacementLineItemInputVariantInput>): Model<BuyerReturnReplacementLineItemInputVariantInput>;
export declare function makeBuyerReturnReplacementLineItemRequest(value: InputValue<BuyerReturnReplacementLineItemRequestInput>): Model<BuyerReturnReplacementLineItemRequestInput>;
export declare function makeBuyerSkipCapability(value: InputValue<BuyerSkipCapabilityInput>): Model<BuyerSkipCapabilityInput>;
export declare function makeCLIContextsRequest(value: InputValue<CLIContextsRequestInput>): Model<CLIContextsRequestInput>;
export declare function makeCLIDeviceRequest(value: InputValue<CLIDeviceRequestInput>): Model<CLIDeviceRequestInput>;
export declare function makeCLIReauthorizeRequest(value: InputValue<CLIReauthorizeRequestInput>): Model<CLIReauthorizeRequestInput>;
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
export declare function makeCheckoutTaxConfigRequest(value: InputValue<CheckoutTaxConfigRequestInput>): Model<CheckoutTaxConfigRequestInput>;
