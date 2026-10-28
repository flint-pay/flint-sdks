import type { ResponseMeta } from './types-40.js';
import type { WorkloadIdentity } from './types-61.js';
import type { CredentialProvider, InputValue, Model } from '../runtime.js';
import type {
    AddLineItemsRequestInput,
    AddOrderChargeRequestInput,
    AddReturnLineItemRequestInput,
    AddRiskListItemsRequestInput,
    AddressRequestInput,
    AdjustGiftCardBalanceRequestInput,
    ApplyDiscountRequestInput,
    ApplyOrderGiftCardRequestInput,
    AssessInvoiceLateFeeRequestInput,
    AssignToUnconfiguredDeliveryProfileRequestInput,
    BrandingSettingsRequestInput
} from './types-0.js';
import type {
    BuyerCapabilitiesInput,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnResolutionPreviewRequestInput,
    BuyerInstructionsConfigInput,
    BuyerPauseCapabilityInput
} from './types-1.js';
import type {
    BuyerRetentionOfferInput,
    BuyerReturnReplacementLineItemInputBundleInput,
    BuyerReturnReplacementLineItemInputVariantInput,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerSkipCapabilityInput
} from './types-2.js';
import type {
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput,
    CallerSuppliedDeliveryOutcomeRequestUnavailableInput,
    CancelGiftCardNotificationRequestInput,
    CancelOrderPaymentAttemptRequestInput,
    CancelPaymentIntentRequestInput,
    CancelPayoutRequestInput,
    CancelReturnDispositionRequestInput,
    CancelReturnLineItemRequestInput,
    CancelReturnRequestInput,
    CancelReturnResolutionRequestInput,
    CancelSubscriptionRequestInput,
    CapturePaymentIntentRequestInput,
    CashOutGiftCardRequestInput,
    ChangeMeSubscriptionBillingIntervalRequestInput,
    ChangeMeSubscriptionDeliveryRequestInput,
    ChangeMeSubscriptionQuantityRequestInput,
    ChangeSubscriptionPaymentMethodRequestInput,
    ChangeSubscriptionPlanRequestInput,
    CheckoutBuyerContactRequestInput,
    CheckoutBuyerFieldsInput,
    CheckoutCustomTextWriteConfigInput
} from './types-3.js';
import type {
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigInput,
    CheckoutQuickPayItemRequestInput,
    CheckoutRecoveryEmailSettingsInput,
    CheckoutRedirectsRequestInput,
    CheckoutSavedPaymentDetailsSettingsInput,
    CheckoutSettingsInput,
    CheckoutSubscriptionTermsRequestInput
} from './types-4.js';
/**
 * Shape $ (Value): {@link WorkloadIdentityClaimCondition}. A condition matching one top-level
 * scalar claim in the workload's identity token.
 */
export type WorkloadIdentityClaimCondition = {
    /**
     * Shape $ (Value): string. Literal top-level scalar claim name. Registered JWT claims are
     * reserved.
     */
    "claim": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "match": "exact" | "glob" | (string & {});
    /** Shape $ (Value): string. */
    "value": string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityClaimConditionRequest}. A condition to match one
 * top-level scalar claim in the workload's identity token. Omitted match defaults to exact.
 */
export type WorkloadIdentityClaimConditionRequest = {
    /**
     * Shape $ (Value): string. Literal top-level scalar claim name. Registered JWT claims are
     * reserved. minLength: 1.
     */
    "claim": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "match"?: "exact" | "glob" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityClaimConditionRequestInput}. A condition to match one
 * top-level scalar claim in the workload's identity token. Omitted match defaults to exact.
 */
export type WorkloadIdentityClaimConditionRequestInput = {
    /**
     * Shape $ (Value): string. Literal top-level scalar claim name. Registered JWT claims are
     * reserved. minLength: 1.
     */
    "claim": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "match"?: "exact" | "glob";
    /** Shape $ (Value): string. minLength: 1. */
    "value": string;
};
/** Shape $ (Value): {@link WorkloadIdentityListResponse}. A page of `WorkloadIdentity` objects. */
export type WorkloadIdentityListResponse = {
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentity}. Shape $[] (Value): {@link
     * WorkloadIdentity}. A policy that grants API access to a workload authenticated by an
     * external identity provider.
     */
    "data": Array<WorkloadIdentity>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link WorkloadIdentityResponse}. A response containing `WorkloadIdentity`
 * data.
 */
export type WorkloadIdentityResponse = {
    /**
     * Shape $ (Value): {@link WorkloadIdentity}. A policy that grants API access to a workload
     * authenticated by an external identity provider.
     */
    "data": WorkloadIdentity;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type _SdkRequiredIdempotency<T> = T extends unknown ? Omit<T, 'idempotencyKey'> & {
    idempotencyKey: string;
} : never;
export type _SdkWithoutIdempotency<T> = T extends unknown ? Omit<T, 'idempotencyKey'> & {
    idempotencyKey?: never;
} : never;
export declare function defaultCredentials(): CredentialProvider;
export declare function makeAddLineItemsRequest(value: InputValue<AddLineItemsRequestInput>): Model<AddLineItemsRequestInput>;
export declare function makeAddOrderChargeRequest(value: InputValue<AddOrderChargeRequestInput>): Model<AddOrderChargeRequestInput>;
export declare function makeAddReturnLineItemRequest(value: InputValue<AddReturnLineItemRequestInput>): Model<AddReturnLineItemRequestInput>;
export declare function makeAddRiskListItemsRequest(value: InputValue<AddRiskListItemsRequestInput>): Model<AddRiskListItemsRequestInput>;
export declare function makeAddressRequest(value: InputValue<AddressRequestInput>): Model<AddressRequestInput>;
export declare function makeAdjustGiftCardBalanceRequest(value: InputValue<AdjustGiftCardBalanceRequestInput>): Model<AdjustGiftCardBalanceRequestInput>;
export declare function makeApplyDiscountRequest(value: InputValue<ApplyDiscountRequestInput>): Model<ApplyDiscountRequestInput>;
export declare function makeApplyOrderGiftCardRequest(value: InputValue<ApplyOrderGiftCardRequestInput>): Model<ApplyOrderGiftCardRequestInput>;
export declare function makeAssessInvoiceLateFeeRequest(value: InputValue<AssessInvoiceLateFeeRequestInput>): Model<AssessInvoiceLateFeeRequestInput>;
export declare function makeAssignToUnconfiguredDeliveryProfileRequest(value: InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>): Model<AssignToUnconfiguredDeliveryProfileRequestInput>;
export declare function makeBrandingSettingsRequest(value: InputValue<BrandingSettingsRequestInput>): Model<BrandingSettingsRequestInput>;
export declare function makeBuyerCapabilities(value: InputValue<BuyerCapabilitiesInput>): Model<BuyerCapabilitiesInput>;
export declare function makeBuyerCreateReturnPreviewRequest(value: InputValue<BuyerCreateReturnPreviewRequestInput>): Model<BuyerCreateReturnPreviewRequestInput>;
export declare function makeBuyerCreateReturnRequest(value: InputValue<BuyerCreateReturnRequestInput>): Model<BuyerCreateReturnRequestInput>;
export declare function makeBuyerCreateReturnResolutionPreviewRequest(value: InputValue<BuyerCreateReturnResolutionPreviewRequestInput>): Model<BuyerCreateReturnResolutionPreviewRequestInput>;
export declare function makeBuyerInstructionsConfig(value: InputValue<BuyerInstructionsConfigInput>): Model<BuyerInstructionsConfigInput>;
export declare function makeBuyerPauseCapability(value: InputValue<BuyerPauseCapabilityInput>): Model<BuyerPauseCapabilityInput>;
export declare function makeBuyerRetentionOffer(value: InputValue<BuyerRetentionOfferInput>): Model<BuyerRetentionOfferInput>;
export declare function makeBuyerReturnReplacementLineItemInputBundle(value: InputValue<BuyerReturnReplacementLineItemInputBundleInput>): Model<BuyerReturnReplacementLineItemInputBundleInput>;
export declare function makeBuyerReturnReplacementLineItemInputVariant(value: InputValue<BuyerReturnReplacementLineItemInputVariantInput>): Model<BuyerReturnReplacementLineItemInputVariantInput>;
export declare function makeBuyerReturnReplacementLineItemRequest(value: InputValue<BuyerReturnReplacementLineItemRequestInput>): Model<BuyerReturnReplacementLineItemRequestInput>;
export declare function makeBuyerSkipCapability(value: InputValue<BuyerSkipCapabilityInput>): Model<BuyerSkipCapabilityInput>;
export declare function makeCallerSuppliedDeliveryMethodResultRequest(value: InputValue<CallerSuppliedDeliveryMethodResultRequestInput>): Model<CallerSuppliedDeliveryMethodResultRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequest(value: InputValue<CallerSuppliedDeliveryOutcomeRequestInput>): Model<CallerSuppliedDeliveryOutcomeRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestAvailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestAvailableInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value: InputValue<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>): Model<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestUnavailableInput>;
export declare function makeCancelGiftCardNotificationRequest(value: InputValue<CancelGiftCardNotificationRequestInput>): Model<CancelGiftCardNotificationRequestInput>;
export declare function makeCancelOrderPaymentAttemptRequest(value: InputValue<CancelOrderPaymentAttemptRequestInput>): Model<CancelOrderPaymentAttemptRequestInput>;
export declare function makeCancelPaymentIntentRequest(value: InputValue<CancelPaymentIntentRequestInput>): Model<CancelPaymentIntentRequestInput>;
export declare function makeCancelPayoutRequest(value: InputValue<CancelPayoutRequestInput>): Model<CancelPayoutRequestInput>;
export declare function makeCancelReturnDispositionRequest(value: InputValue<CancelReturnDispositionRequestInput>): Model<CancelReturnDispositionRequestInput>;
export declare function makeCancelReturnLineItemRequest(value: InputValue<CancelReturnLineItemRequestInput>): Model<CancelReturnLineItemRequestInput>;
export declare function makeCancelReturnRequest(value: InputValue<CancelReturnRequestInput>): Model<CancelReturnRequestInput>;
export declare function makeCancelReturnResolutionRequest(value: InputValue<CancelReturnResolutionRequestInput>): Model<CancelReturnResolutionRequestInput>;
export declare function makeCancelSubscriptionRequest(value: InputValue<CancelSubscriptionRequestInput>): Model<CancelSubscriptionRequestInput>;
export declare function makeCapturePaymentIntentRequest(value: InputValue<CapturePaymentIntentRequestInput>): Model<CapturePaymentIntentRequestInput>;
export declare function makeCashOutGiftCardRequest(value: InputValue<CashOutGiftCardRequestInput>): Model<CashOutGiftCardRequestInput>;
export declare function makeChangeMeSubscriptionBillingIntervalRequest(value: InputValue<ChangeMeSubscriptionBillingIntervalRequestInput>): Model<ChangeMeSubscriptionBillingIntervalRequestInput>;
export declare function makeChangeMeSubscriptionDeliveryRequest(value: InputValue<ChangeMeSubscriptionDeliveryRequestInput>): Model<ChangeMeSubscriptionDeliveryRequestInput>;
export declare function makeChangeMeSubscriptionQuantityRequest(value: InputValue<ChangeMeSubscriptionQuantityRequestInput>): Model<ChangeMeSubscriptionQuantityRequestInput>;
export declare function makeChangeSubscriptionPaymentMethodRequest(value: InputValue<ChangeSubscriptionPaymentMethodRequestInput>): Model<ChangeSubscriptionPaymentMethodRequestInput>;
export declare function makeChangeSubscriptionPlanRequest(value: InputValue<ChangeSubscriptionPlanRequestInput>): Model<ChangeSubscriptionPlanRequestInput>;
export declare function makeCheckoutBuyerContactRequest(value: InputValue<CheckoutBuyerContactRequestInput>): Model<CheckoutBuyerContactRequestInput>;
export declare function makeCheckoutBuyerFields(value: InputValue<CheckoutBuyerFieldsInput>): Model<CheckoutBuyerFieldsInput>;
export declare function makeCheckoutCustomTextWriteConfig(value: InputValue<CheckoutCustomTextWriteConfigInput>): Model<CheckoutCustomTextWriteConfigInput>;
export declare function makeCheckoutLegalConfigRequest(value: InputValue<CheckoutLegalConfigRequestInput>): Model<CheckoutLegalConfigRequestInput>;
export declare function makeCheckoutPaymentConfigRequest(value: InputValue<CheckoutPaymentConfigRequestInput>): Model<CheckoutPaymentConfigRequestInput>;
export declare function makeCheckoutPrefillRequest(value: InputValue<CheckoutPrefillRequestInput>): Model<CheckoutPrefillRequestInput>;
export declare function makeCheckoutPromotionConfig(value: InputValue<CheckoutPromotionConfigInput>): Model<CheckoutPromotionConfigInput>;
export declare function makeCheckoutQuickPayItemRequest(value: InputValue<CheckoutQuickPayItemRequestInput>): Model<CheckoutQuickPayItemRequestInput>;
export declare function makeCheckoutRecoveryEmailSettings(value: InputValue<CheckoutRecoveryEmailSettingsInput>): Model<CheckoutRecoveryEmailSettingsInput>;
export declare function makeCheckoutRedirectsRequest(value: InputValue<CheckoutRedirectsRequestInput>): Model<CheckoutRedirectsRequestInput>;
export declare function makeCheckoutSavedPaymentDetailsSettings(value: InputValue<CheckoutSavedPaymentDetailsSettingsInput>): Model<CheckoutSavedPaymentDetailsSettingsInput>;
export declare function makeCheckoutSettings(value: InputValue<CheckoutSettingsInput>): Model<CheckoutSettingsInput>;
export declare function makeCheckoutSubscriptionTermsRequest(value: InputValue<CheckoutSubscriptionTermsRequestInput>): Model<CheckoutSubscriptionTermsRequestInput>;
