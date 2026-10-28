import { d3377 as c0 } from '../descriptors/data/136.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4145 as c1 } from '../descriptors/data/176.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4146 as c2 } from '../descriptors/data/177.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3382 as c4, d3383 as c5, d3384 as c6, d3385 as c7, d3386 as c8, d3387 as c9, d3388 as c10 } from '../descriptors/data/137.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4188 as c11, d4189 as c12, d4190 as c13, d4191 as c14, d4192 as c15, d4193 as c16, d4194 as c17, d4195 as c18, d4196 as c19, d4197 as c20, d4198 as c21, d4199 as c22 } from '../descriptors/data/178.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4200 as c23, d4201 as c24, d4202 as c25, d4203 as c26 } from '../descriptors/data/179.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4146 as d4146 } from '../descriptors/data/177.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4146;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleAmountSpecification"]:c0(),["InvoiceScheduleDueWrite"]:c1(),["InvoiceScheduleEntryWrite"]:c2(),["MoneyValue"]:c3(),["SharedCodec927"]:c4(),["SharedCodec928"]:c5(),["SharedCodec929"]:c6(),["SharedCodec930"]:c7(),["SharedCodec931"]:c8(),["SharedCodec932"]:c9(),["SharedCodec933"]:c10(),["SharedCodec937"]:c11(),["SharedCodec938"]:c12(),["SharedCodec939"]:c13(),["SharedCodec940"]:c14(),["SharedCodec941"]:c15(),["SharedCodec942"]:c16(),["SharedCodec943"]:c17(),["SharedCodec944"]:c18(),["SharedCodec945"]:c19(),["SharedCodec946"]:c20(),["SharedCodec947"]:c21(),["SharedCodec948"]:c22(),["SharedCodec949"]:c23(),["SharedCodec950"]:c24(),["SharedCodec951"]:c25(),["SharedCodec952"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleEntryWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
