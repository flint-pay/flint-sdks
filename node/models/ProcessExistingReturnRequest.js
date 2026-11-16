import { d7410 as c0, d7411 as c1 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c2 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c3 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9314 as c4, d9313 as c29 } from '../descriptors/data/453.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1238 as c5 } from '../descriptors/data/60.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9321 as c6, d9322 as c7, d9323 as c8, d9324 as c9, d9325 as c10 } from '../descriptors/data/454.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9240 as c11, d9242 as c19, d9243 as c20, d9244 as c21 } from '../descriptors/data/448.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9175 as c12, d9178 as c14, d9179 as c15, d9180 as c16 } from '../descriptors/data/444.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7526 as c13 } from '../descriptors/data/346.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9330 as c17, d9331 as c18 } from '../descriptors/data/455.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9245 as c22, d9246 as c23, d9247 as c24, d9248 as c25, d9249 as c26, d9250 as c28 } from '../descriptors/data/449.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7848 as c27 } from '../descriptors/data/366.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1238 as d1238 } from '../descriptors/data/60.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ProcessExistingReturnRequest"]:c5(),["ReturnProcessDecision"]:c6(),["ReturnProcessDispositionRequest"]:c7(),["ReturnProcessInspectionRequest"]:c8(),["ReturnProcessReceiptRequest"]:c9(),["ReturnProcessResolutionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnSourceSystemRequest"]:c12(),["SharedCodec155"]:c13(),["SharedCodec2087"]:c14(),["SharedCodec2088"]:c15(),["SharedCodec2089"]:c16(),["SharedCodec2106"]:c17(),["SharedCodec2107"]:c18(),["SharedCodec2151"]:c19(),["SharedCodec2152"]:c20(),["SharedCodec2153"]:c21(),["SharedCodec2154"]:c22(),["SharedCodec2155"]:c23(),["SharedCodec2156"]:c24(),["SharedCodec2157"]:c25(),["SharedCodec2158"]:c26(),["SharedCodec388"]:c27(),["SharedCodec488"]:c28(),["SharedCodec494"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
