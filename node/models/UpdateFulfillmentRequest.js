import { d6013 as c0, d6011 as c1, d6012 as c2, d6010 as c5 } from '../descriptors/data/273.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6321 as c3, d6322 as c16 } from '../descriptors/data/290.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5914 as c4 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6837 as c6, d6838 as c7, d6839 as c8, d6840 as c9, d6841 as c10, d6842 as c11, d6843 as c12, d6844 as c13, d6845 as c14, d6846 as c15 } from '../descriptors/data/320.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5647 as c17 } from '../descriptors/data/246.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5647 as d5647 } from '../descriptors/data/246.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5647;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1680"]:c4(),["SharedCodec1683"]:c5(),["SharedCodec1699"]:c6(),["SharedCodec1700"]:c7(),["SharedCodec1701"]:c8(),["SharedCodec1702"]:c9(),["SharedCodec1703"]:c10(),["SharedCodec1704"]:c11(),["SharedCodec1705"]:c12(),["SharedCodec1706"]:c13(),["SharedCodec1707"]:c14(),["SharedCodec1708"]:c15(),["SharedCodec999"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
