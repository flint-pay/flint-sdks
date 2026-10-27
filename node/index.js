import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from './response.js';
import { requestInput as _sdkRequestInput } from './request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from './runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from './runtime.js';
import { resource, webhook, modelCodec as _sdkModelCodec } from './descriptors/root.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
const r0 = () => resource("analytics");
const r1 = () => resource("apiKeys");
const r2 = () => resource("balanceTransactions");
const r3 = () => resource("balances");
const r4 = () => resource("bundles");
const r5 = () => resource("categories");
const r6 = () => resource("checkoutSessions");
const r7 = () => resource("creditNotes");
const r8 = () => resource("customDomains");
const r9 = () => resource("customerDeletionRequests");
const r10 = () => resource("customerSessions");
const r11 = () => resource("customerVerifications");
const r12 = () => resource("customers");
const r13 = () => resource("deliveryLocationSets");
const r14 = () => resource("deliveryMethods");
const r15 = () => resource("deliveryPreviews");
const r16 = () => resource("deliveryProfiles");
const r17 = () => resource("deliveryQuotes");
const r18 = () => resource("deliveryRateCallbacks");
const r19 = () => resource("deliveryRevocations");
const r20 = () => resource("deliveryZones");
const r21 = () => resource("demoSessions");
const r22 = () => resource("developer");
const r23 = () => resource("devices");
const r24 = () => resource("discountPreviews");
const r25 = () => resource("disputes");
const r26 = () => resource("emailPreferenceLinks");
const r27 = () => resource("feedbackReports");
const r28 = () => resource("files");
const r29 = () => resource("fraudWarnings");
const r30 = () => resource("fulfillmentEvents");
const r31 = () => resource("fulfillmentNotifications");
const r32 = () => resource("fulfillments");
const r33 = () => resource("giftCardAdjustments");
const r34 = () => resource("giftCardCashOuts");
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
const r54 = () => resource("merchantAccountSessions");
const r55 = () => resource("merchantBillingBalances");
const r56 = () => resource("merchantBillingEntries");
const r57 = () => resource("merchantSubscriptionInvoices");
const r58 = () => resource("merchants");
const r59 = () => resource("modifierGroups");
const r60 = () => resource("modifierSets");
const r61 = () => resource("oauth");
const r62 = () => resource("onboarding");
const r63 = () => resource("orders");
const r64 = () => resource("organizations");
const r65 = () => resource("packages");
const r66 = () => resource("partnerAppInstalls");
const r67 = () => resource("paymentIntents");
const r68 = () => resource("paymentLinks");
const r69 = () => resource("paymentMethodDomains");
const r70 = () => resource("paymentMethods");
const r71 = () => resource("payoutSettings");
const r72 = () => resource("payouts");
const r73 = () => resource("products");
const r74 = () => resource("promotions");
const r75 = () => resource("refunds");
const r76 = () => resource("reportDownloads");
const r77 = () => resource("reports");
const r78 = () => resource("returnDispositions");
const r79 = () => resource("returnInspections");
const r80 = () => resource("returnPolicies");
const r81 = () => resource("returnPreviews");
const r82 = () => resource("returnReasons");
const r83 = () => resource("returnReceipts");
const r84 = () => resource("returnResolutions");
const r85 = () => resource("returns");
const r86 = () => resource("reviews");
const r87 = () => resource("riskLists");
const r88 = () => resource("riskPreviews");
const r89 = () => resource("riskRules");
const r90 = () => resource("settings");
const r91 = () => resource("shipments");
const r92 = () => resource("specification");
const r93 = () => resource("subscriptionDeliveryMigrations");
const r94 = () => resource("subscriptionOffers");
const r95 = () => resource("subscriptionPlans");
const r96 = () => resource("subscriptionPreviews");
const r97 = () => resource("subscriptions");
const r98 = () => resource("webhookDeliveries");
const r99 = () => resource("webhookEndpoints");
const r100 = () => resource("webhookEventTypes");
const r101 = () => resource("webhookEvents");
const r102 = () => resource("workloadIdentities");
import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["getAnalyticsOverview"]:r0,["getPaymentVolumeTimeseries"]:r0,["getSubscriptionAnalytics"]:r0,["createAPIKey"]:r1,["getAPIKey"]:r1,["listAPIKeys"]:r1,["revokeAPIKey"]:r1,["updateAPIKey"]:r1,["getBalanceTransaction"]:r2,["listBalanceTransactions"]:r2,["listBalances"]:r3,["createBundle"]:r4,["deleteBundle"]:r4,["getBundle"]:r4,["listBundleComponents"]:r4,["listBundles"]:r4,["updateBundle"]:r4,["createCategory"]:r5,["deleteCategory"]:r5,["getCategory"]:r5,["listCategories"]:r5,["updateCategory"]:r5,["closeCheckoutSession"]:r6,["confirmCheckoutSessionCustomerVerification"]:r6,["createCheckoutSession"]:r6,["createCheckoutSessionCustomerVerification"]:r6,["createCheckoutSessionDeliveryQuote"]:r6,["createCheckoutSessionDeliverySelection"]:r6,["deleteCheckoutSessionCurrentDeliverySelection"]:r6,["getCheckoutSession"]:r6,["getCheckoutSessionCurrentDeliverySelection"]:r6,["getCheckoutSessionDeliveryQuote"]:r6,["getCheckoutSessionDeliverySelectionHistory"]:r6,["listCheckoutSessions"]:r6,["updateCheckoutSession"]:r6,["createCreditNote"]:r7,["createCreditNoteAllocation"]:r7,["createCreditNoteRefund"]:r7,["getCreditNote"]:r7,["getCreditNoteAllocation"]:r7,["getCreditNotePDF"]:r7,["issueCreditNote"]:r7,["listCreditNoteAllocations"]:r7,["listCreditNoteRefunds"]:r7,["listCreditNotes"]:r7,["reverseCreditNoteAllocation"]:r7,["updateCreditNote"]:r7,["voidCreditNote"]:r7,["createCustomDomain"]:r8,["deleteCustomDomain"]:r8,["getCustomDomain"]:r8,["listCustomDomains"]:r8,["listCustomerDeletionRequests"]:r9,["resolveCustomerDeletionRequest"]:r9,["createCustomerSession"]:r10,["refreshCustomerSession"]:r10,["revokeCustomerSession"]:r10,["confirmCustomerVerification"]:r11,["createCustomerVerification"]:r11,["createCustomer"]:r12,["createCustomerAccessLink"]:r12,["createCustomerAddress"]:r12,["createCustomerDeletionRequest"]:r12,["deleteCustomerAddress"]:r12,["getCustomer"]:r12,["getCustomerAddress"]:r12,["getCustomerDeletionRequest"]:r12,["linkCustomerGuestPurchases"]:r12,["listCustomerAddresses"]:r12,["listCustomers"]:r12,["revokeCustomerSessions"]:r12,["setDefaultCustomerAddress"]:r12,["updateCustomer"]:r12,["updateCustomerAddress"]:r12,["createDeliveryLocationSet"]:r13,["deleteDeliveryLocationSet"]:r13,["getDeliveryLocationSet"]:r13,["listDeliveryLocationSets"]:r13,["updateDeliveryLocationSet"]:r13,["createDeliveryMethod"]:r14,["deleteDeliveryMethod"]:r14,["getDeliveryMethod"]:r14,["listDeliveryMethods"]:r14,["updateDeliveryMethod"]:r14,["createDeliveryPreview"]:r15,["assignToUnconfiguredDeliveryProfile"]:r16,["createDeliveryProfile"]:r16,["deleteDeliveryProfile"]:r16,["getDeliveryProfile"]:r16,["listDeliveryProfiles"]:r16,["updateDeliveryProfile"]:r16,["getDeliveryQuote"]:r17,["listDeliveryQuotes"]:r17,["checkDeliveryRateCallbackConnection"]:r18,["createDeliveryRateCallback"]:r18,["createDeliveryRateCallbackTestDelivery"]:r18,["deleteDeliveryRateCallback"]:r18,["getDeliveryRateCallback"]:r18,["listDeliveryRateCallbacks"]:r18,["rotateDeliveryRateCallbackSigningKey"]:r18,["updateDeliveryRateCallback"]:r18,["getDeliveryRevocation"]:r19,["revokeDeliveryDependency"]:r19,["createDeliveryZone"]:r20,["deleteDeliveryZone"]:r20,["getDeliveryZone"]:r20,["listDeliveryZones"]:r20,["updateDeliveryZone"]:r20,["createDemoSession"]:r21,["resetDemoSession"]:r21,["createDeveloperPartnerApp"]:r22,["createDeveloperSandbox"]:r22,["deleteDeveloperPartnerApp"]:r22,["deleteDeveloperSandbox"]:r22,["getAPIRequestLog"]:r22,["getDeveloperAuthContext"]:r22,["getDeveloperPartnerApp"]:r22,["getDeveloperPartnerAppInstall"]:r22,["getDeveloperSandbox"]:r22,["getResourceTimeline"]:r22,["issueDeveloperSandboxTestKey"]:r22,["listAPIRequestLogs"]:r22,["listDeveloperPartnerAppInstalls"]:r22,["listDeveloperPartnerApps"]:r22,["listDeveloperPartnerInstalls"]:r22,["listDeveloperSandboxes"]:r22,["resetDeveloperSandbox"]:r22,["revokeDeveloperPartnerAppInstall"]:r22,["revokeDeveloperPartnerEnvironmentGrant"]:r22,["rotateDeveloperPartnerAppSecret"]:r22,["updateDeveloperPartnerApp"]:r22,["createDevice"]:r23,["deleteDevice"]:r23,["getDevice"]:r23,["listDevices"]:r23,["updateDevice"]:r23,["createDiscountPreview"]:r24,["createDisputeResponseSession"]:r25,["getDispute"]:r25,["listDisputes"]:r25,["lookupEmailPreferenceLink"]:r26,["unsubscribeEmailPreferenceLink"]:r26,["createFeedbackReport"]:r27,["getFeedbackReport"]:r27,["listFeedbackReports"]:r27,["completeFile"]:r28,["createFile"]:r28,["getFile"]:r28,["getFraudWarning"]:r29,["listFraudWarnings"]:r29,["getFulfillmentEvent"]:r30,["listFulfillmentEvents"]:r30,["getFulfillmentNotification"]:r31,["listFulfillmentNotifications"]:r31,["createFulfillmentEvent"]:r32,["createShipment"]:r32,["getFulfillment"]:r32,["listFulfillments"]:r32,["transitionFulfillment"]:r32,["updateFulfillment"]:r32,["adjustGiftCardBalance"]:r33,["cashOutGiftCard"]:r34,["createGiftCardFundingDisposition"]:r35,["getGiftCardFundingDisposition"]:r35,["listGiftCardFundingDispositions"]:r35,["createGiftCardLoad"]:r36,["getGiftCardLoad"]:r36,["listGiftCardLoads"]:r36,["cancelGiftCardNotification"]:r37,["createGiftCardNotification"]:r37,["getGiftCardNotification"]:r37,["listGiftCardNotifications"]:r37,["cancelGiftCardRedemption"]:r38,["captureGiftCardRedemption"]:r38,["createGiftCardRedemption"]:r38,["getGiftCardRedemption"]:r38,["listGiftCardRedemptions"]:r38,["listGiftCardTransactions"]:r39,["createGiftCard"]:r40,["getGiftCard"]:r40,["listGiftCards"]:r40,["lookupGiftCard"]:r40,["rotateGiftCardCode"]:r40,["transitionGiftCard"]:r40,["updateGiftCard"]:r40,["createInventoryAdjustment"]:r41,["getInventoryAdjustment"]:r41,["listInventoryAdjustments"]:r41,["createInventoryAllocationPolicy"]:r42,["deleteInventoryAllocationPolicy"]:r42,["getInventoryAllocationPolicy"]:r42,["getInventoryAllocationPolicyRevision"]:r42,["listInventoryAllocationPolicies"]:r42,["listInventoryAllocationPolicyRevisions"]:r42,["updateInventoryAllocationPolicy"]:r42,["createInventoryCount"]:r43,["getInventoryCount"]:r43,["listInventoryCounts"]:r43,["transitionInventoryCount"]:r43,["updateInventoryCount"]:r43,["createInventoryItem"]:r44,["deleteInventoryItem"]:r44,["getInventoryItem"]:r44,["listInventoryItems"]:r44,["updateInventoryItem"]:r44,["getInventoryLevel"]:r45,["listInventoryLevels"]:r45,["updateInventoryLevel"]:r45,["getInventoryMovement"]:r46,["listInventoryMovements"]:r46,["createInventoryReceipt"]:r47,["getInventoryReceipt"]:r47,["listInventoryReceipts"]:r47,["createInventoryReservation"]:r48,["getInventoryReservation"]:r48,["listInventoryReservations"]:r48,["transitionInventoryReservation"]:r48,["updateInventoryReservation"]:r48,["createInventoryTransfer"]:r49,["getInventoryTransfer"]:r49,["listInventoryTransfers"]:r49,["transitionInventoryTransfer"]:r49,["updateInventoryTransfer"]:r49,["createInvoicePaymentTerm"]:r50,["deleteInvoicePaymentTerm"]:r50,["getInvoicePaymentTerm"]:r50,["listInvoicePaymentTerms"]:r50,["updateInvoicePaymentTerm"]:r50,["cancelInvoicePaymentAttempt"]:r51,["collectInvoice"]:r51,["createInvoice"]:r51,["createInvoiceLateFee"]:r51,["createInvoiceManualPayment"]:r51,["getInvoice"]:r51,["getInvoiceManualPayment"]:r51,["getInvoicePaymentAttempt"]:r51,["getInvoicePDF"]:r51,["getOrCreateInvoiceCheckoutSession"]:r51,["issueInvoice"]:r51,["listInvoiceActivities"]:r51,["listInvoiceDeliveryAttempts"]:r51,["listInvoiceManualPayments"]:r51,["listInvoicePaymentAttempts"]:r51,["listInvoices"]:r51,["markInvoiceUncollectible"]:r51,["regenerateInvoicePublicLink"]:r51,["reverseInvoiceManualPayment"]:r51,["sendInvoiceReminder"]:r51,["updateInvoice"]:r51,["voidInvoice"]:r51,["waiveInvoiceLateFee"]:r51,["createLocation"]:r52,["deleteLocation"]:r52,["getLocation"]:r52,["listLocations"]:r52,["updateLocation"]:r52,["cancelMeReturn"]:r53,["cancelMeSubscription"]:r53,["changeMeSubscriptionBillingInterval"]:r53,["changeMeSubscriptionDelivery"]:r53,["changeMeSubscriptionPaymentMethod"]:r53,["changeMeSubscriptionQuantity"]:r53,["confirmMeEmailChangeRequest"]:r53,["createMeAddress"]:r53,["createMeDeletionRequest"]:r53,["createMeEmailChangeRequest"]:r53,["createMeFlintWalletStoreSetup"]:r53,["createMeInvoiceCheckoutSession"]:r53,["createMePaymentMethod"]:r53,["createMeReturn"]:r53,["createMeReturnPreview"]:r53,["createMeReturnResolutionCheckoutSession"]:r53,["createMeSubscriptionPaymentRetry"]:r53,["createMeSubscriptionPreview"]:r53,["deleteMeAddress"]:r53,["deleteMePaymentMethod"]:r53,["getMe"]:r53,["getMeAddress"]:r53,["getMeCreditNote"]:r53,["getMeCreditNotePDF"]:r53,["getMeDeletionRequest"]:r53,["getMeEmailPreferences"]:r53,["getMeFulfillment"]:r53,["getMeGiftCard"]:r53,["getMeInvoice"]:r53,["getMeInvoicePDF"]:r53,["getMeOrder"]:r53,["getMePackage"]:r53,["getMePayment"]:r53,["getMePaymentMethod"]:r53,["getMeRefund"]:r53,["getMeReturn"]:r53,["getMeReturnResolution"]:r53,["getMeShipment"]:r53,["getMeSubscription"]:r53,["getMeSubscriptionPaymentRetry"]:r53,["listMeAddresses"]:r53,["listMeCreditNotes"]:r53,["listMeDeletionRequests"]:r53,["listMeFlintWalletPaymentMethods"]:r53,["listMeFulfillmentEvents"]:r53,["listMeFulfillments"]:r53,["listMeGiftCards"]:r53,["listMeGiftCardTransactions"]:r53,["listMeInvoices"]:r53,["listMeOrderActivities"]:r53,["listMeOrders"]:r53,["listMePackages"]:r53,["listMePaymentMethods"]:r53,["listMePayments"]:r53,["listMeRefunds"]:r53,["listMeReturns"]:r53,["listMeShipments"]:r53,["listMeSubscriptions"]:r53,["pauseMeSubscription"]:r53,["reactivateMeSubscription"]:r53,["removeMeGiftCard"]:r53,["renewMeSubscription"]:r53,["resumeMeSubscription"]:r53,["revokeMeSession"]:r53,["saveMeGiftCard"]:r53,["sendMeOrderReceipt"]:r53,["setDefaultMeAddress"]:r53,["skipMeSubscriptionCycle"]:r53,["updateMe"]:r53,["updateMeAddress"]:r53,["updateMeEmailPreferences"]:r53,["updateMeSubscription"]:r53,["updateMeSubscriptionLineItem"]:r53,["createMerchantAccountSession"]:r54,["refreshMerchantAccountSession"]:r54,["getMerchantBillingBalance"]:r55,["listMerchantBillingBalances"]:r55,["listMerchantBillingEntries"]:r56,["getMerchantBillingInvoice"]:r57,["listMerchantBillingInvoices"]:r57,["getMerchant"]:r58,["updateMerchant"]:r58,["createModifierGroup"]:r59,["deleteModifierGroup"]:r59,["getModifierGroup"]:r59,["listModifierGroups"]:r59,["updateModifierGroup"]:r59,["createModifierSet"]:r60,["deleteModifierSet"]:r60,["getModifierSet"]:r60,["listModifierSets"]:r60,["updateModifierSet"]:r60,["authorizePartnerInstall"]:r61,["previewPartnerInstallAuthorization"]:r61,["advanceOnboarding"]:r62,["createOnboardingAPIKey"]:r62,["getOnboardingState"]:r62,["startOnboarding"]:r62,["verifyOnboardingEmail"]:r62,["applyOrderDiscount"]:r63,["applyOrderGiftCard"]:r63,["cancelOrderPayment"]:r63,["cancelOrderPaymentAttempt"]:r63,["captureOrderPayment"]:r63,["closeOrder"]:r63,["createFulfillment"]:r63,["createOrder"]:r63,["createOrderAccessLink"]:r63,["createOrderCharge"]:r63,["createOrderLineItems"]:r63,["createOrderPaymentIntent"]:r63,["deleteOrderCharge"]:r63,["deleteOrderLineItem"]:r63,["getOrder"]:r63,["getOrderCurrentDeliverySelection"]:r63,["getOrderPaymentAttempt"]:r63,["listOrderActivities"]:r63,["listOrderPaymentAttempts"]:r63,["listOrders"]:r63,["payOrder"]:r63,["removeOrderDiscounts"]:r63,["removeOrderGiftCard"]:r63,["repriceOrderDiscounts"]:r63,["resolveOrderInventoryException"]:r63,["sendOrderReceipt"]:r63,["updateOrder"]:r63,["updateOrderCharge"]:r63,["updateOrderLineItem"]:r63,["createOrganization"]:r64,["deleteOrganization"]:r64,["getOrganization"]:r64,["grantOrganizationMembership"]:r64,["listOrganizationMemberships"]:r64,["listOrganizations"]:r64,["removeOrganizationMembership"]:r64,["updateOrganization"]:r64,["createPackageItem"]:r65,["deletePackageItem"]:r65,["getPackage"]:r65,["getPackageItem"]:r65,["listPackageItems"]:r65,["listPackages"]:r65,["transitionPackage"]:r65,["updatePackage"]:r65,["updatePackageItem"]:r65,["voidPackage"]:r65,["listMerchantPartnerAppInstalls"]:r66,["revokeMerchantPartnerAppInstall"]:r66,["cancelPaymentIntent"]:r67,["capturePaymentIntent"]:r67,["confirmPaymentIntent"]:r67,["createPaymentIntent"]:r67,["getPaymentIntent"]:r67,["listPaymentIntentActivities"]:r67,["listPaymentIntents"]:r67,["sendPaymentIntentReceipt"]:r67,["updatePaymentIntent"]:r67,["createPaymentLink"]:r68,["getPaymentLink"]:r68,["getPaymentLinkPublic"]:r68,["listPaymentLinks"]:r68,["resolvePaymentLink"]:r68,["updatePaymentLink"]:r68,["createPaymentMethodDomain"]:r69,["getPaymentMethodDomain"]:r69,["listPaymentMethodDomains"]:r69,["updatePaymentMethodDomain"]:r69,["createPaymentMethod"]:r70,["deletePaymentMethod"]:r70,["getPaymentMethod"]:r70,["listPaymentMethods"]:r70,["deletePayoutDestination"]:r71,["getPayoutDestination"]:r71,["getPayoutSettings"]:r71,["listPayoutDestinations"]:r71,["updatePayoutDestination"]:r71,["updatePayoutSettings"]:r71,["cancelPayout"]:r72,["createPayout"]:r72,["getPayout"]:r72,["listPayouts"]:r72,["createProduct"]:r73,["createProductVariant"]:r73,["deleteProduct"]:r73,["deleteProductVariant"]:r73,["getProduct"]:r73,["getProductOption"]:r73,["getProductVariant"]:r73,["listProductOptions"]:r73,["listProducts"]:r73,["listProductVariants"]:r73,["updateProduct"]:r73,["updateProductVariant"]:r73,["createPromotion"]:r74,["createPromotionCode"]:r74,["deletePromotion"]:r74,["deletePromotionCode"]:r74,["getPromotion"]:r74,["getPromotionCode"]:r74,["listPromotionCodes"]:r74,["listPromotions"]:r74,["updatePromotion"]:r74,["updatePromotionCode"]:r74,["createRefund"]:r75,["getRefund"]:r75,["listRefunds"]:r75,["updateRefund"]:r75,["getReportDownload"]:r76,["createReport"]:r77,["getReport"]:r77,["listReports"]:r77,["cancelReturnDisposition"]:r78,["getReturnDisposition"]:r78,["listReturnDispositions"]:r78,["retryReturnDisposition"]:r78,["decideReturnInspectionLineItem"]:r79,["getReturnInspection"]:r79,["listReturnInspections"]:r79,["createReturnPolicy"]:r80,["createReturnPolicyRevision"]:r80,["deleteReturnPolicy"]:r80,["getReturnPolicy"]:r80,["getReturnPolicyRevision"]:r80,["listReturnPolicies"]:r80,["listReturnPolicyRevisions"]:r80,["updateReturnPolicy"]:r80,["createReturnPreview"]:r81,["createReturnReason"]:r82,["deleteReturnReason"]:r82,["getReturnReason"]:r82,["listReturnReasons"]:r82,["updateReturnReason"]:r82,["getReturnReceipt"]:r83,["listReturnReceipts"]:r83,["verifyReturnReceiptLineItem"]:r83,["cancelReturnResolution"]:r84,["confirmReturnResolution"]:r84,["getOrCreateReturnResolutionCheckoutSession"]:r84,["getReturnResolution"]:r84,["listReturnResolutions"]:r84,["releaseReturnResolution"]:r84,["retryReturnResolution"]:r84,["updateReturnResolution"]:r84,["cancelReturn"]:r85,["cancelReturnLineItem"]:r85,["completeReturn"]:r85,["createReturn"]:r85,["createReturnAccessLink"]:r85,["createReturnDisposition"]:r85,["createReturnInspection"]:r85,["createReturnLineItem"]:r85,["createReturnReceipt"]:r85,["createReturnResolution"]:r85,["decideReturn"]:r85,["deleteReturnLineItem"]:r85,["getReturn"]:r85,["getReturnLineItem"]:r85,["listReturnActivities"]:r85,["listReturnLineItems"]:r85,["listReturns"]:r85,["processReturn"]:r85,["reopenReturn"]:r85,["updateReturn"]:r85,["updateReturnLineItem"]:r85,["waiveReturnLineItemInspection"]:r85,["approvePaymentReview"]:r86,["declinePaymentReview"]:r86,["getPaymentReview"]:r86,["listPaymentReviews"]:r86,["createRiskList"]:r87,["createRiskListItems"]:r87,["deleteRiskList"]:r87,["deleteRiskListItem"]:r87,["getRiskList"]:r87,["getRiskListItem"]:r87,["listRiskListItems"]:r87,["listRiskLists"]:r87,["updateRiskList"]:r87,["createRiskPreview"]:r88,["createRiskRule"]:r89,["deleteRiskRule"]:r89,["getRiskRule"]:r89,["getRiskRuleAttributes"]:r89,["listRiskRules"]:r89,["updateRiskRule"]:r89,["getEffectiveSettings"]:r90,["getSettings"]:r90,["updateSettings"]:r90,["validateCustomDomain"]:r90,["createPackage"]:r91,["getShipment"]:r91,["listShipments"]:r91,["updateShipment"]:r91,["voidShipment"]:r91,["getOpenAPISpec"]:r92,["createSubscriptionDeliveryMigration"]:r93,["getSubscriptionDeliveryMigration"]:r93,["listSubscriptionDeliveryMigrationFailures"]:r93,["listSubscriptionDeliveryMigrations"]:r93,["createSubscriptionOffer"]:r94,["deleteSubscriptionOffer"]:r94,["getSubscriptionOffer"]:r94,["listSubscriptionOffers"]:r94,["updateSubscriptionOffer"]:r94,["createSubscriptionPlan"]:r95,["deleteSubscriptionPlan"]:r95,["getSubscriptionPlan"]:r95,["listSubscriptionPlans"]:r95,["updateSubscriptionPlan"]:r95,["createSubscriptionPreview"]:r96,["cancelSubscription"]:r97,["changeSubscriptionPaymentMethod"]:r97,["changeSubscriptionPlan"]:r97,["createSubscription"]:r97,["createSubscriptionAccessLink"]:r97,["createSubscriptionLineItem"]:r97,["createSubscriptionPaymentRetry"]:r97,["deleteSubscriptionLineItem"]:r97,["getSubscription"]:r97,["getSubscriptionPaymentRetry"]:r97,["listSubscriptionPaymentRetries"]:r97,["listSubscriptions"]:r97,["pauseSubscription"]:r97,["reactivateSubscription"]:r97,["renewSubscription"]:r97,["resumeSubscription"]:r97,["skipSubscriptionCycle"]:r97,["updateSubscription"]:r97,["updateSubscriptionBillingSchedule"]:r97,["updateSubscriptionLineItem"]:r97,["createWebhookDelivery"]:r98,["getWebhookDelivery"]:r98,["listWebhookDeliveryAttempts"]:r98,["resendWebhookDelivery"]:r98,["createWebhookEndpoint"]:r99,["createWebhookTestEvent"]:r99,["deleteWebhookEndpoint"]:r99,["getWebhookEndpoint"]:r99,["listWebhookEndpoints"]:r99,["rotateWebhookEndpointSecret"]:r99,["updateWebhookEndpoint"]:r99,["listWebhookEventTypes"]:r100,["getWebhookEvent"]:r101,["listWebhookDeliveries"]:r101,["listWebhookEvents"]:r101,["streamWebhookEvents"]:r101,["createWorkloadIdentity"]:r102,["deleteWorkloadIdentity"]:r102,["getWorkloadIdentity"]:r102,["listWorkloadIdentities"]:r102,["updateWorkloadIdentity"]:r102}, webhook);

export class Client {
  #runtime;
  constructor(options = {}) {
    this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
    this.analytics = Object.freeze({
      getOverview: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAnalyticsOverview", result, path))),
      getOverviewWithResponse: async (params, options) => this.#runtime.request("getAnalyticsOverview", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(_sdkResponse),
      getPaymentVolumeTimeseries: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "granularity",
  "timezone"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentVolumeTimeseries", result, path))),
      getPaymentVolumeTimeseriesWithResponse: async (params, options) => this.#runtime.request("getPaymentVolumeTimeseries", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency",
  "granularity",
  "timezone"
], false, false, params), options).then(_sdkResponse),
      getSubscription: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionAnalytics", result, path))),
      getSubscriptionWithResponse: async (params, options) => this.#runtime.request("getSubscriptionAnalytics", _sdkRequestInput([], [], [
  "period_start_at",
  "period_end_at",
  "currency"
], false, false, params), options).then(_sdkResponse),
    });
    this.apiKeys = Object.freeze({
      create: async (params, options) => this.#runtime.request("createAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createAPIKey", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (api_key_id, params, options) => this.#runtime.request("getAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAPIKey", result, path))),
      getWithResponse: async (api_key_id, params, options) => this.#runtime.request("getAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listAPIKeys", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
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
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listAPIKeys", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listAPIKeys", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
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
  "updated_before"
], false, false, params), options),
      revoke: async (api_key_id, params, options) => this.#runtime.request("revokeAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeAPIKey", result, path))),
      revokeWithResponse: async (api_key_id, params, options) => this.#runtime.request("revokeAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (api_key_id, params, options) => this.#runtime.request("updateAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateAPIKey", result, path))),
      updateWithResponse: async (api_key_id, params, options) => this.#runtime.request("updateAPIKey", _sdkRequestInput([
  "api_key_id"
], [api_key_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.balanceTransactions = Object.freeze({
      get: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getBalanceTransaction", result, path))),
      getWithResponse: async (balance_transaction_id, params, options) => this.#runtime.request("getBalanceTransaction", _sdkRequestInput([
  "balance_transaction_id"
], [balance_transaction_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBalanceTransactions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listBalanceTransactions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listBalanceTransactions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listBalanceTransactions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
    });
    this.balances = Object.freeze({
      list: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBalances", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listBalances", _sdkRequestInput([], [], [
  "currency"
], false, false, params), options).then(_sdkResponse),
    });
    this.bundles = Object.freeze({
      create: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createBundle", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createBundle", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteBundle", result, path))),
      removeWithResponse: async (bundle_id, params, options) => this.#runtime.request("deleteBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getBundle", result, path))),
      getWithResponse: async (bundle_id, params, options) => this.#runtime.request("getBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      listComponents: async (bundle_id, params, options) => this.#runtime.request("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBundleComponents", result, path))),
      listComponentsWithResponse: async (bundle_id, params, options) => this.#runtime.request("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options).then(_sdkResponse),
      listComponentsPages: (bundle_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listBundleComponents", result, path)),
      listComponentsPagesWithResponse: (bundle_id, params, options) => _sdkResponsePages(this.#runtime.pages("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
], false, false, params), options)),
      listComponentsItems: (bundle_id, params, options) => this.#runtime.items("listBundleComponents", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "page_size",
  "page_token",
  "delivery_profile_id",
  "delivery_configuration_status"
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listBundles", result, path))),
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listBundles", result, path)),
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
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
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      update: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateBundle", result, path))),
      updateWithResponse: async (bundle_id, params, options) => this.#runtime.request("updateBundle", _sdkRequestInput([
  "bundle_id"
], [bundle_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.categories = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCategory", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCategory", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCategory", result, path))),
      removeWithResponse: async (category_id, params, options) => this.#runtime.request("deleteCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCategory", result, path))),
      getWithResponse: async (category_id, params, options) => this.#runtime.request("getCategory", _sdkRequestInput([
  "category_id"
], [category_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCategories", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCategories", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCategories", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCategories", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCategory", result, path))),
      updateWithResponse: async (category_id, params, options) => this.#runtime.request("updateCategory", _sdkRequestInput([
  "category_id"
], [category_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.checkoutSessions = Object.freeze({
      closeSession: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeCheckoutSession", result, path))),
      closeSessionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("closeCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      confirmCustomerVerification: async (checkout_session_id, checkout_session_customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "checkout_session_customer_verification_id"
], [checkout_session_id, checkout_session_customer_verification_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmCheckoutSessionCustomerVerification", result, path))),
      confirmCustomerVerificationWithResponse: async (checkout_session_id, checkout_session_customer_verification_id, params, options) => this.#runtime.request("confirmCheckoutSessionCustomerVerification", _sdkRequestInput([
  "checkout_session_id",
  "checkout_session_customer_verification_id"
], [checkout_session_id, checkout_session_customer_verification_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCheckoutSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createCustomerVerification: (input = {}, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionCustomerVerification", result, path))),
      createCustomerVerificationWithResponse: (input = {}, options) => this.#runtime.request("createCheckoutSessionCustomerVerification", input, options).then(_sdkResponse),
      createDeliveryQuote: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliveryQuote", result, path))),
      createDeliveryQuoteWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCheckoutSessionDeliverySelection", result, path))),
      createDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("createCheckoutSessionDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expected_delivery_selection_id",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCheckoutSessionCurrentDeliverySelection", result, path))),
      deleteCurrentDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("deleteCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expected_delivery_selection_id",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSession", result, path))),
      getWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getCurrentDeliverySelection: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionCurrentDeliverySelection", result, path))),
      getCurrentDeliverySelectionWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("getCheckoutSessionCurrentDeliverySelection", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [], false, false, params), options).then(_sdkResponse),
      getDeliveryQuote: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliveryQuote", result, path))),
      getDeliveryQuoteWithResponse: async (checkout_session_id, delivery_quote_id, params, options) => this.#runtime.request("getCheckoutSessionDeliveryQuote", _sdkRequestInput([
  "checkout_session_id",
  "delivery_quote_id"
], [checkout_session_id, delivery_quote_id], [], false, false, params), options).then(_sdkResponse),
      getDeliverySelectionHistory: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelectionHistory", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCheckoutSessionDeliverySelectionHistory", result, path))),
      getDeliverySelectionHistoryWithResponse: async (checkout_session_id, delivery_selection_id, params, options) => this.#runtime.request("getCheckoutSessionDeliverySelectionHistory", _sdkRequestInput([
  "checkout_session_id",
  "delivery_selection_id"
], [checkout_session_id, delivery_selection_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCheckoutSessions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCheckoutSessions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCheckoutSessions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCheckoutSession", result, path))),
      updateWithResponse: async (checkout_session_id, params, options) => this.#runtime.request("updateCheckoutSession", _sdkRequestInput([
  "checkout_session_id"
], [checkout_session_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.creditNotes = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNote", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCreditNote", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAllocation: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteAllocation", result, path))),
      createAllocationWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createRefund: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCreditNoteRefund", result, path))),
      createRefundWithResponse: async (credit_note_id, params, options) => this.#runtime.request("createCreditNoteRefund", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNote", result, path))),
      getWithResponse: async (credit_note_id, params, options) => this.#runtime.request("getCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCreditNoteAllocation", result, path))),
      getAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("getCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [], false, false, params), options).then(_sdkResponse),
      getPDF: async (credit_note_id, params, options) => this.#runtime.request("getCreditNotePDF", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [], false, false, params), options),
      issue: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueCreditNote", result, path))),
      issueWithResponse: async (credit_note_id, params, options) => this.#runtime.request("issueCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      listAllocations: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path))),
      listAllocationsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(_sdkResponse),
      listAllocationsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteAllocations", result, path)),
      listAllocationsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options)),
      listAllocationsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteAllocations", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options),
      listRefunds: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNoteRefunds", result, path))),
      listRefundsWithResponse: async (credit_note_id, params, options) => this.#runtime.request("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(_sdkResponse),
      listRefundsPages: (credit_note_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCreditNoteRefunds", result, path)),
      listRefundsPagesWithResponse: (credit_note_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options)),
      listRefundsItems: (credit_note_id, params, options) => this.#runtime.items("listCreditNoteRefunds", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCreditNotes", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCreditNotes", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCreditNotes", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      reverseAllocation: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseCreditNoteAllocation", result, path))),
      reverseAllocationWithResponse: async (credit_note_id, credit_note_allocation_id, params, options) => this.#runtime.request("reverseCreditNoteAllocation", _sdkRequestInput([
  "credit_note_id",
  "credit_note_allocation_id"
], [credit_note_id, credit_note_allocation_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCreditNote", result, path))),
      updateWithResponse: async (credit_note_id, params, options) => this.#runtime.request("updateCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidCreditNote", result, path))),
      voidResourceWithResponse: async (credit_note_id, params, options) => this.#runtime.request("voidCreditNote", _sdkRequestInput([
  "credit_note_id"
], [credit_note_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
    this.customDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomDomain", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (custom_domain_id, params, options) => this.#runtime.request("deleteCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomDomain", result, path))),
      removeWithResponse: async (custom_domain_id, params, options) => this.#runtime.request("deleteCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (custom_domain_id, params, options) => this.#runtime.request("getCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomDomain", result, path))),
      getWithResponse: async (custom_domain_id, params, options) => this.#runtime.request("getCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options),
    });
    this.customerDeletionRequests = Object.freeze({
      list: async (params, options) => this.#runtime.request("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerDeletionRequests", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCustomerDeletionRequests", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params), options),
      resolve: async (customer_deletion_request_id, params, options) => this.#runtime.request("resolveCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveCustomerDeletionRequest", result, path))),
      resolveWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("resolveCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.customerSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("refreshCustomerSession", result, path))),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshCustomerSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      revoke: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeCustomerSession", result, path))),
      revokeWithResponse: async (customer_session_id, params, options) => this.#runtime.request("revokeCustomerSession", _sdkRequestInput([
  "customer_session_id"
], [customer_session_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
    });
    this.customerVerifications = Object.freeze({
      confirm: async (customer_verification_id, params, options) => this.#runtime.request("confirmCustomerVerification", _sdkRequestInput([
  "customer_verification_id"
], [customer_verification_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmCustomerVerification", result, path))),
      confirmWithResponse: async (customer_verification_id, params, options) => this.#runtime.request("confirmCustomerVerification", _sdkRequestInput([
  "customer_verification_id"
], [customer_verification_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createCustomerVerification", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerVerification", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomerVerification", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.customers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomer", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (customer_id, params, options) => this.#runtime.request("createCustomerAccessLink", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerAccessLink", result, path))),
      createAccessLinkWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerAccessLink", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createAddress: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerAddress", result, path))),
      createAddressWithResponse: async (customer_id, params, options) => this.#runtime.request("createCustomerAddress", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerDeletionRequest", result, path))),
      createDeletionRequestWithResponse: async (params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomerAddress", result, path))),
      deleteAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("deleteCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomer", result, path))),
      getWithResponse: async (customer_id, params, options) => this.#runtime.request("getCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerAddress", result, path))),
      getAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("getCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [], false, false, params), options).then(_sdkResponse),
      getDeletionRequest: async (customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerDeletionRequest", result, path))),
      getDeletionRequestWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(_sdkResponse),
      linkGuestPurchases: async (customer_id, params, options) => this.#runtime.request("linkCustomerGuestPurchases", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("linkCustomerGuestPurchases", result, path))),
      linkGuestPurchasesWithResponse: async (customer_id, params, options) => this.#runtime.request("linkCustomerGuestPurchases", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      listAddresses: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path))),
      listAddressesWithResponse: async (customer_id, params, options) => this.#runtime.request("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (customer_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCustomerAddresses", result, path)),
      listAddressesPagesWithResponse: (customer_id, params, options) => _sdkResponsePages(this.#runtime.pages("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listAddressesItems: (customer_id, params, options) => this.#runtime.items("listCustomerAddresses", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "page_size",
  "page_token"
], false, false, params), options),
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
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomers", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
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
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCustomers", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomers", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "email",
  "segment",
  "is_merchant_verified",
  "phone",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options)),
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
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      revokeSessions: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeCustomerSessions", result, path))),
      revokeSessionsWithResponse: async (customer_id, params, options) => this.#runtime.request("revokeCustomerSessions", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("setDefaultCustomerAddress", result, path))),
      setDefaultAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("setDefaultCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomer", result, path))),
      updateWithResponse: async (customer_id, params, options) => this.#runtime.request("updateCustomer", _sdkRequestInput([
  "customer_id"
], [customer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateCustomerAddress", result, path))),
      updateAddressWithResponse: async (customer_id, customer_address_id, params, options) => this.#runtime.request("updateCustomerAddress", _sdkRequestInput([
  "customer_id",
  "customer_address_id"
], [customer_id, customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryLocationSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryLocationSet", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryLocationSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryLocationSet", result, path))),
      removeWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("deleteDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryLocationSet", result, path))),
      getWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("getDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryLocationSets", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryLocationSets", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryLocationSets", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options),
      update: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryLocationSet", result, path))),
      updateWithResponse: async (delivery_location_set_id, params, options) => this.#runtime.request("updateDeliveryLocationSet", _sdkRequestInput([
  "delivery_location_set_id"
], [delivery_location_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryMethod", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryMethod", result, path))),
      removeWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryMethod", result, path))),
      getWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path))),
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
  "location_id"
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
  "location_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path)),
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
  "location_id"
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
  "location_id"
], false, false, params), options),
      update: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryMethod", result, path))),
      updateWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryPreviews = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryPreview", result, path))),
      createWithResponse: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(_sdkResponse),
    });
    this.deliveryProfiles = Object.freeze({
      assignToUnconfigured: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("assignToUnconfiguredDeliveryProfile", result, path))),
      assignToUnconfiguredWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("assignToUnconfiguredDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryProfile", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryProfile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryProfile", result, path))),
      removeWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("deleteDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryProfile", result, path))),
      getWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("getDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "include_diagnostics"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryProfiles", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryProfiles", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryProfiles", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "is_default",
  "resolution_mode",
  "include_diagnostics"
], false, false, params), options),
      update: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryProfile", result, path))),
      updateWithResponse: async (delivery_profile_id, params, options) => this.#runtime.request("updateDeliveryProfile", _sdkRequestInput([
  "delivery_profile_id"
], [delivery_profile_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryQuotes = Object.freeze({
      get: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryQuote", result, path))),
      getWithResponse: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options),
    });
    this.deliveryRateCallbacks = Object.freeze({
      checkConnection: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkDeliveryRateCallbackConnection", result, path))),
      checkConnectionWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallback", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createTestDelivery: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallbackTestDelivery", result, path))),
      createTestDeliveryWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      remove: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryRateCallback", result, path))),
      removeWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRateCallback", result, path))),
      getWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryRateCallbacks", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryRateCallbacks", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options),
      rotateSigningKey: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateDeliveryRateCallbackSigningKey", result, path))),
      rotateSigningKeyWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      update: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryRateCallback", result, path))),
      updateWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryRevocations = Object.freeze({
      get: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRevocation", result, path))),
      getWithResponse: async (delivery_revocation_id, params, options) => this.#runtime.request("getDeliveryRevocation", _sdkRequestInput([
  "delivery_revocation_id"
], [delivery_revocation_id], [], false, false, params), options).then(_sdkResponse),
      revokeDeliveryDependency: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeliveryDependency", result, path))),
      revokeDeliveryDependencyWithResponse: async (params, options) => this.#runtime.request("revokeDeliveryDependency", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.deliveryZones = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryZone", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryZone", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryZone", result, path))),
      removeWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("deleteDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryZone", result, path))),
      getWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("getDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryZones", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryZones", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryZones", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options),
      update: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryZone", result, path))),
      updateWithResponse: async (delivery_zone_id, params, options) => this.#runtime.request("updateDeliveryZone", _sdkRequestInput([
  "delivery_zone_id"
], [delivery_zone_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.demoSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDemoSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      reset: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resetDemoSession", result, path))),
      resetWithResponse: async (params, options) => this.#runtime.request("resetDemoSession", _sdkRequestInput([], [], [
  "X-Turnstile-Token",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.developer = Object.freeze({
      createPartnerApp: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeveloperPartnerApp", result, path))),
      createPartnerAppWithResponse: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createSandbox: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeveloperSandbox", result, path))),
      createSandboxWithResponse: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deletePartnerApp: async (partner_app_id, params, options) => this.#runtime.request("deleteDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeveloperPartnerApp", result, path))),
      deletePartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("deleteDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      deleteSandbox: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeveloperSandbox", result, path))),
      deleteSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      getCurrentAPIKeyRequestLog: async (api_request_log_id, params, options) => this.#runtime.request("getAPIRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAPIRequestLog", result, path))),
      getCurrentAPIKeyRequestLogWithResponse: async (api_request_log_id, params, options) => this.#runtime.request("getAPIRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [], false, false, params), options).then(_sdkResponse),
      getAuthContext: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperAuthContext", result, path))),
      getAuthContextWithResponse: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      getPartnerApp: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperPartnerApp", result, path))),
      getPartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], false, false, params), options).then(_sdkResponse),
      getPartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperPartnerAppInstall", result, path))),
      getPartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params), options).then(_sdkResponse),
      getSandbox: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperSandbox", result, path))),
      getSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params), options).then(_sdkResponse),
      getResourceTimeline: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getResourceTimeline", result, path))),
      getResourceTimelineWithResponse: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before"
], false, false, params), options).then(_sdkResponse),
      issueSandboxTestKey: async (sandbox_id, params, options) => this.#runtime.request("issueDeveloperSandboxTestKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueDeveloperSandboxTestKey", result, path))),
      issueSandboxTestKeyWithResponse: async (sandbox_id, params, options) => this.#runtime.request("issueDeveloperSandboxTestKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogs: async (params, options) => this.#runtime.request("listAPIRequestLogs", _sdkRequestInput([], [], [
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path))),
      listCurrentAPIKeyRequestLogsWithResponse: async (params, options) => this.#runtime.request("listAPIRequestLogs", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listAPIRequestLogs", _sdkRequestInput([], [], [
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path)),
      listCurrentAPIKeyRequestLogsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listAPIRequestLogs", _sdkRequestInput([], [], [
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
], false, false, params), options)),
      listCurrentAPIKeyRequestLogsItems: (params, options) => this.#runtime.items("listAPIRequestLogs", _sdkRequestInput([], [], [
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
], false, false, params), options),
      listPartnerAppInstalls: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerAppInstalls", result, path))),
      listPartnerAppInstallsWithResponse: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppInstallsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerAppInstalls", result, path)),
      listPartnerAppInstallsPagesWithResponse: (partner_app_id, params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options)),
      listPartnerAppInstallsItems: (partner_app_id, params, options) => this.#runtime.items("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options),
      listPartnerApps: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerApps", result, path))),
      listPartnerAppsWithResponse: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerApps", result, path)),
      listPartnerAppsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options)),
      listPartnerAppsItems: (params, options) => this.#runtime.items("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options),
      listPartnerInstalls: async (params, options) => this.#runtime.request("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerInstalls", result, path))),
      listPartnerInstallsWithResponse: async (params, options) => this.#runtime.request("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPartnerInstallsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerInstalls", result, path)),
      listPartnerInstallsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options)),
      listPartnerInstallsItems: (params, options) => this.#runtime.items("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options),
      listSandboxes: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperSandboxes", result, path))),
      listSandboxesWithResponse: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(_sdkResponse),
      listSandboxesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperSandboxes", result, path)),
      listSandboxesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options)),
      listSandboxesItems: (params, options) => this.#runtime.items("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options),
      resetSandbox: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resetDeveloperSandbox", result, path))),
      resetSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      revokePartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeveloperPartnerAppInstall", result, path))),
      revokePartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      revokePartnerEnvironmentGrant: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeveloperPartnerEnvironmentGrant", result, path))),
      revokePartnerEnvironmentGrantWithResponse: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      rotatePartnerAppSecret: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateDeveloperPartnerAppSecret", result, path))),
      rotatePartnerAppSecretWithResponse: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      updatePartnerApp: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeveloperPartnerApp", result, path))),
      updatePartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.devices = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDevice", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDevice", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDevice", result, path))),
      removeWithResponse: async (device_id, params, options) => this.#runtime.request("deleteDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDevice", result, path))),
      getWithResponse: async (device_id, params, options) => this.#runtime.request("getDevice", _sdkRequestInput([
  "device_id"
], [device_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDevices", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDevices", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDevices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "location_id",
  "hardware_fingerprint",
  "sort_by",
  "sort_direction"
], false, false, params), options),
      update: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDevice", result, path))),
      updateWithResponse: async (device_id, params, options) => this.#runtime.request("updateDevice", _sdkRequestInput([
  "device_id"
], [device_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.discountPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDiscountPreview", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDiscountPreview", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
    });
    this.disputes = Object.freeze({
      createResponseSession: async (dispute_id, params, options) => this.#runtime.request("createDisputeResponseSession", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDisputeResponseSession", result, path))),
      createResponseSessionWithResponse: async (dispute_id, params, options) => this.#runtime.request("createDisputeResponseSession", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDispute", result, path))),
      getWithResponse: async (dispute_id, params, options) => this.#runtime.request("getDispute", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDisputes", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDisputes", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDisputes", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDisputes", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
    });
    this.emailPreferenceLinks = Object.freeze({
      lookup: async (params, options) => this.#runtime.request("lookupEmailPreferenceLink", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupEmailPreferenceLink", result, path))),
      lookupWithResponse: async (params, options) => this.#runtime.request("lookupEmailPreferenceLink", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
      unsubscribe: async (params, options) => this.#runtime.request("unsubscribeEmailPreferenceLink", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("unsubscribeEmailPreferenceLink", result, path))),
      unsubscribeWithResponse: async (params, options) => this.#runtime.request("unsubscribeEmailPreferenceLink", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.feedbackReports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFeedbackReport", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFeedbackReport", result, path))),
      getWithResponse: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFeedbackReports", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFeedbackReports", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options),
    });
    this.files = Object.freeze({
      complete: async (file_id, params, options) => this.#runtime.request("completeFile", _sdkRequestInput([
  "file_id"
], [file_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeFile", result, path))),
      completeWithResponse: async (file_id, params, options) => this.#runtime.request("completeFile", _sdkRequestInput([
  "file_id"
], [file_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createFile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFile", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createFile", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (file_id, params, options) => this.#runtime.request("getFile", _sdkRequestInput([
  "file_id"
], [file_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFile", result, path))),
      getWithResponse: async (file_id, params, options) => this.#runtime.request("getFile", _sdkRequestInput([
  "file_id"
], [file_id], [], false, false, params), options).then(_sdkResponse),
    });
    this.fraudWarnings = Object.freeze({
      get: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFraudWarning", result, path))),
      getWithResponse: async (fraud_warning_id, params, options) => this.#runtime.request("getFraudWarning", _sdkRequestInput([
  "fraud_warning_id"
], [fraud_warning_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFraudWarnings", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFraudWarnings", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFraudWarnings", _sdkRequestInput([], [], [
  "is_actionable",
  "payment_intent_id",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "expand"
], false, false, params), options),
    });
    this.fulfillmentEvents = Object.freeze({
      get: async (fulfillment_event_id, params, options) => this.#runtime.request("getFulfillmentEvent", _sdkRequestInput([
  "fulfillment_event_id"
], [fulfillment_event_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillmentEvent", result, path))),
      getWithResponse: async (fulfillment_event_id, params, options) => this.#runtime.request("getFulfillmentEvent", _sdkRequestInput([
  "fulfillment_event_id"
], [fulfillment_event_id], [
  "expand"
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
  "sort_direction",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillmentEvents", result, path))),
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
  "sort_direction",
  "expand"
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
  "sort_direction",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFulfillmentEvents", result, path)),
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
  "sort_direction",
  "expand"
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
  "sort_direction",
  "expand"
], false, false, params), options),
    });
    this.fulfillmentNotifications = Object.freeze({
      get: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillmentNotification", result, path))),
      getWithResponse: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand"
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
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillmentNotifications", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
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
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFulfillmentNotifications", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
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
  "expand"
], false, false, params), options),
    });
    this.fulfillments = Object.freeze({
      createEvent: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillmentEvent", result, path))),
      createEventWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("createFulfillmentEvent", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createShipment: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createShipment", result, path))),
      createShipmentWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("createShipment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillment", result, path))),
      getWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("getFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillments", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
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
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFulfillments", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
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
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFulfillments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "expand",
  "order_id",
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
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionFulfillment", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionFulfillment", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionFulfillment", input, options).then(_sdkResponse),
      update: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateFulfillment", result, path))),
      updateWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("updateFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [
  "expand",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.giftCardAdjustments = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("adjustGiftCardBalance", result, path))),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("adjustGiftCardBalance", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.giftCardCashOuts = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cashOutGiftCard", result, path))),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("cashOutGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.giftCardFundingDispositions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardFundingDisposition", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardFundingDisposition", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_funding_disposition_id, params, options) => this.#runtime.request("getGiftCardFundingDisposition", _sdkRequestInput([
  "gift_card_funding_disposition_id"
], [gift_card_funding_disposition_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardFundingDisposition", result, path))),
      getWithResponse: async (gift_card_funding_disposition_id, params, options) => this.#runtime.request("getGiftCardFundingDisposition", _sdkRequestInput([
  "gift_card_funding_disposition_id"
], [gift_card_funding_disposition_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardFundingDispositions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardFundingDispositions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardFundingDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "dispute_id",
  "idempotency_key",
  "page_size",
  "page_token"
], false, false, params), options),
    });
    this.giftCardLoads = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardLoad", result, path))),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardLoad", result, path))),
      getWithResponse: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardLoads", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardLoads", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "funding_source_type",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_external_reference_id"
], false, false, params), options)),
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
], false, false, params), options),
    });
    this.giftCardNotifications = Object.freeze({
      cancel: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardNotification", result, path))),
      cancelWithResponse: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardNotification", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardNotification", result, path))),
      getWithResponse: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardNotifications", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardNotifications", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options),
    });
    this.giftCardRedemptions = Object.freeze({
      cancel: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardRedemption", result, path))),
      cancelWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("cancelGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      capture: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("captureGiftCardRedemption", result, path))),
      captureWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("captureGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardRedemption", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardRedemption", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardRedemption", result, path))),
      getWithResponse: async (gift_card_redemption_id, params, options) => this.#runtime.request("getGiftCardRedemption", _sdkRequestInput([
  "gift_card_redemption_id"
], [gift_card_redemption_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardRedemptions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardRedemptions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardRedemptions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardRedemptions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardTransactions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardTransactions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardTransactions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardTransactions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
    });
    this.giftCards = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCard", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCard", result, path))),
      getWithResponse: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCards", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listGiftCards", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCards", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "external_reference_id",
  "page_size",
  "page_token",
  "status"
], false, false, params), options),
      lookup: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("lookupGiftCard", result, path))),
      lookupWithResponse: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
      rotateCode: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateGiftCardCode", result, path))),
      rotateCodeWithResponse: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      transition: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionGiftCard", result, path))),
      transitionWithResponse: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateGiftCard", result, path))),
      updateWithResponse: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryAdjustments = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createInventoryAdjustment", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAdjustment", result, path))),
      createWithResponse: (input = {}, options) => this.#runtime.request("createInventoryAdjustment", input, options).then(_sdkResponse),
      get: async (inventory_adjustment_id, params, options) => this.#runtime.request("getInventoryAdjustment", _sdkRequestInput([
  "inventory_adjustment_id"
], [inventory_adjustment_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAdjustment", result, path))),
      getWithResponse: async (inventory_adjustment_id, params, options) => this.#runtime.request("getInventoryAdjustment", _sdkRequestInput([
  "inventory_adjustment_id"
], [inventory_adjustment_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAdjustments", result, path))),
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
  "created_before"
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
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAdjustments", result, path)),
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
  "created_before"
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
  "created_before"
], false, false, params), options),
    });
    this.inventoryAllocationPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAllocationPolicy", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryAllocationPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryAllocationPolicy", result, path))),
      removeWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("deleteInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicy", result, path))),
      getWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("getInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [], false, false, params), options).then(_sdkResponse),
      getRevision: async (inventory_allocation_policy_id, inventory_allocation_policy_revision_id, params, options) => this.#runtime.request("getInventoryAllocationPolicyRevision", _sdkRequestInput([
  "inventory_allocation_policy_id",
  "inventory_allocation_policy_revision_id"
], [inventory_allocation_policy_id, inventory_allocation_policy_revision_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAllocationPolicyRevision", result, path))),
      getRevisionWithResponse: async (inventory_allocation_policy_id, inventory_allocation_policy_revision_id, params, options) => this.#runtime.request("getInventoryAllocationPolicyRevision", _sdkRequestInput([
  "inventory_allocation_policy_id",
  "inventory_allocation_policy_revision_id"
], [inventory_allocation_policy_id, inventory_allocation_policy_revision_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicies", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryAllocationPolicies", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options),
      listRevisions: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicyRevisions", result, path))),
      listRevisionsWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listRevisionsPages: (inventory_allocation_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAllocationPolicyRevisions", result, path)),
      listRevisionsPagesWithResponse: (inventory_allocation_policy_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options)),
      listRevisionsItems: (inventory_allocation_policy_id, params, options) => this.#runtime.items("listInventoryAllocationPolicyRevisions", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "created_after",
  "created_before"
], false, false, params), options),
      update: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryAllocationPolicy", result, path))),
      updateWithResponse: async (inventory_allocation_policy_id, params, options) => this.#runtime.request("updateInventoryAllocationPolicy", _sdkRequestInput([
  "inventory_allocation_policy_id"
], [inventory_allocation_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryCounts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryCount", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (inventory_count_id, params, options) => this.#runtime.request("getInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryCount", result, path))),
      getWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("getInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryCounts", result, path))),
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
  "applied_before"
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
  "applied_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryCounts", result, path)),
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
  "applied_before"
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
  "applied_before"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryCount", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(_sdkResponse),
      apply: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryCount", result, path))),
      applyWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(_sdkResponse),
      cancel: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryCount", result, path))),
      cancelWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(_sdkResponse),
      update: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryCount", result, path))),
      updateWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryItems = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryItem", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryItem", result, path))),
      removeWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryItem", result, path))),
      getWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options),
      update: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryItem", result, path))),
      updateWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryLevels = Object.freeze({
      get: async (inventory_level_id, params, options) => this.#runtime.request("getInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryLevel", result, path))),
      getWithResponse: async (inventory_level_id, params, options) => this.#runtime.request("getInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryLevels", result, path))),
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
  "expand"
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
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryLevels", result, path)),
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
  "expand"
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
  "expand"
], false, false, params), options),
      update: async (inventory_level_id, params, options) => this.#runtime.request("updateInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryLevel", result, path))),
      updateWithResponse: async (inventory_level_id, params, options) => this.#runtime.request("updateInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryMovements = Object.freeze({
      get: async (inventory_movement_id, params, options) => this.#runtime.request("getInventoryMovement", _sdkRequestInput([
  "inventory_movement_id"
], [inventory_movement_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryMovement", result, path))),
      getWithResponse: async (inventory_movement_id, params, options) => this.#runtime.request("getInventoryMovement", _sdkRequestInput([
  "inventory_movement_id"
], [inventory_movement_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryMovements", result, path))),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryMovements", result, path)),
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
], false, false, params), options),
    });
    this.inventoryReceipts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReceipt", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (inventory_receipt_id, params, options) => this.#runtime.request("getInventoryReceipt", _sdkRequestInput([
  "inventory_receipt_id"
], [inventory_receipt_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryReceipt", result, path))),
      getWithResponse: async (inventory_receipt_id, params, options) => this.#runtime.request("getInventoryReceipt", _sdkRequestInput([
  "inventory_receipt_id"
], [inventory_receipt_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryReceipts", result, path))),
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
  "created_before"
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
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryReceipts", result, path)),
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
  "created_before"
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
  "created_before"
], false, false, params), options),
    });
    this.inventoryReservations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryReservation", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryReservation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (inventory_reservation_id, params, options) => this.#runtime.request("getInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryReservation", result, path))),
      getWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("getInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryReservations", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryReservations", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryReservations", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryReservation", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(_sdkResponse),
      commit: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryReservation", result, path))),
      commitWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(_sdkResponse),
      consume: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryReservation", result, path))),
      consumeWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(_sdkResponse),
      release: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryReservation", result, path))),
      releaseWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryReservation", input, options).then(_sdkResponse),
      update: async (inventory_reservation_id, params, options) => this.#runtime.request("updateInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryReservation", result, path))),
      updateWithResponse: async (inventory_reservation_id, params, options) => this.#runtime.request("updateInventoryReservation", _sdkRequestInput([
  "inventory_reservation_id"
], [inventory_reservation_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.inventoryTransfers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryTransfer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryTransfer", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryTransfer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (inventory_transfer_id, params, options) => this.#runtime.request("getInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryTransfer", result, path))),
      getWithResponse: async (inventory_transfer_id, params, options) => this.#runtime.request("getInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryTransfers", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryTransfers", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryTransfers", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryTransfers", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionInventoryTransfer", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryTransfer", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryTransfer", input, options).then(_sdkResponse),
      update: async (inventory_transfer_id, params, options) => this.#runtime.request("updateInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryTransfer", result, path))),
      updateWithResponse: async (inventory_transfer_id, params, options) => this.#runtime.request("updateInventoryTransfer", _sdkRequestInput([
  "inventory_transfer_id"
], [inventory_transfer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.invoicePaymentTerms = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoicePaymentTerm", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInvoicePaymentTerm", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInvoicePaymentTerm", result, path))),
      removeWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("deleteInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentTerm", result, path))),
      getWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("getInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentTerms", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInvoicePaymentTerms", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "external_reference_id",
  "query"
], false, false, params), options),
      update: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoicePaymentTerm", result, path))),
      updateWithResponse: async (invoice_payment_term_id, params, options) => this.#runtime.request("updateInvoicePaymentTerm", _sdkRequestInput([
  "invoice_payment_term_id"
], [invoice_payment_term_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.invoices = Object.freeze({
      cancelPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("cancelInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelInvoicePaymentAttempt", result, path))),
      cancelPaymentAttemptWithResponse: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("cancelInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      collect: async (invoice_id, params, options) => this.#runtime.request("collectInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("collectInvoice", result, path))),
      collectWithResponse: async (invoice_id, params, options) => this.#runtime.request("collectInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createInvoice", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoice", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInvoice", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      assessLateFee: async (invoice_id, params, options) => this.#runtime.request("createInvoiceLateFee", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceLateFee", result, path))),
      assessLateFeeWithResponse: async (invoice_id, params, options) => this.#runtime.request("createInvoiceLateFee", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      recordManualPayment: async (invoice_id, params, options) => this.#runtime.request("createInvoiceManualPayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInvoiceManualPayment", result, path))),
      recordManualPaymentWithResponse: async (invoice_id, params, options) => this.#runtime.request("createInvoiceManualPayment", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (invoice_id, params, options) => this.#runtime.request("getInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoice", result, path))),
      getWithResponse: async (invoice_id, params, options) => this.#runtime.request("getInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getManualPayment: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("getInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoiceManualPayment", result, path))),
      getManualPaymentWithResponse: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("getInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [], false, false, params), options).then(_sdkResponse),
      getPaymentAttempt: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("getInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInvoicePaymentAttempt", result, path))),
      getPaymentAttemptWithResponse: async (invoice_id, invoice_payment_attempt_id, params, options) => this.#runtime.request("getInvoicePaymentAttempt", _sdkRequestInput([
  "invoice_id",
  "invoice_payment_attempt_id"
], [invoice_id, invoice_payment_attempt_id], [], false, false, params), options).then(_sdkResponse),
      getPDF: async (invoice_id, params, options) => this.#runtime.request("getInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params), options),
      getOrCreateCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("getOrCreateInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrCreateInvoiceCheckoutSession", result, path))),
      getOrCreateCheckoutSessionWithResponse: async (invoice_id, params, options) => this.#runtime.request("getOrCreateInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      issue: async (invoice_id, params, options) => this.#runtime.request("issueInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("issueInvoice", result, path))),
      issueWithResponse: async (invoice_id, params, options) => this.#runtime.request("issueInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      listActivities: async (invoice_id, params, options) => this.#runtime.request("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceActivities", result, path))),
      listActivitiesWithResponse: async (invoice_id, params, options) => this.#runtime.request("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(_sdkResponse),
      listActivitiesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceActivities", result, path)),
      listActivitiesPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options)),
      listActivitiesItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceActivities", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options),
      listDeliveryAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceDeliveryAttempts", result, path))),
      listDeliveryAttemptsWithResponse: async (invoice_id, params, options) => this.#runtime.request("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listDeliveryAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceDeliveryAttempts", result, path)),
      listDeliveryAttemptsPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listDeliveryAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceDeliveryAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      listManualPayments: async (invoice_id, params, options) => this.#runtime.request("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoiceManualPayments", result, path))),
      listManualPaymentsWithResponse: async (invoice_id, params, options) => this.#runtime.request("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listManualPaymentsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInvoiceManualPayments", result, path)),
      listManualPaymentsPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listManualPaymentsItems: (invoice_id, params, options) => this.#runtime.items("listInvoiceManualPayments", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      listPaymentAttempts: async (invoice_id, params, options) => this.#runtime.request("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentAttempts", result, path))),
      listPaymentAttemptsWithResponse: async (invoice_id, params, options) => this.#runtime.request("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(_sdkResponse),
      listPaymentAttemptsPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInvoicePaymentAttempts", result, path)),
      listPaymentAttemptsPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options)),
      listPaymentAttemptsItems: (invoice_id, params, options) => this.#runtime.items("listInvoicePaymentAttempts", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInvoices", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInvoices", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInvoices", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
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
], false, false, params), options),
      markUncollectible: async (invoice_id, params, options) => this.#runtime.request("markInvoiceUncollectible", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("markInvoiceUncollectible", result, path))),
      markUncollectibleWithResponse: async (invoice_id, params, options) => this.#runtime.request("markInvoiceUncollectible", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      regeneratePublicLink: async (invoice_id, params, options) => this.#runtime.request("regenerateInvoicePublicLink", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("regenerateInvoicePublicLink", result, path))),
      regeneratePublicLinkWithResponse: async (invoice_id, params, options) => this.#runtime.request("regenerateInvoicePublicLink", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      reverseManualPayment: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("reverseInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reverseInvoiceManualPayment", result, path))),
      reverseManualPaymentWithResponse: async (invoice_id, invoice_manual_payment_id, params, options) => this.#runtime.request("reverseInvoiceManualPayment", _sdkRequestInput([
  "invoice_id",
  "invoice_manual_payment_id"
], [invoice_id, invoice_manual_payment_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      sendReminder: async (invoice_id, params, options) => this.#runtime.request("sendInvoiceReminder", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendInvoiceReminder", result, path))),
      sendReminderWithResponse: async (invoice_id, params, options) => this.#runtime.request("sendInvoiceReminder", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      update: async (invoice_id, params, options) => this.#runtime.request("updateInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInvoice", result, path))),
      updateWithResponse: async (invoice_id, params, options) => this.#runtime.request("updateInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (invoice_id, params, options) => this.#runtime.request("voidInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidInvoice", result, path))),
      voidResourceWithResponse: async (invoice_id, params, options) => this.#runtime.request("voidInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      waiveLateFee: async (invoice_id, invoice_late_fee_id, params, options) => this.#runtime.request("waiveInvoiceLateFee", _sdkRequestInput([
  "invoice_id",
  "invoice_late_fee_id"
], [invoice_id, invoice_late_fee_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("waiveInvoiceLateFee", result, path))),
      waiveLateFeeWithResponse: async (invoice_id, invoice_late_fee_id, params, options) => this.#runtime.request("waiveInvoiceLateFee", _sdkRequestInput([
  "invoice_id",
  "invoice_late_fee_id"
], [invoice_id, invoice_late_fee_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.locations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createLocation", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createLocation", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteLocation", result, path))),
      removeWithResponse: async (location_id, params, options) => this.#runtime.request("deleteLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getLocation", result, path))),
      getWithResponse: async (location_id, params, options) => this.#runtime.request("getLocation", _sdkRequestInput([
  "location_id"
], [location_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listLocations", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listLocations", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listLocations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "inventory_allocation_enabled",
  "external_reference_id",
  "query"
], false, false, params), options),
      update: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLocation", result, path))),
      updateWithResponse: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      publishGeography: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLocation", result, path))),
      publishGeographyWithResponse: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateInventory: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateLocation", result, path))),
      updateInventoryWithResponse: async (location_id, params, options) => this.#runtime.request("updateLocation", _sdkRequestInput([
  "location_id"
], [location_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.me = Object.freeze({
      cancelReturn: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeReturn", result, path))),
      cancelReturnWithResponse: async (return_id, params, options) => this.#runtime.request("cancelMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      cancelSubscription: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelMeSubscription", result, path))),
      cancelSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("cancelMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionBillingInterval: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionBillingInterval", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionBillingInterval", result, path))),
      changeSubscriptionBillingIntervalWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionBillingInterval", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionDelivery: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionDelivery", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionDelivery", result, path))),
      changeSubscriptionDeliveryWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionDelivery", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionPaymentMethod: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionPaymentMethod", result, path))),
      changeSubscriptionPaymentMethodWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changeSubscriptionQuantity: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionQuantity", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeMeSubscriptionQuantity", result, path))),
      changeSubscriptionQuantityWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeMeSubscriptionQuantity", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      confirmEmailChangeRequest: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmMeEmailChangeRequest", result, path))),
      confirmEmailChangeRequestWithResponse: async (email_change_request_id, params, options) => this.#runtime.request("confirmMeEmailChangeRequest", _sdkRequestInput([
  "email_change_request_id"
], [email_change_request_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAddress: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeAddress", result, path))),
      createAddressWithResponse: async (params, options) => this.#runtime.request("createMeAddress", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createDeletionRequest: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeDeletionRequest", result, path))),
      createDeletionRequestWithResponse: async (params, options) => this.#runtime.request("createMeDeletionRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      createEmailChangeRequest: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeEmailChangeRequest", result, path))),
      createEmailChangeRequestWithResponse: async (params, options) => this.#runtime.request("createMeEmailChangeRequest", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createFlintWalletStoreSetup: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeFlintWalletStoreSetup", result, path))),
      createFlintWalletStoreSetupWithResponse: async (id, params, options) => this.#runtime.request("createMeFlintWalletStoreSetup", _sdkRequestInput([
  "id"
], [id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      createInvoiceCheckoutSession: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeInvoiceCheckoutSession", result, path))),
      createInvoiceCheckoutSessionWithResponse: async (invoice_id, params, options) => this.#runtime.request("createMeInvoiceCheckoutSession", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      savePaymentMethod: async (params, options) => this.#runtime.request("createMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMePaymentMethod", result, path))),
      savePaymentMethodWithResponse: async (params, options) => this.#runtime.request("createMePaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createReturn: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturn", result, path))),
      createReturnWithResponse: async (params, options) => this.#runtime.request("createMeReturn", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createReturnPreview: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturnPreview", result, path))),
      createReturnPreviewWithResponse: async (params, options) => this.#runtime.request("createMeReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
      createReturnResolutionCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeReturnResolutionCheckoutSession", result, path))),
      createReturnResolutionCheckoutSessionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("createMeReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createSubscriptionPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeSubscriptionPaymentRetry", result, path))),
      createSubscriptionPaymentRetryWithResponse: async (subscription_id, params, options) => this.#runtime.request("createMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createSubscriptionPreview: (input = {}, options) => this.#runtime.request("createMeSubscriptionPreview", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMeSubscriptionPreview", result, path))),
      createSubscriptionPreviewWithResponse: (input = {}, options) => this.#runtime.request("createMeSubscriptionPreview", input, options).then(_sdkResponse),
      deleteAddress: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteMeAddress", result, path))),
      deleteAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("deleteMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      removePaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("deleteMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteMePaymentMethod", result, path))),
      removePaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("deleteMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMe", result, path))),
      getWithResponse: async (params, options) => this.#runtime.request("getMe", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      getAddress: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeAddress", result, path))),
      getAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("getMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [], false, false, params), options).then(_sdkResponse),
      getCreditNote: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeCreditNote", result, path))),
      getCreditNoteWithResponse: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNote", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params), options).then(_sdkResponse),
      getCreditNotePDF: async (invoice_id, credit_note_id, params, options) => this.#runtime.request("getMeCreditNotePDF", _sdkRequestInput([
  "invoice_id",
  "credit_note_id"
], [invoice_id, credit_note_id], [], false, false, params), options),
      getDeletionRequest: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeDeletionRequest", result, path))),
      getDeletionRequestWithResponse: async (customer_deletion_request_id, params, options) => this.#runtime.request("getMeDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params), options).then(_sdkResponse),
      getEmailPreferences: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeEmailPreferences", result, path))),
      getEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("getMeEmailPreferences", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      getFulfillment: async (fulfillment_id, params, options) => this.#runtime.request("getMeFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeFulfillment", result, path))),
      getFulfillmentWithResponse: async (fulfillment_id, params, options) => this.#runtime.request("getMeFulfillment", _sdkRequestInput([
  "fulfillment_id"
], [fulfillment_id], [], false, false, params), options).then(_sdkResponse),
      getGiftCard: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeGiftCard", result, path))),
      getGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("getMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [], false, false, params), options).then(_sdkResponse),
      getInvoice: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeInvoice", result, path))),
      getInvoiceWithResponse: async (invoice_id, params, options) => this.#runtime.request("getMeInvoice", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params), options).then(_sdkResponse),
      getInvoicePDF: async (invoice_id, params, options) => this.#runtime.request("getMeInvoicePDF", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [], false, false, params), options),
      getOrder: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeOrder", result, path))),
      getOrderWithResponse: async (order_id, params, options) => this.#runtime.request("getMeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params), options).then(_sdkResponse),
      getPackage: async (package_id, params, options) => this.#runtime.request("getMePackage", _sdkRequestInput([
  "package_id"
], [package_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePackage", result, path))),
      getPackageWithResponse: async (package_id, params, options) => this.#runtime.request("getMePackage", _sdkRequestInput([
  "package_id"
], [package_id], [], false, false, params), options).then(_sdkResponse),
      getPayment: async (payment_intent_id, params, options) => this.#runtime.request("getMePayment", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePayment", result, path))),
      getPaymentWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("getMePayment", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [], false, false, params), options).then(_sdkResponse),
      getPaymentMethod: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMePaymentMethod", result, path))),
      getPaymentMethodWithResponse: async (payment_method_id, params, options) => this.#runtime.request("getMePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params), options).then(_sdkResponse),
      getRefund: async (refund_id, params, options) => this.#runtime.request("getMeRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeRefund", result, path))),
      getRefundWithResponse: async (refund_id, params, options) => this.#runtime.request("getMeRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [], false, false, params), options).then(_sdkResponse),
      getReturn: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeReturn", result, path))),
      getReturnWithResponse: async (return_id, params, options) => this.#runtime.request("getMeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], false, false, params), options).then(_sdkResponse),
      getReturnResolution: async (return_resolution_id, params, options) => this.#runtime.request("getMeReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeReturnResolution", result, path))),
      getReturnResolutionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getMeReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [], false, false, params), options).then(_sdkResponse),
      getShipment: async (shipment_id, params, options) => this.#runtime.request("getMeShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeShipment", result, path))),
      getShipmentWithResponse: async (shipment_id, params, options) => this.#runtime.request("getMeShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [], false, false, params), options).then(_sdkResponse),
      getSubscription: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeSubscription", result, path))),
      getSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("getMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [], false, false, params), options).then(_sdkResponse),
      getSubscriptionPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMeSubscriptionPaymentRetry", result, path))),
      getSubscriptionPaymentRetryWithResponse: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getMeSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params), options).then(_sdkResponse),
      listAddresses: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeAddresses", result, path))),
      listAddressesWithResponse: async (params, options) => this.#runtime.request("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listAddressesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeAddresses", result, path)),
      listAddressesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listAddressesItems: (params, options) => this.#runtime.items("listMeAddresses", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options),
      listCreditNotes: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeCreditNotes", result, path))),
      listCreditNotesWithResponse: async (invoice_id, params, options) => this.#runtime.request("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listCreditNotesPages: (invoice_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeCreditNotes", result, path)),
      listCreditNotesPagesWithResponse: (invoice_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listCreditNotesItems: (invoice_id, params, options) => this.#runtime.items("listMeCreditNotes", _sdkRequestInput([
  "invoice_id"
], [invoice_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      listDeletionRequests: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeDeletionRequests", result, path))),
      listDeletionRequestsWithResponse: async (params, options) => this.#runtime.request("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listDeletionRequestsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeDeletionRequests", result, path)),
      listDeletionRequestsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options)),
      listDeletionRequestsItems: (params, options) => this.#runtime.items("listMeDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options),
      listFlintWalletPaymentMethods: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFlintWalletPaymentMethods", result, path))),
      listFlintWalletPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMeFlintWalletPaymentMethods", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      listFulfillmentEvents: async (params, options) => this.#runtime.request("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFulfillmentEvents", result, path))),
      listFulfillmentEventsWithResponse: async (params, options) => this.#runtime.request("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listFulfillmentEventsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeFulfillmentEvents", result, path)),
      listFulfillmentEventsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options)),
      listFulfillmentEventsItems: (params, options) => this.#runtime.items("listMeFulfillmentEvents", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "page_size",
  "page_token"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeFulfillments", result, path))),
      listFulfillmentsWithResponse: async (params, options) => this.#runtime.request("listMeFulfillments", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeFulfillments", result, path)),
      listFulfillmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeFulfillments", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      listGiftCards: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeGiftCards", result, path))),
      listGiftCardsWithResponse: async (params, options) => this.#runtime.request("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listGiftCardsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeGiftCards", result, path)),
      listGiftCardsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listGiftCardsItems: (params, options) => this.#runtime.items("listMeGiftCards", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options),
      listGiftCardTransactions: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path))),
      listGiftCardTransactionsWithResponse: async (gift_card_id, params, options) => this.#runtime.request("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listGiftCardTransactionsPages: (gift_card_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeGiftCardTransactions", result, path)),
      listGiftCardTransactionsPagesWithResponse: (gift_card_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listGiftCardTransactionsItems: (gift_card_id, params, options) => this.#runtime.items("listMeGiftCardTransactions", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "page_size",
  "page_token"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeInvoices", result, path))),
      listInvoicesWithResponse: async (params, options) => this.#runtime.request("listMeInvoices", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeInvoices", result, path)),
      listInvoicesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeInvoices", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      listOrderActivities: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeOrderActivities", result, path))),
      listOrderActivitiesWithResponse: async (order_id, params, options) => this.#runtime.request("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(_sdkResponse),
      listOrderActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeOrderActivities", result, path)),
      listOrderActivitiesPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options)),
      listOrderActivitiesItems: (order_id, params, options) => this.#runtime.items("listMeOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeOrders", result, path))),
      listOrdersWithResponse: async (params, options) => this.#runtime.request("listMeOrders", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeOrders", result, path)),
      listOrdersPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeOrders", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      listPackages: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePackages", result, path))),
      listPackagesWithResponse: async (params, options) => this.#runtime.request("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listPackagesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMePackages", result, path)),
      listPackagesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options)),
      listPackagesItems: (params, options) => this.#runtime.items("listMePackages", _sdkRequestInput([], [], [
  "shipment_id",
  "fulfillment_id",
  "order_id",
  "page_size",
  "page_token",
  "created_after",
  "created_before"
], false, false, params), options),
      listPaymentMethods: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePaymentMethods", result, path))),
      listPaymentMethodsWithResponse: async (params, options) => this.#runtime.request("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listPaymentMethodsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMePaymentMethods", result, path)),
      listPaymentMethodsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options)),
      listPaymentMethodsItems: (params, options) => this.#runtime.items("listMePaymentMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before"
], false, false, params), options),
      listPayments: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMePayments", result, path))),
      listPaymentsWithResponse: async (params, options) => this.#runtime.request("listMePayments", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
      listPaymentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMePayments", result, path)),
      listPaymentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMePayments", _sdkRequestInput([], [], [
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
], false, false, params), options)),
      listPaymentsItems: (params, options) => this.#runtime.items("listMePayments", _sdkRequestInput([], [], [
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
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeRefunds", result, path))),
      listRefundsWithResponse: async (params, options) => this.#runtime.request("listMeRefunds", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeRefunds", result, path)),
      listRefundsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeRefunds", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      listReturns: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeReturns", result, path))),
      listReturnsWithResponse: async (params, options) => this.#runtime.request("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
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
], false, false, params), options).then(_sdkResponse),
      listReturnsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeReturns", result, path)),
      listReturnsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
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
], false, false, params), options)),
      listReturnsItems: (params, options) => this.#runtime.items("listMeReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "decision_status",
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
], false, false, params), options),
      listShipments: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeShipments", result, path))),
      listShipmentsWithResponse: async (params, options) => this.#runtime.request("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listShipmentsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeShipments", result, path)),
      listShipmentsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options)),
      listShipmentsItems: (params, options) => this.#runtime.items("listMeShipments", _sdkRequestInput([], [], [
  "order_id",
  "fulfillment_id",
  "page_size",
  "page_token",
  "return_id",
  "handed_off_after",
  "handed_off_before",
  "created_after",
  "created_before"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMeSubscriptions", result, path))),
      listSubscriptionsWithResponse: async (params, options) => this.#runtime.request("listMeSubscriptions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMeSubscriptions", result, path)),
      listSubscriptionsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMeSubscriptions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      pauseSubscription: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseMeSubscription", result, path))),
      pauseSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("pauseMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      reactivateSubscription: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reactivateMeSubscription", result, path))),
      reactivateSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("reactivateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      removeGiftCard: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeMeGiftCard", result, path))),
      removeGiftCardWithResponse: async (gift_card_id, params, options) => this.#runtime.request("removeMeGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      renewSubscription: async (subscription_id, params, options) => this.#runtime.request("renewMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewMeSubscription", result, path))),
      renewSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("renewMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      resumeSubscription: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeMeSubscription", result, path))),
      resumeSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("resumeMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      revokeSession: async (params, options) => this.#runtime.request("revokeMeSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeMeSession", result, path))),
      revokeSessionWithResponse: async (params, options) => this.#runtime.request("revokeMeSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      saveGiftCard: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("saveMeGiftCard", result, path))),
      saveGiftCardWithResponse: async (params, options) => this.#runtime.request("saveMeGiftCard", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      sendOrderReceipt: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendMeOrderReceipt", result, path))),
      sendOrderReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("sendMeOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      setDefaultAddress: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("setDefaultMeAddress", result, path))),
      setDefaultAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("setDefaultMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      skipSubscriptionCycle: async (subscription_id, params, options) => this.#runtime.request("skipMeSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipMeSubscriptionCycle", result, path))),
      skipSubscriptionCycleWithResponse: async (subscription_id, params, options) => this.#runtime.request("skipMeSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMe", result, path))),
      updateWithResponse: async (params, options) => this.#runtime.request("updateMe", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateAddress: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeAddress", result, path))),
      updateAddressWithResponse: async (customer_address_id, params, options) => this.#runtime.request("updateMeAddress", _sdkRequestInput([
  "customer_address_id"
], [customer_address_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateEmailPreferences: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeEmailPreferences", result, path))),
      updateEmailPreferencesWithResponse: async (params, options) => this.#runtime.request("updateMeEmailPreferences", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateSubscription: async (subscription_id, params, options) => this.#runtime.request("updateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeSubscription", result, path))),
      updateSubscriptionWithResponse: async (subscription_id, params, options) => this.#runtime.request("updateMeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateSubscriptionLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateMeSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMeSubscriptionLineItem", result, path))),
      updateSubscriptionLineItemWithResponse: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateMeSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.merchantAccountSessions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createMerchantAccountSession", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      refresh: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("refreshMerchantAccountSession", result, path))),
      refreshWithResponse: async (params, options) => this.#runtime.request("refreshMerchantAccountSession", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.merchantBillingBalances = Object.freeze({
      get: async (merchant_billing_balance_id, params, options) => this.#runtime.request("getMerchantBillingBalance", _sdkRequestInput([
  "merchant_billing_balance_id"
], [merchant_billing_balance_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchantBillingBalance", result, path))),
      getWithResponse: async (merchant_billing_balance_id, params, options) => this.#runtime.request("getMerchantBillingBalance", _sdkRequestInput([
  "merchant_billing_balance_id"
], [merchant_billing_balance_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listMerchantBillingBalances", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingBalances", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantBillingBalances", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantBillingEntries", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMerchantBillingEntries", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantBillingEntries", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
    });
    this.merchantSubscriptionInvoices = Object.freeze({
      get: async (merchant_billing_invoice_id, params, options) => this.#runtime.request("getMerchantBillingInvoice", _sdkRequestInput([
  "merchant_billing_invoice_id"
], [merchant_billing_invoice_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchantBillingInvoice", result, path))),
      getWithResponse: async (merchant_billing_invoice_id, params, options) => this.#runtime.request("getMerchantBillingInvoice", _sdkRequestInput([
  "merchant_billing_invoice_id"
], [merchant_billing_invoice_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantBillingInvoices", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMerchantBillingInvoices", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listMerchantBillingInvoices", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options),
    });
    this.merchants = Object.freeze({
      get: async (params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([], [], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getMerchant", result, path))),
      getWithResponse: async (params, options) => this.#runtime.request("getMerchant", _sdkRequestInput([], [], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateMerchant", result, path))),
      updateWithResponse: async (params, options) => this.#runtime.request("updateMerchant", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.modifierGroups = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierGroup", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createModifierGroup", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierGroup", result, path))),
      removeWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("deleteModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getModifierGroup", result, path))),
      getWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("getModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listModifierGroups", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listModifierGroups", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listModifierGroups", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listModifierGroups", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierGroup", result, path))),
      updateWithResponse: async (modifier_group_id, params, options) => this.#runtime.request("updateModifierGroup", _sdkRequestInput([
  "modifier_group_id"
], [modifier_group_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.modifierSets = Object.freeze({
      create: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createModifierSet", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createModifierSet", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteModifierSet", result, path))),
      removeWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("deleteModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getModifierSet", result, path))),
      getWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("getModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listModifierSets", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listModifierSets", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listModifierSets", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateModifierSet", result, path))),
      updateWithResponse: async (modifier_set_id, params, options) => this.#runtime.request("updateModifierSet", _sdkRequestInput([
  "modifier_set_id"
], [modifier_set_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.oauth = Object.freeze({
      authorizePartnerInstall: async (params, options) => this.#runtime.request("authorizePartnerInstall", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "code_challenge",
  "code_challenge_method",
  "scope",
  "sandbox_id",
  "merchant_id",
  "state"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("previewPartnerInstallAuthorization", result, path))),
      previewPartnerInstallAuthorizationWithResponse: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "code_challenge",
  "code_challenge_method",
  "scope",
  "sandbox_id",
  "state"
], false, false, params), options).then(_sdkResponse),
    });
    this.onboarding = Object.freeze({
      advance: async (params, options) => this.#runtime.request("advanceOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("advanceOnboarding", result, path))),
      advanceWithResponse: async (params, options) => this.#runtime.request("advanceOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAPIKey: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOnboardingAPIKey", result, path))),
      createAPIKeyWithResponse: async (params, options) => this.#runtime.request("createOnboardingAPIKey", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      getState: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [
  "sandbox_id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOnboardingState", result, path))),
      getStateWithResponse: async (params, options) => this.#runtime.request("getOnboardingState", _sdkRequestInput([], [], [
  "sandbox_id"
], false, false, params), options).then(_sdkResponse),
      startFlow: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("startOnboarding", result, path))),
      startFlowWithResponse: async (params, options) => this.#runtime.request("startOnboarding", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      verifyEmailCode: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyOnboardingEmail", result, path))),
      verifyEmailCodeWithResponse: async (params, options) => this.#runtime.request("verifyOnboardingEmail", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.orders = Object.freeze({
      applyDiscount: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderDiscount", result, path))),
      applyDiscountWithResponse: async (order_id, params, options) => this.#runtime.request("applyOrderDiscount", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      applyGiftCard: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Gift-Card-Challenge",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("applyOrderGiftCard", result, path))),
      applyGiftCardWithResponse: async (order_id, params, options) => this.#runtime.request("applyOrderGiftCard", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Flint-Gift-Card-Challenge",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      cancelPayment: async (order_id, payment_intent_id, params, options) => this.#runtime.request("cancelOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelOrderPayment", result, path))),
      cancelPaymentWithResponse: async (order_id, payment_intent_id, params, options) => this.#runtime.request("cancelOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      cancelPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelOrderPaymentAttempt", result, path))),
      cancelPaymentAttemptWithResponse: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("cancelOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      capturePayment: async (order_id, payment_intent_id, params, options) => this.#runtime.request("captureOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("captureOrderPayment", result, path))),
      capturePaymentWithResponse: async (order_id, payment_intent_id, params, options) => this.#runtime.request("captureOrderPayment", _sdkRequestInput([
  "order_id",
  "payment_intent_id"
], [order_id, payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      closeSession: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("closeOrder", result, path))),
      closeSessionWithResponse: async (order_id, params, options) => this.#runtime.request("closeOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createFulfillment: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFulfillment", result, path))),
      createFulfillmentWithResponse: async (order_id, params, options) => this.#runtime.request("createFulfillment", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrder", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createOrder", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (order_id, params, options) => this.#runtime.request("createOrderAccessLink", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderAccessLink", result, path))),
      createAccessLinkWithResponse: async (order_id, params, options) => this.#runtime.request("createOrderAccessLink", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      addCharge: async (order_id, params, options) => this.#runtime.request("createOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderCharge", result, path))),
      addChargeWithResponse: async (order_id, params, options) => this.#runtime.request("createOrderCharge", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      addLineItems: async (order_id, params, options) => this.#runtime.request("createOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderLineItems", result, path))),
      addLineItemsWithResponse: async (order_id, params, options) => this.#runtime.request("createOrderLineItems", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createPaymentIntent: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrderPaymentIntent", result, path))),
      createPaymentIntentWithResponse: async (order_id, params, options) => this.#runtime.request("createOrderPaymentIntent", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderCharge", result, path))),
      deleteChargeWithResponse: async (order_id, order_charge_id, params, options) => this.#runtime.request("deleteOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      deleteLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrderLineItem", result, path))),
      deleteLineItemWithResponse: async (order_id, order_line_item_id, params, options) => this.#runtime.request("deleteOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrder", result, path))),
      getWithResponse: async (order_id, params, options) => this.#runtime.request("getOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getCurrentDeliverySelection: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderCurrentDeliverySelection", result, path))),
      getCurrentDeliverySelectionWithResponse: async (order_id, params, options) => this.#runtime.request("getOrderCurrentDeliverySelection", _sdkRequestInput([
  "order_id"
], [order_id], [], false, false, params), options).then(_sdkResponse),
      getPaymentAttempt: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrderPaymentAttempt", result, path))),
      getPaymentAttemptWithResponse: async (order_id, order_payment_attempt_id, params, options) => this.#runtime.request("getOrderPaymentAttempt", _sdkRequestInput([
  "order_id",
  "order_payment_attempt_id"
], [order_id, order_payment_attempt_id], [], false, false, params), options).then(_sdkResponse),
      listActivities: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderActivities", result, path))),
      listActivitiesWithResponse: async (order_id, params, options) => this.#runtime.request("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(_sdkResponse),
      listActivitiesPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listOrderActivities", result, path)),
      listActivitiesPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options)),
      listActivitiesItems: (order_id, params, options) => this.#runtime.items("listOrderActivities", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options),
      listPaymentAttempts: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path))),
      listPaymentAttemptsWithResponse: async (order_id, params, options) => this.#runtime.request("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPaymentAttemptsPages: (order_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listOrderPaymentAttempts", result, path)),
      listPaymentAttemptsPagesWithResponse: (order_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listPaymentAttemptsItems: (order_id, params, options) => this.#runtime.items("listOrderPaymentAttempts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "page_size",
  "page_token"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrders", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listOrders", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listOrders", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listOrders", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      pay: (input = {}, options) => this.#runtime.request("payOrder", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("payOrder", result, path))),
      payWithResponse: (input = {}, options) => this.#runtime.request("payOrder", input, options).then(_sdkResponse),
      removeDiscounts: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderDiscounts", result, path))),
      removeDiscountsWithResponse: async (order_id, params, options) => this.#runtime.request("removeOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      removeGiftCard: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrderGiftCard", result, path))),
      removeGiftCardWithResponse: async (order_id, gift_card_id, params, options) => this.#runtime.request("removeOrderGiftCard", _sdkRequestInput([
  "order_id",
  "gift_card_id"
], [order_id, gift_card_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      repriceDiscounts: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("repriceOrderDiscounts", result, path))),
      repriceDiscountsWithResponse: async (order_id, params, options) => this.#runtime.request("repriceOrderDiscounts", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      resolveInventoryException: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveOrderInventoryException", result, path))),
      resolveInventoryExceptionWithResponse: async (order_id, params, options) => this.#runtime.request("resolveOrderInventoryException", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      sendReceipt: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendOrderReceipt", result, path))),
      sendReceiptWithResponse: async (order_id, params, options) => this.#runtime.request("sendOrderReceipt", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrder", result, path))),
      updateWithResponse: async (order_id, params, options) => this.#runtime.request("updateOrder", _sdkRequestInput([
  "order_id"
], [order_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateCharge: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderCharge", result, path))),
      updateChargeWithResponse: async (order_id, order_charge_id, params, options) => this.#runtime.request("updateOrderCharge", _sdkRequestInput([
  "order_id",
  "order_charge_id"
], [order_id, order_charge_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateLineItem: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrderLineItem", result, path))),
      updateLineItemWithResponse: async (order_id, order_line_item_id, params, options) => this.#runtime.request("updateOrderLineItem", _sdkRequestInput([
  "order_id",
  "order_line_item_id"
], [order_id, order_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.organizations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrganization", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrganization", result, path))),
      removeWithResponse: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrganization", result, path))),
      getWithResponse: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      grantMembership: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("grantOrganizationMembership", result, path))),
      grantMembershipWithResponse: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      listMemberships: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path))),
      listMembershipsWithResponse: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listMembershipsPages: (organization_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path)),
      listMembershipsPagesWithResponse: (organization_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listMembershipsItems: (organization_id, params, options) => this.#runtime.items("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
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
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path))),
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
  "expand"
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
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path)),
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
  "expand"
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
  "expand"
], false, false, params), options),
      revokeMembership: async (organization_id, user_id, params, options) => this.#runtime.request("removeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrganizationMembership", result, path))),
      revokeMembershipWithResponse: async (organization_id, user_id, params, options) => this.#runtime.request("removeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      update: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrganization", result, path))),
      updateWithResponse: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.packages = Object.freeze({
      createItem: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackageItem", result, path))),
      createItemWithResponse: async (package_id, params, options) => this.#runtime.request("createPackageItem", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteItem: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePackageItem", result, path))),
      deleteItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("deletePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackage", result, path))),
      getWithResponse: async (package_id, params, options) => this.#runtime.request("getPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getItem: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPackageItem", result, path))),
      getItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("getPackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPackageItems: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path))),
      listPackageItemsWithResponse: async (package_id, params, options) => this.#runtime.request("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPackageItemsPages: (package_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPackageItems", result, path)),
      listPackageItemsPagesWithResponse: (package_id, params, options) => _sdkResponsePages(this.#runtime.pages("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
], false, false, params), options)),
      listPackageItemsItems: (package_id, params, options) => this.#runtime.items("listPackageItems", _sdkRequestInput([
  "package_id"
], [package_id], [
  "page_size",
  "page_token",
  "expand"
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
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPackages", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPackages", _sdkRequestInput([], [], [
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
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPackages", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPackages", _sdkRequestInput([], [], [
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
  "created_after",
  "created_before",
  "status",
  "tracking_number",
  "carrier",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionPackage", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionPackage", input, options).then(_sdkResponse),
      update: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackage", result, path))),
      updateWithResponse: async (package_id, params, options) => this.#runtime.request("updatePackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateItem: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePackageItem", result, path))),
      updateItemWithResponse: async (package_id, package_item_id, params, options) => this.#runtime.request("updatePackageItem", _sdkRequestInput([
  "package_id",
  "package_item_id"
], [package_id, package_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidPackage", result, path))),
      voidResourceWithResponse: async (package_id, params, options) => this.#runtime.request("voidPackage", _sdkRequestInput([
  "package_id"
], [package_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
    this.partnerAppInstalls = Object.freeze({
      list: async (params, options) => this.#runtime.request("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantPartnerAppInstalls", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMerchantPartnerAppInstalls", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options),
      revoke: async (partner_app_install_id, params, options) => this.#runtime.request("revokeMerchantPartnerAppInstall", _sdkRequestInput([
  "partner_app_install_id"
], [partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeMerchantPartnerAppInstall", result, path))),
      revokeWithResponse: async (partner_app_install_id, params, options) => this.#runtime.request("revokeMerchantPartnerAppInstall", _sdkRequestInput([
  "partner_app_install_id"
], [partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
    });
    this.paymentIntents = Object.freeze({
      cancel: async (payment_intent_id, params, options) => this.#runtime.request("cancelPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelPaymentIntent", result, path))),
      cancelWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("cancelPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      capture: async (payment_intent_id, params, options) => this.#runtime.request("capturePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("capturePaymentIntent", result, path))),
      captureWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("capturePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      confirm: (input = {}, options) => this.#runtime.request("confirmPaymentIntent", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmPaymentIntent", result, path))),
      confirmWithResponse: (input = {}, options) => this.#runtime.request("confirmPaymentIntent", input, options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createPaymentIntent", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentIntent", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentIntent", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_intent_id, params, options) => this.#runtime.request("getPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentIntent", result, path))),
      getWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("getPaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      listActivities: async (payment_intent_id, params, options) => this.#runtime.request("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentIntentActivities", result, path))),
      listActivitiesWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options).then(_sdkResponse),
      listActivitiesPages: (payment_intent_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentIntentActivities", result, path)),
      listActivitiesPagesWithResponse: (payment_intent_id, params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options)),
      listActivitiesItems: (payment_intent_id, params, options) => this.#runtime.items("listPaymentIntentActivities", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "page_size",
  "page_token",
  "sort_direction",
  "activity_type"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listPaymentIntents", _sdkRequestInput([], [], [
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentIntents", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentIntents", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentIntents", _sdkRequestInput([], [], [
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentIntents", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentIntents", _sdkRequestInput([], [], [
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
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentIntents", _sdkRequestInput([], [], [
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
], false, false, params), options),
      sendReceipt: async (payment_intent_id, params, options) => this.#runtime.request("sendPaymentIntentReceipt", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("sendPaymentIntentReceipt", result, path))),
      sendReceiptWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("sendPaymentIntentReceipt", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (payment_intent_id, params, options) => this.#runtime.request("updatePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentIntent", result, path))),
      updateWithResponse: async (payment_intent_id, params, options) => this.#runtime.request("updatePaymentIntent", _sdkRequestInput([
  "payment_intent_id"
], [payment_intent_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.paymentLinks = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentLink", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentLink", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLink", result, path))),
      getWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getPublic: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentLinkPublic", result, path))),
      getPublicWithResponse: async (payment_link_id, params, options) => this.#runtime.request("getPaymentLinkPublic", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentLinks", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentLinks", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentLinks", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      resolve: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolvePaymentLink", result, path))),
      resolveWithResponse: async (payment_link_id, params, options) => this.#runtime.request("resolvePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentLink", result, path))),
      updateWithResponse: async (payment_link_id, params, options) => this.#runtime.request("updatePaymentLink", _sdkRequestInput([
  "payment_link_id"
], [payment_link_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.paymentMethodDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentMethodDomain", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPaymentMethodDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentMethodDomain", result, path))),
      getWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("getPaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentMethodDomains", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentMethodDomains", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethodDomains", _sdkRequestInput([], [], [
  "domain_name",
  "page_size",
  "page_token"
], false, false, params), options),
      update: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePaymentMethodDomain", result, path))),
      updateWithResponse: async (payment_method_domain_id, params, options) => this.#runtime.request("updatePaymentMethodDomain", _sdkRequestInput([
  "payment_method_domain_id"
], [payment_method_domain_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.paymentMethods = Object.freeze({
      save: async (params, options) => this.#runtime.request("createPaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentMethod", result, path))),
      saveWithResponse: async (params, options) => this.#runtime.request("createPaymentMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (payment_method_id, params, options) => this.#runtime.request("deletePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePaymentMethod", result, path))),
      removeWithResponse: async (payment_method_id, params, options) => this.#runtime.request("deletePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (payment_method_id, params, options) => this.#runtime.request("getPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentMethod", result, path))),
      getWithResponse: async (payment_method_id, params, options) => this.#runtime.request("getPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentMethods", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentMethods", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params), options)),
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
], false, false, params), options),
    });
    this.payoutSettings = Object.freeze({
      deletePayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("deletePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePayoutDestination", result, path))),
      deletePayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("deletePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      getPayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("getPayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayoutDestination", result, path))),
      getPayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("getPayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayoutSettings", result, path))),
      getWithResponse: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      listPayoutDestinations: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPayoutDestinations", result, path))),
      listPayoutDestinationsWithResponse: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPayoutDestinationsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPayoutDestinations", result, path)),
      listPayoutDestinationsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params), options)),
      listPayoutDestinationsItems: (params, options) => this.#runtime.items("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "page_size",
  "page_token"
], false, false, params), options),
      updatePayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("updatePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePayoutDestination", result, path))),
      updatePayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("updatePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updatePayoutSettings", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePayoutSettings", result, path))),
      updateWithResponse: async (params, options) => this.#runtime.request("updatePayoutSettings", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.payouts = Object.freeze({
      cancel: async (payout_id, params, options) => this.#runtime.request("cancelPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelPayout", result, path))),
      cancelWithResponse: async (payout_id, params, options) => this.#runtime.request("cancelPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createPayout", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPayout", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPayout", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (payout_id, params, options) => this.#runtime.request("getPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPayout", result, path))),
      getWithResponse: async (payout_id, params, options) => this.#runtime.request("getPayout", _sdkRequestInput([
  "payout_id"
], [payout_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listPayouts", _sdkRequestInput([], [], [
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPayouts", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPayouts", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayouts", _sdkRequestInput([], [], [
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPayouts", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPayouts", _sdkRequestInput([], [], [
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
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listPayouts", _sdkRequestInput([], [], [
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
], false, false, params), options),
    });
    this.products = Object.freeze({
      create: async (params, options) => this.#runtime.request("createProduct", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProduct", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createProduct", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createVariant: async (product_id, params, options) => this.#runtime.request("createProductVariant", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createProductVariant", result, path))),
      createVariantWithResponse: async (product_id, params, options) => this.#runtime.request("createProductVariant", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (product_id, params, options) => this.#runtime.request("deleteProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProduct", result, path))),
      removeWithResponse: async (product_id, params, options) => this.#runtime.request("deleteProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      deleteVariant: async (product_id, variant_id, params, options) => this.#runtime.request("deleteProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteProductVariant", result, path))),
      deleteVariantWithResponse: async (product_id, variant_id, params, options) => this.#runtime.request("deleteProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (product_id, params, options) => this.#runtime.request("getProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProduct", result, path))),
      getWithResponse: async (product_id, params, options) => this.#runtime.request("getProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getOption: async (product_id, option_id, params, options) => this.#runtime.request("getProductOption", _sdkRequestInput([
  "product_id",
  "option_id"
], [product_id, option_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductOption", result, path))),
      getOptionWithResponse: async (product_id, option_id, params, options) => this.#runtime.request("getProductOption", _sdkRequestInput([
  "product_id",
  "option_id"
], [product_id, option_id], [], false, false, params), options).then(_sdkResponse),
      getVariant: async (product_id, variant_id, params, options) => this.#runtime.request("getProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getProductVariant", result, path))),
      getVariantWithResponse: async (product_id, variant_id, params, options) => this.#runtime.request("getProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      listOptions: async (product_id, params, options) => this.#runtime.request("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path))),
      listOptionsWithResponse: async (product_id, params, options) => this.#runtime.request("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(_sdkResponse),
      listOptionsPages: (product_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listProductOptions", result, path)),
      listOptionsPagesWithResponse: (product_id, params, options) => _sdkResponsePages(this.#runtime.pages("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options)),
      listOptionsItems: (product_id, params, options) => this.#runtime.items("listProductOptions", _sdkRequestInput([
  "product_id"
], [product_id], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProducts", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listProducts", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listProducts", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listProducts", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listProductVariants", result, path))),
      listVariantsWithResponse: async (product_id, params, options) => this.#runtime.request("listProductVariants", _sdkRequestInput([
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listProductVariants", result, path)),
      listVariantsPagesWithResponse: (product_id, params, options) => _sdkResponsePages(this.#runtime.pages("listProductVariants", _sdkRequestInput([
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (product_id, params, options) => this.#runtime.request("updateProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProduct", result, path))),
      updateWithResponse: async (product_id, params, options) => this.#runtime.request("updateProduct", _sdkRequestInput([
  "product_id"
], [product_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateVariant: async (product_id, variant_id, params, options) => this.#runtime.request("updateProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateProductVariant", result, path))),
      updateVariantWithResponse: async (product_id, variant_id, params, options) => this.#runtime.request("updateProductVariant", _sdkRequestInput([
  "product_id",
  "variant_id"
], [product_id, variant_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.promotions = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotion", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createPromotion", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createCode: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPromotionCode", result, path))),
      createCodeWithResponse: async (promotion_id, params, options) => this.#runtime.request("createPromotionCode", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotion", result, path))),
      removeWithResponse: async (promotion_id, params, options) => this.#runtime.request("deletePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      deleteCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePromotionCode", result, path))),
      deleteCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("deletePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotion", result, path))),
      getWithResponse: async (promotion_id, params, options) => this.#runtime.request("getPromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [], false, false, params), options).then(_sdkResponse),
      getCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("getPromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPromotionCode", result, path))),
      getCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("getPromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [], false, false, params), options).then(_sdkResponse),
      listCodes: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path))),
      listCodesWithResponse: async (params, options) => this.#runtime.request("listPromotionCodes", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
      listCodesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPromotionCodes", result, path)),
      listCodesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPromotionCodes", _sdkRequestInput([], [], [
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
], false, false, params), options)),
      listCodesItems: (params, options) => this.#runtime.items("listPromotionCodes", _sdkRequestInput([], [], [
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
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPromotions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPromotions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPromotions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotion", result, path))),
      updateWithResponse: async (promotion_id, params, options) => this.#runtime.request("updatePromotion", _sdkRequestInput([
  "promotion_id"
], [promotion_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateCode: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updatePromotionCode", result, path))),
      updateCodeWithResponse: async (promotion_id, promotion_code_id, params, options) => this.#runtime.request("updatePromotionCode", _sdkRequestInput([
  "promotion_id",
  "promotion_code_id"
], [promotion_id, promotion_code_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.refunds = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRefund", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRefund", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createRefund", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (refund_id, params, options) => this.#runtime.request("getRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRefund", result, path))),
      getWithResponse: async (refund_id, params, options) => this.#runtime.request("getRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listRefunds", _sdkRequestInput([], [], [
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRefunds", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listRefunds", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRefunds", _sdkRequestInput([], [], [
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listRefunds", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listRefunds", _sdkRequestInput([], [], [
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
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listRefunds", _sdkRequestInput([], [], [
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
], false, false, params), options),
      update: async (refund_id, params, options) => this.#runtime.request("updateRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRefund", result, path))),
      updateWithResponse: async (refund_id, params, options) => this.#runtime.request("updateRefund", _sdkRequestInput([
  "refund_id"
], [refund_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.reportDownloads = Object.freeze({
      get: async (report_download_id, params, options) => this.#runtime.request("getReportDownload", _sdkRequestInput([
  "report_download_id"
], [report_download_id], [], false, false, params), options),
    });
    this.reports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReport", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReport", result, path))),
      getWithResponse: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(_sdkResponse),
      getWait: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReport", result, path))),
      getWaitWithResponse: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReports", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReports", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "report_type",
  "status"
], false, false, params), options),
    });
    this.returnDispositions = Object.freeze({
      cancel: async (return_disposition_id, params, options) => this.#runtime.request("cancelReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnDisposition", result, path))),
      cancelWithResponse: async (return_disposition_id, params, options) => this.#runtime.request("cancelReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (return_disposition_id, params, options) => this.#runtime.request("getReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnDisposition", result, path))),
      getWithResponse: async (return_disposition_id, params, options) => this.#runtime.request("getReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], false, false, params), options).then(_sdkResponse),
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
  "updated_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnDispositions", result, path))),
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
  "updated_before"
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
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnDispositions", result, path)),
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
  "updated_before"
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
  "updated_before"
], false, false, params), options),
      retry: async (return_disposition_id, params, options) => this.#runtime.request("retryReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnDisposition", result, path))),
      retryWithResponse: async (return_disposition_id, params, options) => this.#runtime.request("retryReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnInspections = Object.freeze({
      decideLineItem: async (return_inspection_id, return_inspection_line_item_id, params, options) => this.#runtime.request("decideReturnInspectionLineItem", _sdkRequestInput([
  "return_inspection_id",
  "return_inspection_line_item_id"
], [return_inspection_id, return_inspection_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturnInspectionLineItem", result, path))),
      decideLineItemWithResponse: async (return_inspection_id, return_inspection_line_item_id, params, options) => this.#runtime.request("decideReturnInspectionLineItem", _sdkRequestInput([
  "return_inspection_id",
  "return_inspection_line_item_id"
], [return_inspection_id, return_inspection_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (return_inspection_id, params, options) => this.#runtime.request("getReturnInspection", _sdkRequestInput([
  "return_inspection_id"
], [return_inspection_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnInspection", result, path))),
      getWithResponse: async (return_inspection_id, params, options) => this.#runtime.request("getReturnInspection", _sdkRequestInput([
  "return_inspection_id"
], [return_inspection_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnInspections", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
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
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnInspections", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
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
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
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
], false, false, params), options),
    });
    this.returnPolicies = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPolicy", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnPolicy", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      publishRevision: async (return_policy_id, params, options) => this.#runtime.request("createReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPolicyRevision", result, path))),
      publishRevisionWithResponse: async (return_policy_id, params, options) => this.#runtime.request("createReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnPolicy", result, path))),
      removeWithResponse: async (return_policy_id, params, options) => this.#runtime.request("deleteReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnPolicy", result, path))),
      getWithResponse: async (return_policy_id, params, options) => this.#runtime.request("getReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getRevision: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnPolicyRevision", result, path))),
      getRevisionWithResponse: async (return_policy_id, return_policy_revision_id, params, options) => this.#runtime.request("getReturnPolicyRevision", _sdkRequestInput([
  "return_policy_id",
  "return_policy_revision_id"
], [return_policy_id, return_policy_revision_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnPolicies", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnPolicies", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnPolicies", _sdkRequestInput([], [], [
  "external_reference_id",
  "page_size",
  "page_token",
  "query",
  "status",
  "expand"
], false, false, params), options),
      listRevisions: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnPolicyRevisions", result, path))),
      listRevisionsWithResponse: async (return_policy_id, params, options) => this.#runtime.request("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listRevisionsPages: (return_policy_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnPolicyRevisions", result, path)),
      listRevisionsPagesWithResponse: (return_policy_id, params, options) => _sdkResponsePages(this.#runtime.pages("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listRevisionsItems: (return_policy_id, params, options) => this.#runtime.items("listReturnPolicyRevisions", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      update: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnPolicy", result, path))),
      updateWithResponse: async (return_policy_id, params, options) => this.#runtime.request("updateReturnPolicy", _sdkRequestInput([
  "return_policy_id"
], [return_policy_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPreview", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
    });
    this.returnReasons = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReason", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnReason", result, path))),
      removeWithResponse: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnReason", result, path))),
      getWithResponse: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnReasons", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnReasons", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options),
      update: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnReason", result, path))),
      updateWithResponse: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnReceipts = Object.freeze({
      get: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnReceipt", result, path))),
      getWithResponse: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [], false, false, params), options).then(_sdkResponse),
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
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path))),
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
  "updated_after",
  "updated_before",
  "verification_status"
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
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path)),
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
  "updated_after",
  "updated_before",
  "verification_status"
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
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options),
      verifyLineItem: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyReturnReceiptLineItem", result, path))),
      verifyLineItemWithResponse: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.returnResolutions = Object.freeze({
      cancel: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnResolution", result, path))),
      cancelWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("cancelReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      confirm: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("confirmReturnResolution", result, path))),
      confirmWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("confirmReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      getOrCreateCheckoutSession: async (return_resolution_id, params, options) => this.#runtime.request("getOrCreateReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrCreateReturnResolutionCheckoutSession", result, path))),
      getOrCreateCheckoutSessionWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getOrCreateReturnResolutionCheckoutSession", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      get: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnResolution", result, path))),
      getWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("getReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "expand"
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
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnResolutions", result, path))),
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
  "expand"
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
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnResolutions", result, path)),
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
  "expand"
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
  "expand"
], false, false, params), options),
      release: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("releaseReturnResolution", result, path))),
      releaseWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("releaseReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      retry: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnResolution", result, path))),
      retryWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("retryReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnResolution", result, path))),
      updateWithResponse: async (return_resolution_id, params, options) => this.#runtime.request("updateReturnResolution", _sdkRequestInput([
  "return_resolution_id"
], [return_resolution_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.returns = Object.freeze({
      cancel: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturn", result, path))),
      cancelWithResponse: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      cancelLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnLineItem", result, path))),
      cancelLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      complete: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeReturn", result, path))),
      completeWithResponse: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturn", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (return_id, params, options) => this.#runtime.request("createReturnAccessLink", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnAccessLink", result, path))),
      createAccessLinkWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnAccessLink", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createDisposition: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnDisposition", result, path))),
      createDispositionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createInspection: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnInspection", result, path))),
      createInspectionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      addLineItem: async (return_id, params, options) => this.#runtime.request("createReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnLineItem", result, path))),
      addLineItemWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createReceipt: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReceipt", result, path))),
      createReceiptWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createResolution: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnResolution", result, path))),
      createResolutionWithResponse: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      decide: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturn", result, path))),
      decideWithResponse: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deleteLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnLineItem", result, path))),
      deleteLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturn", result, path))),
      getWithResponse: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnLineItem", result, path))),
      getLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], false, false, params), options).then(_sdkResponse),
      listActivities: async (return_id, params, options) => this.#runtime.request("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path))),
      listActivitiesWithResponse: async (return_id, params, options) => this.#runtime.request("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params), options).then(_sdkResponse),
      listActivitiesPages: (return_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path)),
      listActivitiesPagesWithResponse: (return_id, params, options) => _sdkResponsePages(this.#runtime.pages("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params), options)),
      listActivitiesItems: (return_id, params, options) => this.#runtime.items("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params), options),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnLineItems", result, path))),
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
  "status"
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
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnLineItems", result, path)),
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
  "status"
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
  "status"
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturns", result, path))),
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturns", result, path)),
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
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
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params), options),
      processExisting: async (return_id, params, options) => this.#runtime.request("processReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("processReturn", result, path))),
      processExistingWithResponse: async (return_id, params, options) => this.#runtime.request("processReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      reopen: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reopenReturn", result, path))),
      reopenWithResponse: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturn", result, path))),
      updateWithResponse: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnLineItem", result, path))),
      updateLineItemWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      waiveLineInspection: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineItemInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("waiveReturnLineItemInspection", result, path))),
      waiveLineInspectionWithResponse: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineItemInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.reviews = Object.freeze({
      approve: async (payment_review_id, params, options) => this.#runtime.request("approvePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("approvePaymentReview", result, path))),
      approveWithResponse: async (payment_review_id, params, options) => this.#runtime.request("approvePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      decline: async (payment_review_id, params, options) => this.#runtime.request("declinePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("declinePaymentReview", result, path))),
      declineWithResponse: async (payment_review_id, params, options) => this.#runtime.request("declinePaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      get: async (payment_review_id, params, options) => this.#runtime.request("getPaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentReview", result, path))),
      getWithResponse: async (payment_review_id, params, options) => this.#runtime.request("getPaymentReview", _sdkRequestInput([
  "payment_review_id"
], [payment_review_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentReviews", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listPaymentReviews", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listPaymentReviews", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPaymentReviews", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
    });
    this.riskLists = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskList", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskList", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskList", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      addItems: async (risk_list_id, params, options) => this.#runtime.request("createRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskListItems", result, path))),
      addItemsWithResponse: async (risk_list_id, params, options) => this.#runtime.request("createRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (risk_list_id, params, options) => this.#runtime.request("deleteRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskList", result, path))),
      removeWithResponse: async (risk_list_id, params, options) => this.#runtime.request("deleteRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      deleteItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("deleteRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskListItem", result, path))),
      deleteItemWithResponse: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("deleteRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (risk_list_id, params, options) => this.#runtime.request("getRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskList", result, path))),
      getWithResponse: async (risk_list_id, params, options) => this.#runtime.request("getRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [], false, false, params), options).then(_sdkResponse),
      getItem: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("getRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskListItem", result, path))),
      getItemWithResponse: async (risk_list_id, risk_list_item_id, params, options) => this.#runtime.request("getRiskListItem", _sdkRequestInput([
  "risk_list_id",
  "risk_list_item_id"
], [risk_list_id, risk_list_item_id], [], false, false, params), options).then(_sdkResponse),
      listRiskListItems: async (risk_list_id, params, options) => this.#runtime.request("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path))),
      listRiskListItemsWithResponse: async (risk_list_id, params, options) => this.#runtime.request("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listRiskListItemsPages: (risk_list_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listRiskListItems", result, path)),
      listRiskListItemsPagesWithResponse: (risk_list_id, params, options) => _sdkResponsePages(this.#runtime.pages("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params), options)),
      listRiskListItemsItems: (risk_list_id, params, options) => this.#runtime.items("listRiskListItems", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "value",
  "page_size",
  "page_token"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listRiskLists", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listRiskLists", _sdkRequestInput([], [], [
  "alias",
  "status",
  "page_size",
  "page_token"
], false, false, params), options),
      update: async (risk_list_id, params, options) => this.#runtime.request("updateRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskList", result, path))),
      updateWithResponse: async (risk_list_id, params, options) => this.#runtime.request("updateRiskList", _sdkRequestInput([
  "risk_list_id"
], [risk_list_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.riskPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskPreview", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskPreview", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
    });
    this.riskRules = Object.freeze({
      create: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createRiskRule", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createRiskRule", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteRiskRule", result, path))),
      removeWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("deleteRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRule", result, path))),
      getWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("getRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [], false, false, params), options).then(_sdkResponse),
      getAttributeRegistry: async (params, options) => this.#runtime.request("getRiskRuleAttributes", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getRiskRuleAttributes", result, path))),
      getAttributeRegistryWithResponse: async (params, options) => this.#runtime.request("getRiskRuleAttributes", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listRiskRules", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listRiskRules", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token"
], false, false, params), options),
      update: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateRiskRule", result, path))),
      updateWithResponse: async (risk_rule_id, params, options) => this.#runtime.request("updateRiskRule", _sdkRequestInput([
  "risk_rule_id"
], [risk_rule_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.settings = Object.freeze({
      getEffective: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getEffectiveSettings", result, path))),
      getEffectiveWithResponse: async (params, options) => this.#runtime.request("getEffectiveSettings", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSettings", result, path))),
      getWithResponse: async (params, options) => this.#runtime.request("getSettings", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSettings", result, path))),
      updateWithResponse: async (params, options) => this.#runtime.request("updateSettings", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      validateCustomDomain: async (custom_domain_id, params, options) => this.#runtime.request("validateCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("validateCustomDomain", result, path))),
      validateCustomDomainWithResponse: async (custom_domain_id, params, options) => this.#runtime.request("validateCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
    });
    this.shipments = Object.freeze({
      createPackage: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPackage", result, path))),
      createPackageWithResponse: async (shipment_id, params, options) => this.#runtime.request("createPackage", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getShipment", result, path))),
      getWithResponse: async (shipment_id, params, options) => this.#runtime.request("getShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "expand"
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listShipments", result, path))),
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listShipments", result, path)),
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
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
  "status",
  "direction",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      update: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateShipment", result, path))),
      updateWithResponse: async (shipment_id, params, options) => this.#runtime.request("updateShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      voidResource: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("voidShipment", result, path))),
      voidResourceWithResponse: async (shipment_id, params, options) => this.#runtime.request("voidShipment", _sdkRequestInput([
  "shipment_id"
], [shipment_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
    this.specification = Object.freeze({
      get: async (params, options) => this.#runtime.request("getOpenAPISpec", _sdkRequestInput([], [], [
  "version"
], false, false, params), options),
    });
    this.subscriptionDeliveryMigrations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionDeliveryMigration", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionDeliveryMigration", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscriptionDeliveryMigration", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("getSubscriptionDeliveryMigration", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionDeliveryMigration", result, path))),
      getWithResponse: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("getSubscriptionDeliveryMigration", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [], false, false, params), options).then(_sdkResponse),
      listFailures: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrationFailures", result, path))),
      listFailuresWithResponse: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params), options).then(_sdkResponse),
      listFailuresPages: (subscription_delivery_migration_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrationFailures", result, path)),
      listFailuresPagesWithResponse: (subscription_delivery_migration_id, params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params), options)),
      listFailuresItems: (subscription_delivery_migration_id, params, options) => this.#runtime.items("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrations", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionDeliveryMigrations", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status"
], false, false, params), options),
    });
    this.subscriptionOffers = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionOffer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionOffer", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscriptionOffer", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (subscription_offer_id, params, options) => this.#runtime.request("deleteSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionOffer", result, path))),
      removeWithResponse: async (subscription_offer_id, params, options) => this.#runtime.request("deleteSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (subscription_offer_id, params, options) => this.#runtime.request("getSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionOffer", result, path))),
      getWithResponse: async (subscription_offer_id, params, options) => this.#runtime.request("getSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptionOffers", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionOffers", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionOffers", _sdkRequestInput([], [], [
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
], false, false, params), options)),
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
], false, false, params), options),
      update: async (subscription_offer_id, params, options) => this.#runtime.request("updateSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionOffer", result, path))),
      updateWithResponse: async (subscription_offer_id, params, options) => this.#runtime.request("updateSubscriptionOffer", _sdkRequestInput([
  "subscription_offer_id"
], [subscription_offer_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.subscriptionPlans = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPlan", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscriptionPlan", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionPlan", result, path))),
      removeWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("deleteSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPlan", result, path))),
      getWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("getSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path))),
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
  "updated_after",
  "updated_before"
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
  "updated_after",
  "updated_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPlans", result, path)),
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
  "updated_after",
  "updated_before"
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
  "updated_after",
  "updated_before"
], false, false, params), options),
      update: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionPlan", result, path))),
      updateWithResponse: async (subscription_plan_id, params, options) => this.#runtime.request("updateSubscriptionPlan", _sdkRequestInput([
  "subscription_plan_id"
], [subscription_plan_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.subscriptionPreviews = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createSubscriptionPreview", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPreview", result, path))),
      createWithResponse: (input = {}, options) => this.#runtime.request("createSubscriptionPreview", input, options).then(_sdkResponse),
    });
    this.subscriptions = Object.freeze({
      cancel: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelSubscription", result, path))),
      cancelWithResponse: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changePaymentMethod: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionPaymentMethod", result, path))),
      changePaymentMethodWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      changePlan: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPlan", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("changeSubscriptionPlan", result, path))),
      changePlanWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPlan", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscription", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createAccessLink: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionAccessLink", result, path))),
      createAccessLinkWithResponse: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionAccessLink", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      createLineItem: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionLineItem", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionLineItem", result, path))),
      createLineItemWithResponse: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionLineItem", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPaymentRetry", result, path))),
      createPaymentRetryWithResponse: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      deleteLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("deleteSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteSubscriptionLineItem", result, path))),
      deleteLineItemWithResponse: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("deleteSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscription", result, path))),
      getWithResponse: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      getPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getSubscriptionPaymentRetry", result, path))),
      getPaymentRetryWithResponse: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [], false, false, params), options).then(_sdkResponse),
      listPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path))),
      listPaymentRetriesWithResponse: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options).then(_sdkResponse),
      listPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptionPaymentRetries", result, path)),
      listPaymentRetriesPagesWithResponse: (subscription_id, params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options)),
      listPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listSubscriptions", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
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
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listSubscriptions", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
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
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listSubscriptions", _sdkRequestInput([], [], [
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
], false, false, params), options),
      pause: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("pauseSubscription", result, path))),
      pauseWithResponse: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      reactivate: async (subscription_id, params, options) => this.#runtime.request("reactivateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reactivateSubscription", result, path))),
      reactivateWithResponse: async (subscription_id, params, options) => this.#runtime.request("reactivateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      renew: async (subscription_id, params, options) => this.#runtime.request("renewSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("renewSubscription", result, path))),
      renewWithResponse: async (subscription_id, params, options) => this.#runtime.request("renewSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      resume: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resumeSubscription", result, path))),
      resumeWithResponse: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      skipCycle: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("skipSubscriptionCycle", result, path))),
      skipCycleWithResponse: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      update: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscription", result, path))),
      updateWithResponse: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      updateBillingSchedule: (input = {}, options) => this.#runtime.request("updateSubscriptionBillingSchedule", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionBillingSchedule", result, path))),
      updateBillingScheduleWithResponse: (input = {}, options) => this.#runtime.request("updateSubscriptionBillingSchedule", input, options).then(_sdkResponse),
      updateLineItem: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateSubscriptionLineItem", result, path))),
      updateLineItemWithResponse: async (subscription_id, subscription_line_item_id, params, options) => this.#runtime.request("updateSubscriptionLineItem", _sdkRequestInput([
  "subscription_id",
  "subscription_line_item_id"
], [subscription_id, subscription_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.webhookDeliveries = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookDelivery", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookDelivery", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createWebhookDelivery", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookDelivery", result, path))),
      getWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [], false, false, params), options).then(_sdkResponse),
      listAttempts: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path))),
      listAttemptsWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listAttemptsPages: (webhook_delivery_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveryAttempts", result, path)),
      listAttemptsPagesWithResponse: (webhook_delivery_id, params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listAttemptsItems: (webhook_delivery_id, params, options) => this.#runtime.items("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      resend: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resendWebhookDelivery", result, path))),
      resendWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
    });
    this.webhookEndpoints = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookEndpoint", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookEndpoint", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createWebhookEndpoint", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createWebhookTestEvent: async (webhook_endpoint_id, params, options) => this.#runtime.request("createWebhookTestEvent", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookTestEvent", result, path))),
      createWebhookTestEventWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("createWebhookTestEvent", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (webhook_endpoint_id, params, options) => this.#runtime.request("deleteWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteWebhookEndpoint", result, path))),
      removeWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("deleteWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (webhook_endpoint_id, params, options) => this.#runtime.request("getWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookEndpoint", result, path))),
      getWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("getWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options),
      rotateWebhookSecret: async (webhook_endpoint_id, params, options) => this.#runtime.request("rotateWebhookEndpointSecret", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateWebhookEndpointSecret", result, path))),
      rotateWebhookSecretWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("rotateWebhookEndpointSecret", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (webhook_endpoint_id, params, options) => this.#runtime.request("updateWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateWebhookEndpoint", result, path))),
      updateWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("updateWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
    this.webhookEventTypes = Object.freeze({
      list: async (params, options) => this.#runtime.request("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEventTypes", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEventTypes", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWebhookEventTypes", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options),
    });
    this.webhookEvents = Object.freeze({
      get: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookEvent", result, path))),
      getWithResponse: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveries: async (params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveries", result, path))),
      listWebhookDeliveriesWithResponse: async (params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveriesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveries", result, path)),
      listWebhookDeliveriesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options)),
      listWebhookDeliveriesItems: (params, options) => this.#runtime.items("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
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
  "created_after",
  "created_before",
  "include"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEvents", result, path))),
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
  "created_after",
  "created_before",
  "include"
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
  "created_after",
  "created_before",
  "include"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEvents", result, path)),
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
  "created_after",
  "created_before",
  "include"
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
  "created_after",
  "created_before",
  "include"
], false, false, params), options),
      stream: async (params, options) => this.#runtime.request("streamWebhookEvents", _sdkRequestInput([], [], [
  "event_type",
  "after_event_id",
  "Last-Event-ID"
], false, false, params), options),
    });
    this.workloadIdentities = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWorkloadIdentity", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWorkloadIdentity", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createWorkloadIdentity", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (workload_identity_id, params, options) => this.#runtime.request("deleteWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteWorkloadIdentity", result, path))),
      removeWithResponse: async (workload_identity_id, params, options) => this.#runtime.request("deleteWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (workload_identity_id, params, options) => this.#runtime.request("getWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWorkloadIdentity", result, path))),
      getWithResponse: async (workload_identity_id, params, options) => this.#runtime.request("getWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWorkloadIdentities", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options).then(_sdkResponse),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWorkloadIdentities", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWorkloadIdentities", _sdkRequestInput([], [], [
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before"
], false, false, params), options)),
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
], false, false, params), options),
      update: async (workload_identity_id, params, options) => this.#runtime.request("updateWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateWorkloadIdentity", result, path))),
      updateWithResponse: async (workload_identity_id, params, options) => this.#runtime.request("updateWorkloadIdentity", _sdkRequestInput([
  "workload_identity_id"
], [workload_identity_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
  }
  [Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
  close() { return this.#runtime.close(); }
  verifyWebhook(...args) { return this.#runtime.verifyWebhook(...args); }
}
export function verifyWebhook(rawBody, headers, secrets, nowSeconds) { return verifyWebhookFromPlan(_sdkDescriptors, rawBody, headers, secrets, nowSeconds); }
export function makeAddLineItemsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddLineItemsRequest"), constraints: true}); }
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddOrderChargeRequest"), constraints: true}); }
export function makeAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddressRequest"), constraints: true}); }
export function makeAddReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddReturnLineItemRequest"), constraints: true}); }
export function makeAddRiskListItemsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AddRiskListItemsRequest"), constraints: true}); }
export function makeAdjustGiftCardBalanceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AdjustGiftCardBalanceRequest"), constraints: true}); }
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyDiscountRequest"), constraints: true}); }
export function makeApplyOrderGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ApplyOrderGiftCardRequest"), constraints: true}); }
export function makeAssessInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssessInvoiceLateFeeRequest"), constraints: true}); }
export function makeAssignToUnconfiguredDeliveryProfileRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("AssignToUnconfiguredDeliveryProfileRequest"), constraints: true}); }
export function makeBrandingSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BrandingSettingsRequest"), constraints: true}); }
export function makeBuyerCapabilities(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCapabilities"), constraints: true}); }
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnPreviewRequest"), constraints: true}); }
export function makeBuyerCreateReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnRequest"), constraints: true}); }
export function makeBuyerCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerCreateReturnResolutionPreviewRequest"), constraints: true}); }
export function makeBuyerInstructionsConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerInstructionsConfig"), constraints: true}); }
export function makeBuyerPauseCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerPauseCapability"), constraints: true}); }
export function makeBuyerRetentionOffer(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerRetentionOffer"), constraints: true}); }
export function makeBuyerReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerReturnReplacementLineItemRequest"), constraints: true}); }
export function makeBuyerSkipCapability(value) { return modelFromCodec(value, {..._sdkModelCodec("BuyerSkipCapability"), constraints: true}); }
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryMethodResultRequest"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequest"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestAvailable"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestCannotCalculate(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestCannotCalculate"), constraints: true}); }
export function makeCallerSuppliedDeliveryOutcomeRequestUnavailable(value) { return modelFromCodec(value, {..._sdkModelCodec("CallerSuppliedDeliveryOutcomeRequestUnavailable"), constraints: true}); }
export function makeCancelGiftCardNotificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelGiftCardNotificationRequest"), constraints: true}); }
export function makeCancelOrderPaymentAttemptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelOrderPaymentAttemptRequest"), constraints: true}); }
export function makeCancelOrderPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelOrderPaymentRequest"), constraints: true}); }
export function makeCancelPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelPaymentIntentRequest"), constraints: true}); }
export function makeCancelPayoutRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelPayoutRequest"), constraints: true}); }
export function makeCancelReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnDispositionRequest"), constraints: true}); }
export function makeCancelReturnLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnLineItemRequest"), constraints: true}); }
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnRequest"), constraints: true}); }
export function makeCancelReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelReturnResolutionRequest"), constraints: true}); }
export function makeCancelSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CancelSubscriptionRequest"), constraints: true}); }
export function makeCaptureOrderPaymentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CaptureOrderPaymentRequest"), constraints: true}); }
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CapturePaymentIntentRequest"), constraints: true}); }
export function makeCashOutGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CashOutGiftCardRequest"), constraints: true}); }
export function makeChangeMeSubscriptionBillingIntervalRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeMeSubscriptionBillingIntervalRequest"), constraints: true}); }
export function makeChangeMeSubscriptionDeliveryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeMeSubscriptionDeliveryRequest"), constraints: true}); }
export function makeChangeMeSubscriptionQuantityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeMeSubscriptionQuantityRequest"), constraints: true}); }
export function makeChangeSubscriptionPaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeSubscriptionPaymentMethodRequest"), constraints: true}); }
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ChangeSubscriptionPlanRequest"), constraints: true}); }
export function makeCheckoutBuyerContactRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutBuyerContactRequest"), constraints: true}); }
export function makeCheckoutBuyerFields(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutBuyerFields"), constraints: true}); }
export function makeCheckoutCustomTextWriteConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutCustomTextWriteConfig"), constraints: true}); }
export function makeCheckoutLegalConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutLegalConfigRequest"), constraints: true}); }
export function makeCheckoutPaymentConfigRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPaymentConfigRequest"), constraints: true}); }
export function makeCheckoutPrefillRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPrefillRequest"), constraints: true}); }
export function makeCheckoutPromotionConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutPromotionConfig"), constraints: true}); }
export function makeCheckoutQuickPayItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutQuickPayItemRequest"), constraints: true}); }
export function makeCheckoutRecoveryEmailSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutRecoveryEmailSettings"), constraints: true}); }
export function makeCheckoutRedirectsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutRedirectsRequest"), constraints: true}); }
export function makeCheckoutSavedPaymentDetailsSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSavedPaymentDetailsSettings"), constraints: true}); }
export function makeCheckoutSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSettings"), constraints: true}); }
export function makeCheckoutSubscriptionTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutSubscriptionTermsRequest"), constraints: true}); }
export function makeCheckoutTaxConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutTaxConfig"), constraints: true}); }
export function makeCheckoutTipConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("CheckoutTipConfig"), constraints: true}); }
export function makeCloseCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseCheckoutSessionRequest"), constraints: true}); }
export function makeCloseOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CloseOrderRequest"), constraints: true}); }
export function makeCollectInvoiceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CollectInvoiceRequest"), constraints: true}); }
export function makeCompleteReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CompleteReturnRequest"), constraints: true}); }
export function makeConfigurationVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfigurationVersionRequest"), constraints: true}); }
export function makeConfirmCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmCheckoutSessionCustomerVerificationRequest"), constraints: true}); }
export function makeConfirmCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmCustomerVerificationRequest"), constraints: true}); }
export function makeConfirmEmailChangeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmEmailChangeRequest"), constraints: true}); }
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmPaymentIntentRequest"), constraints: true}); }
export function makeConfirmReturnResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ConfirmReturnResolutionRequest"), constraints: true}); }
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateAPIKeyRequest"), constraints: true}); }
export function makeCreateBundleComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateBundleComponentRequest"), constraints: true}); }
export function makeCreateBundleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateBundleRequest"), constraints: true}); }
export function makeCreateCategoryRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCategoryRequest"), constraints: true}); }
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutDeliveryQuoteRequest"), constraints: true}); }
export function makeCreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionConfirmSavedPaymentMethodVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionCustomerVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionGiftCardPurchaseVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionGiftCardPurchaseVerificationRequest"), constraints: true}); }
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionRequest"), constraints: true}); }
export function makeCreateCheckoutSessionSavePaymentMethodVerificationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateCheckoutSessionSavePaymentMethodVerificationRequest"), constraints: true}); }
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
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateLocationRequest"), constraints: true}); }
export function makeCreateMeSubscriptionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateMeSubscriptionPreviewRequest"), constraints: true}); }
export function makeCreateModifierGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierGroupRequest"), constraints: true}); }
export function makeCreateModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierRequest"), constraints: true}); }
export function makeCreateModifierSetGroupInputExisting(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupInputExisting"), constraints: true}); }
export function makeCreateModifierSetGroupInputInline(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupInputInline"), constraints: true}); }
export function makeCreateModifierSetGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetGroupRequest"), constraints: true}); }
export function makeCreateModifierSetRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateModifierSetRequest"), constraints: true}); }
export function makeCreateOrderDiscount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderDiscount"), constraints: true}); }
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderLineItemRequest"), constraints: true}); }
export function makeCreateOrderPaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderPaymentIntentRequest"), constraints: true}); }
export function makeCreateOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderRequest"), constraints: true}); }
export function makeCreateOrderTip(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrderTip"), constraints: true}); }
export function makeCreateOrganizationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateOrganizationRequest"), constraints: true}); }
export function makeCreatePackageItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePackageItemRequest"), constraints: true}); }
export function makeCreatePartnerAppRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePartnerAppRequest"), constraints: true}); }
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentIntentRequest"), constraints: true}); }
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentLinkRequest"), constraints: true}); }
export function makeCreatePaymentMethodDomainRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePaymentMethodDomainRequest"), constraints: true}); }
export function makeCreatePayoutRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePayoutRequest"), constraints: true}); }
export function makeCreatePickupFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePickupFulfillmentDetails"), constraints: true}); }
export function makeCreateProductOptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionRequest"), constraints: true}); }
export function makeCreateProductOptionValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductOptionValueRequest"), constraints: true}); }
export function makeCreateProductRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateProductRequest"), constraints: true}); }
export function makeCreatePromotionCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionCodeRequest"), constraints: true}); }
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreatePromotionRequest"), constraints: true}); }
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequest"), constraints: true}); }
export function makeCreateRefundRequestAmount(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestAmount"), constraints: true}); }
export function makeCreateRefundRequestFull(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestFull"), constraints: true}); }
export function makeCreateRefundRequestTargets(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRefundRequestTargets"), constraints: true}); }
export function makeCreateReportRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReportRequest"), constraints: true}); }
export function makeCreateReturnDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateReturnDispositionRequest"), constraints: true}); }
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
export function makeCreateRiskRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateRiskRuleRequest"), constraints: true}); }
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSandboxRequest"), constraints: true}); }
export function makeCreateServiceFulfillmentDetails(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateServiceFulfillmentDetails"), constraints: true}); }
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateShipmentRequest"), constraints: true}); }
export function makeCreateSubscriptionAccessLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionAccessLinkRequest"), constraints: true}); }
export function makeCreateSubscriptionDeliveryMigrationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionDeliveryMigrationRequest"), constraints: true}); }
export function makeCreateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionLineItemRequest"), constraints: true}); }
export function makeCreateSubscriptionOfferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionOfferRequest"), constraints: true}); }
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPlanRequest"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequest"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestCreate"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestDeliveryMethodUpdate"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestDeliveryOptions(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestDeliveryOptions"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestNextRenewal(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestNextRenewal"), constraints: true}); }
export function makeCreateSubscriptionPreviewRequestPlanChange(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionPreviewRequestPlanChange"), constraints: true}); }
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("CreateSubscriptionRequest"), constraints: true}); }
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
export function makeCustomerAccountPresentation(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountPresentation"), constraints: true}); }
export function makeCustomerAccountRouteTemplates(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountRouteTemplates"), constraints: true}); }
export function makeCustomerAccountSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerAccountSettings"), constraints: true}); }
export function makeCustomerEmailDeliverySettings(value) { return modelFromCodec(value, {..._sdkModelCodec("CustomerEmailDeliverySettings"), constraints: true}); }
export function makeDecideReturnInspectionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnInspectionLineItemRequest"), constraints: true}); }
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DecideReturnRequest"), constraints: true}); }
export function makeDeclinePaymentReviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeclinePaymentReviewRequest"), constraints: true}); }
export function makeDeliveryAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAddressRequest"), constraints: true}); }
export function makeDeliveryAvailability(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryAvailability"), constraints: true}); }
export function makeDeliveryBlackoutInterval(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBlackoutInterval"), constraints: true}); }
export function makeDeliveryBusinessDayRange(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryBusinessDayRange"), constraints: true}); }
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
export function makeDeliveryMethodOriginSelectorInputFixedLocation(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputFixedLocation"), constraints: true}); }
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryMethodOriginSelectorInputPickupLocationCollection"), constraints: true}); }
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
export function makeDeliveryTransitTimeRule(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryTransitTimeRule"), constraints: true}); }
export function makeDeliveryWeeklyInterval(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeeklyInterval"), constraints: true}); }
export function makeDeliveryWeightUnitPriceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWeightUnitPriceRequest"), constraints: true}); }
export function makeDeliveryWindowRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowRequest"), constraints: true}); }
export function makeDeliveryWindowTimeCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryWindowTimeCondition"), constraints: true}); }
export function makeDeliveryZoneCondition(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneCondition"), constraints: true}); }
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("DeliveryZoneConfiguration"), constraints: true}); }
export function makeDeveloperInitialAPIKeyRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DeveloperInitialAPIKeyRequest"), constraints: true}); }
export function makeDimensions(value) { return modelFromCodec(value, {..._sdkModelCodec("Dimensions"), constraints: true}); }
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("DiscountPreviewRequest"), constraints: true}); }
export function makeDocumentTaxID(value) { return modelFromCodec(value, {..._sdkModelCodec("DocumentTaxID"), constraints: true}); }
export function makeEmailPreferenceLinkRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("EmailPreferenceLinkRequest"), constraints: true}); }
export function makeFeedbackReportingClient(value) { return modelFromCodec(value, {..._sdkModelCodec("FeedbackReportingClient"), constraints: true}); }
export function makeFulfillmentLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentLineItemRequest"), constraints: true}); }
export function makeFulfillmentPackagingRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentPackagingRequest"), constraints: true}); }
export function makeFulfillmentRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentRecipientRequest"), constraints: true}); }
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
export function makeFulfillmentTransitionRequestReleaseHold(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestReleaseHold"), constraints: true}); }
export function makeFulfillmentTransitionRequestSchedule(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestSchedule"), constraints: true}); }
export function makeFulfillmentTransitionRequestStart(value) { return modelFromCodec(value, {..._sdkModelCodec("FulfillmentTransitionRequestStart"), constraints: true}); }
export function makeGetOrCreateReturnResolutionCheckoutSessionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GetOrCreateReturnResolutionCheckoutSessionRequest"), constraints: true}); }
export function makeGiftCardCustomAmountBounds(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardCustomAmountBounds"), constraints: true}); }
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
export function makeGiftCardProductConfiguration(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardProductConfiguration"), constraints: true}); }
export function makeGiftCardPurchaseDetailsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseDetailsRequest"), constraints: true}); }
export function makeGiftCardPurchaseRecipientPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRecipientPatchRequest"), constraints: true}); }
export function makeGiftCardPurchaseRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardPurchaseRecipientRequest"), constraints: true}); }
export function makeGiftCardVersionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GiftCardVersionRequest"), constraints: true}); }
export function makeGrantOrganizationMembershipRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("GrantOrganizationMembershipRequest"), constraints: true}); }
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
export function makeInventoryOriginPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("InventoryOriginPolicy"), constraints: true}); }
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
export function makeInventorySettings(value) { return modelFromCodec(value, {..._sdkModelCodec("InventorySettings"), constraints: true}); }
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
export function makeLegalSettingsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LegalSettingsRequest"), constraints: true}); }
export function makeLineItemFulfillmentOriginRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentOriginRequest"), constraints: true}); }
export function makeLineItemFulfillmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LineItemFulfillmentRequest"), constraints: true}); }
export function makeLinkCustomerGuestPurchasesRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LinkCustomerGuestPurchasesRequest"), constraints: true}); }
export function makeLocationAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationAddressRequest"), constraints: true}); }
export function makeLocationCoordinate(value) { return modelFromCodec(value, {..._sdkModelCodec("LocationCoordinate"), constraints: true}); }
export function makeLookupGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("LookupGiftCardRequest"), constraints: true}); }
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ManualDiscountRequest"), constraints: true}); }
export function makeMerchantAccountSessionCreateRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionCreateRequest"), constraints: true}); }
export function makeMerchantAccountSessionRefreshRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("MerchantAccountSessionRefreshRequest"), constraints: true}); }
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
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeRequest"), constraints: true}); }
export function makeOrderChargeTaxAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderChargeTaxAssignment"), constraints: true}); }
export function makeOrderDeliveryDestinationAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationAddressRequest"), constraints: true}); }
export function makeOrderDeliveryDestinationRecipientRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRecipientRequest"), constraints: true}); }
export function makeOrderDeliveryDestinationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDeliveryDestinationRequest"), constraints: true}); }
export function makeOrderDraftLineItemInventoryDemandRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemInventoryDemandRequest"), constraints: true}); }
export function makeOrderDraftLineItemTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxCalculationRequest"), constraints: true}); }
export function makeOrderDraftLineItemTaxRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftLineItemTaxRequest"), constraints: true}); }
export function makeOrderDraftTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxComponentRequest"), constraints: true}); }
export function makeOrderDraftTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderDraftTaxJurisdictionRequest"), constraints: true}); }
export function makeOrderGiftCardAllocationAcceptance(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderGiftCardAllocationAcceptance"), constraints: true}); }
export function makeOrderInventoryRoutingSourceRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderInventoryRoutingSourceRequest"), constraints: true}); }
export function makeOrderLineItemModifierRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemModifierRequest"), constraints: true}); }
export function makeOrderLineItemTax(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemTax"), constraints: true}); }
export function makeOrderLineItemTaxAssignment(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderLineItemTaxAssignment"), constraints: true}); }
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentIntentSelection"), constraints: true}); }
export function makeOrderPaymentSourceCardSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentSourceCardSelection"), constraints: true}); }
export function makeOrderPaymentSourceSelection(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderPaymentSourceSelection"), constraints: true}); }
export function makeOrderTaxCalculationInputAutomatic(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxCalculationInputAutomatic"), constraints: true}); }
export function makeOrderTaxCalculationInputExternal(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxCalculationInputExternal"), constraints: true}); }
export function makeOrderTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxCalculationRequest"), constraints: true}); }
export function makeOrderTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxComponentRequest"), constraints: true}); }
export function makeOrderTaxJurisdictionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxJurisdictionRequest"), constraints: true}); }
export function makeOrderTaxLocationFullAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationFullAddressRequest"), constraints: true}); }
export function makeOrderTaxLocationInputFullAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputFullAddress"), constraints: true}); }
export function makeOrderTaxLocationInputInferredFullAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputInferredFullAddress"), constraints: true}); }
export function makeOrderTaxLocationInputInferredPostalCode(value) { return modelFromCodec(value, {..._sdkModelCodec("OrderTaxLocationInputInferredPostalCode"), constraints: true}); }
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
export function makePartnerAppPermissionManifestEntry(value) { return modelFromCodec(value, {..._sdkModelCodec("PartnerAppPermissionManifestEntry"), constraints: true}); }
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
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemPatchRequest"), constraints: true}); }
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkLineItemRequest"), constraints: true}); }
export function makePaymentLinkPaymentConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkPaymentConfig"), constraints: true}); }
export function makePaymentLinkPaymentPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkPaymentPatchRequest"), constraints: true}); }
export function makePaymentLinkRedirectsPatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkRedirectsPatchRequest"), constraints: true}); }
export function makePaymentLinkThemeConfig(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkThemeConfig"), constraints: true}); }
export function makePaymentLinkThemePatchRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentLinkThemePatchRequest"), constraints: true}); }
export function makePaymentSourceCredential(value) { return modelFromCodec(value, {..._sdkModelCodec("PaymentSourceCredential"), constraints: true}); }
export function makePayOrderRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequest"), constraints: true}); }
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestConfirmPaymentIntents"), constraints: true}); }
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestPay"), constraints: true}); }
export function makePayOrderRequestResume(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestResume"), constraints: true}); }
export function makePayOrderRequestSetup(value) { return modelFromCodec(value, {..._sdkModelCodec("PayOrderRequestSetup"), constraints: true}); }
export function makePostalAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("PostalAddress"), constraints: true}); }
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
export function makePromotionRefRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRefRequest"), constraints: true}); }
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleGroupRequest"), constraints: true}); }
export function makePromotionRuleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleRequest"), constraints: true}); }
export function makePromotionRuleValueRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionRuleValueRequest"), constraints: true}); }
export function makePromotionSchedule(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionSchedule"), constraints: true}); }
export function makePromotionSchedulePatch(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionSchedulePatch"), constraints: true}); }
export function makePromotionSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("PromotionSettings"), constraints: true}); }
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
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessDecision"), constraints: true}); }
export function makeReturnProcessDispositionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessDispositionRequest"), constraints: true}); }
export function makeReturnProcessInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessInspectionRequest"), constraints: true}); }
export function makeReturnProcessReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessReceiptRequest"), constraints: true}); }
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnProcessResolutionRequest"), constraints: true}); }
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReceiptLineItemRequest"), constraints: true}); }
export function makeReturnReplacementLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnReplacementLineItemRequest"), constraints: true}); }
export function makeReturnResolutionAdjustmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionAdjustmentRequest"), constraints: true}); }
export function makeReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnResolutionLineItemRequest"), constraints: true}); }
export function makeReturnRestockingFeePolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnRestockingFeePolicy"), constraints: true}); }
export function makeReturnShipmentLineItemAllocation(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShipmentLineItemAllocation"), constraints: true}); }
export function makeReturnShippingPolicy(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnShippingPolicy"), constraints: true}); }
export function makeReturnSourceSystem(value) { return modelFromCodec(value, {..._sdkModelCodec("ReturnSourceSystem"), constraints: true}); }
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
export function makeRotateGiftCardCodeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotateGiftCardCodeRequest"), constraints: true}); }
export function makeRotatePartnerAppSecretRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotatePartnerAppSecretRequest"), constraints: true}); }
export function makeRotateWebhookSecretRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("RotateWebhookSecretRequest"), constraints: true}); }
export function makeSaveMeGiftCardRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequest"), constraints: true}); }
export function makeSaveMeGiftCardRequestCode(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequestCode"), constraints: true}); }
export function makeSaveMeGiftCardRequestRecipientAccess(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMeGiftCardRequestRecipientAccess"), constraints: true}); }
export function makeSaveMePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SaveMePaymentMethodRequest"), constraints: true}); }
export function makeSavePaymentMethodRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SavePaymentMethodRequest"), constraints: true}); }
export function makeSendOrderReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SendOrderReceiptRequest"), constraints: true}); }
export function makeSendPaymentIntentReceiptRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SendPaymentIntentReceiptRequest"), constraints: true}); }
export function makeSetDefaultCustomerAddressRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SetDefaultCustomerAddressRequest"), constraints: true}); }
export function makeSignedMoney(value) { return modelFromCodec(value, {..._sdkModelCodec("SignedMoney"), constraints: true}); }
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
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanLineItemRequest"), constraints: true}); }
export function makeSubscriptionPlanTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionPlanTermsRequest"), constraints: true}); }
export function makeSubscriptionServiceLocationInputAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationInputAddress"), constraints: true}); }
export function makeSubscriptionServiceLocationInputCustomerAddress(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationInputCustomerAddress"), constraints: true}); }
export function makeSubscriptionServiceLocationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionServiceLocationRequest"), constraints: true}); }
export function makeSubscriptionSettings(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionSettings"), constraints: true}); }
export function makeSubscriptionTermsRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("SubscriptionTermsRequest"), constraints: true}); }
export function makeTaxCalculationRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxCalculationRequest"), constraints: true}); }
export function makeTaxComponentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxComponentRequest"), constraints: true}); }
export function makeTaxIdentityPatch(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityPatch"), constraints: true}); }
export function makeTaxIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxIdentityRequest"), constraints: true}); }
export function makeTaxJurisdiction(value) { return modelFromCodec(value, {..._sdkModelCodec("TaxJurisdiction"), constraints: true}); }
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
export function makeUpdateSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionBillingScheduleRequest"), constraints: true}); }
export function makeUpdateSubscriptionBillingScheduleRequestExternal(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionBillingScheduleRequestExternal"), constraints: true}); }
export function makeUpdateSubscriptionBillingScheduleRequestFlint(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionBillingScheduleRequestFlint"), constraints: true}); }
export function makeUpdateSubscriptionLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionLineItemRequest"), constraints: true}); }
export function makeUpdateSubscriptionOfferRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionOfferRequest"), constraints: true}); }
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanLineItemRequest"), constraints: true}); }
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionPlanRequest"), constraints: true}); }
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateSubscriptionRequest"), constraints: true}); }
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateWebhookEndpointRequest"), constraints: true}); }
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("UpdateWorkloadIdentityRequest"), constraints: true}); }
export function makeVerifyReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VerifyReturnReceiptLineItemRequest"), constraints: true}); }
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidPackageRequest"), constraints: true}); }
export function makeVoidShipmentRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("VoidShipmentRequest"), constraints: true}); }
export function makeWaiveInvoiceLateFeeRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveInvoiceLateFeeRequest"), constraints: true}); }
export function makeWaiveReturnLineInspectionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WaiveReturnLineInspectionRequest"), constraints: true}); }
export function makeWeight(value) { return modelFromCodec(value, {..._sdkModelCodec("Weight"), constraints: true}); }
export function makeWorkloadIdentityClaimConditionRequest(value) { return modelFromCodec(value, {..._sdkModelCodec("WorkloadIdentityClaimConditionRequest"), constraints: true}); }
