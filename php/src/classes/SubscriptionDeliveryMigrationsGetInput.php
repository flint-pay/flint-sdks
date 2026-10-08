<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_delivery_migration_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationsGetInput extends Model {
    /** @param array{'subscription_delivery_migration_id': string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationsGetInput')); }
    /** @return string
     * @throws SdkError When subscription_delivery_migration_id is omitted; use hasSubscriptionDeliveryMigrationId() or valueOrDefault().
     */
    public function getSubscriptionDeliveryMigrationId(): string { return $this->get('subscription_delivery_migration_id'); }
    public function hasSubscriptionDeliveryMigrationId(): bool { return $this->has('subscription_delivery_migration_id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
