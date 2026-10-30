import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from './response.js';
import { requestInput as _sdkRequestInput } from './request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from './runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from './runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from './runtime.js';
import { resource, webhook, modelCodec as _sdkModelCodec } from './descriptors/root.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
const r0 = () => resource("analytics");
const r1 = () => resource("apiKeys");
const r2 = () => resource("apiRequestLogs");
const r3 = () => resource("authContext");
const r4 = () => resource("balanceTransactions");
const r5 = () => resource("balances");
const r6 = () => resource("bundles");
const r7 = () => resource("categories");
const r8 = () => resource("checkoutSessions");
const r9 = () => resource("creditNotes");
const r10 = () => resource("customDomains");
const r11 = () => resource("customerDeletionRequests");
const r12 = () => resource("customerSessions");
const r13 = () => resource("customerVerifications");
const r14 = () => resource("customers");
const r15 = () => resource("deliveryLocationSets");
const r16 = () => resource("deliveryMethods");
const r17 = () => resource("deliveryPreviews");
const r18 = () => resource("deliveryProfiles");
const r19 = () => resource("deliveryQuotes");
const r20 = () => resource("deliveryRateCallbacks");
const r21 = () => resource("deliveryRevocations");
const r22 = () => resource("deliveryZones");
const r23 = () => resource("demoSessions");
const r24 = () => resource("devices");
const r25 = () => resource("discountPreviews");
const r26 = () => resource("disputes");
const r27 = () => resource("emailPreferenceLinks");
const r28 = () => resource("feedbackReports");
const r29 = () => resource("files");
const r30 = () => resource("fraudWarnings");
const r31 = () => resource("fulfillmentEvents");
const r32 = () => resource("fulfillmentNotifications");
const r33 = () => resource("fulfillments");
const r34 = () => resource("giftCardFundingDispositions");
const r35 = () => resource("giftCardLoads");
const r36 = () => resource("giftCardNotifications");
const r37 = () => resource("giftCardRedemptions");
const r38 = () => resource("giftCardTransactions");
const r39 = () => resource("giftCards");
const r40 = () => resource("inventoryAdjustments");
const r41 = () => resource("inventoryAllocationPolicies");
const r42 = () => resource("inventoryCounts");
const r43 = () => resource("inventoryItems");
const r44 = () => resource("inventoryLevels");
const r45 = () => resource("inventoryMovements");
const r46 = () => resource("inventoryReceipts");
const r47 = () => resource("inventoryReservations");
const r48 = () => resource("inventoryTransfers");
const r49 = () => resource("invoicePaymentTerms");
const r50 = () => resource("invoices");
const r51 = () => resource("locations");
const r52 = () => resource("me");
const r53 = () => resource("merchant");
const r54 = () => resource("merchantAccountSessions");
const r55 = () => resource("merchantBillingBalances");
const r56 = () => resource("merchantBillingEntries");
const r57 = () => resource("merchantBillingInvoices");
const r58 = () => resource("modifierGroups");
const r59 = () => resource("modifierSets");
const r60 = () => resource("oauth");
const r61 = () => resource("onboarding");
const r62 = () => resource("openapi");
const r63 = () => resource("orders");
const r64 = () => resource("organizations");
const r65 = () => resource("packages");
const r66 = () => resource("partnerAppInstalls");
const r67 = () => resource("partnerApps");
const r68 = () => resource("paymentIntents");
const r69 = () => resource("paymentLinks");
const r70 = () => resource("paymentMethodDomains");
const r71 = () => resource("paymentMethods");
const r72 = () => resource("paymentReviews");
const r73 = () => resource("payoutDestinations");
const r74 = () => resource("payoutSettings");
const r75 = () => resource("payouts");
const r76 = () => resource("products");
const r77 = () => resource("promotionCodes");
const r78 = () => resource("promotions");
const r79 = () => resource("refunds");
const r80 = () => resource("reportDownloads");
const r81 = () => resource("reports");
const r82 = () => resource("resourceTimelines");
const r83 = () => resource("returnDispositions");
const r84 = () => resource("returnInspections");
const r85 = () => resource("returnPolicies");
const r86 = () => resource("returnPreviews");
const r87 = () => resource("returnReasons");
const r88 = () => resource("returnReceipts");
const r89 = () => resource("returnResolutions");
const r90 = () => resource("returns");
const r91 = () => resource("riskLists");
const r92 = () => resource("riskPreviews");
const r93 = () => resource("riskRules");
const r94 = () => resource("sandboxes");
const r95 = () => resource("settings");
const r96 = () => resource("shipments");
const r97 = () => resource("subscriptionDeliveryMigrations");
const r98 = () => resource("subscriptionOffers");
const r99 = () => resource("subscriptionPlans");
const r100 = () => resource("subscriptionPreviews");
const r101 = () => resource("subscriptions");
const r102 = () => resource("taxConnection");
const r103 = () => resource("testClocks");
const r104 = () => resource("webhookDeliveries");
const r105 = () => resource("webhookEndpoints");
const r106 = () => resource("webhookEventTypes");
const r107 = () => resource("webhookEvents");
const r108 = () => resource("workloadIdentities");
import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["getAnalyticsOverview"]:r0,["getPaymentVolumeTimeseries"]:r0,["getSubscriptionAnalytics"]:r0,["createAPIKey"]:r1,["getAPIKey"]:r1,["listAPIKeys"]:r1,["revokeAPIKey"]:r1,["updateAPIKey"]:r1,["getAPIRequestLog"]:r2,["listAPIRequestLogs"]:r2,["getAuthContext"]:r3,["getBalanceTransaction"]:r4,["listBalanceTransactions"]:r4,["listBalances"]:r5,["createBundle"]:r6,["deleteBundle"]:r6,["getBundle"]:r6,["listBundleComponents"]:r6,["listBundles"]:r6,["updateBundle"]:r6,["createCategory"]:r7,["deleteCategory"]:r7,["getCategory"]:r7,["listCategories"]:r7,["updateCategory"]:r7,["closeCheckoutSession"]:r8,["confirmCheckoutSessionCustomerVerification"]:r8,["createCheckoutSession"]:r8,["createCheckoutSessionCustomerVerification"]:r8,["createCheckoutSessionDeliveryQuote"]:r8,["createCheckoutSessionDeliverySelection"]:r8,["deleteCheckoutSessionCurrentDeliverySelection"]:r8,["getCheckoutSession"]:r8,["getCheckoutSessionCurrentDeliverySelection"]:r8,["getCheckoutSessionDeliveryQuote"]:r8,["getCheckoutSessionDeliverySelection"]:r8,["listCheckoutSessionDeliverySelections"]:r8,["listCheckoutSessions"]:r8,["updateCheckoutSession"]:r8,["createCreditNote"]:r9,["createCreditNoteAllocation"]:r9,["createCreditNoteRefund"]:r9,["getCreditNote"]:r9,["getCreditNoteAllocation"]:r9,["getCreditNotePDF"]:r9,["issueCreditNote"]:r9,["listCreditNoteAllocations"]:r9,["listCreditNoteRefunds"]:r9,["listCreditNotes"]:r9,["reverseCreditNoteAllocation"]:r9,["updateCreditNote"]:r9,["voidCreditNote"]:r9,["createCustomDomain"]:r10,["deleteCustomDomain"]:r10,["getCustomDomain"]:r10,["listCustomDomains"]:r10,["validateCustomDomain"]:r10,["createCustomerDeletionRequest"]:r11,["getCustomerDeletionRequest"]:r11,["listCustomerDeletionRequests"]:r11,["resolveCustomerDeletionRequest"]:r11,["createCustomerSession"]:r12,["refreshCustomerSession"]:r12,["revokeCustomerSession"]:r12,["confirmCustomerVerification"]:r13,["createCustomerVerification"]:r13,["createCustomer"]:r14,["createCustomerAccessLink"]:r14,["createCustomerAddress"]:r14,["deleteCustomerAddress"]:r14,["getCustomer"]:r14,["getCustomerAddress"]:r14,["linkCustomerGuestPurchases"]:r14,["listCustomerAddresses"]:r14,["listCustomers"]:r14,["revokeCustomerSessions"]:r14,["updateCustomer"]:r14,["updateCustomerAddress"]:r14,["createDeliveryLocationSet"]:r15,["deleteDeliveryLocationSet"]:r15,["getDeliveryLocationSet"]:r15,["listDeliveryLocationSets"]:r15,["updateDeliveryLocationSet"]:r15,["createDeliveryMethod"]:r16,["deleteDeliveryMethod"]:r16,["getDeliveryMethod"]:r16,["listDeliveryMethods"]:r16,["updateDeliveryMethod"]:r16,["createDeliveryPreview"]:r17,["assignToUnconfiguredDeliveryProfile"]:r18,["createDeliveryProfile"]:r18,["deleteDeliveryProfile"]:r18,["getDeliveryProfile"]:r18,["listDeliveryProfiles"]:r18,["updateDeliveryProfile"]:r18,["getDeliveryQuote"]:r19,["listDeliveryQuotes"]:r19,["checkDeliveryRateCallbackConnection"]:r20,["createDeliveryRateCallback"]:r20,["createDeliveryRateCallbackTestDelivery"]:r20,["deleteDeliveryRateCallback"]:r20,["getDeliveryRateCallback"]:r20,["listDeliveryRateCallbacks"]:r20,["rotateDeliveryRateCallbackSigningKey"]:r20,["updateDeliveryRateCallback"]:r20,["getDeliveryRevocation"]:r21,["listDeliveryRevocations"]:r21,["revokeDeliveryDependency"]:r21,["createDeliveryZone"]:r22,["deleteDeliveryZone"]:r22,["getDeliveryZone"]:r22,["listDeliveryZones"]:r22,["updateDeliveryZone"]:r22,["createDemoSession"]:r23,["resetDemoSession"]:r23,["createDevice"]:r24,["deleteDevice"]:r24,["getDevice"]:r24,["listDevices"]:r24,["updateDevice"]:r24,["createDiscountPreview"]:r25,["acceptDispute"]:r26,["createDisputeResponseSession"]:r26,["getDispute"]:r26,["listDisputes"]:r26,["simulateDispute"]:r26,["lookupEmailPreferenceLink"]:r27,["unsubscribeEmailPreferenceLink"]:r27,["createFeedbackReport"]:r28,["getFeedbackReport"]:r28,["listFeedbackReports"]:r28,["completeFile"]:r29,["createFile"]:r29,["getFile"]:r29,["getFraudWarning"]:r30,["listFraudWarnings"]:r30,["getFulfillmentEvent"]:r31,["listFulfillmentEvents"]:r31,["getFulfillmentNotification"]:r32,["listFulfillmentNotifications"]:r32,["createFulfillmentEvent"]:r33,["createShipment"]:r33,["getFulfillment"]:r33,["listFulfillments"]:r33,["transitionFulfillment"]:r33,["updateFulfillment"]:r33,["createGiftCardFundingDisposition"]:r34,["getGiftCardFundingDisposition"]:r34,["listGiftCardFundingDispositions"]:r34,["getGiftCardLoad"]:r35,["listGiftCardLoads"]:r35,["cancelGiftCardNotification"]:r36,["createGiftCardNotification"]:r36,["getGiftCardNotification"]:r36,["listGiftCardNotifications"]:r36,["cancelGiftCardRedemption"]:r37,["captureGiftCardRedemption"]:r37,["createGiftCardRedemption"]:r37,["getGiftCardRedemption"]:r37,["listGiftCardRedemptions"]:r37,["listGiftCardTransactions"]:r38,["adjustGiftCardBalance"]:r39,["cashOutGiftCard"]:r39,["createGiftCard"]:r39,["createGiftCardLoad"]:r39,["getGiftCard"]:r39,["listGiftCards"]:r39,["lookupGiftCard"]:r39,["rotateGiftCardCode"]:r39,["transitionGiftCard"]:r39,["updateGiftCard"]:r39,["createInventoryAdjustment"]:r40,["getInventoryAdjustment"]:r40,["listInventoryAdjustments"]:r40,["createInventoryAllocationPolicy"]:r41,["deleteInventoryAllocationPolicy"]:r41,["getInventoryAllocationPolicy"]:r41,["getInventoryAllocationPolicyRevision"]:r41,["listInventoryAllocationPolicies"]:r41,["listInventoryAllocationPolicyRevisions"]:r41,["updateInventoryAllocationPolicy"]:r41,["createInventoryCount"]:r42,["getInventoryCount"]:r42,["listInventoryCounts"]:r42,["transitionInventoryCount"]:r42,["updateInventoryCount"]:r42,["createInventoryItem"]:r43,["deleteInventoryItem"]:r43,["getInventoryItem"]:r43,["listInventoryItems"]:r43,["updateInventoryItem"]:r43,["getInventoryLevel"]:r44,["listInventoryLevels"]:r44,["updateInventoryLevel"]:r44,["getInventoryMovement"]:r45,["listInventoryMovements"]:r45,["createInventoryReceipt"]:r46,["getInventoryReceipt"]:r46,["listInventoryReceipts"]:r46,["createInventoryReservation"]:r47,["getInventoryReservation"]:r47,["listInventoryReservations"]:r47,["transitionInventoryReservation"]:r47,["updateInventoryReservation"]:r47,["createInventoryTransfer"]:r48,["getInventoryTransfer"]:r48,["listInventoryTransfers"]:r48,["transitionInventoryTransfer"]:r48,["updateInventoryTransfer"]:r48,["createInvoicePaymentTerm"]:r49,["deleteInvoicePaymentTerm"]:r49,["getInvoicePaymentTerm"]:r49,["listInvoicePaymentTerms"]:r49,["updateInvoicePaymentTerm"]:r49,["cancelInvoicePaymentAttempt"]:r50,["collectInvoice"]:r50,["createInvoice"]:r50,["createInvoiceCheckoutSession"]:r50,["createInvoiceLateFee"]:r50,["createInvoiceManualPayment"]:r50,["getInvoice"]:r50,["getInvoiceManualPayment"]:r50,["getInvoicePaymentAttempt"]:r50,["getInvoicePDF"]:r50,["issueInvoice"]:r50,["listInvoiceActivities"]:r50,["listInvoiceDeliveryAttempts"]:r50,["listInvoiceManualPayments"]:r50,["listInvoicePaymentAttempts"]:r50,["listInvoices"]:r50,["markInvoiceUncollectible"]:r50,["regenerateInvoicePublicLink"]:r50,["reverseInvoiceManualPayment"]:r50,["sendInvoiceReminder"]:r50,["updateInvoice"]:r50,["voidInvoice"]:r50,["waiveInvoiceLateFee"]:r50,["createLocation"]:r51,["deleteLocation"]:r51,["getLocation"]:r51,["listLocations"]:r51,["updateLocation"]:r51,["cancelMeReturn"]:r52,["cancelMeSubscription"]:r52,["confirmMeEmailChangeRequest"]:r52,["createMeAddress"]:r52,["createMeDeletionRequest"]:r52,["createMeEmailChangeRequest"]:r52,["createMeFlintWalletStoreSetup"]:r52,["createMeInvoiceCheckoutSession"]:r52,["createMePaymentMethod"]:r52,["createMeReturn"]:r52,["createMeReturnPreview"]:r52,["createMeReturnResolutionCheckoutSession"]:r52,["createMeSubscriptionPaymentRetry"]:r52,["createMeSubscriptionPreview"]:r52,["deleteMeAddress"]:r52,["deleteMePaymentMethod"]:r52,["getMe"]:r52,["getMeAddress"]:r52,["getMeCreditNote"]:r52,["getMeCreditNotePDF"]:r52,["getMeDeletionRequest"]:r52,["getMeEmailPreferences"]:r52,["getMeFulfillment"]:r52,["getMeGiftCard"]:r52,["getMeInvoice"]:r52,["getMeInvoicePDF"]:r52,["getMeOrder"]:r52,["getMePackage"]:r52,["getMePaymentIntent"]:r52,["getMePaymentMethod"]:r52,["getMeRefund"]:r52,["getMeReturn"]:r52,["getMeReturnResolution"]:r52,["getMeShipment"]:r52,["getMeSubscription"]:r52,["getMeSubscriptionPaymentRetry"]:r52,["listMeAddresses"]:r52,["listMeCreditNotes"]:r52,["listMeDeletionRequests"]:r52,["listMeFlintWalletCards"]:r52,["listMeFulfillmentEvents"]:r52,["listMeFulfillments"]:r52,["listMeGiftCards"]:r52,["listMeGiftCardTransactions"]:r52,["listMeInvoices"]:r52,["listMeOrderActivities"]:r52,["listMeOrders"]:r52,["listMePackages"]:r52,["listMePaymentIntents"]:r52,["listMePaymentMethods"]:r52,["listMeRefunds"]:r52,["listMeReturns"]:r52,["listMeShipments"]:r52,["listMeSubscriptionPaymentRetries"]:r52,["listMeSubscriptions"]:r52,["pauseMeSubscription"]:r52,["removeMeGiftCard"]:r52,["renewMeSubscription"]:r52,["resumeMeSubscription"]:r52,["revokeMeSession"]:r52,["saveMeGiftCard"]:r52,["sendMeOrderReceipt"]:r52,["skipMeSubscriptionCycle"]:r52,["updateMe"]:r52,["updateMeAddress"]:r52,["updateMeEmailPreferences"]:r52,["updateMeSubscription"]:r52,["updateMeSubscriptionLineItem"]:r52,["getMerchant"]:r53,["updateMerchant"]:r53,["createMerchantAccountSession"]:r54,["refreshMerchantAccountSession"]:r54,["getMerchantBillingBalance"]:r55,["listMerchantBillingBalances"]:r55,["listMerchantBillingEntries"]:r56,["getMerchantBillingInvoice"]:r57,["listMerchantBillingInvoices"]:r57,["createModifierGroup"]:r58,["deleteModifierGroup"]:r58,["getModifierGroup"]:r58,["listModifierGroups"]:r58,["updateModifierGroup"]:r58,["createModifierSet"]:r59,["deleteModifierSet"]:r59,["getModifierSet"]:r59,["listModifierSets"]:r59,["updateModifierSet"]:r59,["previewPartnerInstallAuthorization"]:r60,["advanceOnboarding"]:r61,["createOnboardingAPIKey"]:r61,["getOnboardingState"]:r61,["startOnboarding"]:r61,["verifyOnboardingEmail"]:r61,["getOpenAPISpec"]:r62,["applyOrderDiscount"]:r63,["applyOrderGiftCard"]:r63,["cancelOrderPaymentAttempt"]:r63,["closeOrder"]:r63,["createFulfillment"]:r63,["createOrder"]:r63,["createOrderAccessLink"]:r63,["createOrderCharge"]:r63,["createOrderLineItems"]:r63,["createOrderPaymentIntent"]:r63,["deleteOrderCharge"]:r63,["deleteOrderLineItem"]:r63,["getOrder"]:r63,["getOrderCurrentDeliverySelection"]:r63,["getOrderPaymentAttempt"]:r63,["listOrderActivities"]:r63,["listOrderPaymentAttempts"]:r63,["listOrders"]:r63,["payOrder"]:r63,["removeOrderDiscounts"]:r63,["removeOrderGiftCard"]:r63,["repriceOrderDiscounts"]:r63,["resolveOrderInventoryException"]:r63,["sendOrderReceipt"]:r63,["updateOrder"]:r63,["updateOrderCharge"]:r63,["updateOrderLineItem"]:r63,["createOrganization"]:r64,["deleteOrganization"]:r64,["getOrganization"]:r64,["grantOrganizationMembership"]:r64,["listOrganizationMemberships"]:r64,["listOrganizations"]:r64,["removeOrganizationMembership"]:r64,["updateOrganization"]:r64,["createPackageItem"]:r65,["deletePackageItem"]:r65,["getPackage"]:r65,["getPackageItem"]:r65,["listPackageItems"]:r65,["listPackages"]:r65,["transitionPackage"]:r65,["updatePackage"]:r65,["updatePackageItem"]:r65,["voidPackage"]:r65,["listMerchantPartnerAppInstalls"]:r66,["revokeMerchantPartnerAppInstall"]:r66,["createPartnerApp"]:r67,["createPartnerAppCredential"]:r67,["deletePartnerApp"]:r67,["deletePartnerAppCredential"]:r67,["getPartnerApp"]:r67,["getPartnerAppCredential"]:r67,["getPartnerAppInstall"]:r67,["listPartnerAppCredentials"]:r67,["listPartnerAppInstalls"]:r67,["listPartnerApps"]:r67,["revokePartnerAppEnvironmentGrant"]:r67,["revokePartnerAppInstall"]:r67,["rotatePartnerAppSecret"]:r67,["updatePartnerApp"]:r67,["cancelPaymentIntent"]:r68,["capturePaymentIntent"]:r68,["confirmPaymentIntent"]:r68,["createPaymentIntent"]:r68,["getPaymentIntent"]:r68,["listPaymentIntentActivities"]:r68,["listPaymentIntents"]:r68,["sendPaymentIntentReceipt"]:r68,["updatePaymentIntent"]:r68,["createPaymentLink"]:r69,["getPaymentLink"]:r69,["getPaymentLinkPublic"]:r69,["listPaymentLinks"]:r69,["resolvePaymentLink"]:r69,["updatePaymentLink"]:r69,["createPaymentMethodDomain"]:r70,["getPaymentMethodDomain"]:r70,["listPaymentMethodDomains"]:r70,["updatePaymentMethodDomain"]:r70,["createPaymentMethod"]:r71,["deletePaymentMethod"]:r71,["getPaymentMethod"]:r71,["listPaymentMethods"]:r71,["approvePaymentReview"]:r72,["declinePaymentReview"]:r72,["getPaymentReview"]:r72,["listPaymentReviews"]:r72,["deletePayoutDestination"]:r73,["getPayoutDestination"]:r73,["listPayoutDestinations"]:r73,["updatePayoutDestination"]:r73,["getPayoutSettings"]:r74,["updatePayoutSettings"]:r74,["cancelPayout"]:r75,["createPayout"]:r75,["getPayout"]:r75,["listPayouts"]:r75,["createProduct"]:r76,["createProductVariant"]:r76,["deleteProduct"]:r76,["deleteProductVariant"]:r76,["getProduct"]:r76,["getProductOption"]:r76,["getProductVariant"]:r76,["listProductOptions"]:r76,["listProducts"]:r76,["listProductVariants"]:r76,["updateProduct"]:r76,["updateProductVariant"]:r76,["listPromotionCodes"]:r77,["createPromotion"]:r78,["createPromotionCode"]:r78,["deletePromotion"]:r78,["deletePromotionCode"]:r78,["getPromotion"]:r78,["getPromotionCode"]:r78,["listPromotions"]:r78,["updatePromotion"]:r78,["updatePromotionCode"]:r78,["createRefund"]:r79,["getRefund"]:r79,["listRefunds"]:r79,["updateRefund"]:r79,["getReportDownload"]:r80,["createReport"]:r81,["getReport"]:r81,["listReports"]:r81,["getResourceTimeline"]:r82,["cancelReturnDisposition"]:r83,["getReturnDisposition"]:r83,["listReturnDispositions"]:r83,["retryReturnDisposition"]:r83,["decideReturnInspectionLineItem"]:r84,["getReturnInspection"]:r84,["listReturnInspections"]:r84,["createReturnPolicy"]:r85,["createReturnPolicyRevision"]:r85,["deleteReturnPolicy"]:r85,["getReturnPolicy"]:r85,["getReturnPolicyRevision"]:r85,["listReturnPolicies"]:r85,["listReturnPolicyRevisions"]:r85,["updateReturnPolicy"]:r85,["createReturnPreview"]:r86,["createReturnReason"]:r87,["deleteReturnReason"]:r87,["getReturnReason"]:r87,["listReturnReasons"]:r87,["updateReturnReason"]:r87,["getReturnReceipt"]:r88,["listReturnReceipts"]:r88,["verifyReturnReceiptLineItem"]:r88,["cancelReturnResolution"]:r89,["confirmReturnResolution"]:r89,["createReturnResolutionCheckoutSession"]:r89,["getReturnResolution"]:r89,["listReturnResolutions"]:r89,["releaseReturnResolution"]:r89,["retryReturnResolution"]:r89,["updateReturnResolution"]:r89,["cancelReturn"]:r90,["cancelReturnLineItem"]:r90,["completeReturn"]:r90,["createReturn"]:r90,["createReturnAccessLink"]:r90,["createReturnDisposition"]:r90,["createReturnInspection"]:r90,["createReturnLineItem"]:r90,["createReturnReceipt"]:r90,["createReturnResolution"]:r90,["decideReturn"]:r90,["deleteReturnLineItem"]:r90,["getReturn"]:r90,["getReturnLineItem"]:r90,["listReturnActivities"]:r90,["listReturnLineItems"]:r90,["listReturns"]:r90,["processReturn"]:r90,["reopenReturn"]:r90,["updateReturn"]:r90,["updateReturnLineItem"]:r90,["waiveReturnLineItemInspection"]:r90,["createRiskList"]:r91,["createRiskListItems"]:r91,["deleteRiskList"]:r91,["deleteRiskListItem"]:r91,["getRiskList"]:r91,["getRiskListItem"]:r91,["listRiskListItems"]:r91,["listRiskLists"]:r91,["updateRiskList"]:r91,["createRiskPreview"]:r92,["createRiskRule"]:r93,["deleteRiskRule"]:r93,["getRiskRule"]:r93,["getRiskRuleAttributes"]:r93,["listRiskRules"]:r93,["updateRiskRule"]:r93,["createSandbox"]:r94,["createSandboxAPIKey"]:r94,["deleteSandbox"]:r94,["getSandbox"]:r94,["listSandboxes"]:r94,["resetSandbox"]:r94,["getEffectiveSettings"]:r95,["getSettings"]:r95,["updateSettings"]:r95,["createPackage"]:r96,["getShipment"]:r96,["listShipments"]:r96,["updateShipment"]:r96,["voidShipment"]:r96,["createSubscriptionDeliveryMigration"]:r97,["getSubscriptionDeliveryMigration"]:r97,["listSubscriptionDeliveryMigrationFailures"]:r97,["listSubscriptionDeliveryMigrations"]:r97,["createSubscriptionOffer"]:r98,["deleteSubscriptionOffer"]:r98,["getSubscriptionOffer"]:r98,["listSubscriptionOffers"]:r98,["updateSubscriptionOffer"]:r98,["createSubscriptionPlan"]:r99,["deleteSubscriptionPlan"]:r99,["getSubscriptionPlan"]:r99,["listSubscriptionPlans"]:r99,["updateSubscriptionPlan"]:r99,["createSubscriptionPreview"]:r100,["cancelSubscription"]:r101,["changeSubscriptionPlan"]:r101,["createSubscription"]:r101,["createSubscriptionAccessLink"]:r101,["createSubscriptionLineItem"]:r101,["createSubscriptionPaymentRetry"]:r101,["deleteSubscriptionLineItem"]:r101,["getSubscription"]:r101,["getSubscriptionPaymentRetry"]:r101,["listSubscriptionPaymentRetries"]:r101,["listSubscriptions"]:r101,["pauseSubscription"]:r101,["renewSubscription"]:r101,["resumeSubscription"]:r101,["skipSubscriptionCycle"]:r101,["updateSubscription"]:r101,["updateSubscriptionLineItem"]:r101,["connectTaxConnection"]:r102,["createTaxRegistration"]:r102,["deleteTaxRegistration"]:r102,["disconnectTaxConnection"]:r102,["getTaxConnection"]:r102,["getTaxRegistration"]:r102,["listTaxRegistrations"]:r102,["updateTaxRegistration"]:r102,["advanceTestClock"]:r103,["createTestClock"]:r103,["deleteTestClock"]:r103,["getTestClock"]:r103,["listTestClocks"]:r103,["createWebhookDelivery"]:r104,["getWebhookDelivery"]:r104,["listWebhookDeliveries"]:r104,["listWebhookDeliveryAttempts"]:r104,["resendWebhookDelivery"]:r104,["createWebhookEndpoint"]:r105,["createWebhookTestEvent"]:r105,["deleteWebhookEndpoint"]:r105,["getWebhookEndpoint"]:r105,["listWebhookEndpoints"]:r105,["rotateWebhookEndpointSecret"]:r105,["updateWebhookEndpoint"]:r105,["listWebhookEventTypes"]:r106,["getWebhookEvent"]:r107,["listWebhookEvents"]:r107,["streamWebhookEvents"]:r107,["createWorkloadIdentity"]:r108,["deleteWorkloadIdentity"]:r108,["getWorkloadIdentity"]:r108,["listWorkloadIdentities"]:r108,["updateWorkloadIdentity"]:r108}, webhook);

export class Client {
  #runtime;
  constructor(options = {}) {
    this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
    this.analytics = Object.freeze({
      getOverview: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAnalyticsOverview", result, path))),
      getPaymentVolumeTimeseries: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "granularity",
  "timezone"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentVolumeTimeseries", result, path))),
      getSubscription: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionAnalytics", result, path))),
    });
    this.apiKeys = Object.freeze({
      create: async (params, options) => this.#runtime.request("createAPIKey", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createAPIKey", result, path))),
      get: async (api_key_id, params, options) => this.#runtime.request("getAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAPIKey", result, path))),
      list: async (params, options) => this.#runtime.request("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listAPIKeys", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listAPIKeys", result, path)),
      listItems: (params, options) => this.#runtime.items("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      revoke: async (api_key_id, params, options) => this.#runtime.request("revokeAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeAPIKey", result, path))),
      update: async (api_key_id, params, options) => this.#runtime.request("updateAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateAPIKey", result, path))),
    });
    this.apiRequestLogs = Object.freeze({
      get: async (api_request_log_id, params, options) => this.#runtime.request("getAPIRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAPIRequestLog", result, path))),
      list: async (params, options) => this.#runtime.request("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path)),
      listItems: (params, options) => this.#runtime.items("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.authContext = Object.freeze({
      get: async (params, options) => this.#runtime.request("getAuthContext", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAuthContext", result, path))),
    });
    this.balanceTransactions = Object.freeze({
      get: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getBalanceTransaction", result, path))),
      list: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBalanceTransactions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listBalanceTransactions", result, path)),
      listItems: (params, options) => this.#runtime.items("listBalanceTransactions", _sdkRequestInput([], [], [
  "currency",
  "payout_id",
  "order_id",
  "expand",
  "type",
  "related_resource_type",
  "related_resource_id",
  "status",
  "occurred_after",
  "occurred_before",
  "available_after",
  "available_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.balances = Object.freeze({
      list: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBalances", result, path))),
    });
    this.bundles = Object.freeze({
      create: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createBundle", result, path))),
      delete: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteBundle", result, path))),
      get: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getBundle", result, path))),
      listComponents: async (bundle_id, params, options) => this.#runtime.request("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBundleComponents", result, path))),
      listComponentsPages: (bundle_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listBundleComponents", result, path)),
      listComponentsItems: (bundle_id, params, options) => this.#runtime.items("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBundles", result, path))),
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listBundles", result, path)),
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateBundle", result, path))),
    });
    this.categories = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCategory", result, path))),
      delete: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCategory", result, path))),
      get: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCategory", result, path))),
      list: async (params, options) => this.#runtime.request("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCategories", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCategories", result, path)),
      listItems: (params, options) => this.#runtime.items("listCategories", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "handle",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCategory", result, path))),
    });
    this.checkoutSessions = Object.freeze({
      close: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeCheckoutSession", result, path))),
      confirmCustomerVerification: async (checkout_session_id, checkout_session_customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "checkout_session_customer_verification_id"
], [checkout_session_id, checkout_session_customer_verification_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmCheckoutSessionCustomerVerification", result, path))),
      create: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSession", result, path))),
      createCustomerVerification: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionCustomerVerification", result, path))),
      createDeliveryQuote: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliveryQuote", result, path))),
      createDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliverySelection", result, path))),
      deleteCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expected_delivery_selection_id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCheckoutSessionCurrentDeliverySelection", result, path))),
      get: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSession", result, path))),
      getCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionCurrentDeliverySelection", result, path))),
      getDeliveryQuote: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliveryQuote", result, path))),
      getDeliverySelection: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliverySelection", result, path))),
      listDeliverySelections: async (checkout_session_id, params, options) => this.#runtime.request("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCheckoutSessionDeliverySelections", result, path))),
      listDeliverySelectionsPages: (checkout_session_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCheckoutSessionDeliverySelections", result, path)),
      listDeliverySelectionsItems: (checkout_session_id, params, options) => this.#runtime.items("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "subscription_plan_id",
  "invoice_id",
  "surface",
  "type",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "subscription_plan_id",
  "invoice_id",
  "surface",
  "type",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path)),
      listItems: (params, options) => this.#runtime.items("listCheckoutSessions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "payment_link_id",
  "customer_id",
  "subscription_plan_id",
  "invoice_id",
  "surface",
  "type",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCheckoutSession", result, path))),
    });
    this.creditNotes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNote", result, path))),
      createAllocation: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteAllocation", result, path))),
      createRefund: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteRefund", result, path))),
      get: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNote", result, path))),
      getAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNoteAllocation", result, path))),
      getPDF: async (credit_note_id, params, options) => this.#runtime.request("getCreditNotePDF", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      issue: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueCreditNote", result, path))),
      listAllocations: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path))),
      listAllocationsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path)),
      listAllocationsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listRefunds: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteRefunds", result, path))),
      listRefundsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteRefunds", result, path)),
      listRefundsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path)),
      listItems: (params, options) => this.#runtime.items("listCreditNotes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "invoice_id",
  "customer_id",
  "reason",
  "external_reference_id",
  "query",
  "status",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      reverseAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseCreditNoteAllocation", result, path))),
      update: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCreditNote", result, path))),
      void: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidCreditNote", result, path))),
    });
    this.customDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomDomain", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomDomain", result, path))),
      delete: async (custom_domain_id, params, options) => this.#runtime.request("deleteCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomDomain", result, path))),
      get: async (custom_domain_id, params, options) => this.#runtime.request("getCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomDomain", result, path))),
      list: async (params, options) => this.#runtime.request("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path)),
      listItems: (params, options) => this.#runtime.items("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      validate: async (custom_domain_id, params, options) => this.#runtime.request("validateCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("validateCustomDomain", result, path))),
    });
    this.customerDeletionRequests = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerDeletionRequest", result, path))),
      get: async (customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerDeletionRequest", result, path))),
      list: async (params, options) => this.#runtime.request("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerDeletionRequests", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomerDeletionRequests", result, path)),
      listItems: (params, options) => this.#runtime.items("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      resolve: async (customer_deletion_request_id, params, options) => this.#runtime.request("resolveCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveCustomerDeletionRequest", result, path))),
    });
    this.customerSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerSession", result, path))),
      refresh: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("refreshCustomerSession", result, path))),
      revoke: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeCustomerSession", result, path))),
    });
    this.customerVerifications = Object.freeze({
      confirm: async (customer_verification_id, params, options) => this.#runtime.request("confirmCustomerVerification", _sdkRequestInput([
  "customer_verification_id"
], [customer_verification_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmCustomerVerification", result, path))),
      create: async (params, options) => this.#runtime.request("createCustomerVerification", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerVerification", result, path))),
    });
    this.customers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomer", result, path))),
      createAccessLink: async (customer_id, params, options) => this.#runtime.request("createCustomerAccessLink", _sdkRequestInput([
  "customer_id"
], [customer_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerAccessLink", result, path))),
      createAddress: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerAddress", result, path))),
      deleteAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomerAddress", result, path))),
      get: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomer", result, path))),
      getAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerAddress", result, path))),
      linkGuestPurchases: async (customer_id, params, options) => this.#runtime.request("linkCustomerGuestPurchases", _sdkRequestInput([
  "customer_id"
], [customer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("linkCustomerGuestPurchases", result, path))),
      listAddresses: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path))),
      listAddressesPages: (customer_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path)),
      listAddressesItems: (customer_id, params, options) => this.#runtime.items("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "test_clock_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomers", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "test_clock_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomers", result, path)),
      listItems: (params, options) => this.#runtime.items("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "test_clock_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      revokeSessions: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeCustomerSessions", result, path))),
      update: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomer", result, path))),
      updateAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomerAddress", result, path))),
    });
    this.deliveryLocationSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryLocationSet", result, path))),
      delete: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryLocationSet", result, path))),
      get: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryLocationSet", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryLocationSets", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryLocationSets", result, path)),
      listItems: (params, options) => this.#runtime.items("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryLocationSet", result, path))),
    });
    this.deliveryMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryMethod", result, path))),
      delete: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryMethod", result, path))),
      get: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryMethod", result, path))),
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
  "location_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path))),
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
  "location_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path)),
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
  "location_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryMethod", result, path))),
    });
    this.deliveryPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryPreview", result, path))),
    });
    this.deliveryProfiles = Object.freeze({
      assignToUnconfigured: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("assignToUnconfiguredDeliveryProfile", result, path))),
      create: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryProfile", result, path))),
      delete: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryProfile", result, path))),
      get: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryProfile", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryProfiles", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryProfiles", result, path)),
      listItems: (params, options) => this.#runtime.items("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryProfile", result, path))),
    });
    this.deliveryQuotes = Object.freeze({
      get: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryQuote", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path)),
      listItems: (params, options) => this.#runtime.items("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.deliveryRateCallbacks = Object.freeze({
      checkConnection: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkDeliveryRateCallbackConnection", result, path))),
      create: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallback", result, path))),
      createTestDelivery: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallbackTestDelivery", result, path))),
      delete: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryRateCallback", result, path))),
      get: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRateCallback", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryRateCallbacks", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryRateCallbacks", result, path)),
      listItems: (params, options) => this.#runtime.items("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      rotateSecret: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateDeliveryRateCallbackSigningKey", result, path))),
      update: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryRateCallback", result, path))),
    });
    this.deliveryRevocations = Object.freeze({
      get: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRevocation", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryRevocations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryRevocations", result, path)),
      listItems: (params, options) => this.#runtime.items("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      create: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeliveryDependency", result, path))),
    });
    this.deliveryZones = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryZone", result, path))),
      delete: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryZone", result, path))),
      get: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryZone", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryZones", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryZones", result, path)),
      listItems: (params, options) => this.#runtime.items("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryZone", result, path))),
    });
    this.demoSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Flint-Challenge-Token"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDemoSession", result, path))),
      reset: async (demo_session_id, params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([
  "demo_session_id"
], [demo_session_id], [
  "Flint-Challenge-Token"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resetDemoSession", result, path))),
    });
    this.devices = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDevice", result, path))),
      delete: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDevice", result, path))),
      get: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDevice", result, path))),
      list: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDevices", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDevices", result, path)),
      listItems: (params, options) => this.#runtime.items("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDevice", result, path))),
    });
    this.discountPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDiscountPreview", result, path))),
    });
    this.disputes = Object.freeze({
      accept: async (dispute_id, params, options) => this.#runtime.request("acceptDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("acceptDispute", result, path))),
      createResponseSession: async (dispute_id, params, options) => this.#runtime.request("createDisputeResponseSession", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDisputeResponseSession", result, path))),
      get: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDispute", result, path))),
      list: async (params, options) => this.#runtime.request("listDisputes", _sdkRequestInput([], [], [
  "updated_after",
  "updated_before",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "is_action_required",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDisputes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDisputes", _sdkRequestInput([], [], [
  "updated_after",
  "updated_before",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "is_action_required",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDisputes", result, path)),
      listItems: (params, options) => this.#runtime.items("listDisputes", _sdkRequestInput([], [], [
  "updated_after",
  "updated_before",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "status",
  "reason",
  "case_type",
  "is_action_required",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "evidence_due_after",
  "evidence_due_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      simulate: async (dispute_id, params, options) => this.#runtime.request("simulateDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("simulateDispute", result, path))),
    });
    this.emailPreferenceLinks = Object.freeze({
      lookup: async (params, options) => this.#runtime.request("lookupEmailPreferenceLink", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupEmailPreferenceLink", result, path))),
      unsubscribe: async (params, options) => this.#runtime.request("unsubscribeEmailPreferenceLink", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("unsubscribeEmailPreferenceLink", result, path))),
    });
    this.feedbackReports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFeedbackReport", result, path))),
      get: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFeedbackReport", result, path))),
      list: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFeedbackReports", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listFeedbackReports", result, path)),
      listItems: (params, options) => this.#runtime.items("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.files = Object.freeze({
      complete: async (file_id, params, options) => this.#runtime.request("completeFile", _sdkRequestInput([
  "file_id"
], [file_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeFile", result, path))),
      create: async (params, options) => this.#runtime.request("createFile", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFile", result, path))),
      get: async (file_id, params, options) => this.#runtime.request("getFile", _sdkRequestInput([
  "file_id"
], [file_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFile", result, path))),
    });
    this.fraudWarnings = Object.freeze({
      get: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFraudWarning", result, path))),
      list: async (params, options) => this.#runtime.request("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFraudWarnings", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listFraudWarnings", result, path)),
      listItems: (params, options) => this.#runtime.items("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.fulfillmentEvents = Object.freeze({
      get: async (fulfillment_event_id, params, options) => this.#runtime.request("getFulfillmentEvent", _sdkRequestInput([
  "fulfillment_event_id"
], [fulfillment_event_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillmentEvent", result, path))),
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
  "sort_direction",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillmentEvents", result, path))),
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
  "sort_direction",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listFulfillmentEvents", result, path)),
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
  "sort_direction",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.fulfillmentNotifications = Object.freeze({
      get: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillmentNotification", result, path))),
      list: async (params, options) => this.#runtime.request("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillmentNotifications", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listFulfillmentNotifications", result, path)),
      listItems: (params, options) => this.#runtime.items("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.fulfillments = Object.freeze({
      createEvent: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillmentEvent", result, path))),
      createShipment: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createShipment", result, path))),
      get: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillment", result, path))),
      list: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
  "customer_id",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillments", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
  "customer_id",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listFulfillments", result, path)),
      listItems: (params, options) => this.#runtime.items("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
  "customer_id",
  "external_reference_id",
  "query",
  "status",
  "type",
  "location_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      transition: async (fulfillment_id, params, options) => this.#runtime.request("transitionFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionFulfillment", result, path))),
      update: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateFulfillment", result, path))),
    });
    this.giftCardFundingDispositions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardFundingDisposition", result, path))),
      get: async (gift_card_funding_disposition_id, params, options) => this.#runtime.request("getGiftCardFundingDisposition", _sdkRequestInput([
  "gift_card_funding_disposition_id"
], [gift_card_funding_disposition_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardFundingDisposition", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardFundingDispositions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardFundingDispositions", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCardLoads = Object.freeze({
      get: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardLoad", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardLoads", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardLoads", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCardNotifications = Object.freeze({
      cancel: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardNotification", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardNotification", result, path))),
      get: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardNotification", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardNotifications", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardNotifications", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCardRedemptions = Object.freeze({
      cancel: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardRedemption", result, path))),
      capture: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("captureGiftCardRedemption", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardRedemption", result, path))),
      get: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardRedemption", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardRedemptions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardRedemptions", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCardRedemptions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "sale_reference",
  "source_type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCardTransactions = Object.freeze({
      list: async (params, options) => this.#runtime.request("listGiftCardTransactions", _sdkRequestInput([], [], [
  "cash_out_reference",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "transaction_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardTransactions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardTransactions", _sdkRequestInput([], [], [
  "cash_out_reference",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "transaction_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardTransactions", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCardTransactions", _sdkRequestInput([], [], [
  "cash_out_reference",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "posted_after",
  "posted_before",
  "source_id",
  "source_type",
  "transaction_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCards = Object.freeze({
      adjustBalance: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("adjustGiftCardBalance", result, path))),
      cashOut: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cashOutGiftCard", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCard", result, path))),
      createLoad: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardLoad", result, path))),
      get: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCard", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCards", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCards", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      lookup: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupGiftCard", result, path))),
      rotateCode: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateGiftCardCode", result, path))),
      transition: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionGiftCard", result, path))),
      update: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateGiftCard", result, path))),
    });
    this.inventoryAdjustments = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAdjustment", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAdjustment", result, path))),
      get: async (inventory_adjustment_id, params, options) => this.#runtime.request("getInventoryAdjustment", _sdkRequestInput([
  "inventory_adjustment_id"
], [inventory_adjustment_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAdjustment", result, path))),
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
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAdjustments", result, path))),
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
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAdjustments", result, path)),
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
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.inventoryAllocationPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAllocationPolicy", result, path))),
      delete: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryAllocationPolicy", result, path))),
      get: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicy", result, path))),
      getRevision: async (inventory_allocation_policy_id, inventory_allocation_policy_revision_id, params, options) => this.#runtime.request("getInventoryAllocationPolicyRevision", _sdkRequestInput([
  "inventory_allocation_policy_id",
  "inventory_allocation_policy_revision_id"
], [inventory_allocation_policy_id, inventory_allocation_policy_revision_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicyRevision", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listRevisions: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicyRevisions", result, path))),
      listRevisionsPages: (inventory_allocation_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicyRevisions", result, path)),
      listRevisionsItems: (inventory_allocation_policy_id, params, options) => this.#runtime.items("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryAllocationPolicy", result, path))),
    });
    this.inventoryCounts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryCount", result, path))),
      get: async (inventory_count_id, params, options) => this.#runtime.request("getInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryCount", result, path))),
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
  "applied_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryCounts", result, path))),
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
  "applied_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryCounts", result, path)),
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
  "applied_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      transition: async (inventory_count_id, params, options) => this.#runtime.request("transitionInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryCount", result, path))),
      update: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryCount", result, path))),
    });
    this.inventoryItems = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryItem", result, path))),
      delete: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryItem", result, path))),
      get: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryItem", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryItem", result, path))),
    });
    this.inventoryLevels = Object.freeze({
      get: async (inventory_level_id, params, options) => this.#runtime.request("getInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryLevel", result, path))),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryLevels", result, path))),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryLevels", result, path)),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_level_id, params, options) => this.#runtime.request("updateInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryLevel", result, path))),
    });
    this.inventoryMovements = Object.freeze({
      get: async (inventory_movement_id, params, options) => this.#runtime.request("getInventoryMovement", _sdkRequestInput([
  "inventory_movement_id"
], [inventory_movement_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryMovement", result, path))),
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
  "sort_direction",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryMovements", result, path))),
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
  "sort_direction",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryMovements", result, path)),
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
  "sort_direction",
  "expand",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "source_reference_type",
  "source_reference_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.inventoryReceipts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReceipt", result, path))),
      get: async (inventory_receipt_id, params, options) => this.#runtime.request("getInventoryReceipt", _sdkRequestInput([
  "inventory_receipt_id"
], [inventory_receipt_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryReceipt", result, path))),
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
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryReceipts", result, path))),
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
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryReceipts", result, path)),
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
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.inventoryReservations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReservation", result, path))),
      get: async (inventory_reservation_id, params, options) => this.#runtime.request("getInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryReservation", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryReservations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "order_id",
  "status",
  "owner_type",
  "owner_key",
  "idempotency_key",
  "has_at_risk_quantity",
  "closed_reason",
  "expires_after",
  "expires_before",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      transition: async (inventory_reservation_id, params, options) => this.#runtime.request("transitionInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryReservation", result, path))),
      update: async (inventory_reservation_id, params, options) => this.#runtime.request("updateInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryReservation", result, path))),
    });
    this.inventoryTransfers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryTransfer", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryTransfer", result, path))),
      get: async (inventory_transfer_id, params, options) => this.#runtime.request("getInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryTransfer", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference_id",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryTransfers", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference_id",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryTransfers", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryTransfers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "origin_location_id",
  "destination_location_id",
  "status",
  "idempotency_key",
  "external_reference_id",
  "query",
  "closed_reason",
  "created_after",
  "created_before",
  "departed_after",
  "departed_before",
  "received_after",
  "received_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      transition: async (inventory_transfer_id, params, options) => this.#runtime.request("transitionInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryTransfer", result, path))),
      update: async (inventory_transfer_id, params, options) => this.#runtime.request("updateInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryTransfer", result, path))),
    });
    this.invoicePaymentTerms = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoicePaymentTerm", result, path))),
      delete: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInvoicePaymentTerm", result, path))),
      get: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentTerm", result, path))),
      list: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path)),
      listItems: (params, options) => this.#runtime.items("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoicePaymentTerm", result, path))),
    });
    this.invoices = Object.freeze({
      cancelPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("cancelInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelInvoicePaymentAttempt", result, path))),
      collect: async (invoice_id, params, options) => this.#runtime.request("collectInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("collectInvoice", result, path))),
      create: async (params, options) => this.#runtime.request("createInvoice", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoice", result, path))),
      createCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("createInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceCheckoutSession", result, path))),
      createLateFee: async (invoice_id, params, options) => this.#runtime.request("createInvoiceLateFee", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceLateFee", result, path))),
      createManualPayment: async (invoice_id, params, options) => this.#runtime.request("createInvoiceManualPayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceManualPayment", result, path))),
      get: async (invoice_id, params, options) => this.#runtime.request("getInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoice", result, path))),
      getManualPayment: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("getInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoiceManualPayment", result, path))),
      getPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("getInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentAttempt", result, path))),
      getPDF: async (invoice_id, params, options) => this.#runtime.request("getInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      issue: async (invoice_id, params, options) => this.#runtime.request("issueInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueInvoice", result, path))),
      listActivities: async (invoice_id, params, options) => this.#runtime.request("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceActivities", result, path))),
      listActivitiesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceActivities", result, path)),
      listActivitiesItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listDeliveryAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceDeliveryAttempts", result, path))),
      listDeliveryAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceDeliveryAttempts", result, path)),
      listDeliveryAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listManualPayments: async (invoice_id, params, options) => this.#runtime.request("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceManualPayments", result, path))),
      listManualPaymentsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceManualPayments", result, path)),
      listManualPaymentsItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentAttempts", result, path))),
      listPaymentAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentAttempts", result, path)),
      listPaymentAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "idempotency_key",
  "customer_id",
  "order_id",
  "subscription_id",
  "external_reference_id",
  "invoice_number",
  "collection_mode",
  "issued_after",
  "issued_before",
  "updated_after",
  "updated_before",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction",
  "query",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoices", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "idempotency_key",
  "customer_id",
  "order_id",
  "subscription_id",
  "external_reference_id",
  "invoice_number",
  "collection_mode",
  "issued_after",
  "issued_before",
  "updated_after",
  "updated_before",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction",
  "query",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoices", result, path)),
      listItems: (params, options) => this.#runtime.items("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "idempotency_key",
  "customer_id",
  "order_id",
  "subscription_id",
  "external_reference_id",
  "invoice_number",
  "collection_mode",
  "issued_after",
  "issued_before",
  "updated_after",
  "updated_before",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction",
  "query",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      markUncollectible: async (invoice_id, params, options) => this.#runtime.request("markInvoiceUncollectible", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markInvoiceUncollectible", result, path))),
      regeneratePublicLink: async (invoice_id, params, options) => this.#runtime.request("regenerateInvoicePublicLink", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("regenerateInvoicePublicLink", result, path))),
      reverseManualPayment: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("reverseInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseInvoiceManualPayment", result, path))),
      sendReminder: async (invoice_id, params, options) => this.#runtime.request("sendInvoiceReminder", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendInvoiceReminder", result, path))),
      update: async (invoice_id, params, options) => this.#runtime.request("updateInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoice", result, path))),
      void: async (invoice_id, params, options) => this.#runtime.request("voidInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidInvoice", result, path))),
      waiveLateFee: async (invoice_id, invoice_late_fee_id, params, options) => this.#runtime.request("waiveInvoiceLateFee", _sdkRequestInput([
  "invoice_id",
  "invoice_late_fee_id"
], [invoice_id, invoice_late_fee_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("waiveInvoiceLateFee", result, path))),
    });
    this.locations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createLocation", result, path))),
      delete: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteLocation", result, path))),
      get: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getLocation", result, path))),
      list: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listLocations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listLocations", result, path)),
      listItems: (params, options) => this.#runtime.items("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLocation", result, path))),
    });
    this.me = Object.freeze({
      cancelReturn: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeReturn", result, path))),
      cancelSubscription: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeSubscription", result, path))),
      confirmEmailChangeRequest: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmMeEmailChangeRequest", result, path))),
      createAddress: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeAddress", result, path))),
      createDeletionRequest: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeDeletionRequest", result, path))),
      createEmailChangeRequest: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeEmailChangeRequest", result, path))),
      createFlintWalletStoreSetup: async (flint_wallet_card_id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "flint_wallet_card_id"
], [flint_wallet_card_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeFlintWalletStoreSetup", result, path))),
      createInvoiceCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeInvoiceCheckoutSession", result, path))),
      createPaymentMethod: async (params, options) => this.#runtime.request("createMePaymentMethod", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMePaymentMethod", result, path))),
      createReturn: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturn", result, path))),
      createReturnPreview: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturnPreview", result, path))),
      createReturnResolutionCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturnResolutionCheckoutSession", result, path))),
      createSubscriptionPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeSubscriptionPaymentRetry", result, path))),
      createSubscriptionPreview: async (params, options) => this.#runtime.request("createMeSubscriptionPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeSubscriptionPreview", result, path))),
      deleteAddress: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteMeAddress", result, path))),
      deletePaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("deleteMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteMePaymentMethod", result, path))),
      get: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMe", result, path))),
      getAddress: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeAddress", result, path))),
      getCreditNote: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeCreditNote", result, path))),
      getCreditNotePDF: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNotePDF", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      getDeletionRequest: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeDeletionRequest", result, path))),
      getEmailPreferences: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeEmailPreferences", result, path))),
      getFulfillment: async (fulfillment_id, params, options) => this.#runtime.request("getMeFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeFulfillment", result, path))),
      getGiftCard: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeGiftCard", result, path))),
      getInvoice: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeInvoice", result, path))),
      getInvoicePDF: async (invoice_id, params, options) => this.#runtime.request("getMeInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      getOrder: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeOrder", result, path))),
      getPackage: async (package_id, params, options) => this.#runtime.request("getMePackage", _sdkRequestInput([
  "package_id"
], [package_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePackage", result, path))),
      getPaymentIntent: async (payment_intent_id, params, options) => this.#runtime.request("getMePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePaymentIntent", result, path))),
      getPaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePaymentMethod", result, path))),
      getRefund: async (refund_id, params, options) => this.#runtime.request("getMeRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeRefund", result, path))),
      getReturn: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeReturn", result, path))),
      getReturnResolution: async (return_resolution_id, params, options) => this.#runtime.request("getMeReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeReturnResolution", result, path))),
      getShipment: async (shipment_id, params, options) => this.#runtime.request("getMeShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeShipment", result, path))),
      getSubscription: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeSubscription", result, path))),
      getSubscriptionPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeSubscriptionPaymentRetry", result, path))),
      listAddresses: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeAddresses", result, path))),
      listAddressesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeAddresses", result, path)),
      listAddressesItems: (params, options) => this.#runtime.items("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listCreditNotes: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeCreditNotes", result, path))),
      listCreditNotesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeCreditNotes", result, path)),
      listCreditNotesItems: (invoice_id, params, options) => this.#runtime.items("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listDeletionRequests: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeDeletionRequests", result, path))),
      listDeletionRequestsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeDeletionRequests", result, path)),
      listDeletionRequestsItems: (params, options) => this.#runtime.items("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listFlintWalletCards: async (params, options) => this.#runtime.request("listMeFlintWalletCards", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFlintWalletCards", result, path))),
      listFulfillmentEvents: async (params, options) => this.#runtime.request("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFulfillmentEvents", result, path))),
      listFulfillmentEventsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeFulfillmentEvents", result, path)),
      listFulfillmentEventsItems: (params, options) => this.#runtime.items("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listFulfillments: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFulfillments", result, path))),
      listFulfillmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeFulfillments", result, path)),
      listFulfillmentsItems: (params, options) => this.#runtime.items("listMeFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "type",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listGiftCards: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeGiftCards", result, path))),
      listGiftCardsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeGiftCards", result, path)),
      listGiftCardsItems: (params, options) => this.#runtime.items("listMeGiftCards", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listGiftCardTransactions: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path))),
      listGiftCardTransactionsPages: (gift_card_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path)),
      listGiftCardTransactionsItems: (gift_card_id, params, options) => this.#runtime.items("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listInvoices: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeInvoices", result, path))),
      listInvoicesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeInvoices", result, path)),
      listInvoicesItems: (params, options) => this.#runtime.items("listMeInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "order_id",
  "created_after",
  "created_before",
  "due_after",
  "due_before",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listOrderActivities: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeOrderActivities", result, path))),
      listOrderActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeOrderActivities", result, path)),
      listOrderActivitiesItems: (order_id, params, options) => this.#runtime.items("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listOrders: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeOrders", result, path))),
      listOrdersPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeOrders", result, path)),
      listOrdersItems: (params, options) => this.#runtime.items("listMeOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPackages: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePackages", result, path))),
      listPackagesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMePackages", result, path)),
      listPackagesItems: (params, options) => this.#runtime.items("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentIntents: async (params, options) => this.#runtime.request("listMePaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePaymentIntents", result, path))),
      listPaymentIntentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMePaymentIntents", result, path)),
      listPaymentIntentsItems: (params, options) => this.#runtime.items("listMePaymentIntents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "invoice_id",
  "status",
  "payment_flow",
  "min_amount",
  "max_amount",
  "currency",
  "refund_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentMethods: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePaymentMethods", result, path))),
      listPaymentMethodsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMePaymentMethods", result, path)),
      listPaymentMethodsItems: (params, options) => this.#runtime.items("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listRefunds: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeRefunds", result, path))),
      listRefundsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeRefunds", result, path)),
      listRefundsItems: (params, options) => this.#runtime.items("listMeRefunds", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "order_id",
  "status",
  "min_amount",
  "max_amount",
  "currency",
  "return_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listReturns: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeReturns", result, path))),
      listReturnsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeReturns", result, path)),
      listReturnsItems: (params, options) => this.#runtime.items("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_number",
  "return_reason_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listShipments: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeShipments", result, path))),
      listShipmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeShipments", result, path)),
      listShipmentsItems: (params, options) => this.#runtime.items("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listSubscriptionPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeSubscriptionPaymentRetries", result, path))),
      listSubscriptionPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeSubscriptionPaymentRetries", result, path)),
      listSubscriptionPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listMeSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listSubscriptions: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeSubscriptions", result, path))),
      listSubscriptionsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeSubscriptions", result, path)),
      listSubscriptionsItems: (params, options) => this.#runtime.items("listMeSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "cancel_at_period_end",
  "delivery_method_id",
  "hold_reason",
  "subscription_plan_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pauseSubscription: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseMeSubscription", result, path))),
      removeGiftCard: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeMeGiftCard", result, path))),
      renewSubscription: async (subscription_id, params, options) => this.#runtime.request("renewMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewMeSubscription", result, path))),
      resumeSubscription: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeMeSubscription", result, path))),
      revokeSession: async (params, options) => this.#runtime.request("revokeMeSession", _sdkRequestInput([], [], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeMeSession", result, path))),
      saveGiftCard: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("saveMeGiftCard", result, path))),
      sendOrderReceipt: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendMeOrderReceipt", result, path))),
      skipSubscriptionCycle: async (subscription_id, params, options) => this.#runtime.request("skipMeSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipMeSubscriptionCycle", result, path))),
      update: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMe", result, path))),
      updateAddress: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeAddress", result, path))),
      updateEmailPreferences: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeEmailPreferences", result, path))),
      updateSubscription: async (subscription_id, params, options) => this.#runtime.request("updateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeSubscription", result, path))),
      updateSubscriptionLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateMeSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeSubscriptionLineItem", result, path))),
    });
    this.merchant = Object.freeze({
      get: async (params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([], [], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchant", result, path))),
      update: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMerchant", result, path))),
    });
    this.merchantAccountSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMerchantAccountSession", result, path))),
      refresh: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("refreshMerchantAccountSession", result, path))),
    });
    this.merchantBillingBalances = Object.freeze({
      get: async (merchant_billing_balance_id, params, options) => this.#runtime.request("getMerchantBillingBalance", _sdkRequestInput([
  "merchant_billing_balance_id"
], [merchant_billing_balance_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchantBillingBalance", result, path))),
      list: async (params, options) => this.#runtime.request("listMerchantBillingBalances", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingBalances", result, path))),
    });
    this.merchantBillingEntries = Object.freeze({
      list: async (params, options) => this.#runtime.request("listMerchantBillingEntries", _sdkRequestInput([], [], [
  "type",
  "currency",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "payment_intent_id",
  "dispute_id",
  "merchant_billing_invoice_id",
  "balance_transaction_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantBillingEntries", _sdkRequestInput([], [], [
  "type",
  "currency",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "payment_intent_id",
  "dispute_id",
  "merchant_billing_invoice_id",
  "balance_transaction_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path)),
      listItems: (params, options) => this.#runtime.items("listMerchantBillingEntries", _sdkRequestInput([], [], [
  "type",
  "currency",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "payment_intent_id",
  "dispute_id",
  "merchant_billing_invoice_id",
  "balance_transaction_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.merchantBillingInvoices = Object.freeze({
      get: async (merchant_billing_invoice_id, params, options) => this.#runtime.request("getMerchantBillingInvoice", _sdkRequestInput([
  "merchant_billing_invoice_id"
], [merchant_billing_invoice_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchantBillingInvoice", result, path))),
      list: async (params, options) => this.#runtime.request("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingInvoices", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMerchantBillingInvoices", result, path)),
      listItems: (params, options) => this.#runtime.items("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.modifierGroups = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierGroup", result, path))),
      delete: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierGroup", result, path))),
      get: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getModifierGroup", result, path))),
      list: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listModifierGroups", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listModifierGroups", result, path)),
      listItems: (params, options) => this.#runtime.items("listModifierGroups", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "modifier_group_type",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierGroup", result, path))),
    });
    this.modifierSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierSet", result, path))),
      delete: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierSet", result, path))),
      get: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getModifierSet", result, path))),
      list: async (params, options) => this.#runtime.request("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path)),
      listItems: (params, options) => this.#runtime.items("listModifierSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierSet", result, path))),
    });
    this.oauth = Object.freeze({
      previewPartnerInstallAuthorization: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "code_challenge",
  "code_challenge_method",
  "scope",
  "sandbox_id",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("previewPartnerInstallAuthorization", result, path))),
    });
    this.onboarding = Object.freeze({
      advance: async (params, options) => this.#runtime.request("advanceOnboarding", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("advanceOnboarding", result, path))),
      createAPIKey: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOnboardingAPIKey", result, path))),
      getState: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOnboardingState", result, path))),
      start: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("startOnboarding", result, path))),
      verifyEmail: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyOnboardingEmail", result, path))),
    });
    this.openapi = Object.freeze({
      getSpec: async (params, options) => this.#runtime.request("getOpenAPISpec", _sdkRequestInput([], [], [
  "version"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.orders = Object.freeze({
      applyDiscount: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderDiscount", result, path))),
      applyGiftCard: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Gift-Card-Challenge"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderGiftCard", result, path))),
      cancelPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelOrderPaymentAttempt", result, path))),
      close: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeOrder", result, path))),
      createFulfillment: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillment", result, path))),
      create: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrder", result, path))),
      createAccessLink: async (order_id, params, options) => this.#runtime.request("createOrderAccessLink", _sdkRequestInput([
  "order_id"
], [order_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderAccessLink", result, path))),
      createCharge: async (order_id, params, options) => this.#runtime.request("createOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderCharge", result, path))),
      createLineItems: async (order_id, params, options) => this.#runtime.request("createOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderLineItems", result, path))),
      createPaymentIntent: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderPaymentIntent", result, path))),
      deleteCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderCharge", result, path))),
      deleteLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderLineItem", result, path))),
      get: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrder", result, path))),
      getCurrentDeliverySelection: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderCurrentDeliverySelection", result, path))),
      getPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderPaymentAttempt", result, path))),
      listActivities: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderActivities", result, path))),
      listActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderActivities", result, path)),
      listActivitiesItems: (order_id, params, options) => this.#runtime.items("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentAttempts: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path))),
      listPaymentAttemptsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path)),
      listPaymentAttemptsItems: (order_id, params, options) => this.#runtime.items("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_unassigned_fulfillment_quantity",
  "has_open_fulfillment",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "return_id",
  "return_resolution_id",
  "payment_link_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrders", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_unassigned_fulfillment_quantity",
  "has_open_fulfillment",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "return_id",
  "return_resolution_id",
  "payment_link_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrders", result, path)),
      listItems: (params, options) => this.#runtime.items("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_unassigned_fulfillment_quantity",
  "has_open_fulfillment",
  "external_reference_id",
  "origin",
  "query",
  "subscription_id",
  "subscription_delivery_changed",
  "return_id",
  "return_resolution_id",
  "payment_link_id",
  "min_amount",
  "max_amount",
  "currency",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pay: async (order_id, params, options) => this.#runtime.request("payOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Buyer-Device"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("payOrder", result, path))),
      removeDiscounts: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderDiscounts", result, path))),
      removeGiftCard: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderGiftCard", result, path))),
      repriceDiscounts: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("repriceOrderDiscounts", result, path))),
      resolveInventoryException: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveOrderInventoryException", result, path))),
      sendReceipt: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendOrderReceipt", result, path))),
      update: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrder", result, path))),
      updateCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderCharge", result, path))),
      updateLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderLineItem", result, path))),
    });
    this.organizations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrganization", result, path))),
      delete: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrganization", result, path))),
      get: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrganization", result, path))),
      grantMembership: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("grantOrganizationMembership", result, path))),
      listMemberships: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path))),
      listMembershipsPages: (organization_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path)),
      listMembershipsItems: (organization_id, params, options) => this.#runtime.items("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path))),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path)),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      removeMembership: async (organization_id, user_id, params, options) => this.#runtime.request("removeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrganizationMembership", result, path))),
      update: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrganization", result, path))),
    });
    this.packages = Object.freeze({
      createItem: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackageItem", result, path))),
      deleteItem: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePackageItem", result, path))),
      get: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackage", result, path))),
      getItem: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackageItem", result, path))),
      listPackageItems: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path))),
      listPackageItemsPages: (package_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path)),
      listPackageItemsItems: (package_id, params, options) => this.#runtime.items("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackages", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPackages", result, path)),
      listItems: (params, options) => this.#runtime.items("listPackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "external_system",
  "external_reference_id",
  "query",
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      transition: async (package_id, params, options) => this.#runtime.request("transitionPackage", _sdkRequestInput([
  "package_id"
], [package_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionPackage", result, path))),
      update: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackage", result, path))),
      updateItem: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackageItem", result, path))),
      void: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidPackage", result, path))),
    });
    this.partnerAppInstalls = Object.freeze({
      list: async (params, options) => this.#runtime.request("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantPartnerAppInstalls", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMerchantPartnerAppInstalls", result, path)),
      listItems: (params, options) => this.#runtime.items("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      revoke: async (partner_app_install_id, params, options) => this.#runtime.request("revokeMerchantPartnerAppInstall", _sdkRequestInput([
  "partner_app_install_id"
], [partner_app_install_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeMerchantPartnerAppInstall", result, path))),
    });
    this.partnerApps = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPartnerApp", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPartnerApp", result, path))),
      createCredential: async (partner_app_id, params, options) => this.#runtime.request("createPartnerAppCredential", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPartnerAppCredential", result, path))),
      delete: async (partner_app_id, params, options) => this.#runtime.request("deletePartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePartnerApp", result, path))),
      deleteCredential: async (partner_app_id, partner_app_credential_id, params, options) => this.#runtime.request("deletePartnerAppCredential", _sdkRequestInput([
  "partner_app_id",
  "partner_app_credential_id"
], [partner_app_id, partner_app_credential_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePartnerAppCredential", result, path))),
      get: async (partner_app_id, params, options) => this.#runtime.request("getPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPartnerApp", result, path))),
      getCredential: async (partner_app_id, partner_app_credential_id, params, options) => this.#runtime.request("getPartnerAppCredential", _sdkRequestInput([
  "partner_app_id",
  "partner_app_credential_id"
], [partner_app_id, partner_app_credential_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPartnerAppCredential", result, path))),
      getInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPartnerAppInstall", result, path))),
      listCredentials: async (partner_app_id, params, options) => this.#runtime.request("listPartnerAppCredentials", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPartnerAppCredentials", result, path))),
      listCredentialsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPartnerAppCredentials", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPartnerAppCredentials", result, path)),
      listCredentialsItems: (partner_app_id, params, options) => this.#runtime.items("listPartnerAppCredentials", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listInstalls: async (partner_app_id, params, options) => this.#runtime.request("listPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPartnerAppInstalls", result, path))),
      listInstallsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPartnerAppInstalls", result, path)),
      listInstallsItems: (partner_app_id, params, options) => this.#runtime.items("listPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPartnerApps", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPartnerApps", result, path)),
      listItems: (params, options) => this.#runtime.items("listPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      revokeEnvironmentGrant: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokePartnerAppEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokePartnerAppEnvironmentGrant", result, path))),
      revokeInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokePartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokePartnerAppInstall", result, path))),
      rotateSecret: async (partner_app_id, params, options) => this.#runtime.request("rotatePartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotatePartnerAppSecret", result, path))),
      update: async (partner_app_id, params, options) => this.#runtime.request("updatePartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePartnerApp", result, path))),
    });
    this.paymentIntents = Object.freeze({
      cancel: async (payment_intent_id, params, options) => this.#runtime.request("cancelPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelPaymentIntent", result, path))),
      capture: async (payment_intent_id, params, options) => this.#runtime.request("capturePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("capturePaymentIntent", result, path))),
      confirm: async (payment_intent_id, params, options) => this.#runtime.request("confirmPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Buyer-Device"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmPaymentIntent", result, path))),
      create: async (params, options) => this.#runtime.request("createPaymentIntent", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentIntent", result, path))),
      get: async (payment_intent_id, params, options) => this.#runtime.request("getPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentIntent", result, path))),
      listActivities: async (payment_intent_id, params, options) => this.#runtime.request("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentIntentActivities", result, path))),
      listActivitiesPages: (payment_intent_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentIntentActivities", result, path)),
      listActivitiesItems: (payment_intent_id, params, options) => this.#runtime.items("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listPaymentIntents", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "is_action_required",
  "status",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentIntents", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentIntents", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "is_action_required",
  "status",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentIntents", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentIntents", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "customer_id",
  "invoice_id",
  "is_action_required",
  "status",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      sendReceipt: async (payment_intent_id, params, options) => this.#runtime.request("sendPaymentIntentReceipt", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendPaymentIntentReceipt", result, path))),
      update: async (payment_intent_id, params, options) => this.#runtime.request("updatePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentIntent", result, path))),
    });
    this.paymentLinks = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentLink", result, path))),
      get: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLink", result, path))),
      getPublic: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLinkPublic", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_subscription_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_subscription_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentLinks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "payment_link_type",
  "has_subscription_plan",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      resolve: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolvePaymentLink", result, path))),
      update: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentLink", result, path))),
    });
    this.paymentMethodDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentMethodDomain", result, path))),
      get: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentMethodDomain", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "status",
  "domain_name",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentMethodDomains", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "status",
  "domain_name",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentMethodDomains", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "status",
  "domain_name",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentMethodDomain", result, path))),
    });
    this.paymentMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentMethod", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentMethod", result, path))),
      delete: async (payment_method_id, params, options) => this.#runtime.request("deletePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePaymentMethod", result, path))),
      get: async (payment_method_id, params, options) => this.#runtime.request("getPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentMethod", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentMethods", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentMethods", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.paymentReviews = Object.freeze({
      approve: async (payment_review_id, params, options) => this.#runtime.request("approvePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("approvePaymentReview", result, path))),
      decline: async (payment_review_id, params, options) => this.#runtime.request("declinePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("declinePaymentReview", result, path))),
      get: async (payment_review_id, params, options) => this.#runtime.request("getPaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentReview", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "opened_after",
  "opened_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentReviews", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "opened_after",
  "opened_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentReviews", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentReviews", _sdkRequestInput([], [], [
  "status",
  "risk_level",
  "payment_flow",
  "payment_intent_id",
  "order_id",
  "customer_id",
  "opened_after",
  "opened_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.payoutDestinations = Object.freeze({
      delete: async (payout_destination_id, params, options) => this.#runtime.request("deletePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePayoutDestination", result, path))),
      get: async (payout_destination_id, params, options) => this.#runtime.request("getPayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayoutDestination", result, path))),
      list: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_methods",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPayoutDestinations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_methods",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPayoutDestinations", result, path)),
      listItems: (params, options) => this.#runtime.items("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_methods",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (payout_destination_id, params, options) => this.#runtime.request("updatePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePayoutDestination", result, path))),
    });
    this.payoutSettings = Object.freeze({
      get: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayoutSettings", result, path))),
      update: async (params, options) => this.#runtime.request("updatePayoutSettings", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePayoutSettings", result, path))),
    });
    this.payouts = Object.freeze({
      cancel: async (payout_id, params, options) => this.#runtime.request("cancelPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelPayout", result, path))),
      create: async (params, options) => this.#runtime.request("createPayout", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPayout", result, path))),
      get: async (payout_id, params, options) => this.#runtime.request("getPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayout", result, path))),
      list: async (params, options) => this.#runtime.request("listPayouts", _sdkRequestInput([], [], [
  "idempotency_key",
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPayouts", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayouts", _sdkRequestInput([], [], [
  "idempotency_key",
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPayouts", result, path)),
      listItems: (params, options) => this.#runtime.items("listPayouts", _sdkRequestInput([], [], [
  "idempotency_key",
  "currency",
  "expand",
  "method",
  "balance_source_type",
  "payout_destination_id",
  "external_reference_id",
  "query",
  "status",
  "created_after",
  "created_before",
  "arrival_date_from",
  "arrival_date_to",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.products = Object.freeze({
      create: async (params, options) => this.#runtime.request("createProduct", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProduct", result, path))),
      createVariant: async (product_id, params, options) => this.#runtime.request("createProductVariant", _sdkRequestInput([
  "product_id"
], [product_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProductVariant", result, path))),
      delete: async (product_id, params, options) => this.#runtime.request("deleteProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProduct", result, path))),
      deleteVariant: async (product_id, variant_id, params, options) => this.#runtime.request("deleteProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProductVariant", result, path))),
      get: async (product_id, params, options) => this.#runtime.request("getProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProduct", result, path))),
      getOption: async (product_id, option_id, params, options) => this.#runtime.request("getProductOption", _sdkRequestInput([
  "product_id",
  "option_id"
], [product_id, option_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductOption", result, path))),
      getVariant: async (product_id, variant_id, params, options) => this.#runtime.request("getProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductVariant", result, path))),
      listOptions: async (product_id, params, options) => this.#runtime.request("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path))),
      listOptionsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path)),
      listOptionsItems: (product_id, params, options) => this.#runtime.items("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "variant_external_reference_id",
  "inventory_item_id",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProducts", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "variant_external_reference_id",
  "inventory_item_id",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listProducts", result, path)),
      listItems: (params, options) => this.#runtime.items("listProducts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "product_type",
  "status",
  "category_handle",
  "external_reference_id",
  "sku",
  "variant_external_reference_id",
  "inventory_item_id",
  "query",
  "delivery_profile_id",
  "delivery_configuration_status",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listVariants: async (product_id, params, options) => this.#runtime.request("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "sku",
  "inventory_item_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProductVariants", result, path))),
      listVariantsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "sku",
  "inventory_item_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listProductVariants", result, path)),
      listVariantsItems: (product_id, params, options) => this.#runtime.items("listProductVariants", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "sku",
  "inventory_item_id",
  "query",
  "sort_by",
  "sort_direction",
  "delivery_profile_id",
  "delivery_configuration_status",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (product_id, params, options) => this.#runtime.request("updateProduct", _sdkRequestInput([
  "product_id"
], [product_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProduct", result, path))),
      updateVariant: async (product_id, variant_id, params, options) => this.#runtime.request("updateProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProductVariant", result, path))),
    });
    this.promotionCodes = Object.freeze({
      list: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path)),
      listItems: (params, options) => this.#runtime.items("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "code",
  "status",
  "availability",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.promotions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotion", result, path))),
      createCode: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotionCode", result, path))),
      delete: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotion", result, path))),
      deleteCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotionCode", result, path))),
      get: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotion", result, path))),
      getCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("getPromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotionCode", result, path))),
      list: async (params, options) => this.#runtime.request("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
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
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
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
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path)),
      listItems: (params, options) => this.#runtime.items("listPromotions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "availability",
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
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotion", result, path))),
      updateCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotionCode", result, path))),
    });
    this.refunds = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRefund", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRefund", result, path))),
      get: async (refund_id, params, options) => this.#runtime.request("getRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRefund", result, path))),
      list: async (params, options) => this.#runtime.request("listRefunds", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRefunds", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRefunds", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRefunds", result, path)),
      listItems: (params, options) => this.#runtime.items("listRefunds", _sdkRequestInput([], [], [
  "idempotency_key",
  "page_size",
  "page_token",
  "order_id",
  "payment_intent_id",
  "customer_id",
  "status",
  "reason",
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (refund_id, params, options) => this.#runtime.request("updateRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRefund", result, path))),
    });
    this.reportDownloads = Object.freeze({
      get: async (report_download_id, params, options) => this.#runtime.request("getReportDownload", _sdkRequestInput([
  "report_download_id"
], [report_download_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.reports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReport", result, path))),
      get: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReport", result, path))),
      getWait: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReport", result, path))),
      list: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReports", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReports", result, path)),
      listItems: (params, options) => this.#runtime.items("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.resourceTimelines = Object.freeze({
      get: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getResourceTimeline", result, path))),
    });
    this.returnDispositions = Object.freeze({
      cancel: async (return_disposition_id, params, options) => this.#runtime.request("cancelReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnDisposition", result, path))),
      get: async (return_disposition_id, params, options) => this.#runtime.request("getReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnDisposition", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "idempotency_key",
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
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnDispositions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "idempotency_key",
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
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnDispositions", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "idempotency_key",
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
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      retry: async (return_disposition_id, params, options) => this.#runtime.request("retryReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnDisposition", result, path))),
    });
    this.returnInspections = Object.freeze({
      decideLineItem: async (return_inspection_id, return_inspection_line_item_id, params, options) => this.#runtime.request("decideReturnInspectionLineItem", _sdkRequestInput([
  "return_inspection_id",
  "return_inspection_line_item_id"
], [return_inspection_id, return_inspection_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturnInspectionLineItem", result, path))),
      get: async (return_inspection_id, params, options) => this.#runtime.request("getReturnInspection", _sdkRequestInput([
  "return_inspection_id"
], [return_inspection_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnInspection", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "inspected_after",
  "inspected_before",
  "inspection_location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnInspections", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "inspected_after",
  "inspected_before",
  "inspection_location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnInspections", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "inspected_after",
  "inspected_before",
  "inspection_location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.returnPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPolicy", result, path))),
      createRevision: async (return_policy_id, params, options) => this.#runtime.request("createReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPolicyRevision", result, path))),
      delete: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnPolicy", result, path))),
      get: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnPolicy", result, path))),
      getRevision: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnPolicyRevision", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnPolicies", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnPolicies", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listRevisions: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnPolicyRevisions", result, path))),
      listRevisionsPages: (return_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnPolicyRevisions", result, path)),
      listRevisionsItems: (return_policy_id, params, options) => this.#runtime.items("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnPolicy", result, path))),
    });
    this.returnPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPreview", result, path))),
    });
    this.returnReasons = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReason", result, path))),
      delete: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnReason", result, path))),
      get: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnReason", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnReasons", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnReasons", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnReason", result, path))),
    });
    this.returnReceipts = Object.freeze({
      get: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnReceipt", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
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
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
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
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
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
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      verifyLineItem: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyReturnReceiptLineItem", result, path))),
    });
    this.returnResolutions = Object.freeze({
      cancel: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnResolution", result, path))),
      confirm: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmReturnResolution", result, path))),
      createCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("createReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnResolutionCheckoutSession", result, path))),
      get: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnResolution", result, path))),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnResolutions", result, path))),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnResolutions", result, path)),
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
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      release: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseReturnResolution", result, path))),
      retry: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnResolution", result, path))),
      update: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnResolution", result, path))),
    });
    this.returns = Object.freeze({
      cancel: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturn", result, path))),
      cancelLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnLineItem", result, path))),
      complete: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeReturn", result, path))),
      create: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturn", result, path))),
      createAccessLink: async (return_id, params, options) => this.#runtime.request("createReturnAccessLink", _sdkRequestInput([
  "return_id"
], [return_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnAccessLink", result, path))),
      createDisposition: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnDisposition", result, path))),
      createInspection: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnInspection", result, path))),
      createLineItem: async (return_id, params, options) => this.#runtime.request("createReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnLineItem", result, path))),
      createReceipt: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReceipt", result, path))),
      createResolution: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnResolution", result, path))),
      decide: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturn", result, path))),
      deleteLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnLineItem", result, path))),
      get: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturn", result, path))),
      getLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnLineItem", result, path))),
      listActivities: async (return_id, params, options) => this.#runtime.request("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path))),
      listActivitiesPages: (return_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path)),
      listActivitiesItems: (return_id, params, options) => this.#runtime.items("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
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
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnLineItems", result, path))),
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
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnLineItems", result, path)),
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
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "idempotency_key",
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturns", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "idempotency_key",
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturns", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "idempotency_key",
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      process: async (return_id, params, options) => this.#runtime.request("processReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("processReturn", result, path))),
      reopen: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reopenReturn", result, path))),
      update: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturn", result, path))),
      updateLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnLineItem", result, path))),
      waiveLineItemInspection: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineItemInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("waiveReturnLineItemInspection", result, path))),
    });
    this.riskLists = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskList", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskList", result, path))),
      createItems: async (risk_list_id, params, options) => this.#runtime.request("createRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskListItems", result, path))),
      delete: async (risk_list_id, params, options) => this.#runtime.request("deleteRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskList", result, path))),
      deleteItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("deleteRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskListItem", result, path))),
      get: async (risk_list_id, params, options) => this.#runtime.request("getRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskList", result, path))),
      getItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("getRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskListItem", result, path))),
      listRiskListItems: async (risk_list_id, params, options) => this.#runtime.request("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path))),
      listRiskListItemsPages: (risk_list_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path)),
      listRiskListItemsItems: (risk_list_id, params, options) => this.#runtime.items("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path)),
      listItems: (params, options) => this.#runtime.items("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (risk_list_id, params, options) => this.#runtime.request("updateRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskList", result, path))),
    });
    this.riskPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskPreview", result, path))),
    });
    this.riskRules = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskRule", result, path))),
      delete: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskRule", result, path))),
      get: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRule", result, path))),
      getAttributes: async (params, options) => this.#runtime.request("getRiskRuleAttributes", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRuleAttributes", result, path))),
      list: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path)),
      listItems: (params, options) => this.#runtime.items("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskRule", result, path))),
    });
    this.sandboxes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSandbox", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSandbox", result, path))),
      createAPIKey: async (sandbox_id, params, options) => this.#runtime.request("createSandboxAPIKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSandboxAPIKey", result, path))),
      delete: async (sandbox_id, params, options) => this.#runtime.request("deleteSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSandbox", result, path))),
      get: async (sandbox_id, params, options) => this.#runtime.request("getSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSandbox", result, path))),
      list: async (params, options) => this.#runtime.request("listSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSandboxes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSandboxes", result, path)),
      listItems: (params, options) => this.#runtime.items("listSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      reset: async (sandbox_id, params, options) => this.#runtime.request("resetSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resetSandbox", result, path))),
    });
    this.settings = Object.freeze({
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getEffectiveSettings", result, path))),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSettings", result, path))),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSettings", result, path))),
    });
    this.shipments = Object.freeze({
      createPackage: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackage", result, path))),
      get: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getShipment", result, path))),
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listShipments", result, path))),
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listShipments", result, path)),
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateShipment", result, path))),
      void: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidShipment", result, path))),
    });
    this.subscriptionDeliveryMigrations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionDeliveryMigration", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionDeliveryMigration", result, path))),
      get: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("getSubscriptionDeliveryMigration", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionDeliveryMigration", result, path))),
      listFailures: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrationFailures", result, path))),
      listFailuresPages: (subscription_delivery_migration_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrationFailures", result, path)),
      listFailuresItems: (subscription_delivery_migration_id, params, options) => this.#runtime.items("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrations", result, path)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.subscriptionOffers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionOffer", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionOffer", result, path))),
      delete: async (subscription_offer_id, params, options) => this.#runtime.request("deleteSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionOffer", result, path))),
      get: async (subscription_offer_id, params, options) => this.#runtime.request("getSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionOffer", result, path))),
      list: async (params, options) => this.#runtime.request("listSubscriptionOffers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "product_id",
  "variant_id",
  "query",
  "external_reference_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionOffers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "product_id",
  "variant_id",
  "query",
  "external_reference_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionOffers", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "product_id",
  "variant_id",
  "query",
  "external_reference_id",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "sort_by",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (subscription_offer_id, params, options) => this.#runtime.request("updateSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionOffer", result, path))),
    });
    this.subscriptionPlans = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPlan", result, path))),
      delete: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionPlan", result, path))),
      get: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPlan", result, path))),
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
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path))),
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
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path)),
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
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionPlan", result, path))),
    });
    this.subscriptionPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPreview", result, path))),
    });
    this.subscriptions = Object.freeze({
      cancel: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelSubscription", result, path))),
      changePlan: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPlan", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionPlan", result, path))),
      create: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscription", result, path))),
      createAccessLink: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionAccessLink", result, path))),
      createLineItem: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionLineItem", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionLineItem", result, path))),
      createPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPaymentRetry", result, path))),
      deleteLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("deleteSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionLineItem", result, path))),
      get: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscription", result, path))),
      getPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPaymentRetry", result, path))),
      listPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path))),
      listPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path)),
      listPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
  "idempotency_key",
  "terms_type",
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "delivery_method_id",
  "hold_reason",
  "subscription_offer_id",
  "subscription_plan_id",
  "external_reference_id",
  "test_clock_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
  "idempotency_key",
  "terms_type",
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "delivery_method_id",
  "hold_reason",
  "subscription_offer_id",
  "subscription_plan_id",
  "external_reference_id",
  "test_clock_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptions", result, path)),
      listItems: (params, options) => this.#runtime.items("listSubscriptions", _sdkRequestInput([], [], [
  "idempotency_key",
  "terms_type",
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "delivery_method_id",
  "hold_reason",
  "subscription_offer_id",
  "subscription_plan_id",
  "external_reference_id",
  "test_clock_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_after",
  "next_billing_before",
  "needs_attention",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pause: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseSubscription", result, path))),
      renew: async (subscription_id, params, options) => this.#runtime.request("renewSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewSubscription", result, path))),
      resume: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeSubscription", result, path))),
      skipCycle: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipSubscriptionCycle", result, path))),
      update: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscription", result, path))),
      updateLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionLineItem", result, path))),
    });
    this.taxConnection = Object.freeze({
      connect: async (params, options) => this.#runtime.request("connectTaxConnection", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("connectTaxConnection", result, path))),
      createRegistration: async (params, options) => this.#runtime.request("createTaxRegistration", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTaxRegistration", result, path))),
      deleteRegistration: async (tax_registration_id, params, options) => this.#runtime.request("deleteTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteTaxRegistration", result, path))),
      disconnect: async (params, options) => this.#runtime.request("disconnectTaxConnection", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("disconnectTaxConnection", result, path))),
      get: async (params, options) => this.#runtime.request("getTaxConnection", _sdkRequestInput([], [], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxConnection", result, path))),
      getRegistration: async (tax_registration_id, params, options) => this.#runtime.request("getTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxRegistration", result, path))),
      listRegistrations: async (params, options) => this.#runtime.request("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTaxRegistrations", result, path))),
      listRegistrationsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listTaxRegistrations", result, path)),
      listRegistrationsItems: (params, options) => this.#runtime.items("listTaxRegistrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "state"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      updateRegistration: async (tax_registration_id, params, options) => this.#runtime.request("updateTaxRegistration", _sdkRequestInput([
  "tax_registration_id"
], [tax_registration_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateTaxRegistration", result, path))),
    });
    this.testClocks = Object.freeze({
      advance: async (test_clock_id, params, options) => this.#runtime.request("advanceTestClock", _sdkRequestInput([
  "test_clock_id"
], [test_clock_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("advanceTestClock", result, path))),
      create: async (params, options) => this.#runtime.request("createTestClock", _sdkRequestInput([], [], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTestClock", result, path))),
      delete: async (test_clock_id, params, options) => this.#runtime.request("deleteTestClock", _sdkRequestInput([
  "test_clock_id"
], [test_clock_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteTestClock", result, path))),
      get: async (test_clock_id, params, options) => this.#runtime.request("getTestClock", _sdkRequestInput([
  "test_clock_id"
], [test_clock_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTestClock", result, path))),
      list: async (params, options) => this.#runtime.request("listTestClocks", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTestClocks", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTestClocks", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listTestClocks", result, path)),
      listItems: (params, options) => this.#runtime.items("listTestClocks", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.webhookDeliveries = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookDelivery", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookDelivery", result, path))),
      get: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookDelivery", result, path))),
      list: async (params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveries", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveries", result, path)),
      listItems: (params, options) => this.#runtime.items("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listAttempts: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path))),
      listAttemptsPages: (webhook_delivery_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path)),
      listAttemptsItems: (webhook_delivery_id, params, options) => this.#runtime.items("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      resend: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resendWebhookDelivery", result, path))),
    });
    this.webhookEndpoints = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookEndpoint", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookEndpoint", result, path))),
      createTestEvent: async (webhook_endpoint_id, params, options) => this.#runtime.request("createWebhookTestEvent", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookTestEvent", result, path))),
      delete: async (webhook_endpoint_id, params, options) => this.#runtime.request("deleteWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteWebhookEndpoint", result, path))),
      get: async (webhook_endpoint_id, params, options) => this.#runtime.request("getWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookEndpoint", result, path))),
      list: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "event_sources",
  "partner_app_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "event_sources",
  "partner_app_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path)),
      listItems: (params, options) => this.#runtime.items("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "event_sources",
  "partner_app_id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      rotateSecret: async (webhook_endpoint_id, params, options) => this.#runtime.request("rotateWebhookEndpointSecret", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateWebhookEndpointSecret", result, path))),
      update: async (webhook_endpoint_id, params, options) => this.#runtime.request("updateWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateWebhookEndpoint", result, path))),
    });
    this.webhookEventTypes = Object.freeze({
      list: async (params, options) => this.#runtime.request("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEventTypes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEventTypes", result, path)),
      listItems: (params, options) => this.#runtime.items("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.webhookEvents = Object.freeze({
      get: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookEvent", result, path))),
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
  "created_after",
  "created_before",
  "include"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEvents", result, path))),
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
  "created_after",
  "created_before",
  "include"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEvents", result, path)),
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
  "created_after",
  "created_before",
  "include"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      stream: async (params, options) => this.#runtime.request("streamWebhookEvents", _sdkRequestInput([], [], [
  "event_type",
  "after_event_id",
  "Last-Event-ID"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.workloadIdentities = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWorkloadIdentity", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWorkloadIdentity", result, path))),
      delete: async (workload_identity_id, params, options) => this.#runtime.request("deleteWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteWorkloadIdentity", result, path))),
      get: async (workload_identity_id, params, options) => this.#runtime.request("getWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWorkloadIdentity", result, path))),
      list: async (params, options) => this.#runtime.request("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWorkloadIdentities", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWorkloadIdentities", result, path)),
      listItems: (params, options) => this.#runtime.items("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (workload_identity_id, params, options) => this.#runtime.request("updateWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateWorkloadIdentity", result, path))),
    });
  }
  [Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
  close() { return this.#runtime.close(); }
  verifyWebhook(...args) { return this.#runtime.verifyWebhook(...args); }
  verifyWebhookAsync(...args) { return this.#runtime.verifyWebhookAsync(...args); }
}
export function verifyWebhook(rawBody, headers, secrets, nowSeconds) { return verifyWebhookFromPlan(_sdkDescriptors, rawBody, headers, secrets, nowSeconds); }
export function verifyWebhookAsync(rawBody, headers, options) { return verifyWebhookAsyncFromPlan(_sdkDescriptors, rawBody, headers, options); }
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddLineItemsRequest"), constraints: true}); }
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddOrderChargeRequest"), constraints: true}); }
export function makeAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddressRequest"), constraints: true}); }
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddReturnLineItemRequest"), constraints: true}); }
export function makeAddRiskListItemsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddRiskListItemsRequest"), constraints: true}); }
export function makeAdjustGiftCardBalanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AdjustGiftCardBalanceRequest"), constraints: true}); }
export function makeAdvanceTestClockRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AdvanceTestClockRequest"), constraints: true}); }
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyDiscountRequest"), constraints: true}); }
export function makeApplyDiscountRequestManual(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyDiscountRequestManual"), constraints: true}); }
export function makeApplyDiscountRequestPromotion(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyDiscountRequestPromotion"), constraints: true}); }
export function makeApplyOrderGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyOrderGiftCardRequest"), constraints: true}); }
export function makeAssessInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssessInvoiceLateFeeRequest"), constraints: true}); }
export function makeAssignToUnconfiguredDeliveryProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssignToUnconfiguredDeliveryProfileRequest"), constraints: true}); }
export function makeBrandingSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BrandingSettingsRequest"), constraints: true}); }
export function makeBuyerCapabilities(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCapabilities"), constraints: true}); }
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnPreviewRequest"), constraints: true}); }
export function makeBuyerCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnPreviewRequestEligibility"), constraints: true}); }
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnPreviewRequestResolution"), constraints: true}); }
export function makeBuyerCreateReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnRequest"), constraints: true}); }
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnResolutionPreviewRequest"), constraints: true}); }
export function makeBuyerInstructionsConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInstructionsConfigRequest"), constraints: true}); }
export function makeBuyerPauseCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerPauseCapability"), constraints: true}); }
export function makeBuyerRetentionOffer(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerRetentionOffer"), constraints: true}); }
export function makeBuyerReturnReplacementLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerReturnReplacementLineItemInputBundle"), constraints: true}); }
export function makeBuyerReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerReturnReplacementLineItemInputVariant"), constraints: true}); }
export function makeBuyerReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerReturnReplacementLineItemRequest"), constraints: true}); }
export function makeBuyerSkipCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerSkipCapability"), constraints: true}); }
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryMethodResultRequest"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequest"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestAvailable"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestCannotCalculate"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestUnavailable"), constraints: true}); }
export function makeCancelGiftCardNotificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelGiftCardNotificationRequest"), constraints: true}); }
export function makeCancelOrderPaymentAttemptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelOrderPaymentAttemptRequest"), constraints: true}); }
export function makeCancelPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelPaymentIntentRequest"), constraints: true}); }
export function makeCancelPayoutRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelPayoutRequest"), constraints: true}); }
export function makeCancelReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnDispositionRequest"), constraints: true}); }
export function makeCancelReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnLineItemRequest"), constraints: true}); }
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnRequest"), constraints: true}); }
export function makeCancelReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnResolutionRequest"), constraints: true}); }
export function makeCancelSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelSubscriptionRequest"), constraints: true}); }
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CapturePaymentIntentRequest"), constraints: true}); }
export function makeCashOutGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CashOutGiftCardRequest"), constraints: true}); }
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeSubscriptionPlanRequest"), constraints: true}); }
export function makeCheckoutBuyerContactRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutBuyerContactRequest"), constraints: true}); }
export function makeCheckoutBuyerFieldsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutBuyerFieldsRequest"), constraints: true}); }
export function makeCheckoutCustomTextWriteConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomTextWriteConfig"), constraints: true}); }
export function makeCheckoutLegalConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutLegalConfigRequest"), constraints: true}); }
export function makeCheckoutPaymentConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPaymentConfigRequest"), constraints: true}); }
export function makeCheckoutPrefillRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPrefillRequest"), constraints: true}); }
export function makeCheckoutPromotionConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPromotionConfigRequest"), constraints: true}); }
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutQuickPayItemRequest"), constraints: true}); }
export function makeCheckoutRecoveryEmailSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutRecoveryEmailSettingsRequest"), constraints: true}); }
export function makeCheckoutRedirectsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutRedirectsRequest"), constraints: true}); }
export function makeCheckoutSavedPaymentDetailsSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSavedPaymentDetailsSettingsRequest"), constraints: true}); }
export function makeCheckoutSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSettingsRequest"), constraints: true}); }
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSubscriptionTermsRequest"), constraints: true}); }
export function makeCheckoutTaxConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutTaxConfigRequest"), constraints: true}); }
export function makeCheckoutTipConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutTipConfigRequest"), constraints: true}); }
export function makeCloseCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseCheckoutSessionRequest"), constraints: true}); }
export function makeCloseOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseOrderRequest"), constraints: true}); }
export function makeCollectInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CollectInvoiceRequest"), constraints: true}); }
export function makeCompleteReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CompleteReturnRequest"), constraints: true}); }
export function makeConfigurationVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfigurationVersionRequest"), constraints: true}); }
export function makeConfirmCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmCheckoutSessionCustomerVerificationRequest"), constraints: true}); }
export function makeConfirmCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmCustomerVerificationRequest"), constraints: true}); }
export function makeConfirmEmailChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmEmailChangeRequest"), constraints: true}); }
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmPaymentIntentRequest"), constraints: true}); }
export function makeConfirmPaymentIntentRequestAttached(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmPaymentIntentRequestAttached"), constraints: true}); }
export function makeConfirmPaymentIntentRequestPaymentMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmPaymentIntentRequestPaymentMethod"), constraints: true}); }
export function makeConfirmPaymentIntentRequestStripeConfirmationToken(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmPaymentIntentRequestStripeConfirmationToken"), constraints: true}); }
export function makeConfirmPaymentIntentRequestToken(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmPaymentIntentRequestToken"), constraints: true}); }
export function makeConfirmReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmReturnResolutionRequest"), constraints: true}); }
export function makeConnectTaxConnectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConnectTaxConnectionRequest"), constraints: true}); }
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateAPIKeyRequest"), constraints: true}); }
export function makeCreateAPIKeyRequestFull(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateAPIKeyRequestFull"), constraints: true}); }
export function makeCreateAPIKeyRequestReadOnly(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateAPIKeyRequestReadOnly"), constraints: true}); }
export function makeCreateAPIKeyRequestRestricted(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateAPIKeyRequestRestricted"), constraints: true}); }
export function makeCreateBundleComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateBundleComponentRequest"), constraints: true}); }
export function makeCreateBundleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateBundleRequest"), constraints: true}); }
export function makeCreateCategoryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCategoryRequest"), constraints: true}); }
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutDeliveryQuoteRequest"), constraints: true}); }
export function makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionCustomerVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionGiftCardPurchaseVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionOrder"), constraints: true}); }
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionQuickPay"), constraints: true}); }
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionRequest"), constraints: true}); }
export function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionSavePaymentMethodVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionSubscriptionPlan"), constraints: true}); }
export function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest"), constraints: true}); }
export function makeCreateCreditNoteAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteAllocationRequest"), constraints: true}); }
export function makeCreateCreditNoteRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteRefundRequest"), constraints: true}); }
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteRequest"), constraints: true}); }
export function makeCreateCustomDomainRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomDomainRequest"), constraints: true}); }
export function makeCreateCustomerAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerAddressRequest"), constraints: true}); }
export function makeCreateCustomerDeletionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerDeletionRequest"), constraints: true}); }
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerRequest"), constraints: true}); }
export function makeCreateCustomerSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerSessionRequest"), constraints: true}); }
export function makeCreateCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerVerificationRequest"), constraints: true}); }
export function makeCreateDeliveryFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryFulfillmentDetails"), constraints: true}); }
export function makeCreateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryLocationSetRequest"), constraints: true}); }
export function makeCreateDeliveryMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryMethodRequest"), constraints: true}); }
export function makeCreateDeliveryMethodRequestLocalDelivery(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryMethodRequestLocalDelivery"), constraints: true}); }
export function makeCreateDeliveryMethodRequestPickup(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryMethodRequestPickup"), constraints: true}); }
export function makeCreateDeliveryMethodRequestShipment(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryMethodRequestShipment"), constraints: true}); }
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
export function makeCreateDigitalFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDigitalFulfillmentDetails"), constraints: true}); }
export function makeCreateEmailChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateEmailChangeRequest"), constraints: true}); }
export function makeCreateFeedbackReportNarrative(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFeedbackReportNarrative"), constraints: true}); }
export function makeCreateFeedbackReportRating(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFeedbackReportRating"), constraints: true}); }
export function makeCreateFeedbackReportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFeedbackReportRequest"), constraints: true}); }
export function makeCreateFileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFileRequest"), constraints: true}); }
export function makeCreateFulfillmentEventRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentEventRequest"), constraints: true}); }
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentRequest"), constraints: true}); }
export function makeCreateFulfillmentRequestDigital(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentRequestDigital"), constraints: true}); }
export function makeCreateFulfillmentRequestLocalDelivery(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentRequestLocalDelivery"), constraints: true}); }
export function makeCreateFulfillmentRequestPickup(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentRequestPickup"), constraints: true}); }
export function makeCreateFulfillmentRequestService(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentRequestService"), constraints: true}); }
export function makeCreateFulfillmentRequestShipment(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateFulfillmentRequestShipment"), constraints: true}); }
export function makeCreateGiftCardFundingDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardFundingDispositionRequest"), constraints: true}); }
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardLoadRequest"), constraints: true}); }
export function makeCreateGiftCardNotificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardNotificationRequest"), constraints: true}); }
export function makeCreateGiftCardRedemptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardRedemptionRequest"), constraints: true}); }
export function makeCreateGiftCardRedemptionRequestAutomatic(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardRedemptionRequestAutomatic"), constraints: true}); }
export function makeCreateGiftCardRedemptionRequestManual(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardRedemptionRequestManual"), constraints: true}); }
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateGiftCardRequest"), constraints: true}); }
export function makeCreateInlineModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInlineModifierGroupRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentConditionChangeRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentCorrectionRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentCountedRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentQuantityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentQuantityRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentRequest"), constraints: true}); }
export function makeCreateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAllocationPolicyRequest"), constraints: true}); }
export function makeCreateInventoryCountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryCountRequest"), constraints: true}); }
export function makeCreateInventoryItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryItemRequest"), constraints: true}); }
export function makeCreateInventoryReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryReceiptRequest"), constraints: true}); }
export function makeCreateInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryReservationRequest"), constraints: true}); }
export function makeCreateInventoryTransferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryTransferRequest"), constraints: true}); }
export function makeCreateInvoiceIssueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceIssueRequest"), constraints: true}); }
export function makeCreateInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceManualPaymentRequest"), constraints: true}); }
export function makeCreateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoicePaymentTermRequest"), constraints: true}); }
export function makeCreateInvoiceQuickPayRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceQuickPayRequest"), constraints: true}); }
export function makeCreateInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceRequest"), constraints: true}); }
export function makeCreateInvoiceRequestOrder(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceRequestOrder"), constraints: true}); }
export function makeCreateInvoiceRequestQuickPay(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInvoiceRequestQuickPay"), constraints: true}); }
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateLocationRequest"), constraints: true}); }
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateMeSubscriptionPreviewRequest"), constraints: true}); }
export function makeCreateMeSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateMeSubscriptionPreviewRequestDeliveryOptions"), constraints: true}); }
export function makeCreateMeSubscriptionPreviewRequestNextRenewal(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateMeSubscriptionPreviewRequestNextRenewal"), constraints: true}); }
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierGroupRequest"), constraints: true}); }
export function makeCreateModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierRequest"), constraints: true}); }
export function makeCreateModifierSetGroupInputExisting(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupInputExisting"), constraints: true}); }
export function makeCreateModifierSetGroupInputInline(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupInputInline"), constraints: true}); }
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupRequest"), constraints: true}); }
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetRequest"), constraints: true}); }
export function makeCreateOrderDiscount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscount"), constraints: true}); }
export function makeCreateOrderDiscountManual(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscountManual"), constraints: true}); }
export function makeCreateOrderDiscountPromotion(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscountPromotion"), constraints: true}); }
export function makeCreateOrderLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemInputBundle"), constraints: true}); }
export function makeCreateOrderLineItemInputCustom(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemInputCustom"), constraints: true}); }
export function makeCreateOrderLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemInputVariant"), constraints: true}); }
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemRequest"), constraints: true}); }
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderPaymentIntentRequest"), constraints: true}); }
export function makeCreateOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderRequest"), constraints: true}); }
export function makeCreateOrderTip(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTip"), constraints: true}); }
export function makeCreateOrderTipAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTipAmount"), constraints: true}); }
export function makeCreateOrderTipPercent(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTipPercent"), constraints: true}); }
export function makeCreateOrganizationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrganizationRequest"), constraints: true}); }
export function makeCreatePackageItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePackageItemRequest"), constraints: true}); }
export function makeCreatePartnerAppCredentialJWKSURLRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppCredentialJWKSURLRequest"), constraints: true}); }
export function makeCreatePartnerAppCredentialPublicKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppCredentialPublicKeyRequest"), constraints: true}); }
export function makeCreatePartnerAppCredentialRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppCredentialRequest"), constraints: true}); }
export function makeCreatePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppCredentialWorkloadIdentityRequest"), constraints: true}); }
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppRequest"), constraints: true}); }
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentIntentRequest"), constraints: true}); }
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentLinkRequest"), constraints: true}); }
export function makeCreatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentMethodDomainRequest"), constraints: true}); }
export function makeCreatePayoutRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePayoutRequest"), constraints: true}); }
export function makeCreatePickupFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePickupFulfillmentDetails"), constraints: true}); }
export function makeCreateProductOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionRequest"), constraints: true}); }
export function makeCreateProductOptionValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionValueRequest"), constraints: true}); }
export function makeCreateProductRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequest"), constraints: true}); }
export function makeCreateProductRequestOptioned(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequestOptioned"), constraints: true}); }
export function makeCreateProductRequestSimple(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequestSimple"), constraints: true}); }
export function makeCreatePromotionCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionCodeRequest"), constraints: true}); }
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionRequest"), constraints: true}); }
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequest"), constraints: true}); }
export function makeCreateRefundRequestAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestAmount"), constraints: true}); }
export function makeCreateRefundRequestFull(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestFull"), constraints: true}); }
export function makeCreateRefundRequestTargets(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestTargets"), constraints: true}); }
export function makeCreateReportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReportRequest"), constraints: true}); }
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnDispositionRequest"), constraints: true}); }
export function makeCreateReturnDispositionRequestInspectionLine(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnDispositionRequestInspectionLine"), constraints: true}); }
export function makeCreateReturnDispositionRequestReceiptLine(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnDispositionRequestReceiptLine"), constraints: true}); }
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnEligibilityPreviewRequest"), constraints: true}); }
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnInspectionRequest"), constraints: true}); }
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPolicyRequest"), constraints: true}); }
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPreviewRequest"), constraints: true}); }
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPreviewRequestEligibility"), constraints: true}); }
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnPreviewRequestResolution"), constraints: true}); }
export function makeCreateReturnReasonRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnReasonRequest"), constraints: true}); }
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnReceiptRequest"), constraints: true}); }
export function makeCreateReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnRequest"), constraints: true}); }
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionPreviewRequest"), constraints: true}); }
export function makeCreateReturnResolutionPreviewRequestCorrection(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionPreviewRequestCorrection"), constraints: true}); }
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionPreviewRequestStandard"), constraints: true}); }
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionRequest"), constraints: true}); }
export function makeCreateReturnResolutionRequestCorrection(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionRequestCorrection"), constraints: true}); }
export function makeCreateReturnResolutionRequestStandard(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnResolutionRequestStandard"), constraints: true}); }
export function makeCreateRiskListRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskListRequest"), constraints: true}); }
export function makeCreateRiskPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskPreviewRequest"), constraints: true}); }
export function makeCreateRiskPreviewRequestInline(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskPreviewRequestInline"), constraints: true}); }
export function makeCreateRiskPreviewRequestStoredRule(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskPreviewRequestStoredRule"), constraints: true}); }
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskRuleRequest"), constraints: true}); }
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSandboxRequest"), constraints: true}); }
export function makeCreateServiceFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateServiceFulfillmentDetails"), constraints: true}); }
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateShipmentRequest"), constraints: true}); }
export function makeCreateShipmentRequestOutbound(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateShipmentRequestOutbound"), constraints: true}); }
export function makeCreateShipmentRequestReturn(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateShipmentRequestReturn"), constraints: true}); }
export function makeCreateSubscriptionAccessLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionAccessLinkRequest"), constraints: true}); }
export function makeCreateSubscriptionDeliveryMigrationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionDeliveryMigrationRequest"), constraints: true}); }
export function makeCreateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionLineItemRequest"), constraints: true}); }
export function makeCreateSubscriptionLineItemRequestBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionLineItemRequestBundle"), constraints: true}); }
export function makeCreateSubscriptionLineItemRequestVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionLineItemRequestVariant"), constraints: true}); }
export function makeCreateSubscriptionOfferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionOfferRequest"), constraints: true}); }
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPlanRequest"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequest"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestCreate"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestDeliveryMethodUpdate"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestDeliveryOptions"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestNextRenewal(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestNextRenewal"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestPlanChange"), constraints: true}); }
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionRequest"), constraints: true}); }
export function makeCreateTaxRegistrationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateTaxRegistrationRequest"), constraints: true}); }
export function makeCreateTestClockRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateTestClockRequest"), constraints: true}); }
export function makeCreateWebhookDeliveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookDeliveryRequest"), constraints: true}); }
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookEndpointRequest"), constraints: true}); }
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookTestEventRequest"), constraints: true}); }
export function makeCreateWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWorkloadIdentityRequest"), constraints: true}); }
export function makeCreditNoteCorrectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteCorrectionRequest"), constraints: true}); }
export function makeCreditNoteCorrectionRequestAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteCorrectionRequestAmount"), constraints: true}); }
export function makeCreditNoteCorrectionRequestQuantity(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteCorrectionRequestQuantity"), constraints: true}); }
export function makeCreditNoteIssueAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteIssueAllocationRequest"), constraints: true}); }
export function makeCreditNoteLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteLineItemRequest"), constraints: true}); }
export function makeCreditNoteRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteRefundRequest"), constraints: true}); }
export function makeCustomerAccountPresentationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountPresentationRequest"), constraints: true}); }
export function makeCustomerAccountRouteTemplatesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountRouteTemplatesRequest"), constraints: true}); }
export function makeCustomerAccountSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountSettingsRequest"), constraints: true}); }
export function makeCustomerEmailDeliverySettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerEmailDeliverySettingsRequest"), constraints: true}); }
export function makeDecideReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnInspectionLineItemRequest"), constraints: true}); }
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnRequest"), constraints: true}); }
export function makeDeclinePaymentReviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeclinePaymentReviewRequest"), constraints: true}); }
export function makeDeliveryAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAddressRequest"), constraints: true}); }
export function makeDeliveryAvailabilityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAvailabilityRequest"), constraints: true}); }
export function makeDeliveryBlackoutIntervalRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBlackoutIntervalRequest"), constraints: true}); }
export function makeDeliveryBusinessDayRangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBusinessDayRangeRequest"), constraints: true}); }
export function makeDeliveryBuyerLocationInputAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBuyerLocationInputAddress"), constraints: true}); }
export function makeDeliveryBuyerLocationInputCoordinate(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBuyerLocationInputCoordinate"), constraints: true}); }
export function makeDeliveryBuyerLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBuyerLocationRequest"), constraints: true}); }
export function makeDeliveryCalculatedPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCalculatedPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryCallbackPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCallbackPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryCallerSuppliedPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCallerSuppliedPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryCoordinateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCoordinateRequest"), constraints: true}); }
export function makeDeliveryCountryCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCountryCondition"), constraints: true}); }
export function makeDeliveryCustomerBooleanCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCustomerBooleanCondition"), constraints: true}); }
export function makeDeliveryCustomerSegmentCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCustomerSegmentCondition"), constraints: true}); }
export function makeDeliveryDistance(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryDistance"), constraints: true}); }
export function makeDeliveryDistanceUnitPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryDistanceUnitPriceRequest"), constraints: true}); }
export function makeDeliveryEligibilityExpression(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryEligibilityExpression"), constraints: true}); }
export function makeDeliveryEstimateRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryEstimateRuleRequest"), constraints: true}); }
export function makeDeliveryFixedPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryFixedPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryInventoryAssignmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryInventoryAssignmentRequest"), constraints: true}); }
export function makeDeliveryLocationSetConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryLocationSetConfiguration"), constraints: true}); }
export function makeDeliveryMethodConfigurationCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodConfigurationCreateRequest"), constraints: true}); }
export function makeDeliveryMethodConfigurationPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodConfigurationPatchRequest"), constraints: true}); }
export function makeDeliveryMethodConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodConfigurationRequest"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputAllocatedOriginGroup"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputFixedLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputFixedLocation"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputPickupLocationCollection"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollectionLocations(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorRequest"), constraints: true}); }
export function makeDeliveryPickupAvailabilityMaximumDistanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPickupAvailabilityMaximumDistanceRequest"), constraints: true}); }
export function makeDeliveryPostalCodeCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPostalCodeCondition"), constraints: true}); }
export function makeDeliveryPostalCodeValue(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPostalCodeValue"), constraints: true}); }
export function makeDeliveryPreviewRoutingSource(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPreviewRoutingSource"), constraints: true}); }
export function makeDeliveryPricingRateCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingRateCreateRequest"), constraints: true}); }
export function makeDeliveryPricingRateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingRateRequest"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateInputCalculated(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateInputCalculated"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateInputCallback(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateInputCallback"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateInputCallerSupplied(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateInputCallerSupplied"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateInputFixed(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateInputFixed"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateInputRateTable(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateInputRateTable"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateInputTiered(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateInputTiered"), constraints: true}); }
export function makeDeliveryPricingStrategyCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyCreateRequest"), constraints: true}); }
export function makeDeliveryPricingStrategyInputCalculated(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyInputCalculated"), constraints: true}); }
export function makeDeliveryPricingStrategyInputCallback(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyInputCallback"), constraints: true}); }
export function makeDeliveryPricingStrategyInputCallerSupplied(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyInputCallerSupplied"), constraints: true}); }
export function makeDeliveryPricingStrategyInputFixed(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyInputFixed"), constraints: true}); }
export function makeDeliveryPricingStrategyInputRateTable(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyInputRateTable"), constraints: true}); }
export function makeDeliveryPricingStrategyInputTiered(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyInputTiered"), constraints: true}); }
export function makeDeliveryPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryPricingTierBandRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPricingTierBandRequest"), constraints: true}); }
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileConfigurationInputManual"), constraints: true}); }
export function makeDeliveryProfileConfigurationInputNone(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileConfigurationInputNone"), constraints: true}); }
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileConfigurationInputQuote"), constraints: true}); }
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileConfigurationInputRequired"), constraints: true}); }
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileConfigurationRequest"), constraints: true}); }
export function makeDeliveryProfileOriginPolicyInputFixedLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileOriginPolicyInputFixedLocation"), constraints: true}); }
export function makeDeliveryProfileOriginPolicyInputInventoryRouting(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileOriginPolicyInputInventoryRouting"), constraints: true}); }
export function makeDeliveryProfileOriginPolicyInputMethodOrigin(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileOriginPolicyInputMethodOrigin"), constraints: true}); }
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryProfileOriginPolicyRequest"), constraints: true}); }
export function makeDeliveryRadiusCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRadiusCondition"), constraints: true}); }
export function makeDeliveryRadiusOrigin(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRadiusOrigin"), constraints: true}); }
export function makeDeliveryRateCallbackConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackConfiguration"), constraints: true}); }
export function makeDeliveryRateCallbackConfigurationPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackConfigurationPatchRequest"), constraints: true}); }
export function makeDeliveryRateTablePricingStrategyCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateTablePricingStrategyCreateRequest"), constraints: true}); }
export function makeDeliveryRateTablePricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateTablePricingStrategyRequest"), constraints: true}); }
export function makeDeliveryRecipientRequirement(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRecipientRequirement"), constraints: true}); }
export function makeDeliveryScheduleWindowRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryScheduleWindowRuleRequest"), constraints: true}); }
export function makeDeliverySelectionInstructionsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionInstructionsRequest"), constraints: true}); }
export function makeDeliverySelectionRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionRecipientRequest"), constraints: true}); }
export function makeDeliveryStateCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryStateCondition"), constraints: true}); }
export function makeDeliveryTieredPricingStrategyInputQuantityOrMoney(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategyInputQuantityOrMoney"), constraints: true}); }
export function makeDeliveryTieredPricingStrategyInputWeight(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategyInputWeight"), constraints: true}); }
export function makeDeliveryTieredPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryTransitTimeRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTransitTimeRuleRequest"), constraints: true}); }
export function makeDeliveryWeeklyIntervalRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeeklyIntervalRequest"), constraints: true}); }
export function makeDeliveryWeightUnitPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeightUnitPriceRequest"), constraints: true}); }
export function makeDeliveryWindowRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowRequest"), constraints: true}); }
export function makeDeliveryWindowTimeCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowTimeCondition"), constraints: true}); }
export function makeDeliveryZoneCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneCondition"), constraints: true}); }
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneConfiguration"), constraints: true}); }
export function makeDeveloperInitialAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperInitialAPIKeyRequest"), constraints: true}); }
export function makeDimensions(value) { return modelFromCodec(value, {..._sdkModelCodec("Dimensions"), constraints: true}); }
export function makeDisconnectTaxConnectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DisconnectTaxConnectionRequest"), constraints: true}); }
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DiscountPreviewRequest"), constraints: true}); }
export function makeDocumentTaxIDRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DocumentTaxIDRequest"), constraints: true}); }
export function makeEmailPreferenceLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("EmailPreferenceLinkRequest"), constraints: true}); }
export function makeFeedbackReportingClient(value) { return modelFromCodec(value, {..._sdkModelCodec("FeedbackReportingClient"), constraints: true}); }
export function makeFulfillmentItemizedPackagesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentItemizedPackagesRequest"), constraints: true}); }
export function makeFulfillmentLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentLineItemRequest"), constraints: true}); }
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentPackagingRequest"), constraints: true}); }
export function makeFulfillmentRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentRecipientRequest"), constraints: true}); }
export function makeFulfillmentSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentSettingsRequest"), constraints: true}); }
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentSinglePackageRequest"), constraints: true}); }
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
export function makeFulfillmentTransitionRequestReleaseHold(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestReleaseHold"), constraints: true}); }
export function makeFulfillmentTransitionRequestSchedule(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestSchedule"), constraints: true}); }
export function makeFulfillmentTransitionRequestStart(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestStart"), constraints: true}); }
export function makeGetOrCreateReturnResolutionCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GetOrCreateReturnResolutionCheckoutSessionRequest"), constraints: true}); }
export function makeGiftCardCustomAmountBoundsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardCustomAmountBoundsRequest"), constraints: true}); }
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSource"), constraints: true}); }
export function makeGiftCardFundingSourceAdjustment(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceAdjustment"), constraints: true}); }
export function makeGiftCardFundingSourceExternalPayment(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceExternalPayment"), constraints: true}); }
export function makeGiftCardFundingSourceFlintManualPayment(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceFlintManualPayment"), constraints: true}); }
export function makeGiftCardFundingSourceFlintPayment(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceFlintPayment"), constraints: true}); }
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceGiftCardPurchaseRefundRecovery"), constraints: true}); }
export function makeGiftCardFundingSourceGiftCardRefund(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceGiftCardRefund"), constraints: true}); }
export function makeGiftCardFundingSourceImport(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceImport"), constraints: true}); }
export function makeGiftCardFundingSourceStoreCredit(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceStoreCredit"), constraints: true}); }
export function makeGiftCardNotificationRecipient(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationRecipient"), constraints: true}); }
export function makeGiftCardProductConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardProductConfigurationRequest"), constraints: true}); }
export function makeGiftCardPurchaseDetailsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseDetailsRequest"), constraints: true}); }
export function makeGiftCardPurchaseRecipientPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRecipientPatchRequest"), constraints: true}); }
export function makeGiftCardPurchaseRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRecipientRequest"), constraints: true}); }
export function makeGiftCardVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardVersionRequest"), constraints: true}); }
export function makeGrantOrganizationMembershipRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GrantOrganizationMembershipRequest"), constraints: true}); }
export function makeImageInputFile(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageInputFile"), constraints: true}); }
export function makeImageInputSourceURL(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageInputSourceURL"), constraints: true}); }
export function makeImageReferenceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageReferenceRequest"), constraints: true}); }
export function makeImageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageRequest"), constraints: true}); }
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {..._sdkModelCodec("InitialGiftCardFunding"), constraints: true}); }
export function makeInlineModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InlineModifierGroupRequest"), constraints: true}); }
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentConditionChangeLineRequest"), constraints: true}); }
export function makeInventoryAdjustmentQuantityLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentQuantityLineRequest"), constraints: true}); }
export function makeInventoryAdjustmentSetLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentSetLineRequest"), constraints: true}); }
export function makeInventoryAllocationConfigurationValue(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationConfigurationValue"), constraints: true}); }
export function makeInventoryAllocationPolicyLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationPolicyLocation"), constraints: true}); }
export function makeInventoryCountObservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountObservationRequest"), constraints: true}); }
export function makeInventoryCountTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountTransitionRequest"), constraints: true}); }
export function makeInventoryCountTransitionRequestApply(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountTransitionRequestApply"), constraints: true}); }
export function makeInventoryCountTransitionRequestCancel(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountTransitionRequestCancel"), constraints: true}); }
export function makeInventoryItemCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryItemCreateRequest"), constraints: true}); }
export function makeInventoryOriginPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryOriginPolicyRequest"), constraints: true}); }
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryProvenanceRequest"), constraints: true}); }
export function makeInventoryReceiptLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceiptLineRequest"), constraints: true}); }
export function makeInventoryReservationOwnerRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationOwnerRequest"), constraints: true}); }
export function makeInventoryReservationTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationTransitionRequest"), constraints: true}); }
export function makeInventoryReservationTransitionRequestCommit(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationTransitionRequestCommit"), constraints: true}); }
export function makeInventoryReservationTransitionRequestConsume(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationTransitionRequestConsume"), constraints: true}); }
export function makeInventoryReservationTransitionRequestRelease(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationTransitionRequestRelease"), constraints: true}); }
export function makeInventoryRoutingDemand(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingDemand"), constraints: true}); }
export function makeInventoryRoutingSourceInputFixedLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceInputFixedLocation"), constraints: true}); }
export function makeInventoryRoutingSourceInputPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceInputPolicy"), constraints: true}); }
export function makeInventoryRoutingSourceInputPolicyRevision(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceInputPolicyRevision"), constraints: true}); }
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceRequest"), constraints: true}); }
export function makeInventorySettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySettingsRequest"), constraints: true}); }
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySourceSystemRequest"), constraints: true}); }
export function makeInventoryTransferLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferLineRequest"), constraints: true}); }
export function makeInventoryTransferTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferTransitionRequest"), constraints: true}); }
export function makeInventoryTransferTransitionRequestCancel(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferTransitionRequestCancel"), constraints: true}); }
export function makeInventoryTransferTransitionRequestDepart(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferTransitionRequestDepart"), constraints: true}); }
export function makeInventoryTransferTransitionRequestReceive(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferTransitionRequestReceive"), constraints: true}); }
export function makeInventoryTransferTransitionRequestReportLoss(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferTransitionRequestReportLoss"), constraints: true}); }
export function makeInventoryTransferTransitionRequestReturnToOrigin(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferTransitionRequestReturnToOrigin"), constraints: true}); }
export function makeInvoiceAutopayRetryPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceAutopayRetryPolicy"), constraints: true}); }
export function makeInvoiceCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCheckoutSessionRequest"), constraints: true}); }
export function makeInvoiceCollectionInputAutomatic(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputAutomatic"), constraints: true}); }
export function makeInvoiceCollectionInputBuyerInitiated(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputBuyerInitiated"), constraints: true}); }
export function makeInvoiceCollectionInputExternal(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputExternal"), constraints: true}); }
export function makeInvoiceCollectionInputMerchantDefault(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputMerchantDefault"), constraints: true}); }
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionRequest"), constraints: true}); }
export function makeInvoiceLateFeePolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFeePolicy"), constraints: true}); }
export function makeInvoiceLateFeePolicyFixed(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFeePolicyFixed"), constraints: true}); }
export function makeInvoiceLateFeePolicyPercentage(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFeePolicyPercentage"), constraints: true}); }
export function makeInvoicePaymentDueInputCustomerDefault(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputCustomerDefault"), constraints: true}); }
export function makeInvoicePaymentDueInputDate(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputDate"), constraints: true}); }
export function makeInvoicePaymentDueInputMerchantDefault(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputMerchantDefault"), constraints: true}); }
export function makeInvoicePaymentDueInputNone(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputNone"), constraints: true}); }
export function makeInvoicePaymentDueInputPaymentTerms(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputPaymentTerms"), constraints: true}); }
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueRequest"), constraints: true}); }
export function makeInvoicePaymentOptionLimit(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentOptionLimit"), constraints: true}); }
export function makeInvoicePaymentPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentPolicy"), constraints: true}); }
export function makeInvoicePaymentTermCalculation(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculation"), constraints: true}); }
export function makeInvoicePaymentTermCalculationDayOfMonth(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationDayOfMonth"), constraints: true}); }
export function makeInvoicePaymentTermCalculationDayOfNextMonth(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationDayOfNextMonth"), constraints: true}); }
export function makeInvoicePaymentTermCalculationDaysAfterMonthEnd(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationDaysAfterMonthEnd"), constraints: true}); }
export function makeInvoicePaymentTermCalculationNetDays(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationNetDays"), constraints: true}); }
export function makeInvoicePaymentTermCalculationOnReceipt(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationOnReceipt"), constraints: true}); }
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceReminderPolicy"), constraints: true}); }
export function makeInvoiceReminderRule(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceReminderRule"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecification(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecification"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecificationFixed(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecificationFixed"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecificationPercentage(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecificationPercentage"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecificationRemainingBalance(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecificationRemainingBalance"), constraints: true}); }
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleDueWrite"), constraints: true}); }
export function makeInvoiceScheduleDueWriteAtIssue(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleDueWriteAtIssue"), constraints: true}); }
export function makeInvoiceScheduleDueWriteDate(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleDueWriteDate"), constraints: true}); }
export function makeInvoiceScheduleDueWriteInvoiceDueDate(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleDueWriteInvoiceDueDate"), constraints: true}); }
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleEntryWrite"), constraints: true}); }
export function makeInvoiceScheduleEntryWriteBalance(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleEntryWriteBalance"), constraints: true}); }
export function makeInvoiceScheduleEntryWriteDeposit(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleEntryWriteDeposit"), constraints: true}); }
export function makeInvoiceScheduleEntryWriteInstallment(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleEntryWriteInstallment"), constraints: true}); }
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceSettingsPatch"), constraints: true}); }
export function makeIssueCreditNoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueCreditNoteRequest"), constraints: true}); }
export function makeIssueInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueInvoiceRequest"), constraints: true}); }
export function makeIssueSandboxAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueSandboxAPIKeyRequest"), constraints: true}); }
export function makeIssueSandboxAPIKeyRequestFull(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueSandboxAPIKeyRequestFull"), constraints: true}); }
export function makeIssueSandboxAPIKeyRequestReadOnly(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueSandboxAPIKeyRequestReadOnly"), constraints: true}); }
export function makeIssueSandboxAPIKeyRequestRestricted(value) { return modelFromCodec(value, {..._sdkModelCodec("IssueSandboxAPIKeyRequestRestricted"), constraints: true}); }
export function makeLegalSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LegalSettingsRequest"), constraints: true}); }
export function makeLineItemFulfillmentOriginRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentOriginRequest"), constraints: true}); }
export function makeLineItemFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentRequest"), constraints: true}); }
export function makeLinkCustomerGuestPurchasesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LinkCustomerGuestPurchasesRequest"), constraints: true}); }
export function makeLocationCoordinateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationCoordinateRequest"), constraints: true}); }
export function makeLookupGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LookupGiftCardRequest"), constraints: true}); }
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ManualDiscountRequest"), constraints: true}); }
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionCreateRequest"), constraints: true}); }
export function makeMerchantAccountSessionRefreshRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionRefreshRequest"), constraints: true}); }
export function makeMetadataPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MetadataPatchRequest"), constraints: true}); }
export function makeMetadataRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MetadataRequest"), constraints: true}); }
export function makeModifierOverride(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierOverride"), constraints: true}); }
export function makeModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierRequest"), constraints: true}); }
export function makeModifierSetGroupInputExisting(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroupInputExisting"), constraints: true}); }
export function makeModifierSetGroupInputInline(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroupInputInline"), constraints: true}); }
export function makeModifierSetGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroupRequest"), constraints: true}); }
export function makeMoneyValue(value) { return modelFromCodec(value, {..._sdkModelCodec("MoneyValue"), constraints: true}); }
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingAdvanceRequest"), constraints: true}); }
export function makeOnboardingProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingProfileRequest"), constraints: true}); }
export function makeOnboardingStartRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingStartRequest"), constraints: true}); }
export function makeOnboardingVerifyEmailRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingVerifyEmailRequest"), constraints: true}); }
export function makeOrderCalculatedChargeTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderCalculatedChargeTax"), constraints: true}); }
export function makeOrderCalculatedLineItemTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderCalculatedLineItemTax"), constraints: true}); }
export function makeOrderChargeInputAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeInputAmount"), constraints: true}); }
export function makeOrderChargeInputPercent(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeInputPercent"), constraints: true}); }
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeRequest"), constraints: true}); }
export function makeOrderChargeTaxAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeTaxAssignment"), constraints: true}); }
export function makeOrderDeliveryDestinationRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRecipientRequest"), constraints: true}); }
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRequest"), constraints: true}); }
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemInventoryDemandRequest"), constraints: true}); }
export function makeOrderDraftLineItemTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxCalculationRequest"), constraints: true}); }
export function makeOrderDraftLineItemTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxRequest"), constraints: true}); }
export function makeOrderDraftTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxComponentRequest"), constraints: true}); }
export function makeOrderDraftTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxJurisdictionRequest"), constraints: true}); }
export function makeOrderGiftCardAllocationAcceptance(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardAllocationAcceptance"), constraints: true}); }
export function makeOrderInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderInventoryRoutingSourceRequest"), constraints: true}); }
export function makeOrderLineItemModifierInputCatalog(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierInputCatalog"), constraints: true}); }
export function makeOrderLineItemModifierInputText(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierInputText"), constraints: true}); }
export function makeOrderLineItemModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierRequest"), constraints: true}); }
export function makeOrderLineItemTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemTax"), constraints: true}); }
export function makeOrderLineItemTaxAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemTaxAssignment"), constraints: true}); }
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentIntentSelection"), constraints: true}); }
export function makeOrderPaymentIntentSelectionAttached(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentIntentSelectionAttached"), constraints: true}); }
export function makeOrderPaymentIntentSelectionPaymentMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentIntentSelectionPaymentMethod"), constraints: true}); }
export function makeOrderPaymentIntentSelectionStripeConfirmationToken(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentIntentSelectionStripeConfirmationToken"), constraints: true}); }
export function makeOrderPaymentIntentSelectionToken(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentIntentSelectionToken"), constraints: true}); }
export function makeOrderPaymentSourceCardSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentSourceCardSelection"), constraints: true}); }
export function makeOrderPaymentSourceSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentSourceSelection"), constraints: true}); }
export function makeOrderTaxCalculationInputAutomatic(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxCalculationInputAutomatic"), constraints: true}); }
export function makeOrderTaxCalculationInputExternal(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxCalculationInputExternal"), constraints: true}); }
export function makeOrderTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxCalculationRequest"), constraints: true}); }
export function makeOrderTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxComponentRequest"), constraints: true}); }
export function makeOrderTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxJurisdictionRequest"), constraints: true}); }
export function makeOrderTaxLocationFullAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationFullAddressRequest"), constraints: true}); }
export function makeOrderTaxLocationInputFullAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputFullAddress"), constraints: true}); }
export function makeOrderTaxLocationInputPostalCode(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputPostalCode"), constraints: true}); }
export function makeOrderTaxLocationPostalAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationPostalAddressRequest"), constraints: true}); }
export function makeOrderTaxLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationRequest"), constraints: true}); }
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxRequest"), constraints: true}); }
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxUpdateRequest"), constraints: true}); }
export function makePackageCreateInputCreated(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageCreateInputCreated"), constraints: true}); }
export function makePackageCreateInputShipped(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageCreateInputShipped"), constraints: true}); }
export function makePackageCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageCreateRequest"), constraints: true}); }
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequest"), constraints: true}); }
export function makePackageTransitionRequestMarkDelivered(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkDelivered"), constraints: true}); }
export function makePackageTransitionRequestMarkDeliveryAttempted(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkDeliveryAttempted"), constraints: true}); }
export function makePackageTransitionRequestMarkException(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkException"), constraints: true}); }
export function makePackageTransitionRequestMarkInTransit(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkInTransit"), constraints: true}); }
export function makePackageTransitionRequestMarkOutForDelivery(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkOutForDelivery"), constraints: true}); }
export function makePackageTransitionRequestMarkPacked(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkPacked"), constraints: true}); }
export function makePackageTransitionRequestMarkReturned(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkReturned"), constraints: true}); }
export function makePackageTransitionRequestMarkShipped(value) { return modelFromCodec(value, {..._sdkModelCodec("PackageTransitionRequestMarkShipped"), constraints: true}); }
export function makePartnerAppCredentialJWKSURLRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppCredentialJWKSURLRequest"), constraints: true}); }
export function makePartnerAppCredentialPublicKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppCredentialPublicKeyRequest"), constraints: true}); }
export function makePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppCredentialWorkloadIdentityRequest"), constraints: true}); }
export function makePartnerAppPermissionManifestEntryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppPermissionManifestEntryRequest"), constraints: true}); }
export function makePauseSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PauseSubscriptionRequest"), constraints: true}); }
export function makePaymentLimitSettingsPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLimitSettingsPatch"), constraints: true}); }
export function makePaymentLinkCustomFieldPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomFieldPatchRequest"), constraints: true}); }
export function makePaymentLinkCustomFieldRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomFieldRequest"), constraints: true}); }
export function makePaymentLinkCustomTextConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomTextConfig"), constraints: true}); }
export function makePaymentLinkCustomTextPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkCustomTextPatchRequest"), constraints: true}); }
export function makePaymentLinkEventConfigPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkEventConfigPatchRequest"), constraints: true}); }
export function makePaymentLinkEventConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkEventConfigRequest"), constraints: true}); }
export function makePaymentLinkLegalConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLegalConfig"), constraints: true}); }
export function makePaymentLinkLegalPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLegalPatchRequest"), constraints: true}); }
export function makePaymentLinkLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemInputBundle"), constraints: true}); }
export function makePaymentLinkLineItemInputCustomFixed(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemInputCustomFixed"), constraints: true}); }
export function makePaymentLinkLineItemInputCustomVariable(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemInputCustomVariable"), constraints: true}); }
export function makePaymentLinkLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemInputVariant"), constraints: true}); }
export function makePaymentLinkLineItemPatchInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemPatchInputBundle"), constraints: true}); }
export function makePaymentLinkLineItemPatchInputCustomFixed(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemPatchInputCustomFixed"), constraints: true}); }
export function makePaymentLinkLineItemPatchInputCustomVariable(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemPatchInputCustomVariable"), constraints: true}); }
export function makePaymentLinkLineItemPatchInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemPatchInputVariant"), constraints: true}); }
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemPatchRequest"), constraints: true}); }
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemRequest"), constraints: true}); }
export function makePaymentLinkPaymentConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkPaymentConfig"), constraints: true}); }
export function makePaymentLinkPaymentPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkPaymentPatchRequest"), constraints: true}); }
export function makePaymentLinkRedirectsPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkRedirectsPatchRequest"), constraints: true}); }
export function makePaymentLinkThemeConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkThemeConfig"), constraints: true}); }
export function makePaymentLinkThemePatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkThemePatchRequest"), constraints: true}); }
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredential"), constraints: true}); }
export function makePaymentSourceCredentialPaymentMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredentialPaymentMethod"), constraints: true}); }
export function makePaymentSourceCredentialStripeConfirmationToken(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredentialStripeConfirmationToken"), constraints: true}); }
export function makePaymentSourceCredentialToken(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredentialToken"), constraints: true}); }
export function makePayOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequest"), constraints: true}); }
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestConfirmPaymentIntents"), constraints: true}); }
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestPay"), constraints: true}); }
export function makePayOrderRequestResume(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestResume"), constraints: true}); }
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestSetup"), constraints: true}); }
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProcessExistingReturnLineItemRequest"), constraints: true}); }
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProcessExistingReturnRequest"), constraints: true}); }
export function makeProductVariantRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantRequest"), constraints: true}); }
export function makeProductVariantSelectedOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantSelectedOptionRequest"), constraints: true}); }
export function makePromotionAmountOffMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionAmountOffMethodRequest"), constraints: true}); }
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionApplicationMethodPatch"), constraints: true}); }
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionApplicationMethodRequest"), constraints: true}); }
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionBuyXGetYMethodRequest"), constraints: true}); }
export function makePromotionCombinesWithPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCombinesWithPatch"), constraints: true}); }
export function makePromotionCombinesWithRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCombinesWithRequest"), constraints: true}); }
export function makePromotionExclusivityPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionExclusivityPatch"), constraints: true}); }
export function makePromotionExclusivityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionExclusivityRequest"), constraints: true}); }
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionPercentOffMethodRequest"), constraints: true}); }
export function makePromotionRecurrence(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrence"), constraints: true}); }
export function makePromotionRecurrenceForever(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrenceForever"), constraints: true}); }
export function makePromotionRecurrenceOnce(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrenceOnce"), constraints: true}); }
export function makePromotionRecurrenceRepeating(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrenceRepeating"), constraints: true}); }
export function makePromotionRefInputPromotionCode(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRefInputPromotionCode"), constraints: true}); }
export function makePromotionRefInputPromotionID(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRefInputPromotionID"), constraints: true}); }
export function makePromotionRefRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRefRequest"), constraints: true}); }
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleGroupRequest"), constraints: true}); }
export function makePromotionRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleRequest"), constraints: true}); }
export function makePromotionRuleValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleValueRequest"), constraints: true}); }
export function makePromotionSchedulePatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionSchedulePatch"), constraints: true}); }
export function makePromotionScheduleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionScheduleRequest"), constraints: true}); }
export function makePromotionSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionSettingsRequest"), constraints: true}); }
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PublishReturnPolicyRevisionRequest"), constraints: true}); }
export function makeReceiptSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReceiptSettingsRequest"), constraints: true}); }
export function makeRefreshCustomerSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RefreshCustomerSessionRequest"), constraints: true}); }
export function makeRefundAdjustmentAudit(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundAdjustmentAudit"), constraints: true}); }
export function makeRefundAdjustmentReasonRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundAdjustmentReasonRequest"), constraints: true}); }
export function makeRefundCharge(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundCharge"), constraints: true}); }
export function makeRefundDestinations(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundDestinations"), constraints: true}); }
export function makeRefundLineItem(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItem"), constraints: true}); }
export function makeRefundLineItemAdjustmentIn(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAdjustmentIn"), constraints: true}); }
export function makeRefundLineItemAdjustmentRefundIn(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundLineItemAdjustmentRefundIn"), constraints: true}); }
export function makeRefundTaxBreakdownRefundIn(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTaxBreakdownRefundIn"), constraints: true}); }
export function makeRefundTenderAllocationInputGiftCardRedemption(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTenderAllocationInputGiftCardRedemption"), constraints: true}); }
export function makeRefundTenderAllocationInputPaymentIntent(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTenderAllocationInputPaymentIntent"), constraints: true}); }
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RefundTenderAllocationRequest"), constraints: true}); }
export function makeReleaseReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReleaseReturnResolutionRequest"), constraints: true}); }
export function makeRemoveDiscountsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RemoveDiscountsRequest"), constraints: true}); }
export function makeRenewSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RenewSubscriptionRequest"), constraints: true}); }
export function makeReopenReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReopenReturnRequest"), constraints: true}); }
export function makeRepriceDiscountsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RepriceDiscountsRequest"), constraints: true}); }
export function makeResendWebhookDeliveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResendWebhookDeliveryRequest"), constraints: true}); }
export function makeResetDemoSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResetDemoSessionRequest"), constraints: true}); }
export function makeResolveCustomerDeletionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolveCustomerDeletionRequest"), constraints: true}); }
export function makeResolveOrderInventoryExceptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolveOrderInventoryExceptionRequest"), constraints: true}); }
export function makeResolvePaymentLinkLineItemModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkLineItemModifierRequest"), constraints: true}); }
export function makeResolvePaymentLinkLineItemModifiers(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkLineItemModifiers"), constraints: true}); }
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkRequest"), constraints: true}); }
export function makeResolvePaymentLinkTextModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResolvePaymentLinkTextModifierRequest"), constraints: true}); }
export function makeResourceVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ResourceVersionRequest"), constraints: true}); }
export function makeRetryReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnDispositionRequest"), constraints: true}); }
export function makeRetryReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnResolutionRequest"), constraints: true}); }
export function makeReturnEligibilityLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilityLineItemRequest"), constraints: true}); }
export function makeReturnEligibilitySelection(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilitySelection"), constraints: true}); }
export function makeReturnEligibilitySelectionAllRemainingFulfilled(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilitySelectionAllRemainingFulfilled"), constraints: true}); }
export function makeReturnEligibilitySelectionLineItems(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilitySelectionLineItems"), constraints: true}); }
export function makeReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnInspectionLineItemRequest"), constraints: true}); }
export function makeReturnLineDecision(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineDecision"), constraints: true}); }
export function makeReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineItemRequest"), constraints: true}); }
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevisionInputIneligible"), constraints: true}); }
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevisionInputReturnable"), constraints: true}); }
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevisionRequest"), constraints: true}); }
export function makeReturnPolicyScope(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyScope"), constraints: true}); }
export function makeReturnPolicyScopeAll(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyScopeAll"), constraints: true}); }
export function makeReturnPolicyScopeInclude(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyScopeInclude"), constraints: true}); }
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessDecision"), constraints: true}); }
export function makeReturnProcessDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessDispositionRequest"), constraints: true}); }
export function makeReturnProcessInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessInspectionRequest"), constraints: true}); }
export function makeReturnProcessReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessReceiptRequest"), constraints: true}); }
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessResolutionRequest"), constraints: true}); }
export function makeReturnReceiptLineItemInputExcess(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceiptLineItemInputExcess"), constraints: true}); }
export function makeReturnReceiptLineItemInputMatched(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceiptLineItemInputMatched"), constraints: true}); }
export function makeReturnReceiptLineItemInputUnverified(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceiptLineItemInputUnverified"), constraints: true}); }
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceiptLineItemRequest"), constraints: true}); }
export function makeReturnReplacementLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItemInputBundle"), constraints: true}); }
export function makeReturnReplacementLineItemInputCustom(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItemInputCustom"), constraints: true}); }
export function makeReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItemInputVariant"), constraints: true}); }
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItemRequest"), constraints: true}); }
export function makeReturnResolutionAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionAdjustmentRequest"), constraints: true}); }
export function makeReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionLineItemRequest"), constraints: true}); }
export function makeReturnRestockingFeePolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnRestockingFeePolicy"), constraints: true}); }
export function makeReturnShipmentLineItemAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShipmentLineItemAllocationRequest"), constraints: true}); }
export function makeReturnShippingPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShippingPolicy"), constraints: true}); }
export function makeReturnSourceSystemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnSourceSystemRequest"), constraints: true}); }
export function makeReturnUnverifiedItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnUnverifiedItem"), constraints: true}); }
export function makeReturnWindow(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnWindow"), constraints: true}); }
export function makeReverseInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReverseInvoiceManualPaymentRequest"), constraints: true}); }
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyRequest"), constraints: true}); }
export function makeRevokeDeliveryDependencyTarget(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyTarget"), constraints: true}); }
export function makeRevokeDeliveryDependencyTargetDeliveryMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyTargetDeliveryMethod"), constraints: true}); }
export function makeRevokeDeliveryDependencyTargetDeliveryMethodRevision(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyTargetDeliveryMethodRevision"), constraints: true}); }
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallback(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyTargetDeliveryRateCallback"), constraints: true}); }
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision"), constraints: true}); }
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey"), constraints: true}); }
export function makeRevokeDeliveryDependencyTargetLocationGeography(value) { return modelFromCodec(value, {..._sdkModelCodec("RevokeDeliveryDependencyTargetLocationGeography"), constraints: true}); }
export function makeRiskPredicateNode(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNode"), constraints: true}); }
export function makeRiskPredicateNodeAll(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeAll"), constraints: true}); }
export function makeRiskPredicateNodeAny(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeAny"), constraints: true}); }
export function makeRiskPredicateNodeComparison(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeComparison"), constraints: true}); }
export function makeRiskPredicateNodeIn(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeIn"), constraints: true}); }
export function makeRiskPredicateNodeInList(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeInList"), constraints: true}); }
export function makeRiskPredicateNodeIsMissing(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeIsMissing"), constraints: true}); }
export function makeRiskPredicateNodeMoneyComparison(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeMoneyComparison"), constraints: true}); }
export function makeRiskPredicateNodeNot(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeNot"), constraints: true}); }
export function makeRotateGiftCardCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotateGiftCardCodeRequest"), constraints: true}); }
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotatePartnerAppSecretRequest"), constraints: true}); }
export function makeRotateWebhookSecretRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotateWebhookSecretRequest"), constraints: true}); }
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequest"), constraints: true}); }
export function makeSaveMeGiftCardRequestCode(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequestCode"), constraints: true}); }
export function makeSaveMeGiftCardRequestRecipientAccess(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequestRecipientAccess"), constraints: true}); }
export function makeSaveMePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMePaymentMethodRequest"), constraints: true}); }
export function makeSavePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SavePaymentMethodRequest"), constraints: true}); }
export function makeSellerTaxAttestationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SellerTaxAttestationRequest"), constraints: true}); }
export function makeSendOrderReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SendOrderReceiptRequest"), constraints: true}); }
export function makeSendPaymentIntentReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SendPaymentIntentReceiptRequest"), constraints: true}); }
export function makeSignedMoneyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SignedMoneyRequest"), constraints: true}); }
export function makeSimulateDisputeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SimulateDisputeRequest"), constraints: true}); }
export function makeSinglePackageCreateInputCreated(value) { return modelFromCodec(value, {..._sdkModelCodec("SinglePackageCreateInputCreated"), constraints: true}); }
export function makeSinglePackageCreateInputShipped(value) { return modelFromCodec(value, {..._sdkModelCodec("SinglePackageCreateInputShipped"), constraints: true}); }
export function makeSinglePackageCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SinglePackageCreateRequest"), constraints: true}); }
export function makeSkipMeSubscriptionCycleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SkipMeSubscriptionCycleRequest"), constraints: true}); }
export function makeSkipSubscriptionCycleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SkipSubscriptionCycleRequest"), constraints: true}); }
export function makeSubscribedLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscribedLineRequest"), constraints: true}); }
export function makeSubscriptionBillingScheduleInputExternal(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingScheduleInputExternal"), constraints: true}); }
export function makeSubscriptionBillingScheduleInputFlint(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingScheduleInputFlint"), constraints: true}); }
export function makeSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingScheduleRequest"), constraints: true}); }
export function makeSubscriptionBillingScheduleUpdateInputExternal(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingScheduleUpdateInputExternal"), constraints: true}); }
export function makeSubscriptionBillingScheduleUpdateInputFlint(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingScheduleUpdateInputFlint"), constraints: true}); }
export function makeSubscriptionBillingScheduleUpdateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingScheduleUpdateRequest"), constraints: true}); }
export function makeSubscriptionBillingStartInputImmediate(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingStartInputImmediate"), constraints: true}); }
export function makeSubscriptionBillingStartInputImported(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingStartInputImported"), constraints: true}); }
export function makeSubscriptionBillingStartInputScheduled(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingStartInputScheduled"), constraints: true}); }
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionBillingStartRequest"), constraints: true}); }
export function makeSubscriptionDeliveryDestinationInputAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionDeliveryDestinationInputAddress"), constraints: true}); }
export function makeSubscriptionDeliveryDestinationInputCustomerAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionDeliveryDestinationInputCustomerAddress"), constraints: true}); }
export function makeSubscriptionDeliveryDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionDeliveryDestinationRequest"), constraints: true}); }
export function makeSubscriptionDeliveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionDeliveryRequest"), constraints: true}); }
export function makeSubscriptionIntervalOption(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionIntervalOption"), constraints: true}); }
export function makeSubscriptionOfferLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionOfferLineItemRequest"), constraints: true}); }
export function makeSubscriptionOfferTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionOfferTermsRequest"), constraints: true}); }
export function makeSubscriptionPlanChangeLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanChangeLineItemRequest"), constraints: true}); }
export function makeSubscriptionPlanLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemInputBundle"), constraints: true}); }
export function makeSubscriptionPlanLineItemInputCustom(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemInputCustom"), constraints: true}); }
export function makeSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemInputVariant"), constraints: true}); }
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemRequest"), constraints: true}); }
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanTermsRequest"), constraints: true}); }
export function makeSubscriptionServiceLocationInputAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationInputAddress"), constraints: true}); }
export function makeSubscriptionServiceLocationInputCustomerAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationInputCustomerAddress"), constraints: true}); }
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationRequest"), constraints: true}); }
export function makeSubscriptionSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionSettingsRequest"), constraints: true}); }
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionTermsRequest"), constraints: true}); }
export function makeTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationRequest"), constraints: true}); }
export function makeTaxCalculationRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationRequestModel"), constraints: true}); }
export function makeTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxComponentRequest"), constraints: true}); }
export function makeTaxComponentRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxComponentRequestModel"), constraints: true}); }
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityPatch"), constraints: true}); }
export function makeTaxIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityRequest"), constraints: true}); }
export function makeTaxJurisdiction(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxJurisdiction"), constraints: true}); }
export function makeTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxJurisdictionRequest"), constraints: true}); }
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxSettingsRequest"), constraints: true}); }
export function makeTextModifierConfigPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierConfigPatchRequest"), constraints: true}); }
export function makeTextModifierConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierConfigRequest"), constraints: true}); }
export function makeTextModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierRequest"), constraints: true}); }
export function makeThemeConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ThemeConfigRequest"), constraints: true}); }
export function makeTippingSettingsPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("TippingSettingsPatch"), constraints: true}); }
export function makeTransitionGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TransitionGiftCardRequest"), constraints: true}); }
export function makeTransitionGiftCardRequestFreeze(value) { return modelFromCodec(value, {..._sdkModelCodec("TransitionGiftCardRequestFreeze"), constraints: true}); }
export function makeTransitionGiftCardRequestWithoutReason(value) { return modelFromCodec(value, {..._sdkModelCodec("TransitionGiftCardRequestWithoutReason"), constraints: true}); }
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateAPIKeyRequest"), constraints: true}); }
export function makeUpdateBundleComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateBundleComponentRequest"), constraints: true}); }
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateBundleRequest"), constraints: true}); }
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
export function makeUpdateInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInventoryReservationRequest"), constraints: true}); }
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInventoryTransferRequest"), constraints: true}); }
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInvoicePaymentTermRequest"), constraints: true}); }
export function makeUpdateInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateInvoiceRequest"), constraints: true}); }
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateLineItemRequest"), constraints: true}); }
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateLocationRequest"), constraints: true}); }
export function makeUpdateMerchantRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateMerchantRequest"), constraints: true}); }
export function makeUpdateMeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateMeRequest"), constraints: true}); }
export function makeUpdateMeSubscriptionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateMeSubscriptionLineItemRequest"), constraints: true}); }
export function makeUpdateMeSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateMeSubscriptionRequest"), constraints: true}); }
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateModifierGroupRequest"), constraints: true}); }
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateModifierSetRequest"), constraints: true}); }
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateOrderChargeRequest"), constraints: true}); }
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateOrderRequest"), constraints: true}); }
export function makeUpdateOrganizationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateOrganizationRequest"), constraints: true}); }
export function makeUpdatePackageItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageItemRequest"), constraints: true}); }
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageRequest"), constraints: true}); }
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
export function makeUpdateReturnPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnPolicyRequest"), constraints: true}); }
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnReasonRequest"), constraints: true}); }
export function makeUpdateReturnReplacementLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnReplacementLineItemInputBundle"), constraints: true}); }
export function makeUpdateReturnReplacementLineItemInputCustom(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnReplacementLineItemInputCustom"), constraints: true}); }
export function makeUpdateReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnReplacementLineItemInputVariant"), constraints: true}); }
export function makeUpdateReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnReplacementLineItemRequest"), constraints: true}); }
export function makeUpdateReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnRequest"), constraints: true}); }
export function makeUpdateReturnResolutionAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnResolutionAdjustmentRequest"), constraints: true}); }
export function makeUpdateReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnResolutionLineItemRequest"), constraints: true}); }
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateReturnResolutionRequest"), constraints: true}); }
export function makeUpdateRiskListRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateRiskListRequest"), constraints: true}); }
export function makeUpdateRiskRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateRiskRuleRequest"), constraints: true}); }
export function makeUpdateServiceFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateServiceFulfillmentDetails"), constraints: true}); }
export function makeUpdateSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSettingsRequest"), constraints: true}); }
export function makeUpdateShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateShipmentRequest"), constraints: true}); }
export function makeUpdateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionLineItemRequest"), constraints: true}); }
export function makeUpdateSubscriptionOfferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionOfferRequest"), constraints: true}); }
export function makeUpdateSubscriptionPlanLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanLineItemInputBundle"), constraints: true}); }
export function makeUpdateSubscriptionPlanLineItemInputCustom(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanLineItemInputCustom"), constraints: true}); }
export function makeUpdateSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanLineItemInputVariant"), constraints: true}); }
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanLineItemRequest"), constraints: true}); }
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanRequest"), constraints: true}); }
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionRequest"), constraints: true}); }
export function makeUpdateTaxRegistrationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateTaxRegistrationRequest"), constraints: true}); }
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateWebhookEndpointRequest"), constraints: true}); }
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateWorkloadIdentityRequest"), constraints: true}); }
export function makeVerifyReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VerifyReturnReceiptLineItemRequest"), constraints: true}); }
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidPackageRequest"), constraints: true}); }
export function makeVoidShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidShipmentRequest"), constraints: true}); }
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveInvoiceLateFeeRequest"), constraints: true}); }
export function makeWaiveReturnLineInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveReturnLineInspectionRequest"), constraints: true}); }
export function makeWebhookSigningMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookSigningMethod"), constraints: true}); }
export function makeWeight(value) { return modelFromCodec(value, {..._sdkModelCodec("Weight"), constraints: true}); }
export function makeWorkloadIdentityClaimConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WorkloadIdentityClaimConditionRequest"), constraints: true}); }
