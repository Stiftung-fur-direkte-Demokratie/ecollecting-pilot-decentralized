/* @ds-bundle: {"format":4,"namespace":"SwissConfederationDesignSystem_8f53ab","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"DownloadItem","sourcePath":"components/content/DownloadItem.jsx"},{"name":"InfoBlock","sourcePath":"components/content/DownloadItem.jsx"},{"name":"MetaInfo","sourcePath":"components/content/DownloadItem.jsx"},{"name":"Authors","sourcePath":"components/content/DownloadItem.jsx"},{"name":"Contact","sourcePath":"components/content/DownloadItem.jsx"},{"name":"ImageNotAvailable","sourcePath":"components/content/DownloadItem.jsx"},{"name":"QuoteSection","sourcePath":"components/content/DownloadItem.jsx"},{"name":"Table","sourcePath":"components/content/Table.jsx"},{"name":"Tabs","sourcePath":"components/content/Table.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Btn","sourcePath":"components/core/Btn.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"StepIndicator","sourcePath":"components/core/Separator.jsx"},{"name":"Burger","sourcePath":"components/core/Separator.jsx"},{"name":"BackToTopBtn","sourcePath":"components/core/Separator.jsx"},{"name":"TagItem","sourcePath":"components/core/TagItem.jsx"},{"name":"Notification","sourcePath":"components/feedback/Notification.jsx"},{"name":"AlertBanner","sourcePath":"components/feedback/Notification.jsx"},{"name":"NotificationBanner","sourcePath":"components/feedback/Notification.jsx"},{"name":"Modal","sourcePath":"components/feedback/Notification.jsx"},{"name":"ToastMessage","sourcePath":"components/feedback/Notification.jsx"},{"name":"Progress","sourcePath":"components/feedback/Notification.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Input.jsx"},{"name":"Fieldset","sourcePath":"components/forms/Input.jsx"},{"name":"SearchField","sourcePath":"components/forms/SearchField.jsx"},{"name":"MainNavigation","sourcePath":"components/navigation/MainNavigation.jsx"},{"name":"MetaNavigation","sourcePath":"components/navigation/MainNavigation.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/MainNavigation.jsx"},{"name":"Pagination","sourcePath":"components/navigation/MainNavigation.jsx"},{"name":"LanguageSwitcher","sourcePath":"components/navigation/MainNavigation.jsx"},{"name":"TopBar","sourcePath":"components/sections/Hero.jsx"},{"name":"TopHeader","sourcePath":"components/sections/Hero.jsx"},{"name":"DesktopMenu","sourcePath":"components/sections/Hero.jsx"},{"name":"Hero","sourcePath":"components/sections/Hero.jsx"},{"name":"Footer","sourcePath":"components/sections/Hero.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"3a92f8555074","components/content/Card.jsx":"b79342e89db0","components/content/DownloadItem.jsx":"5c07be5fdebf","components/content/Table.jsx":"06cb60f4d3b6","components/core/Badge.jsx":"7e0188f41fe2","components/core/Btn.jsx":"6db61e92946e","components/core/Icon.jsx":"83c4df35a9f0","components/core/Logo.jsx":"a381a5ae7a2e","components/core/Separator.jsx":"5c256b693c88","components/core/TagItem.jsx":"efe738c9c15a","components/feedback/Notification.jsx":"569ade86c019","components/forms/Input.jsx":"c2497fae093c","components/forms/SearchField.jsx":"c78efd668d62","components/navigation/MainNavigation.jsx":"80623c0e8963","components/sections/Hero.jsx":"54256d253f17","ui_kits/admin-website/DetailScreen.jsx":"35b0e8a93e64","ui_kits/admin-website/FormScreen.jsx":"c679f0b05b63","ui_kits/admin-website/HomeScreen.jsx":"921cd2ddb4e4","ui_kits/admin-website/NewsListScreen.jsx":"5e82b22efbbd","ui_kits/admin-website/SearchScreen.jsx":"d0e061c132ab","ui_kits/admin-website/ServicesScreen.jsx":"5301e1a675e5","ui_kits/admin-website/Shell.jsx":"3b13be5ad882"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SwissConfederationDesignSystem_8f53ab = window.SwissConfederationDesignSystem_8f53ab || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  type = 'default',
  layout = 'default',
  image,
  imageAlt = '',
  header,
  metaInfos,
  title,
  description,
  children,
  footerInfo,
  footerAction,
  href,
  className = '',
  ...rest
}) {
  const clickable = Boolean(href || footerAction);
  const cls = ['card', `card--${type}`, layout !== 'default' && image && `card--${layout}`, clickable && 'card--clickable', className].filter(Boolean).join(' ');
  const showImageTop = image && type !== 'highlight';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), showImageTop ? /*#__PURE__*/React.createElement("div", {
    className: "card__image"
  }, typeof image === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  }) : image) : null, header ? /*#__PURE__*/React.createElement("div", {
    className: "card__header"
  }, header) : null, /*#__PURE__*/React.createElement("div", {
    className: "card__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__body"
  }, metaInfos ? /*#__PURE__*/React.createElement("div", {
    className: "meta-info"
  }, metaInfos) : null, title ? /*#__PURE__*/React.createElement("h3", {
    className: "card__title"
  }, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, title) : title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "card__description"
  }, description) : null, children), footerInfo || footerAction ? /*#__PURE__*/React.createElement("div", {
    className: `card__footer${footerInfo ? '' : ' card__footer--icon-only'}`
  }, footerInfo ? /*#__PURE__*/React.createElement("div", {
    className: "card__footer__info"
  }, footerInfo) : null, footerAction ? /*#__PURE__*/React.createElement("div", {
    className: "card__footer__action"
  }, footerAction) : null) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Table({
  columns = [],
  rows = [],
  caption,
  variant,
  zebra = false,
  sortable = false,
  className = '',
  ...rest
}) {
  const [sort, setSort] = React.useState(null);
  const cols = columns.map(c => typeof c === 'string' ? {
    key: c,
    label: c
  } : c);
  const data = React.useMemo(() => {
    if (!sort) return rows;
    const sorted = [...rows].sort((a, b) => String(a[sort.key] ?? '').localeCompare(String(b[sort.key] ?? ''), 'de'));
    return sort.dir === 'desc' ? sorted.reverse() : sorted;
  }, [rows, sort]);
  const cls = ['table', variant && `table--${variant}`, zebra && 'table--zebra', caption && 'table--caption', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: cls
  }, rest), caption ? /*#__PURE__*/React.createElement("caption", null, caption) : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, cols.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    "aria-sort": sort && sort.key === c.key ? sort.dir === 'asc' ? 'ascending' : 'descending' : undefined
  }, sortable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "table__sorter",
    onClick: () => setSort(s => s && s.key === c.key ? {
      key: c.key,
      dir: s.dir === 'asc' ? 'desc' : 'asc'
    } : {
      key: c.key,
      dir: 'asc'
    })
  }, /*#__PURE__*/React.createElement("span", null, c.label)) : c.label)))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id || i
  }, cols.map((c, j) => j === 0 ? /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "row"
  }, row[c.key]) : /*#__PURE__*/React.createElement("td", {
    key: c.key
  }, row[c.key])))))));
}
function Tabs({
  tabs = [],
  defaultIndex = 0,
  className = '',
  ...rest
}) {
  const [active, setActive] = React.useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `tabs ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tab__controls-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tab__controls",
    role: "tablist"
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.id || i,
    type: "button",
    role: "tab",
    "aria-selected": i === active,
    className: `tab__control${i === active ? ' tab__control--active' : ''}`,
    onClick: () => setActive(i)
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    className: "tab__container vertical-spacing",
    role: "tabpanel"
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Table, Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Table.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: '0.75rem',
  base: '1rem',
  md: '1.5rem',
  lg: '1.75rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '5rem',
  '4xl': '7rem'
};

/** Resolve where the icon SVGs live. Pages set window.__CH_ICON_BASE__ once. */
function iconBase() {
  return typeof window !== 'undefined' && window.__CH_ICON_BASE__ || 'assets/icons/';
}
function Icon({
  name,
  size = 'base',
  spin = false,
  className = '',
  style,
  title,
  ...rest
}) {
  const s = SIZES[size] || size;
  const url = `url("${iconBase()}${name}.svg")`;
  const mask = `${url} no-repeat center / contain`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : 'true',
    className: `icon icon--${size} icon--${name} ${spin ? 'icon--spin' : ''} ${className}`.trim(),
    style: {
      display: 'inline-block',
      width: s,
      height: s,
      flexShrink: 0,
      background: 'currentColor',
      WebkitMask: mask,
      mask: mask,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  spaced = false,
  headingLevel = 'h3',
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = i => setOpen(prev => prev.includes(i) ? prev.filter(x => x !== i) : allowMultiple ? [...prev, i] : [i]);
  const H = headingLevel;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: ['accordion', spaced && 'accordion--spaced', className].filter(Boolean).join(' ')
  }, rest), items.map((item, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("li", {
      key: item.id || i,
      className: `accordion__item${isOpen ? ' accordion__item--open' : ''}`
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "accordion__button",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, item.step ? /*#__PURE__*/React.createElement("span", {
      className: "step__indicator",
      style: {
        marginRight: '0.75rem'
      }
    }, item.step) : null, /*#__PURE__*/React.createElement(H, {
      className: "accordion__title"
    }, item.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ChevronDown",
      size: "lg",
      className: "accordion__arrow"
    })), /*#__PURE__*/React.createElement("div", {
      className: "accordion__drawer",
      "aria-hidden": !isOpen
    }, /*#__PURE__*/React.createElement("div", {
      className: "accordion__content vertical-spacing"
    }, item.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/DownloadItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FILE_ICONS = {
  pdf: 'FilePDF',
  doc: 'FileWord',
  docx: 'FileWord',
  xls: 'FileExcel',
  xlsx: 'FileExcel',
  ppt: 'FilePPT',
  pptx: 'FilePPT',
  zip: 'FileZip',
  json: 'FileJSON',
  csv: 'FileLines',
  epub: 'FileEPUB',
  mp3: 'FileAudio',
  mp4: 'FileVideo',
  jpg: 'FileImage',
  png: 'FileImage'
};
function DownloadItem({
  title,
  description,
  href = '#',
  format,
  size,
  meta = [],
  icon,
  className = '',
  ...rest
}) {
  const glyph = icon || FILE_ICONS[String(format || '').toLowerCase()] || 'Download';
  const metaParts = [format && format.toUpperCase(), size, ...meta].filter(Boolean);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `download-item ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: "xl",
    className: "download-item__icon"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "download-item__title"
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    className: "download-item__description"
  }, description) : null, metaParts.length ? /*#__PURE__*/React.createElement("div", {
    className: "download-item__meta-info"
  }, metaParts.map((m, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "download-item__meta-divider"
  }, "\xB7") : null, /*#__PURE__*/React.createElement("span", null, m)))) : null));
}
function InfoBlock({
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `info-block ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "info-block__title"
  }, title), /*#__PURE__*/React.createElement("div", null, children));
}
function MetaInfo({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `meta-info ${className}`.trim()
  }, rest), items.map((item, i) => {
    const it = typeof item === 'string' ? {
      label: item
    } : item;
    return /*#__PURE__*/React.createElement("span", {
      className: "meta-info__item",
      key: i
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: "base"
    }) : null, /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
function Authors({
  authors = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `authors ${className}`.trim()
  }, rest), authors.map((a, i) => /*#__PURE__*/React.createElement("div", {
    className: "authors__item",
    key: i
  }, a.image ? /*#__PURE__*/React.createElement("img", {
    className: "authors__image",
    src: a.image,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "authors__image"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "authors__name",
    style: {
      display: 'block'
    }
  }, a.name), a.role ? /*#__PURE__*/React.createElement("span", {
    className: "authors__role"
  }, a.role) : null))));
}
function Contact({
  title,
  name,
  lines = [],
  phone,
  email,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `contact ${className}`.trim()
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    className: "contact__title"
  }, title) : null, name ? /*#__PURE__*/React.createElement("div", {
    className: "font--bold"
  }, name) : null, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, l)), phone ? /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Phone",
    size: "base"
  }), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\s/g, '')}`
  }, phone)) : null, email ? /*#__PURE__*/React.createElement("div", {
    className: "contact__row"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Envelope",
    size: "base"
  }), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`
  }, email)) : null);
}
function ImageNotAvailable({
  label = 'Bild nicht verfügbar',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `image-not-available ${className}`.trim(),
    role: "img",
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Image",
    size: "2xl",
    className: "image-not-available__icon"
  }));
}
function QuoteSection({
  quote,
  author,
  role,
  image,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: `quote ${className}`.trim()
  }, rest), image ? /*#__PURE__*/React.createElement("div", {
    className: "quote__image"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "quote__text"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "quote__title",
    style: {
      padding: 0
    }
  }, quote), author ? /*#__PURE__*/React.createElement("figcaption", {
    className: "quote__author"
  }, author, role ? `, ${role}` : '') : null));
}
Object.assign(__ds_scope, { DownloadItem, InfoBlock, MetaInfo, Authors, Contact, ImageNotAvailable, QuoteSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DownloadItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  label,
  children,
  color = 'gray',
  size = 'base',
  icon,
  iconLeft,
  clickable = false,
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['badge', `badge--${color}`, `badge--${size}`, clickable && !disabled && 'badge--clickable', disabled && 'badge--disabled', className].filter(Boolean).join(' ');
  const Tag = clickable ? 'button' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    onClick: clickable && !disabled ? onClick : undefined,
    type: clickable ? 'button' : undefined
  }, rest), iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    className: "badge__icon-left",
    size: "base"
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "badge__text"
  }, label ?? children), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    className: "badge__icon",
    size: "base"
  }) : null);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Btn.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Btn({
  label,
  children,
  variant = 'outline',
  size,
  icon,
  iconPos = icon ? 'left' : undefined,
  href,
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['btn', variant && `btn--${variant}`, size && `btn--${size}`, iconPos && `btn--icon-${iconPos}`, fullWidth && 'btn--full-width', className].filter(Boolean).join(' ');
  const text = label ?? children;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    className: "btn__icon",
    size: "md"
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: fullWidth ? 'btn__text-centered' : 'btn__text'
  }, text));
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls,
    "aria-label": iconPos === 'only' ? text : undefined
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || undefined,
    onClick: onClick,
    "aria-label": iconPos === 'only' ? text : undefined
  }, rest), inner);
}
Object.assign(__ds_scope, { Btn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Btn.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function assetBase() {
  return typeof window !== 'undefined' && window.__CH_ASSET_BASE__ || 'assets/';
}
function Logo({
  title,
  acronym,
  href = '#',
  src,
  className = '',
  ...rest
}) {
  const logo = src || `${assetBase()}logos/BundLogo.svg`;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `logo ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Schweizerische Eidgenossenschaft \u2014 Conf\xE9d\xE9ration suisse \u2014 Confederazione Svizzera \u2014 Confederaziun svizra",
    style: {
      height: '2.75rem',
      width: 'auto',
      flexShrink: 0
    }
  }), title ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "logo__separator",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "logo-title__container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo__title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), acronym ? /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, acronym) : null)) : null);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Separator({
  orientation = 'horizontal',
  negative = false,
  className = '',
  ...rest
}) {
  const cls = ['separator', orientation === 'vertical' && 'separator--vertical', negative && 'separator--negative', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: cls
  }, rest));
}
function StepIndicator({
  step,
  state = 'default',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `step__indicator ${state !== 'default' ? `step__indicator--${state}` : ''} ${className}`.trim()
  }, rest), state === 'done' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Checkmark",
    size: "sm"
  }) : step);
}
function Burger({
  isOpen = false,
  onClick,
  label = 'Menu',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `burger ${className}`.trim(),
    "aria-expanded": isOpen,
    "aria-label": label,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isOpen ? 'Cancel' : 'Menu',
    size: "xl"
  }));
}
function BackToTopBtn({
  label = 'Nach oben',
  onClick,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: `back-to-top ${className}`.trim(),
    onClick: onClick || (() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }))
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowUp",
    size: "base"
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Separator, StepIndicator, Burger, BackToTopBtn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/TagItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TagItem({
  label,
  children,
  variant,
  size,
  icon,
  href,
  active = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['tag-item', variant && `tag-item--${variant}`, size && `tag-item--${size}`, active && 'tag-item--active', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement("span", {
    className: "tag-item__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag-item__text"
  }, label ?? children), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    className: "tag-item__icon",
    size: "base"
  }) : null);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    onClick: onClick
  }, rest), inner);
}
Object.assign(__ds_scope, { TagItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TagItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TYPE_ICONS = {
  error: 'WarningCircle',
  alert: 'WarningCircle',
  warning: 'Warning',
  success: 'CheckmarkCircle',
  info: 'InfoCircle',
  hint: 'Info'
};
function Notification({
  type = 'hint',
  title,
  children,
  text,
  icon,
  closeBtn = true,
  action,
  headingLevel = 'h2',
  onClose,
  className = '',
  ...rest
}) {
  const [closed, setClosed] = React.useState(false);
  if (closed) return null;
  const glyph = icon === null ? null : icon || TYPE_ICONS[type];
  const H = headingLevel;
  const cls = ['notification', `notification--${type}`, title && 'notification--with-title', className].filter(Boolean).join(' ');
  const close = () => {
    setClosed(true);
    onClose && onClose();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: type === 'error' || type === 'alert' ? 'alert' : 'status'
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    className: "notification__header"
  }, glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: "2xl",
    className: "notification__icon"
  }) : null, /*#__PURE__*/React.createElement(H, {
    className: "notification__title"
  }, title)) : glyph ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: "2xl",
    className: "notification__icon"
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: `notification__content${title && glyph ? ' notification__content-offset' : ''}`
  }, text ? /*#__PURE__*/React.createElement("p", null, text) : children, action), closeBtn ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "notification__close",
    "aria-label": "Meldung schliessen",
    onClick: close
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Cancel",
    size: "xl"
  })) : null);
}
function AlertBanner({
  type = 'alert',
  title,
  children,
  links = [],
  closeBtn = true,
  onClose,
  className = '',
  ...rest
}) {
  const [closed, setClosed] = React.useState(false);
  if (closed) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['alert-banner', `alert-banner--${type}`, className].filter(Boolean).join(' '),
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container alert-banner__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alert-banner__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "alert-banner__header"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "alert-banner__content"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "alert-banner__list"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    className: "link--negative"
  }, l.label))))), closeBtn ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "alert-banner__close",
    "aria-label": "Meldung schliessen",
    onClick: () => {
      setClosed(true);
      onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Cancel",
    size: "xl"
  })) : null));
}
function NotificationBanner({
  type = 'hint',
  title,
  children,
  action,
  fixed = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['notification', 'notification-banner', `notification--${type}`, fixed && 'notification-banner--fixed', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container notification-banner__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "notification-banner__infos"
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "font--bold",
    style: {
      marginBottom: '0.25rem'
    }
  }, title) : null, children), action));
}
function Modal({
  open = true,
  title,
  children,
  actions,
  onClose,
  className = '',
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal__overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: `modal ${className}`.trim(),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "modal__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "modal__close",
    "aria-label": "Dialog schliessen",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Cancel",
    size: "xl"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal__body vertical-spacing"
  }, children), actions ? /*#__PURE__*/React.createElement("div", {
    className: "modal__footer"
  }, actions) : null));
}
function ToastMessage({
  type = 'default',
  children,
  icon,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['toast-message', type !== 'default' && `toast-message--${type}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), icon !== null ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || (type === 'error' ? 'WarningCircle' : 'CheckmarkCircle'),
    size: "md"
  }) : null, /*#__PURE__*/React.createElement("span", null, children));
}
function Progress({
  value = 0,
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `progress ${className}`.trim(),
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": label
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "progress__bar",
    style: {
      width: `${Math.max(0, Math.min(100, value))}%`
    }
  }));
}
Object.assign(__ds_scope, { Notification, AlertBanner, NotificationBanner, Modal, ToastMessage, Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  id,
  label,
  type = 'text',
  variant = 'outline',
  size,
  placeholder,
  value,
  defaultValue,
  message,
  messageType = 'error',
  required = false,
  disabled = false,
  readOnly = false,
  hideLabel = false,
  onChange,
  className = '',
  ...rest
}) {
  const cls = ['input', `input--${variant}`, size && `input--${size}`, message && `input--${messageType}`, className].filter(Boolean).join(' ');
  const labelCls = [variant === 'negative' && 'text--negative', size && `text--${size}`, hideLabel && 'sr-only', required && 'text--asterisk'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "form__group__input"
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: labelCls
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    name: id,
    type: type,
    className: cls,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    required: required,
    disabled: disabled || undefined,
    readOnly: readOnly,
    onChange: onChange
  }, rest)), message ? /*#__PURE__*/React.createElement("div", {
    className: `badge badge--sm badge--${messageType}`
  }, message) : null);
}
function Textarea({
  id,
  label,
  rows = 5,
  variant = 'outline',
  placeholder,
  value,
  defaultValue,
  message,
  messageType = 'error',
  required = false,
  disabled = false,
  resizable = true,
  hideLabel = false,
  onChange,
  className = '',
  ...rest
}) {
  const cls = ['input', `input--${variant}`, !resizable && 'textarea--static', message && `input--${messageType}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "form__group__input"
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: [hideLabel && 'sr-only', required && 'text--asterisk', variant === 'negative' && 'text--negative'].filter(Boolean).join(' ')
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    name: id,
    rows: rows,
    className: cls,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    required: required,
    disabled: disabled || undefined,
    onChange: onChange
  }, rest)), message ? /*#__PURE__*/React.createElement("div", {
    className: `badge badge--sm badge--${messageType}`
  }, message) : null);
}
function Select({
  id,
  label,
  options = [],
  value,
  defaultValue,
  placeholder,
  variant = 'outline',
  size,
  required = false,
  disabled = false,
  hideLabel = false,
  message,
  messageType = 'error',
  onChange,
  className = '',
  ...rest
}) {
  const cls = ['input', `input--${variant}`, size && `input--${size}`, message && `input--${messageType}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "form__group__select"
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: [hideLabel && 'sr-only', required && 'text--asterisk'].filter(Boolean).join(' ')
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    className: "select-wrapper"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    name: id,
    className: cls,
    value: value,
    defaultValue: defaultValue,
    required: required,
    disabled: disabled || undefined,
    onChange: onChange
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  }))), message ? /*#__PURE__*/React.createElement("div", {
    className: `badge badge--sm badge--${messageType}`
  }, message) : null);
}
function Checkbox({
  id,
  label,
  name,
  value,
  checked,
  defaultChecked,
  required = false,
  disabled = false,
  variant = 'outline',
  message,
  messageType = 'error',
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form__group__checkbox"
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    name: name || id,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    required: required,
    disabled: disabled || undefined,
    onChange: onChange,
    className: `input input--${variant} ${className}`.trim()
  }, rest)), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: required ? 'text--asterisk' : undefined
  }, label) : null, message ? /*#__PURE__*/React.createElement("div", {
    className: `badge badge--sm badge--${messageType}`
  }, message) : null);
}
function Radio({
  id,
  label,
  name,
  value,
  checked,
  defaultChecked,
  required = false,
  disabled = false,
  variant = 'outline',
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form__group__radio"
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    required: required,
    disabled: disabled || undefined,
    onChange: onChange,
    className: `input input--${variant} ${className}`.trim()
  }, rest)), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label) : null);
}
function Fieldset({
  legend,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    className: `fieldset ${className}`.trim()
  }, rest), legend ? /*#__PURE__*/React.createElement("legend", {
    className: "fieldset__legend"
  }, legend) : null, children);
}
Object.assign(__ds_scope, { Input, Textarea, Select, Checkbox, Radio, Fieldset });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchField({
  id = 'search',
  label = 'Suche',
  placeholder = 'Suchbegriff',
  value,
  defaultValue,
  negative = false,
  large = false,
  onChange,
  onSubmit,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("form", {
    className: ['search', negative && 'search--negative', large && 'search--large', className].filter(Boolean).join(' '),
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(e);
    },
    role: "search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search__group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "sr-only"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    name: id,
    type: "search",
    className: "input input--outline",
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: `btn ${negative ? 'btn--bare-negative' : 'btn--bare'} btn--icon-only`,
    "aria-label": label
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Search",
    className: "btn__icon",
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    className: "btn__text"
  }, label))));
}
Object.assign(__ds_scope, { SearchField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MainNavigation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MainNavigation({
  items = [],
  context = 'desktop',
  activeIndex = 0,
  onSelect,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    id: "main-navigation",
    className: `main-navigation main-navigation--${context} ${className}`.trim(),
    "aria-label": "Hauptnavigation"
  }, rest), /*#__PURE__*/React.createElement("ul", null, items.map((item, i) => {
    const it = typeof item === 'string' ? {
      label: item
    } : item;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      className: i === activeIndex ? 'active' : undefined,
      "aria-current": i === activeIndex ? 'page' : undefined,
      onClick: e => {
        if (onSelect) {
          e.preventDefault();
          onSelect(i);
        }
      }
    }, /*#__PURE__*/React.createElement("span", null, it.label), context === 'mobile' && it.children ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ArrowRight",
      size: "lg"
    }) : null));
  })));
}
function MetaNavigation({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Metanavigation"
  }, rest), /*#__PURE__*/React.createElement("ul", {
    className: `meta-navigation ${className}`.trim()
  }, items.map((item, i) => {
    const it = typeof item === 'string' ? {
      label: item
    } : item;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || '#'
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: "base",
      style: {
        marginRight: '0.375rem'
      }
    }) : null, it.label));
  })));
}
function Breadcrumb({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `breadcrumb container ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Brotkrumennavigation"
  }, /*#__PURE__*/React.createElement("ul", null, items.map((item, i) => {
    const it = typeof item === 'string' ? {
      label: item
    } : item;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      "aria-current": last ? 'page' : undefined
    }, i === 0 ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "Home",
      size: "base",
      style: {
        marginRight: '0.375rem'
      }
    }) : null, it.label, !last ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ChevronSmallRight",
      size: "base",
      style: {
        marginLeft: '0.75rem',
        opacity: 0.6
      }
    }) : null));
  }))));
}
function Pagination({
  currentPage = 1,
  totalPages = 1,
  field = true,
  variant = 'outline',
  onChange,
  align,
  className = '',
  ...rest
}) {
  const go = p => onChange && onChange(Math.max(1, Math.min(totalPages, p)));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['pagination', !field && 'pagination--extended', align === 'right' && 'pagination--right', className].filter(Boolean).join(' ')
  }, rest), field ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    className: `input input--base input--${variant}`,
    "aria-label": "Seite",
    value: String(currentPage),
    onChange: e => go(Number(e.target.value) || 1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "pagination__text"
  }, "von ", totalPages)) : null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `btn btn--${variant} btn--icon-only`,
    "aria-label": "Vorherige Seite",
    disabled: currentPage <= 1,
    onClick: () => go(currentPage - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronLeft",
    className: "btn__icon",
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    className: "btn__text"
  }, "Zur\xFCck"))), !field ? Array.from({
    length: totalPages
  }, (_, i) => i + 1).map(p => /*#__PURE__*/React.createElement("li", {
    key: p
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `btn btn--${p === currentPage ? 'filled' : variant}`,
    "aria-current": p === currentPage ? 'page' : undefined,
    onClick: () => go(p)
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn__text"
  }, p)))) : null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `btn btn--${variant} btn--icon-only`,
    "aria-label": "N\xE4chste Seite",
    disabled: currentPage >= totalPages,
    onClick: () => go(currentPage + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronRight",
    className: "btn__icon",
    size: "md"
  }), /*#__PURE__*/React.createElement("span", {
    className: "btn__text"
  }, "Weiter")))));
}
function LanguageSwitcher({
  languages = ['DE', 'FR', 'IT', 'EN'],
  active = 'DE',
  onSelect,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Sprachwahl"
  }, rest), /*#__PURE__*/React.createElement("ul", {
    className: `language-switcher ${className}`.trim()
  }, languages.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: l === active ? 'active' : undefined,
    "aria-current": l === active ? 'true' : undefined,
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(l);
    }
  }, l)))));
}
Object.assign(__ds_scope, { MainNavigation, MetaNavigation, Breadcrumb, Pagination, LanguageSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MainNavigation.jsx", error: String((e && e.message) || e) }); }

// components/sections/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TopBar({
  title = 'Der Bundesrat — Le Conseil fédéral',
  links = [],
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['top-bar', open && 'top-bar--is-open', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-bar__inner"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "top-bar__btn",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ChevronDown",
    size: "base",
    className: "top-bar__btn__icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "top-bar__right"
  }, /*#__PURE__*/React.createElement(__ds_scope.LanguageSwitcher, null)))), open ? /*#__PURE__*/React.createElement("div", {
    className: "top-bar__drawer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-bar__title"
  }, "Die Bundesbeh\xF6rden"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '0.5rem'
    }
  }, (links.length ? links : ['Bundesrat', 'Bundesverwaltung', 'Parlament', 'Bundesgericht']).map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "link--negative",
    style: {
      color: 'var(--color-white)'
    }
  }, l))))) : null);
}
function TopHeader({
  title,
  acronym,
  metaItems = ['Kontakt', 'Barrierefreiheit'],
  onBurger,
  burgerOpen = false,
  showSearch = true,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `top-header ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container container--flex"
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    title: title,
    acronym: acronym
  }), /*#__PURE__*/React.createElement("div", {
    className: "top-header__right"
  }, /*#__PURE__*/React.createElement(__ds_scope.MetaNavigation, {
    items: metaItems
  }), /*#__PURE__*/React.createElement("div", {
    className: "top-header__container-flex"
  }, showSearch ? /*#__PURE__*/React.createElement(__ds_scope.Btn, {
    label: "Suche",
    variant: "bare",
    icon: "Search",
    iconPos: "left",
    size: "sm"
  }) : null, /*#__PURE__*/React.createElement(__ds_scope.Burger, {
    isOpen: burgerOpen,
    onClick: onBurger
  })))));
}
function DesktopMenu({
  items = [],
  activeIndex = 0,
  onSelect,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `desktop-menu ${className}`.trim()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "desktop-menu__inner"
  }, /*#__PURE__*/React.createElement(__ds_scope.MainNavigation, {
    items: items,
    activeIndex: activeIndex,
    onSelect: onSelect
  }))));
}
function Hero({
  type = 'default',
  overtitle,
  title,
  subtitle,
  description,
  cta,
  image,
  imageAlt = '',
  meta,
  className = '',
  ...rest
}) {
  const contentClass = type === 'main' || type === 'hub' ? 'hero__content' : 'hero__content container__center--sm';
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ['hero', `hero--${type}`, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "container container--grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: contentClass,
    style: type === 'main' ? {
      gridColumn: 'span 12'
    } : undefined
  }, meta, overtitle ? /*#__PURE__*/React.createElement("div", {
    className: "overtitle",
    style: {
      color: 'var(--text-light)'
    }
  }, overtitle) : null, title ? /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("h2", {
    className: "hero__subtitle"
  }, subtitle) : null, description ? /*#__PURE__*/React.createElement("div", {
    className: "hero__description"
  }, description) : null, cta ? /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, cta) : null), image ? /*#__PURE__*/React.createElement("div", {
    className: "hero__image container__center--md"
  }, typeof image === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt
  }) : image) : null));
}
function Footer({
  about,
  aboutTitle = 'Über uns',
  copyright,
  socials = [],
  linkColumns = [],
  newsletterLabel = 'News abonnieren',
  bottomLinks = ['Impressum', 'Rechtliches', 'Datenschutz'],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    id: "main-footer",
    className: className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bg--secondary-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-information"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-information__entry"
  }, /*#__PURE__*/React.createElement("h3", null, aboutTitle), /*#__PURE__*/React.createElement("p", null, about), copyright ? /*#__PURE__*/React.createElement("p", null, copyright) : null), /*#__PURE__*/React.createElement("div", {
    className: "footer-information__entry"
  }, /*#__PURE__*/React.createElement("h3", null, "Bleiben Sie informiert"), /*#__PURE__*/React.createElement("div", {
    className: "footer-information__social"
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.label,
    href: s.href || '#',
    className: "footer__link"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: "md",
    className: "footer-information__icon"
  }), s.label))), /*#__PURE__*/React.createElement(__ds_scope.Btn, {
    label: newsletterLabel,
    icon: "ArrowRight",
    iconPos: "right",
    variant: "outline-negative"
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer-information__entry footer-information__entry--big"
  }, /*#__PURE__*/React.createElement("h3", null, "Weitere Informationen"), /*#__PURE__*/React.createElement("div", {
    className: "footer-information__links"
  }, linkColumns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    className: "footer-information__links-column",
    key: i
  }, col.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "footer__link"
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ArrowRight",
    size: "md",
    className: "footer-information__icon"
  })))))))))), /*#__PURE__*/React.createElement("div", {
    className: "bg--secondary-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-navigation"
  }, bottomLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "footer__link",
    style: {
      padding: 0
    }
  }, l))))));
}
Object.assign(__ds_scope, { TopBar, TopHeader, DesktopMenu, Hero, Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-website/DetailScreen.jsx
try { (() => {
function DetailScreen({
  setPage
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    type: "default",
    meta: /*#__PURE__*/React.createElement(MetaInfo, {
      items: [{
        label: '12.03.2025',
        icon: 'Calendar'
      }, 'Medienmitteilung', {
        label: '4 Min. Lesezeit',
        icon: 'Clock'
      }]
    }),
    title: "Bundesrat verabschiedet Botschaft zur Stromversorgung",
    description: "Der Bundesrat hat an seiner Sitzung vom 12. M\xE4rz 2025 die Botschaft zur Revision des Stromversorgungsgesetzes verabschiedet und dem Parlament \xFCberwiesen."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container container--grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container__main vertical-spacing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/grid-example-2.png",
    alt: "Sitzung im Bundeshaus"
  }), /*#__PURE__*/React.createElement("figcaption", null, "Sitzung des Bundesrates im Bundeshaus West. Bild: Bundeskanzlei")), /*#__PURE__*/React.createElement("p", null, "Die Revision schafft die Grundlage f\xFCr eine h\xF6here Versorgungssicherheit im Winterhalbjahr. Sie vereinfacht Bewilligungsverfahren f\xFCr Anlagen von nationalem Interesse und verpflichtet die Netzbetreiber zu einer verbindlichen Reserveplanung."), /*#__PURE__*/React.createElement("h2", null, "Die wichtigsten \xC4nderungen"), /*#__PURE__*/React.createElement("ul", {
    className: "list--default"
  }, /*#__PURE__*/React.createElement("li", null, "Verbindliche Winterreserve f\xFCr Speicherkraftwerke"), /*#__PURE__*/React.createElement("li", null, "Verk\xFCrzte Fristen im Plangenehmigungsverfahren"), /*#__PURE__*/React.createElement("li", null, "Erweiterte Transparenzpflichten f\xFCr Netzbetreiber")), /*#__PURE__*/React.createElement("p", null, "Die Vorlage wurde in der Vernehmlassung von den Kantonen \xFCberwiegend begr\xFCsst. Kritisiert wurde vor allem der Umfang der Meldepflichten f\xFCr kleinere Verteilnetzbetreiber."), /*#__PURE__*/React.createElement(QuoteSection, {
    quote: "Eine sichere Versorgung und eine intakte Umwelt sind kein Widerspruch.",
    author: "Departementsvorsteherin",
    role: "UVEK"
  }), /*#__PURE__*/React.createElement("h2", null, "Zahlen im \xDCberblick"), /*#__PURE__*/React.createElement(Table, {
    caption: "Quelle: Bundesamt f\xFCr Energie, Statistik 2025",
    zebra: true,
    columns: [{
      key: 'j',
      label: 'Jahr'
    }, {
      key: 'p',
      label: 'Produktion (TWh)'
    }, {
      key: 'a',
      label: 'Anteil erneuerbar'
    }],
    rows: [{
      j: '2022',
      p: '57,0',
      a: '62 %'
    }, {
      j: '2023',
      p: '58,6',
      a: '66 %'
    }, {
      j: '2024',
      p: '60,2',
      a: '71 %'
    }]
  }), /*#__PURE__*/React.createElement("h2", null, "Dokumente"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DownloadItem, {
    title: "Botschaft zur Revision des Stromversorgungsgesetzes",
    format: "pdf",
    size: "1,2 MB",
    meta: ['12.03.2025']
  }), /*#__PURE__*/React.createElement(DownloadItem, {
    title: "Erl\xE4uternder Bericht",
    format: "pdf",
    size: "640 KB",
    meta: ['12.03.2025']
  }), /*#__PURE__*/React.createElement(DownloadItem, {
    title: "Auswertung der Vernehmlassung",
    format: "xlsx",
    size: "180 KB"
  })), /*#__PURE__*/React.createElement("h2", null, "Rechtliches"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoBlock, {
    title: "Rechtsgrundlage"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Art. 9 Abs. 2 des Stromversorgungsgesetzes (StromVG)")), /*#__PURE__*/React.createElement(InfoBlock, {
    title: "Zust\xE4ndigkeit"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Bundesamt f\xFCr Energie BFE, Sektion Netze")), /*#__PURE__*/React.createElement(InfoBlock, {
    title: "N\xE4chster Schritt"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Beratung in der Kommission f\xFCr Umwelt, Raumplanung und Energie"))), /*#__PURE__*/React.createElement(Authors, {
    authors: [{
      name: 'Kommunikationsdienst UVEK',
      role: 'Redaktion'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TagItem, {
    label: "Energie",
    size: "sm",
    href: "#"
  }), /*#__PURE__*/React.createElement(TagItem, {
    label: "Versorgungssicherheit",
    size: "sm",
    href: "#"
  }), /*#__PURE__*/React.createElement(TagItem, {
    label: "Gesetzgebung",
    size: "sm",
    href: "#"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container__aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h4"
  }, "Auf dieser Seite"), /*#__PURE__*/React.createElement("ul", {
    className: "list--bare",
    style: {
      display: 'grid',
      gap: '0.5rem'
    }
  }, ['Die wichtigsten Änderungen', 'Zahlen im Überblick', 'Dokumente', 'Rechtliches'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement(Contact, {
    title: "Medienkontakt",
    name: "Kommunikationsdienst UVEK",
    lines: ['Bundeshaus Nord', '3003 Bern'],
    phone: "+41 58 462 55 11",
    email: "medien@uvek.admin.ch"
  })), /*#__PURE__*/React.createElement(Notification, {
    type: "info",
    closeBtn: false,
    text: "Diese Mitteilung liegt auch in Franz\xF6sisch und Italienisch vor."
  }), /*#__PURE__*/React.createElement(Btn, {
    label: "Zur\xFCck zur \xDCbersicht",
    variant: "link",
    icon: "ArrowLeft",
    iconPos: "left",
    onClick: () => setPage('News')
  })))));
}
Object.assign(window, {
  DetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-website/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-website/FormScreen.jsx
try { (() => {
function FormScreen({
  setPage
}) {
  const [sent, setSent] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    type: "title-only",
    title: "Gesuch einreichen",
    description: "Reichen Sie Ihr Gesuch f\xFCr eine Anlage von nationalem Interesse elektronisch ein."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container container--grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container__center--sm"
  }, sent ? /*#__PURE__*/React.createElement(Notification, {
    type: "success",
    title: "Gesuch eingereicht",
    onClose: () => setSent(false),
    text: "Wir haben Ihr Gesuch erhalten. Sie erhalten innerhalb von f\xFCnf Arbeitstagen eine Best\xE4tigung mit Ihrer Referenznummer.",
    action: /*#__PURE__*/React.createElement(Btn, {
      label: "Neues Gesuch erfassen",
      variant: "link",
      icon: "ArrowRight",
      iconPos: "right",
      onClick: () => setSent(false)
    })
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, err ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(Notification, {
    type: "error",
    text: "Bitte pr\xFCfen Sie die markierten Felder.",
    onClose: () => setErr(false)
  })) : null, /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      setErr(false);
    }
  }, /*#__PURE__*/React.createElement(Fieldset, {
    legend: "Gesuchstellende Person"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__group__radio"
  }, /*#__PURE__*/React.createElement(Radio, {
    id: "g1",
    name: "typ",
    label: "Privatperson",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form__group__radio"
  }, /*#__PURE__*/React.createElement(Radio, {
    id: "g2",
    name: "typ",
    label: "Unternehmen"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form__group__radio"
  }, /*#__PURE__*/React.createElement(Radio, {
    id: "g3",
    name: "typ",
    label: "Gemeinde oder Kanton"
  }))), /*#__PURE__*/React.createElement(Input, {
    id: "name",
    label: "Name und Vorname",
    required: true,
    placeholder: "z. B. Muster Anna"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "mail",
    label: "E-Mail-Adresse",
    type: "email",
    required: true,
    placeholder: "name@beispiel.ch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid--responsive-cols-2"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "plz",
    label: "PLZ",
    required: true,
    defaultValue: "30001",
    message: err ? 'Bitte vierstellig eingeben.' : undefined,
    messageType: "error"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "ort",
    label: "Ort",
    required: true,
    placeholder: "Bern"
  })), /*#__PURE__*/React.createElement(Select, {
    id: "amt",
    label: "Zust\xE4ndiges Amt",
    required: true,
    placeholder: "Bitte w\xE4hlen",
    options: ['Bundesamt für Energie BFE', 'Bundesamt für Umwelt BAFU', 'Bundesamt für Verkehr BAV', 'Bundesamt für Kommunikation BAKOM']
  }), /*#__PURE__*/React.createElement(Textarea, {
    id: "txt",
    label: "Beschreibung des Vorhabens",
    rows: 5,
    required: true,
    placeholder: "Beschreiben Sie Standort, Umfang und Zeitplan."
  }), /*#__PURE__*/React.createElement(Input, {
    id: "file",
    label: "Unterlagen (PDF, max. 20 MB)",
    type: "file"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "agb",
    required: true,
    label: "Ich best\xE4tige die Richtigkeit der Angaben und akzeptiere die Nutzungsbedingungen."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    id: "copy",
    label: "Ich m\xF6chte eine Kopie der Eingabe per E-Mail erhalten.",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      paddingTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    label: "Gesuch einreichen",
    variant: "filled",
    type: "submit",
    icon: "ArrowRight",
    iconPos: "right"
  }), /*#__PURE__*/React.createElement(Btn, {
    label: "Zwischenspeichern",
    variant: "outline",
    onClick: () => setModal(true)
  }), /*#__PURE__*/React.createElement(Btn, {
    label: "Abbrechen",
    variant: "bare",
    onClick: () => setPage('Startseite')
  })), /*#__PURE__*/React.createElement("p", {
    className: "text--sm",
    style: {
      color: 'var(--text-light)'
    }
  }, "Mit ", /*#__PURE__*/React.createElement("span", {
    className: "text--asterisk"
  }), " markierte Felder sind Pflichtfelder. Zur Fehlerdemonstration ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setErr(true);
    }
  }, "Validierung ausl\xF6sen"), ".")))))), /*#__PURE__*/React.createElement(Modal, {
    open: modal,
    title: "Zwischenspeichern",
    onClose: () => setModal(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      label: "Abbrechen",
      variant: "bare",
      onClick: () => setModal(false)
    }), /*#__PURE__*/React.createElement(Btn, {
      label: "Speichern",
      variant: "filled",
      onClick: () => setModal(false)
    }))
  }, /*#__PURE__*/React.createElement("p", null, "Ihr Gesuch wird 30 Tage lang gespeichert. Sie erhalten einen Link, mit dem Sie die Eingabe fortsetzen k\xF6nnen."), /*#__PURE__*/React.createElement(Input, {
    id: "save-mail",
    label: "E-Mail-Adresse f\xFCr den Link",
    type: "email",
    placeholder: "name@beispiel.ch"
  })));
}
Object.assign(window, {
  FormScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-website/FormScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-website/HomeScreen.jsx
try { (() => {
const IMGS = ['../../assets/images/grid-example-1.png', '../../assets/images/grid-example-2.png', '../../assets/images/grid-example-3.png'];
function HomeScreen({
  setPage
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    type: "main",
    title: "Energie, Umwelt und Verkehr f\xFCr die Schweiz",
    description: "Aufgaben, Vernehmlassungen und Dienstleistungen des Departements \u2014 an einem Ort.",
    cta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      label: "Zu den Themen",
      variant: "filled",
      onClick: () => setPage('News')
    }), /*#__PURE__*/React.createElement(Btn, {
      label: "Publikationen bestellen",
      variant: "outline",
      onClick: () => setPage('Gesuch')
    }))
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Aktuell"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid--responsive-cols-3"
  }, [{
    t: 'Bundesrat verabschiedet Botschaft zur Stromversorgung',
    d: 'Die Vorlage stärkt die Versorgungssicherheit im Winter und beschleunigt Bewilligungsverfahren.',
    k: 'Medienmitteilung',
    dt: '12.03.2025'
  }, {
    t: 'Vernehmlassung zur Verordnung eröffnet',
    d: 'Kantone, Parteien und Verbände können bis zum 30. Juni 2025 Stellung nehmen.',
    k: 'Vernehmlassung',
    dt: '04.03.2025'
  }, {
    t: 'Neue Zahlen zum Güterverkehr durch die Alpen',
    d: 'Der Anteil der Schiene liegt erstmals seit 2019 wieder über 70 Prozent.',
    k: 'Statistik',
    dt: '27.02.2025'
  }].map((n, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    image: IMGS[i],
    href: "#",
    metaInfos: /*#__PURE__*/React.createElement(MetaInfo, {
      items: [{
        label: n.dt,
        icon: 'Calendar'
      }, n.k]
    }),
    title: n.t,
    description: n.d,
    footerAction: ARROW('Weiterlesen')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "section__action"
  }, /*#__PURE__*/React.createElement(Btn, {
    label: "Alle News ansehen",
    variant: "bare",
    icon: "ArrowRight",
    iconPos: "right",
    onClick: () => setPage('News')
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section bg--secondary-100 section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Unsere top Dienstleistungen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid--responsive-cols-3"
  }, [{
    t: 'Bewilligungen',
    d: 'Gesuche für Anlagen, Leitungen und Verkehrsinfrastruktur online einreichen und den Stand verfolgen.'
  }, {
    t: 'Datenbezug',
    d: 'Geodaten, Emissionsdaten und Verkehrszahlen als offene Datensätze herunterladen.'
  }, {
    t: 'Beratung und Koordination',
    d: 'Fachstellen der Kantone und Gemeinden erhalten Unterstützung bei der Umsetzung.'
  }].map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    type: "highlight",
    title: s.t,
    description: s.d,
    footerAction: ARROW(`Mehr lesen über ${s.t}`),
    href: "#"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "section__action"
  }, /*#__PURE__*/React.createElement(Btn, {
    label: "Alle Dienstleistungen ansehen",
    variant: "bare",
    icon: "ArrowRight",
    iconPos: "right",
    onClick: () => setPage('Dienstleistungen')
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Meist gesucht",
    subtitle: "Top Themen"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid--responsive-cols-4"
  }, ['Energiestrategie 2050', 'Lärmschutz', 'Bahn 2050', 'Kreislaufwirtschaft'].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    type: "default",
    title: t,
    description: "Grundlagen, Zahlen und laufende Gesch\xE4fte zum Thema.",
    footerAction: /*#__PURE__*/React.createElement(Btn, {
      label: "Weiterlesen",
      variant: "outline",
      icon: "ArrowUpRight",
      iconPos: "only"
    }),
    href: "#"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section bg--secondary-600 section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(QuoteSection, {
    quote: "Eine sichere Versorgung und eine intakte Umwelt sind kein Widerspruch.",
    author: "Departementsvorsteherin",
    role: "UVEK"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container container--grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      paddingBottom: '1.5rem'
    }
  }, "H\xE4ufige Fragen"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      title: 'Wie reiche ich ein Gesuch ein?',
      content: /*#__PURE__*/React.createElement("p", null, "Gesuche werden \xFCber das elektronische Portal eingereicht. Das Departement best\xE4tigt den Eingang innerhalb von f\xFCnf Arbeitstagen.")
    }, {
      title: 'Welche Fristen gelten für Vernehmlassungen?',
      content: /*#__PURE__*/React.createElement("p", null, "Die ordentliche Frist betr\xE4gt drei Monate. Bei dringlichen Vorlagen kann sie verk\xFCrzt werden.")
    }, {
      title: 'Wo finde ich offene Daten?',
      content: /*#__PURE__*/React.createElement("p", null, "Alle offenen Datens\xE4tze sind \xFCber opendata.swiss abrufbar.")
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "container__aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement(Contact, {
    title: "Kontakt",
    name: "Generalsekretariat UVEK",
    lines: ['Bundeshaus Nord', '3003 Bern'],
    phone: "+41 58 462 55 11",
    email: "info@uvek.admin.ch"
  })), /*#__PURE__*/React.createElement(Notification, {
    type: "hint",
    closeBtn: false,
    text: "Medienanfragen richten Sie bitte an den Kommunikationsdienst."
  })))));
}
Object.assign(window, {
  HomeScreen,
  IMGS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-website/NewsListScreen.jsx
try { (() => {
const NEWS = [{
  t: 'Bundesrat verabschiedet Botschaft zur Stromversorgung',
  d: 'Die Vorlage stärkt die Versorgungssicherheit im Winter und beschleunigt Bewilligungsverfahren für erneuerbare Anlagen.',
  k: 'Medienmitteilung',
  dt: '12.03.2025'
}, {
  t: 'Vernehmlassung zur Verordnung eröffnet',
  d: 'Kantone, Parteien und interessierte Kreise können bis zum 30. Juni 2025 Stellung nehmen.',
  k: 'Vernehmlassung',
  dt: '04.03.2025'
}, {
  t: 'Neue Zahlen zum Güterverkehr durch die Alpen',
  d: 'Der Anteil der Schiene liegt erstmals seit 2019 wieder über 70 Prozent.',
  k: 'Statistik',
  dt: '27.02.2025'
}, {
  t: 'Lärmschutz an Nationalstrassen: Zwischenbilanz',
  d: 'Rund 80 Prozent der geplanten Massnahmen sind umgesetzt oder in Ausführung.',
  k: 'Bericht',
  dt: '19.02.2025'
}, {
  t: 'Konsultation zur Kreislaufwirtschaft abgeschlossen',
  d: 'Über 200 Stellungnahmen sind eingegangen und werden nun ausgewertet.',
  k: 'Vernehmlassung',
  dt: '05.02.2025'
}];
function NewsListScreen({
  setPage
}) {
  const [page, setPage_] = React.useState(1);
  const [filters, setFilters] = React.useState(['Medienmitteilung']);
  const toggle = f => setFilters(p => p.includes(f) ? p.filter(x => x !== f) : [...p, f]);
  const visible = NEWS.filter(n => filters.length === 0 || filters.includes(n.k));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    type: "title-only",
    title: "News und Vernehmlassungen",
    description: "Medienmitteilungen, Berichte und laufende Vernehmlassungen des Departements."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section bg--secondary-50 section--py-half"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      alignItems: 'center'
    }
  }, ['Medienmitteilung', 'Vernehmlassung', 'Statistik', 'Bericht'].map(f => /*#__PURE__*/React.createElement(TagItem, {
    key: f,
    label: f,
    variant: filters.includes(f) ? 'primary' : 'default',
    icon: filters.includes(f) ? 'Cancel' : undefined,
    onClick: () => toggle(f)
  })), filters.length ? /*#__PURE__*/React.createElement(Btn, {
    label: "Filter zur\xFCcksetzen",
    variant: "bare",
    size: "sm",
    onClick: () => setFilters([])
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "search-results__header",
    style: {
      marginTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, visible.length, " Beitr\xE4ge"), " gefunden"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    id: "sort",
    label: "Sortierung",
    hideLabel: true,
    size: "sm",
    options: ['Neueste zuerst', 'Älteste zuerst', 'Relevanz']
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container container--grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container__main"
  }, visible.length === 0 ? /*#__PURE__*/React.createElement(Notification, {
    type: "info",
    closeBtn: false,
    text: "F\xFCr diese Auswahl liegen keine Beitr\xE4ge vor. Bitte passen Sie die Filter an."
  }) : visible.map((n, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    type: "flat",
    href: "#",
    metaInfos: /*#__PURE__*/React.createElement(MetaInfo, {
      items: [{
        label: n.dt,
        icon: 'Calendar'
      }, n.k]
    }),
    title: n.t,
    description: n.d,
    footerAction: /*#__PURE__*/React.createElement(Btn, {
      label: "Weiterlesen",
      variant: "link",
      icon: "ArrowRight",
      iconPos: "right",
      onClick: () => setPage('Detail')
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "pagination--right"
  }, /*#__PURE__*/React.createElement(Pagination, {
    currentPage: page,
    totalPages: 8,
    onChange: setPage_
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container__aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h4"
  }, "Newsletter"), /*#__PURE__*/React.createElement("p", {
    className: "text--sm"
  }, "Erhalten Sie alle Medienmitteilungen des Departements direkt per E-Mail."), /*#__PURE__*/React.createElement(Input, {
    id: "nl",
    label: "E-Mail-Adresse",
    type: "email",
    placeholder: "name@beispiel.ch"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    label: "Abonnieren",
    variant: "filled",
    icon: "ArrowRight",
    iconPos: "right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h4"
  }, "Themen"), /*#__PURE__*/React.createElement("ul", {
    className: "list--bare",
    style: {
      display: 'grid',
      gap: '0.5rem'
    }
  }, ['Energie', 'Verkehr', 'Umwelt', 'Kommunikation', 'Raumentwicklung'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, t)))))))));
}
Object.assign(window, {
  NewsListScreen,
  NEWS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-website/NewsListScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-website/SearchScreen.jsx
try { (() => {
const RESULTS = [{
  t: 'Stromversorgungsgesetz: Revision 2025',
  d: 'Botschaft, erläuternder Bericht und Auswertung der Vernehmlassung zur Revision des StromVG.',
  k: 'Dokument',
  dt: '12.03.2025'
}, {
  t: 'Bewilligung für Anlagen von nationalem Interesse',
  d: 'Ablauf, Fristen und einzureichende Unterlagen für das Plangenehmigungsverfahren.',
  k: 'Dienstleistung',
  dt: '02.03.2025'
}, {
  t: 'Energieperspektiven 2050+',
  d: 'Szenarien zur Entwicklung von Angebot und Nachfrage im schweizerischen Energiesystem.',
  k: 'Publikation',
  dt: '18.01.2025'
}, {
  t: 'Offene Daten: Stromproduktion pro Kanton',
  d: 'Jährlich aktualisierter Datensatz als CSV und JSON.',
  k: 'Daten',
  dt: '10.01.2025'
}];
function SearchScreen({
  setPage
}) {
  const [q, setQ] = React.useState('stromversorgung');
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "section bg--secondary-50 section--py-half"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h2",
    style: {
      marginBottom: '1.5rem'
    }
  }, "Suche"), /*#__PURE__*/React.createElement("div", {
    className: "search--page-result",
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(SearchField, {
    large: true,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Was suchen Sie?"
  })), /*#__PURE__*/React.createElement("div", {
    className: "search__filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search__filters__actions",
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    label: open ? 'Filter schliessen' : 'Filter anzeigen',
    variant: "outline",
    size: "sm",
    icon: "Filter",
    iconPos: "left",
    onClick: () => setOpen(!open)
  }), /*#__PURE__*/React.createElement(Btn, {
    label: "Suche zur\xFCcksetzen",
    variant: "bare",
    size: "sm",
    onClick: () => setQ('')
  })), open ? /*#__PURE__*/React.createElement("div", {
    className: "search__filters__drawer"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "f1",
    label: "Inhaltstyp",
    placeholder: "Alle",
    options: ['Dokument', 'Dienstleistung', 'Publikation', 'Daten']
  }), /*#__PURE__*/React.createElement(Select, {
    id: "f2",
    label: "Amt",
    placeholder: "Alle",
    options: ['BFE', 'BAFU', 'BAV', 'BAKOM']
  }), /*#__PURE__*/React.createElement(Select, {
    id: "f3",
    label: "Zeitraum",
    placeholder: "Alle",
    options: ['Letzte 30 Tage', 'Letzte 12 Monate', '2024', '2023']
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "search__filters__tags"
  }, /*#__PURE__*/React.createElement(TagItem, {
    label: "Energie",
    size: "sm",
    icon: "Cancel"
  }), /*#__PURE__*/React.createElement(TagItem, {
    label: "2025",
    size: "sm",
    icon: "Cancel"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-results__tabs",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultIndex: tab,
    tabs: [{
      label: `Alle (${RESULTS.length})`,
      content: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "search-results__header"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, RESULTS.length, " Treffer"), " f\xFCr \xAB", q || '…', "\xBB"), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 200
        }
      }, /*#__PURE__*/React.createElement(Select, {
        id: "s2",
        label: "Sortierung",
        hideLabel: true,
        size: "sm",
        options: ['Relevanz', 'Neueste zuerst']
      }))), RESULTS.map((r, i) => /*#__PURE__*/React.createElement(Card, {
        key: i,
        type: "flat",
        href: "#",
        metaInfos: /*#__PURE__*/React.createElement(MetaInfo, {
          items: [{
            label: r.dt,
            icon: 'Calendar'
          }, r.k]
        }),
        title: r.t,
        description: r.d,
        footerAction: /*#__PURE__*/React.createElement(Btn, {
          label: "\xD6ffnen",
          variant: "link",
          icon: "ArrowRight",
          iconPos: "right",
          onClick: () => setPage('Detail')
        })
      })), /*#__PURE__*/React.createElement("div", {
        className: "pagination--right"
      }, /*#__PURE__*/React.createElement(Pagination, {
        currentPage: 1,
        totalPages: 4,
        onChange: () => {}
      })))
    }, {
      label: 'Dokumente (1)',
      content: /*#__PURE__*/React.createElement(Notification, {
        type: "hint",
        closeBtn: false,
        text: "Ein Dokument entspricht der Suche. Wechseln Sie zu \xABAlle\xBB, um weitere Inhalte zu sehen."
      })
    }, {
      label: 'Dienstleistungen (1)',
      content: /*#__PURE__*/React.createElement(Notification, {
        type: "hint",
        closeBtn: false,
        text: "Eine Dienstleistung entspricht der Suche."
      })
    }, {
      label: 'Daten (1)',
      content: /*#__PURE__*/React.createElement(Notification, {
        type: "hint",
        closeBtn: false,
        text: "Ein Datensatz entspricht der Suche."
      })
    }]
  })))));
}
Object.assign(window, {
  SearchScreen,
  RESULTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-website/SearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-website/ServicesScreen.jsx
try { (() => {
const SERVICES = [{
  t: 'Bewilligungen und Gesuche',
  d: 'Gesuche für Anlagen, Leitungen und Verkehrsinfrastruktur elektronisch einreichen und den Verfahrensstand verfolgen.'
}, {
  t: 'Datenbezug',
  d: 'Geodaten, Emissionsdaten und Verkehrszahlen als offene Datensätze herunterladen — CSV, JSON und WMS.'
}, {
  t: 'Beratung und Koordination',
  d: 'Fachstellen von Kantonen und Gemeinden erhalten Unterstützung bei der Umsetzung von Bundesrecht.'
}, {
  t: 'Publikationen bestellen',
  d: 'Berichte, Broschüren und Karten kostenlos beziehen oder als PDF herunterladen.'
}, {
  t: 'Meldungen und Register',
  d: 'Meldepflichten erfüllen und Eintragungen in die Register des Departements vornehmen.'
}, {
  t: 'Vernehmlassungen',
  d: 'Laufende Vernehmlassungen einsehen und Stellungnahmen einreichen.'
}];
function ServicesScreen({
  setPage
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    type: "hub",
    title: "Unsere Dienstleistungen",
    description: "Alle Dienstleistungen des Departements f\xFCr Privatpersonen, Unternehmen sowie Kantone und Gemeinden \u2014 nach Aufgabe geordnet."
  }), /*#__PURE__*/React.createElement("section", {
    className: "section bg--secondary-100 section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid--responsive-cols-3"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    type: "highlight",
    title: s.t,
    description: s.d,
    href: "#",
    footerAction: /*#__PURE__*/React.createElement(Btn, {
      label: `Mehr lesen über ${s.t}`,
      variant: "outline",
      icon: "ArrowRight",
      iconPos: "only",
      onClick: () => setPage('Gesuch')
    })
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--py"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container container--grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container__main"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      paddingBottom: '1.5rem'
    }
  }, "Ablauf eines Gesuchs"), /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      step: 1,
      title: 'Unterlagen zusammenstellen',
      content: /*#__PURE__*/React.createElement("p", null, "Pr\xFCfen Sie die Checkliste f\xFCr Ihr Vorhaben. Unvollst\xE4ndige Gesuche verl\xE4ngern das Verfahren.")
    }, {
      step: 2,
      title: 'Elektronisch einreichen',
      content: /*#__PURE__*/React.createElement("p", null, "Reichen Sie das Gesuch \xFCber das Portal ein. Sie erhalten sofort eine Eingangsbest\xE4tigung mit Referenznummer.")
    }, {
      step: 3,
      title: 'Prüfung und Anhörung',
      content: /*#__PURE__*/React.createElement("p", null, "Das zust\xE4ndige Amt pr\xFCft das Gesuch und h\xF6rt betroffene Kantone und Gemeinden an.")
    }, {
      step: 4,
      title: 'Verfügung',
      content: /*#__PURE__*/React.createElement("p", null, "Sie erhalten die Verf\xFCgung schriftlich, in der Regel innerhalb von sechs Monaten.")
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    label: "Gesuch jetzt einreichen",
    variant: "filled",
    icon: "ArrowRight",
    iconPos: "right",
    onClick: () => setPage('Gesuch')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "container__aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "box"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h4"
  }, "Formulare und Checklisten"), /*#__PURE__*/React.createElement(DownloadItem, {
    title: "Checkliste Plangenehmigung",
    format: "pdf",
    size: "120 KB"
  }), /*#__PURE__*/React.createElement(DownloadItem, {
    title: "Formular Meldepflicht",
    format: "docx",
    size: "64 KB"
  }), /*#__PURE__*/React.createElement(DownloadItem, {
    title: "Geb\xFChrenverordnung",
    format: "pdf",
    size: "88 KB"
  })), /*#__PURE__*/React.createElement(Notification, {
    type: "hint",
    closeBtn: false,
    text: "F\xFCr Fragen zum Verfahren wenden Sie sich an das zust\xE4ndige Bundesamt."
  })))));
}
Object.assign(window, {
  ServicesScreen,
  SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-website/Shell.jsx
try { (() => {
const {
  Icon,
  Btn,
  Badge,
  TagItem,
  Card,
  MetaInfo,
  Accordion,
  Table,
  Tabs,
  DownloadItem,
  InfoBlock,
  QuoteSection,
  Contact,
  Notification,
  AlertBanner,
  NotificationBanner,
  Modal,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Fieldset,
  SearchField,
  MainNavigation,
  MetaNavigation,
  Breadcrumb,
  Pagination,
  LanguageSwitcher,
  Hero,
  TopBar,
  TopHeader,
  DesktopMenu,
  Footer,
  Separator,
  ImageNotAvailable,
  Authors
} = window.SwissConfederationDesignSystem_8f53ab;
const NAV = ['Startseite', 'News', 'Dienstleistungen', 'Gesuch', 'Suche'];
const ACTIVE = {
  Startseite: 0,
  News: 1,
  Detail: 1,
  Dienstleistungen: 2,
  Gesuch: 3,
  Suche: 4
};
const DEPT = 'Eidgenössisches Departement für Umwelt, Verkehr,<br/>Energie und Kommunikation';
function Shell({
  page,
  setPage,
  crumbs,
  children,
  banner
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: "#main-content",
    className: "skip-to-content"
  }, "Direkt zum Inhalt"), /*#__PURE__*/React.createElement("header", {
    id: "main-header"
  }, banner, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(TopHeader, {
    title: DEPT,
    acronym: "UVEK",
    metaItems: [{
      label: 'Kontakt',
      icon: 'Envelope'
    }, 'Barrierefreiheit', {
      label: 'Login',
      icon: 'Login'
    }]
  }), /*#__PURE__*/React.createElement(DesktopMenu, {
    items: NAV,
    activeIndex: ACTIVE[page] ?? -1,
    onSelect: i => setPage(NAV[i])
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    items: crumbs
  })), /*#__PURE__*/React.createElement("main", {
    id: "main-content"
  }, children), /*#__PURE__*/React.createElement(Footer, {
    aboutTitle: "\xDCber das Departement",
    about: "Das UVEK gestaltet die Rahmenbedingungen f\xFCr eine sichere Versorgung, eine leistungsf\xE4hige Infrastruktur und eine intakte Umwelt.",
    copyright: "\xA9 Schweizerische Eidgenossenschaft",
    socials: [{
      label: 'Facebook',
      icon: 'Facebook'
    }, {
      label: 'LinkedIn',
      icon: 'LinkedIn'
    }, {
      label: 'Youtube',
      icon: 'Youtube'
    }, {
      label: 'RSS',
      icon: 'RSS'
    }],
    linkColumns: [['Über uns', 'Offene Stellen', 'Kontakt'], ['Medien', 'Barrierefreiheit', 'Impressum']]
  }));
}
function SectionHead({
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("h3", {
    className: "section__subtitle"
  }, subtitle) : null);
}
const ARROW = label => /*#__PURE__*/React.createElement(Btn, {
  label: label,
  variant: "outline",
  icon: "ArrowRight",
  iconPos: "only"
});
Object.assign(window, {
  Shell,
  SectionHead,
  ARROW,
  NAV,
  ACTIVE,
  DEPT,
  Icon,
  Btn,
  Badge,
  TagItem,
  Card,
  MetaInfo,
  Accordion,
  Table,
  Tabs,
  DownloadItem,
  InfoBlock,
  QuoteSection,
  Contact,
  Notification,
  AlertBanner,
  NotificationBanner,
  Modal,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Fieldset,
  SearchField,
  MainNavigation,
  MetaNavigation,
  Breadcrumb,
  Pagination,
  LanguageSwitcher,
  Hero,
  TopBar,
  TopHeader,
  DesktopMenu,
  Footer,
  Separator,
  ImageNotAvailable,
  Authors
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-website/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DownloadItem = __ds_scope.DownloadItem;

__ds_ns.InfoBlock = __ds_scope.InfoBlock;

__ds_ns.MetaInfo = __ds_scope.MetaInfo;

__ds_ns.Authors = __ds_scope.Authors;

__ds_ns.Contact = __ds_scope.Contact;

__ds_ns.ImageNotAvailable = __ds_scope.ImageNotAvailable;

__ds_ns.QuoteSection = __ds_scope.QuoteSection;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Btn = __ds_scope.Btn;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

__ds_ns.Burger = __ds_scope.Burger;

__ds_ns.BackToTopBtn = __ds_scope.BackToTopBtn;

__ds_ns.TagItem = __ds_scope.TagItem;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.AlertBanner = __ds_scope.AlertBanner;

__ds_ns.NotificationBanner = __ds_scope.NotificationBanner;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ToastMessage = __ds_scope.ToastMessage;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Fieldset = __ds_scope.Fieldset;

__ds_ns.SearchField = __ds_scope.SearchField;

__ds_ns.MainNavigation = __ds_scope.MainNavigation;

__ds_ns.MetaNavigation = __ds_scope.MetaNavigation;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.LanguageSwitcher = __ds_scope.LanguageSwitcher;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.TopHeader = __ds_scope.TopHeader;

__ds_ns.DesktopMenu = __ds_scope.DesktopMenu;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Footer = __ds_scope.Footer;

})();
