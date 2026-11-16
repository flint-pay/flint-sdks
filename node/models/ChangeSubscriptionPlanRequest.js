import { d154 as c0 } from '../descriptors/data/7.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6953 as c1, d6954 as c2 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6965 as c3 } from '../descriptors/data/313.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d154 as d154 } from '../descriptors/data/7.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeSubscriptionPlanRequest"]:c0(),["SharedCodec188"]:c1(),["SharedCodec189"]:c2(),["SubscriptionPlanChangeLineItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
