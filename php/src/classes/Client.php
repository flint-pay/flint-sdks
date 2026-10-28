<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AnalyticsResource $analytics
 * @property-read ApiKeysResource $apiKeys
 * @property-read BalanceTransactionsResource $balanceTransactions
 * @property-read BalancesResource $balances
 * @property-read BundlesResource $bundles
 * @property-read CategoriesResource $categories
 * @property-read CheckoutSessionsResource $checkoutSessions
 * @property-read CreditNotesResource $creditNotes
 * @property-read CustomDomainsResource $customDomains
 * @property-read CustomerDeletionRequestsResource $customerDeletionRequests
 * @property-read CustomerSessionsResource $customerSessions
 * @property-read CustomerVerificationsResource $customerVerifications
 * @property-read CustomersResource $customers
 * @property-read DeliveryLocationSetsResource $deliveryLocationSets
 * @property-read DeliveryMethodsResource $deliveryMethods
 * @property-read DeliveryPreviewsResource $deliveryPreviews
 * @property-read DeliveryProfilesResource $deliveryProfiles
 * @property-read DeliveryQuotesResource $deliveryQuotes
 * @property-read DeliveryRateCallbacksResource $deliveryRateCallbacks
 * @property-read DeliveryRevocationsResource $deliveryRevocations
 * @property-read DeliveryZonesResource $deliveryZones
 * @property-read DemoSessionsResource $demoSessions
 * @property-read DeveloperResource $developer
 * @property-read DevicesResource $devices
 * @property-read DiscountPreviewsResource $discountPreviews
 * @property-read DisputesResource $disputes
 * @property-read EmailPreferenceLinksResource $emailPreferenceLinks
 * @property-read FeedbackReportsResource $feedbackReports
 * @property-read FilesResource $files
 * @property-read FraudWarningsResource $fraudWarnings
 * @property-read FulfillmentEventsResource $fulfillmentEvents
 * @property-read FulfillmentNotificationsResource $fulfillmentNotifications
 * @property-read FulfillmentsResource $fulfillments
 * @property-read GiftCardAdjustmentsResource $giftCardAdjustments
 * @property-read GiftCardCashOutsResource $giftCardCashOuts
 * @property-read GiftCardFundingDispositionsResource $giftCardFundingDispositions
 * @property-read GiftCardLoadsResource $giftCardLoads
 * @property-read GiftCardNotificationsResource $giftCardNotifications
 * @property-read GiftCardRedemptionsResource $giftCardRedemptions
 * @property-read GiftCardTransactionsResource $giftCardTransactions
 * @property-read GiftCardsResource $giftCards
 * @property-read InventoryAdjustmentsResource $inventoryAdjustments
 * @property-read InventoryAllocationPoliciesResource $inventoryAllocationPolicies
 * @property-read InventoryCountsResource $inventoryCounts
 * @property-read InventoryItemsResource $inventoryItems
 * @property-read InventoryLevelsResource $inventoryLevels
 * @property-read InventoryMovementsResource $inventoryMovements
 * @property-read InventoryReceiptsResource $inventoryReceipts
 * @property-read InventoryReservationsResource $inventoryReservations
 * @property-read InventoryTransfersResource $inventoryTransfers
 * @property-read InvoicePaymentTermsResource $invoicePaymentTerms
 * @property-read InvoicesResource $invoices
 * @property-read LocationsResource $locations
 * @property-read MeResource $me
 * @property-read MerchantAccountSessionsResource $merchantAccountSessions
 * @property-read MerchantBillingBalancesResource $merchantBillingBalances
 * @property-read MerchantBillingEntriesResource $merchantBillingEntries
 * @property-read MerchantSubscriptionInvoicesResource $merchantSubscriptionInvoices
 * @property-read MerchantsResource $merchants
 * @property-read ModifierGroupsResource $modifierGroups
 * @property-read ModifierSetsResource $modifierSets
 * @property-read OauthResource $oauth
 * @property-read OnboardingResource $onboarding
 * @property-read OrdersResource $orders
 * @property-read OrganizationsResource $organizations
 * @property-read PackagesResource $packages
 * @property-read PartnerAppInstallsResource $partnerAppInstalls
 * @property-read PaymentIntentsResource $paymentIntents
 * @property-read PaymentLinksResource $paymentLinks
 * @property-read PaymentMethodDomainsResource $paymentMethodDomains
 * @property-read PaymentMethodsResource $paymentMethods
 * @property-read PayoutSettingsResource $payoutSettings
 * @property-read PayoutsResource $payouts
 * @property-read ProductsResource $products
 * @property-read PromotionsResource $promotions
 * @property-read RefundsResource $refunds
 * @property-read ReportDownloadsResource $reportDownloads
 * @property-read ReportsResource $reports
 * @property-read ReturnDispositionsResource $returnDispositions
 * @property-read ReturnInspectionsResource $returnInspections
 * @property-read ReturnPoliciesResource $returnPolicies
 * @property-read ReturnPreviewsResource $returnPreviews
 * @property-read ReturnReasonsResource $returnReasons
 * @property-read ReturnReceiptsResource $returnReceipts
 * @property-read ReturnResolutionsResource $returnResolutions
 * @property-read ReturnsResource $returns
 * @property-read ReviewsResource $reviews
 * @property-read RiskListsResource $riskLists
 * @property-read RiskPreviewsResource $riskPreviews
 * @property-read RiskRulesResource $riskRules
 * @property-read SettingsResource $settings
 * @property-read ShipmentsResource $shipments
 * @property-read SpecificationResource $specification
 * @property-read SubscriptionDeliveryMigrationsResource $subscriptionDeliveryMigrations
 * @property-read SubscriptionOffersResource $subscriptionOffers
 * @property-read SubscriptionPlansResource $subscriptionPlans
 * @property-read SubscriptionPreviewsResource $subscriptionPreviews
 * @property-read SubscriptionsResource $subscriptions
 * @property-read TaxConnectionResource $taxConnection
 * @property-read WebhookDeliveriesResource $webhookDeliveries
 * @property-read WebhookEndpointsResource $webhookEndpoints
 * @property-read WebhookEventTypesResource $webhookEventTypes
 * @property-read WebhookEventsResource $webhookEvents
 * @property-read WorkloadIdentitiesResource $workloadIdentities
 */
final class Client {
    private Runtime $runtime;
    private array $resourceCache = [];
    public function __construct(ClientOptions $options = new ClientOptions()) {
        $this->runtime = new Runtime(SchemaRegistry::source(), $options, true);
    }
    public function __get(string $name): mixed {
        return match ($name) {
            'analytics' => $this->resourceCache['analytics'] ??= new AnalyticsResource($this->runtime),
            'apiKeys' => $this->resourceCache['apiKeys'] ??= new ApiKeysResource($this->runtime),
            'balanceTransactions' => $this->resourceCache['balanceTransactions'] ??= new BalanceTransactionsResource($this->runtime),
            'balances' => $this->resourceCache['balances'] ??= new BalancesResource($this->runtime),
            'bundles' => $this->resourceCache['bundles'] ??= new BundlesResource($this->runtime),
            'categories' => $this->resourceCache['categories'] ??= new CategoriesResource($this->runtime),
            'checkoutSessions' => $this->resourceCache['checkoutSessions'] ??= new CheckoutSessionsResource($this->runtime),
            'creditNotes' => $this->resourceCache['creditNotes'] ??= new CreditNotesResource($this->runtime),
            'customDomains' => $this->resourceCache['customDomains'] ??= new CustomDomainsResource($this->runtime),
            'customerDeletionRequests' => $this->resourceCache['customerDeletionRequests'] ??= new CustomerDeletionRequestsResource($this->runtime),
            'customerSessions' => $this->resourceCache['customerSessions'] ??= new CustomerSessionsResource($this->runtime),
            'customerVerifications' => $this->resourceCache['customerVerifications'] ??= new CustomerVerificationsResource($this->runtime),
            'customers' => $this->resourceCache['customers'] ??= new CustomersResource($this->runtime),
            'deliveryLocationSets' => $this->resourceCache['deliveryLocationSets'] ??= new DeliveryLocationSetsResource($this->runtime),
            'deliveryMethods' => $this->resourceCache['deliveryMethods'] ??= new DeliveryMethodsResource($this->runtime),
            'deliveryPreviews' => $this->resourceCache['deliveryPreviews'] ??= new DeliveryPreviewsResource($this->runtime),
            'deliveryProfiles' => $this->resourceCache['deliveryProfiles'] ??= new DeliveryProfilesResource($this->runtime),
            'deliveryQuotes' => $this->resourceCache['deliveryQuotes'] ??= new DeliveryQuotesResource($this->runtime),
            'deliveryRateCallbacks' => $this->resourceCache['deliveryRateCallbacks'] ??= new DeliveryRateCallbacksResource($this->runtime),
            'deliveryRevocations' => $this->resourceCache['deliveryRevocations'] ??= new DeliveryRevocationsResource($this->runtime),
            'deliveryZones' => $this->resourceCache['deliveryZones'] ??= new DeliveryZonesResource($this->runtime),
            'demoSessions' => $this->resourceCache['demoSessions'] ??= new DemoSessionsResource($this->runtime),
            'developer' => $this->resourceCache['developer'] ??= new DeveloperResource($this->runtime),
            'devices' => $this->resourceCache['devices'] ??= new DevicesResource($this->runtime),
            'discountPreviews' => $this->resourceCache['discountPreviews'] ??= new DiscountPreviewsResource($this->runtime),
            'disputes' => $this->resourceCache['disputes'] ??= new DisputesResource($this->runtime),
            'emailPreferenceLinks' => $this->resourceCache['emailPreferenceLinks'] ??= new EmailPreferenceLinksResource($this->runtime),
            'feedbackReports' => $this->resourceCache['feedbackReports'] ??= new FeedbackReportsResource($this->runtime),
            'files' => $this->resourceCache['files'] ??= new FilesResource($this->runtime),
            'fraudWarnings' => $this->resourceCache['fraudWarnings'] ??= new FraudWarningsResource($this->runtime),
            'fulfillmentEvents' => $this->resourceCache['fulfillmentEvents'] ??= new FulfillmentEventsResource($this->runtime),
            'fulfillmentNotifications' => $this->resourceCache['fulfillmentNotifications'] ??= new FulfillmentNotificationsResource($this->runtime),
            'fulfillments' => $this->resourceCache['fulfillments'] ??= new FulfillmentsResource($this->runtime),
            'giftCardAdjustments' => $this->resourceCache['giftCardAdjustments'] ??= new GiftCardAdjustmentsResource($this->runtime),
            'giftCardCashOuts' => $this->resourceCache['giftCardCashOuts'] ??= new GiftCardCashOutsResource($this->runtime),
            'giftCardFundingDispositions' => $this->resourceCache['giftCardFundingDispositions'] ??= new GiftCardFundingDispositionsResource($this->runtime),
            'giftCardLoads' => $this->resourceCache['giftCardLoads'] ??= new GiftCardLoadsResource($this->runtime),
            'giftCardNotifications' => $this->resourceCache['giftCardNotifications'] ??= new GiftCardNotificationsResource($this->runtime),
            'giftCardRedemptions' => $this->resourceCache['giftCardRedemptions'] ??= new GiftCardRedemptionsResource($this->runtime),
            'giftCardTransactions' => $this->resourceCache['giftCardTransactions'] ??= new GiftCardTransactionsResource($this->runtime),
            'giftCards' => $this->resourceCache['giftCards'] ??= new GiftCardsResource($this->runtime),
            'inventoryAdjustments' => $this->resourceCache['inventoryAdjustments'] ??= new InventoryAdjustmentsResource($this->runtime),
            'inventoryAllocationPolicies' => $this->resourceCache['inventoryAllocationPolicies'] ??= new InventoryAllocationPoliciesResource($this->runtime),
            'inventoryCounts' => $this->resourceCache['inventoryCounts'] ??= new InventoryCountsResource($this->runtime),
            'inventoryItems' => $this->resourceCache['inventoryItems'] ??= new InventoryItemsResource($this->runtime),
            'inventoryLevels' => $this->resourceCache['inventoryLevels'] ??= new InventoryLevelsResource($this->runtime),
            'inventoryMovements' => $this->resourceCache['inventoryMovements'] ??= new InventoryMovementsResource($this->runtime),
            'inventoryReceipts' => $this->resourceCache['inventoryReceipts'] ??= new InventoryReceiptsResource($this->runtime),
            'inventoryReservations' => $this->resourceCache['inventoryReservations'] ??= new InventoryReservationsResource($this->runtime),
            'inventoryTransfers' => $this->resourceCache['inventoryTransfers'] ??= new InventoryTransfersResource($this->runtime),
            'invoicePaymentTerms' => $this->resourceCache['invoicePaymentTerms'] ??= new InvoicePaymentTermsResource($this->runtime),
            'invoices' => $this->resourceCache['invoices'] ??= new InvoicesResource($this->runtime),
            'locations' => $this->resourceCache['locations'] ??= new LocationsResource($this->runtime),
            'me' => $this->resourceCache['me'] ??= new MeResource($this->runtime),
            'merchantAccountSessions' => $this->resourceCache['merchantAccountSessions'] ??= new MerchantAccountSessionsResource($this->runtime),
            'merchantBillingBalances' => $this->resourceCache['merchantBillingBalances'] ??= new MerchantBillingBalancesResource($this->runtime),
            'merchantBillingEntries' => $this->resourceCache['merchantBillingEntries'] ??= new MerchantBillingEntriesResource($this->runtime),
            'merchantSubscriptionInvoices' => $this->resourceCache['merchantSubscriptionInvoices'] ??= new MerchantSubscriptionInvoicesResource($this->runtime),
            'merchants' => $this->resourceCache['merchants'] ??= new MerchantsResource($this->runtime),
            'modifierGroups' => $this->resourceCache['modifierGroups'] ??= new ModifierGroupsResource($this->runtime),
            'modifierSets' => $this->resourceCache['modifierSets'] ??= new ModifierSetsResource($this->runtime),
            'oauth' => $this->resourceCache['oauth'] ??= new OauthResource($this->runtime),
            'onboarding' => $this->resourceCache['onboarding'] ??= new OnboardingResource($this->runtime),
            'orders' => $this->resourceCache['orders'] ??= new OrdersResource($this->runtime),
            'organizations' => $this->resourceCache['organizations'] ??= new OrganizationsResource($this->runtime),
            'packages' => $this->resourceCache['packages'] ??= new PackagesResource($this->runtime),
            'partnerAppInstalls' => $this->resourceCache['partnerAppInstalls'] ??= new PartnerAppInstallsResource($this->runtime),
            'paymentIntents' => $this->resourceCache['paymentIntents'] ??= new PaymentIntentsResource($this->runtime),
            'paymentLinks' => $this->resourceCache['paymentLinks'] ??= new PaymentLinksResource($this->runtime),
            'paymentMethodDomains' => $this->resourceCache['paymentMethodDomains'] ??= new PaymentMethodDomainsResource($this->runtime),
            'paymentMethods' => $this->resourceCache['paymentMethods'] ??= new PaymentMethodsResource($this->runtime),
            'payoutSettings' => $this->resourceCache['payoutSettings'] ??= new PayoutSettingsResource($this->runtime),
            'payouts' => $this->resourceCache['payouts'] ??= new PayoutsResource($this->runtime),
            'products' => $this->resourceCache['products'] ??= new ProductsResource($this->runtime),
            'promotions' => $this->resourceCache['promotions'] ??= new PromotionsResource($this->runtime),
            'refunds' => $this->resourceCache['refunds'] ??= new RefundsResource($this->runtime),
            'reportDownloads' => $this->resourceCache['reportDownloads'] ??= new ReportDownloadsResource($this->runtime),
            'reports' => $this->resourceCache['reports'] ??= new ReportsResource($this->runtime),
            'returnDispositions' => $this->resourceCache['returnDispositions'] ??= new ReturnDispositionsResource($this->runtime),
            'returnInspections' => $this->resourceCache['returnInspections'] ??= new ReturnInspectionsResource($this->runtime),
            'returnPolicies' => $this->resourceCache['returnPolicies'] ??= new ReturnPoliciesResource($this->runtime),
            'returnPreviews' => $this->resourceCache['returnPreviews'] ??= new ReturnPreviewsResource($this->runtime),
            'returnReasons' => $this->resourceCache['returnReasons'] ??= new ReturnReasonsResource($this->runtime),
            'returnReceipts' => $this->resourceCache['returnReceipts'] ??= new ReturnReceiptsResource($this->runtime),
            'returnResolutions' => $this->resourceCache['returnResolutions'] ??= new ReturnResolutionsResource($this->runtime),
            'returns' => $this->resourceCache['returns'] ??= new ReturnsResource($this->runtime),
            'reviews' => $this->resourceCache['reviews'] ??= new ReviewsResource($this->runtime),
            'riskLists' => $this->resourceCache['riskLists'] ??= new RiskListsResource($this->runtime),
            'riskPreviews' => $this->resourceCache['riskPreviews'] ??= new RiskPreviewsResource($this->runtime),
            'riskRules' => $this->resourceCache['riskRules'] ??= new RiskRulesResource($this->runtime),
            'settings' => $this->resourceCache['settings'] ??= new SettingsResource($this->runtime),
            'shipments' => $this->resourceCache['shipments'] ??= new ShipmentsResource($this->runtime),
            'specification' => $this->resourceCache['specification'] ??= new SpecificationResource($this->runtime),
            'subscriptionDeliveryMigrations' => $this->resourceCache['subscriptionDeliveryMigrations'] ??= new SubscriptionDeliveryMigrationsResource($this->runtime),
            'subscriptionOffers' => $this->resourceCache['subscriptionOffers'] ??= new SubscriptionOffersResource($this->runtime),
            'subscriptionPlans' => $this->resourceCache['subscriptionPlans'] ??= new SubscriptionPlansResource($this->runtime),
            'subscriptionPreviews' => $this->resourceCache['subscriptionPreviews'] ??= new SubscriptionPreviewsResource($this->runtime),
            'subscriptions' => $this->resourceCache['subscriptions'] ??= new SubscriptionsResource($this->runtime),
            'taxConnection' => $this->resourceCache['taxConnection'] ??= new TaxConnectionResource($this->runtime),
            'webhookDeliveries' => $this->resourceCache['webhookDeliveries'] ??= new WebhookDeliveriesResource($this->runtime),
            'webhookEndpoints' => $this->resourceCache['webhookEndpoints'] ??= new WebhookEndpointsResource($this->runtime),
            'webhookEventTypes' => $this->resourceCache['webhookEventTypes'] ??= new WebhookEventTypesResource($this->runtime),
            'webhookEvents' => $this->resourceCache['webhookEvents'] ??= new WebhookEventsResource($this->runtime),
            'workloadIdentities' => $this->resourceCache['workloadIdentities'] ??= new WorkloadIdentitiesResource($this->runtime),
            default => throw SdkError::create('validation', 'Unknown client property ' . $name),
        };
    }
    public function __set(string $name, mixed $value): void { throw SdkError::create('validation', 'Client resource properties are read-only'); }
    public function __isset(string $name): bool { return in_array($name, ['analytics', 'apiKeys', 'balanceTransactions', 'balances', 'bundles', 'categories', 'checkoutSessions', 'creditNotes', 'customDomains', 'customerDeletionRequests', 'customerSessions', 'customerVerifications', 'customers', 'deliveryLocationSets', 'deliveryMethods', 'deliveryPreviews', 'deliveryProfiles', 'deliveryQuotes', 'deliveryRateCallbacks', 'deliveryRevocations', 'deliveryZones', 'demoSessions', 'developer', 'devices', 'discountPreviews', 'disputes', 'emailPreferenceLinks', 'feedbackReports', 'files', 'fraudWarnings', 'fulfillmentEvents', 'fulfillmentNotifications', 'fulfillments', 'giftCardAdjustments', 'giftCardCashOuts', 'giftCardFundingDispositions', 'giftCardLoads', 'giftCardNotifications', 'giftCardRedemptions', 'giftCardTransactions', 'giftCards', 'inventoryAdjustments', 'inventoryAllocationPolicies', 'inventoryCounts', 'inventoryItems', 'inventoryLevels', 'inventoryMovements', 'inventoryReceipts', 'inventoryReservations', 'inventoryTransfers', 'invoicePaymentTerms', 'invoices', 'locations', 'me', 'merchantAccountSessions', 'merchantBillingBalances', 'merchantBillingEntries', 'merchantSubscriptionInvoices', 'merchants', 'modifierGroups', 'modifierSets', 'oauth', 'onboarding', 'orders', 'organizations', 'packages', 'partnerAppInstalls', 'paymentIntents', 'paymentLinks', 'paymentMethodDomains', 'paymentMethods', 'payoutSettings', 'payouts', 'products', 'promotions', 'refunds', 'reportDownloads', 'reports', 'returnDispositions', 'returnInspections', 'returnPolicies', 'returnPreviews', 'returnReasons', 'returnReceipts', 'returnResolutions', 'returns', 'reviews', 'riskLists', 'riskPreviews', 'riskRules', 'settings', 'shipments', 'specification', 'subscriptionDeliveryMigrations', 'subscriptionOffers', 'subscriptionPlans', 'subscriptionPreviews', 'subscriptions', 'taxConnection', 'webhookDeliveries', 'webhookEndpoints', 'webhookEventTypes', 'webhookEvents', 'workloadIdentities'], true); }
    public function close(): void { $this->runtime->close(); }
    /** @param string $rawBody Original request bytes.
     * @param array<string, string|list<string>> $headers Header map, including PSR-7 header arrays.
     * @param string|array<array-key, string> $secrets
     * @param int|null $nowSeconds
     * @return array{known: true, event: WebhookEventBalanceTransactionCreated|WebhookEventBalanceTransactionUpdated|WebhookEventBalanceUpdated|WebhookEventCustomDomainArchived|WebhookEventCustomDomainUpdated|WebhookEventDisputeCreated|WebhookEventDisputeInquiryClosed|WebhookEventDisputeLost|WebhookEventDisputeNeedsResponse|WebhookEventDisputePrevented|WebhookEventDisputeUpdated|WebhookEventDisputeWon|WebhookEventEnvironmentGrantCreated|WebhookEventEnvironmentGrantRevoked|WebhookEventMerchantBillingBalanceUpdated|WebhookEventMerchantBillingInvoiceIssued|WebhookEventMerchantBillingInvoiceUpdated|WebhookEventMerchantReadinessUpdated|WebhookEventMerchantUpdated|WebhookEventPartnerAppInstallCreated|WebhookEventPartnerAppInstallPermissionsUpdated|WebhookEventPartnerAppInstallRevoked|WebhookEventPartnerAppInstallUpdated|WebhookEventPayoutDestinationArchived|WebhookEventPayoutDestinationCreated|WebhookEventPayoutDestinationDisabled|WebhookEventPayoutDestinationUpdated|WebhookEventPayoutSettingsUpdated|WebhookEventPayoutCanceled|WebhookEventPayoutCreated|WebhookEventPayoutFailed|WebhookEventPayoutPaid|WebhookEventPayoutReversed|WebhookEventPayoutUpdated|WebhookEventTaxConnectionUpdated|\stdClass|array}|array{known: false, event: mixed, reason: 'unknown_event'|'unmatched_envelope'} */
    public function verifyWebhook(mixed $rawBody, mixed $headers, mixed $secrets, mixed $nowSeconds = null): array { return $this->runtime->verifyWebhook($rawBody, $headers, $secrets, $nowSeconds); }
    /** @param array<string, mixed> $options @return array<string, mixed> */
    public function verifyWebhookDelivery(mixed $rawBody, mixed $headers, array $options): array { return $this->runtime->verifyWebhookDelivery($rawBody, $headers, $options); }
}
