import { d2506 as c0 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2506 as d2506 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["VoidShipmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVoidShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
