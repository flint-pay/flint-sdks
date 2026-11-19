import { d1289 as c0 } from '../descriptors/data/64.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9811 as c1, d9812 as c2, d9813 as c3, d9814 as c4, d9815 as c5, d9816 as c6, d9817 as c7 } from '../descriptors/data/455.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9818 as c8, d9819 as c9, d9820 as c10 } from '../descriptors/data/456.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1289 as d1289 } from '../descriptors/data/64.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1289;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1843"]:c1(),["SharedCodec1844"]:c2(),["SharedCodec1845"]:c3(),["SharedCodec1846"]:c4(),["SharedCodec1847"]:c5(),["SharedCodec1848"]:c6(),["SharedCodec1849"]:c7(),["SharedCodec1850"]:c8(),["SharedCodec1851"]:c9(),["SharedCodec1852"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
