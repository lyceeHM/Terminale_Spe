var Module=void 0!==pyodide._module?pyodide._module:{};Module.expectedDataFileDownloads||(Module.expectedDataFileDownloads=0,Module.finishedDataFileDownloads=0),Module.expectedDataFileDownloads++,function(e){if("object"==typeof window)window.encodeURIComponent(window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/");else{if("undefined"==typeof location)throw"using preloaded data can only be done on a web page or in a web worker";encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var a="basthon.data";"function"!=typeof Module.locateFilePackage||Module.locateFile||(Module.locateFile=Module.locateFilePackage,err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));var o,t,l,d,n=Module.locateFile?Module.locateFile(a,""):a,s=e.remote_package_size,i=null,u=Module.getPreloadedPackage?Module.getPreloadedPackage(n,s):null;function r(){function a(e,a){if(!e)throw a+(new Error).stack}function o(o){Module.finishedDataFileDownloads++,a(o,"Loading data file failed."),a(o instanceof ArrayBuffer,"bad input to processPackageData");var t=new Uint8Array(o),l={data:null,cachedOffset:34549,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1043,2194,3402,4587,5761,6934,8246,9639,10788,12174,13368,14541,15725,17064,18497,19709,20983,22030,23442,24761,26158,27432,28715,29784,30964,31880,32955,34053],sizes:[1043,1151,1208,1185,1174,1173,1312,1393,1149,1386,1194,1173,1184,1339,1433,1212,1274,1047,1412,1319,1397,1274,1283,1069,1180,916,1075,1098,496],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};l.data=t,LZ4=Module.LZ4,a("object"==typeof LZ4,"LZ4 not present - was your app build with  -s LZ4=1  ?"),LZ4.loadPackage({metadata:e,compressedData:l}),Module.removeRunDependency("datafile_lib/dist//basthon.data")}Module.FS_createPath("/","lib",!0,!0),Module.FS_createPath("/lib","python3.8",!0,!0),Module.FS_createPath("/lib/python3.8","site-packages",!0,!0),Module.FS_createPath("/lib/python3.8/site-packages","basthon",!0,!0),Module.addRunDependency("datafile_lib/dist//basthon.data"),Module.preloadResults||(Module.preloadResults={}),Module.preloadResults["lib/dist//basthon.data"]={fromCache:!1},u?(o(u),u=null):i=o}u||(o=n,t=s,l=function(e){i?(i(e),i=null):u=e},(d=new XMLHttpRequest).open("GET",o,!0),d.responseType="arraybuffer",d.onprogress=function(e){var a=o,l=t;if(e.total&&(l=e.total),e.loaded){d.addedTotal?Module.dataFileDownloads[a].loaded=e.loaded:(d.addedTotal=!0,Module.dataFileDownloads||(Module.dataFileDownloads={}),Module.dataFileDownloads[a]={loaded:e.loaded,total:l});var n=0,s=0,i=0;for(var u in Module.dataFileDownloads){var r=Module.dataFileDownloads[u];n+=r.total,s+=r.loaded,i++}n=Math.ceil(n*Module.expectedDataFileDownloads/i),Module.setStatus&&Module.setStatus("Downloading data... ("+s+"/"+n+")")}else Module.dataFileDownloads||Module.setStatus&&Module.setStatus("Downloading data...")},d.onerror=function(e){throw new Error("NetworkError for: "+o)},d.onload=function(e){if(!(200==d.status||304==d.status||206==d.status||0==d.status&&d.response))throw new Error(d.statusText+" : "+d.responseURL);var a=d.response;l(a)},d.send(null)),Module.calledRun?r():(Module.preRun||(Module.preRun=[]),Module.preRun.push(r))}({files:[{filename:"/lib/python3.8/site-packages/basthon/utils.py",start:0,end:2379,audio:0},{filename:"/lib/python3.8/site-packages/basthon/_patch_modules.py",start:2379,end:14641,audio:0},{filename:"/lib/python3.8/site-packages/basthon/_pyodide_base.py",start:14641,end:27775,audio:0},{filename:"/lib/python3.8/site-packages/basthon/_patch_builtins.py",start:27775,end:30053,audio:0},{filename:"/lib/python3.8/site-packages/basthon/_pyodide_console.py",start:30053,end:41648,audio:0},{filename:"/lib/python3.8/site-packages/basthon/kernel.py",start:41648,end:46214,audio:0},{filename:"/lib/python3.8/site-packages/basthon/_console.py",start:46214,end:51130,audio:0},{filename:"/lib/python3.8/site-packages/basthon/packages.py",start:51130,end:57693,audio:0},{filename:"/lib/python3.8/site-packages/basthon/__init__.py",start:57693,end:58031,audio:0}],remote_package_size:38645,package_uuid:"8dd139ec-a127-4952-96fe-024a7f5a826e"});