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

$result = $client->readers->create([
  'device_id' => 'dev_01KEZF7C0096ZG1YZWTWT30ZXN',
  'location_id' => 'loc_01KEZF7C00CMHRRYA3MV996JB2',
  'name' => 'Front counter',
  'registration_code' => 'puppy-hamster-banana',
  'type' => 'smart_reader',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo $result->location_id . PHP_EOL;
echo $result->reader_id . PHP_EOL;
$client->close();
