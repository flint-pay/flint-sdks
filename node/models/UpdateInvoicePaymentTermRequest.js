import { d9239 as c0, d9240 as c17, d9241 as c18 } from '../descriptors/data/415.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8291 as c2, d8292 as c3, d8293 as c4, d8294 as c5, d8295 as c6, d8296 as c7, d8297 as c8, d8298 as c9, d8299 as c10, d8300 as c11, d8301 as c12, d8302 as c13, d8303 as c14, d8304 as c15, d8305 as c16 } from '../descriptors/data/363.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7749 as c19 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7749 as d7749 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7749;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec119"]:c2(),["SharedCodec120"]:c3(),["SharedCodec121"]:c4(),["SharedCodec122"]:c5(),["SharedCodec1633"]:c6(),["SharedCodec1634"]:c7(),["SharedCodec1635"]:c8(),["SharedCodec1636"]:c9(),["SharedCodec1637"]:c10(),["SharedCodec1638"]:c11(),["SharedCodec1639"]:c12(),["SharedCodec1640"]:c13(),["SharedCodec1641"]:c14(),["SharedCodec1642"]:c15(),["SharedCodec1643"]:c16(),["SharedCodec3103"]:c17(),["SharedCodec3104"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
