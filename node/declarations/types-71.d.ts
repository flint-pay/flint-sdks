import type { InputValue, Model } from '../runtime.js';
import type {
    RevokeDeliveryDependencyTargetDeliveryMethodInput,
    RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput,
    RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput
} from './types-42.js';
import type {
    RevokeDeliveryDependencyTargetLocationGeographyInput,
    RiskPredicateNodeInput,
    RotateGiftCardCodeRequestInput,
    RotatePartnerAppSecretRequestInput,
    RotateWebhookSecretRequestInput,
    SaveMeGiftCardRequestInput,
    SaveMeGiftCardRequestCodeInput,
    SaveMeGiftCardRequestRecipientAccessInput,
    SaveMePaymentMethodRequestInput,
    SavePaymentMethodRequestInput
} from './types-43.js';
import type {
    SendOrderReceiptRequestInput,
    SendPaymentIntentReceiptRequestInput,
    SetDefaultCustomerAddressRequestInput,
    SignedMoneyInput,
    SinglePackageCreateInputCreatedInput,
    SinglePackageCreateInputShippedInput,
    SinglePackageCreateRequestInput,
    SkipMeSubscriptionCycleRequestInput,
    SkipSubscriptionCycleRequestInput,
    SubscribedLineRequestInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleUpdateInputExternalInput,
    SubscriptionBillingScheduleUpdateInputFlintInput,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionBillingStartInputScheduledInput
} from './types-44.js';
import type {
    SubscriptionBillingStartRequestInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryRequestInput,
    SubscriptionIntervalOptionInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionPlanTermsRequestInput
} from './types-45.js';
import type {
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationRequestInput,
    SubscriptionSettingsInput,
    SubscriptionTermsRequestInput,
    TaxCalculationRequestInput,
    TaxComponentRequestInput,
    TaxIdentityPatchInput,
    TaxIdentityRequestInput,
    TaxJurisdictionInput,
    TaxSettingsRequestInput
} from './types-46.js';
import type {
    TextModifierConfigPatchRequestInput,
    TextModifierConfigRequestInput,
    TextModifierRequestInput,
    ThemeConfigRequestInput,
    TippingSettingsPatchInput,
    TransitionGiftCardRequestInput,
    TransitionGiftCardRequestFreezeInput,
    TransitionGiftCardRequestWithoutReasonInput,
    UpdateAPIKeyRequestInput
} from './types-47.js';
export declare function makeRevokeDeliveryDependencyTargetDeliveryMethod(value: InputValue<RevokeDeliveryDependencyTargetDeliveryMethodInput>): Model<RevokeDeliveryDependencyTargetDeliveryMethodInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryMethodRevision(value: InputValue<RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput>): Model<RevokeDeliveryDependencyTargetDeliveryMethodRevisionInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryRateCallback(value: InputValue<RevokeDeliveryDependencyTargetDeliveryRateCallbackInput>): Model<RevokeDeliveryDependencyTargetDeliveryRateCallbackInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision(value: InputValue<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput>): Model<RevokeDeliveryDependencyTargetDeliveryRateCallbackRevisionInput>;
export declare function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey(value: InputValue<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput>): Model<RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKeyInput>;
export declare function makeRevokeDeliveryDependencyTargetLocationGeography(value: InputValue<RevokeDeliveryDependencyTargetLocationGeographyInput>): Model<RevokeDeliveryDependencyTargetLocationGeographyInput>;
export declare function makeRiskPredicateNode(value: InputValue<Exclude<RiskPredicateNodeInput & object, readonly unknown[]>>): Model<Exclude<RiskPredicateNodeInput & object, readonly unknown[]>>;
export declare function makeRiskPredicateNode(value: InputValue<RiskPredicateNodeInput>): Model<RiskPredicateNodeInput>;
export declare function makeRotateGiftCardCodeRequest(value: InputValue<RotateGiftCardCodeRequestInput>): Model<RotateGiftCardCodeRequestInput>;
export declare function makeRotatePartnerAppSecretRequest(value: InputValue<RotatePartnerAppSecretRequestInput>): Model<RotatePartnerAppSecretRequestInput>;
export declare function makeRotateWebhookSecretRequest(value: InputValue<RotateWebhookSecretRequestInput>): Model<RotateWebhookSecretRequestInput>;
export declare function makeSaveMeGiftCardRequest(value: InputValue<SaveMeGiftCardRequestInput>): Model<SaveMeGiftCardRequestInput>;
export declare function makeSaveMeGiftCardRequestCode(value: InputValue<SaveMeGiftCardRequestCodeInput>): Model<SaveMeGiftCardRequestCodeInput>;
export declare function makeSaveMeGiftCardRequestRecipientAccess(value: InputValue<SaveMeGiftCardRequestRecipientAccessInput>): Model<SaveMeGiftCardRequestRecipientAccessInput>;
export declare function makeSaveMePaymentMethodRequest(value: InputValue<SaveMePaymentMethodRequestInput>): Model<SaveMePaymentMethodRequestInput>;
export declare function makeSavePaymentMethodRequest(value: InputValue<SavePaymentMethodRequestInput>): Model<SavePaymentMethodRequestInput>;
export declare function makeSendOrderReceiptRequest(value: InputValue<SendOrderReceiptRequestInput>): Model<SendOrderReceiptRequestInput>;
export declare function makeSendPaymentIntentReceiptRequest(value: InputValue<SendPaymentIntentReceiptRequestInput>): Model<SendPaymentIntentReceiptRequestInput>;
export declare function makeSetDefaultCustomerAddressRequest(value: InputValue<SetDefaultCustomerAddressRequestInput>): Model<SetDefaultCustomerAddressRequestInput>;
export declare function makeSignedMoney(value: InputValue<SignedMoneyInput>): Model<SignedMoneyInput>;
export declare function makeSinglePackageCreateInputCreated(value: InputValue<SinglePackageCreateInputCreatedInput>): Model<SinglePackageCreateInputCreatedInput>;
export declare function makeSinglePackageCreateInputShipped(value: InputValue<SinglePackageCreateInputShippedInput>): Model<SinglePackageCreateInputShippedInput>;
export declare function makeSinglePackageCreateRequest(value: InputValue<SinglePackageCreateRequestInput>): Model<SinglePackageCreateRequestInput>;
export declare function makeSkipMeSubscriptionCycleRequest(value: InputValue<SkipMeSubscriptionCycleRequestInput>): Model<SkipMeSubscriptionCycleRequestInput>;
export declare function makeSkipSubscriptionCycleRequest(value: InputValue<SkipSubscriptionCycleRequestInput>): Model<SkipSubscriptionCycleRequestInput>;
export declare function makeSubscribedLineRequest(value: InputValue<SubscribedLineRequestInput>): Model<SubscribedLineRequestInput>;
export declare function makeSubscriptionBillingScheduleInputExternal(value: InputValue<SubscriptionBillingScheduleInputExternalInput>): Model<SubscriptionBillingScheduleInputExternalInput>;
export declare function makeSubscriptionBillingScheduleInputFlint(value: InputValue<SubscriptionBillingScheduleInputFlintInput>): Model<SubscriptionBillingScheduleInputFlintInput>;
export declare function makeSubscriptionBillingScheduleRequest(value: InputValue<SubscriptionBillingScheduleRequestInput>): Model<SubscriptionBillingScheduleRequestInput>;
export declare function makeSubscriptionBillingScheduleUpdateInputExternal(value: InputValue<SubscriptionBillingScheduleUpdateInputExternalInput>): Model<SubscriptionBillingScheduleUpdateInputExternalInput>;
export declare function makeSubscriptionBillingScheduleUpdateInputFlint(value: InputValue<SubscriptionBillingScheduleUpdateInputFlintInput>): Model<SubscriptionBillingScheduleUpdateInputFlintInput>;
export declare function makeSubscriptionBillingScheduleUpdateRequest(value: InputValue<Exclude<SubscriptionBillingScheduleUpdateRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionBillingScheduleUpdateRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionBillingScheduleUpdateRequest(value: InputValue<SubscriptionBillingScheduleUpdateRequestInput>): Model<SubscriptionBillingScheduleUpdateRequestInput>;
export declare function makeSubscriptionBillingStartInputImmediate(value: InputValue<SubscriptionBillingStartInputImmediateInput>): Model<SubscriptionBillingStartInputImmediateInput>;
export declare function makeSubscriptionBillingStartInputImported(value: InputValue<SubscriptionBillingStartInputImportedInput>): Model<SubscriptionBillingStartInputImportedInput>;
export declare function makeSubscriptionBillingStartInputScheduled(value: InputValue<SubscriptionBillingStartInputScheduledInput>): Model<SubscriptionBillingStartInputScheduledInput>;
export declare function makeSubscriptionBillingStartRequest(value: InputValue<Exclude<SubscriptionBillingStartRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionBillingStartRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionBillingStartRequest(value: InputValue<SubscriptionBillingStartRequestInput>): Model<SubscriptionBillingStartRequestInput>;
export declare function makeSubscriptionDeliveryDestinationInputAddress(value: InputValue<SubscriptionDeliveryDestinationInputAddressInput>): Model<SubscriptionDeliveryDestinationInputAddressInput>;
export declare function makeSubscriptionDeliveryDestinationInputCustomerAddress(value: InputValue<SubscriptionDeliveryDestinationInputCustomerAddressInput>): Model<SubscriptionDeliveryDestinationInputCustomerAddressInput>;
export declare function makeSubscriptionDeliveryDestinationRequest(value: InputValue<Exclude<SubscriptionDeliveryDestinationRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionDeliveryDestinationRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionDeliveryDestinationRequest(value: InputValue<SubscriptionDeliveryDestinationRequestInput>): Model<SubscriptionDeliveryDestinationRequestInput>;
export declare function makeSubscriptionDeliveryRequest(value: InputValue<SubscriptionDeliveryRequestInput>): Model<SubscriptionDeliveryRequestInput>;
export declare function makeSubscriptionIntervalOption(value: InputValue<SubscriptionIntervalOptionInput>): Model<SubscriptionIntervalOptionInput>;
export declare function makeSubscriptionOfferLineItemRequest(value: InputValue<SubscriptionOfferLineItemRequestInput>): Model<SubscriptionOfferLineItemRequestInput>;
export declare function makeSubscriptionOfferTermsRequest(value: InputValue<SubscriptionOfferTermsRequestInput>): Model<SubscriptionOfferTermsRequestInput>;
export declare function makeSubscriptionPlanLineItemRequest(value: InputValue<SubscriptionPlanLineItemRequestInput>): Model<SubscriptionPlanLineItemRequestInput>;
export declare function makeSubscriptionPlanTermsRequest(value: InputValue<SubscriptionPlanTermsRequestInput>): Model<SubscriptionPlanTermsRequestInput>;
export declare function makeSubscriptionServiceLocationInputAddress(value: InputValue<SubscriptionServiceLocationInputAddressInput>): Model<SubscriptionServiceLocationInputAddressInput>;
export declare function makeSubscriptionServiceLocationInputCustomerAddress(value: InputValue<SubscriptionServiceLocationInputCustomerAddressInput>): Model<SubscriptionServiceLocationInputCustomerAddressInput>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionServiceLocationRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionServiceLocationRequest(value: InputValue<SubscriptionServiceLocationRequestInput>): Model<SubscriptionServiceLocationRequestInput>;
export declare function makeSubscriptionSettings(value: InputValue<SubscriptionSettingsInput>): Model<SubscriptionSettingsInput>;
export declare function makeSubscriptionTermsRequest(value: InputValue<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>): Model<Exclude<SubscriptionTermsRequestInput & object, readonly unknown[]>>;
export declare function makeSubscriptionTermsRequest(value: InputValue<SubscriptionTermsRequestInput>): Model<SubscriptionTermsRequestInput>;
export declare function makeTaxCalculationRequest(value: InputValue<TaxCalculationRequestInput>): Model<TaxCalculationRequestInput>;
export declare function makeTaxComponentRequest(value: InputValue<TaxComponentRequestInput>): Model<TaxComponentRequestInput>;
export declare function makeTaxIdentityPatch(value: InputValue<TaxIdentityPatchInput>): Model<TaxIdentityPatchInput>;
export declare function makeTaxIdentityRequest(value: InputValue<TaxIdentityRequestInput>): Model<TaxIdentityRequestInput>;
export declare function makeTaxJurisdiction(value: InputValue<TaxJurisdictionInput>): Model<TaxJurisdictionInput>;
export declare function makeTaxSettingsRequest(value: InputValue<TaxSettingsRequestInput>): Model<TaxSettingsRequestInput>;
export declare function makeTextModifierConfigPatchRequest(value: InputValue<TextModifierConfigPatchRequestInput>): Model<TextModifierConfigPatchRequestInput>;
export declare function makeTextModifierConfigRequest(value: InputValue<TextModifierConfigRequestInput>): Model<TextModifierConfigRequestInput>;
export declare function makeTextModifierRequest(value: InputValue<TextModifierRequestInput>): Model<TextModifierRequestInput>;
export declare function makeThemeConfigRequest(value: InputValue<ThemeConfigRequestInput>): Model<ThemeConfigRequestInput>;
export declare function makeTippingSettingsPatch(value: InputValue<TippingSettingsPatchInput>): Model<TippingSettingsPatchInput>;
export declare function makeTransitionGiftCardRequest(value: InputValue<TransitionGiftCardRequestInput>): Model<TransitionGiftCardRequestInput>;
export declare function makeTransitionGiftCardRequestFreeze(value: InputValue<TransitionGiftCardRequestFreezeInput>): Model<TransitionGiftCardRequestFreezeInput>;
export declare function makeTransitionGiftCardRequestWithoutReason(value: InputValue<TransitionGiftCardRequestWithoutReasonInput>): Model<TransitionGiftCardRequestWithoutReasonInput>;
export declare function makeUpdateAPIKeyRequest(value: InputValue<UpdateAPIKeyRequestInput>): Model<UpdateAPIKeyRequestInput>;
