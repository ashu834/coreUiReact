(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[45],{503:function(e,t,a){"use strict";var n=a(19),s=a(49),i=a(493),o=a(2),r=a.n(o),l=a(61),c=a.n(l),p=a(489),h=a.n(p),u=a(502),d=a(490),m=Object(i.a)({},u.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:d.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),f=Object(i.a)({},u.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,i=e.baseClassActive,o=e.className,l=e.cssModule,c=e.children,p=e.innerRef,m=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(d.o)(m,d.c),g=Object(d.n)(m,d.c);return r.a.createElement(u.Transition,f,(function(e){var s="entered"===e,u=Object(d.m)(h()(o,a,s&&i),l);return r.a.createElement(t,Object(n.a)({className:u},g,{ref:p}),c)}))}g.propTypes=m,g.defaultProps=f,t.a=g},555:function(e,t,a){"use strict";a.d(t,"b",(function(){return j}));var n=a(19),s=a(491),i=a(30),o=a(2),r=a.n(o),l=a(61),c=a.n(l),p=a(49),h=a(493),u=a(156),d=a.n(u),m=a(489),f=a.n(m),g=a(738),b=a(490),v=a(503);var O={children:c.a.node.isRequired,popperClassName:c.a.string,placement:c.a.string,placementPrefix:c.a.string,arrowClassName:c.a.string,hideArrow:c.a.bool,tag:b.q,isOpen:c.a.bool.isRequired,cssModule:c.a.object,offset:c.a.oneOfType([c.a.string,c.a.number]),fallbackPlacement:c.a.oneOfType([c.a.string,c.a.array]),flip:c.a.bool,container:b.r,target:b.r.isRequired,modifiers:c.a.object,boundariesElement:c.a.oneOfType([c.a.string,b.a]),onClosed:c.a.func,fade:c.a.bool,transition:c.a.shape(v.a.propTypes)},T={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{},onClosed:function(){},fade:!0,transition:Object(h.a)({},v.a.defaultProps)},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).setTargetNode=a.setTargetNode.bind(Object(s.a)(a)),a.getTargetNode=a.getTargetNode.bind(Object(s.a)(a)),a.getRef=a.getRef.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.state={isOpen:t.isOpen},a}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null};var a=t.prototype;return a.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},a.setTargetNode=function(e){this.targetNode="string"===typeof e?Object(b.j)(e):e},a.getTargetNode=function(){return this.targetNode},a.getContainerNode=function(){return Object(b.j)(this.props.container)},a.getRef=function(e){this._element=e},a.onClosed=function(){this.props.onClosed(),this.setState({isOpen:!1})},a.renderChildren=function(){var e=this.props,t=e.cssModule,a=e.children,s=e.isOpen,i=e.flip,o=(e.target,e.offset),l=e.fallbackPlacement,c=e.placementPrefix,u=e.arrowClassName,d=e.hideArrow,m=e.popperClassName,O=e.tag,T=(e.container,e.modifiers),E=e.boundariesElement,y=(e.onClosed,e.fade),j=e.transition,C=e.placement,N=Object(p.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","popperClassName","tag","container","modifiers","boundariesElement","onClosed","fade","transition","placement"]),w=Object(b.m)(f()("arrow",u),t),P=Object(b.m)(f()(m,c?c+"-auto":""),this.props.cssModule),_=Object(h.a)({offset:{offset:o},flip:{enabled:i,behavior:l},preventOverflow:{boundariesElement:E}},T),D=Object(h.a)({},v.a.defaultProps,{},j,{baseClass:y?j.baseClass:"",timeout:y?j.timeout:0});return r.a.createElement(v.a,Object(n.a)({},D,N,{in:s,onExited:this.onClosed,tag:O}),r.a.createElement(g.a,{referenceElement:this.targetNode,modifiers:_,placement:C},(function(e){var t=e.ref,n=e.style,s=e.placement,i=e.arrowProps;return r.a.createElement("div",{ref:t,style:n,className:P,"x-placement":s},a,!d&&r.a.createElement("span",{ref:i.ref,className:w,style:i.style}))})))},a.render=function(){return this.setTargetNode(this.props.target),this.state.isOpen?"inline"===this.props.container?this.renderChildren():d.a.createPortal(r.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(r.a.Component);E.propTypes=O,E.defaultProps=T;var y=E,j={placement:c.a.oneOf(b.b),target:b.r.isRequired,container:b.r,isOpen:c.a.bool,disabled:c.a.bool,hideArrow:c.a.bool,boundariesElement:c.a.oneOfType([c.a.string,b.a]),className:c.a.string,innerClassName:c.a.string,arrowClassName:c.a.string,popperClassName:c.a.string,cssModule:c.a.object,toggle:c.a.func,autohide:c.a.bool,placementPrefix:c.a.string,delay:c.a.oneOfType([c.a.shape({show:c.a.number,hide:c.a.number}),c.a.number]),modifiers:c.a.object,offset:c.a.oneOfType([c.a.string,c.a.number]),innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object]),trigger:c.a.string,fade:c.a.bool,flip:c.a.bool},C={show:0,hide:50},N={isOpen:!1,hideArrow:!1,autohide:!1,delay:C,toggle:function(){},trigger:"click",fade:!0};function w(e,t){return t&&(e===t||t.contains(e))}function P(e,t){return void 0===t&&(t=[]),t&&t.length&&t.find((function(t){return w(e,t)}))}var _=function(e){function t(t){var a;return(a=e.call(this,t)||this)._targets=[],a.currentTargetElement=null,a.addTargetEvents=a.addTargetEvents.bind(Object(s.a)(a)),a.handleDocumentClick=a.handleDocumentClick.bind(Object(s.a)(a)),a.removeTargetEvents=a.removeTargetEvents.bind(Object(s.a)(a)),a.toggle=a.toggle.bind(Object(s.a)(a)),a.showWithDelay=a.showWithDelay.bind(Object(s.a)(a)),a.hideWithDelay=a.hideWithDelay.bind(Object(s.a)(a)),a.onMouseOverTooltipContent=a.onMouseOverTooltipContent.bind(Object(s.a)(a)),a.onMouseLeaveTooltipContent=a.onMouseLeaveTooltipContent.bind(Object(s.a)(a)),a.show=a.show.bind(Object(s.a)(a)),a.hide=a.hide.bind(Object(s.a)(a)),a.onEscKeyDown=a.onEscKeyDown.bind(Object(s.a)(a)),a.getRef=a.getRef.bind(Object(s.a)(a)),a.state={isOpen:t.isOpen},a._isMounted=!1,a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this._isMounted=!0,this.updateTarget()},a.componentWillUnmount=function(){this._isMounted=!1,this.removeTargetEvents(),this._targets=null,this.clearShowTimeout(),this.clearHideTimeout()},t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null},a.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._hideTimeout&&this.clearHideTimeout(),this.state.isOpen&&!this.props.isOpen&&this.toggle())},a.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},a.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},a.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},a.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?C[e]:t[e]:t},a.show=function(e){if(!this.props.isOpen){if(this.clearShowTimeout(),this.currentTargetElement=e?e.currentTarget||e.target:null,e&&e.composedPath&&"function"===typeof e.composedPath){var t=e.composedPath();this.currentTargetElement=t&&t[0]||this.currentTargetElement}this.toggle(e)}},a.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},a.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.currentTargetElement=null,this.toggle(e))},a.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},a.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},a.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},a.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||P(e.target,this._targets))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!w(e.target,this._popover)?this.hideWithDelay(e):this.props.isOpen||this.showWithDelay(e)):t.indexOf("click")>-1&&P(e.target,this._targets)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},a.addEventOnTargets=function(e,t,a){this._targets.forEach((function(n){n.addEventListener(e,t,a)}))},a.removeEventOnTargets=function(e,t,a){this._targets.forEach((function(n){n.removeEventListener(e,t,a)}))},a.addTargetEvents=function(){if(this.props.trigger){var e=this.props.trigger.split(" ");-1===e.indexOf("manual")&&((e.indexOf("click")>-1||e.indexOf("legacy")>-1)&&document.addEventListener("click",this.handleDocumentClick,!0),this._targets&&this._targets.length&&(e.indexOf("hover")>-1&&(this.addEventOnTargets("mouseover",this.showWithDelay,!0),this.addEventOnTargets("mouseout",this.hideWithDelay,!0)),e.indexOf("focus")>-1&&(this.addEventOnTargets("focusin",this.show,!0),this.addEventOnTargets("focusout",this.hide,!0)),this.addEventOnTargets("keydown",this.onEscKeyDown,!0)))}},a.removeTargetEvents=function(){this._targets&&(this.removeEventOnTargets("mouseover",this.showWithDelay,!0),this.removeEventOnTargets("mouseout",this.hideWithDelay,!0),this.removeEventOnTargets("keydown",this.onEscKeyDown,!0),this.removeEventOnTargets("focusin",this.show,!0),this.removeEventOnTargets("focusout",this.hide,!0)),document.removeEventListener("click",this.handleDocumentClick,!0)},a.updateTarget=function(){var e=Object(b.j)(this.props.target,!0);e!==this._targets&&(this.removeTargetEvents(),this._targets=e?Array.from(e):[],this.currentTargetElement=this.currentTargetElement||this._targets[0],this.addTargetEvents())},a.toggle=function(e){return this.props.disabled||!this._isMounted?e&&e.preventDefault():this.props.toggle(e)},a.render=function(){if(!this.props.isOpen)return null;this.updateTarget();var e=this.props,t=e.className,a=e.cssModule,s=e.innerClassName,i=e.isOpen,o=e.hideArrow,l=e.boundariesElement,c=e.placement,p=e.placementPrefix,h=e.arrowClassName,u=e.popperClassName,d=e.container,m=e.modifiers,f=e.offset,g=e.fade,v=e.flip,O=Object(b.n)(this.props,Object.keys(j)),T=Object(b.m)(u,a),E=Object(b.m)(s,a);return r.a.createElement(y,{className:t,target:this.currentTargetElement||this._targets[0],isOpen:i,hideArrow:o,boundariesElement:l,placement:c,placementPrefix:p,arrowClassName:h,popperClassName:T,container:d,modifiers:m,offset:f,cssModule:a,fade:g,flip:v},r.a.createElement("div",Object(n.a)({},O,{ref:this.getRef,className:E,role:"tooltip",onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})))},t}(r.a.Component);_.propTypes=j,_.defaultProps=N;t.a=_},775:function(e,t,a){"use strict";a.r(t);var n=a(151),s=a(152),i=a(155),o=a(154),r=a(153),l=a(2),c=a.n(l),p=a(501),h=a(19),u=a(489),d=a.n(u),m=a(555),f=function(e){var t=d()("popover","show",e.popperClassName),a=d()("popover-inner",e.innerClassName);return c.a.createElement(m.a,Object(h.a)({},e,{popperClassName:t,innerClassName:a}))};f.propTypes=m.b,f.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var g=f,b=a(49),v=a(61),O=a.n(v),T=a(490),E={tag:T.q,className:O.a.string,cssModule:O.a.object},y=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(b.a)(e,["className","cssModule","tag"]),i=Object(T.m)(d()(t,"popover-header"),a);return c.a.createElement(n,Object(h.a)({},s,{className:i}))};y.propTypes=E,y.defaultProps={tag:"h3"};var j=y,C={tag:T.q,className:O.a.string,cssModule:O.a.object},N=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(b.a)(e,["className","cssModule","tag"]),i=Object(T.m)(d()(t,"popover-body"),a);return c.a.createElement(n,Object(h.a)({},s,{className:i}))};N.propTypes=C,N.defaultProps={tag:"div"};var w=N,P=a(497),_=a(499),D=a(498),M=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).toggle=s.toggle.bind(Object(i.a)(s)),s.state={popoverOpen:!1},s}return Object(s.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return c.a.createElement("span",null,c.a.createElement(p.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),c.a.createElement(g,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle,trigger:"legacy",delay:0},c.a.createElement(j,null,"Popover Title"),c.a.createElement(w,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),a}(l.Component),k=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).toggle=s.toggle.bind(Object(i.a)(s)),s.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},s}return Object(s.a)(a,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(P.a,null,c.a.createElement(_.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Popovers"),c.a.createElement("div",{className:"card-header-actions"},c.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},c.a.createElement("small",{className:"text-muted"},"docs")))),c.a.createElement(D.a,null,c.a.createElement(p.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),c.a.createElement(g,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},c.a.createElement(j,null,"Popover Title"),c.a.createElement(w,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),c.a.createElement(P.a,null,c.a.createElement(_.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Popovers"),c.a.createElement("small",null," list")),c.a.createElement(D.a,null,this.state.popovers.map((function(e,t){return c.a.createElement(M,{key:t,item:e,id:t})})))))}}]),a}(l.Component);t.default=k}}]);
//# sourceMappingURL=45.ac115964.chunk.js.map