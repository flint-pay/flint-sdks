<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class MeGetEmailPreferencesInput extends Model {
    /** @param array{'X-Request-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetEmailPreferencesInput')); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
}
