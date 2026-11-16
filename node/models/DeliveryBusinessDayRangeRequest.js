import { d7272 as c0 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7272 as d7272 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRangeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBusinessDayRangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
