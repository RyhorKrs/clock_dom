let container = document.createElement('div');
container.style.cssText = 'width: 600px; height: 600px; background-color: gold; border-radius: 50%; position: relative; margin: 0 auto;';
document.body.append(container);

let time = document.createElement('div');
time.style.cssText = 'width: 150px; height: 30px; position: absolute; top: 220px; left: 225px; font-size: 25px; font-family: monospace; text-align: center;';
container.append(time);

for (let i = 1; i < 13; i++) {
    let subcontainer = document.createElement('div');
    subcontainer.style.cssText = 'width: 0px; height: 0px; position: relative; top: 50%; left: 50%; transform: rotate('+ 360/12*i +'deg);';
    container.append(subcontainer);
  
    let item = document.createElement('div');
    item.textContent = i;
    item.style.cssText = 'width: 70px; height: 70px; background-color: green; position: absolute; top: -35px; left: -35px; font-size: 30px; font-family: monospace; border-radius: 50%; text-align: center; vertical-align: middle; line-height: 70px; transform: translateY(-250px) rotate('+ -360/12*i +'deg);';
    subcontainer.append(item);
  };

let arrowSubcontainer = document.createElement('div');
arrowSubcontainer.style.cssText = 'width: 0px; height: 0px; position: relative; top: 50%; left: 50%;';
container.append(arrowSubcontainer);

let hArrow = document.createElement('div');
hArrow.style.cssText = 'width: 10px; height: 130px; background-color: black; opacity: 0.9; border-radius: 10px; position: absolute; bottom: 0; left: -5px; transform-origin: bottom;';
arrowSubcontainer.append(hArrow);

let minArrow = document.createElement('div');
minArrow.style.cssText = 'width: 6px; height: 180px; background-color: black; opacity: 0.9; border-radius: 10px; position: absolute; bottom: 0; left: -3px; transform-origin: bottom;';
arrowSubcontainer.append(minArrow);

let secArrow = document.createElement('div');
secArrow.style.cssText = 'width: 2px; height: 230px; background-color: black; opacity: 0.9; border-radius: 10px; position: absolute; bottom: 0; left: -1px; transform-origin: bottom;';
arrowSubcontainer.append(secArrow);


function setTime() {
    let now = new Date();
    secArrow.style.cssText += ' transform: rotate('+ 360/60*now.getSeconds() +'deg)';
    minArrow.style.cssText += ' transform: rotate('+ (360/60*now.getMinutes()+6/60*now.getSeconds()) +'deg)';
    hArrow.style.cssText += ' transform: rotate('+ (360/12*now.getHours()+30/60*now.getMinutes()) +'deg)';
    time.textContent = now.toLocaleTimeString();
};
  
setInterval(setTime, 200);