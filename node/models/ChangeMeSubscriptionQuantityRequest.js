import { d153 as c0 } from '../descriptors/data/7.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8375 as c1 } from '../descriptors/data/393.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d153 as d153 } from '../descriptors/data/7.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionQuantityRequest"]:c0(),["SubscriptionQuantityChangeLineItemRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionQuantityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
