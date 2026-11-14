import { d1001 as c0 } from '../descriptors/data/49.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7641 as c1, d7642 as c2, d7643 as c3, d7644 as c4, d7645 as c5, d7646 as c6, d7647 as c7, d7648 as c8, d7649 as c9 } from '../descriptors/data/368.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7650 as c10 } from '../descriptors/data/369.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1001 as d1001 } from '../descriptors/data/49.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1040"]:c1(),["SharedCodec1041"]:c2(),["SharedCodec1042"]:c3(),["SharedCodec1043"]:c4(),["SharedCodec1044"]:c5(),["SharedCodec1045"]:c6(),["SharedCodec1046"]:c7(),["SharedCodec1047"]:c8(),["SharedCodec1048"]:c9(),["SharedCodec1049"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
