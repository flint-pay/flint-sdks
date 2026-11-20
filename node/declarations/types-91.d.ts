import type { InputValue, Model } from '../runtime.js';
import type {
    PromotionRuleRequestInput,
    PromotionRuleValueRequestInput,
    PromotionSchedulePatchInput,
    PromotionScheduleRequestInput,
    PromotionSettingsRequestInput,
    PublishReturnPolicyRevisionRequestInput,
    QuantityPriceBreakRequestInput,
    ReaderPaymentSourceTipInput
} from './types-59.js';
import type {
    ReceiptSettingsPatchInput,
    ReceiveInventoryTransferRequestInput,
    RefreshCustomerSessionRequestInput,
    RefundAdjustmentAuditInput,
    RefundAdjustmentReasonRequestInput,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundLineItemAdjustmentInInput,
    RefundLineItemAdjustmentRefundInInput
} from './types-60.js';
import type {
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationInputGiftCardRedemptionInput,
    RefundTenderAllocationInputPaymentIntentInput,
    RefundTenderAllocationRequestInput,
    ReleaseFulfillmentHoldRequestInput,
    ReleaseInventoryReservationRequestInput,
    ReleaseLicenseKeyActivationRequestInput,
    ReleaseReturnResolutionRequestInput,
    RememberedBuyerTokenRequestInput,
    RemoveDiscountsRequestInput,
    RemoveLicenseKeyPoolKeysRequestInput,
    RemoveSubscriptionPromotionsRequestInput,
    RenewSubscriptionRequestInput,
    ReopenReturnRequestInput,
    ReportInventoryTransferLossRequestInput
} from './types-61.js';
import type {
    RepriceDiscountsRequestInput,
    ResendLicenseKeyRequestInput,
    ResendWebhookDeliveryRequestInput,
    ResetDemoSessionRequestInput,
    ResolveCustomerDeletionRequestInput,
    ResolveOrderInventoryExceptionRequestInput,
    ResolvePaymentLinkLineItemModifierInputCatalogInput,
    ResolvePaymentLinkLineItemModifierInputTextInput,
    ResolvePaymentLinkLineItemModifierRequestInput,
    ResolvePaymentLinkLineItemModifiersInput,
    ResolvePaymentLinkRequestInput,
    ResolvePaymentLinkTextModifierRequestInput,
    ResourceVersionRequestInput,
    RetryOrderEditRefundRequestInput,
    RetryReturnDispositionRequestInput,
    RetryReturnResolutionRequestInput
} from './types-62.js';
import type {
    ReturnEligibilityLineItemRequestModelInput,
    ReturnEligibilitySelectionAllRemainingFulfilledRequestInput,
    ReturnEligibilitySelectionLineItemsRequestInput,
    ReturnEligibilitySelectionRequestInput,
    ReturnInspectionLineItemRequestInput,
    ReturnInventoryTransferToOriginRequestInput
} from './types-63.js';
import type {
    ReturnLineDecisionInput,
    ReturnLineItemRequestInput,
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput,
    ReturnPolicyRevisionRequestInput,
    ReturnPolicyScopeAllRequestInput,
    ReturnPolicyScopeIncludeRequestInput,
    ReturnPolicyScopeRequestInput,
    ReturnProcessDecisionInput
} from './types-64.js';
export declare function makePromotionRuleRequest(value: InputValue<PromotionRuleRequestInput>): Model<PromotionRuleRequestInput>;
export declare function makePromotionRuleValueRequest(value: InputValue<Exclude<PromotionRuleValueRequestInput & object, readonly unknown[]>>): Model<Exclude<PromotionRuleValueRequestInput & object, readonly unknown[]>>;
export declare function makePromotionRuleValueRequest(value: InputValue<PromotionRuleValueRequestInput>): Model<PromotionRuleValueRequestInput>;
export declare function makePromotionSchedulePatch(value: InputValue<PromotionSchedulePatchInput>): Model<PromotionSchedulePatchInput>;
export declare function makePromotionScheduleRequest(value: InputValue<PromotionScheduleRequestInput>): Model<PromotionScheduleRequestInput>;
export declare function makePromotionSettingsRequest(value: InputValue<PromotionSettingsRequestInput>): Model<PromotionSettingsRequestInput>;
export declare function makePublishReturnPolicyRevisionRequest(value: InputValue<PublishReturnPolicyRevisionRequestInput>): Model<PublishReturnPolicyRevisionRequestInput>;
export declare function makeQuantityPriceBreakRequest(value: InputValue<QuantityPriceBreakRequestInput>): Model<QuantityPriceBreakRequestInput>;
export declare function makeReaderPaymentSourceTip(value: InputValue<ReaderPaymentSourceTipInput>): Model<ReaderPaymentSourceTipInput>;
export declare function makeReceiptSettingsPatch(value: InputValue<ReceiptSettingsPatchInput>): Model<ReceiptSettingsPatchInput>;
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
export declare function makeReleaseLicenseKeyActivationRequest(value: InputValue<ReleaseLicenseKeyActivationRequestInput>): Model<ReleaseLicenseKeyActivationRequestInput>;
export declare function makeReleaseReturnResolutionRequest(value: InputValue<ReleaseReturnResolutionRequestInput>): Model<ReleaseReturnResolutionRequestInput>;
export declare function makeRememberedBuyerTokenRequest(value: InputValue<RememberedBuyerTokenRequestInput>): Model<RememberedBuyerTokenRequestInput>;
export declare function makeRemoveDiscountsRequest(value: InputValue<RemoveDiscountsRequestInput>): Model<RemoveDiscountsRequestInput>;
export declare function makeRemoveLicenseKeyPoolKeysRequest(value: InputValue<Exclude<RemoveLicenseKeyPoolKeysRequestInput & object, readonly unknown[]>>): Model<Exclude<RemoveLicenseKeyPoolKeysRequestInput & object, readonly unknown[]>>;
export declare function makeRemoveLicenseKeyPoolKeysRequest(value: InputValue<RemoveLicenseKeyPoolKeysRequestInput>): Model<RemoveLicenseKeyPoolKeysRequestInput>;
export declare function makeRemoveSubscriptionPromotionsRequest(value: InputValue<RemoveSubscriptionPromotionsRequestInput>): Model<RemoveSubscriptionPromotionsRequestInput>;
export declare function makeRenewSubscriptionRequest(value: InputValue<RenewSubscriptionRequestInput>): Model<RenewSubscriptionRequestInput>;
export declare function makeReopenReturnRequest(value: InputValue<ReopenReturnRequestInput>): Model<ReopenReturnRequestInput>;
export declare function makeReportInventoryTransferLossRequest(value: InputValue<ReportInventoryTransferLossRequestInput>): Model<ReportInventoryTransferLossRequestInput>;
export declare function makeRepriceDiscountsRequest(value: InputValue<RepriceDiscountsRequestInput>): Model<RepriceDiscountsRequestInput>;
export declare function makeResendLicenseKeyRequest(value: InputValue<ResendLicenseKeyRequestInput>): Model<ResendLicenseKeyRequestInput>;
export declare function makeResendWebhookDeliveryRequest(value: InputValue<ResendWebhookDeliveryRequestInput>): Model<ResendWebhookDeliveryRequestInput>;
export declare function makeResetDemoSessionRequest(value: InputValue<ResetDemoSessionRequestInput>): Model<ResetDemoSessionRequestInput>;
export declare function makeResolveCustomerDeletionRequest(value: InputValue<ResolveCustomerDeletionRequestInput>): Model<ResolveCustomerDeletionRequestInput>;
export declare function makeResolveOrderInventoryExceptionRequest(value: InputValue<ResolveOrderInventoryExceptionRequestInput>): Model<ResolveOrderInventoryExceptionRequestInput>;
export declare function makeResolvePaymentLinkLineItemModifierInputCatalog(value: InputValue<ResolvePaymentLinkLineItemModifierInputCatalogInput>): Model<ResolvePaymentLinkLineItemModifierInputCatalogInput>;
export declare function makeResolvePaymentLinkLineItemModifierInputText(value: InputValue<ResolvePaymentLinkLineItemModifierInputTextInput>): Model<ResolvePaymentLinkLineItemModifierInputTextInput>;
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
