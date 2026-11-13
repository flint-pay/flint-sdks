import { d996 as c0 } from '../descriptors/data/48.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7602 as c1, d7603 as c2, d7604 as c3, d7605 as c4, d7606 as c5, d7607 as c6, d7608 as c7, d7609 as c8, d7610 as c9 } from '../descriptors/data/362.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7611 as c10 } from '../descriptors/data/363.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d996 as d996 } from '../descriptors/data/48.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1036"]:c1(),["SharedCodec1037"]:c2(),["SharedCodec1038"]:c3(),["SharedCodec1039"]:c4(),["SharedCodec1040"]:c5(),["SharedCodec1041"]:c6(),["SharedCodec1042"]:c7(),["SharedCodec1043"]:c8(),["SharedCodec1044"]:c9(),["SharedCodec1045"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
