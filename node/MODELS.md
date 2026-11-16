# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreateReturnPreviewRequestEligibilityInput](models/index-1.md)
- [BuyerCreateReturnPreviewRequestResolution to BuyerReturnHandoffDestination](models/index-2.md)
- [BuyerReturnHandoffRequirement to CardDetails](models/index-3.md)
- [CardDetailsPreviousAttributes to CheckoutSubscriptionTermsRequest](models/index-4.md)
- [CheckoutSubscriptionTermsRequestInput to CreateCreditNoteAllocationRequestInput](models/index-5.md)
- [CreateCreditNoteRequest to CreateGiftCardResult](models/index-6.md)
- [CreateGiftCardResultResponse to CreateOrderTipInput](models/index-7.md)
- [CreateOrderTipAmount to CreateReturnResolutionPreviewRequestCorrection](models/index-8.md)
- [CreateReturnResolutionPreviewRequestCorrectionInput to CreditNoteCreatedMerchantEvent](models/index-9.md)
- [CreditNoteIssueAllocationRequest to DecideReturnRequestInput](models/index-10.md)
- [DeclinePaymentReviewRequest to DeliveryLocationSetResponse](models/index-11.md)
- [DeliveryLocationSetUpdatedInstalledMerchantsEvent to DeliveryPricingStrategyCreateRequest](models/index-12.md)
- [DeliveryPricingStrategyCreateRequestInput to DeliveryRateCallbackWithSecret](models/index-13.md)
- [DeliveryRateCallbackWithSecretResponse to DeliveryZoneConfigurationRequestInput](models/index-14.md)
- [DeliveryZoneCreatedInstalledMerchantsEvent to FeedbackReport](models/index-15.md)
- [FeedbackReportingClient to GiftCardFundingSourceGiftCardPurchaseRefundRecovery](models/index-16.md)
- [GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes to InlineModifierGroupRequestInput](models/index-17.md)
- [InventoryActionRequired to InventoryReservationResponse](models/index-18.md)
- [InventoryReservationResult to InvoiceLateFeePolicyFixedPreviousAttributes](models/index-19.md)
- [InvoiceLateFeePolicyFixedRequestInput to InvoiceReminderRuleInput](models/index-20.md)
- [InvoiceReopenedInstalledMerchantsEvent to MarkFulfillmentPackedRequestInput](models/index-21.md)
- [MarkFulfillmentPickedRequestInput to MoneyMovementBlockedReason](models/index-22.md)
- [MoneyMovementBlockedReasonPreviousAttributes to OrderEditPreview](models/index-23.md)
- [OrderEditPreviewAddition to OrderTaxExemptionPreviousAttributes](models/index-24.md)
- [OrderTaxExemptionRequest to PartnerAuthorizePreviewResponse](models/index-25.md)
- [PartnerEnvironmentGrant to PaymentLinkLineItemInputVariant](models/index-26.md)
- [PaymentLinkLineItemInputVariantInput to PaymentSplitReversal](models/index-27.md)
- [PaymentSplitReversalPreviousAttributes to PricingAmountsPreviousAttributes](models/index-28.md)
- [ProcessExistingReturnLineItemRequest to PromotionRecurrenceRequestInput](models/index-29.md)
- [PromotionRefInputPromotionCode to RefundLineItemAutomaticRefund](models/index-30.md)
- [RefundLineItemAutomaticRefundPreviousAttributes to ReturnCompletedInstalledMerchantsEvent](models/index-31.md)
- [ReturnCompletedMerchantEvent to ReturnReceiptLineItemInputUnverified](models/index-32.md)
- [ReturnReceiptLineItemInputUnverifiedInput to RiskRuleResponse](models/index-33.md)
- [RotateGiftCardCodeRequest to SubscriptionBillingScheduleInputExternalInput](models/index-34.md)
- [SubscriptionBillingScheduleInputFlint to SubscriptionPastDueMerchantEvent](models/index-35.md)
- [SubscriptionPausedInstalledMerchantsEvent to SubscriptionUpcomingDeliveryHold](models/index-36.md)
- [SubscriptionUpcomingDeliveryHoldPreviousAttributes to TicketUpdatedMerchantEvent](models/index-37.md)
- [TicketVersionRequestInput to UpdatePaymentLinkRequest](models/index-38.md)
- [UpdatePaymentLinkRequestInput to WaiveReturnLineInspectionRequestInput](models/index-39.md)
- [WebhookBundle to WorkloadIdentityResponse](models/index-40.md)

