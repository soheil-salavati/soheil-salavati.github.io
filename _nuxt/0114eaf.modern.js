(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1827:function(e,t,n){var s=n(145),i=n(1892),o=n(1893),r=Math.max,c=Math.min;e.exports=function(e,t,n){var a,h,u,d,f,l,_=0,p=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=a,s=h;return a=h=void 0,_=t,d=e.apply(s,n)}function y(e){return _=e,f=setTimeout(I,t),p?m(e):d}function w(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-_>=u}function I(){var e=i();if(w(e))return E(e);f=setTimeout(I,function(e){var n=t-(e-l);return g?c(n,u-(e-_)):n}(e))}function E(e){return f=void 0,v&&a?m(e):(a=h=void 0,d)}function M(){var e=i(),n=w(e);if(a=arguments,h=this,l=e,n){if(void 0===f)return y(l);if(g)return clearTimeout(f),f=setTimeout(I,t),m(l)}return void 0===f&&(f=setTimeout(I,t)),d}return t=o(t)||0,s(n)&&(p=!!n.leading,u=(g="maxWait"in n)?r(o(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),M.cancel=function(){void 0!==f&&clearTimeout(f),_=0,a=l=h=f=void 0},M.flush=function(){return void 0===f?d:E(i())},M}},1892:function(e,t,n){var s=n(103);e.exports=function(){return s.Date.now()}},1893:function(e,t,n){var s=n(1894),i=n(145),o=n(251),r=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^0o[0-7]+$/i,h=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var n=c.test(e);return n||a.test(e)?h(e.slice(2),n?2:8):r.test(e)?NaN:+e}},1894:function(e,t,n){var s=n(1895),i=/^\s+/;e.exports=function(e){return e?e.slice(0,s(e)+1).replace(i,""):e}},1895:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},2199:function(e,t,n){(function(t){var n;n=function(){var e=function(e){var t,n=e.localStorage||(t={},{setItem:function(e,n){t[e]=n},getItem:function(e){return t[e]},removeItem:function(e){delete t[e]}}),s=1,i=2,o=3,r=4,c=5,a=6,h=7,u=8,d=9,f=10,l=11,_=12,p=13,g=14,v=function(e,t){for(var n in e)if(e.hasOwnProperty(n)){if(!t.hasOwnProperty(n)){var s="Unknown property, "+n+". Valid properties are:";for(var i in t)t.hasOwnProperty(i)&&(s=s+" "+i);throw new Error(s)}if(typeof e[n]!==t[n])throw new Error(I(y.INVALID_TYPE,[typeof e[n],n]))}},m=function(e,t){return function(){return e.apply(t,arguments)}},y={OK:{code:0,text:"AMQJSC0000I OK."},CONNECT_TIMEOUT:{code:1,text:"AMQJSC0001E Connect timed out."},SUBSCRIBE_TIMEOUT:{code:2,text:"AMQJS0002E Subscribe timed out."},UNSUBSCRIBE_TIMEOUT:{code:3,text:"AMQJS0003E Unsubscribe timed out."},PING_TIMEOUT:{code:4,text:"AMQJS0004E Ping timed out."},INTERNAL_ERROR:{code:5,text:"AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}"},CONNACK_RETURNCODE:{code:6,text:"AMQJS0006E Bad Connack return code:{0} {1}."},SOCKET_ERROR:{code:7,text:"AMQJS0007E Socket error:{0}."},SOCKET_CLOSE:{code:8,text:"AMQJS0008I Socket closed."},MALFORMED_UTF:{code:9,text:"AMQJS0009E Malformed UTF data:{0} {1} {2}."},UNSUPPORTED:{code:10,text:"AMQJS0010E {0} is not supported by this browser."},INVALID_STATE:{code:11,text:"AMQJS0011E Invalid state {0}."},INVALID_TYPE:{code:12,text:"AMQJS0012E Invalid type {0} for {1}."},INVALID_ARGUMENT:{code:13,text:"AMQJS0013E Invalid argument {0} for {1}."},UNSUPPORTED_OPERATION:{code:14,text:"AMQJS0014E Unsupported operation."},INVALID_STORED_DATA:{code:15,text:"AMQJS0015E Invalid data in local storage key={0} value={1}."},INVALID_MQTT_MESSAGE_TYPE:{code:16,text:"AMQJS0016E Invalid MQTT message type {0}."},MALFORMED_UNICODE:{code:17,text:"AMQJS0017E Malformed Unicode string:{0} {1}."},BUFFER_FULL:{code:18,text:"AMQJS0018E Message buffer is full, maximum buffer size: {0}."}},w={0:"Connection Accepted",1:"Connection Refused: unacceptable protocol version",2:"Connection Refused: identifier rejected",3:"Connection Refused: server unavailable",4:"Connection Refused: bad user name or password",5:"Connection Refused: not authorized"},I=function(e,t){var n=e.text;if(t)for(var s,i,o=0;o<t.length;o++)if(s="{"+o+"}",(i=n.indexOf(s))>0){var r=n.substring(0,i),c=n.substring(i+s.length);n=r+t[o]+c}return n},E=[0,6,77,81,73,115,100,112,3],M=[0,4,77,81,84,84,4],A=function(e,t){for(var n in this.type=e,t)t.hasOwnProperty(n)&&(this[n]=t[n])};function T(e,t){var n,s=t,u=e[t],f=u>>4,_=u&=15;t+=1;var p=0,g=1;do{if(t==e.length)return[null,s];p+=(127&(n=e[t++]))*g,g*=128}while(0!=(128&n));var v=t+p;if(v>e.length)return[null,s];var m=new A(f);switch(f){case i:1&e[t++]&&(m.sessionPresent=!0),m.returnCode=e[t++];break;case o:var y=_>>1&3,w=b(e,t),I=R(e,t+=2,w);t+=w,y>0&&(m.messageIdentifier=b(e,t),t+=2);var E=new L(e.subarray(t,v));1==(1&_)&&(E.retained=!0),8==(8&_)&&(E.duplicate=!0),E.qos=y,E.destinationName=I,m.payloadMessage=E;break;case r:case c:case a:case h:case l:m.messageIdentifier=b(e,t);break;case d:m.messageIdentifier=b(e,t),t+=2,m.returnCode=e.subarray(t,v)}return[m,v]}function N(e,t,n){return t[n++]=e>>8,t[n++]=e%256,n}function O(e,t,n,s){return C(e,n,s=N(t,n,s)),s+t}function b(e,t){return 256*e[t]+e[t+1]}function S(e){for(var t=0,n=0;n<e.length;n++){var s=e.charCodeAt(n);s>2047?(55296<=s&&s<=56319&&(n++,t++),t+=3):s>127?t+=2:t++}return t}function C(e,t,n){for(var s=n,i=0;i<e.length;i++){var o=e.charCodeAt(i);if(55296<=o&&o<=56319){var r=e.charCodeAt(++i);if(isNaN(r))throw new Error(I(y.MALFORMED_UNICODE,[o,r]));o=r-56320+(o-55296<<10)+65536}o<=127?t[s++]=o:o<=2047?(t[s++]=o>>6&31|192,t[s++]=63&o|128):o<=65535?(t[s++]=o>>12&15|224,t[s++]=o>>6&63|128,t[s++]=63&o|128):(t[s++]=o>>18&7|240,t[s++]=o>>12&63|128,t[s++]=o>>6&63|128,t[s++]=63&o|128)}return t}function R(e,t,n){for(var s,i="",o=t;o<t+n;){var r=e[o++];if(r<128)s=r;else{var c=e[o++]-128;if(c<0)throw new Error(I(y.MALFORMED_UTF,[r.toString(16),c.toString(16),""]));if(r<224)s=64*(r-192)+c;else{var a=e[o++]-128;if(a<0)throw new Error(I(y.MALFORMED_UTF,[r.toString(16),c.toString(16),a.toString(16)]));if(r<240)s=4096*(r-224)+64*c+a;else{var h=e[o++]-128;if(h<0)throw new Error(I(y.MALFORMED_UTF,[r.toString(16),c.toString(16),a.toString(16),h.toString(16)]));if(!(r<248))throw new Error(I(y.MALFORMED_UTF,[r.toString(16),c.toString(16),a.toString(16),h.toString(16)]));s=262144*(r-240)+4096*c+64*a+h}}}s>65535&&(s-=65536,i+=String.fromCharCode(55296+(s>>10)),s=56320+(1023&s)),i+=String.fromCharCode(s)}return i}A.prototype.encode=function(){var e,t=(15&this.type)<<4,n=0,i=[],r=0;switch(void 0!==this.messageIdentifier&&(n+=2),this.type){case s:switch(this.mqttVersion){case 3:n+=E.length+3;break;case 4:n+=M.length+3}n+=S(this.clientId)+2,void 0!==this.willMessage&&(n+=S(this.willMessage.destinationName)+2,(e=this.willMessage.payloadBytes)instanceof Uint8Array||(e=new Uint8Array(h)),n+=e.byteLength+2),void 0!==this.userName&&(n+=S(this.userName)+2),void 0!==this.password&&(n+=S(this.password)+2);break;case u:t|=2;for(var c=0;c<this.topics.length;c++)i[c]=S(this.topics[c]),n+=i[c]+2;n+=this.requestedQos.length;break;case f:for(t|=2,c=0;c<this.topics.length;c++)i[c]=S(this.topics[c]),n+=i[c]+2;break;case a:t|=2;break;case o:this.payloadMessage.duplicate&&(t|=8),t=t|=this.payloadMessage.qos<<1,this.payloadMessage.retained&&(t|=1),n+=(r=S(this.payloadMessage.destinationName))+2;var h=this.payloadMessage.payloadBytes;n+=h.byteLength,h instanceof ArrayBuffer?h=new Uint8Array(h):h instanceof Uint8Array||(h=new Uint8Array(h.buffer))}var d=function(e){var t=new Array(1),n=0;do{var s=e%128;(e>>=7)>0&&(s|=128),t[n++]=s}while(e>0&&n<4);return t}(n),l=d.length+1,_=new ArrayBuffer(n+l),p=new Uint8Array(_);if(p[0]=t,p.set(d,1),this.type==o)l=O(this.payloadMessage.destinationName,r,p,l);else if(this.type==s){switch(this.mqttVersion){case 3:p.set(E,l),l+=E.length;break;case 4:p.set(M,l),l+=M.length}var g=0;this.cleanSession&&(g=2),void 0!==this.willMessage&&(g|=4,g|=this.willMessage.qos<<3,this.willMessage.retained&&(g|=32)),void 0!==this.userName&&(g|=128),void 0!==this.password&&(g|=64),p[l++]=g,l=N(this.keepAliveInterval,p,l)}switch(void 0!==this.messageIdentifier&&(l=N(this.messageIdentifier,p,l)),this.type){case s:l=O(this.clientId,S(this.clientId),p,l),void 0!==this.willMessage&&(l=O(this.willMessage.destinationName,S(this.willMessage.destinationName),p,l),l=N(e.byteLength,p,l),p.set(e,l),l+=e.byteLength),void 0!==this.userName&&(l=O(this.userName,S(this.userName),p,l)),void 0!==this.password&&(l=O(this.password,S(this.password),p,l));break;case o:p.set(h,l);break;case u:for(c=0;c<this.topics.length;c++)l=O(this.topics[c],i[c],p,l),p[l++]=this.requestedQos[c];break;case f:for(c=0;c<this.topics.length;c++)l=O(this.topics[c],i[c],p,l)}return _};var k=function(e,t){this._client=e,this._keepAliveInterval=1e3*t,this.isReset=!1;var n=new A(_).encode(),s=function(e){return function(){return i.apply(e)}},i=function(){this.isReset?(this.isReset=!1,this._client._trace("Pinger.doPing","send PINGREQ"),this._client.socket.send(n),this.timeout=setTimeout(s(this),this._keepAliveInterval)):(this._client._trace("Pinger.doPing","Timed out"),this._client._disconnected(y.PING_TIMEOUT.code,I(y.PING_TIMEOUT)))};this.reset=function(){this.isReset=!0,clearTimeout(this.timeout),this._keepAliveInterval>0&&(this.timeout=setTimeout(s(this),this._keepAliveInterval))},this.cancel=function(){clearTimeout(this.timeout)}},D=function(e,t,n,s){t||(t=30),this.timeout=setTimeout(function(e,t,n){return function(){return e.apply(t,n)}}(n,e,s),1e3*t),this.cancel=function(){clearTimeout(this.timeout)}},U=function(t,s,i,o,r){if(!("WebSocket"in e)||null===e.WebSocket)throw new Error(I(y.UNSUPPORTED,["WebSocket"]));if(!("ArrayBuffer"in e)||null===e.ArrayBuffer)throw new Error(I(y.UNSUPPORTED,["ArrayBuffer"]));for(var c in this._trace("Paho.Client",t,s,i,o,r),this.host=s,this.port=i,this.path=o,this.uri=t,this.clientId=r,this._wsuri=null,this._localKey=s+":"+i+("/mqtt"!=o?":"+o:"")+":"+r+":",this._msg_queue=[],this._buffered_msg_queue=[],this._sentMessages={},this._receivedMessages={},this._notify_msg_sent={},this._message_identifier=1,this._sequence=0,n)0!==c.indexOf("Sent:"+this._localKey)&&0!==c.indexOf("Received:"+this._localKey)||this.restore(c)};U.prototype.host=null,U.prototype.port=null,U.prototype.path=null,U.prototype.uri=null,U.prototype.clientId=null,U.prototype.socket=null,U.prototype.connected=!1,U.prototype.maxMessageIdentifier=65536,U.prototype.connectOptions=null,U.prototype.hostIndex=null,U.prototype.onConnected=null,U.prototype.onConnectionLost=null,U.prototype.onMessageDelivered=null,U.prototype.onMessageArrived=null,U.prototype.traceFunction=null,U.prototype._msg_queue=null,U.prototype._buffered_msg_queue=null,U.prototype._connectTimeout=null,U.prototype.sendPinger=null,U.prototype.receivePinger=null,U.prototype._reconnectInterval=1,U.prototype._reconnecting=!1,U.prototype._reconnectTimeout=null,U.prototype.disconnectedPublishing=!1,U.prototype.disconnectedBufferSize=5e3,U.prototype.receiveBuffer=null,U.prototype._traceBuffer=null,U.prototype._MAX_TRACE_ENTRIES=100,U.prototype.connect=function(e){var t=this._traceMask(e,"password");if(this._trace("Client.connect",t,this.socket,this.connected),this.connected)throw new Error(I(y.INVALID_STATE,["already connected"]));if(this.socket)throw new Error(I(y.INVALID_STATE,["already connected"]));this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),this.connectOptions=e,this._reconnectInterval=1,this._reconnecting=!1,e.uris?(this.hostIndex=0,this._doConnect(e.uris[0])):this._doConnect(this.uri)},U.prototype.subscribe=function(e,t){if(this._trace("Client.subscribe",e,t),!this.connected)throw new Error(I(y.INVALID_STATE,["not connected"]));var n=new A(u);n.topics=e.constructor===Array?e:[e],void 0===t.qos&&(t.qos=0),n.requestedQos=[];for(var s=0;s<n.topics.length;s++)n.requestedQos[s]=t.qos;t.onSuccess&&(n.onSuccess=function(e){t.onSuccess({invocationContext:t.invocationContext,grantedQos:e})}),t.onFailure&&(n.onFailure=function(e){t.onFailure({invocationContext:t.invocationContext,errorCode:e,errorMessage:I(e)})}),t.timeout&&(n.timeOut=new D(this,t.timeout,t.onFailure,[{invocationContext:t.invocationContext,errorCode:y.SUBSCRIBE_TIMEOUT.code,errorMessage:I(y.SUBSCRIBE_TIMEOUT)}])),this._requires_ack(n),this._schedule_message(n)},U.prototype.unsubscribe=function(e,t){if(this._trace("Client.unsubscribe",e,t),!this.connected)throw new Error(I(y.INVALID_STATE,["not connected"]));var n=new A(f);n.topics=e.constructor===Array?e:[e],t.onSuccess&&(n.callback=function(){t.onSuccess({invocationContext:t.invocationContext})}),t.timeout&&(n.timeOut=new D(this,t.timeout,t.onFailure,[{invocationContext:t.invocationContext,errorCode:y.UNSUBSCRIBE_TIMEOUT.code,errorMessage:I(y.UNSUBSCRIBE_TIMEOUT)}])),this._requires_ack(n),this._schedule_message(n)},U.prototype.send=function(e){this._trace("Client.send",e);var t=new A(o);if(t.payloadMessage=e,this.connected)e.qos>0?this._requires_ack(t):this.onMessageDelivered&&(this._notify_msg_sent[t]=this.onMessageDelivered(t.payloadMessage)),this._schedule_message(t);else{if(!this._reconnecting||!this.disconnectedPublishing)throw new Error(I(y.INVALID_STATE,["not connected"]));if(Object.keys(this._sentMessages).length+this._buffered_msg_queue.length>this.disconnectedBufferSize)throw new Error(I(y.BUFFER_FULL,[this.disconnectedBufferSize]));e.qos>0?this._requires_ack(t):(t.sequence=++this._sequence,this._buffered_msg_queue.unshift(t))}},U.prototype.disconnect=function(){if(this._trace("Client.disconnect"),this._reconnecting&&(this._reconnectTimeout.cancel(),this._reconnectTimeout=null,this._reconnecting=!1),!this.socket)throw new Error(I(y.INVALID_STATE,["not connecting or connected"]));var e=new A(g);this._notify_msg_sent[e]=m(this._disconnected,this),this._schedule_message(e)},U.prototype.getTraceLog=function(){if(null!==this._traceBuffer){for(var e in this._trace("Client.getTraceLog",new Date),this._trace("Client.getTraceLog in flight messages",this._sentMessages.length),this._sentMessages)this._trace("_sentMessages ",e,this._sentMessages[e]);for(var e in this._receivedMessages)this._trace("_receivedMessages ",e,this._receivedMessages[e]);return this._traceBuffer}},U.prototype.startTrace=function(){null===this._traceBuffer&&(this._traceBuffer=[]),this._trace("Client.startTrace",new Date,"@VERSION@-@BUILDLEVEL@")},U.prototype.stopTrace=function(){delete this._traceBuffer},U.prototype._doConnect=function(e){if(this.connectOptions.useSSL){var t=e.split(":");t[0]="wss",e=t.join(":")}this._wsuri=e,this.connected=!1,this.connectOptions.mqttVersion<4?this.socket=new WebSocket(e,["mqttv3.1"]):this.socket=new WebSocket(e,["mqtt"]),this.socket.binaryType="arraybuffer",this.socket.onopen=m(this._on_socket_open,this),this.socket.onmessage=m(this._on_socket_message,this),this.socket.onerror=m(this._on_socket_error,this),this.socket.onclose=m(this._on_socket_close,this),this.sendPinger=new k(this,this.connectOptions.keepAliveInterval),this.receivePinger=new k(this,this.connectOptions.keepAliveInterval),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._connectTimeout=new D(this,this.connectOptions.timeout,this._disconnected,[y.CONNECT_TIMEOUT.code,I(y.CONNECT_TIMEOUT)])},U.prototype._schedule_message=function(e){this._msg_queue.unshift(e),this.connected&&this._process_queue()},U.prototype.store=function(e,t){var s={type:t.type,messageIdentifier:t.messageIdentifier,version:1};if(t.type!==o)throw Error(I(y.INVALID_STORED_DATA,[e+this._localKey+t.messageIdentifier,s]));t.pubRecReceived&&(s.pubRecReceived=!0),s.payloadMessage={};for(var i="",r=t.payloadMessage.payloadBytes,c=0;c<r.length;c++)r[c]<=15?i=i+"0"+r[c].toString(16):i+=r[c].toString(16);s.payloadMessage.payloadHex=i,s.payloadMessage.qos=t.payloadMessage.qos,s.payloadMessage.destinationName=t.payloadMessage.destinationName,t.payloadMessage.duplicate&&(s.payloadMessage.duplicate=!0),t.payloadMessage.retained&&(s.payloadMessage.retained=!0),0===e.indexOf("Sent:")&&(void 0===t.sequence&&(t.sequence=++this._sequence),s.sequence=t.sequence),n.setItem(e+this._localKey+t.messageIdentifier,JSON.stringify(s))},U.prototype.restore=function(e){var t=n.getItem(e),s=JSON.parse(t),i=new A(s.type,s);if(s.type!==o)throw Error(I(y.INVALID_STORED_DATA,[e,t]));for(var r=s.payloadMessage.payloadHex,c=new ArrayBuffer(r.length/2),a=new Uint8Array(c),h=0;r.length>=2;){var u=parseInt(r.substring(0,2),16);r=r.substring(2,r.length),a[h++]=u}var d=new L(a);d.qos=s.payloadMessage.qos,d.destinationName=s.payloadMessage.destinationName,s.payloadMessage.duplicate&&(d.duplicate=!0),s.payloadMessage.retained&&(d.retained=!0),i.payloadMessage=d,0===e.indexOf("Sent:"+this._localKey)?(i.payloadMessage.duplicate=!0,this._sentMessages[i.messageIdentifier]=i):0===e.indexOf("Received:"+this._localKey)&&(this._receivedMessages[i.messageIdentifier]=i)},U.prototype._process_queue=function(){for(var e=null;e=this._msg_queue.pop();)this._socket_send(e),this._notify_msg_sent[e]&&(this._notify_msg_sent[e](),delete this._notify_msg_sent[e])},U.prototype._requires_ack=function(e){var t=Object.keys(this._sentMessages).length;if(t>this.maxMessageIdentifier)throw Error("Too many messages:"+t);for(;void 0!==this._sentMessages[this._message_identifier];)this._message_identifier++;e.messageIdentifier=this._message_identifier,this._sentMessages[e.messageIdentifier]=e,e.type===o&&this.store("Sent:",e),this._message_identifier===this.maxMessageIdentifier&&(this._message_identifier=1)},U.prototype._on_socket_open=function(){var e=new A(s,this.connectOptions);e.clientId=this.clientId,this._socket_send(e)},U.prototype._on_socket_message=function(e){this._trace("Client._on_socket_message",e.data);for(var t=this._deframeMessages(e.data),n=0;n<t.length;n+=1)this._handleMessage(t[n])},U.prototype._deframeMessages=function(e){var t=new Uint8Array(e),n=[];if(this.receiveBuffer){var s=new Uint8Array(this.receiveBuffer.length+t.length);s.set(this.receiveBuffer),s.set(t,this.receiveBuffer.length),t=s,delete this.receiveBuffer}try{for(var i=0;i<t.length;){var o=T(t,i),r=o[0];if(i=o[1],null===r)break;n.push(r)}i<t.length&&(this.receiveBuffer=t.subarray(i))}catch(e){var c="undefined"==e.hasOwnProperty("stack")?e.stack.toString():"No Error Stack Available";return void this._disconnected(y.INTERNAL_ERROR.code,I(y.INTERNAL_ERROR,[e.message,c]))}return n},U.prototype._handleMessage=function(e){this._trace("Client._handleMessage",e);try{switch(e.type){case i:if(this._connectTimeout.cancel(),this._reconnectTimeout&&this._reconnectTimeout.cancel(),this.connectOptions.cleanSession){for(var t in this._sentMessages){var s=this._sentMessages[t];n.removeItem("Sent:"+this._localKey+s.messageIdentifier)}for(var t in this._sentMessages={},this._receivedMessages){var u=this._receivedMessages[t];n.removeItem("Received:"+this._localKey+u.messageIdentifier)}this._receivedMessages={}}if(0!==e.returnCode){this._disconnected(y.CONNACK_RETURNCODE.code,I(y.CONNACK_RETURNCODE,[e.returnCode,w[e.returnCode]]));break}this.connected=!0,this.connectOptions.uris&&(this.hostIndex=this.connectOptions.uris.length);var f=[];for(var _ in this._sentMessages)this._sentMessages.hasOwnProperty(_)&&f.push(this._sentMessages[_]);if(this._buffered_msg_queue.length>0)for(var g=null;g=this._buffered_msg_queue.pop();)f.push(g),this.onMessageDelivered&&(this._notify_msg_sent[g]=this.onMessageDelivered(g.payloadMessage));f=f.sort((function(e,t){return e.sequence-t.sequence}));for(var v=0,m=f.length;v<m;v++)if((s=f[v]).type==o&&s.pubRecReceived){var E=new A(a,{messageIdentifier:s.messageIdentifier});this._schedule_message(E)}else this._schedule_message(s);this.connectOptions.onSuccess&&this.connectOptions.onSuccess({invocationContext:this.connectOptions.invocationContext});var M=!1;this._reconnecting&&(M=!0,this._reconnectInterval=1,this._reconnecting=!1),this._connected(M,this._wsuri),this._process_queue();break;case o:this._receivePublish(e);break;case r:(s=this._sentMessages[e.messageIdentifier])&&(delete this._sentMessages[e.messageIdentifier],n.removeItem("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(s.payloadMessage));break;case c:(s=this._sentMessages[e.messageIdentifier])&&(s.pubRecReceived=!0,E=new A(a,{messageIdentifier:e.messageIdentifier}),this.store("Sent:",s),this._schedule_message(E));break;case a:u=this._receivedMessages[e.messageIdentifier],n.removeItem("Received:"+this._localKey+e.messageIdentifier),u&&(this._receiveMessage(u),delete this._receivedMessages[e.messageIdentifier]);var T=new A(h,{messageIdentifier:e.messageIdentifier});this._schedule_message(T);break;case h:s=this._sentMessages[e.messageIdentifier],delete this._sentMessages[e.messageIdentifier],n.removeItem("Sent:"+this._localKey+e.messageIdentifier),this.onMessageDelivered&&this.onMessageDelivered(s.payloadMessage);break;case d:(s=this._sentMessages[e.messageIdentifier])&&(s.timeOut&&s.timeOut.cancel(),128===e.returnCode[0]?s.onFailure&&s.onFailure(e.returnCode):s.onSuccess&&s.onSuccess(e.returnCode),delete this._sentMessages[e.messageIdentifier]);break;case l:(s=this._sentMessages[e.messageIdentifier])&&(s.timeOut&&s.timeOut.cancel(),s.callback&&s.callback(),delete this._sentMessages[e.messageIdentifier]);break;case p:this.sendPinger.reset();break;default:this._disconnected(y.INVALID_MQTT_MESSAGE_TYPE.code,I(y.INVALID_MQTT_MESSAGE_TYPE,[e.type]))}}catch(e){var N="undefined"==e.hasOwnProperty("stack")?e.stack.toString():"No Error Stack Available";return void this._disconnected(y.INTERNAL_ERROR.code,I(y.INTERNAL_ERROR,[e.message,N]))}},U.prototype._on_socket_error=function(e){this._reconnecting||this._disconnected(y.SOCKET_ERROR.code,I(y.SOCKET_ERROR,[e.data]))},U.prototype._on_socket_close=function(){this._reconnecting||this._disconnected(y.SOCKET_CLOSE.code,I(y.SOCKET_CLOSE))},U.prototype._socket_send=function(e){if(1==e.type){var t=this._traceMask(e,"password");this._trace("Client._socket_send",t)}else this._trace("Client._socket_send",e);this.socket.send(e.encode()),this.sendPinger.reset()},U.prototype._receivePublish=function(e){switch(e.payloadMessage.qos){case"undefined":case 0:this._receiveMessage(e);break;case 1:var t=new A(r,{messageIdentifier:e.messageIdentifier});this._schedule_message(t),this._receiveMessage(e);break;case 2:this._receivedMessages[e.messageIdentifier]=e,this.store("Received:",e);var n=new A(c,{messageIdentifier:e.messageIdentifier});this._schedule_message(n);break;default:throw Error("Invaild qos="+e.payloadMessage.qos)}},U.prototype._receiveMessage=function(e){this.onMessageArrived&&this.onMessageArrived(e.payloadMessage)},U.prototype._connected=function(e,t){this.onConnected&&this.onConnected(e,t)},U.prototype._reconnect=function(){this._trace("Client._reconnect"),this.connected||(this._reconnecting=!0,this.sendPinger.cancel(),this.receivePinger.cancel(),this._reconnectInterval<128&&(this._reconnectInterval=2*this._reconnectInterval),this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri))},U.prototype._disconnected=function(e,t){if(this._trace("Client._disconnected",e,t),void 0!==e&&this._reconnecting)this._reconnectTimeout=new D(this,this._reconnectInterval,this._reconnect);else if(this.sendPinger.cancel(),this.receivePinger.cancel(),this._connectTimeout&&(this._connectTimeout.cancel(),this._connectTimeout=null),this._msg_queue=[],this._buffered_msg_queue=[],this._notify_msg_sent={},this.socket&&(this.socket.onopen=null,this.socket.onmessage=null,this.socket.onerror=null,this.socket.onclose=null,1===this.socket.readyState&&this.socket.close(),delete this.socket),this.connectOptions.uris&&this.hostIndex<this.connectOptions.uris.length-1)this.hostIndex++,this._doConnect(this.connectOptions.uris[this.hostIndex]);else if(void 0===e&&(e=y.OK.code,t=I(y.OK)),this.connected){if(this.connected=!1,this.onConnectionLost&&this.onConnectionLost({errorCode:e,errorMessage:t,reconnect:this.connectOptions.reconnect,uri:this._wsuri}),e!==y.OK.code&&this.connectOptions.reconnect)return this._reconnectInterval=1,void this._reconnect()}else 4===this.connectOptions.mqttVersion&&!1===this.connectOptions.mqttVersionExplicit?(this._trace("Failed to connect V4, dropping back to V3"),this.connectOptions.mqttVersion=3,this.connectOptions.uris?(this.hostIndex=0,this._doConnect(this.connectOptions.uris[0])):this._doConnect(this.uri)):this.connectOptions.onFailure&&this.connectOptions.onFailure({invocationContext:this.connectOptions.invocationContext,errorCode:e,errorMessage:t})},U.prototype._trace=function(){if(this.traceFunction){var e=Array.prototype.slice.call(arguments);for(var t in e)void 0!==e[t]&&e.splice(t,1,JSON.stringify(e[t]));var n=e.join("");this.traceFunction({severity:"Debug",message:n})}if(null!==this._traceBuffer){t=0;for(var s=arguments.length;t<s;t++)this._traceBuffer.length==this._MAX_TRACE_ENTRIES&&this._traceBuffer.shift(),0===t||void 0===arguments[t]?this._traceBuffer.push(arguments[t]):this._traceBuffer.push("  "+JSON.stringify(arguments[t]))}},U.prototype._traceMask=function(e,t){var n={};for(var s in e)e.hasOwnProperty(s)&&(n[s]=s==t?"******":e[s]);return n};var L=function(e){var t,n;if(!("string"==typeof e||e instanceof ArrayBuffer||ArrayBuffer.isView(e)&&!(e instanceof DataView)))throw I(y.INVALID_ARGUMENT,[e,"newPayload"]);t=e;var s=0,i=!1,o=!1;Object.defineProperties(this,{payloadString:{enumerable:!0,get:function(){return"string"==typeof t?t:R(t,0,t.length)}},payloadBytes:{enumerable:!0,get:function(){if("string"==typeof t){var e=new ArrayBuffer(S(t)),n=new Uint8Array(e);return C(t,n,0),n}return t}},destinationName:{enumerable:!0,get:function(){return n},set:function(e){if("string"!=typeof e)throw new Error(I(y.INVALID_ARGUMENT,[e,"newDestinationName"]));n=e}},qos:{enumerable:!0,get:function(){return s},set:function(e){if(0!==e&&1!==e&&2!==e)throw new Error("Invalid argument:"+e);s=e}},retained:{enumerable:!0,get:function(){return i},set:function(e){if("boolean"!=typeof e)throw new Error(I(y.INVALID_ARGUMENT,[e,"newRetained"]));i=e}},topic:{enumerable:!0,get:function(){return n},set:function(e){n=e}},duplicate:{enumerable:!0,get:function(){return o},set:function(e){o=e}}})};return{Client:function(e,t,n,s){var i;if("string"!=typeof e)throw new Error(I(y.INVALID_TYPE,[typeof e,"host"]));if(2==arguments.length){s=t;var o=(i=e).match(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/);if(!o)throw new Error(I(y.INVALID_ARGUMENT,[e,"host"]));e=o[4]||o[2],t=parseInt(o[7]),n=o[8]}else{if(3==arguments.length&&(s=n,n="/mqtt"),"number"!=typeof t||t<0)throw new Error(I(y.INVALID_TYPE,[typeof t,"port"]));if("string"!=typeof n)throw new Error(I(y.INVALID_TYPE,[typeof n,"path"]));var r=-1!==e.indexOf(":")&&"["!==e.slice(0,1)&&"]"!==e.slice(-1);i="ws://"+(r?"["+e+"]":e)+":"+t+n}for(var c=0,a=0;a<s.length;a++){var h=s.charCodeAt(a);55296<=h&&h<=56319&&a++,c++}if("string"!=typeof s||c>65535)throw new Error(I(y.INVALID_ARGUMENT,[s,"clientId"]));var u=new U(i,e,t,n,s);Object.defineProperties(this,{host:{get:function(){return e},set:function(){throw new Error(I(y.UNSUPPORTED_OPERATION))}},port:{get:function(){return t},set:function(){throw new Error(I(y.UNSUPPORTED_OPERATION))}},path:{get:function(){return n},set:function(){throw new Error(I(y.UNSUPPORTED_OPERATION))}},uri:{get:function(){return i},set:function(){throw new Error(I(y.UNSUPPORTED_OPERATION))}},clientId:{get:function(){return u.clientId},set:function(){throw new Error(I(y.UNSUPPORTED_OPERATION))}},onConnected:{get:function(){return u.onConnected},set:function(e){if("function"!=typeof e)throw new Error(I(y.INVALID_TYPE,[typeof e,"onConnected"]));u.onConnected=e}},disconnectedPublishing:{get:function(){return u.disconnectedPublishing},set:function(e){u.disconnectedPublishing=e}},disconnectedBufferSize:{get:function(){return u.disconnectedBufferSize},set:function(e){u.disconnectedBufferSize=e}},onConnectionLost:{get:function(){return u.onConnectionLost},set:function(e){if("function"!=typeof e)throw new Error(I(y.INVALID_TYPE,[typeof e,"onConnectionLost"]));u.onConnectionLost=e}},onMessageDelivered:{get:function(){return u.onMessageDelivered},set:function(e){if("function"!=typeof e)throw new Error(I(y.INVALID_TYPE,[typeof e,"onMessageDelivered"]));u.onMessageDelivered=e}},onMessageArrived:{get:function(){return u.onMessageArrived},set:function(e){if("function"!=typeof e)throw new Error(I(y.INVALID_TYPE,[typeof e,"onMessageArrived"]));u.onMessageArrived=e}},trace:{get:function(){return u.traceFunction},set:function(e){if("function"!=typeof e)throw new Error(I(y.INVALID_TYPE,[typeof e,"onTrace"]));u.traceFunction=e}}}),this.connect=function(e){if(v(e=e||{},{timeout:"number",userName:"string",password:"string",willMessage:"object",keepAliveInterval:"number",cleanSession:"boolean",useSSL:"boolean",invocationContext:"object",onSuccess:"function",onFailure:"function",hosts:"object",ports:"object",reconnect:"boolean",mqttVersion:"number",mqttVersionExplicit:"boolean",uris:"object"}),void 0===e.keepAliveInterval&&(e.keepAliveInterval=60),e.mqttVersion>4||e.mqttVersion<3)throw new Error(I(y.INVALID_ARGUMENT,[e.mqttVersion,"connectOptions.mqttVersion"]));if(void 0===e.mqttVersion?(e.mqttVersionExplicit=!1,e.mqttVersion=4):e.mqttVersionExplicit=!0,void 0!==e.password&&void 0===e.userName)throw new Error(I(y.INVALID_ARGUMENT,[e.password,"connectOptions.password"]));if(e.willMessage){if(!(e.willMessage instanceof L))throw new Error(I(y.INVALID_TYPE,[e.willMessage,"connectOptions.willMessage"]));if(e.willMessage.stringPayload=null,void 0===e.willMessage.destinationName)throw new Error(I(y.INVALID_TYPE,[typeof e.willMessage.destinationName,"connectOptions.willMessage.destinationName"]))}if(void 0===e.cleanSession&&(e.cleanSession=!0),e.hosts){if(!(e.hosts instanceof Array))throw new Error(I(y.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));if(e.hosts.length<1)throw new Error(I(y.INVALID_ARGUMENT,[e.hosts,"connectOptions.hosts"]));for(var t=!1,s=0;s<e.hosts.length;s++){if("string"!=typeof e.hosts[s])throw new Error(I(y.INVALID_TYPE,[typeof e.hosts[s],"connectOptions.hosts["+s+"]"]));if(/^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(e.hosts[s])){if(0===s)t=!0;else if(!t)throw new Error(I(y.INVALID_ARGUMENT,[e.hosts[s],"connectOptions.hosts["+s+"]"]))}else if(t)throw new Error(I(y.INVALID_ARGUMENT,[e.hosts[s],"connectOptions.hosts["+s+"]"]))}if(t)e.uris=e.hosts;else{if(!e.ports)throw new Error(I(y.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(!(e.ports instanceof Array))throw new Error(I(y.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));if(e.hosts.length!==e.ports.length)throw new Error(I(y.INVALID_ARGUMENT,[e.ports,"connectOptions.ports"]));for(e.uris=[],s=0;s<e.hosts.length;s++){if("number"!=typeof e.ports[s]||e.ports[s]<0)throw new Error(I(y.INVALID_TYPE,[typeof e.ports[s],"connectOptions.ports["+s+"]"]));var o=e.hosts[s],r=e.ports[s],c=-1!==o.indexOf(":");i="ws://"+(c?"["+o+"]":o)+":"+r+n,e.uris.push(i)}}}u.connect(e)},this.subscribe=function(e,t){if("string"!=typeof e&&e.constructor!==Array)throw new Error("Invalid argument:"+e);if(v(t=t||{},{qos:"number",invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),t.timeout&&!t.onFailure)throw new Error("subscribeOptions.timeout specified with no onFailure callback.");if(void 0!==t.qos&&0!==t.qos&&1!==t.qos&&2!==t.qos)throw new Error(I(y.INVALID_ARGUMENT,[t.qos,"subscribeOptions.qos"]));u.subscribe(e,t)},this.unsubscribe=function(e,t){if("string"!=typeof e&&e.constructor!==Array)throw new Error("Invalid argument:"+e);if(v(t=t||{},{invocationContext:"object",onSuccess:"function",onFailure:"function",timeout:"number"}),t.timeout&&!t.onFailure)throw new Error("unsubscribeOptions.timeout specified with no onFailure callback.");u.unsubscribe(e,t)},this.send=function(e,t,n,s){var i;if(0===arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(e instanceof L)&&"string"!=typeof e)throw new Error("Invalid argument:"+typeof e);if(void 0===(i=e).destinationName)throw new Error(I(y.INVALID_ARGUMENT,[i.destinationName,"Message.destinationName"]));u.send(i)}else(i=new L(t)).destinationName=e,arguments.length>=3&&(i.qos=n),arguments.length>=4&&(i.retained=s),u.send(i)},this.publish=function(e,t,n,s){var i;if(0===arguments.length)throw new Error("Invalid argument.length");if(1==arguments.length){if(!(e instanceof L)&&"string"!=typeof e)throw new Error("Invalid argument:"+typeof e);if(void 0===(i=e).destinationName)throw new Error(I(y.INVALID_ARGUMENT,[i.destinationName,"Message.destinationName"]));u.send(i)}else(i=new L(t)).destinationName=e,arguments.length>=3&&(i.qos=n),arguments.length>=4&&(i.retained=s),u.send(i)},this.disconnect=function(){u.disconnect()},this.getTraceLog=function(){return u.getTraceLog()},this.startTrace=function(){u.startTrace()},this.stopTrace=function(){u.stopTrace()},this.isConnected=function(){return u.connected}},Message:L}}(void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});return e},e.exports=n()}).call(this,n(67))}}]);