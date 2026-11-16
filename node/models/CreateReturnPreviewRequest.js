import { d8328 as c0, d8330 as c6, d8332 as c7, d8338 as c12, d8340 as c13, d8341 as c14 } from '../descriptors/data/391.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d346 as c1 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9224 as c2 } from '../descriptors/data/444.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7410 as c3, d7411 as c4 } from '../descriptors/data/336.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c5 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9240 as c8, d9236 as c9, d9242 as c16, d9243 as c17, d9244 as c18, d9232 as c24, d9233 as c25, d9234 as c27, d9237 as c28, d9235 as c29, d9238 as c30, d9239 as c31 } from '../descriptors/data/445.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8349 as c10, d8342 as c15, d8347 as c32, d8348 as c33, d8350 as c34 } from '../descriptors/data/392.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7526 as c11 } from '../descriptors/data/343.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9245 as c19, d9246 as c20, d9247 as c21, d9248 as c22, d9249 as c23, d9250 as c26 } from '../descriptors/data/446.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d346 as d346 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec155"]:c11(),["SharedCodec2080"]:c12(),["SharedCodec2082"]:c13(),["SharedCodec2083"]:c14(),["SharedCodec2084"]:c15(),["SharedCodec2151"]:c16(),["SharedCodec2152"]:c17(),["SharedCodec2153"]:c18(),["SharedCodec2154"]:c19(),["SharedCodec2155"]:c20(),["SharedCodec2156"]:c21(),["SharedCodec2157"]:c22(),["SharedCodec2158"]:c23(),["SharedCodec486"]:c24(),["SharedCodec487"]:c25(),["SharedCodec488"]:c26(),["SharedCodec489"]:c27(),["SharedCodec490"]:c28(),["SharedCodec491"]:c29(),["SharedCodec492"]:c30(),["SharedCodec493"]:c31(),["SharedCodec91"]:c32(),["SharedCodec93"]:c33(),["SharedCodec94"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
