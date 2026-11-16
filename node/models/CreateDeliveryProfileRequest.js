import { d234 as c0 } from '../descriptors/data/11.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7423 as c1, d7426 as c2 } from '../descriptors/data/337.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c3 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7437 as c4, d7438 as c5, d7439 as c6, d7440 as c7, d7441 as c8, d7442 as c9, d7443 as c10, d7444 as c11, d7445 as c12, d7446 as c13, d7447 as c14, d7448 as c15, d7449 as c16, d7450 as c17 } from '../descriptors/data/338.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d234 as d234 } from '../descriptors/data/11.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d234;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec745"]:c4(),["SharedCodec746"]:c5(),["SharedCodec747"]:c6(),["SharedCodec748"]:c7(),["SharedCodec749"]:c8(),["SharedCodec750"]:c9(),["SharedCodec751"]:c10(),["SharedCodec752"]:c11(),["SharedCodec753"]:c12(),["SharedCodec756"]:c13(),["SharedCodec757"]:c14(),["SharedCodec758"]:c15(),["SharedCodec759"]:c16(),["SharedCodec760"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
