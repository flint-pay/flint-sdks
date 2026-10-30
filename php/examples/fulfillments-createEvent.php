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

$result = $client->fulfillments->createEvent('ful_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'custom_details' => (object) [
    'facility' => 'east',
  ],
  'event_type' => 'custom',
  'external_event_id' => 'evt_7f3df2',
  'external_status' => 'work_started',
  'external_system' => 'shippo',
  'message' => 'The fulfillment partner started work.',
  'occurred_at' => '2026-05-13T16:05:00Z',
  'package_id' => 'pkg_01KEZF7C008VJBE6BT0CWZT296',
  'shipment_id' => 'shp_01KEZF7C006DZPA7FGH42HTBY8',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->fulfillment_event_id . PHP_EOL;
echo $result->fulfillment_id . PHP_EOL;
$client->close();
