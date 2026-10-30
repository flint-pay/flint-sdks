import { d314 as c0 } from '../descriptors/data/18.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d314 as d314 } from '../descriptors/data/18.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionDeliveryMigrationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionDeliveryMigrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
