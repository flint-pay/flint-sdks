<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_delivery_migration_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationsGetInput extends Model {
    /** @param array{'subscription_delivery_migration_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_delivery_migration_id is omitted; use hasSubscriptionDeliveryMigrationId() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMigrationId(): string { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
}
