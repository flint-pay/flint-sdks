import type { InputValue, Model } from '../runtime.js';
import type {
    ManualDiscountRequestInput,
    MarkFulfillmentNoShowRequestInput,
    MarkFulfillmentPackedRequestInput,
    MarkFulfillmentPickedRequestInput,
    MarkFulfillmentPreparingRequestInput,
    MarkFulfillmentReadyRequestInput,
    MarkPackageDeliveredRequestInput,
    MarkPackageDeliveryAttemptedRequestInput,
    MarkPackageExceptionRequestInput,
    MarkPackageInTransitRequestInput,
    MarkPackageOutForDeliveryRequestInput,
    MarkPackagePackedRequestInput,
    MarkPackageReturnedRequestInput,
    MarkPackageShippedRequestInput
} from './types-35.js';
import type {
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionRefreshRequestInput,
    MerchantSignupOwnerRequestInput,
    MerchantSignupTermsAcceptanceRequestInput,
    MerchantSignupVersionRequestInput,
    MetadataPatchRequestInput
} from './types-37.js';
import type {
    MetadataRequestInput,
    ModifierOverrideRequestInput,
    ModifierRequestInput,
    ModifierSetGroupInputExistingInput,
    ModifierSetGroupInputInlineInput,
    ModifierSetGroupRequestInput,
    MoneyValueInput,
    OAuthRevokeRequestInput,
    OAuthTokenRequestInput,
    OAuthTokenRequestAuthorizationCodeInput,
    OAuthTokenRequestClientCredentialsInput,
    OAuthTokenRequestDeviceCodeInput
} from './types-38.js';
import type {
    OAuthTokenRequestRefreshTokenInput,
    OAuthTokenRequestTokenExchangeInput,
    OnboardingAdvanceRequestInput,
    OnboardingProfileRequestInput,
    OnboardingStartRequestInput,
    OnboardingVerifyEmailRequestInput,
    OrderCalculatedChargeTaxRequestInput,
    OrderCalculatedLineItemTaxRequestInput,
    OrderChargeInputAmountInput,
    OrderChargeInputPercentInput,
    OrderChargeRequestInput,
    OrderChargeTaxAssignmentInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderDeliveryDestinationRequestInput
} from './types-39.js';
import type {
    OrderDeliveryRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxCalculationRequestModelInput,
    OrderDraftLineItemTaxRequestModelInput,
    OrderDraftTaxComponentRequestModelInput,
    OrderDraftTaxJurisdictionRequestModelInput,
    OrderEditPreviewRequestInput,
    OrderEditRemovalRequestInput,
    OrderGiftCardAllocationAcceptanceInput,
    OrderHandoverRequestInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemTaxAssignmentInput,
    OrderLineItemTaxRequestInput
} from './types-40.js';
import type {
    OrderPaymentIntentSelectionInput,
    OrderPaymentIntentSelectionAttachedInput,
    OrderPaymentIntentSelectionPaymentMethodInput
} from './types-41.js';
export declare function makeManualDiscountRequest(value: InputValue<ManualDiscountRequestInput>): Model<ManualDiscountRequestInput>;
export declare function makeMarkFulfillmentNoShowRequest(value: InputValue<MarkFulfillmentNoShowRequestInput>): Model<MarkFulfillmentNoShowRequestInput>;
export declare function makeMarkFulfillmentPackedRequest(value: InputValue<MarkFulfillmentPackedRequestInput>): Model<MarkFulfillmentPackedRequestInput>;
export declare function makeMarkFulfillmentPickedRequest(value: InputValue<MarkFulfillmentPickedRequestInput>): Model<MarkFulfillmentPickedRequestInput>;
export declare function makeMarkFulfillmentPreparingRequest(value: InputValue<MarkFulfillmentPreparingRequestInput>): Model<MarkFulfillmentPreparingRequestInput>;
export declare function makeMarkFulfillmentReadyRequest(value: InputValue<MarkFulfillmentReadyRequestInput>): Model<MarkFulfillmentReadyRequestInput>;
export declare function makeMarkPackageDeliveredRequest(value: InputValue<MarkPackageDeliveredRequestInput>): Model<MarkPackageDeliveredRequestInput>;
export declare function makeMarkPackageDeliveryAttemptedRequest(value: InputValue<MarkPackageDeliveryAttemptedRequestInput>): Model<MarkPackageDeliveryAttemptedRequestInput>;
export declare function makeMarkPackageExceptionRequest(value: InputValue<MarkPackageExceptionRequestInput>): Model<MarkPackageExceptionRequestInput>;
export declare function makeMarkPackageInTransitRequest(value: InputValue<MarkPackageInTransitRequestInput>): Model<MarkPackageInTransitRequestInput>;
export declare function makeMarkPackageOutForDeliveryRequest(value: InputValue<MarkPackageOutForDeliveryRequestInput>): Model<MarkPackageOutForDeliveryRequestInput>;
export declare function makeMarkPackagePackedRequest(value: InputValue<MarkPackagePackedRequestInput>): Model<MarkPackagePackedRequestInput>;
export declare function makeMarkPackageReturnedRequest(value: InputValue<MarkPackageReturnedRequestInput>): Model<MarkPackageReturnedRequestInput>;
export declare function makeMarkPackageShippedRequest(value: InputValue<MarkPackageShippedRequestInput>): Model<MarkPackageShippedRequestInput>;
export declare function makeMerchantAccountSessionCreateRequest(value: InputValue<MerchantAccountSessionCreateRequestInput>): Model<MerchantAccountSessionCreateRequestInput>;
export declare function makeMerchantAccountSessionRefreshRequest(value: InputValue<MerchantAccountSessionRefreshRequestInput>): Model<MerchantAccountSessionRefreshRequestInput>;
export declare function makeMerchantSignupOwnerRequest(value: InputValue<MerchantSignupOwnerRequestInput>): Model<MerchantSignupOwnerRequestInput>;
export declare function makeMerchantSignupTermsAcceptanceRequest(value: InputValue<MerchantSignupTermsAcceptanceRequestInput>): Model<MerchantSignupTermsAcceptanceRequestInput>;
export declare function makeMerchantSignupVersionRequest(value: InputValue<MerchantSignupVersionRequestInput>): Model<MerchantSignupVersionRequestInput>;
export declare function makeMetadataPatchRequest(value: InputValue<MetadataPatchRequestInput>): Model<MetadataPatchRequestInput>;
export declare function makeMetadataRequest(value: InputValue<MetadataRequestInput>): Model<MetadataRequestInput>;
export declare function makeModifierOverrideRequest(value: InputValue<ModifierOverrideRequestInput>): Model<ModifierOverrideRequestInput>;
export declare function makeModifierRequest(value: InputValue<ModifierRequestInput>): Model<ModifierRequestInput>;
export declare function makeModifierSetGroupInputExisting(value: InputValue<ModifierSetGroupInputExistingInput>): Model<ModifierSetGroupInputExistingInput>;
export declare function makeModifierSetGroupInputInline(value: InputValue<ModifierSetGroupInputInlineInput>): Model<ModifierSetGroupInputInlineInput>;
export declare function makeModifierSetGroupRequest(value: InputValue<ModifierSetGroupRequestInput>): Model<ModifierSetGroupRequestInput>;
export declare function makeMoneyValue(value: InputValue<MoneyValueInput>): Model<MoneyValueInput>;
export declare function makeOAuthRevokeRequest(value: InputValue<OAuthRevokeRequestInput>): Model<OAuthRevokeRequestInput>;
export declare function makeOAuthTokenRequest(value: InputValue<OAuthTokenRequestInput>): Model<OAuthTokenRequestInput>;
export declare function makeOAuthTokenRequestAuthorizationCode(value: InputValue<OAuthTokenRequestAuthorizationCodeInput>): Model<OAuthTokenRequestAuthorizationCodeInput>;
export declare function makeOAuthTokenRequestClientCredentials(value: InputValue<OAuthTokenRequestClientCredentialsInput>): Model<OAuthTokenRequestClientCredentialsInput>;
export declare function makeOAuthTokenRequestDeviceCode(value: InputValue<OAuthTokenRequestDeviceCodeInput>): Model<OAuthTokenRequestDeviceCodeInput>;
export declare function makeOAuthTokenRequestRefreshToken(value: InputValue<OAuthTokenRequestRefreshTokenInput>): Model<OAuthTokenRequestRefreshTokenInput>;
export declare function makeOAuthTokenRequestTokenExchange(value: InputValue<OAuthTokenRequestTokenExchangeInput>): Model<OAuthTokenRequestTokenExchangeInput>;
export declare function makeOnboardingAdvanceRequest(value: InputValue<OnboardingAdvanceRequestInput>): Model<OnboardingAdvanceRequestInput>;
export declare function makeOnboardingProfileRequest(value: InputValue<OnboardingProfileRequestInput>): Model<OnboardingProfileRequestInput>;
export declare function makeOnboardingStartRequest(value: InputValue<OnboardingStartRequestInput>): Model<OnboardingStartRequestInput>;
export declare function makeOnboardingVerifyEmailRequest(value: InputValue<OnboardingVerifyEmailRequestInput>): Model<OnboardingVerifyEmailRequestInput>;
export declare function makeOrderCalculatedChargeTaxRequest(value: InputValue<OrderCalculatedChargeTaxRequestInput>): Model<OrderCalculatedChargeTaxRequestInput>;
export declare function makeOrderCalculatedLineItemTaxRequest(value: InputValue<OrderCalculatedLineItemTaxRequestInput>): Model<OrderCalculatedLineItemTaxRequestInput>;
export declare function makeOrderChargeInputAmount(value: InputValue<OrderChargeInputAmountInput>): Model<OrderChargeInputAmountInput>;
export declare function makeOrderChargeInputPercent(value: InputValue<OrderChargeInputPercentInput>): Model<OrderChargeInputPercentInput>;
export declare function makeOrderChargeRequest(value: InputValue<OrderChargeRequestInput>): Model<OrderChargeRequestInput>;
export declare function makeOrderChargeTaxAssignment(value: InputValue<OrderChargeTaxAssignmentInput>): Model<OrderChargeTaxAssignmentInput>;
export declare function makeOrderDeliveryDestinationRecipientRequest(value: InputValue<OrderDeliveryDestinationRecipientRequestInput>): Model<OrderDeliveryDestinationRecipientRequestInput>;
export declare function makeOrderDeliveryDestinationRequest(value: InputValue<OrderDeliveryDestinationRequestInput>): Model<OrderDeliveryDestinationRequestInput>;
export declare function makeOrderDeliveryRequest(value: InputValue<OrderDeliveryRequestInput>): Model<OrderDeliveryRequestInput>;
export declare function makeOrderDraftLineItemInventoryDemandRequest(value: InputValue<OrderDraftLineItemInventoryDemandRequestInput>): Model<OrderDraftLineItemInventoryDemandRequestInput>;
export declare function makeOrderDraftLineItemTaxCalculationRequestModel(value: InputValue<OrderDraftLineItemTaxCalculationRequestModelInput>): Model<OrderDraftLineItemTaxCalculationRequestModelInput>;
export declare function makeOrderDraftLineItemTaxRequestModel(value: InputValue<OrderDraftLineItemTaxRequestModelInput>): Model<OrderDraftLineItemTaxRequestModelInput>;
export declare function makeOrderDraftTaxComponentRequestModel(value: InputValue<OrderDraftTaxComponentRequestModelInput>): Model<OrderDraftTaxComponentRequestModelInput>;
export declare function makeOrderDraftTaxJurisdictionRequestModel(value: InputValue<OrderDraftTaxJurisdictionRequestModelInput>): Model<OrderDraftTaxJurisdictionRequestModelInput>;
export declare function makeOrderEditPreviewRequest(value: InputValue<OrderEditPreviewRequestInput>): Model<OrderEditPreviewRequestInput>;
export declare function makeOrderEditRemovalRequest(value: InputValue<OrderEditRemovalRequestInput>): Model<OrderEditRemovalRequestInput>;
export declare function makeOrderGiftCardAllocationAcceptance(value: InputValue<OrderGiftCardAllocationAcceptanceInput>): Model<OrderGiftCardAllocationAcceptanceInput>;
export declare function makeOrderHandoverRequest(value: InputValue<OrderHandoverRequestInput>): Model<OrderHandoverRequestInput>;
export declare function makeOrderLineItemModifierInputCatalogRequest(value: InputValue<OrderLineItemModifierInputCatalogRequestInput>): Model<OrderLineItemModifierInputCatalogRequestInput>;
export declare function makeOrderLineItemModifierInputTextRequest(value: InputValue<OrderLineItemModifierInputTextRequestInput>): Model<OrderLineItemModifierInputTextRequestInput>;
export declare function makeOrderLineItemModifierRequestModel(value: InputValue<OrderLineItemModifierRequestModelInput>): Model<OrderLineItemModifierRequestModelInput>;
export declare function makeOrderLineItemTaxAssignment(value: InputValue<OrderLineItemTaxAssignmentInput>): Model<OrderLineItemTaxAssignmentInput>;
export declare function makeOrderLineItemTaxRequest(value: InputValue<OrderLineItemTaxRequestInput>): Model<OrderLineItemTaxRequestInput>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>): Model<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<OrderPaymentIntentSelectionInput>): Model<OrderPaymentIntentSelectionInput>;
export declare function makeOrderPaymentIntentSelectionAttached(value: InputValue<OrderPaymentIntentSelectionAttachedInput>): Model<OrderPaymentIntentSelectionAttachedInput>;
export declare function makeOrderPaymentIntentSelectionPaymentMethod(value: InputValue<OrderPaymentIntentSelectionPaymentMethodInput>): Model<OrderPaymentIntentSelectionPaymentMethodInput>;
