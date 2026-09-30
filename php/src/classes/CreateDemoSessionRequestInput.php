<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $template
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDemoSessionRequestInput extends Model {
    /** @param array{'template'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDemoSessionRequestInput')); }
    /** @return string
     * @throws SdkError When template is omitted; use hasTemplate() or valueOrDefault().
     */
    public function getTemplate(): string { return $this->get('template'); }
    public function hasTemplate(): bool { return $this->has('template'); }
}
