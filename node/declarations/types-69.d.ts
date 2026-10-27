import type { InputValue, Model } from '../runtime.js';
import type {
    OrderTaxLocationInputFullAddressInput,
    OrderTaxLocationInputInferredFullAddressInput,
    OrderTaxLocationInputInferredPostalCodeInput,
    OrderTaxLocationInputPostalCodeInput,
    OrderTaxLocationPostalAddressRequestInput,
    OrderTaxLocationRequestInput,
    OrderTaxRequestInput,
    OrderTaxUpdateRequestInput
} from './types-33.js';
import type {
    PackageCreateInputCreatedInput,
    PackageCreateInputShippedInput,
    PackageCreateRequestInput,
    PackageTransitionRequestInput,
    PackageTransitionRequestMarkDeliveredInput,
    PackageTransitionRequestMarkDeliveryAttemptedInput,
    PackageTransitionRequestMarkExceptionInput,
    PackageTransitionRequestMarkInTransitInput,
    PackageTransitionRequestMarkOutForDeliveryInput,
    PackageTransitionRequestMarkPackedInput,
    PackageTransitionRequestMarkReturnedInput,
    PackageTransitionRequestMarkShippedInput
} from './types-34.js';
import type {
    PartnerAppPermissionManifestEntryInput,
    PauseSubscriptionRequestInput,
    PayOrderRequestInput,
    PayOrderRequestConfirmPaymentIntentsInput,
    PayOrderRequestPayInput,
    PayOrderRequestResumeInput,
    PayOrderRequestSetupInput,
    PaymentLimitSettingsPatchInput,
    PaymentLinkCustomFieldPatchRequestInput,
    PaymentLinkCustomFieldRequestInput,
    PaymentLinkCustomTextConfigInput,
    PaymentLinkCustomTextPatchRequestInput,
    PaymentLinkEventConfigPatchRequestInput
} from './types-35.js';
import type {
    PaymentLinkEventConfigRequestInput,
    PaymentLinkLegalConfigInput,
    PaymentLinkLegalPatchRequestInput,
    PaymentLinkLineItemPatchRequestInput,
    PaymentLinkLineItemRequestInput,
    PaymentLinkPaymentConfigInput,
    PaymentLinkPaymentPatchRequestInput,
    PaymentLinkRedirectsPatchRequestInput,
    PaymentLinkThemeConfigInput,
    PaymentLinkThemePatchRequestInput,
    PaymentSourceCredentialInput
} from './types-36.js';
import type {
    PostalAddressInput,
    ProcessExistingReturnLineItemRequestInput,
    ProcessExistingReturnRequestInput,
    ProductVariantRequestInput,
    ProductVariantSelectedOptionRequestInput,
    PromotionAmountOffMethodRequestInput,
    PromotionApplicationMethodPatchInput,
    PromotionApplicationMethodRequestInput
} from './types-37.js';
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
    PromotionRefRequestInput,
    PromotionRuleGroupRequestInput
} from './types-38.js';
export declare function makeOrderTaxLocationInputFullAddress(value: InputValue<OrderTaxLocationInputFullAddressInput>): Model<OrderTaxLocationInputFullAddressInput>;
export declare function makeOrderTaxLocationInputInferredFullAddress(value: InputValue<OrderTaxLocationInputInferredFullAddressInput>): Model<OrderTaxLocationInputInferredFullAddressInput>;
export declare function makeOrderTaxLocationInputInferredPostalCode(value: InputValue<OrderTaxLocationInputInferredPostalCodeInput>): Model<OrderTaxLocationInputInferredPostalCodeInput>;
export declare function makeOrderTaxLocationInputPostalCode(value: InputValue<OrderTaxLocationInputPostalCodeInput>): Model<OrderTaxLocationInputPostalCodeInput>;
export declare function makeOrderTaxLocationPostalAddressRequest(value: InputValue<OrderTaxLocationPostalAddressRequestInput>): Model<OrderTaxLocationPostalAddressRequestInput>;
export declare function makeOrderTaxLocationRequest(value: InputValue<Exclude<OrderTaxLocationRequestInput & object, readonly unknown[]>>): Model<Exclude<OrderTaxLocationRequestInput & object, readonly unknown[]>>;
export declare function makeOrderTaxLocationRequest(value: InputValue<OrderTaxLocationRequestInput>): Model<OrderTaxLocationRequestInput>;
export declare function makeOrderTaxRequest(value: InputValue<OrderTaxRequestInput>): Model<OrderTaxRequestInput>;
export declare function makeOrderTaxUpdateRequest(value: InputValue<OrderTaxUpdateRequestInput>): Model<OrderTaxUpdateRequestInput>;
export declare function makePackageCreateInputCreated(value: InputValue<PackageCreateInputCreatedInput>): Model<PackageCreateInputCreatedInput>;
export declare function makePackageCreateInputShipped(value: InputValue<PackageCreateInputShippedInput>): Model<PackageCreateInputShippedInput>;
export declare function makePackageCreateRequest(value: InputValue<PackageCreateRequestInput>): Model<PackageCreateRequestInput>;
export declare function makePackageTransitionRequest(value: InputValue<Exclude<PackageTransitionRequestInput & object, readonly unknown[]>>): Model<Exclude<PackageTransitionRequestInput & object, readonly unknown[]>>;
export declare function makePackageTransitionRequest(value: InputValue<PackageTransitionRequestInput>): Model<PackageTransitionRequestInput>;
export declare function makePackageTransitionRequestMarkDelivered(value: InputValue<PackageTransitionRequestMarkDeliveredInput>): Model<PackageTransitionRequestMarkDeliveredInput>;
export declare function makePackageTransitionRequestMarkDeliveryAttempted(value: InputValue<PackageTransitionRequestMarkDeliveryAttemptedInput>): Model<PackageTransitionRequestMarkDeliveryAttemptedInput>;
export declare function makePackageTransitionRequestMarkException(value: InputValue<PackageTransitionRequestMarkExceptionInput>): Model<PackageTransitionRequestMarkExceptionInput>;
export declare function makePackageTransitionRequestMarkInTransit(value: InputValue<PackageTransitionRequestMarkInTransitInput>): Model<PackageTransitionRequestMarkInTransitInput>;
export declare function makePackageTransitionRequestMarkOutForDelivery(value: InputValue<PackageTransitionRequestMarkOutForDeliveryInput>): Model<PackageTransitionRequestMarkOutForDeliveryInput>;
export declare function makePackageTransitionRequestMarkPacked(value: InputValue<PackageTransitionRequestMarkPackedInput>): Model<PackageTransitionRequestMarkPackedInput>;
export declare function makePackageTransitionRequestMarkReturned(value: InputValue<PackageTransitionRequestMarkReturnedInput>): Model<PackageTransitionRequestMarkReturnedInput>;
export declare function makePackageTransitionRequestMarkShipped(value: InputValue<PackageTransitionRequestMarkShippedInput>): Model<PackageTransitionRequestMarkShippedInput>;
export declare function makePartnerAppPermissionManifestEntry(value: InputValue<PartnerAppPermissionManifestEntryInput>): Model<PartnerAppPermissionManifestEntryInput>;
export declare function makePauseSubscriptionRequest(value: InputValue<PauseSubscriptionRequestInput>): Model<PauseSubscriptionRequestInput>;
export declare function makePayOrderRequest(value: InputValue<Exclude<PayOrderRequestInput & object, readonly unknown[]>>): Model<Exclude<PayOrderRequestInput & object, readonly unknown[]>>;
export declare function makePayOrderRequest(value: InputValue<PayOrderRequestInput>): Model<PayOrderRequestInput>;
export declare function makePayOrderRequestConfirmPaymentIntents(value: InputValue<PayOrderRequestConfirmPaymentIntentsInput>): Model<PayOrderRequestConfirmPaymentIntentsInput>;
export declare function makePayOrderRequestPay(value: InputValue<PayOrderRequestPayInput>): Model<PayOrderRequestPayInput>;
export declare function makePayOrderRequestResume(value: InputValue<PayOrderRequestResumeInput>): Model<PayOrderRequestResumeInput>;
export declare function makePayOrderRequestSetup(value: InputValue<PayOrderRequestSetupInput>): Model<PayOrderRequestSetupInput>;
export declare function makePaymentLimitSettingsPatch(value: InputValue<PaymentLimitSettingsPatchInput>): Model<PaymentLimitSettingsPatchInput>;
export declare function makePaymentLinkCustomFieldPatchRequest(value: InputValue<PaymentLinkCustomFieldPatchRequestInput>): Model<PaymentLinkCustomFieldPatchRequestInput>;
export declare function makePaymentLinkCustomFieldRequest(value: InputValue<PaymentLinkCustomFieldRequestInput>): Model<PaymentLinkCustomFieldRequestInput>;
export declare function makePaymentLinkCustomTextConfig(value: InputValue<PaymentLinkCustomTextConfigInput>): Model<PaymentLinkCustomTextConfigInput>;
export declare function makePaymentLinkCustomTextPatchRequest(value: InputValue<PaymentLinkCustomTextPatchRequestInput>): Model<PaymentLinkCustomTextPatchRequestInput>;
export declare function makePaymentLinkEventConfigPatchRequest(value: InputValue<PaymentLinkEventConfigPatchRequestInput>): Model<PaymentLinkEventConfigPatchRequestInput>;
export declare function makePaymentLinkEventConfigRequest(value: InputValue<PaymentLinkEventConfigRequestInput>): Model<PaymentLinkEventConfigRequestInput>;
export declare function makePaymentLinkLegalConfig(value: InputValue<PaymentLinkLegalConfigInput>): Model<PaymentLinkLegalConfigInput>;
export declare function makePaymentLinkLegalPatchRequest(value: InputValue<PaymentLinkLegalPatchRequestInput>): Model<PaymentLinkLegalPatchRequestInput>;
export declare function makePaymentLinkLineItemPatchRequest(value: InputValue<PaymentLinkLineItemPatchRequestInput>): Model<PaymentLinkLineItemPatchRequestInput>;
export declare function makePaymentLinkLineItemRequest(value: InputValue<PaymentLinkLineItemRequestInput>): Model<PaymentLinkLineItemRequestInput>;
export declare function makePaymentLinkPaymentConfig(value: InputValue<PaymentLinkPaymentConfigInput>): Model<PaymentLinkPaymentConfigInput>;
export declare function makePaymentLinkPaymentPatchRequest(value: InputValue<PaymentLinkPaymentPatchRequestInput>): Model<PaymentLinkPaymentPatchRequestInput>;
export declare function makePaymentLinkRedirectsPatchRequest(value: InputValue<PaymentLinkRedirectsPatchRequestInput>): Model<PaymentLinkRedirectsPatchRequestInput>;
export declare function makePaymentLinkThemeConfig(value: InputValue<PaymentLinkThemeConfigInput>): Model<PaymentLinkThemeConfigInput>;
export declare function makePaymentLinkThemePatchRequest(value: InputValue<PaymentLinkThemePatchRequestInput>): Model<PaymentLinkThemePatchRequestInput>;
export declare function makePaymentSourceCredential(value: InputValue<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>): Model<Exclude<PaymentSourceCredentialInput & object, readonly unknown[]>>;
export declare function makePaymentSourceCredential(value: InputValue<PaymentSourceCredentialInput>): Model<PaymentSourceCredentialInput>;
export declare function makePostalAddress(value: InputValue<PostalAddressInput>): Model<PostalAddressInput>;
export declare function makeProcessExistingReturnLineItemRequest(value: InputValue<ProcessExistingReturnLineItemRequestInput>): Model<ProcessExistingReturnLineItemRequestInput>;
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
export declare function makePromotionRefRequest(value: InputValue<PromotionRefRequestInput>): Model<PromotionRefRequestInput>;
export declare function makePromotionRuleGroupRequest(value: InputValue<Exclude<PromotionRuleGroupRequestInput & object, readonly unknown[]>>): Model<Exclude<PromotionRuleGroupRequestInput & object, readonly unknown[]>>;
export declare function makePromotionRuleGroupRequest(value: InputValue<PromotionRuleGroupRequestInput>): Model<PromotionRuleGroupRequestInput>;
