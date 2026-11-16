import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1378 as c1 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9187 as c2, d9189 as c3, d9191 as c4, d9193 as c5 } from '../descriptors/data/445.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9196 as c6, d9197 as c7, d9198 as c8, d9199 as c9, d9207 as c10, d9208 as c11, d9209 as c12, d9210 as c13 } from '../descriptors/data/446.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1378 as d1378 } from '../descriptors/data/66.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2113"]:c6(),["SharedCodec2114"]:c7(),["SharedCodec2115"]:c8(),["SharedCodec2116"]:c9(),["SharedCodec2124"]:c10(),["SharedCodec2125"]:c11(),["SharedCodec2126"]:c12(),["SharedCodec2127"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
