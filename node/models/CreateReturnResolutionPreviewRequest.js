import { d9224 as c0 } from '../descriptors/data/444.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7410 as c1, d7411 as c2 } from '../descriptors/data/336.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c3 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9240 as c4, d9236 as c5, d9242 as c8, d9243 as c9, d9244 as c10, d9234 as c17, d9237 as c18, d9235 as c19, d9238 as c20, d9239 as c21 } from '../descriptors/data/445.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8349 as c6, d8350 as c22 } from '../descriptors/data/392.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7526 as c7 } from '../descriptors/data/343.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9245 as c11, d9246 as c12, d9247 as c13, d9248 as c14, d9249 as c15, d9250 as c16 } from '../descriptors/data/446.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9224 as d9224 } from '../descriptors/data/444.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec155"]:c7(),["SharedCodec2151"]:c8(),["SharedCodec2152"]:c9(),["SharedCodec2153"]:c10(),["SharedCodec2154"]:c11(),["SharedCodec2155"]:c12(),["SharedCodec2156"]:c13(),["SharedCodec2157"]:c14(),["SharedCodec2158"]:c15(),["SharedCodec488"]:c16(),["SharedCodec489"]:c17(),["SharedCodec490"]:c18(),["SharedCodec491"]:c19(),["SharedCodec492"]:c20(),["SharedCodec493"]:c21(),["SharedCodec94"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
