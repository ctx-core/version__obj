export declare function self_lazyload<
	Val extends unknown = unknown
>(
	self:object,
	version:string,
	cache_symbol:string,
	version_symbol:string,
	value_:()=>Val
):Val
export { self_lazyload as lazyload__self }
