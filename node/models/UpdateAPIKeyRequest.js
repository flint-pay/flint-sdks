import { d6681 as c0, d6682 as c1 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6696 as c2, d6697 as c4, d6698 as c5 } from '../descriptors/data/299.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6642 as c3 } from '../descriptors/data/296.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6462 as c6 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6462 as d6462 } from '../descriptors/data/281.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2402"]:c0(),["SharedCodec2403"]:c1(),["SharedCodec275"]:c2(),["SharedCodec3"]:c3(),["SharedCodec508"]:c4(),["SharedCodec509"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
