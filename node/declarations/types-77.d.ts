import type { InputValue, Model } from '../runtime.js';
import type {
    EmailPreferenceLinkRequestInput,
    FailFulfillmentRequestInput,
    FeedbackReportingClientRequestInput
} from './types-24.js';
import type {
    FreezeGiftCardRequestInput,
    FulfillmentItemizedPackagesRequestInput,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput,
    FulfillmentSettingsRequestInput,
    FulfillmentSinglePackageRequestInput
} from './types-25.js';
import type {
    GiftCardCustomAmountBoundsRequestInput,
    GiftCardFundingSourceAdjustmentRequestInput,
    GiftCardFundingSourceExternalPaymentRequestInput,
    GiftCardFundingSourceFlintManualPaymentRequestInput,
    GiftCardFundingSourceFlintPaymentRequestInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput,
    GiftCardFundingSourceGiftCardRefundRequestInput,
    GiftCardFundingSourceImportRequestInput,
    GiftCardFundingSourceRequestInput,
    GiftCardFundingSourceStoreCreditRequestInput
} from './types-26.js';
import type {
    GiftCardNotificationRecipientInput,
    GiftCardProductConfigurationRequestInput,
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientPatchRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardVersionRequestInput
} from './types-27.js';
import type {
    HoldFulfillmentRequestInput,
    ImageInputFileInput,
    ImageInputSourceURLInput,
    ImageReferenceRequestInput,
    ImageRequestInput,
    InitialGiftCardFundingInput,
    InlineModifierGroupRequestInput,
    InventoryAdjustmentConditionChangeLineRequestInput,
    InventoryAdjustmentQuantityLineRequestInput,
    InventoryAdjustmentSetLineRequestInput,
    InventoryAllocationPolicyConfigurationRequestInput,
    InventoryAllocationPolicyLocationInput,
    InventoryBackorderPolicyRequestInput
} from './types-28.js';
import type {
    InventoryCountObservationRequestInput,
    InventoryItemCreateRequestInput,
    InventoryOriginPolicyRequestInput,
    InventoryProvenanceRequestInput,
    InventoryReceiptLineRequestInput
} from './types-29.js';
import type {
    InventoryReservationOwnerRequestInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSourceRequestInput,
    InventorySettingsRequestInput,
    InventorySourceSystemRequestInput
} from './types-30.js';
import type {
    InventoryTransferLineRequestInput,
    InvoiceAutopayRetryPolicyInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputExternalInput,
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionRequestInput
} from './types-31.js';
import type {
    InvoiceLateFeePolicyFixedRequestInput,
    InvoiceLateFeePolicyPercentageRequestInput,
    InvoiceLateFeePolicyRequestInput
} from './types-32.js';
import type { InvoicePaymentDueInputCustomerDefaultInput, InvoicePaymentDueInputDateInput } from './types-33.js';
export declare function makeEmailPreferenceLinkRequest(value: InputValue<EmailPreferenceLinkRequestInput>): Model<EmailPreferenceLinkRequestInput>;
export declare function makeFailFulfillmentRequest(value: InputValue<FailFulfillmentRequestInput>): Model<FailFulfillmentRequestInput>;
export declare function makeFeedbackReportingClientRequest(value: InputValue<FeedbackReportingClientRequestInput>): Model<FeedbackReportingClientRequestInput>;
export declare function makeFreezeGiftCardRequest(value: InputValue<FreezeGiftCardRequestInput>): Model<FreezeGiftCardRequestInput>;
export declare function makeFulfillmentItemizedPackagesRequest(value: InputValue<FulfillmentItemizedPackagesRequestInput>): Model<FulfillmentItemizedPackagesRequestInput>;
export declare function makeFulfillmentLineItemRequest(value: InputValue<FulfillmentLineItemRequestInput>): Model<FulfillmentLineItemRequestInput>;
export declare function makeFulfillmentPackagingRequest(value: InputValue<FulfillmentPackagingRequestInput>): Model<FulfillmentPackagingRequestInput>;
export declare function makeFulfillmentRecipientRequest(value: InputValue<FulfillmentRecipientRequestInput>): Model<FulfillmentRecipientRequestInput>;
export declare function makeFulfillmentSettingsRequest(value: InputValue<FulfillmentSettingsRequestInput>): Model<FulfillmentSettingsRequestInput>;
export declare function makeFulfillmentSinglePackageRequest(value: InputValue<FulfillmentSinglePackageRequestInput>): Model<FulfillmentSinglePackageRequestInput>;
export declare function makeGiftCardCustomAmountBoundsRequest(value: InputValue<GiftCardCustomAmountBoundsRequestInput>): Model<GiftCardCustomAmountBoundsRequestInput>;
export declare function makeGiftCardFundingSourceAdjustmentRequest(value: InputValue<GiftCardFundingSourceAdjustmentRequestInput>): Model<GiftCardFundingSourceAdjustmentRequestInput>;
export declare function makeGiftCardFundingSourceExternalPaymentRequest(value: InputValue<GiftCardFundingSourceExternalPaymentRequestInput>): Model<GiftCardFundingSourceExternalPaymentRequestInput>;
export declare function makeGiftCardFundingSourceFlintManualPaymentRequest(value: InputValue<GiftCardFundingSourceFlintManualPaymentRequestInput>): Model<GiftCardFundingSourceFlintManualPaymentRequestInput>;
export declare function makeGiftCardFundingSourceFlintPaymentRequest(value: InputValue<GiftCardFundingSourceFlintPaymentRequestInput>): Model<GiftCardFundingSourceFlintPaymentRequestInput>;
export declare function makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest(value: InputValue<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput>): Model<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput>;
export declare function makeGiftCardFundingSourceGiftCardRefundRequest(value: InputValue<GiftCardFundingSourceGiftCardRefundRequestInput>): Model<GiftCardFundingSourceGiftCardRefundRequestInput>;
export declare function makeGiftCardFundingSourceImportRequest(value: InputValue<GiftCardFundingSourceImportRequestInput>): Model<GiftCardFundingSourceImportRequestInput>;
export declare function makeGiftCardFundingSourceRequest(value: InputValue<GiftCardFundingSourceRequestInput>): Model<GiftCardFundingSourceRequestInput>;
export declare function makeGiftCardFundingSourceStoreCreditRequest(value: InputValue<GiftCardFundingSourceStoreCreditRequestInput>): Model<GiftCardFundingSourceStoreCreditRequestInput>;
export declare function makeGiftCardNotificationRecipient(value: InputValue<GiftCardNotificationRecipientInput>): Model<GiftCardNotificationRecipientInput>;
export declare function makeGiftCardProductConfigurationRequest(value: InputValue<GiftCardProductConfigurationRequestInput>): Model<GiftCardProductConfigurationRequestInput>;
export declare function makeGiftCardPurchaseDetailsRequest(value: InputValue<GiftCardPurchaseDetailsRequestInput>): Model<GiftCardPurchaseDetailsRequestInput>;
export declare function makeGiftCardPurchaseRecipientPatchRequest(value: InputValue<GiftCardPurchaseRecipientPatchRequestInput>): Model<GiftCardPurchaseRecipientPatchRequestInput>;
export declare function makeGiftCardPurchaseRecipientRequest(value: InputValue<GiftCardPurchaseRecipientRequestInput>): Model<GiftCardPurchaseRecipientRequestInput>;
export declare function makeGiftCardVersionRequest(value: InputValue<GiftCardVersionRequestInput>): Model<GiftCardVersionRequestInput>;
export declare function makeHoldFulfillmentRequest(value: InputValue<HoldFulfillmentRequestInput>): Model<HoldFulfillmentRequestInput>;
export declare function makeImageInputFile(value: InputValue<ImageInputFileInput>): Model<ImageInputFileInput>;
export declare function makeImageInputSourceURL(value: InputValue<ImageInputSourceURLInput>): Model<ImageInputSourceURLInput>;
export declare function makeImageReferenceRequest(value: InputValue<ImageReferenceRequestInput>): Model<ImageReferenceRequestInput>;
export declare function makeImageRequest(value: InputValue<ImageRequestInput>): Model<ImageRequestInput>;
export declare function makeInitialGiftCardFunding(value: InputValue<InitialGiftCardFundingInput>): Model<InitialGiftCardFundingInput>;
export declare function makeInlineModifierGroupRequest(value: InputValue<InlineModifierGroupRequestInput>): Model<InlineModifierGroupRequestInput>;
export declare function makeInventoryAdjustmentConditionChangeLineRequest(value: InputValue<InventoryAdjustmentConditionChangeLineRequestInput>): Model<InventoryAdjustmentConditionChangeLineRequestInput>;
export declare function makeInventoryAdjustmentQuantityLineRequest(value: InputValue<InventoryAdjustmentQuantityLineRequestInput>): Model<InventoryAdjustmentQuantityLineRequestInput>;
export declare function makeInventoryAdjustmentSetLineRequest(value: InputValue<InventoryAdjustmentSetLineRequestInput>): Model<InventoryAdjustmentSetLineRequestInput>;
export declare function makeInventoryAllocationPolicyConfigurationRequest(value: InputValue<InventoryAllocationPolicyConfigurationRequestInput>): Model<InventoryAllocationPolicyConfigurationRequestInput>;
export declare function makeInventoryAllocationPolicyLocation(value: InputValue<InventoryAllocationPolicyLocationInput>): Model<InventoryAllocationPolicyLocationInput>;
export declare function makeInventoryBackorderPolicyRequest(value: InputValue<InventoryBackorderPolicyRequestInput>): Model<InventoryBackorderPolicyRequestInput>;
export declare function makeInventoryCountObservationRequest(value: InputValue<InventoryCountObservationRequestInput>): Model<InventoryCountObservationRequestInput>;
export declare function makeInventoryItemCreateRequest(value: InputValue<InventoryItemCreateRequestInput>): Model<InventoryItemCreateRequestInput>;
export declare function makeInventoryOriginPolicyRequest(value: InputValue<InventoryOriginPolicyRequestInput>): Model<InventoryOriginPolicyRequestInput>;
export declare function makeInventoryProvenanceRequest(value: InputValue<InventoryProvenanceRequestInput>): Model<InventoryProvenanceRequestInput>;
export declare function makeInventoryReceiptLineRequest(value: InputValue<InventoryReceiptLineRequestInput>): Model<InventoryReceiptLineRequestInput>;
export declare function makeInventoryReservationOwnerRequest(value: InputValue<InventoryReservationOwnerRequestInput>): Model<InventoryReservationOwnerRequestInput>;
export declare function makeInventoryRoutingDemand(value: InputValue<InventoryRoutingDemandInput>): Model<InventoryRoutingDemandInput>;
export declare function makeInventoryRoutingSourceInputFixedLocation(value: InputValue<InventoryRoutingSourceInputFixedLocationInput>): Model<InventoryRoutingSourceInputFixedLocationInput>;
export declare function makeInventoryRoutingSourceInputPolicy(value: InputValue<InventoryRoutingSourceInputPolicyInput>): Model<InventoryRoutingSourceInputPolicyInput>;
export declare function makeInventoryRoutingSourceInputPolicyRevision(value: InputValue<InventoryRoutingSourceInputPolicyRevisionInput>): Model<InventoryRoutingSourceInputPolicyRevisionInput>;
export declare function makeInventoryRoutingSourceRequest(value: InputValue<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>;
export declare function makeInventoryRoutingSourceRequest(value: InputValue<InventoryRoutingSourceRequestInput>): Model<InventoryRoutingSourceRequestInput>;
export declare function makeInventorySettingsRequest(value: InputValue<InventorySettingsRequestInput>): Model<InventorySettingsRequestInput>;
export declare function makeInventorySourceSystemRequest(value: InputValue<InventorySourceSystemRequestInput>): Model<InventorySourceSystemRequestInput>;
export declare function makeInventoryTransferLineRequest(value: InputValue<InventoryTransferLineRequestInput>): Model<InventoryTransferLineRequestInput>;
export declare function makeInvoiceAutopayRetryPolicy(value: InputValue<InvoiceAutopayRetryPolicyInput>): Model<InvoiceAutopayRetryPolicyInput>;
export declare function makeInvoiceCollectionInputAutomatic(value: InputValue<InvoiceCollectionInputAutomaticInput>): Model<InvoiceCollectionInputAutomaticInput>;
export declare function makeInvoiceCollectionInputBuyerInitiated(value: InputValue<InvoiceCollectionInputBuyerInitiatedInput>): Model<InvoiceCollectionInputBuyerInitiatedInput>;
export declare function makeInvoiceCollectionInputExternal(value: InputValue<InvoiceCollectionInputExternalInput>): Model<InvoiceCollectionInputExternalInput>;
export declare function makeInvoiceCollectionInputMerchantDefault(value: InputValue<InvoiceCollectionInputMerchantDefaultInput>): Model<InvoiceCollectionInputMerchantDefaultInput>;
export declare function makeInvoiceCollectionRequest(value: InputValue<InvoiceCollectionRequestInput>): Model<InvoiceCollectionRequestInput>;
export declare function makeInvoiceLateFeePolicyFixedRequest(value: InputValue<InvoiceLateFeePolicyFixedRequestInput>): Model<InvoiceLateFeePolicyFixedRequestInput>;
export declare function makeInvoiceLateFeePolicyPercentageRequest(value: InputValue<InvoiceLateFeePolicyPercentageRequestInput>): Model<InvoiceLateFeePolicyPercentageRequestInput>;
export declare function makeInvoiceLateFeePolicyRequest(value: InputValue<InvoiceLateFeePolicyRequestInput>): Model<InvoiceLateFeePolicyRequestInput>;
export declare function makeInvoicePaymentDueInputCustomerDefault(value: InputValue<InvoicePaymentDueInputCustomerDefaultInput>): Model<InvoicePaymentDueInputCustomerDefaultInput>;
export declare function makeInvoicePaymentDueInputDate(value: InputValue<InvoicePaymentDueInputDateInput>): Model<InvoicePaymentDueInputDateInput>;
