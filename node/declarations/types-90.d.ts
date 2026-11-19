import type { InputValue, Model } from '../runtime.js';
import type {
    PlatformFeeCapRequestInput,
    PlatformFeeMoneyInput,
    PlatformFeeRequestInput,
    PoolLicenseKeyConfigurationRequestInput,
    PriceListPriceRequestInput,
    ProcessExistingReturnLineItemRequestInput,
    ProcessExistingReturnRequestInput
} from './types-56.js';
import type {
    ProductVariantRequestInput,
    ProductVariantSelectedOptionRequestInput,
    PromotionAmountOffMethodRequestInput,
    PromotionApplicationMethodPatchInput,
    PromotionApplicationMethodRequestInput,
    PromotionBuyXGetYMethodRequestInput
} from './types-57.js';
import type {
    PromotionCodeRequestInput,
    PromotionCombinesWithPatchInput,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityPatchInput,
    PromotionExclusivityRequestInput,
    PromotionPercentOffMethodRequestInput,
    PromotionRecurrenceForeverRequestInput,
    PromotionRecurrenceOnceRequestInput,
    PromotionRecurrenceRepeatingRequestInput,
    PromotionRecurrenceRequestInput,
    PromotionRefInputPromotionCodeInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefRequestInput
} from './types-58.js';
import type {
    PromotionRuleGroupRequestInput,
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
    ResetDemoSessionRequestInput
} from './types-62.js';
export declare function makePlatformFeeCapRequest(value: InputValue<PlatformFeeCapRequestInput>): Model<PlatformFeeCapRequestInput>;
export declare function makePlatformFeeMoney(value: InputValue<PlatformFeeMoneyInput>): Model<PlatformFeeMoneyInput>;
export declare function makePlatformFeeRequest(value: InputValue<PlatformFeeRequestInput>): Model<PlatformFeeRequestInput>;
export declare function makePoolLicenseKeyConfigurationRequest(value: InputValue<PoolLicenseKeyConfigurationRequestInput>): Model<PoolLicenseKeyConfigurationRequestInput>;
export declare function makePriceListPriceRequest(value: InputValue<PriceListPriceRequestInput>): Model<PriceListPriceRequestInput>;
export declare function makeProcessExistingReturnLineItemRequest(value: InputValue<ProcessExistingReturnLineItemRequestInput>): Model<ProcessExistingReturnLineItemRequestInput>;
export declare function makeProcessExistingReturnRequest(value: InputValue<ProcessExistingReturnRequestInput>): Model<ProcessExistingReturnRequestInput>;
export declare function makeProductVariantRequest(value: InputValue<ProductVariantRequestInput>): Model<ProductVariantRequestInput>;
export declare function makeProductVariantSelectedOptionRequest(value: InputValue<ProductVariantSelectedOptionRequestInput>): Model<ProductVariantSelectedOptionRequestInput>;
export declare function makePromotionAmountOffMethodRequest(value: InputValue<PromotionAmountOffMethodRequestInput>): Model<PromotionAmountOffMethodRequestInput>;
export declare function makePromotionApplicationMethodPatch(value: InputValue<PromotionApplicationMethodPatchInput>): Model<PromotionApplicationMethodPatchInput>;
export declare function makePromotionApplicationMethodRequest(value: InputValue<Exclude<PromotionApplicationMethodRequestInput & object, readonly unknown[]>>): Model<Exclude<PromotionApplicationMethodRequestInput & object, readonly unknown[]>>;
export declare function makePromotionApplicationMethodRequest(value: InputValue<PromotionApplicationMethodRequestInput>): Model<PromotionApplicationMethodRequestInput>;
export declare function makePromotionBuyXGetYMethodRequest(value: InputValue<PromotionBuyXGetYMethodRequestInput>): Model<PromotionBuyXGetYMethodRequestInput>;
export declare function makePromotionCodeRequest(value: InputValue<PromotionCodeRequestInput>): Model<PromotionCodeRequestInput>;
export declare function makePromotionCombinesWithPatch(value: InputValue<PromotionCombinesWithPatchInput>): Model<PromotionCombinesWithPatchInput>;
export declare function makePromotionCombinesWithRequest(value: InputValue<PromotionCombinesWithRequestInput>): Model<PromotionCombinesWithRequestInput>;
export declare function makePromotionExclusivityPatch(value: InputValue<PromotionExclusivityPatchInput>): Model<PromotionExclusivityPatchInput>;
export declare function makePromotionExclusivityRequest(value: InputValue<PromotionExclusivityRequestInput>): Model<PromotionExclusivityRequestInput>;
export declare function makePromotionPercentOffMethodRequest(value: InputValue<PromotionPercentOffMethodRequestInput>): Model<PromotionPercentOffMethodRequestInput>;
export declare function makePromotionRecurrenceForeverRequest(value: InputValue<PromotionRecurrenceForeverRequestInput>): Model<PromotionRecurrenceForeverRequestInput>;
export declare function makePromotionRecurrenceOnceRequest(value: InputValue<PromotionRecurrenceOnceRequestInput>): Model<PromotionRecurrenceOnceRequestInput>;
export declare function makePromotionRecurrenceRepeatingRequest(value: InputValue<PromotionRecurrenceRepeatingRequestInput>): Model<PromotionRecurrenceRepeatingRequestInput>;
export declare function makePromotionRecurrenceRequest(value: InputValue<PromotionRecurrenceRequestInput>): Model<PromotionRecurrenceRequestInput>;
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
