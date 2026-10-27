import { d2493 as c0 } from '../descriptors/data/101.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2493 as d2493 } from '../descriptors/data/101.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2493;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateShipmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
