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
- [CreateInvoiceIssueRequest to CreatePaymentLinkRequestInput](models/index-7.md)
- [CreatePaymentMethodDomainRequest to CreateShipmentRequestOutbound](models/index-8.md)
- [CreateShipmentRequestOutboundInput to CustomerAddress](models/index-9.md)
- [CustomerAddressListResponse to DeliveryEligibilityExpression](models/index-10.md)
- [DeliveryEligibilityExpressionRequest to DeliveryPricingStrategyCreateInputCallerSuppliedInput](models/index-11.md)
- [DeliveryPricingStrategyCreateInputFixed to DeliveryRateEvaluationMethodOutcomeInput](models/index-12.md)
- [DeliveryRateEvaluationOutcome to DiscountPreviewRequestInput](models/index-13.md)
- [DiscountPreviewResponse to FulfillmentNotification](models/index-14.md)
- [FulfillmentNotificationListResponse to GiftCardTransactionCreatedInstalledMerchantsEvent](models/index-15.md)
- [GiftCardTransactionCreatedMerchantEvent to InventoryReservationConsumedInstalledMerchantsEvent](models/index-16.md)
- [InventoryReservationConsumedMerchantEvent to InvoiceLateFee](models/index-17.md)
- [InvoiceLateFeeAssessedInstalledMerchantsEvent to InvoiceScheduleAmountSpecificationRequestInput](models/index-18.md)
- [InvoiceScheduleDue to MerchantAccountSessionStripeRequirements](models/index-19.md)
- [MerchantBillingBalance to OnboardingVerifyEmailRequestInput](models/index-20.md)
- [OnboardingVerifyEmailResponse to OrderPaymentIntentSelectionInput](models/index-21.md)
- [OrderPaymentIntentSelectionAttached to PartnerAppPaymentSplitsRequestInput](models/index-22.md)
- [PartnerAppPermissionManifestEntry to PaymentLinkLineItemInputCustomVariable](models/index-23.md)
- [PaymentLinkLineItemInputCustomVariableInput to PayOrderRequestPayInput](models/index-24.md)
- [PayOrderRequestResume to ProductVariant](models/index-25.md)
- [ProductVariantArchivedInstalledMerchantsEvent to QuantityPriceBreakRequestInput](models/index-26.md)
- [QuotaDetails to ResendWebhookDeliveryRequestInput](models/index-27.md)
- [ResetDemoSessionRequest to ReturnPolicyScopeRequestInput](models/index-28.md)
- [ReturnProcessDecision to RiskPredicateNodeMoneyComparison](models/index-29.md)
- [RiskPredicateNodeMoneyComparisonRequestInput to SubscriptionBillingScheduleInputExternalInput](models/index-30.md)
- [SubscriptionBillingScheduleInputFlint to SubscriptionPlan](models/index-31.md)
- [SubscriptionPlanChangeCanceledInstalledMerchantsEvent to TaxCalculationCallbackTestDeliveryResponse](models/index-32.md)
- [TaxCalculationCallbackUpdatedEvent to UpdateDeliveryRateCallbackRequestInput](models/index-33.md)
- [UpdateDeliveryZoneRequest to UpdateReturnResolutionAdjustmentRequest](models/index-34.md)
- [UpdateReturnResolutionAdjustmentRequestInput to WorkloadIdentityClaimConditionRequestInput](models/index-35.md)
- [WorkloadIdentityCreator to WorkloadIdentityResponse](models/index-36.md)

