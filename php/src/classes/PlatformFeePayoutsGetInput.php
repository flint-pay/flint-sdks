<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $platform_fee_payout_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeePayoutsGetInput extends Model {
    /** @param array{'platform_fee_payout_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeePayoutsGetInput')); }
    /** Flint platform fee payout ID. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     * @return string
     * @throws SdkError When platform_fee_payout_id is omitted; use hasPlatformFeePayoutId() or valueOrDefault().
     */
    public function getPlatformFeePayoutId(): string { return $this->get('platform_fee_payout_id'); }
    public function hasPlatformFeePayoutId(): bool { return $this->has('platform_fee_payout_id'); }
}
