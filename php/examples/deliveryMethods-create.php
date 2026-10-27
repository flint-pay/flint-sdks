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
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false || $baseUrl === '') throw new \RuntimeException('Set API_BASE_URL to your sandbox or local mock URL');
$apiKey = getenv('API_KEY');
if ($apiKey === false || $apiKey === '') throw new \RuntimeException('Set API_KEY: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
  apiKey: $apiKey,
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->deliveryMethods->create([
  'configuration' => (object) [
    'minimum_option_lifetime_seconds' => '120',
    'origin' => (object) [
      'location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
      'type' => 'fixed_location',
    ],
    'pricing' => (object) [
      'calculated' => (object) [],
      'type' => 'calculated',
    ],
  ],
  'name' => 'Standard shipping',
  'type' => 'shipment',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->current_delivery_method_revision_id . PHP_EOL;
echo $result->delivery_method_id . PHP_EOL;
$client->close();
