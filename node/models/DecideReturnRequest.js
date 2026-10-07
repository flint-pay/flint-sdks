import { d520 as c0, d2162 as c1, d2135 as c2, d2136 as c3, d2139 as c4, d2138 as c5, d2137 as c6, d2142 as c7, d2141 as c8, d2140 as c9, d2145 as c10, d2144 as c11, d2143 as c12, d2148 as c13, d2147 as c14, d2146 as c15, d2150 as c16, d2149 as c17, d2161 as c18, d2153 as c19, d2151 as c20, d2152 as c21, d2155 as c22, d2154 as c23, d2158 as c24, d2156 as c25, d2157 as c26, d2160 as c27, d2159 as c28 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d520 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d520;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec505"]:c2(),["SharedCodec506"]:c3(),["SharedCodec507"]:c4(),["SharedCodec508"]:c5(),["SharedCodec509"]:c6(),["SharedCodec510"]:c7(),["SharedCodec511"]:c8(),["SharedCodec512"]:c9(),["SharedCodec513"]:c10(),["SharedCodec514"]:c11(),["SharedCodec515"]:c12(),["SharedCodec516"]:c13(),["SharedCodec517"]:c14(),["SharedCodec518"]:c15(),["SharedCodec519"]:c16(),["SharedCodec520"]:c17(),["SharedCodec521"]:c18(),["SharedCodec522"]:c19(),["SharedCodec523"]:c20(),["SharedCodec524"]:c21(),["SharedCodec525"]:c22(),["SharedCodec526"]:c23(),["SharedCodec527"]:c24(),["SharedCodec528"]:c25(),["SharedCodec529"]:c26(),["SharedCodec530"]:c27(),["SharedCodec531"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
