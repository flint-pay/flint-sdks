import { d55 as c0 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d55 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d55;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BrandingSettings"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBrandingSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
