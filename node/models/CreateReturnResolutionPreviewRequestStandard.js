import { d356 as c0 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7410 as c1, d7411 as c2 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9240 as c4, d9236 as c5, d9242 as c8, d9243 as c9, d9244 as c10, d9237 as c17 } from '../descriptors/data/448.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8349 as c6, d8350 as c18 } from '../descriptors/data/395.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7526 as c7 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9245 as c11, d9246 as c12, d9247 as c13, d9248 as c14, d9249 as c15, d9250 as c16 } from '../descriptors/data/449.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d356 as d356 } from '../descriptors/data/22.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec155"]:c7(),["SharedCodec2151"]:c8(),["SharedCodec2152"]:c9(),["SharedCodec2153"]:c10(),["SharedCodec2154"]:c11(),["SharedCodec2155"]:c12(),["SharedCodec2156"]:c13(),["SharedCodec2157"]:c14(),["SharedCodec2158"]:c15(),["SharedCodec488"]:c16(),["SharedCodec490"]:c17(),["SharedCodec94"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
