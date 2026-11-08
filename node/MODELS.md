# Flint Public API models

[API reference](REFERENCE.md) · [Runtime guide](RUNTIME.md)

Fields describe the API's declared shape. Inputs omit read-only fields; responses omit write-only fields and preserve unknown fields and enum values. Request enums are closed unions; response enums accept unknown strings. Input types use the Input suffix.

Integer counters such as version use number with a safe range of ±(2^53 − 1); values outside that range fail without rounding. Integers inside exact components (Money) remain exact strings (TypeScript `${bigint}`; inputs also accept bigint). Money amounts stay exact strings when their component is listed. Sum money amounts with `BigInt(a.amount) + BigInt(b.amount)`. Decimal fields use exact numeric strings. Use each field's declared units.

Schema defaults are metadata; clients do not apply them. Field definitions apply to all variants. Rules under each condition specify presence and additional constraints. Composed alternative groups apply together: satisfy a variant from each numbered group.

## Index

- [AcceptFulfillmentRequestInput to BuyerCreditNoteListResponse](models/index-1.md)
- [BuyerCreditNoteResponse to BuyerSavePaymentMethodResponse](models/index-2.md)
- [BuyerSelectableOrderPaymentIntent to CheckoutCustomTextConfig](models/index-3.md)
- [CheckoutCustomTextWriteConfigInput to CreateAPIKeyRequest](models/index-4.md)
- [CreateAPIKeyRequestInput to CreateFeedbackReportNarrative](models/index-5.md)
- [CreateFeedbackReportNarrativeInput to CreateModifierSetRequest](models/index-6.md)
- [CreateModifierSetRequestInput to CreateReturnPreviewDataEligibility](models/index-7.md)
- [CreateReturnPreviewDataResolution to CreditNoteAllocationResultResponse](models/index-8.md)
- [CreditNoteAllocationReversedInstalledMerchantsEvent to DeliveryAvailabilityRequestInput](models/index-9.md)
- [DeliveryBlackoutInterval to DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput](models/index-10.md)
- [DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations to DeliveryProfileOriginPolicyInputMethodOriginInput](models/index-11.md)
- [DeliveryProfileOriginPolicyRequest to DeliveryZoneConditionRequestInput](models/index-12.md)
- [DeliveryZoneConfiguration to FraudWarningCreatedInstalledMerchantsEvent](models/index-13.md)
- [FraudWarningCreatedMerchantEvent to GiftCardNotificationRecipientInput](models/index-14.md)
- [GiftCardNotificationResponse to InventoryLevelShortageDetectedInstalledMerchantsEvent](models/index-15.md)
- [InventoryLevelShortageDetectedMerchantEvent to InvoiceCollectionBlockResolvedMerchantEvent](models/index-16.md)
- [InvoiceCollectionBuyerInitiated to InvoicePaymentTermCalculationDayOfNextMonthRequestInput](models/index-17.md)
- [InvoicePaymentTermCalculationDaysAfterMonthEnd to LocationResponse](models/index-18.md)
- [LookupEmailPreferencesRequest to OAuthTokenRequestInput](models/index-19.md)
- [OAuthTokenRequestAuthorizationCode to OrderLineItemTaxRequestInput](models/index-20.md)
- [OrderLineSubscriptionOfferDiscount to PartnerAppMerchantReadinessAxis](models/index-21.md)
- [PartnerAppPermissionManifestEntry to PaymentLinkLineItemPatchInputCustomFixed](models/index-22.md)
- [PaymentLinkLineItemPatchInputCustomFixedInput to PayoutDestinationResponse](models/index-23.md)
- [PayoutDestinationUpdatedInstalledMerchantsEvent to PromotionCombinesWith](models/index-24.md)
- [PromotionCombinesWithPatch to RefundTaxBreakdownRefundIn](models/index-25.md)
- [RefundTaxBreakdownRefundInInput to ReturnHandoffRequirement](models/index-26.md)
- [ReturnInspection to ReturnUnverifiedItem](models/index-27.md)
- [ReturnUnverifiedItemInput to SinglePackageCreateRequest](models/index-28.md)
- [SinglePackageCreateRequestInput to SubscriptionOfferTermsRequest](models/index-29.md)
- [SubscriptionOfferTermsRequestInput to TaxCalculationCallbackConfigurationPatchRequestInput](models/index-30.md)
- [TaxCalculationCallbackConfigurationRequestInput to UpdateDeliveryFulfillmentDetailsInput](models/index-31.md)
- [UpdateDeliveryLocationSetRequest to UpdateReturnReplacementLineItemInputCustomInput](models/index-32.md)
- [UpdateReturnReplacementLineItemInputVariant to WorkloadIdentityResponse](models/index-33.md)

