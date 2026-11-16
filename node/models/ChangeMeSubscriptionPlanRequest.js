import { d152 as c0 } from '../descriptors/data/7.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6953 as c1, d6954 as c2 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d152 as d152 } from '../descriptors/data/7.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d152;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionPlanRequest"]:c0(),["SharedCodec188"]:c1(),["SharedCodec189"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
