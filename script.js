let container = document.createElement('div');
container.style.cssText = 'width: 600px; height: 600px; background-color: gold; border-radius: 50%; position: relative; margin: 0 auto;';
document.body.append(container);

for (let i = 1; i < 13; i++) {
    let subcontainer = document.createElement('div');
    subcontainer.style.cssText = 'width: 0px; height: 0px; position: relative; top: 50%; left: 50%; transform: rotate('+ 360/12*i +'deg);';
    container.append(subcontainer);
  
    let item = document.createElement('div');
    item.textContent = i;
    item.style.cssText = 'width: 70px; height: 70px; background-color: green; position: absolute; top: -35px; left: -35px; font-size: 30px; font-family: monospace; border-radius: 50%; text-align: center; vertical-align: middle; line-height: 70px; transform: translateY(-250px) rotate('+ -360/12*i +'deg);';
  subcontainer.append(item);
  };