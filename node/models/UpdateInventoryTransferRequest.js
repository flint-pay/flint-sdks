import { d5516 as c0, d5517 as c1, d5518 as c2 } from '../descriptors/data/248.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4165 as c3 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4165 as d4165 } from '../descriptors/data/172.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4165;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1378"]:c0(),["SharedCodec1379"]:c1(),["SharedCodec1380"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
