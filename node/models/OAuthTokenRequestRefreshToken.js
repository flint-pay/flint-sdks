import { d1007 as c0 } from '../descriptors/data/49.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7667 as c1, d7668 as c2, d7669 as c3, d7670 as c4 } from '../descriptors/data/367.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1007 as d1007 } from '../descriptors/data/49.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1007;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestRefreshToken"]:c0(),["SharedCodec1039"]:c1(),["SharedCodec1040"]:c2(),["SharedCodec1041"]:c3(),["SharedCodec1042"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestRefreshToken(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
