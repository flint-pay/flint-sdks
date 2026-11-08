<?php
declare(strict_types=1);
$autoload = __DIR__;
while (!is_file($autoload . '/vendor/autoload.php') && !is_file($autoload . '/autoload.php')) {
    $parent = dirname($autoload);
    if ($parent === $autoload) throw new \RuntimeException('Run composer install in the application before running this example.');
    $autoload = $parent;
}
require_once is_file($autoload . '/vendor/autoload.php') ? $autoload . '/vendor/autoload.php' : $autoload . '/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('FLINT_BASE_URL') ?: null;
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->returns->createReceipt('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'line_items' => [
    (object) [
      'quantity' => 1,
      'return_line_item_id' => 'retli_01KEZF7C001NHF6JPD83VD0MRK',
      'type' => 'matched',
    ],
  ],
  'received_at' => '2026-09-08T14:00:00Z',
  'receiving_location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  'source_system' => (object) [
    'source_system_type' => 'manual',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->receiving_location_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
