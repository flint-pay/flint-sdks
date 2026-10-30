import type { InputValue, Model } from '../runtime.js';
import type {
    ProcessExistingReturnRequestInput,
    ProductVariantRequestInput,
    ProductVariantSelectedOptionRequestInput,
    PromotionAmountOffMethodRequestInput,
    PromotionApplicationMethodPatchInput,
    PromotionApplicationMethodRequestInput
} from './types-44.js';
import type {
    PromotionBuyXGetYMethodRequestInput,
    PromotionCombinesWithPatchInput,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityPatchInput,
    PromotionExclusivityRequestInput,
    PromotionPercentOffMethodRequestInput,
    PromotionRecurrenceInput,
    PromotionRecurrenceForeverInput,
    PromotionRecurrenceOnceInput,
    PromotionRecurrenceRepeatingInput,
    PromotionRefInputPromotionCodeInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionRuleRequestInput,
    PromotionRuleValueRequestInput,
    PromotionSchedulePatchInput,
    PromotionScheduleRequestInput,
    PromotionSettingsRequestInput
} from './types-45.js';
import type {
    PublishReturnPolicyRevisionRequestInput,
    ReceiptSettingsRequestInput,
    RefreshCustomerSessionRequestInput,
    RefundAdjustmentAuditInput,
    RefundAdjustmentReasonRequestInput,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundLineItemAdjustmentInInput,
    RefundLineItemAdjustmentRefundInInput
} from './types-46.js';
import type {
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationInputGiftCardRedemptionInput,
    RefundTenderAllocationInputPaymentIntentInput,
    RefundTenderAllocationRequestInput,
    ReleaseReturnResolutionRequestInput,
    RemoveDiscountsRequestInput,
    RenewSubscriptionRequestInput,
    ReopenReturnRequestInput,
    RepriceDiscountsRequestInput,
    ResendWebhookDeliveryRequestInput,
    ResetDemoSessionRequestInput,
    ResolveCustomerDeletionRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkTextModifierRequestInput
} from './types-47.js';
import type {
    ResourceVersionRequestInput,
    RetryReturnDispositionRequestInput,
    RetryReturnResolutionRequestInput,
    ReturnEligibilityLineItemRequestInput,
    ReturnEligibilitySelectionInput,
    ReturnEligibilitySelectionAllRemainingFulfilledInput,
    ReturnEligibilitySelectionLineItemsInput
} from './types-48.js';
import type {
    ReturnInspectionLineItemRequestInput,
    ReturnLineDecisionInput,
    ReturnLineItemRequestInput,
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput
} from './types-49.js';
export declare function makeProcessExistingReturnRequest(value: InputValue<ProcessExistingReturnRequestInput>): Model<ProcessExistingReturnRequestInput>;
export declare function makeProductVariantRequest(value: InputValue<ProductVariantRequestInput>): Model<ProductVariantRequestInput>;
export declare function makeProductVariantSelectedOptionRequest(value: InputValue<ProductVariantSelectedOptionRequestInput>): Model<ProductVariantSelectedOptionRequestInput>;
export declare function makePromotionAmountOffMethodRequest(value: InputValue<PromotionAmountOffMethodRequestInput>): Model<PromotionAmountOffMethodRequestInput>;
export declare function makePromotionApplicationMethodPatch(value: InputValue<PromotionApplicationMethodPatchInput>): Model<PromotionApplicationMethodPatchInput>;
export declare function makePromotionApplicationMethodRequest(value: InputValue<Exclude<PromotionApplicationMethodRequestInput & object, readonly unknown[]>>): Model<Exclude<PromotionApplicationMethodRequestInput & object, readonly unknown[]>>;
export declare function makePromotionApplicationMethodRequest(value: InputValue<PromotionApplicationMethodRequestInput>): Model<PromotionApplicationMethodRequestInput>;
export declare function makePromotionBuyXGetYMethodRequest(value: InputValue<PromotionBuyXGetYMethodRequestInput>): Model<PromotionBuyXGetYMethodRequestInput>;
export declare function makePromotionCombinesWithPatch(value: InputValue<PromotionCombinesWithPatchInput>): Model<PromotionCombinesWithPatchInput>;
export declare function makePromotionCombinesWithRequest(value: InputValue<PromotionCombinesWithRequestInput>): Model<PromotionCombinesWithRequestInput>;
export declare function makePromotionExclusivityPatch(value: InputValue<PromotionExclusivityPatchInput>): Model<PromotionExclusivityPatchInput>;
export declare function makePromotionExclusivityRequest(value: InputValue<PromotionExclusivityRequestInput>): Model<PromotionExclusivityRequestInput>;
export declare function makePromotionPercentOffMethodRequest(value: InputValue<PromotionPercentOffMethodRequestInput>): Model<PromotionPercentOffMethodRequestInput>;
export declare function makePromotionRecurrence(value: InputValue<PromotionRecurrenceInput>): Model<PromotionRecurrenceInput>;
export declare function makePromotionRecurrenceForever(value: InputValue<PromotionRecurrenceForeverInput>): Model<PromotionRecurrenceForeverInput>;
export declare function makePromotionRecurrenceOnce(value: InputValue<PromotionRecurrenceOnceInput>): Model<PromotionRecurrenceOnceInput>;
export declare function makePromotionRecurrenceRepeating(value: InputValue<PromotionRecurrenceRepeatingInput>): Model<PromotionRecurrenceRepeatingInput>;
export declare function makePromotionRefInputPromotionCode(value: InputValue<PromotionRefInputPromotionCodeInput>): Model<PromotionRefInputPromotionCodeInput>;
export declare function makePromotionRefInputPromotionID(value: InputValue<PromotionRefInputPromotionIDInput>): Model<PromotionRefInputPromotionIDInput>;
export declare function makePromotionRefRequest(value: InputValue<PromotionRefRequestInput>): Model<PromotionRefRequestInput>;
export declare function makePromotionRuleGroupRequest(value: InputValue<Exclude<PromotionRuleGroupRequestInput & object, readonly unknown[]>>): Model<Exclude<PromotionRuleGroupRequestInput & object, readonly unknown[]>>;
export declare function makePromotionRuleGroupRequest(value: InputValue<PromotionRuleGroupRequestInput>): Model<PromotionRuleGroupRequestInput>;
export declare function makePromotionRuleRequest(value: InputValue<PromotionRuleRequestInput>): Model<PromotionRuleRequestInput>;
export declare function makePromotionRuleValueRequest(value: InputValue<Exclude<PromotionRuleValueRequestInput & object, readonly unknown[]>>): Model<Exclude<PromotionRuleValueRequestInput & object, readonly unknown[]>>;
export declare function makePromotionRuleValueRequest(value: InputValue<PromotionRuleValueRequestInput>): Model<PromotionRuleValueRequestInput>;
export declare function makePromotionSchedulePatch(value: InputValue<PromotionSchedulePatchInput>): Model<PromotionSchedulePatchInput>;
export declare function makePromotionScheduleRequest(value: InputValue<PromotionScheduleRequestInput>): Model<PromotionScheduleRequestInput>;
export declare function makePromotionSettingsRequest(value: InputValue<PromotionSettingsRequestInput>): Model<PromotionSettingsRequestInput>;
export declare function makePublishReturnPolicyRevisionRequest(value: InputValue<PublishReturnPolicyRevisionRequestInput>): Model<PublishReturnPolicyRevisionRequestInput>;
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
