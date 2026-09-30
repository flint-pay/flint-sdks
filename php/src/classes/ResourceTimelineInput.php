<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ResourceTimelineEntryInput|array<array-key, mixed>|\stdClass> $entries
 * @property-read string $environment_id
 * @property-read string $resource_id
 * @property-read string $resource_type
 * @property-read bool $test
 * Presence-aware input; omitted fields throw when accessed. */
final class ResourceTimelineInput extends Model {
    /** @param array{'entries': list<ResourceTimelineEntryInput|array<array-key, mixed>|\stdClass>, 'environment_id'?: string, 'resource_id': string, 'resource_type': string, 'test': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResourceTimelineInput')); }
    /** @return list<ResourceTimelineEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When entries is omitted; use hasEntries() or valueOrDefault().
     */
    public function getEntries(): array { return $this->get('entries'); }
    public function hasEntries(): bool { return $this->has('entries'); }
    /** @return string
     * @throws SdkError When environment_id is omitted; use hasEnvironmentId() or valueOrDefault().
     */
    public function getEnvironmentId(): string { return $this->get('environment_id'); }
    public function hasEnvironmentId(): bool { return $this->has('environment_id'); }
    /** @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** @return string
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
}
