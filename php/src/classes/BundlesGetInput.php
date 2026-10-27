<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesGetInput extends Model {
    /** @param array{'bundle_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "modifier_set". Shape $[] (Value): string.  Value enum: "modifier_set".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
