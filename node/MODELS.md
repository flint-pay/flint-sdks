# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AccessLink to BuyerFulfillment](models/index-1.md)
- [BuyerFulfillmentEvent to BuyerSubscriptionPreview](models/index-2.md)
- [BuyerSubscriptionPreviewResponse to CheckoutSessionWithSecret](models/index-3.md)
- [CheckoutSettings to CreateCustomerSessionRequestInput](models/index-4.md)
- [CreateCustomerVerificationRequest to CreateInventoryTransferRequest](models/index-5.md)
- [CreateInventoryTransferRequestInput to CreateRefundRequestFull](models/index-6.md)
- [CreateRefundRequestFullInput to CreateWebhookDeliveryRequest](models/index-7.md)
- [CreateWebhookDeliveryRequestInput to DeliveryAddressRequestInput](models/index-8.md)
- [DeliveryArrivalEstimate to DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput](models/index-9.md)
- [DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations to DeliveryProfileOriginPolicyInputMethodOriginInput](models/index-10.md)
- [DeliveryProfileOriginPolicyRequest to DeliveryZoneCondition](models/index-11.md)
- [DeliveryZoneConditionInput to FulfillmentCompletedMerchantEvent](models/index-12.md)
- [FulfillmentCreatedInstalledMerchantsEvent to GiftCardFundingSourceStoreCreditInput](models/index-13.md)
- [GiftCardListResponse to InventoryCountListResponse](models/index-14.md)
- [InventoryCountObservationProvenance to InventoryTransferDepartedMerchantEvent](models/index-15.md)
- [InventoryTransferLine to InvoicePartiallyPaidInstalledMerchantsEvent](models/index-16.md)
- [InvoicePartiallyPaidMerchantEvent to InvoiceVoidedMerchantEvent](models/index-17.md)
- [IssueCreditNoteRequest to ModifierSetGroupInline](models/index-18.md)
- [ModifierSetGroupInputExisting to OrderLineItemModifierRequest](models/index-19.md)
- [OrderLineItemModifierRequestInput to PackageTransitionRequestMarkReturned](models/index-20.md)
- [PackageTransitionRequestMarkReturnedInput to PaymentLinkLineItemCustomVariable](models/index-21.md)
- [PaymentLinkLineItemInputBundle to PayoutDestinationResponse](models/index-22.md)
- [PayoutDestinationUpdatedEvent to PromotionRefInputPromotionCodeInput](models/index-23.md)
- [PromotionRefInputPromotionID to ReportResponse](models/index-24.md)
- [ReportSucceeded to ReturnProcessDecision](models/index-25.md)
- [ReturnProcessDecisionInput to RiskPredicateNodeAny](models/index-26.md)
- [RiskPredicateNodeAnyInput to SubscriptionBillingScheduleUpdateInputFlintInput](models/index-27.md)
- [SubscriptionBillingScheduleUpdateRequest to SubscriptionPlanTermsRequestInput](models/index-28.md)
- [SubscriptionPreview to UpdateBundleRequestInput](models/index-29.md)
- [UpdateCategoryRequest to UpdatePromotionRequestInput](models/index-30.md)
- [UpdateRefundRequest to WorkloadIdentityListResponse](models/index-31.md)
- [WorkloadIdentityResponse to WorkloadIdentityResponse](models/index-32.md)

