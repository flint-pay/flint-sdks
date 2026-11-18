import { d1290 as c0 } from '../descriptors/data/64.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9787 as c1, d9788 as c2, d9789 as c3, d9790 as c4, d9791 as c5, d9792 as c6, d9793 as c7, d9794 as c8, d9795 as c9 } from '../descriptors/data/449.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9796 as c10 } from '../descriptors/data/450.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1290 as d1290 } from '../descriptors/data/64.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1842"]:c1(),["SharedCodec1843"]:c2(),["SharedCodec1844"]:c3(),["SharedCodec1845"]:c4(),["SharedCodec1846"]:c5(),["SharedCodec1847"]:c6(),["SharedCodec1848"]:c7(),["SharedCodec1849"]:c8(),["SharedCodec1850"]:c9(),["SharedCodec1851"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
