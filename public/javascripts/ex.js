this._displayUsr(users, color);

},
_displayUsr: function(users, color) {
var container = document.getElementById('onlineusers'),
 usrToDisplay = document.createElement('p'),
 date = new Date().toTimeString().substr(0, 8),
 //将消息中的表情转换为图片
usrToDisplay.style.color = color || '#000';
usrToDisplay.innerHTML = users + 'Online';
container.appendChild(usrToDisplay);
container.scrollTop = container.scrollHeight;
},


var q = document.createElement('p');
q.textContent = user;
document.getElementById('onlineusers').appendChild(p);

               //将在线人数显示到页面顶部
document.getElementById('status').textContent = userCount + '个用户' + ' 在线';
           });
