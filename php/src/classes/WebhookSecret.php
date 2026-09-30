<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $secret
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookSecret extends Model {
    /** @param array{'secret': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookSecret')); }
    /** @return string
     * @throws SdkError When secret is omitted; use hasSecret() or valueOrDefault().
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
}
