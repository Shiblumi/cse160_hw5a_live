(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="163",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Km=0,jl=1,Zm=2,md=1,Jm=2,Ni=3,zi=0,Mn=1,Ii=2,Qi=0,ir=1,Kl=2,Zl=3,Jl=4,Qm=5,gs=100,eg=101,tg=102,ng=103,ig=104,sg=200,rg=201,og=202,ag=203,Bc=204,Hc=205,cg=206,lg=207,ug=208,hg=209,dg=210,pg=211,fg=212,mg=213,gg=214,_g=0,xg=1,vg=2,ko=3,yg=4,Mg=5,Sg=6,Tg=7,la=0,Eg=1,Ag=2,ii=0,gd=1,_d=2,xd=3,vd=4,bg=5,yd=6,wg=7,Md=300,hr=301,dr=302,kc=303,Gc=304,ua=306,pr=1e3,vs=1001,Wc=1002,sn=1003,Ng=1004,lo=1005,ti=1006,Fa=1007,Ui=1008,es=1009,Rg=1010,Cg=1011,Sd=1012,Td=1013,fr=1014,Oi=1015,Gr=1016,Ed=1017,Ad=1018,eo=1020,Lg=35902,Pg=1021,Ig=1022,fi=1023,Dg=1024,Ug=1025,sr=1026,Wr=1027,Og=1028,bd=1029,Fg=1030,wd=1031,Nd=1033,Va=33776,za=33777,Ba=33778,Ha=33779,Ql=35840,eu=35841,tu=35842,nu=35843,Rd=36196,iu=37492,su=37496,ru=37808,ou=37809,au=37810,cu=37811,lu=37812,uu=37813,hu=37814,du=37815,pu=37816,fu=37817,mu=37818,gu=37819,_u=37820,xu=37821,ka=36492,vu=36494,yu=36495,Vg=36283,Mu=36284,Su=36285,Tu=36286,zg=3200,Bg=3201,Ts=0,Cd=1,Di="",Ln="srgb",Yn="srgb-linear",pl="display-p3",ha="display-p3-linear",Go="linear",Tt="srgb",Wo="rec709",Xo="p3",Os=7680,Eu=519,Hg=512,Ld=513,kg=514,Pd=515,Gg=516,Wg=517,Xg=518,qg=519,qo=35044,Xc=35048,Au="300 es",mi=2e3,mr=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bu=1234567;const zr=Math.PI/180,gr=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function fl(i,e){return(i%e+e)%e}function $g(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yg(i,e,t){return i!==e?(t-i)/(e-i):0}function Br(i,e,t){return(1-t)*i+t*e}function jg(i,e,t,n){return Br(i,e,1-Math.exp(-t*n))}function Kg(i,e=1){return e-Math.abs(fl(i,e*2)-e)}function Zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function e_(i,e){return i+Math.random()*(e-i)}function t_(i){return i*(.5-Math.random())}function n_(i){i!==void 0&&(bu=i);let e=bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i_(i){return i*zr}function s_(i){return i*gr}function r_(i){return(i&i-1)===0&&i!==0}function o_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function a_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function c_(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ml={DEG2RAD:zr,RAD2DEG:gr,generateUUID:Fi,clamp:tn,euclideanModulo:fl,mapLinear:$g,inverseLerp:Yg,lerp:Br,damp:jg,pingpong:Kg,smoothstep:Zg,smootherstep:Jg,randInt:Qg,randFloat:e_,randFloatSpread:t_,seededRandom:n_,degToRad:i_,radToDeg:s_,isPowerOfTwo:r_,ceilPowerOfTwo:o_,floorPowerOfTwo:a_,setQuaternionFromProperEuler:c_,normalize:pt,denormalize:ni};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,r,o,a,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],_=n[8],x=s[0],m=s[3],f=s[6],T=s[1],v=s[4],A=s[7],P=s[2],w=s[5],b=s[8];return r[0]=o*x+a*T+c*P,r[3]=o*m+a*v+c*w,r[6]=o*f+a*A+c*b,r[1]=l*x+u*T+h*P,r[4]=l*m+u*v+h*w,r[7]=l*f+u*A+h*b,r[2]=d*x+p*T+_*P,r[5]=d*m+p*v+_*w,r[8]=d*f+p*A+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,_=t*h+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ga.makeScale(e,t)),this}rotate(e){return this.premultiply(Ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ga=new je;function Id(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l_(){const i=Xr("canvas");return i.style.display="block",i}const wu={};function Dd(i){i in wu||(wu[i]=!0,console.warn(i))}const Nu=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ru=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[Yn]:{transfer:Go,primaries:Wo,toReference:i=>i,fromReference:i=>i},[Ln]:{transfer:Tt,primaries:Wo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:Go,primaries:Xo,toReference:i=>i.applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(Nu)},[pl]:{transfer:Tt,primaries:Xo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ru),fromReference:i=>i.applyMatrix3(Nu).convertLinearToSRGB()}},u_=new Set([Yn,ha]),gt={enabled:!0,_workingColorSpace:Yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!u_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=uo[e].toReference,s=uo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return uo[i].primaries},getTransfer:function(i){return i===Di?Go:uo[i].transfer}};function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fs;class h_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=Xr("canvas")),Fs.width=e.width,Fs.height=e.height;const n=Fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=rr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d_=0;class Ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xa(s[o].image)):r.push(Xa(s[o]))}else r=Xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?h_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p_=0;class dn extends ki{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=vs,s=vs,r=ti,o=Ui,a=fi,c=es,l=dn.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=Fi(),this.name="",this.source=new Ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pr:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pr:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Md;dn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,A=(p+1)/2,P=(f+1)/2,w=(u+d)/4,b=(h+x)/4,I=(_+m)/4;return v>A&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=b/n):A>P?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=w/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=b/r,s=I/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-x)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ts extends ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends ts{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gl extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class f_ extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==p||u!==_){let m=1-a;const f=c*d+l*p+u*_+h*x,T=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),w=Math.atan2(P,f*T);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}const A=a*T;if(c=c*m+d*A,l=l*m+p*A,u=u*m+_*A,h=h*m+x*A,m===1-a){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*h+c*p-l*d,e[t+1]=c*_+u*d+l*h-a*p,e[t+2]=l*_+u*p+a*d-c*h,e[t+3]=u*_-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h+d*p*_;break;case"YZX":this._x=d*u*h+l*p*_,this._y=l*p*h+d*u*_,this._z=l*u*_-d*p*h,this._w=l*u*h-d*p*_;break;case"XZY":this._x=d*u*h-l*p*_,this._y=l*p*h-d*u*_,this._z=l*u*_+d*p*h,this._w=l*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new L,Cu=new As;class to{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),po.subVectors(this.max,Cr),Vs.subVectors(e.a,Cr),zs.subVectors(e.b,Cr),Bs.subVectors(e.c,Cr),Xi.subVectors(zs,Vs),qi.subVectors(Bs,zs),as.subVectors(Vs,Bs);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-as.z,as.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,as.z,0,-as.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-as.y,as.x,0];return!$a(t,Vs,zs,Bs,po)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,Vs,zs,Bs,po))?!1:(fo.crossVectors(Xi,qi),t=[fo.x,fo.y,fo.z],$a(t,Vs,zs,Bs,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,ho=new to,Vs=new L,zs=new L,Bs=new L,Xi=new L,qi=new L,as=new L,Cr=new L,po=new L,fo=new L,cs=new L;function $a(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);const a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const m_=new to,Lr=new L,Ya=new L;class no{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):m_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ya)),this.expandByPoint(Lr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new L,ja=new L,mo=new L,$i=new L,Ka=new L,go=new L,Za=new L;class da{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ja.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=$i.dot(this.direction),c=-$i.dot(mo),l=$i.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*c-a,d=o*a-c,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ja).addScaledVector(mo,d),p}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){Ka.subVectors(t,e),go.subVectors(n,e),Za.crossVectors(Ka,go);let o=this.direction.dot(Za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const c=a*this.direction.dot(go.crossVectors($i,go));if(c<0)return null;const l=a*this.direction.dot(Ka.cross($i));if(l<0||c+l>o)return null;const u=-a*$i.dot(Za);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,n,s,r,o,a,c,l,u,h,d,p,_,x,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,p,_,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,p,_,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d+x*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,_=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,x=a*h;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*c,p=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g_,e,__)}lookAt(e,t,n){const s=this.elements;return Nn.subVectors(e,t),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),Yi.crossVectors(n,Nn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),Yi.crossVectors(n,Nn)),Yi.normalize(),_o.crossVectors(Nn,Yi),s[0]=Yi.x,s[4]=_o.x,s[8]=Nn.x,s[1]=Yi.y,s[5]=_o.y,s[9]=Nn.y,s[2]=Yi.z,s[6]=_o.z,s[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],f=n[14],T=n[3],v=n[7],A=n[11],P=n[15],w=s[0],b=s[4],I=s[8],S=s[12],y=s[1],F=s[5],W=s[9],D=s[13],K=s[2],Z=s[6],re=s[10],le=s[14],Y=s[3],ne=s[7],ie=s[11],ge=s[15];return r[0]=o*w+a*y+c*K+l*Y,r[4]=o*b+a*F+c*Z+l*ne,r[8]=o*I+a*W+c*re+l*ie,r[12]=o*S+a*D+c*le+l*ge,r[1]=u*w+h*y+d*K+p*Y,r[5]=u*b+h*F+d*Z+p*ne,r[9]=u*I+h*W+d*re+p*ie,r[13]=u*S+h*D+d*le+p*ge,r[2]=_*w+x*y+m*K+f*Y,r[6]=_*b+x*F+m*Z+f*ne,r[10]=_*I+x*W+m*re+f*ie,r[14]=_*S+x*D+m*le+f*ge,r[3]=T*w+v*y+A*K+P*Y,r[7]=T*b+v*F+A*Z+P*ne,r[11]=T*I+v*W+A*re+P*ie,r[15]=T*S+v*D+A*le+P*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],f=e[15];return _*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+t*l*h-t*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],f=e[15],T=h*m*l-x*d*l+x*c*p-a*m*p-h*c*f+a*d*f,v=_*d*l-u*m*l-_*c*p+o*m*p+u*c*f-o*d*f,A=u*x*l-_*h*l+_*a*p-o*x*p-u*a*f+o*h*f,P=_*h*c-u*x*c-_*a*d+o*x*d+u*a*m-o*h*m,w=t*T+n*v+s*A+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=T*b,e[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*b,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*b,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*b,e[4]=v*b,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*b,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*f-t*c*f)*b,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*p+t*c*p)*b,e[8]=A*b,e[9]=(_*h*r-u*x*r-_*n*p+t*x*p+u*n*f-t*h*f)*b,e[10]=(o*x*r-_*a*r+_*n*l-t*x*l-o*n*f+t*a*f)*b,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*p-t*a*p)*b,e[12]=P*b,e[13]=(u*x*s-_*h*s+_*n*d-t*x*d-u*n*m+t*h*m)*b,e[14]=(_*a*s-o*x*s-_*n*c+t*x*c+o*n*m-t*a*m)*b,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,_=r*h,x=o*u,m=o*h,f=a*h,T=c*l,v=c*u,A=c*h,P=n.x,w=n.y,b=n.z;return s[0]=(1-(x+f))*P,s[1]=(p+A)*P,s[2]=(_-v)*P,s[3]=0,s[4]=(p-A)*w,s[5]=(1-(d+f))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(_+v)*b,s[9]=(m-T)*b,s[10]=(1-(d+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Hs.set(s[0],s[1],s[2]).length();const o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);const l=1/r,u=1/o,h=1/a;return Qn.elements[0]*=l,Qn.elements[1]*=l,Qn.elements[2]*=l,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,t.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,_;if(a===mi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===mr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,p=(n+s)*u;let _,x;if(a===mi)_=(o+r)*h,x=-2*h;else if(a===mr)_=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new L,Qn=new St,g_=new L(0,0,0),__=new L(1,1,1),Yi=new L,_o=new L,Nn=new L,Lu=new St,Pu=new As;class $n{constructor(e=0,t=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x_=0;const Iu=new L,ks=new As,Ei=new St,xo=new L,Pr=new L,v_=new L,y_=new As,Du=new L(1,0,0),Uu=new L(0,1,0),Ou=new L(0,0,1),Fu={type:"added"},M_={type:"removed"},Gs={type:"childadded",child:null},Ja={type:"childremoved",child:null};class It extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new L,t=new $n,n=new As,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Du,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Du,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Pr,xo,this.up):Ei.lookAt(xo,Pr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ei),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(M_),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,v_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new L(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new L,Ai=new L,Qa=new L,bi=new L,Ws=new L,Xs=new L,Vu=new L,ec=new L,tc=new L,nc=new L;class di{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ei.subVectors(e,t),s.cross(ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ei.subVectors(s,t),Ai.subVectors(n,t),Qa.subVectors(e,t);const o=ei.dot(ei),a=ei.dot(Ai),c=ei.dot(Qa),l=Ai.dot(Ai),u=Ai.dot(Qa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,_=(o*u-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bi.x),c.addScaledVector(o,bi.y),c.addScaledVector(a,bi.z),c)}static isFrontFacing(e,t,n,s){return ei.subVectors(n,t),Ai.subVectors(e,t),ei.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return di.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ws.subVectors(s,n),Xs.subVectors(r,n),ec.subVectors(e,n);const c=Ws.dot(ec),l=Xs.dot(ec);if(c<=0&&l<=0)return t.copy(n);tc.subVectors(e,s);const u=Ws.dot(tc),h=Xs.dot(tc);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ws,o);nc.subVectors(e,r);const p=Ws.dot(nc),_=Xs.dot(nc);if(_>=0&&p<=_)return t.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Xs,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Vu.subVectors(r,s),a=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(Vu,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=fl(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ic(o,r,e+1/3),this.g=ic(o,r,e),this.b=ic(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const n=Fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return gt.fromWorkingColorSpace(un.copy(this),e),Math.round(tn(un.r*255,0,255))*65536+Math.round(tn(un.g*255,0,255))*256+Math.round(tn(un.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(un.copy(this),t);const n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Ln){gt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,s=un.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(vo);const n=Br(ji.h,vo.h,t),s=Br(ji.s,vo.s,t),r=Br(ji.l,vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Ie;Ie.NAMES=Fd;let S_=0;class Tn extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ir,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=Hc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ko&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class pa extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new L,yo=new Me;class qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class Vd extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zd extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class wt extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let T_=0;const kn=new St,sc=new It,qs=new L,Rn=new to,Ir=new to,Zt=new L;class gn extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?zd:Vd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new wt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Rn.min,Ir.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,Ir.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(Ir.min),Rn.expandByPoint(Ir.max))}Rn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(e,l),Zt.add(qs)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;const l=new L,u=new L,h=new L,d=new Me,p=new Me,_=new Me,x=new L,m=new L;function f(I,S,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),_.fromBufferAttribute(r,y),u.sub(l),h.sub(l),p.sub(d),_.sub(d);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(F),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[I].add(x),a[S].add(x),a[y].add(x),c[I].add(m),c[S].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,S=T.length;I<S;++I){const y=T[I],F=y.start,W=y.count;for(let D=F,K=F+W;D<K;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new L,A=new L,P=new L,w=new L;function b(I){P.fromBufferAttribute(s,I),w.copy(P);const S=a[I];v.copy(S),v.sub(P.multiplyScalar(P.dot(S))).normalize(),A.crossVectors(w,S);const F=A.dot(c[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,F)}for(let I=0,S=T.length;I<S;++I){const y=T[I],F=y.start,W=y.count;for(let D=F,K=F+W;D<K;D+=3)b(e.getX(D+0)),b(e.getX(D+1)),b(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let f=0;f<u;f++)d[_++]=l[p++]}return new qn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zu=new St,ls=new da,Mo=new no,Bu=new L,$s=new L,Ys=new L,js=new L,rc=new L,So=new L,To=new Me,Eo=new Me,Ao=new Me,Hu=new L,ku=new L,Gu=new L,bo=new L,wo=new L;class Pn extends It{constructor(e=new gn,t=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(rc.fromBufferAttribute(h,e),o?So.addScaledVector(rc,u):So.addScaledVector(rc.sub(t),u))}t.add(So)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(Mo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Mo,Bu)===null||ls.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),ls.copy(e.ray).applyMatrix4(zu),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],T=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,P=v;A<P;A+=3){const w=a.getX(A),b=a.getX(A+1),I=a.getX(A+2);s=No(this,f,e,n,l,u,h,w,b,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const T=a.getX(m),v=a.getX(m+1),A=a.getX(m+2);s=No(this,o,e,n,l,u,h,T,v,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],T=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let A=T,P=v;A<P;A+=3){const w=A,b=A+1,I=A+2;s=No(this,f,e,n,l,u,h,w,b,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,f=x;m<f;m+=3){const T=m,v=m+1,A=m+2;s=No(this,o,e,n,l,u,h,T,v,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function E_(i,e,t,n,s,r,o,a){let c;if(e.side===Mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===zi,a),c===null)return null;wo.copy(a),wo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wo);return l<t.near||l>t.far?null:{distance:l,point:wo.clone(),object:i}}function No(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,$s),i.getVertexPosition(c,Ys),i.getVertexPosition(l,js);const u=E_(i,e,t,n,$s,Ys,js,bo);if(u){s&&(To.fromBufferAttribute(s,a),Eo.fromBufferAttribute(s,c),Ao.fromBufferAttribute(s,l),u.uv=di.getInterpolation(bo,$s,Ys,js,To,Eo,Ao,new Me)),r&&(To.fromBufferAttribute(r,a),Eo.fromBufferAttribute(r,c),Ao.fromBufferAttribute(r,l),u.uv1=di.getInterpolation(bo,$s,Ys,js,To,Eo,Ao,new Me)),o&&(Hu.fromBufferAttribute(o,a),ku.fromBufferAttribute(o,c),Gu.fromBufferAttribute(o,l),u.normal=di.getInterpolation(bo,$s,Ys,js,Hu,ku,Gu,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new L,materialIndex:0};di.getNormal($s,Ys,js,h.normal),u.face=h}return u}class pi extends gn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(u,3)),this.setAttribute("uv",new wt(h,2));function _(x,m,f,T,v,A,P,w,b,I,S){const y=A/b,F=P/I,W=A/2,D=P/2,K=w/2,Z=b+1,re=I+1;let le=0,Y=0;const ne=new L;for(let ie=0;ie<re;ie++){const ge=ie*F-D;for(let Le=0;Le<Z;Le++){const Be=Le*y-W;ne[x]=Be*T,ne[m]=ge*v,ne[f]=K,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[f]=w>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Le/b),h.push(1-ie/I),le+=1}}for(let ie=0;ie<I;ie++)for(let ge=0;ge<b;ge++){const Le=d+ge+Z*ie,Be=d+ge+Z*(ie+1),j=d+(ge+1)+Z*(ie+1),he=d+(ge+1)+Z*ie;c.push(Le,Be,he),c.push(Be,j,he),Y+=6}a.addGroup(p,Y,S),p+=Y,d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=_r(i[t]);for(const s in n)e[s]=n[s]}return e}function A_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const b_={clone:_r,merge:mn};var w_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w_,this.fragmentShader=N_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hd extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new L,Wu=new Me,Xu=new Me;class vn extends Hd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,Wu,Xu),t.subVectors(Xu,Wu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class R_ extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const r=new vn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const o=new vn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new vn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const c=new vn(Ks,Zs,e,t);c.layers=this.layers,this.add(c);const l=new vn(Ks,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _l extends dn{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class C_ extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pi(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Qi});r.uniforms.tEquirect.value=t;const o=new Pn(s,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=ti),new R_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const oc=new L,L_=new L,P_=new je;class Ri{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=oc.subVectors(n,t).cross(L_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||P_.getNormalMatrix(e),s=this.coplanarPoint(oc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new no,Ro=new L;class xl{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],x=s[10],m=s[11],f=s[12],T=s[13],v=s[14],A=s[15];if(n[0].setComponents(c-r,d-l,m-p,A-f).normalize(),n[1].setComponents(c+r,d+l,m+p,A+f).normalize(),n[2].setComponents(c+o,d+u,m+_,A+T).normalize(),n[3].setComponents(c-o,d-u,m-_,A-T).normalize(),n[4].setComponents(c-a,d-h,m-x,A-v).normalize(),t===mi)n[5].setComponents(c+a,d+h,m+x,A+v).normalize();else if(t===mr)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function I_(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let p=0,_=d.length;p<_;p++){const x=d[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class fa extends gn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,p=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const T=f*d-o;for(let v=0;v<l;v++){const A=v*h-r;_.push(A,-T,0),x.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const v=T+l*f,A=T+l*(f+1),P=T+1+l*(f+1),w=T+1+l*f;p.push(v,A,w),p.push(A,P,w)}this.setIndex(p),this.setAttribute("position",new wt(_,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var D_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,O_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,W_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,S0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,w0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,W0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,K0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:D_,alphahash_pars_fragment:U_,alphamap_fragment:O_,alphamap_pars_fragment:F_,alphatest_fragment:V_,alphatest_pars_fragment:z_,aomap_fragment:B_,aomap_pars_fragment:H_,batching_pars_vertex:k_,batching_vertex:G_,begin_vertex:W_,beginnormal_vertex:X_,bsdfs:q_,iridescence_fragment:$_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:j_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:Z_,clipping_planes_vertex:J_,color_fragment:Q_,color_pars_fragment:e0,color_pars_vertex:t0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:c0,emissivemap_pars_fragment:l0,colorspace_fragment:u0,colorspace_pars_fragment:h0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:f0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:w0,envmap_vertex:g0,fog_vertex:_0,fog_pars_vertex:x0,fog_fragment:v0,fog_pars_fragment:y0,gradientmap_pars_fragment:M0,lightmap_fragment:S0,lightmap_pars_fragment:T0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:A0,lights_pars_begin:b0,lights_toon_fragment:N0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:L0,lights_physical_fragment:P0,lights_physical_pars_fragment:I0,lights_fragment_begin:D0,lights_fragment_maps:U0,lights_fragment_end:O0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:B0,map_fragment:H0,map_pars_fragment:k0,map_particle_fragment:G0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:$0,morphcolor_vertex:Y0,morphnormal_vertex:j0,morphtarget_pars_vertex:K0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ox,iridescence_pars_fragment:ax,opaque_fragment:cx,packing:lx,premultiplied_alpha_fragment:ux,project_vertex:hx,dithering_fragment:dx,dithering_pars_fragment:px,roughnessmap_fragment:fx,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:_x,shadowmap_vertex:xx,shadowmask_pars_fragment:vx,skinbase_vertex:yx,skinning_pars_vertex:Mx,skinning_vertex:Sx,skinnormal_vertex:Tx,specularmap_fragment:Ex,specularmap_pars_fragment:Ax,tonemapping_fragment:bx,tonemapping_pars_fragment:wx,transmission_fragment:Nx,transmission_pars_fragment:Rx,uv_pars_fragment:Cx,uv_pars_vertex:Lx,uv_vertex:Px,worldpos_vertex:Ix,background_vert:Dx,background_frag:Ux,backgroundCube_vert:Ox,backgroundCube_frag:Fx,cube_vert:Vx,cube_frag:zx,depth_vert:Bx,depth_frag:Hx,distanceRGBA_vert:kx,distanceRGBA_frag:Gx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:$x,meshbasic_vert:Yx,meshbasic_frag:jx,meshlambert_vert:Kx,meshlambert_frag:Zx,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:ov,meshtoon_frag:av,points_vert:cv,points_frag:lv,shadow_vert:uv,shadow_frag:hv,sprite_vert:dv,sprite_frag:pv},xe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ui={basic:{uniforms:mn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:mn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:mn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:mn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:mn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:mn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:mn([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:mn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:mn([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:mn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:mn([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:mn([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:mn([xe.lights,xe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ui.physical={uniforms:mn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Co={r:0,b:0,g:0},hs=new $n,fv=new St;function mv(i,e,t,n,s,r,o){const a=new Ie(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function _(m,f){let T=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),T=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ua)?(u===void 0&&(u=new Pn(new pi(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:_r(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hs.copy(f.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(hs)),u.material.toneMapped=gt.getTransfer(v.colorSpace)!==Tt,(h!==v||d!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Pn(new fa(2,2),new Bi({name:"BackgroundMaterial",uniforms:_r(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=gt.getTransfer(v.colorSpace)!==Tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,f){m.getRGB(Co,Bd(i)),n.buffers.color.setClear(Co.r,Co.g,Co.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:_}}function gv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,F,W,D,K){let Z=!1;const re=h(D,W,F);r!==re&&(r=re,l(r.object)),Z=p(y,D,W,K),Z&&_(y,D,W,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,A(y,F,W,D),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,F,W){const D=W.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let Z=K[F.id];Z===void 0&&(Z={},K[F.id]=Z);let re=Z[D];return re===void 0&&(re=d(c()),Z[D]=re),re}function d(y){const F=[],W=[],D=[];for(let K=0;K<t;K++)F[K]=0,W[K]=0,D[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:D,object:y,attributes:{},index:null}}function p(y,F,W,D){const K=r.attributes,Z=F.attributes;let re=0;const le=W.getAttributes();for(const Y in le)if(le[Y].location>=0){const ie=K[Y];let ge=Z[Y];if(ge===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;re++}return r.attributesNum!==re||r.index!==D}function _(y,F,W,D){const K={},Z=F.attributes;let re=0;const le=W.getAttributes();for(const Y in le)if(le[Y].location>=0){let ie=Z[Y];ie===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor));const ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),K[Y]=ge,re++}r.attributes=K,r.attributesNum=re,r.index=D}function x(){const y=r.newAttributes;for(let F=0,W=y.length;F<W;F++)y[F]=0}function m(y){f(y,0)}function f(y,F){const W=r.newAttributes,D=r.enabledAttributes,K=r.attributeDivisors;W[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),K[y]!==F&&(i.vertexAttribDivisor(y,F),K[y]=F)}function T(){const y=r.newAttributes,F=r.enabledAttributes;for(let W=0,D=F.length;W<D;W++)F[W]!==y[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function v(y,F,W,D,K,Z,re){re===!0?i.vertexAttribIPointer(y,F,W,K,Z):i.vertexAttribPointer(y,F,W,D,K,Z)}function A(y,F,W,D){x();const K=D.attributes,Z=W.getAttributes(),re=F.defaultAttributeValues;for(const le in Z){const Y=Z[le];if(Y.location>=0){let ne=K[le];if(ne===void 0&&(le==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),le==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){const ie=ne.normalized,ge=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const Be=Le.buffer,j=Le.type,he=Le.bytesPerElement,ye=j===i.INT||j===i.UNSIGNED_INT||ne.gpuType===Td;if(ne.isInterleavedBufferAttribute){const pe=ne.data,Ge=pe.stride,qe=ne.offset;if(pe.isInstancedInterleavedBuffer){for(let et=0;et<Y.locationSize;et++)f(Y.location+et,pe.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let et=0;et<Y.locationSize;et++)m(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let et=0;et<Y.locationSize;et++)v(Y.location+et,ge/Y.locationSize,j,ie,Ge*he,(qe+ge/Y.locationSize*et)*he,ye)}else{if(ne.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)f(Y.location+pe,ne.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let pe=0;pe<Y.locationSize;pe++)v(Y.location+pe,ge/Y.locationSize,j,ie,ge*he,ge/Y.locationSize*pe*he,ye)}}else if(re!==void 0){const ie=re[le];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Y.location,ie);break;case 3:i.vertexAttrib3fv(Y.location,ie);break;case 4:i.vertexAttrib4fv(Y.location,ie);break;default:i.vertexAttrib1fv(Y.location,ie)}}}}T()}function P(){I();for(const y in n){const F=n[y];for(const W in F){const D=F[W];for(const K in D)u(D[K].object),delete D[K];delete F[W]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const F=n[y.id];for(const W in F){const D=F[W];for(const K in D)u(D[K].object),delete D[K];delete F[W]}delete n[y.id]}function b(y){for(const F in n){const W=n[F];if(W[y.id]===void 0)continue;const D=W[y.id];for(const K in D)u(D[K].object),delete D[K];delete W[y.id]}}function I(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function _v(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<u;d++)this.render(c[d],l[d]);else{h.multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function xv(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=t.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),f=u>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:m,vertexTextures:f,maxSamples:T}}function vv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ri,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):l();else{const T=r?0:n,v=T*4;let A=f.clippingState||null;c.value=A,A=u(_,d,v,p);for(let P=0;P!==v;++P)A[P]=t[P];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const f=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,A=p;v!==x;++v,A+=4)o.copy(h[v]).applyMatrix4(T,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function yv(i){let e=new WeakMap;function t(o,a){return a===kc?o.mapping=hr:a===Gc&&(o.mapping=dr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===kc||a===Gc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new C_(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vl extends Hd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qs=4,qu=[.125,.215,.35,.446,.526,.582],_s=20,ac=new vl,$u=new Ie;let cc=null,lc=0,uc=0,hc=!1;const ms=(1+Math.sqrt(5))/2,Js=1/ms,Yu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ms,Js),new L(0,ms,-Js),new L(Js,0,ms),new L(-Js,0,ms),new L(ms,Js,0),new L(-ms,Js,0)];class ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,lc,uc),this._renderer.xr.enabled=hc,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Gr,format:fi,colorSpace:Yn,depthBuffer:!1},s=Ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mv(r)),this._blurMaterial=Sv(r,e,t)}return s}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,ac)}_sceneToCubeUV(e,t,n,s){const a=new vn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($u),u.toneMapping=ii,u.autoClear=!1;const p=new pa({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Pn(new pi,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy($u),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):T===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;Lo(s,T*v,f>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===hr||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Lo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ac)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yu[(s-1)%Yu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pn(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_s-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):_s;m>_s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_s}`);const f=[];let T=0;for(let b=0;b<_s;++b){const I=b/x,S=Math.exp(-I*I/2);f.push(S),b===0?T+=S:b<m&&(T+=2*S)}for(let b=0;b<f.length;b++)f[b]=f[b]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;const A=this._sizeLods[s],P=3*A*(s>v-Qs?s-v+Qs:0),w=4*(this._cubeSize-A);Lo(t,P,w,3*A,2*A),c.setRenderTarget(t),c.render(h,ac)}}function Mv(i){const e=[],t=[],n=[];let s=i;const r=i-Qs+1+qu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Qs?c=qu[o-i+Qs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,f=1,T=new Float32Array(x*_*p),v=new Float32Array(m*_*p),A=new Float32Array(f*_*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,I=w>2?0:-1,S=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];T.set(S,x*_*w),v.set(d,m*_*w);const y=[w,w,w,w,w,w];A.set(y,f*_*w)}const P=new gn;P.setAttribute("position",new qn(T,x)),P.setAttribute("uv",new qn(v,m)),P.setAttribute("faceIndex",new qn(A,f)),e.push(P),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ku(i,e,t){const n=new Es(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sv(i,e,t){const n=new Float32Array(_s),s=new L(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Zu(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ju(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===kc||c===Gc,u=c===hr||c===dr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ju(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ju(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ev(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Av(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const x=p[_];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let v=0,A=T.length;v<A;v+=3){const P=T[v+0],w=T[v+1],b=T[v+2];d.push(P,w,w,b,b,P)}}else if(_!==void 0){const T=_.array;x=_.version;for(let v=0,A=T.length/3-1;v<A;v+=3){const P=v+0,w=v+1,b=v+2;d.push(P,w,w,b,b,P)}}else return;const m=new(Id(d)?zd:Vd)(d,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function bv(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function l(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,h*o,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<p;x++)this.render(h[x]/o,d[x]);else{_.multiDrawElementsWEBGL(n,d,0,r,h,0,p);let x=0;for(let m=0;m<p;m++)x+=d[m];t.update(x,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function wv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nv(i,e,t){const n=new WeakMap,s=new at;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let A=0;_===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let P=a.attributes.position.count*A,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const b=new Float32Array(P*w*4*h),I=new gl(b,P,w,h);I.type=Oi,I.needsUpdate=!0;const S=A*4;for(let F=0;F<h;F++){const W=f[F],D=T[F],K=v[F],Z=P*w*4*F;for(let re=0;re<W.count;re++){const le=re*S;_===!0&&(s.fromBufferAttribute(W,re),b[Z+le+0]=s.x,b[Z+le+1]=s.y,b[Z+le+2]=s.z,b[Z+le+3]=0),x===!0&&(s.fromBufferAttribute(D,re),b[Z+le+4]=s.x,b[Z+le+5]=s.y,b[Z+le+6]=s.z,b[Z+le+7]=0),m===!0&&(s.fromBufferAttribute(K,re),b[Z+le+8]=s.x,b[Z+le+9]=s.y,b[Z+le+10]=s.z,b[Z+le+11]=K.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new Me(P,w)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class io extends dn{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:sr,u!==sr&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===sr&&(n=fr),n===void 0&&u===Wr&&(n=eo),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=c!==void 0?c:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gd=new dn,Wd=new io(1,1);Wd.compareFunction=Pd;const Xd=new gl,qd=new f_,$d=new _l,Qu=[],eh=[],th=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function yr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Qu[s];if(r===void 0&&(r=new Float32Array(s),Qu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ma(i,e){let t=eh[e];t===void 0&&(t=new Int32Array(e),eh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Dv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),Yt(t,n)}}function Uv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),Yt(t,n)}}function Ov(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if($t(t,n))return;th.set(n),i.uniformMatrix4fv(this.addr,!1,th),Yt(t,n)}}function Fv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Xv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Wd:Gd;t.setTexture2D(e||r,s)}function qv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qd,s)}function $v(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$d,s)}function Yv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function jv(i){switch(i){case 5126:return Cv;case 35664:return Lv;case 35665:return Pv;case 35666:return Iv;case 35674:return Dv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return Vv;case 35668:case 35672:return zv;case 35669:case 35673:return Bv;case 5125:return Hv;case 36294:return kv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Yv}}function Kv(i,e){i.uniform1fv(this.addr,e)}function Zv(i,e){const t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function Jv(i,e){const t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qv(i,e){const t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function ey(i,e){const t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ty(i,e){const t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ny(i,e){const t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function iy(i,e){i.uniform1iv(this.addr,e)}function sy(i,e){i.uniform2iv(this.addr,e)}function ry(i,e){i.uniform3iv(this.addr,e)}function oy(i,e){i.uniform4iv(this.addr,e)}function ay(i,e){i.uniform1uiv(this.addr,e)}function cy(i,e){i.uniform2uiv(this.addr,e)}function ly(i,e){i.uniform3uiv(this.addr,e)}function uy(i,e){i.uniform4uiv(this.addr,e)}function hy(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gd,r[o])}function dy(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qd,r[o])}function py(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||$d,r[o])}function fy(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xd,r[o])}function my(i){switch(i){case 5126:return Kv;case 35664:return Zv;case 35665:return Jv;case 35666:return Qv;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return cy;case 36295:return ly;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return fy}}class gy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jv(t.type)}}class _y{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=my(t.type)}}class xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function sh(i,e){i.seq.push(e),i.map[e.id]=e}function vy(i,e,t){const n=i.name,s=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),o=dc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sh(t,l===void 0?new gy(a,i,e):new _y(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new xy(a),sh(t,h)),t=h}}}class Bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vy(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function rh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const yy=37297;let My=0;function Sy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ty(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===Xo&&t===Wo?n="LinearDisplayP3ToLinearSRGB":e===Wo&&t===Xo&&(n="LinearSRGBToLinearDisplayP3"),i){case Yn:case ha:return[n,"LinearTransferOETF"];case Ln:case pl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function oh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Sy(i.getShaderSource(e),o)}else return s}function Ey(i,e){const t=Ty(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ay(i,e){let t;switch(e){case gd:t="Linear";break;case _d:t="Reinhard";break;case xd:t="OptimizedCineon";break;case vd:t="ACESFilmic";break;case yd:t="AgX";break;case wg:t="Neutral";break;case bg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function by(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function wy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ny(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Fr(i){return i!==""}function ah(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(Ry,Ly)}const Cy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ly(i,e){let t=Ze[e];if(t===void 0){const n=Cy.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qc(t)}const Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(Py,Iy)}function Iy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===md?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function Uy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hr:case dr:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Oy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:e="ENVMAP_BLENDING_MULTIPLY";break;case Eg:e="ENVMAP_BLENDING_MIX";break;case Ag:e="ENVMAP_BLENDING_ADD";break}return e}function Vy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Dy(t),l=Uy(t),u=Oy(t),h=Fy(t),d=Vy(t),p=by(t),_=wy(r),x=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),f.length>0&&(f+=`
`)):(m=[uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),f=[uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ii?Ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Ey("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),o=qc(o),o=ah(o,t),o=ch(o,t),a=qc(a),a=ah(a,t),a=ch(a,t),o=lh(o),a=lh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=T+m+o,A=T+f+a,P=rh(s,s.VERTEX_SHADER,v),w=rh(s,s.FRAGMENT_SHADER,A);s.attachShader(x,P),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(F){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(P).trim(),K=s.getShaderInfoLog(w).trim();let Z=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,w);else{const le=oh(s,P,"vertex"),Y=oh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+le+`
`+Y)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||K==="")&&(re=!1);re&&(F.diagnostics={runnable:Z,programLog:W,vertexShader:{log:D,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(P),s.deleteShader(w),I=new Bo(s,x),S=Ny(s,x)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,yy)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=My++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=w,this}let By=0;class Hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ky(e),t.set(e,n)),n}}class ky{constructor(e){this.id=By++,this.code=e,this.usedTimes=0}}function Gy(i,e,t,n,s,r,o){const a=new Od,c=new Hy,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,F,W,D){const K=W.fog,Z=D.geometry,re=S.isMeshStandardMaterial?W.environment:null,le=(S.isMeshStandardMaterial?t:e).get(S.envMap||re),Y=le&&le.mapping===ua?le.image.height:null,ne=_[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=ie!==void 0?ie.length:0;let Le=0;Z.morphAttributes.position!==void 0&&(Le=1),Z.morphAttributes.normal!==void 0&&(Le=2),Z.morphAttributes.color!==void 0&&(Le=3);let Be,j,he,ye;if(ne){const jt=ui[ne];Be=jt.vertexShader,j=jt.fragmentShader}else Be=S.vertexShader,j=S.fragmentShader,c.update(S),he=c.getVertexShaderID(S),ye=c.getFragmentShaderID(S);const pe=i.getRenderTarget(),Ge=D.isInstancedMesh===!0,qe=D.isBatchedMesh===!0,et=!!S.map,B=!!S.matcap,Je=!!le,Fe=!!S.aoMap,Ct=!!S.lightMap,ze=!!S.bumpMap,ut=!!S.normalMap,N=!!S.displacementMap,M=!!S.emissiveMap,$=!!S.metalnessMap,te=!!S.roughnessMap,se=S.anisotropy>0,oe=S.clearcoat>0,De=S.iridescence>0,ue=S.sheen>0,Ce=S.transmission>0,Ue=se&&!!S.anisotropyMap,fe=oe&&!!S.clearcoatMap,Se=oe&&!!S.clearcoatNormalMap,He=oe&&!!S.clearcoatRoughnessMap,Ee=De&&!!S.iridescenceMap,Ae=De&&!!S.iridescenceThicknessMap,tt=ue&&!!S.sheenColorMap,it=ue&&!!S.sheenRoughnessMap,ct=!!S.specularMap,ot=!!S.specularColorMap,lt=!!S.specularIntensityMap,Ne=Ce&&!!S.transmissionMap,g=Ce&&!!S.thicknessMap,k=!!S.gradientMap,Q=!!S.alphaMap,de=S.alphaTest>0,Te=!!S.alphaHash,st=!!S.extensions;let Qe=ii;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const At={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Be,fragmentShader:j,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:qe,instancing:Ge,instancingColor:Ge&&D.instanceColor!==null,instancingMorph:Ge&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Yn,alphaToCoverage:!!S.alphaToCoverage,map:et,matcap:B,envMap:Je,envMapMode:Je&&le.mapping,envMapCubeUVHeight:Y,aoMap:Fe,lightMap:Ct,bumpMap:ze,normalMap:ut,displacementMap:d&&N,emissiveMap:M,normalMapObjectSpace:ut&&S.normalMapType===Cd,normalMapTangentSpace:ut&&S.normalMapType===Ts,metalnessMap:$,roughnessMap:te,anisotropy:se,anisotropyMap:Ue,clearcoat:oe,clearcoatMap:fe,clearcoatNormalMap:Se,clearcoatRoughnessMap:He,iridescence:De,iridescenceMap:Ee,iridescenceThicknessMap:Ae,sheen:ue,sheenColorMap:tt,sheenRoughnessMap:it,specularMap:ct,specularColorMap:ot,specularIntensityMap:lt,transmission:Ce,transmissionMap:Ne,thicknessMap:g,gradientMap:k,opaque:S.transparent===!1&&S.blending===ir&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:de,alphaHash:Te,combine:S.combine,mapUv:et&&x(S.map.channel),aoMapUv:Fe&&x(S.aoMap.channel),lightMapUv:Ct&&x(S.lightMap.channel),bumpMapUv:ze&&x(S.bumpMap.channel),normalMapUv:ut&&x(S.normalMap.channel),displacementMapUv:N&&x(S.displacementMap.channel),emissiveMapUv:M&&x(S.emissiveMap.channel),metalnessMapUv:$&&x(S.metalnessMap.channel),roughnessMapUv:te&&x(S.roughnessMap.channel),anisotropyMapUv:Ue&&x(S.anisotropyMap.channel),clearcoatMapUv:fe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:it&&x(S.sheenRoughnessMap.channel),specularMapUv:ct&&x(S.specularMap.channel),specularColorMapUv:ot&&x(S.specularColorMap.channel),specularIntensityMapUv:lt&&x(S.specularIntensityMap.channel),transmissionMapUv:Ne&&x(S.transmissionMap.channel),thicknessMapUv:g&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ut||se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Z.attributes.uv&&(et||Q),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,useLegacyLights:i._useLegacyLights,decodeVideoTexture:et&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ii,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:st&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)y.push(F),y.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(T(y,S),v(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const y=_[S.type];let F;if(y){const W=ui[y];F=b_.clone(W.uniforms)}else F=S.uniforms;return F}function P(S,y){let F;for(let W=0,D=u.length;W<D;W++){const K=u[W];if(K.cacheKey===y){F=K,++F.usedTimes;break}}return F===void 0&&(F=new zy(i,y,S,r),u.push(F)),F}function w(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function b(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:P,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:I}}function Wy(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Xy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,_,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,_,x,m){const f=o(h,d,p,_,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||Xy),n.length>1&&n.sort(d||hh),s.length>1&&s.sort(d||hh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function qy(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new dh,i.set(n,[o])):s>=r.length?(o=new dh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $y(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ie};break;case"SpotLight":t={position:new L,direction:new L,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Yy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jy=0;function Ky(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zy(i){const e=new $y,t=Yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new St,o=new St;function a(l,u){let h=0,d=0,p=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let _=0,x=0,m=0,f=0,T=0,v=0,A=0,P=0,w=0,b=0,I=0;l.sort(Ky);const S=u===!0?Math.PI:1;for(let F=0,W=l.length;F<W;F++){const D=l[F],K=D.color,Z=D.intensity,re=D.distance,le=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=K.r*Z*S,d+=K.g*Z*S,p+=K.b*Z*S;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],Z);I++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const ne=D.shadow,ie=t.get(D);ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.directionalShadow[_]=ie,n.directionalShadowMap[_]=le,n.directionalShadowMatrix[_]=D.shadow.matrix,v++}n.directional[_]=Y,_++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(K).multiplyScalar(Z*S),Y.distance=re,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[m]=Y;const ne=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,ne.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[m]=ne.matrix,D.castShadow){const ie=t.get(D);ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.spotShadow[m]=ie,n.spotShadowMap[m]=le,P++}m++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(K).multiplyScalar(Z),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[f]=Y,f++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity*S),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const ne=D.shadow,ie=t.get(D);ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,n.pointShadow[x]=ie,n.pointShadowMap[x]=le,n.pointShadowMatrix[x]=D.shadow.matrix,A++}n.point[x]=Y,x++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(Z*S),Y.groundColor.copy(D.groundColor).multiplyScalar(Z*S),n.hemi[T]=Y,T++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const y=n.hash;(y.directionalLength!==_||y.pointLength!==x||y.spotLength!==m||y.rectAreaLength!==f||y.hemiLength!==T||y.numDirectionalShadows!==v||y.numPointShadows!==A||y.numSpotShadows!==P||y.numSpotMaps!==w||y.numLightProbes!==I)&&(n.directional.length=_,n.spot.length=m,n.rectArea.length=f,n.point.length=x,n.hemi.length=T,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=P+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=I,y.directionalLength=_,y.pointLength=x,y.spotLength=m,y.rectAreaLength=f,y.hemiLength=T,y.numDirectionalShadows=v,y.numPointShadows=A,y.numSpotShadows=P,y.numSpotMaps=w,y.numLightProbes=I,n.version=jy++)}function c(l,u){let h=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const v=l[f];if(v.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(v.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const A=n.rectArea[_];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function ph(i){const e=new Zy(i),t=[],n=[];function s(){t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jy(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ph(i),e.set(s,[a])):r>=o.length?(a=new ph(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Qy extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eM extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iM(i,e,t){let n=new xl;const s=new Me,r=new Me,o=new at,a=new Qy({depthPacking:Bg}),c=new eM,l={},u=t.maxTextureSize,h={[zi]:Mn,[Mn]:zi,[Ii]:Ii},d=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:tM,fragmentShader:nM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let f=this.type;this.render=function(w,b,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Qi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const D=f!==Ni&&this.type===Ni,K=f===Ni&&this.type!==Ni;for(let Z=0,re=w.length;Z<re;Z++){const le=w[Z],Y=le.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ne=Y.getFrameExtents();if(s.multiply(ne),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,Y.mapSize.y=r.y)),Y.map===null||D===!0||K===!0){const ge=this.type!==Ni?{minFilter:sn,magFilter:sn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Es(s.x,s.y,ge),Y.map.texture.name=le.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ie=Y.getViewportCount();for(let ge=0;ge<ie;ge++){const Le=Y.getViewport(ge);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),W.viewport(o),Y.updateMatrices(le,ge),n=Y.getFrustum(),A(b,I,Y.camera,le,this.type)}Y.isPointLightShadow!==!0&&this.type===Ni&&T(Y,I),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,F)};function T(w,b){const I=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Es(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,I,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,I,p,x,null)}function v(w,b,I,S){let y=null;const F=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)y=F;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=y.uuid,D=b.uuid;let K=l[W];K===void 0&&(K={},l[W]=K);let Z=K[D];Z===void 0&&(Z=y.clone(),K[D]=Z,b.addEventListener("dispose",P)),y=Z}if(y.visible=b.visible,y.wireframe=b.wireframe,S===Ni?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:h[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=I}return y}function A(w,b,I,S,y){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ni)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const D=e.update(w),K=w.material;if(Array.isArray(K)){const Z=D.groups;for(let re=0,le=Z.length;re<le;re++){const Y=Z[re],ne=K[Y.materialIndex];if(ne&&ne.visible){const ie=v(w,ne,S,y);w.onBeforeShadow(i,w,b,I,D,ie,Y),i.renderBufferDirect(I,null,D,ie,w,Y),w.onAfterShadow(i,w,b,I,D,ie,Y)}}}else if(K.visible){const Z=v(w,K,S,y);w.onBeforeShadow(i,w,b,I,D,Z,null),i.renderBufferDirect(I,null,D,Z,w,null),w.onAfterShadow(i,w,b,I,D,Z,null)}}const W=w.children;for(let D=0,K=W.length;D<K;D++)A(W[D],b,I,S,y)}function P(w){w.target.removeEventListener("dispose",P);for(const I in l){const S=l[I],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function sM(i){function e(){let g=!1;const k=new at;let Q=null;const de=new at(0,0,0,0);return{setMask:function(Te){Q!==Te&&!g&&(i.colorMask(Te,Te,Te,Te),Q=Te)},setLocked:function(Te){g=Te},setClear:function(Te,st,Qe,At,jt){jt===!0&&(Te*=At,st*=At,Qe*=At),k.set(Te,st,Qe,At),de.equals(k)===!1&&(i.clearColor(Te,st,Qe,At),de.copy(k))},reset:function(){g=!1,Q=null,de.set(-1,0,0,0)}}}function t(){let g=!1,k=null,Q=null,de=null;return{setTest:function(Te){Te?ye(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Te){k!==Te&&!g&&(i.depthMask(Te),k=Te)},setFunc:function(Te){if(Q!==Te){switch(Te){case _g:i.depthFunc(i.NEVER);break;case xg:i.depthFunc(i.ALWAYS);break;case vg:i.depthFunc(i.LESS);break;case ko:i.depthFunc(i.LEQUAL);break;case yg:i.depthFunc(i.EQUAL);break;case Mg:i.depthFunc(i.GEQUAL);break;case Sg:i.depthFunc(i.GREATER);break;case Tg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=Te}},setLocked:function(Te){g=Te},setClear:function(Te){de!==Te&&(i.clearDepth(Te),de=Te)},reset:function(){g=!1,k=null,Q=null,de=null}}}function n(){let g=!1,k=null,Q=null,de=null,Te=null,st=null,Qe=null,At=null,jt=null;return{setTest:function(mt){g||(mt?ye(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(mt){k!==mt&&!g&&(i.stencilMask(mt),k=mt)},setFunc:function(mt,Ft,Vt){(Q!==mt||de!==Ft||Te!==Vt)&&(i.stencilFunc(mt,Ft,Vt),Q=mt,de=Ft,Te=Vt)},setOp:function(mt,Ft,Vt){(st!==mt||Qe!==Ft||At!==Vt)&&(i.stencilOp(mt,Ft,Vt),st=mt,Qe=Ft,At=Vt)},setLocked:function(mt){g=mt},setClear:function(mt){jt!==mt&&(i.clearStencil(mt),jt=mt)},reset:function(){g=!1,k=null,Q=null,de=null,Te=null,st=null,Qe=null,At=null,jt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,f=null,T=null,v=null,A=null,P=null,w=new Ie(0,0,0),b=0,I=!1,S=null,y=null,F=null,W=null,D=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,re=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(le)[1]),Z=re>=1):le.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),Z=re>=2);let Y=null,ne={};const ie=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Le=new at().fromArray(ie),Be=new at().fromArray(ge);function j(g,k,Q,de){const Te=new Uint8Array(4),st=i.createTexture();i.bindTexture(g,st),i.texParameteri(g,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(g,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<Q;Qe++)g===i.TEXTURE_3D||g===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(k+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return st}const he={};he[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),r.setFunc(ko),ze(!1),ut(jl),ye(i.CULL_FACE),Fe(Qi);function ye(g){l[g]!==!0&&(i.enable(g),l[g]=!0)}function pe(g){l[g]!==!1&&(i.disable(g),l[g]=!1)}function Ge(g,k){return u[g]!==k?(i.bindFramebuffer(g,k),u[g]=k,g===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=k),g===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=k),!0):!1}function qe(g,k){let Q=d,de=!1;if(g){Q=h.get(k),Q===void 0&&(Q=[],h.set(k,Q));const Te=g.textures;if(Q.length!==Te.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Qe=Te.length;st<Qe;st++)Q[st]=i.COLOR_ATTACHMENT0+st;Q.length=Te.length,de=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,de=!0);de&&i.drawBuffers(Q)}function et(g){return p!==g?(i.useProgram(g),p=g,!0):!1}const B={[gs]:i.FUNC_ADD,[eg]:i.FUNC_SUBTRACT,[tg]:i.FUNC_REVERSE_SUBTRACT};B[ng]=i.MIN,B[ig]=i.MAX;const Je={[sg]:i.ZERO,[rg]:i.ONE,[og]:i.SRC_COLOR,[Bc]:i.SRC_ALPHA,[dg]:i.SRC_ALPHA_SATURATE,[ug]:i.DST_COLOR,[cg]:i.DST_ALPHA,[ag]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[hg]:i.ONE_MINUS_DST_COLOR,[lg]:i.ONE_MINUS_DST_ALPHA,[pg]:i.CONSTANT_COLOR,[fg]:i.ONE_MINUS_CONSTANT_COLOR,[mg]:i.CONSTANT_ALPHA,[gg]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(g,k,Q,de,Te,st,Qe,At,jt,mt){if(g===Qi){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(ye(i.BLEND),_=!0),g!==Qm){if(g!==x||mt!==I){if((m!==gs||v!==gs)&&(i.blendEquation(i.FUNC_ADD),m=gs,v=gs),mt)switch(g){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}f=null,T=null,A=null,P=null,w.set(0,0,0),b=0,x=g,I=mt}return}Te=Te||k,st=st||Q,Qe=Qe||de,(k!==m||Te!==v)&&(i.blendEquationSeparate(B[k],B[Te]),m=k,v=Te),(Q!==f||de!==T||st!==A||Qe!==P)&&(i.blendFuncSeparate(Je[Q],Je[de],Je[st],Je[Qe]),f=Q,T=de,A=st,P=Qe),(At.equals(w)===!1||jt!==b)&&(i.blendColor(At.r,At.g,At.b,jt),w.copy(At),b=jt),x=g,I=!1}function Ct(g,k){g.side===Ii?pe(i.CULL_FACE):ye(i.CULL_FACE);let Q=g.side===Mn;k&&(Q=!Q),ze(Q),g.blending===ir&&g.transparent===!1?Fe(Qi):Fe(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),r.setFunc(g.depthFunc),r.setTest(g.depthTest),r.setMask(g.depthWrite),s.setMask(g.colorWrite);const de=g.stencilWrite;o.setTest(de),de&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),M(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(g){S!==g&&(g?i.frontFace(i.CW):i.frontFace(i.CCW),S=g)}function ut(g){g!==Km?(ye(i.CULL_FACE),g!==y&&(g===jl?i.cullFace(i.BACK):g===Zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),y=g}function N(g){g!==F&&(Z&&i.lineWidth(g),F=g)}function M(g,k,Q){g?(ye(i.POLYGON_OFFSET_FILL),(W!==k||D!==Q)&&(i.polygonOffset(k,Q),W=k,D=Q)):pe(i.POLYGON_OFFSET_FILL)}function $(g){g?ye(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function te(g){g===void 0&&(g=i.TEXTURE0+K-1),Y!==g&&(i.activeTexture(g),Y=g)}function se(g,k,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+K-1:Q=Y);let de=ne[Q];de===void 0&&(de={type:void 0,texture:void 0},ne[Q]=de),(de.type!==g||de.texture!==k)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(g,k||he[g]),de.type=g,de.texture=k)}function oe(){const g=ne[Y];g!==void 0&&g.type!==void 0&&(i.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function De(){try{i.compressedTexImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ce(){try{i.texSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function He(){try{i.texStorage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function tt(){try{i.texImage3D.apply(i,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function it(g){Le.equals(g)===!1&&(i.scissor(g.x,g.y,g.z,g.w),Le.copy(g))}function ct(g){Be.equals(g)===!1&&(i.viewport(g.x,g.y,g.z,g.w),Be.copy(g))}function ot(g,k){let Q=c.get(k);Q===void 0&&(Q=new WeakMap,c.set(k,Q));let de=Q.get(g);de===void 0&&(de=i.getUniformBlockIndex(k,g.name),Q.set(g,de))}function lt(g,k){const de=c.get(k).get(g);a.get(k)!==de&&(i.uniformBlockBinding(k,de,g.__bindingPointIndex),a.set(k,de))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Y=null,ne={},u={},h=new WeakMap,d=[],p=null,_=!1,x=null,m=null,f=null,T=null,v=null,A=null,P=null,w=new Ie(0,0,0),b=0,I=!1,S=null,y=null,F=null,W=null,D=null,Le.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ye,disable:pe,bindFramebuffer:Ge,drawBuffers:qe,useProgram:et,setBlending:Fe,setMaterial:Ct,setFlipSided:ze,setCullFace:ut,setLineWidth:N,setPolygonOffset:M,setScissorTest:$,activeTexture:te,bindTexture:se,unbindTexture:oe,compressedTexImage2D:De,compressedTexImage3D:ue,texImage2D:Ae,texImage3D:tt,updateUBOMapping:ot,uniformBlockBinding:lt,texStorage2D:He,texStorage3D:Ee,texSubImage2D:Ce,texSubImage3D:Ue,compressedTexSubImage2D:fe,compressedTexSubImage3D:Se,scissor:it,viewport:ct,reset:Ne}}function rM(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,M){return p?new OffscreenCanvas(N,M):Xr("canvas")}function x(N,M,$){let te=1;const se=ut(N);if((se.width>$||se.height>$)&&(te=$/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(te*se.width),De=Math.floor(te*se.height);h===void 0&&(h=_(oe,De));const ue=M?_(oe,De):h;return ue.width=oe,ue.height=De,ue.getContext("2d").drawImage(N,0,0,oe,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+oe+"x"+De+")."),ue}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==sn&&N.minFilter!==ti}function f(N){i.generateMipmap(N)}function T(N,M,$,te,se=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=M;if(M===i.RED&&($===i.FLOAT&&(oe=i.R32F),$===i.HALF_FLOAT&&(oe=i.R16F),$===i.UNSIGNED_BYTE&&(oe=i.R8)),M===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(oe=i.R8UI),$===i.UNSIGNED_SHORT&&(oe=i.R16UI),$===i.UNSIGNED_INT&&(oe=i.R32UI),$===i.BYTE&&(oe=i.R8I),$===i.SHORT&&(oe=i.R16I),$===i.INT&&(oe=i.R32I)),M===i.RG&&($===i.FLOAT&&(oe=i.RG32F),$===i.HALF_FLOAT&&(oe=i.RG16F),$===i.UNSIGNED_BYTE&&(oe=i.RG8)),M===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(oe=i.RG8UI),$===i.UNSIGNED_SHORT&&(oe=i.RG16UI),$===i.UNSIGNED_INT&&(oe=i.RG32UI),$===i.BYTE&&(oe=i.RG8I),$===i.SHORT&&(oe=i.RG16I),$===i.INT&&(oe=i.RG32I)),M===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),M===i.RGBA){const De=se?Go:gt.getTransfer(te);$===i.FLOAT&&(oe=i.RGBA32F),$===i.HALF_FLOAT&&(oe=i.RGBA16F),$===i.UNSIGNED_BYTE&&(oe=De===Tt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function v(N,M){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==sn&&N.minFilter!==ti?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function A(N){const M=N.target;M.removeEventListener("dispose",A),w(M),M.isVideoTexture&&u.delete(M)}function P(N){const M=N.target;M.removeEventListener("dispose",P),I(M)}function w(N){const M=n.get(N);if(M.__webglInit===void 0)return;const $=N.source,te=d.get($);if(te){const se=te[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(N),Object.keys(te).length===0&&d.delete($)}n.remove(N)}function b(N){const M=n.get(N);i.deleteTexture(M.__webglTexture);const $=N.source,te=d.get($);delete te[M.__cacheKey],o.memory.textures--}function I(N){const M=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let se=0;se<M.__webglFramebuffer[te].length;se++)i.deleteFramebuffer(M.__webglFramebuffer[te][se]);else i.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)i.deleteFramebuffer(M.__webglFramebuffer[te]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=N.textures;for(let te=0,se=$.length;te<se;te++){const oe=n.get($[te]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove($[te])}n.remove(N)}let S=0;function y(){S=0}function F(){const N=S;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),S+=1,N}function W(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function D(N,M){const $=n.get(N);if(N.isVideoTexture&&Ct(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){const te=N.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le($,N,M);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+M)}function K(N,M){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Le($,N,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+M)}function Z(N,M){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Le($,N,M);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+M)}function re(N,M){const $=n.get(N);if(N.version>0&&$.__version!==N.version){Be($,N,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+M)}const le={[pr]:i.REPEAT,[vs]:i.CLAMP_TO_EDGE,[Wc]:i.MIRRORED_REPEAT},Y={[sn]:i.NEAREST,[Ng]:i.NEAREST_MIPMAP_NEAREST,[lo]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},ne={[Hg]:i.NEVER,[qg]:i.ALWAYS,[Ld]:i.LESS,[Pd]:i.LEQUAL,[kg]:i.EQUAL,[Xg]:i.GEQUAL,[Gg]:i.GREATER,[Wg]:i.NOTEQUAL};function ie(N,M){if(M.type===Oi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ti||M.magFilter===Fa||M.magFilter===lo||M.magFilter===Ui||M.minFilter===ti||M.minFilter===Fa||M.minFilter===lo||M.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,le[M.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,le[M.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,le[M.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Y[M.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===sn||M.minFilter!==lo&&M.minFilter!==Ui||M.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ge(N,M){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",A));const te=M.source;let se=d.get(te);se===void 0&&(se={},d.set(te,se));const oe=W(M);if(oe!==N.__cacheKey){se[oe]===void 0&&(se[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),se[oe].usedTimes++;const De=se[N.__cacheKey];De!==void 0&&(se[N.__cacheKey].usedTimes--,De.usedTimes===0&&b(M)),N.__cacheKey=oe,N.__webglTexture=se[oe].texture}return $}function Le(N,M,$){let te=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=i.TEXTURE_3D);const se=ge(N,M),oe=M.source;t.bindTexture(te,N.__webglTexture,i.TEXTURE0+$);const De=n.get(oe);if(oe.version!==De.__version||se===!0){t.activeTexture(i.TEXTURE0+$);const ue=gt.getPrimaries(gt.workingColorSpace),Ce=M.colorSpace===Di?null:gt.getPrimaries(M.colorSpace),Ue=M.colorSpace===Di||ue===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let fe=x(M.image,!1,s.maxTextureSize);fe=ze(M,fe);const Se=r.convert(M.format,M.colorSpace),He=r.convert(M.type);let Ee=T(M.internalFormat,Se,He,M.colorSpace,M.isVideoTexture);ie(te,M);let Ae;const tt=M.mipmaps,it=M.isVideoTexture!==!0&&Ee!==Rd,ct=De.__version===void 0||se===!0,ot=oe.dataReady,lt=v(M,fe);if(M.isDepthTexture)Ee=i.DEPTH_COMPONENT16,M.type===Oi?Ee=i.DEPTH_COMPONENT32F:M.type===fr?Ee=i.DEPTH_COMPONENT24:M.type===eo&&(Ee=i.DEPTH24_STENCIL8),ct&&(it?t.texStorage2D(i.TEXTURE_2D,1,Ee,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ee,fe.width,fe.height,0,Se,He,null));else if(M.isDataTexture)if(tt.length>0){it&&ct&&t.texStorage2D(i.TEXTURE_2D,lt,Ee,tt[0].width,tt[0].height);for(let Ne=0,g=tt.length;Ne<g;Ne++)Ae=tt[Ne],it?ot&&t.texSubImage2D(i.TEXTURE_2D,Ne,0,0,Ae.width,Ae.height,Se,He,Ae.data):t.texImage2D(i.TEXTURE_2D,Ne,Ee,Ae.width,Ae.height,0,Se,He,Ae.data);M.generateMipmaps=!1}else it?(ct&&t.texStorage2D(i.TEXTURE_2D,lt,Ee,fe.width,fe.height),ot&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Se,He,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ee,fe.width,fe.height,0,Se,He,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ee,tt[0].width,tt[0].height,fe.depth);for(let Ne=0,g=tt.length;Ne<g;Ne++)Ae=tt[Ne],M.format!==fi?Se!==null?it?ot&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ne,0,0,0,Ae.width,Ae.height,fe.depth,Se,Ae.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ne,Ee,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?ot&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ne,0,0,0,Ae.width,Ae.height,fe.depth,Se,He,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ne,Ee,Ae.width,Ae.height,fe.depth,0,Se,He,Ae.data)}else{it&&ct&&t.texStorage2D(i.TEXTURE_2D,lt,Ee,tt[0].width,tt[0].height);for(let Ne=0,g=tt.length;Ne<g;Ne++)Ae=tt[Ne],M.format!==fi?Se!==null?it?ot&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ne,0,0,Ae.width,Ae.height,Se,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Ne,Ee,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?ot&&t.texSubImage2D(i.TEXTURE_2D,Ne,0,0,Ae.width,Ae.height,Se,He,Ae.data):t.texImage2D(i.TEXTURE_2D,Ne,Ee,Ae.width,Ae.height,0,Se,He,Ae.data)}else if(M.isDataArrayTexture)it?(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Ee,fe.width,fe.height,fe.depth),ot&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,He,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,fe.width,fe.height,fe.depth,0,Se,He,fe.data);else if(M.isData3DTexture)it?(ct&&t.texStorage3D(i.TEXTURE_3D,lt,Ee,fe.width,fe.height,fe.depth),ot&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,He,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,fe.width,fe.height,fe.depth,0,Se,He,fe.data);else if(M.isFramebufferTexture){if(ct)if(it)t.texStorage2D(i.TEXTURE_2D,lt,Ee,fe.width,fe.height);else{let Ne=fe.width,g=fe.height;for(let k=0;k<lt;k++)t.texImage2D(i.TEXTURE_2D,k,Ee,Ne,g,0,Se,He,null),Ne>>=1,g>>=1}}else if(tt.length>0){if(it&&ct){const Ne=ut(tt[0]);t.texStorage2D(i.TEXTURE_2D,lt,Ee,Ne.width,Ne.height)}for(let Ne=0,g=tt.length;Ne<g;Ne++)Ae=tt[Ne],it?ot&&t.texSubImage2D(i.TEXTURE_2D,Ne,0,0,Se,He,Ae):t.texImage2D(i.TEXTURE_2D,Ne,Ee,Se,He,Ae);M.generateMipmaps=!1}else if(it){if(ct){const Ne=ut(fe);t.texStorage2D(i.TEXTURE_2D,lt,Ee,Ne.width,Ne.height)}ot&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,He,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ee,Se,He,fe);m(M)&&f(te),De.__version=oe.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Be(N,M,$){if(M.image.length!==6)return;const te=ge(N,M),se=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+$);const oe=n.get(se);if(se.version!==oe.__version||te===!0){t.activeTexture(i.TEXTURE0+$);const De=gt.getPrimaries(gt.workingColorSpace),ue=M.colorSpace===Di?null:gt.getPrimaries(M.colorSpace),Ce=M.colorSpace===Di||De===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let g=0;g<6;g++)!Ue&&!fe?Se[g]=x(M.image[g],!0,s.maxCubemapSize):Se[g]=fe?M.image[g].image:M.image[g],Se[g]=ze(M,Se[g]);const He=Se[0],Ee=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),tt=T(M.internalFormat,Ee,Ae,M.colorSpace),it=M.isVideoTexture!==!0,ct=oe.__version===void 0||te===!0,ot=se.dataReady;let lt=v(M,He);ie(i.TEXTURE_CUBE_MAP,M);let Ne;if(Ue){it&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,tt,He.width,He.height);for(let g=0;g<6;g++){Ne=Se[g].mipmaps;for(let k=0;k<Ne.length;k++){const Q=Ne[k];M.format!==fi?Ee!==null?it?ot&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k,0,0,Q.width,Q.height,Ee,Q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k,tt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k,0,0,Q.width,Q.height,Ee,Ae,Q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k,tt,Q.width,Q.height,0,Ee,Ae,Q.data)}}}else{if(Ne=M.mipmaps,it&&ct){Ne.length>0&&lt++;const g=ut(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,lt,tt,g.width,g.height)}for(let g=0;g<6;g++)if(fe){it?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,Se[g].width,Se[g].height,Ee,Ae,Se[g].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,tt,Se[g].width,Se[g].height,0,Ee,Ae,Se[g].data);for(let k=0;k<Ne.length;k++){const de=Ne[k].image[g].image;it?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k+1,0,0,de.width,de.height,Ee,Ae,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k+1,tt,de.width,de.height,0,Ee,Ae,de.data)}}else{it?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,Ee,Ae,Se[g]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,tt,Ee,Ae,Se[g]);for(let k=0;k<Ne.length;k++){const Q=Ne[k];it?ot&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k+1,0,0,Ee,Ae,Q.image[g]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g,k+1,tt,Ee,Ae,Q.image[g])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),oe.__version=se.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function j(N,M,$,te,se,oe){const De=r.convert($.format,$.colorSpace),ue=r.convert($.type),Ce=T($.internalFormat,De,ue,$.colorSpace);if(!n.get(M).__hasExternalTextures){const fe=Math.max(1,M.width>>oe),Se=Math.max(1,M.height>>oe);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,oe,Ce,fe,Se,M.depth,0,De,ue,null):t.texImage2D(se,oe,Ce,fe,Se,0,De,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Fe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,se,n.get($).__webglTexture,0,Je(M)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,se,n.get($).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(N,M,$){if(i.bindRenderbuffer(i.RENDERBUFFER,N),M.depthBuffer&&!M.stencilBuffer){let te=i.DEPTH_COMPONENT24;if($||Fe(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===Oi?te=i.DEPTH_COMPONENT32F:se.type===fr&&(te=i.DEPTH_COMPONENT24));const oe=Je(M);Fe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,te,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,te,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,N)}else if(M.depthBuffer&&M.stencilBuffer){const te=Je(M);$&&Fe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):Fe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,N)}else{const te=M.textures;for(let se=0;se<te.length;se++){const oe=te[se],De=r.convert(oe.format,oe.colorSpace),ue=r.convert(oe.type),Ce=T(oe.internalFormat,De,ue,oe.colorSpace),Ue=Je(M);$&&Fe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ce,M.width,M.height):Fe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,Ce,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(N,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,se=Je(M);if(M.depthTexture.format===sr)Fe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===Wr)Fe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function pe(N){const M=n.get(N),$=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");ye(M.__webglFramebuffer,N)}else if($){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=i.createRenderbuffer(),he(M.__webglDepthbuffer[te],N,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),he(M.__webglDepthbuffer,N,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(N,M,$){const te=n.get(N);M!==void 0&&j(te.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&pe(N)}function qe(N){const M=N.texture,$=n.get(N),te=n.get(M);N.addEventListener("dispose",P);const se=N.textures,oe=N.isWebGLCubeRenderTarget===!0,De=se.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=M.version,o.memory.textures++),oe){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)$.__webglFramebuffer[ue][Ce]=i.createFramebuffer()}else $.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)$.__webglFramebuffer[ue]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(De)for(let ue=0,Ce=se.length;ue<Ce;ue++){const Ue=n.get(se[ue]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Fe(N)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const Ce=se[ue];$.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);const Ue=r.convert(Ce.format,Ce.colorSpace),fe=r.convert(Ce.type),Se=T(Ce.internalFormat,Ue,fe,Ce.colorSpace,N.isXRRenderTarget===!0),He=Je(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Se,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,$.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),he($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ie(i.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)j($.__webglFramebuffer[ue][Ce],N,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else j($.__webglFramebuffer[ue],N,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ue=0,Ce=se.length;ue<Ce;ue++){const Ue=se[ue],fe=n.get(Ue);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),ie(i.TEXTURE_2D,Ue),j($.__webglFramebuffer,N,Ue,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),m(Ue)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ue=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,te.__webglTexture),ie(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let Ce=0;Ce<M.mipmaps.length;Ce++)j($.__webglFramebuffer[Ce],N,M,i.COLOR_ATTACHMENT0,ue,Ce);else j($.__webglFramebuffer,N,M,i.COLOR_ATTACHMENT0,ue,0);m(M)&&f(ue),t.unbindTexture()}N.depthBuffer&&pe(N)}function et(N){const M=N.textures;for(let $=0,te=M.length;$<te;$++){const se=M[$];if(m(se)){const oe=N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,De=n.get(se).__webglTexture;t.bindTexture(oe,De),f(oe),t.unbindTexture()}}}function B(N){if(N.samples>0&&Fe(N)===!1){const M=N.textures,$=N.width,te=N.height;let se=i.COLOR_BUFFER_BIT;const oe=[],De=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(N),Ce=M.length>1;if(Ce)for(let Ue=0;Ue<M.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){oe.push(i.COLOR_ATTACHMENT0+Ue),N.depthBuffer&&oe.push(De);const fe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(fe===!1&&(N.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&ue.__isTransmissionRenderTarget!==!0&&(se|=i.STENCIL_BUFFER_BIT)),Ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ue]),fe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[De]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[De])),Ce){const Se=n.get(M[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,$,te,0,0,$,te,se,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<M.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Ue]);const fe=n.get(M[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Je(N){return Math.min(s.maxSamples,N.samples)}function Fe(N){const M=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(N){const M=o.render.frame;u.get(N)!==M&&(u.set(N,M),N.update())}function ze(N,M){const $=N.colorSpace,te=N.format,se=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Yn&&$!==Di&&(gt.getTransfer($)===Tt?(te!==fi||se!==es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=re,this.rebindTextures=Ge,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Fe}function oM(i,e){function t(n,s=Di){let r;const o=gt.getTransfer(s);if(n===es)return i.UNSIGNED_BYTE;if(n===Ed)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ad)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rg)return i.BYTE;if(n===Cg)return i.SHORT;if(n===Sd)return i.UNSIGNED_SHORT;if(n===Td)return i.INT;if(n===fr)return i.UNSIGNED_INT;if(n===Oi)return i.FLOAT;if(n===Gr)return i.HALF_FLOAT;if(n===Pg)return i.ALPHA;if(n===Ig)return i.RGB;if(n===fi)return i.RGBA;if(n===Dg)return i.LUMINANCE;if(n===Ug)return i.LUMINANCE_ALPHA;if(n===sr)return i.DEPTH_COMPONENT;if(n===Wr)return i.DEPTH_STENCIL;if(n===Og)return i.RED;if(n===bd)return i.RED_INTEGER;if(n===Fg)return i.RG;if(n===wd)return i.RG_INTEGER;if(n===Nd)return i.RGBA_INTEGER;if(n===Va||n===za||n===Ba||n===Ha)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===eu||n===tu||n===nu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rd)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===iu||n===su)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===iu)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===su)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ru||n===ou||n===au||n===cu||n===lu||n===uu||n===hu||n===du||n===pu||n===fu||n===mu||n===gu||n===_u||n===xu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ru)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ou)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===au)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_u)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===vu||n===yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vg||n===Mu||n===Su||n===Tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Su)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class aM extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vr extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cM={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new dn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Bi({vertexShader:lM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pn(new fa(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class dM extends ki{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,_=null;const x=new hM,m=t.getContextAttributes();let f=null,T=null;const v=[],A=[],P=new Me;let w=null;const b=new vn;b.layers.enable(1),b.viewport=new at;const I=new vn;I.layers.enable(2),I.viewport=new at;const S=[b,I],y=new aM;y.layers.enable(1),y.layers.enable(2);let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=v[j];return he===void 0&&(he=new pc,v[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=v[j];return he===void 0&&(he=new pc,v[j]=he),he.getGripSpace()},this.getHand=function(j){let he=v[j];return he===void 0&&(he=new pc,v[j]=he),he.getHandSpace()};function D(j){const he=A.indexOf(j.inputSource);if(he===-1)return;const ye=v[he];ye!==void 0&&(ye.update(j.inputSource,j.frame,l||o),ye.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<v.length;j++){const he=A[j];he!==null&&(A[j]=null,v[j].disconnect(he))}F=null,W=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,T=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Es(p.framebufferWidth,p.framebufferHeight,{format:fi,type:es,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,ye=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Wr:sr,ye=m.stencil?eo:fr);const Ge={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Es(d.textureWidth,d.textureHeight,{format:fi,type:es,depthTexture:new io(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const qe=e.properties.get(T);qe.__ignoreDepthValues=d.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Z(j){for(let he=0;he<j.removed.length;he++){const ye=j.removed[he],pe=A.indexOf(ye);pe>=0&&(A[pe]=null,v[pe].disconnect(ye))}for(let he=0;he<j.added.length;he++){const ye=j.added[he];let pe=A.indexOf(ye);if(pe===-1){for(let qe=0;qe<v.length;qe++)if(qe>=A.length){A.push(ye),pe=qe;break}else if(A[qe]===null){A[qe]=ye,pe=qe;break}if(pe===-1)break}const Ge=v[pe];Ge&&Ge.connect(ye)}}const re=new L,le=new L;function Y(j,he,ye){re.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(ye.matrixWorld);const pe=re.distanceTo(le),Ge=he.projectionMatrix.elements,qe=ye.projectionMatrix.elements,et=Ge[14]/(Ge[10]-1),B=Ge[14]/(Ge[10]+1),Je=(Ge[9]+1)/Ge[5],Fe=(Ge[9]-1)/Ge[5],Ct=(Ge[8]-1)/Ge[0],ze=(qe[8]+1)/qe[0],ut=et*Ct,N=et*ze,M=pe/(-Ct+ze),$=M*-Ct;he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($),j.translateZ(M),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const te=et+M,se=B+M,oe=ut-$,De=N+(pe-$),ue=Je*B/se*te,Ce=Fe*B/se*te;j.projectionMatrix.makePerspective(oe,De,ue,Ce,te,se),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ne(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),y.near=I.near=b.near=j.near,y.far=I.far=b.far=j.far,(F!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),F=y.near,W=y.far,b.near=F,b.far=W,I.near=F,I.far=W,b.updateProjectionMatrix(),I.updateProjectionMatrix(),j.updateProjectionMatrix());const he=j.parent,ye=y.cameras;ne(y,he);for(let pe=0;pe<ye.length;pe++)ne(ye[pe],he);ye.length===2?Y(y,b,I):y.projectionMatrix.copy(b.projectionMatrix),ie(j,y,he)};function ie(j,he,ye){ye===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(ye.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=gr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null};let ge=null;function Le(j,he){if(u=he.getViewerPose(l||o),_=he,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let pe=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let qe=0;qe<ye.length;qe++){const et=ye[qe];let B=null;if(p!==null)B=p.getViewport(et);else{const Fe=h.getViewSubImage(d,et);B=Fe.viewport,qe===0&&(e.setRenderTargetTextures(T,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(T))}let Je=S[qe];Je===void 0&&(Je=new vn,Je.layers.enable(qe),Je.viewport=new at,S[qe]=Je),Je.matrix.fromArray(et.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(et.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(B.x,B.y,B.width,B.height),qe===0&&(y.matrix.copy(Je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(Je)}const Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const qe=h.getDepthInformation(ye[0]);qe&&qe.isValid&&qe.texture&&x.init(e,qe,s.renderState)}}for(let ye=0;ye<v.length;ye++){const pe=A[ye],Ge=v[ye];pe!==null&&Ge!==void 0&&Ge.update(pe,he,l||o)}x.render(e,y),ge&&ge(j,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),_=null}const Be=new kd;Be.setAnimationLoop(Le),this.setAnimationLoop=function(j){ge=j},this.dispose=function(){}}}const ds=new $n,pM=new St;function fM(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Bd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,v,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),v=T.envMap,A=T.envMapRotation;if(v&&(m.envMap.value=v,ds.copy(A),ds.x*=-1,ds.y*=-1,ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(pM.makeRotationFromEuler(ds)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*P,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mM(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,v){const A=v.program;n.uniformBlockBinding(T,A)}function l(T,v){let A=s[T.id];A===void 0&&(_(T),A=u(T),s[T.id]=A,T.addEventListener("dispose",m));const P=v.program;n.updateUBOMapping(T,P);const w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function u(T){const v=h();T.__bindingPointIndex=v;const A=i.createBuffer(),P=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,A),A}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const v=s[T.id],A=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=A.length;w<b;w++){const I=Array.isArray(A[w])?A[w]:[A[w]];for(let S=0,y=I.length;S<y;S++){const F=I[S];if(p(F,w,S,P)===!0){const W=F.__offset,D=Array.isArray(F.value)?F.value:[F.value];let K=0;for(let Z=0;Z<D.length;Z++){const re=D[Z],le=x(re);typeof re=="number"||typeof re=="boolean"?(F.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,W+K,F.__data)):re.isMatrix3?(F.__data[0]=re.elements[0],F.__data[1]=re.elements[1],F.__data[2]=re.elements[2],F.__data[3]=0,F.__data[4]=re.elements[3],F.__data[5]=re.elements[4],F.__data[6]=re.elements[5],F.__data[7]=0,F.__data[8]=re.elements[6],F.__data[9]=re.elements[7],F.__data[10]=re.elements[8],F.__data[11]=0):(re.toArray(F.__data,K),K+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,v,A,P){const w=T.value,b=v+"_"+A;if(P[b]===void 0)return typeof w=="number"||typeof w=="boolean"?P[b]=w:P[b]=w.clone(),!0;{const I=P[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return P[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(T){const v=T.uniforms;let A=0;const P=16;for(let b=0,I=v.length;b<I;b++){const S=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,F=S.length;y<F;y++){const W=S[y],D=Array.isArray(W.value)?W.value:[W.value];for(let K=0,Z=D.length;K<Z;K++){const re=D[K],le=x(re),Y=A%P;Y!==0&&P-Y<le.boundary&&(A+=P-Y),W.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=le.storage}}}const w=A%P;return w>0&&(A+=P-w),T.__size=A,T.__cache={},this}function x(T){const v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){const v=T.target;v.removeEventListener("dispose",m);const A=o.indexOf(v.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class gM{constructor(e={}){const{canvas:t=l_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ln,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const v=this;let A=!1,P=0,w=0,b=null,I=-1,S=null;const y=new at,F=new at;let W=null;const D=new Ie(0);let K=0,Z=t.width,re=t.height,le=1,Y=null,ne=null;const ie=new at(0,0,Z,re),ge=new at(0,0,Z,re);let Le=!1;const Be=new xl;let j=!1,he=!1;const ye=new St,pe=new Me,Ge=new L,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return b===null?le:1}let B=n;function Je(E,V){const X=t.getContext(E,V);return X!==null?X:null}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){const V="webgl2";if(B=Je(V,E),B===null)throw Je(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Fe,Ct,ze,ut,N,M,$,te,se,oe,De,ue,Ce,Ue,fe,Se,He,Ee,Ae,tt,it,ct,ot,lt;function Ne(){Fe=new Ev(B),Fe.init(),Ct=new xv(B,Fe,e),ct=new oM(B,Fe),ze=new sM(B),ut=new wv(B),N=new Wy,M=new rM(B,Fe,ze,N,Ct,ct,ut),$=new yv(v),te=new Tv(v),se=new I_(B),ot=new gv(B,se),oe=new Av(B,se,ut,ot),De=new Rv(B,oe,se,ut),Ae=new Nv(B,Ct,M),Se=new vv(N),ue=new Gy(v,$,te,Fe,Ct,ot,Se),Ce=new fM(v,N),Ue=new qy,fe=new Jy(Fe),Ee=new mv(v,$,te,ze,De,d,c),He=new iM(v,De,Ct),lt=new mM(B,ut,Ct,ze),tt=new _v(B,Fe,ut),it=new bv(B,Fe,ut),ut.programs=ue.programs,v.capabilities=Ct,v.extensions=Fe,v.properties=N,v.renderLists=Ue,v.shadowMap=He,v.state=ze,v.info=ut}Ne();const g=new dM(v,B);this.xr=g,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(E){E!==void 0&&(le=E,this.setSize(Z,re,!1))},this.getSize=function(E){return E.set(Z,re)},this.setSize=function(E,V,X=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,re=V,t.width=Math.floor(E*le),t.height=Math.floor(V*le),X===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(Z*le,re*le).floor()},this.setDrawingBufferSize=function(E,V,X){Z=E,re=V,le=X,t.width=Math.floor(E*X),t.height=Math.floor(V*X),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,V,X,q){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,V,X,q),ze.viewport(y.copy(ie).multiplyScalar(le).round())},this.getScissor=function(E){return E.copy(ge)},this.setScissor=function(E,V,X,q){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,V,X,q),ze.scissor(F.copy(ge).multiplyScalar(le).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(E){ze.setScissorTest(Le=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,V=!0,X=!0){let q=0;if(E){let G=!1;if(b!==null){const ve=b.texture.format;G=ve===Nd||ve===wd||ve===bd}if(G){const ve=b.texture.type,Re=ve===es||ve===fr||ve===Sd||ve===eo||ve===Ed||ve===Ad,Oe=Ee.getClearColor(),ke=Ee.getClearAlpha(),$e=Oe.r,We=Oe.g,Ye=Oe.b;Re?(p[0]=$e,p[1]=We,p[2]=Ye,p[3]=ke,B.clearBufferuiv(B.COLOR,0,p)):(_[0]=$e,_[1]=We,_[2]=Ye,_[3]=ke,B.clearBufferiv(B.COLOR,0,_))}else q|=B.COLOR_BUFFER_BIT}V&&(q|=B.DEPTH_BUFFER_BIT),X&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ue.dispose(),fe.dispose(),N.dispose(),$.dispose(),te.dispose(),De.dispose(),ot.dispose(),lt.dispose(),ue.dispose(),g.dispose(),g.removeEventListener("sessionstart",Ft),g.removeEventListener("sessionend",Vt),bn.stop()};function k(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=ut.autoReset,V=He.enabled,X=He.autoUpdate,q=He.needsUpdate,G=He.type;Ne(),ut.autoReset=E,He.enabled=V,He.autoUpdate=X,He.needsUpdate=q,He.type=G}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Te(E){const V=E.target;V.removeEventListener("dispose",Te),st(V)}function st(E){Qe(E),N.remove(E)}function Qe(E){const V=N.get(E).programs;V!==void 0&&(V.forEach(function(X){ue.releaseProgram(X)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,X,q,G,ve){V===null&&(V=qe);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Oe=qm(E,V,X,q,G);ze.setMaterial(q,Re);let ke=X.index,$e=1;if(q.wireframe===!0){if(ke=oe.getWireframeAttribute(X),ke===void 0)return;$e=2}const We=X.drawRange,Ye=X.attributes.position;let Dt=We.start*$e,wn=(We.start+We.count)*$e;ve!==null&&(Dt=Math.max(Dt,ve.start*$e),wn=Math.min(wn,(ve.start+ve.count)*$e)),ke!==null?(Dt=Math.max(Dt,0),wn=Math.min(wn,ke.count)):Ye!=null&&(Dt=Math.max(Dt,0),wn=Math.min(wn,Ye.count));const Kt=wn-Dt;if(Kt<0||Kt===1/0)return;ot.setup(G,q,Oe,X,ke);let Mi,Rt=tt;if(ke!==null&&(Mi=se.get(ke),Rt=it,Rt.setIndex(Mi)),G.isMesh)q.wireframe===!0?(ze.setLineWidth(q.wireframeLinewidth*et()),Rt.setMode(B.LINES)):Rt.setMode(B.TRIANGLES);else if(G.isLine){let Ke=q.linewidth;Ke===void 0&&(Ke=1),ze.setLineWidth(Ke*et()),G.isLineSegments?Rt.setMode(B.LINES):G.isLineLoop?Rt.setMode(B.LINE_LOOP):Rt.setMode(B.LINE_STRIP)}else G.isPoints?Rt.setMode(B.POINTS):G.isSprite&&Rt.setMode(B.TRIANGLES);if(G.isBatchedMesh)Rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Rt.renderInstances(Dt,Kt,G.count);else if(X.isInstancedBufferGeometry){const Ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ia=Math.min(X.instanceCount,Ke);Rt.renderInstances(Dt,Kt,Ia)}else Rt.render(Dt,Kt)};function At(E,V,X){E.transparent===!0&&E.side===Ii&&E.forceSinglePass===!1?(E.side=Mn,E.needsUpdate=!0,co(E,V,X),E.side=zi,E.needsUpdate=!0,co(E,V,X),E.side=Ii):co(E,V,X)}this.compile=function(E,V,X=null){X===null&&(X=E),m=fe.get(X),m.init(),T.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);const q=new Set;return E.traverse(function(G){const ve=G.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){const Oe=ve[Re];At(Oe,X,G),q.add(Oe)}else At(ve,X,G),q.add(ve)}),T.pop(),m=null,q},this.compileAsync=function(E,V,X=null){const q=this.compile(E,V,X);return new Promise(G=>{function ve(){if(q.forEach(function(Re){N.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){G(E);return}setTimeout(ve,10)}Fe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let jt=null;function mt(E){jt&&jt(E)}function Ft(){bn.stop()}function Vt(){bn.start()}const bn=new kd;bn.setAnimationLoop(mt),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(E){jt=E,g.setAnimationLoop(E),E===null?bn.stop():bn.start()},g.addEventListener("sessionstart",Ft),g.addEventListener("sessionend",Vt),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(V),V=g.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,V,b),m=fe.get(E,T.length),m.init(),T.push(m),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Be.setFromProjectionMatrix(ye),he=this.localClippingEnabled,j=Se.init(this.clippingPlanes,he),x=Ue.get(E,f.length),x.init(),f.push(x),Bn(E,V,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Y,ne),this.info.render.frame++,j===!0&&Se.beginShadows();const X=m.state.shadowsArray;if(He.render(X,E,V),j===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1)&&Ee.render(x,E),m.setupLights(v._useLegacyLights),V.isArrayCamera){const q=V.cameras;for(let G=0,ve=q.length;G<ve;G++){const Re=q[G];Gi(x,E,Re,Re.viewport)}}else Gi(x,E,V);b!==null&&(M.updateMultisampleRenderTarget(b),M.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(v,E,V),ot.resetDefaultState(),I=-1,S=null,T.pop(),T.length>0?m=T[T.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Bn(E,V,X,q){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){q&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const Re=De.update(E),Oe=E.material;Oe.visible&&x.push(E,Re,Oe,X,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const Re=De.update(E),Oe=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Oe)){const ke=Re.groups;for(let $e=0,We=ke.length;$e<We;$e++){const Ye=ke[$e],Dt=Oe[Ye.materialIndex];Dt&&Dt.visible&&x.push(E,Re,Dt,X,Ge.z,Ye)}}else Oe.visible&&x.push(E,Re,Oe,X,Ge.z,null)}}const ve=E.children;for(let Re=0,Oe=ve.length;Re<Oe;Re++)Bn(ve[Re],V,X,q)}function Gi(E,V,X,q){const G=E.opaque,ve=E.transmissive,Re=E.transparent;m.setupLightsView(X),j===!0&&Se.setGlobalState(v.clippingPlanes,X),ve.length>0&&Is(G,ve,V,X),q&&ze.viewport(y.copy(q)),G.length>0&&rs(G,V,X),ve.length>0&&rs(ve,V,X),Re.length>0&&rs(Re,V,X),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Is(E,V,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Es(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Gr:es,minFilter:Ui,samples:4,stencilBuffer:r});const $e=N.get(m.state.transmissionRenderTarget);$e.__isTransmissionRenderTarget=!0}const ve=m.state.transmissionRenderTarget;v.getDrawingBufferSize(pe),ve.setSize(pe.x,pe.y);const Re=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(D),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=ii,rs(E,X,q),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let ke=!1;for(let $e=0,We=V.length;$e<We;$e++){const Ye=V[$e],Dt=Ye.object,wn=Ye.geometry,Kt=Ye.material,Mi=Ye.group;if(Kt.side===Ii&&Dt.layers.test(q.layers)){const Rt=Kt.side;Kt.side=Mn,Kt.needsUpdate=!0,Wl(Dt,X,q,wn,Kt,Mi),Kt.side=Rt,Kt.needsUpdate=!0,ke=!0}}ke===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),v.setRenderTarget(Re),v.setClearColor(D,K),v.toneMapping=Oe}function rs(E,V,X){const q=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ve=E.length;G<ve;G++){const Re=E[G],Oe=Re.object,ke=Re.geometry,$e=q===null?Re.material:q,We=Re.group;Oe.layers.test(X.layers)&&Wl(Oe,V,X,ke,$e,We)}}function Wl(E,V,X,q,G,ve){E.onBeforeRender(v,V,X,q,G,ve),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(v,V,X,q,E,ve),G.transparent===!0&&G.side===Ii&&G.forceSinglePass===!1?(G.side=Mn,G.needsUpdate=!0,v.renderBufferDirect(X,V,q,G,E,ve),G.side=zi,G.needsUpdate=!0,v.renderBufferDirect(X,V,q,G,E,ve),G.side=Ii):v.renderBufferDirect(X,V,q,G,E,ve),E.onAfterRender(v,V,X,q,G,ve)}function co(E,V,X){V.isScene!==!0&&(V=qe);const q=N.get(E),G=m.state.lights,ve=m.state.shadowsArray,Re=G.state.version,Oe=ue.getParameters(E,G.state,ve,V,X),ke=ue.getProgramCacheKey(Oe);let $e=q.programs;q.environment=E.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(E.isMeshStandardMaterial?te:$).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,$e===void 0&&(E.addEventListener("dispose",Te),$e=new Map,q.programs=$e);let We=$e.get(ke);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Re)return ql(E,Oe),We}else Oe.uniforms=ue.getUniforms(E),E.onBuild(X,Oe,v),E.onBeforeCompile(Oe,v),We=ue.acquireProgram(Oe,ke),$e.set(ke,We),q.uniforms=Oe.uniforms;const Ye=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ye.clippingPlanes=Se.uniform),ql(E,Oe),q.needsLights=Ym(E),q.lightsStateVersion=Re,q.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function Xl(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=Bo.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function ql(E,V){const X=N.get(E);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function qm(E,V,X,q,G){V.isScene!==!0&&(V=qe),M.resetTextureUnits();const ve=V.fog,Re=q.isMeshStandardMaterial?V.environment:null,Oe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Yn,ke=(q.isMeshStandardMaterial?te:$).get(q.envMap||Re),$e=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ye=!!X.morphAttributes.position,Dt=!!X.morphAttributes.normal,wn=!!X.morphAttributes.color;let Kt=ii;q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Kt=v.toneMapping);const Mi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Rt=Mi!==void 0?Mi.length:0,Ke=N.get(q),Ia=m.state.lights;if(j===!0&&(he===!0||E!==S)){const Hn=E===S&&q.id===I;Se.setState(q,E,Hn)}let bt=!1;q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ia.state.version||Ke.outputColorSpace!==Oe||G.isBatchedMesh&&Ke.batching===!1||!G.isBatchedMesh&&Ke.batching===!0||G.isInstancedMesh&&Ke.instancing===!1||!G.isInstancedMesh&&Ke.instancing===!0||G.isSkinnedMesh&&Ke.skinning===!1||!G.isSkinnedMesh&&Ke.skinning===!0||G.isInstancedMesh&&Ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ke.instancingMorph===!1&&G.morphTexture!==null||Ke.envMap!==ke||q.fog===!0&&Ke.fog!==ve||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Se.numPlanes||Ke.numIntersection!==Se.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==We||Ke.morphTargets!==Ye||Ke.morphNormals!==Dt||Ke.morphColors!==wn||Ke.toneMapping!==Kt||Ke.morphTargetsCount!==Rt)&&(bt=!0):(bt=!0,Ke.__version=q.version);let os=Ke.currentProgram;bt===!0&&(os=co(q,V,G));let $l=!1,Rr=!1,Da=!1;const cn=os.getUniforms(),Wi=Ke.uniforms;if(ze.useProgram(os.program)&&($l=!0,Rr=!0,Da=!0),q.id!==I&&(I=q.id,Rr=!0),$l||S!==E){cn.setValue(B,"projectionMatrix",E.projectionMatrix),cn.setValue(B,"viewMatrix",E.matrixWorldInverse);const Hn=cn.map.cameraPosition;Hn!==void 0&&Hn.setValue(B,Ge.setFromMatrixPosition(E.matrixWorld)),Ct.logarithmicDepthBuffer&&cn.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&cn.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Rr=!0,Da=!0)}if(G.isSkinnedMesh){cn.setOptional(B,G,"bindMatrix"),cn.setOptional(B,G,"bindMatrixInverse");const Hn=G.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),cn.setValue(B,"boneTexture",Hn.boneTexture,M))}G.isBatchedMesh&&(cn.setOptional(B,G,"batchingTexture"),cn.setValue(B,"batchingTexture",G._matricesTexture,M));const Ua=X.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0)&&Ae.update(G,X,os),(Rr||Ke.receiveShadow!==G.receiveShadow)&&(Ke.receiveShadow=G.receiveShadow,cn.setValue(B,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Wi.envMap.value=ke,Wi.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&V.environment!==null&&(Wi.envMapIntensity.value=V.environmentIntensity),Rr&&(cn.setValue(B,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&$m(Wi,Da),ve&&q.fog===!0&&Ce.refreshFogUniforms(Wi,ve),Ce.refreshMaterialUniforms(Wi,q,le,re,m.state.transmissionRenderTarget),Bo.upload(B,Xl(Ke),Wi,M)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Bo.upload(B,Xl(Ke),Wi,M),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&cn.setValue(B,"center",G.center),cn.setValue(B,"modelViewMatrix",G.modelViewMatrix),cn.setValue(B,"normalMatrix",G.normalMatrix),cn.setValue(B,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Hn=q.uniformsGroups;for(let Oa=0,jm=Hn.length;Oa<jm;Oa++){const Yl=Hn[Oa];lt.update(Yl,os),lt.bind(Yl,os)}}return os}function $m(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Ym(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,V,X){N.get(E.texture).__webglTexture=V,N.get(E.depthTexture).__webglTexture=X;const q=N.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,V){const X=N.get(E);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,X=0){b=E,P=V,w=X;let q=!0,G=null,ve=!1,Re=!1;if(E){const ke=N.get(E);ke.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(B.FRAMEBUFFER,null),q=!1):ke.__webglFramebuffer===void 0?M.setupRenderTarget(E):ke.__hasExternalTextures&&M.rebindTextures(E,N.get(E.texture).__webglTexture,N.get(E.depthTexture).__webglTexture);const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);const We=N.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[V])?G=We[V][X]:G=We[V],ve=!0):E.samples>0&&M.useMultisampledRTT(E)===!1?G=N.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?G=We[X]:G=We,y.copy(E.viewport),F.copy(E.scissor),W=E.scissorTest}else y.copy(ie).multiplyScalar(le).floor(),F.copy(ge).multiplyScalar(le).floor(),W=Le;if(ze.bindFramebuffer(B.FRAMEBUFFER,G)&&q&&ze.drawBuffers(E,G),ze.viewport(y),ze.scissor(F),ze.setScissorTest(W),ve){const ke=N.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,X)}else if(Re){const ke=N.get(E.texture),$e=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,X||0,$e)}I=-1},this.readRenderTargetPixels=function(E,V,X,q,G,ve,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=N.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){ze.bindFramebuffer(B.FRAMEBUFFER,Oe);try{const ke=E.texture,$e=ke.format,We=ke.type;if($e!==fi&&ct.convert($e)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=We===Gr&&(Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float"));if(We!==es&&ct.convert(We)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&We!==Oi&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-q&&X>=0&&X<=E.height-G&&B.readPixels(V,X,q,G,ct.convert($e),ct.convert(We),ve)}finally{const ke=b!==null?N.get(b).__webglFramebuffer:null;ze.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(E,V,X=0){const q=Math.pow(2,-X),G=Math.floor(V.image.width*q),ve=Math.floor(V.image.height*q);M.setTexture2D(V,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,E.x,E.y,G,ve),ze.unbindTexture()},this.copyTextureToTexture=function(E,V,X,q=0){const G=V.image.width,ve=V.image.height,Re=ct.convert(X.format),Oe=ct.convert(X.type);M.setTexture2D(X,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment),V.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,E.x,E.y,G,ve,Re,Oe,V.image.data):V.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,Re,V.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,q,E.x,E.y,Re,Oe,V.image),q===0&&X.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(E,V,X,q,G=0){const ve=Math.round(E.max.x-E.min.x),Re=Math.round(E.max.y-E.min.y),Oe=E.max.z-E.min.z+1,ke=ct.convert(q.format),$e=ct.convert(q.type);let We;if(q.isData3DTexture)M.setTexture3D(q,0),We=B.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)M.setTexture2DArray(q,0),We=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const Ye=B.getParameter(B.UNPACK_ROW_LENGTH),Dt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),wn=B.getParameter(B.UNPACK_SKIP_PIXELS),Kt=B.getParameter(B.UNPACK_SKIP_ROWS),Mi=B.getParameter(B.UNPACK_SKIP_IMAGES),Rt=X.isCompressedTexture?X.mipmaps[G]:X.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Rt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,E.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,E.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(We,G,V.x,V.y,V.z,ve,Re,Oe,ke,$e,Rt.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(We,G,V.x,V.y,V.z,ve,Re,Oe,ke,Rt.data):B.texSubImage3D(We,G,V.x,V.y,V.z,ve,Re,Oe,ke,$e,Rt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,wn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Kt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Mi),G===0&&q.generateMipmaps&&B.generateMipmap(We),ze.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?M.setTextureCube(E,0):E.isData3DTexture?M.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?M.setTexture2DArray(E,0):M.setTexture2D(E,0),ze.unbindTexture()},this.resetState=function(){P=0,w=0,b=null,ze.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pl?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===ha?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _M extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Dd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new L;class Ml{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xM extends Tn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class vM extends qn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ss extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fh=new L,mh=new L,gh=new St,fc=new da,Po=new no;class yM extends It{constructor(e=new gn,t=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fh.fromBufferAttribute(t,s-1),mh.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fh.distanceTo(mh);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;gh.copy(s).invert(),fc.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,o.start),T=Math.min(_.count,o.start+o.count);for(let v=f,A=T-1;v<A;v+=p){const P=_.getX(v),w=_.getX(v+1);if(l.fromBufferAttribute(m,P),u.fromBufferAttribute(m,w),fc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),T=Math.min(m.count,o.start+o.count);for(let v=f,A=T-1;v<A;v+=p){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),fc.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const _h=new L,xh=new L;class $c extends yM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_h.fromBufferAttribute(t,s),xh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_h.distanceTo(xh);e.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ys extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new St,Yc=new da,Io=new no,Do=new L;class mc extends It{constructor(e=new gn,t=new ys){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;vh.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const m=l.getX(_);Do.fromBufferAttribute(h,m),yh(Do,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,x=p;_<x;_++)Do.fromBufferAttribute(h,_),yh(Do,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yh(i,e,t,n,s,r,o){const a=Yc.distanceSqToPoint(i);if(a<t){const c=new L;Yc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class jd extends dn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=sn,this.minFilter=sn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Sl extends gn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const x=[],m=n/2;let f=0;T(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new wt(h,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(p,2));function T(){const A=new L,P=new L;let w=0;const b=(t-e)/n;for(let I=0;I<=r;I++){const S=[],y=I/r,F=y*(t-e)+e;for(let W=0;W<=s;W++){const D=W/s,K=D*c+a,Z=Math.sin(K),re=Math.cos(K);P.x=F*Z,P.y=-y*n+m,P.z=F*re,h.push(P.x,P.y,P.z),A.set(Z,b,re).normalize(),d.push(A.x,A.y,A.z),p.push(D,1-y),S.push(_++)}x.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const y=x[S][I],F=x[S+1][I],W=x[S+1][I+1],D=x[S][I+1];u.push(y,F,D),u.push(F,W,D),w+=6}l.addGroup(f,w,0),f+=w}function v(A){const P=_,w=new Me,b=new L;let I=0;const S=A===!0?e:t,y=A===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),_++;const F=_;for(let W=0;W<=s;W++){const K=W/s*c+a,Z=Math.cos(K),re=Math.sin(K);b.x=S*re,b.y=m*y,b.z=S*Z,h.push(b.x,b.y,b.z),d.push(0,y,0),w.x=Z*.5+.5,w.y=re*.5*y+.5,p.push(w.x,w.y),_++}for(let W=0;W<s;W++){const D=P+W,K=F+W;A===!0?u.push(K,K+1,D):u.push(K+1,K,D),I+=3}l.addGroup(f,I,A===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $o extends Sl{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new $o(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tl extends gn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const v=new L,A=new L,P=new L;for(let w=0;w<t.length;w+=3)p(t[w+0],v),p(t[w+1],A),p(t[w+2],P),c(v,A,P,T)}function c(T,v,A,P){const w=P+1,b=[];for(let I=0;I<=w;I++){b[I]=[];const S=T.clone().lerp(A,I/w),y=v.clone().lerp(A,I/w),F=w-I;for(let W=0;W<=F;W++)W===0&&I===w?b[I][W]=S:b[I][W]=S.clone().lerp(y,W/F)}for(let I=0;I<w;I++)for(let S=0;S<2*(w-I)-1;S++){const y=Math.floor(S/2);S%2===0?(d(b[I][y+1]),d(b[I+1][y]),d(b[I][y])):(d(b[I][y+1]),d(b[I+1][y+1]),d(b[I+1][y]))}}function l(T){const v=new L;for(let A=0;A<r.length;A+=3)v.x=r[A+0],v.y=r[A+1],v.z=r[A+2],v.normalize().multiplyScalar(T),r[A+0]=v.x,r[A+1]=v.y,r[A+2]=v.z}function u(){const T=new L;for(let v=0;v<r.length;v+=3){T.x=r[v+0],T.y=r[v+1],T.z=r[v+2];const A=m(T)/2/Math.PI+.5,P=f(T)/Math.PI+.5;o.push(A,1-P)}_(),h()}function h(){for(let T=0;T<o.length;T+=6){const v=o[T+0],A=o[T+2],P=o[T+4],w=Math.max(v,A,P),b=Math.min(v,A,P);w>.9&&b<.1&&(v<.2&&(o[T+0]+=1),A<.2&&(o[T+2]+=1),P<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,v){const A=T*3;v.x=e[A+0],v.y=e[A+1],v.z=e[A+2]}function _(){const T=new L,v=new L,A=new L,P=new L,w=new Me,b=new Me,I=new Me;for(let S=0,y=0;S<r.length;S+=9,y+=6){T.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),A.set(r[S+6],r[S+7],r[S+8]),w.set(o[y+0],o[y+1]),b.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),P.copy(T).add(v).add(A).divideScalar(3);const F=m(P);x(w,y+0,T,F),x(b,y+2,v,F),x(I,y+4,A,F)}}function x(T,v,A,P){P<0&&T.x===1&&(o[v]=T.x-1),A.x===0&&A.z===0&&(o[v]=P/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.vertices,e.indices,e.radius,e.details)}}class Yo extends Tl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yo(e.radius,e.detail)}}class Kd extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MM extends Kd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ga extends Tn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class SM extends Tn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class TM extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ts,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends Ss{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const jo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class EM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],_=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Jd=new EM;class Rs{constructor(e){this.manager=e!==void 0?e:Jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class AM extends Error{constructor(e,t){super(e),this.response=t}}class Qd extends Rs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=jo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=wi[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let x=0;const m=new ReadableStream({start(f){T();function T(){h.read().then(({done:v,value:A})=>{if(v)f.close();else{x+=A.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let w=0,b=u.length;w<b;w++){const I=u[w];I.onProgress&&I.onProgress(P)}f.enqueue(A),T()}})}}});return new Response(m)}else throw new AM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{jo.add(e,l);const u=wi[e];delete wi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=wi[e];if(u===void 0)throw this.manager.itemError(e),l;delete wi[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ep extends Rs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Xr("img");function c(){u(),jo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bM extends Rs{constructor(e){super(e)}load(e,t,n,s){const r=new _l;r.colorSpace=Ln;const o=new ep(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){r.images[l]=u,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let l=0;l<e.length;++l)c(l);return r}}class tp extends Rs{constructor(e){super(e)}load(e,t,n,s){const r=new dn,o=new ep(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class so extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class np extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gc=new St,Mh=new L,Sh=new L;class El{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wM extends El{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ko extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Th=new St,Dr=new L,_c=new L;class NM extends El{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}}class RM extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new NM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class CM extends El{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LM extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new CM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ip extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class PM{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class IM extends Yd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Eh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ah=new L;class bh extends It{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new gn,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;s.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new wt(s,3));const r=new Ss({fog:!1,toneMapped:!1});this.cone=new $c(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ah.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ah),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);const wh={VERTEX:"vertex",FRAGMENT:"fragment"},xt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},_a=["x","y","z","w"];function sp(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of Zo(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*Zo(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function Ji(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function rp(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Ie(...e):t==="vec2"?new Me(...e):t==="vec3"?new L(...e):t==="vec4"?new at(...e):t==="mat3"?new je(...e):t==="mat4"?new St(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?ap(e[0]):null}function op(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function ap(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const Nh=new Map;let DM=0;class we extends ki{constructor(e=null){super(),this.nodeType=e,this.updateType=xt.NONE,this.updateBeforeType=xt.NONE,this.uuid=ml.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:DM++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,xt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,xt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,xt.OBJECT)}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of Zo(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=sp(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const c of Object.values(o))c&&c.isNode===!0&&c.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return Zo(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=o(e.textures),c=o(e.images),l=o(e.nodes);a.length>0&&(r.textures=a),c.length>0&&(r.images=c),l.length>0&&(r.nodes=l)}return r}}function ee(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(Nh.has(i)){console.warn(`Redefinition of node class ${i}`);return}Nh.set(i,e),e.type=i}class vt extends we{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(e.context.tempRead!==!1&&r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${o}`),r.snippet=o,r.propertyName=c,e.format(r.propertyName,s,t)}}return super.build(e,t)}}ee("TempNode",vt);class Mr extends we{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}ee("ArrayElementNode",Mr);class Al extends we{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}ee("ConvertNode",Al);class cp extends vt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==r&&(l=e.format(l,u,r)),o.push(l)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}ee("JoinNode",cp);const UM=_a.join("");class jc extends we{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(_a.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,o);this.components.length===s&&this.components===UM.slice(0,this.components.length)?r=e.format(c,o,t):r=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}ee("SplitNode",jc);class lp extends vt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=s.build(e,o),c=t.build(e,r),l=e.getTypeLength(r),u=[];for(let h=0;h<l;h++){const d=_a[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(r)}( ${u.join(", ")} )`}}ee("SetNode",lp);class xa extends we{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Ji(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Ji(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=op(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?rp(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}ee("InputNode",xa);class jn extends xa{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}ee("ConstNode",jn);let xr=null;const er=new Map;function O(i,e){if(er.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);er.set(i,e)}const Rh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),up={setup(i,e){const t=e.shift();return i(Ma(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(xr.assign(t,...n),t);if(er.has(e)){const n=er.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&er.has(e.slice(0,e.length-6))){const n=er.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Rh(e),_e(new jc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Rh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>_e(new lp(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),_e(new jc(i,e));if(/^\d+$/.test(e)===!0)return _e(new Mr(t,new jn(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},xc=new WeakMap,Ch=new WeakMap,OM=function(i,e=null){const t=Ji(i);if(t==="node"){let n=xc.get(i);return n===void 0&&(n=new Proxy(i,up),xc.set(i,n),xc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return _e(Kc(i,e));if(t==="shader")return J(i)}return i},FM=function(i,e=null){for(const t in i)i[t]=_e(i[t],e);return i},VM=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=_e(i[n],e);return i},zM=function(i,e=null,t=null,n=null){const s=r=>_e(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...or(r))):t!==null?(t=_e(t),(...r)=>s(new i(e,...or(r),t))):(...r)=>s(new i(e,...or(r)))},BM=function(i,...e){return _e(new i(...or(e)))};class HM extends we{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=Ch.get(e.constructor);o===void 0&&(o=new WeakMap,Ch.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=_e(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),_e(a.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return _e(r)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class kM extends we{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return Ma(e),_e(new HM(this,e))}setup(){return this.call()}}const GM=[!1,!0],WM=[0,1,2,3],XM=[-1,-2],hp=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],bl=new Map;for(const i of GM)bl.set(i,new jn(i));const wl=new Map;for(const i of WM)wl.set(i,new jn(i,"uint"));const Nl=new Map([...wl].map(i=>new jn(i.value,"int")));for(const i of XM)Nl.set(i,new jn(i,"int"));const va=new Map([...Nl].map(i=>new jn(i.value)));for(const i of hp)va.set(i,new jn(i));for(const i of hp)va.set(-i,new jn(-i));const ya={bool:bl,uint:wl,ints:Nl,float:va},Lh=new Map([...bl,...va]),Kc=(i,e)=>Lh.has(i)?Lh.get(i):i.isNode===!0?i:new jn(i,e),qM=i=>{try{return i.getNodeType()}catch{return}},ft=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[rp(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return _e(e.get(t[0]));if(t.length===1){const s=Kc(t[0],i);return qM(s)===i?_e(s):_e(new Al(s,i))}const n=t.map(s=>Kc(s));return _e(new cp(n,i))}},$M=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Hr(i){return new Proxy(new kM(i),up)}const _e=(i,e=null)=>OM(i,e),Ma=(i,e=null)=>new FM(i,e),or=(i,e=null)=>new VM(i,e),H=(...i)=>new zM(...i),ae=(...i)=>new BM(...i),J=i=>{const e=new Hr(i),t=(...n)=>{let s;return Ma(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};ee("ShaderNode",Hr);const Ph=i=>{xr=i},YM=()=>xr,nt=(...i)=>xr.if(...i);function jM(i){return xr&&xr.add(i),i}O("append",jM);const KM=new ft("color"),R=new ft("float",ya.float),C=new ft("int",ya.ints),me=new ft("uint",ya.uint),bs=new ft("bool",ya.bool),Pe=new ft("vec2"),Ms=new ft("ivec2"),ZM=new ft("uvec2"),JM=new ft("bvec2"),z=new ft("vec3"),QM=new ft("ivec3"),ro=new ft("uvec3"),dp=new ft("bvec3"),be=new ft("vec4"),eS=new ft("ivec4"),tS=new ft("uvec4"),nS=new ft("bvec4"),pp=new ft("mat2"),iS=new ft("imat2"),sS=new ft("umat2"),rS=new ft("bmat2"),oi=new ft("mat3"),oS=new ft("imat3"),aS=new ft("umat3"),cS=new ft("bmat3"),ar=new ft("mat4"),lS=new ft("imat4"),uS=new ft("umat4"),hS=new ft("bmat4"),dS=(i="")=>_e(new jn(i,"string")),pS=i=>_e(new jn(i,"ArrayBuffer"));O("color",KM);O("float",R);O("int",C);O("uint",me);O("bool",bs);O("vec2",Pe);O("ivec2",Ms);O("uvec2",ZM);O("bvec2",JM);O("vec3",z);O("ivec3",QM);O("uvec3",ro);O("bvec3",dp);O("vec4",be);O("ivec4",eS);O("uvec4",tS);O("bvec4",nS);O("mat2",pp);O("imat2",iS);O("umat2",sS);O("bmat2",rS);O("mat3",oi);O("imat3",oS);O("umat3",aS);O("bmat3",cS);O("mat4",ar);O("imat4",lS);O("umat4",uS);O("bmat4",hS);O("string",dS);O("arrayBuffer",pS);const fS=H(Mr),mS=(i,e)=>_e(new Al(_e(i),e));O("element",fS);O("convert",mS);class fp extends vt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return _a.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,o),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(r){const d=e.getVarFromNode(this,null,o),p=e.getPropertyName(d);e.addLineFlowCode(`${p} = ${c}`);const _=n.node.context({assign:!0}).build(e);for(let x=0;x<n.components.length;x++){const m=n.components[x];e.addLineFlowCode(`${_}.${m} = ${p}[ ${x} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,o,t)}}const gS=H(fp);ee("AssignNode",fp);O("assign",gS);class mp extends we{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,s=this.getNodeType(e),r=e.getVaryingFromNode(this,t,s);r.needsInterpolation||(r.needsInterpolation=e.shaderStage==="fragment");const o=e.getPropertyName(r,wh.VERTEX);return e.flowNodeFromShaderStage(wh.VERTEX,n,s,o),e.getPropertyName(r)}}const Lt=H(mp);O("varying",Lt);ee("VaryingNode",mp);class Sa extends we{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Lt(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const hn=(i,e)=>_e(new Sa(i,e));ee("AttributeNode",Sa);class gp extends we{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const _p=H(gp);O("bypass",_p);ee("BypassNode",gp);let _S=0;class xS{constructor(){this.id=_S++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class xp extends we{constructor(e,t=new xS){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const Jo=H(xp),vS=i=>Jo(i,null);O("cache",Jo);O("globalCache",vS);ee("CacheNode",xp);class Rl extends we{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Vi=H(Rl),yS=(i,e)=>Vi(i,{label:e});O("context",Vi);O("label",yS);ee("ContextNode",Rl);class xi extends we{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===xi.VERTEX)s=e.getVertexIndex();else if(n===xi.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Lt(this).build(e,t),r}}xi.VERTEX="vertex";xi.INSTANCE="instance";const MS=ae(xi,xi.VERTEX),vp=ae(xi,xi.INSTANCE);ee("IndexNode",xi);class yp{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class Mp extends we{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const qr=H(Mp);O("temp",qr);O("toVar",(...i)=>qr(...i).append());ee("VarNode",Mp);class Gt extends we{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const nn=(i,e)=>_e(new Gt(i,e)),li=(i,e)=>_e(new Gt(i,e,!0)),Qt=ae(Gt,"vec4","DiffuseColor"),kr=ae(Gt,"float","Roughness"),SS=ae(Gt,"float","Metalness"),Zc=ae(Gt,"float","Clearcoat"),Qo=ae(Gt,"float","ClearcoatRoughness"),tr=ae(Gt,"vec3","Sheen"),Cl=ae(Gt,"float","SheenRoughness"),Ll=ae(Gt,"float","Iridescence"),Sp=ae(Gt,"float","IridescenceIOR"),Tp=ae(Gt,"float","IridescenceThickness"),Ci=ae(Gt,"color","SpecularColor"),Jc=ae(Gt,"float","Shininess"),TS=ae(Gt,"vec4","Output"),cr=ae(Gt,"float","dashSize"),ea=ae(Gt,"float","gapSize");ae(Gt,"float","pointWidth");ee("PropertyNode",Gt);class ES extends Gt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}ee("ParameterNode",ES);class Pl extends we{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}H(Pl);ee("CodeNode",Pl);class AS extends Pl{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),p=l[h].build(e,"property");c=c.replace(d,p)}return o.code=c+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}ee("FunctionNode",AS);class Il extends we{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const bS=i=>new Il(i),Ep=i=>new Il(i,!0);Ep("frame");Ep("render");const wS=bS("object");ee("UniformGroupNode",Il);class Cs extends xa{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=wS}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const yt=(i,e)=>{const t=$M(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return _e(new Cs(n,t))};ee("UniformNode",Cs);class Ap extends Sa{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const yi=(...i)=>_e(new Ap(...i));ee("UVNode",Ap);class bp extends we{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const Dl=H(bp);O("textureSize",Dl);ee("TextureSizeNode",bp);class Nt extends vt{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let r=n;for(let o=0;o<s.length;o++)r=new Nt(e,r,s[o]);n=r}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,c=null;o!=="void"?(a=s.getNodeType(e),c=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=o,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=o):a=c=o;const l=s.build(e,a),u=typeof r<"u"?r.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,o,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,o,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,o,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`( ${l} ${n} ${u} )`,o,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,o,t):e.format(`${l} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const On=H(Nt,"+"),Ot=H(Nt,"-"),rt=H(Nt,"*"),vr=H(Nt,"/"),NS=H(Nt,"%"),RS=H(Nt,"=="),CS=H(Nt,"!="),LS=H(Nt,"<"),wp=H(Nt,">"),PS=H(Nt,"<="),IS=H(Nt,">="),DS=H(Nt,"&&"),US=H(Nt,"||"),OS=H(Nt,"!"),FS=H(Nt,"^^"),VS=H(Nt,"&"),zS=H(Nt,"~"),BS=H(Nt,"|"),HS=H(Nt,"^"),kS=H(Nt,"<<"),GS=H(Nt,">>");O("add",On);O("sub",Ot);O("mul",rt);O("div",vr);O("remainder",NS);O("equal",RS);O("notEqual",CS);O("lessThan",LS);O("greaterThan",wp);O("lessThanEqual",PS);O("greaterThanEqual",IS);O("and",DS);O("or",US);O("not",OS);O("xor",FS);O("bitAnd",VS);O("bitNot",zS);O("bitOr",BS);O("bitXor",HS);O("shiftLeft",kS);O("shiftRight",GS);ee("OperatorNode",Nt);class U extends vt{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===U.LENGTH||t===U.DISTANCE||t===U.DOT?"float":t===U.CROSS?"vec3":t===U.ALL?"bool":t===U.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===U.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===U.TRANSFORM_DIRECTION){let u=o,h=a;e.isMatrix(u.getNodeType(e))?h=be(z(h),0):u=be(z(u),0);const d=rt(u,h).xyz;return Fn(d).build(e,t)}else{if(n===U.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===U.ONE_MINUS)return Ot(1,o).build(e,t);if(n===U.RECIPROCAL)return vr(1,o).build(e,t);if(n===U.DIFFERENCE)return Bt(Ot(o,a)).build(e,t);{const u=[];return n===U.CROSS||n===U.MOD?u.push(o.build(e,s),a.build(e,s)):n===U.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):l&&(n===U.MIN||n===U.MAX)||n===U.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===U.REFRACT?u.push(o.build(e,r),a.build(e,r),c.build(e,"float")):n===U.MIX?u.push(o.build(e,r),a.build(e,r),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),c!==null&&u.push(c.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}U.ALL="all";U.ANY="any";U.EQUALS="equals";U.RADIANS="radians";U.DEGREES="degrees";U.EXP="exp";U.EXP2="exp2";U.LOG="log";U.LOG2="log2";U.SQRT="sqrt";U.INVERSE_SQRT="inversesqrt";U.FLOOR="floor";U.CEIL="ceil";U.NORMALIZE="normalize";U.FRACT="fract";U.SIN="sin";U.COS="cos";U.TAN="tan";U.ASIN="asin";U.ACOS="acos";U.ATAN="atan";U.ABS="abs";U.SIGN="sign";U.LENGTH="length";U.NEGATE="negate";U.ONE_MINUS="oneMinus";U.DFDX="dFdx";U.DFDY="dFdy";U.ROUND="round";U.RECIPROCAL="reciprocal";U.TRUNC="trunc";U.FWIDTH="fwidth";U.BITCAST="bitcast";U.ATAN2="atan2";U.MIN="min";U.MAX="max";U.MOD="mod";U.STEP="step";U.REFLECT="reflect";U.DISTANCE="distance";U.DIFFERENCE="difference";U.DOT="dot";U.CROSS="cross";U.POW="pow";U.TRANSFORM_DIRECTION="transformDirection";U.MIX="mix";U.CLAMP="clamp";U.REFRACT="refract";U.SMOOTHSTEP="smoothstep";U.FACEFORWARD="faceforward";const Np=R(1e-6);R(1e6);const Ih=R(Math.PI);R(Math.PI*2);const Rp=H(U,U.ALL),WS=H(U,U.ANY),XS=H(U,U.EQUALS),qS=H(U,U.RADIANS),$S=H(U,U.DEGREES),YS=H(U,U.EXP),Qc=H(U,U.EXP2),jS=H(U,U.LOG),Ul=H(U,U.LOG2),Ls=H(U,U.SQRT),KS=H(U,U.INVERSE_SQRT),Sr=H(U,U.FLOOR),Cp=H(U,U.CEIL),Fn=H(U,U.NORMALIZE),Ta=H(U,U.FRACT),Li=H(U,U.SIN),Zi=H(U,U.COS),ZS=H(U,U.TAN),JS=H(U,U.ASIN),QS=H(U,U.ACOS),eT=H(U,U.ATAN),Bt=H(U,U.ABS),Ol=H(U,U.SIGN),tT=H(U,U.LENGTH),nT=H(U,U.NEGATE),iT=H(U,U.ONE_MINUS),sT=H(U,U.DFDX),rT=H(U,U.DFDY),oT=H(U,U.ROUND),aT=H(U,U.RECIPROCAL),Lp=H(U,U.TRUNC),cT=H(U,U.FWIDTH);H(U,U.BITCAST);const lT=H(U,U.ATAN2),$r=H(U,U.MIN),Vn=H(U,U.MAX),uT=H(U,U.MOD),hT=H(U,U.STEP),dT=H(U,U.REFLECT),pT=H(U,U.DISTANCE),fT=H(U,U.DIFFERENCE),Tr=H(U,U.DOT),Pp=H(U,U.CROSS),gi=H(U,U.POW),mT=H(U,U.POW,2),gT=H(U,U.POW,3),_T=H(U,U.POW,4),xT=H(U,U.TRANSFORM_DIRECTION),vT=i=>rt(Ol(i),gi(Bt(i),1/3)),yT=i=>Tr(i,i),zn=H(U,U.MIX),Yr=(i,e=0,t=1)=>_e(new U(U.CLAMP,_e(i),_e(e),_e(t))),MT=i=>Yr(i),ST=H(U,U.REFRACT),Hi=H(U,U.SMOOTHSTEP),TT=H(U,U.FACEFORWARD),ET=(i,e,t)=>zn(e,t,i),AT=(i,e,t)=>Hi(e,t,i);O("all",Rp);O("any",WS);O("equals",XS);O("radians",qS);O("degrees",$S);O("exp",YS);O("exp2",Qc);O("log",jS);O("log2",Ul);O("sqrt",Ls);O("inverseSqrt",KS);O("floor",Sr);O("ceil",Cp);O("normalize",Fn);O("fract",Ta);O("sin",Li);O("cos",Zi);O("tan",ZS);O("asin",JS);O("acos",QS);O("atan",eT);O("abs",Bt);O("sign",Ol);O("length",tT);O("lengthSq",yT);O("negate",nT);O("oneMinus",iT);O("dFdx",sT);O("dFdy",rT);O("round",oT);O("reciprocal",aT);O("trunc",Lp);O("fwidth",cT);O("atan2",lT);O("min",$r);O("max",Vn);O("mod",uT);O("step",hT);O("reflect",dT);O("distance",pT);O("dot",Tr);O("cross",Pp);O("pow",gi);O("pow2",mT);O("pow3",gT);O("pow4",_T);O("transformDirection",xT);O("mix",ET);O("clamp",Yr);O("refract",ST);O("smoothstep",AT);O("faceForward",TT);O("difference",fT);O("saturate",MT);O("cbrt",vT);ee("MathNode",U);const bT=J(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=zn(n,s,r);return be(o,e.a)}),wT=J(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),o=zn(n,s,r);return be(o,e.a)}),Dh=i=>{let e=null;return i===Yn?e="Linear":i===Ln&&(e="sRGB"),e},Ip=(i,e)=>Dh(i)+"To"+Dh(e);class En extends vt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===En.LINEAR_TO_LINEAR?t:NT[e]({value:t})}}En.LINEAR_TO_LINEAR="LinearToLinear";En.LINEAR_TO_sRGB="LinearTosRGB";En.sRGB_TO_LINEAR="sRGBToLinear";const NT={[En.LINEAR_TO_sRGB]:wT,[En.sRGB_TO_LINEAR]:bT},RT=(i,e)=>_e(new En(Ip(Yn,e),_e(i))),Dp=(i,e)=>_e(new En(Ip(e,Yn),_e(i))),CT=H(En,En.LINEAR_TO_sRGB),LT=H(En,En.sRGB_TO_LINEAR);O("linearTosRGB",CT);O("sRGBToLinear",LT);O("linearToColorSpace",RT);O("colorSpaceToLinear",Dp);ee("ColorSpaceNode",En);class Up extends we{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const Ea=H(Up);ee("ExpressionNode",Up);class Op extends Cs{constructor(e){super(0),this.textureNode=e,this.updateType=xt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const PT=H(Op);ee("MaxMipLevelNode",Op);class Er extends Cs{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=xt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return yi(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return yt(t.matrix).mul(z(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?xt.FRAME:xt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o){const a=this.value;let c;return s?c=e.generateTextureLevel(a,t,n,s,r):o?c=e.generateTextureCompare(a,t,n,o,r):this.sampler===!1?c=e.generateTextureLoad(a,t,n,r):c=e.generateTexture(a,t,n,r),c}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:p}=n,_=this.generateUV(e,u),x=h?h.build(e,"float"):null,m=p?p.build(e,"int"):null,f=d?d.build(e,"float"):null,T=e.getVarFromNode(this);a=e.getPropertyName(T);const v=this.generateSnippet(e,r,_,x,m,f);e.addLineFlowCode(`${a} = ${v}`),e.context.tempWrite!==!1&&(o.snippet=v,o.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=Dp(Ea(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,_e(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(PT(t)),t.referenceNode=this,_e(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Dl(this,e)}compare(e){const t=this.clone();return t.compareNode=_e(e),t.referenceNode=this,_e(t)}depth(e){const t=this.clone();return t.depthNode=_e(e),t.referenceNode=this,_e(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Un=H(Er),xs=(...i)=>Un(...i).setSampler(!1);O("texture",Un);ee("TextureNode",Er);class Aa extends Cs{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Fl=(i,e,t)=>_e(new Aa(i,e,t));ee("BufferNode",Aa);class IT extends Mr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class Fp extends Aa{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=xt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?Ji(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return _e(new IT(this,_e(e)))}}const el=(i,e)=>_e(new Fp(i,e));ee("UniformsNode",Fp);class DT extends Mr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class Ar extends we{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=xt.OBJECT}element(e){return _e(new DT(this,_e(e)))}setNodeType(e){let t=null;this.count!==null?t=Fl(null,e,this.count):Array.isArray(this.getValueFromReference())?t=el(null,e):e==="texture"?t=Un(null):t=yt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const ai=(i,e,t)=>_e(new Ar(i,e,t)),UT=(i,e,t,n)=>_e(new Ar(i,e,n,t));ee("ReferenceNode",Ar);class Vp extends Ar{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const OT=(i,e,t)=>_e(new Vp(i,e,t));ee("MaterialReferenceNode",Vp);class Ve extends we{constructor(e=Ve.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=xt.OBJECT,this._uniformNode=new Cs(null)}getNodeType(){const e=this.scope;if(e===Ve.WORLD_MATRIX||e===Ve.VIEW_MATRIX)return"mat4";if(e===Ve.NORMAL_MATRIX)return"mat3";if(e===Ve.POSITION||e===Ve.VIEW_POSITION||e===Ve.DIRECTION||e===Ve.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Ve.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===Ve.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===Ve.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Ve.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Ve.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Ve.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(s===Ve.VIEW_POSITION){const r=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Ve.WORLD_MATRIX||t===Ve.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Ve.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Ve.POSITION||t===Ve.VIEW_POSITION||t===Ve.DIRECTION||t===Ve.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ve.VIEW_MATRIX="viewMatrix";Ve.NORMAL_MATRIX="normalMatrix";Ve.WORLD_MATRIX="worldMatrix";Ve.POSITION="position";Ve.SCALE="scale";Ve.VIEW_POSITION="viewPosition";Ve.DIRECTION="direction";H(Ve,Ve.DIRECTION);H(Ve,Ve.VIEW_MATRIX);H(Ve,Ve.NORMAL_MATRIX);H(Ve,Ve.WORLD_MATRIX);const tl=H(Ve,Ve.POSITION);H(Ve,Ve.SCALE);const zp=H(Ve,Ve.VIEW_POSITION);ee("Object3DNode",Ve);class Xe extends Ve{constructor(e=Xe.POSITION){super(e),this.updateType=xt.RENDER}getNodeType(e){const t=this.scope;return t===Xe.PROJECTION_MATRIX||t===Xe.PROJECTION_MATRIX_INVERSE?"mat4":t===Xe.NEAR||t===Xe.FAR||t===Xe.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,s=this.scope;s===Xe.VIEW_MATRIX?n.value=t.matrixWorldInverse:s===Xe.PROJECTION_MATRIX?n.value=t.projectionMatrix:s===Xe.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:s===Xe.NEAR?n.value=t.near:s===Xe.FAR?n.value=t.far:s===Xe.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===Xe.PROJECTION_MATRIX||t===Xe.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===Xe.NEAR||t===Xe.FAR||t===Xe.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}Xe.PROJECTION_MATRIX="projectionMatrix";Xe.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";Xe.NEAR="near";Xe.FAR="far";Xe.LOG_DEPTH="logDepth";const Pi=ae(Xe,Xe.PROJECTION_MATRIX);ae(Xe,Xe.PROJECTION_MATRIX_INVERSE);const vc=ae(Xe,Xe.NEAR),yc=ae(Xe,Xe.FAR),FT=ae(Xe,Xe.LOG_DEPTH),ss=ae(Xe,Xe.VIEW_MATRIX);ae(Xe,Xe.NORMAL_MATRIX);ae(Xe,Xe.WORLD_MATRIX);ae(Xe,Xe.POSITION);ee("CameraNode",Xe);class an extends Ve{constructor(e=an.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ae(an,an.DIRECTION);const ws=ae(an,an.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),Bp=ae(an,an.NORMAL_MATRIX),ta=ae(an,an.WORLD_MATRIX);ae(an,an.POSITION);ae(an,an.SCALE);ae(an,an.VIEW_POSITION);ee("ModelNode",an);class Wt extends we{constructor(e=Wt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Wt.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=z(0,1,0):n=hn("normal","vec3");else if(t===Wt.LOCAL)n=Lt(na);else if(t===Wt.VIEW){const s=Bp.mul(ci);n=Fn(Lt(s))}else if(t===Wt.WORLD){const s=ns.transformDirection(ss);n=Fn(Lt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Wt.GEOMETRY="geometry";Wt.LOCAL="local";Wt.VIEW="view";Wt.WORLD="world";const na=ae(Wt,Wt.GEOMETRY),ci=ae(Wt,Wt.LOCAL).temp("Normal"),ns=ae(Wt,Wt.VIEW),Hp=ae(Wt,Wt.WORLD),Ut=nn("vec3","TransformedNormalView"),VT=Ut.transformDirection(ss).normalize(),nr=nn("vec3","TransformedClearcoatNormalView");ee("NormalNode",Wt);const Uh=new Map;class ce extends we{constructor(e){super(),this.scope=e}getCache(e,t){let n=Uh.get(e);return n===void 0&&(n=OT(e,t),Uh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===ce.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===ce.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===ce.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture(n).r:s=R(1);else if(n===ce.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===ce.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===ce.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===ce.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=ns;else if(n===ce.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===ce.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===ce.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=ns;else if(n===ce.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===ce.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===ce.IRIDESCENCE_THICKNESS){const r=ai("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=ai("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}ce.ALPHA_TEST="alphaTest";ce.COLOR="color";ce.OPACITY="opacity";ce.SHININESS="shininess";ce.SPECULAR_COLOR="specular";ce.SPECULAR_STRENGTH="specularStrength";ce.REFLECTIVITY="reflectivity";ce.ROUGHNESS="roughness";ce.METALNESS="metalness";ce.NORMAL="normal";ce.CLEARCOAT="clearcoat";ce.CLEARCOAT_ROUGHNESS="clearcoatRoughness";ce.CLEARCOAT_NORMAL="clearcoatNormal";ce.EMISSIVE="emissive";ce.ROTATION="rotation";ce.SHEEN="sheen";ce.SHEEN_ROUGHNESS="sheenRoughness";ce.IRIDESCENCE="iridescence";ce.IRIDESCENCE_IOR="iridescenceIOR";ce.IRIDESCENCE_THICKNESS="iridescenceThickness";ce.LINE_SCALE="scale";ce.LINE_DASH_SIZE="dashSize";ce.LINE_GAP_SIZE="gapSize";ce.LINE_WIDTH="linewidth";ce.LINE_DASH_OFFSET="dashOffset";ce.POINT_WIDTH="pointWidth";const zT=ae(ce,ce.ALPHA_TEST),jr=ae(ce,ce.COLOR),BT=ae(ce,ce.SHININESS),HT=ae(ce,ce.EMISSIVE),kp=ae(ce,ce.OPACITY),kT=ae(ce,ce.SPECULAR_COLOR),GT=ae(ce,ce.SPECULAR_STRENGTH);ae(ce,ce.REFLECTIVITY);const WT=ae(ce,ce.ROUGHNESS),XT=ae(ce,ce.METALNESS),qT=ae(ce,ce.NORMAL),$T=ae(ce,ce.CLEARCOAT),YT=ae(ce,ce.CLEARCOAT_ROUGHNESS),jT=ae(ce,ce.CLEARCOAT_NORMAL),KT=ae(ce,ce.ROTATION),ZT=ae(ce,ce.SHEEN),JT=ae(ce,ce.SHEEN_ROUGHNESS),QT=ae(ce,ce.IRIDESCENCE),eE=ae(ce,ce.IRIDESCENCE_IOR),tE=ae(ce,ce.IRIDESCENCE_THICKNESS),nl=ae(ce,ce.LINE_SCALE),Gp=ae(ce,ce.LINE_DASH_SIZE),Wp=ae(ce,ce.LINE_GAP_SIZE),Mc=ae(ce,ce.LINE_WIDTH),Oh=ae(ce,ce.LINE_DASH_OFFSET),nE=ae(ce,ce.POINT_WIDTH);ee("MaterialNode",ce);class _t extends we{constructor(e=_t.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===_t.GEOMETRY)n=hn("position","vec3");else if(t===_t.LOCAL)n=Lt(_n);else if(t===_t.WORLD){const s=ta.mul(pn);n=Lt(s)}else if(t===_t.VIEW){const s=ws.mul(pn);n=Lt(s)}else if(t===_t.VIEW_DIRECTION){const s=In.negate();n=Fn(Lt(s))}else if(t===_t.WORLD_DIRECTION){const s=pn.transformDirection(ta);n=Fn(Lt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}_t.GEOMETRY="geometry";_t.LOCAL="local";_t.WORLD="world";_t.WORLD_DIRECTION="worldDirection";_t.VIEW="view";_t.VIEW_DIRECTION="viewDirection";const _n=ae(_t,_t.GEOMETRY),pn=ae(_t,_t.LOCAL).temp("Position"),iE=ae(_t,_t.WORLD),sE=ae(_t,_t.WORLD_DIRECTION),In=ae(_t,_t.VIEW),Ht=ae(_t,_t.VIEW_DIRECTION);ee("PositionNode",_t);class Xp extends vt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Lt(e.context.mvp);const t=this.positionNode||pn;return Pi.mul(ws).mul(t)}}const Fh=H(Xp);ee("ModelViewProjectionNode",Xp);class qp extends xa{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=qo,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Yd(n,r),c=new Ml(a,s,o);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Lt(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const ba=(i,e,t,n)=>_e(new qp(i,e,t,n)),rE=(i,e,t,n)=>ba(i,e,t,n).setUsage(Xc),Vh=(i,e,t,n)=>ba(i,e,t,n).setInstanced(!0),zh=(i,e,t,n)=>rE(i,e,t,n).setInstanced(!0);O("toAttribute",i=>ba(i.value));ee("BufferAttributeNode",qp);class $p extends we{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new IM(c.array,16,1),u=c.usage===Xc?zh:Vh,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=ar(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new vM(n.array,3),l=n.usage===Xc?zh:Vh;this.instanceColorNode=z(l(c,"vec3",3,0))}const s=e.mul(pn).xyz,r=oi(e[0].xyz,e[1].xyz,e[2].xyz),o=ci.div(z(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;pn.assign(s),ci.assign(a),this.instanceColorNode!==null&&li("vec3","vInstanceColor").assign(this.instanceColorNode)}}const oE=H($p);ee("InstanceNode",$p);class kt extends we{constructor(e=kt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===kt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===kt.GEOMETRY)n=hn("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===kt.LOCAL)n=Lt(ia.xyz);else if(t===kt.VIEW){const s=ws.mul(be(wa,0)).xyz;n=Fn(Lt(s))}else if(t===kt.WORLD){const s=Na.transformDirection(ss);n=Fn(Lt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}kt.GEOMETRY="geometry";kt.LOCAL="local";kt.VIEW="view";kt.WORLD="world";const ia=ae(kt,kt.GEOMETRY),wa=ae(kt,kt.LOCAL),Na=ae(kt,kt.VIEW),aE=ae(kt,kt.WORLD),Yp=qr(Na,"TransformedTangentView");Fn(Yp.transformDirection(ss));ee("TangentNode",kt);class jp extends we{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=hn("batchId"));const t=this.batchMesh._matricesTexture,n=Dl(xs(t),0),s=R(C(this.batchingIdNode)).mul(4).toVar(),r=C(s.mod(n)),o=C(s).div(C(n)),a=ar(xs(t,Ms(r,o)),xs(t,Ms(r.add(1),o)),xs(t,Ms(r.add(2),o)),xs(t,Ms(r.add(3),o))),c=oi(a[0].xyz,a[1].xyz,a[2].xyz);pn.assign(a.mul(pn));const l=ci.div(z(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;ci.assign(u),e.hasGeometryAttribute("tangent")&&wa.mulAssign(c)}}const cE=H(jp);ee("batch",jp);class Kp extends we{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=xt.OBJECT,this.skinIndexNode=hn("skinIndex","uvec4"),this.skinWeightNode=hn("skinWeight","vec4");let n,s,r;t?(n=ai("bindMatrix","mat4"),s=ai("bindMatrixInverse","mat4"),r=UT("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=yt(e.bindMatrix,"mat4"),s=yt(e.bindMatrixInverse,"mat4"),r=Fl(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),c=o.element(t.y),l=o.element(t.z),u=o.element(t.w),h=s.mul(pn),d=On(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),p=r.mul(d).xyz;let _=On(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));_=r.mul(_).mul(s);const x=_.transformDirection(ci).xyz;pn.assign(p),ci.assign(x),e.hasGeometryAttribute("tangent")&&wa.assign(x)}generate(e,t){if(t!=="void")return pn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const lE=i=>_e(new Kp(i,!0));ee("SkinningNode",Kp);class Zp extends we{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,r=this.params.length-1;s<r;s++){const o=this.params[s],a=o.isNode!==!0&&o.name||this.getVarName(s),c=o.isNode!==!0&&o.type||"int";n[a]=Ea(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,r=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,p=null,_=null,x=null,m=null;u.isNode?(_="int",p=this.getVarName(c),h="0",d=u.build(e,_),x="<"):(_=u.type||"int",p=u.name||this.getVarName(c),h=u.start,d=u.end,x=u.condition,m=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,_)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,_)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",x=">="):d!==void 0&&h===void 0&&(h="0",x="<"),x===void 0&&(Number(h)>Number(d)?x=">=":x="<"));const f={start:h,end:d,condition:x},T=f.start,v=f.end;let A="",P="",w="";m||(_==="int"||_==="uint"?x.includes("<")?m="++":m="--":x.includes("<")?m="+= 1.":m="-= 1."),A+=e.getVar(_,p)+" = "+T,P+=p+" "+x+" "+v,w+=p+" "+m;const b=`for ( ${A}; ${P}; ${w} )`;e.addFlowCode((c===0?`
`:"")+e.tab+b+` {

`).addFlowTab()}const o=Vi(r,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+o);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const Mt=(...i)=>_e(new Zp(or(i,"int"))).append(),uE=()=>Ea("break").append();O("loop",(i,...e)=>_p(i,Mt(...e)));ee("LoopNode",Zp);const Sc=new WeakMap,Cn=new at,Bh=J(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=C(MS).mul(t).add(r),a=o.div(n),c=o.sub(a.mul(n));return xs(i,Ms(c,a)).depth(s).mul(e)});function hE(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=Sc.get(i);if(o===void 0||o.count!==r){let T=function(){m.dispose(),Sc.delete(i),i.removeEventListener("dispose",T)};var a=T;o!==void 0&&o.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,p=1;const _=4096;d>_&&(p=Math.ceil(d/_),d=_);const x=new Float32Array(d*p*4*r),m=new gl(x,d,p,r);m.type=Oi,m.needsUpdate=!0;const f=h*4;for(let v=0;v<r;v++){const A=c[v],P=l[v],w=u[v],b=d*p*4*v;for(let I=0;I<A.count;I++){const S=I*f;e===!0&&(Cn.fromBufferAttribute(A,I),x[b+S+0]=Cn.x,x[b+S+1]=Cn.y,x[b+S+2]=Cn.z,x[b+S+3]=0),t===!0&&(Cn.fromBufferAttribute(P,I),x[b+S+4]=Cn.x,x[b+S+5]=Cn.y,x[b+S+6]=Cn.z,x[b+S+7]=0),n===!0&&(Cn.fromBufferAttribute(w,I),x[b+S+8]=Cn.x,x[b+S+9]=Cn.y,x[b+S+10]=Cn.z,x[b+S+11]=w.itemSize===4?Cn.w:1)}}o={count:r,texture:m,stride:h,size:new Me(d,p)},Sc.set(i,o),i.addEventListener("dispose",T)}return o}class Jp extends we{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=yt(1),this.updateType=xt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:c,size:l}=hE(t);n===!0&&pn.mulAssign(this.morphBaseInfluence),s===!0&&ci.mulAssign(this.morphBaseInfluence);const u=C(l.width);Mt(o,({i:h})=>{const d=R(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(xs(this.mesh.morphTexture,Ms(C(h).add(1),C(vp))).r):d.assign(ai("morphTargetInfluences","float").element(h).toVar()),n===!0&&pn.addAssign(Bh({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),s===!0&&ci.addAssign(Bh({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const dE=H(Jp);ee("MorphNode",Jp);class Qp extends we{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return Ht.negate().reflect(Ut).transformDirection(ss)}}const pE=ae(Qp);ee("ReflectVectorNode",Qp);class ef extends Er{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return pE}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===mr||!n.isRenderTargetTexture?z(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const tf=H(ef);O("cubeTexture",tf);ee("CubeTextureNode",ef);class Ra extends we{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}ee("LightingNode",Ra);let Ur=null;class Ps extends Ra{constructor(e=null){super(),this.updateType=xt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.color=new Ie,this._defaultColorNode=yt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){let t=this.shadowNode;if(t===null){Ur===null&&(Ur=e.createNodeMaterial(),Ur.fragmentNode=be(0,0,0,1),Ur.isShadowNodeMaterial=!0);const n=this.light.shadow,s=e.createRenderTarget(n.mapSize.width,n.mapSize.height),r=new io;r.minFilter=sn,r.magFilter=sn,r.image.width=n.mapSize.width,r.image.height=n.mapSize.height,r.compareFunction=Ld,s.depthTexture=r,n.camera.updateProjectionMatrix();const o=ai("bias","float",n),a=ai("normalBias","float",n);let c=yt(n.matrix).mul(iE.add(Hp.mul(a)));c=c.xyz.div(c.w);const l=c.x.greaterThanEqual(0).and(c.x.lessThanEqual(1)).and(c.y.greaterThanEqual(0)).and(c.y.lessThanEqual(1)).and(c.z.lessThanEqual(1));let u=c.z.add(o);e.renderer.coordinateSystem===mr&&(u=u.mul(2).sub(1)),c=z(c.x,c.y.oneMinus(),u),t=((p,_,x)=>Un(p,_).compare(x))(r,c.xy,c.z);const d=Un(s.texture,c);this.rtt=s,this.colorNode=this.colorNode.mul(l.mix(1,t.mix(d.a.mix(1,d),1))),this.shadowNode=t,this.updateBeforeType=xt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r}=e,o=r.overrideMaterial;r.overrideMaterial=Ur,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=s.getRenderTarget(),c=s.getRenderObjectFunction();s.setRenderObjectFunction((l,...u)=>{l.castShadow===!0&&s.renderObject(l,...u)}),s.setRenderTarget(t),s.render(r,n.shadow.camera),s.setRenderTarget(a),s.setRenderObjectFunction(c),r.overrideMaterial=o}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}ee("AnalyticLightNode",Ps);const sa=new WeakMap,fE=i=>i.sort((e,t)=>e.id-t.id);class mE extends we{constructor(e=[]){super("vec3"),this.totalDiffuseNode=z().temp("totalDiffuse"),this.totalSpecularNode=z().temp("totalSpecular"),this.outgoingLightNode=z().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack();n.start(t,c,e);for(const m of r)m.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:p,indirectSpecular:_}=t.reflectedLight;let x=h.add(p);l!==null&&(x=z(u!==null?u.mix(x,l):l)),o.assign(x),a.assign(d.add(_)),s.assign(o.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=fE(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,o=sa.has(r)?sa.get(r):Ps;s=_e(new o(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const gE=H(mE);function br(i,e){if(sa.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);sa.set(i,e)}class nf extends Ra{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}ee("AONode",nf);class sf extends Rl{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=z().temp("directDiffuse"),s=z().temp("directSpecular"),r=z().temp("indirectDiffuse"),o=z().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:z().temp("radiance"),irradiance:z().temp("irradiance"),iblIrradiance:z().temp("iblIrradiance"),ambientOcclusion:R(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const rf=H(sf);O("lightingContext",rf);ee("LightingContextNode",sf);class Vl extends we{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),s={tempWrite:!1},r=e.getDataFromNode(this);if(r.nodeProperty!==void 0)return r.nodeProperty;const{ifNode:o,elseNode:a}=this,c=t!=="void",l=c?nn(n).build(e):"";r.nodeProperty=l;const u=Vi(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Vi(o,s).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Vi(a,s).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Dn=H(Vl);O("cond",Dn);ee("CondNode",Vl);const Hh=R(1),il=R(-2),Uo=R(.8),Tc=R(-1),Oo=R(.4),Ec=R(2),Fo=R(.305),Ac=R(3),kh=R(.21),_E=R(4),Gh=R(4),xE=R(16),vE=J(([i])=>{const e=z(Bt(i)).toVar(),t=R(-1).toVar();return nt(e.x.greaterThan(e.z),()=>{nt(e.x.greaterThan(e.y),()=>{t.assign(Dn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Dn(i.y.greaterThan(0),1,4))})}).else(()=>{nt(e.z.greaterThan(e.y),()=>{t.assign(Dn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Dn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),yE=J(([i,e])=>{const t=Pe().toVar();return nt(e.equal(0),()=>{t.assign(Pe(i.z,i.y).div(Bt(i.x)))}).elseif(e.equal(1),()=>{t.assign(Pe(i.x.negate(),i.z.negate()).div(Bt(i.y)))}).elseif(e.equal(2),()=>{t.assign(Pe(i.x.negate(),i.y).div(Bt(i.z)))}).elseif(e.equal(3),()=>{t.assign(Pe(i.z.negate(),i.y).div(Bt(i.x)))}).elseif(e.equal(4),()=>{t.assign(Pe(i.x.negate(),i.z).div(Bt(i.y)))}).else(()=>{t.assign(Pe(i.x,i.y).div(Bt(i.z)))}),rt(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),ME=J(([i])=>{const e=R(0).toVar();return nt(i.greaterThanEqual(Uo),()=>{e.assign(Hh.sub(i).mul(Tc.sub(il)).div(Hh.sub(Uo)).add(il))}).elseif(i.greaterThanEqual(Oo),()=>{e.assign(Uo.sub(i).mul(Ec.sub(Tc)).div(Uo.sub(Oo)).add(Tc))}).elseif(i.greaterThanEqual(Fo),()=>{e.assign(Oo.sub(i).mul(Ac.sub(Ec)).div(Oo.sub(Fo)).add(Ec))}).elseif(i.greaterThanEqual(kh),()=>{e.assign(Fo.sub(i).mul(_E.sub(Ac)).div(Fo.sub(kh)).add(Ac))}).else(()=>{e.assign(R(-2).mul(Ul(rt(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});J(([i,e])=>{const t=i.toVar();t.assign(rt(2,t).sub(1));const n=z(t,1).toVar();return nt(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const SE=J(([i,e,t,n,s,r])=>{const o=R(t),a=z(e),c=Yr(ME(o),il,r),l=Ta(c),u=Sr(c),h=z(sl(i,a,u,n,s,r)).toVar();return nt(l.notEqual(0),()=>{const d=z(sl(i,a,u.add(1),n,s,r)).toVar();h.assign(zn(h,d,l))}),h}),sl=J(([i,e,t,n,s,r])=>{const o=R(t).toVar(),a=z(e),c=R(vE(a)).toVar(),l=R(Vn(Gh.sub(o),0)).toVar();o.assign(Vn(o,Gh));const u=R(Qc(o)).toVar(),h=Pe(yE(a,c).mul(u.sub(2)).add(1)).toVar();return nt(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(rt(3,xE))),h.y.addAssign(rt(4,Qc(r).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.uv(h)}),bc=J(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const c=Zi(n),l=t.mul(c).add(s.cross(t).mul(Li(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return sl(i,l,e,r,o,a)});J(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=z(Dn(e,t,Pp(t,n))).toVar();nt(Rp(d.equals(z(0))),()=>{d.assign(z(n.z,0,n.x.negate()))}),d.assign(Fn(d));const p=z().toVar();return p.addAssign(s.element(C(0)).mul(bc({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Mt({start:C(1),end:i},({i:_})=>{nt(_.greaterThanEqual(r),()=>{uE()});const x=R(o.mul(R(_))).toVar();p.addAssign(s.element(_).mul(bc({theta:x.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),p.addAssign(s.element(_).mul(bc({theta:x,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),be(p,1)});let ra=null;const Wh=new WeakMap;function TE(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function EE(i){let e=Wh.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=ra.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=ra.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,Wh.set(i,e)}return e.texture}class of extends vt{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Un(null),this._width=yt(0),this._height=yt(0),this._maxMip=yt(0),this.updateBeforeType=xt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=TE(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=EE(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){ra===null&&(ra=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===mi&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=z(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),SE(this._texture,t,s,this._width,this._height,this._maxMip)}}const AE=H(of);ee("PMREMNode",of);const Xh=new WeakMap;class af extends Ra{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let l=Xh.get(t.value);l===void 0&&(l=AE(t.value),Xh.set(t.value,l)),t=l}const s=e.material.envMap?ai("envMapIntensity","float",e.material):ai("environmentIntensity","float",e.scene),r=Vi(t,qh(kr,Ut)).mul(s),o=Vi(t,bE(VT)).mul(Math.PI).mul(s),a=Jo(r);e.context.radiance.addAssign(a),e.context.iblIrradiance.addAssign(o);const c=e.context.lightingModel.clearcoatRadiance;if(c){const l=Vi(t,qh(Qo,nr)).mul(s),u=Jo(l);c.addAssign(u)}}}const qh=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Ht.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(ss)),t),getTextureLevel:()=>i}},bE=i=>({getUV:()=>i,getTextureLevel:()=>R(1)});ee("EnvironmentNode",af);let wc,Nc;class dt extends we{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===dt.VIEWPORT?"vec4":"vec2"}getUpdateType(){let e=xt.NONE;return(this.scope===dt.RESOLUTION||this.scope===dt.VIEWPORT)&&(e=xt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===dt.VIEWPORT?e.getViewport(Nc):e.getDrawingBufferSize(wc)}setup(){const e=this.scope;let t=null;if(e===dt.RESOLUTION)t=yt(wc||(wc=new Me));else if(e===dt.VIEWPORT)t=yt(Nc||(Nc=new at));else{t=wE.div($h);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Pe(n,s)}return t}generate(e){if(this.scope===dt.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties($h).outputNode.build(e);t=`${e.getType("vec2")}( ${t}.x, ${n}.y - ${t}.y )`}return t}return super.generate(e)}}dt.COORDINATE="coordinate";dt.RESOLUTION="resolution";dt.VIEWPORT="viewport";dt.TOP_LEFT="topLeft";dt.BOTTOM_LEFT="bottomLeft";dt.TOP_RIGHT="topRight";dt.BOTTOM_RIGHT="bottomRight";const wE=ae(dt,dt.COORDINATE),$h=ae(dt,dt.RESOLUTION),lr=ae(dt,dt.VIEWPORT),Kr=ae(dt,dt.TOP_LEFT);ae(dt,dt.BOTTOM_LEFT);ae(dt,dt.TOP_RIGHT);ae(dt,dt.BOTTOM_RIGHT);ee("ViewportNode",dt);const Or=new Me;class oo extends Er{constructor(e=Kr,t=null,n=null){n===null&&(n=new jd,n.minFilter=Ui),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=xt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Or);const n=this.value;(n.image.width!==Or.width||n.image.height!==Or.height)&&(n.image.width=Or.width,n.image.height=Or.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){return new this.constructor(this.uvNode,this.levelNode,this.value)}}const NE=H(oo),RE=H(oo,null,null,{generateMipmaps:!0});O("viewportTexture",NE);O("viewportMipTexture",RE);ee("ViewportTextureNode",oo);let Rc=null;class cf extends oo{constructor(e=Kr,t=null){Rc===null&&(Rc=new io),super(e,t,Rc)}}const lf=H(cf);O("viewportDepthTexture",lf);ee("ViewportDepthTextureNode",cf);class rn extends we{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===rn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===rn.DEPTH)t=rl(In.z,vc,yc);else if(e===rn.DEPTH_TEXTURE){const n=this.valueNode||lf(),s=uf(n,vc,yc);t=rl(s,vc,yc)}else e===rn.DEPTH_PIXEL&&this.valueNode!==null&&(t=hf().assign(this.valueNode));return t}}const rl=(i,e,t)=>i.add(e).div(e.sub(t)),uf=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));rn.DEPTH="depth";rn.DEPTH_TEXTURE="depthTexture";rn.DEPTH_PIXEL="depthPixel";const hf=H(rn,rn.DEPTH_PIXEL);ae(rn,rn.DEPTH);H(rn,rn.DEPTH_TEXTURE);const df=ae(rn,rn.DEPTH_PIXEL);df.assign=i=>hf(i);ee("ViewportDepthNode",rn);class is extends we{constructor(e=is.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,o=r+s,a=n?o-s:o;return this.scope===is.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return J(()=>{const s=el(e),r=nn("float","distanceToPlane"),o=nn("float","distanceToGradient"),a=nn("float","clipOpacity");a.assign(1);let c;if(Mt(n,({i:l})=>{c=s.element(l),r.assign(In.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),a.mulAssign(Hi(o.negate(),o,r)),a.equal(0).discard()}),n<t){const l=nn("float","unionclipOpacity");l.assign(1),Mt({start:n,end:t},({i:u})=>{c=s.element(u),r.assign(In.dot(c.xyz).negate().add(c.w)),o.assign(r.fwidth().div(2)),l.mulAssign(Hi(o.negate(),o,r).oneMinus())}),a.mulAssign(l.oneMinus())}Qt.a.mulAssign(a),Qt.a.equal(0).discard()})()}setupDefault(e,t,n){return J(()=>{const s=el(e);let r;if(Mt(n,({i:o})=>{r=s.element(o),In.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=nn("bool","clipped");o.assign(!0),Mt({start:n,end:t},({i:a})=>{r=s.element(a),o.assign(In.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}is.ALPHA_TO_COVERAGE="alphaToCoverage";is.DEFAULT="default";const CE=()=>_e(new is),LE=()=>_e(new is(is.ALPHA_TO_COVERAGE));class pf extends we{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){return e.getFrontFacing()}}const PE=ae(pf),oa=R(PE).mul(2).sub(1);ee("FrontFacingNode",pf);const ol=new Map;class Kn extends Bi{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.colorSpaced=!0,this.lightsNode=null,this.envNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+sp(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.fragmentNode===null){this.depthWrite===!0&&this.setupDepth(e),this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const r=be(s,Qt.a).max(0);t=this.setupOutput(e,r),TS.assign(t),this.outputNode!==null&&(t=this.outputNode)}else t=this.setupOutput(e,this.fragmentNode);e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=LE():e.stack.add(CE())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Fh().w.add(1).log2().mul(FT).mul(.5)),n!==null&&df.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&dE(t).append(),t.isSkinnedMesh===!0&&lE(t).append(),t.isBatchedMesh&&cE(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&oE(t).append(),this.positionNode!==null&&pn.assign(this.positionNode);const s=Fh();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?be(this.colorNode):jr;this.vertexColors===!0&&t.hasAttribute("color")&&(n=be(n.xyz.mul(hn("color","vec3")),n.a)),e.instanceColor&&(n=li("vec3","vInstanceColor").mul(n)),Qt.assign(n);const s=this.opacityNode?R(this.opacityNode):kp;if(Qt.a.assign(Qt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?R(this.alphaTestNode):zT;Qt.a.lessThanEqual(r).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=In.dFdx().cross(In.dFdy()).normalize();Ut.assign(e.mul(oa))}else{const e=this.normalNode?z(this.normalNode):qT;Ut.assign(e.mul(oa))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?tf(this.envMap):Un(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];t&&n.push(new af(t)),e.material.aoMap&&n.push(new nf(Un(e.material.aoMap)));let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=gE([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Qt.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=rf(a,l,n,s)}else n!==null&&(c=z(s!==null?zn(c,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(z(r||HT))),c}setupOutput(e,t){const n=e.renderer;if(this.fog===!0){const r=e.fogNode;r&&(t=be(r.mix(t.rgb,r.colorNode),t.a))}const s=e.toneMappingNode;if(this.toneMapped===!0&&s&&(t=be(s.context({color:t.rgb}),t.a)),this.colorSpaced===!0){const r=n.currentColorSpace;r!==Yn&&r!==Di&&(t=t.linearToColorSpace(r))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=Tn.prototype.toJSON.call(this,e),s=Zo(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images),c=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=IE(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function An(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(ol.has(i)){console.warn(`Redefinition of node material ${i}`);return}ol.set(i,e),e.type=i}function IE(i){const e=ol.get(i);if(e!==void 0)return new e}An("NodeMaterial",Kn);class ff extends we{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Hr(t);return this._currentCond=Dn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Hr(t),s=Dn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Hr(e),this}build(e,...t){const n=YM();Ph(this);for(const s of this.nodes)s.build(e,"void");return Ph(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}H(ff);ee("StackNode",ff);class mf extends vt{constructor(e=sE){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Pe(t,n)}}H(mf);ee("EquirectUVNode",mf);class gf extends we{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}ee("StructTypeNode",gf);class _f extends we{constructor(...e){super(),this.isOutputStructNode=!0,this.members=e}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new gf(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const s=e.getPropertyName(n),r=this.members,o=s!==""?s+".":"";for(let a=0;a<r.length;a++){const c=r[a].build(e,t);e.addLineFlowCode(`${o}m${a} = ${c}`)}return s}}H(_f);ee("OutputStructNode",_f);class xf extends we{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const DE=H(xf);O("hash",DE);ee("HashNode",xf);const al=(i,e)=>gi(rt(4,i.mul(Ot(1,i))),e),UE=(i,e)=>i.lessThan(.5)?al(i.mul(2),e).div(2):Ot(1,al(rt(Ot(1,i),2),e).div(2)),OE=(i,e,t)=>gi(vr(gi(i,e),On(gi(i,e),gi(Ot(1,i),t))),1/e),FE=(i,e)=>Li(Ih.mul(e.mul(i).sub(1))).div(Ih.mul(e.mul(i).sub(1)));O("parabola",al);O("gain",UE);O("pcurve",OE);O("sinc",FE);const hi=J(([i])=>i.fract().sub(.5).abs()),vf=J(([i])=>z(hi(i.z.add(hi(i.y.mul(1)))),hi(i.z.add(hi(i.x.mul(1)))),hi(i.y.add(hi(i.x.mul(1)))))),VE=J(([i,e,t])=>{const n=z(i).toVar(),s=R(1.4).toVar(),r=R(0).toVar(),o=z(n).toVar();return Mt({start:R(0),end:R(3),type:"float",condition:"<="},()=>{const a=z(vf(o.mul(2))).toVar();n.addAssign(a.add(t.mul(R(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=R(hi(n.z.add(hi(n.x.add(hi(n.y)))))).toVar();r.addAssign(c.div(s)),o.addAssign(.14)}),r});hi.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});vf.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});VE.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let Cc;class yf extends Vl{constructor(e){Cc=Cc||Ea("discard"),super(e,Cc)}}const zE=H(yf),BE=i=>zE(i).append();O("discard",BE);ee("DiscardNode",yf);class Mf extends we{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const c=o.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],p=l[h];d.getNodeType(e)===p.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}const HE=H(Mf),Zn=i=>(...e)=>HE(i,...e);ee("FunctionOverloadingNode",Mf);class Sf extends vt{constructor(){super("vec2")}setup(){const e=z(Ht.z,0,Ht.x.negate()).normalize(),t=Ht.cross(e);return Pe(e.dot(Ut),t.dot(Ut)).mul(.495).add(.5)}}ae(Sf);ee("MatcapUVNode",Sf);class yn extends Cs{constructor(e=yn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=xt.FRAME}update(e){const t=this.scope,n=this.scale;t===yn.LOCAL?this.value+=e.deltaTime*n:t===yn.DELTA?this.value=e.deltaTime*n:t===yn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}yn.LOCAL="local";yn.GLOBAL="global";yn.DELTA="delta";yn.FRAME="frame";const kE=(i,e=0)=>_e(new yn(yn.LOCAL,i,e));ae(yn,yn.FRAME).uint();ee("TimerNode",yn);class Xt extends we{constructor(e=Xt.SINE,t=kE()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=_e(this.timeNode);let n=null;return e===Xt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Xt.SQUARE?n=t.fract().round():e===Xt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Xt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Xt.SINE="sine";Xt.SQUARE="square";Xt.TRIANGLE="triangle";Xt.SAWTOOTH="sawtooth";H(Xt,Xt.SINE);H(Xt,Xt.SQUARE);H(Xt,Xt.TRIANGLE);H(Xt,Xt.SAWTOOTH);ee("OscNode",Xt);class vi extends vt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===vi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===vi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}vi.DIRECTION_TO_COLOR="directionToColor";vi.COLOR_TO_DIRECTION="colorToDirection";const Tf=H(vi,vi.DIRECTION_TO_COLOR),GE=H(vi,vi.COLOR_TO_DIRECTION);O("directionToColor",Tf);O("colorToDirection",GE);ee("PackingNode",vi);class zl extends we{constructor(e,t,n,s=R(0),r=R(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const WE=H(zl,null,null,{doClamp:!1}),XE=H(zl);O("remap",WE);O("remapClamp",XE);ee("RemapNode",zl);class Ef extends vt{constructor(e,t,n=Pe(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const qE=H(Ef);O("rotateUV",qE);ee("RotateUVNode",Ef);class Af extends vt{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return pp(r,o,o.negate(),r).mul(n)}else{const r=t,o=ar(be(1,0,0,0),be(0,Zi(r.x),Li(r.x).negate(),0),be(0,Li(r.x),Zi(r.x),0),be(0,0,0,1)),a=ar(be(Zi(r.y),0,Li(r.y),0),be(0,1,0,0),be(Li(r.y).negate(),0,Zi(r.y),0),be(0,0,0,1)),c=ar(be(Zi(r.z),Li(r.z).negate(),0,0),be(Li(r.z),Zi(r.z),0,0),be(0,0,1,0),be(0,0,0,1));return o.mul(a).mul(c).mul(be(n,1)).xyz}}}const $E=H(Af);O("rotate",$E);ee("RotateNode",Af);class bf extends we{constructor(e,t=yi(),n=R(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),c=r.sub(o.add(1).div(s).ceil()),l=n.reciprocal(),u=Pe(a,c);return t.add(u).mul(l)}}H(bf);ee("SpriteSheetUVNode",bf);class wf extends Mr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const Nf=H(wf);O("storageElement",Nf);ee("StorageArrayElementNode",wf);class Rf extends we{constructor(e,t=null,n=null,s=R(1),r=pn,o=ci){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(z(1)));const c=r.yz.mul(s),l=r.zx.mul(s),u=r.xy.mul(s),h=e.value,d=t!==null?t.value:h,p=n!==null?n.value:h,_=Un(h,c).mul(a.x),x=Un(d,l).mul(a.y),m=Un(p,u).mul(a.z);return On(_,x,m)}}const YE=H(Rf),jE=(...i)=>YE(...i);O("triplanarTexture",jE);ee("TriplanarTexturesNode",Rf);new Ri;new L;new L;new L;new St;new L(0,0,-1);new at;new L;new L;new at;new Me;new ts;Pe(Kr.x.oneMinus(),Kr.y);class qt extends we{constructor(e=qt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===qt.GEOMETRY?n=na.cross(ia):t===qt.LOCAL?n=ci.cross(wa):t===qt.VIEW?n=ns.cross(Na):t===qt.WORLD&&(n=Hp.cross(aE));const s=n.mul(ia.w).xyz;return Fn(Lt(s)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}qt.GEOMETRY="geometry";qt.LOCAL="local";qt.VIEW="view";qt.WORLD="world";ae(qt,qt.GEOMETRY);ae(qt,qt.LOCAL);const KE=ae(qt,qt.VIEW);ae(qt,qt.WORLD);const ZE=Fn(Ut.cross(Yp).mul(ia.w));Fn(ZE.transformDirection(ss));ee("BitangentNode",qt);const Cf=oi(Na,KE,ns);Ht.mul(Cf);class JE extends Sa{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new at(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}ee("VertexColorNode",JE);class Lf extends Ar{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const QE=(i,e,t)=>_e(new Lf(i,e,t));ee("RendererReferenceNode",Lf);const Ca=1/6,Pf=i=>rt(Ca,rt(i,rt(i,i.negate().add(3)).sub(3)).add(1)),cl=i=>rt(Ca,rt(i,rt(i,rt(3,i).sub(6))).add(4)),If=i=>rt(Ca,rt(i,rt(i,rt(-3,i).add(3)).add(3)).add(1)),ll=i=>rt(Ca,gi(i,3)),Yh=i=>Pf(i).add(cl(i)),jh=i=>If(i).add(ll(i)),Kh=i=>On(-1,cl(i).div(Pf(i).add(cl(i)))),Zh=i=>On(1,ll(i).div(If(i).add(ll(i)))),Jh=(i,e,t)=>{const n=i.uvNode,s=rt(n,e.zw).add(.5),r=Sr(s),o=Ta(s),a=Yh(o.x),c=jh(o.x),l=Kh(o.x),u=Zh(o.x),h=Kh(o.y),d=Zh(o.y),p=Pe(r.x.add(l),r.y.add(h)).sub(.5).mul(e.xy),_=Pe(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),x=Pe(r.x.add(l),r.y.add(d)).sub(.5).mul(e.xy),m=Pe(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),f=Yh(o.y).mul(On(a.mul(i.uv(p).level(t)),c.mul(i.uv(_).level(t)))),T=jh(o.y).mul(On(a.mul(i.uv(x).level(t)),c.mul(i.uv(m).level(t))));return f.add(T)},eA=(i,e)=>{const t=Pe(i.size(C(e))),n=Pe(i.size(C(e.add(1)))),s=vr(1,t),r=vr(1,n),o=Jh(i,be(s,t),Sr(e)),a=Jh(i,be(r,n),Cp(e));return Ta(e).mix(o,a)};class Df extends vt{constructor(e,t=R(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return eA(this.textureNode,this.blurNode)}}const tA=H(Df);O("bicubic",tA);ee("TextureBicubicNode",Df);class Uf extends we{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ae(Uf);ee("PointUVNode",Uf);class si extends we{constructor(e=si.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===si.BACKGROUND_BLURRINESS?s=ai("backgroundBlurriness","float",n):t===si.BACKGROUND_INTENSITY?s=ai("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}si.BACKGROUND_BLURRINESS="backgroundBlurriness";si.BACKGROUND_INTENSITY="backgroundIntensity";ae(si,si.BACKGROUND_BLURRINESS);ae(si,si.BACKGROUND_INTENSITY);ee("SceneNode",si);class nA extends Aa{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null}getInputType(){return"storageBuffer"}element(e){return Nf(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=ba(this.value),this._varying=Lt(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}ee("StorageBufferNode",nA);class Of extends Er{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(c)}}H(Of);ee("TextureStoreNode",Of);class iA extends Ar{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}ee("UserDataNode",iA);const sA=J(({base:i,blend:e})=>{const t=n=>e[n].lessThan(Np).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return z(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),rA=J(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return z(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),oA=J(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return z(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),aA=J(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return z(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class en extends vt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===en.BURN?r=sA(s):e===en.DODGE?r=rA(s):e===en.SCREEN?r=oA(s):e===en.OVERLAY&&(r=aA(s)),r}}en.BURN="burn";en.DODGE="dodge";en.SCREEN="screen";en.OVERLAY="overlay";const cA=H(en,en.BURN),lA=H(en,en.DODGE),uA=H(en,en.OVERLAY),hA=H(en,en.SCREEN);O("burn",cA);O("dodge",lA);O("overlay",uA);O("screen",hA);ee("BlendModeNode",en);const dA=J(({textureNode:i,bumpScale:e})=>{let t=i;if(t.isTextureNode!==!0&&t.traverse(o=>{o.isTextureNode===!0&&(t=o)}),t.isTextureNode!==!0)throw new Error("THREE.TSL: dHdxy_fwd() requires a TextureNode.");const n=R(i),s=t.uvNode||yi(),r=o=>i.cache().context({getUV:()=>o,forceUVContext:!0});return Pe(R(r(s.add(s.dFdx()))).sub(n),R(r(s.add(s.dFdy()))).sub(n)).mul(e)}),pA=J(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),c=o.cross(s),l=s.dot(a).mul(oa),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class Ff extends vt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=dA({textureNode:this.textureNode,bumpScale:e});return pA({surf_pos:In,surf_norm:ns,dHdxy:t})}}const fA=H(Ff);O("bumpMap",fA);ee("BumpMapNode",Ff);const mA=J(({color:i,adjustment:e})=>e.mix(Vf(i.rgb),i.rgb)),gA=J(({color:i,adjustment:e})=>{const t=On(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return zn(i.rgb,n,s)}),_A=J(({color:i,adjustment:e})=>{const t=z(.57735,.57735,.57735),n=e.cos();return z(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(Tr(t,i.rgb).mul(n.oneMinus())))))});class Sn extends vt{constructor(e,t,n=R(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===Sn.SATURATION?r=mA(s):e===Sn.VIBRANCE?r=gA(s):e===Sn.HUE?r=_A(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}Sn.SATURATION="saturation";Sn.VIBRANCE="vibrance";Sn.HUE="hue";const xA=H(Sn,Sn.SATURATION),vA=H(Sn,Sn.VIBRANCE),yA=H(Sn,Sn.HUE),MA=z(.2125,.7154,.0721),Vf=(i,e=MA)=>Tr(i,e),zf=(i,e)=>zn(z(0),i,Vf(i).sub(e).max(0));O("saturation",xA);O("vibrance",vA);O("hue",yA);O("threshold",zf);ee("ColorAdjustmentNode",Sn);const SA=J(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=o.cross(l),h=l.cross(r),d=u.mul(a.x).add(h.mul(c.x)),p=u.mul(a.y).add(h.mul(c.y)),_=d.dot(d).max(p.dot(p)),x=oa.mul(_.inverseSqrt());return On(d.mul(n.x,x),p.mul(n.y,x),l.mul(n.z)).normalize()});class Bf extends vt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Ts}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=z(s.xy.mul(n),s.z));let r=null;return t===Cd?r=Bp.mul(s).normalize():t===Ts&&(e.hasGeometryAttribute("tangent")===!0?r=Cf.mul(s).normalize():r=SA({eye_pos:In,surf_norm:ns,mapN:s,uv:yi()})),r}}const TA=H(Bf);O("normalMap",TA);ee("NormalMapNode",Bf);class Hf extends vt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const EA=H(Hf);O("posterize",EA);ee("PosterizeNode",Hf);const AA=J(({color:i,exposure:e})=>i.mul(e).clamp()),bA=J(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),wA=J(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),NA=J(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),RA=J(({color:i,exposure:e})=>{const t=oi(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=oi(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=NA({color:i}),i=n.mul(i),i.clamp()}),CA=oi(z(1.6605,-.1246,-.0182),z(-.5876,1.1329,-.1006),z(-.0728,-.0083,1.1187)),LA=oi(z(.6274,.0691,.0164),z(.3293,.9195,.088),z(.0433,.0113,.8956)),PA=J(([i])=>{const e=z(i).toVar(),t=z(e.mul(e)).toVar(),n=z(t.mul(t)).toVar();return R(15.5).mul(n.mul(t)).sub(rt(40.14,n.mul(e))).add(rt(31.96,n).sub(rt(6.868,t.mul(e))).add(rt(.4298,t).add(rt(.1191,e).sub(.00232))))}),IA=J(({color:i,exposure:e})=>{const t=z(i).toVar(),n=oi(z(.856627153315983,.137318972929847,.11189821299995),z(.0951212405381588,.761241990602591,.0767994186031903),z(.0482516061458583,.101439036467562,.811302368396859)),s=oi(z(1.1271005818144368,-.1413297634984383,-.14132976349843826),z(-.11060664309660323,1.157823702216272,-.11060664309660294),z(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=R(-12.47393),o=R(4.026069);return t.mulAssign(e),t.assign(LA.mul(t)),t.assign(n.mul(t)),t.assign(Vn(t,1e-10)),t.assign(Ul(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(Yr(t,0,1)),t.assign(PA(t)),t.assign(s.mul(t)),t.assign(gi(Vn(z(0),t),z(2.2))),t.assign(CA.mul(t)),t.assign(Yr(t,0,1)),t}),DA={[gd]:AA,[_d]:bA,[xd]:wA,[vd]:RA,[yd]:IA};class kf extends vt{constructor(e=ii,t=OA,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===ii)return t;const s={exposure:this.exposureNode,color:t},r=DA[n];let o=null;return r?o=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const UA=(i,e,t)=>_e(new kf(i,_e(e),_e(t))),OA=QE("toneMappingExposure","float");O("toneMapping",(i,e,t)=>UA(e,t,i));ee("ToneMappingNode",kf);let Lc=null;class Gf extends oo{constructor(e=Kr,t=null){Lc===null&&(Lc=new jd),super(e,t,Lc)}updateReference(){return this}}const FA=H(Gf);O("viewportSharedTexture",FA);ee("ViewportSharedTextureNode",Gf);class ul extends Er{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class ao extends vt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new io;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new ts(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gr});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=xt.FRAME,this._textureNode=_e(new ul(this,r.texture)),this._depthTextureNode=_e(new ul(this,s)),this._depthNode=null,this._viewZNode=null,this._cameraNear=yt(0),this._cameraFar=yt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=uf(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=rl(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===ao.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(new Me);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=ii,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}ao.COLOR="color";ao.DEPTH="depth";const Bl=(i,e)=>_e(new ul(i,e));ee("PassNode",ao);const Pc=new vl(-1,1,1,-1,0,1);class VA extends gn{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt(t,2))}}const zA=new VA;class La extends Pn{constructor(e=null){super(zA,e),this.camera=Pc}renderAsync(e){return e.renderAsync(this,Pc)}render(e){e.render(this,Pc)}}const Qh=new La,ed=new La;class BA extends vt{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Pe(1),this._invSize=yt(new Me),this._passDirection=yt(new Me),this._horizontalRT=new ts,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new ts,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Bl(this,this._verticalRT.texture),this.updateBeforeType=xt.RENDER,this.resolution=new Me(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),o=n.value;Qh.material=this._material,ed.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),Qh.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),ed.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),be();const n=t.uvNode||yi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=J(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Pe(this.directionNode).mul(this._passDirection),d=R(l[0]).toVar(),p=be(s(n).mul(d)).toVar();for(let _=1;_<c;_++){const x=R(_),m=R(l[_]),f=Pe(h.mul(u.mul(x))).toVar(),T=be(s(n.add(f))),v=be(s(n.sub(f)));p.addAssign(T.add(v).mul(m)),d.addAssign(rt(2,m))}return p.div(d)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const HA=(i,e)=>_e(new BA(_e(i),e));O("gaussianBlur",HA);const td=new La;class kA extends vt{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Un(),this.damp=yt(t),this._compRT=new ts,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new ts,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Bl(this,this._compRT.texture),this.updateBeforeType=xt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=s.type;this._compRT.texture.type=r,this._oldRT.texture.type=r;const o=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),td.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(s.image.width,s.image.height),t.setRenderTarget(o),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),be();const s=t.uvNode||yi();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=J(([u,h])=>{const d=R(h).toVar(),p=be(u).toVar();return Vn(Ol(p.sub(d)),0)}),a=J(()=>{const u=be(n),h=be(r(s));return u.mulAssign(this.damp.mul(o(u,.1))),Vn(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),td.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const GA=(i,e)=>_e(new kA(_e(i),e));O("afterImage",GA);const nd=new La;class WA extends vt{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=z(.1,0,1),this.samples=s,this.resolution=new Me(1,1),this._renderTarget=new ts,this._renderTarget.texture.name="anamorphic",this._invSize=yt(new Me),this._textureNode=Bl(this,this._renderTarget.texture),this.updateBeforeType=xt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;nd.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),nd.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),be();const n=t.uvNode||yi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),r=J(()=>{const c=this.samples,l=Math.floor(c/2),u=z(0).toVar();return Mt({start:-l,end:l},({i:h})=>{const d=R(h).abs().div(l).oneMinus(),p=Pe(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),_=s(p),x=zf(_,this.tresholdNode).mul(d);u.addAssign(x)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const XA=(i,e=.9,t=3,n=32)=>_e(new WA(_e(i),_e(e),_e(t),n));O("anamorphic",XA);class Wf extends vt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const c=s[a],l=r[a];t.push(l.build(e,c.type))}else for(const a of s){const c=r[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const qA=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?or(e):Ma(e[0]),_e(new Wf(_e(i),e)));O("call",qA);ee("FunctionCallNode",Wf);class Xf extends we{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new ki,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:R()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=op(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=ap(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Ho=H(Xf);O("scriptableValue",Ho);ee("ScriptableValueNode",Xf);class qf extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class $A{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Ic=new qf;class $f extends we{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new qf,this._output=Ho(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Ho(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Ho(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new $A(this),s=Ic.get("THREE"),r=Ic.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,Ic,e,t,s,r];this._object=o(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:R()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const YA=H($f);O("scriptable",YA);ee("ScriptableNode",$f);class Pa extends we{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||In.z).negate()}setup(){return this.factorNode}}const jA=H(Pa);O("fog",jA);ee("FogNode",Pa);class Yf extends Pa{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return Hi(this.nearNode,this.farNode,t)}}const KA=H(Yf);O("rangeFog",KA);ee("FogRangeNode",Yf);class jf extends Pa{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const ZA=H(jf);O("densityFog",ZA);ee("FogExp2Node",jf);let ps=null,fs=null;class Kf extends we{constructor(e=R(),t=R()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(Ji(this.minNode.value)),n=e.getTypeLength(Ji(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(Ji(s)),a=e.getTypeLength(Ji(r));ps=ps||new at,fs=fs||new at,ps.setScalar(0),fs.setScalar(0),o===1?ps.setScalar(s):s.isColor?ps.set(s.r,s.g,s.b):ps.set(s.x,s.y,s.z||0,s.w||0),a===1?fs.setScalar(r):r.isColor?fs.set(r.r,r.g,r.b):fs.set(r.x,r.y,r.z||0,r.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const p=d%c,_=ps.getComponent(p),x=fs.getComponent(p);u[d]=ml.lerp(_,x,Math.random())}const h=this.getNodeType(e);n=Fl(u,"vec4",t.count).element(vp).convert(h)}else n=R(0);return n}}H(Kf);ee("RangeNode",Kf);class Zf extends we{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=xt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const JA=(i,e,t)=>_e(new Zf(_e(i),e,t));O("compute",JA);ee("ComputeNode",Zf);class Ns extends we{constructor(e=Ns.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Ns.TARGET_DIRECTION&&(n=ss.transformDirection(tl(t).sub(tl(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ns.TARGET_DIRECTION="targetDirection";const Jf=H(Ns,Ns.TARGET_DIRECTION);ee("LightNode",Ns);const Qf=J(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class em extends Ps{constructor(e=null){super(e),this.cutoffDistanceNode=yt(0),this.decayExponentNode=yt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,o=e.context.lightingModel,a=zp(r).sub(In),c=a.normalize(),l=a.length(),u=Qf({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;o.direct({lightDirection:c,lightColor:h,reflectedLight:d},e.stack,e)}}ee("PointLightNode",em);br(RM,em);class tm extends Ps{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=Jf(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r},e.stack,e)}}ee("DirectionalLightNode",tm);br(LM,tm);class Hl extends Ps{constructor(e=null){super(e),this.coneCosNode=yt(0),this.penumbraCosNode=yt(0),this.cutoffDistanceNode=yt(0),this.decayExponentNode=yt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Hi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:o}=this,a=zp(o).sub(In),c=a.normalize(),l=c.dot(Jf(o)),u=this.getSpotAttenuation(l),h=a.length(),d=Qf({lightDistance:h,cutoffDistance:s,decayExponent:r}),p=n.mul(u).mul(d),_=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:p,reflectedLight:_},e.stack,e)}}ee("SpotLightNode",Hl);br(Ko,Hl);class QA extends Ko{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}const eb=QA;class nm extends Hl{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Un(t,Pe(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}ee("IESSpotLightNode",nm);br(eb,nm);class im extends Ps{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}ee("AmbientLightNode",im);br(ip,im);class sm extends Ps{constructor(e=null){super(e),this.lightPositionNode=tl(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=yt(new Ie)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,o=ns.dot(s).mul(.5).add(.5),a=zn(n,t,o);e.context.irradiance.addAssign(a)}}ee("HemisphereLightNode",sm);br(np,sm);const tb=J(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class rm extends vt{constructor(e=yi()){super("float"),this.uvNode=e}setup(){return tb({uv:this.uvNode})}}const nb=H(rm);O("checker",nb);ee("CheckerNode",rm);const ib=new ys;class sb extends Kn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(ib),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=J(()=>{Lt(Pe(),"vUv").assign(yi());const n=hn("instancePosition"),s=nn("vec4","mvPos");s.assign(ws.mul(be(n,1)));const r=lr.z.div(lr.w),o=Pi.mul(s),a=nn("vec2","offset");return a.assign(_n.xy),a.assign(a.mul(nE)),a.assign(a.div(lr.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(be(a,0,0))),o})(),this.fragmentNode=J(()=>{const n=Lt(Pe(),"vUv"),s=nn("float","alpha");s.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const l=nn("float","dlen");l.assign(a.fwidth()),s.assign(Hi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=hn("instanceColor").mul(jr):c=jr,be(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}An("InstancedPointsNodeMaterial",sb);const rb=new Ss;class ob extends Kn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(rb),this.setValues(e)}}An("LineBasicNodeMaterial",ob);const ab=new Zd;class cb extends Kn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(ab),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?R(this.dashScaleNode):nl,n=this.dashSizeNode?R(this.dashSizeNode):Gp,s=this.dashSizeNode?R(this.dashGapNode):Wp;cr.assign(n),ea.assign(s);const r=Lt(hn("lineDistance").mul(t));(e?r.add(e):r).mod(cr.add(ea)).greaterThan(cr).discard()}}An("LineDashedNodeMaterial",cb);const lb=new Zd;class ub extends Kn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(lb),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=J(({start:a,end:c})=>{const l=Pi.element(2).element(2),d=Pi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return be(zn(a.xyz,c.xyz,d),c.w)});this.vertexNode=J(()=>{li("vec2","vUv").assign(yi());const a=hn("instanceStart"),c=hn("instanceEnd"),l=nn("vec4","start"),u=nn("vec4","end");l.assign(ws.mul(be(a,1))),u.assign(ws.mul(be(c,1))),s&&(li("vec3","worldStart").assign(l.xyz),li("vec3","worldEnd").assign(u.xyz));const h=lr.z.div(lr.w),d=Pi.element(2).element(3).equal(-1);nt(d,()=>{nt(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(r({start:u,end:l}))})});const p=Pi.mul(l),_=Pi.mul(u),x=p.xyz.div(p.w),m=_.xyz.div(_.w),f=m.xy.sub(x.xy).temp();f.x.assign(f.x.mul(h)),f.assign(f.normalize());const T=qr(be());if(s){const v=u.xyz.sub(l.xyz).normalize(),A=zn(l.xyz,u.xyz,.5).normalize(),P=v.cross(A).normalize(),w=v.cross(P),b=li("vec4","worldPos");b.assign(_n.y.lessThan(.5).cond(l,u));const I=Mc.mul(.5);b.addAssign(be(_n.x.lessThan(0).cond(P.mul(I),P.mul(I).negate()),0)),n||(b.addAssign(be(_n.y.lessThan(.5).cond(v.mul(I).negate(),v.mul(I)),0)),b.addAssign(be(w.mul(I),0)),nt(_n.y.greaterThan(1).or(_n.y.lessThan(0)),()=>{b.subAssign(be(w.mul(2).mul(I),0))})),T.assign(Pi.mul(b));const S=qr(z());S.assign(_n.y.lessThan(.5).cond(x,m)),T.z.assign(S.z.mul(T.w))}else{const v=nn("vec2","offset");v.assign(Pe(f.y,f.x.negate())),f.x.assign(f.x.div(h)),v.x.assign(v.x.div(h)),v.assign(_n.x.lessThan(0).cond(v.negate(),v)),nt(_n.y.lessThan(0),()=>{v.assign(v.sub(f))}).elseif(_n.y.greaterThan(1),()=>{v.assign(v.add(f))}),v.assign(v.mul(Mc)),v.assign(v.div(lr.w)),T.assign(_n.y.lessThan(.5).cond(p,_)),v.assign(v.mul(T.w)),T.assign(T.add(be(v,0,0)))}return T})();const o=J(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),p=c.sub(a),_=h.dot(d),x=d.dot(p),m=h.dot(p),f=d.dot(d),v=p.dot(p).mul(f).sub(x.mul(x)),P=_.mul(x).sub(m.mul(f)).div(v).clamp(),w=_.add(x.mul(P)).div(f).clamp();return Pe(P,w)});this.fragmentNode=J(()=>{const a=li("vec2","vUv");if(n){const u=this.offsetNode?R(this.offsetNodeNode):Oh,h=this.dashScaleNode?R(this.dashScaleNode):nl,d=this.dashSizeNode?R(this.dashSizeNode):Gp,p=this.dashSizeNode?R(this.dashGapNode):Wp;cr.assign(d),ea.assign(p);const _=hn("instanceDistanceStart"),x=hn("instanceDistanceEnd"),m=_n.y.lessThan(.5).cond(h.mul(_),nl.mul(x)),f=Lt(m.add(Oh)),T=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),T.mod(cr.add(ea)).greaterThan(cr).discard()}const c=nn("float","alpha");if(c.assign(1),s){const u=li("vec3","worldStart"),h=li("vec3","worldEnd"),d=li("vec4","worldPos").xyz.normalize().mul(1e5),p=h.sub(u),_=o({p1:u,p2:h,p3:z(0,0,0),p4:d}),x=u.add(p.mul(_.x)),m=d.mul(_.y),v=x.sub(m).length().div(Mc);if(!n)if(e){const A=v.fwidth();c.assign(Hi(A.negate().add(.5),A.add(.5),v).oneMinus())}else v.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),p=nn("float","dlen");p.assign(d.fwidth()),nt(a.y.abs().greaterThan(1),()=>{c.assign(Hi(p.oneMinus(),p.add(1),d).oneMinus())})}else nt(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=hn("instanceColorStart"),h=hn("instanceColorEnd");l=_n.y.lessThan(.5).cond(u,h).mul(jr)}else l=jr;return be(l,c)})(),this.needsUpdate=!0}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.setupShaders())}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.setupShaders())}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}An("Line2NodeMaterial",ub);const hb=new SM;class db extends Kn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.colorSpaced=!1,this.setDefaultValues(hb),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?R(this.opacityNode):kp;Qt.assign(be(Tf(Ut),e))}}An("MeshNormalNodeMaterial",db);const pb=new pa;class fb extends Kn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(pb),this.setValues(e)}}An("MeshBasicNodeMaterial",fb);const Zr=J(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),aa=J(i=>i.diffuseColor.mul(1/Math.PI)),mb=()=>R(.25),gb=J(({dotNH:i})=>Jc.mul(.5/Math.PI).add(1).mul(i.pow(Jc))),_b=J(({lightDirection:i})=>{const e=i.add(Ht).normalize(),t=Ut.dot(e).clamp(),n=Ht.dot(e).clamp(),s=Zr({f0:Ci,f90:1,dotVH:n}),r=mb(),o=gb({dotNH:t});return s.mul(r).mul(o)});class om extends yp{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ut.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(aa({diffuseColor:Qt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(_b({lightDirection:e})).mul(GT))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(aa({diffuseColor:Qt})))}}const xb=new TM;class vb extends Kn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(xb),this.setValues(e)}setupLightingModel(){return new om(!1)}}An("MeshLambertNodeMaterial",vb);const yb=new ga;class Mb extends Kn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(yb),this.setValues(e)}setupLightingModel(){return new om}setupVariants(){const e=(this.shininessNode?R(this.shininessNode):BT).max(1e-4);Jc.assign(e);const t=this.specularNode||kT;Ci.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}An("MeshPhongNodeMaterial",Mb);const Sb=J(()=>{const i=na.dFdx().abs().max(na.dFdy().abs());return i.x.max(i.y).max(i.z)}),Tb=J(i=>{const{roughness:e}=i,t=Sb();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),Eb=J(i=>{const{alpha:e,dotNL:t,dotNV:n}=i,s=e.pow2(),r=t.mul(s.add(s.oneMinus().mul(n.pow2())).sqrt()),o=n.mul(s.add(s.oneMinus().mul(t.pow2())).sqrt());return vr(.5,r.add(o).max(Np))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),Ab=J(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),id=J(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,iridescenceFresnel:r}=i,o=i.normalView||Ut,a=s.pow2(),c=e.add(Ht).normalize(),l=o.dot(e).clamp(),u=o.dot(Ht).clamp(),h=o.dot(c).clamp(),d=Ht.dot(c).clamp();let p=Zr({f0:t,f90:n,dotVH:d});r&&(p=Ll.mix(p,r));const _=Eb({alpha:a,dotNL:l,dotNV:u}),x=Ab({alpha:a,dotNH:h});return p.mul(_).mul(x)}),am=J(({roughness:i,dotNV:e})=>{const t=be(-1,-.0275,-.572,.022),n=be(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return Pe(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),bb=J(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=am({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),wb=J(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(z(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),Nb=J(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=R(1).div(t),r=e.pow2().oneMinus().max(.0078125);return R(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),Rb=J(({dotNV:i,dotNL:e})=>R(1).div(R(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),Cb=J(({lightDirection:i})=>{const e=i.add(Ht).normalize(),t=Ut.dot(i).clamp(),n=Ut.dot(Ht).clamp(),s=Ut.dot(e).clamp(),r=Nb({roughness:Cl,dotNH:s}),o=Rb({dotNV:n,dotNL:t});return tr.mul(r).mul(o)}),Lb=oi(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),Pb=i=>{const e=i.sqrt();return z(1).add(e).div(z(1).sub(e))},sd=(i,e)=>i.sub(e).div(i.add(e)).pow2(),Ib=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=z(54856e-17,44201e-17,52481e-17),s=z(1681e3,1795300,2208400),r=z(43278e5,93046e5,66121e5),o=R(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=z(a.x.add(o),a.y,a.z).div(10685e-11),Lb.mul(a)},Db=J(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=zn(i,e,Hi(0,.03,n)),o=i.div(r).pow2().mul(R(1).sub(t.pow2())),c=R(1).sub(o).sqrt(),l=sd(r,i),u=Zr({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=r.lessThan(i).cond(Math.PI,0),p=R(Math.PI).sub(d),_=Pb(s.clamp(0,.9999)),x=sd(_,r.vec3()),m=Zr({f0:x,f90:1,dotVH:c}),f=z(_.x.lessThan(r).cond(Math.PI,0),_.y.lessThan(r).cond(Math.PI,0),_.z.lessThan(r).cond(Math.PI,0)),T=r.mul(n,c,2),v=z(p).add(f),A=u.mul(m).clamp(1e-5,.9999),P=A.sqrt(),w=h.pow2().mul(m).div(z(1).sub(A));let I=u.add(w),S=w.sub(h);for(let y=1;y<=2;++y){S=S.mul(P);const F=Ib(R(y).mul(T),R(y).mul(v)).mul(2);I=I.add(S.mul(F))}return I.max(z(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),Ub=J(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=Dn(t.lessThan(.25),R(-339.2).mul(s).add(R(161.4).mul(t)).sub(25.9),R(-8.48).mul(s).add(R(14.3).mul(t)).sub(9.95)),o=Dn(t.lessThan(.25),R(44).mul(s).sub(R(23.7).mul(t)).add(3.26),R(1.97).mul(s).sub(R(3.27).mul(t)).add(.72));return Dn(t.lessThan(.25),0,R(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),Dc=z(.04),Uc=z(1);class kl extends yp{constructor(e=!1,t=!1,n=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(){if(this.clearcoat===!0&&(this.clearcoatRadiance=z().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=z().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=z().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=z().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=z().temp("sheenSpecularIndirect")),this.iridescence===!0){const e=Ut.dot(Ht).clamp();this.iridescenceFresnel=Db({outsideIOR:R(1),eta2:Sp,cosTheta1:e,thinFilmThickness:Tp,baseF0:Ci}),this.iridescenceF0=wb({f:this.iridescenceFresnel,f90:1,dotVH:e})}}computeMultiscattering(e,t,n=R(1)){const s=Ut.dot(Ht).clamp(),r=am({roughness:kr,dotNV:s}),a=(this.iridescenceF0?Ll.mix(Ci,this.iridescenceF0):Ci).mul(r.x).add(n.mul(r.y)),l=r.x.add(r.y).oneMinus(),u=Ci.add(Ci.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=Ut.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(Cb({lightDirection:e}))),this.clearcoat===!0){const a=nr.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(id({lightDirection:e,f0:Dc,f90:Uc,roughness:Qo,normalView:nr})))}n.directDiffuse.addAssign(r.mul(aa({diffuseColor:Qt.rgb}))),n.directSpecular.addAssign(r.mul(id({lightDirection:e,f0:Ci,f90:1,roughness:kr,iridescence:this.iridescence,iridescenceFresnel:this.iridescenceFresnel})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(aa({diffuseColor:Qt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(tr,Ub({normal:Ut,viewDir:Ht,roughness:Cl}))),this.clearcoat===!0){const l=nr.dot(Ht).clamp(),u=bb({dotNV:l,specularColor:Dc,specularF90:Uc,roughness:Qo});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=z().temp("singleScattering"),r=z().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(s,r);const a=s.add(r),c=Qt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(c.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Ut.dot(Ht).clamp().add(e),r=kr.mul(-16).oneMinus().negate().exp2(),o=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=nr.dot(Ht).clamp(),s=Zr({dotVH:n,f0:Dc,f90:Uc}),r=t.mul(Zc.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(Zc));t.assign(r)}if(this.sheen===!0){const n=tr.r.max(tr.g).max(tr.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const Ob=new Kd;class cm extends Kn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(Ob),this.setValues(e)}setupLightingModel(){return new kl}setupVariants(){const e=this.metalnessNode?R(this.metalnessNode):XT;SS.assign(e);let t=this.roughnessNode?R(this.roughnessNode):WT;t=Tb({roughness:t}),kr.assign(t);const n=zn(z(.04),Qt.rgb,e);Ci.assign(n),Qt.assign(be(Qt.rgb.mul(e.oneMinus()),Qt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}An("MeshStandardNodeMaterial",cm);const Fb=new MM;class lm extends cm{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.setDefaultValues(Fb),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}setupLightingModel(){return new kl(this.useClearcoat,this.useSheen,this.useIridescence)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?R(this.clearcoatNode):$T,n=this.clearcoatRoughnessNode?R(this.clearcoatRoughnessNode):YT;Zc.assign(t),Qo.assign(n)}if(this.useSheen){const t=this.sheenNode?z(this.sheenNode):ZT,n=this.sheenRoughnessNode?R(this.sheenRoughnessNode):JT;tr.assign(t),Cl.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?R(this.iridescenceNode):QT,n=this.iridescenceIORNode?R(this.iridescenceIORNode):eE,s=this.iridescenceThicknessNode?R(this.iridescenceThicknessNode):tE;Ll.assign(t),Sp.assign(n),Tp.assign(s)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?z(this.clearcoatNormalNode):jT;nr.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,super.copy(e)}}An("MeshPhysicalNodeMaterial",lm);class Vb extends kl{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=o,p=e.add(Ut.mul(c)).normalize(),_=R(Ht.dot(p.negate()).saturate().pow(h).mul(d)),x=z(_.add(l).mul(a));n.directDiffuse.addAssign(x.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class zb extends lm{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=R(.1),this.thicknessAmbientNode=R(0),this.thicknessAttenuationNode=R(.1),this.thicknessPowerNode=R(2),this.thicknessScaleNode=R(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new Vb(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}An("MeshSSSNodeMaterial",zb);const Bb=new ys;class Hb extends Kn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(Bb),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}An("PointsNodeMaterial",Hb);const kb=new xM;class Gb extends Kn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(kb),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,o=pn;let a=ws.mul(z(n||0)),c=Pe(ta[0].xyz.length(),ta[1].xyz.length());r!==null&&(c=c.mul(r));let l=o.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(yt(e.center).sub(.5))),l=l.mul(c);const u=R(s||KT),h=l.rotate(u);a=be(a.xy.add(h),a.zw);const d=Pi.mul(a);return t.vertex=o,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}An("SpriteNodeMaterial",Gb);const ur=J(([i,e,t])=>{const n=R(t).toVar(),s=R(e).toVar(),r=bs(i).toVar();return Dn(r,s,n)}),Jr=J(([i,e])=>{const t=bs(e).toVar(),n=R(i).toVar();return Dn(t,n.negate(),n)}),Pt=J(([i])=>{const e=R(i).toVar();return C(Sr(e))}),Et=J(([i,e])=>{const t=R(i).toVar();return e.assign(Pt(t)),t.sub(R(e))}),um=J(([i,e,t,n,s,r])=>{const o=R(r).toVar(),a=R(s).toVar(),c=R(n).toVar(),l=R(t).toVar(),u=R(e).toVar(),h=R(i).toVar(),d=R(Ot(1,a)).toVar();return Ot(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),hm=J(([i,e,t,n,s,r])=>{const o=R(r).toVar(),a=R(s).toVar(),c=z(n).toVar(),l=z(t).toVar(),u=z(e).toVar(),h=z(i).toVar(),d=R(Ot(1,a)).toVar();return Ot(1,o).mul(h.mul(d).add(u.mul(a))).add(o.mul(l.mul(d).add(c.mul(a))))}),dm=Zn([um,hm]),pm=J(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=R(u).toVar(),d=R(l).toVar(),p=R(c).toVar(),_=R(a).toVar(),x=R(o).toVar(),m=R(r).toVar(),f=R(s).toVar(),T=R(n).toVar(),v=R(t).toVar(),A=R(e).toVar(),P=R(i).toVar(),w=R(Ot(1,p)).toVar(),b=R(Ot(1,d)).toVar();return R(Ot(1,h)).toVar().mul(b.mul(P.mul(w).add(A.mul(p))).add(d.mul(v.mul(w).add(T.mul(p))))).add(h.mul(b.mul(f.mul(w).add(m.mul(p))).add(d.mul(x.mul(w).add(_.mul(p))))))}),fm=J(([i,e,t,n,s,r,o,a,c,l,u])=>{const h=R(u).toVar(),d=R(l).toVar(),p=R(c).toVar(),_=z(a).toVar(),x=z(o).toVar(),m=z(r).toVar(),f=z(s).toVar(),T=z(n).toVar(),v=z(t).toVar(),A=z(e).toVar(),P=z(i).toVar(),w=R(Ot(1,p)).toVar(),b=R(Ot(1,d)).toVar();return R(Ot(1,h)).toVar().mul(b.mul(P.mul(w).add(A.mul(p))).add(d.mul(v.mul(w).add(T.mul(p))))).add(h.mul(b.mul(f.mul(w).add(m.mul(p))).add(d.mul(x.mul(w).add(_.mul(p))))))}),mm=Zn([pm,fm]),gm=J(([i,e,t])=>{const n=R(t).toVar(),s=R(e).toVar(),r=me(i).toVar(),o=me(r.bitAnd(me(7))).toVar(),a=R(ur(o.lessThan(me(4)),s,n)).toVar(),c=R(rt(2,ur(o.lessThan(me(4)),n,s))).toVar();return Jr(a,bs(o.bitAnd(me(1)))).add(Jr(c,bs(o.bitAnd(me(2)))))}),_m=J(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),o=R(e).toVar(),a=me(i).toVar(),c=me(a.bitAnd(me(15))).toVar(),l=R(ur(c.lessThan(me(8)),o,r)).toVar(),u=R(ur(c.lessThan(me(4)),r,ur(c.equal(me(12)).or(c.equal(me(14))),o,s))).toVar();return Jr(l,bs(c.bitAnd(me(1)))).add(Jr(u,bs(c.bitAnd(me(2)))))}),Jt=Zn([gm,_m]),xm=J(([i,e,t])=>{const n=R(t).toVar(),s=R(e).toVar(),r=ro(i).toVar();return z(Jt(r.x,s,n),Jt(r.y,s,n),Jt(r.z,s,n))}),vm=J(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),o=R(e).toVar(),a=ro(i).toVar();return z(Jt(a.x,o,r,s),Jt(a.y,o,r,s),Jt(a.z,o,r,s))}),Wn=Zn([xm,vm]),ym=J(([i])=>{const e=R(i).toVar();return rt(.6616,e)}),Mm=J(([i])=>{const e=R(i).toVar();return rt(.982,e)}),Sm=J(([i])=>{const e=z(i).toVar();return rt(.6616,e)}),Tm=Zn([ym,Sm]),Em=J(([i])=>{const e=z(i).toVar();return rt(.982,e)}),Am=Zn([Mm,Em]),xn=J(([i,e])=>{const t=C(e).toVar(),n=me(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(C(32).sub(t)))}),bm=J(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(xn(t,C(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(xn(i,C(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(xn(e,C(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(xn(t,C(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(xn(i,C(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(xn(e,C(4))),e.addAssign(i)}),wr=J(([i,e,t])=>{const n=me(t).toVar(),s=me(e).toVar(),r=me(i).toVar();return n.bitXorAssign(s),n.subAssign(xn(s,C(14))),r.bitXorAssign(n),r.subAssign(xn(n,C(11))),s.bitXorAssign(r),s.subAssign(xn(r,C(25))),n.bitXorAssign(s),n.subAssign(xn(s,C(16))),r.bitXorAssign(n),r.subAssign(xn(n,C(4))),s.bitXorAssign(r),s.subAssign(xn(r,C(14))),n.bitXorAssign(s),n.subAssign(xn(s,C(24))),n}),on=J(([i])=>{const e=me(i).toVar();return R(e).div(R(me(C(4294967295))))}),ri=J(([i])=>{const e=R(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),wm=J(([i])=>{const e=C(i).toVar(),t=me(me(1)).toVar(),n=me(me(C(3735928559)).add(t.shiftLeft(me(2)).add(me(13)))).toVar();return wr(n.add(me(e)),n,n)}),Nm=J(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=me(me(2)).toVar(),r=me().toVar(),o=me().toVar(),a=me().toVar();return r.assign(o.assign(a.assign(me(C(3735928559)).add(s.shiftLeft(me(2)).add(me(13)))))),r.addAssign(me(n)),o.addAssign(me(t)),wr(r,o,a)}),Rm=J(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),r=C(i).toVar(),o=me(me(3)).toVar(),a=me().toVar(),c=me().toVar(),l=me().toVar();return a.assign(c.assign(l.assign(me(C(3735928559)).add(o.shiftLeft(me(2)).add(me(13)))))),a.addAssign(me(r)),c.addAssign(me(s)),l.addAssign(me(n)),wr(a,c,l)}),Cm=J(([i,e,t,n])=>{const s=C(n).toVar(),r=C(t).toVar(),o=C(e).toVar(),a=C(i).toVar(),c=me(me(4)).toVar(),l=me().toVar(),u=me().toVar(),h=me().toVar();return l.assign(u.assign(h.assign(me(C(3735928559)).add(c.shiftLeft(me(2)).add(me(13)))))),l.addAssign(me(a)),u.addAssign(me(o)),h.addAssign(me(r)),bm(l,u,h),l.addAssign(me(s)),wr(l,u,h)}),Lm=J(([i,e,t,n,s])=>{const r=C(s).toVar(),o=C(n).toVar(),a=C(t).toVar(),c=C(e).toVar(),l=C(i).toVar(),u=me(me(5)).toVar(),h=me().toVar(),d=me().toVar(),p=me().toVar();return h.assign(d.assign(p.assign(me(C(3735928559)).add(u.shiftLeft(me(2)).add(me(13)))))),h.addAssign(me(l)),d.addAssign(me(c)),p.addAssign(me(a)),bm(h,d,p),h.addAssign(me(o)),d.addAssign(me(r)),wr(h,d,p)}),ht=Zn([wm,Nm,Rm,Cm,Lm]),Pm=J(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=me(ht(n,t)).toVar(),r=ro().toVar();return r.x.assign(s.bitAnd(C(255))),r.y.assign(s.shiftRight(C(8)).bitAnd(C(255))),r.z.assign(s.shiftRight(C(16)).bitAnd(C(255))),r}),Im=J(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),r=C(i).toVar(),o=me(ht(r,s,n)).toVar(),a=ro().toVar();return a.x.assign(o.bitAnd(C(255))),a.y.assign(o.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(o.shiftRight(C(16)).bitAnd(C(255))),a}),Xn=Zn([Pm,Im]),Dm=J(([i])=>{const e=Pe(i).toVar(),t=C().toVar(),n=C().toVar(),s=R(Et(e.x,t)).toVar(),r=R(Et(e.y,n)).toVar(),o=R(ri(s)).toVar(),a=R(ri(r)).toVar(),c=R(dm(Jt(ht(t,n),s,r),Jt(ht(t.add(C(1)),n),s.sub(1),r),Jt(ht(t,n.add(C(1))),s,r.sub(1)),Jt(ht(t.add(C(1)),n.add(C(1))),s.sub(1),r.sub(1)),o,a)).toVar();return Tm(c)}),Um=J(([i])=>{const e=z(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),r=R(Et(e.x,t)).toVar(),o=R(Et(e.y,n)).toVar(),a=R(Et(e.z,s)).toVar(),c=R(ri(r)).toVar(),l=R(ri(o)).toVar(),u=R(ri(a)).toVar(),h=R(mm(Jt(ht(t,n,s),r,o,a),Jt(ht(t.add(C(1)),n,s),r.sub(1),o,a),Jt(ht(t,n.add(C(1)),s),r,o.sub(1),a),Jt(ht(t.add(C(1)),n.add(C(1)),s),r.sub(1),o.sub(1),a),Jt(ht(t,n,s.add(C(1))),r,o,a.sub(1)),Jt(ht(t.add(C(1)),n,s.add(C(1))),r.sub(1),o,a.sub(1)),Jt(ht(t,n.add(C(1)),s.add(C(1))),r,o.sub(1),a.sub(1)),Jt(ht(t.add(C(1)),n.add(C(1)),s.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Am(h)}),Wb=Zn([Dm,Um]),Om=J(([i])=>{const e=Pe(i).toVar(),t=C().toVar(),n=C().toVar(),s=R(Et(e.x,t)).toVar(),r=R(Et(e.y,n)).toVar(),o=R(ri(s)).toVar(),a=R(ri(r)).toVar(),c=z(dm(Wn(Xn(t,n),s,r),Wn(Xn(t.add(C(1)),n),s.sub(1),r),Wn(Xn(t,n.add(C(1))),s,r.sub(1)),Wn(Xn(t.add(C(1)),n.add(C(1))),s.sub(1),r.sub(1)),o,a)).toVar();return Tm(c)}),Fm=J(([i])=>{const e=z(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),r=R(Et(e.x,t)).toVar(),o=R(Et(e.y,n)).toVar(),a=R(Et(e.z,s)).toVar(),c=R(ri(r)).toVar(),l=R(ri(o)).toVar(),u=R(ri(a)).toVar(),h=z(mm(Wn(Xn(t,n,s),r,o,a),Wn(Xn(t.add(C(1)),n,s),r.sub(1),o,a),Wn(Xn(t,n.add(C(1)),s),r,o.sub(1),a),Wn(Xn(t.add(C(1)),n.add(C(1)),s),r.sub(1),o.sub(1),a),Wn(Xn(t,n,s.add(C(1))),r,o,a.sub(1)),Wn(Xn(t.add(C(1)),n,s.add(C(1))),r.sub(1),o,a.sub(1)),Wn(Xn(t,n.add(C(1)),s.add(C(1))),r,o.sub(1),a.sub(1)),Wn(Xn(t.add(C(1)),n.add(C(1)),s.add(C(1))),r.sub(1),o.sub(1),a.sub(1)),c,l,u)).toVar();return Am(h)}),Xb=Zn([Om,Fm]),qb=J(([i])=>{const e=R(i).toVar(),t=C(Pt(e)).toVar();return on(ht(t))}),$b=J(([i])=>{const e=Pe(i).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar();return on(ht(t,n))}),Yb=J(([i])=>{const e=z(i).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),s=C(Pt(e.z)).toVar();return on(ht(t,n,s))}),jb=J(([i])=>{const e=be(i).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),s=C(Pt(e.z)).toVar(),r=C(Pt(e.w)).toVar();return on(ht(t,n,s,r))}),Vm=J(([i])=>{const e=R(i).toVar(),t=C(Pt(e)).toVar();return z(on(ht(t,C(0))),on(ht(t,C(1))),on(ht(t,C(2))))}),zm=J(([i])=>{const e=Pe(i).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar();return z(on(ht(t,n,C(0))),on(ht(t,n,C(1))),on(ht(t,n,C(2))))}),Bm=J(([i])=>{const e=z(i).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),s=C(Pt(e.z)).toVar();return z(on(ht(t,n,s,C(0))),on(ht(t,n,s,C(1))),on(ht(t,n,s,C(2))))}),Hm=J(([i])=>{const e=be(i).toVar(),t=C(Pt(e.x)).toVar(),n=C(Pt(e.y)).toVar(),s=C(Pt(e.z)).toVar(),r=C(Pt(e.w)).toVar();return z(on(ht(t,n,s,r,C(0))),on(ht(t,n,s,r,C(1))),on(ht(t,n,s,r,C(2))))}),km=Zn([Vm,zm,Bm,Hm]),ca=J(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=z(i).toVar(),c=R(0).toVar(),l=R(1).toVar();return Mt({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(Wb(a))),l.mulAssign(s),a.mulAssign(r)}),c}),Gm=J(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=z(i).toVar(),c=z(0).toVar(),l=R(1).toVar();return Mt({start:C(0),end:o},({i:u})=>{c.addAssign(l.mul(Xb(a))),l.mulAssign(s),a.mulAssign(r)}),c}),Kb=J(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=z(i).toVar();return Pe(ca(a,o,r,s),ca(a.add(z(C(19),C(193),C(17))),o,r,s))}),Zb=J(([i,e,t,n])=>{const s=R(n).toVar(),r=R(t).toVar(),o=C(e).toVar(),a=z(i).toVar(),c=z(Gm(a,o,r,s)).toVar(),l=R(ca(a.add(z(C(19),C(193),C(17))),o,r,s)).toVar();return be(c,l)}),Wm=J(([i,e,t,n,s,r,o])=>{const a=C(o).toVar(),c=R(r).toVar(),l=C(s).toVar(),u=C(n).toVar(),h=C(t).toVar(),d=C(e).toVar(),p=Pe(i).toVar(),_=z(km(Pe(d.add(u),h.add(l)))).toVar(),x=Pe(_.x,_.y).toVar();x.subAssign(.5),x.mulAssign(c),x.addAssign(.5);const m=Pe(Pe(R(d),R(h)).add(x)).toVar(),f=Pe(m.sub(p)).toVar();return nt(a.equal(C(2)),()=>Bt(f.x).add(Bt(f.y))),nt(a.equal(C(3)),()=>Vn(Bt(f.x),Bt(f.y))),Tr(f,f)}),Xm=J(([i,e,t,n,s,r,o,a,c])=>{const l=C(c).toVar(),u=R(a).toVar(),h=C(o).toVar(),d=C(r).toVar(),p=C(s).toVar(),_=C(n).toVar(),x=C(t).toVar(),m=C(e).toVar(),f=z(i).toVar(),T=z(km(z(m.add(p),x.add(d),_.add(h)))).toVar();T.subAssign(.5),T.mulAssign(u),T.addAssign(.5);const v=z(z(R(m),R(x),R(_)).add(T)).toVar(),A=z(v.sub(f)).toVar();return nt(l.equal(C(2)),()=>Bt(A.x).add(Bt(A.y).add(Bt(A.z)))),nt(l.equal(C(3)),()=>Vn(Vn(Bt(A.x),Bt(A.y)),Bt(A.z))),Tr(A,A)}),Nr=Zn([Wm,Xm]),Jb=J(([i,e,t])=>{const n=C(t).toVar(),s=R(e).toVar(),r=Pe(i).toVar(),o=C().toVar(),a=C().toVar(),c=Pe(Et(r.x,o),Et(r.y,a)).toVar(),l=R(1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=R(Nr(c,u,h,o,a,s,n)).toVar();l.assign($r(l,d))})}),nt(n.equal(C(0)),()=>{l.assign(Ls(l))}),l}),Qb=J(([i,e,t])=>{const n=C(t).toVar(),s=R(e).toVar(),r=Pe(i).toVar(),o=C().toVar(),a=C().toVar(),c=Pe(Et(r.x,o),Et(r.y,a)).toVar(),l=Pe(1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=R(Nr(c,u,h,o,a,s,n)).toVar();nt(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),nt(n.equal(C(0)),()=>{l.assign(Ls(l))}),l}),ew=J(([i,e,t])=>{const n=C(t).toVar(),s=R(e).toVar(),r=Pe(i).toVar(),o=C().toVar(),a=C().toVar(),c=Pe(Et(r.x,o),Et(r.y,a)).toVar(),l=z(1e6,1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=R(Nr(c,u,h,o,a,s,n)).toVar();nt(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),nt(n.equal(C(0)),()=>{l.assign(Ls(l))}),l}),tw=J(([i,e,t])=>{const n=C(t).toVar(),s=R(e).toVar(),r=z(i).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=z(Et(r.x,o),Et(r.y,a),Et(r.z,c)).toVar(),u=R(1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:C(1),name:"z",condition:"<="},({z:p})=>{const _=R(Nr(l,h,d,p,o,a,c,s,n)).toVar();u.assign($r(u,_))})})}),nt(n.equal(C(0)),()=>{u.assign(Ls(u))}),u}),nw=J(([i,e,t])=>{const n=C(t).toVar(),s=R(e).toVar(),r=z(i).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=z(Et(r.x,o),Et(r.y,a),Et(r.z,c)).toVar(),u=Pe(1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:C(1),name:"z",condition:"<="},({z:p})=>{const _=R(Nr(l,h,d,p,o,a,c,s,n)).toVar();nt(_.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.y.assign(_)})})})}),nt(n.equal(C(0)),()=>{u.assign(Ls(u))}),u}),iw=J(([i,e,t])=>{const n=C(t).toVar(),s=R(e).toVar(),r=z(i).toVar(),o=C().toVar(),a=C().toVar(),c=C().toVar(),l=z(Et(r.x,o),Et(r.y,a),Et(r.z,c)).toVar(),u=z(1e6,1e6,1e6).toVar();return Mt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Mt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Mt({start:-1,end:C(1),name:"z",condition:"<="},({z:p})=>{const _=R(Nr(l,h,d,p,o,a,c,s,n)).toVar();nt(_.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(_)}).elseif(_.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(_)}).elseif(_.lessThan(u.z),()=>{u.z.assign(_)})})})}),nt(n.equal(C(0)),()=>{u.assign(Ls(u))}),u});ur.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});Jr.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Pt.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});um.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});hm.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});pm.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});fm.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});gm.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});_m.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});xm.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});vm.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});ym.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});Mm.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});Sm.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Em.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});xn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});wr.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});on.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});ri.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});wm.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});Nm.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Rm.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Cm.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});Lm.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});Pm.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Im.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Dm.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});Um.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});Om.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Fm.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});qb.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});$b.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});Yb.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});jb.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});Vm.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});zm.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Bm.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Hm.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});ca.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Gm.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Kb.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Zb.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Wm.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Xm.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Jb.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Qb.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});ew.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});tw.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});nw.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});iw.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const sw=J(([i])=>{const e=z(i).toVar(),t=R(e.x).toVar(),n=R(e.y).toVar(),s=R(e.z).toVar();nt(n.lessThan(1e-4),()=>z(s,s,s)).else(()=>{t.assign(rt(6,t.sub(Sr(t))));const r=C(Lp(t)).toVar(),o=R(t.sub(R(r))).toVar(),a=R(s.mul(Ot(1,n))).toVar(),c=R(s.mul(Ot(1,n.mul(o)))).toVar(),l=R(s.mul(Ot(1,n.mul(Ot(1,o))))).toVar();return nt(r.equal(C(0)),()=>z(s,l,a)).elseif(r.equal(C(1)),()=>z(c,s,a)).elseif(r.equal(C(2)),()=>z(a,s,l)).elseif(r.equal(C(3)),()=>z(a,c,s)).elseif(r.equal(C(4)),()=>z(l,a,s)),z(s,a,c)})}),rw=J(([i])=>{const e=z(i).toVar(),t=R(e.x).toVar(),n=R(e.y).toVar(),s=R(e.z).toVar(),r=R($r(t,$r(n,s))).toVar(),o=R(Vn(t,Vn(n,s))).toVar(),a=R(o.sub(r)).toVar(),c=R().toVar(),l=R().toVar(),u=R().toVar();return u.assign(o),nt(o.greaterThan(0),()=>{l.assign(a.div(o))}).else(()=>{l.assign(0)}),nt(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{nt(t.greaterThanEqual(o),()=>{c.assign(n.sub(s).div(a))}).elseif(n.greaterThanEqual(o),()=>{c.assign(On(2,s.sub(t).div(a)))}).else(()=>{c.assign(On(4,t.sub(n).div(a)))}),c.mulAssign(1/6),nt(c.lessThan(0),()=>{c.addAssign(1)})}),z(c,l,u)});sw.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});rw.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const ow=J(([i])=>{const e=z(i).toVar(),t=dp(wp(e,z(.04045))).toVar(),n=z(e.div(12.92)).toVar(),s=z(gi(Vn(e.add(z(.055)),z(0)).div(1.055),z(2.4))).toVar();return zn(n,s,t)});ow.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});const rd={type:"change"},Oc={type:"start"},od={type:"end"},Vo=new da,ad=new Ri,aw=Math.cos(70*ml.DEG2RAD);class cw extends ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",Se),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rd),n.update(),r=s.NONE},this.update=function(){const g=new L,k=new As().setFromUnitVectors(e.up,new L(0,1,0)),Q=k.clone().invert(),de=new L,Te=new As,st=new L,Qe=2*Math.PI;return function(jt=null){const mt=n.object.position;g.copy(mt).sub(n.target),g.applyQuaternion(k),a.setFromVector3(g),n.autoRotate&&r===s.NONE&&W(y(jt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ft=n.minAzimuthAngle,Vt=n.maxAzimuthAngle;isFinite(Ft)&&isFinite(Vt)&&(Ft<-Math.PI?Ft+=Qe:Ft>Math.PI&&(Ft-=Qe),Vt<-Math.PI?Vt+=Qe:Vt>Math.PI&&(Vt-=Qe),Ft<=Vt?a.theta=Math.max(Ft,Math.min(Vt,a.theta)):a.theta=a.theta>(Ft+Vt)/2?Math.max(Ft,a.theta):Math.min(Vt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let bn=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)a.radius=ie(a.radius);else{const Bn=a.radius;a.radius=ie(a.radius*l),bn=Bn!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion(Q),mt.copy(n.target).add(g),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&w){let Bn=null;if(n.object.isPerspectiveCamera){const Gi=g.length();Bn=ie(Gi*l);const Is=Gi-Bn;n.object.position.addScaledVector(A,Is),n.object.updateMatrixWorld(),bn=!!Is}else if(n.object.isOrthographicCamera){const Gi=new L(P.x,P.y,0);Gi.unproject(n.object);const Is=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),bn=Is!==n.object.zoom;const rs=new L(P.x,P.y,0);rs.unproject(n.object),n.object.position.sub(rs).add(Gi),n.object.updateMatrixWorld(),Bn=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Bn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Bn).add(n.object.position):(Vo.origin.copy(n.object.position),Vo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vo.direction))<aw?e.lookAt(n.target):(ad.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vo.intersectPlane(ad,n.target))))}else if(n.object.isOrthographicCamera){const Bn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Bn!==n.object.zoom&&(n.object.updateProjectionMatrix(),bn=!0)}return l=1,w=!1,bn||de.distanceToSquared(n.object.position)>o||8*(1-Te.dot(n.object.quaternion))>o||st.distanceToSquared(n.target)>o?(n.dispatchEvent(rd),de.copy(n.object.position),Te.copy(n.object.quaternion),st.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ae),n.domElement.removeEventListener("pointerdown",$),n.domElement.removeEventListener("pointercancel",se),n.domElement.removeEventListener("wheel",ue),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",se),n.domElement.getRootNode().removeEventListener("keydown",Ue,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Eh,c=new Eh;let l=1;const u=new L,h=new Me,d=new Me,p=new Me,_=new Me,x=new Me,m=new Me,f=new Me,T=new Me,v=new Me,A=new L,P=new Me;let w=!1;const b=[],I={};let S=!1;function y(g){return g!==null?2*Math.PI/60*n.autoRotateSpeed*g:2*Math.PI/60/60*n.autoRotateSpeed}function F(g){const k=Math.abs(g*.01);return Math.pow(.95,n.zoomSpeed*k)}function W(g){c.theta-=g}function D(g){c.phi-=g}const K=function(){const g=new L;return function(Q,de){g.setFromMatrixColumn(de,0),g.multiplyScalar(-Q),u.add(g)}}(),Z=function(){const g=new L;return function(Q,de){n.screenSpacePanning===!0?g.setFromMatrixColumn(de,1):(g.setFromMatrixColumn(de,0),g.crossVectors(n.object.up,g)),g.multiplyScalar(Q),u.add(g)}}(),re=function(){const g=new L;return function(Q,de){const Te=n.domElement;if(n.object.isPerspectiveCamera){const st=n.object.position;g.copy(st).sub(n.target);let Qe=g.length();Qe*=Math.tan(n.object.fov/2*Math.PI/180),K(2*Q*Qe/Te.clientHeight,n.object.matrix),Z(2*de*Qe/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(K(Q*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),Z(de*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function le(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(g){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(g,k){if(!n.zoomToCursor)return;w=!0;const Q=n.domElement.getBoundingClientRect(),de=g-Q.left,Te=k-Q.top,st=Q.width,Qe=Q.height;P.x=de/st*2-1,P.y=-(Te/Qe)*2+1,A.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(g){return Math.max(n.minDistance,Math.min(n.maxDistance,g))}function ge(g){h.set(g.clientX,g.clientY)}function Le(g){ne(g.clientX,g.clientX),f.set(g.clientX,g.clientY)}function Be(g){_.set(g.clientX,g.clientY)}function j(g){d.set(g.clientX,g.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const k=n.domElement;W(2*Math.PI*p.x/k.clientHeight),D(2*Math.PI*p.y/k.clientHeight),h.copy(d),n.update()}function he(g){T.set(g.clientX,g.clientY),v.subVectors(T,f),v.y>0?le(F(v.y)):v.y<0&&Y(F(v.y)),f.copy(T),n.update()}function ye(g){x.set(g.clientX,g.clientY),m.subVectors(x,_).multiplyScalar(n.panSpeed),re(m.x,m.y),_.copy(x),n.update()}function pe(g){ne(g.clientX,g.clientY),g.deltaY<0?Y(F(g.deltaY)):g.deltaY>0&&le(F(g.deltaY)),n.update()}function Ge(g){let k=!1;switch(g.code){case n.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(-n.keyPanSpeed,0),k=!0;break}k&&(g.preventDefault(),n.update())}function qe(g){if(b.length===1)h.set(g.pageX,g.pageY);else{const k=lt(g),Q=.5*(g.pageX+k.x),de=.5*(g.pageY+k.y);h.set(Q,de)}}function et(g){if(b.length===1)_.set(g.pageX,g.pageY);else{const k=lt(g),Q=.5*(g.pageX+k.x),de=.5*(g.pageY+k.y);_.set(Q,de)}}function B(g){const k=lt(g),Q=g.pageX-k.x,de=g.pageY-k.y,Te=Math.sqrt(Q*Q+de*de);f.set(0,Te)}function Je(g){n.enableZoom&&B(g),n.enablePan&&et(g)}function Fe(g){n.enableZoom&&B(g),n.enableRotate&&qe(g)}function Ct(g){if(b.length==1)d.set(g.pageX,g.pageY);else{const Q=lt(g),de=.5*(g.pageX+Q.x),Te=.5*(g.pageY+Q.y);d.set(de,Te)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const k=n.domElement;W(2*Math.PI*p.x/k.clientHeight),D(2*Math.PI*p.y/k.clientHeight),h.copy(d)}function ze(g){if(b.length===1)x.set(g.pageX,g.pageY);else{const k=lt(g),Q=.5*(g.pageX+k.x),de=.5*(g.pageY+k.y);x.set(Q,de)}m.subVectors(x,_).multiplyScalar(n.panSpeed),re(m.x,m.y),_.copy(x)}function ut(g){const k=lt(g),Q=g.pageX-k.x,de=g.pageY-k.y,Te=Math.sqrt(Q*Q+de*de);T.set(0,Te),v.set(0,Math.pow(T.y/f.y,n.zoomSpeed)),le(v.y),f.copy(T);const st=(g.pageX+k.x)*.5,Qe=(g.pageY+k.y)*.5;ne(st,Qe)}function N(g){n.enableZoom&&ut(g),n.enablePan&&ze(g)}function M(g){n.enableZoom&&ut(g),n.enableRotate&&Ct(g)}function $(g){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(g.pointerId),n.domElement.addEventListener("pointermove",te),n.domElement.addEventListener("pointerup",se)),!ct(g)&&(tt(g),g.pointerType==="touch"?He(g):oe(g)))}function te(g){n.enabled!==!1&&(g.pointerType==="touch"?Ee(g):De(g))}function se(g){switch(it(g),b.length){case 0:n.domElement.releasePointerCapture(g.pointerId),n.domElement.removeEventListener("pointermove",te),n.domElement.removeEventListener("pointerup",se),n.dispatchEvent(od),r=s.NONE;break;case 1:const k=b[0],Q=I[k];He({pointerId:k,pageX:Q.x,pageY:Q.y});break}}function oe(g){let k;switch(g.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Ds.DOLLY:if(n.enableZoom===!1)return;Le(g),r=s.DOLLY;break;case Ds.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enablePan===!1)return;Be(g),r=s.PAN}else{if(n.enableRotate===!1)return;ge(g),r=s.ROTATE}break;case Ds.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(n.enableRotate===!1)return;ge(g),r=s.ROTATE}else{if(n.enablePan===!1)return;Be(g),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Oc)}function De(g){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;j(g);break;case s.DOLLY:if(n.enableZoom===!1)return;he(g);break;case s.PAN:if(n.enablePan===!1)return;ye(g);break}}function ue(g){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(g.preventDefault(),n.dispatchEvent(Oc),pe(Ce(g)),n.dispatchEvent(od))}function Ce(g){const k=g.deltaMode,Q={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(k){case 1:Q.deltaY*=16;break;case 2:Q.deltaY*=100;break}return g.ctrlKey&&!S&&(Q.deltaY*=10),Q}function Ue(g){g.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(g){g.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function Se(g){n.enabled===!1||n.enablePan===!1||Ge(g)}function He(g){switch(ot(g),b.length){case 1:switch(n.touches.ONE){case Us.ROTATE:if(n.enableRotate===!1)return;qe(g),r=s.TOUCH_ROTATE;break;case Us.PAN:if(n.enablePan===!1)return;et(g),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Us.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(g),r=s.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(g),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Oc)}function Ee(g){switch(ot(g),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ct(g),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;ze(g),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(g),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;M(g),n.update();break;default:r=s.NONE}}function Ae(g){n.enabled!==!1&&g.preventDefault()}function tt(g){b.push(g.pointerId)}function it(g){delete I[g.pointerId];for(let k=0;k<b.length;k++)if(b[k]==g.pointerId){b.splice(k,1);return}}function ct(g){for(let k=0;k<b.length;k++)if(b[k]==g.pointerId)return!0;return!1}function ot(g){let k=I[g.pointerId];k===void 0&&(k=new Me,I[g.pointerId]=k),k.set(g.pageX,g.pageY)}function lt(g){const k=g.pointerId===b[0]?b[1]:b[0];return I[k]}n.domElement.addEventListener("contextmenu",Ae),n.domElement.addEventListener("pointerdown",$),n.domElement.addEventListener("pointercancel",se),n.domElement.addEventListener("wheel",ue,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ue,{passive:!0,capture:!0}),this.update()}}class cd extends Rs{constructor(e){super(e)}load(e,t,n,s){const r=this,o=this.path===""?PM.extractUrlBase(e):this.path,a=new Qd(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{t(r.parse(c,o))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let s={};const r=/\s+/,o={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)==="#")continue;const u=l.indexOf(" ");let h=u>=0?l.substring(0,u):l;h=h.toLowerCase();let d=u>=0?l.substring(u+1):"";if(d=d.trim(),h==="newmtl")s={name:d},o[d]=s;else if(h==="ka"||h==="kd"||h==="ks"||h==="ke"){const p=d.split(r,3);s[h]=[parseFloat(p[0]),parseFloat(p[1]),parseFloat(p[2])]}else s[h]=d}const a=new lw(this.resourcePath||t,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class lw{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:zi,this.wrap=this.options.wrap!==void 0?this.options.wrap:pr}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const s=e[n],r={};t[n]=r;for(const o in s){let a=!0,c=s[o];const l=o.toLowerCase();switch(l){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(a=!1);break}a&&(r[l]=c)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],s={name:e,side:this.side};function r(a,c){return typeof c!="string"||c===""?"":/^https?:\/\//i.test(c)?c:a+c}function o(a,c){if(s[a])return;const l=t.getTextureParams(c,s),u=t.loadTexture(r(t.baseUrl,l.url));u.repeat.copy(l.scale),u.offset.copy(l.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(a==="map"||a==="emissiveMap")&&(u.colorSpace=Ln),s[a]=u}for(const a in n){const c=n[a];let l;if(c!=="")switch(a.toLowerCase()){case"kd":s.color=new Ie().fromArray(c).convertSRGBToLinear();break;case"ks":s.specular=new Ie().fromArray(c).convertSRGBToLinear();break;case"ke":s.emissive=new Ie().fromArray(c).convertSRGBToLinear();break;case"map_kd":o("map",c);break;case"map_ks":o("specularMap",c);break;case"map_ke":o("emissiveMap",c);break;case"norm":o("normalMap",c);break;case"map_bump":case"bump":o("bumpMap",c);break;case"map_d":o("alphaMap",c),s.transparent=!0;break;case"ns":s.shininess=parseFloat(c);break;case"d":l=parseFloat(c),l<1&&(s.opacity=l,s.transparent=!0);break;case"tr":l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(s.opacity=1-l,s.transparent=!0);break}}return this.materials[e]=new ga(s),this.materials[e]}getTextureParams(e,t){const n={scale:new Me(1,1),offset:new Me(0,0)},s=e.split(/\s+/);let r;return r=s.indexOf("-bm"),r>=0&&(t.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),n.url=s.join(" ").trim(),n}loadTexture(e,t,n,s,r){const o=this.manager!==void 0?this.manager:Jd;let a=o.getHandler(e);a===null&&(a=new tp(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const c=a.load(e,n,s,r);return t!==void 0&&(c.mapping=t),c}}const uw=/^[og]\s*(.+)?/,hw=/^mtllib /,dw=/^usemtl /,pw=/^usemap /,ld=/\s+/,ud=new L,Fc=new L,hd=new L,dd=new L,Gn=new L,zo=new Ie;function fw(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;ud.fromArray(s,e),Fc.fromArray(s,t),hd.fromArray(s,n),Gn.subVectors(hd,Fc),dd.subVectors(ud,Fc),Gn.cross(dd),Gn.normalize(),r.push(Gn.x,Gn.y,Gn.z),r.push(Gn.x,Gn.y,Gn.z),r.push(Gn.x,Gn.y,Gn.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,o,a,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,d,p),this.addColor(h,d,p),a!==void 0&&a!==""){const _=this.normals.length;h=this.parseNormalIndex(a,_),d=this.parseNormalIndex(c,_),p=this.parseNormalIndex(l,_),this.addNormal(h,d,p)}else this.addFaceNormal(h,d,p);if(s!==void 0&&s!==""){const _=this.uvs.length;h=this.parseUVIndex(s,_),d=this.parseUVIndex(r,_),p=this.parseUVIndex(o,_),this.addUV(h,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=e.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,o=t.length;r<o;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class pd extends Rs{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,o=new Qd(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new fw;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let a=0,c=n.length;a<c;a++){const l=n[a].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(ld);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(zo.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(zo.r,zo.g,zo.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=l.slice(1).trim().split(ld),p=[];for(let x=0,m=d.length;x<m;x++){const f=d[x];if(f.length>0){const T=f.split("/");p.push(T)}}const _=p[0];for(let x=1,m=p.length-1;x<m;x++){const f=p[x],T=p[x+1];t.addFace(_[0],f[0],T[0],_[1],f[1],T[1],_[2],f[2],T[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let d=[];const p=[];if(l.indexOf("/")===-1)d=h;else for(let _=0,x=h.length;_<x;_++){const m=h[_].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(d,p)}else if(u==="p"){const d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=uw.exec(l))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(dw.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(hw.test(l))t.materialLibraries.push(l.substring(7).trim());else if(pw.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=l.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new Vr;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){const l=t.objects[a],u=l.geometry,h=l.materials,d=u.type==="Line",p=u.type==="Points";let _=!1;if(u.vertices.length===0)continue;const x=new gn;x.setAttribute("position",new wt(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new wt(u.normals,3)),u.colors.length>0&&(_=!0,x.setAttribute("color",new wt(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new wt(u.uvs,2));const m=[];for(let T=0,v=h.length;T<v;T++){const A=h[T],P=A.name+"_"+A.smooth+"_"+_;let w=t.materials[P];if(this.materials!==null){if(w=this.materials.create(A.name),d&&w&&!(w instanceof Ss)){const b=new Ss;Tn.prototype.copy.call(b,w),b.color.copy(w.color),w=b}else if(p&&w&&!(w instanceof ys)){const b=new ys({size:10,sizeAttenuation:!1});Tn.prototype.copy.call(b,w),b.color.copy(w.color),b.map=w.map,w=b}}w===void 0&&(d?w=new Ss:p?w=new ys({size:1,sizeAttenuation:!1}):w=new ga,w.name=A.name,w.flatShading=!A.smooth,w.vertexColors=_,t.materials[P]=w),m.push(w)}let f;if(m.length>1){for(let T=0,v=h.length;T<v;T++){const A=h[T];x.addGroup(A.groupStart,A.groupCount,T)}d?f=new $c(x,m):p?f=new mc(x,m):f=new Pn(x,m)}else d?f=new $c(x,m[0]):p?f=new mc(x,m[0]):f=new Pn(x,m[0]);f.name=l.name,r.add(f)}else if(t.vertices.length>0){const a=new ys({size:1,sizeAttenuation:!1}),c=new gn;c.setAttribute("position",new wt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new wt(t.colors,3)),a.vertexColors=!0);const l=new mc(c,a);r.add(l)}return r}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class _i{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),_i.nextNameID=_i.nextNameID||0,this.$name.id="lil-gui-name-"+ ++_i.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class mw extends _i{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function hl(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const gw={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:hl,toHexString:hl},Qr={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},_w={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const n=Qr.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([i,e,t],n=1)=>Qr.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},xw={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Qr.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:i,g:e,b:t},n=1)=>Qr.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},vw=[gw,Qr,_w,xw];class yw extends _i{constructor(e,t,n,s){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,vw.find(o=>o.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=hl(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Vc extends _i{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Mw extends _i{constructor(e,t,n,s,r,o){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let t,n,s,r,o,a=!1;const c=u=>{if(a){const h=u.clientX-t,d=u.clientY-n;Math.abs(d)>5?(u.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&l()}if(!a){const h=u.clientY-s;o-=h*this._step*this._arrowKeyMultiplier(u),r+o>this._max?o=this._max-r:r+o<this._min&&(o=this._min-r),this._snapClampSetValue(r+o)}s=u.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=s=u.clientY,a=!0,r=this.getValue(),o=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const p=this.$slider.getBoundingClientRect();let _=(x=d,m=p.left,f=p.right,T=this._min,v=this._max,(x-m)/(f-m)*(v-T)+T);var x,m,f,T,v;this._snapClampSetValue(_)},t=d=>{e(d.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let s,r,o=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),o=!1},c=d=>{if(o){const p=d.touches[0].clientX-s,_=d.touches[0].clientY-r;Math.abs(p)>Math.abs(_)?a(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}else d.preventDefault(),e(d.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(s=d.touches[0].clientX,r=d.touches[0].clientY,o=!0):a(d),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const p=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Sw extends _i{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Tw extends _i{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let fd=!1;class Gl{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!fd&&o&&(function(c){const l=document.createElement("style");l.innerHTML=c;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(l,u):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),fd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,s,r){if(Object(n)===n)return new Sw(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new Mw(this,e,t,n,s,r);case"boolean":return new mw(this,e,t);case"string":return new Tw(this,e,t);case"function":return new Vc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new yw(this,e,t,n)}addFolder(e){return new Gl({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Vc||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Vc)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class Ew{constructor(e,t,n,s){this.obj=e,this.minProp=t,this.maxProp=n,this.minDif=s}get min(){return this.obj[this.minProp]}set min(e){this.obj[this.minProp]=e,this.obj[this.maxProp]=Math.max(this.obj[this.maxProp],e+this.minDif)}get max(){return this.obj[this.maxProp]}set max(e){this.obj[this.maxProp]=e,this.min=this.min}}class zc{constructor(e,t){this.object=e,this.prop=t}get value(){return`#${this.object[this.prop].getHexString()}`}set value(e){this.object[this.prop].set(e)}}function Aw(){const i=document.querySelector("#c"),e=new _M,t=new gM({antialias:!0,canvas:i,alpha:!0}),n=window.innerWidth;t.setSize(n,n/2,!1);const r=new bM().load(["resources/images/skybox/Epic_BlueSunset_Cam_2_Left+X.png","resources/images/skybox/Epic_BlueSunset_Cam_3_Right-X.png","resources/images/skybox/Epic_BlueSunset_Cam_4_Up+Y.png","resources/images/skybox/Epic_BlueSunset_Cam_5_Down-Y.png","resources/images/skybox/Epic_BlueSunset_Cam_0_Front+Z.png","resources/images/skybox/Epic_BlueSunset_Cam_1_Back-Z.png"]);e.background=r;const o=bw();function a(){o.updateProjectionMatrix()}const c=new cw(o,i);c.target.set(0,0,0),c.update();const l=11657727,u=12155424,h=2,d=new np(l,u,h);d.position.set(-1,20,4),e.add(d);const p=16777215,_=9,x=new ip(p,_);x.position.set(0,20,0),e.add(x);const m=6612967,f=100,T=new Ko(m,f);T.position.set(-2,2,3.7),T.target.position.set(-2,.25,3.7),T.angle=Math.PI/12,T.penumbra=1,e.add(T),e.add(T.target),new bh(T);const v=new Ko(m,f);v.position.set(2,2,3.7),v.target.position.set(2,.25,3.7),v.angle=Math.PI/12,v.penumbra=1,e.add(v),e.add(v.target),new bh(v);const A=new pi(.1,.1,.1);ne(A,4500104,[-2,-.65,-2]),ne(A,11848777,[-2.15,-.65,-2]),ne(A,15093323,[-2.3,-.65,-2]),ne(A,11463168,[-2.22,-.55,-2]),ne(A,47316,[-2.07,-.55,-2]),ne(A,9795021,[-2.15,-.45,-2]);const P=new pi(.1,.1,.1);P.rotateY(Math.PI/4),ne(P,11848777,[.15,-.53,-2.3]),ne(P,15093323,[0,-.53,-2.3]),ne(P,11463168,[-.15,-.53,-2.3]),ne(P,47316,[-.07,-.43,-2.3]),ne(P,9795021,[.08,-.43,-2.3]),ne(P,4500104,[0,-.33,-2.3]);const w=new Yo(4,5);ne(w,4500104,[10,10,10]);const b=new Yo(5,6);ne(b,16754470,[-10,-8,-9]);const I=new $o(4,6,20);ne(I,15753874,[-7,-3,10]);const S=new $o(2,6,20);S.rotateZ(Math.PI/1.5),S.rotateY(Math.PI/4),ne(S,5025616,[5,4,-9]);const y=new pi(7,7,7.7);y.rotateY(Math.PI/4),y.rotateX(Math.PI/3),ne(y,2201331,[8,-4,-2]);const F=new pi(7,7,7.7);F.rotateY(Math.PI/7),F.rotateX(Math.PI/4),F.rotateZ(Math.PI/3),ne(F,15037299,[-13,4,-3]);const W=1,D=1,K=1,Z=new pi(W,D,K),re=[ne(Z,8930474,[-2,.25,3.7],"resources/images/Mario_question.png"),ne(Z,16777215,[2,.25,3.7],"resources/images/wall.jpg")];new cd().load("resources/models/Windmill/windmill_001.mtl",ge=>{ge.preload();const Le=new pd;Le.setMaterials(ge),Le.load("resources/models/Windmill/windmill_001.obj",Be=>{Be.scale.set(.2,.2,.2),Be.position.set(2,-.7,-3.6),Be.rotation.y=.65*2*Math.PI,e.add(Be)})}),new cd().load("resources/models/Swimming pool/SwimmingPool.mtl",ge=>{ge.preload();const Le=new pd;Le.setMaterials(ge),Le.load("resources/models/Swimming pool/SwimmingPool.obj",Be=>{Be.scale.set(.2,.2,.2),Be.position.y=-2,e.add(Be)})});{const ie=new Gl;ie.add(o,"fov",1,180).onChange(a);const ge=new Ew(o,"near","far",.1);ie.add(ge,"min",.1,50,.1).name("near").onChange(a),ie.add(ge,"max",.1,50,.1).name("far").onChange(a),ie.addColor(new zc(d,"color"),"value").name("color"),ie.addColor(new zc(d,"color"),"value").name("skyColor"),ie.addColor(new zc(d,"groundColor"),"value").name("groundColor")}function le(ie){const ge=ie.domElement,Le=window.innerWidth,Be=window.innerWidth,j=ge.width!==Le||ge.height!==Be;return j&&ie.setSize(Le,Le/2,!1),j}function Y(ie){if(le(t)){const ge=t.domElement;o.aspect=ge.clientWidth/ge.clientHeight,o.updateProjectionMatrix()}ie*=.001,re.forEach((ge,Le)=>{const Be=1+Le*.1,j=ie*Be;ge.rotation.x=j,ge.rotation.y=j}),t.render(e,o),requestAnimationFrame(Y)}requestAnimationFrame(Y);function ne(ie,ge,Le,Be=null){const j=new tp;var he=new ga({color:ge});if(Be){const pe=j.load(Be);pe.wrapS=pr,pe.wrapT=pr,pe.repeat.set(1,1),pe.encoding=void 0,pe.minFilter=Ui,pe.magFilter=sn,he=new pa({map:pe}),he.map=pe}const ye=new Pn(ie,he);return ye.position.x=Le[0],ye.position.y=Le[1],ye.position.z=Le[2],e.add(ye),ye}}function bw(){const s=new vn(75,2,.1,30);return s.position.set(-2.4,-.3,-3.7),s}Aw();
