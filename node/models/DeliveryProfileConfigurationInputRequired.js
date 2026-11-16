import { d533 as c0 } from '../descriptors/data/31.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7426 as c1 } from '../descriptors/data/337.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7437 as c2, d7438 as c3, d7441 as c4, d7442 as c5, d7443 as c6, d7446 as c7, d7447 as c8, d7448 as c9, d7449 as c10, d7450 as c11 } from '../descriptors/data/338.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d533 as d533 } from '../descriptors/data/31.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d533;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec745"]:c2(),["SharedCodec746"]:c3(),["SharedCodec749"]:c4(),["SharedCodec750"]:c5(),["SharedCodec751"]:c6(),["SharedCodec756"]:c7(),["SharedCodec757"]:c8(),["SharedCodec758"]:c9(),["SharedCodec759"]:c10(),["SharedCodec760"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
