import type { InputValue, Model } from '../runtime.js';
import type { ReceiptSettingsRequestInput, RefreshCustomerSessionRequestInput, RefundAdjustmentAuditInput } from './types-46.js';
import type {
    RefundAdjustmentReasonRequestInput,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundLineItemAdjustmentInInput,
    RefundLineItemAdjustmentRefundInInput,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationInputGiftCardRedemptionInput,
    RefundTenderAllocationInputPaymentIntentInput,
    RefundTenderAllocationRequestInput,
    ReleaseReturnResolutionRequestInput,
    RemoveDiscountsRequestInput,
    RenewSubscriptionRequestInput,
    ReopenReturnRequestInput
} from './types-47.js';
import type {
    RepriceDiscountsRequestInput,
    ResendWebhookDeliveryRequestInput,
    ResetDemoSessionRequestInput,
    ResolveCustomerDeletionRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkTextModifierRequestInput,
    ResourceVersionRequestInput,
    RetryReturnDispositionRequestInput,
    RetryReturnResolutionRequestInput
} from './types-48.js';
import type {
    ReturnEligibilityLineItemRequestInput,
    ReturnEligibilitySelectionInput,
    ReturnEligibilitySelectionAllRemainingFulfilledInput,
    ReturnEligibilitySelectionLineItemsInput,
    ReturnInspectionLineItemRequestInput,
    ReturnLineDecisionInput,
    ReturnLineItemRequestInput,
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput
} from './types-49.js';
import type {
    ReturnPolicyRevisionRequestInput,
    ReturnPolicyScopeInput,
    ReturnPolicyScopeAllInput,
    ReturnPolicyScopeIncludeInput,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnReceiptLineItemInputExcessInput,
    ReturnReceiptLineItemInputMatchedInput,
    ReturnReceiptLineItemInputUnverifiedInput,
    ReturnReceiptLineItemRequestInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionAdjustmentRequestInput
} from './types-50.js';
import type {
    ReturnResolutionLineItemRequestInput,
    ReturnRestockingFeePolicyInput,
    ReturnShipmentLineItemAllocationRequestInput,
    ReturnShippingPolicyInput,
    ReturnSourceSystemRequestInput,
    ReturnUnverifiedItemInput,
    ReturnWindowInput,
    ReverseInvoiceManualPaymentRequestInput
} from './types-51.js';
export declare function makeReceiptSettingsRequest(value: InputValue<ReceiptSettingsRequestInput>): Model<ReceiptSettingsRequestInput>;
export declare function makeRefreshCustomerSessionRequest(value: InputValue<RefreshCustomerSessionRequestInput>): Model<RefreshCustomerSessionRequestInput>;
export declare function makeRefundAdjustmentAudit(value: InputValue<RefundAdjustmentAuditInput>): Model<RefundAdjustmentAuditInput>;
export declare function makeRefundAdjustmentReasonRequest(value: InputValue<RefundAdjustmentReasonRequestInput>): Model<RefundAdjustmentReasonRequestInput>;
export declare function makeRefundCharge(value: InputValue<RefundChargeInput>): Model<RefundChargeInput>;
export declare function makeRefundDestinations(value: InputValue<RefundDestinationsInput>): Model<RefundDestinationsInput>;
export declare function makeRefundLineItem(value: InputValue<RefundLineItemInput>): Model<RefundLineItemInput>;
export declare function makeRefundLineItemAdjustmentIn(value: InputValue<RefundLineItemAdjustmentInInput>): Model<RefundLineItemAdjustmentInInput>;
export declare function makeRefundLineItemAdjustmentRefundIn(value: InputValue<RefundLineItemAdjustmentRefundInInput>): Model<RefundLineItemAdjustmentRefundInInput>;
export declare function makeRefundTaxBreakdownRefundIn(value: InputValue<RefundTaxBreakdownRefundInInput>): Model<RefundTaxBreakdownRefundInInput>;
export declare function makeRefundTenderAllocationInputGiftCardRedemption(value: InputValue<RefundTenderAllocationInputGiftCardRedemptionInput>): Model<RefundTenderAllocationInputGiftCardRedemptionInput>;
export declare function makeRefundTenderAllocationInputPaymentIntent(value: InputValue<RefundTenderAllocationInputPaymentIntentInput>): Model<RefundTenderAllocationInputPaymentIntentInput>;
export declare function makeRefundTenderAllocationRequest(value: InputValue<RefundTenderAllocationRequestInput>): Model<RefundTenderAllocationRequestInput>;
export declare function makeReleaseReturnResolutionRequest(value: InputValue<ReleaseReturnResolutionRequestInput>): Model<ReleaseReturnResolutionRequestInput>;
export declare function makeRemoveDiscountsRequest(value: InputValue<RemoveDiscountsRequestInput>): Model<RemoveDiscountsRequestInput>;
export declare function makeRenewSubscriptionRequest(value: InputValue<RenewSubscriptionRequestInput>): Model<RenewSubscriptionRequestInput>;
export declare function makeReopenReturnRequest(value: InputValue<ReopenReturnRequestInput>): Model<ReopenReturnRequestInput>;
export declare function makeRepriceDiscountsRequest(value: InputValue<RepriceDiscountsRequestInput>): Model<RepriceDiscountsRequestInput>;
export declare function makeResendWebhookDeliveryRequest(value: InputValue<ResendWebhookDeliveryRequestInput>): Model<ResendWebhookDeliveryRequestInput>;
export declare function makeResetDemoSessionRequest(value: InputValue<ResetDemoSessionRequestInput>): Model<ResetDemoSessionRequestInput>;
export declare function makeResolveCustomerDeletionRequest(value: InputValue<ResolveCustomerDeletionRequestInput>): Model<ResolveCustomerDeletionRequestInput>;
export declare function makeResolveOrderInventoryExceptionRequest(value: InputValue<ResolveOrderInventoryExceptionRequestInput>): Model<ResolveOrderInventoryExceptionRequestInput>;
export declare function makeResolvePaymentLinkLineItemModifierRequest(value: InputValue<ResolvePaymentLinkLineItemModifierRequestInput>): Model<ResolvePaymentLinkLineItemModifierRequestInput>;
export declare function makeResolvePaymentLinkLineItemModifiers(value: InputValue<ResolvePaymentLinkLineItemModifiersInput>): Model<ResolvePaymentLinkLineItemModifiersInput>;
export declare function makeResolvePaymentLinkRequest(value: InputValue<ResolvePaymentLinkRequestInput>): Model<ResolvePaymentLinkRequestInput>;
export declare function makeResolvePaymentLinkTextModifierRequest(value: InputValue<ResolvePaymentLinkTextModifierRequestInput>): Model<ResolvePaymentLinkTextModifierRequestInput>;
export declare function makeResourceVersionRequest(value: InputValue<ResourceVersionRequestInput>): Model<ResourceVersionRequestInput>;
export declare function makeRetryReturnDispositionRequest(value: InputValue<RetryReturnDispositionRequestInput>): Model<RetryReturnDispositionRequestInput>;
export declare function makeRetryReturnResolutionRequest(value: InputValue<RetryReturnResolutionRequestInput>): Model<RetryReturnResolutionRequestInput>;
export declare function makeReturnEligibilityLineItemRequest(value: InputValue<ReturnEligibilityLineItemRequestInput>): Model<ReturnEligibilityLineItemRequestInput>;
export declare function makeReturnEligibilitySelection(value: InputValue<ReturnEligibilitySelectionInput>): Model<ReturnEligibilitySelectionInput>;
export declare function makeReturnEligibilitySelectionAllRemainingFulfilled(value: InputValue<ReturnEligibilitySelectionAllRemainingFulfilledInput>): Model<ReturnEligibilitySelectionAllRemainingFulfilledInput>;
export declare function makeReturnEligibilitySelectionLineItems(value: InputValue<ReturnEligibilitySelectionLineItemsInput>): Model<ReturnEligibilitySelectionLineItemsInput>;
export declare function makeReturnInspectionLineItemRequest(value: InputValue<ReturnInspectionLineItemRequestInput>): Model<ReturnInspectionLineItemRequestInput>;
export declare function makeReturnLineDecision(value: InputValue<ReturnLineDecisionInput>): Model<ReturnLineDecisionInput>;
export declare function makeReturnLineItemRequest(value: InputValue<ReturnLineItemRequestInput>): Model<ReturnLineItemRequestInput>;
export declare function makeReturnPolicyRevisionInputIneligible(value: InputValue<ReturnPolicyRevisionInputIneligibleInput>): Model<ReturnPolicyRevisionInputIneligibleInput>;
export declare function makeReturnPolicyRevisionInputReturnable(value: InputValue<ReturnPolicyRevisionInputReturnableInput>): Model<ReturnPolicyRevisionInputReturnableInput>;
export declare function makeReturnPolicyRevisionRequest(value: InputValue<ReturnPolicyRevisionRequestInput>): Model<ReturnPolicyRevisionRequestInput>;
export declare function makeReturnPolicyScope(value: InputValue<ReturnPolicyScopeInput>): Model<ReturnPolicyScopeInput>;
export declare function makeReturnPolicyScopeAll(value: InputValue<ReturnPolicyScopeAllInput>): Model<ReturnPolicyScopeAllInput>;
export declare function makeReturnPolicyScopeInclude(value: InputValue<ReturnPolicyScopeIncludeInput>): Model<ReturnPolicyScopeIncludeInput>;
export declare function makeReturnProcessDecision(value: InputValue<ReturnProcessDecisionInput>): Model<ReturnProcessDecisionInput>;
export declare function makeReturnProcessDispositionRequest(value: InputValue<ReturnProcessDispositionRequestInput>): Model<ReturnProcessDispositionRequestInput>;
export declare function makeReturnProcessInspectionRequest(value: InputValue<ReturnProcessInspectionRequestInput>): Model<ReturnProcessInspectionRequestInput>;
export declare function makeReturnProcessReceiptRequest(value: InputValue<ReturnProcessReceiptRequestInput>): Model<ReturnProcessReceiptRequestInput>;
export declare function makeReturnProcessResolutionRequest(value: InputValue<ReturnProcessResolutionRequestInput>): Model<ReturnProcessResolutionRequestInput>;
export declare function makeReturnReceiptLineItemInputExcess(value: InputValue<ReturnReceiptLineItemInputExcessInput>): Model<ReturnReceiptLineItemInputExcessInput>;
export declare function makeReturnReceiptLineItemInputMatched(value: InputValue<ReturnReceiptLineItemInputMatchedInput>): Model<ReturnReceiptLineItemInputMatchedInput>;
export declare function makeReturnReceiptLineItemInputUnverified(value: InputValue<ReturnReceiptLineItemInputUnverifiedInput>): Model<ReturnReceiptLineItemInputUnverifiedInput>;
export declare function makeReturnReceiptLineItemRequest(value: InputValue<ReturnReceiptLineItemRequestInput>): Model<ReturnReceiptLineItemRequestInput>;
export declare function makeReturnReplacementLineItemInputBundle(value: InputValue<ReturnReplacementLineItemInputBundleInput>): Model<ReturnReplacementLineItemInputBundleInput>;
export declare function makeReturnReplacementLineItemInputCustom(value: InputValue<ReturnReplacementLineItemInputCustomInput>): Model<ReturnReplacementLineItemInputCustomInput>;
export declare function makeReturnReplacementLineItemInputVariant(value: InputValue<ReturnReplacementLineItemInputVariantInput>): Model<ReturnReplacementLineItemInputVariantInput>;
export declare function makeReturnReplacementLineItemRequest(value: InputValue<ReturnReplacementLineItemRequestInput>): Model<ReturnReplacementLineItemRequestInput>;
export declare function makeReturnResolutionAdjustmentRequest(value: InputValue<ReturnResolutionAdjustmentRequestInput>): Model<ReturnResolutionAdjustmentRequestInput>;
export declare function makeReturnResolutionLineItemRequest(value: InputValue<ReturnResolutionLineItemRequestInput>): Model<ReturnResolutionLineItemRequestInput>;
export declare function makeReturnRestockingFeePolicy(value: InputValue<ReturnRestockingFeePolicyInput>): Model<ReturnRestockingFeePolicyInput>;
export declare function makeReturnShipmentLineItemAllocationRequest(value: InputValue<ReturnShipmentLineItemAllocationRequestInput>): Model<ReturnShipmentLineItemAllocationRequestInput>;
export declare function makeReturnShippingPolicy(value: InputValue<ReturnShippingPolicyInput>): Model<ReturnShippingPolicyInput>;
export declare function makeReturnSourceSystemRequest(value: InputValue<ReturnSourceSystemRequestInput>): Model<ReturnSourceSystemRequestInput>;
export declare function makeReturnUnverifiedItem(value: InputValue<ReturnUnverifiedItemInput>): Model<ReturnUnverifiedItemInput>;
export declare function makeReturnWindow(value: InputValue<ReturnWindowInput>): Model<ReturnWindowInput>;
export declare function makeReverseInvoiceManualPaymentRequest(value: InputValue<ReverseInvoiceManualPaymentRequestInput>): Model<ReverseInvoiceManualPaymentRequestInput>;
