import { d7144 as c0 } from '../descriptors/data/337.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6194 as c1, d6195 as c2, d6196 as c3, d6197 as c4, d6198 as c5, d6199 as c6, d6200 as c7, d6201 as c8, d6202 as c9, d6203 as c10, d6204 as c11 } from '../descriptors/data/284.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7144 as d7144 } from '../descriptors/data/337.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7144;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["SharedCodec948"]:c1(),["SharedCodec949"]:c2(),["SharedCodec950"]:c3(),["SharedCodec951"]:c4(),["SharedCodec952"]:c5(),["SharedCodec953"]:c6(),["SharedCodec954"]:c7(),["SharedCodec955"]:c8(),["SharedCodec956"]:c9(),["SharedCodec957"]:c10(),["SharedCodec958"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentTermCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
