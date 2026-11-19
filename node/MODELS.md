# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnPreviewRequest](models/index-1.md)
- [BuyerCreateReturnPreviewRequestInput to BuyerRememberedBuyer](models/index-2.md)
- [BuyerRememberedBuyerListResponse to CancelReturnLineItemRequestInput](models/index-3.md)
- [CancelReturnRequest to CheckoutSessionTax](models/index-4.md)
- [CheckoutSessionTaxPreviousAttributes to CreateCheckoutSessionReturnResolutionInput](models/index-5.md)
- [CreateCheckoutSessionSavePaymentMethodVerificationRequest to CreateGiftCardRedemptionRequestAutomatic](models/index-6.md)
- [CreateGiftCardRedemptionRequestAutomaticInput to CreateOrderLineItemInputBundle](models/index-7.md)
- [CreateOrderLineItemInputBundleInput to CreateReturnPreviewRequestEligibilityInput](models/index-8.md)
- [CreateReturnPreviewRequestResolution to CreditNoteAllocationReversedInstalledMerchantsEvent](models/index-9.md)
- [CreditNoteAllocationReversedMerchantEvent to CustomFieldAnswerCheckbox](models/index-10.md)
- [CustomFieldAnswerCheckboxPreviousAttributes to DeliveryInventoryAssignmentRequest](models/index-11.md)
- [DeliveryInventoryAssignmentRequestInput to DeliveryPricingStrategyCreateInputCalculated](models/index-12.md)
- [DeliveryPricingStrategyCreateInputCalculatedInput to DeliveryRateCallbackConnectionCheckRequest](models/index-13.md)
- [DeliveryRateCallbackConnectionCheckResponse to DeliveryWindowTimeCondition](models/index-14.md)
- [DeliveryWindowTimeConditionInput to ExpandedPaymentMethodSummary](models/index-15.md)
- [ExpandedPaymentMethodSummaryPreviousAttributes to GiftCardFundingSource](models/index-16.md)
- [GiftCardFundingSourceAdjustment to Image](models/index-17.md)
- [ImageAttachment to InventoryReservationHoldExpiredInstalledMerchantsEvent](models/index-18.md)
- [InventoryReservationHoldExpiredMerchantEvent to InvoiceDiscount](models/index-19.md)
- [InvoiceDiscountPreviousAttributes to InvoicePaymentTermCalculationOnReceiptRequestInput](models/index-20.md)
- [InvoicePaymentTermCalculationPreviousAttributes to LicenseKeyPoolAdditionsResponse](models/index-21.md)
- [LicenseKeyPoolArchivedInstalledMerchantsEvent to MerchantBillingInvoiceIssuedEvent](models/index-22.md)
- [MerchantBillingInvoiceLineItem to OnboardingState](models/index-23.md)
- [OnboardingStateResponse to OrderLineItemFulfillmentQuantitiesPreviousAttributes](models/index-24.md)
- [OrderLineItemFulfillmentRequirements to PackageCreateRequestInput](models/index-25.md)
- [PackageItem to PaymentFulfillmentHoldPreviousAttributes](models/index-26.md)
- [PaymentIntent to PaymentLinkSalesSummaryPreviousAttributes](models/index-27.md)
- [PaymentLinkSubscriptionPreview to PayoutDestinationCreatedInstalledMerchantsEvent](models/index-28.md)
- [PayoutDestinationCreatedMerchantEvent to ProductUpdatedMerchantEvent](models/index-29.md)
- [ProductVariant to PromotionScheduleRequestInput](models/index-30.md)
- [PromotionSettings to RefundTenderAllocation](models/index-31.md)
- [RefundTenderAllocationInputGiftCardRedemption to ReturnCompletionBlockerPreviousAttributes](models/index-32.md)
- [ReturnCreatedInstalledMerchantsEvent to ReturnReceiptLineItemRequest](models/index-33.md)
- [ReturnReceiptLineItemRequestInput to RiskRuleResponse](models/index-34.md)
- [RotateGiftCardCodeRequest to SubscriptionBillingHold](models/index-35.md)
- [SubscriptionBillingHoldPreviousAttributes to SubscriptionOfferTermsRequestInput](models/index-36.md)
- [SubscriptionPastDueInstalledMerchantsEvent to SubscriptionTermsRequest](models/index-37.md)
- [SubscriptionTermsRequestInput to TicketedEventPreviousAttributes](models/index-38.md)
- [TicketListResponse to UpdatePackageItemRequest](models/index-39.md)
- [UpdatePackageItemRequestInput to VerifyReturnReceiptLineItemRequest](models/index-40.md)
- [VerifyReturnReceiptLineItemRequestInput to WorkloadIdentityResponse](models/index-41.md)

