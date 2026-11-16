import { d7410 as c0, d7411 as c1 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c2 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9314 as c4, d9313 as c22 } from '../descriptors/data/453.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9321 as c5, d9322 as c6, d9323 as c7, d9325 as c8 } from '../descriptors/data/454.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9240 as c9, d9242 as c13, d9243 as c14, d9244 as c15 } from '../descriptors/data/448.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7526 as c10 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9330 as c11, d9331 as c12 } from '../descriptors/data/455.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9245 as c16, d9246 as c17, d9247 as c18, d9248 as c19, d9249 as c20, d9250 as c21 } from '../descriptors/data/449.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9314 as d9314 } from '../descriptors/data/453.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ReturnProcessDecision"]:c5(),["ReturnProcessDispositionRequest"]:c6(),["ReturnProcessInspectionRequest"]:c7(),["ReturnProcessResolutionRequest"]:c8(),["ReturnReplacementLineItemRequest"]:c9(),["SharedCodec155"]:c10(),["SharedCodec2106"]:c11(),["SharedCodec2107"]:c12(),["SharedCodec2151"]:c13(),["SharedCodec2152"]:c14(),["SharedCodec2153"]:c15(),["SharedCodec2154"]:c16(),["SharedCodec2155"]:c17(),["SharedCodec2156"]:c18(),["SharedCodec2157"]:c19(),["SharedCodec2158"]:c20(),["SharedCodec488"]:c21(),["SharedCodec494"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
