<?php
declare(strict_types=1);
namespace Flint;
final class Webhooks {
    /** @param string $rawBody Original request bytes.
     * @param array<string, string|list<string>> $headers Header map, including PSR-7 header arrays.
     * @param string|list<string> $secrets
     * @param int|null $nowSeconds
     * @return array{known: true, event: BalanceTransactionCreatedEvent|BalanceTransactionUpdatedEvent|BalanceUpdatedEvent|CustomDomainArchivedEvent|CustomDomainUpdatedEvent|DisputeCreatedEvent|DisputeInquiryClosedEvent|DisputeLostEvent|DisputeNeedsResponseEvent|DisputePreventedEvent|DisputeUpdatedEvent|DisputeWonEvent|EnvironmentGrantCreatedEvent|EnvironmentGrantRevokedEvent|MerchantBillingBalanceUpdatedEvent|MerchantBillingInvoiceIssuedEvent|MerchantBillingInvoiceUpdatedEvent|MerchantReadinessUpdatedEvent|MerchantUpdatedEvent|PartnerAppInstallCreatedEvent|PartnerAppInstallPermissionsUpdatedEvent|PartnerAppInstallRevokedEvent|PartnerAppInstallUpdatedEvent|PayoutDestinationArchivedEvent|PayoutDestinationCreatedEvent|PayoutDestinationDisabledEvent|PayoutDestinationUpdatedEvent|PayoutSettingsUpdatedEvent|PayoutCanceledEvent|PayoutCreatedEvent|PayoutFailedEvent|PayoutPaidEvent|PayoutReversedEvent|PayoutUpdatedEvent|TaxConnectionUpdatedEvent|TestClockAdvancingEvent|TestClockArchivedEvent|TestClockCreatedEvent|TestClockFailedEvent|TestClockReadyEvent|\stdClass|array}|array{known: false, event: mixed, reason: 'unknown_event'|'unmatched_envelope'} */
    public static function verify(mixed $rawBody, mixed $headers, mixed $secrets, mixed $nowSeconds = null): array { return Runtime::verifyWebhookFromPlan(SchemaRegistry::source(), $rawBody, $headers, $secrets, $nowSeconds); }
    /** @param array<string, mixed> $options @return array<string, mixed> */
    public static function verifyDelivery(mixed $rawBody, mixed $headers, array $options): array { return Runtime::verifyWebhookDeliveryFromPlan(SchemaRegistry::source(), $rawBody, $headers, $options); }
}
