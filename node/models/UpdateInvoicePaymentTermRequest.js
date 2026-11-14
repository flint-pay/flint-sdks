import { d7144 as c0, d7145 as c2, d7146 as c3 } from '../descriptors/data/337.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6190 as c4, d6191 as c5, d6192 as c6, d6193 as c7, d6194 as c8, d6195 as c9, d6196 as c10, d6197 as c11, d6198 as c12, d6199 as c13, d6200 as c14, d6201 as c15, d6202 as c16, d6203 as c17, d6204 as c18 } from '../descriptors/data/284.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5659 as c19 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5659 as d5659 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentTermCalculationRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec1724"]:c2(),["SharedCodec1725"]:c3(),["SharedCodec62"]:c4(),["SharedCodec63"]:c5(),["SharedCodec64"]:c6(),["SharedCodec65"]:c7(),["SharedCodec948"]:c8(),["SharedCodec949"]:c9(),["SharedCodec950"]:c10(),["SharedCodec951"]:c11(),["SharedCodec952"]:c12(),["SharedCodec953"]:c13(),["SharedCodec954"]:c14(),["SharedCodec955"]:c15(),["SharedCodec956"]:c16(),["SharedCodec957"]:c17(),["SharedCodec958"]:c18(),["UpdateInvoicePaymentTermRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInvoicePaymentTermRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
