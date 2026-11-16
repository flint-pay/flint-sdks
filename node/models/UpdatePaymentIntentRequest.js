import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6745 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c2 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7770 as c3 } from '../descriptors/data/362.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6501 as c4 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6501 as d6501 } from '../descriptors/data/284.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6501;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec2406"]:c1(),["SharedCodec2409"]:c2(),["SharedCodec63"]:c3(),["UpdatePaymentIntentRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
