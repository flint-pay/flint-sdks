import { d532 as c0 } from '../descriptors/data/31.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7426 as c1 } from '../descriptors/data/337.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7441 as c2, d7446 as c3, d7447 as c4, d7448 as c5, d7449 as c6, d7450 as c7 } from '../descriptors/data/338.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d532 as d532 } from '../descriptors/data/31.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d532;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputQuote"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec749"]:c2(),["SharedCodec756"]:c3(),["SharedCodec757"]:c4(),["SharedCodec758"]:c5(),["SharedCodec759"]:c6(),["SharedCodec760"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
