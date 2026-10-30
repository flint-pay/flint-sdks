import type { InputValue, Model } from '../runtime.js';
import type {
    InvoiceScheduleAmountSpecificationPercentageInput,
    InvoiceScheduleAmountSpecificationRemainingBalanceInput,
    InvoiceScheduleDueWriteInput,
    InvoiceScheduleDueWriteAtIssueInput,
    InvoiceScheduleDueWriteDateInput,
    InvoiceScheduleDueWriteInvoiceDueDateInput,
    InvoiceScheduleEntryWriteInput,
    InvoiceScheduleEntryWriteBalanceInput,
    InvoiceScheduleEntryWriteDepositInput,
    InvoiceScheduleEntryWriteInstallmentInput,
    InvoiceSettingsPatchInput
} from './types-31.js';
import type {
    IssueCreditNoteRequestInput,
    IssueInvoiceRequestInput,
    IssueSandboxAPIKeyRequestInput,
    IssueSandboxAPIKeyRequestFullInput,
    IssueSandboxAPIKeyRequestReadOnlyInput,
    IssueSandboxAPIKeyRequestRestrictedInput,
    LegalSettingsRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LineItemFulfillmentRequestInput,
    LinkCustomerGuestPurchasesRequestInput
} from './types-32.js';
import type { LocationCoordinateRequestInput, LookupGiftCardRequestInput, ManualDiscountRequestInput } from './types-33.js';
import type {
    MerchantAccountSessionCreateRequestInput,
    MerchantAccountSessionRefreshRequestInput,
    MetadataPatchRequestInput,
    MetadataRequestInput
} from './types-34.js';
import type {
    ModifierOverrideInput,
    ModifierRequestInput,
    ModifierSetGroupInputExistingInput,
    ModifierSetGroupInputInlineInput,
    ModifierSetGroupRequestInput,
    MoneyValueInput,
    OnboardingAdvanceRequestInput,
    OnboardingProfileRequestInput,
    OnboardingStartRequestInput
} from './types-35.js';
import type {
    OnboardingVerifyEmailRequestInput,
    OrderCalculatedChargeTaxInput,
    OrderCalculatedLineItemTaxInput,
    OrderChargeInputAmountInput,
    OrderChargeInputPercentInput,
    OrderChargeRequestInput,
    OrderChargeTaxAssignmentInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderDeliveryDestinationRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderGiftCardAllocationAcceptanceInput,
    OrderInventoryRoutingSourceRequestInput
} from './types-36.js';
import type {
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput,
    OrderLineItemTaxAssignmentInput,
    OrderPaymentIntentSelectionInput,
    OrderPaymentIntentSelectionAttachedInput,
    OrderPaymentIntentSelectionPaymentMethodInput,
    OrderPaymentIntentSelectionStripeConfirmationTokenInput,
    OrderPaymentIntentSelectionTokenInput,
    OrderPaymentSourceCardSelectionInput
} from './types-37.js';
export declare function makeInvoiceScheduleAmountSpecificationPercentage(value: InputValue<InvoiceScheduleAmountSpecificationPercentageInput>): Model<InvoiceScheduleAmountSpecificationPercentageInput>;
export declare function makeInvoiceScheduleAmountSpecificationRemainingBalance(value: InputValue<InvoiceScheduleAmountSpecificationRemainingBalanceInput>): Model<InvoiceScheduleAmountSpecificationRemainingBalanceInput>;
export declare function makeInvoiceScheduleDueWrite(value: InputValue<InvoiceScheduleDueWriteInput>): Model<InvoiceScheduleDueWriteInput>;
export declare function makeInvoiceScheduleDueWriteAtIssue(value: InputValue<InvoiceScheduleDueWriteAtIssueInput>): Model<InvoiceScheduleDueWriteAtIssueInput>;
export declare function makeInvoiceScheduleDueWriteDate(value: InputValue<InvoiceScheduleDueWriteDateInput>): Model<InvoiceScheduleDueWriteDateInput>;
export declare function makeInvoiceScheduleDueWriteInvoiceDueDate(value: InputValue<InvoiceScheduleDueWriteInvoiceDueDateInput>): Model<InvoiceScheduleDueWriteInvoiceDueDateInput>;
export declare function makeInvoiceScheduleEntryWrite(value: InputValue<InvoiceScheduleEntryWriteInput>): Model<InvoiceScheduleEntryWriteInput>;
export declare function makeInvoiceScheduleEntryWriteBalance(value: InputValue<InvoiceScheduleEntryWriteBalanceInput>): Model<InvoiceScheduleEntryWriteBalanceInput>;
export declare function makeInvoiceScheduleEntryWriteDeposit(value: InputValue<InvoiceScheduleEntryWriteDepositInput>): Model<InvoiceScheduleEntryWriteDepositInput>;
export declare function makeInvoiceScheduleEntryWriteInstallment(value: InputValue<InvoiceScheduleEntryWriteInstallmentInput>): Model<InvoiceScheduleEntryWriteInstallmentInput>;
export declare function makeInvoiceSettingsPatch(value: InputValue<InvoiceSettingsPatchInput>): Model<InvoiceSettingsPatchInput>;
export declare function makeIssueCreditNoteRequest(value: InputValue<IssueCreditNoteRequestInput>): Model<IssueCreditNoteRequestInput>;
export declare function makeIssueInvoiceRequest(value: InputValue<IssueInvoiceRequestInput>): Model<IssueInvoiceRequestInput>;
export declare function makeIssueSandboxAPIKeyRequest(value: InputValue<IssueSandboxAPIKeyRequestInput>): Model<IssueSandboxAPIKeyRequestInput>;
export declare function makeIssueSandboxAPIKeyRequestFull(value: InputValue<IssueSandboxAPIKeyRequestFullInput>): Model<IssueSandboxAPIKeyRequestFullInput>;
export declare function makeIssueSandboxAPIKeyRequestReadOnly(value: InputValue<IssueSandboxAPIKeyRequestReadOnlyInput>): Model<IssueSandboxAPIKeyRequestReadOnlyInput>;
export declare function makeIssueSandboxAPIKeyRequestRestricted(value: InputValue<IssueSandboxAPIKeyRequestRestrictedInput>): Model<IssueSandboxAPIKeyRequestRestrictedInput>;
export declare function makeLegalSettingsRequest(value: InputValue<LegalSettingsRequestInput>): Model<LegalSettingsRequestInput>;
export declare function makeLineItemFulfillmentOriginRequest(value: InputValue<LineItemFulfillmentOriginRequestInput>): Model<LineItemFulfillmentOriginRequestInput>;
export declare function makeLineItemFulfillmentRequest(value: InputValue<LineItemFulfillmentRequestInput>): Model<LineItemFulfillmentRequestInput>;
export declare function makeLinkCustomerGuestPurchasesRequest(value: InputValue<LinkCustomerGuestPurchasesRequestInput>): Model<LinkCustomerGuestPurchasesRequestInput>;
export declare function makeLocationCoordinateRequest(value: InputValue<LocationCoordinateRequestInput>): Model<LocationCoordinateRequestInput>;
export declare function makeLookupGiftCardRequest(value: InputValue<LookupGiftCardRequestInput>): Model<LookupGiftCardRequestInput>;
export declare function makeManualDiscountRequest(value: InputValue<ManualDiscountRequestInput>): Model<ManualDiscountRequestInput>;
export declare function makeMerchantAccountSessionCreateRequest(value: InputValue<MerchantAccountSessionCreateRequestInput>): Model<MerchantAccountSessionCreateRequestInput>;
export declare function makeMerchantAccountSessionRefreshRequest(value: InputValue<MerchantAccountSessionRefreshRequestInput>): Model<MerchantAccountSessionRefreshRequestInput>;
export declare function makeMetadataPatchRequest(value: InputValue<MetadataPatchRequestInput>): Model<MetadataPatchRequestInput>;
export declare function makeMetadataRequest(value: InputValue<MetadataRequestInput>): Model<MetadataRequestInput>;
export declare function makeModifierOverride(value: InputValue<ModifierOverrideInput>): Model<ModifierOverrideInput>;
export declare function makeModifierRequest(value: InputValue<ModifierRequestInput>): Model<ModifierRequestInput>;
export declare function makeModifierSetGroupInputExisting(value: InputValue<ModifierSetGroupInputExistingInput>): Model<ModifierSetGroupInputExistingInput>;
export declare function makeModifierSetGroupInputInline(value: InputValue<ModifierSetGroupInputInlineInput>): Model<ModifierSetGroupInputInlineInput>;
export declare function makeModifierSetGroupRequest(value: InputValue<ModifierSetGroupRequestInput>): Model<ModifierSetGroupRequestInput>;
export declare function makeMoneyValue(value: InputValue<MoneyValueInput>): Model<MoneyValueInput>;
export declare function makeOnboardingAdvanceRequest(value: InputValue<OnboardingAdvanceRequestInput>): Model<OnboardingAdvanceRequestInput>;
export declare function makeOnboardingProfileRequest(value: InputValue<OnboardingProfileRequestInput>): Model<OnboardingProfileRequestInput>;
export declare function makeOnboardingStartRequest(value: InputValue<OnboardingStartRequestInput>): Model<OnboardingStartRequestInput>;
export declare function makeOnboardingVerifyEmailRequest(value: InputValue<OnboardingVerifyEmailRequestInput>): Model<OnboardingVerifyEmailRequestInput>;
export declare function makeOrderCalculatedChargeTax(value: InputValue<OrderCalculatedChargeTaxInput>): Model<OrderCalculatedChargeTaxInput>;
export declare function makeOrderCalculatedLineItemTax(value: InputValue<OrderCalculatedLineItemTaxInput>): Model<OrderCalculatedLineItemTaxInput>;
export declare function makeOrderChargeInputAmount(value: InputValue<OrderChargeInputAmountInput>): Model<OrderChargeInputAmountInput>;
export declare function makeOrderChargeInputPercent(value: InputValue<OrderChargeInputPercentInput>): Model<OrderChargeInputPercentInput>;
export declare function makeOrderChargeRequest(value: InputValue<OrderChargeRequestInput>): Model<OrderChargeRequestInput>;
export declare function makeOrderChargeTaxAssignment(value: InputValue<OrderChargeTaxAssignmentInput>): Model<OrderChargeTaxAssignmentInput>;
export declare function makeOrderDeliveryDestinationRecipientRequest(value: InputValue<OrderDeliveryDestinationRecipientRequestInput>): Model<OrderDeliveryDestinationRecipientRequestInput>;
export declare function makeOrderDeliveryDestinationRequest(value: InputValue<OrderDeliveryDestinationRequestInput>): Model<OrderDeliveryDestinationRequestInput>;
export declare function makeOrderDraftLineItemInventoryDemandRequest(value: InputValue<OrderDraftLineItemInventoryDemandRequestInput>): Model<OrderDraftLineItemInventoryDemandRequestInput>;
export declare function makeOrderDraftLineItemTaxCalculationRequest(value: InputValue<OrderDraftLineItemTaxCalculationRequestInput>): Model<OrderDraftLineItemTaxCalculationRequestInput>;
export declare function makeOrderDraftLineItemTaxRequest(value: InputValue<OrderDraftLineItemTaxRequestInput>): Model<OrderDraftLineItemTaxRequestInput>;
export declare function makeOrderDraftTaxComponentRequest(value: InputValue<OrderDraftTaxComponentRequestInput>): Model<OrderDraftTaxComponentRequestInput>;
export declare function makeOrderDraftTaxJurisdictionRequest(value: InputValue<OrderDraftTaxJurisdictionRequestInput>): Model<OrderDraftTaxJurisdictionRequestInput>;
export declare function makeOrderGiftCardAllocationAcceptance(value: InputValue<OrderGiftCardAllocationAcceptanceInput>): Model<OrderGiftCardAllocationAcceptanceInput>;
export declare function makeOrderInventoryRoutingSourceRequest(value: InputValue<OrderInventoryRoutingSourceRequestInput>): Model<OrderInventoryRoutingSourceRequestInput>;
export declare function makeOrderLineItemModifierInputCatalog(value: InputValue<OrderLineItemModifierInputCatalogInput>): Model<OrderLineItemModifierInputCatalogInput>;
export declare function makeOrderLineItemModifierInputText(value: InputValue<OrderLineItemModifierInputTextInput>): Model<OrderLineItemModifierInputTextInput>;
export declare function makeOrderLineItemModifierRequest(value: InputValue<OrderLineItemModifierRequestInput>): Model<OrderLineItemModifierRequestInput>;
export declare function makeOrderLineItemTax(value: InputValue<OrderLineItemTaxInput>): Model<OrderLineItemTaxInput>;
export declare function makeOrderLineItemTaxAssignment(value: InputValue<OrderLineItemTaxAssignmentInput>): Model<OrderLineItemTaxAssignmentInput>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>): Model<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<OrderPaymentIntentSelectionInput>): Model<OrderPaymentIntentSelectionInput>;
export declare function makeOrderPaymentIntentSelectionAttached(value: InputValue<OrderPaymentIntentSelectionAttachedInput>): Model<OrderPaymentIntentSelectionAttachedInput>;
export declare function makeOrderPaymentIntentSelectionPaymentMethod(value: InputValue<OrderPaymentIntentSelectionPaymentMethodInput>): Model<OrderPaymentIntentSelectionPaymentMethodInput>;
export declare function makeOrderPaymentIntentSelectionStripeConfirmationToken(value: InputValue<OrderPaymentIntentSelectionStripeConfirmationTokenInput>): Model<OrderPaymentIntentSelectionStripeConfirmationTokenInput>;
export declare function makeOrderPaymentIntentSelectionToken(value: InputValue<OrderPaymentIntentSelectionTokenInput>): Model<OrderPaymentIntentSelectionTokenInput>;
export declare function makeOrderPaymentSourceCardSelection(value: InputValue<OrderPaymentSourceCardSelectionInput>): Model<OrderPaymentSourceCardSelectionInput>;
