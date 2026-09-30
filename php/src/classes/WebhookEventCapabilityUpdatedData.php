<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capability
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventCapabilityUpdatedData extends Model {
    /** @param array{'capability': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventCapabilityUpdatedData')); }
    /** @return string
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
}
