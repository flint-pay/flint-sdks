<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $custom_domain_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomDomainsGetInput extends Model {
    /** @param array{'custom_domain_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomDomainsGetInput')); }
    /** Flint custom domain ID. Example: "cdom_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When custom_domain_id is omitted; use hasCustomDomainId() or valueOrDefault().
     */
    public function getCustomDomainId(): string { return $this->get('custom_domain_id'); }
    public function hasCustomDomainId(): bool { return $this->has('custom_domain_id'); }
}
