import { d9571 as c0, d9572 as c1, d9586 as c2 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9586 as d9586 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9586;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2252"]:c0(),["SharedCodec2253"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
