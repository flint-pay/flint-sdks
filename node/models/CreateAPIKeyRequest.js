import { d197 as c0 } from '../descriptors/data/8.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6696 as c1 } from '../descriptors/data/299.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6685 as c2, d6686 as c3, d6687 as c4 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6642 as c5 } from '../descriptors/data/296.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d197 as d197 } from '../descriptors/data/8.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d197;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequest"]:c0(),["SharedCodec275"]:c1(),["SharedCodec276"]:c2(),["SharedCodec277"]:c3(),["SharedCodec278"]:c4(),["SharedCodec3"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
