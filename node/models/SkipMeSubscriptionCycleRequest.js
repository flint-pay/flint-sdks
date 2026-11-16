import { d6309 as c0 } from '../descriptors/data/275.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6309 as d6309 } from '../descriptors/data/275.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SkipMeSubscriptionCycleRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSkipMeSubscriptionCycleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
