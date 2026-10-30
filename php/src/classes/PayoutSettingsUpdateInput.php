<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'delay_days_override'?: int|null, 'expected_version'?: int, 'interval'?: string, 'minimum_balance_by_currency'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutSettingsUpdateInput extends Model {
    /** @param array{'body': array{'delay_days_override'?: int|null, 'expected_version'?: int, 'interval'?: string, 'minimum_balance_by_currency'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdateInput')); }
    /** The request body for: Update payout settings.
     * @return array{'delay_days_override'?: int|null, 'expected_version'?: int, 'interval'?: string, 'minimum_balance_by_currency'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
