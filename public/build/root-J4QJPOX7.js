import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-SR5GKUBC.js";
import {
  createHotContext
} from "/build/_shared/chunk-KV6WKKUP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AL4VFAFU.css";

// app/root.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Links, {})]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRestoration, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveReload, {})]
    })]
  });
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-J4QJPOX7.js.map
