import { d319 as c0 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d319 as d319 } from '../descriptors/data/18.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d319;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionDeliveryMigrationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionDeliveryMigrationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
