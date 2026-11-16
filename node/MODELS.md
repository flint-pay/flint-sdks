# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnRequestInput](models/index-1.md)
- [BuyerCreateReturnResolutionPreviewRequest to BuyerReturnPreviewEligibility](models/index-2.md)
- [BuyerReturnPreviewResolution to CategoryDeletedMerchantEvent](models/index-3.md)
- [CategoryListResponse to CollectInvoiceResult](models/index-4.md)
- [CommitInventoryReservationRequest to CreateDeliveryOptionsPreviewRequest](models/index-5.md)
- [CreateDeliveryOptionsPreviewRequestInput to CreateInvoiceManualPaymentRequestInput](models/index-6.md)
- [CreateInvoicePaymentTermRequest to CreatePickupFulfillmentDetails](models/index-7.md)
- [CreatePickupFulfillmentDetailsInput to CreateSmartReaderRequestInput](models/index-8.md)
- [CreateSubscriptionAccessLinkRequest to CustomerAddressListResponse](models/index-9.md)
- [CustomerAddressResponse to DeliveryEligibilityExpressionRequest](models/index-10.md)
- [DeliveryEligibilityExpressionRequestInput to DeliveryPricingStrategyCreateInputFixed](models/index-11.md)
- [DeliveryPricingStrategyCreateInputFixedInput to DeliveryRateEvaluationOutcome](models/index-12.md)
- [DeliveryRateEvaluationOutcomeInput to DiscountPreviewResponse](models/index-13.md)
- [DispatchFulfillmentRequestInput to FulfillmentNotificationListResponse](models/index-14.md)
- [FulfillmentNotificationResponse to GiftCardTransactionCreatedMerchantEvent](models/index-15.md)
- [GiftCardTransactionListResponse to InventoryReservationConsumedMerchantEvent](models/index-16.md)
- [InventoryReservationCreatedInstalledMerchantsEvent to InvoiceLateFeeAssessedInstalledMerchantsEvent](models/index-17.md)
- [InvoiceLateFeeAssessedMerchantEvent to InvoiceScheduleDue](models/index-18.md)
- [InvoiceScheduleDueAtIssue to MerchantAccountSessionStripeRequirements](models/index-19.md)
- [MerchantBillingBalance to OnboardingVerifyEmailRequestInput](models/index-20.md)
- [OnboardingVerifyEmailResponse to OrderPartiallyRefundedMerchantEvent](models/index-21.md)
- [OrderPaymentAttempt to PartnerAppPlatformApprovedEvent](models/index-22.md)
- [PartnerAppPlatformCapability to PaymentLinkLineItemPatchInputBundle](models/index-23.md)
- [PaymentLinkLineItemPatchInputBundleInput to PayOrderRequestSetupInput](models/index-24.md)
- [PayOrderResponse to ProductVariantCreatedMerchantEvent](models/index-25.md)
- [ProductVariantInventoryAvailability to ReaderArchivedMerchantEvent](models/index-26.md)
- [ReaderConnectionSession to ResolveCustomerDeletionRequestInput](models/index-27.md)
- [ResolveOrderInventoryExceptionRequestInput to ReturnProcessDispositionRequestInput](models/index-28.md)
- [ReturnProcessInspectionRequest to RiskPredicateNodeNotRequestInput](models/index-29.md)
- [RiskPredicateNodeRequest to SubscriptionBillingScheduleRequestInput](models/index-30.md)
- [SubscriptionBillingScheduleUpdateInputExternal to SubscriptionPlanChangedMerchantEvent](models/index-31.md)
- [SubscriptionPlanChangeLineItemRequest to TaxCalculationRequestRequestInput](models/index-32.md)
- [TaxComponentRequest to UpdateDeviceRequestInput](models/index-33.md)
- [UpdateDigitalFulfillmentDetails to UpdateReturnResolutionRequest](models/index-34.md)
- [UpdateReturnResolutionRequestInput to WorkloadIdentityResponse](models/index-35.md)

