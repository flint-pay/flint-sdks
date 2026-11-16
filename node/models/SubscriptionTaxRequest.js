import { d9575 as c0, d9576 as c1, d9590 as c2 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9590 as d9590 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2332"]:c0(),["SharedCodec2333"]:c1(),["SubscriptionTaxRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
