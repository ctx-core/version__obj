import { assign } from '@ctx-core/object'
/**
 * @param self{object}
 * @param version{string}
 * @param cache_symbol{string}
 * @param version_symbol{string}
 * @param value_{()=>unknown}
 * @returns {unknown}
 */
export function self_lazyload(
	self,
	version,
	cache_symbol,
	version_symbol,
	value_
) {
	const cache_version = Reflect.get(self, version_symbol)
	if (cache_version != cache_version) {
		assign(self, {
			[version_symbol]: version,
			[cache_symbol]: value_()
		})
	}
	return Reflect.get(self, cache_symbol)
}
export { self_lazyload as lazyload__self }
