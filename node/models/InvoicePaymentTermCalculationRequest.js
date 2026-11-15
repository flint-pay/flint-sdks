import { d7145 as c0 } from '../descriptors/data/336.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6192 as c1, d6193 as c2, d6194 as c3, d6195 as c4, d6196 as c5, d6197 as c6, d6198 as c7, d6199 as c8, d6200 as c9, d6201 as c10, d6202 as c11 } from '../descriptors/data/283.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7145 as d7145 } from '../descriptors/data/336.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7145;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec946"]:c1(),["SharedCodec947"]:c2(),["SharedCodec948"]:c3(),["SharedCodec949"]:c4(),["SharedCodec950"]:c5(),["SharedCodec951"]:c6(),["SharedCodec952"]:c7(),["SharedCodec953"]:c8(),["SharedCodec954"]:c9(),["SharedCodec955"]:c10(),["SharedCodec956"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
