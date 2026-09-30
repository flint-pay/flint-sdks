<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentEventInput|array<array-key, mixed>|\stdClass $fulfillment_event
 * @property-read list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass> $fulfillment_notifications
 * @property-read PackageInput|array<array-key, mixed>|\stdClass $package
 * @property-read bool $replayed
 * Presence-aware input; omitted fields throw when accessed. */
final class CreatePackageResultInput extends Model {
    /** @param array{'fulfillment_event'?: FulfillmentEventInput|array<array-key, mixed>|\stdClass, 'fulfillment_notifications'?: list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass>, 'package': PackageInput|array<array-key, mixed>|\stdClass, 'replayed'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreatePackageResultInput')); }
    /** @return FulfillmentEventInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When fulfillment_event is omitted; use hasFulfillmentEvent() or valueOrDefault().
     */
    public function getFulfillmentEvent(): mixed { return $this->get('fulfillment_event'); }
    public function hasFulfillmentEvent(): bool { return $this->has('fulfillment_event'); }
    /** @return list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When fulfillment_notifications is omitted; use hasFulfillmentNotifications() or valueOrDefault().
     */
    public function getFulfillmentNotifications(): array { return $this->get('fulfillment_notifications'); }
    public function hasFulfillmentNotifications(): bool { return $this->has('fulfillment_notifications'); }
    /** @return PackageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When package is omitted; use hasPackage() or valueOrDefault().
     */
    public function getPackage(): mixed { return $this->get('package'); }
    public function hasPackage(): bool { return $this->has('package'); }
    /** @return bool
     * @throws SdkError When replayed is omitted; use hasReplayed() or valueOrDefault().
     */
    public function getReplayed(): bool { return $this->get('replayed'); }
    public function hasReplayed(): bool { return $this->has('replayed'); }
}
