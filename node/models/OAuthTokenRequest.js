import { d1290 as c0 } from '../descriptors/data/64.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9788 as c1, d9789 as c2, d9790 as c3, d9791 as c4, d9792 as c5, d9793 as c6, d9794 as c7, d9795 as c8, d9796 as c9 } from '../descriptors/data/448.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9797 as c10 } from '../descriptors/data/449.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1290 as d1290 } from '../descriptors/data/64.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1843"]:c1(),["SharedCodec1844"]:c2(),["SharedCodec1845"]:c3(),["SharedCodec1846"]:c4(),["SharedCodec1847"]:c5(),["SharedCodec1848"]:c6(),["SharedCodec1849"]:c7(),["SharedCodec1850"]:c8(),["SharedCodec1851"]:c9(),["SharedCodec1852"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
