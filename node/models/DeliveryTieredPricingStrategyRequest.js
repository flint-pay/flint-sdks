import { d7289 as c0, d7293 as c1 } from '../descriptors/data/330.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c2 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7338 as c3, d7339 as c4, d7340 as c5 } from '../descriptors/data/332.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7293 as d7293 } from '../descriptors/data/330.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPricingTierBandRequest"]:c0(),["DeliveryTieredPricingStrategyRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec824"]:c3(),["SharedCodec825"]:c4(),["SharedCodec826"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryTieredPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
