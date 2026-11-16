import { d7274 as c0 } from '../descriptors/data/329.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c1 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7274 as d7274 } from '../descriptors/data/329.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7274;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCallbackPricingStrategyRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCallbackPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
