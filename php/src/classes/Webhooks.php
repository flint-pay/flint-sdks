<?php
declare(strict_types=1);
namespace Flint;
final class Webhooks {
    /** @param string $rawBody Original request bytes.
     * @param array<string, string|list<string>> $headers Header map, including PSR-7 header arrays.
     * @param string|list<string> $secrets
     * @param int|null $nowSeconds
     * @return array{known: true, event: ApiKeyCreatedEvent|ApiKeyRevokedEvent|ApiKeyUpdatedEvent|CustomDomainArchivedEvent|CustomDomainUpdatedEvent|CustomerDeletionRequestCompletedEvent|CustomerDeletionRequestCreatedEvent|CustomerDeletionRequestFailedEvent|CustomerDeletionRequestProcessingEvent|CustomerDeletionRequestRejectedEvent|EnvironmentGrantCreatedEvent|EnvironmentGrantRevokedEvent|EnvironmentGrantUpdatedEvent|MerchantBillingBalanceUpdatedEvent|MerchantBillingInvoiceIssuedEvent|MerchantBillingInvoiceUpdatedEvent|PartnerAppInstallCreatedEvent|PartnerAppInstallPermissionsUpdatedEvent|PartnerAppInstallRevokedEvent|PartnerAppInstallUpdatedEvent|PartnerAppPlatformApprovedEvent|PartnerAppPlatformLimitedEvent|PartnerAppPlatformRejectedEvent|PartnerAppUpdatedEvent|PaymentSplitCanceledEvent|PaymentSplitCreatedEvent|PaymentSplitFailedEvent|PaymentSplitSucceededEvent|PaymentSplitUpdatedEvent|PlatformFeePayoutCreatedEvent|PlatformFeePayoutFailedEvent|PlatformFeePayoutSucceededEvent|PlatformFeeCanceledEvent|PlatformFeeCreatedEvent|PlatformFeeSucceededEvent|PlatformFeeUpdatedEvent|ReportFailedEvent|ReportSucceededEvent|TaxCalculationCallbackActivatedEvent|TaxCalculationCallbackArchivedEvent|TaxCalculationCallbackCreatedEvent|TaxCalculationCallbackDeactivatedEvent|TaxCalculationCallbackUpdatedEvent|TaxConnectionUpdatedEvent|TestClockAdvancingEvent|TestClockArchivedEvent|TestClockCreatedEvent|TestClockFailedEvent|TestClockReadyEvent|\stdClass|array}|array{known: false, event: mixed, reason: 'unknown_event'|'unmatched_envelope'} */
    public static function verify(mixed $rawBody, mixed $headers, mixed $secrets, mixed $nowSeconds = null): array { return Runtime::verifyWebhookFromPlan(SchemaRegistry::source(), $rawBody, $headers, $secrets, $nowSeconds); }
    /** @param array<string, mixed> $options @return array<string, mixed> */
    public static function verifyDelivery(mixed $rawBody, mixed $headers, array $options): array { return Runtime::verifyWebhookDeliveryFromPlan(SchemaRegistry::source(), $rawBody, $headers, $options); }
}
