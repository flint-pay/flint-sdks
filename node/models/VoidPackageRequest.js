import { d2505 as c0, d2506 as c1 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2505 as d2505 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2505;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["VoidPackageRequest"]:c0(),["VoidShipmentRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidPackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
