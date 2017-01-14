self.addEventListener('message', function(e) {
    console.log(e.data);
    console.log(self);
    //e.data.drawShape([100,100], new OG.HierarchyFeeder(), [50, 50]);
    self.postMessage('good');
}, false);