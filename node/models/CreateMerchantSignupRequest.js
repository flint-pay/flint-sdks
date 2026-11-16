import { d292 as c0 } from '../descriptors/data/16.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8424 as c1 } from '../descriptors/data/396.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d292 as d292 } from '../descriptors/data/16.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d292;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateMerchantSignupRequest"]:c0(),["MerchantSignupOwnerRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMerchantSignupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
