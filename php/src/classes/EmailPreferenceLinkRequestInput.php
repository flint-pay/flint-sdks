<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $token
 * Presence-aware input; omitted fields throw when accessed. */
final class EmailPreferenceLinkRequestInput extends Model {
    /** @param array{'token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EmailPreferenceLinkRequestInput')); }
    /** @return string
     * @throws SdkError When token is omitted; use hasToken() or valueOrDefault().
     */
    public function getToken(): string { return $this->get('token'); }
    public function hasToken(): bool { return $this->has('token'); }
}
