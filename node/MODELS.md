# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCheckoutSessionLaunch](models/index-1.md)
- [BuyerCheckoutSessionLaunchResponse to BuyerRefundListResponse](models/index-2.md)
- [BuyerRefundPreviousAttributes to CancelReturnDispositionRequest](models/index-3.md)
- [CancelReturnDispositionRequestInput to CheckoutSessionLaunchResponse](models/index-4.md)
- [CheckoutSessionListResponse to CreateCheckoutSessionOrderInput](models/index-5.md)
- [CreateCheckoutSessionPayToNewAddressVerificationRequest to CreateGiftCardLoadRequest](models/index-6.md)
- [CreateGiftCardLoadRequestInput to CreateOrderDiscountPromotionInput](models/index-7.md)
- [CreateOrderEditRequest to CreateReturnPolicyRequest](models/index-8.md)
- [CreateReturnPolicyRequestInput to CreateWorkloadIdentityRequest](models/index-9.md)
- [CreateWorkloadIdentityRequestInput to CustomerTaxExemptionListResponse](models/index-10.md)
- [CustomerTaxExemptionResponse to DeliveryExternalPricingStrategyPreviousAttributes](models/index-11.md)
- [DeliveryFixedPricingStrategy to DeliveryPricingRatePreviousAttributes](models/index-12.md)
- [DeliveryPricingRateRequest to DeliveryRateCallbackActivatedInstalledMerchantsEvent](models/index-13.md)
- [DeliveryRateCallbackActivatedMerchantEvent to DeliveryTransitTimeRuleRequestInput](models/index-14.md)
- [DeliveryWeeklyInterval to ExpandedInvoiceSummary](models/index-15.md)
- [ExpandedInvoiceSummaryPreviousAttributes to GiftCardCustomAmountBounds](models/index-16.md)
- [GiftCardCustomAmountBoundsPreviousAttributes to GiftCardTransactionCreatedInstalledMerchantsEvent](models/index-17.md)
- [GiftCardTransactionCreatedMerchantEvent to InventoryReservationAtRiskInstalledMerchantsEvent](models/index-18.md)
- [InventoryReservationAtRiskMerchantEvent to InvoiceCreditedInstalledMerchantsEvent](models/index-19.md)
- [InvoiceCreditedMerchantEvent to InvoicePaymentTermCalculationDayOfNextMonthPreviousAttributes](models/index-20.md)
- [InvoicePaymentTermCalculationDayOfNextMonthRequestInput to LicenseKeyConfigurationRequestInput](models/index-21.md)
- [LicenseKeyCreatedInstalledMerchantsEvent to MerchantAccountSessionStripeCollectionOptions](models/index-22.md)
- [MerchantAccountSessionStripeComponent to OnboardingAdvanceRequest](models/index-23.md)
- [OnboardingAdvanceRequestInput to OrderInventoryExceptionCreatedInstalledMerchantsEvent](models/index-24.md)
- [OrderInventoryExceptionCreatedMerchantEvent to OrderUpdatedInstalledMerchantsEvent](models/index-25.md)
- [OrderUpdatedMerchantEvent to PaymentClientActionURLPreviousAttributes](models/index-26.md)
- [PaymentCollection to PaymentLinkPaymentPatchRequest](models/index-27.md)
- [PaymentLinkPaymentPatchRequestInput to PayOrderResult](models/index-28.md)
- [Payout to ProductCreatedInstalledMerchantsEvent](models/index-29.md)
- [ProductCreatedMerchantEvent to PromotionRuleGroup](models/index-30.md)
- [PromotionRuleGroupPreviousAttributes to RefundFailedInstalledMerchantsEvent](models/index-31.md)
- [RefundFailedMerchantEvent to ResourceTimeline](models/index-32.md)
- [ResourceTimelineAPIRequestEntry to ReturnPolicyScope](models/index-33.md)
- [ReturnPolicyScopeAll to RiskListItemResponse](models/index-34.md)
- [RiskListListResponse to ShopListingPatchInputProduct](models/index-35.md)
- [ShopListingPatchInputProductInput to SubscriptionDeliveryHoldPreviousAttributes](models/index-36.md)
- [SubscriptionDeliveryMethodCounts to SubscriptionPlanLineItemRequest](models/index-37.md)
- [SubscriptionPlanLineItemRequestInput to TaxConnectionDisclosurePreviousAttributes](models/index-38.md)
- [TaxConnectionResponse to UpdateDeliveryMethodRequest](models/index-39.md)
- [UpdateDeliveryMethodRequestInput to UpdateReturnReasonRequest](models/index-40.md)
- [UpdateReturnReasonRequestInput to WebhookProductVariant](models/index-41.md)
- [WebhookPromotion to WorkloadIdentityResponse](models/index-42.md)

