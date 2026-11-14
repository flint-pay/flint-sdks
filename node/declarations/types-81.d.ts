import type { InputValue, Model } from '../runtime.js';
import type { PromotionRefRequestInput, PromotionRuleGroupRequestInput, PromotionRuleRequestInput } from './types-51.js';
import type {
    PromotionRuleValueRequestInput,
    PromotionSchedulePatchInput,
    PromotionScheduleRequestInput,
    PromotionSettingsRequestInput,
    PublishReturnPolicyRevisionRequestInput,
    QuantityPriceBreakRequestInput,
    ReaderPaymentSourceTipInput,
    ReceiveInventoryTransferRequestInput
} from './types-52.js';
import type {
    RefreshCustomerSessionRequestInput,
    RefundAdjustmentAuditInput,
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
    ReleaseFulfillmentHoldRequestInput,
    ReleaseInventoryReservationRequestInput,
    ReleaseReturnResolutionRequestInput
} from './types-53.js';
import type {
    RememberedBuyerTokenRequestInput,
    RemoveDiscountsRequestInput,
    RemoveSubscriptionPromotionsRequestInput,
    RenewSubscriptionRequestInput,
    ReopenReturnRequestInput,
    ReportInventoryTransferLossRequestInput,
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
    RetryOrderEditRefundRequestInput,
    RetryReturnDispositionRequestInput
} from './types-54.js';
import type {
    RetryReturnResolutionRequestInput,
    ReturnEligibilityLineItemRequestModelInput,
    ReturnEligibilitySelectionAllRemainingFulfilledRequestInput,
    ReturnEligibilitySelectionLineItemsRequestInput,
    ReturnEligibilitySelectionRequestInput,
    ReturnInspectionLineItemRequestInput,
    ReturnInventoryTransferToOriginRequestInput,
    ReturnLineDecisionInput
} from './types-55.js';
import type {
    ReturnLineItemRequestInput,
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput,
    ReturnPolicyRevisionRequestInput,
    ReturnPolicyScopeAllRequestInput,
    ReturnPolicyScopeIncludeRequestInput,
    ReturnPolicyScopeRequestInput,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResolutionRequestInput
} from './types-56.js';
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
export declare function makeQuantityPriceBreakRequest(value: InputValue<QuantityPriceBreakRequestInput>): Model<QuantityPriceBreakRequestInput>;
export declare function makeReaderPaymentSourceTip(value: InputValue<ReaderPaymentSourceTipInput>): Model<ReaderPaymentSourceTipInput>;
export declare function makeReceiveInventoryTransferRequest(value: InputValue<ReceiveInventoryTransferRequestInput>): Model<ReceiveInventoryTransferRequestInput>;
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
export declare function makeReleaseFulfillmentHoldRequest(value: InputValue<ReleaseFulfillmentHoldRequestInput>): Model<ReleaseFulfillmentHoldRequestInput>;
export declare function makeReleaseInventoryReservationRequest(value: InputValue<ReleaseInventoryReservationRequestInput>): Model<ReleaseInventoryReservationRequestInput>;
export declare function makeReleaseReturnResolutionRequest(value: InputValue<ReleaseReturnResolutionRequestInput>): Model<ReleaseReturnResolutionRequestInput>;
export declare function makeRememberedBuyerTokenRequest(value: InputValue<RememberedBuyerTokenRequestInput>): Model<RememberedBuyerTokenRequestInput>;
export declare function makeRemoveDiscountsRequest(value: InputValue<RemoveDiscountsRequestInput>): Model<RemoveDiscountsRequestInput>;
export declare function makeRemoveSubscriptionPromotionsRequest(value: InputValue<RemoveSubscriptionPromotionsRequestInput>): Model<RemoveSubscriptionPromotionsRequestInput>;
export declare function makeRenewSubscriptionRequest(value: InputValue<RenewSubscriptionRequestInput>): Model<RenewSubscriptionRequestInput>;
export declare function makeReopenReturnRequest(value: InputValue<ReopenReturnRequestInput>): Model<ReopenReturnRequestInput>;
export declare function makeReportInventoryTransferLossRequest(value: InputValue<ReportInventoryTransferLossRequestInput>): Model<ReportInventoryTransferLossRequestInput>;
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
export declare function makeRetryOrderEditRefundRequest(value: InputValue<RetryOrderEditRefundRequestInput>): Model<RetryOrderEditRefundRequestInput>;
export declare function makeRetryReturnDispositionRequest(value: InputValue<RetryReturnDispositionRequestInput>): Model<RetryReturnDispositionRequestInput>;
export declare function makeRetryReturnResolutionRequest(value: InputValue<RetryReturnResolutionRequestInput>): Model<RetryReturnResolutionRequestInput>;
export declare function makeReturnEligibilityLineItemRequestModel(value: InputValue<ReturnEligibilityLineItemRequestModelInput>): Model<ReturnEligibilityLineItemRequestModelInput>;
export declare function makeReturnEligibilitySelectionAllRemainingFulfilledRequest(value: InputValue<ReturnEligibilitySelectionAllRemainingFulfilledRequestInput>): Model<ReturnEligibilitySelectionAllRemainingFulfilledRequestInput>;
export declare function makeReturnEligibilitySelectionLineItemsRequest(value: InputValue<ReturnEligibilitySelectionLineItemsRequestInput>): Model<ReturnEligibilitySelectionLineItemsRequestInput>;
export declare function makeReturnEligibilitySelectionRequest(value: InputValue<ReturnEligibilitySelectionRequestInput>): Model<ReturnEligibilitySelectionRequestInput>;
export declare function makeReturnInspectionLineItemRequest(value: InputValue<ReturnInspectionLineItemRequestInput>): Model<ReturnInspectionLineItemRequestInput>;
export declare function makeReturnInventoryTransferToOriginRequest(value: InputValue<ReturnInventoryTransferToOriginRequestInput>): Model<ReturnInventoryTransferToOriginRequestInput>;
export declare function makeReturnLineDecision(value: InputValue<ReturnLineDecisionInput>): Model<ReturnLineDecisionInput>;
export declare function makeReturnLineItemRequest(value: InputValue<ReturnLineItemRequestInput>): Model<ReturnLineItemRequestInput>;
export declare function makeReturnPolicyRevisionInputIneligible(value: InputValue<ReturnPolicyRevisionInputIneligibleInput>): Model<ReturnPolicyRevisionInputIneligibleInput>;
export declare function makeReturnPolicyRevisionInputReturnable(value: InputValue<ReturnPolicyRevisionInputReturnableInput>): Model<ReturnPolicyRevisionInputReturnableInput>;
export declare function makeReturnPolicyRevisionRequest(value: InputValue<ReturnPolicyRevisionRequestInput>): Model<ReturnPolicyRevisionRequestInput>;
export declare function makeReturnPolicyScopeAllRequest(value: InputValue<ReturnPolicyScopeAllRequestInput>): Model<ReturnPolicyScopeAllRequestInput>;
export declare function makeReturnPolicyScopeIncludeRequest(value: InputValue<ReturnPolicyScopeIncludeRequestInput>): Model<ReturnPolicyScopeIncludeRequestInput>;
export declare function makeReturnPolicyScopeRequest(value: InputValue<ReturnPolicyScopeRequestInput>): Model<ReturnPolicyScopeRequestInput>;
export declare function makeReturnProcessDecision(value: InputValue<ReturnProcessDecisionInput>): Model<ReturnProcessDecisionInput>;
export declare function makeReturnProcessDispositionRequest(value: InputValue<ReturnProcessDispositionRequestInput>): Model<ReturnProcessDispositionRequestInput>;
export declare function makeReturnProcessInspectionRequest(value: InputValue<ReturnProcessInspectionRequestInput>): Model<ReturnProcessInspectionRequestInput>;
export declare function makeReturnProcessReceiptRequest(value: InputValue<ReturnProcessReceiptRequestInput>): Model<ReturnProcessReceiptRequestInput>;
export declare function makeReturnProcessResolutionRequest(value: InputValue<ReturnProcessResolutionRequestInput>): Model<ReturnProcessResolutionRequestInput>;
