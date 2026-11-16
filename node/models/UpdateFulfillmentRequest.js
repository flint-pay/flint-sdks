import { d6844 as c0, d6842 as c1, d6843 as c2, d6841 as c6 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7152 as c3, d7153 as c4 } from '../descriptors/data/326.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6745 as c5 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7668 as c7, d7669 as c8, d7670 as c9, d7671 as c10, d7672 as c11, d7673 as c12, d7674 as c13, d7675 as c14, d7676 as c15, d7677 as c16 } from '../descriptors/data/356.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6478 as c17 } from '../descriptors/data/282.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6478 as d6478 } from '../descriptors/data/282.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6478;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1321"]:c3(),["SharedCodec1322"]:c4(),["SharedCodec2406"]:c5(),["SharedCodec2409"]:c6(),["SharedCodec2425"]:c7(),["SharedCodec2426"]:c8(),["SharedCodec2427"]:c9(),["SharedCodec2428"]:c10(),["SharedCodec2429"]:c11(),["SharedCodec2430"]:c12(),["SharedCodec2431"]:c13(),["SharedCodec2432"]:c14(),["SharedCodec2433"]:c15(),["SharedCodec2434"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
