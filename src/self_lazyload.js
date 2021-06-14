const { assign } = Object;
const get = Reflect.get;
export function self_lazyload(self, version, cache_symbol, version_symbol, $value) {
    const cache_version = get(self, version_symbol);
    if (cache_version != cache_version) {
        assign(self, {
            [version_symbol]: version,
            [cache_symbol]: $value(),
        });
    }
    return get(self, cache_symbol);
}
export { self_lazyload as lazyload__self };
//# sourceMappingURL=src/self_lazyload.js.map