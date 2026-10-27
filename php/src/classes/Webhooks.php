<?php
declare(strict_types=1);
namespace Flint;
final class Webhooks {
    /** @param string $rawBody Original request bytes.
     * @param array<string, string|list<string>> $headers Header map, including PSR-7 header arrays.
     * @param string|list<string> $secrets
     * @param int|null $nowSeconds
     * @return array{known: true, event: WebhookEventBalanceTransactionCreated|WebhookEventBalanceTransactionUpdated|WebhookEventBalanceUpdated|WebhookEventCustomDomainArchived|WebhookEventCustomDomainUpdated|WebhookEventDisputeCreated|WebhookEventDisputeInquiryClosed|WebhookEventDisputeLost|WebhookEventDisputeNeedsResponse|WebhookEventDisputePrevented|WebhookEventDisputeUpdated|WebhookEventDisputeWon|WebhookEventEnvironmentGrantCreated|WebhookEventEnvironmentGrantRevoked|WebhookEventMerchantBillingBalanceUpdated|WebhookEventMerchantBillingInvoiceIssued|WebhookEventMerchantBillingInvoiceUpdated|WebhookEventMerchantReadinessUpdated|WebhookEventMerchantUpdated|WebhookEventPartnerAppInstallCreated|WebhookEventPartnerAppInstallPermissionsUpdated|WebhookEventPartnerAppInstallRevoked|WebhookEventPartnerAppInstallUpdated|WebhookEventPayoutDestinationArchived|WebhookEventPayoutDestinationCreated|WebhookEventPayoutDestinationDisabled|WebhookEventPayoutDestinationUpdated|WebhookEventPayoutSettingsUpdated|WebhookEventPayoutCanceled|WebhookEventPayoutCreated|WebhookEventPayoutFailed|WebhookEventPayoutPaid|WebhookEventPayoutReversed|WebhookEventPayoutUpdated|\stdClass|array}|array{known: false, event: mixed, reason: 'unknown_event'|'unmatched_envelope'} */
    public static function verify(mixed $rawBody, mixed $headers, mixed $secrets, mixed $nowSeconds = null): array { return Runtime::verifyWebhookFromPlan(SchemaRegistry::source(), $rawBody, $headers, $secrets, $nowSeconds); }
}
