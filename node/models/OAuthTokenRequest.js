import { d1291 as c0 } from '../descriptors/data/64.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9835 as c1, d9836 as c2, d9837 as c3, d9838 as c4, d9839 as c5 } from '../descriptors/data/456.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9840 as c6, d9841 as c7, d9842 as c8, d9843 as c9, d9844 as c10 } from '../descriptors/data/457.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1291 as d1291 } from '../descriptors/data/64.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1844"]:c1(),["SharedCodec1845"]:c2(),["SharedCodec1846"]:c3(),["SharedCodec1847"]:c4(),["SharedCodec1848"]:c5(),["SharedCodec1849"]:c6(),["SharedCodec1850"]:c7(),["SharedCodec1851"]:c8(),["SharedCodec1852"]:c9(),["SharedCodec1853"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
