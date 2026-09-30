<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location_id
 * @property-read string $origin_policy_type
 * Presence-aware input; omitted fields throw when accessed. */
final class LineItemFulfillmentOriginRequestInput extends Model {
    /** @param array{'location_id'?: string, 'origin_policy_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemFulfillmentOriginRequestInput')); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When origin_policy_type is omitted; use hasOriginPolicyType() or valueOrDefault().
     */
    public function getOriginPolicyType(): string { return $this->get('origin_policy_type'); }
    public function hasOriginPolicyType(): bool { return $this->has('origin_policy_type'); }
}
