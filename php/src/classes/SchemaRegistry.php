<?php
declare(strict_types=1);
namespace Flint;
final class SchemaRegistry {
      private static ?array $contract = null;
      private static ?Internal\DescriptorSource $source = null;
      public static function source(): Internal\DescriptorSource { return self::$source ??= new Internal\DescriptorSource(dirname(__DIR__) . '/descriptors', true); }
      public static function contract(): array { return self::$contract ??= self::source()->contract(); }
      public static function codecs(): array { return self::contract()['definitions'] ?? []; }
    }
