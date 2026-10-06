import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from './response.js';
import { requestInput as _sdkRequestInput } from './request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from './runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from './runtime.js';
import { resource, webhook, modelCodec as _sdkModelCodec } from './descriptors/root.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
const r0 = () => resource("analytics");
const r1 = () => resource("apiKeys");
const r2 = () => resource("balanceTransactions");
const r3 = () => resource("balances");
const r4 = () => resource("bundles");
const r5 = () => resource("capabilities");
const r6 = () => resource("categories");
const r7 = () => resource("checkoutSessions");
const r8 = () => resource("creditNotes");
const r9 = () => resource("customerDeletionRequests");
const r10 = () => resource("customerSessions");
const r11 = () => resource("customers");
const r12 = () => resource("deliveryLocationSets");
const r13 = () => resource("deliveryMethods");
const r14 = () => resource("deliveryPreviews");
const r15 = () => resource("deliveryProfiles");
const r16 = () => resource("deliveryQuotes");
const r17 = () => resource("deliveryRateCallbacks");
const r18 = () => resource("deliveryRevocations");
const r19 = () => resource("deliveryZones");
const r20 = () => resource("demoSessions");
const r21 = () => resource("developer");
const r22 = () => resource("devices");
const r23 = () => resource("discountPreviews");
const r24 = () => resource("disputes");
const r25 = () => resource("feedbackReports");
const r26 = () => resource("fraudWarnings");
const r27 = () => resource("fulfillmentEvents");
const r28 = () => resource("fulfillmentNotifications");
const r29 = () => resource("fulfillments");
const r30 = () => resource("giftCardAdjustments");
const r31 = () => resource("giftCardCashOuts");
const r32 = () => resource("giftCardFundingDispositions");
const r33 = () => resource("giftCardLoads");
const r34 = () => resource("giftCardNotifications");
const r35 = () => resource("giftCardRedemptions");
const r36 = () => resource("giftCardTransactions");
const r37 = () => resource("giftCards");
const r38 = () => resource("inventoryAdjustments");
const r39 = () => resource("inventoryAllocationPolicies");
const r40 = () => resource("inventoryCounts");
const r41 = () => resource("inventoryItems");
const r42 = () => resource("inventoryLevels");
const r43 = () => resource("inventoryMovements");
const r44 = () => resource("inventoryReceipts");
const r45 = () => resource("inventoryReservations");
const r46 = () => resource("inventoryTransfers");
const r47 = () => resource("invoicePaymentTerms");
const r48 = () => resource("invoices");
const r49 = () => resource("locations");
const r50 = () => resource("me");
const r51 = () => resource("merchantAccountSessions");
const r52 = () => resource("merchantBillingBalances");
const r53 = () => resource("merchantSubscriptionInvoices");
const r54 = () => resource("merchants");
const r55 = () => resource("modifierGroups");
const r56 = () => resource("modifierSets");
const r57 = () => resource("oauth");
const r58 = () => resource("onboarding");
const r59 = () => resource("orders");
const r60 = () => resource("organizations");
const r61 = () => resource("packages");
const r62 = () => resource("paymentIntents");
const r63 = () => resource("paymentLinks");
const r64 = () => resource("paymentMethodDomains");
const r65 = () => resource("paymentMethods");
const r66 = () => resource("payoutSettings");
const r67 = () => resource("payouts");
const r68 = () => resource("products");
const r69 = () => resource("promotions");
const r70 = () => resource("refunds");
const r71 = () => resource("reportDownloads");
const r72 = () => resource("reports");
const r73 = () => resource("returnDispositions");
const r74 = () => resource("returnInspections");
const r75 = () => resource("returnPolicies");
const r76 = () => resource("returnPreviews");
const r77 = () => resource("returnReasons");
const r78 = () => resource("returnReceipts");
const r79 = () => resource("returnResolutions");
const r80 = () => resource("returns");
const r81 = () => resource("reviews");
const r82 = () => resource("riskLists");
const r83 = () => resource("riskPreviews");
const r84 = () => resource("riskRules");
const r85 = () => resource("settings");
const r86 = () => resource("shipments");
const r87 = () => resource("specification");
const r88 = () => resource("subscriptionPlans");
const r89 = () => resource("subscriptions");
const r90 = () => resource("webhookDeliveries");
const r91 = () => resource("webhookEndpoints");
const r92 = () => resource("webhookEventTypes");
const r93 = () => resource("webhookEvents");
import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';

const _sdkDescriptors = new DescriptorSource(settings, {["getAnalyticsOverview"]:r0,["getPaymentVolumeTimeseries"]:r0,["getSubscriptionAnalytics"]:r0,["createAPIKey"]:r1,["getAPIKey"]:r1,["listAPIKeys"]:r1,["revokeAPIKey"]:r1,["updateAPIKey"]:r1,["getBalanceTransaction"]:r2,["listBalanceTransactions"]:r2,["listBalances"]:r3,["createBundle"]:r4,["deleteBundle"]:r4,["getBundle"]:r4,["listBundleComponents"]:r4,["listBundles"]:r4,["updateBundle"]:r4,["listCapabilities"]:r5,["createCategory"]:r6,["deleteCategory"]:r6,["getCategory"]:r6,["listCategories"]:r6,["updateCategory"]:r6,["closeCheckoutSession"]:r7,["confirmCheckoutSessionCustomerVerification"]:r7,["createCheckoutSession"]:r7,["createCheckoutSessionCustomerVerification"]:r7,["createCheckoutSessionDeliveryQuote"]:r7,["createCheckoutSessionDeliverySelection"]:r7,["deleteCheckoutSessionCurrentDeliverySelection"]:r7,["getCheckoutSession"]:r7,["getCheckoutSessionCurrentDeliverySelection"]:r7,["getCheckoutSessionDeliveryQuote"]:r7,["getCheckoutSessionDeliverySelectionHistory"]:r7,["listCheckoutSessions"]:r7,["updateCheckoutSession"]:r7,["createCreditNote"]:r8,["createCreditNoteAllocation"]:r8,["createCreditNoteRefund"]:r8,["getCreditNote"]:r8,["getCreditNoteAllocation"]:r8,["getCreditNotePDF"]:r8,["issueCreditNote"]:r8,["listCreditNoteAllocations"]:r8,["listCreditNoteRefunds"]:r8,["listCreditNotes"]:r8,["reverseCreditNoteAllocation"]:r8,["updateCreditNote"]:r8,["voidCreditNote"]:r8,["listCustomerDeletionRequests"]:r9,["resolveCustomerDeletionRequest"]:r9,["createCustomerSession"]:r10,["refreshCustomerSession"]:r10,["revokeCustomerSession"]:r10,["createCustomer"]:r11,["createCustomerAddress"]:r11,["createCustomerDeletionRequest"]:r11,["deleteCustomerAddress"]:r11,["getCustomer"]:r11,["getCustomerAddress"]:r11,["getCustomerDeletionRequest"]:r11,["listCustomerAddresses"]:r11,["listCustomers"]:r11,["revokeCustomerSessions"]:r11,["setDefaultCustomerAddress"]:r11,["updateCustomer"]:r11,["updateCustomerAddress"]:r11,["createDeliveryLocationSet"]:r12,["deleteDeliveryLocationSet"]:r12,["getDeliveryLocationSet"]:r12,["listDeliveryLocationSets"]:r12,["updateDeliveryLocationSet"]:r12,["createDeliveryMethod"]:r13,["deleteDeliveryMethod"]:r13,["getDeliveryMethod"]:r13,["listDeliveryMethods"]:r13,["updateDeliveryMethod"]:r13,["createDeliveryPreview"]:r14,["assignToUnconfiguredDeliveryProfile"]:r15,["createDeliveryProfile"]:r15,["deleteDeliveryProfile"]:r15,["getDeliveryProfile"]:r15,["listDeliveryProfiles"]:r15,["updateDeliveryProfile"]:r15,["listDeliveryQuotes"]:r16,["checkDeliveryRateCallbackConnection"]:r17,["createDeliveryRateCallback"]:r17,["createDeliveryRateCallbackTestDelivery"]:r17,["deleteDeliveryRateCallback"]:r17,["getDeliveryRateCallback"]:r17,["listDeliveryRateCallbacks"]:r17,["rotateDeliveryRateCallbackSigningKey"]:r17,["updateDeliveryRateCallback"]:r17,["getDeliveryRevocation"]:r18,["revokeDeliveryDependency"]:r18,["createDeliveryZone"]:r19,["deleteDeliveryZone"]:r19,["getDeliveryZone"]:r19,["listDeliveryZones"]:r19,["updateDeliveryZone"]:r19,["createDemoSession"]:r20,["resetDemoSession"]:r20,["createDeveloperPartnerApp"]:r21,["createDeveloperSandbox"]:r21,["deleteDeveloperSandbox"]:r21,["getCurrentAPIKeyRequestLog"]:r21,["getDeveloperAuthContext"]:r21,["getDeveloperPartnerApp"]:r21,["getDeveloperPartnerAppInstall"]:r21,["getDeveloperSandbox"]:r21,["getResourceTimeline"]:r21,["issueDeveloperSandboxTestKey"]:r21,["listCurrentAPIKeyRequestLogs"]:r21,["listDeveloperPartnerAppInstalls"]:r21,["listDeveloperPartnerApps"]:r21,["listDeveloperSandboxes"]:r21,["resetDeveloperSandbox"]:r21,["revokeDeveloperPartnerAppInstall"]:r21,["revokeDeveloperPartnerEnvironmentGrant"]:r21,["rotateDeveloperPartnerAppSecret"]:r21,["updateDeveloperPartnerApp"]:r21,["createDevice"]:r22,["deleteDevice"]:r22,["getDevice"]:r22,["listDevices"]:r22,["updateDevice"]:r22,["createDiscountPreview"]:r23,["getDispute"]:r24,["listDisputes"]:r24,["createFeedbackReport"]:r25,["getFeedbackReport"]:r25,["listFeedbackReports"]:r25,["getFraudWarning"]:r26,["listFraudWarnings"]:r26,["getFulfillmentEvent"]:r27,["listFulfillmentEvents"]:r27,["getFulfillmentNotification"]:r28,["listFulfillmentNotifications"]:r28,["createFulfillmentEvent"]:r29,["createShipment"]:r29,["getFulfillment"]:r29,["listFulfillments"]:r29,["transitionFulfillment"]:r29,["updateFulfillment"]:r29,["createGiftCardAdjustment"]:r30,["createGiftCardCashOut"]:r31,["createGiftCardFundingDisposition"]:r32,["createGiftCardLoad"]:r33,["getGiftCardLoad"]:r33,["listGiftCardLoads"]:r33,["cancelGiftCardNotification"]:r34,["createGiftCardNotification"]:r34,["getGiftCardNotification"]:r34,["listGiftCardNotifications"]:r34,["cancelGiftCardRedemption"]:r35,["captureGiftCardRedemption"]:r35,["createGiftCardRedemption"]:r35,["getGiftCardRedemption"]:r35,["listGiftCardRedemptions"]:r35,["listGiftCardTransactions"]:r36,["createGiftCard"]:r37,["getGiftCard"]:r37,["listGiftCards"]:r37,["lookupGiftCard"]:r37,["rotateGiftCardCode"]:r37,["transitionGiftCard"]:r37,["updateGiftCard"]:r37,["createInventoryAdjustment"]:r38,["listInventoryAdjustments"]:r38,["createInventoryAllocationPolicy"]:r39,["deleteInventoryAllocationPolicy"]:r39,["getInventoryAllocationPolicy"]:r39,["listInventoryAllocationPolicies"]:r39,["updateInventoryAllocationPolicy"]:r39,["applyInventoryCount"]:r40,["cancelInventoryCount"]:r40,["createInventoryCount"]:r40,["listInventoryCounts"]:r40,["updateInventoryCount"]:r40,["createInventoryItem"]:r41,["deleteInventoryItem"]:r41,["getInventoryItem"]:r41,["listInventoryItems"]:r41,["updateInventoryItem"]:r41,["listInventoryLevels"]:r42,["updateInventoryLevel"]:r42,["listInventoryMovements"]:r43,["createInventoryReceipt"]:r44,["listInventoryReceipts"]:r44,["commitInventoryReservation"]:r45,["consumeInventoryReservation"]:r45,["createInventoryReservation"]:r45,["listInventoryReservations"]:r45,["releaseInventoryReservation"]:r45,["createInventoryTransfer"]:r46,["listInventoryTransfers"]:r46,["transitionInventoryTransfer"]:r46,["updateInventoryTransfer"]:r46,["createInvoicePaymentTerm"]:r47,["deleteInvoicePaymentTerm"]:r47,["getInvoicePaymentTerm"]:r47,["listInvoicePaymentTerms"]:r47,["updateInvoicePaymentTerm"]:r47,["assessInvoiceLateFee"]:r48,["cancelInvoicePaymentAttempt"]:r48,["collectInvoice"]:r48,["createInvoice"]:r48,["getInvoice"]:r48,["getInvoicePaymentAttempt"]:r48,["getInvoicePDF"]:r48,["getOrCreateInvoiceCheckoutSession"]:r48,["issueInvoice"]:r48,["listInvoiceActivities"]:r48,["listInvoiceDeliveryAttempts"]:r48,["listInvoicePaymentAttempts"]:r48,["listInvoices"]:r48,["markInvoiceUncollectible"]:r48,["recordManualInvoicePayment"]:r48,["regenerateInvoicePublicLink"]:r48,["reverseManualInvoicePayment"]:r48,["sendInvoiceReminder"]:r48,["updateInvoice"]:r48,["voidInvoice"]:r48,["waiveInvoiceLateFee"]:r48,["createLocation"]:r49,["deleteLocation"]:r49,["getLocation"]:r49,["listLocations"]:r49,["publishLocationGeography"]:r49,["updateLocation"]:r49,["updateLocationInventory"]:r49,["cancelMeReturn"]:r50,["cancelMeSubscription"]:r50,["changeMeSubscriptionPaymentMethod"]:r50,["confirmMeEmailChangeRequest"]:r50,["createMeAddress"]:r50,["createMeDeletionRequest"]:r50,["createMeEmailChangeRequest"]:r50,["createMeFlintWalletStoreSetup"]:r50,["createMeInvoiceCheckoutSession"]:r50,["createMeReturn"]:r50,["createMeReturnPreview"]:r50,["createMeReturnResolutionCheckoutSession"]:r50,["createMeSubscriptionPaymentRetry"]:r50,["deleteMeAddress"]:r50,["getMe"]:r50,["getMeAddress"]:r50,["getMeCreditNote"]:r50,["getMeCreditNotePDF"]:r50,["getMeDeletionRequest"]:r50,["getMeEmailPreferences"]:r50,["getMeGiftCard"]:r50,["getMeInvoice"]:r50,["getMeInvoicePDF"]:r50,["getMeOrder"]:r50,["getMePaymentMethod"]:r50,["getMeReturn"]:r50,["getMeSubscription"]:r50,["getMeSubscriptionPaymentRetry"]:r50,["listMeAddresses"]:r50,["listMeCreditNotes"]:r50,["listMeDeletionRequests"]:r50,["listMeFlintWalletPaymentMethods"]:r50,["listMeFulfillments"]:r50,["listMeGiftCards"]:r50,["listMeGiftCardTransactions"]:r50,["listMeInvoices"]:r50,["listMeOrderActivities"]:r50,["listMeOrders"]:r50,["listMePackages"]:r50,["listMePaymentMethods"]:r50,["listMePayments"]:r50,["listMeRefunds"]:r50,["listMeReturns"]:r50,["listMeShipments"]:r50,["listMeSubscriptions"]:r50,["pauseMeSubscription"]:r50,["reactivateMeSubscription"]:r50,["removeMeGiftCard"]:r50,["removeMePaymentMethod"]:r50,["resumeMeSubscription"]:r50,["saveMeGiftCard"]:r50,["saveMePaymentMethod"]:r50,["sendMeOrderReceipt"]:r50,["setDefaultMeAddress"]:r50,["setDefaultMePaymentMethod"]:r50,["updateMe"]:r50,["updateMeAddress"]:r50,["updateMeEmailPreferences"]:r50,["createMerchantAccountSession"]:r51,["refreshMerchantAccountSession"]:r51,["getMerchantBillingBalance"]:r52,["listMerchantBillingBalances"]:r52,["getMerchantSubscriptionInvoice"]:r53,["listMerchantSubscriptionInvoices"]:r53,["getMerchant"]:r54,["updateMerchant"]:r54,["createModifierGroup"]:r55,["deleteModifierGroup"]:r55,["getModifierGroup"]:r55,["listModifierGroups"]:r55,["updateModifierGroup"]:r55,["createModifierSet"]:r56,["deleteModifierSet"]:r56,["getModifierSet"]:r56,["listModifierSets"]:r56,["updateModifierSet"]:r56,["authorizePartnerInstall"]:r57,["exchangePartnerInstallToken"]:r57,["previewPartnerInstallAuthorization"]:r57,["advanceOnboarding"]:r58,["createOnboardingAPIKey"]:r58,["getOnboardingState"]:r58,["startOnboarding"]:r58,["verifyOnboardingEmail"]:r58,["addOrderCharge"]:r59,["addOrderLineItems"]:r59,["applyOrderDiscount"]:r59,["applyOrderGiftCard"]:r59,["cancelOrderPayment"]:r59,["cancelOrderPaymentAttempt"]:r59,["captureOrderPayment"]:r59,["closeOrder"]:r59,["createFulfillment"]:r59,["createOrder"]:r59,["createOrderAccessLink"]:r59,["createOrderPaymentIntent"]:r59,["deleteOrderCharge"]:r59,["deleteOrderLineItem"]:r59,["getOrder"]:r59,["getOrderCurrentDeliverySelection"]:r59,["getOrderPaymentAttempt"]:r59,["listOrderActivities"]:r59,["listOrderPaymentAttempts"]:r59,["listOrders"]:r59,["payOrder"]:r59,["removeOrderDiscounts"]:r59,["removeOrderGiftCard"]:r59,["repriceOrderDiscounts"]:r59,["resolveOrderInventoryException"]:r59,["sendOrderReceipt"]:r59,["updateOrder"]:r59,["updateOrderCharge"]:r59,["updateOrderLineItem"]:r59,["createOrganization"]:r60,["deleteOrganization"]:r60,["getOrganization"]:r60,["grantOrganizationMembership"]:r60,["listOrganizationMemberships"]:r60,["listOrganizations"]:r60,["revokeOrganizationMembership"]:r60,["transferOrganizationOwnership"]:r60,["updateOrganization"]:r60,["createPackageItem"]:r61,["deletePackageItem"]:r61,["getPackage"]:r61,["getPackageItem"]:r61,["listPackageItems"]:r61,["listPackages"]:r61,["transitionPackage"]:r61,["updatePackage"]:r61,["updatePackageItem"]:r61,["voidPackage"]:r61,["cancelPaymentIntent"]:r62,["capturePaymentIntent"]:r62,["confirmPaymentIntent"]:r62,["createPaymentIntent"]:r62,["getPaymentIntent"]:r62,["listPaymentIntents"]:r62,["updatePaymentIntent"]:r62,["createPaymentLink"]:r63,["getPaymentLink"]:r63,["getPaymentLinkPublic"]:r63,["listPaymentLinks"]:r63,["resolvePaymentLink"]:r63,["updatePaymentLink"]:r63,["createPaymentMethodDomain"]:r64,["getPaymentMethodDomain"]:r64,["listPaymentMethodDomains"]:r64,["updatePaymentMethodDomain"]:r64,["getPaymentMethod"]:r65,["listPaymentMethods"]:r65,["removePaymentMethod"]:r65,["savePaymentMethod"]:r65,["setDefaultPaymentMethod"]:r65,["deletePayoutDestination"]:r66,["getPayoutDestination"]:r66,["getPayoutSettings"]:r66,["listPayoutDestinations"]:r66,["updatePayoutDestination"]:r66,["updatePayoutSettings"]:r66,["cancelPayout"]:r67,["createPayout"]:r67,["getPayout"]:r67,["listPayoutEntries"]:r67,["listPayouts"]:r67,["createProduct"]:r68,["createProductVariant"]:r68,["deleteProduct"]:r68,["deleteProductVariant"]:r68,["getProduct"]:r68,["getProductOption"]:r68,["getProductVariant"]:r68,["listProductOptions"]:r68,["listProducts"]:r68,["listProductVariants"]:r68,["updateProduct"]:r68,["updateProductVariant"]:r68,["createPromotion"]:r69,["createPromotionCode"]:r69,["deletePromotion"]:r69,["deletePromotionCode"]:r69,["getPromotion"]:r69,["listPromotionCodes"]:r69,["listPromotions"]:r69,["updatePromotion"]:r69,["updatePromotionCode"]:r69,["createRefund"]:r70,["getRefund"]:r70,["listRefunds"]:r70,["updateRefund"]:r70,["getReportDownload"]:r71,["createReport"]:r72,["getReport"]:r72,["listReports"]:r72,["cancelReturnDisposition"]:r73,["getReturnDisposition"]:r73,["listReturnDispositions"]:r73,["retryReturnDisposition"]:r73,["decideReturnInspectionLineItem"]:r74,["getReturnInspection"]:r74,["listReturnInspections"]:r74,["createReturnPolicy"]:r75,["deleteReturnPolicy"]:r75,["getReturnPolicy"]:r75,["getReturnPolicyRevision"]:r75,["listReturnPolicies"]:r75,["listReturnPolicyRevisions"]:r75,["publishReturnPolicyRevision"]:r75,["updateReturnPolicy"]:r75,["createReturnPreview"]:r76,["createReturnReason"]:r77,["deleteReturnReason"]:r77,["getReturnReason"]:r77,["listReturnReasons"]:r77,["updateReturnReason"]:r77,["getReturnReceipt"]:r78,["listReturnReceipts"]:r78,["verifyReturnReceiptLineItem"]:r78,["cancelReturnResolution"]:r79,["confirmReturnResolution"]:r79,["getOrCreateReturnResolutionCheckoutSession"]:r79,["getReturnResolution"]:r79,["listReturnResolutions"]:r79,["releaseReturnResolution"]:r79,["retryReturnResolution"]:r79,["updateReturnResolution"]:r79,["addReturnLineItem"]:r80,["cancelReturn"]:r80,["cancelReturnLineItem"]:r80,["completeReturn"]:r80,["createReturn"]:r80,["createReturnAccessLink"]:r80,["createReturnDisposition"]:r80,["createReturnInspection"]:r80,["createReturnReceipt"]:r80,["createReturnResolution"]:r80,["decideReturn"]:r80,["deleteReturnLineItem"]:r80,["getReturn"]:r80,["getReturnLineItem"]:r80,["listReturnLineItems"]:r80,["listReturns"]:r80,["processExistingReturn"]:r80,["reopenReturn"]:r80,["updateReturn"]:r80,["updateReturnLineItem"]:r80,["waiveReturnLineInspection"]:r80,["approveReview"]:r81,["declineReview"]:r81,["getReview"]:r81,["listReviews"]:r81,["addRiskListItems"]:r82,["createRiskList"]:r82,["deleteRiskList"]:r82,["deleteRiskListItem"]:r82,["getRiskList"]:r82,["getRiskListItem"]:r82,["listRiskListItems"]:r82,["listRiskLists"]:r82,["updateRiskList"]:r82,["createRiskPreview"]:r83,["createRiskRule"]:r84,["deleteRiskRule"]:r84,["getRiskRule"]:r84,["getRiskRuleAttributeRegistry"]:r84,["listRiskRules"]:r84,["updateRiskRule"]:r84,["getEffectiveSettings"]:r85,["getSettings"]:r85,["updateSettings"]:r85,["createPackage"]:r86,["getShipment"]:r86,["listShipments"]:r86,["updateShipment"]:r86,["voidShipment"]:r86,["getOpenAPISpec"]:r87,["createSubscriptionPlan"]:r88,["deleteSubscriptionPlan"]:r88,["getSubscriptionPlan"]:r88,["listSubscriptionPlans"]:r88,["updateSubscriptionPlan"]:r88,["cancelSubscription"]:r89,["changeSubscriptionPaymentMethod"]:r89,["createSubscription"]:r89,["createSubscriptionAccessLink"]:r89,["createSubscriptionPaymentRetry"]:r89,["getSubscription"]:r89,["getSubscriptionPaymentRetry"]:r89,["listSubscriptionPaymentRetries"]:r89,["listSubscriptions"]:r89,["pauseSubscription"]:r89,["reactivateSubscription"]:r89,["resumeSubscription"]:r89,["skipSubscriptionCycle"]:r89,["updateSubscription"]:r89,["updateSubscriptionBillingSchedule"]:r89,["getWebhookDelivery"]:r90,["listWebhookDeliveryAttempts"]:r90,["resendWebhookDelivery"]:r90,["createWebhookEndpoint"]:r91,["createWebhookTestEvent"]:r91,["deleteWebhookEndpoint"]:r91,["getWebhookEndpoint"]:r91,["listWebhookEndpoints"]:r91,["rotateWebhookSecret"]:r91,["updateWebhookEndpoint"]:r91,["listWebhookEventTypes"]:r92,["getWebhookEvent"]:r93,["listWebhookDeliveries"]:r93,["listWebhookEvents"]:r93,["streamWebhookEvents"]:r93}, webhook);

export class Client {
  #runtime;
  constructor(options = {}) {
    this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
    this.analytics = Object.freeze({
      getOverview: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getOverviewWithResponse: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentVolumeTimeseries: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentVolumeTimeseriesWithResponse: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "include_previous_period",
  "currency",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSubscription: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSubscriptionWithResponse: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "range",
  "timezone",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
    this.apiKeys = Object.freeze({
      create: async (params, options) => this.#runtime.request("createAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (api_key_id, params, options) => this.#runtime.request("getAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (api_key_id, params, options) => this.#runtime.request("getAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      revoke: async (api_key_id, params, options) => this.#runtime.request("revokeAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeWithResponse: async (api_key_id, params, options) => this.#runtime.request("revokeAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (api_key_id, params, options) => this.#runtime.request("updateAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (api_key_id, params, options) => this.#runtime.request("updateAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.balanceTransactions = Object.freeze({
      get: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "type",
  "related_object_type",
  "related_object_id",
  "status",
  "created_after",
  "created_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.balances = Object.freeze({
      list: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
    this.bundles = Object.freeze({
      create: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listComponents: async (bundle_id, params, options) => this.#runtime.request("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listComponentsWithResponse: async (bundle_id, params, options) => this.#runtime.request("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listComponentsPages: (bundle_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options), []),
      listComponentsPagesWithResponse: (bundle_id, params, options) => _sdkResponsePages(this.#runtime.pages("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options)),
      listComponentsItems: (bundle_id, params, options) => this.#runtime.items("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listBundles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "sku",
  "query",
  "category_handle",
  "status",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options),
      update: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.capabilities = Object.freeze({
      list: async (params, options) => this.#runtime.request("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCapabilities", _sdkRequestInput([], [], [
  "domain",
  "capability",
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.categories = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options),
      update: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.checkoutSessions = Object.freeze({
      closeSession: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      closeSessionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      confirmCustomerVerification: async (checkout_session_id, customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "customer_verification_id"
], [checkout_session_id, customer_verification_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      confirmCustomerVerificationWithResponse: async (checkout_session_id, customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "customer_verification_id"
], [checkout_session_id, customer_verification_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createCustomerVerification: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createCustomerVerificationWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createDeliveryQuote: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createDeliveryQuoteWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expected_delivery_selection_id",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteCurrentDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expected_delivery_selection_id",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getCurrentDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getDeliveryQuote: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getDeliveryQuoteWithResponse: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getDeliverySelectionHistory: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelectionHistory", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getDeliverySelectionHistoryWithResponse: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelectionHistory", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "origin",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "origin",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "origin",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "origin",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "origin",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expires_after",
  "expires_before",
  "Flint-Version"
], false, false, params), options),
      update: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.creditNotes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAllocation: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createAllocationWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createRefund: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createRefundWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPDF: async (credit_note_id, params, options) => this.#runtime.request("getCreditNotePDF", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Version"
], false, false, params), options),
      issue: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      issueWithResponse: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      listAllocations: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAllocationsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAllocationsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options), []),
      listAllocationsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options)),
      listAllocationsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options),
      listRefunds: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listRefundsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listRefundsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options), []),
      listRefundsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options)),
      listRefundsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "invoice_id",
  "external_reference_id",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options),
      reverseAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      reverseAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      update: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      voidResourceWithResponse: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
    });
    this.customerDeletionRequests = Object.freeze({
      list: async (params, options) => this.#runtime.request("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      resolve: async (customer_deletion_request_id, params, options) => this.#runtime.request("resolveCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      resolveWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("resolveCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.customerSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      revoke: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeWithResponse: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
    this.customers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAddress: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createAddressWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (customer_id, params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createDeletionRequestWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      deleteAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getDeletionRequest: async (customer_id, customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_id",
  "customer_deletion_request_id"
], [customer_id, customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getDeletionRequestWithResponse: async (customer_id, customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_id",
  "customer_deletion_request_id"
], [customer_id, customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddresses: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAddressesWithResponse: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (customer_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listAddressesPagesWithResponse: (customer_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listAddressesItems: (customer_id, params, options) => this.#runtime.items("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCustomers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options),
      revokeSessions: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeSessionsWithResponse: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      setDefaultAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryLocationSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options),
      update: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id",
  "Flint-Version"
], false, false, params), options),
      update: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryPreviews = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(_sdkResponse),
    });
    this.deliveryProfiles = Object.freeze({
      assignToUnconfigured: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      assignToUnconfiguredWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "resolution_mode",
  "include_diagnostics",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "resolution_mode",
  "include_diagnostics",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "resolution_mode",
  "include_diagnostics",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "resolution_mode",
  "include_diagnostics",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "resolution_mode",
  "include_diagnostics",
  "Flint-Version"
], false, false, params), options),
      update: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryQuotes = Object.freeze({
      list: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
    });
    this.deliveryRateCallbacks = Object.freeze({
      checkConnection: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      checkConnectionWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createTestDelivery: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createTestDeliveryWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      remove: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options),
      rotateSigningKey: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      rotateSigningKeyWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryRevocations = Object.freeze({
      get: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      revokeDeliveryDependency: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeDeliveryDependencyWithResponse: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryZones = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Version"
], false, false, params), options),
      update: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.demoSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reset: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      resetWithResponse: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.developer = Object.freeze({
      createPartnerApp: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createPartnerAppWithResponse: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createSandbox: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createSandboxWithResponse: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteSandbox: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCurrentAPIKeyRequestLog: async (api_request_log_id, params, options) => this.#runtime.request("getCurrentAPIKeyRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getCurrentAPIKeyRequestLogWithResponse: async (api_request_log_id, params, options) => this.#runtime.request("getCurrentAPIKeyRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAuthContext: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAuthContextWithResponse: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPartnerApp: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSandbox: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getResourceTimeline: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getResourceTimelineWithResponse: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      issueSandboxTestKey: async (sandbox_id, params, options) => this.#runtime.request("issueDeveloperSandboxTestKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      issueSandboxTestKeyWithResponse: async (sandbox_id, params, options) => this.#runtime.request("issueDeveloperSandboxTestKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogs: async (params, options) => this.#runtime.request("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listCurrentAPIKeyRequestLogsWithResponse: async (params, options) => this.#runtime.request("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listCurrentAPIKeyRequestLogsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listCurrentAPIKeyRequestLogsItems: (params, options) => this.#runtime.items("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
      listPartnerAppInstalls: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPartnerAppInstallsWithResponse: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppInstallsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPartnerAppInstallsPagesWithResponse: (partner_app_id, params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listPartnerAppInstallsItems: (partner_app_id, params, options) => this.#runtime.items("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listPartnerApps: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPartnerAppsWithResponse: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPartnerAppsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listPartnerAppsItems: (params, options) => this.#runtime.items("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listSandboxes: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listSandboxesWithResponse: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listSandboxesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listSandboxesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listSandboxesItems: (params, options) => this.#runtime.items("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options),
      resetSandbox: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resetSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      revokePartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokePartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      revokePartnerEnvironmentGrant: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokePartnerEnvironmentGrantWithResponse: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      rotatePartnerAppSecret: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      rotatePartnerAppSecretWithResponse: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      updatePartnerApp: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updatePartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.devices = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "sort_by",
  "sort_direction",
  "Flint-Version"
], false, false, params), options),
      update: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.discountPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.disputes = Object.freeze({
      get: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDisputes", _sdkRequestInput([], [], [
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.feedbackReports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.fraudWarnings = Object.freeze({
      get: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFraudWarnings", _sdkRequestInput([], [], [
  "actionable",
  "payment_intent_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listFraudWarnings", _sdkRequestInput([], [], [
  "actionable",
  "payment_intent_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFraudWarnings", _sdkRequestInput([], [], [
  "actionable",
  "payment_intent_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFraudWarnings", _sdkRequestInput([], [], [
  "actionable",
  "payment_intent_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFraudWarnings", _sdkRequestInput([], [], [
  "actionable",
  "payment_intent_id",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.fulfillmentEvents = Object.freeze({
      get: async (fulfillment_event_id, params, options) => this.#runtime.request("getFulfillmentEvent", _sdkRequestInput([
  "fulfillment_event_id"
], [fulfillment_event_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (fulfillment_event_id, params, options) => this.#runtime.request("getFulfillmentEvent", _sdkRequestInput([
  "fulfillment_event_id"
], [fulfillment_event_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.fulfillmentNotifications = Object.freeze({
      get: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.fulfillments = Object.freeze({
      createEvent: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createEventWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createShipment: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createShipmentWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFulfillments", _sdkRequestInput([], [], [
  "expand",
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionFulfillment", input, options).then(result => _sdkPayload(result, ["data"])),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionFulfillment", input, options).then(_sdkResponse),
      update: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.giftCardAdjustments = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardAdjustment", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardAdjustment", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.giftCardCashOuts = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardCashOut", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardCashOut", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.giftCardFundingDispositions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.giftCardLoads = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options),
    });
    this.giftCardNotifications = Object.freeze({
      cancel: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options),
    });
    this.giftCardRedemptions = Object.freeze({
      cancel: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      capture: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      captureWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_type",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_type",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_type",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_type",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_type",
  "status",
  "Flint-Version"
], false, false, params), options),
    });
    this.giftCardTransactions = Object.freeze({
      list: async (params, options) => this.#runtime.request("listGiftCardTransactions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardTransactions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardTransactions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardTransactions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardTransactions", _sdkRequestInput([], [], [
  "X-Request-Id",
  "external_reference_id",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "Flint-Version"
], false, false, params), options),
    });
    this.giftCards = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options),
      lookup: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      lookupWithResponse: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      rotateCode: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      rotateCodeWithResponse: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      transition: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      transitionWithResponse: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryAdjustments = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAdjustment", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryAdjustment", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
    });
    this.inventoryAllocationPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options),
      update: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryCounts = Object.freeze({
      apply: async (inventory_count_id, params, options) => this.#runtime.request("applyInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      applyWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("applyInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancel: async (inventory_count_id, params, options) => this.#runtime.request("cancelInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("cancelInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before",
  "Flint-Version"
], false, false, params), options),
      update: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryItems = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options),
      update: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryLevels = Object.freeze({
      list: async (params, options) => this.#runtime.request("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Version"
], false, false, params), options),
      update: async (inventory_level_id, params, options) => this.#runtime.request("updateInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (inventory_level_id, params, options) => this.#runtime.request("updateInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryMovements = Object.freeze({
      list: async (params, options) => this.#runtime.request("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "order",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "order",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "order",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "order",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryMovements", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "type",
  "reason",
  "idempotency_key",
  "return_id",
  "return_disposition_id",
  "order",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id",
  "Flint-Version"
], false, false, params), options),
    });
    this.inventoryReceipts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
    });
    this.inventoryReservations = Object.freeze({
      commit: async (inventory_reservation_id, params, options) => this.#runtime.request("commitInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      commitWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("commitInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      consume: async (inventory_reservation_id, params, options) => this.#runtime.request("consumeInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      consumeWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("consumeInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "owner_expires_after",
  "owner_expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      release: async (inventory_reservation_id, params, options) => this.#runtime.request("releaseInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      releaseWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("releaseInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryTransfers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryTransfer", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryTransfer", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before",
  "Flint-Version"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionInventoryTransfer", input, options).then(result => _sdkPayload(result, ["data"])),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryTransfer", input, options).then(_sdkResponse),
      update: async (inventory_transfer_id, params, options) => this.#runtime.request("updateInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (inventory_transfer_id, params, options) => this.#runtime.request("updateInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.invoicePaymentTerms = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options),
      update: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.invoices = Object.freeze({
      assessLateFee: async (invoice_id, params, options) => this.#runtime.request("assessInvoiceLateFee", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      assessLateFeeWithResponse: async (invoice_id, params, options) => this.#runtime.request("assessInvoiceLateFee", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancelPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("cancelInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelPaymentAttemptWithResponse: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("cancelInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      collect: async (invoice_id, params, options) => this.#runtime.request("collectInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      collectWithResponse: async (invoice_id, params, options) => this.#runtime.request("collectInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createInvoice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInvoice", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (invoice_id, params, options) => this.#runtime.request("getInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (invoice_id, params, options) => this.#runtime.request("getInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("getInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentAttemptWithResponse: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("getInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPDF: async (invoice_id, params, options) => this.#runtime.request("getInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Version"
], false, false, params), options),
      getOrCreateCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("getOrCreateInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getOrCreateCheckoutSessionWithResponse: async (invoice_id, params, options) => this.#runtime.request("getOrCreateInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      issue: async (invoice_id, params, options) => this.#runtime.request("issueInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      issueWithResponse: async (invoice_id, params, options) => this.#runtime.request("issueInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      listActivities: async (invoice_id, params, options) => this.#runtime.request("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listActivitiesWithResponse: async (invoice_id, params, options) => this.#runtime.request("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listActivitiesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options), []),
      listActivitiesPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options)),
      listActivitiesItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options),
      listDeliveryAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listDeliveryAttemptsWithResponse: async (invoice_id, params, options) => this.#runtime.request("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listDeliveryAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listDeliveryAttemptsPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listDeliveryAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listPaymentAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentAttemptsWithResponse: async (invoice_id, params, options) => this.#runtime.request("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentAttemptsPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options)),
      listPaymentAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_id",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_id",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_id",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_id",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_id",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options),
      markUncollectible: async (invoice_id, params, options) => this.#runtime.request("markInvoiceUncollectible", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      markUncollectibleWithResponse: async (invoice_id, params, options) => this.#runtime.request("markInvoiceUncollectible", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      recordManualPayment: async (invoice_id, params, options) => this.#runtime.request("recordManualInvoicePayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      recordManualPaymentWithResponse: async (invoice_id, params, options) => this.#runtime.request("recordManualInvoicePayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      regeneratePublicLink: async (invoice_id, params, options) => this.#runtime.request("regenerateInvoicePublicLink", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      regeneratePublicLinkWithResponse: async (invoice_id, params, options) => this.#runtime.request("regenerateInvoicePublicLink", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      reverseManualPayment: async (invoice_id, params, options) => this.#runtime.request("reverseManualInvoicePayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      reverseManualPaymentWithResponse: async (invoice_id, params, options) => this.#runtime.request("reverseManualInvoicePayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      sendReminder: async (invoice_id, params, options) => this.#runtime.request("sendInvoiceReminder", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      sendReminderWithResponse: async (invoice_id, params, options) => this.#runtime.request("sendInvoiceReminder", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (invoice_id, params, options) => this.#runtime.request("updateInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (invoice_id, params, options) => this.#runtime.request("updateInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (invoice_id, params, options) => this.#runtime.request("voidInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      voidResourceWithResponse: async (invoice_id, params, options) => this.#runtime.request("voidInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      waiveLateFee: async (invoice_id, invoice_late_fee_id, params, options) => this.#runtime.request("waiveInvoiceLateFee", _sdkRequestInput([
  "invoice_id",
  "invoice_late_fee_id"
], [invoice_id, invoice_late_fee_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      waiveLateFeeWithResponse: async (invoice_id, invoice_late_fee_id, params, options) => this.#runtime.request("waiveInvoiceLateFee", _sdkRequestInput([
  "invoice_id",
  "invoice_late_fee_id"
], [invoice_id, invoice_late_fee_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.locations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options),
      publishGeography: async (location_id, params, options) => this.#runtime.request("publishLocationGeography", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      publishGeographyWithResponse: async (location_id, params, options) => this.#runtime.request("publishLocationGeography", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateInventory: async (location_id, params, options) => this.#runtime.request("updateLocationInventory", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateInventoryWithResponse: async (location_id, params, options) => this.#runtime.request("updateLocationInventory", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.me = Object.freeze({
      cancelReturn: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelReturnWithResponse: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancelSubscription: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionPaymentMethod: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      changeSubscriptionPaymentMethodWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      confirmEmailChangeRequest: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      confirmEmailChangeRequestWithResponse: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAddress: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createAddressWithResponse: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createDeletionRequestWithResponse: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      createEmailChangeRequest: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createEmailChangeRequestWithResponse: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createFlintWalletStoreSetup: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createFlintWalletStoreSetupWithResponse: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      createInvoiceCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createInvoiceCheckoutSessionWithResponse: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      createReturn: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createReturnWithResponse: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createReturnPreview: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createReturnPreviewWithResponse: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createReturnResolutionCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createReturnResolutionCheckoutSessionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      createSubscriptionPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createSubscriptionPaymentRetryWithResponse: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      deleteAddress: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCreditNote: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getCreditNoteWithResponse: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCreditNotePDF: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNotePDF", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [
  "Flint-Version"
], false, false, params), options),
      getDeletionRequest: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getDeletionRequestWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getEmailPreferences: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getGiftCard: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getInvoice: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getInvoiceWithResponse: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getInvoicePDF: async (invoice_id, params, options) => this.#runtime.request("getMeInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Version"
], false, false, params), options),
      getOrder: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getOrderWithResponse: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getReturn: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getReturnWithResponse: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSubscription: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSubscriptionPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSubscriptionPaymentRetryWithResponse: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddresses: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAddressesWithResponse: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listAddressesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listAddressesItems: (params, options) => this.#runtime.items("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listCreditNotes: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listCreditNotesWithResponse: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listCreditNotesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listCreditNotesPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listCreditNotesItems: (invoice_id, params, options) => this.#runtime.items("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listDeletionRequests: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listDeletionRequestsWithResponse: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listDeletionRequestsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listDeletionRequestsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listDeletionRequestsItems: (params, options) => this.#runtime.items("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listFlintWalletPaymentMethods: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listFlintWalletPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listFulfillments: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listFulfillmentsWithResponse: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listFulfillmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listFulfillmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listFulfillmentsItems: (params, options) => this.#runtime.items("listMeFulfillments", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listGiftCards: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listGiftCardsWithResponse: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listGiftCardsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listGiftCardsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listGiftCardsItems: (params, options) => this.#runtime.items("listMeGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listGiftCardTransactions: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listGiftCardTransactionsWithResponse: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listGiftCardTransactionsPages: (gift_card_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listGiftCardTransactionsPagesWithResponse: (gift_card_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listGiftCardTransactionsItems: (gift_card_id, params, options) => this.#runtime.items("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listInvoices: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listInvoicesWithResponse: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listInvoicesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listInvoicesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listInvoicesItems: (params, options) => this.#runtime.items("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "external_reference_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_amount_due",
  "sort_by",
  "sort_direction",
  "query",
  "Flint-Version"
], false, false, params), options),
      listOrderActivities: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listOrderActivitiesWithResponse: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listOrderActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options), []),
      listOrderActivitiesPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options)),
      listOrderActivitiesItems: (order_id, params, options) => this.#runtime.items("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options),
      listOrders: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listOrdersWithResponse: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listOrdersPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listOrdersPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listOrdersItems: (params, options) => this.#runtime.items("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      listPackages: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPackagesWithResponse: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPackagesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPackagesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listPackagesItems: (params, options) => this.#runtime.items("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listPaymentMethods: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentMethodsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentMethodsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options)),
      listPaymentMethodsItems: (params, options) => this.#runtime.items("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "Flint-Version"
], false, false, params), options),
      listPayments: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentsWithResponse: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listPaymentsItems: (params, options) => this.#runtime.items("listMePayments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      listRefunds: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listRefundsWithResponse: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listRefundsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listRefundsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listRefundsItems: (params, options) => this.#runtime.items("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      listReturns: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listReturnsWithResponse: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listReturnsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options), []),
      listReturnsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options)),
      listReturnsItems: (params, options) => this.#runtime.items("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options),
      listShipments: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listShipmentsWithResponse: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listShipmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listShipmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listShipmentsItems: (params, options) => this.#runtime.items("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      listSubscriptions: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listSubscriptionsWithResponse: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listSubscriptionsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options), []),
      listSubscriptionsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options)),
      listSubscriptionsItems: (params, options) => this.#runtime.items("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "Flint-Version"
], false, false, params), options),
      pauseSubscription: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      pauseSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reactivateSubscription: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      reactivateSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      removeGiftCard: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      removePaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("removeMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removePaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("removeMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      resumeSubscription: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resumeSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      saveGiftCard: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      saveGiftCardWithResponse: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      savePaymentMethod: async (params, options) => this.#runtime.request("saveMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      savePaymentMethodWithResponse: async (params, options) => this.#runtime.request("saveMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      sendOrderReceipt: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      sendOrderReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      setDefaultAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      setDefaultPaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("setDefaultMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      setDefaultPaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("setDefaultMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateEmailPreferences: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.merchantAccountSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.merchantBillingBalances = Object.freeze({
      get: async (merchant_billing_balance_id, params, options) => this.#runtime.request("getMerchantBillingBalance", _sdkRequestInput([
  "merchant_billing_balance_id"
], [merchant_billing_balance_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (merchant_billing_balance_id, params, options) => this.#runtime.request("getMerchantBillingBalance", _sdkRequestInput([
  "merchant_billing_balance_id"
], [merchant_billing_balance_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listMerchantBillingBalances", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantBillingBalances", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantBillingBalances", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantBillingBalances", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listMerchantBillingBalances", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.merchantSubscriptionInvoices = Object.freeze({
      get: async (merchant_subscription_invoice_id, params, options) => this.#runtime.request("getMerchantSubscriptionInvoice", _sdkRequestInput([
  "merchant_subscription_invoice_id"
], [merchant_subscription_invoice_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (merchant_subscription_invoice_id, params, options) => this.#runtime.request("getMerchantSubscriptionInvoice", _sdkRequestInput([
  "merchant_subscription_invoice_id"
], [merchant_subscription_invoice_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listMerchantSubscriptionInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.merchants = Object.freeze({
      get: async (params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([], [], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([], [], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.modifierGroups = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options),
      update: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.modifierSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Version"
], false, false, params), options),
      update: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.oauth = Object.freeze({
      authorizePartnerInstall: async (params, options) => this.#runtime.request("authorizePartnerInstall", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "permission_ids",
  "environment_id",
  "merchant_id",
  "state",
  "Flint-Version"
], false, false, params), options),
      exchangePartnerInstallToken: async (params, options) => this.#runtime.request("exchangePartnerInstallToken", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options),
      previewPartnerInstallAuthorization: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "client_id",
  "redirect_uri",
  "mode",
  "permission_ids",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      previewPartnerInstallAuthorizationWithResponse: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "client_id",
  "redirect_uri",
  "mode",
  "permission_ids",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
    this.onboarding = Object.freeze({
      advance: (input = {}, options) => this.#runtime.request("advanceOnboarding", input, options).then(result => _sdkPayload(result, ["data"])),
      advanceWithResponse: (input = {}, options) => this.#runtime.request("advanceOnboarding", input, options).then(_sdkResponse),
      createAPIKey: (input = {}, options) => this.#runtime.request("createOnboardingAPIKey", input, options).then(result => _sdkPayload(result, ["data"])),
      createAPIKeyWithResponse: (input = {}, options) => this.#runtime.request("createOnboardingAPIKey", input, options).then(_sdkResponse),
      getState: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [
  "sandbox_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getStateWithResponse: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [
  "sandbox_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      startFlow: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      startFlowWithResponse: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      verifyEmailCode: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      verifyEmailCodeWithResponse: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.orders = Object.freeze({
      addCharge: async (order_id, params, options) => this.#runtime.request("addOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      addChargeWithResponse: async (order_id, params, options) => this.#runtime.request("addOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      addLineItems: async (order_id, params, options) => this.#runtime.request("addOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      addLineItemsWithResponse: async (order_id, params, options) => this.#runtime.request("addOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      applyDiscount: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      applyDiscountWithResponse: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      applyGiftCard: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Gift-Card-Challenge",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      applyGiftCardWithResponse: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Gift-Card-Challenge",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancelPayment: async (order_id, payment_intent_id, params, options) => this.#runtime.request("cancelOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelPaymentWithResponse: async (order_id, payment_intent_id, params, options) => this.#runtime.request("cancelOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      cancelPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelPaymentAttemptWithResponse: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      capturePayment: async (order_id, payment_intent_id, params, options) => this.#runtime.request("captureOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      capturePaymentWithResponse: async (order_id, payment_intent_id, params, options) => this.#runtime.request("captureOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      closeSession: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      closeSessionWithResponse: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createFulfillment: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createFulfillmentWithResponse: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (order_id, params, options) => this.#runtime.request("createOrderAccessLink", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createAccessLinkWithResponse: async (order_id, params, options) => this.#runtime.request("createOrderAccessLink", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      createPaymentIntent: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createPaymentIntentWithResponse: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteChargeWithResponse: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      deleteLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteLineItemWithResponse: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCurrentDeliverySelection: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getCurrentDeliverySelectionWithResponse: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentAttemptWithResponse: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listActivities: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listActivitiesWithResponse: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options), []),
      listActivitiesPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options)),
      listActivitiesItems: (order_id, params, options) => this.#runtime.items("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "type",
  "Flint-Version"
], false, false, params), options),
      listPaymentAttempts: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentAttemptsWithResponse: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentAttemptsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentAttemptsPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options)),
      listPaymentAttemptsItems: (order_id, params, options) => this.#runtime.items("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "return_id",
  "return_resolution_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      pay: (input = {}, options) => this.#runtime.request("payOrder", input, options).then(result => _sdkPayload(result, ["data"])),
      payWithResponse: (input = {}, options) => this.#runtime.request("payOrder", input, options).then(_sdkResponse),
      removeDiscounts: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      removeDiscountsWithResponse: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      removeGiftCard: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      removeGiftCardWithResponse: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      repriceDiscounts: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      repriceDiscountsWithResponse: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      resolveInventoryException: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resolveInventoryExceptionWithResponse: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      sendReceipt: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      sendReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      update: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateChargeWithResponse: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateLineItemWithResponse: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.organizations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      grantMembership: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      grantMembershipWithResponse: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      listMemberships: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listMembershipsWithResponse: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listMembershipsPages: (organization_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listMembershipsPagesWithResponse: (organization_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listMembershipsItems: (organization_id, params, options) => this.#runtime.items("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      revokeMembership: async (organization_id, user_id, params, options) => this.#runtime.request("revokeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokeMembershipWithResponse: async (organization_id, user_id, params, options) => this.#runtime.request("revokeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      transferOwnership: async (organization_id, params, options) => this.#runtime.request("transferOrganizationOwnership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      transferOwnershipWithResponse: async (organization_id, params, options) => this.#runtime.request("transferOrganizationOwnership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.packages = Object.freeze({
      createItem: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createItemWithResponse: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteItem: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getItem: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPackageItems: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPackageItemsWithResponse: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPackageItemsPages: (package_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPackageItemsPagesWithResponse: (package_id, params, options) => _sdkResponsePages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listPackageItemsItems: (package_id, params, options) => this.#runtime.items("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(result => _sdkPayload(result, ["data"])),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(_sdkResponse),
      update: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateItem: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      voidResourceWithResponse: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
    });
    this.paymentIntents = Object.freeze({
      cancel: async (payment_intent_id, params, options) => this.#runtime.request("cancelPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("cancelPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      capture: async (payment_intent_id, params, options) => this.#runtime.request("capturePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      captureWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("capturePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      confirm: async (payment_intent_id, params, options) => this.#runtime.request("confirmPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Buyer-Device",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      confirmWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("confirmPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Buyer-Device",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createPaymentIntent", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentIntent", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_intent_id, params, options) => this.#runtime.request("getPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "expand",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("getPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "expand",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "status",
  "origin",
  "risk_level",
  "payment_flow",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "dispute_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      update: async (payment_intent_id, params, options) => this.#runtime.request("updatePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("updatePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.paymentLinks = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPublic: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPublicWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
      resolve: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      resolveWithResponse: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.paymentMethodDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      update: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.paymentMethods = Object.freeze({
      get: async (payment_method_id, params, options) => this.#runtime.request("getPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "expand",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (payment_method_id, params, options) => this.#runtime.request("getPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "expand",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "X-Checkout-Session-ID",
  "X-Checkout-Session-Secret",
  "Flint-Version"
], false, false, params), options),
      remove: async (payment_method_id, params, options) => this.#runtime.request("removePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (payment_method_id, params, options) => this.#runtime.request("removePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      save: async (params, options) => this.#runtime.request("savePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      saveWithResponse: async (params, options) => this.#runtime.request("savePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      setDefault: async (payment_method_id, params, options) => this.#runtime.request("setDefaultPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      setDefaultWithResponse: async (payment_method_id, params, options) => this.#runtime.request("setDefaultPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
    this.payoutSettings = Object.freeze({
      deletePayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("deletePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      deletePayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("deletePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      getPayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("getPayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("getPayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPayoutDestinations: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPayoutDestinationsWithResponse: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPayoutDestinationsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPayoutDestinationsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listPayoutDestinationsItems: (params, options) => this.#runtime.items("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      updatePayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("updatePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updatePayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("updatePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updatePayoutSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updatePayoutSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.payouts = Object.freeze({
      cancel: async (payout_id, params, options) => this.#runtime.request("cancelPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (payout_id, params, options) => this.#runtime.request("cancelPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createPayout", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createPayout", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (payout_id, params, options) => this.#runtime.request("getPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (payout_id, params, options) => this.#runtime.request("getPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listEntries: async (payout_id, params, options) => this.#runtime.request("listPayoutEntries", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listEntriesWithResponse: async (payout_id, params, options) => this.#runtime.request("listPayoutEntries", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listEntriesPages: (payout_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPayoutEntries", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listEntriesPagesWithResponse: (payout_id, params, options) => _sdkResponsePages(this.#runtime.pages("listPayoutEntries", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listEntriesItems: (payout_id, params, options) => this.#runtime.items("listPayoutEntries", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_after",
  "arrival_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_after",
  "arrival_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_after",
  "arrival_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_after",
  "arrival_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPayouts", _sdkRequestInput([], [], [
  "currency",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_after",
  "arrival_before",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.products = Object.freeze({
      create: async (params, options) => this.#runtime.request("createProduct", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createProduct", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createVariant: async (product_id, params, options) => this.#runtime.request("createProductVariant", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createVariantWithResponse: async (product_id, params, options) => this.#runtime.request("createProductVariant", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (product_id, params, options) => this.#runtime.request("deleteProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (product_id, params, options) => this.#runtime.request("deleteProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      deleteVariant: async (product_id, variant_id, params, options) => this.#runtime.request("deleteProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteVariantWithResponse: async (product_id, variant_id, params, options) => this.#runtime.request("deleteProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (product_id, params, options) => this.#runtime.request("getProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (product_id, params, options) => this.#runtime.request("getProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getOption: async (product_id, option_id, params, options) => this.#runtime.request("getProductOption", _sdkRequestInput([
  "product_id",
  "option_id"
], [product_id, option_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getOptionWithResponse: async (product_id, option_id, params, options) => this.#runtime.request("getProductOption", _sdkRequestInput([
  "product_id",
  "option_id"
], [product_id, option_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getVariant: async (product_id, variant_id, params, options) => this.#runtime.request("getProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getVariantWithResponse: async (product_id, variant_id, params, options) => this.#runtime.request("getProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listOptions: async (product_id, params, options) => this.#runtime.request("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listOptionsWithResponse: async (product_id, params, options) => this.#runtime.request("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listOptionsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listOptionsPagesWithResponse: (product_id, params, options) => _sdkResponsePages(this.#runtime.pages("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listOptionsItems: (product_id, params, options) => this.#runtime.items("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      listVariants: async (product_id, params, options) => this.#runtime.request("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listVariantsWithResponse: async (product_id, params, options) => this.#runtime.request("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listVariantsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options), []),
      listVariantsPagesWithResponse: (product_id, params, options) => _sdkResponsePages(this.#runtime.pages("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options)),
      listVariantsItems: (product_id, params, options) => this.#runtime.items("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "Flint-Version"
], false, false, params), options),
      update: async (product_id, params, options) => this.#runtime.request("updateProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (product_id, params, options) => this.#runtime.request("updateProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateVariant: async (product_id, variant_id, params, options) => this.#runtime.request("updateProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateVariantWithResponse: async (product_id, variant_id, params, options) => this.#runtime.request("updateProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.promotions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createCode: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createCodeWithResponse: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      deleteCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listCodes: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "page_size",
  "page_token",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listCodesWithResponse: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "page_size",
  "page_token",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listCodesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "page_size",
  "page_token",
  "expand",
  "Flint-Version"
], false, false, params), options), []),
      listCodesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "page_size",
  "page_token",
  "expand",
  "Flint-Version"
], false, false, params), options)),
      listCodesItems: (params, options) => this.#runtime.items("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "page_size",
  "page_token",
  "expand",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "product_id",
  "variant_id",
  "bundle_id",
  "category_handle",
  "redemption_type",
  "discount_class",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      update: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.refunds = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRefund", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createRefund", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (refund_id, params, options) => this.#runtime.request("getRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (refund_id, params, options) => this.#runtime.request("getRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
  "refund_method",
  "min_amount",
  "max_amount",
  "currency",
  "external_reference_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      update: async (refund_id, params, options) => this.#runtime.request("updateRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (refund_id, params, options) => this.#runtime.request("updateRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.reportDownloads = Object.freeze({
      get: async (report_download_id, params, options) => this.#runtime.request("getReportDownload", _sdkRequestInput([
  "report_download_id"
], [report_download_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.reports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getWait: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWaitWithResponse: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.returnDispositions = Object.freeze({
      cancel: async (return_disposition_id, params, options) => this.#runtime.request("cancelReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (return_disposition_id, params, options) => this.#runtime.request("cancelReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (return_disposition_id, params, options) => this.#runtime.request("getReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_disposition_id, params, options) => this.#runtime.request("getReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      retry: async (return_disposition_id, params, options) => this.#runtime.request("retryReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      retryWithResponse: async (return_disposition_id, params, options) => this.#runtime.request("retryReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnInspections = Object.freeze({
      decideLineItem: async (return_inspection_id, return_inspection_line_item_id, params, options) => this.#runtime.request("decideReturnInspectionLineItem", _sdkRequestInput([
  "return_inspection_id",
  "return_inspection_line_item_id"
], [return_inspection_id, return_inspection_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      decideLineItemWithResponse: async (return_inspection_id, return_inspection_line_item_id, params, options) => this.#runtime.request("decideReturnInspectionLineItem", _sdkRequestInput([
  "return_inspection_id",
  "return_inspection_line_item_id"
], [return_inspection_id, return_inspection_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (return_inspection_id, params, options) => this.#runtime.request("getReturnInspection", _sdkRequestInput([
  "return_inspection_id"
], [return_inspection_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_inspection_id, params, options) => this.#runtime.request("getReturnInspection", _sdkRequestInput([
  "return_inspection_id"
], [return_inspection_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "inspected_after",
  "inspected_before",
  "location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "inspected_after",
  "inspected_before",
  "location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "inspected_after",
  "inspected_before",
  "location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "inspected_after",
  "inspected_before",
  "location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "inspected_after",
  "inspected_before",
  "location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "Flint-Version"
], false, false, params), options),
    });
    this.returnPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getRevision: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getRevisionWithResponse: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "Flint-Version"
], false, false, params), options),
      listRevisions: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listRevisionsWithResponse: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listRevisionsPages: (return_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listRevisionsPagesWithResponse: (return_policy_id, params, options) => _sdkResponsePages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listRevisionsItems: (return_policy_id, params, options) => this.#runtime.items("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      publishRevision: async (return_policy_id, params, options) => this.#runtime.request("publishReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      publishRevisionWithResponse: async (return_policy_id, params, options) => this.#runtime.request("publishReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnReasons = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version",
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "source",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "source",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "source",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "source",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "source",
  "status",
  "Flint-Version"
], false, false, params), options),
      update: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnReceipts = Object.freeze({
      get: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "verification_status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "verification_status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "verification_status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "verification_status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "verification_status",
  "Flint-Version"
], false, false, params), options),
      verifyLineItem: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      verifyLineItemWithResponse: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnResolutions = Object.freeze({
      cancel: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      confirm: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      confirmWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      getOrCreateCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("getOrCreateReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getOrCreateCheckoutSessionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getOrCreateReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      get: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnResolutions", _sdkRequestInput([], [], [
  "action_required_by",
  "corrects_return_resolution_id",
  "created_after",
  "created_before",
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "resolution_type",
  "return_id",
  "return_line_item_id",
  "return_policy_revision_id",
  "status",
  "updated_after",
  "updated_before",
  "Flint-Version"
], false, false, params), options),
      release: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      releaseWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      retry: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      retryWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.returns = Object.freeze({
      addLineItem: async (return_id, params, options) => this.#runtime.request("addReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      addLineItemWithResponse: async (return_id, params, options) => this.#runtime.request("addReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancel: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancelLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      complete: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      completeWithResponse: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (return_id, params, options) => this.#runtime.request("createReturnAccessLink", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createAccessLinkWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnAccessLink", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      createDisposition: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createDispositionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createInspection: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createInspectionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createReceipt: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createReceiptWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createResolution: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createResolutionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      decide: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      decideWithResponse: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listLineItems: async (return_id, params, options) => this.#runtime.request("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listLineItemsWithResponse: async (return_id, params, options) => this.#runtime.request("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listLineItemsPages: (return_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listLineItemsPagesWithResponse: (return_id, params, options) => _sdkResponsePages(this.#runtime.pages("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listLineItemsItems: (return_id, params, options) => this.#runtime.items("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "Flint-Version"
], false, false, params), options),
      processExisting: async (return_id, params, options) => this.#runtime.request("processExistingReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      processExistingWithResponse: async (return_id, params, options) => this.#runtime.request("processExistingReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reopen: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      reopenWithResponse: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      waiveLineInspection: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      waiveLineInspectionWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.reviews = Object.freeze({
      approve: async (review_id, params, options) => this.#runtime.request("approveReview", _sdkRequestInput([
  "review_id"
], [review_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      approveWithResponse: async (review_id, params, options) => this.#runtime.request("approveReview", _sdkRequestInput([
  "review_id"
], [review_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      decline: async (review_id, params, options) => this.#runtime.request("declineReview", _sdkRequestInput([
  "review_id"
], [review_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      declineWithResponse: async (review_id, params, options) => this.#runtime.request("declineReview", _sdkRequestInput([
  "review_id"
], [review_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      get: async (review_id, params, options) => this.#runtime.request("getReview", _sdkRequestInput([
  "review_id"
], [review_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (review_id, params, options) => this.#runtime.request("getReview", _sdkRequestInput([
  "review_id"
], [review_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "created_after",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "created_after",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "created_after",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "created_after",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "created_after",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
    });
    this.riskLists = Object.freeze({
      addItems: async (risk_list_id, params, options) => this.#runtime.request("addRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      addItemsWithResponse: async (risk_list_id, params, options) => this.#runtime.request("addRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createRiskList", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskList", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (risk_list_id, params, options) => this.#runtime.request("deleteRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (risk_list_id, params, options) => this.#runtime.request("deleteRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      deleteItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("deleteRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteItemWithResponse: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("deleteRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (risk_list_id, params, options) => this.#runtime.request("getRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (risk_list_id, params, options) => this.#runtime.request("getRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("getRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getItemWithResponse: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("getRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listRiskListItems: async (risk_list_id, params, options) => this.#runtime.request("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listRiskListItemsWithResponse: async (risk_list_id, params, options) => this.#runtime.request("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listRiskListItemsPages: (risk_list_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listRiskListItemsPagesWithResponse: (risk_list_id, params, options) => _sdkResponsePages(this.#runtime.pages("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listRiskListItemsItems: (risk_list_id, params, options) => this.#runtime.items("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listRiskLists", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listRiskLists", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskLists", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listRiskLists", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listRiskLists", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      update: async (risk_list_id, params, options) => this.#runtime.request("updateRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (risk_list_id, params, options) => this.#runtime.request("updateRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.riskPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.riskRules = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAttributeRegistry: async (params, options) => this.#runtime.request("getRiskRuleAttributeRegistry", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAttributeRegistryWithResponse: async (params, options) => this.#runtime.request("getRiskRuleAttributeRegistry", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listRiskRules", _sdkRequestInput([], [], [
  "include_archived",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      update: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.settings = Object.freeze({
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [
  "location_id",
  "device_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getEffectiveWithResponse: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [
  "location_id",
  "device_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.shipments = Object.freeze({
      createPackage: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createPackageWithResponse: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      update: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      voidResourceWithResponse: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
    });
    this.specification = Object.freeze({
      get: async (params, options) => this.#runtime.request("getOpenAPISpec", _sdkRequestInput([], [], [
  "version",
  "Flint-Version"
], false, false, params), options),
    });
    this.subscriptionPlans = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionPlans", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
      update: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.subscriptions = Object.freeze({
      cancel: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      changePaymentMethod: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      changePaymentMethodWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createAccessLinkWithResponse: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      createPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createPaymentRetryWithResponse: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      get: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentRetryWithResponse: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentRetriesWithResponse: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentRetriesPagesWithResponse: (subscription_id, params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options)),
      listPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "subscription_plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "subscription_plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "subscription_plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "subscription_plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "subscription_plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options),
      pause: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      pauseWithResponse: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reactivate: async (subscription_id, params, options) => this.#runtime.request("reactivateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      reactivateWithResponse: async (subscription_id, params, options) => this.#runtime.request("reactivateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      resume: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resumeWithResponse: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      skipCycle: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      skipCycleWithResponse: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateBillingSchedule: (input = {}, options) => this.#runtime.request("updateSubscriptionBillingSchedule", input, options).then(result => _sdkPayload(result, ["data"])),
      updateBillingScheduleWithResponse: (input = {}, options) => this.#runtime.request("updateSubscriptionBillingSchedule", input, options).then(_sdkResponse),
    });
    this.webhookDeliveries = Object.freeze({
      get: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAttempts: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAttemptsWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAttemptsPages: (webhook_delivery_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listAttemptsPagesWithResponse: (webhook_delivery_id, params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listAttemptsItems: (webhook_delivery_id, params, options) => this.#runtime.items("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      resend: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resendWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
    });
    this.webhookEndpoints = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookEndpoint", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createWebhookEndpoint", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createWebhookTestEvent: async (webhook_endpoint_id, params, options) => this.#runtime.request("createWebhookTestEvent", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWebhookTestEventWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("createWebhookTestEvent", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      remove: async (webhook_endpoint_id, params, options) => this.#runtime.request("deleteWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("deleteWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (webhook_endpoint_id, params, options) => this.#runtime.request("getWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("getWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id",
  "Flint-Version"
], false, false, params), options),
      rotateWebhookSecret: async (webhook_endpoint_id, params, options) => this.#runtime.request("rotateWebhookSecret", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      rotateWebhookSecretWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("rotateWebhookSecret", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      update: async (webhook_endpoint_id, params, options) => this.#runtime.request("updateWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("updateWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
    this.webhookEventTypes = Object.freeze({
      list: async (params, options) => this.#runtime.request("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
    });
    this.webhookEvents = Object.freeze({
      get: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveries: async (webhook_event_id, params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWebhookDeliveriesWithResponse: async (webhook_event_id, params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveriesPages: (webhook_event_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listWebhookDeliveriesPagesWithResponse: (webhook_event_id, params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listWebhookDeliveriesItems: (webhook_event_id, params, options) => this.#runtime.items("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options),
      stream: async (params, options) => this.#runtime.request("streamWebhookEvents", _sdkRequestInput([], [], [
  "event_type",
  "after_event_id",
  "Last-Event-ID",
  "Flint-Version"
], false, false, params), options),
    });
  }
  close() { return this.#runtime.close(); }
  verifyWebhook(...args) { return this.#runtime.verifyWebhook(...args); }
}
export function isOrdersUpdateLineItemResponseKnown(value) { const prepared = _sdkModelCodec("OrdersUpdateLineItemResponse"); return prepared.some.some(codec => isKnownCodec(value, {...codec, definitions: prepared.definitions})); }
export function makeAccessLink(value) { return modelFromCodec(value, {..._sdkModelCodec("AccessLink"), constraints: true}); }
export function makeAccessLinkResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("AccessLinkResponse"), constraints: true}); }
export function makeActionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ActionResponse"), constraints: true}); }
export function makeActionResult(value) { return modelFromCodec(value, {..._sdkModelCodec("ActionResult"), constraints: true}); }
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddLineItemsRequest"), constraints: true}); }
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddOrderChargeRequest"), constraints: true}); }
export function makeAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("Address"), constraints: true}); }
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddReturnLineItemRequest"), constraints: true}); }
export function makeAddReturnLineItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("AddReturnLineItemResponse"), constraints: true}); }
export function makeAddRiskListItemsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddRiskListItemsRequest"), constraints: true}); }
export function makeAdjustmentLine(value) { return modelFromCodec(value, {..._sdkModelCodec("AdjustmentLine"), constraints: true}); }
export function makeAnalysis(value) { return modelFromCodec(value, {..._sdkModelCodec("Analysis"), constraints: true}); }
export function makeAnalyticsOverview(value) { return modelFromCodec(value, {..._sdkModelCodec("AnalyticsOverview"), constraints: true}); }
export function makeAnalyticsOverviewResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("AnalyticsOverviewResponse"), constraints: true}); }
export function makeAPIKey(value) { return modelFromCodec(value, {..._sdkModelCodec("APIKey"), constraints: true}); }
export function makeAPIKeyListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("APIKeyListResponse"), constraints: true}); }
export function makeAPIKeyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("APIKeyResponse"), constraints: true}); }
export function makeAPIKeyWithSecret(value) { return modelFromCodec(value, {..._sdkModelCodec("APIKeyWithSecret"), constraints: true}); }
export function makeAPIRequestLog(value) { return modelFromCodec(value, {..._sdkModelCodec("APIRequestLog"), constraints: true}); }
export function makeAPIRequestLogDetail(value) { return modelFromCodec(value, {..._sdkModelCodec("APIRequestLogDetail"), constraints: true}); }
export function makeAPIRequestLogDetailResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("APIRequestLogDetailResponse"), constraints: true}); }
export function makeApiRequestLogExpansionShape(value) { return modelFromCodec(value, {..._sdkModelCodec("ApiRequestLogExpansionShape"), constraints: true}); }
export function makeAPIRequestLogListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("APIRequestLogListResponse"), constraints: true}); }
export function makeAPIRequestLogQueryParam(value) { return modelFromCodec(value, {..._sdkModelCodec("APIRequestLogQueryParam"), constraints: true}); }
export function makeAPIRequestLogReproduction(value) { return modelFromCodec(value, {..._sdkModelCodec("APIRequestLogReproduction"), constraints: true}); }
export function makeApiRequestLogResponseShapeMetadata(value) { return modelFromCodec(value, {..._sdkModelCodec("ApiRequestLogResponseShapeMetadata"), constraints: true}); }
export function makeAppliedDiscount(value) { return modelFromCodec(value, {..._sdkModelCodec("AppliedDiscount"), constraints: true}); }
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyDiscountRequest"), constraints: true}); }
export function makeApplyOrderGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyOrderGiftCardRequest"), constraints: true}); }
export function makeAssessInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssessInvoiceLateFeeRequest"), constraints: true}); }
export function makeAssignToUnconfiguredDeliveryProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssignToUnconfiguredDeliveryProfileRequest"), constraints: true}); }
export function makeAvailableModifier(value) { return modelFromCodec(value, {..._sdkModelCodec("AvailableModifier"), constraints: true}); }
export function makeAvailableModifierGroup(value) { return modelFromCodec(value, {..._sdkModelCodec("AvailableModifierGroup"), constraints: true}); }
export function makeAvailableModifierSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("AvailableModifierSelection"), constraints: true}); }
export function makeAvailableTextModifierConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("AvailableTextModifierConfig"), constraints: true}); }
export function makeBalance(value) { return modelFromCodec(value, {..._sdkModelCodec("Balance"), constraints: true}); }
export function makeBalanceListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BalanceListResponse"), constraints: true}); }
export function makeBalanceTransaction(value) { return modelFromCodec(value, {..._sdkModelCodec("BalanceTransaction"), constraints: true}); }
export function makeBalanceTransactionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BalanceTransactionListResponse"), constraints: true}); }
export function makeBalanceTransactionRelatedResource(value) { return modelFromCodec(value, {..._sdkModelCodec("BalanceTransactionRelatedResource"), constraints: true}); }
export function makeBalanceTransactionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BalanceTransactionResponse"), constraints: true}); }
export function makeBanner(value) { return modelFromCodec(value, {..._sdkModelCodec("Banner"), constraints: true}); }
export function makeBrandingSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("BrandingSettings"), constraints: true}); }
export function makeBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("Bundle"), constraints: true}); }
export function makeBundleComponent(value) { return modelFromCodec(value, {..._sdkModelCodec("BundleComponent"), constraints: true}); }
export function makeBundleComponentListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BundleComponentListResponse"), constraints: true}); }
export function makeBundleComponentVariantSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("BundleComponentVariantSummary"), constraints: true}); }
export function makeBundleListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BundleListResponse"), constraints: true}); }
export function makeBundleResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BundleResponse"), constraints: true}); }
export function makeBuyerAction(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerAction"), constraints: true}); }
export function makeBuyerCapabilities(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCapabilities"), constraints: true}); }
export function makeBuyerCreditNote(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreditNote"), constraints: true}); }
export function makeBuyerCreditNoteListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreditNoteListResponse"), constraints: true}); }
export function makeBuyerCreditNoteResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreditNoteResponse"), constraints: true}); }
export function makeBuyerDeliveryInputRequirementResource(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerDeliveryInputRequirementResource"), constraints: true}); }
export function makeBuyerDeliveryOptionResource(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerDeliveryOptionResource"), constraints: true}); }
export function makeBuyerDeliveryQuote(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerDeliveryQuote"), constraints: true}); }
export function makeBuyerDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerDeliveryQuoteChoiceGroupResource"), constraints: true}); }
export function makeBuyerDeliverySelection(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerDeliverySelection"), constraints: true}); }
export function makeBuyerDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerDeliverySelectionChoiceResource"), constraints: true}); }
export function makeBuyerDeliverySelectionResult(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerDeliverySelectionResult"), constraints: true}); }
export function makeBuyerEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerEffectiveDeliverySelectionResource"), constraints: true}); }
export function makeBuyerGiftCard(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerGiftCard"), constraints: true}); }
export function makeBuyerGiftCardListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerGiftCardListResponse"), constraints: true}); }
export function makeBuyerGiftCardResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerGiftCardResponse"), constraints: true}); }
export function makeBuyerGiftCardTransaction(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerGiftCardTransaction"), constraints: true}); }
export function makeBuyerGiftCardTransactionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerGiftCardTransactionListResponse"), constraints: true}); }
export function makeBuyerInstructionsConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInstructionsConfig"), constraints: true}); }
export function makeBuyerInvoice(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInvoice"), constraints: true}); }
export function makeBuyerInvoiceCheckoutSessionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInvoiceCheckoutSessionResponse"), constraints: true}); }
export function makeBuyerInvoiceCheckoutSessionResult(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInvoiceCheckoutSessionResult"), constraints: true}); }
export function makeBuyerInvoiceLateFee(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInvoiceLateFee"), constraints: true}); }
export function makeBuyerInvoiceListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInvoiceListResponse"), constraints: true}); }
export function makeBuyerInvoiceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInvoiceResponse"), constraints: true}); }
export function makeBuyerPauseCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerPauseCapability"), constraints: true}); }
export function makeBuyerRefund(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerRefund"), constraints: true}); }
export function makeBuyerRefundListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerRefundListResponse"), constraints: true}); }
export function makeBuyerRetentionOffer(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerRetentionOffer"), constraints: true}); }
export function makeBuyerSubscriptionPaymentRetry(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerSubscriptionPaymentRetry"), constraints: true}); }
export function makeBuyerSubscriptionPaymentRetryResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerSubscriptionPaymentRetryResponse"), constraints: true}); }
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryMethodResultRequest"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequest"), constraints: true}); }
export function makeCancelGiftCardNotificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelGiftCardNotificationRequest"), constraints: true}); }
export function makeCancelOrderPaymentAttemptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelOrderPaymentAttemptRequest"), constraints: true}); }
export function makeCancelOrderPaymentAttemptResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelOrderPaymentAttemptResponse"), constraints: true}); }
export function makeCancelOrderPaymentAttemptResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelOrderPaymentAttemptResult"), constraints: true}); }
export function makeCancelOrderPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelOrderPaymentRequest"), constraints: true}); }
export function makeCancelPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelPaymentIntentRequest"), constraints: true}); }
export function makeCancelPayoutRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelPayoutRequest"), constraints: true}); }
export function makeCancelReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnDispositionRequest"), constraints: true}); }
export function makeCancelReturnDispositionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnDispositionResponse"), constraints: true}); }
export function makeCancelReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnLineItemRequest"), constraints: true}); }
export function makeCancelReturnLineItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnLineItemResponse"), constraints: true}); }
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnRequest"), constraints: true}); }
export function makeCancelReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnResolutionRequest"), constraints: true}); }
export function makeCancelReturnResolutionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnResolutionResponse"), constraints: true}); }
export function makeCancelReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnResponse"), constraints: true}); }
export function makeCancelSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelSubscriptionRequest"), constraints: true}); }
export function makeCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("Capability"), constraints: true}); }
export function makeCapabilityListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CapabilityListResponse"), constraints: true}); }
export function makeCapabilityRequirements(value) { return modelFromCodec(value, {..._sdkModelCodec("CapabilityRequirements"), constraints: true}); }
export function makeCaptureOrderPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CaptureOrderPaymentRequest"), constraints: true}); }
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CapturePaymentIntentRequest"), constraints: true}); }
export function makeCardDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CardDetails"), constraints: true}); }
export function makeCatalogSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CatalogSettings"), constraints: true}); }
export function makeCategory(value) { return modelFromCodec(value, {..._sdkModelCodec("Category"), constraints: true}); }
export function makeCategoryListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CategoryListResponse"), constraints: true}); }
export function makeCategoryReference(value) { return modelFromCodec(value, {..._sdkModelCodec("CategoryReference"), constraints: true}); }
export function makeCategoryResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CategoryResponse"), constraints: true}); }
export function makeChangeSubscriptionPaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeSubscriptionPaymentMethodRequest"), constraints: true}); }
export function makeCheckoutAccess(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutAccess"), constraints: true}); }
export function makeCheckoutBuyerContact(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutBuyerContact"), constraints: true}); }
export function makeCheckoutBuyerContactRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutBuyerContactRequest"), constraints: true}); }
export function makeCheckoutCustomerConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomerConfig"), constraints: true}); }
export function makeCheckoutCustomerPrefill(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomerPrefill"), constraints: true}); }
export function makeCheckoutCustomerVerification(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomerVerification"), constraints: true}); }
export function makeCheckoutCustomerVerificationConfirmation(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomerVerificationConfirmation"), constraints: true}); }
export function makeCheckoutCustomerVerificationConfirmationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomerVerificationConfirmationResponse"), constraints: true}); }
export function makeCheckoutCustomerVerificationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomerVerificationResponse"), constraints: true}); }
export function makeCheckoutCustomTextConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomTextConfig"), constraints: true}); }
export function makeCheckoutCustomTextWriteConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomTextWriteConfig"), constraints: true}); }
export function makeCheckoutDeliveryPinnedDependency(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutDeliveryPinnedDependency"), constraints: true}); }
export function makeCheckoutDeliveryQuoteResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutDeliveryQuoteResponse"), constraints: true}); }
export function makeCheckoutDeliverySelectionResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutDeliverySelectionResultResponse"), constraints: true}); }
export function makeCheckoutDerivedDeliveryResource(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutDerivedDeliveryResource"), constraints: true}); }
export function makeCheckoutDerivedMerchantDeliveryResource(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutDerivedMerchantDeliveryResource"), constraints: true}); }
export function makeCheckoutEffectiveDeliverySelectionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutEffectiveDeliverySelectionResponse"), constraints: true}); }
export function makeCheckoutExpirationConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutExpirationConfig"), constraints: true}); }
export function makeCheckoutLegalConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutLegalConfig"), constraints: true}); }
export function makeCheckoutMerchantSupport(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutMerchantSupport"), constraints: true}); }
export function makeCheckoutPaymentConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPaymentConfig"), constraints: true}); }
export function makeCheckoutPaymentMethodSave(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPaymentMethodSave"), constraints: true}); }
export function makeCheckoutProblemResource(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutProblemResource"), constraints: true}); }
export function makeCheckoutPromotionConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPromotionConfig"), constraints: true}); }
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutQuickPayItemRequest"), constraints: true}); }
export function makeCheckoutRecoveryEmailSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutRecoveryEmailSettings"), constraints: true}); }
export function makeCheckoutRedirectsConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutRedirectsConfig"), constraints: true}); }
export function makeCheckoutSavedPaymentDetailsSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSavedPaymentDetailsSettings"), constraints: true}); }
export function makeCheckoutSession(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSession"), constraints: true}); }
export function makeCheckoutSessionLaunchResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSessionLaunchResponse"), constraints: true}); }
export function makeCheckoutSessionLaunchResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSessionLaunchResult"), constraints: true}); }
export function makeCheckoutSessionLineItemModifierUpdate(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSessionLineItemModifierUpdate"), constraints: true}); }
export function makeCheckoutSessionLineItemModifierUpdateResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSessionLineItemModifierUpdateResponse"), constraints: true}); }
export function makeCheckoutSessionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSessionListResponse"), constraints: true}); }
export function makeCheckoutSessionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSessionResponse"), constraints: true}); }
export function makeCheckoutSessionRevisionConflictDetail(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSessionRevisionConflictDetail"), constraints: true}); }
export function makeCheckoutSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSettings"), constraints: true}); }
export function makeCheckoutSubscriptionTerms(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSubscriptionTerms"), constraints: true}); }
export function makeCheckoutTaxConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutTaxConfig"), constraints: true}); }
export function makeCheckoutTipConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutTipConfig"), constraints: true}); }
export function makeCLITokenRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CLITokenRequest"), constraints: true}); }
export function makeCLITokenResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CLITokenResponse"), constraints: true}); }
export function makeCloseCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseCheckoutSessionRequest"), constraints: true}); }
export function makeCloseOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseOrderRequest"), constraints: true}); }
export function makeCollectInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CollectInvoiceRequest"), constraints: true}); }
export function makeCollectInvoiceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CollectInvoiceResponse"), constraints: true}); }
export function makeCollectInvoiceResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CollectInvoiceResult"), constraints: true}); }
export function makeCommitInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CommitInventoryReservationRequest"), constraints: true}); }
export function makeCompleteReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CompleteReturnRequest"), constraints: true}); }
export function makeCompleteReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CompleteReturnResponse"), constraints: true}); }
export function makeConfirmCheckoutCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmCheckoutCustomerVerificationRequest"), constraints: true}); }
export function makeConfirmEmailChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmEmailChangeRequest"), constraints: true}); }
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmPaymentIntentRequest"), constraints: true}); }
export function makeConfirmReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmReturnResolutionRequest"), constraints: true}); }
export function makeConfirmReturnResolutionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmReturnResolutionResponse"), constraints: true}); }
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConsumeInventoryReservationRequest"), constraints: true}); }
export function makeCountMetric(value) { return modelFromCodec(value, {..._sdkModelCodec("CountMetric"), constraints: true}); }
export function makeCountProvenance(value) { return modelFromCodec(value, {..._sdkModelCodec("CountProvenance"), constraints: true}); }
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateAPIKeyRequest"), constraints: true}); }
export function makeCreateAPIKeyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateAPIKeyResponse"), constraints: true}); }
export function makeCreateBundleComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateBundleComponentRequest"), constraints: true}); }
export function makeCreateBundleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateBundleRequest"), constraints: true}); }
export function makeCreateCategoryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCategoryRequest"), constraints: true}); }
export function makeCreateCheckoutCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutCustomerVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutDeliveryQuoteRequest"), constraints: true}); }
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionRequest"), constraints: true}); }
export function makeCreateCreditNoteAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteAllocationRequest"), constraints: true}); }
export function makeCreateCreditNoteRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteRefundRequest"), constraints: true}); }
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteRequest"), constraints: true}); }
export function makeCreateCustomerAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerAddressRequest"), constraints: true}); }
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerRequest"), constraints: true}); }
export function makeCreateCustomerSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerSessionRequest"), constraints: true}); }
export function makeCreateDeliveryFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryFulfillmentDetails"), constraints: true}); }
export function makeCreateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryLocationSetRequest"), constraints: true}); }
export function makeCreateDeliveryMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryMethodRequest"), constraints: true}); }
export function makeCreateDeliveryOptionsPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryOptionsPreviewRequest"), constraints: true}); }
export function makeCreateDeliveryPickupLocationsPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryPickupLocationsPreviewRequest"), constraints: true}); }
export function makeCreateDeliveryPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryPreviewRequest"), constraints: true}); }
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryProfileRequest"), constraints: true}); }
export function makeCreateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryRateCallbackRequest"), constraints: true}); }
export function makeCreateDeliverySelectionChoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliverySelectionChoiceRequest"), constraints: true}); }
export function makeCreateDeliverySelectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliverySelectionRequest"), constraints: true}); }
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryZoneRequest"), constraints: true}); }
export function makeCreateDemoSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDemoSessionRequest"), constraints: true}); }
export function makeCreateDeviceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeviceRequest"), constraints: true}); }
export function makeCreateDeviceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeviceResponse"), constraints: true}); }
export function makeCreateDeviceResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeviceResult"), constraints: true}); }
export function makeCreateDigitalFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDigitalFulfillmentDetails"), constraints: true}); }
export function makeCreateEmailChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateEmailChangeRequest"), constraints: true}); }
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFeedbackReportRequest"), constraints: true}); }
export function makeCreateFulfillmentEventRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentEventRequest"), constraints: true}); }
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentRequest"), constraints: true}); }
export function makeCreateGiftCardAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardAdjustmentRequest"), constraints: true}); }
export function makeCreateGiftCardCashOutRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardCashOutRequest"), constraints: true}); }
export function makeCreateGiftCardFundingDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardFundingDispositionRequest"), constraints: true}); }
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardLoadRequest"), constraints: true}); }
export function makeCreateGiftCardNotificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardNotificationRequest"), constraints: true}); }
export function makeCreateGiftCardRedemptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardRedemptionRequest"), constraints: true}); }
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardRequest"), constraints: true}); }
export function makeCreateInlineModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInlineModifierGroupRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentRequest"), constraints: true}); }
export function makeCreateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAllocationPolicyRequest"), constraints: true}); }
export function makeCreateInventoryCountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryCountRequest"), constraints: true}); }
export function makeCreateInventoryItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryItemRequest"), constraints: true}); }
export function makeCreateInventoryReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryReceiptRequest"), constraints: true}); }
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryReservationRequest"), constraints: true}); }
export function makeCreateInventoryTransferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryTransferRequest"), constraints: true}); }
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoicePaymentTermRequest"), constraints: true}); }
export function makeCreateInvoiceQuickPayRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceQuickPayRequest"), constraints: true}); }
export function makeCreateInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceRequest"), constraints: true}); }
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateLocationRequest"), constraints: true}); }
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierGroupRequest"), constraints: true}); }
export function makeCreateModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierRequest"), constraints: true}); }
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupRequest"), constraints: true}); }
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetRequest"), constraints: true}); }
export function makeCreateOrderDiscount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscount"), constraints: true}); }
export function makeCreateOrderLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItem"), constraints: true}); }
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderPaymentIntentRequest"), constraints: true}); }
export function makeCreateOrderPaymentIntentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderPaymentIntentResponse"), constraints: true}); }
export function makeCreateOrderPaymentIntentResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderPaymentIntentResult"), constraints: true}); }
export function makeCreateOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderRequest"), constraints: true}); }
export function makeCreateOrderTip(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTip"), constraints: true}); }
export function makeCreateOrganizationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrganizationRequest"), constraints: true}); }
export function makeCreatePackageItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePackageItemRequest"), constraints: true}); }
export function makeCreatePackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePackageRequest"), constraints: true}); }
export function makeCreatePackageResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePackageResponse"), constraints: true}); }
export function makeCreatePackageResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePackageResult"), constraints: true}); }
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppRequest"), constraints: true}); }
export function makeCreatePartnerAppResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppResponse"), constraints: true}); }
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentIntentRequest"), constraints: true}); }
export function makeCreatePaymentIntentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentIntentResponse"), constraints: true}); }
export function makeCreatePaymentIntentResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentIntentResult"), constraints: true}); }
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentLinkRequest"), constraints: true}); }
export function makeCreatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentMethodDomainRequest"), constraints: true}); }
export function makeCreatePayoutRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePayoutRequest"), constraints: true}); }
export function makeCreatePickupFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePickupFulfillmentDetails"), constraints: true}); }
export function makeCreateProductOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionRequest"), constraints: true}); }
export function makeCreateProductOptionValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionValueRequest"), constraints: true}); }
export function makeCreateProductRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequest"), constraints: true}); }
export function makeCreateProductVariantRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductVariantRequest"), constraints: true}); }
export function makeCreatePromotionCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionCodeRequest"), constraints: true}); }
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionRequest"), constraints: true}); }
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequest"), constraints: true}); }
export function makeCreateRefundResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundResponse"), constraints: true}); }
export function makeCreateReportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReportRequest"), constraints: true}); }
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnDispositionRequest"), constraints: true}); }
export function makeCreateReturnDispositionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnDispositionResponse"), constraints: true}); }
export function makeCreateReturnEligibilityCheckRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnEligibilityCheckRequest"), constraints: true}); }
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnInspectionRequest"), constraints: true}); }
export function makeCreateReturnInspectionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnInspectionResponse"), constraints: true}); }
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPolicyRequest"), constraints: true}); }
export function makeCreateReturnPolicyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPolicyResponse"), constraints: true}); }
export function makeCreateReturnPreviewData(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPreviewData"), constraints: true}); }
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPreviewRequest"), constraints: true}); }
export function makeCreateReturnPreviewResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPreviewResponse"), constraints: true}); }
export function makeCreateReturnReasonRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnReasonRequest"), constraints: true}); }
export function makeCreateReturnReasonResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnReasonResponse"), constraints: true}); }
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnReceiptRequest"), constraints: true}); }
export function makeCreateReturnReceiptResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnReceiptResponse"), constraints: true}); }
export function makeCreateReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnRequest"), constraints: true}); }
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionPreviewRequest"), constraints: true}); }
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionRequest"), constraints: true}); }
export function makeCreateReturnResolutionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionResponse"), constraints: true}); }
export function makeCreateReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResponse"), constraints: true}); }
export function makeCreateRiskListRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskListRequest"), constraints: true}); }
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskPreviewRequest"), constraints: true}); }
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskRuleRequest"), constraints: true}); }
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSandboxRequest"), constraints: true}); }
export function makeCreateServiceFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateServiceFulfillmentDetails"), constraints: true}); }
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateShipmentRequest"), constraints: true}); }
export function makeCreateShipmentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateShipmentResponse"), constraints: true}); }
export function makeCreateShipmentResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateShipmentResult"), constraints: true}); }
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPlanRequest"), constraints: true}); }
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionRequest"), constraints: true}); }
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookEndpointRequest"), constraints: true}); }
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookTestEventRequest"), constraints: true}); }
export function makeCreditNote(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNote"), constraints: true}); }
export function makeCreditNoteAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteAllocation"), constraints: true}); }
export function makeCreditNoteAllocationListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteAllocationListResponse"), constraints: true}); }
export function makeCreditNoteAllocationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteAllocationResponse"), constraints: true}); }
export function makeCreditNoteAllocationResult(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteAllocationResult"), constraints: true}); }
export function makeCreditNoteAllocationResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteAllocationResultResponse"), constraints: true}); }
export function makeCreditNoteCorrectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteCorrectionRequest"), constraints: true}); }
export function makeCreditNoteLine(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteLine"), constraints: true}); }
export function makeCreditNoteLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteLineRequest"), constraints: true}); }
export function makeCreditNoteListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteListResponse"), constraints: true}); }
export function makeCreditNoteRefundListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteRefundListResponse"), constraints: true}); }
export function makeCreditNoteRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteRefundRequest"), constraints: true}); }
export function makeCreditNoteResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteResponse"), constraints: true}); }
export function makeCustomer(value) { return modelFromCodec(value, {..._sdkModelCodec("Customer"), constraints: true}); }
export function makeCustomerAccountDNSRecord(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountDNSRecord"), constraints: true}); }
export function makeCustomerAccountDomainStatus(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountDomainStatus"), constraints: true}); }
export function makeCustomerAccountPresentation(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountPresentation"), constraints: true}); }
export function makeCustomerAccountRouteTemplates(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountRouteTemplates"), constraints: true}); }
export function makeCustomerAccountSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountSettings"), constraints: true}); }
export function makeCustomerAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAddress"), constraints: true}); }
export function makeCustomerAddressListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAddressListResponse"), constraints: true}); }
export function makeCustomerAddressResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAddressResponse"), constraints: true}); }
export function makeCustomerDeletionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerDeletionRequest"), constraints: true}); }
export function makeCustomerDeletionRequestListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerDeletionRequestListResponse"), constraints: true}); }
export function makeCustomerDeletionRequestResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerDeletionRequestResponse"), constraints: true}); }
export function makeCustomerEmailDeliverySettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerEmailDeliverySettings"), constraints: true}); }
export function makeCustomerEmailPreferences(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerEmailPreferences"), constraints: true}); }
export function makeCustomerEmailPreferencesResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerEmailPreferencesResponse"), constraints: true}); }
export function makeCustomerListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerListResponse"), constraints: true}); }
export function makeCustomerReceivableBalance(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerReceivableBalance"), constraints: true}); }
export function makeCustomerReceivables(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerReceivables"), constraints: true}); }
export function makeCustomerResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerResponse"), constraints: true}); }
export function makeCustomerSession(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerSession"), constraints: true}); }
export function makeCustomerSessionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerSessionResponse"), constraints: true}); }
export function makeCustomerSessionRevocation(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerSessionRevocation"), constraints: true}); }
export function makeCustomerSessionRevocationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerSessionRevocationResponse"), constraints: true}); }
export function makeCustomerSessionsRevocation(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerSessionsRevocation"), constraints: true}); }
export function makeCustomerSessionsRevocationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerSessionsRevocationResponse"), constraints: true}); }
export function makeDecideReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnInspectionLineItemRequest"), constraints: true}); }
export function makeDecideReturnInspectionLineItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnInspectionLineItemResponse"), constraints: true}); }
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnRequest"), constraints: true}); }
export function makeDecideReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnResponse"), constraints: true}); }
export function makeDeclineReviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeclineReviewRequest"), constraints: true}); }
export function makeDeletePayoutDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeletePayoutDestinationRequest"), constraints: true}); }
export function makeDeleteReturnLineItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeleteReturnLineItemResponse"), constraints: true}); }
export function makeDeleteReturnPolicyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeleteReturnPolicyResponse"), constraints: true}); }
export function makeDeleteReturnReasonResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeleteReturnReasonResponse"), constraints: true}); }
export function makeDeliveryAddressAdvisoryResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAddressAdvisoryResource"), constraints: true}); }
export function makeDeliveryAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAddressRequest"), constraints: true}); }
export function makeDeliveryAddressResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAddressResource"), constraints: true}); }
export function makeDeliveryArrivalEstimate(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryArrivalEstimate"), constraints: true}); }
export function makeDeliveryAvailability(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAvailability"), constraints: true}); }
export function makeDeliveryBlackoutInterval(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBlackoutInterval"), constraints: true}); }
export function makeDeliveryBusinessDayRange(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBusinessDayRange"), constraints: true}); }
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBuyerLocationRequest"), constraints: true}); }
export function makeDeliveryBuyerLocationResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBuyerLocationResource"), constraints: true}); }
export function makeDeliveryCalculatedPricingStrategy(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCalculatedPricingStrategy"), constraints: true}); }
export function makeDeliveryCalculatedPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCalculatedPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryCallbackPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCallbackPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryCallerSuppliedPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCallerSuppliedPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryCandidateOutcomeResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCandidateOutcomeResource"), constraints: true}); }
export function makeDeliveryCoordinateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCoordinateRequest"), constraints: true}); }
export function makeDeliveryCountryCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCountryCondition"), constraints: true}); }
export function makeDeliveryCustomerBooleanCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCustomerBooleanCondition"), constraints: true}); }
export function makeDeliveryCustomerGroupCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCustomerGroupCondition"), constraints: true}); }
export function makeDeliveryDistance(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryDistance"), constraints: true}); }
export function makeDeliveryDistanceUnitPrice(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryDistanceUnitPrice"), constraints: true}); }
export function makeDeliveryDistanceUnitPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryDistanceUnitPriceRequest"), constraints: true}); }
export function makeDeliveryEligibilityExpression(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryEligibilityExpression"), constraints: true}); }
export function makeDeliveryEligibilityMismatch(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryEligibilityMismatch"), constraints: true}); }
export function makeDeliveryEstimateRule(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryEstimateRule"), constraints: true}); }
export function makeDeliveryEstimateRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryEstimateRuleRequest"), constraints: true}); }
export function makeDeliveryExternalPricingStrategy(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryExternalPricingStrategy"), constraints: true}); }
export function makeDeliveryFixedPricingStrategy(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryFixedPricingStrategy"), constraints: true}); }
export function makeDeliveryFixedPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryFixedPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryFulfillmentDetails"), constraints: true}); }
export function makeDeliveryInputConstraint(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryInputConstraint"), constraints: true}); }
export function makeDeliveryInputRequirement(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryInputRequirement"), constraints: true}); }
export function makeDeliveryInventoryAssignmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryInventoryAssignmentRequest"), constraints: true}); }
export function makeDeliveryInventoryReservationSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryInventoryReservationSummary"), constraints: true}); }
export function makeDeliveryLocalDeliveryDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryLocalDeliveryDetails"), constraints: true}); }
export function makeDeliveryLocationSet(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryLocationSet"), constraints: true}); }
export function makeDeliveryLocationSetConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryLocationSetConfiguration"), constraints: true}); }
export function makeDeliveryLocationSetListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryLocationSetListResponse"), constraints: true}); }
export function makeDeliveryLocationSetResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryLocationSetResponse"), constraints: true}); }
export function makeDeliveryLocationSummaryResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryLocationSummaryResource"), constraints: true}); }
export function makeDeliveryMerchantDiagnostic(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMerchantDiagnostic"), constraints: true}); }
export function makeDeliveryMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethod"), constraints: true}); }
export function makeDeliveryMethodConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodConfiguration"), constraints: true}); }
export function makeDeliveryMethodConfigurationCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodConfigurationCreateRequest"), constraints: true}); }
export function makeDeliveryMethodConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodConfigurationRequest"), constraints: true}); }
export function makeDeliveryMethodListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodListResponse"), constraints: true}); }
export function makeDeliveryMethodOriginSelector(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelector"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorRequest"), constraints: true}); }
export function makeDeliveryMethodResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodResponse"), constraints: true}); }
export function makeDeliveryOptionProjection(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryOptionProjection"), constraints: true}); }
export function makeDeliveryPendingCallerRateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPendingCallerRateRequest"), constraints: true}); }
export function makeDeliveryPickupAvailability(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailability"), constraints: true}); }
export function makeDeliveryPickupAvailabilityCandidateOutcome(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityCandidateOutcome"), constraints: true}); }
export function makeDeliveryPickupAvailabilityDiagnostic(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityDiagnostic"), constraints: true}); }
export function makeDeliveryPickupAvailabilityLocationResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityLocationResource"), constraints: true}); }
export function makeDeliveryPickupAvailabilityLocationSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityLocationSummary"), constraints: true}); }
export function makeDeliveryPickupAvailabilityMaximumDistanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityMaximumDistanceRequest"), constraints: true}); }
export function makeDeliveryPickupAvailabilityMethodResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityMethodResource"), constraints: true}); }
export function makeDeliveryPickupAvailabilityQuantityResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityQuantityResource"), constraints: true}); }
export function makeDeliveryPickupDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupDetails"), constraints: true}); }
export function makeDeliveryPlan(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPlan"), constraints: true}); }
export function makeDeliveryPostalCodeCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPostalCodeCondition"), constraints: true}); }
export function makeDeliveryPostalCodeValue(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPostalCodeValue"), constraints: true}); }
export function makeDeliveryPreview(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPreview"), constraints: true}); }
export function makeDeliveryPreviewChoiceGroupResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPreviewChoiceGroupResource"), constraints: true}); }
export function makeDeliveryPreviewResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPreviewResponse"), constraints: true}); }
export function makeDeliveryPreviewRoutingSource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPreviewRoutingSource"), constraints: true}); }
export function makeDeliveryPricingRate(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingRate"), constraints: true}); }
export function makeDeliveryPricingRateCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingRateCreateRequest"), constraints: true}); }
export function makeDeliveryPricingRateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingRateRequest"), constraints: true}); }
export function makeDeliveryPricingStrategy(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategy"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateRequest"), constraints: true}); }
export function makeDeliveryPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryPricingTierBand(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingTierBand"), constraints: true}); }
export function makeDeliveryPricingTierBandRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingTierBandRequest"), constraints: true}); }
export function makeDeliveryProfile(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfile"), constraints: true}); }
export function makeDeliveryProfileAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileAssignment"), constraints: true}); }
export function makeDeliveryProfileAssignmentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileAssignmentResponse"), constraints: true}); }
export function makeDeliveryProfileConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileConfiguration"), constraints: true}); }
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileConfigurationRequest"), constraints: true}); }
export function makeDeliveryProfileDiagnostics(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileDiagnostics"), constraints: true}); }
export function makeDeliveryProfileListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileListResponse"), constraints: true}); }
export function makeDeliveryProfileOriginPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileOriginPolicy"), constraints: true}); }
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileOriginPolicyRequest"), constraints: true}); }
export function makeDeliveryProfileResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileResponse"), constraints: true}); }
export function makeDeliveryQuote(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryQuote"), constraints: true}); }
export function makeDeliveryQuoteChoiceGroupResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryQuoteChoiceGroupResource"), constraints: true}); }
export function makeDeliveryQuoteExecutionLegResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryQuoteExecutionLegResource"), constraints: true}); }
export function makeDeliveryQuoteLineItemResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryQuoteLineItemResource"), constraints: true}); }
export function makeDeliveryQuoteListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryQuoteListResponse"), constraints: true}); }
export function makeDeliveryQuoteMethodResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryQuoteMethodResource"), constraints: true}); }
export function makeDeliveryRadiusCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRadiusCondition"), constraints: true}); }
export function makeDeliveryRadiusOrigin(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRadiusOrigin"), constraints: true}); }
export function makeDeliveryRateCallback(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallback"), constraints: true}); }
export function makeDeliveryRateCallbackConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackConfiguration"), constraints: true}); }
export function makeDeliveryRateCallbackConnectionCheck(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackConnectionCheck"), constraints: true}); }
export function makeDeliveryRateCallbackConnectionCheckResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackConnectionCheckResponse"), constraints: true}); }
export function makeDeliveryRateCallbackListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackListResponse"), constraints: true}); }
export function makeDeliveryRateCallbackResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackResponse"), constraints: true}); }
export function makeDeliveryRateCallbackSigningKeyRotation(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackSigningKeyRotation"), constraints: true}); }
export function makeDeliveryRateCallbackSigningKeyRotationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackSigningKeyRotationResponse"), constraints: true}); }
export function makeDeliveryRateCallbackTestDelivery(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackTestDelivery"), constraints: true}); }
export function makeDeliveryRateCallbackTestDeliveryResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackTestDeliveryResponse"), constraints: true}); }
export function makeDeliveryRateTablePricingStrategy(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateTablePricingStrategy"), constraints: true}); }
export function makeDeliveryRateTablePricingStrategyCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateTablePricingStrategyCreateRequest"), constraints: true}); }
export function makeDeliveryRateTablePricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateTablePricingStrategyRequest"), constraints: true}); }
export function makeDeliveryRecipientRequirement(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRecipientRequirement"), constraints: true}); }
export function makeDeliveryRecipientResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRecipientResource"), constraints: true}); }
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRevocation"), constraints: true}); }
export function makeDeliveryRevocationImpact(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRevocationImpact"), constraints: true}); }
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRevocationResponse"), constraints: true}); }
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRevocationTarget"), constraints: true}); }
export function makeDeliveryScheduleWindowRule(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryScheduleWindowRule"), constraints: true}); }
export function makeDeliveryScheduleWindowRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryScheduleWindowRuleRequest"), constraints: true}); }
export function makeDeliverySelection(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelection"), constraints: true}); }
export function makeDeliverySelectionChoiceResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionChoiceResource"), constraints: true}); }
export function makeDeliverySelectionInstructionsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionInstructionsRequest"), constraints: true}); }
export function makeDeliverySelectionLifecycleEventResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionLifecycleEventResource"), constraints: true}); }
export function makeDeliverySelectionRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionRecipientRequest"), constraints: true}); }
export function makeDeliverySelectionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionResponse"), constraints: true}); }
export function makeDeliverySelectionResult(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionResult"), constraints: true}); }
export function makeDeliveryShipmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryShipmentDetails"), constraints: true}); }
export function makeDeliveryStateCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryStateCondition"), constraints: true}); }
export function makeDeliveryTieredPricingStrategy(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategy"), constraints: true}); }
export function makeDeliveryTieredPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryTransitTimeRule(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTransitTimeRule"), constraints: true}); }
export function makeDeliveryWeeklyInterval(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeeklyInterval"), constraints: true}); }
export function makeDeliveryWeightUnitPrice(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeightUnitPrice"), constraints: true}); }
export function makeDeliveryWeightUnitPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeightUnitPriceRequest"), constraints: true}); }
export function makeDeliveryWindowRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowRequest"), constraints: true}); }
export function makeDeliveryWindowResource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowResource"), constraints: true}); }
export function makeDeliveryWindowTimeCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowTimeCondition"), constraints: true}); }
export function makeDeliveryZone(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZone"), constraints: true}); }
export function makeDeliveryZoneCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneCondition"), constraints: true}); }
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneConfiguration"), constraints: true}); }
export function makeDeliveryZoneListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneListResponse"), constraints: true}); }
export function makeDeliveryZoneResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneResponse"), constraints: true}); }
export function makeDemoSession(value) { return modelFromCodec(value, {..._sdkModelCodec("DemoSession"), constraints: true}); }
export function makeDemoSessionAPIKey(value) { return modelFromCodec(value, {..._sdkModelCodec("DemoSessionAPIKey"), constraints: true}); }
export function makeDemoSessionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DemoSessionResponse"), constraints: true}); }
export function makeDeveloperAuthContext(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperAuthContext"), constraints: true}); }
export function makeDeveloperAuthContextResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperAuthContextResponse"), constraints: true}); }
export function makeDeveloperInitialAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperInitialAPIKeyRequest"), constraints: true}); }
export function makeDeveloperSandbox(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperSandbox"), constraints: true}); }
export function makeDeveloperSandboxWithAPIKey(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperSandboxWithAPIKey"), constraints: true}); }
export function makeDevice(value) { return modelFromCodec(value, {..._sdkModelCodec("Device"), constraints: true}); }
export function makeDeviceListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeviceListResponse"), constraints: true}); }
export function makeDeviceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DeviceResponse"), constraints: true}); }
export function makeDigitalFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("DigitalFulfillmentDetails"), constraints: true}); }
export function makeDimensions(value) { return modelFromCodec(value, {..._sdkModelCodec("Dimensions"), constraints: true}); }
export function makeDiscountPreview(value) { return modelFromCodec(value, {..._sdkModelCodec("DiscountPreview"), constraints: true}); }
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DiscountPreviewRequest"), constraints: true}); }
export function makeDiscountPreviewResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DiscountPreviewResponse"), constraints: true}); }
export function makeDispute(value) { return modelFromCodec(value, {..._sdkModelCodec("Dispute"), constraints: true}); }
export function makeDisputeListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DisputeListResponse"), constraints: true}); }
export function makeDisputeResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("DisputeResponse"), constraints: true}); }
export function makeDocumentTaxID(value) { return modelFromCodec(value, {..._sdkModelCodec("DocumentTaxID"), constraints: true}); }
export function makeEffectiveDeliverySelectionResource(value) { return modelFromCodec(value, {..._sdkModelCodec("EffectiveDeliverySelectionResource"), constraints: true}); }
export function makeEmailChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("EmailChangeRequest"), constraints: true}); }
export function makeEmailChangeRequestResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("EmailChangeRequestResponse"), constraints: true}); }
export function makeErrorDetail(value) { return modelFromCodec(value, {..._sdkModelCodec("ErrorDetail"), constraints: true}); }
export function makeErrorEnvelope(value) { return modelFromCodec(value, {..._sdkModelCodec("ErrorEnvelope"), constraints: true}); }
export function makeErrorObject(value) { return modelFromCodec(value, {..._sdkModelCodec("ErrorObject"), constraints: true}); }
export function makeErrorRemediation(value) { return modelFromCodec(value, {..._sdkModelCodec("ErrorRemediation"), constraints: true}); }
export function makeErrorResourceReference(value) { return modelFromCodec(value, {..._sdkModelCodec("ErrorResourceReference"), constraints: true}); }
export function makeExpandedCustomerSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedCustomerSummary"), constraints: true}); }
export function makeExpandedInvoiceSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedInvoiceSummary"), constraints: true}); }
export function makeExpandedOrderSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedOrderSummary"), constraints: true}); }
export function makeExpandedOrganizationSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedOrganizationSummary"), constraints: true}); }
export function makeExpandedPackageSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedPackageSummary"), constraints: true}); }
export function makeExpandedPaymentIntentSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedPaymentIntentSummary"), constraints: true}); }
export function makeExpandedPaymentLinkSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedPaymentLinkSummary"), constraints: true}); }
export function makeExpandedPaymentMethodSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedPaymentMethodSummary"), constraints: true}); }
export function makeExpandedPayoutDestinationSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedPayoutDestinationSummary"), constraints: true}); }
export function makeExpandedPayoutSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedPayoutSummary"), constraints: true}); }
export function makeExpandedShipmentSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedShipmentSummary"), constraints: true}); }
export function makeExpandedSubscriptionPlanSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedSubscriptionPlanSummary"), constraints: true}); }
export function makeExpandedSubscriptionSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ExpandedSubscriptionSummary"), constraints: true}); }
export function makeFeedbackReport(value) { return modelFromCodec(value, {..._sdkModelCodec("FeedbackReport"), constraints: true}); }
export function makeFeedbackReportingClient(value) { return modelFromCodec(value, {..._sdkModelCodec("FeedbackReportingClient"), constraints: true}); }
export function makeFeedbackReportListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FeedbackReportListResponse"), constraints: true}); }
export function makeFeedbackReportResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FeedbackReportResponse"), constraints: true}); }
export function makeFraudWarning(value) { return modelFromCodec(value, {..._sdkModelCodec("FraudWarning"), constraints: true}); }
export function makeFraudWarningListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FraudWarningListResponse"), constraints: true}); }
export function makeFraudWarningResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FraudWarningResponse"), constraints: true}); }
export function makeFulfillment(value) { return modelFromCodec(value, {..._sdkModelCodec("Fulfillment"), constraints: true}); }
export function makeFulfillmentChargeLink(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentChargeLink"), constraints: true}); }
export function makeFulfillmentCommandResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentCommandResponse"), constraints: true}); }
export function makeFulfillmentCommandResult(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentCommandResult"), constraints: true}); }
export function makeFulfillmentEvent(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentEvent"), constraints: true}); }
export function makeFulfillmentEventListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentEventListResponse"), constraints: true}); }
export function makeFulfillmentEventResourceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentEventResourceResponse"), constraints: true}); }
export function makeFulfillmentEventResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentEventResponse"), constraints: true}); }
export function makeFulfillmentEventResult(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentEventResult"), constraints: true}); }
export function makeFulfillmentHold(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentHold"), constraints: true}); }
export function makeFulfillmentLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentLineItem"), constraints: true}); }
export function makeFulfillmentLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentLineItemRequest"), constraints: true}); }
export function makeFulfillmentListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentListResponse"), constraints: true}); }
export function makeFulfillmentNotification(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentNotification"), constraints: true}); }
export function makeFulfillmentNotificationListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentNotificationListResponse"), constraints: true}); }
export function makeFulfillmentNotificationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentNotificationResponse"), constraints: true}); }
export function makeFulfillmentOutcome(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentOutcome"), constraints: true}); }
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentPackagingRequest"), constraints: true}); }
export function makeFulfillmentRecipient(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentRecipient"), constraints: true}); }
export function makeFulfillmentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentResponse"), constraints: true}); }
export function makeFulfillmentSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentSettings"), constraints: true}); }
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequest"), constraints: true}); }
export function makeFulfillmentTransitionRequestAccept(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestAccept"), constraints: true}); }
export function makeFulfillmentTransitionRequestCancel(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestCancel"), constraints: true}); }
export function makeFulfillmentTransitionRequestComplete(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestComplete"), constraints: true}); }
export function makeFulfillmentTransitionRequestDispatch(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestDispatch"), constraints: true}); }
export function makeFulfillmentTransitionRequestFail(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestFail"), constraints: true}); }
export function makeFulfillmentTransitionRequestHold(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestHold"), constraints: true}); }
export function makeFulfillmentTransitionRequestMarkNoShow(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestMarkNoShow"), constraints: true}); }
export function makeFulfillmentTransitionRequestMarkPacked(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestMarkPacked"), constraints: true}); }
export function makeFulfillmentTransitionRequestMarkPicked(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestMarkPicked"), constraints: true}); }
export function makeFulfillmentTransitionRequestMarkPreparing(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestMarkPreparing"), constraints: true}); }
export function makeFulfillmentTransitionRequestMarkReady(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestMarkReady"), constraints: true}); }
export function makeFulfillmentTransitionRequestSchedule(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestSchedule"), constraints: true}); }
export function makeFulfillmentTransitionRequestStart(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestStart"), constraints: true}); }
export function makeGetOrCreateReturnResolutionCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GetOrCreateReturnResolutionCheckoutSessionRequest"), constraints: true}); }
export function makeGetOrCreateReturnResolutionCheckoutSessionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetOrCreateReturnResolutionCheckoutSessionResponse"), constraints: true}); }
export function makeGetPaymentIntentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetPaymentIntentResponse"), constraints: true}); }
export function makeGetPaymentIntentResult(value) { return modelFromCodec(value, {..._sdkModelCodec("GetPaymentIntentResult"), constraints: true}); }
export function makeGetReturnDispositionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnDispositionResponse"), constraints: true}); }
export function makeGetReturnInspectionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnInspectionResponse"), constraints: true}); }
export function makeGetReturnLineItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnLineItemResponse"), constraints: true}); }
export function makeGetReturnPolicyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnPolicyResponse"), constraints: true}); }
export function makeGetReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnPolicyRevisionResponse"), constraints: true}); }
export function makeGetReturnReasonResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnReasonResponse"), constraints: true}); }
export function makeGetReturnReceiptResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnReceiptResponse"), constraints: true}); }
export function makeGetReturnResolutionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnResolutionResponse"), constraints: true}); }
export function makeGetReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GetReturnResponse"), constraints: true}); }
export function makeGiftCard(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCard"), constraints: true}); }
export function makeGiftCardCommandResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardCommandResponse"), constraints: true}); }
export function makeGiftCardCommandResult(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardCommandResult"), constraints: true}); }
export function makeGiftCardCustomAmountBounds(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardCustomAmountBounds"), constraints: true}); }
export function makeGiftCardFundingDisposition(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingDisposition"), constraints: true}); }
export function makeGiftCardFundingDispositionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingDispositionResponse"), constraints: true}); }
export function makeGiftCardFundingDispute(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingDispute"), constraints: true}); }
export function makeGiftCardFundingLossResolution(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingLossResolution"), constraints: true}); }
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSource"), constraints: true}); }
export function makeGiftCardListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardListResponse"), constraints: true}); }
export function makeGiftCardLoad(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardLoad"), constraints: true}); }
export function makeGiftCardLoadListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardLoadListResponse"), constraints: true}); }
export function makeGiftCardLoadResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardLoadResponse"), constraints: true}); }
export function makeGiftCardNotification(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotification"), constraints: true}); }
export function makeGiftCardNotificationDelivery(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationDelivery"), constraints: true}); }
export function makeGiftCardNotificationDeliveryAttempt(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationDeliveryAttempt"), constraints: true}); }
export function makeGiftCardNotificationListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationListResponse"), constraints: true}); }
export function makeGiftCardNotificationProviderOutcome(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationProviderOutcome"), constraints: true}); }
export function makeGiftCardNotificationRecipient(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationRecipient"), constraints: true}); }
export function makeGiftCardNotificationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationResponse"), constraints: true}); }
export function makeGiftCardProductConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardProductConfiguration"), constraints: true}); }
export function makeGiftCardPurchaseRecipient(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRecipient"), constraints: true}); }
export function makeGiftCardPurchaseRefundAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRefundAllocation"), constraints: true}); }
export function makeGiftCardPurchaseRefundRecovery(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRefundRecovery"), constraints: true}); }
export function makeGiftCardPurchaseRefundRecoveryDestination(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRefundRecoveryDestination"), constraints: true}); }
export function makeGiftCardPurchaseRefundValueAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRefundValueAllocation"), constraints: true}); }
export function makeGiftCardPurchaseRefundValueHold(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRefundValueHold"), constraints: true}); }
export function makeGiftCardPurchaseRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRequest"), constraints: true}); }
export function makeGiftCardPurchaseRestoration(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRestoration"), constraints: true}); }
export function makeGiftCardPurchaseSnapshot(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseSnapshot"), constraints: true}); }
export function makeGiftCardRedemption(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardRedemption"), constraints: true}); }
export function makeGiftCardRedemptionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardRedemptionListResponse"), constraints: true}); }
export function makeGiftCardRedemptionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardRedemptionResponse"), constraints: true}); }
export function makeGiftCardRefundProvenance(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardRefundProvenance"), constraints: true}); }
export function makeGiftCardResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardResponse"), constraints: true}); }
export function makeGiftCardTransaction(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardTransaction"), constraints: true}); }
export function makeGiftCardTransactionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardTransactionListResponse"), constraints: true}); }
export function makeGiftCardVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardVersionRequest"), constraints: true}); }
export function makeGrantOrganizationMembershipRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GrantOrganizationMembershipRequest"), constraints: true}); }
export function makeHoldDetail(value) { return modelFromCodec(value, {..._sdkModelCodec("HoldDetail"), constraints: true}); }
export function makeHostedCheckout(value) { return modelFromCodec(value, {..._sdkModelCodec("HostedCheckout"), constraints: true}); }
export function makeImage(value) { return modelFromCodec(value, {..._sdkModelCodec("Image"), constraints: true}); }
export function makeImageReferenceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageReferenceRequest"), constraints: true}); }
export function makeImageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageRequest"), constraints: true}); }
export function makeIncomingWebhook04494e8bd1b3Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook04494e8bd1b3Payload"), constraints: true}); }
export function makeIncomingWebhook0480be55a902Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook0480be55a902Payload"), constraints: true}); }
export function makeIncomingWebhook05810405f7d2Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook05810405f7d2Payload"), constraints: true}); }
export function makeIncomingWebhook067bab7c655aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook067bab7c655aPayload"), constraints: true}); }
export function makeIncomingWebhook06baf65fb878Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook06baf65fb878Payload"), constraints: true}); }
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook0b04bd9d63dbPayload"), constraints: true}); }
export function makeIncomingWebhook0caa82ed1aafPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook0caa82ed1aafPayload"), constraints: true}); }
export function makeIncomingWebhook0d891c599afbPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook0d891c599afbPayload"), constraints: true}); }
export function makeIncomingWebhook0d9fec82cba8Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook0d9fec82cba8Payload"), constraints: true}); }
export function makeIncomingWebhook0ed7a866163aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook0ed7a866163aPayload"), constraints: true}); }
export function makeIncomingWebhook10de2029f92ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook10de2029f92ePayload"), constraints: true}); }
export function makeIncomingWebhook1255f92e9f23Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook1255f92e9f23Payload"), constraints: true}); }
export function makeIncomingWebhook13640c439e38Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook13640c439e38Payload"), constraints: true}); }
export function makeIncomingWebhook14d267be17f3Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook14d267be17f3Payload"), constraints: true}); }
export function makeIncomingWebhook155e0b06aa8fPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook155e0b06aa8fPayload"), constraints: true}); }
export function makeIncomingWebhook172f57408f3aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook172f57408f3aPayload"), constraints: true}); }
export function makeIncomingWebhook1824a72a4c81Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook1824a72a4c81Payload"), constraints: true}); }
export function makeIncomingWebhook18deb3ad40c4Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook18deb3ad40c4Payload"), constraints: true}); }
export function makeIncomingWebhook1a6523f8bf80Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook1a6523f8bf80Payload"), constraints: true}); }
export function makeIncomingWebhook1def026adfecPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook1def026adfecPayload"), constraints: true}); }
export function makeIncomingWebhook1eb1077dc5faPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook1eb1077dc5faPayload"), constraints: true}); }
export function makeIncomingWebhook2100acf09455Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2100acf09455Payload"), constraints: true}); }
export function makeIncomingWebhook2111a23e6e7cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2111a23e6e7cPayload"), constraints: true}); }
export function makeIncomingWebhook22d72673a8cdPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook22d72673a8cdPayload"), constraints: true}); }
export function makeIncomingWebhook2410dfed959ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2410dfed959ePayload"), constraints: true}); }
export function makeIncomingWebhook2525f823ec7cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2525f823ec7cPayload"), constraints: true}); }
export function makeIncomingWebhook25a1d8aaa819Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook25a1d8aaa819Payload"), constraints: true}); }
export function makeIncomingWebhook26154f9b0abbPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook26154f9b0abbPayload"), constraints: true}); }
export function makeIncomingWebhook274ba21f04d5Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook274ba21f04d5Payload"), constraints: true}); }
export function makeIncomingWebhook2786e5956695Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2786e5956695Payload"), constraints: true}); }
export function makeIncomingWebhook2841a4070c41Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2841a4070c41Payload"), constraints: true}); }
export function makeIncomingWebhook2873f18b6724Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2873f18b6724Payload"), constraints: true}); }
export function makeIncomingWebhook28c5dc1777e5Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook28c5dc1777e5Payload"), constraints: true}); }
export function makeIncomingWebhook28eb66b9f1a5Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook28eb66b9f1a5Payload"), constraints: true}); }
export function makeIncomingWebhook290918a8af6ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook290918a8af6ePayload"), constraints: true}); }
export function makeIncomingWebhook2b16597f72aaPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2b16597f72aaPayload"), constraints: true}); }
export function makeIncomingWebhook2c03ad91f156Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook2c03ad91f156Payload"), constraints: true}); }
export function makeIncomingWebhook30ac14eea065Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook30ac14eea065Payload"), constraints: true}); }
export function makeIncomingWebhook31bad37575e1Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook31bad37575e1Payload"), constraints: true}); }
export function makeIncomingWebhook32b1c5e66db2Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook32b1c5e66db2Payload"), constraints: true}); }
export function makeIncomingWebhook335ccd991b2bPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook335ccd991b2bPayload"), constraints: true}); }
export function makeIncomingWebhook33ee5571b4b4Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook33ee5571b4b4Payload"), constraints: true}); }
export function makeIncomingWebhook3573c4463034Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3573c4463034Payload"), constraints: true}); }
export function makeIncomingWebhook358012160ab8Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook358012160ab8Payload"), constraints: true}); }
export function makeIncomingWebhook35b36170e2ebPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook35b36170e2ebPayload"), constraints: true}); }
export function makeIncomingWebhook38eda7a4e990Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook38eda7a4e990Payload"), constraints: true}); }
export function makeIncomingWebhook39300cef9ff7Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook39300cef9ff7Payload"), constraints: true}); }
export function makeIncomingWebhook3a56bcc239ddPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3a56bcc239ddPayload"), constraints: true}); }
export function makeIncomingWebhook3ae537b058b5Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3ae537b058b5Payload"), constraints: true}); }
export function makeIncomingWebhook3b618fd743f5Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3b618fd743f5Payload"), constraints: true}); }
export function makeIncomingWebhook3b80f4a3f54aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3b80f4a3f54aPayload"), constraints: true}); }
export function makeIncomingWebhook3bed705c5a7fPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3bed705c5a7fPayload"), constraints: true}); }
export function makeIncomingWebhook3dbc0a577678Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3dbc0a577678Payload"), constraints: true}); }
export function makeIncomingWebhook3e1e165872bePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3e1e165872bePayload"), constraints: true}); }
export function makeIncomingWebhook3e2b96ab23f9Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook3e2b96ab23f9Payload"), constraints: true}); }
export function makeIncomingWebhook42d1750d6349Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook42d1750d6349Payload"), constraints: true}); }
export function makeIncomingWebhook42dd85c73d6bPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook42dd85c73d6bPayload"), constraints: true}); }
export function makeIncomingWebhook43a17bfb8144Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook43a17bfb8144Payload"), constraints: true}); }
export function makeIncomingWebhook44764240a51fPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook44764240a51fPayload"), constraints: true}); }
export function makeIncomingWebhook44e6923a1369Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook44e6923a1369Payload"), constraints: true}); }
export function makeIncomingWebhook45be12e0c91dPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook45be12e0c91dPayload"), constraints: true}); }
export function makeIncomingWebhook46209f173440Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook46209f173440Payload"), constraints: true}); }
export function makeIncomingWebhook498370f9652cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook498370f9652cPayload"), constraints: true}); }
export function makeIncomingWebhook4cf95bc872d3Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook4cf95bc872d3Payload"), constraints: true}); }
export function makeIncomingWebhook527f9bd2c39dPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook527f9bd2c39dPayload"), constraints: true}); }
export function makeIncomingWebhook54f21d035575Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook54f21d035575Payload"), constraints: true}); }
export function makeIncomingWebhook54f564ce918cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook54f564ce918cPayload"), constraints: true}); }
export function makeIncomingWebhook5552ddfae579Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook5552ddfae579Payload"), constraints: true}); }
export function makeIncomingWebhook566155358f70Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook566155358f70Payload"), constraints: true}); }
export function makeIncomingWebhook587b04e915e2Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook587b04e915e2Payload"), constraints: true}); }
export function makeIncomingWebhook588d0bbca380Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook588d0bbca380Payload"), constraints: true}); }
export function makeIncomingWebhook58b33e47adbePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook58b33e47adbePayload"), constraints: true}); }
export function makeIncomingWebhook5bf59a0e8b86Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook5bf59a0e8b86Payload"), constraints: true}); }
export function makeIncomingWebhook5de06b12da29Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook5de06b12da29Payload"), constraints: true}); }
export function makeIncomingWebhook60391de8320bPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook60391de8320bPayload"), constraints: true}); }
export function makeIncomingWebhook607f05b24d65Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook607f05b24d65Payload"), constraints: true}); }
export function makeIncomingWebhook622846acc8b6Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook622846acc8b6Payload"), constraints: true}); }
export function makeIncomingWebhook63b2b06a26ecPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook63b2b06a26ecPayload"), constraints: true}); }
export function makeIncomingWebhook64406eae7092Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook64406eae7092Payload"), constraints: true}); }
export function makeIncomingWebhook647f08b314c3Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook647f08b314c3Payload"), constraints: true}); }
export function makeIncomingWebhook659c69fe23c6Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook659c69fe23c6Payload"), constraints: true}); }
export function makeIncomingWebhook66f11b3fe6a8Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook66f11b3fe6a8Payload"), constraints: true}); }
export function makeIncomingWebhook67cf9ddb98ebPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook67cf9ddb98ebPayload"), constraints: true}); }
export function makeIncomingWebhook68e5035f44d1Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook68e5035f44d1Payload"), constraints: true}); }
export function makeIncomingWebhook6a2a6e17495ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook6a2a6e17495ePayload"), constraints: true}); }
export function makeIncomingWebhook6abcc176d530Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook6abcc176d530Payload"), constraints: true}); }
export function makeIncomingWebhook6d96c0c875cdPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook6d96c0c875cdPayload"), constraints: true}); }
export function makeIncomingWebhook6e888acafb4bPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook6e888acafb4bPayload"), constraints: true}); }
export function makeIncomingWebhook6f55e77725f4Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook6f55e77725f4Payload"), constraints: true}); }
export function makeIncomingWebhook701c073b0a0cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook701c073b0a0cPayload"), constraints: true}); }
export function makeIncomingWebhook7216a23a3dddPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7216a23a3dddPayload"), constraints: true}); }
export function makeIncomingWebhook72368f2647acPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook72368f2647acPayload"), constraints: true}); }
export function makeIncomingWebhook7253fff5f748Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7253fff5f748Payload"), constraints: true}); }
export function makeIncomingWebhook72eec85cad89Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook72eec85cad89Payload"), constraints: true}); }
export function makeIncomingWebhook769913a11504Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook769913a11504Payload"), constraints: true}); }
export function makeIncomingWebhook7730424c8474Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7730424c8474Payload"), constraints: true}); }
export function makeIncomingWebhook78590778ef68Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook78590778ef68Payload"), constraints: true}); }
export function makeIncomingWebhook7adf7ff33e7aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7adf7ff33e7aPayload"), constraints: true}); }
export function makeIncomingWebhook7bde345d1a10Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7bde345d1a10Payload"), constraints: true}); }
export function makeIncomingWebhook7c5df18e2269Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7c5df18e2269Payload"), constraints: true}); }
export function makeIncomingWebhook7cb66beed654Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7cb66beed654Payload"), constraints: true}); }
export function makeIncomingWebhook7d17f7f10156Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7d17f7f10156Payload"), constraints: true}); }
export function makeIncomingWebhook7dc0310d3669Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7dc0310d3669Payload"), constraints: true}); }
export function makeIncomingWebhook7dd2b7d6ef54Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook7dd2b7d6ef54Payload"), constraints: true}); }
export function makeIncomingWebhook8061fc32f027Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook8061fc32f027Payload"), constraints: true}); }
export function makeIncomingWebhook8172dd26545fPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook8172dd26545fPayload"), constraints: true}); }
export function makeIncomingWebhook8364247aa322Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook8364247aa322Payload"), constraints: true}); }
export function makeIncomingWebhook88596065c1b9Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook88596065c1b9Payload"), constraints: true}); }
export function makeIncomingWebhook88c91570cbe0Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook88c91570cbe0Payload"), constraints: true}); }
export function makeIncomingWebhook89b737dd7119Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook89b737dd7119Payload"), constraints: true}); }
export function makeIncomingWebhook8b9272735b74Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook8b9272735b74Payload"), constraints: true}); }
export function makeIncomingWebhook8c8f435e6e23Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook8c8f435e6e23Payload"), constraints: true}); }
export function makeIncomingWebhook8d0ecb37ce13Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook8d0ecb37ce13Payload"), constraints: true}); }
export function makeIncomingWebhook90b44f6ab93dPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook90b44f6ab93dPayload"), constraints: true}); }
export function makeIncomingWebhook90c487338917Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook90c487338917Payload"), constraints: true}); }
export function makeIncomingWebhook9123c6d282f9Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook9123c6d282f9Payload"), constraints: true}); }
export function makeIncomingWebhook968a85236406Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook968a85236406Payload"), constraints: true}); }
export function makeIncomingWebhook96ad40704e72Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook96ad40704e72Payload"), constraints: true}); }
export function makeIncomingWebhook96bb47deea93Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook96bb47deea93Payload"), constraints: true}); }
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook96e4efc9dab0Payload"), constraints: true}); }
export function makeIncomingWebhook97e2715bf986Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook97e2715bf986Payload"), constraints: true}); }
export function makeIncomingWebhook98a976c72b8ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook98a976c72b8ePayload"), constraints: true}); }
export function makeIncomingWebhook993ba0d279b8Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook993ba0d279b8Payload"), constraints: true}); }
export function makeIncomingWebhook9a3120a73ba6Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook9a3120a73ba6Payload"), constraints: true}); }
export function makeIncomingWebhook9ae0cd21c3dbPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook9ae0cd21c3dbPayload"), constraints: true}); }
export function makeIncomingWebhook9b7963c3e444Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook9b7963c3e444Payload"), constraints: true}); }
export function makeIncomingWebhook9d6f9adeef1cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook9d6f9adeef1cPayload"), constraints: true}); }
export function makeIncomingWebhook9f2c64cbfcafPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook9f2c64cbfcafPayload"), constraints: true}); }
export function makeIncomingWebhook9f970012f914Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhook9f970012f914Payload"), constraints: true}); }
export function makeIncomingWebhooka1881a33c0d8Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooka1881a33c0d8Payload"), constraints: true}); }
export function makeIncomingWebhooka532d2deefcaPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooka532d2deefcaPayload"), constraints: true}); }
export function makeIncomingWebhooka9876afe4b94Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooka9876afe4b94Payload"), constraints: true}); }
export function makeIncomingWebhooka9d01c88ec13Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooka9d01c88ec13Payload"), constraints: true}); }
export function makeIncomingWebhooka9f404707239Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooka9f404707239Payload"), constraints: true}); }
export function makeIncomingWebhookac68e02edc21Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookac68e02edc21Payload"), constraints: true}); }
export function makeIncomingWebhookad7368dbf165Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookad7368dbf165Payload"), constraints: true}); }
export function makeIncomingWebhookafe737e725c6Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookafe737e725c6Payload"), constraints: true}); }
export function makeIncomingWebhookb1293e1abb2aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb1293e1abb2aPayload"), constraints: true}); }
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb162e468fa9aPayload"), constraints: true}); }
export function makeIncomingWebhookb1a2881c3c8dPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb1a2881c3c8dPayload"), constraints: true}); }
export function makeIncomingWebhookb1a3cccf875cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb1a3cccf875cPayload"), constraints: true}); }
export function makeIncomingWebhookb5e016d3aecaPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb5e016d3aecaPayload"), constraints: true}); }
export function makeIncomingWebhookb65376063a56Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb65376063a56Payload"), constraints: true}); }
export function makeIncomingWebhookb85f38361fb8Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb85f38361fb8Payload"), constraints: true}); }
export function makeIncomingWebhookb887d4b2753cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb887d4b2753cPayload"), constraints: true}); }
export function makeIncomingWebhookb9b1da5ab933Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookb9b1da5ab933Payload"), constraints: true}); }
export function makeIncomingWebhookbb439dd961a8Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookbb439dd961a8Payload"), constraints: true}); }
export function makeIncomingWebhookbca943d8a28aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookbca943d8a28aPayload"), constraints: true}); }
export function makeIncomingWebhookbd445ea5b01aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookbd445ea5b01aPayload"), constraints: true}); }
export function makeIncomingWebhookbec68ec6ef2ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookbec68ec6ef2ePayload"), constraints: true}); }
export function makeIncomingWebhookbfe731fc8c52Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookbfe731fc8c52Payload"), constraints: true}); }
export function makeIncomingWebhookc04d32fcb4e2Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc04d32fcb4e2Payload"), constraints: true}); }
export function makeIncomingWebhookc3ebf1cf7ec9Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc3ebf1cf7ec9Payload"), constraints: true}); }
export function makeIncomingWebhookc6907837bb30Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc6907837bb30Payload"), constraints: true}); }
export function makeIncomingWebhookc71d9380e0c9Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc71d9380e0c9Payload"), constraints: true}); }
export function makeIncomingWebhookc7c9c518e9d3Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc7c9c518e9d3Payload"), constraints: true}); }
export function makeIncomingWebhookc823e4336c4aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc823e4336c4aPayload"), constraints: true}); }
export function makeIncomingWebhookc82943441c1dPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc82943441c1dPayload"), constraints: true}); }
export function makeIncomingWebhookc8cb35576c0fPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc8cb35576c0fPayload"), constraints: true}); }
export function makeIncomingWebhookc8e851ec1b62Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookc8e851ec1b62Payload"), constraints: true}); }
export function makeIncomingWebhookcbaf05798f54Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookcbaf05798f54Payload"), constraints: true}); }
export function makeIncomingWebhookce317e37a514Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookce317e37a514Payload"), constraints: true}); }
export function makeIncomingWebhookcf769e4fa54cPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookcf769e4fa54cPayload"), constraints: true}); }
export function makeIncomingWebhookcfa0fc3e7b61Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookcfa0fc3e7b61Payload"), constraints: true}); }
export function makeIncomingWebhookcff5d1339489Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookcff5d1339489Payload"), constraints: true}); }
export function makeIncomingWebhookd299182c6639Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd299182c6639Payload"), constraints: true}); }
export function makeIncomingWebhookd2d184df8ba4Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd2d184df8ba4Payload"), constraints: true}); }
export function makeIncomingWebhookd429a10e7388Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd429a10e7388Payload"), constraints: true}); }
export function makeIncomingWebhookd5308faf7210Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd5308faf7210Payload"), constraints: true}); }
export function makeIncomingWebhookd5a6f520dad7Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd5a6f520dad7Payload"), constraints: true}); }
export function makeIncomingWebhookd5c9a344b9b1Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd5c9a344b9b1Payload"), constraints: true}); }
export function makeIncomingWebhookd61edf29f9d2Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd61edf29f9d2Payload"), constraints: true}); }
export function makeIncomingWebhookd7a01fed3e2fPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd7a01fed3e2fPayload"), constraints: true}); }
export function makeIncomingWebhookd7ae2aa49927Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd7ae2aa49927Payload"), constraints: true}); }
export function makeIncomingWebhookd8d5a73039b9Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookd8d5a73039b9Payload"), constraints: true}); }
export function makeIncomingWebhookdb74c29bf1ffPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookdb74c29bf1ffPayload"), constraints: true}); }
export function makeIncomingWebhookdb9dd209977aPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookdb9dd209977aPayload"), constraints: true}); }
export function makeIncomingWebhookdc1126d5a87dPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookdc1126d5a87dPayload"), constraints: true}); }
export function makeIncomingWebhookdc2332579846Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookdc2332579846Payload"), constraints: true}); }
export function makeIncomingWebhookdd77f0f69512Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookdd77f0f69512Payload"), constraints: true}); }
export function makeIncomingWebhookde0dbbc12385Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookde0dbbc12385Payload"), constraints: true}); }
export function makeIncomingWebhooke22691fcc424Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooke22691fcc424Payload"), constraints: true}); }
export function makeIncomingWebhooke24aaa50d5c2Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooke24aaa50d5c2Payload"), constraints: true}); }
export function makeIncomingWebhooke3b79e3983d2Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooke3b79e3983d2Payload"), constraints: true}); }
export function makeIncomingWebhooke807fdb62367Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooke807fdb62367Payload"), constraints: true}); }
export function makeIncomingWebhooke817b6292432Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooke817b6292432Payload"), constraints: true}); }
export function makeIncomingWebhooke8c8a6153ca1Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooke8c8a6153ca1Payload"), constraints: true}); }
export function makeIncomingWebhookea0ef7d1c212Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookea0ef7d1c212Payload"), constraints: true}); }
export function makeIncomingWebhookeab48bfd0932Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookeab48bfd0932Payload"), constraints: true}); }
export function makeIncomingWebhooked8e7a89077ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhooked8e7a89077ePayload"), constraints: true}); }
export function makeIncomingWebhookefe153a00c42Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookefe153a00c42Payload"), constraints: true}); }
export function makeIncomingWebhookeff38a7dc9a0Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookeff38a7dc9a0Payload"), constraints: true}); }
export function makeIncomingWebhookf2be10231857Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookf2be10231857Payload"), constraints: true}); }
export function makeIncomingWebhookf4c208cc6c8ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookf4c208cc6c8ePayload"), constraints: true}); }
export function makeIncomingWebhookf5b72c2a310ePayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookf5b72c2a310ePayload"), constraints: true}); }
export function makeIncomingWebhookf6f719ba2af4Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookf6f719ba2af4Payload"), constraints: true}); }
export function makeIncomingWebhookf93bed5b28a1Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookf93bed5b28a1Payload"), constraints: true}); }
export function makeIncomingWebhookf9640e80dd75Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookf9640e80dd75Payload"), constraints: true}); }
export function makeIncomingWebhookfce7e0c4eba0Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookfce7e0c4eba0Payload"), constraints: true}); }
export function makeIncomingWebhookfcf5fa4b1850Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookfcf5fa4b1850Payload"), constraints: true}); }
export function makeIncomingWebhookfd258d9a47caPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookfd258d9a47caPayload"), constraints: true}); }
export function makeIncomingWebhookff9afffd27c6Payload(value) { return modelFromCodec(value, {..._sdkModelCodec("IncomingWebhookff9afffd27c6Payload"), constraints: true}); }
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {..._sdkModelCodec("InitialGiftCardFunding"), constraints: true}); }
export function makeInlineModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InlineModifierGroupRequest"), constraints: true}); }
export function makeInventoryActionRequired(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryActionRequired"), constraints: true}); }
export function makeInventoryAdjustment(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustment"), constraints: true}); }
export function makeInventoryAdjustmentLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentLineRequest"), constraints: true}); }
export function makeInventoryAdjustmentListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentListResponse"), constraints: true}); }
export function makeInventoryAdjustmentResult(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentResult"), constraints: true}); }
export function makeInventoryAdjustmentResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentResultResponse"), constraints: true}); }
export function makeInventoryAllocationPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationPolicy"), constraints: true}); }
export function makeInventoryAllocationPolicyConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationPolicyConfiguration"), constraints: true}); }
export function makeInventoryAllocationPolicyListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationPolicyListResponse"), constraints: true}); }
export function makeInventoryAllocationPolicyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationPolicyResponse"), constraints: true}); }
export function makeInventoryAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAssignment"), constraints: true}); }
export function makeInventoryCount(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCount"), constraints: true}); }
export function makeInventoryCountLine(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountLine"), constraints: true}); }
export function makeInventoryCountListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountListResponse"), constraints: true}); }
export function makeInventoryCountObservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountObservationRequest"), constraints: true}); }
export function makeInventoryCountResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountResponse"), constraints: true}); }
export function makeInventoryCountResult(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountResult"), constraints: true}); }
export function makeInventoryCountResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountResultResponse"), constraints: true}); }
export function makeInventoryCountTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountTransitionRequest"), constraints: true}); }
export function makeInventoryItem(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryItem"), constraints: true}); }
export function makeInventoryItemCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryItemCreateRequest"), constraints: true}); }
export function makeInventoryItemListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryItemListResponse"), constraints: true}); }
export function makeInventoryItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryItemResponse"), constraints: true}); }
export function makeInventoryLevel(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryLevel"), constraints: true}); }
export function makeInventoryLevelListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryLevelListResponse"), constraints: true}); }
export function makeInventoryLevelUpdateResult(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryLevelUpdateResult"), constraints: true}); }
export function makeInventoryLevelUpdateResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryLevelUpdateResultResponse"), constraints: true}); }
export function makeInventoryMovement(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryMovement"), constraints: true}); }
export function makeInventoryMovementListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryMovementListResponse"), constraints: true}); }
export function makeInventoryOriginPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryOriginPolicy"), constraints: true}); }
export function makeInventoryReceipt(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceipt"), constraints: true}); }
export function makeInventoryReceiptLine(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceiptLine"), constraints: true}); }
export function makeInventoryReceiptLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceiptLineRequest"), constraints: true}); }
export function makeInventoryReceiptListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceiptListResponse"), constraints: true}); }
export function makeInventoryReceiptResult(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceiptResult"), constraints: true}); }
export function makeInventoryReceiptResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceiptResultResponse"), constraints: true}); }
export function makeInventoryReservation(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservation"), constraints: true}); }
export function makeInventoryReservationListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationListResponse"), constraints: true}); }
export function makeInventoryReservationOwner(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationOwner"), constraints: true}); }
export function makeInventoryReservationProvenance(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationProvenance"), constraints: true}); }
export function makeInventoryReservationResult(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationResult"), constraints: true}); }
export function makeInventoryReservationResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationResultResponse"), constraints: true}); }
export function makeInventoryRoutingDemand(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingDemand"), constraints: true}); }
export function makeInventoryRoutingSource(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSource"), constraints: true}); }
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceRequest"), constraints: true}); }
export function makeInventorySettings(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySettings"), constraints: true}); }
export function makeInventorySourceReference(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySourceReference"), constraints: true}); }
export function makeInventorySourceSystem(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySourceSystem"), constraints: true}); }
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySourceSystemRequest"), constraints: true}); }
export function makeInventoryTransfer(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransfer"), constraints: true}); }
export function makeInventoryTransferActionConflictErrorDetail(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferActionConflictErrorDetail"), constraints: true}); }
export function makeInventoryTransferActionConflictErrorEnvelope(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferActionConflictErrorEnvelope"), constraints: true}); }
export function makeInventoryTransferActionConflictErrorObject(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferActionConflictErrorObject"), constraints: true}); }
export function makeInventoryTransferConflictErrorEnvelope(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferConflictErrorEnvelope"), constraints: true}); }
export function makeInventoryTransferLine(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferLine"), constraints: true}); }
export function makeInventoryTransferLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferLineRequest"), constraints: true}); }
export function makeInventoryTransferListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferListResponse"), constraints: true}); }
export function makeInventoryTransferOtherConflictErrorEnvelope(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferOtherConflictErrorEnvelope"), constraints: true}); }
export function makeInventoryTransferProvenanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferProvenanceRequest"), constraints: true}); }
export function makeInventoryTransferResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferResponse"), constraints: true}); }
export function makeInventoryTransferResult(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferResult"), constraints: true}); }
export function makeInventoryTransferResultResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferResultResponse"), constraints: true}); }
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferTransitionRequest"), constraints: true}); }
export function makeInvoice(value) { return modelFromCodec(value, {..._sdkModelCodec("Invoice"), constraints: true}); }
export function makeInvoiceActivity(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceActivity"), constraints: true}); }
export function makeInvoiceActivityListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceActivityListResponse"), constraints: true}); }
export function makeInvoiceAutopayRetryPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceAutopayRetryPolicy"), constraints: true}); }
export function makeInvoiceCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCheckoutSessionRequest"), constraints: true}); }
export function makeInvoiceCheckoutSessionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCheckoutSessionResponse"), constraints: true}); }
export function makeInvoiceCheckoutSessionResult(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCheckoutSessionResult"), constraints: true}); }
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionRequest"), constraints: true}); }
export function makeInvoiceDeliveryAttempt(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceDeliveryAttempt"), constraints: true}); }
export function makeInvoiceDeliveryAttemptListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceDeliveryAttemptListResponse"), constraints: true}); }
export function makeInvoiceDiscount(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceDiscount"), constraints: true}); }
export function makeInvoiceLateFee(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFee"), constraints: true}); }
export function makeInvoiceLateFeePolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFeePolicy"), constraints: true}); }
export function makeInvoiceLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLineItem"), constraints: true}); }
export function makeInvoiceListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceListResponse"), constraints: true}); }
export function makeInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceManualPaymentRequest"), constraints: true}); }
export function makeInvoicePaymentAttempt(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentAttempt"), constraints: true}); }
export function makeInvoicePaymentAttemptListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentAttemptListResponse"), constraints: true}); }
export function makeInvoicePaymentAttemptResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentAttemptResponse"), constraints: true}); }
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueRequest"), constraints: true}); }
export function makeInvoicePaymentOptionLimit(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentOptionLimit"), constraints: true}); }
export function makeInvoicePaymentPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentPolicy"), constraints: true}); }
export function makeInvoicePaymentTerm(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTerm"), constraints: true}); }
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculation"), constraints: true}); }
export function makeInvoicePaymentTermListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermListResponse"), constraints: true}); }
export function makeInvoicePaymentTermResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermResponse"), constraints: true}); }
export function makeInvoicePaymentTermsSnapshot(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermsSnapshot"), constraints: true}); }
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceReminderPolicy"), constraints: true}); }
export function makeInvoiceReminderRule(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceReminderRule"), constraints: true}); }
export function makeInvoiceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceResponse"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecification(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecification"), constraints: true}); }
export function makeInvoiceScheduleDue(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleDue"), constraints: true}); }
export function makeInvoiceScheduleEntry(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleEntry"), constraints: true}); }
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleEntryWrite"), constraints: true}); }
export function makeInvoiceSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceSettings"), constraints: true}); }
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceSettingsPatch"), constraints: true}); }
export function makeInvoiceSnapshot(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceSnapshot"), constraints: true}); }
export function makeInvoiceTip(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceTip"), constraints: true}); }
export function makeIssueCreditNoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueCreditNoteRequest"), constraints: true}); }
export function makeIssueCreditNoteResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueCreditNoteResponse"), constraints: true}); }
export function makeIssuedCreditNote(value) { return modelFromCodec(value, {..._sdkModelCodec("IssuedCreditNote"), constraints: true}); }
export function makeIssueInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueInvoiceRequest"), constraints: true}); }
export function makeIssueInvoiceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueInvoiceResponse"), constraints: true}); }
export function makeIssueInvoiceResult(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueInvoiceResult"), constraints: true}); }
export function makeIssueSandboxAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueSandboxAPIKeyRequest"), constraints: true}); }
export function makeLegalSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("LegalSettings"), constraints: true}); }
export function makeLineItemFulfillmentOriginRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentOriginRequest"), constraints: true}); }
export function makeLineItemFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentRequest"), constraints: true}); }
export function makeLineItemFulfillmentSizeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentSizeRequest"), constraints: true}); }
export function makeLineItemFulfillmentWeightRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentWeightRequest"), constraints: true}); }
export function makeLineItemInventoryDemand(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemInventoryDemand"), constraints: true}); }
export function makeLineItemInventorySnapshot(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemInventorySnapshot"), constraints: true}); }
export function makeListReturnDispositionsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnDispositionsResponse"), constraints: true}); }
export function makeListReturnInspectionsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnInspectionsResponse"), constraints: true}); }
export function makeListReturnLineItemsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnLineItemsResponse"), constraints: true}); }
export function makeListReturnPoliciesResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnPoliciesResponse"), constraints: true}); }
export function makeListReturnPolicyRevisionsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnPolicyRevisionsResponse"), constraints: true}); }
export function makeListReturnReasonsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnReasonsResponse"), constraints: true}); }
export function makeListReturnReceiptsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnReceiptsResponse"), constraints: true}); }
export function makeListReturnResolutionsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnResolutionsResponse"), constraints: true}); }
export function makeListReturnsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ListReturnsResponse"), constraints: true}); }
export function makeLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("Location"), constraints: true}); }
export function makeLocationAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationAddress"), constraints: true}); }
export function makeLocationCoordinate(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationCoordinate"), constraints: true}); }
export function makeLocationInventory(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationInventory"), constraints: true}); }
export function makeLocationInventoryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationInventoryRequest"), constraints: true}); }
export function makeLocationInventoryResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationInventoryResponse"), constraints: true}); }
export function makeLocationListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationListResponse"), constraints: true}); }
export function makeLocationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationResponse"), constraints: true}); }
export function makeLookupGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LookupGiftCardRequest"), constraints: true}); }
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ManualDiscountRequest"), constraints: true}); }
export function makeMeFlintWalletCard(value) { return modelFromCodec(value, {..._sdkModelCodec("MeFlintWalletCard"), constraints: true}); }
export function makeMeFlintWalletCardListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MeFlintWalletCardListResponse"), constraints: true}); }
export function makeMeFlintWalletStoreSetup(value) { return modelFromCodec(value, {..._sdkModelCodec("MeFlintWalletStoreSetup"), constraints: true}); }
export function makeMeFlintWalletStoreSetupResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MeFlintWalletStoreSetupResponse"), constraints: true}); }
export function makeMerchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Merchant"), constraints: true}); }
export function makeMerchantAccountSession(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSession"), constraints: true}); }
export function makeMerchantAccountSessionClientSession(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionClientSession"), constraints: true}); }
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionCreateRequest"), constraints: true}); }
export function makeMerchantAccountSessionEffectivePolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionEffectivePolicy"), constraints: true}); }
export function makeMerchantAccountSessionRefreshRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionRefreshRequest"), constraints: true}); }
export function makeMerchantAccountSessionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionResponse"), constraints: true}); }
export function makeMerchantAccountSessionStripe(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionStripe"), constraints: true}); }
export function makeMerchantAccountSessionStripeAccountSession(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionStripeAccountSession"), constraints: true}); }
export function makeMerchantAccountSessionStripeCollectionOptions(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionStripeCollectionOptions"), constraints: true}); }
export function makeMerchantAccountSessionStripeComponent(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionStripeComponent"), constraints: true}); }
export function makeMerchantAccountSessionStripeRequirements(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionStripeRequirements"), constraints: true}); }
export function makeMerchantBillingBalance(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantBillingBalance"), constraints: true}); }
export function makeMerchantBillingBalanceListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantBillingBalanceListResponse"), constraints: true}); }
export function makeMerchantBillingBalanceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantBillingBalanceResponse"), constraints: true}); }
export function makeMerchantReadinessAxis(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantReadinessAxis"), constraints: true}); }
export function makeMerchantReadinessRequirements(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantReadinessRequirements"), constraints: true}); }
export function makeMerchantResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantResponse"), constraints: true}); }
export function makeMerchantSubscriptionInvoice(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantSubscriptionInvoice"), constraints: true}); }
export function makeMerchantSubscriptionInvoiceLine(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantSubscriptionInvoiceLine"), constraints: true}); }
export function makeMerchantSubscriptionInvoiceListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantSubscriptionInvoiceListResponse"), constraints: true}); }
export function makeMerchantSubscriptionInvoiceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantSubscriptionInvoiceResponse"), constraints: true}); }
export function makeMerchantWebhookEnvelope(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantWebhookEnvelope"), constraints: true}); }
export function makeModifier(value) { return modelFromCodec(value, {..._sdkModelCodec("Modifier"), constraints: true}); }
export function makeModifierGroup(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierGroup"), constraints: true}); }
export function makeModifierGroupListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierGroupListResponse"), constraints: true}); }
export function makeModifierGroupResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierGroupResponse"), constraints: true}); }
export function makeModifierOverride(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierOverride"), constraints: true}); }
export function makeModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierRequest"), constraints: true}); }
export function makeModifierSet(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSet"), constraints: true}); }
export function makeModifierSetGroup(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroup"), constraints: true}); }
export function makeModifierSetGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroupRequest"), constraints: true}); }
export function makeModifierSetListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetListResponse"), constraints: true}); }
export function makeModifierSetResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetResponse"), constraints: true}); }
export function makeMoneyMetric(value) { return modelFromCodec(value, {..._sdkModelCodec("MoneyMetric"), constraints: true}); }
export function makeMoneyMovementBlockedReason(value) { return modelFromCodec(value, {..._sdkModelCodec("MoneyMovementBlockedReason"), constraints: true}); }
export function makeMoneyMovementHistoryMeta(value) { return modelFromCodec(value, {..._sdkModelCodec("MoneyMovementHistoryMeta"), constraints: true}); }
export function makeMoneyMovementListMeta(value) { return modelFromCodec(value, {..._sdkModelCodec("MoneyMovementListMeta"), constraints: true}); }
export function makeMoneyValue(value) { return modelFromCodec(value, {..._sdkModelCodec("MoneyValue"), constraints: true}); }
export function makeNextAction(value) { return modelFromCodec(value, {..._sdkModelCodec("NextAction"), constraints: true}); }
export function makeNextActionMerchantAccountSession(value) { return modelFromCodec(value, {..._sdkModelCodec("NextActionMerchantAccountSession"), constraints: true}); }
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingAdvanceRequest"), constraints: true}); }
export function makeOnboardingLaunchRecommendedPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingLaunchRecommendedPolicy"), constraints: true}); }
export function makeOnboardingLaunchReference(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingLaunchReference"), constraints: true}); }
export function makeOnboardingNextStep(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingNextStep"), constraints: true}); }
export function makeOnboardingProfile(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingProfile"), constraints: true}); }
export function makeOnboardingProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingProfileRequest"), constraints: true}); }
export function makeOnboardingRequirements(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingRequirements"), constraints: true}); }
export function makeOnboardingStartRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingStartRequest"), constraints: true}); }
export function makeOnboardingStartResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingStartResponse"), constraints: true}); }
export function makeOnboardingStartResult(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingStartResult"), constraints: true}); }
export function makeOnboardingState(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingState"), constraints: true}); }
export function makeOnboardingStateResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingStateResponse"), constraints: true}); }
export function makeOnboardingVerifyEmailRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingVerifyEmailRequest"), constraints: true}); }
export function makeOnboardingVerifyEmailResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingVerifyEmailResponse"), constraints: true}); }
export function makeOnboardingVerifyEmailResult(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingVerifyEmailResult"), constraints: true}); }
export function makeOrder(value) { return modelFromCodec(value, {..._sdkModelCodec("Order"), constraints: true}); }
export function makeOrderActivity(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderActivity"), constraints: true}); }
export function makeOrderActivityListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderActivityListResponse"), constraints: true}); }
export function makeOrderAuthorizationAmounts(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderAuthorizationAmounts"), constraints: true}); }
export function makeOrderCalculatedChargeTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderCalculatedChargeTax"), constraints: true}); }
export function makeOrderCalculatedLineItemTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderCalculatedLineItemTax"), constraints: true}); }
export function makeOrderCharge(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderCharge"), constraints: true}); }
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeRequest"), constraints: true}); }
export function makeOrderDeliveryDestination(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestination"), constraints: true}); }
export function makeOrderDeliveryDestinationAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationAddress"), constraints: true}); }
export function makeOrderDeliveryDestinationAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationAddressRequest"), constraints: true}); }
export function makeOrderDeliveryDestinationRecipient(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRecipient"), constraints: true}); }
export function makeOrderDeliveryDestinationRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRecipientRequest"), constraints: true}); }
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRequest"), constraints: true}); }
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemInventoryDemandRequest"), constraints: true}); }
export function makeOrderDraftLineItemTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxCalculationRequest"), constraints: true}); }
export function makeOrderDraftLineItemTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxRequest"), constraints: true}); }
export function makeOrderDraftTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxComponentRequest"), constraints: true}); }
export function makeOrderDraftTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxJurisdictionRequest"), constraints: true}); }
export function makeOrderGiftCardAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardAllocation"), constraints: true}); }
export function makeOrderGiftCardAllocationAcceptance(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardAllocationAcceptance"), constraints: true}); }
export function makeOrderGiftCardEstimate(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardEstimate"), constraints: true}); }
export function makeOrderGiftCardSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardSelection"), constraints: true}); }
export function makeOrderGiftCardSettlement(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardSettlement"), constraints: true}); }
export function makeOrderInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderInventoryRoutingSourceRequest"), constraints: true}); }
export function makeOrderLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItem"), constraints: true}); }
export function makeOrderLineItemModifier(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifier"), constraints: true}); }
export function makeOrderLineItemModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierRequest"), constraints: true}); }
export function makeOrderLineItemTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemTax"), constraints: true}); }
export function makeOrderListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderListResponse"), constraints: true}); }
export function makeOrderPaymentAttempt(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentAttempt"), constraints: true}); }
export function makeOrderPaymentAttemptListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentAttemptListResponse"), constraints: true}); }
export function makeOrderPaymentAttemptResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentAttemptResponse"), constraints: true}); }
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentIntentSelection"), constraints: true}); }
export function makeOrderPaymentLifecycleResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentLifecycleResponse"), constraints: true}); }
export function makeOrderPaymentLifecycleResult(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentLifecycleResult"), constraints: true}); }
export function makeOrderPaymentSourceCardSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentSourceCardSelection"), constraints: true}); }
export function makeOrderPaymentSourceSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentSourceSelection"), constraints: true}); }
export function makeOrderResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderResponse"), constraints: true}); }
export function makeOrderReturnCreditSettlement(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderReturnCreditSettlement"), constraints: true}); }
export function makeOrderTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTax"), constraints: true}); }
export function makeOrderTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxCalculationRequest"), constraints: true}); }
export function makeOrderTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxComponentRequest"), constraints: true}); }
export function makeOrderTaxExemption(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxExemption"), constraints: true}); }
export function makeOrderTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxJurisdictionRequest"), constraints: true}); }
export function makeOrderTaxLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocation"), constraints: true}); }
export function makeOrderTaxLocationFullAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationFullAddressRequest"), constraints: true}); }
export function makeOrderTaxLocationInputFullAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputFullAddress"), constraints: true}); }
export function makeOrderTaxLocationInputInferredFullAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputInferredFullAddress"), constraints: true}); }
export function makeOrderTaxLocationInputInferredPostalCode(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputInferredPostalCode"), constraints: true}); }
export function makeOrderTaxLocationInputPostalCode(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputPostalCode"), constraints: true}); }
export function makeOrderTaxLocationPostalAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationPostalAddressRequest"), constraints: true}); }
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationRequest"), constraints: true}); }
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxRequest"), constraints: true}); }
export function makeOrganization(value) { return modelFromCodec(value, {..._sdkModelCodec("Organization"), constraints: true}); }
export function makeOrganizationListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrganizationListResponse"), constraints: true}); }
export function makeOrganizationMembership(value) { return modelFromCodec(value, {..._sdkModelCodec("OrganizationMembership"), constraints: true}); }
export function makeOrganizationMembershipListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrganizationMembershipListResponse"), constraints: true}); }
export function makeOrganizationMembershipResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrganizationMembershipResponse"), constraints: true}); }
export function makeOrganizationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("OrganizationResponse"), constraints: true}); }
export function makePackage(value) { return modelFromCodec(value, {..._sdkModelCodec("Package"), constraints: true}); }
export function makePackageItem(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageItem"), constraints: true}); }
export function makePackageItemListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageItemListResponse"), constraints: true}); }
export function makePackageItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageItemResponse"), constraints: true}); }
export function makePackageListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageListResponse"), constraints: true}); }
export function makePackageResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageResponse"), constraints: true}); }
export function makePackageStatusUpdate(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageStatusUpdate"), constraints: true}); }
export function makePackageStatusUpdateResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageStatusUpdateResponse"), constraints: true}); }
export function makePackageStatusUpdateResult(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageStatusUpdateResult"), constraints: true}); }
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequest"), constraints: true}); }
export function makePackageTransitionRequestMarkDelivered(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkDelivered"), constraints: true}); }
export function makePackageTransitionRequestMarkDeliveryAttempted(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkDeliveryAttempted"), constraints: true}); }
export function makePackageTransitionRequestMarkException(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkException"), constraints: true}); }
export function makePackageTransitionRequestMarkInTransit(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkInTransit"), constraints: true}); }
export function makePackageTransitionRequestMarkOutForDelivery(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkOutForDelivery"), constraints: true}); }
export function makePackageTransitionRequestMarkPacked(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkPacked"), constraints: true}); }
export function makePackageTransitionRequestMarkReturned(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkReturned"), constraints: true}); }
export function makePackageTransitionRequestMarkShipped(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkShipped"), constraints: true}); }
export function makePartnerApp(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerApp"), constraints: true}); }
export function makePartnerAppInstall(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppInstall"), constraints: true}); }
export function makePartnerAppInstallListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppInstallListResponse"), constraints: true}); }
export function makePartnerAppInstallResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppInstallResponse"), constraints: true}); }
export function makePartnerAppListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppListResponse"), constraints: true}); }
export function makePartnerAppPermissionManifestEntry(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppPermissionManifestEntry"), constraints: true}); }
export function makePartnerAppResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppResponse"), constraints: true}); }
export function makePartnerAppSecretRotationResult(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppSecretRotationResult"), constraints: true}); }
export function makePartnerAppWithSecret(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppWithSecret"), constraints: true}); }
export function makePartnerAuthorizePreview(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAuthorizePreview"), constraints: true}); }
export function makePartnerAuthorizePreviewPermission(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAuthorizePreviewPermission"), constraints: true}); }
export function makePartnerAuthorizePreviewResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAuthorizePreviewResponse"), constraints: true}); }
export function makePartnerEnvironmentGrant(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerEnvironmentGrant"), constraints: true}); }
export function makePartnerEnvironmentGrantEventPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerEnvironmentGrantEventPayload"), constraints: true}); }
export function makePartnerInstallEventPayload(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerInstallEventPayload"), constraints: true}); }
export function makePartnerTokenErrorResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerTokenErrorResponse"), constraints: true}); }
export function makePartnerTokenRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerTokenRequest"), constraints: true}); }
export function makePartnerTokenResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerTokenResponse"), constraints: true}); }
export function makePartnerWebhookEnvelope(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerWebhookEnvelope"), constraints: true}); }
export function makePauseSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PauseSubscriptionRequest"), constraints: true}); }
export function makePaymentAddOnFee(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentAddOnFee"), constraints: true}); }
export function makePaymentAttemptGiftCardRedemption(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentAttemptGiftCardRedemption"), constraints: true}); }
export function makePaymentAttemptPaymentIntent(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentAttemptPaymentIntent"), constraints: true}); }
export function makePaymentClientAction(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentClientAction"), constraints: true}); }
export function makePaymentCollection(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentCollection"), constraints: true}); }
export function makePaymentCollectionStripe(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentCollectionStripe"), constraints: true}); }
export function makePaymentCollectionStripeElements(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentCollectionStripeElements"), constraints: true}); }
export function makePaymentErrorSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentErrorSummary"), constraints: true}); }
export function makePaymentFulfillmentHold(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentFulfillmentHold"), constraints: true}); }
export function makePaymentIntent(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentIntent"), constraints: true}); }
export function makePaymentIntentListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentIntentListResponse"), constraints: true}); }
export function makePaymentIntentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentIntentResponse"), constraints: true}); }
export function makePaymentLimitSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLimitSettings"), constraints: true}); }
export function makePaymentLink(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLink"), constraints: true}); }
export function makePaymentLinkCustomerConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomerConfig"), constraints: true}); }
export function makePaymentLinkCustomField(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomField"), constraints: true}); }
export function makePaymentLinkCustomFieldPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomFieldPatchRequest"), constraints: true}); }
export function makePaymentLinkCustomFieldRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomFieldRequest"), constraints: true}); }
export function makePaymentLinkEventConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkEventConfig"), constraints: true}); }
export function makePaymentLinkLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItem"), constraints: true}); }
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemPatchRequest"), constraints: true}); }
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemRequest"), constraints: true}); }
export function makePaymentLinkListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkListResponse"), constraints: true}); }
export function makePaymentLinkResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkResponse"), constraints: true}); }
export function makePaymentLinkSubscriptionPreview(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkSubscriptionPreview"), constraints: true}); }
export function makePaymentMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentMethod"), constraints: true}); }
export function makePaymentMethodDomain(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentMethodDomain"), constraints: true}); }
export function makePaymentMethodDomainListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentMethodDomainListResponse"), constraints: true}); }
export function makePaymentMethodDomainPaymentOption(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentMethodDomainPaymentOption"), constraints: true}); }
export function makePaymentMethodDomainResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentMethodDomainResponse"), constraints: true}); }
export function makePaymentMethodListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentMethodListResponse"), constraints: true}); }
export function makePaymentMethodResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentMethodResponse"), constraints: true}); }
export function makePaymentRefund(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentRefund"), constraints: true}); }
export function makePaymentRisk(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentRisk"), constraints: true}); }
export function makePaymentSourceAchDebitSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceAchDebitSummary"), constraints: true}); }
export function makePaymentSourceCardSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCardSummary"), constraints: true}); }
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredential"), constraints: true}); }
export function makePaymentSourceSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceSummary"), constraints: true}); }
export function makePaymentVolumeBucket(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentVolumeBucket"), constraints: true}); }
export function makePaymentVolumeTimeseries(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentVolumeTimeseries"), constraints: true}); }
export function makePaymentVolumeTimeseriesResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentVolumeTimeseriesResponse"), constraints: true}); }
export function makePayOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequest"), constraints: true}); }
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestConfirmPaymentIntents"), constraints: true}); }
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestPay"), constraints: true}); }
export function makePayOrderRequestResume(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestResume"), constraints: true}); }
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestSetup"), constraints: true}); }
export function makePayOrderResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderResponse"), constraints: true}); }
export function makePayOrderResult(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderResult"), constraints: true}); }
export function makePayout(value) { return modelFromCodec(value, {..._sdkModelCodec("Payout"), constraints: true}); }
export function makePayoutDestination(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutDestination"), constraints: true}); }
export function makePayoutDestinationListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutDestinationListResponse"), constraints: true}); }
export function makePayoutDestinationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutDestinationResponse"), constraints: true}); }
export function makePayoutEntry(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutEntry"), constraints: true}); }
export function makePayoutEntryListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutEntryListResponse"), constraints: true}); }
export function makePayoutListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutListResponse"), constraints: true}); }
export function makePayoutResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutResponse"), constraints: true}); }
export function makePayoutSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutSettings"), constraints: true}); }
export function makePayoutSettingsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutSettingsResponse"), constraints: true}); }
export function makePayoutTraceID(value) { return modelFromCodec(value, {..._sdkModelCodec("PayoutTraceID"), constraints: true}); }
export function makePendingPaymentAction(value) { return modelFromCodec(value, {..._sdkModelCodec("PendingPaymentAction"), constraints: true}); }
export function makePendingPaymentActionPaymentIntentSubject(value) { return modelFromCodec(value, {..._sdkModelCodec("PendingPaymentActionPaymentIntentSubject"), constraints: true}); }
export function makePendingPaymentActionSetupPaymentSourceSubject(value) { return modelFromCodec(value, {..._sdkModelCodec("PendingPaymentActionSetupPaymentSourceSubject"), constraints: true}); }
export function makePendingPaymentActionSubject(value) { return modelFromCodec(value, {..._sdkModelCodec("PendingPaymentActionSubject"), constraints: true}); }
export function makePickupFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("PickupFulfillmentDetails"), constraints: true}); }
export function makePolicyLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("PolicyLocation"), constraints: true}); }
export function makePostalAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("PostalAddress"), constraints: true}); }
export function makePrefilledCustomerInfo(value) { return modelFromCodec(value, {..._sdkModelCodec("PrefilledCustomerInfo"), constraints: true}); }
export function makePricingAmounts(value) { return modelFromCodec(value, {..._sdkModelCodec("PricingAmounts"), constraints: true}); }
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProcessExistingReturnLineItemRequest"), constraints: true}); }
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProcessExistingReturnRequest"), constraints: true}); }
export function makeProcessExistingReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ProcessExistingReturnResponse"), constraints: true}); }
export function makeProduct(value) { return modelFromCodec(value, {..._sdkModelCodec("Product"), constraints: true}); }
export function makeProductListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductListResponse"), constraints: true}); }
export function makeProductOption(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductOption"), constraints: true}); }
export function makeProductOptionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductOptionListResponse"), constraints: true}); }
export function makeProductOptionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductOptionResponse"), constraints: true}); }
export function makeProductOptionValue(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductOptionValue"), constraints: true}); }
export function makeProductPriceRange(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductPriceRange"), constraints: true}); }
export function makeProductResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductResponse"), constraints: true}); }
export function makeProductVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariant"), constraints: true}); }
export function makeProductVariantListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantListResponse"), constraints: true}); }
export function makeProductVariantMatch(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantMatch"), constraints: true}); }
export function makeProductVariantRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantRequest"), constraints: true}); }
export function makeProductVariantResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantResponse"), constraints: true}); }
export function makeProductVariantSelectedOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantSelectedOptionRequest"), constraints: true}); }
export function makePromotion(value) { return modelFromCodec(value, {..._sdkModelCodec("Promotion"), constraints: true}); }
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionApplicationMethod"), constraints: true}); }
export function makePromotionCandidate(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCandidate"), constraints: true}); }
export function makePromotionCode(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCode"), constraints: true}); }
export function makePromotionCodeListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCodeListResponse"), constraints: true}); }
export function makePromotionCodeResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCodeResponse"), constraints: true}); }
export function makePromotionCodesSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCodesSummary"), constraints: true}); }
export function makePromotionCombinesWith(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCombinesWith"), constraints: true}); }
export function makePromotionExclusivity(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionExclusivity"), constraints: true}); }
export function makePromotionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionListResponse"), constraints: true}); }
export function makePromotionRecurrence(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrence"), constraints: true}); }
export function makePromotionRefRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRefRequest"), constraints: true}); }
export function makePromotionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionResponse"), constraints: true}); }
export function makePromotionRule(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRule"), constraints: true}); }
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleGroup"), constraints: true}); }
export function makePromotionRuleValue(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleValue"), constraints: true}); }
export function makePromotionSchedule(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionSchedule"), constraints: true}); }
export function makePromotionSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionSettings"), constraints: true}); }
export function makePublicDownload(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicDownload"), constraints: true}); }
export function makePublicFraudWarningPaymentSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicFraudWarningPaymentSummary"), constraints: true}); }
export function makePublicIPAddressLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicIPAddressLocation"), constraints: true}); }
export function makePublicPaymentLink(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicPaymentLink"), constraints: true}); }
export function makePublicPaymentLinkResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicPaymentLinkResponse"), constraints: true}); }
export function makePublicPaymentLinkResult(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicPaymentLinkResult"), constraints: true}); }
export function makePublicResolvedBundleComponent(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicResolvedBundleComponent"), constraints: true}); }
export function makePublicResolvedBundleVariantSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicResolvedBundleVariantSummary"), constraints: true}); }
export function makePublicResolvedLineItemInfo(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicResolvedLineItemInfo"), constraints: true}); }
export function makePublicResolvedModifierGroup(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicResolvedModifierGroup"), constraints: true}); }
export function makePublicResolvedModifierOption(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicResolvedModifierOption"), constraints: true}); }
export function makePublicResolvedTextModifier(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicResolvedTextModifier"), constraints: true}); }
export function makePublicReviewRisk(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicReviewRisk"), constraints: true}); }
export function makePublicRiskAttribute(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicRiskAttribute"), constraints: true}); }
export function makePublicRiskAttributeRegistry(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicRiskAttributeRegistry"), constraints: true}); }
export function makePublicRiskListItemResult(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicRiskListItemResult"), constraints: true}); }
export function makePublicRiskPaymentSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("PublicRiskPaymentSummary"), constraints: true}); }
export function makePublishLocationGeographyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PublishLocationGeographyRequest"), constraints: true}); }
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PublishReturnPolicyRevisionRequest"), constraints: true}); }
export function makePublishReturnPolicyRevisionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("PublishReturnPolicyRevisionResponse"), constraints: true}); }
export function makePurchasedEvent(value) { return modelFromCodec(value, {..._sdkModelCodec("PurchasedEvent"), constraints: true}); }
export function makePurchasedGiftCard(value) { return modelFromCodec(value, {..._sdkModelCodec("PurchasedGiftCard"), constraints: true}); }
export function makeQuotaDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("QuotaDetails"), constraints: true}); }
export function makeReceiptSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("ReceiptSettings"), constraints: true}); }
export function makeRefreshCustomerSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RefreshCustomerSessionRequest"), constraints: true}); }
export function makeRefund(value) { return modelFromCodec(value, {..._sdkModelCodec("Refund"), constraints: true}); }
export function makeRefundAdjustmentAudit(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundAdjustmentAudit"), constraints: true}); }
export function makeRefundAdjustmentReason(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundAdjustmentReason"), constraints: true}); }
export function makeRefundCharge(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundCharge"), constraints: true}); }
export function makeRefundGiftCardCode(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundGiftCardCode"), constraints: true}); }
export function makeRefundGiftCardDestination(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundGiftCardDestination"), constraints: true}); }
export function makeRefundLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItem"), constraints: true}); }
export function makeRefundLineItemAdjustment(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAdjustment"), constraints: true}); }
export function makeRefundLineItemAdjustmentIn(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAdjustmentIn"), constraints: true}); }
export function makeRefundLineItemAdjustmentRefund(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAdjustmentRefund"), constraints: true}); }
export function makeRefundLineItemAdjustmentRefundIn(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAdjustmentRefundIn"), constraints: true}); }
export function makeRefundLineItemAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAllocation"), constraints: true}); }
export function makeRefundLineItemAutomaticRefund(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAutomaticRefund"), constraints: true}); }
export function makeRefundLineItemModifierAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemModifierAllocation"), constraints: true}); }
export function makeRefundListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundListResponse"), constraints: true}); }
export function makeRefundResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundResponse"), constraints: true}); }
export function makeRefundTaxBreakdownRefund(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTaxBreakdownRefund"), constraints: true}); }
export function makeRefundTaxBreakdownRefundIn(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTaxBreakdownRefundIn"), constraints: true}); }
export function makeRefundTenderAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTenderAllocation"), constraints: true}); }
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTenderAllocationRequest"), constraints: true}); }
export function makeRefundUnissuedGiftCardRecovery(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundUnissuedGiftCardRecovery"), constraints: true}); }
export function makeRegenerateInvoiceLinkResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RegenerateInvoiceLinkResponse"), constraints: true}); }
export function makeRegenerateInvoiceLinkResult(value) { return modelFromCodec(value, {..._sdkModelCodec("RegenerateInvoiceLinkResult"), constraints: true}); }
export function makeReleaseInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReleaseInventoryReservationRequest"), constraints: true}); }
export function makeReleaseReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReleaseReturnResolutionRequest"), constraints: true}); }
export function makeReleaseReturnResolutionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ReleaseReturnResolutionResponse"), constraints: true}); }
export function makeRemoveDiscountsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RemoveDiscountsRequest"), constraints: true}); }
export function makeRemoveOrderGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RemoveOrderGiftCardRequest"), constraints: true}); }
export function makeReopenReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReopenReturnRequest"), constraints: true}); }
export function makeReopenReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ReopenReturnResponse"), constraints: true}); }
export function makeReport(value) { return modelFromCodec(value, {..._sdkModelCodec("Report"), constraints: true}); }
export function makeReportListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ReportListResponse"), constraints: true}); }
export function makeReportResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ReportResponse"), constraints: true}); }
export function makeRequestedTip(value) { return modelFromCodec(value, {..._sdkModelCodec("RequestedTip"), constraints: true}); }
export function makeResendWebhookDeliveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResendWebhookDeliveryRequest"), constraints: true}); }
export function makeReservationLine(value) { return modelFromCodec(value, {..._sdkModelCodec("ReservationLine"), constraints: true}); }
export function makeResolveCustomerDeletionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolveCustomerDeletionRequest"), constraints: true}); }
export function makeResolveOrderInventoryExceptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolveOrderInventoryExceptionRequest"), constraints: true}); }
export function makeResolvePaymentLinkLineItemModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkLineItemModifierRequest"), constraints: true}); }
export function makeResolvePaymentLinkLineItemModifiers(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkLineItemModifiers"), constraints: true}); }
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkRequest"), constraints: true}); }
export function makeResolvePaymentLinkResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkResponse"), constraints: true}); }
export function makeResolvePaymentLinkTextModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkTextModifierRequest"), constraints: true}); }
export function makeResourceTimeline(value) { return modelFromCodec(value, {..._sdkModelCodec("ResourceTimeline"), constraints: true}); }
export function makeResourceTimelineEntry(value) { return modelFromCodec(value, {..._sdkModelCodec("ResourceTimelineEntry"), constraints: true}); }
export function makeResourceTimelineResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ResourceTimelineResponse"), constraints: true}); }
export function makeResourceVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResourceVersionRequest"), constraints: true}); }
export function makeResponseMeta(value) { return modelFromCodec(value, {..._sdkModelCodec("ResponseMeta"), constraints: true}); }
export function makeResponseWarning(value) { return modelFromCodec(value, {..._sdkModelCodec("ResponseWarning"), constraints: true}); }
export function makeRetryReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnDispositionRequest"), constraints: true}); }
export function makeRetryReturnDispositionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnDispositionResponse"), constraints: true}); }
export function makeRetryReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnResolutionRequest"), constraints: true}); }
export function makeRetryReturnResolutionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnResolutionResponse"), constraints: true}); }
export function makeReturnActor(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnActor"), constraints: true}); }
export function makeReturnCompletionBlocker(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnCompletionBlocker"), constraints: true}); }
export function makeReturnDisposition(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnDisposition"), constraints: true}); }
export function makeReturnEligibilityCheck(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilityCheck"), constraints: true}); }
export function makeReturnEligibilityCheckLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilityCheckLineItem"), constraints: true}); }
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilitySelection"), constraints: true}); }
export function makeReturnFinancialSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnFinancialSummary"), constraints: true}); }
export function makeReturnHandoffDestination(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnHandoffDestination"), constraints: true}); }
export function makeReturnHandoffRequirement(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnHandoffRequirement"), constraints: true}); }
export function makeReturnHandoffRequirementLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnHandoffRequirementLineItem"), constraints: true}); }
export function makeReturnInspection(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnInspection"), constraints: true}); }
export function makeReturnInspectionLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnInspectionLineItem"), constraints: true}); }
export function makeReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnInspectionLineItemRequest"), constraints: true}); }
export function makeReturnLineDecision(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineDecision"), constraints: true}); }
export function makeReturnLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineItem"), constraints: true}); }
export function makeReturnLineItemDecisionProposal(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineItemDecisionProposal"), constraints: true}); }
export function makeReturnLineItemEligibility(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineItemEligibility"), constraints: true}); }
export function makeReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineItemRequest"), constraints: true}); }
export function makeReturnLineItemValue(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineItemValue"), constraints: true}); }
export function makeReturnPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicy"), constraints: true}); }
export function makeReturnPolicyAdjustmentProposal(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyAdjustmentProposal"), constraints: true}); }
export function makeReturnPolicyEvaluation(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyEvaluation"), constraints: true}); }
export function makeReturnPolicyEvaluationLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyEvaluationLineItem"), constraints: true}); }
export function makeReturnPolicyRevision(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevision"), constraints: true}); }
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevisionRequest"), constraints: true}); }
export function makeReturnPolicyScope(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyScope"), constraints: true}); }
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessDecision"), constraints: true}); }
export function makeReturnProcessDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessDispositionRequest"), constraints: true}); }
export function makeReturnProcessInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessInspectionRequest"), constraints: true}); }
export function makeReturnProcessReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessReceiptRequest"), constraints: true}); }
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessResolutionRequest"), constraints: true}); }
export function makeReturnProcessResult(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessResult"), constraints: true}); }
export function makeReturnReason(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReason"), constraints: true}); }
export function makeReturnReasonSummary(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReasonSummary"), constraints: true}); }
export function makeReturnReceipt(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceipt"), constraints: true}); }
export function makeReturnReceiptLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceiptLineItem"), constraints: true}); }
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceiptLineItemRequest"), constraints: true}); }
export function makeReturnReplacementLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItem"), constraints: true}); }
export function makeReturnReplacementLineItemReplacementRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItemReplacementRequest"), constraints: true}); }
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItemRequest"), constraints: true}); }
export function makeReturnResolution(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolution"), constraints: true}); }
export function makeReturnResolutionAdjustment(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionAdjustment"), constraints: true}); }
export function makeReturnResolutionAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionAdjustmentRequest"), constraints: true}); }
export function makeReturnResolutionAdjustmentSet(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionAdjustmentSet"), constraints: true}); }
export function makeReturnResolutionExecutionBlocker(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionExecutionBlocker"), constraints: true}); }
export function makeReturnResolutionLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionLineItem"), constraints: true}); }
export function makeReturnResolutionLineItemReplacementRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionLineItemReplacementRequest"), constraints: true}); }
export function makeReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionLineItemRequest"), constraints: true}); }
export function makeReturnResolutionPreview(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionPreview"), constraints: true}); }
export function makeReturnResolutionWarning(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionWarning"), constraints: true}); }
export function makeReturnResource(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResource"), constraints: true}); }
export function makeReturnRestockingFeePolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnRestockingFeePolicy"), constraints: true}); }
export function makeReturnShipmentLineItemAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShipmentLineItemAllocation"), constraints: true}); }
export function makeReturnShippingPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShippingPolicy"), constraints: true}); }
export function makeReturnSourceSystem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnSourceSystem"), constraints: true}); }
export function makeReturnUnverifiedItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnUnverifiedItem"), constraints: true}); }
export function makeReturnWindow(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnWindow"), constraints: true}); }
export function makeReview(value) { return modelFromCodec(value, {..._sdkModelCodec("Review"), constraints: true}); }
export function makeReviewListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ReviewListResponse"), constraints: true}); }
export function makeReviewResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ReviewResponse"), constraints: true}); }
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyRequest"), constraints: true}); }
export function makeRevokeOrganizationMembershipResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeOrganizationMembershipResponse"), constraints: true}); }
export function makeRevokeOrganizationMembershipResult(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeOrganizationMembershipResult"), constraints: true}); }
export function makeRiskList(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskList"), constraints: true}); }
export function makeRiskListItem(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskListItem"), constraints: true}); }
export function makeRiskListItemListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskListItemListResponse"), constraints: true}); }
export function makeRiskListItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskListItemResponse"), constraints: true}); }
export function makeRiskListItemResultsData(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskListItemResultsData"), constraints: true}); }
export function makeRiskListItemResultsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskListItemResultsResponse"), constraints: true}); }
export function makeRiskListListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskListListResponse"), constraints: true}); }
export function makeRiskListResourceResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskListResourceResponse"), constraints: true}); }
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNode"), constraints: true}); }
export function makeRiskRule(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskRule"), constraints: true}); }
export function makeRiskRuleAttributeRegistryResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskRuleAttributeRegistryResponse"), constraints: true}); }
export function makeRiskRuleListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskRuleListResponse"), constraints: true}); }
export function makeRiskRuleResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskRuleResponse"), constraints: true}); }
export function makeRiskRuleValidationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskRuleValidationResponse"), constraints: true}); }
export function makeRotateGiftCardCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotateGiftCardCodeRequest"), constraints: true}); }
export function makeRotatePartnerAppSecretResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("RotatePartnerAppSecretResponse"), constraints: true}); }
export function makeRuleValidation(value) { return modelFromCodec(value, {..._sdkModelCodec("RuleValidation"), constraints: true}); }
export function makeRuleWarning(value) { return modelFromCodec(value, {..._sdkModelCodec("RuleWarning"), constraints: true}); }
export function makeSandboxListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SandboxListResponse"), constraints: true}); }
export function makeSandboxResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SandboxResponse"), constraints: true}); }
export function makeSandboxWithAPIKeyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SandboxWithAPIKeyResponse"), constraints: true}); }
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequest"), constraints: true}); }
export function makeSaveMePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMePaymentMethodRequest"), constraints: true}); }
export function makeSavePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SavePaymentMethodRequest"), constraints: true}); }
export function makeSavePaymentMethodResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SavePaymentMethodResponse"), constraints: true}); }
export function makeSavePaymentMethodResult(value) { return modelFromCodec(value, {..._sdkModelCodec("SavePaymentMethodResult"), constraints: true}); }
export function makeScopeRequirement(value) { return modelFromCodec(value, {..._sdkModelCodec("ScopeRequirement"), constraints: true}); }
export function makeSelectableMerchant(value) { return modelFromCodec(value, {..._sdkModelCodec("SelectableMerchant"), constraints: true}); }
export function makeSelectableOrderPaymentIntent(value) { return modelFromCodec(value, {..._sdkModelCodec("SelectableOrderPaymentIntent"), constraints: true}); }
export function makeSelectedProductOption(value) { return modelFromCodec(value, {..._sdkModelCodec("SelectedProductOption"), constraints: true}); }
export function makeSendOrderReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SendOrderReceiptRequest"), constraints: true}); }
export function makeServiceFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("ServiceFulfillmentDetails"), constraints: true}); }
export function makeSetDefaultCustomerAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SetDefaultCustomerAddressRequest"), constraints: true}); }
export function makeSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("Settings"), constraints: true}); }
export function makeSettingsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SettingsResponse"), constraints: true}); }
export function makeSettlementAmounts(value) { return modelFromCodec(value, {..._sdkModelCodec("SettlementAmounts"), constraints: true}); }
export function makeShipment(value) { return modelFromCodec(value, {..._sdkModelCodec("Shipment"), constraints: true}); }
export function makeShipmentListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ShipmentListResponse"), constraints: true}); }
export function makeShipmentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("ShipmentResponse"), constraints: true}); }
export function makeShippingDimensions(value) { return modelFromCodec(value, {..._sdkModelCodec("ShippingDimensions"), constraints: true}); }
export function makeShippingWeight(value) { return modelFromCodec(value, {..._sdkModelCodec("ShippingWeight"), constraints: true}); }
export function makeSignedMoney(value) { return modelFromCodec(value, {..._sdkModelCodec("SignedMoney"), constraints: true}); }
export function makeSkipSubscriptionCycleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SkipSubscriptionCycleRequest"), constraints: true}); }
export function makeStripeClientAuthority(value) { return modelFromCodec(value, {..._sdkModelCodec("StripeClientAuthority"), constraints: true}); }
export function makeStripeClientSetup(value) { return modelFromCodec(value, {..._sdkModelCodec("StripeClientSetup"), constraints: true}); }
export function makeStripeClientSetupStripe(value) { return modelFromCodec(value, {..._sdkModelCodec("StripeClientSetupStripe"), constraints: true}); }
export function makeStripePaymentClientAction(value) { return modelFromCodec(value, {..._sdkModelCodec("StripePaymentClientAction"), constraints: true}); }
export function makeStripePaymentIntentClientAction(value) { return modelFromCodec(value, {..._sdkModelCodec("StripePaymentIntentClientAction"), constraints: true}); }
export function makeStripeSetupIntentClientAction(value) { return modelFromCodec(value, {..._sdkModelCodec("StripeSetupIntentClientAction"), constraints: true}); }
export function makeSubscription(value) { return modelFromCodec(value, {..._sdkModelCodec("Subscription"), constraints: true}); }
export function makeSubscriptionAnalytics(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionAnalytics"), constraints: true}); }
export function makeSubscriptionAnalyticsResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionAnalyticsResponse"), constraints: true}); }
export function makeSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingScheduleRequest"), constraints: true}); }
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingStartRequest"), constraints: true}); }
export function makeSubscriptionCancellationDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionCancellationDetails"), constraints: true}); }
export function makeSubscriptionLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionLineItem"), constraints: true}); }
export function makeSubscriptionListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionListResponse"), constraints: true}); }
export function makeSubscriptionPaymentRetry(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPaymentRetry"), constraints: true}); }
export function makeSubscriptionPaymentRetryFailure(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPaymentRetryFailure"), constraints: true}); }
export function makeSubscriptionPaymentRetryListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPaymentRetryListResponse"), constraints: true}); }
export function makeSubscriptionPaymentRetryResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPaymentRetryResponse"), constraints: true}); }
export function makeSubscriptionPlan(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlan"), constraints: true}); }
export function makeSubscriptionPlanLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItem"), constraints: true}); }
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemRequest"), constraints: true}); }
export function makeSubscriptionPlanListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanListResponse"), constraints: true}); }
export function makeSubscriptionPlanResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanResponse"), constraints: true}); }
export function makeSubscriptionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionResponse"), constraints: true}); }
export function makeSubscriptionServiceLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocation"), constraints: true}); }
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationRequest"), constraints: true}); }
export function makeSubscriptionSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionSettings"), constraints: true}); }
export function makeSubscriptionSnapshotMetrics(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionSnapshotMetrics"), constraints: true}); }
export function makeSubscriptionStatusCounts(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionStatusCounts"), constraints: true}); }
export function makeSubscriptionWindowMetrics(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionWindowMetrics"), constraints: true}); }
export function makeTaxBreakdown(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxBreakdown"), constraints: true}); }
export function makeTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationRequest"), constraints: true}); }
export function makeTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxComponentRequest"), constraints: true}); }
export function makeTaxIdentity(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentity"), constraints: true}); }
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityPatch"), constraints: true}); }
export function makeTaxIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityRequest"), constraints: true}); }
export function makeTaxJurisdiction(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxJurisdiction"), constraints: true}); }
export function makeTaxSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxSettings"), constraints: true}); }
export function makeTextModifierConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierConfig"), constraints: true}); }
export function makeTextModifierConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierConfigRequest"), constraints: true}); }
export function makeTextModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierRequest"), constraints: true}); }
export function makeThemeConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("ThemeConfig"), constraints: true}); }
export function makeTip(value) { return modelFromCodec(value, {..._sdkModelCodec("Tip"), constraints: true}); }
export function makeTipPaymentIntentAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("TipPaymentIntentAllocation"), constraints: true}); }
export function makeTippingSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("TippingSettings"), constraints: true}); }
export function makeTippingSettingsPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("TippingSettingsPatch"), constraints: true}); }
export function makeTipValueSettlementAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("TipValueSettlementAllocation"), constraints: true}); }
export function makeTransferOrganizationOwnershipRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TransferOrganizationOwnershipRequest"), constraints: true}); }
export function makeTransferOrganizationOwnershipResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("TransferOrganizationOwnershipResponse"), constraints: true}); }
export function makeTransferOrganizationOwnershipResult(value) { return modelFromCodec(value, {..._sdkModelCodec("TransferOrganizationOwnershipResult"), constraints: true}); }
export function makeTransitionGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TransitionGiftCardRequest"), constraints: true}); }
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateAPIKeyRequest"), constraints: true}); }
export function makeUpdateBundleComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateBundleComponentRequest"), constraints: true}); }
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateBundleRequest"), constraints: true}); }
export function makeUpdateCatalogSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCatalogSettings"), constraints: true}); }
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCategoryRequest"), constraints: true}); }
export function makeUpdateCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCheckoutSessionRequest"), constraints: true}); }
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCreditNoteRequest"), constraints: true}); }
export function makeUpdateCustomerAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCustomerAddressRequest"), constraints: true}); }
export function makeUpdateCustomerEmailPreferencesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCustomerEmailPreferencesRequest"), constraints: true}); }
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCustomerRequest"), constraints: true}); }
export function makeUpdateDeliveryFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDeliveryFulfillmentDetails"), constraints: true}); }
export function makeUpdateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDeliveryLocationSetRequest"), constraints: true}); }
export function makeUpdateDeliveryMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDeliveryMethodRequest"), constraints: true}); }
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDeliveryProfileRequest"), constraints: true}); }
export function makeUpdateDeliveryRateCallbackRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDeliveryRateCallbackRequest"), constraints: true}); }
export function makeUpdateDeliveryZoneRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDeliveryZoneRequest"), constraints: true}); }
export function makeUpdateDeviceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDeviceRequest"), constraints: true}); }
export function makeUpdateDigitalFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateDigitalFulfillmentDetails"), constraints: true}); }
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateFulfillmentRequest"), constraints: true}); }
export function makeUpdateGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateGiftCardRequest"), constraints: true}); }
export function makeUpdateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInventoryAllocationPolicyRequest"), constraints: true}); }
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInventoryCountRequest"), constraints: true}); }
export function makeUpdateInventoryItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInventoryItemRequest"), constraints: true}); }
export function makeUpdateInventoryLevelRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInventoryLevelRequest"), constraints: true}); }
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInventoryTransferRequest"), constraints: true}); }
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInvoicePaymentTermRequest"), constraints: true}); }
export function makeUpdateInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInvoiceRequest"), constraints: true}); }
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateLineItemRequest"), constraints: true}); }
export function makeUpdateLocationInventoryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateLocationInventoryRequest"), constraints: true}); }
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateLocationRequest"), constraints: true}); }
export function makeUpdateMerchantRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateMerchantRequest"), constraints: true}); }
export function makeUpdateMeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateMeRequest"), constraints: true}); }
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateModifierGroupRequest"), constraints: true}); }
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateModifierSetRequest"), constraints: true}); }
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateOrderChargeRequest"), constraints: true}); }
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateOrderRequest"), constraints: true}); }
export function makeUpdateOrganizationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateOrganizationRequest"), constraints: true}); }
export function makeUpdatePackageItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageItemRequest"), constraints: true}); }
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageRequest"), constraints: true}); }
export function makeUpdatePackageResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageResponse"), constraints: true}); }
export function makeUpdatePackageResult(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageResult"), constraints: true}); }
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePartnerAppRequest"), constraints: true}); }
export function makeUpdatePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePaymentIntentRequest"), constraints: true}); }
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePaymentLinkRequest"), constraints: true}); }
export function makeUpdatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePaymentMethodDomainRequest"), constraints: true}); }
export function makeUpdatePayoutDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePayoutDestinationRequest"), constraints: true}); }
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePayoutSettingsRequest"), constraints: true}); }
export function makeUpdatePickupFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePickupFulfillmentDetails"), constraints: true}); }
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateProductOptionRequest"), constraints: true}); }
export function makeUpdateProductOptionValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateProductOptionValueRequest"), constraints: true}); }
export function makeUpdateProductRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateProductRequest"), constraints: true}); }
export function makeUpdateProductVariantRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateProductVariantRequest"), constraints: true}); }
export function makeUpdatePromotionCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePromotionCodeRequest"), constraints: true}); }
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePromotionRequest"), constraints: true}); }
export function makeUpdateRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateRefundRequest"), constraints: true}); }
export function makeUpdateReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnLineItemRequest"), constraints: true}); }
export function makeUpdateReturnLineItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnLineItemResponse"), constraints: true}); }
export function makeUpdateReturnPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnPolicyRequest"), constraints: true}); }
export function makeUpdateReturnPolicyResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnPolicyResponse"), constraints: true}); }
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnReasonRequest"), constraints: true}); }
export function makeUpdateReturnReasonResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnReasonResponse"), constraints: true}); }
export function makeUpdateReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnRequest"), constraints: true}); }
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnResolutionRequest"), constraints: true}); }
export function makeUpdateReturnResolutionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnResolutionResponse"), constraints: true}); }
export function makeUpdateReturnResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnResponse"), constraints: true}); }
export function makeUpdateRiskListRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateRiskListRequest"), constraints: true}); }
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateRiskRuleRequest"), constraints: true}); }
export function makeUpdateServiceFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateServiceFulfillmentDetails"), constraints: true}); }
export function makeUpdateSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSettingsRequest"), constraints: true}); }
export function makeUpdateShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateShipmentRequest"), constraints: true}); }
export function makeUpdateShipmentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateShipmentResponse"), constraints: true}); }
export function makeUpdateShipmentResult(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateShipmentResult"), constraints: true}); }
export function makeUpdateSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionBillingScheduleRequest"), constraints: true}); }
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanLineItemRequest"), constraints: true}); }
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanRequest"), constraints: true}); }
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionRequest"), constraints: true}); }
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateWebhookEndpointRequest"), constraints: true}); }
export function makeUser(value) { return modelFromCodec(value, {..._sdkModelCodec("User"), constraints: true}); }
export function makeVerifyReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VerifyReturnReceiptLineItemRequest"), constraints: true}); }
export function makeVerifyReturnReceiptLineItemResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("VerifyReturnReceiptLineItemResponse"), constraints: true}); }
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidPackageRequest"), constraints: true}); }
export function makeVoidPackageResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidPackageResponse"), constraints: true}); }
export function makeVoidPackageResult(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidPackageResult"), constraints: true}); }
export function makeVoidShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidShipmentRequest"), constraints: true}); }
export function makeVoidShipmentResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidShipmentResponse"), constraints: true}); }
export function makeVoidShipmentResult(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidShipmentResult"), constraints: true}); }
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveInvoiceLateFeeRequest"), constraints: true}); }
export function makeWaiveReturnLineInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveReturnLineInspectionRequest"), constraints: true}); }
export function makeWaiveReturnLineInspectionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveReturnLineInspectionResponse"), constraints: true}); }
export function makeWebhook_balance_transaction_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_balance_transaction_created_merchant"), constraints: true}); }
export function makeWebhook_balance_transaction_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_balance_transaction_updated_merchant"), constraints: true}); }
export function makeWebhook_balance_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_balance_updated_merchant"), constraints: true}); }
export function makeWebhook_capability_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_capability_updated_merchant"), constraints: true}); }
export function makeWebhook_checkout_session_closed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_closed_installed_merchants"), constraints: true}); }
export function makeWebhook_checkout_session_closed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_closed_merchant"), constraints: true}); }
export function makeWebhook_checkout_session_completed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_completed_installed_merchants"), constraints: true}); }
export function makeWebhook_checkout_session_completed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_completed_merchant"), constraints: true}); }
export function makeWebhook_checkout_session_expired_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_expired_installed_merchants"), constraints: true}); }
export function makeWebhook_checkout_session_expired_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_expired_merchant"), constraints: true}); }
export function makeWebhook_checkout_session_invalidated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_invalidated_installed_merchants"), constraints: true}); }
export function makeWebhook_checkout_session_invalidated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_checkout_session_invalidated_merchant"), constraints: true}); }
export function makeWebhook_credit_note_allocation_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_allocation_created_installed_merchants"), constraints: true}); }
export function makeWebhook_credit_note_allocation_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_allocation_created_merchant"), constraints: true}); }
export function makeWebhook_credit_note_allocation_reversed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_allocation_reversed_installed_merchants"), constraints: true}); }
export function makeWebhook_credit_note_allocation_reversed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_allocation_reversed_merchant"), constraints: true}); }
export function makeWebhook_credit_note_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_created_installed_merchants"), constraints: true}); }
export function makeWebhook_credit_note_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_created_merchant"), constraints: true}); }
export function makeWebhook_credit_note_issued_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_issued_installed_merchants"), constraints: true}); }
export function makeWebhook_credit_note_issued_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_issued_merchant"), constraints: true}); }
export function makeWebhook_credit_note_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_credit_note_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_updated_merchant"), constraints: true}); }
export function makeWebhook_credit_note_voided_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_voided_installed_merchants"), constraints: true}); }
export function makeWebhook_credit_note_voided_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_credit_note_voided_merchant"), constraints: true}); }
export function makeWebhook_customer_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_created_installed_merchants"), constraints: true}); }
export function makeWebhook_customer_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_created_merchant"), constraints: true}); }
export function makeWebhook_customer_deletion_completed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_deletion_completed_installed_merchants"), constraints: true}); }
export function makeWebhook_customer_deletion_completed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_deletion_completed_merchant"), constraints: true}); }
export function makeWebhook_customer_deletion_rejected_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_deletion_rejected_installed_merchants"), constraints: true}); }
export function makeWebhook_customer_deletion_rejected_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_deletion_rejected_merchant"), constraints: true}); }
export function makeWebhook_customer_deletion_requested_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_deletion_requested_installed_merchants"), constraints: true}); }
export function makeWebhook_customer_deletion_requested_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_deletion_requested_merchant"), constraints: true}); }
export function makeWebhook_customer_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_customer_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_customer_updated_merchant"), constraints: true}); }
export function makeWebhook_delivery_location_set_activated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_activated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_location_set_activated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_activated_merchant"), constraints: true}); }
export function makeWebhook_delivery_location_set_archived_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_archived_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_location_set_archived_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_archived_merchant"), constraints: true}); }
export function makeWebhook_delivery_location_set_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_created_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_location_set_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_created_merchant"), constraints: true}); }
export function makeWebhook_delivery_location_set_deactivated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_deactivated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_location_set_deactivated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_deactivated_merchant"), constraints: true}); }
export function makeWebhook_delivery_location_set_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_location_set_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_location_set_updated_merchant"), constraints: true}); }
export function makeWebhook_delivery_method_activated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_activated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_method_activated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_activated_merchant"), constraints: true}); }
export function makeWebhook_delivery_method_archived_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_archived_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_method_archived_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_archived_merchant"), constraints: true}); }
export function makeWebhook_delivery_method_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_created_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_method_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_created_merchant"), constraints: true}); }
export function makeWebhook_delivery_method_deactivated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_deactivated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_method_deactivated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_deactivated_merchant"), constraints: true}); }
export function makeWebhook_delivery_method_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_method_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_method_updated_merchant"), constraints: true}); }
export function makeWebhook_delivery_profile_activated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_activated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_profile_activated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_activated_merchant"), constraints: true}); }
export function makeWebhook_delivery_profile_archived_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_archived_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_profile_archived_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_archived_merchant"), constraints: true}); }
export function makeWebhook_delivery_profile_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_created_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_profile_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_created_merchant"), constraints: true}); }
export function makeWebhook_delivery_profile_deactivated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_deactivated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_profile_deactivated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_deactivated_merchant"), constraints: true}); }
export function makeWebhook_delivery_profile_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_profile_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_profile_updated_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_archived_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_archived_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_archived_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_archived_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_activated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_activated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_activated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_activated_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_archived_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_archived_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_archived_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_archived_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_created_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_created_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_deactivated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_deactivated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_deactivated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_deactivated_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_callback_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_callback_updated_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_created_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_created_merchant"), constraints: true}); }
export function makeWebhook_delivery_rate_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_rate_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_rate_updated_merchant"), constraints: true}); }
export function makeWebhook_delivery_revocation_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_revocation_created_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_revocation_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_revocation_created_merchant"), constraints: true}); }
export function makeWebhook_delivery_selection_committed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_selection_committed_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_selection_committed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_selection_committed_merchant"), constraints: true}); }
export function makeWebhook_delivery_zone_activated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_activated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_zone_activated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_activated_merchant"), constraints: true}); }
export function makeWebhook_delivery_zone_archived_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_archived_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_zone_archived_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_archived_merchant"), constraints: true}); }
export function makeWebhook_delivery_zone_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_created_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_zone_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_created_merchant"), constraints: true}); }
export function makeWebhook_delivery_zone_deactivated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_deactivated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_zone_deactivated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_deactivated_merchant"), constraints: true}); }
export function makeWebhook_delivery_zone_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_delivery_zone_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_delivery_zone_updated_merchant"), constraints: true}); }
export function makeWebhook_dispute_closed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_closed_merchant"), constraints: true}); }
export function makeWebhook_dispute_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_created_merchant"), constraints: true}); }
export function makeWebhook_dispute_lost_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_lost_merchant"), constraints: true}); }
export function makeWebhook_dispute_needs_response_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_needs_response_merchant"), constraints: true}); }
export function makeWebhook_dispute_prevented_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_prevented_merchant"), constraints: true}); }
export function makeWebhook_dispute_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_updated_merchant"), constraints: true}); }
export function makeWebhook_dispute_warning_closed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_warning_closed_merchant"), constraints: true}); }
export function makeWebhook_dispute_won_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_dispute_won_merchant"), constraints: true}); }
export function makeWebhook_fraud_warning_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_fraud_warning_created_installed_merchants"), constraints: true}); }
export function makeWebhook_fraud_warning_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_fraud_warning_created_merchant"), constraints: true}); }
export function makeWebhook_fraud_warning_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_fraud_warning_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_fraud_warning_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_fraud_warning_updated_merchant"), constraints: true}); }
export function makeWebhook_gift_card_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_created_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_created_merchant"), constraints: true}); }
export function makeWebhook_gift_card_load_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_load_created_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_load_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_load_created_merchant"), constraints: true}); }
export function makeWebhook_gift_card_load_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_load_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_load_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_load_updated_merchant"), constraints: true}); }
export function makeWebhook_gift_card_notification_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_notification_created_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_notification_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_notification_created_merchant"), constraints: true}); }
export function makeWebhook_gift_card_notification_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_notification_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_notification_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_notification_updated_merchant"), constraints: true}); }
export function makeWebhook_gift_card_redemption_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_redemption_created_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_redemption_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_redemption_created_merchant"), constraints: true}); }
export function makeWebhook_gift_card_redemption_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_redemption_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_redemption_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_redemption_updated_merchant"), constraints: true}); }
export function makeWebhook_gift_card_transaction_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_transaction_created_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_transaction_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_transaction_created_merchant"), constraints: true}); }
export function makeWebhook_gift_card_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_gift_card_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_gift_card_updated_merchant"), constraints: true}); }
export function makeWebhook_inventory_action_required_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_action_required_merchant"), constraints: true}); }
export function makeWebhook_inventory_count_applied_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_count_applied_merchant"), constraints: true}); }
export function makeWebhook_inventory_level_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_level_updated_merchant"), constraints: true}); }
export function makeWebhook_inventory_receipt_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_receipt_created_merchant"), constraints: true}); }
export function makeWebhook_inventory_reservation_at_risk_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_reservation_at_risk_merchant"), constraints: true}); }
export function makeWebhook_inventory_reservation_closed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_reservation_closed_merchant"), constraints: true}); }
export function makeWebhook_inventory_reservation_committed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_reservation_committed_merchant"), constraints: true}); }
export function makeWebhook_inventory_reservation_consumed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_reservation_consumed_merchant"), constraints: true}); }
export function makeWebhook_inventory_reservation_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_reservation_created_merchant"), constraints: true}); }
export function makeWebhook_inventory_reservation_hold_expired_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_reservation_hold_expired_merchant"), constraints: true}); }
export function makeWebhook_inventory_reservation_released_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_reservation_released_merchant"), constraints: true}); }
export function makeWebhook_inventory_shortage_detected_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_shortage_detected_merchant"), constraints: true}); }
export function makeWebhook_inventory_transfer_closed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_transfer_closed_merchant"), constraints: true}); }
export function makeWebhook_inventory_transfer_departed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_transfer_departed_merchant"), constraints: true}); }
export function makeWebhook_inventory_transfer_lost_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_transfer_lost_merchant"), constraints: true}); }
export function makeWebhook_inventory_transfer_received_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_transfer_received_merchant"), constraints: true}); }
export function makeWebhook_inventory_transfer_returned_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_inventory_transfer_returned_merchant"), constraints: true}); }
export function makeWebhook_invoice_collection_block_resolved_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_collection_block_resolved_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_collection_block_resolved_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_collection_block_resolved_merchant"), constraints: true}); }
export function makeWebhook_invoice_collection_blocked_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_collection_blocked_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_collection_blocked_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_collection_blocked_merchant"), constraints: true}); }
export function makeWebhook_invoice_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_created_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_created_merchant"), constraints: true}); }
export function makeWebhook_invoice_credited_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_credited_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_credited_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_credited_merchant"), constraints: true}); }
export function makeWebhook_invoice_delivery_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_delivery_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_delivery_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_delivery_failed_merchant"), constraints: true}); }
export function makeWebhook_invoice_delivery_succeeded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_delivery_succeeded_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_delivery_succeeded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_delivery_succeeded_merchant"), constraints: true}); }
export function makeWebhook_invoice_issue_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_issue_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_issue_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_issue_failed_merchant"), constraints: true}); }
export function makeWebhook_invoice_issued_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_issued_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_issued_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_issued_merchant"), constraints: true}); }
export function makeWebhook_invoice_late_fee_assessed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_late_fee_assessed_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_late_fee_assessed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_late_fee_assessed_merchant"), constraints: true}); }
export function makeWebhook_invoice_late_fee_due_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_late_fee_due_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_late_fee_due_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_late_fee_due_merchant"), constraints: true}); }
export function makeWebhook_invoice_late_fee_waived_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_late_fee_waived_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_late_fee_waived_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_late_fee_waived_merchant"), constraints: true}); }
export function makeWebhook_invoice_manual_payment_recorded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_manual_payment_recorded_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_manual_payment_recorded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_manual_payment_recorded_merchant"), constraints: true}); }
export function makeWebhook_invoice_manual_payment_reversed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_manual_payment_reversed_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_manual_payment_reversed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_manual_payment_reversed_merchant"), constraints: true}); }
export function makeWebhook_invoice_marked_uncollectible_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_marked_uncollectible_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_marked_uncollectible_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_marked_uncollectible_merchant"), constraints: true}); }
export function makeWebhook_invoice_overdue_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_overdue_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_overdue_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_overdue_merchant"), constraints: true}); }
export function makeWebhook_invoice_paid_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_paid_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_paid_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_paid_merchant"), constraints: true}); }
export function makeWebhook_invoice_partially_paid_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_partially_paid_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_partially_paid_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_partially_paid_merchant"), constraints: true}); }
export function makeWebhook_invoice_partially_refunded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_partially_refunded_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_partially_refunded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_partially_refunded_merchant"), constraints: true}); }
export function makeWebhook_invoice_payment_attempt_canceled_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_attempt_canceled_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_payment_attempt_canceled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_attempt_canceled_merchant"), constraints: true}); }
export function makeWebhook_invoice_payment_attempt_expired_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_attempt_expired_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_payment_attempt_expired_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_attempt_expired_merchant"), constraints: true}); }
export function makeWebhook_invoice_payment_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_payment_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_failed_merchant"), constraints: true}); }
export function makeWebhook_invoice_payment_processing_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_processing_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_payment_processing_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_payment_processing_merchant"), constraints: true}); }
export function makeWebhook_invoice_refunded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_refunded_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_refunded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_refunded_merchant"), constraints: true}); }
export function makeWebhook_invoice_reminder_due_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_reminder_due_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_reminder_due_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_reminder_due_merchant"), constraints: true}); }
export function makeWebhook_invoice_sent_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_sent_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_sent_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_sent_merchant"), constraints: true}); }
export function makeWebhook_invoice_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_updated_merchant"), constraints: true}); }
export function makeWebhook_invoice_voided_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_voided_installed_merchants"), constraints: true}); }
export function makeWebhook_invoice_voided_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_invoice_voided_merchant"), constraints: true}); }
export function makeWebhook_merchant_billing_balance_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_merchant_billing_balance_updated_merchant"), constraints: true}); }
export function makeWebhook_merchant_readiness_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_merchant_readiness_updated_merchant"), constraints: true}); }
export function makeWebhook_merchant_subscription_invoice_issued_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_merchant_subscription_invoice_issued_merchant"), constraints: true}); }
export function makeWebhook_merchant_subscription_invoice_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_merchant_subscription_invoice_updated_merchant"), constraints: true}); }
export function makeWebhook_order_closed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_closed_installed_merchants"), constraints: true}); }
export function makeWebhook_order_closed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_closed_merchant"), constraints: true}); }
export function makeWebhook_order_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_created_installed_merchants"), constraints: true}); }
export function makeWebhook_order_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_created_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_completed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_completed_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_completed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_completed_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_created_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_created_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_event_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_event_created_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_event_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_event_created_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_package_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_package_created_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_package_created_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_package_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_package_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_package_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_package_updated_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_shipment_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_shipment_created_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_shipment_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_shipment_created_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_shipment_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_shipment_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_shipment_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_shipment_updated_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_status_changed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_status_changed_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_status_changed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_status_changed_merchant"), constraints: true}); }
export function makeWebhook_order_fulfillment_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_order_fulfillment_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_fulfillment_updated_merchant"), constraints: true}); }
export function makeWebhook_order_inventory_action_required_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_inventory_action_required_merchant"), constraints: true}); }
export function makeWebhook_order_inventory_exception_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_inventory_exception_created_installed_merchants"), constraints: true}); }
export function makeWebhook_order_inventory_exception_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_inventory_exception_created_merchant"), constraints: true}); }
export function makeWebhook_order_inventory_exception_resolved_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_inventory_exception_resolved_installed_merchants"), constraints: true}); }
export function makeWebhook_order_inventory_exception_resolved_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_inventory_exception_resolved_merchant"), constraints: true}); }
export function makeWebhook_order_paid_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_paid_installed_merchants"), constraints: true}); }
export function makeWebhook_order_paid_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_paid_merchant"), constraints: true}); }
export function makeWebhook_order_partially_paid_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_partially_paid_installed_merchants"), constraints: true}); }
export function makeWebhook_order_partially_paid_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_partially_paid_merchant"), constraints: true}); }
export function makeWebhook_order_payment_authorization_canceled_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_authorization_canceled_installed_merchants"), constraints: true}); }
export function makeWebhook_order_payment_authorization_canceled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_authorization_canceled_merchant"), constraints: true}); }
export function makeWebhook_order_payment_authorization_expired_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_authorization_expired_installed_merchants"), constraints: true}); }
export function makeWebhook_order_payment_authorization_expired_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_authorization_expired_merchant"), constraints: true}); }
export function makeWebhook_order_payment_authorized_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_authorized_installed_merchants"), constraints: true}); }
export function makeWebhook_order_payment_authorized_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_authorized_merchant"), constraints: true}); }
export function makeWebhook_order_payment_captured_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_captured_installed_merchants"), constraints: true}); }
export function makeWebhook_order_payment_captured_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_payment_captured_merchant"), constraints: true}); }
export function makeWebhook_order_refunded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_refunded_installed_merchants"), constraints: true}); }
export function makeWebhook_order_refunded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_refunded_merchant"), constraints: true}); }
export function makeWebhook_order_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_order_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_order_updated_merchant"), constraints: true}); }
export function makeWebhook_partner_app_install_created_partner_app(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_partner_app_install_created_partner_app"), constraints: true}); }
export function makeWebhook_partner_app_install_environment_grant_created_partner_app(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_partner_app_install_environment_grant_created_partner_app"), constraints: true}); }
export function makeWebhook_partner_app_install_environment_grant_revoked_partner_app(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_partner_app_install_environment_grant_revoked_partner_app"), constraints: true}); }
export function makeWebhook_partner_app_install_permissions_updated_partner_app(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_partner_app_install_permissions_updated_partner_app"), constraints: true}); }
export function makeWebhook_partner_app_install_revoked_partner_app(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_partner_app_install_revoked_partner_app"), constraints: true}); }
export function makeWebhook_partner_app_install_updated_partner_app(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_partner_app_install_updated_partner_app"), constraints: true}); }
export function makeWebhook_payment_intent_canceled_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_canceled_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_intent_canceled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_canceled_merchant"), constraints: true}); }
export function makeWebhook_payment_intent_fulfillment_hold_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_fulfillment_hold_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_intent_fulfillment_hold_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_fulfillment_hold_updated_merchant"), constraints: true}); }
export function makeWebhook_payment_intent_payment_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_payment_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_intent_payment_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_payment_failed_merchant"), constraints: true}); }
export function makeWebhook_payment_intent_processing_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_processing_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_intent_processing_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_processing_merchant"), constraints: true}); }
export function makeWebhook_payment_intent_requires_action_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_requires_action_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_intent_requires_action_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_requires_action_merchant"), constraints: true}); }
export function makeWebhook_payment_intent_requires_capture_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_requires_capture_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_intent_requires_capture_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_requires_capture_merchant"), constraints: true}); }
export function makeWebhook_payment_intent_succeeded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_succeeded_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_intent_succeeded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_intent_succeeded_merchant"), constraints: true}); }
export function makeWebhook_payment_method_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_method_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_method_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_method_failed_merchant"), constraints: true}); }
export function makeWebhook_payment_method_removed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_method_removed_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_method_removed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_method_removed_merchant"), constraints: true}); }
export function makeWebhook_payment_method_saved_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_method_saved_installed_merchants"), constraints: true}); }
export function makeWebhook_payment_method_saved_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payment_method_saved_merchant"), constraints: true}); }
export function makeWebhook_payout_canceled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_canceled_merchant"), constraints: true}); }
export function makeWebhook_payout_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_created_merchant"), constraints: true}); }
export function makeWebhook_payout_destination_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_destination_created_merchant"), constraints: true}); }
export function makeWebhook_payout_destination_deleted_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_destination_deleted_merchant"), constraints: true}); }
export function makeWebhook_payout_destination_disabled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_destination_disabled_merchant"), constraints: true}); }
export function makeWebhook_payout_destination_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_destination_updated_merchant"), constraints: true}); }
export function makeWebhook_payout_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_failed_merchant"), constraints: true}); }
export function makeWebhook_payout_paid_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_paid_merchant"), constraints: true}); }
export function makeWebhook_payout_reversed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_reversed_merchant"), constraints: true}); }
export function makeWebhook_payout_settings_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_settings_updated_merchant"), constraints: true}); }
export function makeWebhook_payout_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_payout_updated_merchant"), constraints: true}); }
export function makeWebhook_refund_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_refund_created_installed_merchants"), constraints: true}); }
export function makeWebhook_refund_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_refund_created_merchant"), constraints: true}); }
export function makeWebhook_refund_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_refund_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_refund_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_refund_failed_merchant"), constraints: true}); }
export function makeWebhook_refund_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_refund_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_refund_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_refund_updated_merchant"), constraints: true}); }
export function makeWebhook_report_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_report_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_report_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_report_failed_merchant"), constraints: true}); }
export function makeWebhook_report_succeeded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_report_succeeded_installed_merchants"), constraints: true}); }
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_report_succeeded_merchant"), constraints: true}); }
export function makeWebhook_return_canceled_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_canceled_installed_merchants"), constraints: true}); }
export function makeWebhook_return_canceled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_canceled_merchant"), constraints: true}); }
export function makeWebhook_return_completed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_completed_installed_merchants"), constraints: true}); }
export function makeWebhook_return_completed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_completed_merchant"), constraints: true}); }
export function makeWebhook_return_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_created_installed_merchants"), constraints: true}); }
export function makeWebhook_return_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_created_merchant"), constraints: true}); }
export function makeWebhook_return_decision_recorded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_decision_recorded_installed_merchants"), constraints: true}); }
export function makeWebhook_return_decision_recorded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_decision_recorded_merchant"), constraints: true}); }
export function makeWebhook_return_disposition_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_disposition_created_installed_merchants"), constraints: true}); }
export function makeWebhook_return_disposition_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_disposition_created_merchant"), constraints: true}); }
export function makeWebhook_return_disposition_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_disposition_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_return_disposition_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_disposition_updated_merchant"), constraints: true}); }
export function makeWebhook_return_inspection_acceptance_decided_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_inspection_acceptance_decided_installed_merchants"), constraints: true}); }
export function makeWebhook_return_inspection_acceptance_decided_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_inspection_acceptance_decided_merchant"), constraints: true}); }
export function makeWebhook_return_inspection_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_inspection_created_installed_merchants"), constraints: true}); }
export function makeWebhook_return_inspection_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_inspection_created_merchant"), constraints: true}); }
export function makeWebhook_return_inspection_superseded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_inspection_superseded_installed_merchants"), constraints: true}); }
export function makeWebhook_return_inspection_superseded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_inspection_superseded_merchant"), constraints: true}); }
export function makeWebhook_return_receipt_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_receipt_created_installed_merchants"), constraints: true}); }
export function makeWebhook_return_receipt_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_receipt_created_merchant"), constraints: true}); }
export function makeWebhook_return_receipt_superseded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_receipt_superseded_installed_merchants"), constraints: true}); }
export function makeWebhook_return_receipt_superseded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_receipt_superseded_merchant"), constraints: true}); }
export function makeWebhook_return_receipt_verified_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_receipt_verified_installed_merchants"), constraints: true}); }
export function makeWebhook_return_receipt_verified_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_receipt_verified_merchant"), constraints: true}); }
export function makeWebhook_return_reopened_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_reopened_installed_merchants"), constraints: true}); }
export function makeWebhook_return_reopened_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_reopened_merchant"), constraints: true}); }
export function makeWebhook_return_resolution_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_resolution_created_installed_merchants"), constraints: true}); }
export function makeWebhook_return_resolution_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_resolution_created_merchant"), constraints: true}); }
export function makeWebhook_return_resolution_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_resolution_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_return_resolution_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_resolution_updated_merchant"), constraints: true}); }
export function makeWebhook_return_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_return_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_return_updated_merchant"), constraints: true}); }
export function makeWebhook_review_closed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_review_closed_installed_merchants"), constraints: true}); }
export function makeWebhook_review_closed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_review_closed_merchant"), constraints: true}); }
export function makeWebhook_review_opened_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_review_opened_installed_merchants"), constraints: true}); }
export function makeWebhook_review_opened_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_review_opened_merchant"), constraints: true}); }
export function makeWebhook_subscription_activated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_activated_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_activated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_activated_merchant"), constraints: true}); }
export function makeWebhook_subscription_canceled_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_canceled_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_canceled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_canceled_merchant"), constraints: true}); }
export function makeWebhook_subscription_cancellation_scheduled_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_cancellation_scheduled_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_cancellation_scheduled_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_cancellation_scheduled_merchant"), constraints: true}); }
export function makeWebhook_subscription_created_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_created_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_created_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_created_merchant"), constraints: true}); }
export function makeWebhook_subscription_dunning_exhausted_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_dunning_exhausted_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_dunning_exhausted_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_dunning_exhausted_merchant"), constraints: true}); }
export function makeWebhook_subscription_past_due_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_past_due_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_past_due_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_past_due_merchant"), constraints: true}); }
export function makeWebhook_subscription_paused_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_paused_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_paused_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_paused_merchant"), constraints: true}); }
export function makeWebhook_subscription_payment_failed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_payment_failed_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_payment_failed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_payment_failed_merchant"), constraints: true}); }
export function makeWebhook_subscription_payment_succeeded_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_payment_succeeded_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_payment_succeeded_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_payment_succeeded_merchant"), constraints: true}); }
export function makeWebhook_subscription_reactivated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_reactivated_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_reactivated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_reactivated_merchant"), constraints: true}); }
export function makeWebhook_subscription_renewal_upcoming_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_renewal_upcoming_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_renewal_upcoming_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_renewal_upcoming_merchant"), constraints: true}); }
export function makeWebhook_subscription_resumed_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_resumed_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_resumed_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_resumed_merchant"), constraints: true}); }
export function makeWebhook_subscription_trial_ending_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_trial_ending_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_trial_ending_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_trial_ending_merchant"), constraints: true}); }
export function makeWebhook_subscription_updated_installed_merchants(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_updated_installed_merchants"), constraints: true}); }
export function makeWebhook_subscription_updated_merchant(value) { return modelFromCodec(value, {..._sdkModelCodec("Webhook_subscription_updated_merchant"), constraints: true}); }
export function makeWebhookDelivery(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookDelivery"), constraints: true}); }
export function makeWebhookDeliveryAction(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookDeliveryAction"), constraints: true}); }
export function makeWebhookDeliveryActionResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookDeliveryActionResponse"), constraints: true}); }
export function makeWebhookDeliveryAttempt(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookDeliveryAttempt"), constraints: true}); }
export function makeWebhookDeliveryAttemptListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookDeliveryAttemptListResponse"), constraints: true}); }
export function makeWebhookDeliveryListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookDeliveryListResponse"), constraints: true}); }
export function makeWebhookDeliveryResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookDeliveryResponse"), constraints: true}); }
export function makeWebhookEndpoint(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEndpoint"), constraints: true}); }
export function makeWebhookEndpointListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEndpointListResponse"), constraints: true}); }
export function makeWebhookEndpointResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEndpointResponse"), constraints: true}); }
export function makeWebhookEvent(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEvent"), constraints: true}); }
export function makeWebhookEventListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEventListResponse"), constraints: true}); }
export function makeWebhookEventResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEventResponse"), constraints: true}); }
export function makeWebhookEventType(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEventType"), constraints: true}); }
export function makeWebhookEventTypeListResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookEventTypeListResponse"), constraints: true}); }
export function makeWebhookSecret(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookSecret"), constraints: true}); }
export function makeWebhookSecretRotationResponse(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookSecretRotationResponse"), constraints: true}); }
export function makeWebhookStreamDisconnect(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookStreamDisconnect"), constraints: true}); }
export function makeWebhookStreamGap(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookStreamGap"), constraints: true}); }
export function makeWebhookStreamReady(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookStreamReady"), constraints: true}); }
export function makeWebhookStreamWithheld(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookStreamWithheld"), constraints: true}); }
export function makeWeight(value) { return modelFromCodec(value, {..._sdkModelCodec("Weight"), constraints: true}); }
