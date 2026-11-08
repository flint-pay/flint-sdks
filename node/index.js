import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from './response.js';
import { requestInput as _sdkRequestInput } from './request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from './runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from './runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from './runtime.js';
import { resource, webhook, modelCodec as _sdkModelCodec } from './descriptors/root.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
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
const r28 = () => resource("emailPreferences");
const r29 = () => resource("feedbackReports");
const r30 = () => resource("files");
const r31 = () => resource("fraudWarnings");
const r32 = () => resource("fulfillmentEvents");
const r33 = () => resource("fulfillmentNotifications");
const r34 = () => resource("fulfillments");
const r35 = () => resource("giftCardFundingDispositions");
const r36 = () => resource("giftCardLoads");
const r37 = () => resource("giftCardNotifications");
const r38 = () => resource("giftCardRedemptions");
const r39 = () => resource("giftCardTransactions");
const r40 = () => resource("giftCards");
const r41 = () => resource("inventoryAdjustments");
const r42 = () => resource("inventoryAllocationPolicies");
const r43 = () => resource("inventoryCounts");
const r44 = () => resource("inventoryItems");
const r45 = () => resource("inventoryLevels");
const r46 = () => resource("inventoryMovements");
const r47 = () => resource("inventoryReceipts");
const r48 = () => resource("inventoryReservations");
const r49 = () => resource("inventoryTransfers");
const r50 = () => resource("invoicePaymentTerms");
const r51 = () => resource("invoices");
const r52 = () => resource("locations");
const r53 = () => resource("me");
const r54 = () => resource("merchant");
const r55 = () => resource("merchantAccountSessions");
const r56 = () => resource("merchantBillingBalances");
const r57 = () => resource("merchantBillingEntries");
const r58 = () => resource("merchantBillingInvoices");
const r59 = () => resource("modifierGroups");
const r60 = () => resource("modifierSets");
const r61 = () => resource("oauth");
const r62 = () => resource("onboarding");
const r63 = () => resource("openapi");
const r64 = () => resource("orderEditPreviews");
const r65 = () => resource("orders");
const r66 = () => resource("packages");
const r67 = () => resource("partnerAppInstalls");
const r68 = () => resource("partnerApps");
const r69 = () => resource("paymentIntents");
const r70 = () => resource("paymentLinks");
const r71 = () => resource("paymentMethodDomains");
const r72 = () => resource("paymentMethods");
const r73 = () => resource("paymentReviews");
const r74 = () => resource("payoutDestinations");
const r75 = () => resource("payoutSettings");
const r76 = () => resource("payouts");
const r77 = () => resource("priceLists");
const r78 = () => resource("products");
const r79 = () => resource("promotionCodes");
const r80 = () => resource("promotions");
const r81 = () => resource("refunds");
const r82 = () => resource("reportDownloads");
const r83 = () => resource("reports");
const r84 = () => resource("resourceTimelines");
const r85 = () => resource("returnDispositions");
const r86 = () => resource("returnInspections");
const r87 = () => resource("returnPolicies");
const r88 = () => resource("returnPreviews");
const r89 = () => resource("returnReasons");
const r90 = () => resource("returnReceipts");
const r91 = () => resource("returnResolutions");
const r92 = () => resource("returns");
const r93 = () => resource("riskLists");
const r94 = () => resource("riskPreviews");
const r95 = () => resource("riskRules");
const r96 = () => resource("sandboxes");
const r97 = () => resource("settings");
const r98 = () => resource("shipments");
const r99 = () => resource("subscriptionDeliveryMigrations");
const r100 = () => resource("subscriptionOffers");
const r101 = () => resource("subscriptionPlans");
const r102 = () => resource("subscriptionPreviews");
const r103 = () => resource("subscriptions");
const r104 = () => resource("taxCalculationCallbacks");
const r105 = () => resource("taxConnection");
const r106 = () => resource("testClocks");
const r107 = () => resource("tickets");
const r108 = () => resource("webhookDeliveries");
const r109 = () => resource("webhookEndpoints");
const r110 = () => resource("webhookEventTypes");
const r111 = () => resource("webhookEvents");
const r112 = () => resource("workloadIdentities");
import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';

const _sdkDescriptors = new DescriptorSource(settings, {["getAnalyticsOverview"]:r0,["getPaymentVolumeTimeseries"]:r0,["getSubscriptionAnalytics"]:r0,["createAPIKey"]:r1,["getAPIKey"]:r1,["listAPIKeys"]:r1,["revokeAPIKey"]:r1,["updateAPIKey"]:r1,["getAPIRequestLog"]:r2,["listAPIRequestLogs"]:r2,["getAuthContext"]:r3,["getBalanceTransaction"]:r4,["listBalanceTransactions"]:r4,["listBalances"]:r5,["createBundle"]:r6,["deleteBundle"]:r6,["getBundle"]:r6,["listBundleComponents"]:r6,["listBundles"]:r6,["updateBundle"]:r6,["createCategory"]:r7,["deleteCategory"]:r7,["getCategory"]:r7,["listCategories"]:r7,["updateCategory"]:r7,["closeCheckoutSession"]:r8,["confirmCheckoutSessionCustomerVerification"]:r8,["createCheckoutSession"]:r8,["createCheckoutSessionCustomerVerification"]:r8,["createCheckoutSessionDeliveryQuote"]:r8,["createCheckoutSessionDeliverySelection"]:r8,["deleteCheckoutSessionCurrentDeliverySelection"]:r8,["getCheckoutSession"]:r8,["getCheckoutSessionCurrentDeliverySelection"]:r8,["getCheckoutSessionDeliveryQuote"]:r8,["getCheckoutSessionDeliverySelection"]:r8,["listCheckoutSessionDeliverySelections"]:r8,["listCheckoutSessions"]:r8,["updateCheckoutSession"]:r8,["createCreditNote"]:r9,["createCreditNoteAllocation"]:r9,["getCreditNote"]:r9,["getCreditNoteAllocation"]:r9,["getCreditNotePDF"]:r9,["issueCreditNote"]:r9,["listCreditNoteAllocations"]:r9,["listCreditNotes"]:r9,["reverseCreditNoteAllocation"]:r9,["updateCreditNote"]:r9,["voidCreditNote"]:r9,["createCustomDomain"]:r10,["deleteCustomDomain"]:r10,["getCustomDomain"]:r10,["listCustomDomains"]:r10,["validateCustomDomain"]:r10,["createCustomerDeletionRequest"]:r11,["getCustomerDeletionRequest"]:r11,["listCustomerDeletionRequests"]:r11,["resolveCustomerDeletionRequest"]:r11,["createCustomerSession"]:r12,["refreshCustomerSession"]:r12,["revokeCustomerSession"]:r12,["confirmCustomerVerification"]:r13,["createCustomerVerification"]:r13,["createCustomer"]:r14,["createCustomerAccessLink"]:r14,["createCustomerAddress"]:r14,["createCustomerTaxExemption"]:r14,["deleteCustomerAddress"]:r14,["deleteCustomerTaxExemption"]:r14,["getCustomer"]:r14,["getCustomerAddress"]:r14,["getCustomerEmailPreferences"]:r14,["getCustomerTaxExemption"]:r14,["linkCustomerGuestPurchases"]:r14,["listCustomerAddresses"]:r14,["listCustomers"]:r14,["listCustomerTaxExemptions"]:r14,["revokeCustomerSessions"]:r14,["updateCustomer"]:r14,["updateCustomerAddress"]:r14,["updateCustomerTaxExemption"]:r14,["createDeliveryLocationSet"]:r15,["deleteDeliveryLocationSet"]:r15,["getDeliveryLocationSet"]:r15,["listDeliveryLocationSets"]:r15,["updateDeliveryLocationSet"]:r15,["createDeliveryMethod"]:r16,["deleteDeliveryMethod"]:r16,["getDeliveryMethod"]:r16,["listDeliveryMethods"]:r16,["updateDeliveryMethod"]:r16,["createDeliveryPreview"]:r17,["assignToUnconfiguredDeliveryProfile"]:r18,["createDeliveryProfile"]:r18,["deleteDeliveryProfile"]:r18,["getDeliveryProfile"]:r18,["listDeliveryProfiles"]:r18,["updateDeliveryProfile"]:r18,["getDeliveryQuote"]:r19,["listDeliveryQuotes"]:r19,["checkDeliveryRateCallbackConnection"]:r20,["createDeliveryRateCallback"]:r20,["createDeliveryRateCallbackTestDelivery"]:r20,["deleteDeliveryRateCallback"]:r20,["getDeliveryRateCallback"]:r20,["listDeliveryRateCallbacks"]:r20,["rotateDeliveryRateCallbackSigningKey"]:r20,["updateDeliveryRateCallback"]:r20,["createDeliveryRevocation"]:r21,["getDeliveryRevocation"]:r21,["listDeliveryRevocations"]:r21,["createDeliveryZone"]:r22,["deleteDeliveryZone"]:r22,["getDeliveryZone"]:r22,["listDeliveryZones"]:r22,["updateDeliveryZone"]:r22,["createDemoSession"]:r23,["resetDemoSession"]:r23,["createDevice"]:r24,["deleteDevice"]:r24,["getDevice"]:r24,["listDevices"]:r24,["updateDevice"]:r24,["createDiscountPreview"]:r25,["acceptDispute"]:r26,["createDisputeResponseSession"]:r26,["getDispute"]:r26,["listDisputes"]:r26,["simulateDispute"]:r26,["lookupEmailPreferenceLink"]:r27,["unsubscribeEmailPreferenceLink"]:r27,["lookupEmailPreferences"]:r28,["createFeedbackReport"]:r29,["getFeedbackReport"]:r29,["listFeedbackReports"]:r29,["completeFile"]:r30,["createFile"]:r30,["getFile"]:r30,["getFraudWarning"]:r31,["listFraudWarnings"]:r31,["getFulfillmentEvent"]:r32,["listFulfillmentEvents"]:r32,["getFulfillmentNotification"]:r33,["listFulfillmentNotifications"]:r33,["acceptFulfillment"]:r34,["cancelFulfillment"]:r34,["completeFulfillment"]:r34,["createFulfillmentEvent"]:r34,["createShipment"]:r34,["dispatchFulfillment"]:r34,["failFulfillment"]:r34,["getFulfillment"]:r34,["holdFulfillment"]:r34,["listFulfillments"]:r34,["markFulfillmentNoShow"]:r34,["markFulfillmentPacked"]:r34,["markFulfillmentPicked"]:r34,["markFulfillmentPreparing"]:r34,["markFulfillmentReady"]:r34,["releaseFulfillmentHold"]:r34,["scheduleFulfillment"]:r34,["startFulfillment"]:r34,["updateFulfillment"]:r34,["createGiftCardFundingDisposition"]:r35,["getGiftCardFundingDisposition"]:r35,["listGiftCardFundingDispositions"]:r35,["createGiftCardLoad"]:r36,["getGiftCardLoad"]:r36,["listGiftCardLoads"]:r36,["cancelGiftCardNotification"]:r37,["createGiftCardNotification"]:r37,["getGiftCardNotification"]:r37,["listGiftCardNotifications"]:r37,["cancelGiftCardRedemption"]:r38,["captureGiftCardRedemption"]:r38,["createGiftCardRedemption"]:r38,["getGiftCardRedemption"]:r38,["listGiftCardRedemptions"]:r38,["listGiftCardTransactions"]:r39,["adjustGiftCardBalance"]:r40,["cashOutGiftCard"]:r40,["closeGiftCard"]:r40,["createGiftCard"]:r40,["freezeGiftCard"]:r40,["getGiftCard"]:r40,["listGiftCards"]:r40,["lookupGiftCard"]:r40,["rotateGiftCardCode"]:r40,["unfreezeGiftCard"]:r40,["updateGiftCard"]:r40,["createInventoryAdjustment"]:r41,["getInventoryAdjustment"]:r41,["listInventoryAdjustments"]:r41,["createInventoryAllocationPolicy"]:r42,["deleteInventoryAllocationPolicy"]:r42,["getInventoryAllocationPolicy"]:r42,["getInventoryAllocationPolicyRevision"]:r42,["listInventoryAllocationPolicies"]:r42,["listInventoryAllocationPolicyRevisions"]:r42,["updateInventoryAllocationPolicy"]:r42,["applyInventoryCount"]:r43,["cancelInventoryCount"]:r43,["createInventoryCount"]:r43,["getInventoryCount"]:r43,["listInventoryCounts"]:r43,["updateInventoryCount"]:r43,["createInventoryItem"]:r44,["deleteInventoryItem"]:r44,["getInventoryItem"]:r44,["listInventoryItems"]:r44,["updateInventoryItem"]:r44,["getInventoryLevel"]:r45,["listInventoryLevels"]:r45,["updateInventoryLevel"]:r45,["getInventoryMovement"]:r46,["listInventoryMovements"]:r46,["createInventoryReceipt"]:r47,["getInventoryReceipt"]:r47,["listInventoryReceipts"]:r47,["commitInventoryReservation"]:r48,["consumeInventoryReservation"]:r48,["createInventoryReservation"]:r48,["getInventoryReservation"]:r48,["listInventoryReservations"]:r48,["releaseInventoryReservation"]:r48,["updateInventoryReservation"]:r48,["cancelInventoryTransfer"]:r49,["createInventoryTransfer"]:r49,["departInventoryTransfer"]:r49,["getInventoryTransfer"]:r49,["listInventoryTransfers"]:r49,["receiveInventoryTransfer"]:r49,["reportInventoryTransferLoss"]:r49,["returnInventoryTransferToOrigin"]:r49,["updateInventoryTransfer"]:r49,["createInvoicePaymentTerm"]:r50,["deleteInvoicePaymentTerm"]:r50,["getInvoicePaymentTerm"]:r50,["listInvoicePaymentTerms"]:r50,["updateInvoicePaymentTerm"]:r50,["cancelInvoicePaymentAttempt"]:r51,["collectInvoice"]:r51,["createInvoice"]:r51,["createInvoiceCheckoutSession"]:r51,["createInvoiceLateFee"]:r51,["createInvoiceManualPayment"]:r51,["getInvoice"]:r51,["getInvoiceManualPayment"]:r51,["getInvoicePaymentAttempt"]:r51,["getInvoicePDF"]:r51,["issueInvoice"]:r51,["listInvoiceActivities"]:r51,["listInvoiceDeliveryAttempts"]:r51,["listInvoiceManualPayments"]:r51,["listInvoicePaymentAttempts"]:r51,["listInvoices"]:r51,["markInvoiceUncollectible"]:r51,["regenerateInvoicePublicLink"]:r51,["reverseInvoiceManualPayment"]:r51,["sendInvoiceReminder"]:r51,["updateInvoice"]:r51,["voidInvoice"]:r51,["waiveInvoiceLateFee"]:r51,["createLocation"]:r52,["deleteLocation"]:r52,["getLocation"]:r52,["listLocations"]:r52,["updateLocation"]:r52,["cancelMeReturn"]:r53,["cancelMeSubscription"]:r53,["changeMeSubscriptionPlan"]:r53,["changeMeSubscriptionQuantity"]:r53,["confirmMeEmailChangeRequest"]:r53,["createMeAddress"]:r53,["createMeDeletionRequest"]:r53,["createMeEmailChangeRequest"]:r53,["createMeFlintWalletStoreSetup"]:r53,["createMeInvoiceCheckoutSession"]:r53,["createMePaymentMethod"]:r53,["createMeReturn"]:r53,["createMeReturnPreview"]:r53,["createMeReturnResolutionCheckoutSession"]:r53,["createMeSubscriptionPaymentRetry"]:r53,["createMeSubscriptionPreview"]:r53,["deleteMeAddress"]:r53,["deleteMePaymentMethod"]:r53,["getMe"]:r53,["getMeAddress"]:r53,["getMeCreditNote"]:r53,["getMeCreditNotePDF"]:r53,["getMeDeletionRequest"]:r53,["getMeEmailPreferences"]:r53,["getMeFulfillment"]:r53,["getMeGiftCard"]:r53,["getMeInvoice"]:r53,["getMeInvoicePDF"]:r53,["getMeOrder"]:r53,["getMeOrderReceiptPDF"]:r53,["getMePackage"]:r53,["getMePaymentIntent"]:r53,["getMePaymentMethod"]:r53,["getMeRefund"]:r53,["getMeReturn"]:r53,["getMeReturnResolution"]:r53,["getMeShipment"]:r53,["getMeSubscription"]:r53,["getMeSubscriptionPaymentRetry"]:r53,["listMeAddresses"]:r53,["listMeCreditNotes"]:r53,["listMeDeletionRequests"]:r53,["listMeFlintWalletCards"]:r53,["listMeFulfillmentEvents"]:r53,["listMeFulfillments"]:r53,["listMeGiftCards"]:r53,["listMeGiftCardTransactions"]:r53,["listMeInvoices"]:r53,["listMeOrderActivities"]:r53,["listMeOrders"]:r53,["listMePackages"]:r53,["listMePaymentIntents"]:r53,["listMePaymentMethods"]:r53,["listMeRefunds"]:r53,["listMeReturns"]:r53,["listMeShipments"]:r53,["listMeSubscriptionPaymentRetries"]:r53,["listMeSubscriptions"]:r53,["listMeTickets"]:r53,["pauseMeSubscription"]:r53,["removeMeGiftCard"]:r53,["renewMeSubscription"]:r53,["resumeMeSubscription"]:r53,["revokeMeSession"]:r53,["saveMeGiftCard"]:r53,["sendMeOrderReceipt"]:r53,["skipMeSubscriptionCycle"]:r53,["updateMe"]:r53,["updateMeAddress"]:r53,["updateMeEmailPreferences"]:r53,["updateMeSubscription"]:r53,["updateMeSubscriptionLineItem"]:r53,["getMerchant"]:r54,["updateMerchant"]:r54,["createMerchantAccountSession"]:r55,["refreshMerchantAccountSession"]:r55,["getMerchantBillingBalance"]:r56,["listMerchantBillingBalances"]:r56,["listMerchantBillingEntries"]:r57,["getMerchantBillingInvoice"]:r58,["listMerchantBillingInvoices"]:r58,["createModifierGroup"]:r59,["deleteModifierGroup"]:r59,["getModifierGroup"]:r59,["listModifierGroups"]:r59,["updateModifierGroup"]:r59,["createModifierSet"]:r60,["deleteModifierSet"]:r60,["getModifierSet"]:r60,["listModifierSets"]:r60,["updateModifierSet"]:r60,["authorizeCLIDevice"]:r61,["exchangeOAuthToken"]:r61,["listCLIContexts"]:r61,["previewPartnerInstallAuthorization"]:r61,["reauthorizeCLIDevice"]:r61,["revokeOAuthToken"]:r61,["advanceOnboarding"]:r62,["createOnboardingAPIKey"]:r62,["getOnboardingState"]:r62,["startOnboarding"]:r62,["verifyOnboardingEmail"]:r62,["getOpenAPISpec"]:r63,["createOrderEditPreview"]:r64,["applyOrderDiscount"]:r65,["applyOrderGiftCard"]:r65,["cancelOrderPaymentAttempt"]:r65,["closeOrder"]:r65,["createFulfillment"]:r65,["createOrder"]:r65,["createOrderAccessLink"]:r65,["createOrderCharge"]:r65,["createOrderEdit"]:r65,["createOrderLineItems"]:r65,["createOrderPaymentIntent"]:r65,["deleteOrderCharge"]:r65,["deleteOrderLineItem"]:r65,["getOrder"]:r65,["getOrderCurrentDeliverySelection"]:r65,["getOrderEdit"]:r65,["getOrderPaymentAttempt"]:r65,["getOrderReceiptPDF"]:r65,["listOrderActivities"]:r65,["listOrderEdits"]:r65,["listOrderPaymentAttempts"]:r65,["listOrders"]:r65,["payOrder"]:r65,["removeOrderDiscounts"]:r65,["removeOrderGiftCard"]:r65,["repriceOrderDiscounts"]:r65,["resolveOrderInventoryException"]:r65,["retryOrderEditRefund"]:r65,["sendOrderReceipt"]:r65,["updateOrder"]:r65,["updateOrderCharge"]:r65,["updateOrderLineItem"]:r65,["createPackageItem"]:r66,["deletePackageItem"]:r66,["getPackage"]:r66,["getPackageItem"]:r66,["listPackageItems"]:r66,["listPackages"]:r66,["markPackageDelivered"]:r66,["markPackageDeliveryAttempted"]:r66,["markPackageException"]:r66,["markPackageInTransit"]:r66,["markPackageOutForDelivery"]:r66,["markPackagePacked"]:r66,["markPackageReturned"]:r66,["markPackageShipped"]:r66,["updatePackage"]:r66,["updatePackageItem"]:r66,["voidPackage"]:r66,["listMerchantPartnerAppInstalls"]:r67,["revokeMerchantPartnerAppInstall"]:r67,["acceptPartnerAppPlatformTerms"]:r68,["createPartnerApp"]:r68,["createPartnerAppCredential"]:r68,["deletePartnerApp"]:r68,["deletePartnerAppCredential"]:r68,["getPartnerApp"]:r68,["getPartnerAppCredential"]:r68,["getPartnerAppInstall"]:r68,["listPartnerAppCredentials"]:r68,["listPartnerAppInstalls"]:r68,["listPartnerApps"]:r68,["revokePartnerAppEnvironmentGrant"]:r68,["revokePartnerAppInstall"]:r68,["rotatePartnerAppSecret"]:r68,["updatePartnerApp"]:r68,["cancelPaymentIntent"]:r69,["capturePaymentIntent"]:r69,["confirmPaymentIntent"]:r69,["createPaymentIntent"]:r69,["getPaymentIntent"]:r69,["listPaymentIntentActivities"]:r69,["listPaymentIntents"]:r69,["sendPaymentIntentReceipt"]:r69,["updatePaymentIntent"]:r69,["createPaymentLink"]:r70,["getPaymentLink"]:r70,["getPaymentLinkPublic"]:r70,["listPaymentLinks"]:r70,["resolvePaymentLink"]:r70,["updatePaymentLink"]:r70,["createPaymentMethodDomain"]:r71,["getPaymentMethodDomain"]:r71,["listPaymentMethodDomains"]:r71,["updatePaymentMethodDomain"]:r71,["createPaymentMethod"]:r72,["deletePaymentMethod"]:r72,["getPaymentMethod"]:r72,["listPaymentMethods"]:r72,["approvePaymentReview"]:r73,["declinePaymentReview"]:r73,["getPaymentReview"]:r73,["listPaymentReviews"]:r73,["deletePayoutDestination"]:r74,["getPayoutDestination"]:r74,["listPayoutDestinations"]:r74,["updatePayoutDestination"]:r74,["getPayoutSettings"]:r75,["updatePayoutSettings"]:r75,["cancelPayout"]:r76,["createPayout"]:r76,["getPayout"]:r76,["listPayouts"]:r76,["createPriceList"]:r77,["createPriceListPrices"]:r77,["deletePriceList"]:r77,["deletePriceListPrice"]:r77,["getPriceList"]:r77,["getPriceListPrice"]:r77,["listPriceListPrices"]:r77,["listPriceLists"]:r77,["updatePriceList"]:r77,["updatePriceListPrice"]:r77,["createProduct"]:r78,["createProductVariant"]:r78,["deleteProduct"]:r78,["deleteProductVariant"]:r78,["getProduct"]:r78,["getProductOption"]:r78,["getProductVariant"]:r78,["listProductOptions"]:r78,["listProducts"]:r78,["listProductVariants"]:r78,["updateProduct"]:r78,["updateProductVariant"]:r78,["createPromotionCode"]:r79,["deletePromotionCode"]:r79,["getPromotionCode"]:r79,["listPromotionCodes"]:r79,["updatePromotionCode"]:r79,["createPromotion"]:r80,["deletePromotion"]:r80,["getPromotion"]:r80,["listPromotions"]:r80,["updatePromotion"]:r80,["createRefund"]:r81,["getRefund"]:r81,["listRefunds"]:r81,["updateRefund"]:r81,["getReportDownload"]:r82,["createReport"]:r83,["getReport"]:r83,["listReports"]:r83,["getResourceTimeline"]:r84,["cancelReturnDisposition"]:r85,["getReturnDisposition"]:r85,["listReturnDispositions"]:r85,["retryReturnDisposition"]:r85,["decideReturnInspectionLineItem"]:r86,["getReturnInspection"]:r86,["listReturnInspections"]:r86,["createReturnPolicy"]:r87,["createReturnPolicyRevision"]:r87,["deleteReturnPolicy"]:r87,["getReturnPolicy"]:r87,["getReturnPolicyRevision"]:r87,["listReturnPolicies"]:r87,["listReturnPolicyRevisions"]:r87,["updateReturnPolicy"]:r87,["createReturnPreview"]:r88,["createReturnReason"]:r89,["deleteReturnReason"]:r89,["getReturnReason"]:r89,["listReturnReasons"]:r89,["updateReturnReason"]:r89,["getReturnReceipt"]:r90,["listReturnReceipts"]:r90,["verifyReturnReceiptLineItem"]:r90,["cancelReturnResolution"]:r91,["confirmReturnResolution"]:r91,["createReturnResolutionCheckoutSession"]:r91,["getReturnResolution"]:r91,["listReturnResolutions"]:r91,["releaseReturnResolution"]:r91,["retryReturnResolution"]:r91,["updateReturnResolution"]:r91,["cancelReturn"]:r92,["cancelReturnLineItem"]:r92,["completeReturn"]:r92,["createReturn"]:r92,["createReturnAccessLink"]:r92,["createReturnDisposition"]:r92,["createReturnInspection"]:r92,["createReturnLineItem"]:r92,["createReturnReceipt"]:r92,["createReturnResolution"]:r92,["decideReturn"]:r92,["deleteReturnLineItem"]:r92,["getReturn"]:r92,["getReturnLineItem"]:r92,["listReturnActivities"]:r92,["listReturnLineItems"]:r92,["listReturns"]:r92,["processReturn"]:r92,["reopenReturn"]:r92,["updateReturn"]:r92,["updateReturnLineItem"]:r92,["waiveReturnLineItemInspection"]:r92,["createRiskList"]:r93,["createRiskListItems"]:r93,["deleteRiskList"]:r93,["deleteRiskListItem"]:r93,["getRiskList"]:r93,["getRiskListItem"]:r93,["listRiskListItems"]:r93,["listRiskLists"]:r93,["updateRiskList"]:r93,["createRiskPreview"]:r94,["createRiskRule"]:r95,["deleteRiskRule"]:r95,["getRiskRule"]:r95,["getRiskRuleAttributes"]:r95,["listRiskRules"]:r95,["updateRiskRule"]:r95,["createSandbox"]:r96,["createSandboxAPIKey"]:r96,["deleteSandbox"]:r96,["getSandbox"]:r96,["listSandboxes"]:r96,["resetSandbox"]:r96,["getEffectiveSettings"]:r97,["getSettings"]:r97,["updateSettings"]:r97,["createPackage"]:r98,["getShipment"]:r98,["listShipments"]:r98,["updateShipment"]:r98,["voidShipment"]:r98,["createSubscriptionDeliveryMigration"]:r99,["getSubscriptionDeliveryMigration"]:r99,["listSubscriptionDeliveryMigrationFailures"]:r99,["listSubscriptionDeliveryMigrations"]:r99,["createSubscriptionOffer"]:r100,["deleteSubscriptionOffer"]:r100,["getSubscriptionOffer"]:r100,["listSubscriptionOffers"]:r100,["updateSubscriptionOffer"]:r100,["createSubscriptionPlan"]:r101,["deleteSubscriptionPlan"]:r101,["getSubscriptionPlan"]:r101,["listSubscriptionPlans"]:r101,["updateSubscriptionPlan"]:r101,["createSubscriptionPreview"]:r102,["applySubscriptionPromotion"]:r103,["cancelSubscription"]:r103,["changeSubscriptionPlan"]:r103,["changeSubscriptionQuantity"]:r103,["createSubscription"]:r103,["createSubscriptionAccessLink"]:r103,["createSubscriptionLineItem"]:r103,["createSubscriptionPaymentRetry"]:r103,["deleteSubscriptionLineItem"]:r103,["getSubscription"]:r103,["getSubscriptionPaymentRetry"]:r103,["listSubscriptionPaymentRetries"]:r103,["listSubscriptions"]:r103,["pauseSubscription"]:r103,["removeSubscriptionPromotions"]:r103,["renewSubscription"]:r103,["resumeSubscription"]:r103,["skipSubscriptionCycle"]:r103,["updateSubscription"]:r103,["updateSubscriptionLineItem"]:r103,["checkTaxCalculationCallbackConnection"]:r104,["createTaxCalculationCallback"]:r104,["createTaxCalculationCallbackTestDelivery"]:r104,["deleteTaxCalculationCallback"]:r104,["getTaxCalculationCallback"]:r104,["listTaxCalculationCallbacks"]:r104,["rotateTaxCalculationCallbackSecret"]:r104,["updateTaxCalculationCallback"]:r104,["connectTaxConnection"]:r105,["createTaxRegistration"]:r105,["deleteTaxRegistration"]:r105,["disconnectTaxConnection"]:r105,["getTaxConnection"]:r105,["getTaxRegistration"]:r105,["listTaxRegistrations"]:r105,["updateTaxRegistration"]:r105,["advanceTestClock"]:r106,["createTestClock"]:r106,["deleteTestClock"]:r106,["getTestClock"]:r106,["listTestClocks"]:r106,["checkInTicket"]:r107,["getTicket"]:r107,["listTickets"]:r107,["lookupTicket"]:r107,["rotateTicketCode"]:r107,["undoTicketCheckIn"]:r107,["updateTicket"]:r107,["voidTicket"]:r107,["createWebhookDelivery"]:r108,["getWebhookDelivery"]:r108,["listWebhookDeliveries"]:r108,["listWebhookDeliveryAttempts"]:r108,["resendWebhookDelivery"]:r108,["createWebhookEndpoint"]:r109,["createWebhookTestEvent"]:r109,["deleteWebhookEndpoint"]:r109,["getWebhookEndpoint"]:r109,["listWebhookEndpoints"]:r109,["rotateWebhookEndpointSecret"]:r109,["updateWebhookEndpoint"]:r109,["listWebhookEventTypes"]:r110,["getWebhookEvent"]:r111,["listWebhookEvents"]:r111,["streamWebhookEvents"]:r111,["createWorkloadIdentity"]:r112,["deleteWorkloadIdentity"]:r112,["getWorkloadIdentity"]:r112,["listWorkloadIdentities"]:r112,["updateWorkloadIdentity"]:r112}, webhook);

export class Client {
  #runtime;
  constructor(options = {}) {
    this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
    this.analytics = Object.freeze({
      getOverview: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAnalyticsOverview", result, path))),
      getPaymentVolumeTimeseries: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "granularity",
  "timezone",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentVolumeTimeseries", result, path))),
      getSubscription: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "partner_app_install_id",
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
  "partner_app_install_id",
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
  "partner_app_install_id",
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
  "partner_app_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "query",
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
  "partner_app_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "query",
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
  "partner_app_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "query",
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
      get: async (params, options) => this.#runtime.request("getAuthContext", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAuthContext", result, path))),
    });
    this.balanceTransactions = Object.freeze({
      get: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.balances = Object.freeze({
      list: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBalances", result, path))),
    });
    this.bundles = Object.freeze({
      create: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createBundle", result, path))),
      delete: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteBundle", result, path))),
      get: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_configuration_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_configuration_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_configuration_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateBundle", result, path))),
    });
    this.categories = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCategory", result, path))),
      delete: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCategory", result, path))),
      get: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCategory", result, path))),
    });
    this.checkoutSessions = Object.freeze({
      close: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
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
      create: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
], [checkout_session_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliveryQuote", result, path))),
      createDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliverySelection", result, path))),
      deleteCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expected_delivery_selection_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCheckoutSessionCurrentDeliverySelection", result, path))),
      get: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSession", result, path))),
      getCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionCurrentDeliverySelection", result, path))),
      getDeliveryQuote: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliveryQuote", result, path))),
      getDeliverySelection: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliverySelection", result, path))),
      listDeliverySelections: async (checkout_session_id, params, options) => this.#runtime.request("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCheckoutSessionDeliverySelections", result, path))),
      listDeliverySelectionsPages: (checkout_session_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCheckoutSessionDeliverySelections", result, path)),
      listDeliverySelectionsItems: (checkout_session_id, params, options) => this.#runtime.items("listCheckoutSessionDeliverySelections", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCheckoutSession", result, path))),
    });
    this.creditNotes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNote", result, path))),
      createAllocation: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteAllocation", result, path))),
      get: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNote", result, path))),
      getAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNoteAllocation", result, path))),
      getPDF: async (credit_note_id, params, options) => this.#runtime.request("getCreditNotePDF", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      issue: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueCreditNote", result, path))),
      listAllocations: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path))),
      listAllocationsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path)),
      listAllocationsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      reverseAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseCreditNoteAllocation", result, path))),
      update: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCreditNote", result, path))),
      void: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidCreditNote", result, path))),
    });
    this.customDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomDomain", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomDomain", result, path))),
      delete: async (custom_domain_id, params, options) => this.#runtime.request("deleteCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomDomain", result, path))),
      get: async (custom_domain_id, params, options) => this.#runtime.request("getCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomDomain", result, path))),
      list: async (params, options) => this.#runtime.request("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path)),
      listItems: (params, options) => this.#runtime.items("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      validate: async (custom_domain_id, params, options) => this.#runtime.request("validateCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
      create: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
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
], [customer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerAddress", result, path))),
      createTaxExemption: async (customer_id, params, options) => this.#runtime.request("createCustomerTaxExemption", _sdkRequestInput([
  "customer_id"
], [customer_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerTaxExemption", result, path))),
      deleteAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomerAddress", result, path))),
      deleteTaxExemption: async (customer_id, customer_tax_exemption_id, params, options) => this.#runtime.request("deleteCustomerTaxExemption", _sdkRequestInput([
  "customer_id",
  "customer_tax_exemption_id"
], [customer_id, customer_tax_exemption_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomerTaxExemption", result, path))),
      get: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomer", result, path))),
      getAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerAddress", result, path))),
      getEmailPreferences: async (customer_id, params, options) => this.#runtime.request("getCustomerEmailPreferences", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerEmailPreferences", result, path))),
      getTaxExemption: async (customer_id, customer_tax_exemption_id, params, options) => this.#runtime.request("getCustomerTaxExemption", _sdkRequestInput([
  "customer_id",
  "customer_tax_exemption_id"
], [customer_id, customer_tax_exemption_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerTaxExemption", result, path))),
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path))),
      listAddressesPages: (customer_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path)),
      listAddressesItems: (customer_id, params, options) => this.#runtime.items("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "price_list_id",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "price_list_id",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "price_list_id",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listTaxExemptions: async (customer_id, params, options) => this.#runtime.request("listCustomerTaxExemptions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerTaxExemptions", result, path))),
      listTaxExemptionsPages: (customer_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerTaxExemptions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomerTaxExemptions", result, path)),
      listTaxExemptionsItems: (customer_id, params, options) => this.#runtime.items("listCustomerTaxExemptions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token",
  "status"
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
], [customer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomer", result, path))),
      updateAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomerAddress", result, path))),
      updateTaxExemption: async (customer_id, customer_tax_exemption_id, params, options) => this.#runtime.request("updateCustomerTaxExemption", _sdkRequestInput([
  "customer_id",
  "customer_tax_exemption_id"
], [customer_id, customer_tax_exemption_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomerTaxExemption", result, path))),
    });
    this.deliveryLocationSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryLocationSet", result, path))),
      delete: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryLocationSet", result, path))),
      get: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryLocationSet", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryLocationSet", result, path))),
    });
    this.deliveryMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryMethod", result, path))),
      delete: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryMethod", result, path))),
      get: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "location_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "location_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "location_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryMethod", result, path))),
    });
    this.deliveryPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryPreview", result, path))),
    });
    this.deliveryProfiles = Object.freeze({
      assignToUnconfigured: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("assignToUnconfiguredDeliveryProfile", result, path))),
      create: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryProfile", result, path))),
      delete: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryProfile", result, path))),
      get: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "include_diagnostics",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "include_diagnostics",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "include_diagnostics",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryProfile", result, path))),
    });
    this.deliveryQuotes = Object.freeze({
      get: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.deliveryRateCallbacks = Object.freeze({
      checkConnection: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkDeliveryRateCallbackConnection", result, path))),
      create: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallback", result, path))),
      createTestDelivery: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallbackTestDelivery", result, path))),
      delete: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryRateCallback", result, path))),
      get: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRateCallback", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      rotateSecret: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateDeliveryRateCallbackSigningKey", result, path))),
      update: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryRateCallback", result, path))),
    });
    this.deliveryRevocations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryRevocation", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRevocation", result, path))),
      get: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRevocation", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryRevocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "target_type",
  "reason",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.deliveryZones = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryZone", result, path))),
      delete: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryZone", result, path))),
      get: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryZone", result, path))),
      list: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "delivery_method_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryZone", result, path))),
    });
    this.demoSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "Flint-Challenge-Token"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDemoSession", result, path))),
      reset: async (demo_session_id, params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([
  "demo_session_id"
], [demo_session_id], [
  "Flint-Challenge-Token"
], true, false, params, [
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
      create: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDiscountPreview", result, path))),
    });
    this.disputes = Object.freeze({
      accept: async (dispute_id, params, options) => this.#runtime.request("acceptDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("acceptDispute", result, path))),
      createResponseSession: async (dispute_id, params, options) => this.#runtime.request("createDisputeResponseSession", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDisputeResponseSession", result, path))),
      get: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      simulate: async (dispute_id, params, options) => this.#runtime.request("simulateDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
    this.emailPreferences = Object.freeze({
      lookup: async (params, options) => this.#runtime.request("lookupEmailPreferences", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupEmailPreferences", result, path))),
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
], [file_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeFile", result, path))),
      create: async (params, options) => this.#runtime.request("createFile", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFile", result, path))),
      get: async (file_id, params, options) => this.#runtime.request("getFile", _sdkRequestInput([
  "file_id"
], [file_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFile", result, path))),
    });
    this.fraudWarnings = Object.freeze({
      get: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.fulfillmentEvents = Object.freeze({
      get: async (fulfillment_event_id, params, options) => this.#runtime.request("getFulfillmentEvent", _sdkRequestInput([
  "fulfillment_event_id"
], [fulfillment_event_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.fulfillmentNotifications = Object.freeze({
      get: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.fulfillments = Object.freeze({
      accept: async (fulfillment_id, params, options) => this.#runtime.request("acceptFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("acceptFulfillment", result, path))),
      cancel: async (fulfillment_id, params, options) => this.#runtime.request("cancelFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelFulfillment", result, path))),
      complete: async (fulfillment_id, params, options) => this.#runtime.request("completeFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeFulfillment", result, path))),
      createEvent: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillmentEvent", result, path))),
      createShipment: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createShipment", result, path))),
      dispatch: async (fulfillment_id, params, options) => this.#runtime.request("dispatchFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("dispatchFulfillment", result, path))),
      fail: async (fulfillment_id, params, options) => this.#runtime.request("failFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("failFulfillment", result, path))),
      get: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillment", result, path))),
      hold: async (fulfillment_id, params, options) => this.#runtime.request("holdFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("holdFulfillment", result, path))),
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      markNoShow: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentNoShow", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentNoShow", result, path))),
      markPacked: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentPacked", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentPacked", result, path))),
      markPicked: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentPicked", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentPicked", result, path))),
      markPreparing: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentPreparing", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentPreparing", result, path))),
      markReady: async (fulfillment_id, params, options) => this.#runtime.request("markFulfillmentReady", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markFulfillmentReady", result, path))),
      releaseHold: async (fulfillment_id, params, options) => this.#runtime.request("releaseFulfillmentHold", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseFulfillmentHold", result, path))),
      schedule: async (fulfillment_id, params, options) => this.#runtime.request("scheduleFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("scheduleFulfillment", result, path))),
      start: async (fulfillment_id, params, options) => this.#runtime.request("startFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("startFulfillment", result, path))),
      update: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateFulfillment", result, path))),
    });
    this.giftCardFundingDispositions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardFundingDisposition", result, path))),
      get: async (gift_card_funding_disposition_id, params, options) => this.#runtime.request("getGiftCardFundingDisposition", _sdkRequestInput([
  "gift_card_funding_disposition_id"
], [gift_card_funding_disposition_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardFundingDisposition", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCardLoads = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardLoad", result, path))),
      get: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "source_external_reference_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "source_external_reference_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "source_external_reference_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCardNotifications = Object.freeze({
      cancel: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardNotification", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardNotification", result, path))),
      get: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardNotification", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCardRedemptions = Object.freeze({
      cancel: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardRedemption", result, path))),
      capture: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("captureGiftCardRedemption", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardRedemption", result, path))),
      get: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "transaction_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "transaction_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "transaction_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.giftCards = Object.freeze({
      adjustBalance: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("adjustGiftCardBalance", result, path))),
      cashOut: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cashOutGiftCard", result, path))),
      close: async (gift_card_id, params, options) => this.#runtime.request("closeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeGiftCard", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCard", result, path))),
      freeze: async (gift_card_id, params, options) => this.#runtime.request("freezeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("freezeGiftCard", result, path))),
      get: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      lookup: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupGiftCard", result, path))),
      rotateCode: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateGiftCardCode", result, path))),
      unfreeze: async (gift_card_id, params, options) => this.#runtime.request("unfreezeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("unfreezeGiftCard", result, path))),
      update: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateGiftCard", result, path))),
    });
    this.inventoryAdjustments = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAdjustment", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAdjustment", result, path))),
      get: async (inventory_adjustment_id, params, options) => this.#runtime.request("getInventoryAdjustment", _sdkRequestInput([
  "inventory_adjustment_id"
], [inventory_adjustment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.inventoryAllocationPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAllocationPolicy", result, path))),
      delete: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryAllocationPolicy", result, path))),
      get: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicy", result, path))),
      getRevision: async (inventory_allocation_policy_id, inventory_allocation_policy_revision_id, params, options) => this.#runtime.request("getInventoryAllocationPolicyRevision", _sdkRequestInput([
  "inventory_allocation_policy_id",
  "inventory_allocation_policy_revision_id"
], [inventory_allocation_policy_id, inventory_allocation_policy_revision_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicyRevision", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryAllocationPolicy", result, path))),
    });
    this.inventoryCounts = Object.freeze({
      apply: async (inventory_count_id, params, options) => this.#runtime.request("applyInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyInventoryCount", result, path))),
      cancel: async (inventory_count_id, params, options) => this.#runtime.request("cancelInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelInventoryCount", result, path))),
      create: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryCount", result, path))),
      get: async (inventory_count_id, params, options) => this.#runtime.request("getInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "applied_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "applied_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "applied_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryCount", result, path))),
    });
    this.inventoryItems = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryItem", result, path))),
      delete: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryItem", result, path))),
      get: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryItem", result, path))),
    });
    this.inventoryLevels = Object.freeze({
      get: async (inventory_level_id, params, options) => this.#runtime.request("getInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_level_id, params, options) => this.#runtime.request("updateInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryLevel", result, path))),
    });
    this.inventoryMovements = Object.freeze({
      get: async (inventory_movement_id, params, options) => this.#runtime.request("getInventoryMovement", _sdkRequestInput([
  "inventory_movement_id"
], [inventory_movement_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "source_reference_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "source_reference_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "source_reference_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.inventoryReceipts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReceipt", result, path))),
      get: async (inventory_receipt_id, params, options) => this.#runtime.request("getInventoryReceipt", _sdkRequestInput([
  "inventory_receipt_id"
], [inventory_receipt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.inventoryReservations = Object.freeze({
      commit: async (inventory_reservation_id, params, options) => this.#runtime.request("commitInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("commitInventoryReservation", result, path))),
      consume: async (inventory_reservation_id, params, options) => this.#runtime.request("consumeInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("consumeInventoryReservation", result, path))),
      create: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReservation", result, path))),
      get: async (inventory_reservation_id, params, options) => this.#runtime.request("getInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      release: async (inventory_reservation_id, params, options) => this.#runtime.request("releaseInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseInventoryReservation", result, path))),
      update: async (inventory_reservation_id, params, options) => this.#runtime.request("updateInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryReservation", result, path))),
    });
    this.inventoryTransfers = Object.freeze({
      cancel: async (inventory_transfer_id, params, options) => this.#runtime.request("cancelInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelInventoryTransfer", result, path))),
      create: async (params, options) => this.#runtime.request("createInventoryTransfer", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryTransfer", result, path))),
      depart: async (inventory_transfer_id, params, options) => this.#runtime.request("departInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("departInventoryTransfer", result, path))),
      get: async (inventory_transfer_id, params, options) => this.#runtime.request("getInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "received_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "received_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "received_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      receive: async (inventory_transfer_id, params, options) => this.#runtime.request("receiveInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("receiveInventoryTransfer", result, path))),
      reportLoss: async (inventory_transfer_id, params, options) => this.#runtime.request("reportInventoryTransferLoss", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reportInventoryTransferLoss", result, path))),
      returnToOrigin: async (inventory_transfer_id, params, options) => this.#runtime.request("returnInventoryTransferToOrigin", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("returnInventoryTransferToOrigin", result, path))),
      update: async (inventory_transfer_id, params, options) => this.#runtime.request("updateInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryTransfer", result, path))),
    });
    this.invoicePaymentTerms = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoicePaymentTerm", result, path))),
      delete: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInvoicePaymentTerm", result, path))),
      get: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentTerm", result, path))),
      list: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path)),
      listItems: (params, options) => this.#runtime.items("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoicePaymentTerm", result, path))),
    });
    this.invoices = Object.freeze({
      cancelPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("cancelInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelInvoicePaymentAttempt", result, path))),
      collect: async (invoice_id, params, options) => this.#runtime.request("collectInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("collectInvoice", result, path))),
      create: async (params, options) => this.#runtime.request("createInvoice", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoice", result, path))),
      createCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("createInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceCheckoutSession", result, path))),
      createLateFee: async (invoice_id, params, options) => this.#runtime.request("createInvoiceLateFee", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceLateFee", result, path))),
      createManualPayment: async (invoice_id, params, options) => this.#runtime.request("createInvoiceManualPayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceManualPayment", result, path))),
      get: async (invoice_id, params, options) => this.#runtime.request("getInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoice", result, path))),
      getManualPayment: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("getInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoiceManualPayment", result, path))),
      getPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("getInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentAttempt", result, path))),
      getPDF: async (invoice_id, params, options) => this.#runtime.request("getInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      issue: async (invoice_id, params, options) => this.#runtime.request("issueInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listDeliveryAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceDeliveryAttempts", result, path))),
      listDeliveryAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceDeliveryAttempts", result, path)),
      listDeliveryAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listManualPayments: async (invoice_id, params, options) => this.#runtime.request("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceManualPayments", result, path))),
      listManualPaymentsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceManualPayments", result, path)),
      listManualPaymentsItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentAttempts", result, path))),
      listPaymentAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentAttempts", result, path)),
      listPaymentAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "due_date_from",
  "due_date_to",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction",
  "query",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "due_date_from",
  "due_date_to",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction",
  "query",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "due_date_from",
  "due_date_to",
  "is_overdue",
  "has_outstanding_balance",
  "sort_by",
  "sort_direction",
  "query",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      markUncollectible: async (invoice_id, params, options) => this.#runtime.request("markInvoiceUncollectible", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markInvoiceUncollectible", result, path))),
      regeneratePublicLink: async (invoice_id, params, options) => this.#runtime.request("regenerateInvoicePublicLink", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("regenerateInvoicePublicLink", result, path))),
      reverseManualPayment: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("reverseInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseInvoiceManualPayment", result, path))),
      sendReminder: async (invoice_id, params, options) => this.#runtime.request("sendInvoiceReminder", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendInvoiceReminder", result, path))),
      update: async (invoice_id, params, options) => this.#runtime.request("updateInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoice", result, path))),
      void: async (invoice_id, params, options) => this.#runtime.request("voidInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidInvoice", result, path))),
      waiveLateFee: async (invoice_id, invoice_late_fee_id, params, options) => this.#runtime.request("waiveInvoiceLateFee", _sdkRequestInput([
  "invoice_id",
  "invoice_late_fee_id"
], [invoice_id, invoice_late_fee_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("waiveInvoiceLateFee", result, path))),
    });
    this.locations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createLocation", result, path))),
      delete: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteLocation", result, path))),
      get: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getLocation", result, path))),
      list: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLocation", result, path))),
    });
    this.me = Object.freeze({
      cancelReturn: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeReturn", result, path))),
      cancelSubscription: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeSubscription", result, path))),
      changeSubscriptionPlan: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPlan", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionPlan", result, path))),
      changeSubscriptionQuantity: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionQuantity", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionQuantity", result, path))),
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
      createPaymentMethod: async (params, options) => this.#runtime.request("createMePaymentMethod", _sdkRequestInput([], [], [], true, false, params, [
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
      getOrderReceiptPDF: async (order_id, params, options) => this.#runtime.request("getMeOrderReceiptPDF", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
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
      listGiftCardTransactions: async (params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([], [], [
  "gift_card_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path))),
      listGiftCardTransactionsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([], [], [
  "gift_card_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path)),
      listGiftCardTransactionsItems: (params, options) => this.#runtime.items("listMeGiftCardTransactions", _sdkRequestInput([], [], [
  "gift_card_id",
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
  "due_date_from",
  "due_date_to",
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
  "due_date_from",
  "due_date_to",
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
  "due_date_from",
  "due_date_to",
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
      listTickets: async (params, options) => this.#runtime.request("listMeTickets", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeTickets", result, path))),
      listTicketsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeTickets", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listMeTickets", result, path)),
      listTicketsItems: (params, options) => this.#runtime.items("listMeTickets", _sdkRequestInput([], [], [
  "order_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pauseSubscription: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], true, false, params, [
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
], [subscription_id], [], true, false, params, [
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
], [subscription_id], [], true, false, params, [
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
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchant", result, path))),
      update: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMerchant", result, path))),
    });
    this.merchantAccountSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMerchantAccountSession", result, path))),
      refresh: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
      create: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierGroup", result, path))),
      delete: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierGroup", result, path))),
      get: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierGroup", result, path))),
    });
    this.modifierSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierSet", result, path))),
      delete: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierSet", result, path))),
      get: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierSet", result, path))),
    });
    this.oauth = Object.freeze({
      authorizeCLIDevice: async (params, options) => this.#runtime.request("authorizeCLIDevice", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("authorizeCLIDevice", result, path))),
      exchangeToken: async (params, options) => this.#runtime.request("exchangeOAuthToken", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("exchangeOAuthToken", result, path))),
      listCLIContexts: async (params, options) => this.#runtime.request("listCLIContexts", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCLIContexts", result, path))),
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
      reauthorizeCLIDevice: async (params, options) => this.#runtime.request("reauthorizeCLIDevice", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("reauthorizeCLIDevice", result, path))),
      revokeToken: async (params, options) => this.#runtime.request("revokeOAuthToken", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.onboarding = Object.freeze({
      advance: async (params, options) => this.#runtime.request("advanceOnboarding", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("advanceOnboarding", result, path))),
      createAPIKey: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOnboardingAPIKey", result, path))),
      getState: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
    this.orderEditPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createOrderEditPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderEditPreview", result, path))),
    });
    this.orders = Object.freeze({
      applyDiscount: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderDiscount", result, path))),
      applyGiftCard: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Gift-Card-Challenge",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderGiftCard", result, path))),
      cancelPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelOrderPaymentAttempt", result, path))),
      close: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeOrder", result, path))),
      createFulfillment: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillment", result, path))),
      create: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrder", result, path))),
      createAccessLink: async (order_id, params, options) => this.#runtime.request("createOrderAccessLink", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderAccessLink", result, path))),
      createCharge: async (order_id, params, options) => this.#runtime.request("createOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderCharge", result, path))),
      createEdit: async (order_id, params, options) => this.#runtime.request("createOrderEdit", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderEdit", result, path))),
      createLineItems: async (order_id, params, options) => this.#runtime.request("createOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderLineItems", result, path))),
      createPaymentIntent: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderPaymentIntent", result, path))),
      deleteCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderCharge", result, path))),
      deleteLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderLineItem", result, path))),
      get: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrder", result, path))),
      getCurrentDeliverySelection: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderCurrentDeliverySelection", result, path))),
      getEdit: async (order_id, order_edit_id, params, options) => this.#runtime.request("getOrderEdit", _sdkRequestInput([
  "order_id",
  "order_edit_id"
], [order_id, order_edit_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderEdit", result, path))),
      getPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderPaymentAttempt", result, path))),
      getReceiptPDF: async (order_id, params, options) => this.#runtime.request("getOrderReceiptPDF", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listActivities: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listEdits: async (order_id, params, options) => this.#runtime.request("listOrderEdits", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderEdits", result, path))),
      listEditsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderEdits", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderEdits", result, path)),
      listEditsItems: (order_id, params, options) => this.#runtime.items("listOrderEdits", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "created_after",
  "created_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listPaymentAttempts: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path))),
      listPaymentAttemptsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path)),
      listPaymentAttemptsItems: (order_id, params, options) => this.#runtime.items("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "idempotency_key",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "product_id",
  "variant_id",
  "email",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_backordered_quantity",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrders", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "product_id",
  "variant_id",
  "email",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_backordered_quantity",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrders", result, path)),
      listItems: (params, options) => this.#runtime.items("listOrders", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "customer_id",
  "product_id",
  "variant_id",
  "email",
  "order_id",
  "closed_reason",
  "status",
  "payment_status",
  "refund_status",
  "fulfillment_status",
  "order_number",
  "has_backordered_quantity",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pay: async (order_id, params, options) => this.#runtime.request("payOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Buyer-Device",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("payOrder", result, path))),
      removeDiscounts: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderDiscounts", result, path))),
      removeGiftCard: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderGiftCard", result, path))),
      repriceDiscounts: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("repriceOrderDiscounts", result, path))),
      resolveInventoryException: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveOrderInventoryException", result, path))),
      retryEditRefund: async (order_id, order_edit_id, params, options) => this.#runtime.request("retryOrderEditRefund", _sdkRequestInput([
  "order_id",
  "order_edit_id"
], [order_id, order_edit_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryOrderEditRefund", result, path))),
      sendReceipt: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendOrderReceipt", result, path))),
      update: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrder", result, path))),
      updateCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderCharge", result, path))),
      updateLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderLineItem", result, path))),
    });
    this.packages = Object.freeze({
      createItem: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackageItem", result, path))),
      deleteItem: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePackageItem", result, path))),
      get: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackage", result, path))),
      getItem: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackageItem", result, path))),
      listPackageItems: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path))),
      listPackageItemsPages: (package_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path)),
      listPackageItemsItems: (package_id, params, options) => this.#runtime.items("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      markDelivered: async (package_id, params, options) => this.#runtime.request("markPackageDelivered", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageDelivered", result, path))),
      markDeliveryAttempted: async (package_id, params, options) => this.#runtime.request("markPackageDeliveryAttempted", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageDeliveryAttempted", result, path))),
      markException: async (package_id, params, options) => this.#runtime.request("markPackageException", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageException", result, path))),
      markInTransit: async (package_id, params, options) => this.#runtime.request("markPackageInTransit", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageInTransit", result, path))),
      markOutForDelivery: async (package_id, params, options) => this.#runtime.request("markPackageOutForDelivery", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageOutForDelivery", result, path))),
      markPacked: async (package_id, params, options) => this.#runtime.request("markPackagePacked", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackagePacked", result, path))),
      markReturned: async (package_id, params, options) => this.#runtime.request("markPackageReturned", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageReturned", result, path))),
      markShipped: async (package_id, params, options) => this.#runtime.request("markPackageShipped", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markPackageShipped", result, path))),
      update: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackage", result, path))),
      updateItem: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackageItem", result, path))),
      void: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
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
      acceptPlatformTerms: async (partner_app_id, params, options) => this.#runtime.request("acceptPartnerAppPlatformTerms", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("acceptPartnerAppPlatformTerms", result, path))),
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
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelPaymentIntent", result, path))),
      capture: async (payment_intent_id, params, options) => this.#runtime.request("capturePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("capturePaymentIntent", result, path))),
      confirm: async (payment_intent_id, params, options) => this.#runtime.request("confirmPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Buyer-Device",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmPaymentIntent", result, path))),
      create: async (params, options) => this.#runtime.request("createPaymentIntent", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentIntent", result, path))),
      get: async (payment_intent_id, params, options) => this.#runtime.request("getPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "activity_type",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      sendReceipt: async (payment_intent_id, params, options) => this.#runtime.request("sendPaymentIntentReceipt", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendPaymentIntentReceipt", result, path))),
      update: async (payment_intent_id, params, options) => this.#runtime.request("updatePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentIntent", result, path))),
    });
    this.paymentLinks = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentLink", result, path))),
      get: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
], [payment_link_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
      create: async (params, options) => this.#runtime.request("createPaymentMethod", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentMethod", result, path))),
      delete: async (payment_method_id, params, options) => this.#runtime.request("deletePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePaymentMethod", result, path))),
      get: async (payment_method_id, params, options) => this.#runtime.request("getPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.paymentReviews = Object.freeze({
      approve: async (payment_review_id, params, options) => this.#runtime.request("approvePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("approvePaymentReview", result, path))),
      decline: async (payment_review_id, params, options) => this.#runtime.request("declinePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("declinePaymentReview", result, path))),
      get: async (payment_review_id, params, options) => this.#runtime.request("getPaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
], [payout_destination_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayoutDestination", result, path))),
      list: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_methods",
  "is_default_for_currency",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPayoutDestinations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_methods",
  "is_default_for_currency",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPayoutDestinations", result, path)),
      listItems: (params, options) => this.#runtime.items("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_methods",
  "is_default_for_currency",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
      get: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.priceLists = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPriceList", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPriceList", result, path))),
      createPrices: async (price_list_id, params, options) => this.#runtime.request("createPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPriceListPrices", result, path))),
      delete: async (price_list_id, params, options) => this.#runtime.request("deletePriceList", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePriceList", result, path))),
      deletePrice: async (price_list_id, price_list_price_id, params, options) => this.#runtime.request("deletePriceListPrice", _sdkRequestInput([
  "price_list_id",
  "price_list_price_id"
], [price_list_id, price_list_price_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePriceListPrice", result, path))),
      get: async (price_list_id, params, options) => this.#runtime.request("getPriceList", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPriceList", result, path))),
      getPrice: async (price_list_id, price_list_price_id, params, options) => this.#runtime.request("getPriceListPrice", _sdkRequestInput([
  "price_list_id",
  "price_list_price_id"
], [price_list_id, price_list_price_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPriceListPrice", result, path))),
      listPrices: async (price_list_id, params, options) => this.#runtime.request("listPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "page_size",
  "page_token",
  "variant_id",
  "product_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPriceListPrices", result, path))),
      listPricesPages: (price_list_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "page_size",
  "page_token",
  "variant_id",
  "product_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPriceListPrices", result, path)),
      listPricesItems: (price_list_id, params, options) => this.#runtime.items("listPriceListPrices", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "page_size",
  "page_token",
  "variant_id",
  "product_id",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listPriceLists", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_segment",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPriceLists", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPriceLists", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_segment",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPriceLists", result, path)),
      listItems: (params, options) => this.#runtime.items("listPriceLists", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "customer_segment",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (price_list_id, params, options) => this.#runtime.request("updatePriceList", _sdkRequestInput([
  "price_list_id"
], [price_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePriceList", result, path))),
      updatePrice: async (price_list_id, price_list_price_id, params, options) => this.#runtime.request("updatePriceListPrice", _sdkRequestInput([
  "price_list_id",
  "price_list_price_id"
], [price_list_id, price_list_price_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePriceListPrice", result, path))),
    });
    this.products = Object.freeze({
      create: async (params, options) => this.#runtime.request("createProduct", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProduct", result, path))),
      createVariant: async (product_id, params, options) => this.#runtime.request("createProductVariant", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProductVariant", result, path))),
      delete: async (product_id, params, options) => this.#runtime.request("deleteProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProduct", result, path))),
      deleteVariant: async (product_id, variant_id, params, options) => this.#runtime.request("deleteProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProductVariant", result, path))),
      get: async (product_id, params, options) => this.#runtime.request("getProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProduct", result, path))),
      getOption: async (product_id, option_id, params, options) => this.#runtime.request("getProductOption", _sdkRequestInput([
  "product_id",
  "option_id"
], [product_id, option_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductOption", result, path))),
      getVariant: async (product_id, variant_id, params, options) => this.#runtime.request("getProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductVariant", result, path))),
      listOptions: async (product_id, params, options) => this.#runtime.request("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path))),
      listOptionsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path)),
      listOptionsItems: (product_id, params, options) => this.#runtime.items("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (product_id, params, options) => this.#runtime.request("updateProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProduct", result, path))),
      updateVariant: async (product_id, variant_id, params, options) => this.#runtime.request("updateProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProductVariant", result, path))),
    });
    this.promotionCodes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotionCode", result, path))),
      delete: async (promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_code_id"
], [promotion_code_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotionCode", result, path))),
      get: async (promotion_code_id, params, options) => this.#runtime.request("getPromotionCode", _sdkRequestInput([
  "promotion_code_id"
], [promotion_code_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotionCode", result, path))),
      list: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "customer_id",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "customer_id",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path)),
      listItems: (params, options) => this.#runtime.items("listPromotionCodes", _sdkRequestInput([], [], [
  "promotion_id",
  "customer_id",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_code_id"
], [promotion_code_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotionCode", result, path))),
    });
    this.promotions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotion", result, path))),
      delete: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotion", result, path))),
      get: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotion", result, path))),
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotion", result, path))),
    });
    this.refunds = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRefund", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRefund", result, path))),
      get: async (refund_id, params, options) => this.#runtime.request("getRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "credit_note_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "credit_note_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "credit_note_id",
  "return_id",
  "return_resolution_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (refund_id, params, options) => this.#runtime.request("updateRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
], [return_disposition_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnDisposition", result, path))),
      get: async (return_disposition_id, params, options) => this.#runtime.request("getReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      retry: async (return_disposition_id, params, options) => this.#runtime.request("retryReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnDisposition", result, path))),
    });
    this.returnInspections = Object.freeze({
      decideLineItem: async (return_inspection_id, return_inspection_line_item_id, params, options) => this.#runtime.request("decideReturnInspectionLineItem", _sdkRequestInput([
  "return_inspection_id",
  "return_inspection_line_item_id"
], [return_inspection_id, return_inspection_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturnInspectionLineItem", result, path))),
      get: async (return_inspection_id, params, options) => this.#runtime.request("getReturnInspection", _sdkRequestInput([
  "return_inspection_id"
], [return_inspection_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.returnPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPolicy", result, path))),
      createRevision: async (return_policy_id, params, options) => this.#runtime.request("createReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPolicyRevision", result, path))),
      delete: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnPolicy", result, path))),
      get: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnPolicy", result, path))),
      getRevision: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnPolicyRevision", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listRevisions: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnPolicyRevisions", result, path))),
      listRevisionsPages: (return_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnPolicyRevisions", result, path)),
      listRevisionsItems: (return_policy_id, params, options) => this.#runtime.items("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnPolicy", result, path))),
    });
    this.returnPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPreview", result, path))),
    });
    this.returnReasons = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReason", result, path))),
      delete: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnReason", result, path))),
      get: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnReason", result, path))),
    });
    this.returnReceipts = Object.freeze({
      get: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "verification_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "verification_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "verification_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      verifyLineItem: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyReturnReceiptLineItem", result, path))),
    });
    this.returnResolutions = Object.freeze({
      cancel: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnResolution", result, path))),
      confirm: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmReturnResolution", result, path))),
      createCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("createReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnResolutionCheckoutSession", result, path))),
      get: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      release: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseReturnResolution", result, path))),
      retry: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnResolution", result, path))),
      update: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnResolution", result, path))),
    });
    this.returns = Object.freeze({
      cancel: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturn", result, path))),
      cancelLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnLineItem", result, path))),
      complete: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeReturn", result, path))),
      create: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturn", result, path))),
      createAccessLink: async (return_id, params, options) => this.#runtime.request("createReturnAccessLink", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnAccessLink", result, path))),
      createDisposition: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnDisposition", result, path))),
      createInspection: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnInspection", result, path))),
      createLineItem: async (return_id, params, options) => this.#runtime.request("createReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnLineItem", result, path))),
      createReceipt: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReceipt", result, path))),
      createResolution: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnResolution", result, path))),
      decide: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturn", result, path))),
      deleteLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnLineItem", result, path))),
      get: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturn", result, path))),
      getLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnLineItem", result, path))),
      listActivities: async (return_id, params, options) => this.#runtime.request("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path))),
      listActivitiesPages: (return_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path)),
      listActivitiesItems: (return_id, params, options) => this.#runtime.items("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      process: async (return_id, params, options) => this.#runtime.request("processReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("processReturn", result, path))),
      reopen: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reopenReturn", result, path))),
      update: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturn", result, path))),
      updateLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnLineItem", result, path))),
      waiveLineItemInspection: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineItemInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("waiveReturnLineItemInspection", result, path))),
    });
    this.riskLists = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskList", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskList", result, path))),
      createItems: async (risk_list_id, params, options) => this.#runtime.request("createRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskListItems", result, path))),
      delete: async (risk_list_id, params, options) => this.#runtime.request("deleteRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskList", result, path))),
      deleteItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("deleteRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskListItem", result, path))),
      get: async (risk_list_id, params, options) => this.#runtime.request("getRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskList", result, path))),
      getItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("getRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskListItem", result, path))),
      listRiskListItems: async (risk_list_id, params, options) => this.#runtime.request("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path))),
      listRiskListItemsPages: (risk_list_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path)),
      listRiskListItemsItems: (risk_list_id, params, options) => this.#runtime.items("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path)),
      listItems: (params, options) => this.#runtime.items("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (risk_list_id, params, options) => this.#runtime.request("updateRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskList", result, path))),
    });
    this.riskPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskPreview", result, path))),
    });
    this.riskRules = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskRule", result, path))),
      delete: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskRule", result, path))),
      get: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRule", result, path))),
      getAttributes: async (params, options) => this.#runtime.request("getRiskRuleAttributes", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRuleAttributes", result, path))),
      list: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path)),
      listItems: (params, options) => this.#runtime.items("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
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
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getEffectiveSettings", result, path))),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSettings", result, path))),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSettings", result, path))),
    });
    this.shipments = Object.freeze({
      createPackage: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackage", result, path))),
      get: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateShipment", result, path))),
      void: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidShipment", result, path))),
    });
    this.subscriptionDeliveryMigrations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionDeliveryMigration", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionDeliveryMigration", result, path))),
      get: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("getSubscriptionDeliveryMigration", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionDeliveryMigration", result, path))),
      listFailures: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrationFailures", result, path))),
      listFailuresPages: (subscription_delivery_migration_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrationFailures", result, path)),
      listFailuresItems: (subscription_delivery_migration_id, params, options) => this.#runtime.items("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrations", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrations", result, path)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.subscriptionOffers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionOffer", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionOffer", result, path))),
      delete: async (subscription_offer_id, params, options) => this.#runtime.request("deleteSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionOffer", result, path))),
      get: async (subscription_offer_id, params, options) => this.#runtime.request("getSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "sort_direction",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (subscription_offer_id, params, options) => this.#runtime.request("updateSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionOffer", result, path))),
    });
    this.subscriptionPlans = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPlan", result, path))),
      delete: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionPlan", result, path))),
      get: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "updated_before",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionPlan", result, path))),
    });
    this.subscriptionPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPreview", result, path))),
    });
    this.subscriptions = Object.freeze({
      applyPromotion: async (subscription_id, params, options) => this.#runtime.request("applySubscriptionPromotion", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applySubscriptionPromotion", result, path))),
      cancel: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelSubscription", result, path))),
      changePlan: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPlan", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionPlan", result, path))),
      changeQuantity: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionQuantity", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionQuantity", result, path))),
      create: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscription", result, path))),
      createAccessLink: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionAccessLink", result, path))),
      createLineItem: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionLineItem", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionLineItem", result, path))),
      createPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPaymentRetry", result, path))),
      deleteLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("deleteSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionLineItem", result, path))),
      get: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscription", result, path))),
      getPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPaymentRetry", result, path))),
      listPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path))),
      listPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path)),
      listPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "is_awaiting_billing_schedule",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "is_awaiting_billing_schedule",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "is_awaiting_billing_schedule",
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
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      pause: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseSubscription", result, path))),
      removePromotions: async (subscription_id, params, options) => this.#runtime.request("removeSubscriptionPromotions", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeSubscriptionPromotions", result, path))),
      renew: async (subscription_id, params, options) => this.#runtime.request("renewSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewSubscription", result, path))),
      resume: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeSubscription", result, path))),
      skipCycle: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipSubscriptionCycle", result, path))),
      update: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscription", result, path))),
      updateLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionLineItem", result, path))),
    });
    this.taxCalculationCallbacks = Object.freeze({
      checkConnection: async (tax_calculation_callback_id, params, options) => this.#runtime.request("checkTaxCalculationCallbackConnection", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkTaxCalculationCallbackConnection", result, path))),
      create: async (params, options) => this.#runtime.request("createTaxCalculationCallback", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTaxCalculationCallback", result, path))),
      createTestDelivery: async (tax_calculation_callback_id, params, options) => this.#runtime.request("createTaxCalculationCallbackTestDelivery", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTaxCalculationCallbackTestDelivery", result, path))),
      delete: async (tax_calculation_callback_id, params, options) => this.#runtime.request("deleteTaxCalculationCallback", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteTaxCalculationCallback", result, path))),
      get: async (tax_calculation_callback_id, params, options) => this.#runtime.request("getTaxCalculationCallback", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxCalculationCallback", result, path))),
      list: async (params, options) => this.#runtime.request("listTaxCalculationCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTaxCalculationCallbacks", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTaxCalculationCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listTaxCalculationCallbacks", result, path)),
      listItems: (params, options) => this.#runtime.items("listTaxCalculationCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      rotateSecret: async (tax_calculation_callback_id, params, options) => this.#runtime.request("rotateTaxCalculationCallbackSecret", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateTaxCalculationCallbackSecret", result, path))),
      update: async (tax_calculation_callback_id, params, options) => this.#runtime.request("updateTaxCalculationCallback", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateTaxCalculationCallback", result, path))),
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
    this.tickets = Object.freeze({
      checkIn: async (ticket_id, params, options) => this.#runtime.request("checkInTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkInTicket", result, path))),
      get: async (ticket_id, params, options) => this.#runtime.request("getTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTicket", result, path))),
      list: async (params, options) => this.#runtime.request("listTickets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_link_id",
  "order_id",
  "status",
  "query",
  "sort_by",
  "sort_direction",
  "checked_in_after",
  "checked_in_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTickets", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTickets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_link_id",
  "order_id",
  "status",
  "query",
  "sort_by",
  "sort_direction",
  "checked_in_after",
  "checked_in_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listTickets", result, path)),
      listItems: (params, options) => this.#runtime.items("listTickets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "payment_link_id",
  "order_id",
  "status",
  "query",
  "sort_by",
  "sort_direction",
  "checked_in_after",
  "checked_in_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      lookup: async (params, options) => this.#runtime.request("lookupTicket", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupTicket", result, path))),
      rotateCode: async (ticket_id, params, options) => this.#runtime.request("rotateTicketCode", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateTicketCode", result, path))),
      undoCheckIn: async (ticket_id, params, options) => this.#runtime.request("undoTicketCheckIn", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("undoTicketCheckIn", result, path))),
      update: async (ticket_id, params, options) => this.#runtime.request("updateTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateTicket", result, path))),
      void: async (ticket_id, params, options) => this.#runtime.request("voidTicket", _sdkRequestInput([
  "ticket_id"
], [ticket_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidTicket", result, path))),
    });
    this.webhookDeliveries = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookDelivery", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookDelivery", result, path))),
      get: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listAttempts: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path))),
      listAttemptsPages: (webhook_delivery_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path)),
      listAttemptsItems: (webhook_delivery_id, params, options) => this.#runtime.items("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
], [webhook_endpoint_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookEndpoint", result, path))),
      list: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "created_by",
  "page_size",
  "page_token",
  "status",
  "event_sources",
  "partner_app_id",
  "partner_app_install_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "created_by",
  "page_size",
  "page_token",
  "status",
  "event_sources",
  "partner_app_id",
  "partner_app_install_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path)),
      listItems: (params, options) => this.#runtime.items("listWebhookEndpoints", _sdkRequestInput([], [], [
  "created_by",
  "page_size",
  "page_token",
  "status",
  "event_sources",
  "partner_app_id",
  "partner_app_install_id",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEventTypes", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEventTypes", result, path)),
      listItems: (params, options) => this.#runtime.items("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
    this.webhookEvents = Object.freeze({
      get: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
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
  "test",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "test",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
  "test",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      stream: async (params, options) => this.#runtime.request("streamWebhookEvents", _sdkRequestInput([], [], [
  "event_type",
  "test",
  "after_event_id",
  "Last-Event-ID",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
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
export function makeAcceptFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AcceptFulfillmentRequest"), constraints: true}); }
export function makeAcceptPartnerAppPlatformTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AcceptPartnerAppPlatformTermsRequest"), constraints: true}); }
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
export function makeApplyInventoryCountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyInventoryCountRequest"), constraints: true}); }
export function makeApplyOrderGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyOrderGiftCardRequest"), constraints: true}); }
export function makeApplySubscriptionPromotionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplySubscriptionPromotionRequest"), constraints: true}); }
export function makeAssessInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssessInvoiceLateFeeRequest"), constraints: true}); }
export function makeAssignToUnconfiguredDeliveryProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssignToUnconfiguredDeliveryProfileRequest"), constraints: true}); }
export function makeBrandingSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BrandingSettingsRequest"), constraints: true}); }
export function makeBuyerCancelReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCancelReturnRequest"), constraints: true}); }
export function makeBuyerCapabilitiesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCapabilitiesRequest"), constraints: true}); }
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnPreviewRequest"), constraints: true}); }
export function makeBuyerCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnPreviewRequestEligibility"), constraints: true}); }
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnPreviewRequestResolution"), constraints: true}); }
export function makeBuyerCreateReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnRequest"), constraints: true}); }
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnResolutionPreviewRequest"), constraints: true}); }
export function makeBuyerInstructionsConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInstructionsConfigRequest"), constraints: true}); }
export function makeBuyerPauseCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerPauseCapability"), constraints: true}); }
export function makeBuyerRetentionOfferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerRetentionOfferRequest"), constraints: true}); }
export function makeBuyerReturnReplacementLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerReturnReplacementLineItemInputBundle"), constraints: true}); }
export function makeBuyerReturnReplacementLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerReturnReplacementLineItemInputVariant"), constraints: true}); }
export function makeBuyerReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerReturnReplacementLineItemRequest"), constraints: true}); }
export function makeBuyerSkipCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerSkipCapability"), constraints: true}); }
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryMethodResultRequest"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequest"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestAvailable"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestCannotCalculate"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestUnavailable"), constraints: true}); }
export function makeCancelFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelFulfillmentRequest"), constraints: true}); }
export function makeCancelGiftCardNotificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelGiftCardNotificationRequest"), constraints: true}); }
export function makeCancelInventoryCountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelInventoryCountRequest"), constraints: true}); }
export function makeCancelInventoryTransferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelInventoryTransferRequest"), constraints: true}); }
export function makeCancelMeSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelMeSubscriptionRequest"), constraints: true}); }
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
export function makeChangeMeSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeMeSubscriptionPlanRequest"), constraints: true}); }
export function makeChangeMeSubscriptionQuantityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeMeSubscriptionQuantityRequest"), constraints: true}); }
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeSubscriptionPlanRequest"), constraints: true}); }
export function makeChangeSubscriptionQuantityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeSubscriptionQuantityRequest"), constraints: true}); }
export function makeCheckInTicketRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckInTicketRequest"), constraints: true}); }
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
export function makeCLIContextsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CLIContextsRequest"), constraints: true}); }
export function makeCLIDeviceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CLIDeviceRequest"), constraints: true}); }
export function makeCLIReauthorizeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CLIReauthorizeRequest"), constraints: true}); }
export function makeCloseCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseCheckoutSessionRequest"), constraints: true}); }
export function makeCloseGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseGiftCardRequest"), constraints: true}); }
export function makeCloseOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseOrderRequest"), constraints: true}); }
export function makeCollectInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CollectInvoiceRequest"), constraints: true}); }
export function makeCommitInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CommitInventoryReservationRequest"), constraints: true}); }
export function makeCompleteFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CompleteFulfillmentRequest"), constraints: true}); }
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
export function makeConsumeInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConsumeInventoryReservationRequest"), constraints: true}); }
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
export function makeCreateCheckoutSessionDiscount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionDiscount"), constraints: true}); }
export function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionGiftCardPurchaseVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionOrder"), constraints: true}); }
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionQuickPay"), constraints: true}); }
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionRequest"), constraints: true}); }
export function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionSavePaymentMethodVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionSubscriptionPlan"), constraints: true}); }
export function makeCreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest"), constraints: true}); }
export function makeCreateCreditNoteAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteAllocationRequest"), constraints: true}); }
export function makeCreateCreditNoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCreditNoteRequest"), constraints: true}); }
export function makeCreateCustomDomainRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomDomainRequest"), constraints: true}); }
export function makeCreateCustomerAccessLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerAccessLinkRequest"), constraints: true}); }
export function makeCreateCustomerAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerAddressRequest"), constraints: true}); }
export function makeCreateCustomerDeletionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerDeletionRequest"), constraints: true}); }
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerRequest"), constraints: true}); }
export function makeCreateCustomerSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerSessionRequest"), constraints: true}); }
export function makeCreateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCustomerTaxExemptionRequest"), constraints: true}); }
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
export function makeCreateDeliveryRevocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryRevocationRequest"), constraints: true}); }
export function makeCreateDeliveryRevocationTarget(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryRevocationTarget"), constraints: true}); }
export function makeCreateDeliveryRevocationTargetDeliveryMethodRevision(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryRevocationTargetDeliveryMethodRevision"), constraints: true}); }
export function makeCreateDeliveryRevocationTargetDeliveryRateCallbackRevision(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryRevocationTargetDeliveryRateCallbackRevision"), constraints: true}); }
export function makeCreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryRevocationTargetDeliveryRateCallbackSigningKey"), constraints: true}); }
export function makeCreateDeliveryRevocationTargetLocationGeography(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateDeliveryRevocationTargetLocationGeography"), constraints: true}); }
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
export function makeCreateIntervalReportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateIntervalReportRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentConditionChangeRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentCorrectionRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentCountedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentCountedRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentQuantityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentQuantityRequest"), constraints: true}); }
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAdjustmentRequest"), constraints: true}); }
export function makeCreateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryAllocationPolicyRequest"), constraints: true}); }
export function makeCreateInventoryBackorderPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateInventoryBackorderPolicyRequest"), constraints: true}); }
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
export function makeCreateMeSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateMeSubscriptionPreviewRequestPlanChange"), constraints: true}); }
export function makeCreateMeSubscriptionPreviewRequestQuantityChange(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateMeSubscriptionPreviewRequestQuantityChange"), constraints: true}); }
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierGroupRequest"), constraints: true}); }
export function makeCreateModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierRequest"), constraints: true}); }
export function makeCreateModifierSetGroupInputExisting(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupInputExisting"), constraints: true}); }
export function makeCreateModifierSetGroupInputInline(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupInputInline"), constraints: true}); }
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupRequest"), constraints: true}); }
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetRequest"), constraints: true}); }
export function makeCreateOrderDiscount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscount"), constraints: true}); }
export function makeCreateOrderDiscountManual(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscountManual"), constraints: true}); }
export function makeCreateOrderDiscountPromotion(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscountPromotion"), constraints: true}); }
export function makeCreateOrderEditRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderEditRequest"), constraints: true}); }
export function makeCreateOrderLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemInputBundle"), constraints: true}); }
export function makeCreateOrderLineItemInputCustom(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemInputCustom"), constraints: true}); }
export function makeCreateOrderLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemInputVariant"), constraints: true}); }
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemRequest"), constraints: true}); }
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderPaymentIntentRequest"), constraints: true}); }
export function makeCreateOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderRequest"), constraints: true}); }
export function makeCreateOrderTip(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTip"), constraints: true}); }
export function makeCreateOrderTipAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTipAmount"), constraints: true}); }
export function makeCreateOrderTipPercent(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTipPercent"), constraints: true}); }
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
export function makeCreatePriceListPricesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePriceListPricesRequest"), constraints: true}); }
export function makeCreatePriceListRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePriceListRequest"), constraints: true}); }
export function makeCreateProductOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionRequest"), constraints: true}); }
export function makeCreateProductOptionValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionValueRequest"), constraints: true}); }
export function makeCreateProductRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequest"), constraints: true}); }
export function makeCreateProductRequestOptioned(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequestOptioned"), constraints: true}); }
export function makeCreateProductRequestSimple(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequestSimple"), constraints: true}); }
export function makeCreatePromotionCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionCodeRequest"), constraints: true}); }
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionRequest"), constraints: true}); }
export function makeCreateReceivablesAgingReportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReceivablesAgingReportRequest"), constraints: true}); }
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequest"), constraints: true}); }
export function makeCreateRefundRequestAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestAmount"), constraints: true}); }
export function makeCreateRefundRequestCreditNote(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestCreditNote"), constraints: true}); }
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
export function makeCreateSubscriptionPreviewRequestPromotionApply(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestPromotionApply"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestQuantityChange(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestQuantityChange"), constraints: true}); }
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionRequest"), constraints: true}); }
export function makeCreateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateTaxCalculationCallbackRequest"), constraints: true}); }
export function makeCreateTaxRegistrationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateTaxRegistrationRequest"), constraints: true}); }
export function makeCreateTestClockRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateTestClockRequest"), constraints: true}); }
export function makeCreateWebhookDeliveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookDeliveryRequest"), constraints: true}); }
export function makeCreateWebhookEndpointRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookEndpointRequest"), constraints: true}); }
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWebhookTestEventRequest"), constraints: true}); }
export function makeCreateWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateWorkloadIdentityRequest"), constraints: true}); }
export function makeCreditNoteCorrectionRequestAmountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteCorrectionRequestAmountRequest"), constraints: true}); }
export function makeCreditNoteCorrectionRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteCorrectionRequestModel"), constraints: true}); }
export function makeCreditNoteCorrectionRequestQuantityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteCorrectionRequestQuantityRequest"), constraints: true}); }
export function makeCreditNoteIssueAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteIssueAllocationRequest"), constraints: true}); }
export function makeCreditNoteLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteLineItemRequest"), constraints: true}); }
export function makeCreditNoteRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreditNoteRefundRequest"), constraints: true}); }
export function makeCustomerAccountPresentationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountPresentationRequest"), constraints: true}); }
export function makeCustomerAccountRouteTemplatesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountRouteTemplatesRequest"), constraints: true}); }
export function makeCustomerAccountSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountSettingsRequest"), constraints: true}); }
export function makeCustomerEmailDeliverySettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerEmailDeliverySettingsRequest"), constraints: true}); }
export function makeCustomerTaxExemptionCoverageAllStatesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerTaxExemptionCoverageAllStatesRequest"), constraints: true}); }
export function makeCustomerTaxExemptionCoverageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerTaxExemptionCoverageRequest"), constraints: true}); }
export function makeCustomerTaxExemptionCoverageStatesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerTaxExemptionCoverageStatesRequest"), constraints: true}); }
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
export function makeDeliveryChargeTaxCalculationRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryChargeTaxCalculationRequestModel"), constraints: true}); }
export function makeDeliveryCoordinateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCoordinateRequest"), constraints: true}); }
export function makeDeliveryCountryConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCountryConditionRequest"), constraints: true}); }
export function makeDeliveryCustomerBooleanCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCustomerBooleanCondition"), constraints: true}); }
export function makeDeliveryCustomerSegmentCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryCustomerSegmentCondition"), constraints: true}); }
export function makeDeliveryDistanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryDistanceRequest"), constraints: true}); }
export function makeDeliveryDistanceUnitPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryDistanceUnitPriceRequest"), constraints: true}); }
export function makeDeliveryEligibilityExpressionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryEligibilityExpressionRequest"), constraints: true}); }
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
export function makeDeliveryPostalCodeConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPostalCodeConditionRequest"), constraints: true}); }
export function makeDeliveryPostalCodeValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryPostalCodeValueRequest"), constraints: true}); }
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
export function makeDeliveryRadiusConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRadiusConditionRequest"), constraints: true}); }
export function makeDeliveryRadiusOrigin(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRadiusOrigin"), constraints: true}); }
export function makeDeliveryRateCallbackConfigurationPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackConfigurationPatchRequest"), constraints: true}); }
export function makeDeliveryRateCallbackConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateCallbackConfigurationRequest"), constraints: true}); }
export function makeDeliveryRateTablePricingStrategyCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateTablePricingStrategyCreateRequest"), constraints: true}); }
export function makeDeliveryRateTablePricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRateTablePricingStrategyRequest"), constraints: true}); }
export function makeDeliveryRecipientRequirementRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryRecipientRequirementRequest"), constraints: true}); }
export function makeDeliveryScheduleWindowRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryScheduleWindowRuleRequest"), constraints: true}); }
export function makeDeliverySelectionInstructionsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionInstructionsRequest"), constraints: true}); }
export function makeDeliverySelectionRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliverySelectionRecipientRequest"), constraints: true}); }
export function makeDeliveryStateConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryStateConditionRequest"), constraints: true}); }
export function makeDeliveryTieredPricingStrategyInputQuantityOrMoney(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategyInputQuantityOrMoney"), constraints: true}); }
export function makeDeliveryTieredPricingStrategyInputWeight(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategyInputWeight"), constraints: true}); }
export function makeDeliveryTieredPricingStrategyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTieredPricingStrategyRequest"), constraints: true}); }
export function makeDeliveryTransitTimeRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTransitTimeRuleRequest"), constraints: true}); }
export function makeDeliveryWeeklyIntervalRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeeklyIntervalRequest"), constraints: true}); }
export function makeDeliveryWeightUnitPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeightUnitPriceRequest"), constraints: true}); }
export function makeDeliveryWindowRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowRequest"), constraints: true}); }
export function makeDeliveryWindowTimeCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowTimeCondition"), constraints: true}); }
export function makeDeliveryZoneConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneConditionRequest"), constraints: true}); }
export function makeDeliveryZoneConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneConfigurationRequest"), constraints: true}); }
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DepartInventoryTransferRequest"), constraints: true}); }
export function makeDeveloperInitialAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperInitialAPIKeyRequest"), constraints: true}); }
export function makeDimensionsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DimensionsRequest"), constraints: true}); }
export function makeDisconnectTaxConnectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DisconnectTaxConnectionRequest"), constraints: true}); }
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DiscountPreviewRequest"), constraints: true}); }
export function makeDispatchFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DispatchFulfillmentRequest"), constraints: true}); }
export function makeDocumentTaxIDRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DocumentTaxIDRequest"), constraints: true}); }
export function makeEmailPreferenceLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("EmailPreferenceLinkRequest"), constraints: true}); }
export function makeFailFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FailFulfillmentRequest"), constraints: true}); }
export function makeFeedbackReportingClientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FeedbackReportingClientRequest"), constraints: true}); }
export function makeFreezeGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FreezeGiftCardRequest"), constraints: true}); }
export function makeFulfillmentItemizedPackagesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentItemizedPackagesRequest"), constraints: true}); }
export function makeFulfillmentLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentLineItemRequest"), constraints: true}); }
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentPackagingRequest"), constraints: true}); }
export function makeFulfillmentRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentRecipientRequest"), constraints: true}); }
export function makeFulfillmentSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentSettingsRequest"), constraints: true}); }
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentSinglePackageRequest"), constraints: true}); }
export function makeGetOrCreateReturnResolutionCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GetOrCreateReturnResolutionCheckoutSessionRequest"), constraints: true}); }
export function makeGiftCardCustomAmountBoundsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardCustomAmountBoundsRequest"), constraints: true}); }
export function makeGiftCardFundingSourceAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceAdjustmentRequest"), constraints: true}); }
export function makeGiftCardFundingSourceExternalPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceExternalPaymentRequest"), constraints: true}); }
export function makeGiftCardFundingSourceFlintManualPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceFlintManualPaymentRequest"), constraints: true}); }
export function makeGiftCardFundingSourceFlintPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceFlintPaymentRequest"), constraints: true}); }
export function makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest"), constraints: true}); }
export function makeGiftCardFundingSourceGiftCardRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceGiftCardRefundRequest"), constraints: true}); }
export function makeGiftCardFundingSourceImportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceImportRequest"), constraints: true}); }
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceRequest"), constraints: true}); }
export function makeGiftCardFundingSourceStoreCreditRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardFundingSourceStoreCreditRequest"), constraints: true}); }
export function makeGiftCardNotificationRecipient(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardNotificationRecipient"), constraints: true}); }
export function makeGiftCardProductConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardProductConfigurationRequest"), constraints: true}); }
export function makeGiftCardPurchaseDetailsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseDetailsRequest"), constraints: true}); }
export function makeGiftCardPurchaseRecipientPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRecipientPatchRequest"), constraints: true}); }
export function makeGiftCardPurchaseRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRecipientRequest"), constraints: true}); }
export function makeGiftCardVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardVersionRequest"), constraints: true}); }
export function makeHoldFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("HoldFulfillmentRequest"), constraints: true}); }
export function makeImageInputFile(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageInputFile"), constraints: true}); }
export function makeImageInputSourceURL(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageInputSourceURL"), constraints: true}); }
export function makeImageReferenceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageReferenceRequest"), constraints: true}); }
export function makeImageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ImageRequest"), constraints: true}); }
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {..._sdkModelCodec("InitialGiftCardFunding"), constraints: true}); }
export function makeInlineModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InlineModifierGroupRequest"), constraints: true}); }
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentConditionChangeLineRequest"), constraints: true}); }
export function makeInventoryAdjustmentQuantityLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentQuantityLineRequest"), constraints: true}); }
export function makeInventoryAdjustmentSetLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAdjustmentSetLineRequest"), constraints: true}); }
export function makeInventoryAllocationPolicyConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationPolicyConfigurationRequest"), constraints: true}); }
export function makeInventoryAllocationPolicyLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryAllocationPolicyLocation"), constraints: true}); }
export function makeInventoryBackorderPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryBackorderPolicyRequest"), constraints: true}); }
export function makeInventoryCountObservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryCountObservationRequest"), constraints: true}); }
export function makeInventoryItemCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryItemCreateRequest"), constraints: true}); }
export function makeInventoryOriginPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryOriginPolicyRequest"), constraints: true}); }
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryProvenanceRequest"), constraints: true}); }
export function makeInventoryReceiptLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReceiptLineRequest"), constraints: true}); }
export function makeInventoryReservationOwnerRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryReservationOwnerRequest"), constraints: true}); }
export function makeInventoryRoutingDemand(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingDemand"), constraints: true}); }
export function makeInventoryRoutingSourceInputFixedLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceInputFixedLocation"), constraints: true}); }
export function makeInventoryRoutingSourceInputPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceInputPolicy"), constraints: true}); }
export function makeInventoryRoutingSourceInputPolicyRevision(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceInputPolicyRevision"), constraints: true}); }
export function makeInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryRoutingSourceRequest"), constraints: true}); }
export function makeInventorySettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySettingsRequest"), constraints: true}); }
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySourceSystemRequest"), constraints: true}); }
export function makeInventoryTransferLineRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryTransferLineRequest"), constraints: true}); }
export function makeInvoiceAutopayRetryPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceAutopayRetryPolicy"), constraints: true}); }
export function makeInvoiceCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCheckoutSessionRequest"), constraints: true}); }
export function makeInvoiceCollectionInputAutomatic(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputAutomatic"), constraints: true}); }
export function makeInvoiceCollectionInputBuyerInitiated(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputBuyerInitiated"), constraints: true}); }
export function makeInvoiceCollectionInputExternal(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputExternal"), constraints: true}); }
export function makeInvoiceCollectionInputMerchantDefault(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionInputMerchantDefault"), constraints: true}); }
export function makeInvoiceCollectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceCollectionRequest"), constraints: true}); }
export function makeInvoiceLateFeePolicyFixedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFeePolicyFixedRequest"), constraints: true}); }
export function makeInvoiceLateFeePolicyPercentageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFeePolicyPercentageRequest"), constraints: true}); }
export function makeInvoiceLateFeePolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceLateFeePolicyRequest"), constraints: true}); }
export function makeInvoicePaymentDueInputCustomerDefault(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputCustomerDefault"), constraints: true}); }
export function makeInvoicePaymentDueInputDate(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputDate"), constraints: true}); }
export function makeInvoicePaymentDueInputMerchantDefault(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputMerchantDefault"), constraints: true}); }
export function makeInvoicePaymentDueInputNone(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputNone"), constraints: true}); }
export function makeInvoicePaymentDueInputPaymentTerms(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueInputPaymentTerms"), constraints: true}); }
export function makeInvoicePaymentDueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentDueRequest"), constraints: true}); }
export function makeInvoicePaymentOptionLimitRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentOptionLimitRequest"), constraints: true}); }
export function makeInvoicePaymentPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentPolicyRequest"), constraints: true}); }
export function makeInvoicePaymentTermCalculationDayOfMonthRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationDayOfMonthRequest"), constraints: true}); }
export function makeInvoicePaymentTermCalculationDayOfNextMonthRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationDayOfNextMonthRequest"), constraints: true}); }
export function makeInvoicePaymentTermCalculationDaysAfterMonthEndRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationDaysAfterMonthEndRequest"), constraints: true}); }
export function makeInvoicePaymentTermCalculationNetDaysRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationNetDaysRequest"), constraints: true}); }
export function makeInvoicePaymentTermCalculationOnReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationOnReceiptRequest"), constraints: true}); }
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoicePaymentTermCalculationRequest"), constraints: true}); }
export function makeInvoiceReminderPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceReminderPolicy"), constraints: true}); }
export function makeInvoiceReminderRule(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceReminderRule"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecificationFixedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecificationFixedRequest"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecificationPercentageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecificationPercentageRequest"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecificationRemainingBalanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecificationRemainingBalanceRequest"), constraints: true}); }
export function makeInvoiceScheduleAmountSpecificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("InvoiceScheduleAmountSpecificationRequest"), constraints: true}); }
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
export function makeLineItemFulfillmentOriginRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentOriginRequestModel"), constraints: true}); }
export function makeLineItemFulfillmentRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentRequestModel"), constraints: true}); }
export function makeLinkCustomerGuestPurchasesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LinkCustomerGuestPurchasesRequest"), constraints: true}); }
export function makeLocationCoordinateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationCoordinateRequest"), constraints: true}); }
export function makeLookupEmailPreferencesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LookupEmailPreferencesRequest"), constraints: true}); }
export function makeLookupGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LookupGiftCardRequest"), constraints: true}); }
export function makeLookupTicketRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LookupTicketRequest"), constraints: true}); }
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ManualDiscountRequest"), constraints: true}); }
export function makeMarkFulfillmentNoShowRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkFulfillmentNoShowRequest"), constraints: true}); }
export function makeMarkFulfillmentPackedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkFulfillmentPackedRequest"), constraints: true}); }
export function makeMarkFulfillmentPickedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkFulfillmentPickedRequest"), constraints: true}); }
export function makeMarkFulfillmentPreparingRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkFulfillmentPreparingRequest"), constraints: true}); }
export function makeMarkFulfillmentReadyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkFulfillmentReadyRequest"), constraints: true}); }
export function makeMarkPackageDeliveredRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackageDeliveredRequest"), constraints: true}); }
export function makeMarkPackageDeliveryAttemptedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackageDeliveryAttemptedRequest"), constraints: true}); }
export function makeMarkPackageExceptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackageExceptionRequest"), constraints: true}); }
export function makeMarkPackageInTransitRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackageInTransitRequest"), constraints: true}); }
export function makeMarkPackageOutForDeliveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackageOutForDeliveryRequest"), constraints: true}); }
export function makeMarkPackagePackedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackagePackedRequest"), constraints: true}); }
export function makeMarkPackageReturnedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackageReturnedRequest"), constraints: true}); }
export function makeMarkPackageShippedRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MarkPackageShippedRequest"), constraints: true}); }
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionCreateRequest"), constraints: true}); }
export function makeMerchantAccountSessionRefreshRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionRefreshRequest"), constraints: true}); }
export function makeMetadataPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MetadataPatchRequest"), constraints: true}); }
export function makeMetadataRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MetadataRequest"), constraints: true}); }
export function makeModifierOverrideRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierOverrideRequest"), constraints: true}); }
export function makeModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierRequest"), constraints: true}); }
export function makeModifierSetGroupInputExisting(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroupInputExisting"), constraints: true}); }
export function makeModifierSetGroupInputInline(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroupInputInline"), constraints: true}); }
export function makeModifierSetGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ModifierSetGroupRequest"), constraints: true}); }
export function makeMoneyValue(value) { return modelFromCodec(value, {..._sdkModelCodec("MoneyValue"), constraints: true}); }
export function makeOAuthRevokeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OAuthRevokeRequest"), constraints: true}); }
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OAuthTokenRequest"), constraints: true}); }
export function makeOAuthTokenRequestAuthorizationCode(value) { return modelFromCodec(value, {..._sdkModelCodec("OAuthTokenRequestAuthorizationCode"), constraints: true}); }
export function makeOAuthTokenRequestClientCredentials(value) { return modelFromCodec(value, {..._sdkModelCodec("OAuthTokenRequestClientCredentials"), constraints: true}); }
export function makeOAuthTokenRequestDeviceCode(value) { return modelFromCodec(value, {..._sdkModelCodec("OAuthTokenRequestDeviceCode"), constraints: true}); }
export function makeOAuthTokenRequestRefreshToken(value) { return modelFromCodec(value, {..._sdkModelCodec("OAuthTokenRequestRefreshToken"), constraints: true}); }
export function makeOAuthTokenRequestTokenExchange(value) { return modelFromCodec(value, {..._sdkModelCodec("OAuthTokenRequestTokenExchange"), constraints: true}); }
export function makeOnboardingAdvanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingAdvanceRequest"), constraints: true}); }
export function makeOnboardingProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingProfileRequest"), constraints: true}); }
export function makeOnboardingStartRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingStartRequest"), constraints: true}); }
export function makeOnboardingVerifyEmailRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OnboardingVerifyEmailRequest"), constraints: true}); }
export function makeOrderCalculatedChargeTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderCalculatedChargeTaxRequest"), constraints: true}); }
export function makeOrderCalculatedLineItemTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderCalculatedLineItemTaxRequest"), constraints: true}); }
export function makeOrderChargeInputAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeInputAmount"), constraints: true}); }
export function makeOrderChargeInputPercent(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeInputPercent"), constraints: true}); }
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeRequest"), constraints: true}); }
export function makeOrderChargeTaxAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeTaxAssignment"), constraints: true}); }
export function makeOrderDeliveryDestinationRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRecipientRequest"), constraints: true}); }
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRequest"), constraints: true}); }
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemInventoryDemandRequest"), constraints: true}); }
export function makeOrderDraftLineItemTaxCalculationRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxCalculationRequestModel"), constraints: true}); }
export function makeOrderDraftLineItemTaxRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxRequestModel"), constraints: true}); }
export function makeOrderDraftTaxComponentRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxComponentRequestModel"), constraints: true}); }
export function makeOrderDraftTaxJurisdictionRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxJurisdictionRequestModel"), constraints: true}); }
export function makeOrderEditPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderEditPreviewRequest"), constraints: true}); }
export function makeOrderEditRemovalRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderEditRemovalRequest"), constraints: true}); }
export function makeOrderGiftCardAllocationAcceptance(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardAllocationAcceptance"), constraints: true}); }
export function makeOrderLineItemModifierInputCatalogRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierInputCatalogRequest"), constraints: true}); }
export function makeOrderLineItemModifierInputTextRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierInputTextRequest"), constraints: true}); }
export function makeOrderLineItemModifierRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierRequestModel"), constraints: true}); }
export function makeOrderLineItemTaxAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemTaxAssignment"), constraints: true}); }
export function makeOrderLineItemTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemTaxRequest"), constraints: true}); }
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
export function makePartnerAppCredentialJWKSURLRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppCredentialJWKSURLRequest"), constraints: true}); }
export function makePartnerAppCredentialPublicKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppCredentialPublicKeyRequest"), constraints: true}); }
export function makePartnerAppCredentialWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppCredentialWorkloadIdentityRequest"), constraints: true}); }
export function makePartnerAppPermissionManifestEntryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppPermissionManifestEntryRequest"), constraints: true}); }
export function makePartnerAppPlatformProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppPlatformProfileRequest"), constraints: true}); }
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
export function makePaymentLinkResolvePrefillRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkResolvePrefillRequest"), constraints: true}); }
export function makePaymentLinkThemeConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkThemeConfig"), constraints: true}); }
export function makePaymentLinkThemePatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkThemePatchRequest"), constraints: true}); }
export function makePaymentSettingsPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSettingsPatch"), constraints: true}); }
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredential"), constraints: true}); }
export function makePaymentSourceCredentialPaymentMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredentialPaymentMethod"), constraints: true}); }
export function makePaymentSourceCredentialStripeConfirmationToken(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredentialStripeConfirmationToken"), constraints: true}); }
export function makePaymentSourceCredentialToken(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredentialToken"), constraints: true}); }
export function makePayOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequest"), constraints: true}); }
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestConfirmPaymentIntents"), constraints: true}); }
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestPay"), constraints: true}); }
export function makePayOrderRequestResume(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestResume"), constraints: true}); }
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestSetup"), constraints: true}); }
export function makePriceListPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PriceListPriceRequest"), constraints: true}); }
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProcessExistingReturnLineItemRequest"), constraints: true}); }
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProcessExistingReturnRequest"), constraints: true}); }
export function makeProductVariantRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantRequest"), constraints: true}); }
export function makeProductVariantSelectedOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ProductVariantSelectedOptionRequest"), constraints: true}); }
export function makePromotionAmountOffMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionAmountOffMethodRequest"), constraints: true}); }
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionApplicationMethodPatch"), constraints: true}); }
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionApplicationMethodRequest"), constraints: true}); }
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionBuyXGetYMethodRequest"), constraints: true}); }
export function makePromotionCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCodeRequest"), constraints: true}); }
export function makePromotionCombinesWithPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCombinesWithPatch"), constraints: true}); }
export function makePromotionCombinesWithRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionCombinesWithRequest"), constraints: true}); }
export function makePromotionExclusivityPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionExclusivityPatch"), constraints: true}); }
export function makePromotionExclusivityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionExclusivityRequest"), constraints: true}); }
export function makePromotionPercentOffMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionPercentOffMethodRequest"), constraints: true}); }
export function makePromotionRecurrenceForeverRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrenceForeverRequest"), constraints: true}); }
export function makePromotionRecurrenceOnceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrenceOnceRequest"), constraints: true}); }
export function makePromotionRecurrenceRepeatingRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrenceRepeatingRequest"), constraints: true}); }
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRecurrenceRequest"), constraints: true}); }
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
export function makeQuantityPriceBreakRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("QuantityPriceBreakRequest"), constraints: true}); }
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReceiveInventoryTransferRequest"), constraints: true}); }
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
export function makeReleaseFulfillmentHoldRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReleaseFulfillmentHoldRequest"), constraints: true}); }
export function makeReleaseInventoryReservationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReleaseInventoryReservationRequest"), constraints: true}); }
export function makeReleaseReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReleaseReturnResolutionRequest"), constraints: true}); }
export function makeRemoveDiscountsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RemoveDiscountsRequest"), constraints: true}); }
export function makeRemoveSubscriptionPromotionsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RemoveSubscriptionPromotionsRequest"), constraints: true}); }
export function makeRenewSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RenewSubscriptionRequest"), constraints: true}); }
export function makeReopenReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReopenReturnRequest"), constraints: true}); }
export function makeReportInventoryTransferLossRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReportInventoryTransferLossRequest"), constraints: true}); }
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
export function makeRetryOrderEditRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryOrderEditRefundRequest"), constraints: true}); }
export function makeRetryReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnDispositionRequest"), constraints: true}); }
export function makeRetryReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RetryReturnResolutionRequest"), constraints: true}); }
export function makeReturnEligibilityLineItemRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilityLineItemRequestModel"), constraints: true}); }
export function makeReturnEligibilitySelectionAllRemainingFulfilledRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilitySelectionAllRemainingFulfilledRequest"), constraints: true}); }
export function makeReturnEligibilitySelectionLineItemsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilitySelectionLineItemsRequest"), constraints: true}); }
export function makeReturnEligibilitySelectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnEligibilitySelectionRequest"), constraints: true}); }
export function makeReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnInspectionLineItemRequest"), constraints: true}); }
export function makeReturnInventoryTransferToOriginRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnInventoryTransferToOriginRequest"), constraints: true}); }
export function makeReturnLineDecision(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineDecision"), constraints: true}); }
export function makeReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnLineItemRequest"), constraints: true}); }
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevisionInputIneligible"), constraints: true}); }
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevisionInputReturnable"), constraints: true}); }
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyRevisionRequest"), constraints: true}); }
export function makeReturnPolicyScopeAllRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyScopeAllRequest"), constraints: true}); }
export function makeReturnPolicyScopeIncludeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyScopeIncludeRequest"), constraints: true}); }
export function makeReturnPolicyScopeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnPolicyScopeRequest"), constraints: true}); }
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
export function makeReturnRestockingFeePolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnRestockingFeePolicyRequest"), constraints: true}); }
export function makeReturnShipmentLineItemAllocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShipmentLineItemAllocationRequest"), constraints: true}); }
export function makeReturnShippingPolicyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShippingPolicyRequest"), constraints: true}); }
export function makeReturnSourceSystemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnSourceSystemRequest"), constraints: true}); }
export function makeReturnUnverifiedItem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnUnverifiedItem"), constraints: true}); }
export function makeReturnWindowRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnWindowRequest"), constraints: true}); }
export function makeReverseInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReverseInvoiceManualPaymentRequest"), constraints: true}); }
export function makeRiskPredicateNodeAllRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeAllRequest"), constraints: true}); }
export function makeRiskPredicateNodeAnyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeAnyRequest"), constraints: true}); }
export function makeRiskPredicateNodeComparisonRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeComparisonRequest"), constraints: true}); }
export function makeRiskPredicateNodeInListRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeInListRequest"), constraints: true}); }
export function makeRiskPredicateNodeInRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeInRequest"), constraints: true}); }
export function makeRiskPredicateNodeIsMissingRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeIsMissingRequest"), constraints: true}); }
export function makeRiskPredicateNodeMoneyComparisonRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeMoneyComparisonRequest"), constraints: true}); }
export function makeRiskPredicateNodeNotRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeNotRequest"), constraints: true}); }
export function makeRiskPredicateNodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RiskPredicateNodeRequest"), constraints: true}); }
export function makeRotateGiftCardCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotateGiftCardCodeRequest"), constraints: true}); }
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotatePartnerAppSecretRequest"), constraints: true}); }
export function makeRotateWebhookSecretRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotateWebhookSecretRequest"), constraints: true}); }
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequest"), constraints: true}); }
export function makeSaveMeGiftCardRequestCode(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequestCode"), constraints: true}); }
export function makeSaveMeGiftCardRequestRecipientAccess(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequestRecipientAccess"), constraints: true}); }
export function makeSaveMePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMePaymentMethodRequest"), constraints: true}); }
export function makeSavePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SavePaymentMethodRequest"), constraints: true}); }
export function makeScheduleFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ScheduleFulfillmentRequest"), constraints: true}); }
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
export function makeStartFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("StartFulfillmentRequest"), constraints: true}); }
export function makeSubscribedLineRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscribedLineRequestModel"), constraints: true}); }
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
export function makeSubscriptionEndAfterCyclesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionEndAfterCyclesRequest"), constraints: true}); }
export function makeSubscriptionEndAfterDateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionEndAfterDateRequest"), constraints: true}); }
export function makeSubscriptionEndAfterRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionEndAfterRequest"), constraints: true}); }
export function makeSubscriptionIntervalOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionIntervalOptionRequest"), constraints: true}); }
export function makeSubscriptionOfferLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionOfferLineItemRequest"), constraints: true}); }
export function makeSubscriptionOfferTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionOfferTermsRequest"), constraints: true}); }
export function makeSubscriptionPlanChangeLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanChangeLineItemRequest"), constraints: true}); }
export function makeSubscriptionPlanChangeOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanChangeOptionRequest"), constraints: true}); }
export function makeSubscriptionPlanLineItemInputBundle(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemInputBundle"), constraints: true}); }
export function makeSubscriptionPlanLineItemInputCustom(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemInputCustom"), constraints: true}); }
export function makeSubscriptionPlanLineItemInputVariant(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemInputVariant"), constraints: true}); }
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemRequest"), constraints: true}); }
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanTermsRequest"), constraints: true}); }
export function makeSubscriptionPromotionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPromotionRequest"), constraints: true}); }
export function makeSubscriptionQuantityChangeLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionQuantityChangeLineItemRequest"), constraints: true}); }
export function makeSubscriptionServiceLocationInputAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationInputAddress"), constraints: true}); }
export function makeSubscriptionServiceLocationInputCustomerAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationInputCustomerAddress"), constraints: true}); }
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationRequest"), constraints: true}); }
export function makeSubscriptionSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionSettingsRequest"), constraints: true}); }
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionTermsRequest"), constraints: true}); }
export function makeTaxCalculationCallbackConfigurationPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationCallbackConfigurationPatchRequest"), constraints: true}); }
export function makeTaxCalculationCallbackConfigurationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationCallbackConfigurationRequest"), constraints: true}); }
export function makeTaxCalculationRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationRequestModel"), constraints: true}); }
export function makeTaxCalculationRequestRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationRequestRequest"), constraints: true}); }
export function makeTaxComponentRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxComponentRequestModel"), constraints: true}); }
export function makeTaxComponentRequestRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxComponentRequestRequest"), constraints: true}); }
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityPatch"), constraints: true}); }
export function makeTaxIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityRequest"), constraints: true}); }
export function makeTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxJurisdictionRequest"), constraints: true}); }
export function makeTaxJurisdictionRequestModel(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxJurisdictionRequestModel"), constraints: true}); }
export function makeTaxSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxSettingsRequest"), constraints: true}); }
export function makeTextModifierConfigPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierConfigPatchRequest"), constraints: true}); }
export function makeTextModifierConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierConfigRequest"), constraints: true}); }
export function makeTextModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TextModifierRequest"), constraints: true}); }
export function makeThemeConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ThemeConfigRequest"), constraints: true}); }
export function makeTicketVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TicketVersionRequest"), constraints: true}); }
export function makeTippingSettingsPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("TippingSettingsPatch"), constraints: true}); }
export function makeUnfreezeGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UnfreezeGiftCardRequest"), constraints: true}); }
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateAPIKeyRequest"), constraints: true}); }
export function makeUpdateBundleComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateBundleComponentRequest"), constraints: true}); }
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateBundleRequest"), constraints: true}); }
export function makeUpdateCategoryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCategoryRequest"), constraints: true}); }
export function makeUpdateCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCheckoutSessionRequest"), constraints: true}); }
export function makeUpdateCreditNoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCreditNoteRequest"), constraints: true}); }
export function makeUpdateCustomerAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCustomerAddressRequest"), constraints: true}); }
export function makeUpdateCustomerEmailPreferencesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCustomerEmailPreferencesRequest"), constraints: true}); }
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCustomerRequest"), constraints: true}); }
export function makeUpdateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateCustomerTaxExemptionRequest"), constraints: true}); }
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
export function makeUpdatePackageItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageItemRequest"), constraints: true}); }
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePackageRequest"), constraints: true}); }
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePartnerAppRequest"), constraints: true}); }
export function makeUpdatePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePaymentIntentRequest"), constraints: true}); }
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePaymentLinkRequest"), constraints: true}); }
export function makeUpdatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePaymentMethodDomainRequest"), constraints: true}); }
export function makeUpdatePayoutDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePayoutDestinationRequest"), constraints: true}); }
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePayoutSettingsRequest"), constraints: true}); }
export function makeUpdatePickupFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePickupFulfillmentDetails"), constraints: true}); }
export function makeUpdatePriceListPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePriceListPriceRequest"), constraints: true}); }
export function makeUpdatePriceListRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdatePriceListRequest"), constraints: true}); }
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
export function makeUpdateTaxCalculationCallbackRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateTaxCalculationCallbackRequest"), constraints: true}); }
export function makeUpdateTaxRegistrationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateTaxRegistrationRequest"), constraints: true}); }
export function makeUpdateTicketRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateTicketRequest"), constraints: true}); }
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateWebhookEndpointRequest"), constraints: true}); }
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateWorkloadIdentityRequest"), constraints: true}); }
export function makeVerifyReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VerifyReturnReceiptLineItemRequest"), constraints: true}); }
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidPackageRequest"), constraints: true}); }
export function makeVoidShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidShipmentRequest"), constraints: true}); }
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveInvoiceLateFeeRequest"), constraints: true}); }
export function makeWaiveReturnLineInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveReturnLineInspectionRequest"), constraints: true}); }
export function makeWebhookSigningMethod(value) { return modelFromCodec(value, {..._sdkModelCodec("WebhookSigningMethod"), constraints: true}); }
export function makeWeightRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WeightRequest"), constraints: true}); }
export function makeWorkloadIdentityClaimConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WorkloadIdentityClaimConditionRequest"), constraints: true}); }
