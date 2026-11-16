import { d7410 as c0, d7411 as c1 } from '../descriptors/data/336.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c2 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c3 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9325 as c4 } from '../descriptors/data/451.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9240 as c5, d9242 as c7, d9243 as c8, d9244 as c9 } from '../descriptors/data/445.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7526 as c6 } from '../descriptors/data/343.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9245 as c10, d9246 as c11, d9247 as c12, d9248 as c13, d9249 as c14, d9250 as c15 } from '../descriptors/data/446.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9313 as c16 } from '../descriptors/data/450.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9325 as d9325 } from '../descriptors/data/451.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ReturnProcessResolutionRequest"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["SharedCodec155"]:c6(),["SharedCodec2151"]:c7(),["SharedCodec2152"]:c8(),["SharedCodec2153"]:c9(),["SharedCodec2154"]:c10(),["SharedCodec2155"]:c11(),["SharedCodec2156"]:c12(),["SharedCodec2157"]:c13(),["SharedCodec2158"]:c14(),["SharedCodec488"]:c15(),["SharedCodec494"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
