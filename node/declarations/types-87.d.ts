import type { InputValue, Model } from '../runtime.js';
import type {
    GiftCardProductConfigurationRequestInput,
    GiftCardPurchaseDetailsRequestInput,
    GiftCardPurchaseRecipientPatchRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardVersionRequestInput
} from './types-30.js';
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
} from './types-31.js';
import type {
    InventoryCountObservationRequestInput,
    InventoryItemCreateRequestInput,
    InventoryOriginPolicyRequestInput,
    InventoryProvenanceRequestInput,
    InventoryReceiptLineRequestInput
} from './types-32.js';
import type {
    InventoryReservationOwnerRequestInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSourceRequestInput,
    InventorySettingsRequestInput
} from './types-33.js';
import type {
    InventorySourceSystemRequestInput,
    InventoryTransferLineRequestInput,
    InvoiceAutopayRetryPolicyInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputExternalInput
} from './types-34.js';
import type {
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionRequestInput,
    InvoiceLateFeePolicyFixedRequestInput,
    InvoiceLateFeePolicyPercentageRequestInput,
    InvoiceLateFeePolicyRequestInput
} from './types-35.js';
import type {
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoicePaymentDueRequestInput,
    InvoicePaymentOptionLimitRequestInput,
    InvoicePaymentPolicyRequestInput,
    InvoicePaymentTermCalculationDayOfMonthRequestInput
} from './types-36.js';
import type {
    InvoicePaymentTermCalculationDayOfNextMonthRequestInput,
    InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput,
    InvoicePaymentTermCalculationNetDaysRequestInput,
    InvoicePaymentTermCalculationOnReceiptRequestInput,
    InvoicePaymentTermCalculationRequestInput,
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput,
    InvoiceScheduleAmountSpecificationFixedRequestInput,
    InvoiceScheduleAmountSpecificationPercentageRequestInput,
    InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput,
    InvoiceScheduleAmountSpecificationRequestInput,
    InvoiceScheduleDueWriteInput,
    InvoiceScheduleDueWriteAtIssueInput,
    InvoiceScheduleDueWriteDateInput
} from './types-37.js';
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
export declare function makeInvoicePaymentDueInputMerchantDefault(value: InputValue<InvoicePaymentDueInputMerchantDefaultInput>): Model<InvoicePaymentDueInputMerchantDefaultInput>;
export declare function makeInvoicePaymentDueInputNone(value: InputValue<InvoicePaymentDueInputNoneInput>): Model<InvoicePaymentDueInputNoneInput>;
export declare function makeInvoicePaymentDueInputPaymentTerms(value: InputValue<InvoicePaymentDueInputPaymentTermsInput>): Model<InvoicePaymentDueInputPaymentTermsInput>;
export declare function makeInvoicePaymentDueRequest(value: InputValue<InvoicePaymentDueRequestInput>): Model<InvoicePaymentDueRequestInput>;
export declare function makeInvoicePaymentOptionLimitRequest(value: InputValue<InvoicePaymentOptionLimitRequestInput>): Model<InvoicePaymentOptionLimitRequestInput>;
export declare function makeInvoicePaymentPolicyRequest(value: InputValue<InvoicePaymentPolicyRequestInput>): Model<InvoicePaymentPolicyRequestInput>;
export declare function makeInvoicePaymentTermCalculationDayOfMonthRequest(value: InputValue<InvoicePaymentTermCalculationDayOfMonthRequestInput>): Model<InvoicePaymentTermCalculationDayOfMonthRequestInput>;
export declare function makeInvoicePaymentTermCalculationDayOfNextMonthRequest(value: InputValue<InvoicePaymentTermCalculationDayOfNextMonthRequestInput>): Model<InvoicePaymentTermCalculationDayOfNextMonthRequestInput>;
export declare function makeInvoicePaymentTermCalculationDaysAfterMonthEndRequest(value: InputValue<InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput>): Model<InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput>;
export declare function makeInvoicePaymentTermCalculationNetDaysRequest(value: InputValue<InvoicePaymentTermCalculationNetDaysRequestInput>): Model<InvoicePaymentTermCalculationNetDaysRequestInput>;
export declare function makeInvoicePaymentTermCalculationOnReceiptRequest(value: InputValue<InvoicePaymentTermCalculationOnReceiptRequestInput>): Model<InvoicePaymentTermCalculationOnReceiptRequestInput>;
export declare function makeInvoicePaymentTermCalculationRequest(value: InputValue<InvoicePaymentTermCalculationRequestInput>): Model<InvoicePaymentTermCalculationRequestInput>;
export declare function makeInvoiceReminderPolicy(value: InputValue<InvoiceReminderPolicyInput>): Model<InvoiceReminderPolicyInput>;
export declare function makeInvoiceReminderRule(value: InputValue<InvoiceReminderRuleInput>): Model<InvoiceReminderRuleInput>;
export declare function makeInvoiceScheduleAmountSpecificationFixedRequest(value: InputValue<InvoiceScheduleAmountSpecificationFixedRequestInput>): Model<InvoiceScheduleAmountSpecificationFixedRequestInput>;
export declare function makeInvoiceScheduleAmountSpecificationPercentageRequest(value: InputValue<InvoiceScheduleAmountSpecificationPercentageRequestInput>): Model<InvoiceScheduleAmountSpecificationPercentageRequestInput>;
export declare function makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest(value: InputValue<InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput>): Model<InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput>;
export declare function makeInvoiceScheduleAmountSpecificationRequest(value: InputValue<InvoiceScheduleAmountSpecificationRequestInput>): Model<InvoiceScheduleAmountSpecificationRequestInput>;
export declare function makeInvoiceScheduleDueWrite(value: InputValue<InvoiceScheduleDueWriteInput>): Model<InvoiceScheduleDueWriteInput>;
export declare function makeInvoiceScheduleDueWriteAtIssue(value: InputValue<InvoiceScheduleDueWriteAtIssueInput>): Model<InvoiceScheduleDueWriteAtIssueInput>;
export declare function makeInvoiceScheduleDueWriteDate(value: InputValue<InvoiceScheduleDueWriteDateInput>): Model<InvoiceScheduleDueWriteDateInput>;
