import { d131 as c0 } from '../descriptors/data/5.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3462 as c1 } from '../descriptors/data/141.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d131 as d131 } from '../descriptors/data/5.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d131;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryLocationSetRequest"]:c0(),["DeliveryLocationSetConfiguration"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
