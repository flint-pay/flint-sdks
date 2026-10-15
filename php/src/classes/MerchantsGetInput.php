<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantsGetInput extends Model {
    /** @param array{'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantsGetInput')); }
    /** @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
