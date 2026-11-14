import { d1003 as c0 } from '../descriptors/data/49.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7641 as c1, d7642 as c2, d7643 as c3, d7644 as c4 } from '../descriptors/data/368.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1003 as d1003 } from '../descriptors/data/49.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1003;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestClientCredentials"]:c0(),["SharedCodec1040"]:c1(),["SharedCodec1041"]:c2(),["SharedCodec1042"]:c3(),["SharedCodec1043"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestClientCredentials(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
