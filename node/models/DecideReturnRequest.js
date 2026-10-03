import { d561 as c0, d2168 as c1, d2141 as c2, d2142 as c3, d2145 as c4, d2144 as c5, d2143 as c6, d2148 as c7, d2147 as c8, d2146 as c9, d2151 as c10, d2150 as c11, d2149 as c12, d2154 as c13, d2153 as c14, d2152 as c15, d2156 as c16, d2155 as c17, d2167 as c18, d2159 as c19, d2157 as c20, d2158 as c21, d2161 as c22, d2160 as c23, d2164 as c24, d2162 as c25, d2163 as c26, d2166 as c27, d2165 as c28 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d561 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d561;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec535"]:c2(),["SharedCodec536"]:c3(),["SharedCodec537"]:c4(),["SharedCodec538"]:c5(),["SharedCodec539"]:c6(),["SharedCodec540"]:c7(),["SharedCodec541"]:c8(),["SharedCodec542"]:c9(),["SharedCodec543"]:c10(),["SharedCodec544"]:c11(),["SharedCodec545"]:c12(),["SharedCodec546"]:c13(),["SharedCodec547"]:c14(),["SharedCodec548"]:c15(),["SharedCodec549"]:c16(),["SharedCodec550"]:c17(),["SharedCodec551"]:c18(),["SharedCodec552"]:c19(),["SharedCodec553"]:c20(),["SharedCodec554"]:c21(),["SharedCodec555"]:c22(),["SharedCodec556"]:c23(),["SharedCodec557"]:c24(),["SharedCodec558"]:c25(),["SharedCodec559"]:c26(),["SharedCodec560"]:c27(),["SharedCodec561"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
