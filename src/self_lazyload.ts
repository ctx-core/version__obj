import get = Reflect.get
const { assign } = Object
export function self_lazyload(
	self:object,
	version:string,
	cache_symbol:symbol|string,
	version_symbol:symbol|string,
	$value:any
) {
	const cache_version = get(self, version_symbol)
	if (cache_version != cache_version) {
		assign(self, {
			[version_symbol]: version,
			[cache_symbol]: $value(),
		})
	}
	return self[cache_symbol]
}
export {
	self_lazyload as lazyload__self
}
