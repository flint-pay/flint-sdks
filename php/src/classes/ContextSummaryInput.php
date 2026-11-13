<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $environment
 * @property-read string $id
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $sandbox_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ContextSummaryInput extends Model {
    /** @param array{'environment': string, 'id': string, 'merchant_id': string, 'mode': string, 'name': string, 'sandbox_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ContextSummaryInput')); }
    /** Deprecated: use mode. sandbox corresponds to test, and live corresponds to live. Value enum: "sandbox", "live".
     * @return string
     * @throws SdkError When environment is omitted; use hasEnvironment() or valueOrDefault().
     */
    public function getEnvironment(): string { return $this->get('environment'); }
    public function hasEnvironment(): bool { return $this->has('environment'); }
    /** ID of the context. Name it as `context_id` when you refresh a token.
     * @return string
     * @throws SdkError When id is omitted; use hasId() or valueOrDefault().
     */
    public function getId(): string { return $this->get('id'); }
    public function hasId(): bool { return $this->has('id'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Whether this context uses test or live data. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Name of the context.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
