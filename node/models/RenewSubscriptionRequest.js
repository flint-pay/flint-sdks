import { d892 as c0 } from '../descriptors/data/39.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d892 as d892 } from '../descriptors/data/39.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d892;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RenewSubscriptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRenewSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
