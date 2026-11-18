import { d1295 as c0 } from '../descriptors/data/64.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9787 as c1, d9788 as c2, d9789 as c3, d9790 as c4 } from '../descriptors/data/449.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9796 as c5 } from '../descriptors/data/450.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1295 as d1295 } from '../descriptors/data/64.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1295;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestTokenExchange"]:c0(),["SharedCodec1842"]:c1(),["SharedCodec1843"]:c2(),["SharedCodec1844"]:c3(),["SharedCodec1845"]:c4(),["SharedCodec1851"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestTokenExchange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
