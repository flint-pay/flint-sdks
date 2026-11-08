<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $environment
 * @property-read string $id
 * @property-read string $merchant_id
 * @property-read string $name
 * @property-read string $sandbox_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ContextSummaryInput extends Model {
    /** @param array{'environment': string, 'id': string, 'merchant_id': string, 'name': string, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ContextSummaryInput')); }
    /** Value enum: "sandbox", "live".
     * @return string
     * @throws SdkError When environment is omitted; use hasEnvironment() or valueOrDefault().
     */
    public function getEnvironment(): string { return $this->get('environment'); }
    public function hasEnvironment(): bool { return $this->has('environment'); }
    /** id
     * @return string
     * @throws SdkError When id is omitted; use hasId() or valueOrDefault().
     */
    public function getId(): string { return $this->get('id'); }
    public function hasId(): bool { return $this->has('id'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** sandbox_id
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
