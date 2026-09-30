<?php
declare(strict_types=1);
namespace Flint;
final class Cancellation
{
    private bool $cancelled = false;
    public function cancel(): void
    {
        $this->cancelled = true;
    }
    public function isCancelled(): bool
    {
        return $this->cancelled;
    }
}
