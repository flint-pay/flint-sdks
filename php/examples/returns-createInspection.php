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

$result = $client->returns->createInspection('ret_01KEZF7C00PG93650ZKVQNGF7X', [
  'inspected_at' => '2026-09-08T14:15:00Z',
  'inspection_location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
  'line_items' => [
    (object) [
      'acceptance_status' => 'accepted',
      'condition' => 'unopened',
      'finding_codes' => [
        'matches_expected_item',
      ],
      'quantity' => 1,
      'return_receipt_line_item_id' => 'retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE',
    ],
  ],
  'return_receipt_id' => 'retrc_01KEZF7C008V637A0ZWN32RQ7A',
  'source_system' => (object) [
    'source_system_type' => 'manual',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->inspection_location_id . PHP_EOL;
echo $result->return_id . PHP_EOL;
$client->close();
