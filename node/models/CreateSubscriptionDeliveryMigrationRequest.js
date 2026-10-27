import { d231 as c0 } from '../descriptors/data/13.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d231 as d231 } from '../descriptors/data/13.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d231;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionDeliveryMigrationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionDeliveryMigrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
