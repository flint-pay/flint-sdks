import { d51 as c0 } from '../descriptors/data/2.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8108 as c1 } from '../descriptors/data/379.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8155 as c2 } from '../descriptors/data/384.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8328 as c3, d8330 as c4, d8332 as c5, d8349 as c6, d8338 as c11, d8340 as c12, d8341 as c13, d8342 as c14, d8347 as c15, d8350 as c16 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8180 as c7, d8181 as c8, d8182 as c9, d8183 as c10 } from '../descriptors/data/387.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d51 as d51 } from '../descriptors/data/2.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d51;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestEligibility"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec130"]:c7(),["SharedCodec131"]:c8(),["SharedCodec132"]:c9(),["SharedCodec133"]:c10(),["SharedCodec2080"]:c11(),["SharedCodec2082"]:c12(),["SharedCodec2083"]:c13(),["SharedCodec2084"]:c14(),["SharedCodec91"]:c15(),["SharedCodec94"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
