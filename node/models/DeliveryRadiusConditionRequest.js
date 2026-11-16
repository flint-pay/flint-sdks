import { d7263 as c0, d7266 as c1, d7267 as c2 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7266 as d7266 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7266;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryDistanceRequest"]:c0(),["DeliveryRadiusConditionRequest"]:c1(),["DeliveryRadiusOrigin"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRadiusConditionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
