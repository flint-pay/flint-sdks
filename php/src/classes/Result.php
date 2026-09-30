<?php
declare(strict_types=1);
namespace Flint;
/** @template T */
final class Result
{
    /** @param T $data
     * @param array{status: int, requestId?: string|null, attempts: int, durationMs: float, ...} $meta
     */
    public function __construct(
        public readonly mixed $data,
        public readonly array $meta,
        public readonly string $raw,
    ) {}
    public function __debugInfo(): array
    {
        return [
            'meta' => array_intersect_key(
                $this->meta,
                array_flip(['status', 'requestId', 'attempts', 'durationMs']),
            ),
            'data' => '[Use data explicitly]',
        ];
    }
}
