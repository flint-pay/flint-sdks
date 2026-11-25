import type { InputValue, Model } from '../runtime.js';
import type {
    PaymentLinkCustomTextConfigInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput,
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemInputBundleInput,
    PaymentLinkLineItemInputCustomFixedInput,
    PaymentLinkLineItemInputCustomVariableInput,
    PaymentLinkLineItemInputVariantInput,
    PaymentLinkLineItemPatchInputBundleInput,
    PaymentLinkLineItemPatchInputCustomFixedInput,
    PaymentLinkLineItemPatchInputCustomVariableInput,
    PaymentLinkLineItemPatchInputVariantInput
} from './types-52.js';
import type {
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkResolvePrefillRequestInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkThemePatchRequestInput
} from './types-53.js';
import type {
    PaymentSettingsPatchInput,
    PaymentSourceCredentialInput,
    PaymentSourceCredentialPaymentMethodInput,
    PaymentSourceCredentialReaderInput,
    PaymentSourceCredentialStripeConfirmationTokenInput,
    PaymentSourceCredentialStripePaymentMethodInput,
    PaymentSplitRequestInput
} from './types-54.js';
import type {
    PlatformFeeCapRequestInput,
    PlatformFeeMoneyInput,
    PlatformFeeRequestInput,
    PlatformFeeRuleRequestInput,
    PoolLicenseKeyConfigurationRequestInput,
    PriceListPriceRequestInput
} from './types-56.js';
import type {
    ProcessExistingReturnLineItemRequestInput,
    ProcessExistingReturnRequestInput,
    ProductVariantRequestInput,
    ProductVariantSelectedOptionRequestInput,
    PromotionAmountOffMethodRequestInput
} from './types-57.js';
import type {
    PromotionApplicationMethodPatchInput,
    PromotionApplicationMethodRequestInput,
    PromotionBuyXGetYMethodRequestInput,
    PromotionCodeRequestInput,
    PromotionCombinesWithPatchInput,
    PromotionCombinesWithRequestInput,
    PromotionExclusivityPatchInput,
    PromotionExclusivityRequestInput,
    PromotionPercentOffMethodRequestInput,
    PromotionRecurrenceForeverRequestInput,
    PromotionRecurrenceOnceRequestInput,
    PromotionRecurrenceRepeatingRequestInput
} from './types-58.js';
import type {
    PromotionRecurrenceRequestInput,
    PromotionRefInputPromotionCodeInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionRuleRequestInput,
    PromotionRuleValueRequestInput,
    PromotionSchedulePatchInput,
    PromotionScheduleRequestInput,
    PromotionSettingsRequestInput,
    PublicCatalogModifierInputCatalogInput,
    PublicCatalogModifierInputTextInput
} from './types-59.js';
export declare function makePaymentLinkCustomTextConfig(value: InputValue<PaymentLinkCustomTextConfigInput>): Model<PaymentLinkCustomTextConfigInput>;
export declare function makePaymentLinkCustomTextPatchRequest(value: InputValue<PaymentLinkCustomTextPatchRequestInput>): Model<PaymentLinkCustomTextPatchRequestInput>;
export declare function makePaymentLinkEventConfigPatchRequest(value: InputValue<PaymentLinkEventConfigPatchRequestInput>): Model<PaymentLinkEventConfigPatchRequestInput>;
export declare function makePaymentLinkEventConfigRequest(value: InputValue<PaymentLinkEventConfigRequestInput>): Model<PaymentLinkEventConfigRequestInput>;
export declare function makePaymentLinkLegalConfig(value: InputValue<PaymentLinkLegalConfigInput>): Model<PaymentLinkLegalConfigInput>;
export declare function makePaymentLinkLegalPatchRequest(value: InputValue<PaymentLinkLegalPatchRequestInput>): Model<PaymentLinkLegalPatchRequestInput>;
export declare function makePaymentLinkLineItemInputBundle(value: InputValue<PaymentLinkLineItemInputBundleInput>): Model<PaymentLinkLineItemInputBundleInput>;
export declare function makePaymentLinkLineItemInputCustomFixed(value: InputValue<PaymentLinkLineItemInputCustomFixedInput>): Model<PaymentLinkLineItemInputCustomFixedInput>;
export declare function makePaymentLinkLineItemInputCustomVariable(value: InputValue<PaymentLinkLineItemInputCustomVariableInput>): Model<PaymentLinkLineItemInputCustomVariableInput>;
export declare function makePaymentLinkLineItemInputVariant(value: InputValue<PaymentLinkLineItemInputVariantInput>): Model<PaymentLinkLineItemInputVariantInput>;
export declare function makePaymentLinkLineItemPatchInputBundle(value: InputValue<PaymentLinkLineItemPatchInputBundleInput>): Model<PaymentLinkLineItemPatchInputBundleInput>;
export declare function makePaymentLinkLineItemPatchInputCustomFixed(value: InputValue<PaymentLinkLineItemPatchInputCustomFixedInput>): Model<PaymentLinkLineItemPatchInputCustomFixedInput>;
export declare function makePaymentLinkLineItemPatchInputCustomVariable(value: InputValue<PaymentLinkLineItemPatchInputCustomVariableInput>): Model<PaymentLinkLineItemPatchInputCustomVariableInput>;
export declare function makePaymentLinkLineItemPatchInputVariant(value: InputValue<PaymentLinkLineItemPatchInputVariantInput>): Model<PaymentLinkLineItemPatchInputVariantInput>;
export declare function makePaymentLinkLineItemPatchRequest(value: InputValue<PaymentLinkLineItemPatchRequestInput>): Model<PaymentLinkLineItemPatchRequestInput>;
export declare function makePaymentLinkLineItemRequest(value: InputValue<PaymentLinkLineItemRequestInput>): Model<PaymentLinkLineItemRequestInput>;
export declare function makePaymentLinkPaymentConfig(value: InputValue<PaymentLinkPaymentConfigInput>): Model<PaymentLinkPaymentConfigInput>;
export declare function makePaymentLinkPaymentPatchRequest(value: InputValue<PaymentLinkPaymentPatchRequestInput>): Model<PaymentLinkPaymentPatchRequestInput>;
export declare function makePaymentLinkRedirectsPatchRequest(value: InputValue<PaymentLinkRedirectsPatchRequestInput>): Model<PaymentLinkRedirectsPatchRequestInput>;
export declare function makePaymentLinkResolvePrefillRequest(value: InputValue<PaymentLinkResolvePrefillRequestInput>): Model<PaymentLinkResolvePrefillRequestInput>;
export declare function makePaymentLinkThemeConfig(value: InputValue<PaymentLinkThemeConfigInput>): Model<PaymentLinkThemeConfigInput>;
export declare function makePaymentLinkThemePatchRequest(value: InputValue<PaymentLinkThemePatchRequestInput>): Model<PaymentLinkThemePatchRequestInput>;
export declare function makePaymentSettingsPatch(value: InputValue<PaymentSettingsPatchInput>): Model<PaymentSettingsPatchInput>;
export declare function makePaymentSourceCredential(value: InputValue<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>): Model<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>;
export declare function makePaymentSourceCredential(value: InputValue<PaymentSourceCredentialInput>): Model<PaymentSourceCredentialInput>;
export declare function makePaymentSourceCredentialPaymentMethod(value: InputValue<PaymentSourceCredentialPaymentMethodInput>): Model<PaymentSourceCredentialPaymentMethodInput>;
export declare function makePaymentSourceCredentialReader(value: InputValue<PaymentSourceCredentialReaderInput>): Model<PaymentSourceCredentialReaderInput>;
export declare function makePaymentSourceCredentialStripeConfirmationToken(value: InputValue<PaymentSourceCredentialStripeConfirmationTokenInput>): Model<PaymentSourceCredentialStripeConfirmationTokenInput>;
export declare function makePaymentSourceCredentialStripePaymentMethod(value: InputValue<PaymentSourceCredentialStripePaymentMethodInput>): Model<PaymentSourceCredentialStripePaymentMethodInput>;
export declare function makePaymentSplitRequest(value: InputValue<PaymentSplitRequestInput>): Model<PaymentSplitRequestInput>;
export declare function makePlatformFeeCapRequest(value: InputValue<PlatformFeeCapRequestInput>): Model<PlatformFeeCapRequestInput>;
export declare function makePlatformFeeMoney(value: InputValue<PlatformFeeMoneyInput>): Model<PlatformFeeMoneyInput>;
export declare function makePlatformFeeRequest(value: InputValue<PlatformFeeRequestInput>): Model<PlatformFeeRequestInput>;
export declare function makePlatformFeeRuleRequest(value: InputValue<PlatformFeeRuleRequestInput>): Model<PlatformFeeRuleRequestInput>;
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
export declare function makePublicCatalogModifierInputCatalog(value: InputValue<PublicCatalogModifierInputCatalogInput>): Model<PublicCatalogModifierInputCatalogInput>;
export declare function makePublicCatalogModifierInputText(value: InputValue<PublicCatalogModifierInputTextInput>): Model<PublicCatalogModifierInputTextInput>;
