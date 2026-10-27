<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_delivery_migration_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationsListFailuresInput extends Model {
    /** @param array{'subscription_delivery_migration_id': string, 'page_size'?: int, 'page_token'?: string, 'reason'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationsListFailuresInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_delivery_migration_id is omitted; use hasSubscriptionDeliveryMigrationId() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMigrationId(): string { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "method_not_offered", "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable". Shape $[] (Value): string.  Value enum: "method_not_offered", "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable".
     * @return list<string>
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): array { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
