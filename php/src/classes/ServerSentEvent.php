<?php
declare(strict_types=1);
namespace Flint;
final class ServerSentEvent
{
    public function __construct(
        public readonly string $event,
        public readonly string $id,
        public readonly mixed $data,
        public readonly string $rawData,
        public readonly ?int $retry = null,
    ) {}
    public function __debugInfo(): array
    {
        return ['event' => $this->event];
    }
}
