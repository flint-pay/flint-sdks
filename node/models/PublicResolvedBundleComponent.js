import { d2105 as c0, d2106 as c1, d2334 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2105 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2105;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicResolvedBundleComponent"]:c0(),["PublicResolvedBundleVariantSummary"]:c1(),["SelectedProductOption"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicResolvedBundleComponent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
