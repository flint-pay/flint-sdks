<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $environment
 * @property-read string $id
 * @property-read string $merchant_id
 * @property-read string $name
 * @property-read ?string $sandbox_id
 * Presence-aware response; omitted optional fields return null. */
final class ContextSummary extends Model {
    /** @param array{'environment': string, 'id': string, 'merchant_id': string, 'name': string, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ContextSummary')); }
    /** Value enum: "sandbox", "live".
     * @return string
     */
    public function getEnvironment(): string { return $this->get('environment'); }
    public function hasEnvironment(): bool { return $this->has('environment'); }
    /** id
     * @return string
     */
    public function getId(): string { return $this->get('id'); }
    public function hasId(): bool { return $this->has('id'); }
    /** merchant_id
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** sandbox_id
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
