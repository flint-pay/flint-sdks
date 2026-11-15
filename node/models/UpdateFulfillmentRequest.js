import { d6011 as c0, d6009 as c1, d6010 as c2, d6008 as c5 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6317 as c3, d6318 as c16 } from '../descriptors/data/289.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5912 as c4 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6835 as c6, d6836 as c7, d6837 as c8, d6838 as c9, d6839 as c10, d6840 as c11, d6841 as c12, d6842 as c13, d6843 as c14, d6844 as c15 } from '../descriptors/data/320.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5645 as c17 } from '../descriptors/data/247.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5645 as d5645 } from '../descriptors/data/247.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5645;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1680"]:c4(),["SharedCodec1683"]:c5(),["SharedCodec1699"]:c6(),["SharedCodec1700"]:c7(),["SharedCodec1701"]:c8(),["SharedCodec1702"]:c9(),["SharedCodec1703"]:c10(),["SharedCodec1704"]:c11(),["SharedCodec1705"]:c12(),["SharedCodec1706"]:c13(),["SharedCodec1707"]:c14(),["SharedCodec1708"]:c15(),["SharedCodec999"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
