import { d900 as c0, d2634 as c1, d2645 as c2 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d2645 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2645;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec251"]:c0(),["SharedCodec651"]:c1(),["WebhookStreamWithheld"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookStreamWithheld(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
