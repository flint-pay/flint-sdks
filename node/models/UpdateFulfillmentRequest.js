import { d7867 as c0, d7865 as c3, d7864 as c5, d7866 as c10 } from '../descriptors/data/342.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8175 as c1, d8176 as c2 } from '../descriptors/data/359.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7768 as c4 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8696 as c6, d8697 as c7, d8698 as c8, d8699 as c9, d8700 as c11, d8701 as c12 } from '../descriptors/data/389.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8702 as c13, d8703 as c14, d8704 as c15, d8705 as c16 } from '../descriptors/data/390.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7500 as c17 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7500 as d7500 } from '../descriptors/data/315.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7500;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1704"]:c1(),["SharedCodec1705"]:c2(),["SharedCodec2"]:c3(),["SharedCodec2977"]:c4(),["SharedCodec2980"]:c5(),["SharedCodec2996"]:c6(),["SharedCodec2997"]:c7(),["SharedCodec2998"]:c8(),["SharedCodec2999"]:c9(),["SharedCodec3"]:c10(),["SharedCodec3000"]:c11(),["SharedCodec3001"]:c12(),["SharedCodec3002"]:c13(),["SharedCodec3003"]:c14(),["SharedCodec3004"]:c15(),["SharedCodec3005"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
