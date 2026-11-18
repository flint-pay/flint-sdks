import { d1175 as c0 } from '../descriptors/data/59.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10319 as c1, d10320 as c2 } from '../descriptors/data/479.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1175 as d1175 } from '../descriptors/data/59.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1175;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LicenseKeyConfigurationRequest"]:c0(),["SharedCodec1743"]:c1(),["SharedCodec1744"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLicenseKeyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
