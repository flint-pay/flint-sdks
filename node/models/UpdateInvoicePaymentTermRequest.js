import { d7145 as c0, d7146 as c2, d7147 as c3 } from '../descriptors/data/336.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c1 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6188 as c4, d6189 as c5, d6190 as c6, d6191 as c7, d6192 as c8, d6193 as c9, d6194 as c10, d6195 as c11, d6196 as c12, d6197 as c13, d6198 as c14, d6199 as c15, d6200 as c16, d6201 as c17, d6202 as c18 } from '../descriptors/data/283.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5655 as c19 } from '../descriptors/data/246.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5655 as d5655 } from '../descriptors/data/246.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1712"]:c2(),["SharedCodec1713"]:c3(),["SharedCodec61"]:c4(),["SharedCodec62"]:c5(),["SharedCodec63"]:c6(),["SharedCodec64"]:c7(),["SharedCodec946"]:c8(),["SharedCodec947"]:c9(),["SharedCodec948"]:c10(),["SharedCodec949"]:c11(),["SharedCodec950"]:c12(),["SharedCodec951"]:c13(),["SharedCodec952"]:c14(),["SharedCodec953"]:c15(),["SharedCodec954"]:c16(),["SharedCodec955"]:c17(),["SharedCodec956"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
