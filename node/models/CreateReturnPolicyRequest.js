import { d342 as c0 } from '../descriptors/data/21.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9185 as c3, d9187 as c4, d9189 as c5, d9191 as c6, d9193 as c7 } from '../descriptors/data/445.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9196 as c8, d9197 as c9, d9198 as c10, d9199 as c11, d9200 as c12, d9201 as c13, d9202 as c14, d9203 as c15, d9204 as c16, d9205 as c17, d9206 as c18, d9207 as c19, d9208 as c20, d9209 as c21, d9210 as c22 } from '../descriptors/data/446.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d342 as d342 } from '../descriptors/data/21.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d342;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2113"]:c8(),["SharedCodec2114"]:c9(),["SharedCodec2115"]:c10(),["SharedCodec2116"]:c11(),["SharedCodec2117"]:c12(),["SharedCodec2118"]:c13(),["SharedCodec2119"]:c14(),["SharedCodec2120"]:c15(),["SharedCodec2121"]:c16(),["SharedCodec2122"]:c17(),["SharedCodec2123"]:c18(),["SharedCodec2124"]:c19(),["SharedCodec2125"]:c20(),["SharedCodec2126"]:c21(),["SharedCodec2127"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
