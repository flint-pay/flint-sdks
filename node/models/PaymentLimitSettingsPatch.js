import { d1135 as c0 } from '../descriptors/data/55.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9436 as c1, d9437 as c2 } from '../descriptors/data/460.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1135 as d1135 } from '../descriptors/data/55.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1135;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PaymentLimitSettingsPatch"]:c0(),["SharedCodec1622"]:c1(),["SharedCodec1623"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLimitSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
