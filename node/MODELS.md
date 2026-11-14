# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnRequestInput](models/index-1.md)
- [BuyerCreateReturnResolutionPreviewRequest to BuyerReturnReplacementLineItemInputBundle](models/index-2.md)
- [BuyerReturnReplacementLineItemInputBundleInput to ChangeMeSubscriptionPlanRequest](models/index-3.md)
- [ChangeMeSubscriptionPlanRequestInput to ConfigurationVersionRequestInput](models/index-4.md)
- [ConfirmCheckoutSessionCustomerVerificationRequest to CreateDeliveryMethodRequestPickup](models/index-5.md)
- [CreateDeliveryMethodRequestPickupInput to CreateInventoryTransferRequestInput](models/index-6.md)
- [CreateInvoiceIssueRequest to CreatePaymentIntentRequestInput](models/index-7.md)
- [CreatePaymentLinkRequest to CreateShipmentRequest](models/index-8.md)
- [CreateShipmentRequestInput to CustomerAccountSettings](models/index-9.md)
- [CustomerAccountSettingsRequestInput to DeliveryDistanceUnitPrice](models/index-10.md)
- [DeliveryDistanceUnitPriceRequestInput to DeliveryPricingStrategyCreateInputCallbackInput](models/index-11.md)
- [DeliveryPricingStrategyCreateInputCallerSupplied to DeliveryRateEvaluationExecutionLeg](models/index-12.md)
- [DeliveryRateEvaluationMethodOutcome to DiscountPreview](models/index-13.md)
- [DiscountPreviewRequest to FulfillmentLineItemRequestInput](models/index-14.md)
- [FulfillmentListResponse to GiftCardRestriction](models/index-15.md)
- [GiftCardTransaction to InventoryReservationCommittedInstalledMerchantsEvent](models/index-16.md)
- [InventoryReservationCommittedMerchantEvent to InvoiceIssueFailedInstalledMerchantsEvent](models/index-17.md)
- [InvoiceIssueFailedMerchantEvent to InvoiceScheduleAmountSpecificationRemainingBalance](models/index-18.md)
- [InvoiceScheduleAmountSpecificationRemainingBalanceRequestInput to MerchantAccountSessionStripeCollectionOptions](models/index-19.md)
- [MerchantAccountSessionStripeComponent to OnboardingStateResponse](models/index-20.md)
- [OnboardingVerifyEmailRequest to OrderPaymentAttemptResponse](models/index-21.md)
- [OrderPaymentIntentSelection to PartnerAppMerchantReadinessAxis](models/index-22.md)
- [PartnerAppPaymentSplits to PaymentLinkLineItemInputCustomFixed](models/index-23.md)
- [PaymentLinkLineItemInputCustomFixedInput to PayOrderRequestConfirmPaymentIntentsInput](models/index-24.md)
- [PayOrderRequestPay to ProductUpdatedInstalledMerchantsEvent](models/index-25.md)
- [ProductUpdatedMerchantEvent to PurchasedGiftCard](models/index-26.md)
- [QuantityPriceBreak to RepriceDiscountsRequestInput](models/index-27.md)
- [ResendWebhookDeliveryRequest to ReturnPolicyScopeInclude](models/index-28.md)
- [ReturnPolicyScopeIncludeRequestInput to RiskPredicateNodeIsMissing](models/index-29.md)
- [RiskPredicateNodeIsMissingRequestInput to SubscriptionAnalyticsResponse](models/index-30.md)
- [SubscriptionBillingScheduleInputExternal to SubscriptionPaymentSucceededInstalledMerchantsEvent](models/index-31.md)
- [SubscriptionPaymentSucceededMerchantEvent to TaxCalculationCallbackSigningKeyRotationResponse](models/index-32.md)
- [TaxCalculationCallbackTestDelivery to UpdateDeliveryProfileRequestInput](models/index-33.md)
- [UpdateDeliveryRateCallbackRequest to UpdateReturnReplacementLineItemRequestInput](models/index-34.md)
- [UpdateReturnRequestInput to WorkloadIdentityResponse](models/index-35.md)

