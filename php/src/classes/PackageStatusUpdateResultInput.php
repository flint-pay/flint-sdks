<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentEventInput|array<array-key, mixed>|\stdClass $event
 * @property-read list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass> $fulfillment_notifications
 * @property-read PackageInput|array<array-key, mixed>|\stdClass $package
 * @property-read PackageStatusUpdateInput|array<array-key, mixed>|\stdClass $package_status_update
 * @property-read bool $unchanged
 * Presence-aware input; omitted fields throw when accessed. */
final class PackageStatusUpdateResultInput extends Model {
    /** @param array{'event'?: FulfillmentEventInput|array<array-key, mixed>|\stdClass, 'fulfillment_notifications'?: list<FulfillmentNotificationInput|array<array-key, mixed>|\stdClass>, 'package': PackageInput|array<array-key, mixed>|\stdClass, 'package_status_update'?: PackageStatusUpdateInput|array<array-key, mixed>|\stdClass, 'unchanged'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageStatusUpdateResultInput')); }
    /** @return FulfillmentEventInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When event is omitted; use hasEvent() or valueOrDefault().
     */
    public function getEvent(): mixed { return $this->get('event'); }
    public function hasEvent(): bool { return $this->has('event'); }
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
    /** @return PackageStatusUpdateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When package_status_update is omitted; use hasPackageStatusUpdate() or valueOrDefault().
     */
    public function getPackageStatusUpdate(): mixed { return $this->get('package_status_update'); }
    public function hasPackageStatusUpdate(): bool { return $this->has('package_status_update'); }
    /** @return bool
     * @throws SdkError When unchanged is omitted; use hasUnchanged() or valueOrDefault().
     */
    public function getUnchanged(): bool { return $this->get('unchanged'); }
    public function hasUnchanged(): bool { return $this->has('unchanged'); }
}
