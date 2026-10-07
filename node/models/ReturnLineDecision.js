import { d2162 as c0, d2135 as c1, d2136 as c2, d2139 as c3, d2138 as c4, d2137 as c5, d2142 as c6, d2141 as c7, d2140 as c8, d2145 as c9, d2144 as c10, d2143 as c11, d2148 as c12, d2147 as c13, d2146 as c14, d2150 as c15, d2149 as c16, d2161 as c17, d2153 as c18, d2151 as c19, d2152 as c20, d2155 as c21, d2154 as c22, d2158 as c23, d2156 as c24, d2157 as c25, d2160 as c26, d2159 as c27 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2162 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2162;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec505"]:c1(),["SharedCodec506"]:c2(),["SharedCodec507"]:c3(),["SharedCodec508"]:c4(),["SharedCodec509"]:c5(),["SharedCodec510"]:c6(),["SharedCodec511"]:c7(),["SharedCodec512"]:c8(),["SharedCodec513"]:c9(),["SharedCodec514"]:c10(),["SharedCodec515"]:c11(),["SharedCodec516"]:c12(),["SharedCodec517"]:c13(),["SharedCodec518"]:c14(),["SharedCodec519"]:c15(),["SharedCodec520"]:c16(),["SharedCodec521"]:c17(),["SharedCodec522"]:c18(),["SharedCodec523"]:c19(),["SharedCodec524"]:c20(),["SharedCodec525"]:c21(),["SharedCodec526"]:c22(),["SharedCodec527"]:c23(),["SharedCodec528"]:c24(),["SharedCodec529"]:c25(),["SharedCodec530"]:c26(),["SharedCodec531"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
