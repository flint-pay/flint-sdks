import type { InputValue, Model } from '../runtime.js';
import type {
    FulfillmentTransitionRequestCompleteInput,
    FulfillmentTransitionRequestDispatchInput,
    FulfillmentTransitionRequestFailInput,
    FulfillmentTransitionRequestHoldInput,
    FulfillmentTransitionRequestMarkNoShowInput,
    FulfillmentTransitionRequestMarkPackedInput,
    FulfillmentTransitionRequestMarkPickedInput,
    FulfillmentTransitionRequestMarkPreparingInput,
    FulfillmentTransitionRequestMarkReadyInput,
    FulfillmentTransitionRequestReleaseHoldInput,
    FulfillmentTransitionRequestScheduleInput,
    FulfillmentTransitionRequestStartInput
} from './types-19.js';
import type {
    GetOrCreateReturnResolutionCheckoutSessionRequestInput,
    GiftCardCustomAmountBoundsRequestRequestInput,
    GiftCardFundingSourceInput,
    GiftCardFundingSourceAdjustmentInput,
    GiftCardFundingSourceExternalPaymentInput,
    GiftCardFundingSourceFlintManualPaymentInput,
    GiftCardFundingSourceFlintPaymentInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput,
    GiftCardFundingSourceGiftCardRefundInput,
    GiftCardFundingSourceImportInput,
    GiftCardFundingSourceStoreCreditInput,
    GiftCardNotificationRecipientInput,
    GiftCardProductConfigurationRequestRequestInput,
    GiftCardPurchaseDetailsRequestInput
} from './types-20.js';
import type {
    GiftCardPurchaseRecipientPatchRequestInput,
    GiftCardPurchaseRecipientRequestInput,
    GiftCardVersionRequestInput,
    GrantOrganizationMembershipRequestInput,
    ImageInputFileInput,
    ImageInputSourceURLInput,
    ImageReferenceRequestInput,
    ImageRequestInput
} from './types-21.js';
import type {
    InitialGiftCardFundingInput,
    InlineModifierGroupRequestInput,
    InventoryAdjustmentConditionChangeLineRequestInput,
    InventoryAdjustmentQuantityLineRequestInput,
    InventoryAdjustmentSetLineRequestInput,
    InventoryAllocationConfigurationValueInput
} from './types-25.js';
import type {
    InventoryAllocationPolicyLocationInput,
    InventoryCountObservationRequestInput,
    InventoryCountTransitionRequestInput,
    InventoryCountTransitionRequestApplyInput,
    InventoryCountTransitionRequestCancelInput,
    InventoryItemCreateRequestInput,
    InventoryOriginPolicyRequestRequestInput,
    InventoryProvenanceRequestInput,
    InventoryReceiptLineRequestInput
} from './types-26.js';
import type {
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
    InventorySettingsRequestRequestInput,
    InventorySourceSystemRequestInput,
    InventoryTransferLineRequestInput,
    InventoryTransferTransitionRequestInput,
    InventoryTransferTransitionRequestCancelInput
} from './types-27.js';
export declare function makeFulfillmentTransitionRequestComplete(value: InputValue<FulfillmentTransitionRequestCompleteInput>): Model<FulfillmentTransitionRequestCompleteInput>;
export declare function makeFulfillmentTransitionRequestDispatch(value: InputValue<FulfillmentTransitionRequestDispatchInput>): Model<FulfillmentTransitionRequestDispatchInput>;
export declare function makeFulfillmentTransitionRequestFail(value: InputValue<FulfillmentTransitionRequestFailInput>): Model<FulfillmentTransitionRequestFailInput>;
export declare function makeFulfillmentTransitionRequestHold(value: InputValue<FulfillmentTransitionRequestHoldInput>): Model<FulfillmentTransitionRequestHoldInput>;
export declare function makeFulfillmentTransitionRequestMarkNoShow(value: InputValue<FulfillmentTransitionRequestMarkNoShowInput>): Model<FulfillmentTransitionRequestMarkNoShowInput>;
export declare function makeFulfillmentTransitionRequestMarkPacked(value: InputValue<FulfillmentTransitionRequestMarkPackedInput>): Model<FulfillmentTransitionRequestMarkPackedInput>;
export declare function makeFulfillmentTransitionRequestMarkPicked(value: InputValue<FulfillmentTransitionRequestMarkPickedInput>): Model<FulfillmentTransitionRequestMarkPickedInput>;
export declare function makeFulfillmentTransitionRequestMarkPreparing(value: InputValue<FulfillmentTransitionRequestMarkPreparingInput>): Model<FulfillmentTransitionRequestMarkPreparingInput>;
export declare function makeFulfillmentTransitionRequestMarkReady(value: InputValue<FulfillmentTransitionRequestMarkReadyInput>): Model<FulfillmentTransitionRequestMarkReadyInput>;
export declare function makeFulfillmentTransitionRequestReleaseHold(value: InputValue<FulfillmentTransitionRequestReleaseHoldInput>): Model<FulfillmentTransitionRequestReleaseHoldInput>;
export declare function makeFulfillmentTransitionRequestSchedule(value: InputValue<FulfillmentTransitionRequestScheduleInput>): Model<FulfillmentTransitionRequestScheduleInput>;
export declare function makeFulfillmentTransitionRequestStart(value: InputValue<FulfillmentTransitionRequestStartInput>): Model<FulfillmentTransitionRequestStartInput>;
export declare function makeGetOrCreateReturnResolutionCheckoutSessionRequest(value: InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>): Model<GetOrCreateReturnResolutionCheckoutSessionRequestInput>;
export declare function makeGiftCardCustomAmountBoundsRequestRequest(value: InputValue<GiftCardCustomAmountBoundsRequestRequestInput>): Model<GiftCardCustomAmountBoundsRequestRequestInput>;
export declare function makeGiftCardFundingSource(value: InputValue<GiftCardFundingSourceInput>): Model<GiftCardFundingSourceInput>;
export declare function makeGiftCardFundingSourceAdjustment(value: InputValue<GiftCardFundingSourceAdjustmentInput>): Model<GiftCardFundingSourceAdjustmentInput>;
export declare function makeGiftCardFundingSourceExternalPayment(value: InputValue<GiftCardFundingSourceExternalPaymentInput>): Model<GiftCardFundingSourceExternalPaymentInput>;
export declare function makeGiftCardFundingSourceFlintManualPayment(value: InputValue<GiftCardFundingSourceFlintManualPaymentInput>): Model<GiftCardFundingSourceFlintManualPaymentInput>;
export declare function makeGiftCardFundingSourceFlintPayment(value: InputValue<GiftCardFundingSourceFlintPaymentInput>): Model<GiftCardFundingSourceFlintPaymentInput>;
export declare function makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery(value: InputValue<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput>): Model<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput>;
export declare function makeGiftCardFundingSourceGiftCardRefund(value: InputValue<GiftCardFundingSourceGiftCardRefundInput>): Model<GiftCardFundingSourceGiftCardRefundInput>;
export declare function makeGiftCardFundingSourceImport(value: InputValue<GiftCardFundingSourceImportInput>): Model<GiftCardFundingSourceImportInput>;
export declare function makeGiftCardFundingSourceStoreCredit(value: InputValue<GiftCardFundingSourceStoreCreditInput>): Model<GiftCardFundingSourceStoreCreditInput>;
export declare function makeGiftCardNotificationRecipient(value: InputValue<GiftCardNotificationRecipientInput>): Model<GiftCardNotificationRecipientInput>;
export declare function makeGiftCardProductConfigurationRequestRequest(value: InputValue<GiftCardProductConfigurationRequestRequestInput>): Model<GiftCardProductConfigurationRequestRequestInput>;
export declare function makeGiftCardPurchaseDetailsRequest(value: InputValue<GiftCardPurchaseDetailsRequestInput>): Model<GiftCardPurchaseDetailsRequestInput>;
export declare function makeGiftCardPurchaseRecipientPatchRequest(value: InputValue<GiftCardPurchaseRecipientPatchRequestInput>): Model<GiftCardPurchaseRecipientPatchRequestInput>;
export declare function makeGiftCardPurchaseRecipientRequest(value: InputValue<GiftCardPurchaseRecipientRequestInput>): Model<GiftCardPurchaseRecipientRequestInput>;
export declare function makeGiftCardVersionRequest(value: InputValue<GiftCardVersionRequestInput>): Model<GiftCardVersionRequestInput>;
export declare function makeGrantOrganizationMembershipRequest(value: InputValue<GrantOrganizationMembershipRequestInput>): Model<GrantOrganizationMembershipRequestInput>;
export declare function makeImageInputFile(value: InputValue<ImageInputFileInput>): Model<ImageInputFileInput>;
export declare function makeImageInputSourceURL(value: InputValue<ImageInputSourceURLInput>): Model<ImageInputSourceURLInput>;
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
export declare function makeInventoryOriginPolicyRequestRequest(value: InputValue<InventoryOriginPolicyRequestRequestInput>): Model<InventoryOriginPolicyRequestRequestInput>;
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
export declare function makeInventorySettingsRequestRequest(value: InputValue<InventorySettingsRequestRequestInput>): Model<InventorySettingsRequestRequestInput>;
export declare function makeInventorySourceSystemRequest(value: InputValue<InventorySourceSystemRequestInput>): Model<InventorySourceSystemRequestInput>;
export declare function makeInventoryTransferLineRequest(value: InputValue<InventoryTransferLineRequestInput>): Model<InventoryTransferLineRequestInput>;
export declare function makeInventoryTransferTransitionRequest(value: InputValue<Exclude<InventoryTransferTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<InventoryTransferTransitionRequestInput & object, readonly unknown[]>>;
export declare function makeInventoryTransferTransitionRequest(value: InputValue<InventoryTransferTransitionRequestInput>): Model<InventoryTransferTransitionRequestInput>;
export declare function makeInventoryTransferTransitionRequestCancel(value: InputValue<InventoryTransferTransitionRequestCancelInput>): Model<InventoryTransferTransitionRequestCancelInput>;
