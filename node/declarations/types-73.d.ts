import type { InputValue, Model } from '../runtime.js';
import type {
    CreateFulfillmentRequestServiceInput,
    CreateFulfillmentRequestShipmentInput,
    CreateGiftCardFundingDispositionRequestInput,
    CreateGiftCardLoadRequestInput,
    CreateGiftCardNotificationRequestInput,
    CreateGiftCardRedemptionRequestInput,
    CreateGiftCardRedemptionRequestAutomaticInput,
    CreateGiftCardRedemptionRequestManualInput,
    CreateGiftCardRequestInput,
    CreateInlineModifierGroupRequestInput,
    CreateIntervalReportRequestInput
} from './types-9.js';
import type {
    CreateInventoryAdjustmentConditionChangeRequestInput,
    CreateInventoryAdjustmentCorrectionRequestInput,
    CreateInventoryAdjustmentCountedRequestInput,
    CreateInventoryAdjustmentQuantityRequestInput,
    CreateInventoryAdjustmentRequestInput,
    CreateInventoryAllocationPolicyRequestInput,
    CreateInventoryBackorderPolicyRequestInput,
    CreateInventoryCountRequestInput,
    CreateInventoryItemRequestInput,
    CreateInventoryReceiptRequestInput,
    CreateInventoryReservationRequestInput,
    CreateInventoryTransferRequestInput,
    CreateInvoiceIssueRequestInput,
    CreateInvoiceManualPaymentRequestInput,
    CreateInvoicePaymentTermRequestInput,
    CreateInvoiceQuickPayRequestInput,
    CreateInvoiceRequestInput,
    CreateInvoiceRequestOrderInput,
    CreateInvoiceRequestQuickPayInput,
    CreateLocationRequestInput,
    CreateMeCheckoutSessionInvoiceInput,
    CreateMeCheckoutSessionRequestInput,
    CreateMeCheckoutSessionReturnResolutionInput,
    CreateMeSubscriptionPreviewRequestInput,
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput,
    CreateMeSubscriptionPreviewRequestPlanChangeInput,
    CreateMeSubscriptionPreviewRequestQuantityChangeInput,
    CreateMerchantSignupRequestInput,
    CreateModifierGroupRequestInput,
    CreateModifierRequestInput,
    CreateModifierSetGroupInputExistingInput,
    CreateModifierSetGroupInputInlineInput
} from './types-10.js';
import type {
    CreateModifierSetGroupRequestInput,
    CreateModifierSetRequestInput,
    CreateOnboardingAccessLinkRequestInput,
    CreateOrderDiscountInput,
    CreateOrderDiscountManualInput,
    CreateOrderDiscountPromotionInput,
    CreateOrderEditRequestInput,
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemRequestInput,
    CreateOrderPaymentIntentRequestInput,
    CreateOrderRequestInput,
    CreateOrderTipInput,
    CreateOrderTipAmountInput,
    CreateOrderTipPercentInput,
    CreatePackageItemRequestInput,
    CreatePackageRequestInput,
    CreatePackageRequestCreatedInput,
    CreatePackageRequestShippedInput
} from './types-11.js';
export declare function makeCreateFulfillmentRequestService(value: InputValue<CreateFulfillmentRequestServiceInput>): Model<CreateFulfillmentRequestServiceInput>;
export declare function makeCreateFulfillmentRequestShipment(value: InputValue<CreateFulfillmentRequestShipmentInput>): Model<CreateFulfillmentRequestShipmentInput>;
export declare function makeCreateGiftCardFundingDispositionRequest(value: InputValue<CreateGiftCardFundingDispositionRequestInput>): Model<CreateGiftCardFundingDispositionRequestInput>;
export declare function makeCreateGiftCardLoadRequest(value: InputValue<CreateGiftCardLoadRequestInput>): Model<CreateGiftCardLoadRequestInput>;
export declare function makeCreateGiftCardNotificationRequest(value: InputValue<CreateGiftCardNotificationRequestInput>): Model<CreateGiftCardNotificationRequestInput>;
export declare function makeCreateGiftCardRedemptionRequest(value: InputValue<CreateGiftCardRedemptionRequestInput>): Model<CreateGiftCardRedemptionRequestInput>;
export declare function makeCreateGiftCardRedemptionRequestAutomatic(value: InputValue<CreateGiftCardRedemptionRequestAutomaticInput>): Model<CreateGiftCardRedemptionRequestAutomaticInput>;
export declare function makeCreateGiftCardRedemptionRequestManual(value: InputValue<CreateGiftCardRedemptionRequestManualInput>): Model<CreateGiftCardRedemptionRequestManualInput>;
export declare function makeCreateGiftCardRequest(value: InputValue<CreateGiftCardRequestInput>): Model<CreateGiftCardRequestInput>;
export declare function makeCreateInlineModifierGroupRequest(value: InputValue<CreateInlineModifierGroupRequestInput>): Model<CreateInlineModifierGroupRequestInput>;
export declare function makeCreateIntervalReportRequest(value: InputValue<CreateIntervalReportRequestInput>): Model<CreateIntervalReportRequestInput>;
export declare function makeCreateInventoryAdjustmentConditionChangeRequest(value: InputValue<CreateInventoryAdjustmentConditionChangeRequestInput>): Model<CreateInventoryAdjustmentConditionChangeRequestInput>;
export declare function makeCreateInventoryAdjustmentCorrectionRequest(value: InputValue<CreateInventoryAdjustmentCorrectionRequestInput>): Model<CreateInventoryAdjustmentCorrectionRequestInput>;
export declare function makeCreateInventoryAdjustmentCountedRequest(value: InputValue<CreateInventoryAdjustmentCountedRequestInput>): Model<CreateInventoryAdjustmentCountedRequestInput>;
export declare function makeCreateInventoryAdjustmentQuantityRequest(value: InputValue<CreateInventoryAdjustmentQuantityRequestInput>): Model<CreateInventoryAdjustmentQuantityRequestInput>;
export declare function makeCreateInventoryAdjustmentRequest(value: InputValue<Exclude<CreateInventoryAdjustmentRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateInventoryAdjustmentRequestInput & object, readonly unknown[]>>;
export declare function makeCreateInventoryAdjustmentRequest(value: InputValue<CreateInventoryAdjustmentRequestInput>): Model<CreateInventoryAdjustmentRequestInput>;
export declare function makeCreateInventoryAllocationPolicyRequest(value: InputValue<CreateInventoryAllocationPolicyRequestInput>): Model<CreateInventoryAllocationPolicyRequestInput>;
export declare function makeCreateInventoryBackorderPolicyRequest(value: InputValue<CreateInventoryBackorderPolicyRequestInput>): Model<CreateInventoryBackorderPolicyRequestInput>;
export declare function makeCreateInventoryCountRequest(value: InputValue<CreateInventoryCountRequestInput>): Model<CreateInventoryCountRequestInput>;
export declare function makeCreateInventoryItemRequest(value: InputValue<CreateInventoryItemRequestInput>): Model<CreateInventoryItemRequestInput>;
export declare function makeCreateInventoryReceiptRequest(value: InputValue<CreateInventoryReceiptRequestInput>): Model<CreateInventoryReceiptRequestInput>;
export declare function makeCreateInventoryReservationRequest(value: InputValue<CreateInventoryReservationRequestInput>): Model<CreateInventoryReservationRequestInput>;
export declare function makeCreateInventoryTransferRequest(value: InputValue<CreateInventoryTransferRequestInput>): Model<CreateInventoryTransferRequestInput>;
export declare function makeCreateInvoiceIssueRequest(value: InputValue<CreateInvoiceIssueRequestInput>): Model<CreateInvoiceIssueRequestInput>;
export declare function makeCreateInvoiceManualPaymentRequest(value: InputValue<CreateInvoiceManualPaymentRequestInput>): Model<CreateInvoiceManualPaymentRequestInput>;
export declare function makeCreateInvoicePaymentTermRequest(value: InputValue<CreateInvoicePaymentTermRequestInput>): Model<CreateInvoicePaymentTermRequestInput>;
export declare function makeCreateInvoiceQuickPayRequest(value: InputValue<CreateInvoiceQuickPayRequestInput>): Model<CreateInvoiceQuickPayRequestInput>;
export declare function makeCreateInvoiceRequest(value: InputValue<CreateInvoiceRequestInput>): Model<CreateInvoiceRequestInput>;
export declare function makeCreateInvoiceRequestOrder(value: InputValue<CreateInvoiceRequestOrderInput>): Model<CreateInvoiceRequestOrderInput>;
export declare function makeCreateInvoiceRequestQuickPay(value: InputValue<CreateInvoiceRequestQuickPayInput>): Model<CreateInvoiceRequestQuickPayInput>;
export declare function makeCreateLocationRequest(value: InputValue<CreateLocationRequestInput>): Model<CreateLocationRequestInput>;
export declare function makeCreateMeCheckoutSessionInvoice(value: InputValue<CreateMeCheckoutSessionInvoiceInput>): Model<CreateMeCheckoutSessionInvoiceInput>;
export declare function makeCreateMeCheckoutSessionRequest(value: InputValue<CreateMeCheckoutSessionRequestInput>): Model<CreateMeCheckoutSessionRequestInput>;
export declare function makeCreateMeCheckoutSessionReturnResolution(value: InputValue<CreateMeCheckoutSessionReturnResolutionInput>): Model<CreateMeCheckoutSessionReturnResolutionInput>;
export declare function makeCreateMeSubscriptionPreviewRequest(value: InputValue<Exclude<CreateMeSubscriptionPreviewRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateMeSubscriptionPreviewRequestInput & object, readonly unknown[]>>;
export declare function makeCreateMeSubscriptionPreviewRequest(value: InputValue<CreateMeSubscriptionPreviewRequestInput>): Model<CreateMeSubscriptionPreviewRequestInput>;
export declare function makeCreateMeSubscriptionPreviewRequestDeliveryOptions(value: InputValue<CreateMeSubscriptionPreviewRequestDeliveryOptionsInput>): Model<CreateMeSubscriptionPreviewRequestDeliveryOptionsInput>;
export declare function makeCreateMeSubscriptionPreviewRequestNextRenewal(value: InputValue<CreateMeSubscriptionPreviewRequestNextRenewalInput>): Model<CreateMeSubscriptionPreviewRequestNextRenewalInput>;
export declare function makeCreateMeSubscriptionPreviewRequestPlanChange(value: InputValue<CreateMeSubscriptionPreviewRequestPlanChangeInput>): Model<CreateMeSubscriptionPreviewRequestPlanChangeInput>;
export declare function makeCreateMeSubscriptionPreviewRequestQuantityChange(value: InputValue<CreateMeSubscriptionPreviewRequestQuantityChangeInput>): Model<CreateMeSubscriptionPreviewRequestQuantityChangeInput>;
export declare function makeCreateMerchantSignupRequest(value: InputValue<CreateMerchantSignupRequestInput>): Model<CreateMerchantSignupRequestInput>;
export declare function makeCreateModifierGroupRequest(value: InputValue<CreateModifierGroupRequestInput>): Model<CreateModifierGroupRequestInput>;
export declare function makeCreateModifierRequest(value: InputValue<CreateModifierRequestInput>): Model<CreateModifierRequestInput>;
export declare function makeCreateModifierSetGroupInputExisting(value: InputValue<CreateModifierSetGroupInputExistingInput>): Model<CreateModifierSetGroupInputExistingInput>;
export declare function makeCreateModifierSetGroupInputInline(value: InputValue<CreateModifierSetGroupInputInlineInput>): Model<CreateModifierSetGroupInputInlineInput>;
export declare function makeCreateModifierSetGroupRequest(value: InputValue<CreateModifierSetGroupRequestInput>): Model<CreateModifierSetGroupRequestInput>;
export declare function makeCreateModifierSetRequest(value: InputValue<CreateModifierSetRequestInput>): Model<CreateModifierSetRequestInput>;
export declare function makeCreateOnboardingAccessLinkRequest(value: InputValue<CreateOnboardingAccessLinkRequestInput>): Model<CreateOnboardingAccessLinkRequestInput>;
export declare function makeCreateOrderDiscount(value: InputValue<CreateOrderDiscountInput>): Model<CreateOrderDiscountInput>;
export declare function makeCreateOrderDiscountManual(value: InputValue<CreateOrderDiscountManualInput>): Model<CreateOrderDiscountManualInput>;
export declare function makeCreateOrderDiscountPromotion(value: InputValue<CreateOrderDiscountPromotionInput>): Model<CreateOrderDiscountPromotionInput>;
export declare function makeCreateOrderEditRequest(value: InputValue<CreateOrderEditRequestInput>): Model<CreateOrderEditRequestInput>;
export declare function makeCreateOrderLineItemInputBundle(value: InputValue<CreateOrderLineItemInputBundleInput>): Model<CreateOrderLineItemInputBundleInput>;
export declare function makeCreateOrderLineItemInputCustom(value: InputValue<CreateOrderLineItemInputCustomInput>): Model<CreateOrderLineItemInputCustomInput>;
export declare function makeCreateOrderLineItemInputVariant(value: InputValue<CreateOrderLineItemInputVariantInput>): Model<CreateOrderLineItemInputVariantInput>;
export declare function makeCreateOrderLineItemRequest(value: InputValue<CreateOrderLineItemRequestInput>): Model<CreateOrderLineItemRequestInput>;
export declare function makeCreateOrderPaymentIntentRequest(value: InputValue<CreateOrderPaymentIntentRequestInput>): Model<CreateOrderPaymentIntentRequestInput>;
export declare function makeCreateOrderRequest(value: InputValue<CreateOrderRequestInput>): Model<CreateOrderRequestInput>;
export declare function makeCreateOrderTip(value: InputValue<CreateOrderTipInput>): Model<CreateOrderTipInput>;
export declare function makeCreateOrderTipAmount(value: InputValue<CreateOrderTipAmountInput>): Model<CreateOrderTipAmountInput>;
export declare function makeCreateOrderTipPercent(value: InputValue<CreateOrderTipPercentInput>): Model<CreateOrderTipPercentInput>;
export declare function makeCreatePackageItemRequest(value: InputValue<CreatePackageItemRequestInput>): Model<CreatePackageItemRequestInput>;
export declare function makeCreatePackageRequest(value: InputValue<CreatePackageRequestInput>): Model<CreatePackageRequestInput>;
export declare function makeCreatePackageRequestCreated(value: InputValue<CreatePackageRequestCreatedInput>): Model<CreatePackageRequestCreatedInput>;
export declare function makeCreatePackageRequestShipped(value: InputValue<CreatePackageRequestShippedInput>): Model<CreatePackageRequestShippedInput>;
