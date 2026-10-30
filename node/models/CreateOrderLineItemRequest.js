import { d5565 as c0 } from '../descriptors/data/250.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4268 as c1 } from '../descriptors/data/179.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5033 as c2, d5034 as c3, d5035 as c4, d5036 as c5, d5037 as c6, d5038 as c10, d5039 as c11, d5040 as c12, d5041 as c13, d5051 as c18, d5052 as c20, d5053 as c21, d5042 as c22, d5043 as c23, d5044 as c24, d5045 as c25, d5046 as c26, d5047 as c27, d5048 as c28, d5049 as c29, d5050 as c34 } from '../descriptors/data/223.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c7 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c8 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5027 as c9, d5028 as c14, d5029 as c15, d5030 as c16, d5031 as c17, d5032 as c19 } from '../descriptors/data/222.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5607 as c30, d5608 as c31, d5609 as c32 } from '../descriptors/data/253.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4547 as c33 } from '../descriptors/data/195.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4330 as c35, d4331 as c36 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5565 as d5565 } from '../descriptors/data/250.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemRequest"]:c0(),["Dimensions"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequest"]:c5(),["LineItemFulfillmentRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequest"]:c10(),["OrderDraftLineItemTaxRequest"]:c11(),["OrderDraftTaxComponentRequest"]:c12(),["OrderDraftTaxJurisdictionRequest"]:c13(),["SharedCodec250"]:c14(),["SharedCodec251"]:c15(),["SharedCodec252"]:c16(),["SharedCodec253"]:c17(),["SharedCodec254"]:c18(),["SharedCodec255"]:c19(),["SharedCodec256"]:c20(),["SharedCodec257"]:c21(),["SharedCodec259"]:c22(),["SharedCodec260"]:c23(),["SharedCodec261"]:c24(),["SharedCodec262"]:c25(),["SharedCodec264"]:c26(),["SharedCodec265"]:c27(),["SharedCodec267"]:c28(),["SharedCodec268"]:c29(),["SharedCodec269"]:c30(),["SharedCodec270"]:c31(),["SharedCodec271"]:c32(),["SharedCodec602"]:c33(),["SubscribedLineRequest"]:c34(),["TextModifierRequest"]:c35(),["Weight"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
