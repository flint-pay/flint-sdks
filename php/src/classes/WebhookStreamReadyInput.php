<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $cursor
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookStreamReadyInput extends Model {
    /** @param array{'cursor'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookStreamReadyInput')); }
    /** @return string
     * @throws SdkError When cursor is omitted; use hasCursor() or valueOrDefault().
     */
    public function getCursor(): string { return $this->get('cursor'); }
    public function hasCursor(): bool { return $this->has('cursor'); }
}
