<?php
declare(strict_types=1);
namespace Flint;
final class Credential
{
    public function __construct(
        #[\SensitiveParameter] public readonly string $value,
        public readonly ?\DateTimeInterface $expiresAt = null,
    ) {}
    public function __debugInfo(): array
    {
        return ['value' => '[REDACTED]', 'expiresAt' => $this->expiresAt];
    }
}
