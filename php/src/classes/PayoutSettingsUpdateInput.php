<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'delay_days_override'?: int|null, 'expected_version'?: string, 'interval'?: string, 'minimum_balance_by_currency'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutSettingsUpdateInput extends Model {
    /** @param array{'Idempotency-Key'?: string, 'body': array{'delay_days_override'?: int|null, 'expected_version'?: string, 'interval'?: string, 'minimum_balance_by_currency'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsUpdateInput')); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Update payout settings.
     * @return array{'delay_days_override'?: int|null, 'expected_version'?: string, 'interval'?: string, 'minimum_balance_by_currency'?: array<array-key, array{'amount': string, 'currency': string}|object|null>|\stdClass, 'monthly_payout_days'?: list<int>, 'statement_descriptor'?: string|null, 'weekly_payout_days'?: list<string>, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
