import { d9042 as c0 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8322 as c1, d8323 as c2, d8324 as c3, d8325 as c4, d8326 as c5 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9042 as d9042 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9042;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRequest"]:c0(),["SharedCodec1885"]:c1(),["SharedCodec1886"]:c2(),["SharedCodec1887"]:c3(),["SharedCodec1888"]:c4(),["SharedCodec1889"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
