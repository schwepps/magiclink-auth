import {
  require_node,
  require_sessions
} from "/build/_shared/chunk-C7ND6TEC.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  Link
} from "/build/_shared/chunk-SR5GKUBC.js";
import {
  createHotContext
} from "/build/_shared/chunk-KV6WKKUP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/restricted.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_node = __toESM(require_node());
var import_sessions = __toESM(require_sessions());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/restricted.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/restricted.tsx"
  );
  import.meta.hot.lastModified = "1687982861434.3728";
}
var meta = () => {
  return [{
    title: "Restricted page"
  }, {
    name: "description",
    content: "The restricted page of my auth app"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "w-full max-w-5xl p-8",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      className: "font-bold text-4xl",
      children: "I'm a restricted access page"
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
      className: "mt-4 underline hover:no-underline",
      to: "/",
      children: "Go back to home"
    })]
  });
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/restricted-YN3VLMHP.js.map
