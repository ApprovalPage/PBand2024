(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._2024_Holiday_bkgd_1_atlas_1 = function() {
	this.initialize(img._2024_Holiday_bkgd_1_atlas_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,2542);


(lib.TweenYellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF99","rgba(255,255,153,0)"],[0,1],0,0,0,0,0,143.3).s().p("AvrPsQmgmgAApMQAApLGgmgQGgmgJLAAQJMAAGgGgQGgGgAAJLQAAJMmgGgQmgGgpMAAQpLAAmgmgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-142,284,284);


(lib.TweenWhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,143.3).s().p("AvrPsQmgmgAApMQAApLGgmgQGgmgJLAAQJMAAGgGgQGgGgAAJLQAAJMmgGgQmgGgpMAAQpLAAmgmgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-142,284,284);


(lib.light1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// white
	this.instance = new lib.TweenWhite("synched",0);
	this.instance.setTransform(0.05,0.05,0.18,0.18,0,0,0,0.3,0.3);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.TweenYellow("synched",0);
	this.instance_1.setTransform(0.05,0.05,0.18,0.18,0,0,0,0.3,0.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},2).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},14).to({_off:true,alpha:0},2).wait(32));

	// yellow
	this.instance_2 = new lib.TweenYellow("synched",0);
	this.instance_2.setTransform(0.05,0.05,0.3,0.3,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},14).to({alpha:0},2).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-42.6,85.2,85.2);


// stage content:
(lib._2024Holidaybkgd1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// p5_copy
	this.instance = new lib.light1();
	this.instance.setTransform(523.6,652.05,1,1,0,0,0,-143.4,-306.4);
	this.instance.compositeOperation = "overlay";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(64));

	// p4_copy
	this.instance_1 = new lib.light1();
	this.instance_1.setTransform(405.8,569.1,1,1,0,0,0,-143.4,-306.4);
	this.instance_1.compositeOperation = "overlay";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(77));

	// p3_copy
	this.instance_2 = new lib.light1();
	this.instance_2.setTransform(318.4,674.6,1,1,0,0,0,-143.4,-306.4);
	this.instance_2.compositeOperation = "overlay";
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(68));

	// p2_copy
	this.instance_3 = new lib.light1();
	this.instance_3.setTransform(319.4,430.6,1,1,0,0,0,-143.4,-306.4);
	this.instance_3.compositeOperation = "overlay";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(80));

	// p1_copy
	this.instance_4 = new lib.light1();
	this.instance_4.setTransform(415.4,395.6,1,1,0,0,0,-143.4,-306.4);
	this.instance_4.compositeOperation = "overlay";
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(85));

	// p5
	this.instance_5 = new lib.light1();
	this.instance_5.setTransform(218.6,489.65,1,1,0,0,0,-143.4,-306.4);
	this.instance_5.compositeOperation = "overlay";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off:false},0).wait(68));

	// p4
	this.instance_6 = new lib.light1();
	this.instance_6.setTransform(86.6,583.6,1,1,0,0,0,-143.4,-306.4);
	this.instance_6.compositeOperation = "overlay";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(81));

	// p3
	this.instance_7 = new lib.light1();
	this.instance_7.setTransform(-33.4,674.6,1,1,0,0,0,-143.4,-306.4);
	this.instance_7.compositeOperation = "overlay";
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).wait(72));

	// p2
	this.instance_8 = new lib.light1();
	this.instance_8.setTransform(-33.8,529.8,1,1,0,0,0,-143.4,-306.4);
	this.instance_8.compositeOperation = "overlay";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).wait(84));

	// p1
	this.instance_9 = new lib.light1();
	this.instance_9.setTransform(109.05,388.45,1,1,0,0,0,-143.4,-306.4);
	this.instance_9.compositeOperation = "overlay";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(89));

	// BKGD_PIC
	this.instance_10 = new lib._2024_Holiday_bkgd_1_atlas_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhfTjIJMC+nAAAMAAAGQTMi+nAAAg");
	this.shape.setTransform(600,1271);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EhfTDIKMAAAmQTMC+nAAAMAAAGQTg");
	this.shape_1.setTransform(600,1271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600,1271,600,1271);
// library properties:
lib.properties = {
	id: 'D502A115D9C94F06AE8256F26BE4FD5D',
	width: 1200,
	height: 2542,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"https://raw.githubusercontent.com/ApprovalPage/PBand2024/refs/heads/main/_2024_Holiday_bkgd_1_atlas_1.jpg", id:"_2024_Holiday_bkgd_1_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D502A115D9C94F06AE8256F26BE4FD5D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;