import { d8328 as c0, d8330 as c6, d8332 as c7, d8349 as c10, d8338 as c12, d8340 as c13, d8341 as c14, d8342 as c15, d8347 as c30, d8350 as c31 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d347 as c1 } from '../descriptors/data/21.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9224 as c2 } from '../descriptors/data/447.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7410 as c3, d7411 as c4 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c5 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9240 as c8, d9236 as c9, d9242 as c16, d9243 as c17, d9244 as c18, d9234 as c25, d9237 as c26, d9235 as c27, d9238 as c28, d9239 as c29 } from '../descriptors/data/448.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7526 as c11 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9245 as c19, d9246 as c20, d9247 as c21, d9248 as c22, d9249 as c23, d9250 as c24 } from '../descriptors/data/449.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d347 as d347 } from '../descriptors/data/21.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d347;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec155"]:c11(),["SharedCodec2080"]:c12(),["SharedCodec2082"]:c13(),["SharedCodec2083"]:c14(),["SharedCodec2084"]:c15(),["SharedCodec2151"]:c16(),["SharedCodec2152"]:c17(),["SharedCodec2153"]:c18(),["SharedCodec2154"]:c19(),["SharedCodec2155"]:c20(),["SharedCodec2156"]:c21(),["SharedCodec2157"]:c22(),["SharedCodec2158"]:c23(),["SharedCodec488"]:c24(),["SharedCodec489"]:c25(),["SharedCodec490"]:c26(),["SharedCodec491"]:c27(),["SharedCodec492"]:c28(),["SharedCodec493"]:c29(),["SharedCodec91"]:c30(),["SharedCodec94"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
