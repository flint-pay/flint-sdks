import type { InputValue, Model } from '../runtime.js';
import type {
    GiftCardPurchaseRecipientPatchRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardVersionRequestInput,
    GrantOrganizationMembershipRequestInput,
    ImageReferenceRequestInput,
    ImageRequestInput
} from './types-19.js';
import type {
    InitialGiftCardFundingInput,
    InlineModifierGroupRequestInput,
    InventoryAdjustmentConditionChangeLineRequestInput,
    InventoryAdjustmentQuantityLineRequestInput
} from './types-23.js';
import type {
    InventoryAdjustmentSetLineRequestInput,
    InventoryAllocationConfigurationValueInput,
    InventoryAllocationPolicyLocationInput,
    InventoryCountObservationRequestInput,
    InventoryCountTransitionRequestInput,
    InventoryCountTransitionRequestApplyInput,
    InventoryCountTransitionRequestCancelInput,
    InventoryItemCreateRequestInput
} from './types-24.js';
import type {
    InventoryOriginPolicyInput,
    InventoryProvenanceRequestInput,
    InventoryReceiptLineRequestInput,
    InventoryReservationOwnerRequestInput,
    InventoryReservationTransitionRequestInput,
    InventoryReservationTransitionRequestCommitInput,
    InventoryReservationTransitionRequestConsumeInput,
    InventoryReservationTransitionRequestReleaseInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSourceRequestInput,
    InventorySettingsInput,
    InventorySourceSystemRequestInput,
    InventoryTransferLineRequestInput
} from './types-25.js';
import type {
    InventoryTransferTransitionRequestInput,
    InventoryTransferTransitionRequestCancelInput,
    InventoryTransferTransitionRequestDepartInput,
    InventoryTransferTransitionRequestReceiveInput,
    InventoryTransferTransitionRequestReportLossInput,
    InventoryTransferTransitionRequestReturnToOriginInput,
    InvoiceAutopayRetryPolicyInput,
    InvoiceCheckoutSessionRequestInput,
    InvoiceCollectionInputAutomaticInput,
    InvoiceCollectionInputBuyerInitiatedInput,
    InvoiceCollectionInputExternalInput,
    InvoiceCollectionInputMerchantDefaultInput,
    InvoiceCollectionRequestInput,
    InvoiceLateFeePolicyInput,
    InvoiceLateFeePolicyFixedInput,
    InvoiceLateFeePolicyPercentageInput
} from './types-26.js';
import type {
    InvoicePaymentDueInputCustomerDefaultInput,
    InvoicePaymentDueInputDateInput,
    InvoicePaymentDueInputMerchantDefaultInput,
    InvoicePaymentDueInputNoneInput,
    InvoicePaymentDueInputPaymentTermsInput,
    InvoicePaymentDueRequestInput,
    InvoicePaymentOptionLimitInput,
    InvoicePaymentPolicyInput,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentTermCalculationDayOfMonthInput,
    InvoicePaymentTermCalculationDayOfNextMonthInput,
    InvoicePaymentTermCalculationDaysAfterMonthEndInput,
    InvoicePaymentTermCalculationNetDaysInput,
    InvoicePaymentTermCalculationOnReceiptInput
} from './types-27.js';
export declare function makeGiftCardPurchaseRecipientPatchRequest(value: InputValue<GiftCardPurchaseRecipientPatchRequestInput>): Model<GiftCardPurchaseRecipientPatchRequestInput>;
export declare function makeGiftCardPurchaseRecipientRequest(value: InputValue<GiftCardPurchaseRecipientRequestInput>): Model<GiftCardPurchaseRecipientRequestInput>;
export declare function makeGiftCardVersionRequest(value: InputValue<GiftCardVersionRequestInput>): Model<GiftCardVersionRequestInput>;
export declare function makeGrantOrganizationMembershipRequest(value: InputValue<GrantOrganizationMembershipRequestInput>): Model<GrantOrganizationMembershipRequestInput>;
export declare function makeImageReferenceRequest(value: InputValue<ImageReferenceRequestInput>): Model<ImageReferenceRequestInput>;
export declare function makeImageRequest(value: InputValue<ImageRequestInput>): Model<ImageRequestInput>;
export declare function makeInitialGiftCardFunding(value: InputValue<InitialGiftCardFundingInput>): Model<InitialGiftCardFundingInput>;
export declare function makeInlineModifierGroupRequest(value: InputValue<InlineModifierGroupRequestInput>): Model<InlineModifierGroupRequestInput>;
export declare function makeInventoryAdjustmentConditionChangeLineRequest(value: InputValue<InventoryAdjustmentConditionChangeLineRequestInput>): Model<InventoryAdjustmentConditionChangeLineRequestInput>;
export declare function makeInventoryAdjustmentQuantityLineRequest(value: InputValue<InventoryAdjustmentQuantityLineRequestInput>): Model<InventoryAdjustmentQuantityLineRequestInput>;
export declare function makeInventoryAdjustmentSetLineRequest(value: InputValue<InventoryAdjustmentSetLineRequestInput>): Model<InventoryAdjustmentSetLineRequestInput>;
export declare function makeInventoryAllocationConfigurationValue(value: InputValue<InventoryAllocationConfigurationValueInput>): Model<InventoryAllocationConfigurationValueInput>;
export declare function makeInventoryAllocationPolicyLocation(value: InputValue<InventoryAllocationPolicyLocationInput>): Model<InventoryAllocationPolicyLocationInput>;
export declare function makeInventoryCountObservationRequest(value: InputValue<InventoryCountObservationRequestInput>): Model<InventoryCountObservationRequestInput>;
export declare function makeInventoryCountTransitionRequest(value: InputValue<Exclude<InventoryCountTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryCountTransitionRequestInput & object, readonly unknown[]>>;
export declare function makeInventoryCountTransitionRequest(value: InputValue<InventoryCountTransitionRequestInput>): Model<InventoryCountTransitionRequestInput>;
export declare function makeInventoryCountTransitionRequestApply(value: InputValue<InventoryCountTransitionRequestApplyInput>): Model<InventoryCountTransitionRequestApplyInput>;
export declare function makeInventoryCountTransitionRequestCancel(value: InputValue<InventoryCountTransitionRequestCancelInput>): Model<InventoryCountTransitionRequestCancelInput>;
export declare function makeInventoryItemCreateRequest(value: InputValue<InventoryItemCreateRequestInput>): Model<InventoryItemCreateRequestInput>;
export declare function makeInventoryOriginPolicy(value: InputValue<InventoryOriginPolicyInput>): Model<InventoryOriginPolicyInput>;
export declare function makeInventoryProvenanceRequest(value: InputValue<InventoryProvenanceRequestInput>): Model<InventoryProvenanceRequestInput>;
export declare function makeInventoryReceiptLineRequest(value: InputValue<InventoryReceiptLineRequestInput>): Model<InventoryReceiptLineRequestInput>;
export declare function makeInventoryReservationOwnerRequest(value: InputValue<InventoryReservationOwnerRequestInput>): Model<InventoryReservationOwnerRequestInput>;
export declare function makeInventoryReservationTransitionRequest(value: InputValue<Exclude<InventoryReservationTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryReservationTransitionRequestInput & object, readonly unknown[]>>;
export declare function makeInventoryReservationTransitionRequest(value: InputValue<InventoryReservationTransitionRequestInput>): Model<InventoryReservationTransitionRequestInput>;
export declare function makeInventoryReservationTransitionRequestCommit(value: InputValue<InventoryReservationTransitionRequestCommitInput>): Model<InventoryReservationTransitionRequestCommitInput>;
export declare function makeInventoryReservationTransitionRequestConsume(value: InputValue<InventoryReservationTransitionRequestConsumeInput>): Model<InventoryReservationTransitionRequestConsumeInput>;
export declare function makeInventoryReservationTransitionRequestRelease(value: InputValue<InventoryReservationTransitionRequestReleaseInput>): Model<InventoryReservationTransitionRequestReleaseInput>;
export declare function makeInventoryRoutingDemand(value: InputValue<InventoryRoutingDemandInput>): Model<InventoryRoutingDemandInput>;
export declare function makeInventoryRoutingSourceInputFixedLocation(value: InputValue<InventoryRoutingSourceInputFixedLocationInput>): Model<InventoryRoutingSourceInputFixedLocationInput>;
export declare function makeInventoryRoutingSourceInputPolicy(value: InputValue<InventoryRoutingSourceInputPolicyInput>): Model<InventoryRoutingSourceInputPolicyInput>;
export declare function makeInventoryRoutingSourceInputPolicyRevision(value: InputValue<InventoryRoutingSourceInputPolicyRevisionInput>): Model<InventoryRoutingSourceInputPolicyRevisionInput>;
export declare function makeInventoryRoutingSourceRequest(value: InputValue<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryRoutingSourceRequestInput & object, readonly unknown[]>>;
export declare function makeInventoryRoutingSourceRequest(value: InputValue<InventoryRoutingSourceRequestInput>): Model<InventoryRoutingSourceRequestInput>;
export declare function makeInventorySettings(value: InputValue<InventorySettingsInput>): Model<InventorySettingsInput>;
export declare function makeInventorySourceSystemRequest(value: InputValue<InventorySourceSystemRequestInput>): Model<InventorySourceSystemRequestInput>;
export declare function makeInventoryTransferLineRequest(value: InputValue<InventoryTransferLineRequestInput>): Model<InventoryTransferLineRequestInput>;
export declare function makeInventoryTransferTransitionRequest(value: InputValue<Exclude<InventoryTransferTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryTransferTransitionRequestInput & object, readonly unknown[]>>;
export declare function makeInventoryTransferTransitionRequest(value: InputValue<InventoryTransferTransitionRequestInput>): Model<InventoryTransferTransitionRequestInput>;
export declare function makeInventoryTransferTransitionRequestCancel(value: InputValue<InventoryTransferTransitionRequestCancelInput>): Model<InventoryTransferTransitionRequestCancelInput>;
export declare function makeInventoryTransferTransitionRequestDepart(value: InputValue<InventoryTransferTransitionRequestDepartInput>): Model<InventoryTransferTransitionRequestDepartInput>;
export declare function makeInventoryTransferTransitionRequestReceive(value: InputValue<InventoryTransferTransitionRequestReceiveInput>): Model<InventoryTransferTransitionRequestReceiveInput>;
export declare function makeInventoryTransferTransitionRequestReportLoss(value: InputValue<InventoryTransferTransitionRequestReportLossInput>): Model<InventoryTransferTransitionRequestReportLossInput>;
export declare function makeInventoryTransferTransitionRequestReturnToOrigin(value: InputValue<InventoryTransferTransitionRequestReturnToOriginInput>): Model<InventoryTransferTransitionRequestReturnToOriginInput>;
export declare function makeInvoiceAutopayRetryPolicy(value: InputValue<InvoiceAutopayRetryPolicyInput>): Model<InvoiceAutopayRetryPolicyInput>;
export declare function makeInvoiceCheckoutSessionRequest(value: InputValue<InvoiceCheckoutSessionRequestInput>): Model<InvoiceCheckoutSessionRequestInput>;
export declare function makeInvoiceCollectionInputAutomatic(value: InputValue<InvoiceCollectionInputAutomaticInput>): Model<InvoiceCollectionInputAutomaticInput>;
export declare function makeInvoiceCollectionInputBuyerInitiated(value: InputValue<InvoiceCollectionInputBuyerInitiatedInput>): Model<InvoiceCollectionInputBuyerInitiatedInput>;
export declare function makeInvoiceCollectionInputExternal(value: InputValue<InvoiceCollectionInputExternalInput>): Model<InvoiceCollectionInputExternalInput>;
export declare function makeInvoiceCollectionInputMerchantDefault(value: InputValue<InvoiceCollectionInputMerchantDefaultInput>): Model<InvoiceCollectionInputMerchantDefaultInput>;
export declare function makeInvoiceCollectionRequest(value: InputValue<InvoiceCollectionRequestInput>): Model<InvoiceCollectionRequestInput>;
export declare function makeInvoiceLateFeePolicy(value: InputValue<InvoiceLateFeePolicyInput>): Model<InvoiceLateFeePolicyInput>;
export declare function makeInvoiceLateFeePolicyFixed(value: InputValue<InvoiceLateFeePolicyFixedInput>): Model<InvoiceLateFeePolicyFixedInput>;
export declare function makeInvoiceLateFeePolicyPercentage(value: InputValue<InvoiceLateFeePolicyPercentageInput>): Model<InvoiceLateFeePolicyPercentageInput>;
export declare function makeInvoicePaymentDueInputCustomerDefault(value: InputValue<InvoicePaymentDueInputCustomerDefaultInput>): Model<InvoicePaymentDueInputCustomerDefaultInput>;
export declare function makeInvoicePaymentDueInputDate(value: InputValue<InvoicePaymentDueInputDateInput>): Model<InvoicePaymentDueInputDateInput>;
export declare function makeInvoicePaymentDueInputMerchantDefault(value: InputValue<InvoicePaymentDueInputMerchantDefaultInput>): Model<InvoicePaymentDueInputMerchantDefaultInput>;
export declare function makeInvoicePaymentDueInputNone(value: InputValue<InvoicePaymentDueInputNoneInput>): Model<InvoicePaymentDueInputNoneInput>;
export declare function makeInvoicePaymentDueInputPaymentTerms(value: InputValue<InvoicePaymentDueInputPaymentTermsInput>): Model<InvoicePaymentDueInputPaymentTermsInput>;
export declare function makeInvoicePaymentDueRequest(value: InputValue<InvoicePaymentDueRequestInput>): Model<InvoicePaymentDueRequestInput>;
export declare function makeInvoicePaymentOptionLimit(value: InputValue<InvoicePaymentOptionLimitInput>): Model<InvoicePaymentOptionLimitInput>;
export declare function makeInvoicePaymentPolicy(value: InputValue<InvoicePaymentPolicyInput>): Model<InvoicePaymentPolicyInput>;
export declare function makeInvoicePaymentTermCalculation(value: InputValue<InvoicePaymentTermCalculationInput>): Model<InvoicePaymentTermCalculationInput>;
export declare function makeInvoicePaymentTermCalculationDayOfMonth(value: InputValue<InvoicePaymentTermCalculationDayOfMonthInput>): Model<InvoicePaymentTermCalculationDayOfMonthInput>;
export declare function makeInvoicePaymentTermCalculationDayOfNextMonth(value: InputValue<InvoicePaymentTermCalculationDayOfNextMonthInput>): Model<InvoicePaymentTermCalculationDayOfNextMonthInput>;
export declare function makeInvoicePaymentTermCalculationDaysAfterMonthEnd(value: InputValue<InvoicePaymentTermCalculationDaysAfterMonthEndInput>): Model<InvoicePaymentTermCalculationDaysAfterMonthEndInput>;
export declare function makeInvoicePaymentTermCalculationNetDays(value: InputValue<InvoicePaymentTermCalculationNetDaysInput>): Model<InvoicePaymentTermCalculationNetDaysInput>;
export declare function makeInvoicePaymentTermCalculationOnReceipt(value: InputValue<InvoicePaymentTermCalculationOnReceiptInput>): Model<InvoicePaymentTermCalculationOnReceiptInput>;
