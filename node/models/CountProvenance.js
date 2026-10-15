import { d230 as c0, d228 as c1, d229 as c2 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d230 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventorySourceSystem"]:c1(),["SharedCodec42"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCountProvenance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
