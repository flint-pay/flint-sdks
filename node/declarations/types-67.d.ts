import type { InputValue, Model } from '../runtime.js';
import type {
    CreateDeliveryMethodRequestPickupInput,
    CreateDeliveryMethodRequestShipmentInput,
    CreateDeliveryOptionsPreviewRequestInput,
    CreateDeliveryPickupLocationsPreviewRequestInput,
    CreateDeliveryPreviewRequestInput,
    CreateDeliveryProfileRequestInput,
    CreateDeliveryRateCallbackRequestInput,
    CreateDeliverySelectionChoiceRequestInput,
    CreateDeliverySelectionRequestInput,
    CreateDeliveryZoneRequestInput,
    CreateDemoSessionRequestInput,
    CreateDeviceRequestInput,
    CreateDigitalFulfillmentDetailsInput,
    CreateEmailChangeRequestInput,
    CreateFeedbackReportNarrativeInput,
    CreateFeedbackReportRatingInput,
    CreateFeedbackReportRequestInput,
    CreateFileRequestInput,
    CreateFulfillmentEventRequestInput
} from './types-6.js';
import type {
    CreateFulfillmentRequestInput,
    CreateFulfillmentRequestDigitalInput,
    CreateFulfillmentRequestLocalDeliveryInput,
    CreateFulfillmentRequestPickupInput,
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
    CreateInventoryAdjustmentConditionChangeRequestInput,
    CreateInventoryAdjustmentCorrectionRequestInput,
    CreateInventoryAdjustmentCountedRequestInput,
    CreateInventoryAdjustmentQuantityRequestInput,
    CreateInventoryAdjustmentRequestInput,
    CreateInventoryAllocationPolicyRequestInput,
    CreateInventoryCountRequestInput,
    CreateInventoryItemRequestInput,
    CreateInventoryReceiptRequestInput,
    CreateInventoryReservationRequestInput,
    CreateInventoryTransferRequestInput,
    CreateInvoiceIssueRequestInput,
    CreateInvoiceManualPaymentRequestInput,
    CreateInvoicePaymentTermRequestInput,
    CreateInvoiceQuickPayRequestInput,
    CreateInvoiceRequestInput
} from './types-7.js';
import type {
    CreateInvoiceRequestOrderInput,
    CreateInvoiceRequestQuickPayInput,
    CreateLocationRequestInput,
    CreateMeSubscriptionPreviewRequestInput,
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput,
    CreateModifierGroupRequestInput,
    CreateModifierRequestInput,
    CreateModifierSetGroupInputExistingInput,
    CreateModifierSetGroupInputInlineInput,
    CreateModifierSetGroupRequestInput,
    CreateModifierSetRequestInput,
    CreateOrderDiscountInput,
    CreateOrderDiscountManualInput,
    CreateOrderDiscountPromotionInput
} from './types-8.js';
export declare function makeCreateDeliveryMethodRequestPickup(value: InputValue<CreateDeliveryMethodRequestPickupInput>): Model<CreateDeliveryMethodRequestPickupInput>;
export declare function makeCreateDeliveryMethodRequestShipment(value: InputValue<CreateDeliveryMethodRequestShipmentInput>): Model<CreateDeliveryMethodRequestShipmentInput>;
export declare function makeCreateDeliveryOptionsPreviewRequest(value: InputValue<CreateDeliveryOptionsPreviewRequestInput>): Model<CreateDeliveryOptionsPreviewRequestInput>;
export declare function makeCreateDeliveryPickupLocationsPreviewRequest(value: InputValue<CreateDeliveryPickupLocationsPreviewRequestInput>): Model<CreateDeliveryPickupLocationsPreviewRequestInput>;
export declare function makeCreateDeliveryPreviewRequest(value: InputValue<Exclude<CreateDeliveryPreviewRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateDeliveryPreviewRequestInput & object, readonly unknown[]>>;
export declare function makeCreateDeliveryPreviewRequest(value: InputValue<CreateDeliveryPreviewRequestInput>): Model<CreateDeliveryPreviewRequestInput>;
export declare function makeCreateDeliveryProfileRequest(value: InputValue<CreateDeliveryProfileRequestInput>): Model<CreateDeliveryProfileRequestInput>;
export declare function makeCreateDeliveryRateCallbackRequest(value: InputValue<CreateDeliveryRateCallbackRequestInput>): Model<CreateDeliveryRateCallbackRequestInput>;
export declare function makeCreateDeliverySelectionChoiceRequest(value: InputValue<CreateDeliverySelectionChoiceRequestInput>): Model<CreateDeliverySelectionChoiceRequestInput>;
export declare function makeCreateDeliverySelectionRequest(value: InputValue<CreateDeliverySelectionRequestInput>): Model<CreateDeliverySelectionRequestInput>;
export declare function makeCreateDeliveryZoneRequest(value: InputValue<CreateDeliveryZoneRequestInput>): Model<CreateDeliveryZoneRequestInput>;
export declare function makeCreateDemoSessionRequest(value: InputValue<CreateDemoSessionRequestInput>): Model<CreateDemoSessionRequestInput>;
export declare function makeCreateDeviceRequest(value: InputValue<CreateDeviceRequestInput>): Model<CreateDeviceRequestInput>;
export declare function makeCreateDigitalFulfillmentDetails(value: InputValue<CreateDigitalFulfillmentDetailsInput>): Model<CreateDigitalFulfillmentDetailsInput>;
export declare function makeCreateEmailChangeRequest(value: InputValue<CreateEmailChangeRequestInput>): Model<CreateEmailChangeRequestInput>;
export declare function makeCreateFeedbackReportNarrative(value: InputValue<CreateFeedbackReportNarrativeInput>): Model<CreateFeedbackReportNarrativeInput>;
export declare function makeCreateFeedbackReportRating(value: InputValue<CreateFeedbackReportRatingInput>): Model<CreateFeedbackReportRatingInput>;
export declare function makeCreateFeedbackReportRequest(value: InputValue<CreateFeedbackReportRequestInput>): Model<CreateFeedbackReportRequestInput>;
export declare function makeCreateFileRequest(value: InputValue<CreateFileRequestInput>): Model<CreateFileRequestInput>;
export declare function makeCreateFulfillmentEventRequest(value: InputValue<CreateFulfillmentEventRequestInput>): Model<CreateFulfillmentEventRequestInput>;
export declare function makeCreateFulfillmentRequest(value: InputValue<CreateFulfillmentRequestInput>): Model<CreateFulfillmentRequestInput>;
export declare function makeCreateFulfillmentRequestDigital(value: InputValue<CreateFulfillmentRequestDigitalInput>): Model<CreateFulfillmentRequestDigitalInput>;
export declare function makeCreateFulfillmentRequestLocalDelivery(value: InputValue<CreateFulfillmentRequestLocalDeliveryInput>): Model<CreateFulfillmentRequestLocalDeliveryInput>;
export declare function makeCreateFulfillmentRequestPickup(value: InputValue<CreateFulfillmentRequestPickupInput>): Model<CreateFulfillmentRequestPickupInput>;
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
export declare function makeCreateInventoryAdjustmentConditionChangeRequest(value: InputValue<CreateInventoryAdjustmentConditionChangeRequestInput>): Model<CreateInventoryAdjustmentConditionChangeRequestInput>;
export declare function makeCreateInventoryAdjustmentCorrectionRequest(value: InputValue<CreateInventoryAdjustmentCorrectionRequestInput>): Model<CreateInventoryAdjustmentCorrectionRequestInput>;
export declare function makeCreateInventoryAdjustmentCountedRequest(value: InputValue<CreateInventoryAdjustmentCountedRequestInput>): Model<CreateInventoryAdjustmentCountedRequestInput>;
export declare function makeCreateInventoryAdjustmentQuantityRequest(value: InputValue<CreateInventoryAdjustmentQuantityRequestInput>): Model<CreateInventoryAdjustmentQuantityRequestInput>;
export declare function makeCreateInventoryAdjustmentRequest(value: InputValue<Exclude<CreateInventoryAdjustmentRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateInventoryAdjustmentRequestInput & object, readonly unknown[]>>;
export declare function makeCreateInventoryAdjustmentRequest(value: InputValue<CreateInventoryAdjustmentRequestInput>): Model<CreateInventoryAdjustmentRequestInput>;
export declare function makeCreateInventoryAllocationPolicyRequest(value: InputValue<CreateInventoryAllocationPolicyRequestInput>): Model<CreateInventoryAllocationPolicyRequestInput>;
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
export declare function makeCreateMeSubscriptionPreviewRequest(value: InputValue<Exclude<CreateMeSubscriptionPreviewRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateMeSubscriptionPreviewRequestInput & object, readonly unknown[]>>;
export declare function makeCreateMeSubscriptionPreviewRequest(value: InputValue<CreateMeSubscriptionPreviewRequestInput>): Model<CreateMeSubscriptionPreviewRequestInput>;
export declare function makeCreateMeSubscriptionPreviewRequestDeliveryOptions(value: InputValue<CreateMeSubscriptionPreviewRequestDeliveryOptionsInput>): Model<CreateMeSubscriptionPreviewRequestDeliveryOptionsInput>;
export declare function makeCreateMeSubscriptionPreviewRequestNextRenewal(value: InputValue<CreateMeSubscriptionPreviewRequestNextRenewalInput>): Model<CreateMeSubscriptionPreviewRequestNextRenewalInput>;
export declare function makeCreateModifierGroupRequest(value: InputValue<CreateModifierGroupRequestInput>): Model<CreateModifierGroupRequestInput>;
export declare function makeCreateModifierRequest(value: InputValue<CreateModifierRequestInput>): Model<CreateModifierRequestInput>;
export declare function makeCreateModifierSetGroupInputExisting(value: InputValue<CreateModifierSetGroupInputExistingInput>): Model<CreateModifierSetGroupInputExistingInput>;
export declare function makeCreateModifierSetGroupInputInline(value: InputValue<CreateModifierSetGroupInputInlineInput>): Model<CreateModifierSetGroupInputInlineInput>;
export declare function makeCreateModifierSetGroupRequest(value: InputValue<CreateModifierSetGroupRequestInput>): Model<CreateModifierSetGroupRequestInput>;
export declare function makeCreateModifierSetRequest(value: InputValue<CreateModifierSetRequestInput>): Model<CreateModifierSetRequestInput>;
export declare function makeCreateOrderDiscount(value: InputValue<CreateOrderDiscountInput>): Model<CreateOrderDiscountInput>;
export declare function makeCreateOrderDiscountManual(value: InputValue<CreateOrderDiscountManualInput>): Model<CreateOrderDiscountManualInput>;
export declare function makeCreateOrderDiscountPromotion(value: InputValue<CreateOrderDiscountPromotionInput>): Model<CreateOrderDiscountPromotionInput>;
