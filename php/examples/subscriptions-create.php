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

$result = $client->subscriptions->create([
  'billing_anchor_day' => 15,
  'billing_schedule' => (object) [
    'owner' => 'flint',
  ],
  'billing_start' => (object) [
    'type' => 'immediate',
  ],
  'customer_id' => 'cus_01KEZF7C003ACYXT6Q5EQZ78EE',
  'metadata' => (object) [
    'source' => 'api',
  ],
  'payment_method_id' => 'pm_01KEZF7C00WX8CKEVFDMRMYMBM',
  'terms' => (object) [
    'subscription_plan_id' => 'plan_01KEZF7C00S177Q3KK6BKXGXV7',
    'type' => 'subscription_plan',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->customer_id . PHP_EOL;
echo $result->payment_method_id . PHP_EOL;
$client->close();
