import type { InputValue, Model } from '../runtime.js';
import type {
    InvoiceReminderPolicyInput,
    InvoiceReminderRuleInput,
    InvoiceScheduleAmountSpecificationInput,
    InvoiceScheduleAmountSpecificationFixedInput,
    InvoiceScheduleAmountSpecificationPercentageInput,
    InvoiceScheduleAmountSpecificationRemainingBalanceInput,
    InvoiceScheduleDueWriteInput,
    InvoiceScheduleDueWriteAtIssueInput,
    InvoiceScheduleDueWriteDateInput,
    InvoiceScheduleDueWriteInvoiceDueDateInput
} from './types-27.js';
import type {
    InvoiceScheduleEntryWriteInput,
    InvoiceScheduleEntryWriteBalanceInput,
    InvoiceScheduleEntryWriteDepositInput,
    InvoiceScheduleEntryWriteInstallmentInput,
    InvoiceSettingsPatchInput,
    IssueCreditNoteRequestInput,
    IssueInvoiceRequestInput,
    IssueSandboxAPIKeyRequestInput,
    LegalSettingsRequestInput,
    LineItemFulfillmentOriginRequestInput,
    LineItemFulfillmentRequestInput,
    LinkCustomerGuestPurchasesRequestInput
} from './types-28.js';
import type {
    LocationAddressRequestInput,
    LocationCoordinateInput,
    LookupGiftCardRequestInput,
    ManualDiscountRequestInput
} from './types-29.js';
import type { MerchantAccountSessionCreateRequestInput, MerchantAccountSessionRefreshRequestInput } from './types-30.js';
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
} from './types-31.js';
import type {
    OnboardingVerifyEmailRequestInput,
    OrderCalculatedChargeTaxInput,
    OrderCalculatedLineItemTaxInput,
    OrderChargeRequestInput,
    OrderChargeTaxAssignmentInput,
    OrderDeliveryDestinationAddressRequestInput,
    OrderDeliveryDestinationRecipientRequestInput,
    OrderDeliveryDestinationRequestInput,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxCalculationRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderDraftTaxComponentRequestInput,
    OrderDraftTaxJurisdictionRequestInput,
    OrderGiftCardAllocationAcceptanceInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput,
    OrderLineItemTaxAssignmentInput,
    OrderPaymentIntentSelectionInput
} from './types-32.js';
import type {
    OrderPaymentSourceCardSelectionInput,
    OrderPaymentSourceSelectionInput,
    OrderTaxCalculationInputAutomaticInput,
    OrderTaxCalculationInputExternalInput,
    OrderTaxCalculationRequestInput,
    OrderTaxComponentRequestInput,
    OrderTaxJurisdictionRequestInput,
    OrderTaxLocationFullAddressRequestInput
} from './types-33.js';
export declare function makeInvoiceReminderPolicy(value: InputValue<InvoiceReminderPolicyInput>): Model<InvoiceReminderPolicyInput>;
export declare function makeInvoiceReminderRule(value: InputValue<InvoiceReminderRuleInput>): Model<InvoiceReminderRuleInput>;
export declare function makeInvoiceScheduleAmountSpecification(value: InputValue<InvoiceScheduleAmountSpecificationInput>): Model<InvoiceScheduleAmountSpecificationInput>;
export declare function makeInvoiceScheduleAmountSpecificationFixed(value: InputValue<InvoiceScheduleAmountSpecificationFixedInput>): Model<InvoiceScheduleAmountSpecificationFixedInput>;
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
export declare function makeLegalSettingsRequest(value: InputValue<LegalSettingsRequestInput>): Model<LegalSettingsRequestInput>;
export declare function makeLineItemFulfillmentOriginRequest(value: InputValue<LineItemFulfillmentOriginRequestInput>): Model<LineItemFulfillmentOriginRequestInput>;
export declare function makeLineItemFulfillmentRequest(value: InputValue<LineItemFulfillmentRequestInput>): Model<LineItemFulfillmentRequestInput>;
export declare function makeLinkCustomerGuestPurchasesRequest(value: InputValue<LinkCustomerGuestPurchasesRequestInput>): Model<LinkCustomerGuestPurchasesRequestInput>;
export declare function makeLocationAddressRequest(value: InputValue<LocationAddressRequestInput>): Model<LocationAddressRequestInput>;
export declare function makeLocationCoordinate(value: InputValue<LocationCoordinateInput>): Model<LocationCoordinateInput>;
export declare function makeLookupGiftCardRequest(value: InputValue<LookupGiftCardRequestInput>): Model<LookupGiftCardRequestInput>;
export declare function makeManualDiscountRequest(value: InputValue<ManualDiscountRequestInput>): Model<ManualDiscountRequestInput>;
export declare function makeMerchantAccountSessionCreateRequest(value: InputValue<MerchantAccountSessionCreateRequestInput>): Model<MerchantAccountSessionCreateRequestInput>;
export declare function makeMerchantAccountSessionRefreshRequest(value: InputValue<MerchantAccountSessionRefreshRequestInput>): Model<MerchantAccountSessionRefreshRequestInput>;
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
export declare function makeOrderChargeRequest(value: InputValue<OrderChargeRequestInput>): Model<OrderChargeRequestInput>;
export declare function makeOrderChargeTaxAssignment(value: InputValue<OrderChargeTaxAssignmentInput>): Model<OrderChargeTaxAssignmentInput>;
export declare function makeOrderDeliveryDestinationAddressRequest(value: InputValue<OrderDeliveryDestinationAddressRequestInput>): Model<OrderDeliveryDestinationAddressRequestInput>;
export declare function makeOrderDeliveryDestinationRecipientRequest(value: InputValue<OrderDeliveryDestinationRecipientRequestInput>): Model<OrderDeliveryDestinationRecipientRequestInput>;
export declare function makeOrderDeliveryDestinationRequest(value: InputValue<OrderDeliveryDestinationRequestInput>): Model<OrderDeliveryDestinationRequestInput>;
export declare function makeOrderDraftLineItemInventoryDemandRequest(value: InputValue<OrderDraftLineItemInventoryDemandRequestInput>): Model<OrderDraftLineItemInventoryDemandRequestInput>;
export declare function makeOrderDraftLineItemTaxCalculationRequest(value: InputValue<OrderDraftLineItemTaxCalculationRequestInput>): Model<OrderDraftLineItemTaxCalculationRequestInput>;
export declare function makeOrderDraftLineItemTaxRequest(value: InputValue<OrderDraftLineItemTaxRequestInput>): Model<OrderDraftLineItemTaxRequestInput>;
export declare function makeOrderDraftTaxComponentRequest(value: InputValue<OrderDraftTaxComponentRequestInput>): Model<OrderDraftTaxComponentRequestInput>;
export declare function makeOrderDraftTaxJurisdictionRequest(value: InputValue<OrderDraftTaxJurisdictionRequestInput>): Model<OrderDraftTaxJurisdictionRequestInput>;
export declare function makeOrderGiftCardAllocationAcceptance(value: InputValue<OrderGiftCardAllocationAcceptanceInput>): Model<OrderGiftCardAllocationAcceptanceInput>;
export declare function makeOrderInventoryRoutingSourceRequest(value: InputValue<OrderInventoryRoutingSourceRequestInput>): Model<OrderInventoryRoutingSourceRequestInput>;
export declare function makeOrderLineItemModifierRequest(value: InputValue<OrderLineItemModifierRequestInput>): Model<OrderLineItemModifierRequestInput>;
export declare function makeOrderLineItemTax(value: InputValue<OrderLineItemTaxInput>): Model<OrderLineItemTaxInput>;
export declare function makeOrderLineItemTaxAssignment(value: InputValue<OrderLineItemTaxAssignmentInput>): Model<OrderLineItemTaxAssignmentInput>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>): Model<Exclude<OrderPaymentIntentSelectionInput & object, readonly unknown[]>>;
export declare function makeOrderPaymentIntentSelection(value: InputValue<OrderPaymentIntentSelectionInput>): Model<OrderPaymentIntentSelectionInput>;
export declare function makeOrderPaymentSourceCardSelection(value: InputValue<OrderPaymentSourceCardSelectionInput>): Model<OrderPaymentSourceCardSelectionInput>;
export declare function makeOrderPaymentSourceSelection(value: InputValue<OrderPaymentSourceSelectionInput>): Model<OrderPaymentSourceSelectionInput>;
export declare function makeOrderTaxCalculationInputAutomatic(value: InputValue<OrderTaxCalculationInputAutomaticInput>): Model<OrderTaxCalculationInputAutomaticInput>;
export declare function makeOrderTaxCalculationInputExternal(value: InputValue<OrderTaxCalculationInputExternalInput>): Model<OrderTaxCalculationInputExternalInput>;
export declare function makeOrderTaxCalculationRequest(value: InputValue<OrderTaxCalculationRequestInput>): Model<OrderTaxCalculationRequestInput>;
export declare function makeOrderTaxComponentRequest(value: InputValue<OrderTaxComponentRequestInput>): Model<OrderTaxComponentRequestInput>;
export declare function makeOrderTaxJurisdictionRequest(value: InputValue<OrderTaxJurisdictionRequestInput>): Model<OrderTaxJurisdictionRequestInput>;
export declare function makeOrderTaxLocationFullAddressRequest(value: InputValue<OrderTaxLocationFullAddressRequestInput>): Model<OrderTaxLocationFullAddressRequestInput>;
