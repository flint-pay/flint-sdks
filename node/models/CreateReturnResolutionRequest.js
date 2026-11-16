import { d357 as c0 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7410 as c1, d7411 as c2 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c3 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c4 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9240 as c5, d9236 as c6, d9242 as c9, d9243 as c10, d9244 as c11, d9237 as c18, d9238 as c19, d9239 as c20 } from '../descriptors/data/448.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8349 as c7, d8350 as c24 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7526 as c8 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9245 as c12, d9246 as c13, d9247 as c14, d9248 as c15, d9249 as c16, d9250 as c17 } from '../descriptors/data/449.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9313 as c21 } from '../descriptors/data/453.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9305 as c22, d9306 as c23 } from '../descriptors/data/452.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d357 as d357 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d357;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["ReturnResolutionAdjustmentRequest"]:c6(),["ReturnResolutionLineItemRequest"]:c7(),["SharedCodec155"]:c8(),["SharedCodec2151"]:c9(),["SharedCodec2152"]:c10(),["SharedCodec2153"]:c11(),["SharedCodec2154"]:c12(),["SharedCodec2155"]:c13(),["SharedCodec2156"]:c14(),["SharedCodec2157"]:c15(),["SharedCodec2158"]:c16(),["SharedCodec488"]:c17(),["SharedCodec490"]:c18(),["SharedCodec492"]:c19(),["SharedCodec493"]:c20(),["SharedCodec494"]:c21(),["SharedCodec495"]:c22(),["SharedCodec496"]:c23(),["SharedCodec94"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
