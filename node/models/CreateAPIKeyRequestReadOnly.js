import { d199 as c0 } from '../descriptors/data/8.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6696 as c1 } from '../descriptors/data/299.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6642 as c2 } from '../descriptors/data/296.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d199 as d199 } from '../descriptors/data/8.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d199;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequestReadOnly"]:c0(),["SharedCodec275"]:c1(),["SharedCodec3"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequestReadOnly(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
