import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10015 as c1 } from '../descriptors/data/461.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10039 as c2, d10040 as c3, d10041 as c4, d10042 as c5, d10043 as c6, d10044 as c7, d10045 as c8, d10046 as c9, d10047 as c10, d10048 as c11, d10049 as c12, d10050 as c13 } from '../descriptors/data/462.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7765 as c14 } from '../descriptors/data/327.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7765 as d7765 } from '../descriptors/data/327.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerAppPermissionManifestEntryRequest"]:c1(),["SharedCodec3138"]:c2(),["SharedCodec3139"]:c3(),["SharedCodec3140"]:c4(),["SharedCodec3141"]:c5(),["SharedCodec3142"]:c6(),["SharedCodec3143"]:c7(),["SharedCodec3144"]:c8(),["SharedCodec3145"]:c9(),["SharedCodec3146"]:c10(),["SharedCodec3147"]:c11(),["SharedCodec3148"]:c12(),["SharedCodec3149"]:c13(),["UpdatePartnerAppRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePartnerAppRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
