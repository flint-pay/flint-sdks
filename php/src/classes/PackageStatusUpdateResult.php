<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentEvent $event
 * @property-read list<FulfillmentNotification> $fulfillment_notifications
 * @property-read Package $package
 * @property-read PackageStatusUpdate $package_status_update
 * @property-read bool $unchanged
 * Presence-aware response; omitted fields throw when accessed. */
final class PackageStatusUpdateResult extends Model {
    /** @param array{'event'?: mixed, 'fulfillment_notifications'?: list<mixed>, 'package': mixed, 'package_status_update'?: mixed, 'unchanged'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageStatusUpdateResult')); }
    /** @return FulfillmentEvent
     * @throws SdkError When event is omitted; use hasEvent() or valueOrDefault().
     */
    public function getEvent(): FulfillmentEvent { return $this->get('event'); }
    public function hasEvent(): bool { return $this->has('event'); }
    /** @return list<FulfillmentNotification>
     * @throws SdkError When fulfillment_notifications is omitted; use hasFulfillmentNotifications() or valueOrDefault().
     */
    public function getFulfillmentNotifications(): array { return $this->get('fulfillment_notifications'); }
    public function hasFulfillmentNotifications(): bool { return $this->has('fulfillment_notifications'); }
    /** @return Package
     * @throws SdkError When package is omitted; use hasPackage() or valueOrDefault().
     */
    public function getPackage(): Package { return $this->get('package'); }
    public function hasPackage(): bool { return $this->has('package'); }
    /** @return PackageStatusUpdate
     * @throws SdkError When package_status_update is omitted; use hasPackageStatusUpdate() or valueOrDefault().
     */
    public function getPackageStatusUpdate(): PackageStatusUpdate { return $this->get('package_status_update'); }
    public function hasPackageStatusUpdate(): bool { return $this->has('package_status_update'); }
    /** @return bool
     * @throws SdkError When unchanged is omitted; use hasUnchanged() or valueOrDefault().
     */
    public function getUnchanged(): bool { return $this->get('unchanged'); }
    public function hasUnchanged(): bool { return $this->has('unchanged'); }
}
