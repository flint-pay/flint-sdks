<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationInput extends Model {
    /** @param array{'status': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationInput')); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
