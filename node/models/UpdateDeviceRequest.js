import { d2442 as c0 } from '../descriptors/data/97.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2442 as d2442 } from '../descriptors/data/97.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateDeviceRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeviceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
