import { d1951 as c0, d1962 as c1 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1951 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1951;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerAppInstall"]:c0(),["PartnerEnvironmentGrant"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppInstall(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
