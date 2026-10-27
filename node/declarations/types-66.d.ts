import type { InputValue, Model } from '../runtime.js';
import type {
    DeliveryProfileOriginPolicyInputFixedLocationInput,
    DeliveryProfileOriginPolicyInputInventoryRoutingInput,
    DeliveryProfileOriginPolicyInputMethodOriginInput,
    DeliveryProfileOriginPolicyRequestInput
} from './types-13.js';
import type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryRateCallbackConfigurationInput,
    DeliveryRateCallbackConfigurationPatchRequestInput,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRecipientRequirementInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliverySelectionInstructionsRequestInput
} from './types-14.js';
import type {
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTransitTimeRuleInput,
    DeliveryWeeklyIntervalInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryWindowRequestInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionInput,
    DeliveryZoneConfigurationInput,
    DeveloperInitialAPIKeyRequestInput
} from './types-15.js';
import type {
    DimensionsInput,
    DiscountPreviewRequestInput,
    DocumentTaxIDInput,
    EmailPreferenceLinkRequestInput
} from './types-16.js';
import type {
    FeedbackReportingClientInput,
    FulfillmentLineItemRequestInput,
    FulfillmentPackagingRequestInput,
    FulfillmentRecipientRequestInput,
    FulfillmentSettingsInput,
    FulfillmentTransitionRequestInput,
    FulfillmentTransitionRequestAcceptInput,
    FulfillmentTransitionRequestCancelInput,
    FulfillmentTransitionRequestCompleteInput,
    FulfillmentTransitionRequestDispatchInput,
    FulfillmentTransitionRequestFailInput,
    FulfillmentTransitionRequestHoldInput,
    FulfillmentTransitionRequestMarkNoShowInput,
    FulfillmentTransitionRequestMarkPackedInput,
    FulfillmentTransitionRequestMarkPickedInput
} from './types-17.js';
import type {
    FulfillmentTransitionRequestMarkPreparingInput,
    FulfillmentTransitionRequestMarkReadyInput,
    FulfillmentTransitionRequestReleaseHoldInput,
    FulfillmentTransitionRequestScheduleInput,
    FulfillmentTransitionRequestStartInput,
    GetOrCreateReturnResolutionCheckoutSessionRequestInput,
    GiftCardCustomAmountBoundsInput,
    GiftCardFundingSourceInput,
    GiftCardFundingSourceAdjustmentInput,
    GiftCardFundingSourceExternalPaymentInput,
    GiftCardFundingSourceFlintManualPaymentInput,
    GiftCardFundingSourceFlintPaymentInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput,
    GiftCardFundingSourceGiftCardRefundInput,
    GiftCardFundingSourceImportInput,
    GiftCardFundingSourceStoreCreditInput
} from './types-18.js';
import type {
    GiftCardNotificationRecipientInput,
    GiftCardProductConfigurationInput,
    GiftCardPurchaseDetailsRequestInput
} from './types-19.js';
export declare function makeDeliveryProfileOriginPolicyInputFixedLocation(value: InputValue<DeliveryProfileOriginPolicyInputFixedLocationInput>): Model<DeliveryProfileOriginPolicyInputFixedLocationInput>;
export declare function makeDeliveryProfileOriginPolicyInputInventoryRouting(value: InputValue<DeliveryProfileOriginPolicyInputInventoryRoutingInput>): Model<DeliveryProfileOriginPolicyInputInventoryRoutingInput>;
export declare function makeDeliveryProfileOriginPolicyInputMethodOrigin(value: InputValue<DeliveryProfileOriginPolicyInputMethodOriginInput>): Model<DeliveryProfileOriginPolicyInputMethodOriginInput>;
export declare function makeDeliveryProfileOriginPolicyRequest(value: InputValue<DeliveryProfileOriginPolicyRequestInput>): Model<DeliveryProfileOriginPolicyRequestInput>;
export declare function makeDeliveryRadiusCondition(value: InputValue<DeliveryRadiusConditionInput>): Model<DeliveryRadiusConditionInput>;
export declare function makeDeliveryRadiusOrigin(value: InputValue<DeliveryRadiusOriginInput>): Model<DeliveryRadiusOriginInput>;
export declare function makeDeliveryRateCallbackConfiguration(value: InputValue<DeliveryRateCallbackConfigurationInput>): Model<DeliveryRateCallbackConfigurationInput>;
export declare function makeDeliveryRateCallbackConfigurationPatchRequest(value: InputValue<DeliveryRateCallbackConfigurationPatchRequestInput>): Model<DeliveryRateCallbackConfigurationPatchRequestInput>;
export declare function makeDeliveryRateTablePricingStrategyCreateRequest(value: InputValue<DeliveryRateTablePricingStrategyCreateRequestInput>): Model<DeliveryRateTablePricingStrategyCreateRequestInput>;
export declare function makeDeliveryRateTablePricingStrategyRequest(value: InputValue<DeliveryRateTablePricingStrategyRequestInput>): Model<DeliveryRateTablePricingStrategyRequestInput>;
export declare function makeDeliveryRecipientRequirement(value: InputValue<DeliveryRecipientRequirementInput>): Model<DeliveryRecipientRequirementInput>;
export declare function makeDeliveryScheduleWindowRuleRequest(value: InputValue<DeliveryScheduleWindowRuleRequestInput>): Model<DeliveryScheduleWindowRuleRequestInput>;
export declare function makeDeliverySelectionInstructionsRequest(value: InputValue<DeliverySelectionInstructionsRequestInput>): Model<DeliverySelectionInstructionsRequestInput>;
export declare function makeDeliverySelectionRecipientRequest(value: InputValue<DeliverySelectionRecipientRequestInput>): Model<DeliverySelectionRecipientRequestInput>;
export declare function makeDeliveryStateCondition(value: InputValue<DeliveryStateConditionInput>): Model<DeliveryStateConditionInput>;
export declare function makeDeliveryTieredPricingStrategyInputQuantityOrMoney(value: InputValue<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput>): Model<DeliveryTieredPricingStrategyInputQuantityOrMoneyInput>;
export declare function makeDeliveryTieredPricingStrategyInputWeight(value: InputValue<DeliveryTieredPricingStrategyInputWeightInput>): Model<DeliveryTieredPricingStrategyInputWeightInput>;
export declare function makeDeliveryTieredPricingStrategyRequest(value: InputValue<DeliveryTieredPricingStrategyRequestInput>): Model<DeliveryTieredPricingStrategyRequestInput>;
export declare function makeDeliveryTransitTimeRule(value: InputValue<DeliveryTransitTimeRuleInput>): Model<DeliveryTransitTimeRuleInput>;
export declare function makeDeliveryWeeklyInterval(value: InputValue<DeliveryWeeklyIntervalInput>): Model<DeliveryWeeklyIntervalInput>;
export declare function makeDeliveryWeightUnitPriceRequest(value: InputValue<DeliveryWeightUnitPriceRequestInput>): Model<DeliveryWeightUnitPriceRequestInput>;
export declare function makeDeliveryWindowRequest(value: InputValue<DeliveryWindowRequestInput>): Model<DeliveryWindowRequestInput>;
export declare function makeDeliveryWindowTimeCondition(value: InputValue<DeliveryWindowTimeConditionInput>): Model<DeliveryWindowTimeConditionInput>;
export declare function makeDeliveryZoneCondition(value: InputValue<DeliveryZoneConditionInput>): Model<DeliveryZoneConditionInput>;
export declare function makeDeliveryZoneConfiguration(value: InputValue<DeliveryZoneConfigurationInput>): Model<DeliveryZoneConfigurationInput>;
export declare function makeDeveloperInitialAPIKeyRequest(value: InputValue<DeveloperInitialAPIKeyRequestInput>): Model<DeveloperInitialAPIKeyRequestInput>;
export declare function makeDimensions(value: InputValue<DimensionsInput>): Model<DimensionsInput>;
export declare function makeDiscountPreviewRequest(value: InputValue<DiscountPreviewRequestInput>): Model<DiscountPreviewRequestInput>;
export declare function makeDocumentTaxID(value: InputValue<DocumentTaxIDInput>): Model<DocumentTaxIDInput>;
export declare function makeEmailPreferenceLinkRequest(value: InputValue<EmailPreferenceLinkRequestInput>): Model<EmailPreferenceLinkRequestInput>;
export declare function makeFeedbackReportingClient(value: InputValue<FeedbackReportingClientInput>): Model<FeedbackReportingClientInput>;
export declare function makeFulfillmentLineItemRequest(value: InputValue<FulfillmentLineItemRequestInput>): Model<FulfillmentLineItemRequestInput>;
export declare function makeFulfillmentPackagingRequest(value: InputValue<FulfillmentPackagingRequestInput>): Model<FulfillmentPackagingRequestInput>;
export declare function makeFulfillmentRecipientRequest(value: InputValue<FulfillmentRecipientRequestInput>): Model<FulfillmentRecipientRequestInput>;
export declare function makeFulfillmentSettings(value: InputValue<FulfillmentSettingsInput>): Model<FulfillmentSettingsInput>;
export declare function makeFulfillmentTransitionRequest(value: InputValue<Exclude<FulfillmentTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<FulfillmentTransitionRequestInput & object, readonly unknown[]>>;
export declare function makeFulfillmentTransitionRequest(value: InputValue<FulfillmentTransitionRequestInput>): Model<FulfillmentTransitionRequestInput>;
export declare function makeFulfillmentTransitionRequestAccept(value: InputValue<FulfillmentTransitionRequestAcceptInput>): Model<FulfillmentTransitionRequestAcceptInput>;
export declare function makeFulfillmentTransitionRequestCancel(value: InputValue<FulfillmentTransitionRequestCancelInput>): Model<FulfillmentTransitionRequestCancelInput>;
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
export declare function makeGiftCardCustomAmountBounds(value: InputValue<GiftCardCustomAmountBoundsInput>): Model<GiftCardCustomAmountBoundsInput>;
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
export declare function makeGiftCardProductConfiguration(value: InputValue<GiftCardProductConfigurationInput>): Model<GiftCardProductConfigurationInput>;
export declare function makeGiftCardPurchaseDetailsRequest(value: InputValue<GiftCardPurchaseDetailsRequestInput>): Model<GiftCardPurchaseDetailsRequestInput>;
