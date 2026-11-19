# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCheckoutSessionLaunchResponse](models/index-1.md)
- [BuyerCheckoutSessionWithSecret to BuyerRefundPreviousAttributes](models/index-2.md)
- [BuyerRefundResponse to CancelReturnDispositionRequestInput](models/index-3.md)
- [CancelReturnLineItemRequest to CheckoutSessionPartiallyPaidInstalledMerchantsEvent](models/index-4.md)
- [CheckoutSessionPartiallyPaidMerchantEvent to CreateCheckoutSessionQuickPayInput](models/index-5.md)
- [CreateCheckoutSessionRequest to CreateGiftCardNotificationRequest](models/index-6.md)
- [CreateGiftCardNotificationRequestInput to CreateOrderEditResult](models/index-7.md)
- [CreateOrderLineItem to CreateReturnPreviewDataEligibility](models/index-8.md)
- [CreateReturnPreviewDataResolution to CreditNoteAllocationCreatedMerchantEvent](models/index-9.md)
- [CreditNoteAllocationListResponse to CustomerUpdatedMerchantEvent](models/index-10.md)
- [CustomerVerification to DeliveryFulfillmentDetailsPreviousAttributes](models/index-11.md)
- [DeliveryInputConstraint to DeliveryPricingStrategyCalculatedPreviousAttributes](models/index-12.md)
- [DeliveryPricingStrategyCallback to DeliveryRateCallbackConfigurationPatchRequest](models/index-13.md)
- [DeliveryRateCallbackConfigurationPatchRequestInput to DeliveryWeightUnitPricePreviousAttributes](models/index-14.md)
- [DeliveryWeightUnitPriceRequestInput to ExpandedPackageSummaryPreviousAttributes](models/index-15.md)
- [ExpandedPaymentIntentSummary to GiftCardFundingDispositionResponse](models/index-16.md)
- [GiftCardFundingDispute to GiftCardUpdatedInstalledMerchantsEvent](models/index-17.md)
- [GiftCardUpdatedMerchantEvent to InventoryReservationClosedMerchantEvent](models/index-18.md)
- [InventoryReservationCommittedInstalledMerchantsEvent to InvoiceDeliveryAttemptFailedInstalledMerchantsEvent](models/index-19.md)
- [InvoiceDeliveryAttemptFailedMerchantEvent to InvoicePaymentTermCalculationDaysAfterMonthEndPreviousAttributes](models/index-20.md)
- [InvoicePaymentTermCalculationDaysAfterMonthEndRequestInput to LicenseKeyDisabledInstalledMerchantsEvent](models/index-21.md)
- [LicenseKeyDisabledMerchantEvent to MerchantBillingBalance](models/index-22.md)
- [MerchantBillingBalanceListResponse to OnboardingProfile](models/index-23.md)
- [OnboardingProfileRequest to OrderInventoryExceptionResolvedInstalledMerchantsEvent](models/index-24.md)
- [OrderInventoryExceptionResolvedMerchantEvent to Package](models/index-25.md)
- [PackageCreatedInstalledMerchantsEvent to PaymentCollectionPreviousAttributes](models/index-26.md)
- [PaymentCollectionStripe to PaymentLinkPaymentPatchRequestInput](models/index-27.md)
- [PaymentLinkProductOption to Payout](models/index-28.md)
- [PayoutCanceledInstalledMerchantsEvent to ProductOptionPreviousAttributes](models/index-29.md)
- [ProductOptionResponse to PromotionRuleRequestInput](models/index-30.md)
- [PromotionRuleValue to RefundPreviousAttributes](models/index-31.md)
- [RefundResponse to ReturnActivity](models/index-32.md)
- [ReturnActor to ReturnReceiptLineItem](models/index-33.md)
- [ReturnReceiptLineItemInputExcess to RiskPredicateNodeRequest](models/index-34.md)
- [RiskPredicateNodeRequestInput to SubscribedLineRequestModelInput](models/index-35.md)
- [Subscription to SubscriptionLineItemsListResponse](models/index-36.md)
- [SubscriptionListResponse to SubscriptionStatusCounts](models/index-37.md)
- [SubscriptionSwapPreviewRequest to ThemeConfigPreviousAttributes](models/index-38.md)
- [ThemeConfigRequestInput to UpdateMeSubscriptionRequest](models/index-39.md)
- [UpdateMeSubscriptionRequestInput to UpdateTicketRequestInput](models/index-40.md)
- [UpdateWebhookEndpointRequest to WorkloadIdentityResponse](models/index-41.md)

