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
- [CheckoutSubscriptionTermsRequestInput to CreateCreditNoteRequest](models/index-5.md)
- [CreateCreditNoteRequestInput to CreateGiftCardResultResponse](models/index-6.md)
- [CreateInlineModifierGroupRequestInput to CreateOrderTipAmount](models/index-7.md)
- [CreateOrderTipAmountInput to CreateReturnResolutionPreviewRequestCorrectionInput](models/index-8.md)
- [CreateReturnResolutionPreviewRequestStandard to CreditNoteIssueAllocationRequest](models/index-9.md)
- [CreditNoteIssueAllocationRequestInput to DeclinePaymentReviewRequest](models/index-10.md)
- [DeclinePaymentReviewRequestInput to DeliveryLocationSetUpdatedInstalledMerchantsEvent](models/index-11.md)
- [DeliveryLocationSetUpdatedMerchantEvent to DeliveryPricingStrategyCreateRequestInput](models/index-12.md)
- [DeliveryPricingStrategyFixed to DeliveryRateCallbackWithSecretResponse](models/index-13.md)
- [DeliveryRateEvaluationAllocation to DeliveryZoneCreatedInstalledMerchantsEvent](models/index-14.md)
- [DeliveryZoneCreatedMerchantEvent to FeedbackReportingClient](models/index-15.md)
- [FeedbackReportingClientRequestInput to GiftCardFundingSourceGiftCardPurchaseRefundRecoveryPreviousAttributes](models/index-16.md)
- [GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput to InventoryActionRequired](models/index-17.md)
- [InventoryActionRequiredPreviousAttributes to InventoryReservationResult](models/index-18.md)
- [InventoryReservationResultResponse to InvoiceLateFeePolicyFixedRequestInput](models/index-19.md)
- [InvoiceLateFeePolicyPercentage to InvoiceReopenedInstalledMerchantsEvent](models/index-20.md)
- [InvoiceReopenedMerchantEvent to MarkFulfillmentPickedRequestInput](models/index-21.md)
- [MarkFulfillmentPreparingRequestInput to MoneyMovementBlockedReasonPreviousAttributes](models/index-22.md)
- [MoneyMovementHistoryMeta to OrderEditPreviewAddition](models/index-23.md)
- [OrderEditPreviewRequest to OrderTaxExemptionRequest](models/index-24.md)
- [OrderTaxExemptionRequestInput to PartnerEnvironmentGrant](models/index-25.md)
- [PartnerEnvironmentGrantPaymentSplits to PaymentLinkLineItemPatchInputBundleInput](models/index-26.md)
- [PaymentLinkLineItemPatchInputCustomFixed to PaymentSplitUpdatedEvent](models/index-27.md)
- [PaymentVolumeBucket to ProcessExistingReturnRequest](models/index-28.md)
- [ProcessExistingReturnRequestInput to PromotionRefInputPromotionID](models/index-29.md)
- [PromotionRefInputPromotionIDInput to RefundLineItemModifierAllocationPreviousAttributes](models/index-30.md)
- [RefundListResponse to ReturnCompletionBlockerPreviousAttributes](models/index-31.md)
- [ReturnCreatedInstalledMerchantsEvent to ReturnReceiptLineItemRequest](models/index-32.md)
- [ReturnReceiptLineItemRequestInput to RotateGiftCardCodeResult](models/index-33.md)
- [RotateGiftCardCodeResultResponse to SubscriptionBillingScheduleRequest](models/index-34.md)
- [SubscriptionBillingScheduleRequestInput to SubscriptionPaymentRetryCreatedInstalledMerchantsEvent](models/index-35.md)
- [SubscriptionPaymentRetryCreatedMerchantEvent to SubscriptionWindowMetrics](models/index-36.md)
- [TaxBreakdown to TicketWithAdmissionCode](models/index-37.md)
- [TicketWithAdmissionCodeResponse to UpdatePayoutDestinationRequest](models/index-38.md)
- [UpdatePayoutDestinationRequestInput to WebhookDeliveryAction](models/index-39.md)
- [WebhookDeliveryActionResponse to WorkloadIdentityResponse](models/index-40.md)

