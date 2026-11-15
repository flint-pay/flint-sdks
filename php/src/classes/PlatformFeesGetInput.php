<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $platform_fee_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeesGetInput extends Model {
    /** @param array{'platform_fee_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeesGetInput')); }
    /** Flint platform fee ID. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     * @return string
     * @throws SdkError When platform_fee_id is omitted; use hasPlatformFeeId() or valueOrDefault().
     */
    public function getPlatformFeeId(): string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
}
